import {
  calculateAverageTraits,
  calculateMatchPercentage,
  createEmptyTraits,
  GAME_DNA_TRAIT_IDS,
} from "@/lib/game-dna/recommendations";

import {
  EXPERIENCE_TRAIT_ADJUSTMENTS,
} from "@/lib/game-recommender/config";

import {
  buildRecommendationExplanation,
} from "@/lib/game-recommender/explanations";

import type {
  ExperiencePreferenceId,
  GameDnaTraitId,
  GameDnaTraits,
  GamePlatform,
  GamePlayMode,
  RecommendationCandidate,
  RecommendationContext,
  RecommendationResult,
  RecommendationRole,
  RecommenderGame,
} from "@/lib/game-recommender/types";

export function buildRecommendationTraits(
  selectedGames: RecommenderGame[],
  selectedExperienceIds: ExperiencePreferenceId[],
): GameDnaTraits {
  const baseTraits =
    selectedGames.length > 0
      ? calculateAverageTraits(
          selectedGames,
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
      adjustedTraits[traitId] =
        clampTraitScore(
          adjustedTraits[traitId] +
            (adjustments[traitId] ?? 0),
        );
    }
  }

  return adjustedTraits;
}

export function buildRecommendationPool({
  games,
  selectedGameIds,
  context,
}: {
  games: RecommenderGame[];
  selectedGameIds: Set<string>;
  context: RecommendationContext;
}): RecommendationCandidate[] {
  return games
    .filter(
      (game) =>
        !selectedGameIds.has(game.id),
    )
    .filter((game) =>
      matchesKnownPlatform(
        game,
        context.platform,
      ),
    )
    .filter((game) =>
      matchesKnownPlayMode(
        game,
        context.playMode,
      ),
    )
    .map((game) => {
      const traitMatch =
        calculateMatchPercentage(
          context.userTraits,
          game.traits,
        );

      const platformAdjustment =
        calculatePlatformAdjustment(
          game,
          context.platform,
        );

      const playModeAdjustment =
        calculatePlayModeAdjustment(
          game,
          context.playMode,
        );

      const guideBonus = game.guideUrl
        ? Math.min(
            2.5,
            Math.max(
              0.5,
              (game.guideCount ?? 1) *
                0.5,
            ),
          )
        : 0;

      const fitScore =
        traitMatch +
        platformAdjustment +
        playModeAdjustment;

      const rankingScore =
        fitScore + guideBonus;

      const matchingTraits =
        findStrongestSharedTraits(
          context.userTraits,
          game.traits,
        );

      const {
        strongerTraits,
        weakerTraits,
      } = findTraitDifferences(
        context.userTraits,
        game.traits,
      );

      return {
        game,
        matchPercentage:
          clampPercentage(fitScore),
        rankingScore,
        traitDistance:
          calculateTraitDistance(
            context.userTraits,
            game.traits,
          ),
        matchingTraits,
        strongerTraits,
        weakerTraits,
        signatureTraits:
          findDominantTraits(
            game.traits,
            3,
          ),
        closestFavorite:
          findClosestFavoriteGame(
            game,
            context.selectedGames,
          ),
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
        b.game.title,
      );
    });
}

export function arrangeRecommendationResults(
  pool: RecommendationCandidate[],
  context: RecommendationContext,
  limit: number,
): RecommendationResult[] {
  if (pool.length === 0) {
    return [];
  }

  const normalizedLimit = Math.max(
    1,
    Math.floor(limit),
  );

  const bestMatch = pool[0];

  const strongAlternative =
    findStrongAlternative(
      pool,
      bestMatch,
    );

  const wildcardPick = findWildcardPick(
    pool,
    context.userTraits,
    new Set(
      [
        bestMatch?.game.id,
        strongAlternative?.game.id,
      ].filter(
        (gameId): gameId is string =>
          Boolean(gameId),
      ),
    ),
  );

  const assignedResults: RecommendationResult[] =
    [];

  if (bestMatch) {
    assignedResults.push(
      createRecommendationResult(
        bestMatch,
        "best-match",
        context,
      ),
    );
  }

  if (
    strongAlternative &&
    strongAlternative.game.id !==
      bestMatch?.game.id
  ) {
    assignedResults.push(
      createRecommendationResult(
        strongAlternative,
        "strong-alternative",
        context,
      ),
    );
  }

  if (
    wildcardPick &&
    !assignedResults.some(
      (result) =>
        result.game.id ===
        wildcardPick.game.id,
    )
  ) {
    assignedResults.push(
      createRecommendationResult(
        wildcardPick,
        "wildcard",
        context,
      ),
    );
  }

  const usedIds = new Set(
    assignedResults.map(
      (result) => result.game.id,
    ),
  );

  const remainingResults = pool
    .filter(
      (candidate) =>
        !usedIds.has(candidate.game.id),
    )
    .map((candidate) =>
      createRecommendationResult(
        candidate,
        "more-match",
        context,
      ),
    );

  return [
    ...assignedResults,
    ...remainingResults,
  ].slice(0, normalizedLimit);
}

export function createRecommendationResult(
  candidate: RecommendationCandidate,
  role: RecommendationRole,
  context: RecommendationContext,
): RecommendationResult {
  return {
    ...candidate,
    role,
    explanation:
      buildRecommendationExplanation({
        candidate,
        context,
        role,
      }),
  };
}

function findStrongAlternative(
  pool: RecommendationCandidate[],
  bestMatch?: RecommendationCandidate,
) {
  if (!bestMatch || pool.length < 2) {
    return pool[1];
  }

  const candidates = pool.slice(
    1,
    Math.min(7, pool.length),
  );

  return [...candidates].sort(
    (a, b) => {
      const aDifference =
        calculateTraitDistance(
          bestMatch.game.traits,
          a.game.traits,
        );

      const bDifference =
        calculateTraitDistance(
          bestMatch.game.traits,
          b.game.traits,
        );

      const aScore =
        a.rankingScore * 0.86 +
        aDifference * 0.14;

      const bScore =
        b.rankingScore * 0.86 +
        bDifference * 0.14;

      return bScore - aScore;
    },
  )[0];
}

function findWildcardPick(
  pool: RecommendationCandidate[],
  userTraits: GameDnaTraits,
  excludedIds: Set<string>,
) {
  const availablePool = pool.filter(
    (candidate) =>
      !excludedIds.has(candidate.game.id),
  );

  if (availablePool.length === 0) {
    return undefined;
  }

  const bestScore =
    pool[0]?.rankingScore ?? 0;

  const dominantUserTraits =
    findDominantTraits(
      userTraits,
      2,
    );

  const wildcardCandidates =
    availablePool.filter(
      (candidate) => {
        const signatureTrait =
          candidate.signatureTraits[0];

        const introducesNewAngle =
          signatureTrait
            ? !dominantUserTraits.includes(
                signatureTrait,
              )
            : false;

        return (
          candidate.rankingScore >=
            Math.max(
              50,
              bestScore - 22,
            ) &&
          introducesNewAngle
        );
      },
    );

  const candidates =
    wildcardCandidates.length > 0
      ? wildcardCandidates
      : availablePool;

  return [...candidates].sort(
    (a, b) => {
      const aScore =
        a.rankingScore * 0.64 +
        a.traitDistance * 0.36;

      const bScore =
        b.rankingScore * 0.64 +
        b.traitDistance * 0.36;

      return bScore - aScore;
    },
  )[0];
}

function findClosestFavoriteGame(
  candidateGame: RecommenderGame,
  selectedGames: RecommenderGame[],
) {
  if (selectedGames.length === 0) {
    return null;
  }

  return selectedGames
    .map((selectedGame) => ({
      game: selectedGame,
      matchPercentage:
        calculateMatchPercentage(
          selectedGame.traits,
          candidateGame.traits,
        ),
    }))
    .sort(
      (a, b) =>
        b.matchPercentage -
        a.matchPercentage,
    )[0];
}

function matchesKnownPlatform(
  game: RecommenderGame,
  platform: GamePlatform,
) {
  if (
    platform === "any" ||
    !game.platforms?.length
  ) {
    return true;
  }

  return game.platforms.includes(platform);
}

function matchesKnownPlayMode(
  game: RecommenderGame,
  playMode: GamePlayMode,
) {
  if (
    playMode === "any" ||
    !game.playModes?.length
  ) {
    return true;
  }

  return game.playModes.includes(playMode);
}

function calculatePlatformAdjustment(
  game: RecommenderGame,
  platform: GamePlatform,
) {
  if (platform === "any") {
    return 0;
  }

  if (
    !game.platforms ||
    game.platforms.length === 0
  ) {
    return 0;
  }

  return game.platforms.includes(platform)
    ? 10
    : -28;
}

function calculatePlayModeAdjustment(
  game: RecommenderGame,
  playMode: GamePlayMode,
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
    ? 8
    : -20;
}

function findStrongestSharedTraits(
  userTraits: GameDnaTraits,
  gameTraits: GameDnaTraits,
) {
  return GAME_DNA_TRAIT_IDS.map(
    (traitId) => ({
      traitId,
      score: Math.min(
        userTraits[traitId],
        gameTraits[traitId],
      ),
    }),
  )
    .sort(
      (a, b) =>
        b.score - a.score,
    )
    .slice(0, 3)
    .map(
      ({ traitId }) => traitId,
    );
}

function findTraitDifferences(
  userTraits: GameDnaTraits,
  gameTraits: GameDnaTraits,
) {
  const differences =
    GAME_DNA_TRAIT_IDS.map(
      (traitId) => ({
        traitId,
        difference:
          gameTraits[traitId] -
          userTraits[traitId],
      }),
    );

  const strongerTraits = differences
    .filter(
      ({ difference }) =>
        difference >= 0.7,
    )
    .sort(
      (a, b) =>
        b.difference - a.difference,
    )
    .map(
      ({ traitId }) => traitId,
    );

  const weakerTraits = differences
    .filter(
      ({ difference }) =>
        difference <= -0.7,
    )
    .sort(
      (a, b) =>
        a.difference - b.difference,
    )
    .map(
      ({ traitId }) => traitId,
    );

  return {
    strongerTraits,
    weakerTraits,
  };
}

function findDominantTraits(
  traits: GameDnaTraits,
  limit: number,
): GameDnaTraitId[] {
  return GAME_DNA_TRAIT_IDS.map(
    (traitId) => ({
      traitId,
      score: traits[traitId],
    }),
  )
    .sort(
      (a, b) =>
        b.score - a.score,
    )
    .slice(0, limit)
    .map(
      ({ traitId }) => traitId,
    );
}

function calculateTraitDistance(
  firstTraits: GameDnaTraits,
  secondTraits: GameDnaTraits,
) {
  const totalDistance =
    GAME_DNA_TRAIT_IDS.reduce(
      (total, traitId) =>
        total +
        Math.abs(
          firstTraits[traitId] -
            secondTraits[traitId],
        ),
      0,
    );

  return (
    totalDistance /
    (GAME_DNA_TRAIT_IDS.length * 5)
  ) * 100;
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
    Math.min(5, value),
  );
}

function clampPercentage(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    1,
    Math.min(
      99,
      Math.round(value),
    ),
  );
}
