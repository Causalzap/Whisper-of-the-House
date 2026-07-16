"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import GamePickerModal from "@/components/game-dna/GamePickerModal";

import {
  calculateAverageTraits,
  calculateMatchPercentage,
  createEmptyTraits,
  GAME_DNA_TRAIT_IDS,
  GAME_DNA_TRAIT_META,
  type GameDnaGame,
  type GameDnaTraitId,
  type GameDnaTraits,
} from "@/lib/game-dna/recommendations";

export type GamePlatform =
  | "any"
  | "pc"
  | "playstation"
  | "xbox"
  | "switch";

export type GamePlayMode =
  | "any"
  | "solo"
  | "co-op"
  | "multiplayer";

export type RecommenderGame = GameDnaGame & {
  /**
   * 可选的平台数据。
   *
   * 当前 games.ts 没填写也不会报错，
   * 但补充后平台筛选会更准确。
   */
  platforms?: Array<
    Exclude<GamePlatform, "any">
  >;

  /**
   * 可选的游玩模式数据。
   */
  playModes?: Array<
    Exclude<GamePlayMode, "any">
  >;
};

type QuickGameRecommenderProps = {
  games: RecommenderGame[];
  maximumFavoriteGames?: number;
  resultLimit?: number;
  className?: string;
};

type ExperiencePreferenceId =
  | "relaxing"
  | "story-rich"
  | "challenging"
  | "progression"
  | "strategic"
  | "exploration"
  | "co-op";

type RecommendationResult = {
  game: RecommenderGame;
  matchPercentage: number;
  rankingScore: number;
  reason: string;
  matchingTraits: GameDnaTraitId[];
};

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: Record<
    string,
    string | number | boolean
  >
) => void;

const PLATFORM_OPTIONS: Array<{
  id: GamePlatform;
  label: string;
}> = [
  {
    id: "any",
    label: "Any Platform",
  },
  {
    id: "pc",
    label: "PC / Steam",
  },
  {
    id: "playstation",
    label: "PlayStation",
  },
  {
    id: "xbox",
    label: "Xbox",
  },
  {
    id: "switch",
    label: "Nintendo Switch",
  },
];

const PLAY_MODE_OPTIONS: Array<{
  id: GamePlayMode;
  label: string;
}> = [
  {
    id: "any",
    label: "Any Mode",
  },
  {
    id: "solo",
    label: "Solo",
  },
  {
    id: "co-op",
    label: "Co-op",
  },
  {
    id: "multiplayer",
    label: "Multiplayer",
  },
];

const EXPERIENCE_OPTIONS: Array<{
  id: ExperiencePreferenceId;
  label: string;
  description: string;
}> = [
  {
    id: "relaxing",
    label: "Relaxing",
    description:
      "Lower pressure and room to play at your own pace.",
  },
  {
    id: "story-rich",
    label: "Story-Rich",
    description:
      "Characters, worldbuilding, and narrative payoff.",
  },
  {
    id: "challenging",
    label: "Challenging",
    description:
      "Demanding combat, risk, and meaningful mastery.",
  },
  {
    id: "progression",
    label: "Progression",
    description:
      "Upgrades, builds, unlocks, and long-term growth.",
  },
  {
    id: "strategic",
    label: "Strategic",
    description:
      "Planning, systems, and efficient decisions.",
  },
  {
    id: "exploration",
    label: "Exploration",
    description:
      "New locations, secrets, and optional discoveries.",
  },
  {
    id: "co-op",
    label: "Co-op Friendly",
    description:
      "A game that works well with other players.",
  },
];

const EXPERIENCE_TRAIT_ADJUSTMENTS: Record<
  ExperiencePreferenceId,
  Partial<Record<GameDnaTraitId, number>>
> = {
  relaxing: {
    exploration: 0.5,
    crafting: 0.8,
    story: 0.4,
    social: 0.3,
    combat: -0.5,
    survival: -0.5,
  },

  "story-rich": {
    story: 1.5,
    exploration: 0.5,
    social: 0.3,
  },

  challenging: {
    combat: 1.2,
    strategy: 0.8,
    survival: 0.6,
    progression: 0.4,
  },

  progression: {
    progression: 1.5,
    systems: 0.6,
    crafting: 0.3,
  },

  strategic: {
    strategy: 1.5,
    systems: 0.8,
    puzzle: 0.4,
  },

  exploration: {
    exploration: 1.5,
    survival: 0.3,
    story: 0.3,
  },

  "co-op": {
    social: 1.5,
    strategy: 0.4,
    combat: 0.2,
  },
};

export default function QuickGameRecommender({
  games,
  maximumFavoriteGames = 3,
  resultLimit = 5,
  className = "",
}: QuickGameRecommenderProps) {
  const [selectedGameIds, setSelectedGameIds] =
    useState<string[]>([]);

  const [platform, setPlatform] =
    useState<GamePlatform>("any");

  const [playMode, setPlayMode] =
    useState<GamePlayMode>("any");

  const [
    selectedExperienceIds,
    setSelectedExperienceIds,
  ] = useState<ExperiencePreferenceId[]>([]);

  const [isPickerOpen, setIsPickerOpen] =
    useState(false);

  const [hasGenerated, setHasGenerated] =
    useState(false);

  const resultsRef =
    useRef<HTMLDivElement>(null);

  const normalizedMaximumFavoriteGames =
    Math.max(
      1,
      Math.floor(maximumFavoriteGames)
    );

  const normalizedResultLimit = Math.max(
    1,
    Math.floor(resultLimit)
  );

  const gameMap = useMemo(
    () =>
      new Map<string, RecommenderGame>(
        games.map((game) => [
          game.id,
          game,
        ])
      ),
    [games]
  );

  const selectedGames = useMemo(
    () =>
      selectedGameIds
        .map((gameId) =>
          gameMap.get(gameId)
        )
        .filter(
          (
            game
          ): game is RecommenderGame =>
            Boolean(game)
        ),
    [gameMap, selectedGameIds]
  );

  const selectedGameIdSet = useMemo(
    () => new Set(selectedGameIds),
    [selectedGameIds]
  );

  const recommendationTraits = useMemo(
    () =>
      buildRecommendationTraits(
        selectedGames,
        selectedExperienceIds
      ),
    [
      selectedExperienceIds,
      selectedGames,
    ]
  );

  const recommendations = useMemo(
    () => {
      if (!hasGenerated) {
        return [];
      }

      return buildRecommendations({
        games,
        selectedGameIds:
          selectedGameIdSet,
        userTraits:
          recommendationTraits,
        platform,
        playMode,
        selectedExperienceIds,
        limit: normalizedResultLimit,
      });
    },
    [
      games,
      hasGenerated,
      normalizedResultLimit,
      platform,
      playMode,
      recommendationTraits,
      selectedExperienceIds,
      selectedGameIdSet,
    ]
  );

  const canAddMoreGames =
    selectedGames.length <
    normalizedMaximumFavoriteGames;

  const canGenerate =
    selectedGames.length > 0;

  const invalidateResults =
    useCallback(() => {
      setHasGenerated(false);
    }, []);

  const openPicker = useCallback(() => {
    if (!canAddMoreGames) {
      return;
    }

    setIsPickerOpen(true);

    trackEvent(
      "quick_recommender_picker_opened",
      {
        selected_count:
          selectedGames.length,
      }
    );
  }, [
    canAddMoreGames,
    selectedGames.length,
  ]);

  const closePicker = useCallback(() => {
    setIsPickerOpen(false);
  }, []);

  const addGame = useCallback(
    (gameId: string) => {
      const game = gameMap.get(gameId);

      if (
        !game ||
        selectedGameIds.includes(gameId) ||
        selectedGameIds.length >=
          normalizedMaximumFavoriteGames
      ) {
        return;
      }

      setSelectedGameIds(
        (currentGameIds) => {
          if (
            currentGameIds.includes(gameId) ||
            currentGameIds.length >=
              normalizedMaximumFavoriteGames
          ) {
            return currentGameIds;
          }

          return [
            ...currentGameIds,
            gameId,
          ];
        }
      );

      invalidateResults();

      trackEvent(
        "quick_recommender_game_added",
        {
          game_id: game.id,
          game_title: game.title,
          selected_count:
            selectedGameIds.length + 1,
        }
      );
    },
    [
      gameMap,
      invalidateResults,
      normalizedMaximumFavoriteGames,
      selectedGameIds,
    ]
  );

  const removeGame = useCallback(
    (gameId: string) => {
      const game = gameMap.get(gameId);

      setSelectedGameIds(
        (currentGameIds) =>
          currentGameIds.filter(
            (currentGameId) =>
              currentGameId !== gameId
          )
      );

      invalidateResults();

      trackEvent(
        "quick_recommender_game_removed",
        {
          game_id: gameId,
          game_title:
            game?.title ?? gameId,
        }
      );
    },
    [gameMap, invalidateResults]
  );

  const changePlatform = (
    nextPlatform: GamePlatform
  ) => {
    setPlatform(nextPlatform);
    invalidateResults();
  };

  const changePlayMode = (
    nextPlayMode: GamePlayMode
  ) => {
    setPlayMode(nextPlayMode);
    invalidateResults();
  };

  const toggleExperience = (
    experienceId: ExperiencePreferenceId
  ) => {
    setSelectedExperienceIds(
      (currentIds) => {
        if (
          currentIds.includes(experienceId)
        ) {
          return currentIds.filter(
            (currentId) =>
              currentId !== experienceId
          );
        }

        /**
         * 最多允许选择三个体验偏好，
         * 防止所有选项都被选中后失去区分度。
         */
        if (currentIds.length >= 3) {
          return currentIds;
        }

        return [
          ...currentIds,
          experienceId,
        ];
      }
    );

    invalidateResults();
  };

  const generateRecommendations =
    useCallback(() => {
      if (!canGenerate) {
        return;
      }

      setHasGenerated(true);

      trackEvent(
        "quick_recommender_generated",
        {
          selected_games:
            selectedGames.length,
          platform,
          play_mode: playMode,
          experience_count:
            selectedExperienceIds.length,
        }
      );

      window.requestAnimationFrame(
        () => {
          resultsRef.current?.scrollIntoView(
            {
              behavior: "smooth",
              block: "start",
            }
          );
        }
      );
    }, [
      canGenerate,
      platform,
      playMode,
      selectedExperienceIds.length,
      selectedGames.length,
    ]);

  const resetTool = useCallback(() => {
    setSelectedGameIds([]);
    setPlatform("any");
    setPlayMode("any");
    setSelectedExperienceIds([]);
    setHasGenerated(false);
    setIsPickerOpen(false);

    trackEvent(
      "quick_recommender_reset",
      {
        source: "results",
      }
    );
  }, []);

  return (
    <div className={className}>
      <section
        aria-labelledby="quick-recommender-title"
        className={[
          "overflow-hidden rounded-[1.75rem]",
          "border border-slate-200",
          "bg-white shadow-sm",
        ].join(" ")}
      >
        <header className="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
                Quick Game Recommender
              </p>

              <h2
                id="quick-recommender-title"
                className="mt-1.5 text-xl font-black tracking-tight text-slate-950 sm:text-2xl"
              >
                Find a game to play next
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Start with up to three games
                you already enjoy, then choose
                what kind of experience you
                want today.
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-black text-sky-700">
              {selectedGames.length} /{" "}
              {normalizedMaximumFavoriteGames}
            </span>
          </div>
        </header>

        <div className="space-y-7 p-4 sm:p-6">
          <FavoriteGamesSection
            selectedGames={selectedGames}
            maximumCount={
              normalizedMaximumFavoriteGames
            }
            canAddMore={canAddMoreGames}
            onOpenPicker={openPicker}
            onRemoveGame={removeGame}
          />

          <OptionSection
            eyebrow="Platform"
            title="Where do you want to play?"
            description="Choose a platform, or leave it open to see all available matches."
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
                      changePlatform(option.id)
                    }
                  >
                    {option.label}
                  </ChoiceButton>
                )
              )}
            </div>
          </OptionSection>

          <OptionSection
            eyebrow="Play Mode"
            title="How do you want to play?"
            description="Choose solo, co-op, multiplayer, or keep every option open."
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
                      changePlayMode(option.id)
                    }
                  >
                    {option.label}
                  </ChoiceButton>
                )
              )}
            </div>
          </OptionSection>

          <OptionSection
            eyebrow="Current Mood"
            title="What kind of game do you want today?"
            description="Choose up to three. These preferences adjust the recommendation ranking."
          >
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERIENCE_OPTIONS.map(
                (option) => {
                  const isSelected =
                    selectedExperienceIds.includes(
                      option.id
                    );

                  const isDisabled =
                    !isSelected &&
                    selectedExperienceIds.length >=
                      3;

                  return (
                    <ExperienceButton
                      key={option.id}
                      option={option}
                      isSelected={isSelected}
                      disabled={isDisabled}
                      onClick={() =>
                        toggleExperience(
                          option.id
                        )
                      }
                    />
                  );
                }
              )}
            </div>
          </OptionSection>

          <div className="border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={
                generateRecommendations
              }
              disabled={!canGenerate}
              className={[
                "inline-flex min-h-12 w-full",
                "items-center justify-center",
                "rounded-full px-5 py-3",
                "text-sm font-black transition",
                canGenerate
                  ? [
                      "bg-sky-600 text-white",
                      "shadow-sm",
                      "hover:-translate-y-0.5",
                      "hover:bg-sky-700",
                      "hover:shadow-md",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-sky-500",
                      "focus-visible:ring-offset-2",
                    ].join(" ")
                  : [
                      "cursor-not-allowed",
                      "bg-slate-100",
                      "text-slate-400",
                    ].join(" "),
              ].join(" ")}
            >
              {canGenerate
                ? "Show My Game Recommendations"
                : "Choose at Least One Game"}

              <SparkIcon />
            </button>

            <p className="mt-2 text-center text-[11px] font-semibold leading-5 text-slate-400">
              Recommendations are ranked from
              your selected games and current
              preferences, not chosen randomly.
            </p>
          </div>
        </div>
      </section>

      {hasGenerated ? (
        <div
          ref={resultsRef}
          className="scroll-mt-24"
        >
          <RecommendationResults
            recommendations={
              recommendations
            }
            onReset={resetTool}
          />
        </div>
      ) : null}

      <GamePickerModal
        isOpen={isPickerOpen}
        games={games}
        selectedGameIds={
          selectedGameIds
        }
        selectedCount={
          selectedGames.length
        }
        requiredCount={
          normalizedMaximumFavoriteGames
        }
        targetSlotNumber={
          selectedGames.length + 1
        }
        onAddGame={addGame}
        onClose={closePicker}
      />
    </div>
  );
}

function FavoriteGamesSection({
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
      eyebrow="Your Favorites"
      title="Choose games you already like"
      description={`Select up to ${maximumCount} games. One game is enough to generate recommendations.`}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {selectedGames.map((game) => (
          <article
            key={game.id}
            className={[
              "relative overflow-hidden",
              "rounded-2xl border",
              "border-slate-200",
              "bg-slate-100 shadow-sm",
            ].join(" ")}
          >
            <div
              style={{
                aspectRatio: "4 / 5",
              }}
              className="relative"
            >
              <Image
                src={game.cover}
                alt={`${game.title} game cover`}
                fill
                sizes="(max-width: 640px) 45vw, 180px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="line-clamp-2 text-xs font-black leading-4 text-white sm:text-sm">
                  {game.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onRemoveGame(game.id)
                }
                aria-label={`Remove ${game.title}`}
                className={[
                  "absolute right-2 top-2",
                  "flex h-8 w-8",
                  "items-center justify-center",
                  "rounded-full bg-black/70",
                  "text-white backdrop-blur-sm",
                  "transition hover:bg-rose-600",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-white",
                ].join(" ")}
              >
                <CloseIcon />
              </button>
            </div>
          </article>
        ))}

        {canAddMore ? (
          <button
            type="button"
            onClick={onOpenPicker}
            style={{
              aspectRatio: "4 / 5",
            }}
            className={[
              "group relative rounded-2xl",
              "border-2 border-dashed",
              "border-sky-300 bg-sky-50/70",
              "transition",
              "hover:border-sky-500",
              "hover:bg-sky-100/60",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
              "focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
              <span
                className={[
                  "flex h-11 w-11",
                  "items-center justify-center",
                  "rounded-full bg-white",
                  "text-2xl font-light",
                  "text-sky-600 shadow-sm",
                  "transition",
                  "group-hover:scale-105",
                ].join(" ")}
              >
                +
              </span>

              <span className="text-xs font-black text-sky-700">
                Add a Game
              </span>
            </span>
          </button>
        ) : null}
      </div>
    </OptionSection>
  );
}

function OptionSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-700">
        {eyebrow}
      </p>

      <h3 className="mt-1 text-base font-black text-slate-950 sm:text-lg">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
        {description}
      </p>

      <div className="mt-3">
        {children}
      </div>
    </section>
  );
}

function ChoiceButton({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={[
        "inline-flex min-h-10",
        "items-center justify-center",
        "rounded-full border",
        "px-4 py-2",
        "text-sm font-black transition",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-sky-500",
        "focus-visible:ring-offset-2",
        isSelected
          ? [
              "border-sky-600",
              "bg-sky-600 text-white",
            ].join(" ")
          : [
              "border-slate-200",
              "bg-white text-slate-700",
              "hover:border-sky-300",
              "hover:bg-sky-50",
              "hover:text-sky-800",
            ].join(" "),
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function ExperienceButton({
  option,
  isSelected,
  disabled,
  onClick,
}: {
  option: {
    id: ExperiencePreferenceId;
    label: string;
    description: string;
  };
  isSelected: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      disabled={disabled}
      onClick={onClick}
      className={[
        "rounded-2xl border p-3",
        "text-left transition",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-sky-500",
        "focus-visible:ring-offset-2",
        isSelected
          ? [
              "border-sky-500",
              "bg-sky-50",
              "shadow-sm",
            ].join(" ")
          : [
              "border-slate-200",
              "bg-white",
              "hover:border-sky-300",
              "hover:bg-sky-50/50",
            ].join(" "),
        disabled
          ? "cursor-not-allowed opacity-45"
          : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={[
            "text-sm font-black",
            isSelected
              ? "text-sky-800"
              : "text-slate-900",
          ].join(" ")}
        >
          {option.label}
        </span>

        <span
          aria-hidden="true"
          className={[
            "flex h-5 w-5 shrink-0",
            "items-center justify-center",
            "rounded-full border",
            "text-xs font-black",
            isSelected
              ? [
                  "border-sky-600",
                  "bg-sky-600 text-white",
                ].join(" ")
              : [
                  "border-slate-300",
                  "text-transparent",
                ].join(" "),
          ].join(" ")}
        >
          ✓
        </span>
      </div>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {option.description}
      </p>
    </button>
  );
}

function RecommendationResults({
  recommendations,
  onReset,
}: {
  recommendations: RecommendationResult[];
  onReset: () => void;
}) {
  return (
    <section
      aria-labelledby="recommendation-results-title"
      className={[
        "mt-6 overflow-hidden",
        "rounded-[1.75rem]",
        "border border-slate-200",
        "bg-white shadow-sm",
      ].join(" ")}
    >
      <header className="flex flex-col gap-4 border-b border-slate-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
            Your Results
          </p>

          <h2
            id="recommendation-results-title"
            className="mt-1.5 text-2xl font-black tracking-tight text-slate-950"
          >
            Games You Should Play Next
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            These games are the closest
            matches for your favorites and
            current preferences.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className={[
            "inline-flex min-h-10",
            "items-center justify-center",
            "rounded-full border",
            "border-slate-300 bg-white",
            "px-4 py-2",
            "text-sm font-black",
            "text-slate-700 transition",
            "hover:bg-slate-50",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-sky-500",
          ].join(" ")}
        >
          Start Over
        </button>
      </header>

      {recommendations.length > 0 ? (
        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-2">
          {recommendations.map(
            (recommendation, index) => (
              <RecommendationCard
                key={recommendation.game.id}
                recommendation={
                  recommendation
                }
                position={index + 1}
              />
            )
          )}
        </div>
      ) : (
        <div className="p-6 text-center">
          <p className="text-base font-black text-slate-800">
            No matching games found
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Try choosing another favorite
            game or relaxing one of your
            filters.
          </p>
        </div>
      )}
    </section>
  );
}

function RecommendationCard({
  recommendation,
  position,
}: {
  recommendation: RecommendationResult;
  position: number;
}) {
  const {
    game,
    matchPercentage,
    reason,
    matchingTraits,
  } = recommendation;

  return (
    <article
      className={[
        "flex min-w-0 gap-4",
        "rounded-2xl border",
        "border-slate-200",
        "bg-[#f8fafc] p-3",
      ].join(" ")}
    >
      <div
        style={{
          aspectRatio: "2 / 3",
        }}
        className={[
          "relative w-[92px]",
          "shrink-0 overflow-hidden",
          "rounded-xl bg-slate-200",
          "sm:w-[112px]",
        ].join(" ")}
      >
        <Image
          src={game.cover}
          alt={`${game.title} game cover`}
          fill
          sizes="112px"
          className="object-cover"
        />

        <span
          className={[
            "absolute left-2 top-2",
            "flex h-7 min-w-7",
            "items-center justify-center",
            "rounded-full bg-black/75",
            "px-2 text-xs font-black",
            "text-white backdrop-blur-sm",
          ].join(" ")}
        >
          #{position}
        </span>
      </div>

      <div className="min-w-0 flex-1 py-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-black leading-6 text-slate-950">
            {game.title}
          </h3>

          <span className="shrink-0 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-black text-sky-800">
            {matchPercentage}% match
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {reason}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {matchingTraits.map(
            (traitId) => (
              <span
                key={traitId}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-slate-600"
              >
                {
                  GAME_DNA_TRAIT_META[
                    traitId
                  ].label
                }
              </span>
            )
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {game.guideUrl ? (
            <Link
              href={game.guideUrl}
              onClick={() =>
                trackEvent(
                  "quick_recommender_guide_click",
                  {
                    game_id: game.id,
                    game_title: game.title,
                    match_percentage:
                      matchPercentage,
                  }
                )
              }
              className={[
                "inline-flex min-h-10",
                "items-center justify-center",
                "rounded-full bg-sky-600",
                "px-4 py-2",
                "text-xs font-black",
                "text-white transition",
                "hover:bg-sky-700",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-sky-500",
              ].join(" ")}
            >
              Open Guide Hub
              <ArrowRightIcon />
            </Link>
          ) : null}

          <Link
            href={`/game-dna?game=${encodeURIComponent(
              game.id
            )}`}
            className={[
              "inline-flex min-h-10",
              "items-center justify-center",
              "rounded-full border",
              "border-slate-300 bg-white",
              "px-4 py-2",
              "text-xs font-black",
              "text-slate-700 transition",
              "hover:border-sky-300",
              "hover:text-sky-700",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
            ].join(" ")}
          >
            Add to Game DNA
          </Link>
        </div>
      </div>
    </article>
  );
}

function buildRecommendationTraits(
  selectedGames: RecommenderGame[],
  selectedExperienceIds: ExperiencePreferenceId[]
): GameDnaTraits {
  const baseTraits =
    selectedGames.length > 0
      ? calculateAverageTraits(
          selectedGames
        )
      : createNeutralTraits();

  const adjustedTraits: GameDnaTraits = {
    ...baseTraits,
  };

  for (const experienceId of selectedExperienceIds) {
    const adjustments =
      EXPERIENCE_TRAIT_ADJUSTMENTS[
        experienceId
      ];

    for (const traitId of GAME_DNA_TRAIT_IDS) {
      const adjustment =
        adjustments[traitId] ?? 0;

      adjustedTraits[traitId] =
        clampTraitScore(
          adjustedTraits[traitId] +
            adjustment
        );
    }
  }

  return adjustedTraits;
}

function buildRecommendations({
  games,
  selectedGameIds,
  userTraits,
  platform,
  playMode,
  selectedExperienceIds,
  limit,
}: {
  games: RecommenderGame[];
  selectedGameIds: Set<string>;
  userTraits: GameDnaTraits;
  platform: GamePlatform;
  playMode: GamePlayMode;
  selectedExperienceIds: ExperiencePreferenceId[];
  limit: number;
}): RecommendationResult[] {
  return games
    .filter(
      (game) =>
        !selectedGameIds.has(game.id)
    )
    .map((game) => {
      const traitMatch =
        calculateMatchPercentage(
          userTraits,
          game.traits
        );

      const platformAdjustment =
        calculatePlatformAdjustment(
          game,
          platform
        );

      const playModeAdjustment =
        calculatePlayModeAdjustment(
          game,
          playMode
        );

      const guideBonus = game.guideUrl
        ? Math.min(
            4,
            Math.max(
              1,
              game.guideCount ?? 1
            )
          )
        : 0;

      const rankingScore =
        traitMatch +
        platformAdjustment +
        playModeAdjustment +
        guideBonus;

      const matchPercentage =
        clampPercentage(rankingScore);

      const matchingTraits =
        findStrongestSharedTraits(
          userTraits,
          game.traits
        );

      return {
        game,
        matchPercentage,
        rankingScore,
        matchingTraits,
        reason: buildResultReason({
          matchingTraits,
          platform,
          playMode,
          selectedExperienceIds,
        }),
      };
    })
    .sort((a, b) => {
      if (
        b.rankingScore !==
        a.rankingScore
      ) {
        return (
          b.rankingScore -
          a.rankingScore
        );
      }

      return a.game.title.localeCompare(
        b.game.title
      );
    })
    .slice(0, limit);
}

function calculatePlatformAdjustment(
  game: RecommenderGame,
  platform: GamePlatform
) {
  if (platform === "any") {
    return 0;
  }

  /**
   * 没有平台元数据时保持中立，
   * 避免旧数据全部被排除。
   */
  if (
    !game.platforms ||
    game.platforms.length === 0
  ) {
    return 0;
  }

  return game.platforms.includes(platform)
    ? 8
    : -22;
}

function calculatePlayModeAdjustment(
  game: RecommenderGame,
  playMode: GamePlayMode
) {
  if (playMode === "any") {
    return 0;
  }

  if (
    !game.playModes ||
    game.playModes.length === 0
  ) {
    return 0;
  }

  return game.playModes.includes(playMode)
    ? 7
    : -16;
}

function findStrongestSharedTraits(
  userTraits: GameDnaTraits,
  gameTraits: GameDnaTraits
) {
  return GAME_DNA_TRAIT_IDS.map(
    (traitId) => ({
      traitId,
      score: Math.min(
        userTraits[traitId],
        gameTraits[traitId]
      ),
    })
  )
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(0, 3)
    .map(({ traitId }) => traitId);
}

function buildResultReason({
  matchingTraits,
  platform,
  playMode,
  selectedExperienceIds,
}: {
  matchingTraits: GameDnaTraitId[];
  platform: GamePlatform;
  playMode: GamePlayMode;
  selectedExperienceIds: ExperiencePreferenceId[];
}) {
  const traitLabels = matchingTraits
    .slice(0, 2)
    .map(
      (traitId) =>
        GAME_DNA_TRAIT_META[
          traitId
        ].label.toLowerCase()
    );

  const preferenceParts: string[] = [];

  if (platform !== "any") {
    preferenceParts.push(
      getPlatformLabel(platform)
    );
  }

  if (playMode !== "any") {
    preferenceParts.push(
      getPlayModeLabel(playMode)
    );
  }

  if (
    selectedExperienceIds.includes(
      "story-rich"
    )
  ) {
    preferenceParts.push(
      "story-rich play"
    );
  } else if (
    selectedExperienceIds.includes(
      "challenging"
    )
  ) {
    preferenceParts.push(
      "a stronger challenge"
    );
  } else if (
    selectedExperienceIds.includes(
      "relaxing"
    )
  ) {
    preferenceParts.push(
      "a more relaxed experience"
    );
  }

  const traitReason =
    traitLabels.length >= 2
      ? `It strongly matches your interest in ${traitLabels[0]} and ${traitLabels[1]}.`
      : "It shares several of your strongest gameplay preferences.";

  if (preferenceParts.length === 0) {
    return traitReason;
  }

  return `${traitReason} It also fits your preference for ${preferenceParts
    .slice(0, 2)
    .join(" and ")}.`;
}

function createNeutralTraits(): GameDnaTraits {
  const traits = createEmptyTraits();

  for (const traitId of GAME_DNA_TRAIT_IDS) {
    traits[traitId] = 2.5;
  }

  return traits;
}

function clampTraitScore(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(5, value)
  );
}

function clampPercentage(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    1,
    Math.min(99, Math.round(value))
  );
}

function getPlatformLabel(
  platform: Exclude<
    GamePlatform,
    "any"
  >
) {
  const labels: Record<
    Exclude<GamePlatform, "any">,
    string
  > = {
    pc: "PC or Steam",
    playstation: "PlayStation",
    xbox: "Xbox",
    switch: "Nintendo Switch",
  };

  return labels[platform];
}

function getPlayModeLabel(
  playMode: Exclude<
    GamePlayMode,
    "any"
  >
) {
  const labels: Record<
    Exclude<GamePlayMode, "any">,
    string
  > = {
    solo: "solo play",
    "co-op": "co-op play",
    multiplayer: "multiplayer",
  };

  return labels[playMode];
}

function trackEvent(
  eventName: string,
  parameters?: Record<
    string,
    string | number | boolean
  >
) {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  const gtag = (
    window as Window & {
      gtag?: GtagFunction;
    }
  ).gtag;

  gtag?.(
    "event",
    eventName,
    parameters
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

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
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