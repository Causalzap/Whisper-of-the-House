"use client";

import { useMemo, useState } from "react";

import {
  DOLOC_TOWN_CROPS,
  type DolocTownCropCategory,
  type DolocTownGeneLevel,
  type DolocTownSeason,
} from "@/data/doloc-town/cropCalculatorData";

type SellMethod = "best" | "direct" | "processed";
type SortMode =
  | "profit-day"
  | "profit-tile"
  | "total-profit"
  | "growth"
  | "seed-cost";

const SEASONS: Array<{ value: DolocTownSeason; label: string }> = [
  { value: "1", label: "Light Rain" },
  { value: "2", label: "Heavy Rain" },
  { value: "3", label: "Early Dry" },
  { value: "4", label: "Harsh Dry" },
  { value: "5", label: "Indoor / Greenhouse" },
];

const CATEGORIES: DolocTownCropCategory[] = [
  "Ordinary",
  "Shrub",
  "Vine",
  "Fungal",
];

const numberFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

function formatGold(value: number) {
  return `${numberFormat.format(value)}G`;
}

export default function DolocTownCropCalculator() {
  const [season, setSeason] = useState<DolocTownSeason>("1");
  const [geneLevel, setGeneLevel] = useState<DolocTownGeneLevel>(0);
  const [sellMethod, setSellMethod] = useState<SellMethod>("best");
  const [sortMode, setSortMode] = useState<SortMode>("profit-day");
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<DolocTownCropCategory>>(
    () => new Set(CATEGORIES),
  );

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return DOLOC_TOWN_CROPS.flatMap((crop) => {
      if (!categories.has(crop.category)) return [];
      if (normalizedQuery && !crop.name.toLowerCase().includes(normalizedQuery)) {
        return [];
      }

      const geneCase = crop.geneCases.find((entry) => entry.level === geneLevel);
      const metrics = geneCase?.seasons[season];

      if (!metrics) return [];

      const direct = metrics.directProfitPerDay;
      const processed = metrics.processedProfitPerDay;

      let profitPerDay = direct;
      let revenue = metrics.directRevenue;
      let modeUsed: "Direct" | "Processed" = "Direct";

      if (sellMethod === "processed") {
        profitPerDay = processed;
        revenue = metrics.processedRevenue;
        modeUsed = "Processed";
      } else if (sellMethod === "best" && processed > direct) {
        profitPerDay = processed;
        revenue = metrics.processedRevenue;
        modeUsed = "Processed";
      }

      const profitPerTile =
        crop.cells > 0 ? profitPerDay / crop.cells : profitPerDay;
      const totalProfit = revenue - crop.seedCost;

      return [
        {
          crop,
          metrics,
          profitPerDay,
          profitPerTile,
          totalProfit,
          revenue,
          modeUsed,
        },
      ];
    }).sort((a, b) => {
      switch (sortMode) {
        case "profit-tile":
          return b.profitPerTile - a.profitPerTile;
        case "total-profit":
          return b.totalProfit - a.totalProfit;
        case "growth":
          return a.metrics.growthDays - b.metrics.growthDays;
        case "seed-cost":
          return a.crop.seedCost - b.crop.seedCost;
        case "profit-day":
        default:
          return b.profitPerDay - a.profitPerDay;
      }
    });
  }, [categories, geneLevel, query, season, sellMethod, sortMode]);

  const activeSeason =
    SEASONS.find((entry) => entry.value === season)?.label ?? "Selected season";

  const toggleCategory = (category: DolocTownCropCategory) => {
    setCategories((current) => {
      const next = new Set(current);

      if (next.has(category)) {
        if (next.size === 1) return current;
        next.delete(category);
      } else {
        next.add(category);
      }

      return next;
    });
  };

  const reset = () => {
    setSeason("1");
    setGeneLevel(0);
    setSellMethod("best");
    setSortMode("profit-day");
    setQuery("");
    setCategories(new Set(CATEGORIES));
  };

  return (
    <section
      aria-label="Doloc Town crop profit calculator"
      className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Interactive crop planner
            </p>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Find the best crop for my current farm
            </h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-5 text-slate-600">
              Filter by climate, genes, sell method, and crop type. Rankings update
              instantly.
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="w-fit rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-3 border-b border-slate-200 px-4 py-4 sm:px-5 lg:grid-cols-2 xl:grid-cols-4">
        <FilterSelect
          label="Climate period"
          value={season}
          onChange={(value) => setSeason(value as DolocTownSeason)}
          options={SEASONS.map((entry) => ({
            value: entry.value,
            label: entry.label,
          }))}
        />

        <FilterSelect
          label="Gene progress"
          value={String(geneLevel)}
          onChange={(value) =>
            setGeneLevel(Number(value) as DolocTownGeneLevel)
          }
          options={[
            { value: "0", label: "No genes" },
            { value: "1", label: "1-gene preset" },
            { value: "2", label: "2-gene preset" },
            { value: "3", label: "3-gene preset" },
          ]}
        />

        <FilterSelect
          label="How I sell"
          value={sellMethod}
          onChange={(value) => setSellMethod(value as SellMethod)}
          options={[
            { value: "best", label: "Best available value" },
            { value: "direct", label: "Direct sale only" },
            { value: "processed", label: "Processed value" },
          ]}
        />

        <FilterSelect
          label="Sort"
          value={sortMode}
          onChange={(value) => setSortMode(value as SortMode)}
          options={[
            { value: "profit-day", label: "Profit / day" },
            { value: "profit-tile", label: "Profit / tile / day" },
            { value: "total-profit", label: "Total modeled profit" },
            { value: "growth", label: "Fastest first harvest" },
            { value: "seed-cost", label: "Lowest seed cost" },
          ]}
        />
      </div>

      <div className="border-b border-slate-200 px-4 py-3 sm:px-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <label className="block lg:w-72">
            <span className="text-xs font-semibold text-slate-900">Find a crop</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Grape, Coffee, Tomato..."
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400"
            />
          </label>

          <div className="min-w-0">
            <span className="text-xs font-semibold text-slate-900">
              Crop types I can plant
            </span>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {CATEGORIES.map((category) => {
                const active = categories.has(category);

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleCategory(category)}
                    className={[
                      "rounded-full border px-2.5 py-1.5 text-xs font-semibold transition",
                      active
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-300 bg-white text-slate-600 hover:border-slate-400",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {results.length > 0 ? (
        <>
          <div className="grid gap-2 bg-slate-50 px-4 py-4 sm:grid-cols-3 sm:px-5">
            {results.slice(0, 3).map((result, index) => (
              <div
                key={result.crop.id}
                className="rounded-xl border border-slate-200 bg-white p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      #{index + 1}
                    </span>
                    <p className="truncate text-base font-bold text-slate-950">
                      {result.crop.name}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                    {result.crop.category}
                  </span>
                </div>

                <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  {formatGold(result.profitPerDay)}
                  <span className="ml-1 text-xs font-semibold text-slate-500">
                    / day
                  </span>
                </p>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  {result.modeUsed} · {formatGold(result.profitPerTile)} / tile / day
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-4 py-3 sm:px-5">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold text-slate-900">
                {results.length} matching crops
              </p>
              <p className="text-[11px] text-slate-500">
                {activeSeason} ·{" "}
                {geneLevel === 0 ? "No genes" : `${geneLevel}-gene preset`}
              </p>
            </div>

            {/* Desktop: compact result table */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[900px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-y border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                    <th className="px-3 py-2 font-semibold">#</th>
                    <th className="px-3 py-2 font-semibold">Crop</th>
                    <th className="px-3 py-2 font-semibold">Type</th>
                    <th className="px-3 py-2 font-semibold">Growth</th>
                    <th className="px-3 py-2 font-semibold">Regrow</th>
                    <th className="px-3 py-2 font-semibold">Seed</th>
                    <th className="px-3 py-2 font-semibold">Mode</th>
                    <th className="px-3 py-2 text-right font-semibold">Profit/day</th>
                    <th className="px-3 py-2 text-right font-semibold">
                      Profit/tile/day
                    </th>
                    <th className="px-3 py-2 text-right font-semibold">
                      Total profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr
                      key={result.crop.id}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="px-3 py-2 text-slate-400">{index + 1}</td>
                      <td className="px-3 py-2">
                        <div className="font-semibold text-slate-950">
                          {result.crop.name}
                        </div>
                        <div className="mt-0.5 text-[10px] text-slate-400">
                          {result.crop.footprint}
                          {result.crop.repeatHarvest ? " · repeat harvest" : ""}
                        </div>
                      </td>
                      <td className="px-3 py-2 text-slate-600">
                        {result.crop.category}
                      </td>
                      <td className="px-3 py-2 text-slate-600">
                        {numberFormat.format(result.metrics.growthDays)}d
                      </td>
                      <td className="px-3 py-2 text-slate-600">
                        {result.metrics.regrowDays > 0
                          ? `${numberFormat.format(result.metrics.regrowDays)}d`
                          : "—"}
                      </td>
                      <td className="px-3 py-2 text-slate-600">
                        {formatGold(result.crop.seedCost)}
                      </td>
                      <td className="px-3 py-2 text-slate-600">
                        {result.modeUsed}
                      </td>
                      <td className="px-3 py-2 text-right font-bold text-slate-950">
                        {formatGold(result.profitPerDay)}
                      </td>
                      <td className="px-3 py-2 text-right text-slate-700">
                        {formatGold(result.profitPerTile)}
                      </td>
                      <td className="px-3 py-2 text-right text-slate-700">
                        {formatGold(result.totalProfit)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / tablet: compact cards */}
            <div className="space-y-2 lg:hidden">
              {results.map((result, index) => (
                <article
                  key={result.crop.id}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold text-slate-400">
                          #{index + 1}
                        </span>
                        <h4 className="font-bold text-slate-950">
                          {result.crop.name}
                        </h4>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                          {result.crop.category}
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {numberFormat.format(result.metrics.growthDays)}d growth
                        {result.metrics.regrowDays > 0
                          ? ` · ${numberFormat.format(
                              result.metrics.regrowDays,
                            )}d regrow`
                          : ""}
                        {" · "}
                        {formatGold(result.crop.seedCost)} seed
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-base font-bold text-slate-950">
                        {formatGold(result.profitPerDay)}
                      </p>
                      <p className="text-[10px] text-slate-500">/ day</p>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 border-t border-slate-100 pt-2 text-[10px] text-slate-500">
                    <span>{result.modeUsed}</span>
                    <span>{formatGold(result.profitPerTile)} / tile / day</span>
                    <span>{formatGold(result.totalProfit)} total profit</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="px-4 py-8 text-center sm:px-5">
          <p className="font-semibold text-slate-900">No crop matches these filters.</p>
          <p className="mt-1 text-sm text-slate-500">
            Re-enable another crop type or change the climate period.
          </p>
        </div>
      )}

      <div className="border-t border-slate-200 bg-amber-50 px-4 py-3 text-[11px] leading-5 text-amber-950 sm:px-5">
        <strong>How to read this:</strong> processed values assume the strongest
        processing path recorded in the source data is available. Machine capacity,
        extra ingredients, weather interruptions, and idle time can reduce real
        profit. Gene levels use modeled 0–3 gene presets, not a custom gene builder.
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-900">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}