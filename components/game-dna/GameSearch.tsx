"use client";

import Image from "next/image";
import {
  forwardRef,
  useMemo,
  type ChangeEvent,
} from "react";

import type { GameDnaGame } from "@/components/game-dna/GameDnaTool";

export type GameSearchProps = {
  games: GameDnaGame[];
  selectedGameIds: string[];
  selectedCount: number;
  requiredCount?: number;

  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onAddGame: (gameId: string) => void;

  /**
   * 没有搜索关键词时显示多少款默认游戏。
   * games.ts 中的排列顺序决定默认展示顺序。
   */
  popularLimit?: number;

  /**
   * 有搜索关键词时最多显示多少条结果。
   */
  searchLimit?: number;

  className?: string;
};

const GameSearch = forwardRef<HTMLInputElement, GameSearchProps>(
  function GameSearch(
    {
      games,
      selectedGameIds,
      selectedCount,
      requiredCount = 9,
      searchQuery,
      onSearchQueryChange,
      onAddGame,
      popularLimit = 8,
      searchLimit = 12,
      className = "",
    },
    ref
  ) {
    const isComplete = selectedCount >= requiredCount;

    const selectedGameIdSet = useMemo(
      () => new Set(selectedGameIds),
      [selectedGameIds]
    );

    const searchResults = useMemo(() => {
      const availableGames = games.filter(
        (game) => !selectedGameIdSet.has(game.id)
      );

      const normalizedQuery = normalizeSearchText(searchQuery);

      if (!normalizedQuery) {
        return availableGames.slice(0, popularLimit);
      }

      return availableGames
        .map((game) => ({
          game,
          score: calculateSearchScore(game, normalizedQuery),
        }))
        .filter((result) => result.score > 0)
        .sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score;
          }

          return a.game.title.localeCompare(b.game.title);
        })
        .slice(0, searchLimit)
        .map((result) => result.game);
    }, [
      games,
      popularLimit,
      searchLimit,
      searchQuery,
      selectedGameIdSet,
    ]);

    const handleInputChange = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      onSearchQueryChange(event.target.value);
    };

    const clearSearch = () => {
      onSearchQueryChange("");
    };

    return (
      <section
        aria-labelledby="game-dna-search-title"
        className={[
          "rounded-[2rem] border border-slate-200",
          "bg-white p-5 shadow-sm sm:p-6",
          "xl:sticky xl:top-6",
          className,
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
              Add a Game
            </p>

            <h2
              id="game-dna-search-title"
              className="mt-2 text-xl font-black tracking-tight text-slate-950"
            >
              Search the game library
            </h2>
          </div>

          <span className="shrink-0 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-800">
            {selectedCount} / {requiredCount}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Search by title and add the games that best represent
          your taste.
        </p>

        <label
          htmlFor="game-dna-search"
          className="sr-only"
        >
          Search for a game
        </label>

        <div className="relative mt-4">
          <SearchIcon />

          <input
            ref={ref}
            id="game-dna-search"
            type="search"
            value={searchQuery}
            onChange={handleInputChange}
            disabled={isComplete}
            placeholder={
              isComplete
                ? "Your grid is complete"
                : "Search by game title"
            }
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className={[
              "min-h-12 w-full rounded-2xl",
              "border border-slate-300 bg-white",
              "py-3 pl-11 text-sm font-semibold text-slate-950",
              searchQuery ? "pr-12" : "pr-4",
              "outline-none transition",
              "placeholder:text-slate-400",
              "focus:border-violet-500 focus:ring-4 focus:ring-violet-100",
              "disabled:cursor-not-allowed disabled:bg-slate-100",
              "disabled:text-slate-500",
            ].join(" ")}
          />

          {searchQuery && !isComplete ? (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear game search"
              className={[
                "absolute right-2 top-1/2",
                "flex h-8 w-8 -translate-y-1/2",
                "items-center justify-center rounded-full",
                "text-slate-400 transition",
                "hover:bg-slate-100 hover:text-slate-700",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-violet-500",
              ].join(" ")}
            >
              <CloseIcon />
            </button>
          ) : null}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              {searchQuery.trim()
                ? "Search results"
                : "Popular choices"}
            </p>

            {!isComplete && searchResults.length > 0 ? (
              <span
                className="text-xs font-bold text-slate-400"
                aria-live="polite"
              >
                {searchResults.length}{" "}
                {searchResults.length === 1
                  ? "result"
                  : "results"}
              </span>
            ) : null}
          </div>

          <div className="mt-3 max-h-[520px] space-y-2 overflow-y-auto pr-1">
            {isComplete ? (
              <CompleteGridNotice />
            ) : searchResults.length > 0 ? (
              searchResults.map((game) => (
                <GameSearchResult
                  key={game.id}
                  game={game}
                  onAdd={() => onAddGame(game.id)}
                />
              ))
            ) : (
              <EmptySearchState query={searchQuery} />
            )}
          </div>
        </div>

        {!isComplete ? (
          <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-semibold leading-5 text-slate-500">
            Your selections are saved in this browser, so you can
            return and continue later.
          </p>
        ) : null}
      </section>
    );
  }
);

GameSearch.displayName = "GameSearch";

export default GameSearch;

function GameSearchResult({
  game,
  onAdd,
}: {
  game: GameDnaGame;
  onAdd: () => void;
}) {
  const gameMeta = [
    game.releaseYear,
    ...(game.genres ?? []).slice(0, 2),
  ]
    .filter(
      (
        value
      ): value is string | number =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
    .join(" · ");

  return (
    <button
      type="button"
      onClick={onAdd}
      aria-label={`Add ${game.title} to your games grid`}
      className={[
        "group flex w-full items-center gap-3",
        "rounded-2xl border border-slate-200",
        "bg-white p-2.5 text-left transition",
        "hover:border-violet-300 hover:bg-violet-50",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-violet-500",
        "focus-visible:ring-offset-2",
      ].join(" ")}
    >
      <div className="relative aspect-[2/3] w-12 shrink-0 overflow-hidden rounded-lg bg-slate-200 shadow-sm">
        <Image
          src={game.cover}
          alt=""
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black text-slate-950">
          {game.title}
        </p>

        <p className="mt-1 truncate text-xs font-semibold text-slate-500">
          {gameMeta || "Video game"}
        </p>
      </div>

      <span
        aria-hidden="true"
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center",
          "rounded-full bg-violet-100",
          "text-lg font-black text-violet-700",
          "transition group-hover:bg-violet-700",
          "group-hover:text-white",
        ].join(" ")}
      >
        +
      </span>
    </button>
  );
}

function CompleteGridNotice() {
  return (
    <div
      className="rounded-2xl border border-violet-200 bg-violet-50 p-4"
      role="status"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-700 text-white">
          <CheckIcon />
        </div>

        <div>
          <p className="text-sm font-black text-violet-950">
            Your 3×3 grid is complete
          </p>

          <p className="mt-1 text-xs leading-5 text-violet-800">
            Remove a game from the grid to search for and add a
            different one.
          </p>
        </div>
      </div>
    </div>
  );
}

function EmptySearchState({
  query,
}: {
  query: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-dashed border-slate-300",
        "bg-slate-50 p-5 text-center",
      ].join(" ")}
      role="status"
    >
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
        <SearchIconStatic />
      </div>

      <p className="mt-3 text-sm font-black text-slate-700">
        No matching games found
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {query.trim()
          ? `We could not find “${query.trim()}”. Try a shorter title or another spelling.`
          : "Start typing a game title to search the library."}
      </p>
    </div>
  );
}

function calculateSearchScore(
  game: GameDnaGame,
  normalizedQuery: string
) {
  const normalizedTitle = normalizeSearchText(game.title);

  const normalizedAliases = (game.aliases ?? []).map(
    normalizeSearchText
  );

  let score = 0;

  if (normalizedTitle === normalizedQuery) {
    score += 100;
  } else if (normalizedTitle.startsWith(normalizedQuery)) {
    score += 75;
  } else if (
    normalizedTitle
      .split(" ")
      .some((word) => word.startsWith(normalizedQuery))
  ) {
    score += 60;
  } else if (normalizedTitle.includes(normalizedQuery)) {
    score += 50;
  }

  for (const alias of normalizedAliases) {
    if (alias === normalizedQuery) {
      score = Math.max(score, 70);
    } else if (alias.startsWith(normalizedQuery)) {
      score = Math.max(score, 45);
    } else if (alias.includes(normalizedQuery)) {
      score = Math.max(score, 30);
    }
  }

  /*
   * 轻微偏向标题较短的结果。
   * 例如搜索 "Hades" 时，Hades 会排在更长的扩展标题之前。
   */
  if (score > 0) {
    score += Math.max(
      0,
      10 - Math.floor(normalizedTitle.length / 10)
    );
  }

  return score;
}

function normalizeSearchText(value: string) {
  return value
    .toLocaleLowerCase("en-US")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="m12.5 12.5 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIconStatic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="m12.5 12.5 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m5.5 10 3 3 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}