"use client";

import Image from "next/image";

import {
  OptionSection,
} from "@/components/game-recommender/RecommenderControls";

import type {
  RecommenderGame,
} from "@/lib/game-recommender/types";

export default function FavoriteGamesSection({
  selectedGames,
  maximumCount,
  canAddMore,
  onOpenPicker,
  onRemoveGame,
}: {
  selectedGames: RecommenderGame[];
  maximumCount: number;
  canAddMore: boolean;
  onOpenPicker: () => void;
  onRemoveGame: (gameId: string) => void;
}) {
  return (
    <OptionSection
      step="04"
      eyebrow="Optional Accuracy Boost"
      title="Add games you already like"
      description={`Choose up to ${maximumCount} favorites to find games with a similar overall feel. You can skip this step.`}
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {selectedGames.map((game) => (
          <article
            key={game.id}
            className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2.5"
          >
            <div className="relative h-[72px] w-12 shrink-0 overflow-hidden rounded-lg bg-slate-200">
              <Image
                src={game.cover}
                alt={`${game.title} game cover`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm font-black leading-5 text-slate-950">
                {game.title}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                Similar-game signal
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onRemoveGame(game.id)
              }
              aria-label={`Remove ${game.title}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 transition hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <CloseIcon />
            </button>
          </article>
        ))}

        {canAddMore ? (
          <button
            type="button"
            onClick={onOpenPicker}
            className="group flex min-h-[94px] items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 px-4 text-left transition hover:border-sky-500 hover:bg-sky-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-light text-sky-600 shadow-sm transition group-hover:scale-105">
              +
            </span>

            <span>
              <span className="block text-sm font-black text-sky-800">
                Add a Favorite Game
              </span>

              <span className="mt-1 block text-xs leading-5 text-sky-700/80">
                {selectedGames.length} /{" "}
                {maximumCount} selected
              </span>
            </span>
          </button>
        ) : null}
      </div>
    </OptionSection>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="m6 6 8 8M14 6l-8 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
