"use client";

import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import GamePickerModal from "@/components/game-dna/GamePickerModal";
import RecommenderForm from "@/components/game-recommender/RecommenderForm";
import RecommendationResults from "@/components/game-recommender/RecommendationResults";

import {
  INITIAL_VISIBLE_RESULTS,
  MAXIMUM_MOOD_SELECTIONS,
  SURPRISE_POOL_LIMIT,
} from "@/lib/game-recommender/config";

import {
  arrangeRecommendationResults,
  buildRecommendationPool,
  buildRecommendationTraits,
  createRecommendationResult,
} from "@/lib/game-recommender/engine";

import {
  trackRecommenderEvent,
} from "@/lib/game-recommender/analytics";

import type {
  ExperiencePreferenceId,
  GamePlatform,
  GamePlayMode,
  QuickGameRecommenderProps,
  RecommendationContext,
  RecommenderGame,
} from "@/lib/game-recommender/types";

export type {
  GamePlatform,
  GamePlayMode,
  RecommenderGame,
} from "@/lib/game-recommender/types";

export default function QuickGameRecommender({
  games,
  maximumFavoriteGames = 3,
  resultLimit = 5,
  className = "",
}: QuickGameRecommenderProps) {
  const [
    selectedGameIds,
    setSelectedGameIds,
  ] = useState<string[]>([]);

  const [platform, setPlatform] =
    useState<GamePlatform>("any");

  const [playMode, setPlayMode] =
    useState<GamePlayMode>("any");

  const [
    selectedExperienceIds,
    setSelectedExperienceIds,
  ] = useState<
    ExperiencePreferenceId[]
  >([]);

  const [
    isPickerOpen,
    setIsPickerOpen,
  ] = useState(false);

  const [
    hasGenerated,
    setHasGenerated,
  ] = useState(false);

  const [
    showAllResults,
    setShowAllResults,
  ] = useState(false);

  const [
    surpriseGameId,
    setSurpriseGameId,
  ] = useState<string | null>(null);

  const resultsRef =
    useRef<HTMLDivElement>(null);

  const normalizedMaximumFavoriteGames =
    Math.max(
      1,
      Math.floor(maximumFavoriteGames),
    );

  const normalizedResultLimit = Math.max(
    INITIAL_VISIBLE_RESULTS,
    Math.floor(resultLimit),
  );

  const gameMap = useMemo(
    () =>
      new Map<string, RecommenderGame>(
        games.map((game) => [
          game.id,
          game,
        ]),
      ),
    [games],
  );

  const selectedGames = useMemo(
    () =>
      selectedGameIds
        .map((gameId) =>
          gameMap.get(gameId),
        )
        .filter(
          (
            game,
          ): game is RecommenderGame =>
            Boolean(game),
        ),
    [gameMap, selectedGameIds],
  );

  const selectedGameIdSet = useMemo(
    () => new Set(selectedGameIds),
    [selectedGameIds],
  );

  const recommendationTraits =
    useMemo(
      () =>
        buildRecommendationTraits(
          selectedGames,
          selectedExperienceIds,
        ),
      [
        selectedExperienceIds,
        selectedGames,
      ],
    );

  const recommendationContext =
    useMemo<RecommendationContext>(
      () => ({
        selectedGames,
        selectedExperienceIds,
        platform,
        playMode,
        userTraits:
          recommendationTraits,
      }),
      [
        platform,
        playMode,
        recommendationTraits,
        selectedExperienceIds,
        selectedGames,
      ],
    );

  const recommendationPool = useMemo(
    () => {
      if (!hasGenerated) {
        return [];
      }

      return buildRecommendationPool({
        games,
        selectedGameIds:
          selectedGameIdSet,
        context:
          recommendationContext,
      });
    },
    [
      games,
      hasGenerated,
      recommendationContext,
      selectedGameIdSet,
    ],
  );

  const recommendations = useMemo(
    () =>
      arrangeRecommendationResults(
        recommendationPool,
        recommendationContext,
        normalizedResultLimit,
      ),
    [
      normalizedResultLimit,
      recommendationContext,
      recommendationPool,
    ],
  );

  const surpriseRecommendation =
    useMemo(() => {
      if (!surpriseGameId) {
        return null;
      }

      const candidate =
        recommendationPool.find(
          (recommendation) =>
            recommendation.game.id ===
            surpriseGameId,
        );

      if (!candidate) {
        return null;
      }

      return createRecommendationResult(
        candidate,
        "surprise",
        recommendationContext,
      );
    }, [
      recommendationContext,
      recommendationPool,
      surpriseGameId,
    ]);

  const visibleRecommendations =
    showAllResults
      ? recommendations
      : recommendations.slice(
          0,
          INITIAL_VISIBLE_RESULTS,
        );

  const recommendationResultIds = useMemo(
    () =>
      new Set(
        recommendations.map(
          (recommendation) =>
            recommendation.game.id,
        ),
      ),
    [recommendations],
  );

  const canSurprise = useMemo(
    () =>
      recommendationPool.some(
        (candidate) =>
          !recommendationResultIds.has(
            candidate.game.id,
          ),
      ),
    [
      recommendationPool,
      recommendationResultIds,
    ],
  );

  const canAddMoreGames =
    selectedGames.length <
    normalizedMaximumFavoriteGames;

  /**
   * Platform and play mode are filters.
   * A mood or favorite game is required to create a meaningful ranking.
   */
  const canGenerate =
    selectedGames.length > 0 ||
    selectedExperienceIds.length > 0;

  const invalidateResults =
    useCallback(() => {
      setHasGenerated(false);
      setShowAllResults(false);
      setSurpriseGameId(null);
    }, []);

  const openPicker = useCallback(() => {
    if (!canAddMoreGames) {
      return;
    }

    setIsPickerOpen(true);

    trackRecommenderEvent(
      "quick_recommender_picker_opened",
      {
        selected_count:
          selectedGames.length,
      },
    );
  }, [
    canAddMoreGames,
    selectedGames.length,
  ]);

  const closePicker =
    useCallback(() => {
      setIsPickerOpen(false);
    }, []);

  const addGame = useCallback(
    (gameId: string) => {
      const game = gameMap.get(gameId);

      if (
        !game ||
        selectedGameIds.includes(
          gameId,
        ) ||
        selectedGameIds.length >=
          normalizedMaximumFavoriteGames
      ) {
        return;
      }

      setSelectedGameIds(
        (currentGameIds) => {
          if (
            currentGameIds.includes(
              gameId,
            ) ||
            currentGameIds.length >=
              normalizedMaximumFavoriteGames
          ) {
            return currentGameIds;
          }

          return [
            ...currentGameIds,
            gameId,
          ];
        },
      );

      invalidateResults();

      trackRecommenderEvent(
        "quick_recommender_game_added",
        {
          game_id: game.id,
          game_title: game.title,
          selected_count:
            selectedGameIds.length + 1,
        },
      );
    },
    [
      gameMap,
      invalidateResults,
      normalizedMaximumFavoriteGames,
      selectedGameIds,
    ],
  );

  const removeGame = useCallback(
    (gameId: string) => {
      const game = gameMap.get(gameId);

      setSelectedGameIds(
        (currentGameIds) =>
          currentGameIds.filter(
            (currentGameId) =>
              currentGameId !== gameId,
          ),
      );

      invalidateResults();

      trackRecommenderEvent(
        "quick_recommender_game_removed",
        {
          game_id: gameId,
          game_title:
            game?.title ?? gameId,
        },
      );
    },
    [gameMap, invalidateResults],
  );

  const changePlatform = useCallback(
    (nextPlatform: GamePlatform) => {
      setPlatform(nextPlatform);
      invalidateResults();
    },
    [invalidateResults],
  );

  const changePlayMode = useCallback(
    (nextPlayMode: GamePlayMode) => {
      setPlayMode(nextPlayMode);
      invalidateResults();
    },
    [invalidateResults],
  );

  const toggleExperience =
    useCallback(
      (
        experienceId: ExperiencePreferenceId,
      ) => {
        setSelectedExperienceIds(
          (currentIds) => {
            if (
              currentIds.includes(
                experienceId,
              )
            ) {
              return currentIds.filter(
                (currentId) =>
                  currentId !==
                  experienceId,
              );
            }

            if (
              currentIds.length >=
              MAXIMUM_MOOD_SELECTIONS
            ) {
              return currentIds;
            }

            return [
              ...currentIds,
              experienceId,
            ];
          },
        );

        invalidateResults();
      },
      [invalidateResults],
    );

  const generateRecommendations =
    useCallback(() => {
      if (!canGenerate) {
        return;
      }

      setHasGenerated(true);
      setShowAllResults(false);
      setSurpriseGameId(null);

      trackRecommenderEvent(
        "quick_recommender_generated",
        {
          selected_games:
            selectedGames.length,
          platform,
          play_mode: playMode,
          experience_count:
            selectedExperienceIds.length,
        },
      );

      window.requestAnimationFrame(
        () => {
          resultsRef.current?.scrollIntoView(
            {
              behavior: "smooth",
              block: "start",
            },
          );
        },
      );
    }, [
      canGenerate,
      platform,
      playMode,
      selectedExperienceIds.length,
      selectedGames.length,
    ]);

  const showMoreMatches =
    useCallback(() => {
      setShowAllResults(true);

      trackRecommenderEvent(
        "quick_recommender_more_results_opened",
        {
          visible_results:
            recommendations.length,
        },
      );
    }, [recommendations.length]);

  const surpriseMe =
    useCallback(() => {
      if (
        recommendationPool.length === 0
      ) {
        return;
      }

      const availableCandidates =
        recommendationPool
          .filter(
            (candidate) =>
              !recommendationResultIds.has(
                candidate.game.id,
              ),
          )
          .slice(
            0,
            SURPRISE_POOL_LIMIT,
          );

      if (
        availableCandidates.length === 0
      ) {
        return;
      }

      const randomIndex = Math.floor(
        Math.random() *
          availableCandidates.length,
      );

      const nextRecommendation =
        availableCandidates[randomIndex];

      if (!nextRecommendation) {
        return;
      }

      setSurpriseGameId(
        nextRecommendation.game.id,
      );

      trackRecommenderEvent(
        "quick_recommender_surprise_me",
        {
          game_id:
            nextRecommendation.game.id,
          game_title:
            nextRecommendation.game.title,
          match_percentage:
            nextRecommendation.matchPercentage,
        },
      );
    }, [
      recommendationPool,
      recommendationResultIds,
    ]);

  const resetTool = useCallback(() => {
    setSelectedGameIds([]);
    setPlatform("any");
    setPlayMode("any");
    setSelectedExperienceIds([]);
    setHasGenerated(false);
    setShowAllResults(false);
    setSurpriseGameId(null);
    setIsPickerOpen(false);

    trackRecommenderEvent(
      "quick_recommender_reset",
      {
        source: "results",
      },
    );
  }, []);

  return (
    <div className={className}>
      <RecommenderForm
        selectedGames={selectedGames}
        maximumFavoriteGames={
          normalizedMaximumFavoriteGames
        }
        canAddMoreGames={
          canAddMoreGames
        }
        platform={platform}
        playMode={playMode}
        selectedExperienceIds={
          selectedExperienceIds
        }
        canGenerate={canGenerate}
        onOpenPicker={openPicker}
        onRemoveGame={removeGame}
        onChangePlatform={
          changePlatform
        }
        onChangePlayMode={
          changePlayMode
        }
        onToggleExperience={
          toggleExperience
        }
        onGenerate={
          generateRecommendations
        }
      />

      {hasGenerated ? (
        <div
          ref={resultsRef}
          className="scroll-mt-24"
        >
          <RecommendationResults
            recommendations={
              visibleRecommendations
            }
            totalResultCount={
              recommendations.length
            }
            showAllResults={
              showAllResults
            }
            surpriseRecommendation={
              surpriseRecommendation
            }
            onShowMore={
              showMoreMatches
            }
            canSurprise={canSurprise}
            onSurpriseMe={surpriseMe}
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
