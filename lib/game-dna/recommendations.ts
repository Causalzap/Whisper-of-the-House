import type {
  RecommenderGame,
} from "@/data/game-recommender/games";

/**
 * The ten human-reviewed gameplay dimensions shared by Game DNA and the
 * quick recommender.
 */
export const GAME_DNA_TRAIT_IDS = [
  "exploration",
  "progression",
  "systems",
  "crafting",
  "story",
  "combat",
  "strategy",
  "puzzle",
  "survival",
  "social",
] as const;

export type GameDnaTraitId =
  (typeof GAME_DNA_TRAIT_IDS)[number];

export type GameDnaTraits =
  RecommenderGame["traits"];

/**
 * Minimal UI contract shared by:
 *
 * - the legacy manually maintained Game DNA list;
 * - the new IGDB-backed recommender catalog;
 * - GameDnaTool and the quick recommender components.
 *
 * Do not extend the complete RecommenderGame type here. The legacy data only
 * contains the fields required by the UI, so requiring every IGDB field would
 * make the old array incompatible during migration.
 */
export type GameDnaGame = {
  id: string;
  title: string;
  cover: string;
  traits: GameDnaTraits;

  image?: string | null;
  releaseYear?: number;
  aliases?: string[];
  genres?: string[];

  guideUrl?: string;
  guideCount?: number;
  guideSiteName?: string;
  guideIsInternal?: boolean;

  hasGuide?: boolean;
  guideDestination?:
    RecommenderGame["guideDestination"];

  platforms?:
    RecommenderGame["platforms"];

  playModes?:
    RecommenderGame["playModes"];

  firstReleaseDate?: string | null;
  summary?: string | null;
  igdbUrl?: string | null;
};

export type GameDnaTraitResult = {
  id: GameDnaTraitId;
  label: string;
  description: string;
  score: number;
};

export type GameDnaProfileData = {
  eyebrow: string;
  title: string;
  description: string;
  traits: GameDnaTraitResult[];
  highlights: string[];
};

export type GameDnaClosestGame = {
  id: string;
  title: string;
  cover: string;
  similarity: number;
};

export type GameDnaRecommendationData = {
  game: GameDnaGame;
  matchPercentage: number;
  rankingScore: number;
  reason: string;
  label: string;
  matchingTraits: GameDnaTraitId[];

  /**
   * The selected games that most closely resemble this candidate.
   * This lets the UI explain the recommendation with familiar examples.
   */
  closestSelectedGames: GameDnaClosestGame[];

  /**
   * A short expectation-setting note about how the candidate differs from
   * the user's average profile.
   */
  differenceNote: string | null;
};

export type BuildRecommendationReasonContext = {
  candidateTitle?: string;
  closestSelectedGames?: readonly GameDnaClosestGame[];
};

export type BuildGuideRecommendationsOptions = {
  games: readonly GameDnaGame[];
  selectedGameIds: ReadonlySet<string>;
  averageTraits: GameDnaTraits;
  isComplete: boolean;

  /**
   * Maximum number of results.
   */
  limit?: number;

  /**
   * Guide coverage is only a small tie-breaker. It must never overpower
   * actual taste similarity.
   */
  guideBonusCap?: number;

  /**
   * Small bonus applied per guide page before the cap.
   */
  guideBonusPerPage?: number;

  /**
   * Keep false for the normal product experience so games without guides can
   * still be recommended. Set true only for a guide-only module.
   */
  guideOnly?: boolean;
};

type TraitMeta = {
  label: string;
  description: string;
};

type SharedTraitScore = {
  traitId: GameDnaTraitId;
  userScore: number;
  candidateScore: number;
  sharedScore: number;
  reasonScore: number;
};

const MAX_TRAIT_SCORE = 5;
const DEFAULT_RECOMMENDATION_LIMIT = 3;
const DEFAULT_GUIDE_BONUS_CAP = 2;
const DEFAULT_GUIDE_BONUS_PER_PAGE = 0.2;

export const GAME_DNA_TRAIT_META: Record<
  GameDnaTraitId,
  TraitMeta
> = {
  exploration: {
    label: "Exploration",
    description:
      "Discovering new locations, secrets, optional routes, and hidden rewards.",
  },

  progression: {
    label: "Progression",
    description:
      "Unlocking stronger tools, skills, equipment, and long-term upgrades.",
  },

  systems: {
    label: "Systems",
    description:
      "Learning how interconnected mechanics work and finding efficient combinations.",
  },

  crafting: {
    label: "Crafting",
    description:
      "Collecting resources, creating items, and improving equipment.",
  },

  story: {
    label: "Story",
    description:
      "Following characters, quests, worldbuilding, and meaningful choices.",
  },

  combat: {
    label: "Combat",
    description:
      "Mastering encounters, weapons, builds, movement, and boss fights.",
  },

  strategy: {
    label: "Strategy",
    description:
      "Planning ahead, managing resources, and making efficient decisions.",
  },

  puzzle: {
    label: "Puzzle Solving",
    description:
      "Recognizing patterns, interpreting clues, and solving logical challenges.",
  },

  survival: {
    label: "Survival",
    description:
      "Managing risk, limited resources, hostile environments, and recovery.",
  },

  social: {
    label: "Social Play",
    description:
      "Cooperation, relationships, community building, and shared experiences.",
  },
};

/**
 * Convert one shared catalog item into the minimal shape expected by the
 * existing Game DNA UI.
 */
export function toGameDnaGame(
  game: RecommenderGame,
): GameDnaGame | null {
  const cover =
    game.cover ?? game.image;

  if (!cover) {
    return null;
  }

  const releaseYear =
    getReleaseYear(
      game.firstReleaseDate,
    );

  const guide =
    game.guideDestination;

  const aliases = uniqueStrings([
    game.name,
    game.title,
    humanizeSlug(game.slug),
  ]).filter(
    (alias) =>
      normalizeSearchText(alias) !==
      normalizeSearchText(game.title),
  );

  return {
    id: game.id,
    title: game.title,
    cover,
    image: cover,
    traits: game.traits,

    aliases,
    genres: game.genres,

    hasGuide: game.hasGuide,
    guideDestination:
      game.guideDestination,

    platforms: game.platforms,
    playModes: game.playModes,

    firstReleaseDate:
      game.firstReleaseDate,
    summary: game.summary,
    igdbUrl: game.igdbUrl,

    ...(releaseYear
      ? { releaseYear }
      : {}),

    ...(guide
      ? {
          guideUrl: guide.url,
          guideCount:
            guide.guideCount,
          guideSiteName:
            guide.siteName,
          guideIsInternal:
            guide.isInternal,
        }
      : {
          guideCount: 0,
        }),
  };
}

/**
 * Convert the shared GAMES catalog for the existing Game DNA UI.
 *
 * Games without a cover are intentionally skipped because the current
 * picker/grid/result cards render a required image.
 */
export function toGameDnaGames(
  games: readonly RecommenderGame[],
): GameDnaGame[] {
  return games.flatMap((game) => {
    const converted =
      toGameDnaGame(game);

    return converted
      ? [converted]
      : [];
  });
}

/**
 * Calculate the average trait vector for the selected games.
 */
export function calculateAverageTraits(
  selectedGames:
    readonly Pick<
      GameDnaGame,
      "traits"
    >[],
): GameDnaTraits {
  const averageTraits =
    createEmptyTraits();

  if (selectedGames.length === 0) {
    return averageTraits;
  }

  for (const game of selectedGames) {
    for (const traitId of GAME_DNA_TRAIT_IDS) {
      averageTraits[traitId] +=
        clampTraitScore(
          game.traits[traitId],
        );
    }
  }

  for (const traitId of GAME_DNA_TRAIT_IDS) {
    averageTraits[traitId] =
      roundTraitScore(
        averageTraits[traitId] /
          selectedGames.length,
      );
  }

  return averageTraits;
}

/**
 * Build the human-readable Gaming DNA profile.
 */
export function buildGameDnaProfile(
  averageTraits: GameDnaTraits,
): GameDnaProfileData {
  const sortedTraits =
    GAME_DNA_TRAIT_IDS.map(
      (
        traitId,
      ): GameDnaTraitResult => ({
        id: traitId,
        score: roundTraitScore(
          clampTraitScore(
            averageTraits[traitId],
          ),
        ),
        ...GAME_DNA_TRAIT_META[
          traitId
        ],
      }),
    ).sort(compareTraitResults);

  const primaryTrait =
    sortedTraits[0] ??
    createFallbackTrait(
      "exploration",
    );

  const secondaryTrait =
    sortedTraits[1] ??
    createFallbackTrait(
      "progression",
    );

  return {
    eyebrow: "Your Gaming DNA",

    title: buildProfileTitle(
      primaryTrait.id,
      secondaryTrait.id,
    ),

    description:
      buildProfileDescription(
        primaryTrait.id,
        secondaryTrait.id,
      ),

    traits: sortedTraits,

    highlights:
      buildProfileHighlights(
        sortedTraits,
      ),
  };
}

/**
 * Generate recommendations after the user reveals their DNA.
 *
 * Despite the legacy function name, guide coverage does not gate normal
 * recommendations. Matching comes first; guide coverage adds only a small
 * tie-break bonus and supplies the CTA when available.
 */
export function buildGuideRecommendations({
  games,
  selectedGameIds,
  averageTraits,
  isComplete,
  limit =
    DEFAULT_RECOMMENDATION_LIMIT,
  guideBonusCap =
    DEFAULT_GUIDE_BONUS_CAP,
  guideBonusPerPage =
    DEFAULT_GUIDE_BONUS_PER_PAGE,
  guideOnly = false,
}: BuildGuideRecommendationsOptions): GameDnaRecommendationData[] {
  if (!isComplete || limit <= 0) {
    return [];
  }

  const normalizedLimit =
    Math.max(
      1,
      Math.floor(limit),
    );

  const normalizedGuideBonusCap =
    Math.max(
      0,
      guideBonusCap,
    );

  const normalizedGuideBonusPerPage =
    Math.max(
      0,
      guideBonusPerPage,
    );

  const selectedGames =
    games.filter((game) =>
      selectedGameIds.has(
        game.id,
      ),
    );

  const rankedRecommendations =
    games
      .filter((game) => {
        if (
          selectedGameIds.has(
            game.id,
          )
        ) {
          return false;
        }

        if (
          guideOnly &&
          !game.guideUrl
        ) {
          return false;
        }

        return true;
      })
      .map((game) => {
        const matchPercentage =
          calculateMatchPercentage(
            averageTraits,
            game.traits,
          );

        const guideCount =
          Math.max(
            0,
            game.guideCount ?? 0,
          );

        const guideBonus =
          game.guideUrl
            ? Math.min(
                normalizedGuideBonusCap,
                guideCount *
                  normalizedGuideBonusPerPage,
              )
            : 0;

        const matchingTraits =
          getStrongestSharedTraits(
            averageTraits,
            game.traits,
            3,
          );

        const closestSelectedGames =
          getClosestSelectedGames(
            game,
            selectedGames,
            2,
          );

        return {
          game,
          matchPercentage,
          rankingScore:
            matchPercentage +
            guideBonus,
          reason:
            buildRecommendationReason(
              averageTraits,
              game.traits,
              {
                candidateTitle:
                  game.title,
                closestSelectedGames,
              },
            ),
          label: "Recommended",
          matchingTraits,
          closestSelectedGames,
          differenceNote:
            buildRecommendationDifferenceNote(
              averageTraits,
              game.traits,
            ),
        };
      })
      .sort(
        compareRecommendations,
      )
      .slice(
        0,
        normalizedLimit,
      );

  return assignRecommendationLabels(
    rankedRecommendations,
  );
}

/**
 * Alias with a clearer name for new code. Existing components can keep using
 * buildGuideRecommendations during migration.
 */
export const buildGameRecommendations =
  buildGuideRecommendations;

/**
 * Calculate weighted similarity between a user profile and a candidate game.
 *
 * High-scoring user preferences receive more weight, while low-priority
 * dimensions still contribute enough to prevent one-dimensional matches.
 */
export function calculateMatchPercentage(
  userTraits: GameDnaTraits,
  candidateTraits: GameDnaTraits,
): number {
  let weightedDifference = 0;
  let maximumWeightedDifference = 0;

  for (const traitId of GAME_DNA_TRAIT_IDS) {
    const userScore =
      clampTraitScore(
        userTraits[traitId],
      );

    const candidateScore =
      clampTraitScore(
        candidateTraits[traitId],
      );

    const traitWeight =
      getUserTraitWeight(
        userScore,
      );

    weightedDifference +=
      Math.abs(
        userScore -
          candidateScore,
      ) * traitWeight;

    maximumWeightedDifference +=
      MAX_TRAIT_SCORE *
      traitWeight;
  }

  if (
    maximumWeightedDifference <= 0
  ) {
    return 0;
  }

  const similarity =
    100 -
    (weightedDifference /
      maximumWeightedDifference) *
      100;

  return clampPercentage(
    similarity,
  );
}

/**
 * Raw 0–50 Manhattan distance across the ten traits.
 * Lower means more similar.
 */
export function calculateTraitDistance(
  leftTraits: GameDnaTraits,
  rightTraits: GameDnaTraits,
): number {
  return roundTraitScore(
    GAME_DNA_TRAIT_IDS.reduce(
      (total, traitId) =>
        total +
        Math.abs(
          clampTraitScore(
            leftTraits[traitId],
          ) -
            clampTraitScore(
              rightTraits[traitId],
            ),
        ),
      0,
    ),
  );
}

/**
 * Return the strongest shared dimensions, useful for result chips and
 * explanations.
 */
export function getStrongestSharedTraits(
  userTraits: GameDnaTraits,
  candidateTraits: GameDnaTraits,
  limit = 2,
): GameDnaTraitId[] {
  if (limit <= 0) {
    return [];
  }

  return buildSharedTraitScores(
    userTraits,
    candidateTraits,
  )
    .filter(
      ({ sharedScore }) =>
        sharedScore >= 1,
    )
    .slice(
      0,
      Math.floor(limit),
    )
    .map(
      ({ traitId }) =>
        traitId,
    );
}

/**
 * Explain a recommendation using the strongest dimensions shared by both
 * profiles.
 */
export function buildRecommendationReason(
  userTraits: GameDnaTraits,
  candidateTraits: GameDnaTraits,
  context:
    BuildRecommendationReasonContext = {},
): string {
  const strongestSharedTraits =
    getStrongestSharedTraits(
      userTraits,
      candidateTraits,
      2,
    );

  const sharedExperience =
    buildSharedExperiencePhrase(
      strongestSharedTraits,
    );

  const closestGameNames =
    context.closestSelectedGames
      ?.slice(0, 2)
      .map((game) => game.title) ??
    [];

  if (
    closestGameNames.length > 0 &&
    sharedExperience
  ) {
    return `Like ${formatNaturalList(closestGameNames)}, it ${sharedExperience}.`;
  }

  if (sharedExperience) {
    return `A good fit if you enjoy games that ${sharedExperience}.`;
  }

  if (context.candidateTitle) {
    return `${context.candidateTitle} moves in a different direction from most of your grid, but it still overlaps with parts of your broader playstyle.`;
  }

  return "This game moves in a different direction from most of your grid, but it still overlaps with parts of your broader playstyle.";
}

/**
 * Find the selected games whose ten-trait profiles are closest to a
 * recommendation candidate.
 */
export function getClosestSelectedGames(
  candidateGame: GameDnaGame,
  selectedGames:
    readonly GameDnaGame[],
  limit = 2,
): GameDnaClosestGame[] {
  if (limit <= 0) {
    return [];
  }

  return selectedGames
    .filter(
      (selectedGame) =>
        selectedGame.id !==
        candidateGame.id,
    )
    .map((selectedGame) => ({
      id: selectedGame.id,
      title:
        selectedGame.title,
      cover:
        selectedGame.cover,
      similarity:
        calculateMatchPercentage(
          selectedGame.traits,
          candidateGame.traits,
        ),
    }))
    .sort((left, right) => {
      const similarityDifference =
        right.similarity -
        left.similarity;

      if (
        similarityDifference !== 0
      ) {
        return similarityDifference;
      }

      return left.title.localeCompare(
        right.title,
        "en",
      );
    })
    .slice(
      0,
      Math.floor(limit),
    );
}

/**
 * Explain how a candidate differs from the user's average profile.
 * This is deliberately short so the result card can show it as an optional
 * expectation-setting note.
 */
export function buildRecommendationDifferenceNote(
  userTraits: GameDnaTraits,
  candidateTraits: GameDnaTraits,
): string | null {
  const differences =
    GAME_DNA_TRAIT_IDS.map(
      (traitId) => ({
        traitId,
        difference:
          clampTraitScore(
            candidateTraits[
              traitId
            ],
          ) -
          clampTraitScore(
            userTraits[traitId],
          ),
      }),
    );

  const strongerTrait =
    [...differences]
      .sort(
        (left, right) =>
          right.difference -
          left.difference,
      )
      .find(
        ({ difference }) =>
          difference >= 0.9,
      );

  const lighterTrait =
    [...differences]
      .sort(
        (left, right) =>
          left.difference -
          right.difference,
      )
      .find(
        ({ difference }) =>
          difference <= -0.9,
      );

  if (
    strongerTrait &&
    lighterTrait
  ) {
    return `Expect more ${getTraitExperienceNoun(
      strongerTrait.traitId,
    )} and less ${getTraitExperienceNoun(
      lighterTrait.traitId,
    )} than your average pick.`;
  }

  if (strongerTrait) {
    return `It leans more heavily into ${getTraitExperienceNoun(
      strongerTrait.traitId,
    )} than your average pick.`;
  }

  if (lighterTrait) {
    return `It is lighter on ${getTraitExperienceNoun(
      lighterTrait.traitId,
    )} than your average pick.`;
  }

  return null;
}

export function createEmptyTraits(): GameDnaTraits {
  return {
    exploration: 0,
    progression: 0,
    systems: 0,
    crafting: 0,
    story: 0,
    combat: 0,
    strategy: 0,
    puzzle: 0,
    survival: 0,
    social: 0,
  };
}

export function clampTraitScore(
  value: number,
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      MAX_TRAIT_SCORE,
      value,
    ),
  );
}

function getUserTraitWeight(
  userScore: number,
): number {
  /**
   * Weight range: 0.75–2.0.
   */
  return (
    0.75 +
    (userScore /
      MAX_TRAIT_SCORE) *
      1.25
  );
}

function buildSharedTraitScores(
  userTraits: GameDnaTraits,
  candidateTraits: GameDnaTraits,
): SharedTraitScore[] {
  return GAME_DNA_TRAIT_IDS.map(
    (traitId) => {
      const userScore =
        clampTraitScore(
          userTraits[traitId],
        );

      const candidateScore =
        clampTraitScore(
          candidateTraits[
            traitId
          ],
        );

      const sharedScore =
        Math.min(
          userScore,
          candidateScore,
        );

      /**
       * Shared strength matters most, while the user's own preference breaks
       * close ties.
       */
      const reasonScore =
        sharedScore * 0.7 +
        userScore * 0.3;

      return {
        traitId,
        userScore,
        candidateScore,
        sharedScore,
        reasonScore,
      };
    },
  ).sort((left, right) => {
    const reasonDifference =
      right.reasonScore -
      left.reasonScore;

    if (reasonDifference !== 0) {
      return reasonDifference;
    }

    const sharedDifference =
      right.sharedScore -
      left.sharedScore;

    if (sharedDifference !== 0) {
      return sharedDifference;
    }

    return (
      GAME_DNA_TRAIT_IDS.indexOf(
        left.traitId,
      ) -
      GAME_DNA_TRAIT_IDS.indexOf(
        right.traitId,
      )
    );
  });
}

function compareTraitResults(
  left: GameDnaTraitResult,
  right: GameDnaTraitResult,
): number {
  const scoreDifference =
    right.score - left.score;

  if (scoreDifference !== 0) {
    return scoreDifference;
  }

  return (
    GAME_DNA_TRAIT_IDS.indexOf(
      left.id,
    ) -
    GAME_DNA_TRAIT_IDS.indexOf(
      right.id,
    )
  );
}

function compareRecommendations(
  left: GameDnaRecommendationData,
  right: GameDnaRecommendationData,
): number {
  const rankingDifference =
    right.rankingScore -
    left.rankingScore;

  if (rankingDifference !== 0) {
    return rankingDifference;
  }

  const matchDifference =
    right.matchPercentage -
    left.matchPercentage;

  if (matchDifference !== 0) {
    return matchDifference;
  }

  const guideDifference =
    Number(
      Boolean(
        right.game.guideUrl,
      ),
    ) -
    Number(
      Boolean(
        left.game.guideUrl,
      ),
    );

  if (guideDifference !== 0) {
    return guideDifference;
  }

  return left.game.title.localeCompare(
    right.game.title,
    "en",
  );
}

function buildProfileTitle(
  primaryTrait: GameDnaTraitId,
  secondaryTrait: GameDnaTraitId,
): string {
  const exactTitles: Partial<
    Record<
      `${GameDnaTraitId}-${GameDnaTraitId}`,
      string
    >
  > = {
    "exploration-progression":
      "Progression-Driven Explorer",

    "exploration-story":
      "Story-Seeking Explorer",

    "exploration-survival":
      "Frontier Survivor",

    "exploration-puzzle":
      "Curious Problem Solver",

    "systems-strategy":
      "Systems-First Strategist",

    "systems-crafting":
      "Experimental Builder",

    "systems-progression":
      "Optimization Architect",

    "combat-progression":
      "Build-Focused Fighter",

    "combat-strategy":
      "Tactical Challenger",

    "combat-survival":
      "Battle-Hardened Survivor",

    "story-social":
      "Character-Driven Adventurer",

    "story-exploration":
      "Worldbuilding Explorer",

    "puzzle-strategy":
      "Methodical Problem Solver",

    "puzzle-exploration":
      "Curiosity-Driven Solver",

    "crafting-progression":
      "Progression Architect",

    "crafting-survival":
      "Resourceful Builder",

    "survival-systems":
      "Resourceful Survivor",

    "strategy-progression":
      "Long-Term Planner",

    "social-story":
      "Community Storyteller",

    "social-survival":
      "Co-op Survivor",

    "social-strategy":
      "Team Strategist",

    "progression-combat":
      "Build-Focused Fighter",

    "progression-systems":
      "Optimization Architect",

    "story-puzzle":
      "Narrative Investigator",

    "strategy-survival":
      "Calculated Survivor",
  };

  const directKey =
    `${primaryTrait}-${secondaryTrait}` as const;

  const reverseKey =
    `${secondaryTrait}-${primaryTrait}` as const;

  return (
    exactTitles[directKey] ??
    exactTitles[reverseKey] ??
    `${GAME_DNA_TRAIT_META[primaryTrait].label}-First Player`
  );
}

function buildProfileDescription(
  primaryTrait: GameDnaTraitId,
  secondaryTrait: GameDnaTraitId,
): string {
  const pairKey =
    `${primaryTrait}-${secondaryTrait}` as const;

  const reversePairKey =
    `${secondaryTrait}-${primaryTrait}` as const;

  const descriptions: Partial<
    Record<
      `${GameDnaTraitId}-${GameDnaTraitId}`,
      string
    >
  > = {
    "systems-progression":
      "You tend to stay with games that reveal deeper mechanics over time and turn that understanding into visible upgrades, stronger builds, and better options.",

    "systems-strategy":
      "You enjoy learning how a game's parts connect, then using that knowledge to plan efficiently and solve problems on your own terms.",

    "exploration-story":
      "You are drawn to games that make curiosity feel worthwhile, especially when new places, characters, and discoveries deepen the world around you.",

    "exploration-progression":
      "You like moving into the unknown and coming back stronger, with new tools, routes, or abilities that make the next discovery possible.",

    "combat-progression":
      "You enjoy combat most when improvement is visible—through sharper execution, stronger builds, and new ways to handle difficult encounters.",

    "combat-strategy":
      "You prefer fights that reward preparation and judgment, not just fast reactions. Builds, positioning, and choosing the right approach matter.",

    "crafting-survival":
      "You enjoy turning limited resources into security, useful tools, and a stronger position in worlds that do not hand out progress freely.",

    "story-puzzle":
      "You like piecing together both mechanics and meaning, especially when clues, discoveries, and narrative details reward close attention.",

    "social-survival":
      "Shared challenges are a major part of the appeal for you. Cooperation feels best when players rely on one another to prepare, recover, and progress.",

    "strategy-progression":
      "You enjoy games where good long-term decisions compound, turning careful planning into stronger systems, better options, and lasting momentum.",
  };

  return (
    descriptions[pairKey] ??
    descriptions[
      reversePairKey
    ] ??
    `Your grid repeatedly points toward ${GAME_DNA_TRAIT_META[
      primaryTrait
    ].label.toLowerCase()} and ${GAME_DNA_TRAIT_META[
      secondaryTrait
    ].label.toLowerCase()}. You are most engaged when a game lets those strengths build on each other instead of treating them as isolated features.`
  );
}

function buildProfileHighlights(
  sortedTraits:
    readonly GameDnaTraitResult[],
): string[] {
  return sortedTraits
    .filter(
      (trait) =>
        trait.score > 0,
    )
    .slice(0, 4)
    .map((trait) =>
      getTraitHighlight(
        trait.id,
      ),
    );
}

function getTraitHighlight(
  traitId: GameDnaTraitId,
): string {
  switch (traitId) {
    case "exploration":
      return "You enjoy discovering optional routes, hidden areas, and secrets without being rushed.";

    case "progression":
      return "Visible upgrades and long-term character growth keep you invested.";

    case "systems":
      return "You like understanding how mechanics connect and finding combinations the game does not explain immediately.";

    case "crafting":
      return "Gathering resources feels worthwhile when it leads to useful tools, equipment, or upgrades.";

    case "story":
      return "Characters, worldbuilding, and narrative payoff are important parts of the experience.";

    case "combat":
      return "You enjoy improving through stronger builds, better execution, and challenging encounters.";

    case "strategy":
      return "Planning and efficient decision-making matter more to you than simply reacting quickly.";

    case "puzzle":
      return "You enjoy games that reward careful observation and logical problem solving.";

    case "survival":
      return "Risk, limited resources, and recovering from difficult situations make progress feel meaningful.";

    case "social":
      return "Relationships, cooperation, and shared experiences make a game more memorable.";
  }
}

function assignRecommendationLabels(
  recommendations:
    readonly GameDnaRecommendationData[],
): GameDnaRecommendationData[] {
  const firstMatch =
    recommendations[0]
      ?.matchPercentage;

  const secondMatch =
    recommendations[1]
      ?.matchPercentage;

  const hasClearLeader =
    firstMatch !== undefined &&
    (secondMatch === undefined ||
      firstMatch -
        secondMatch >=
        2);

  return recommendations.map(
    (
      recommendation,
      index,
    ) => ({
      ...recommendation,
      label:
        index === 0 &&
        hasClearLeader
          ? "Top Match"
          : getFitLabel(
              recommendation.matchPercentage,
            ),
    }),
  );
}

function getFitLabel(
  matchPercentage: number,
): string {
  if (matchPercentage >= 88) {
    return "Top Match";
  }

  if (matchPercentage >= 82) {
    return "Strong Fit";
  }

  if (matchPercentage >= 75) {
    return "Good Fit";
  }

  if (matchPercentage >= 68) {
    return "Worth Exploring";
  }

  return "Wildcard";
}

function buildSharedExperiencePhrase(
  traitIds:
    readonly GameDnaTraitId[],
): string | null {
  if (traitIds.length === 0) {
    return null;
  }

  const primaryTrait =
    traitIds[0];

  const secondaryTrait =
    traitIds[1];

  if (!secondaryTrait) {
    return getSingleTraitExperiencePhrase(
      primaryTrait,
    );
  }

  const pairKey =
    `${primaryTrait}-${secondaryTrait}` as const;

  const reversePairKey =
    `${secondaryTrait}-${primaryTrait}` as const;

  const pairPhrases: Partial<
    Record<
      `${GameDnaTraitId}-${GameDnaTraitId}`,
      string
    >
  > = {
    "systems-progression":
      "rewards you for learning how its mechanics connect and turning that knowledge into steady upgrades and new options",

    "systems-strategy":
      "gives you interconnected mechanics to understand, then lets good planning turn that knowledge into an advantage",

    "exploration-story":
      "makes curiosity pay off through new places, characters, and story details",

    "exploration-progression":
      "turns discovery into momentum by opening new routes, tools, and abilities",

    "combat-progression":
      "keeps combat rewarding through stronger builds, better execution, and visible long-term growth",

    "combat-strategy":
      "asks you to combine execution with preparation, positioning, and smart build choices",

    "crafting-survival":
      "makes gathering and preparation matter because useful tools can change whether a difficult run succeeds",

    "strategy-progression":
      "lets careful decisions compound into stronger systems and better long-term options",

    "story-puzzle":
      "rewards close attention by linking clues, discoveries, and narrative payoff",

    "social-survival":
      "makes cooperation meaningful by asking players to prepare, recover, and survive together",

    "puzzle-strategy":
      "rewards observation and planning more than rushing into the first available solution",

    "crafting-systems":
      "gives you resources and mechanics that become more satisfying as you learn how they fit together",

    "survival-systems":
      "turns risk management into a systems problem, where preparation and understanding matter as much as reflexes",

    "social-strategy":
      "makes teamwork more rewarding when players coordinate roles, resources, and timing",
  };

  return (
    pairPhrases[pairKey] ??
    pairPhrases[
      reversePairKey
    ] ??
    `leans into ${GAME_DNA_TRAIT_META[
      primaryTrait
    ].label.toLowerCase()} while giving ${GAME_DNA_TRAIT_META[
      secondaryTrait
    ].label.toLowerCase()} a meaningful role`
  );
}

function getSingleTraitExperiencePhrase(
  traitId: GameDnaTraitId,
): string {
  switch (traitId) {
    case "exploration":
      return "rewards curiosity with useful discoveries, optional routes, and new places to understand";

    case "progression":
      return "keeps giving you visible upgrades, stronger options, and reasons to continue";

    case "systems":
      return "becomes more satisfying as you understand how its mechanics connect";

    case "crafting":
      return "makes gathering worthwhile by turning resources into useful tools and upgrades";

    case "story":
      return "uses characters, worldbuilding, and narrative payoff to keep you invested";

    case "combat":
      return "keeps encounters engaging through execution, builds, and challenging fights";

    case "strategy":
      return "rewards preparation, efficient decisions, and thinking beyond the next move";

    case "puzzle":
      return "rewards careful observation, pattern recognition, and logical problem solving";

    case "survival":
      return "makes preparation and recovery matter when resources and safety are limited";

    case "social":
      return "becomes more memorable through cooperation, relationships, and shared experiences";
  }
}

function getTraitExperienceNoun(
  traitId: GameDnaTraitId,
): string {
  switch (traitId) {
    case "exploration":
      return "exploration";

    case "progression":
      return "long-term progression";

    case "systems":
      return "systems depth";

    case "crafting":
      return "crafting and resource use";

    case "story":
      return "story and character focus";

    case "combat":
      return "combat";

    case "strategy":
      return "planning and strategy";

    case "puzzle":
      return "puzzle solving";

    case "survival":
      return "survival pressure";

    case "social":
      return "co-op and social play";
  }
}

function formatNaturalList(
  values: readonly string[],
): string {
  if (values.length === 0) {
    return "";
  }

  if (values.length === 1) {
    return values[0] ?? "";
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values
    .slice(0, -1)
    .join(", ")}, and ${
    values[
      values.length - 1
    ]
  }`;
}

function createFallbackTrait(
  traitId: GameDnaTraitId,
): GameDnaTraitResult {
  return {
    id: traitId,
    score: 0,
    ...GAME_DNA_TRAIT_META[
      traitId
    ],
  };
}

function clampPercentage(
  value: number,
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(value * 10) / 10,
    ),
  );
}

function roundTraitScore(
  value: number,
): number {
  return (
    Math.round(value * 100) /
    100
  );
}

function getReleaseYear(
  firstReleaseDate: string | null,
): number | undefined {
  if (!firstReleaseDate) {
    return undefined;
  }

  const year =
    Number.parseInt(
      firstReleaseDate.slice(
        0,
        4,
      ),
      10,
    );

  if (
    !Number.isInteger(year) ||
    year < 1950 ||
    year > 2200
  ) {
    return undefined;
  }

  return year;
}

function humanizeSlug(
  slug: string,
): string {
  return slug
    .replaceAll("-", " ")
    .replaceAll(/\s+/g, " ")
    .trim();
}

function normalizeSearchText(
  value: string,
): string {
  return value
    .trim()
    .toLocaleLowerCase("en-US")
    .replaceAll(/[™®©]/g, "")
    .replaceAll(
      /[:\-–—_.']/g,
      " ",
    )
    .replaceAll(/\s+/g, " ");
}

function uniqueStrings(
  values: readonly string[],
): string[] {
  const seen =
    new Set<string>();

  const result: string[] = [];

  for (const value of values) {
    const trimmed =
      value.trim();

    if (!trimmed) {
      continue;
    }

    const normalized =
      normalizeSearchText(
        trimmed,
      );

    if (
      seen.has(normalized)
    ) {
      continue;
    }

    seen.add(normalized);
    result.push(trimmed);
  }

  return result;
}