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
  
  export type GameDnaTraits = Record<GameDnaTraitId, number>;
  
  export type GameDnaGame = {
    id: string;
    title: string;
    cover: string;
  
    releaseYear?: number;
    aliases?: string[];
    genres?: string[];
  
    /**
     * 所有 Trait 统一使用 0–5 分。
     */
    traits: GameDnaTraits;
  
    /**
     * 有站内攻略 Hub 时填写。
     *
     * 例如：
     * "/moonlight-peaks"
     */
    guideUrl?: string;
  
    /**
     * 该游戏已有多少篇攻略内容。
     *
     * 推荐排序时只提供少量加分，
     * 不会覆盖真实匹配度。
     */
    guideCount?: number;
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
  
  export type GameDnaRecommendationData = {
    game: GameDnaGame;
    matchPercentage: number;
    rankingScore: number;
    reason: string;
    label: string;
  };
  
  export type BuildGuideRecommendationsOptions = {
    games: GameDnaGame[];
    selectedGameIds: Set<string>;
    averageTraits: GameDnaTraits;
    isComplete: boolean;
  
    /**
     * 最多返回多少款推荐游戏。
     */
    limit?: number;
  
    /**
     * 攻略数量提供的最高加分。
     *
     * 默认最高 6 分，防止内容数量
     * 覆盖真实的用户偏好匹配度。
     */
    guideBonusCap?: number;
  };
  
  type TraitMeta = {
    label: string;
    description: string;
  };
  
  const MAX_TRAIT_SCORE = 5;
  
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
   * 根据用户选中的游戏计算平均 Trait。
   */
  export function calculateAverageTraits(
    selectedGames: GameDnaGame[]
  ): GameDnaTraits {
    const averageTraits = createEmptyTraits();
  
    if (selectedGames.length === 0) {
      return averageTraits;
    }
  
    for (const game of selectedGames) {
      for (const traitId of GAME_DNA_TRAIT_IDS) {
        averageTraits[traitId] += clampTraitScore(
          game.traits[traitId]
        );
      }
    }
  
    for (const traitId of GAME_DNA_TRAIT_IDS) {
      averageTraits[traitId] =
        averageTraits[traitId] / selectedGames.length;
    }
  
    return averageTraits;
  }
  
  /**
   * 根据平均 Trait 生成 Gaming DNA 画像。
   */
  export function buildGameDnaProfile(
    averageTraits: GameDnaTraits
  ): GameDnaProfileData {
    const sortedTraits = GAME_DNA_TRAIT_IDS.map(
      (traitId): GameDnaTraitResult => ({
        id: traitId,
        score: clampTraitScore(
          averageTraits[traitId]
        ),
        ...GAME_DNA_TRAIT_META[traitId],
      })
    ).sort((a, b) => b.score - a.score);
  
    const primaryTrait =
      sortedTraits[0] ??
      createFallbackTrait("exploration");
  
    const secondaryTrait =
      sortedTraits[1] ??
      createFallbackTrait("progression");
  
    return {
      eyebrow: "Your Gaming DNA",
  
      title: buildProfileTitle(
        primaryTrait.id,
        secondaryTrait.id
      ),
  
      description: buildProfileDescription(
        primaryTrait.id,
        secondaryTrait.id
      ),
  
      traits: sortedTraits,
  
      highlights: buildProfileHighlights(
        sortedTraits
      ),
    };
  }
  
  /**
   * 从有攻略 Hub 的游戏中生成推荐。
   */
  export function buildGuideRecommendations({
    games,
    selectedGameIds,
    averageTraits,
    isComplete,
    limit = 3,
    guideBonusCap = 6,
  }: BuildGuideRecommendationsOptions): GameDnaRecommendationData[] {
    if (!isComplete || limit <= 0) {
      return [];
    }
  
    const normalizedLimit = Math.max(
      1,
      Math.floor(limit)
    );
  
    const normalizedGuideBonusCap = Math.max(
      0,
      guideBonusCap
    );
  
    return games
      .filter(
        (game) =>
          Boolean(game.guideUrl) &&
          !selectedGameIds.has(game.id)
      )
      .map((game) => {
        const matchPercentage =
          calculateMatchPercentage(
            averageTraits,
            game.traits
          );
  
        const guideCount = Math.max(
          0,
          game.guideCount ?? 0
        );
  
        const guideBonus = Math.min(
          normalizedGuideBonusCap,
          guideCount
        );
  
        return {
          game,
          matchPercentage,
          rankingScore:
            matchPercentage + guideBonus,
          reason: buildRecommendationReason(
            averageTraits,
            game.traits
          ),
          label: "Recommended",
        };
      })
      .sort((a, b) => {
        const rankingDifference =
          b.rankingScore - a.rankingScore;
  
        if (rankingDifference !== 0) {
          return rankingDifference;
        }
  
        const matchDifference =
          b.matchPercentage -
          a.matchPercentage;
  
        if (matchDifference !== 0) {
          return matchDifference;
        }
  
        return a.game.title.localeCompare(
          b.game.title
        );
      })
      .slice(0, normalizedLimit)
      .map((recommendation, index) => ({
        ...recommendation,
        label: getRecommendationLabel(index),
      }));
  }
  
  /**
   * 计算用户画像与候选游戏的匹配度。
   *
   * 用户分数较高的 Trait 权重更高。
   * 例如用户非常看重 Exploration，
   * 那么 Exploration 的差异会比低优先级 Trait 更重要。
   */
  export function calculateMatchPercentage(
    userTraits: GameDnaTraits,
    candidateTraits: GameDnaTraits
  ) {
    let weightedDifference = 0;
    let maximumWeightedDifference = 0;
  
    for (const traitId of GAME_DNA_TRAIT_IDS) {
      const userScore = clampTraitScore(
        userTraits[traitId]
      );
  
      const candidateScore = clampTraitScore(
        candidateTraits[traitId]
      );
  
      /**
       * 权重范围约为 0.75–2。
       *
       * 用户越重视的维度，
       * 对推荐结果影响越大。
       */
      const traitWeight =
        0.75 +
        (userScore / MAX_TRAIT_SCORE) * 1.25;
  
      weightedDifference +=
        Math.abs(userScore - candidateScore) *
        traitWeight;
  
      maximumWeightedDifference +=
        MAX_TRAIT_SCORE * traitWeight;
    }
  
    if (maximumWeightedDifference <= 0) {
      return 0;
    }
  
    const similarity =
      100 -
      (weightedDifference /
        maximumWeightedDifference) *
        100;
  
    return clampPercentage(similarity);
  }
  
  /**
   * 根据双方共同较强的 Trait 解释推荐原因。
   */
  export function buildRecommendationReason(
    userTraits: GameDnaTraits,
    candidateTraits: GameDnaTraits
  ) {
    const strongestSharedTraits =
      GAME_DNA_TRAIT_IDS.map((traitId) => {
        const userScore = clampTraitScore(
          userTraits[traitId]
        );
  
        const candidateScore = clampTraitScore(
          candidateTraits[traitId]
        );
  
        const sharedScore = Math.min(
          userScore,
          candidateScore
        );
  
        /**
         * 共同强度占 70%，
         * 用户自身偏好占 30%。
         */
        const reasonScore =
          sharedScore * 0.7 +
          userScore * 0.3;
  
        return {
          traitId,
          sharedScore,
          reasonScore,
        };
      })
        .filter(
          ({ sharedScore }) =>
            sharedScore >= 1
        )
        .sort(
          (a, b) =>
            b.reasonScore - a.reasonScore
        )
        .slice(0, 2)
        .map(
          ({ traitId }) =>
            GAME_DNA_TRAIT_META[
              traitId
            ].label.toLowerCase()
        );
  
    if (strongestSharedTraits.length === 0) {
      return "This game offers a different experience while still sharing parts of your broader playstyle.";
    }
  
    if (strongestSharedTraits.length === 1) {
      return `A strong match for your interest in ${strongestSharedTraits[0]}.`;
    }
  
    return `A strong match for your interest in ${strongestSharedTraits[0]} and ${strongestSharedTraits[1]}.`;
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
  
  export function clampTraitScore(value: number) {
    if (!Number.isFinite(value)) {
      return 0;
    }
  
    return Math.max(
      0,
      Math.min(MAX_TRAIT_SCORE, value)
    );
  }
  
  function buildProfileTitle(
    primaryTrait: GameDnaTraitId,
    secondaryTrait: GameDnaTraitId
  ) {
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
    };
  
    const directKey =
      `${primaryTrait}-${secondaryTrait}` as `${GameDnaTraitId}-${GameDnaTraitId}`;
  
    const reverseKey =
      `${secondaryTrait}-${primaryTrait}` as `${GameDnaTraitId}-${GameDnaTraitId}`;
  
    return (
      exactTitles[directKey] ??
      exactTitles[reverseKey] ??
      `${GAME_DNA_TRAIT_META[primaryTrait].label}-First Player`
    );
  }
  
  function buildProfileDescription(
    primaryTrait: GameDnaTraitId,
    secondaryTrait: GameDnaTraitId
  ) {
    const primaryLabel =
      GAME_DNA_TRAIT_META[
        primaryTrait
      ].label.toLowerCase();
  
    const secondaryLabel =
      GAME_DNA_TRAIT_META[
        secondaryTrait
      ].label.toLowerCase();
  
    return `Your favorite games consistently reward ${primaryLabel} and ${secondaryLabel}. You are most engaged when a game gives you room to learn its rules, make meaningful progress, and approach challenges in your own way.`;
  }
  
  function buildProfileHighlights(
    sortedTraits: GameDnaTraitResult[]
  ) {
    return sortedTraits
      .filter((trait) => trait.score > 0)
      .slice(0, 4)
      .map((trait) =>
        getTraitHighlight(trait.id)
      );
  }
  
  function getTraitHighlight(
    traitId: GameDnaTraitId
  ) {
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
  
  function getRecommendationLabel(
    index: number
  ) {
    if (index === 0) {
      return "Best Match";
    }
  
    if (index === 1) {
      return "Strong Match";
    }
  
    if (index === 2) {
      return "Also Recommended";
    }
  
    return "Recommended";
  }
  
  function createFallbackTrait(
    traitId: GameDnaTraitId
  ): GameDnaTraitResult {
    return {
      id: traitId,
      score: 0,
      ...GAME_DNA_TRAIT_META[traitId],
    };
  }
  
  function clampPercentage(value: number) {
    if (!Number.isFinite(value)) {
      return 0;
    }
  
    return Math.max(
      0,
      Math.min(99, Math.round(value))
    );
  }