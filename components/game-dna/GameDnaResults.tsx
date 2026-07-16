"use client";

import { useMemo } from "react";

export type GameDnaTrait = {
  id: string;
  label: string;

  /**
   * 可以传 0–5、0–10、0–100 等任意正数。
   * 组件会自动转换成总和为 100% 的占比。
   */
  score: number;

  description?: string;
};

export type GameDnaProfile = {
  eyebrow?: string;
  title: string;
  description: string;
  traits: GameDnaTrait[];
  highlights?: string[];
};

type GameDnaResultsProps = {
  profile: GameDnaProfile | null;
  selectedCount: number;
  requiredCount?: number;
  className?: string;
  onReset?: () => void;
};

type NormalizedTrait = GameDnaTrait & {
  percentage: number;
};

export default function GameDnaResults({
  profile,
  selectedCount,
  requiredCount = 9,
  className = "",
  onReset,
}: GameDnaResultsProps) {
  const isComplete = selectedCount >= requiredCount;

  const normalizedTraits = useMemo(() => {
    if (!profile) {
      return [];
    }

    return normalizeTraitScores(profile.traits);
  }, [profile]);

  if (!isComplete || !profile) {
    return (
      <section
        aria-labelledby="game-dna-results-pending-title"
        className={[
          "overflow-hidden rounded-[2rem] border border-slate-200",
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
            Add {Math.max(0, requiredCount - selectedCount)} more{" "}
            {requiredCount - selectedCount === 1 ? "game" : "games"} to reveal
            your strongest playstyle preferences and personalized game
            recommendations.
          </p>

          <div
            className="mt-6 grid max-w-md grid-cols-9 gap-2"
            aria-label={`${selectedCount} of ${requiredCount} games selected`}
          >
            {Array.from({ length: requiredCount }).map((_, index) => {
              const isFilled = index < selectedCount;

              return (
                <div
                  key={index}
                  className={[
                    "aspect-square rounded-md border transition",
                    isFilled
                      ? "border-violet-600 bg-violet-600"
                      : "border-slate-200 bg-slate-100",
                  ].join(" ")}
                />
              );
            })}
          </div>

          <p className="mt-3 text-sm font-bold text-slate-500">
            {Math.min(selectedCount, requiredCount)} of {requiredCount} games
            selected
          </p>
        </div>
      </section>
    );
  }

  const strongestTraits = normalizedTraits.slice(0, 3);

  return (
    <section
      aria-labelledby="game-dna-results-title"
      className={[
        "overflow-hidden rounded-[2rem] border border-violet-200",
        "bg-gradient-to-br from-violet-950 via-slate-950 to-fuchsia-950",
        "text-white shadow-[0_24px_80px_-40px_rgba(76,29,149,0.8)]",
        className,
      ].join(" ")}
    >
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-300">
              {profile.eyebrow ?? "Your Gaming DNA"}
            </p>

            <h2
              id="game-dna-results-title"
              className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              {profile.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {profile.description}
            </p>
          </div>

          {onReset ? (
            <button
              type="button"
              onClick={onReset}
              className={[
                "inline-flex min-h-11 shrink-0 items-center justify-center",
                "rounded-full border border-white/15 bg-white/10 px-5 py-2.5",
                "text-sm font-black text-white",
                "transition hover:border-white/25 hover:bg-white/15",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-violet-300 focus-visible:ring-offset-2",
                "focus-visible:ring-offset-slate-950",
              ].join(" ")}
            >
              Start Over
            </button>
          ) : null}
        </div>

        {strongestTraits.length > 0 ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {strongestTraits.map((trait, index) => (
              <article
                key={trait.id}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-violet-200">
                    #{index + 1} Trait
                  </span>

                  <span className="text-lg font-black text-white">
                    {trait.percentage}%
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-black text-white">
                  {trait.label}
                </h3>

                {trait.description ? (
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {trait.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {normalizedTraits.length > 0 ? (
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
            <h3 className="text-lg font-black text-white">
              Your strongest preferences
            </h3>

            <div className="mt-5 space-y-5">
              {normalizedTraits.map((trait) => (
                <TraitBar key={trait.id} trait={trait} />
              ))}
            </div>
          </div>
        ) : null}

        {profile.highlights && profile.highlights.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-lg font-black text-white">
              What defines your playstyle
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {profile.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckIcon />

                  <p className="text-sm font-semibold leading-6 text-slate-200">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs font-bold text-slate-400">
          <span>Based on your {requiredCount} selected games</span>
          <span aria-hidden="true">·</span>
          <span>No login required</span>
          <span aria-hidden="true">·</span>
          <span>Your selections stay in this browser</span>
        </div>
      </div>
    </section>
  );
}

function TraitBar({ trait }: { trait: NormalizedTrait }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black text-white">{trait.label}</p>

          {trait.description ? (
            <p className="mt-1 text-xs leading-5 text-slate-400">
              {trait.description}
            </p>
          ) : null}
        </div>

        <span className="shrink-0 text-sm font-black text-violet-200">
          {trait.percentage}%
        </span>
      </div>

      <div
        className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-label={`${trait.label}: ${trait.percentage}%`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={trait.percentage}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-[width] duration-500"
          style={{ width: `${trait.percentage}%` }}
        />
      </div>
    </div>
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

/**
 * 把不同量纲的 trait score 转换成总和为 100 的整数百分比。
 * 使用最大余数法，避免最终显示 99% 或 101%。
 */
function normalizeTraitScores(
  traits: GameDnaTrait[]
): NormalizedTrait[] {
  const validTraits = traits
    .filter((trait) => Number.isFinite(trait.score) && trait.score > 0)
    .map((trait) => ({
      ...trait,
      score: Math.max(0, trait.score),
    }));

  if (validTraits.length === 0) {
    return [];
  }

  const totalScore = validTraits.reduce(
    (total, trait) => total + trait.score,
    0
  );

  const calculated = validTraits.map((trait) => {
    const exactPercentage = (trait.score / totalScore) * 100;
    const floorPercentage = Math.floor(exactPercentage);

    return {
      trait,
      exactPercentage,
      floorPercentage,
      remainder: exactPercentage - floorPercentage,
    };
  });

  let remainingPoints =
    100 -
    calculated.reduce(
      (total, item) => total + item.floorPercentage,
      0
    );

  const remainderOrder = [...calculated]
    .sort((a, b) => b.remainder - a.remainder)
    .map((item) => item.trait.id);

  const percentages = new Map(
    calculated.map((item) => [
      item.trait.id,
      item.floorPercentage,
    ])
  );

  let index = 0;

  while (remainingPoints > 0 && remainderOrder.length > 0) {
    const traitId = remainderOrder[index % remainderOrder.length];

    percentages.set(
      traitId,
      (percentages.get(traitId) ?? 0) + 1
    );

    remainingPoints -= 1;
    index += 1;
  }

  return validTraits
    .map((trait) => ({
      ...trait,
      percentage: percentages.get(trait.id) ?? 0,
    }))
    .sort((a, b) => b.percentage - a.percentage);
}