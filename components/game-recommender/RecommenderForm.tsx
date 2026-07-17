"use client";

import FavoriteGamesSection from "@/components/game-recommender/FavoriteGamesSection";

import {
  ChoiceButton,
  ExperienceButton,
  OptionSection,
} from "@/components/game-recommender/RecommenderControls";

import {
  EXPERIENCE_OPTIONS,
  MAXIMUM_MOOD_SELECTIONS,
  PLATFORM_OPTIONS,
  PLAY_MODE_OPTIONS,
} from "@/lib/game-recommender/config";

import type {
  ExperiencePreferenceId,
  GamePlatform,
  GamePlayMode,
  RecommenderGame,
} from "@/lib/game-recommender/types";

export default function RecommenderForm({
  selectedGames,
  maximumFavoriteGames,
  canAddMoreGames,
  platform,
  playMode,
  selectedExperienceIds,
  canGenerate,
  onOpenPicker,
  onRemoveGame,
  onChangePlatform,
  onChangePlayMode,
  onToggleExperience,
  onGenerate,
}: {
  selectedGames: RecommenderGame[];
  maximumFavoriteGames: number;
  canAddMoreGames: boolean;
  platform: GamePlatform;
  playMode: GamePlayMode;
  selectedExperienceIds: ExperiencePreferenceId[];
  canGenerate: boolean;
  onOpenPicker: () => void;
  onRemoveGame: (gameId: string) => void;
  onChangePlatform: (
    platform: GamePlatform,
  ) => void;
  onChangePlayMode: (
    playMode: GamePlayMode,
  ) => void;
  onToggleExperience: (
    experienceId: ExperiencePreferenceId,
  ) => void;
  onGenerate: () => void;
}) {
  return (
    <section
      aria-labelledby="quick-recommender-title"
      className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
    >
      <header className="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
              Personalized Game Recommender
            </p>

            <h2
              id="quick-recommender-title"
              className="mt-1.5 text-xl font-black tracking-tight text-slate-950 sm:text-2xl"
            >
              Find Your Next Game
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell us what you want to play
              today. Adding games you already
              like is optional, but it makes
              similar-game recommendations
              more precise.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] font-black">
            <span className="rounded-full bg-sky-50 px-3 py-1.5 text-sky-700">
              1–3 quick choices
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">
              No login
            </span>
          </div>
        </div>
      </header>

      <div className="space-y-7 p-4 sm:p-6">
        <OptionSection
          step="01"
          eyebrow="Current Mood"
          title="What kind of game do you want today?"
          description="Choose up to three. This is the strongest signal for what fits your current session."
        >
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCE_OPTIONS.map(
              (option) => {
                const isSelected =
                  selectedExperienceIds.includes(
                    option.id,
                  );

                const isDisabled =
                  !isSelected &&
                  selectedExperienceIds.length >=
                    MAXIMUM_MOOD_SELECTIONS;

                return (
                  <ExperienceButton
                    key={option.id}
                    option={option}
                    isSelected={isSelected}
                    disabled={isDisabled}
                    onClick={() =>
                      onToggleExperience(
                        option.id,
                      )
                    }
                  />
                );
              },
            )}
          </div>
        </OptionSection>

        <OptionSection
          step="02"
          eyebrow="Platform"
          title="Where do you want to play?"
          description="Choose PC / Steam, a console, or leave every platform open."
        >
          <div className="flex flex-wrap gap-2">
            {PLATFORM_OPTIONS.map(
              (option) => (
                <ChoiceButton
                  key={option.id}
                  isSelected={
                    platform === option.id
                  }
                  onClick={() =>
                    onChangePlatform(
                      option.id,
                    )
                  }
                >
                  {option.label}
                </ChoiceButton>
              ),
            )}
          </div>
        </OptionSection>

        <OptionSection
          step="03"
          eyebrow="Play Mode"
          title="How do you want to play?"
          description="Choose solo, co-op, multiplayer, or keep all modes available."
        >
          <div className="flex flex-wrap gap-2">
            {PLAY_MODE_OPTIONS.map(
              (option) => (
                <ChoiceButton
                  key={option.id}
                  isSelected={
                    playMode === option.id
                  }
                  onClick={() =>
                    onChangePlayMode(
                      option.id,
                    )
                  }
                >
                  {option.label}
                </ChoiceButton>
              ),
            )}
          </div>
        </OptionSection>

        <FavoriteGamesSection
          selectedGames={selectedGames}
          maximumCount={
            maximumFavoriteGames
          }
          canAddMore={canAddMoreGames}
          onOpenPicker={onOpenPicker}
          onRemoveGame={onRemoveGame}
        />

        <div className="border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={onGenerate}
            disabled={!canGenerate}
            className={[
              "inline-flex min-h-12 w-full items-center justify-center",
              "rounded-full px-5 py-3 text-sm font-black transition",
              canGenerate
                ? [
                    "bg-sky-600 text-white shadow-sm",
                    "hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-sky-500 focus-visible:ring-offset-2",
                  ].join(" ")
                : "cursor-not-allowed bg-slate-100 text-slate-400",
            ].join(" ")}
          >
            {canGenerate
              ? "Find My Next Game"
              : "Choose a Mood or Favorite Game"}

            <SparkIcon />
          </button>

          <p className="mt-2 text-center text-[11px] font-semibold leading-5 text-slate-400">
            Platform and play mode work as
            filters. Choose at least one mood
            or favorite game to create a
            meaningful recommendation.
          </p>
        </div>
      </div>
    </section>
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
