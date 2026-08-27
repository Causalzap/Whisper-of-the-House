"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Mode = "fire" | "target" | "position";
type ReportType = "bearing" | "distance";

type Point = {
  x: number;
  y: number;
};

type Sector = {
  col: number;
  row: number;
};

type Report = {
  origin: Point;
  type: ReportType;
  value: number;
};

type ChargeSolution = {
  charge: number;
  maxRange: number;
  elevation: number;
};

type FiringSolution = {
  nest: Point;
  target: Point;
  distance: number;
  bearing: number;
  recommendedCharge: number;
  recommendedElevation: number;
  alternatives: ChargeSolution[];
};

const EPSILON = 1e-9;
const MAX_CHARGES = 6;

/* -------------------------------------------------------------------------- */
/*                               Verified samples                             */
/* -------------------------------------------------------------------------- */

const FIRE_SAMPLE = {
  nest: "H3 5:5",
  target: "Q4 4:2",
};

const TARGET_SAMPLE = {
  origin1: "O6 3:0",
  type1: "bearing" as ReportType,
  value1: "258",
  origin2: "P1 1:8",
  type2: "distance" as ReportType,
  value2: "9.53",
  sector: "",
};

const POSITION_SAMPLE = {
  reference1: "P1 9:5",
  distance1: "3.72",
  reference2: "L1 7:9",
  distance2: "1.36",
  sector: "M3",
};

/* -------------------------------------------------------------------------- */
/*                              Ballistic model                               */
/* -------------------------------------------------------------------------- */

/**
 * Verified in-game samples:
 *
 * 8.92 km / 2 charges = 53.52°
 * 10.46 km / 3 charges = 41.84°
 * 13.40 km / 3 charges = 53.60°
 * 14.42 km / 3 charges = 57.68°
 *
 * elevation = distance × 12 / powder charges
 *
 * At the normal 60° maximum elevation:
 * max range = powder charges × 5 km
 */
function elevationFor(distanceKm: number, charges: number) {
  return (distanceKm * 12) / charges;
}

function maxRangeFor(charges: number) {
  return charges * 5;
}

function truncate(value: number, decimals = 2) {
  const factor = 10 ** decimals;

  return (
    Math.floor((value + Number.EPSILON) * factor) /
    factor
  );
}

function normalizeBearing(value: number) {
  return ((value % 360) + 360) % 360;
}

/* -------------------------------------------------------------------------- */
/*                            Coordinate conversion                           */
/* -------------------------------------------------------------------------- */

/**
 * Accepted examples:
 *
 * H3 5:5
 * H355
 * Q4 4:2
 * Q442
 * B10 3:9
 *
 * Each major grid = 1 km.
 * Final two digits = tenths of one grid.
 */
function parseCoordinate(input: string): Point | null {
  const compact = input
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  const match = compact.match(
    /^([A-Z])(10|[1-9])([0-9])([0-9])$/
  );

  if (!match) {
    return null;
  }

  const [, letter, rowText, subXText, subYText] =
    match;

  const col =
    letter.charCodeAt(0) - "A".charCodeAt(0);

  const row = Number(rowText);
  const subX = Number(subXText);
  const subY = Number(subYText);

  return {
    x: col + subX / 10,
    y: row - 1 + subY / 10,
  };
}

function parseSector(input: string): Sector | null {
  const compact = input
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  const match = compact.match(/^([A-Z])(10|[1-9])$/);

  if (!match) {
    return null;
  }

  return {
    col:
      match[1].charCodeAt(0) -
      "A".charCodeAt(0),
    row: Number(match[2]),
  };
}

function formatCoordinate(point: Point) {
  if (
    !Number.isFinite(point.x) ||
    !Number.isFinite(point.y)
  ) {
    return "Unknown";
  }

  if (point.x < 0 || point.y < 0) {
    return `X ${point.x.toFixed(
      2
    )}, Y ${point.y.toFixed(2)}`;
  }

  const x10 = Math.round(point.x * 10);
  const y10 = Math.round(point.y * 10);

  const col = Math.floor(x10 / 10);
  const rowZero = Math.floor(y10 / 10);

  if (
    col < 0 ||
    col > 25 ||
    rowZero < 0 ||
    rowZero > 9
  ) {
    return `X ${point.x.toFixed(
      2
    )}, Y ${point.y.toFixed(2)}`;
  }

  const letter = String.fromCharCode(
    "A".charCodeAt(0) + col
  );

  const row = rowZero + 1;

  const subX = x10 % 10;
  const subY = y10 % 10;

  return `${letter}${row} ${subX}:${subY}`;
}

/* -------------------------------------------------------------------------- */
/*                              Map mathematics                               */
/* -------------------------------------------------------------------------- */

function distanceBetween(a: Point, b: Point) {
  return Math.hypot(
    b.x - a.x,
    b.y - a.y
  );
}

/**
 * IRON NEST bearing:
 *
 * 0 / 360 = north
 * 90 = east
 * 180 = south
 * 270 = west
 */
function bearingBetween(from: Point, to: Point) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  return normalizeBearing(
    (Math.atan2(dx, dy) * 180) / Math.PI
  );
}

function bearingDirection(bearing: number): Point {
  const radians =
    (normalizeBearing(bearing) * Math.PI) / 180;

  return {
    x: Math.sin(radians),
    y: Math.cos(radians),
  };
}

function subtract(a: Point, b: Point): Point {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}

function dot(a: Point, b: Point) {
  return a.x * b.x + a.y * b.y;
}

function cross(a: Point, b: Point) {
  return a.x * b.y - a.y * b.x;
}

function dedupePoints(points: Point[]) {
  const output: Point[] = [];

  for (const point of points) {
    const duplicate = output.some(
      (existing) =>
        distanceBetween(existing, point) < 0.001
    );

    if (!duplicate) {
      output.push(point);
    }
  }

  return output;
}

function insideSector(
  point: Point,
  sector: Sector
) {
  const minX = sector.col;
  const maxX = sector.col + 1;

  const minY = sector.row - 1;
  const maxY = sector.row;

  return (
    point.x >= minX - EPSILON &&
    point.x <= maxX + EPSILON &&
    point.y >= minY - EPSILON &&
    point.y <= maxY + EPSILON
  );
}

/* -------------------------------------------------------------------------- */
/*                            Report intersections                            */
/* -------------------------------------------------------------------------- */

/**
 * Bearing + bearing.
 */
function intersectBearingReports(
  a: Point,
  bearingA: number,
  b: Point,
  bearingB: number
): Point[] {
  const da = bearingDirection(bearingA);
  const db = bearingDirection(bearingB);

  const delta = subtract(b, a);
  const denominator = cross(da, db);

  if (Math.abs(denominator) < EPSILON) {
    return [];
  }

  const t =
    cross(delta, db) / denominator;

  const u =
    cross(delta, da) / denominator;

  // Bearings are forward rays, not infinite lines.
  if (t < 0 || u < 0) {
    return [];
  }

  return [
    {
      x: a.x + da.x * t,
      y: a.y + da.y * t,
    },
  ];
}

/**
 * Bearing + distance.
 */
function intersectBearingDistance(
  bearingOrigin: Point,
  bearing: number,
  distanceOrigin: Point,
  radius: number
): Point[] {
  const direction =
    bearingDirection(bearing);

  const f = subtract(
    bearingOrigin,
    distanceOrigin
  );

  const quadraticB =
    2 * dot(f, direction);

  const quadraticC =
    dot(f, f) - radius * radius;

  const discriminant =
    quadraticB * quadraticB -
    4 * quadraticC;

  if (discriminant < -EPSILON) {
    return [];
  }

  const sqrt = Math.sqrt(
    Math.max(0, discriminant)
  );

  const candidates = [
    (-quadraticB - sqrt) / 2,
    (-quadraticB + sqrt) / 2,
  ];

  return dedupePoints(
    candidates
      .filter((t) => t >= 0)
      .map((t) => ({
        x:
          bearingOrigin.x +
          direction.x * t,
        y:
          bearingOrigin.y +
          direction.y * t,
      }))
  );
}

/**
 * Distance + distance.
 */
function intersectDistanceReports(
  a: Point,
  radiusA: number,
  b: Point,
  radiusB: number
): Point[] {
  const dx = b.x - a.x;
  const dy = b.y - a.y;

  const d = Math.hypot(dx, dy);

  if (d < EPSILON) {
    return [];
  }

  if (d > radiusA + radiusB + EPSILON) {
    return [];
  }

  if (
    d <
    Math.abs(radiusA - radiusB) -
      EPSILON
  ) {
    return [];
  }

  const along =
    (radiusA * radiusA -
      radiusB * radiusB +
      d * d) /
    (2 * d);

  const hSquared =
    radiusA * radiusA -
    along * along;

  if (hSquared < -EPSILON) {
    return [];
  }

  const h = Math.sqrt(
    Math.max(0, hSquared)
  );

  const baseX =
    a.x + (along * dx) / d;

  const baseY =
    a.y + (along * dy) / d;

  const offsetX =
    (-dy * h) / d;

  const offsetY =
    (dx * h) / d;

  if (h < EPSILON) {
    return [
      {
        x: baseX,
        y: baseY,
      },
    ];
  }

  return dedupePoints([
    {
      x: baseX + offsetX,
      y: baseY + offsetY,
    },
    {
      x: baseX - offsetX,
      y: baseY - offsetY,
    },
  ]);
}

function solveReports(
  first: Report,
  second: Report
) {
  if (
    first.type === "bearing" &&
    second.type === "bearing"
  ) {
    return intersectBearingReports(
      first.origin,
      first.value,
      second.origin,
      second.value
    );
  }

  if (
    first.type === "bearing" &&
    second.type === "distance"
  ) {
    return intersectBearingDistance(
      first.origin,
      first.value,
      second.origin,
      second.value
    );
  }

  if (
    first.type === "distance" &&
    second.type === "bearing"
  ) {
    return intersectBearingDistance(
      second.origin,
      second.value,
      first.origin,
      first.value
    );
  }

  return intersectDistanceReports(
    first.origin,
    first.value,
    second.origin,
    second.value
  );
}

/* -------------------------------------------------------------------------- */
/*                              Firing solution                               */
/* -------------------------------------------------------------------------- */

function calculateFiringSolution(
  nest: Point,
  target: Point
): FiringSolution | null {
  const rawDistance =
    distanceBetween(nest, target);

  /**
   * The in-game firing card displays range to
   * two decimals before the ballistic calculation.
   *
   * H3 5:5 -> Q4 4:2
   * raw ≈ 8.927...
   * displayed = 8.92 km
   * 8.92 × 12 / 2 = 53.52°
   */
  const distance = truncate(
    rawDistance,
    2
  );

  if (
    distance <= 0 ||
    distance >
      maxRangeFor(MAX_CHARGES)
  ) {
    return null;
  }

  const recommendedCharge = Math.max(
    1,
    Math.ceil(
      (distance - EPSILON) / 5
    )
  );

  const recommendedElevation =
    elevationFor(
      distance,
      recommendedCharge
    );

  const alternatives: ChargeSolution[] =
    [];

  /**
   * Recommended charge is already displayed
   * separately, so only show higher-charge arcs here.
   */
  for (
    let charge = recommendedCharge + 1;
    charge <= MAX_CHARGES;
    charge += 1
  ) {
    const elevation = elevationFor(
      distance,
      charge
    );

    if (
      elevation > 0 &&
      elevation <= 60
    ) {
      alternatives.push({
        charge,
        maxRange:
          maxRangeFor(charge),
        elevation,
      });
    }
  }

  return {
    nest,
    target,
    distance,
    bearing:
      bearingBetween(nest, target),
    recommendedCharge,
    recommendedElevation,
    alternatives,
  };
}

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

function isValidReportValue(
  type: ReportType,
  value: number
) {
  if (!Number.isFinite(value)) {
    return false;
  }

  if (type === "bearing") {
    return value >= 0 && value <= 360;
  }

  return value > 0;
}

function modeLabel(mode: Mode) {
  if (mode === "target") {
    return "Locate Target";
  }

  if (mode === "position") {
    return "Find My Position";
  }

  return "Fire Solution";
}

/* -------------------------------------------------------------------------- */
/*                               UI primitives                                */
/* -------------------------------------------------------------------------- */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  step,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "number";
  step?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 dark:text-slate-400">
        {label}
      </span>

      <input
        value={value}
        type={type}
        step={step}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-600"
      />
    </label>
  );
}

function PrimaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:w-auto dark:ring-offset-slate-950"
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {children}
    </button>
  );
}

function ErrorMessage({
  message,
}: {
  message: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <div className="mt-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-200">
      {message}
    </div>
  );
}

function WarningMessage({
  message,
}: {
  message: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900 dark:border-amber-800 dark:bg-amber-950/20 dark:text-amber-200">
      {message}
    </div>
  );
}

function ExampleBar({
  text,
  result,
  onLoad,
  onClear,
}: {
  text: string;
  result: string;
  onLoad: () => void;
  onClear: () => void;
}) {
  return (
    <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3 dark:border-amber-900/60 dark:bg-amber-950/10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-400">
            Verified example
          </div>

          <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
            {text}
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900 dark:text-slate-100">
            Expected: {result}
          </p>
        </div>

        <div className="flex gap-2">
          <SecondaryButton onClick={onLoad}>
            Load example
          </SecondaryButton>

          <SecondaryButton onClick={onClear}>
            Clear
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-500">
        {label}
      </div>

      <div
        className={`mt-1 font-mono text-lg font-bold ${
          highlight
            ? "text-amber-400"
            : "text-slate-100"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function CurrentInputs({
  nest,
  target,
}: {
  nest: string;
  target: string;
}) {
  return (
    <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
        <span className="font-bold uppercase tracking-[0.12em] text-slate-400">
          Current firing inputs
        </span>

        <span className="text-slate-600 dark:text-slate-300">
          Iron Nest:{" "}
          <strong className="font-mono text-slate-950 dark:text-white">
            {nest || "Not set"}
          </strong>
        </span>

        <span className="text-slate-600 dark:text-slate-300">
          Target:{" "}
          <strong className="font-mono text-slate-950 dark:text-white">
            {target || "Not set"}
          </strong>
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Firing card                                 */
/* -------------------------------------------------------------------------- */

function FiringCard({
  solution,
}: {
  solution: FiringSolution;
}) {
  const [copied, setCopied] =
    useState(false);

  async function copyCard() {
    const text = [
      "IRON NEST FIRE MISSION",
      `Nest: ${formatCoordinate(
        solution.nest
      )}`,
      `Target: ${formatCoordinate(
        solution.target
      )}`,
      `Bearing: ${solution.bearing.toFixed(
        1
      )}°`,
      `Distance: ${solution.distance.toFixed(
        2
      )} km`,
      `Powder: ${
        solution.recommendedCharge
      }`,
      `Elevation: ${solution.recommendedElevation.toFixed(
        2
      )}°`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(
        text
      );

      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1500
      );
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-amber-500/30 bg-slate-950 text-slate-100 shadow-sm">
      <div className="border-b border-amber-500/20 bg-amber-500/10 px-5 py-3">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
          Firing Card
        </div>
      </div>

      <div className="p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Metric
            label="Iron Nest"
            value={formatCoordinate(
              solution.nest
            )}
          />

          <Metric
            label="Target"
            value={formatCoordinate(
              solution.target
            )}
          />

          <Metric
            label="Bearing"
            value={`${solution.bearing.toFixed(
              1
            )}°`}
          />

          <Metric
            label="Distance"
            value={`${solution.distance.toFixed(
              2
            )} km`}
          />

          <Metric
            label="Powder"
            value={`${solution.recommendedCharge}`}
            highlight
          />

          <Metric
            label="Elevation"
            value={`${solution.recommendedElevation.toFixed(
              2
            )}°`}
            highlight
          />
        </div>

        <div className="mt-5 rounded-lg border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Recommended solution
          </div>

          <div className="mt-2 font-mono text-base text-slate-100">
            {solution.recommendedCharge}{" "}
            powder{" "}
            {solution.recommendedCharge ===
            1
              ? "charge"
              : "charges"}{" "}
            ·{" "}
            {solution.recommendedElevation.toFixed(
              2
            )}
            °
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            Uses the lowest powder charge
            that can reach the measured
            distance.
          </p>
        </div>

        {solution.alternatives.length >
          0 && (
          <div className="mt-5">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Alternative lower arcs
            </div>

            <div className="space-y-2">
              {solution.alternatives.map(
                (item) => (
                  <div
                    key={item.charge}
                    className="grid grid-cols-3 gap-3 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2.5 text-sm"
                  >
                    <span className="text-slate-400">
                      Charge {item.charge}
                    </span>

                    <span className="text-center font-mono text-slate-200">
                      {item.elevation.toFixed(
                        2
                      )}
                      °
                    </span>

                    <span className="text-right text-slate-500">
                      ≤ {item.maxRange} km
                    </span>
                  </div>
                )
              )}
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Higher charges use more
              powder but produce a lower
              firing arc. Confirm very low
              arcs in the in-game ballistic
              calculator before committing
              an expensive shot.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={copyCard}
          className="mt-5 w-full rounded-lg border border-amber-500/40 px-4 py-2.5 text-sm font-bold text-amber-300 transition hover:bg-amber-500/10"
        >
          {copied
            ? "Copied"
            : "Copy firing card"}
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Candidate result UI                             */
/* -------------------------------------------------------------------------- */

function CandidateResults({
  title,
  candidates,
  onUse,
  actionLabel,
}: {
  title: string;
  candidates: Point[];
  onUse: (point: Point) => void;
  actionLabel: string;
}) {
  if (!candidates.length) {
    return null;
  }

  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="text-sm font-bold text-slate-950 dark:text-white">
        {title}
      </div>

      <div className="mt-3 space-y-2">
        {candidates.map(
          (point, index) => (
            <div
              key={`${point.x}-${point.y}`}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.12em] text-slate-500">
                  {candidates.length > 1
                    ? `Candidate ${
                        index + 1
                      }`
                    : "Calculated position"}
                </div>

                <div className="mt-1 font-mono text-lg font-bold text-slate-950 dark:text-white">
                  {formatCoordinate(point)}
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onUse(point)
                }
                className="rounded-lg border border-amber-500/40 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-amber-500/10"
              >
                {actionLabel}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Report editor                                */
/* -------------------------------------------------------------------------- */

function ReportEditor({
  title,
  origin,
  setOrigin,
  reportType,
  setReportType,
  value,
  setValue,
}: {
  title: string;
  origin: string;
  setOrigin: (value: string) => void;
  reportType: ReportType;
  setReportType: (
    type: ReportType
  ) => void;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mb-4 text-sm font-bold text-slate-950 dark:text-white">
        {title}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field
          label="Report origin"
          value={origin}
          onChange={setOrigin}
          placeholder="O6 3:0"
        />

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 dark:text-slate-400">
            Report type
          </span>

          <select
            value={reportType}
            onChange={(event) =>
              setReportType(
                event.target
                  .value as ReportType
              )
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          >
            <option value="bearing">
              Bearing
            </option>

            <option value="distance">
              Distance
            </option>
          </select>
        </label>

        <Field
          label={
            reportType === "bearing"
              ? "Bearing (degrees)"
              : "Distance (km)"
          }
          value={value}
          onChange={setValue}
          placeholder={
            reportType === "bearing"
              ? "258"
              : "9.53"
          }
          type="number"
          step="0.01"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Main tool                                  */
/* -------------------------------------------------------------------------- */

export default function FireMissionHelper() {
  const toolRef =
    useRef<HTMLElement | null>(null);

  const [mode, setMode] =
    useState<Mode>("fire");

  /* ------------------------------ Fire mode ------------------------------ */

  const [
    nestCoordinate,
    setNestCoordinate,
  ] = useState(FIRE_SAMPLE.nest);

  const [
    targetCoordinate,
    setTargetCoordinate,
  ] = useState(FIRE_SAMPLE.target);

  const [
    firingSolution,
    setFiringSolution,
  ] = useState<FiringSolution | null>(
    null
  );

  const [
    fireError,
    setFireError,
  ] = useState("");

  /* ----------------------------- Target mode ----------------------------- */

  const [
    targetOrigin1,
    setTargetOrigin1,
  ] = useState(TARGET_SAMPLE.origin1);

  const [
    targetType1,
    setTargetType1,
  ] = useState<ReportType>(
    TARGET_SAMPLE.type1
  );

  const [
    targetValue1,
    setTargetValue1,
  ] = useState(TARGET_SAMPLE.value1);

  const [
    targetOrigin2,
    setTargetOrigin2,
  ] = useState(TARGET_SAMPLE.origin2);

  const [
    targetType2,
    setTargetType2,
  ] = useState<ReportType>(
    TARGET_SAMPLE.type2
  );

  const [
    targetValue2,
    setTargetValue2,
  ] = useState(TARGET_SAMPLE.value2);

  const [
    targetKnownSector,
    setTargetKnownSector,
  ] = useState(TARGET_SAMPLE.sector);

  const [
    targetCandidates,
    setTargetCandidates,
  ] = useState<Point[]>([]);

  const [
    targetError,
    setTargetError,
  ] = useState("");

  const [
    targetWarning,
    setTargetWarning,
  ] = useState("");

  /* ---------------------------- Position mode ---------------------------- */

  const [
    positionReference1,
    setPositionReference1,
  ] = useState(
    POSITION_SAMPLE.reference1
  );

  const [
    positionDistance1,
    setPositionDistance1,
  ] = useState(
    POSITION_SAMPLE.distance1
  );

  const [
    positionReference2,
    setPositionReference2,
  ] = useState(
    POSITION_SAMPLE.reference2
  );

  const [
    positionDistance2,
    setPositionDistance2,
  ] = useState(
    POSITION_SAMPLE.distance2
  );

  const [
    positionKnownSector,
    setPositionKnownSector,
  ] = useState(
    POSITION_SAMPLE.sector
  );

  const [
    positionCandidates,
    setPositionCandidates,
  ] = useState<Point[]>([]);

  const [
    positionError,
    setPositionError,
  ] = useState("");

  const [
    positionWarning,
    setPositionWarning,
  ] = useState("");

  /* ---------------------------- Derived copy ----------------------------- */

  const modeDescription = useMemo(() => {
    if (mode === "target") {
      return "Combine two listening-post or spotter reports to estimate the target position.";
    }

    if (mode === "position") {
      return "Use two distance reports after an Emergency Move to recover your Iron Nest position.";
    }

    return "Enter your Iron Nest and target coordinates to get the bearing, range, powder charge, and elevation.";
  }, [mode]);

  /* -------------------------- Prevent stale UI --------------------------- */

  useEffect(() => {
    setFiringSolution(null);
    setFireError("");
  }, [
    nestCoordinate,
    targetCoordinate,
  ]);

  useEffect(() => {
    setTargetCandidates([]);
    setTargetError("");
    setTargetWarning("");
  }, [
    targetOrigin1,
    targetType1,
    targetValue1,
    targetOrigin2,
    targetType2,
    targetValue2,
    targetKnownSector,
  ]);

  useEffect(() => {
    setPositionCandidates([]);
    setPositionError("");
    setPositionWarning("");
  }, [
    positionReference1,
    positionDistance1,
    positionReference2,
    positionDistance2,
    positionKnownSector,
  ]);

  /* ----------------------------- Navigation ------------------------------ */

  function scrollToTool() {
    window.requestAnimationFrame(() => {
      toolRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function continueToFire() {
    setMode("fire");
    scrollToTool();
  }

  /* ----------------------------- Fire logic ------------------------------ */

  function calculateFire() {
    setFireError("");
    setFiringSolution(null);

    const nest = parseCoordinate(
      nestCoordinate
    );

    const target = parseCoordinate(
      targetCoordinate
    );

    if (!nest) {
      setFireError(
        "Enter the Iron Nest position in a format such as H3 5:5."
      );
      return;
    }

    if (!target) {
      setFireError(
        "Enter the target position in a format such as Q4 4:2."
      );
      return;
    }

    const solution =
      calculateFiringSolution(
        nest,
        target
      );

    if (!solution) {
      setFireError(
        "That target is either at zero range or beyond the 30 km maximum supported by six powder charges."
      );
      return;
    }

    setFiringSolution(solution);
  }

  /* ---------------------------- Target logic ----------------------------- */

  function locateTarget() {
    setTargetError("");
    setTargetWarning("");
    setTargetCandidates([]);

    const origin1 =
      parseCoordinate(targetOrigin1);

    const origin2 =
      parseCoordinate(targetOrigin2);

    const value1 =
      Number(targetValue1);

    const value2 =
      Number(targetValue2);

    if (!origin1 || !origin2) {
      setTargetError(
        "Enter both report origins as exact IRON NEST coordinates."
      );
      return;
    }

    if (
      !isValidReportValue(
        targetType1,
        value1
      ) ||
      !isValidReportValue(
        targetType2,
        value2
      )
    ) {
      setTargetError(
        "Bearings must be between 0° and 360°. Distances must be greater than 0 km."
      );
      return;
    }

    let candidates = solveReports(
      {
        origin: origin1,
        type: targetType1,
        value: value1,
      },
      {
        origin: origin2,
        type: targetType2,
        value: value2,
      }
    );

    if (!candidates.length) {
      setTargetError(
        "Those reports do not produce a usable intersection. Recheck the report origins, bearing direction, or distance."
      );
      return;
    }

    /**
     * Known Sector is a hint here, not a hard failure.
     *
     * Listening-post values are rounded and a mathematically
     * exact intersection can land just across a grid boundary.
     */
    if (targetKnownSector.trim()) {
      const sector = parseSector(
        targetKnownSector
      );

      if (!sector) {
        setTargetError(
          "Known sector should look like G4, M3, or B10."
        );
        return;
      }

      const inside =
        candidates.filter((point) =>
          insideSector(point, sector)
        );

      if (inside.length > 0) {
        candidates = inside;
      } else {
        setTargetWarning(
          `No exact report intersection falls inside ${targetKnownSector
            .trim()
            .toUpperCase()}. Showing the raw intersection instead because listening-post values can be rounded near grid boundaries.`
        );
      }
    }

    setTargetCandidates(candidates);
  }

  /* --------------------------- Position logic ---------------------------- */

  function findPosition() {
    setPositionError("");
    setPositionWarning("");
    setPositionCandidates([]);

    const reference1 =
      parseCoordinate(
        positionReference1
      );

    const reference2 =
      parseCoordinate(
        positionReference2
      );

    const distance1 =
      Number(positionDistance1);

    const distance2 =
      Number(positionDistance2);

    if (!reference1 || !reference2) {
      setPositionError(
        "Enter both reference positions as exact IRON NEST coordinates."
      );
      return;
    }

    if (
      !Number.isFinite(distance1) ||
      !Number.isFinite(distance2) ||
      distance1 <= 0 ||
      distance2 <= 0
    ) {
      setPositionError(
        "Enter a positive distance for both position reports."
      );
      return;
    }

    let candidates =
      intersectDistanceReports(
        reference1,
        distance1,
        reference2,
        distance2
      );

    if (!candidates.length) {
      setPositionError(
        "Those two distance reports do not intersect. Recheck the reference coordinates or distances."
      );
      return;
    }

    if (positionKnownSector.trim()) {
      const sector = parseSector(
        positionKnownSector
      );

      if (!sector) {
        setPositionError(
          "Known sector should look like M3."
        );
        return;
      }

      const inside =
        candidates.filter((point) =>
          insideSector(point, sector)
        );

      if (inside.length > 0) {
        candidates = inside;
      } else {
        setPositionWarning(
          `Neither exact intersection falls inside ${positionKnownSector
            .trim()
            .toUpperCase()}. Showing the raw candidates so you can recheck the rounded position reports.`
        );
      }
    }

    setPositionCandidates(candidates);
  }

  /* ----------------------------- Use result ------------------------------ */

  function useTarget(point: Point) {
    setTargetCoordinate(
      formatCoordinate(point)
    );

    continueToFire();
  }

  function usePosition(point: Point) {
    setNestCoordinate(
      formatCoordinate(point)
    );

    continueToFire();
  }

  /* --------------------------- Example controls -------------------------- */

  function loadFireSample() {
    setNestCoordinate(FIRE_SAMPLE.nest);
    setTargetCoordinate(
      FIRE_SAMPLE.target
    );
    setFiringSolution(null);
    setFireError("");
  }

  function clearFire() {
    setNestCoordinate("");
    setTargetCoordinate("");
    setFiringSolution(null);
    setFireError("");
  }

  function loadTargetSample() {
    setTargetOrigin1(
      TARGET_SAMPLE.origin1
    );
    setTargetType1(
      TARGET_SAMPLE.type1
    );
    setTargetValue1(
      TARGET_SAMPLE.value1
    );

    setTargetOrigin2(
      TARGET_SAMPLE.origin2
    );
    setTargetType2(
      TARGET_SAMPLE.type2
    );
    setTargetValue2(
      TARGET_SAMPLE.value2
    );

    setTargetKnownSector("");
  }

  function clearTarget() {
    setTargetOrigin1("");
    setTargetType1("bearing");
    setTargetValue1("");

    setTargetOrigin2("");
    setTargetType2("distance");
    setTargetValue2("");

    setTargetKnownSector("");
  }

  function loadPositionSample() {
    setPositionReference1(
      POSITION_SAMPLE.reference1
    );
    setPositionDistance1(
      POSITION_SAMPLE.distance1
    );

    setPositionReference2(
      POSITION_SAMPLE.reference2
    );
    setPositionDistance2(
      POSITION_SAMPLE.distance2
    );

    setPositionKnownSector(
      POSITION_SAMPLE.sector
    );
  }

  function clearPosition() {
    setPositionReference1("");
    setPositionDistance1("");

    setPositionReference2("");
    setPositionDistance2("");

    setPositionKnownSector("");
  }

  /* ---------------------------------------------------------------------- */

  return (
    <section
      ref={toolRef}
      className="not-prose my-8 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950 px-5 py-5 text-white">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
          Iron Nest Fire Control
        </div>

        <h2 className="mt-2 !text-2xl !font-black !tracking-tight !text-white sm:!text-3xl">
          Fire Mission Helper
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
          {modeDescription}
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Use only the steps you need:
          recover your position, locate a
          target, or jump straight to a
          firing solution.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
        <div
          className="grid grid-cols-3 gap-2"
          aria-label="Fire Mission Helper modes"
        >
          {(
            [
              "fire",
              "target",
              "position",
            ] as Mode[]
          ).map((item) => (
            <ModeButton
              key={item}
              active={mode === item}
              onClick={() =>
                setMode(item)
              }
            >
              {modeLabel(item)}
            </ModeButton>
          ))}
        </div>
      </div>

      <CurrentInputs
        nest={nestCoordinate}
        target={targetCoordinate}
      />

      <div className="p-4 sm:p-6">
        {/* -------------------------------------------------------------- */}
        {/* Fire Solution                                                  */}
        {/* -------------------------------------------------------------- */}

        {mode === "fire" && (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)]">
            <div>
              <ExampleBar
                text="The tutorial firing solution from H3 5:5 to Q4 4:2."
                result="85.5° · 8.92 km · 2 powder · 53.52°"
                onLoad={loadFireSample}
                onClear={clearFire}
              />

              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Iron Nest position"
                    value={
                      nestCoordinate
                    }
                    onChange={
                      setNestCoordinate
                    }
                    placeholder="H3 5:5"
                  />

                  <Field
                    label="Target position"
                    value={
                      targetCoordinate
                    }
                    onChange={
                      setTargetCoordinate
                    }
                    placeholder="Q4 4:2"
                  />
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Coordinates can be
                  entered as{" "}
                  <strong>
                    H3 5:5
                  </strong>{" "}
                  or compactly as{" "}
                  <strong>H355</strong>.
                </p>

                <div className="mt-5">
                  <PrimaryButton
                    onClick={
                      calculateFire
                    }
                  >
                    Calculate firing
                    solution
                  </PrimaryButton>
                </div>

                <ErrorMessage
                  message={fireError}
                />
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <strong className="text-slate-950 dark:text-white">
                  Powder rule:
                </strong>{" "}
                the recommended solution
                uses the smallest powder
                charge that can reach the
                target. Each charge adds
                another 5 km of maximum
                range.
              </div>
            </div>

            <div>
              {firingSolution ? (
                <FiringCard
                  solution={
                    firingSolution
                  }
                />
              ) : (
                <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Firing card
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Enter your Iron
                      Nest and target
                      positions, then
                      calculate the firing
                      solution.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------- */}
        {/* Locate Target                                                  */}
        {/* -------------------------------------------------------------- */}

        {mode === "target" && (
          <div>
            <ExampleBar
              text="A Phantom Battery sample combining a 258° bearing from O6 3:0 with a 9.53 km distance from P1 1:8."
              result="Target near F4 9:2"
              onLoad={loadTargetSample}
              onClear={clearTarget}
            />

            <div className="space-y-4">
              <ReportEditor
                title="Report #1"
                origin={targetOrigin1}
                setOrigin={
                  setTargetOrigin1
                }
                reportType={
                  targetType1
                }
                setReportType={
                  setTargetType1
                }
                value={targetValue1}
                setValue={
                  setTargetValue1
                }
              />

              <ReportEditor
                title="Report #2"
                origin={targetOrigin2}
                setOrigin={
                  setTargetOrigin2
                }
                reportType={
                  targetType2
                }
                setReportType={
                  setTargetType2
                }
                value={targetValue2}
                setValue={
                  setTargetValue2
                }
              />

              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <Field
                  label="Known sector — optional"
                  value={
                    targetKnownSector
                  }
                  onChange={
                    setTargetKnownSector
                  }
                  placeholder="Example: G4"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Use this only when
                  another report already
                  narrows the target to a
                  grid. It acts as a
                  filter hint rather than
                  deleting a valid raw
                  intersection when
                  reports round across a
                  grid boundary.
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Cardinal directions can
                  be entered as bearings:
                  north 0°, east 90°,
                  south 180°, west 270°.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <PrimaryButton
                onClick={locateTarget}
              >
                Locate target
              </PrimaryButton>
            </div>

            <ErrorMessage
              message={targetError}
            />

            <WarningMessage
              message={targetWarning}
            />

            <CandidateResults
              title="Target position"
              candidates={
                targetCandidates
              }
              onUse={useTarget}
              actionLabel="Use for firing solution"
            />
          </div>
        )}

        {/* -------------------------------------------------------------- */}
        {/* Find My Position                                               */}
        {/* -------------------------------------------------------------- */}

        {mode === "position" && (
          <div>
            <ExampleBar
              text="An Emergency Move sample using position reports from P1 9:5 and L1 7:9, with High Command narrowing the new location to M3."
              result="Iron Nest near M3 5:0"
              onLoad={
                loadPositionSample
              }
              onClear={
                clearPosition
              }
            />

            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="text-sm font-bold text-slate-950 dark:text-white">
                Position report #1
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Reference position"
                  value={
                    positionReference1
                  }
                  onChange={
                    setPositionReference1
                  }
                  placeholder="P1 9:5"
                />

                <Field
                  label="Distance from Iron Nest"
                  value={
                    positionDistance1
                  }
                  onChange={
                    setPositionDistance1
                  }
                  placeholder="3.72"
                  type="number"
                  step="0.01"
                />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="text-sm font-bold text-slate-950 dark:text-white">
                Position report #2
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Reference position"
                  value={
                    positionReference2
                  }
                  onChange={
                    setPositionReference2
                  }
                  placeholder="L1 7:9"
                />

                <Field
                  label="Distance from Iron Nest"
                  value={
                    positionDistance2
                  }
                  onChange={
                    setPositionDistance2
                  }
                  placeholder="1.36"
                  type="number"
                  step="0.01"
                />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <Field
                label="New location sector — optional"
                value={
                  positionKnownSector
                }
                onChange={
                  setPositionKnownSector
                }
                placeholder="Example: M3"
              />

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                After an Emergency Move,
                High Command often gives
                only the grid containing
                your new location. Adding
                that sector normally
                removes the false
                intersection produced by
                the two distance circles.
              </p>
            </div>

            <div className="mt-5">
              <PrimaryButton
                onClick={findPosition}
              >
                Find Iron Nest position
              </PrimaryButton>
            </div>

            <ErrorMessage
              message={
                positionError
              }
            />

            <WarningMessage
              message={
                positionWarning
              }
            />

            <CandidateResults
              title="Iron Nest position"
              candidates={
                positionCandidates
              }
              onUse={usePosition}
              actionLabel="Use as Iron Nest"
            />
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Tabs                                      */
/* -------------------------------------------------------------------------- */

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-lg px-2 py-2.5 text-xs font-bold transition sm:text-sm ${
        active
          ? "bg-amber-500 text-slate-950"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
      }`}
    >
      {children}
    </button>
  );
}