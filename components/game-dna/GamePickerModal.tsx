"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import type { GameDnaGame } from "@/lib/game-dna/recommendations";

export type GamePickerModalProps = {
  isOpen: boolean;
  games: GameDnaGame[];
  selectedGameIds: string[];

  selectedCount: number;
  requiredCount?: number;

  /**
   * 用户点击的是第几个空位。
   * 仅用于弹窗中的提示文案。
   */
  targetSlotNumber?: number | null;

  onAddGame: (gameId: string) => void;
  onClose: () => void;

  popularLimit?: number;
  searchLimit?: number;
  closeOnSelect?: boolean;
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function GamePickerModal({
  isOpen,
  games,
  selectedGameIds,
  selectedCount,
  requiredCount = 9,
  targetSlotNumber = null,
  onAddGame,
  onClose,
  popularLimit = 12,
  searchLimit = 24,
  closeOnSelect = true,
}: GamePickerModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const previousActiveElementRef =
    useRef<HTMLElement | null>(null);

  const titleId = useId();
  const descriptionId = useId();
  const resultsStatusId = useId();

  const normalizedRequiredCount = Math.max(
    1,
    Math.floor(requiredCount)
  );

  const isComplete =
    selectedCount >= normalizedRequiredCount;

  const selectedGameIdSet = useMemo(
    () => new Set(selectedGameIds),
    [selectedGameIds]
  );

  const searchResults = useMemo(() => {
    const availableGames = games.filter(
      (game) => !selectedGameIdSet.has(game.id)
    );

    const normalizedQuery =
      normalizeSearchText(searchQuery);

    if (!normalizedQuery) {
      return availableGames.slice(0, popularLimit);
    }

    return availableGames
      .map((game) => ({
        game,
        score: calculateSearchScore(
          game,
          normalizedQuery
        ),
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return a.game.title.localeCompare(
          b.game.title
        );
      })
      .slice(0, searchLimit)
      .map(({ game }) => game);
  }, [
    games,
    popularLimit,
    searchLimit,
    searchQuery,
    selectedGameIdSet,
  ]);

  /**
   * 打开弹窗时：
   * - 记录之前获得焦点的元素；
   * - 禁止背景滚动；
   * - 清空旧搜索；
   * - 自动聚焦搜索框。
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    setSearchQuery("");

    const focusTimer = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 50);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow =
        previousOverflow;

      window.requestAnimationFrame(() => {
        previousActiveElementRef.current?.focus();
      });
    };
  }, [isOpen]);

  /**
   * Esc 关闭和 Tab 焦点锁定。
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (
        event.key !== "Tab" ||
        !dialogRef.current
      ) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          FOCUSABLE_SELECTOR
        )
      ).filter(
        (element) =>
          !element.hasAttribute("disabled") &&
          element.getAttribute("aria-hidden") !==
            "true"
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSelectGame = (
    game: GameDnaGame
  ) => {
    if (
      isComplete ||
      selectedGameIdSet.has(game.id)
    ) {
      return;
    }

    onAddGame(game.id);

    if (closeOnSelect) {
      onClose();
    } else {
      setSearchQuery("");

      window.requestAnimationFrame(() => {
        searchInputRef.current?.focus();
      });
    }
  };

  const clearSearch = () => {
    setSearchQuery("");

    window.requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });
  };

  const remainingCount = Math.max(
    0,
    normalizedRequiredCount - selectedCount
  );

  return (
    <div
      className={[
        "fixed inset-0 z-[100]",
        "flex items-end justify-center",
        "bg-slate-950/60 backdrop-blur-[2px]",
        "sm:items-center sm:p-5",
      ].join(" ")}
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className={[
          "flex w-full flex-col overflow-hidden",
          "rounded-t-[1.75rem] bg-white shadow-2xl",
          "max-h-[88dvh]",
          "sm:max-w-3xl sm:rounded-[2rem]",
          "sm:border sm:border-slate-200",
          "sm:max-h-[82dvh]",
        ].join(" ")}
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div className="shrink-0 border-b border-slate-200 bg-white">
          <div className="flex items-start justify-between gap-4 px-4 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-5">
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-700">
                Choose a Game
              </p>

              <h2
                id={titleId}
                className="mt-1 text-xl font-black tracking-tight text-slate-950 sm:text-2xl"
              >
                Add a game to your grid
              </h2>

              <p
                id={descriptionId}
                className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm"
              >
                {targetSlotNumber
                  ? `Choose the game for position ${targetSlotNumber}.`
                  : "Search for a title and add it to your favorite-games grid."}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close game picker"
              className={[
                "flex h-10 w-10 shrink-0",
                "items-center justify-center rounded-full",
                "bg-slate-100 text-slate-500",
                "transition hover:bg-slate-200",
                "hover:text-slate-950",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-sky-500",
              ].join(" ")}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="px-4 pb-4 sm:px-6">
            <label
              htmlFor="game-picker-search"
              className="sr-only"
            >
              Search the game library
            </label>

            <div className="relative">
              <SearchIcon />

              <input
                ref={searchInputRef}
                id="game-picker-search"
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search by game title"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                disabled={isComplete}
                aria-describedby={resultsStatusId}
                className={[
                  "min-h-12 w-full rounded-2xl",
                  "border border-slate-300 bg-white",
                  "py-3 pl-11 pr-12",
                  "text-sm font-semibold text-slate-950",
                  "outline-none transition",
                  "placeholder:text-slate-400",
                  "focus:border-sky-500",
                  "focus:ring-4 focus:ring-sky-100",
                  "disabled:cursor-not-allowed",
                  "disabled:bg-slate-100",
                ].join(" ")}
              />

              {searchQuery && !isComplete ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className={[
                    "absolute right-2 top-1/2",
                    "flex h-8 w-8 -translate-y-1/2",
                    "items-center justify-center rounded-full",
                    "text-slate-400 transition",
                    "hover:bg-slate-100",
                    "hover:text-slate-700",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-sky-500",
                  ].join(" ")}
                >
                  <SmallCloseIcon />
                </button>
              ) : null}
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <p
                id={resultsStatusId}
                className="text-xs font-bold text-slate-500"
                aria-live="polite"
              >
                {isComplete
                  ? "Your grid is already complete."
                  : searchQuery.trim()
                    ? `${searchResults.length} ${
                        searchResults.length === 1
                          ? "result"
                          : "results"
                      }`
                    : "Popular choices"}
              </p>

              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-700">
                {selectedCount} /{" "}
                {normalizedRequiredCount}
              </span>
            </div>
          </div>
        </div>

        <div
          className={[
            "min-h-0 flex-1 overflow-y-auto",
            "bg-slate-50 px-3 py-3",
            "sm:px-5 sm:py-4",
          ].join(" ")}
        >
          {isComplete ? (
            <CompleteGridNotice onClose={onClose} />
          ) : searchResults.length > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {searchResults.map((game) => (
                <GamePickerResult
                  key={game.id}
                  game={game}
                  onSelect={() =>
                    handleSelectGame(game)
                  }
                />
              ))}
            </div>
          ) : (
            <EmptySearchState
              query={searchQuery}
              onClear={clearSearch}
            />
          )}
        </div>

        <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold text-slate-500">
              {isComplete
                ? "Remove a game before adding another."
                : `${remainingCount} ${
                    remainingCount === 1
                      ? "position"
                      : "positions"
                  } remaining`}
            </p>

            <button
              type="button"
              onClick={onClose}
              className={[
                "inline-flex min-h-10 items-center",
                "justify-center rounded-full",
                "border border-slate-300 bg-white",
                "px-4 py-2 text-sm font-black",
                "text-slate-700 transition",
                "hover:border-slate-400",
                "hover:bg-slate-50",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-sky-500",
              ].join(" ")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GamePickerResult({
  game,
  onSelect,
}: {
  game: GameDnaGame;
  onSelect: () => void;
}) {
  const metadata = [
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
      onClick={onSelect}
      aria-label={`Add ${game.title} to your grid`}
      className={[
        "group flex w-full items-center gap-3",
        "rounded-2xl border border-slate-200",
        "bg-white p-2.5 text-left shadow-sm",
        "transition",
        "hover:-translate-y-0.5",
        "hover:border-sky-300",
        "hover:shadow-md",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-sky-500",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-slate-50",
      ].join(" ")}
    >
      <div className="relative h-[72px] w-12 shrink-0 overflow-hidden rounded-lg bg-slate-200">
        <Image
          src={game.cover}
          alt=""
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-black leading-5 text-slate-950">
          {game.title}
        </p>

        <p className="mt-1 truncate text-xs font-semibold text-slate-500">
          {metadata || "Video game"}
        </p>

        {game.guideUrl ? (
          <span className="mt-1.5 inline-flex rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.1em] text-sky-700">
            Guide available
          </span>
        ) : null}
      </div>

      <span
        aria-hidden="true"
        className={[
          "flex h-9 w-9 shrink-0",
          "items-center justify-center rounded-full",
          "bg-sky-50 text-xl font-black",
          "text-sky-700 transition",
          "group-hover:bg-sky-600",
          "group-hover:text-white",
        ].join(" ")}
      >
        +
      </span>
    </button>
  );
}

function CompleteGridNotice({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-sky-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
        <CheckIcon />
      </div>

      <h3 className="mt-4 text-lg font-black text-slate-950">
        Your grid is complete
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Close the picker and remove or replace one
        of your selected games before adding another.
      </p>

      <button
        type="button"
        onClick={onClose}
        className={[
          "mt-5 inline-flex min-h-11 items-center",
          "justify-center rounded-full bg-sky-600",
          "px-5 py-2.5 text-sm font-black",
          "text-white transition",
          "hover:bg-sky-700",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-sky-500",
          "focus-visible:ring-offset-2",
        ].join(" ")}
      >
        Return to My Grid
      </button>
    </div>
  );
}

function EmptySearchState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <SearchIconStatic />
      </div>

      <h3 className="mt-4 text-base font-black text-slate-800">
        No matching games found
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {query.trim()
          ? `We could not find “${query.trim()}”. Try a shorter title, another spelling, or an alternate name.`
          : "Start typing a game title to search the library."}
      </p>

      {query.trim() ? (
        <button
          type="button"
          onClick={onClear}
          className="mt-4 text-sm font-black text-sky-700 hover:text-sky-800"
        >
          Clear search
        </button>
      ) : null}
    </div>
  );
}

function calculateSearchScore(
  game: GameDnaGame,
  normalizedQuery: string
) {
  const normalizedTitle =
    normalizeSearchText(game.title);

  const normalizedAliases = (
    game.aliases ?? []
  ).map(normalizeSearchText);

  const titleWords =
    normalizedTitle.split(" ");

  let score = 0;

  if (normalizedTitle === normalizedQuery) {
    score = 120;
  } else if (
    normalizedTitle.startsWith(normalizedQuery)
  ) {
    score = 95;
  } else if (
    titleWords.some((word) =>
      word.startsWith(normalizedQuery)
    )
  ) {
    score = 75;
  } else if (
    normalizedTitle.includes(normalizedQuery)
  ) {
    score = 60;
  }

  for (const alias of normalizedAliases) {
    if (alias === normalizedQuery) {
      score = Math.max(score, 100);
    } else if (
      alias.startsWith(normalizedQuery)
    ) {
      score = Math.max(score, 75);
    } else if (
      alias.includes(normalizedQuery)
    ) {
      score = Math.max(score, 50);
    }
  }

  if (score > 0) {
    score += Math.max(
      0,
      12 -
        Math.floor(
          normalizedTitle.length / 8
        )
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
      className="h-5 w-5"
    >
      <path
        d="m5.5 5.5 9 9m0-9-9 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmallCloseIcon() {
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
      className="h-6 w-6"
    >
      <path
        d="m5 10 3.2 3.2L15 6.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}