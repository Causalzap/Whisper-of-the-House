"use client";

import {
  useId,
  useMemo,
} from "react";

import {
  GAME_DNA_TRAIT_IDS,
  GAME_DNA_TRAIT_META,
  type GameDnaProfileData,
  type GameDnaTraitId,
} from "@/lib/game-dna/recommendations";

export type GameDnaTrait =
  GameDnaProfileData["traits"][number];

export type GameDnaProfile =
  GameDnaProfileData;

type GameDnaResultsProps = {
  profile: GameDnaProfile | null;
  selectedCount: number;
  requiredCount?: number;
  className?: string;
  onReset?: () => void;
};

type PreparedTrait = {
  id: GameDnaTraitId;
  label: string;
  description: string;
  score: number;
  strengthPercentage: number;
};

type TraitState = {
  orderedTraits: PreparedTrait[];
  rankedTraits: PreparedTrait[];
  topTraits: PreparedTrait[];
  coreTraits: PreparedTrait[];
  remainingTraits: PreparedTrait[];
};

type Point = {
  x: number;
  y: number;
};

const MAX_TRAIT_SCORE = 5;
const CORE_TRAIT_COUNT = 5;

export default function GameDnaResults({
  profile,
  selectedCount,
  requiredCount = 9,
  className = "",
  onReset,
}: GameDnaResultsProps) {
  const normalizedRequiredCount =
    Math.max(
      1,
      Math.floor(requiredCount),
    );

  const isComplete =
    selectedCount >=
    normalizedRequiredCount;

  const traitState = useMemo(
    () =>
      buildTraitState(
        profile?.traits ?? [],
      ),
    [profile],
  );

  if (!isComplete || !profile) {
    return (
      <PendingResults
        selectedCount={
          selectedCount
        }
        requiredCount={
          normalizedRequiredCount
        }
        className={className}
      />
    );
  }

  return (
    <section
      aria-labelledby="game-dna-results-title"
      className={[
        "overflow-hidden rounded-[2rem]",
        "border border-violet-200/20",
        "bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_36%),linear-gradient(135deg,#16063b_0%,#08081d_52%,#28072f_100%)]",
        "text-white",
        "shadow-[0_28px_90px_-45px_rgba(76,29,149,0.95)]",
        className,
      ].join(" ")}
    >
      <div className="p-5 sm:p-7 lg:p-9">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-violet-300">
              {profile.eyebrow ??
                "Your Gaming DNA"}
            </p>

            <h2
              id="game-dna-results-title"
              className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              {profile.title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {profile.description}
            </p>
          </div>

          {onReset ? (
            <button
              type="button"
              onClick={onReset}
              className={[
                "inline-flex min-h-11 shrink-0",
                "items-center justify-center",
                "rounded-full border border-white/15",
                "bg-white/10 px-5 py-2.5",
                "text-sm font-black text-white",
                "transition hover:border-white/25",
                "hover:bg-white/15",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-violet-300",
                "focus-visible:ring-offset-2",
                "focus-visible:ring-offset-slate-950",
              ].join(" ")}
            >
              Start Over
            </button>
          ) : null}
        </header>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.86fr)] lg:items-stretch">
          <div className="min-w-0 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
                  Your Core Drivers
                </p>

                <h3 className="mt-2 text-xl font-black text-white">
                  What keeps you invested
                </h3>
              </div>

              <span className="whitespace-nowrap rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-bold text-slate-300">
                Preference strength · 0–5
              </span>
            </div>

            {traitState.topTraits.length >
            0 ? (
              <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
                {traitState.topTraits.map(
                  (trait, index) => (
                    <TopTraitCard
                      key={trait.id}
                      trait={trait}
                      rank={index + 1}
                    />
                  ),
                )}
              </div>
            ) : null}

            <div className="mt-5 rounded-2xl border border-violet-300/15 bg-black/20 p-4">
              <div className="flex gap-3">
                <InfoIcon />

                <div>
                  <h4 className="text-sm font-black text-white">
                    How to read these scores
                  </h4>

                  <p className="mt-1.5 text-xs leading-6 text-slate-300 sm:text-sm">
                    Each selected game is
                    reviewed across ten
                    gameplay traits. Your
                    score is the average
                    strength of that pattern
                    across the nine games you
                    chose.
                  </p>

                  <p className="mt-2 text-xs font-bold leading-5 text-violet-200">
                    These are preference
                    scores—not skill ratings,
                    playtime estimates, or
                    percentages that need to
                    add up to 100.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <RadarCard
            traits={
              traitState.orderedTraits
            }
          />
        </div>

        {traitState.rankedTraits.length >
        0 ? (
          <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-black/20 p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
                  Preference Breakdown
                </p>

                <h3 className="mt-2 text-xl font-black text-white">
                  Your strongest gameplay
                  patterns
                </h3>
              </div>

              <p className="max-w-lg text-xs leading-5 text-slate-400 sm:text-right">
                Longer bars mean that trait
                appeared more consistently
                across the games in your
                grid.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {traitState.coreTraits.map(
                (trait) => (
                  <TraitBar
                    key={trait.id}
                    trait={trait}
                  />
                ),
              )}
            </div>

            {traitState.remainingTraits
              .length > 0 ? (
              <details className="group mt-6 border-t border-white/10 pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl text-sm font-black text-violet-200 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-violet-300">
                  <span>
                    View all 10 traits
                  </span>

                  <ChevronIcon />
                </summary>

                <div className="mt-5 space-y-5">
                  {traitState.remainingTraits.map(
                    (trait) => (
                      <TraitBar
                        key={trait.id}
                        trait={trait}
                      />
                    ),
                  )}
                </div>
              </details>
            ) : null}
          </div>
        ) : null}

        {profile.highlights &&
        profile.highlights.length > 0 ? (
          <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 sm:p-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
                Playstyle Notes
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                What this usually means
                in practice
              </h3>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {profile.highlights.map(
                (highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <CheckIcon />

                    <p className="text-sm font-semibold leading-6 text-slate-200">
                      {highlight}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        ) : null}

        <footer className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs font-bold text-slate-400">
          <span>
            Based on your{" "}
            {normalizedRequiredCount}{" "}
            selected games
          </span>

          <span aria-hidden="true">
            ·
          </span>

          <span>
            No login required
          </span>

          <span aria-hidden="true">
            ·
          </span>

          <span>
            Your selections stay in this
            browser
          </span>

          <span aria-hidden="true">
            ·
          </span>
          
          <span>
            Game metadata and cover images from{" "}
            <a
              href="https://www.igdb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sky-700 underline decoration-sky-700/30 underline-offset-2 hover:decoration-sky-700"
            >
              IGDB
            </a>
          </span>

        </footer>
      </div>
    </section>
  );
}

function PendingResults({
  selectedCount,
  requiredCount,
  className,
}: {
  selectedCount: number;
  requiredCount: number;
  className: string;
}) {
  const remainingCount =
    Math.max(
      0,
      requiredCount -
        selectedCount,
    );

  return (
    <section
      aria-labelledby="game-dna-results-pending-title"
      className={[
        "overflow-hidden rounded-[2rem]",
        "border border-slate-200",
        "bg-white shadow-sm",
        className,
      ].join(" ")}
    >
      <div className="p-6 sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
          Your Gaming DNA
        </p>

        <h2
          id="game-dna-results-pending-title"
          className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
        >
          Complete your 3×3 games grid
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Add {remainingCount} more{" "}
          {remainingCount === 1
            ? "game"
            : "games"}{" "}
          to reveal your strongest
          playstyle preferences and
          personalized game
          recommendations.
        </p>

        <div
          className="mt-6 grid max-w-md grid-cols-9 gap-2"
          aria-label={`${selectedCount} of ${requiredCount} games selected`}
        >
          {Array.from({
            length: requiredCount,
          }).map((_, index) => {
            const isFilled =
              index < selectedCount;

            return (
              <div
                key={index}
                className={[
                  "aspect-square rounded-md",
                  "border transition",
                  isFilled
                    ? "border-violet-600 bg-violet-600"
                    : "border-slate-200 bg-slate-100",
                ].join(" ")}
              />
            );
          })}
        </div>

        <p className="mt-3 text-sm font-bold text-slate-500">
          {Math.min(
            selectedCount,
            requiredCount,
          )}{" "}
          of {requiredCount} games
          selected
        </p>
      </div>
    </section>
  );
}

function TopTraitCard({
  trait,
  rank,
}: {
  trait: PreparedTrait;
  rank: number;
}) {
  return (
    <article className="min-w-0 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="pt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-violet-300">
          #{rank}
        </span>

        <div className="flex shrink-0 items-end gap-1 whitespace-nowrap">
          <span className="text-2xl font-black leading-none text-white">
            {formatScore(
              trait.score,
            )}
          </span>

          <span className="pb-0.5 text-xs font-bold leading-none text-slate-400">
            / 5
          </span>
        </div>
      </div>

      <h4 className="mt-3 text-lg font-black leading-tight text-white">
        {trait.label}
      </h4>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">
        {trait.description}
      </p>
    </article>
  );
}

function RadarCard({
  traits,
}: {
  traits: PreparedTrait[];
}) {
  return (
    <div className="min-w-0 rounded-[1.75rem] border border-white/10 bg-black/20 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
            DNA Shape
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            Your playstyle at a glance
          </h3>
        </div>

        <span className="shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-slate-300">
          0 low · 5 high
        </span>
      </div>

      <RadarChart traits={traits} />

      <p className="mt-1 text-center text-xs leading-5 text-slate-400">
        The wider the shape extends
        toward a label, the more
        consistently that trait appears
        in your selected games.
      </p>
    </div>
  );
}

function RadarChart({
  traits,
}: {
  traits: PreparedTrait[];
}) {
  const chartTitleId =
    useId();

  const chartDescriptionId =
    useId();

  const center = 200;
  const chartRadius = 112;
  const labelRadius = 160;
  const ringCount = 5;

  const traitMap = new Map(
    traits.map((trait) => [
      trait.id,
      trait,
    ]),
  );

  const orderedTraits =
    GAME_DNA_TRAIT_IDS.map(
      (traitId) =>
        traitMap.get(traitId) ??
        createPreparedTrait(
          traitId,
          0,
        ),
    );

  const axisPoints =
    orderedTraits.map(
      (_, index) =>
        polarPoint({
          index,
          total:
            orderedTraits.length,
          radius: chartRadius,
          center,
        }),
    );

  const valuePoints =
    orderedTraits.map(
      (trait, index) =>
        polarPoint({
          index,
          total:
            orderedTraits.length,
          radius:
            chartRadius *
            (trait.score /
              MAX_TRAIT_SCORE),
          center,
        }),
    );

  return (
    <div className="mx-auto mt-3 w-full max-w-[420px]">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby={`${chartTitleId} ${chartDescriptionId}`}
        className="h-auto w-full overflow-visible"
      >
        <title id={chartTitleId}>
          Gaming DNA radar chart
        </title>

        <desc
          id={
            chartDescriptionId
          }
        >
          A ten-axis chart showing
          preference strength from zero
          to five for exploration,
          progression, systems,
          crafting, story, combat,
          strategy, puzzle, survival,
          and social play.
        </desc>

        {Array.from({
          length: ringCount,
        }).map((_, ringIndex) => {
          const radius =
            chartRadius *
            ((ringIndex + 1) /
              ringCount);

          const ringPoints =
            orderedTraits.map(
              (
                __,
                index,
              ) =>
                polarPoint({
                  index,
                  total:
                    orderedTraits.length,
                  radius,
                  center,
                }),
            );

          return (
            <polygon
              key={radius}
              points={pointsToString(
                ringPoints,
              )}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          );
        })}

        {axisPoints.map(
          (point, index) => (
            <line
              key={
                orderedTraits[index]
                  ?.id
              }
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="rgba(255,255,255,0.13)"
              strokeWidth="1"
            />
          ),
        )}

        <polygon
          points={pointsToString(
            valuePoints,
          )}
          fill="rgba(192,132,252,0.28)"
          stroke="rgb(216,180,254)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {valuePoints.map(
          (point, index) => (
            <circle
              key={
                orderedTraits[index]
                  ?.id
              }
              cx={point.x}
              cy={point.y}
              r="3.5"
              fill="rgb(244,114,182)"
              stroke="white"
              strokeWidth="1.5"
            />
          ),
        )}

        {orderedTraits.map(
          (trait, index) => {
            const labelPoint =
              polarPoint({
                index,
                total:
                  orderedTraits.length,
                radius:
                  labelRadius,
                center,
              });

            return (
              <text
                key={trait.id}
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor={getTextAnchor(
                  labelPoint.x,
                  center,
                )}
                dominantBaseline="middle"
                fill="rgb(226,232,240)"
                fontSize="10.5"
                fontWeight="800"
              >
                {getRadarLabel(
                  trait.id,
                )}
              </text>
            );
          },
        )}
      </svg>
    </div>
  );
}

function TraitBar({
  trait,
}: {
  trait: PreparedTrait;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-black text-white">
            {trait.label}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {trait.description}
          </p>
        </div>

        <span className="shrink-0 whitespace-nowrap text-sm font-black text-violet-200">
          {formatScore(
            trait.score,
          )}{" "}
          <span className="text-xs text-slate-500">
            / 5
          </span>
        </span>
      </div>

      <div
        className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-label={`${trait.label}: ${formatScore(trait.score)} out of 5`}
        aria-valuemin={0}
        aria-valuemax={
          MAX_TRAIT_SCORE
        }
        aria-valuenow={
          trait.score
        }
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-[width] duration-500"
          style={{
            width: `${trait.strengthPercentage}%`,
          }}
        />
      </div>
    </div>
  );
}

function buildTraitState(
  traits: readonly GameDnaTrait[],
): TraitState {
  const incomingTraitMap =
    new Map<
      GameDnaTraitId,
      GameDnaTrait
    >();

  for (const trait of traits) {
    if (
      isGameDnaTraitId(
        trait.id,
      )
    ) {
      incomingTraitMap.set(
        trait.id,
        trait,
      );
    }
  }

  const orderedTraits =
    GAME_DNA_TRAIT_IDS.map(
      (traitId) => {
        const incoming =
          incomingTraitMap.get(
            traitId,
          );

        return createPreparedTrait(
          traitId,
          incoming?.score ?? 0,
          incoming?.label,
          incoming?.description,
        );
      },
    );

  const rankedTraits = [
    ...orderedTraits,
  ].sort((left, right) => {
    const scoreDifference =
      right.score -
      left.score;

    if (scoreDifference !== 0) {
      return scoreDifference;
    }

    return (
      GAME_DNA_TRAIT_IDS.indexOf(
        left.id,
      ) -
      GAME_DNA_TRAIT_IDS.indexOf(
        right.id,
      )
    );
  });

  return {
    orderedTraits,
    rankedTraits,
    topTraits:
      rankedTraits.slice(0, 3),
    coreTraits:
      rankedTraits.slice(
        0,
        CORE_TRAIT_COUNT,
      ),
    remainingTraits:
      rankedTraits.slice(
        CORE_TRAIT_COUNT,
      ),
  };
}

function createPreparedTrait(
  traitId: GameDnaTraitId,
  rawScore: number,
  label?: string,
  description?: string,
): PreparedTrait {
  const score =
    clampTraitScore(rawScore);

  return {
    id: traitId,
    label:
      label ??
      GAME_DNA_TRAIT_META[
        traitId
      ].label,
    description:
      description ??
      GAME_DNA_TRAIT_META[
        traitId
      ].description,
    score,
    strengthPercentage:
      Math.round(
        (score /
          MAX_TRAIT_SCORE) *
          100,
      ),
  };
}

function clampTraitScore(
  value: number,
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      MAX_TRAIT_SCORE,
      value,
    ),
  );
}

function formatScore(
  score: number,
): string {
  const rounded =
    Math.round(score * 10) /
    10;

  return rounded.toFixed(1);
}

function isGameDnaTraitId(
  value: string,
): value is GameDnaTraitId {
  return (
    GAME_DNA_TRAIT_IDS as readonly string[]
  ).includes(value);
}

function polarPoint({
  index,
  total,
  radius,
  center,
}: {
  index: number;
  total: number;
  radius: number;
  center: number;
}): Point {
  const angle =
    -Math.PI / 2 +
    (index / total) *
      Math.PI *
      2;

  return {
    x:
      center +
      Math.cos(angle) *
        radius,
    y:
      center +
      Math.sin(angle) *
        radius,
  };
}

function pointsToString(
  points: readonly Point[],
): string {
  return points
    .map(
      (point) =>
        `${point.x.toFixed(2)},${point.y.toFixed(2)}`,
    )
    .join(" ");
}

function getTextAnchor(
  x: number,
  center: number,
):
  | "start"
  | "middle"
  | "end" {
  const difference =
    x - center;

  if (
    Math.abs(difference) < 12
  ) {
    return "middle";
  }

  return difference > 0
    ? "start"
    : "end";
}

function getRadarLabel(
  traitId: GameDnaTraitId,
): string {
  switch (traitId) {
    case "puzzle":
      return "Puzzle";

    case "social":
      return "Social";

    default:
      return GAME_DNA_TRAIT_META[
        traitId
      ].label;
  }
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-violet-300"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M10 9.1v4.2M10 6.7h.01"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-violet-300"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="m6.5 10 2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
    >
      <path
        d="m5.5 7.5 4.5 4.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}