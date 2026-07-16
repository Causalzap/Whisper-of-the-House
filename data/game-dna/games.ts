import type { GameDnaGame } from "@/lib/game-dna/recommendations";

import {
  defineGameTraits,
  GAME_DNA_TRAIT_PRESETS,
  updateGameTraits,
} from "@/data/game-dna/traits";

export const gameDnaGames = [
  /*
   * ---------------------------------------------------------
   * Popular games
   *
   * 这些游戏排在数组前面，
   * 没有搜索关键词时会优先显示。
   * ---------------------------------------------------------
   */

  {
    id: "minecraft",
    title: "Minecraft",
    cover:
      "/images/game-dna/covers/minecraft.webp",
    releaseYear: 2011,
    aliases: [
      "Minecraft Java Edition",
      "Minecraft Bedrock",
    ],
    genres: [
      "Sandbox",
      "Survival",
      "Crafting",
    ],
    traits: defineGameTraits({
      exploration: 5,
      progression: 3,
      systems: 4,
      crafting: 5,
      story: 0,
      combat: 2,
      strategy: 2,
      puzzle: 1,
      survival: 4,
      social: 4,
    }),
  },

  {
    id: "stardew-valley",
    title: "Stardew Valley",
    cover:
      "/images/game-dna/covers/stardew-valley.webp",
    releaseYear: 2016,
    aliases: ["Stardew"],
    genres: [
      "Farming",
      "Simulation",
      "RPG",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.cozySimulation,
      {
        exploration: 4,
        progression: 5,
        systems: 5,
        crafting: 4,
        story: 4,
        strategy: 3,
        social: 5,
      }
    ),
  },

  {
    id: "terraria",
    title: "Terraria",
    cover:
      "/images/game-dna/covers/terraria.webp",
    releaseYear: 2011,
    genres: [
      "Sandbox",
      "Action",
      "Survival",
    ],
    traits: defineGameTraits({
      exploration: 5,
      progression: 5,
      systems: 4,
      crafting: 5,
      story: 1,
      combat: 5,
      strategy: 3,
      puzzle: 1,
      survival: 3,
      social: 3,
    }),
  },

  {
    id: "elden-ring",
    title: "Elden Ring",
    cover:
      "/images/game-dna/covers/elden-ring.webp",
    releaseYear: 2022,
    aliases: ["Elden Ring Shadow of the Erdtree"],
    genres: [
      "Action RPG",
      "Open World",
      "Soulslike",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.actionRpg,
      {
        exploration: 5,
        progression: 5,
        story: 4,
        combat: 5,
        strategy: 4,
        survival: 3,
      }
    ),
  },

  {
    id: "hades",
    title: "Hades",
    cover:
      "/images/game-dna/covers/hades.webp",
    releaseYear: 2020,
    genres: [
      "Roguelike",
      "Action",
      "RPG",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.roguelike,
      {
        story: 5,
        progression: 5,
        combat: 5,
        social: 3,
      }
    ),
  },

  {
    id: "hollow-knight",
    title: "Hollow Knight",
    cover:
      "/images/game-dna/covers/hollow-knight.webp",
    releaseYear: 2017,
    genres: [
      "Metroidvania",
      "Action",
      "Exploration",
    ],
    traits: defineGameTraits({
      exploration: 5,
      progression: 4,
      systems: 3,
      crafting: 0,
      story: 4,
      combat: 5,
      strategy: 3,
      puzzle: 2,
      survival: 3,
      social: 0,
    }),
  },

  {
    id: "the-binding-of-isaac-rebirth",
    title: "The Binding of Isaac: Rebirth",
    cover:
      "/images/game-dna/covers/the-binding-of-isaac-rebirth.webp",
    releaseYear: 2014,
    aliases: [
      "Binding of Isaac",
      "Isaac Rebirth",
      "TBOI",
    ],
    genres: [
      "Roguelike",
      "Action",
      "Dungeon Crawler",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.roguelike,
      {
        exploration: 3,
        systems: 5,
        progression: 5,
        combat: 5,
        strategy: 4,
        survival: 4,
      }
    ),
    guideUrl:
      "/the-binding-of-isaac-rebirth",
    guideCount: 5,
  },

  {
    id: "slay-the-spire",
    title: "Slay the Spire",
    cover:
      "/images/game-dna/covers/slay-the-spire.webp",
    releaseYear: 2019,
    aliases: ["STS"],
    genres: [
      "Deckbuilder",
      "Roguelike",
      "Strategy",
    ],
    traits: defineGameTraits({
      exploration: 1,
      progression: 4,
      systems: 5,
      crafting: 1,
      story: 1,
      combat: 3,
      strategy: 5,
      puzzle: 3,
      survival: 3,
      social: 0,
    }),
  },

  {
    id: "balatro",
    title: "Balatro",
    cover:
      "/images/game-dna/covers/balatro.webp",
    releaseYear: 2024,
    genres: [
      "Deckbuilder",
      "Roguelike",
      "Strategy",
    ],
    traits: defineGameTraits({
      exploration: 0,
      progression: 4,
      systems: 5,
      crafting: 0,
      story: 0,
      combat: 1,
      strategy: 5,
      puzzle: 4,
      survival: 2,
      social: 0,
    }),
  },

  {
    id: "core-keeper",
    title: "Core Keeper",
    cover:
      "/images/game-dna/covers/core-keeper.webp",
    releaseYear: 2024,
    genres: [
      "Survival",
      "Crafting",
      "Sandbox",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.survivalCrafting,
      {
        progression: 5,
        combat: 4,
        social: 3,
      }
    ),
  },

  {
    id: "factorio",
    title: "Factorio",
    cover:
      "/images/game-dna/covers/factorio.webp",
    releaseYear: 2020,
    genres: [
      "Automation",
      "Simulation",
      "Strategy",
    ],
    traits: defineGameTraits({
      exploration: 2,
      progression: 5,
      systems: 5,
      crafting: 5,
      story: 0,
      combat: 2,
      strategy: 5,
      puzzle: 3,
      survival: 2,
      social: 2,
    }),
  },

  {
    id: "rimworld",
    title: "RimWorld",
    cover:
      "/images/game-dna/covers/rimworld.webp",
    releaseYear: 2018,
    genres: [
      "Colony Simulation",
      "Strategy",
      "Survival",
    ],
    traits: defineGameTraits({
      exploration: 2,
      progression: 4,
      systems: 5,
      crafting: 4,
      story: 4,
      combat: 3,
      strategy: 5,
      puzzle: 1,
      survival: 5,
      social: 4,
    }),
  },

  {
    id: "dead-cells",
    title: "Dead Cells",
    cover:
      "/images/game-dna/covers/dead-cells.webp",
    releaseYear: 2018,
    genres: [
      "Roguelike",
      "Metroidvania",
      "Action",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.roguelike,
      {
        exploration: 3,
        progression: 4,
        story: 1,
        combat: 5,
      }
    ),
  },

  /*
   * ---------------------------------------------------------
   * Whisper of the House guide hubs
   *
   * 这些游戏拥有 guideUrl，
   * 会进入 RecommendedGames 推荐结果。
   * ---------------------------------------------------------
   */

  {
    id: "moonlight-peaks",
    title: "Moonlight Peaks",
    cover:
      "/images/game-dna/covers/moonlight-peaks.webp",
    aliases: ["Moonlight Peaks Game"],
    genres: [
      "Cozy",
      "Farming",
      "Simulation",
    ],
    traits: updateGameTraits(
      GAME_DNA_TRAIT_PRESETS.cozySimulation,
      {
        exploration: 4,
        progression: 5,
        systems: 4,
        crafting: 4,
        story: 3,
        combat: 1,
        social: 3,
      }
    ),
    guideUrl: "/moonlight-peaks",
    guideCount: 5,
  },

  {
    id: "cat-mail-co",
    title: "Cat Mail Co.",
    cover:
      "/images/game-dna/covers/cat-mail-co.webp",
    aliases: [
      "Cat Mail Co",
      "Cat Mail Company",
    ],
    genres: [
      "Cozy",
      "Simulation",
      "Puzzle",
    ],
    traits: defineGameTraits({
      exploration: 3,
      progression: 3,
      systems: 4,
      crafting: 0,
      story: 3,
      combat: 0,
      strategy: 4,
      puzzle: 4,
      survival: 0,
      social: 3,
    }),
    guideUrl: "/cat-mail-co",
    guideCount: 5,
  },

  {
    id: "forest-escape-last-train",
    title: "Forest Escape: Last Train",
    cover:
      "/images/game-dna/covers/forest-escape-last-train.webp",
    aliases: [
      "Forest Escape",
      "Last Train",
    ],
    genres: [
      "Adventure",
      "Puzzle",
      "Horror",
    ],
    traits: defineGameTraits({
      exploration: 5,
      progression: 3,
      systems: 3,
      crafting: 1,
      story: 4,
      combat: 2,
      strategy: 3,
      puzzle: 5,
      survival: 4,
      social: 2,
    }),
    guideUrl:
      "/forest-escape-last-train",
    guideCount: 5,
  },

  {
    id: "angels-fall-first",
    title: "Angels Fall First",
    cover:
      "/images/game-dna/covers/angels-fall-first.webp",
    aliases: ["AFF"],
    genres: [
      "FPS",
      "Space Combat",
      "Strategy",
    ],
    traits: defineGameTraits({
      exploration: 2,
      progression: 2,
      systems: 5,
      crafting: 0,
      story: 2,
      combat: 5,
      strategy: 5,
      puzzle: 0,
      survival: 3,
      social: 4,
    }),
    guideUrl: "/angels-fall-first",
    guideCount: 4,
  },

  {
    id: "master-healer-kale",
    title: "Master Healer Kale",
    cover:
      "/images/game-dna/covers/master-healer-kale.webp",
    genres: [
      "Action RPG",
      "Incremental",
      "Buildcrafting",
    ],
    traits: defineGameTraits({
      exploration: 2,
      progression: 5,
      systems: 5,
      crafting: 2,
      story: 2,
      combat: 5,
      strategy: 4,
      puzzle: 0,
      survival: 2,
      social: 0,
    }),
    guideUrl: "/master-healer-kale",
    guideCount: 4,
  },

  {
    id: "nuclear-epoch",
    title: "Nuclear Epoch",
    cover:
      "/images/game-dna/covers/nuclear-epoch.webp",
    genres: [
      "Extraction",
      "Survival",
      "Action",
    ],
    traits: defineGameTraits({
      exploration: 4,
      progression: 4,
      systems: 4,
      crafting: 2,
      story: 1,
      combat: 4,
      strategy: 4,
      puzzle: 0,
      survival: 5,
      social: 3,
    }),
    guideUrl: "/nuclear-epoch",
    guideCount: 4,
  },

  {
    id: "supermarket-chaos",
    title: "Super Market Chaos",
    cover:
      "/images/game-dna/covers/supermarket-chaos.webp",
    aliases: ["Supermarket Chaos"],
    genres: [
      "Simulation",
      "Management",
      "Co-op",
    ],
    traits: defineGameTraits({
      exploration: 2,
      progression: 4,
      systems: 5,
      crafting: 1,
      story: 0,
      combat: 1,
      strategy: 5,
      puzzle: 2,
      survival: 1,
      social: 4,
    }),
    guideUrl: "/supermarket-chaos",
    guideCount: 5,
  },

  {
    id: "backyard-baseball",
    title: "Backyard Baseball 2026",
    cover:
      "/images/game-dna/covers/backyard-baseball-2026.webp",
    aliases: [
      "Backyard Baseball",
      "Backyard Baseball 2026",
    ],
    genres: [
      "Sports",
      "Strategy",
      "Arcade",
    ],
    traits: defineGameTraits({
      exploration: 0,
      progression: 3,
      systems: 4,
      crafting: 0,
      story: 1,
      combat: 0,
      strategy: 5,
      puzzle: 1,
      survival: 0,
      social: 4,
    }),
    guideUrl: "/backyard-baseball",
    guideCount: 5,
  },

  {
    id: "ascend-to-zero",
    title: "Ascend to ZERO",
    cover:
      "/images/game-dna/covers/ascend-to-zero.webp",
    aliases: [
      "Ascend to Zero",
      "Ascend to 0",
    ],
    genres: [
      "Action",
      "Incremental",
      "Roguelite",
    ],
    traits: defineGameTraits({
      exploration: 2,
      progression: 5,
      systems: 5,
      crafting: 2,
      story: 2,
      combat: 5,
      strategy: 4,
      puzzle: 1,
      survival: 3,
      social: 0,
    }),
    guideUrl: "/ascend-to-zero",
    guideCount: 4,
  },
] satisfies GameDnaGame[];

export const gameDnaGameMap =
  new Map<string, GameDnaGame>(
    gameDnaGames.map((game) => [
      game.id,
      game,
    ])
  );

export function getGameDnaGame(
  gameId: string
) {
  return gameDnaGameMap.get(gameId) ?? null;
}

export function getGameDnaGuideGames() {
  return gameDnaGames.filter(
    (game) => Boolean(game.guideUrl)
  );
}