"use client";

import Image from "next/image";
import {
  useMemo,
  useState,
} from "react";

import {
  OptionSection,
} from "@/components/game-recommender/RecommenderControls";

import type {
  RecommenderGame,
} from "@/lib/game-recommender/types";

type FavoriteGame = RecommenderGame & {
  /**
   * Present when the quick recommender is using the shared
   * IGDB-backed game catalog.
   */
  igdbId?: number;
  localId?: string;

  /**
   * During the migration from the old manual game list,
   * `cover` may still point to an old placeholder while
   * `image` points to the synced IGDB cover.
   */
  image?: string | null;
  cover?: string | null;
};

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
      description={`Choose up to ${maximumCount} favorites to make the shortlist more specific. You can skip this step.`}
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {selectedGames.map((game) => (
          <FavoriteGameCard
            key={game.id}
            game={game}
            onRemove={onRemoveGame}
          />
        ))}

        {canAddMore ? (
          <button
            type="button"
            onClick={onOpenPicker}
            className={[
              "group flex min-h-[94px]",
              "items-center justify-center gap-3",
              "rounded-2xl border-2 border-dashed",
              "border-sky-300 bg-sky-50/60",
              "px-4 text-left transition",
              "hover:border-sky-500",
              "hover:bg-sky-100/60",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
              "focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <span
              aria-hidden="true"
              className={[
                "flex h-10 w-10 shrink-0",
                "items-center justify-center",
                "rounded-full bg-white",
                "text-2xl font-light text-sky-600",
                "shadow-sm transition",
                "group-hover:scale-105",
              ].join(" ")}
            >
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

function FavoriteGameCard({
  game,
  onRemove,
}: {
  game: RecommenderGame;
  onRemove: (gameId: string) => void;
}) {
  return (
    <article
      className={[
        "flex min-w-0 items-center gap-3",
        "rounded-2xl border border-slate-200",
        "bg-slate-50 p-2.5",
      ].join(" ")}
    >
      <FavoriteGameCover
        game={game}
      />

      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-black leading-5 text-slate-950">
          {game.title}
        </p>

        <p className="mt-1 text-xs font-semibold text-slate-500">
          Helps shape your matches
        </p>
      </div>

      <button
        type="button"
        onClick={() =>
          onRemove(game.id)
        }
        aria-label={`Remove ${game.title}`}
        className={[
          "flex h-8 w-8 shrink-0",
          "items-center justify-center",
          "rounded-full bg-white",
          "text-slate-500 transition",
          "hover:bg-rose-50",
          "hover:text-rose-600",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-sky-500",
        ].join(" ")}
      >
        <CloseIcon />
      </button>
    </article>
  );
}

function FavoriteGameCover({
  game,
}: {
  game: FavoriteGame;
}) {
  const coverCandidates = useMemo(
    () =>
      getCoverCandidates(game),
    [game],
  );

  const [
    activeCandidateIndex,
    setActiveCandidateIndex,
  ] = useState(0);

  const activeCover =
    coverCandidates[
      activeCandidateIndex
    ] ?? null;

  if (!activeCover) {
    return (
      <CoverFallback
        title={game.title}
      />
    );
  }

  return (
    <div
      className={[
        "relative h-[72px] w-12 shrink-0",
        "overflow-hidden rounded-lg",
        "border border-slate-200",
        "bg-slate-200",
      ].join(" ")}
    >
      <Image
        src={activeCover}
        alt={`${game.title} game cover`}
        fill
        sizes="48px"
        quality={76}
        className="object-cover"
        onError={() => {
          setActiveCandidateIndex(
            (currentIndex) =>
              currentIndex + 1,
          );
        }}
      />
    </div>
  );
}

function getCoverCandidates(
  game: FavoriteGame,
): string[] {
  const generatedIgdbCover =
    typeof game.igdbId === "number" &&
    Number.isInteger(game.igdbId) &&
    game.igdbId > 0
      ? [
          "/images/igdb/covers",
          `${game.igdbId}-${game.localId ?? game.id}.jpg`,
        ].join("/")
      : null;

  /**
   * Prefer:
   *
   * 1. the deterministic local IGDB cover;
   * 2. the newer `image` field;
   * 3. the legacy `cover` field.
   *
   * This prevents an old valid placeholder image from winning
   * simply because it still exists at `game.cover`.
   */
  const preferredCandidates = [
    generatedIgdbCover,
    game.image,
    game.cover,
  ];

  return Array.from(
    new Set(
      preferredCandidates.filter(
        (
          candidate,
        ): candidate is string =>
          Boolean(
            candidate &&
              candidate.trim(),
          ),
      ),
    ),
  );
}

function CoverFallback({
  title,
}: {
  title: string;
}) {
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) =>
      word.charAt(0).toUpperCase(),
    )
    .join("");

  return (
    <div
      role="img"
      aria-label={`${title} cover unavailable`}
      className={[
        "flex h-[72px] w-12 shrink-0",
        "items-center justify-center",
        "rounded-lg border border-slate-200",
        "bg-gradient-to-br",
        "from-slate-200 to-slate-300",
        "px-1 text-center",
        "text-xs font-black text-slate-600",
      ].join(" ")}
    >
      {initials || "?"}
    </div>
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