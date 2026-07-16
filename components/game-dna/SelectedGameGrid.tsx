"use client";

import Image from "next/image";

import type { GameDnaGame } from "@/lib/game-dna/recommendations";

export type SelectedGameGridProps = {
  selectedGames: GameDnaGame[];
  requiredCount?: number;
  draggedGameId: string | null;
  isRevealed?: boolean;

  onOpenGamePicker: (slotNumber: number) => void;
  onReveal: () => void;
  onRemoveGame: (gameId: string) => void;
  onMoveGame: (
    gameId: string,
    direction: "previous" | "next"
  ) => void;
  onDragStart: (gameId: string) => void;
  onDragEnd: () => void;
  onDropGame: (targetGameId: string) => void;

  className?: string;
};

export default function SelectedGameGrid({
  selectedGames,
  requiredCount = 9,
  draggedGameId,
  isRevealed = false,
  onOpenGamePicker,
  onReveal,
  onRemoveGame,
  onMoveGame,
  onDragStart,
  onDragEnd,
  onDropGame,
  className = "",
}: SelectedGameGridProps) {
  const normalizedRequiredCount = Math.max(
    1,
    Math.floor(requiredCount)
  );

  const visibleSelectedGames = selectedGames.slice(
    0,
    normalizedRequiredCount
  );

  const selectedCount = visibleSelectedGames.length;

  const remainingCount = Math.max(
    0,
    normalizedRequiredCount - selectedCount
  );

  const isComplete =
    selectedCount >= normalizedRequiredCount;

  const nextAvailableSlot = Math.min(
    selectedCount + 1,
    normalizedRequiredCount
  );

  return (
    <section
      aria-labelledby="selected-games-title"
      className={[
        "overflow-hidden rounded-[1.5rem]",
        "border border-slate-200 bg-white",
        "shadow-sm",
        className,
      ].join(" ")}
    >
      <header className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3 sm:px-5 sm:py-4">
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-sky-700">
            Your Games
          </p>

          <h2
            id="selected-games-title"
            className="mt-1 text-lg font-black tracking-tight text-slate-950 sm:text-xl"
          >
            Build Your 3×3 Grid
          </h2>
        </div>

        <div
          className={[
            "shrink-0 rounded-full px-3 py-1.5",
            "text-xs font-black",
            isComplete
              ? "bg-sky-100 text-sky-800"
              : "bg-slate-100 text-slate-600",
          ].join(" ")}
          aria-label={`${selectedCount} of ${normalizedRequiredCount} games selected`}
        >
          {selectedCount} / {normalizedRequiredCount}
        </div>
      </header>

      <div className="p-3 sm:p-5">
        <div
          className="mx-auto grid w-full max-w-[620px] grid-cols-3 gap-2 sm:gap-3"
          aria-label="Selected favorite games"
        >
          {Array.from({
            length: normalizedRequiredCount,
          }).map((_, index) => {
            const game = visibleSelectedGames[index];
            const slotNumber = index + 1;

            if (!game) {
              const isNextSlot =
                slotNumber === nextAvailableSlot;

              return (
                <EmptyGridSlot
                  key={`empty-${slotNumber}`}
                  slotNumber={slotNumber}
                  isNextSlot={isNextSlot}
                  disabled={!isNextSlot || isComplete}
                  onClick={() =>
                    onOpenGamePicker(slotNumber)
                  }
                />
              );
            }

            return (
              <SelectedGameCard
                key={game.id}
                game={game}
                position={index}
                totalSelected={selectedCount}
                isDragging={
                  draggedGameId === game.id
                }
                onRemove={() =>
                  onRemoveGame(game.id)
                }
                onMovePrevious={() =>
                  onMoveGame(
                    game.id,
                    "previous"
                  )
                }
                onMoveNext={() =>
                  onMoveGame(game.id, "next")
                }
                onDragStart={() =>
                  onDragStart(game.id)
                }
                onDragEnd={onDragEnd}
                onDrop={() =>
                  onDropGame(game.id)
                }
              />
            );
          })}
        </div>

        <div
          className="mt-3 flex min-h-6 items-center justify-between gap-4"
          aria-live="polite"
        >
          <p
            className={[
              "text-xs font-bold sm:text-sm",
              isComplete
                ? "text-sky-700"
                : "text-slate-500",
            ].join(" ")}
          >
            {isComplete
              ? "Your grid is ready."
              : `Choose ${remainingCount} more ${
                  remainingCount === 1
                    ? "game"
                    : "games"
                }.`}
          </p>

          {selectedCount > 1 ? (
            <p className="hidden text-xs font-semibold text-slate-400 sm:block">
              Drag covers to reorder
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onReveal}
          disabled={!isComplete || isRevealed}
          className={[
            "mt-4 inline-flex min-h-11 w-full",
            "items-center justify-center rounded-full",
            "px-5 py-2.5 text-sm font-black",
            "transition",
            isComplete && !isRevealed
              ? [
                  "bg-sky-600 text-white shadow-sm",
                  "hover:-translate-y-0.5",
                  "hover:bg-sky-700 hover:shadow-md",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-sky-500",
                  "focus-visible:ring-offset-2",
                ].join(" ")
              : [
                  "cursor-not-allowed",
                  "bg-slate-100 text-slate-400",
                ].join(" "),
          ].join(" ")}
        >
          {isRevealed
            ? "Gaming DNA Revealed"
            : isComplete
              ? "Reveal My Gaming DNA"
              : `Add ${remainingCount} More ${
                  remainingCount === 1
                    ? "Game"
                    : "Games"
                }`}

          <SparkIcon />
        </button>

        <p className="mt-2 text-center text-[11px] font-semibold leading-5 text-slate-400">
          Your result is calculated from the gameplay traits
          shared across all nine games.
        </p>
      </div>
    </section>
  );
}

type SelectedGameCardProps = {
  game: GameDnaGame;
  position: number;
  totalSelected: number;
  isDragging: boolean;

  onRemove: () => void;
  onMovePrevious: () => void;
  onMoveNext: () => void;
  onDragStart: () => void;
  onDragEnd: () => void;
  onDrop: () => void;
};

function SelectedGameCard({
  game,
  position,
  totalSelected,
  isDragging,
  onRemove,
  onMovePrevious,
  onMoveNext,
  onDragStart,
  onDragEnd,
  onDrop,
}: SelectedGameCardProps) {
  return (
    <article
      draggable
      style={{ aspectRatio: "1 / 1" }}
      onDragStart={(event) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData(
          "text/plain",
          game.id
        );

        onDragStart();
      }}
      onDragEnd={onDragEnd}
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      }}
      onDrop={(event) => {
        event.preventDefault();
        onDrop();
      }}
      className={[
        "group relative min-w-0 overflow-hidden",
        "rounded-xl border bg-slate-200",
        "shadow-sm transition sm:rounded-2xl",
        isDragging
          ? "scale-[0.97] border-sky-400 opacity-50"
          : [
              "cursor-grab border-slate-200",
              "hover:-translate-y-0.5",
              "hover:border-sky-300",
              "hover:shadow-md",
              "active:cursor-grabbing",
            ].join(" "),
      ].join(" ")}
    >
      <Image
        src={game.cover}
        alt={`${game.title} game cover`}
        fill
        sizes="(max-width: 640px) 31vw, (max-width: 1024px) 28vw, 200px"
        className="pointer-events-none object-cover"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/15"
      />

      <div className="absolute inset-x-0 bottom-0 px-2 pb-2 pt-8 sm:px-3 sm:pb-3 sm:pt-12">
        <p className="line-clamp-2 text-[10px] font-black leading-3.5 text-white sm:text-sm sm:leading-5">
          {game.title}
        </p>

        {game.releaseYear ? (
          <p className="mt-0.5 hidden text-xs font-bold text-white/70 sm:block">
            {game.releaseYear}
          </p>
        ) : null}
      </div>

      <div
        className={[
          "absolute left-1.5 top-1.5",
          "flex h-6 min-w-6 items-center",
          "justify-center rounded-full",
          "bg-black/70 px-1.5",
          "text-[10px] font-black text-white",
          "backdrop-blur-sm",
          "sm:left-2 sm:top-2",
          "sm:h-7 sm:min-w-7 sm:px-2 sm:text-xs",
        ].join(" ")}
        aria-label={`Position ${position + 1}`}
      >
        {position + 1}
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onRemove();
        }}
        aria-label={`Remove ${game.title} from your grid`}
        className={[
          "absolute right-1.5 top-1.5",
          "flex h-7 w-7 items-center justify-center",
          "rounded-full bg-black/75 text-white",
          "backdrop-blur-sm transition",
          "hover:bg-rose-600",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-white",
          "sm:right-2 sm:top-2 sm:h-8 sm:w-8",
        ].join(" ")}
      >
        <CloseIcon />
      </button>

      <div className="absolute inset-x-1.5 top-10 flex justify-between sm:hidden">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onMovePrevious();
          }}
          disabled={position === 0}
          aria-label={`Move ${game.title} to the previous position`}
          className={[
            "flex h-7 w-7 items-center justify-center",
            "rounded-full bg-black/70 text-white",
            "backdrop-blur-sm",
            "disabled:cursor-not-allowed",
            "disabled:opacity-20",
          ].join(" ")}
        >
          <ArrowLeftIcon />
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onMoveNext();
          }}
          disabled={
            position === totalSelected - 1
          }
          aria-label={`Move ${game.title} to the next position`}
          className={[
            "flex h-7 w-7 items-center justify-center",
            "rounded-full bg-black/70 text-white",
            "backdrop-blur-sm",
            "disabled:cursor-not-allowed",
            "disabled:opacity-20",
          ].join(" ")}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </article>
  );
}

function EmptyGridSlot({
  slotNumber,
  isNextSlot,
  disabled,
  onClick,
}: {
  slotNumber: number;
  isNextSlot: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      style={{ aspectRatio: "1 / 1" }}
      onClick={onClick}
      disabled={disabled}
      aria-label={
        isNextSlot
          ? `Add a game to position ${slotNumber}`
          : `Position ${slotNumber} is not available yet`
      }
      className={[
        "group relative min-w-0 rounded-xl",
        "border-2 border-dashed transition",
        "sm:rounded-2xl",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-sky-500",
        "focus-visible:ring-offset-2",
        isNextSlot && !disabled
          ? [
              "cursor-pointer border-sky-400",
              "bg-sky-50",
              "hover:border-sky-500",
              "hover:bg-sky-100/60",
            ].join(" ")
          : [
              "cursor-not-allowed",
              "border-slate-200 bg-slate-50",
            ].join(" "),
      ].join(" ")}
    >
      <span
        className={[
          "absolute left-1.5 top-1.5",
          "flex h-6 min-w-6 items-center",
          "justify-center rounded-full",
          "bg-white px-1.5",
          "text-[10px] font-black shadow-sm",
          "sm:left-2 sm:top-2",
          "sm:h-7 sm:min-w-7 sm:px-2 sm:text-xs",
          isNextSlot
            ? "text-sky-700"
            : "text-slate-400",
        ].join(" ")}
      >
        {slotNumber}
      </span>

      <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
        <span
          aria-hidden="true"
          className={[
            "flex h-9 w-9 items-center",
            "justify-center rounded-full",
            "bg-white text-xl font-light",
            "shadow-sm transition",
            "sm:h-10 sm:w-10 sm:text-2xl",
            isNextSlot && !disabled
              ? [
                  "text-sky-600",
                  "group-hover:scale-105",
                ].join(" ")
              : "text-slate-300",
          ].join(" ")}
        >
          +
        </span>

        <span
          className={[
            "hidden text-[11px] font-black sm:block",
            isNextSlot && !disabled
              ? "text-sky-700"
              : "text-slate-400",
          ].join(" ")}
        >
          {isNextSlot && !disabled
            ? "Add game"
            : "Empty"}
        </span>
      </span>
    </button>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
    >
      <path
        d="M10 2.8c.45 3.55 2.25 5.35 5.8 5.8-3.55.45-5.35 2.25-5.8 5.8-.45-3.55-2.25-5.35-5.8-5.8 3.55-.45 5.35-2.25 5.8-5.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
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

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="m12 5-5 5 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="m8 5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}