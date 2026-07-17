"use client";

import Link from "next/link";

import RecommendationCard from "@/components/game-recommender/RecommendationCard";

import {
  INITIAL_VISIBLE_RESULTS,
} from "@/lib/game-recommender/config";

import {
  trackRecommenderEvent,
} from "@/lib/game-recommender/analytics";

import type {
  RecommendationResult,
} from "@/lib/game-recommender/types";

export default function RecommendationResults({
  recommendations,
  totalResultCount,
  showAllResults,
  surpriseRecommendation,
  canSurprise,
  onShowMore,
  onSurpriseMe,
  onReset,
}: {
  recommendations: RecommendationResult[];
  totalResultCount: number;
  showAllResults: boolean;
  surpriseRecommendation: RecommendationResult | null;
  canSurprise: boolean;
  onShowMore: () => void;
  onSurpriseMe: () => void;
  onReset: () => void;
}) {
  return (
    <section
      aria-labelledby="recommendation-results-title"
      className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
    >
      <header className="flex flex-col gap-4 border-b border-slate-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
            Personalized Results
          </p>

          <h2
            id="recommendation-results-title"
            className="mt-1.5 text-2xl font-black tracking-tight text-slate-950"
          >
            Games You Should Play Next
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Start with the closest overall
            match, compare a strong
            alternative, or try the wildcard
            when you want something less
            obvious.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          Start Over
        </button>
      </header>

      {recommendations.length > 0 ? (
        <>
          <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-2">
            {recommendations.map(
              (recommendation) => (
                <RecommendationCard
                  key={`${recommendation.role}-${recommendation.game.id}`}
                  recommendation={
                    recommendation
                  }
                />
              ),
            )}
          </div>

          <div className="border-t border-slate-100 px-4 py-5 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {!showAllResults &&
              totalResultCount >
                INITIAL_VISIBLE_RESULTS ? (
                <button
                  type="button"
                  onClick={onShowMore}
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:border-sky-300 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  Show{" "}
                  {totalResultCount -
                    INITIAL_VISIBLE_RESULTS}{" "}
                  More Matches
                </button>
              ) : (
                <p className="text-xs font-semibold text-slate-500">
                  Showing your strongest
                  available matches.
                </p>
              )}

              <div className="flex flex-col gap-1 sm:items-end">
                <button
                  type="button"
                  onClick={onSurpriseMe}
                  disabled={!canSurprise}
                  className={[
                    "inline-flex min-h-10 items-center justify-center rounded-full",
                    "px-4 py-2 text-sm font-black transition",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                    canSurprise
                      ? "bg-slate-950 text-white hover:bg-slate-800"
                      : "cursor-not-allowed bg-slate-200 text-slate-400",
                  ].join(" ")}
                >
                  Surprise Me
                  <ShuffleIcon />
                </button>

                <span className="text-[11px] font-semibold text-slate-400">
                  {canSurprise
                    ? "Picks from compatible games beyond the ranked results."
                    : "No additional compatible games are available yet."}
                </span>
              </div>
            </div>

            {surpriseRecommendation ? (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <RecommendationCard
                  recommendation={
                    surpriseRecommendation
                  }
                />
              </div>
            ) : null}

            <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-700">
                Want a deeper profile?
              </p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-slate-600">
                  Build a 3×3 grid of nine
                  favorite games to reveal your
                  longer-term Gaming DNA.
                </p>

                <Link
                  href="/game-dna"
                  onClick={() =>
                    trackRecommenderEvent(
                      "quick_recommender_game_dna_click",
                      {
                        source:
                          "recommendation_results",
                      },
                    )
                  }
                  className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border border-sky-300 bg-white px-4 py-2 text-xs font-black text-sky-800 transition hover:border-sky-500 hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  Build Your Gaming DNA
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-6 text-center">
          <p className="text-base font-black text-slate-800">
            No matching games found
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Try another platform, remove a
            play-mode filter, or choose a
            broader mood.
          </p>
        </div>
      )}
    </section>
  );
}

function ShuffleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
    >
      <path
        d="M4 6h2.2c1.2 0 2.1.45 2.8 1.45l2 3.1c.7 1 1.6 1.45 2.8 1.45H16m0 0-2-2m2 2-2 2M4 14h2.1c1.25 0 2.2-.5 2.9-1.55l.35-.55M16 6h-2.15c-1.15 0-2.05.42-2.75 1.35l-.35.5M16 6l-2-2m2 2-2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
