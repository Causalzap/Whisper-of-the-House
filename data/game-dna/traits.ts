import {
    GAME_DNA_TRAIT_IDS,
    type GameDnaTraitId,
    type GameDnaTraits,
  } from "@/lib/game-dna/recommendations";
  
  export const GAME_DNA_TRAIT_MIN = 0;
  export const GAME_DNA_TRAIT_MAX = 5;
  
  export type GameDnaTraitInput = Partial<
    Record<GameDnaTraitId, number>
  >;
  
  /**
   * 创建一套完整的游戏 Trait。
   *
   * 没有填写的维度自动设为 0，
   * 所有分数自动限制在 0–5。
   */
  export function defineGameTraits(
    input: GameDnaTraitInput
  ): GameDnaTraits {
    const traits = {} as GameDnaTraits;
  
    for (const traitId of GAME_DNA_TRAIT_IDS) {
      traits[traitId] = normalizeTraitScore(
        input[traitId] ?? 0
      );
    }
  
    return traits;
  }
  
  /**
   * 合并多套 Trait。
   *
   * 默认取每个维度的平均值，适合把多个玩法模板
   * 合并成一款游戏的初始 Trait，再进行人工微调。
   */
  export function mergeGameTraits(
    ...profiles: GameDnaTraitInput[]
  ): GameDnaTraits {
    if (profiles.length === 0) {
      return defineGameTraits({});
    }
  
    const merged = {} as GameDnaTraits;
  
    for (const traitId of GAME_DNA_TRAIT_IDS) {
      const total = profiles.reduce(
        (sum, profile) =>
          sum +
          normalizeTraitScore(
            profile[traitId] ?? 0
          ),
        0
      );
  
      merged[traitId] = normalizeTraitScore(
        total / profiles.length
      );
    }
  
    return merged;
  }
  
  /**
   * 在已有 Trait 基础上覆盖部分维度。
   */
  export function updateGameTraits(
    baseTraits: GameDnaTraits,
    overrides: GameDnaTraitInput
  ): GameDnaTraits {
    return defineGameTraits({
      ...baseTraits,
      ...overrides,
    });
  }
  
  export function normalizeTraitScore(
    value: number
  ) {
    if (!Number.isFinite(value)) {
      return GAME_DNA_TRAIT_MIN;
    }
  
    return Math.max(
      GAME_DNA_TRAIT_MIN,
      Math.min(
        GAME_DNA_TRAIT_MAX,
        Number(value.toFixed(2))
      )
    );
  }
  
  /**
   * 下面是录入游戏时可以复用的基础模板。
   *
   * 它们不是最终评分，只用于减少重复录入。
   * 每款游戏仍然建议在 games.ts 中进行人工覆盖。
   */
  export const GAME_DNA_TRAIT_PRESETS = {
    explorationAdventure: defineGameTraits({
      exploration: 5,
      progression: 4,
      systems: 3,
      crafting: 2,
      story: 4,
      combat: 3,
      strategy: 2,
      puzzle: 3,
      survival: 1,
      social: 1,
    }),
  
    cozySimulation: defineGameTraits({
      exploration: 3,
      progression: 4,
      systems: 4,
      crafting: 4,
      story: 3,
      combat: 0,
      strategy: 3,
      puzzle: 1,
      survival: 0,
      social: 4,
    }),
  
    actionRpg: defineGameTraits({
      exploration: 4,
      progression: 5,
      systems: 4,
      crafting: 2,
      story: 3,
      combat: 5,
      strategy: 3,
      puzzle: 1,
      survival: 2,
      social: 1,
    }),
  
    roguelike: defineGameTraits({
      exploration: 2,
      progression: 4,
      systems: 5,
      crafting: 1,
      story: 2,
      combat: 5,
      strategy: 4,
      puzzle: 1,
      survival: 3,
      social: 0,
    }),
  
    survivalCrafting: defineGameTraits({
      exploration: 5,
      progression: 4,
      systems: 4,
      crafting: 5,
      story: 1,
      combat: 3,
      strategy: 3,
      puzzle: 1,
      survival: 5,
      social: 2,
    }),
  
    strategySimulation: defineGameTraits({
      exploration: 1,
      progression: 3,
      systems: 5,
      crafting: 2,
      story: 1,
      combat: 2,
      strategy: 5,
      puzzle: 2,
      survival: 2,
      social: 1,
    }),
  
    narrativeAdventure: defineGameTraits({
      exploration: 4,
      progression: 2,
      systems: 1,
      crafting: 0,
      story: 5,
      combat: 1,
      strategy: 1,
      puzzle: 4,
      survival: 1,
      social: 2,
    }),
  
    puzzleGame: defineGameTraits({
      exploration: 1,
      progression: 2,
      systems: 3,
      crafting: 0,
      story: 1,
      combat: 0,
      strategy: 4,
      puzzle: 5,
      survival: 0,
      social: 0,
    }),
  
    multiplayerAction: defineGameTraits({
      exploration: 2,
      progression: 4,
      systems: 3,
      crafting: 1,
      story: 1,
      combat: 5,
      strategy: 4,
      puzzle: 0,
      survival: 2,
      social: 5,
    }),
  } as const;