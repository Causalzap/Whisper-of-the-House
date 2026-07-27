// data/game-recommender/games.ts
//
// Final catalog consumed by the recommendation UI and scoring engine.
//
// Data ownership:
// - game-seeds.ts: which games are allowed into the catalog
// - igdb-games.generated.json: machine-generated IGDB metadata
// - game-traits.ts: human-reviewed recommendation traits
// - guide-coverage.ts: human-maintained guide destinations
//
// Do not edit IGDB fields here. Re-run the IGDB sync instead.

import igdbGeneratedData from "./igdb-games.generated.json";
import { GAME_SEEDS } from "./game-seeds";
import {
  GAME_TRAIT_KEYS,
  getGameTraits,
  type GameTraits,
} from "./game-traits";
import {
  getGuideDestination,
  type GuideDestination,
} from "./guide-coverage";

export type RecommenderPlatform =
  | "pc"
  | "playstation"
  | "xbox"
  | "switch"
  | "mobile"
  | "web";

export type RecommenderPlayMode =
  | "solo"
  | "co-op"
  | "multiplayer";

export type RecommenderGame = {
  /**
   * Stable local ID shared by seeds, traits and guide coverage.
   */
  id: string;
  localId: string;

  /**
   * IGDB identity and presentation data.
   */
  igdbId: number;
  title: string;
  name: string;
  slug: string;
  cover: string | null;
  image: string | null;
  coverImageId: string | null;
  coverWidth: number | null;
  coverHeight: number | null;

  /**
   * Normalized values used by filters.
   */
  platforms: RecommenderPlatform[];
  playModes: RecommenderPlayMode[];

  /**
   * Original IGDB labels retained for display/debugging.
   */
  rawPlatforms: string[];
  rawGameModes: string[];

  genres: string[];
  themes: string[];
  firstReleaseDate: string | null;
  summary: string | null;
  igdbUrl: string | null;

  /**
   * Human-reviewed values used by the recommendation engine.
   */
  traits: GameTraits;

  /**
   * User-owned guide destination, when one exists.
   */
  guideDestination: GuideDestination | null;
  hasGuide: boolean;
};

type GeneratedIgdbGame = {
  localId: string;
  igdbId: number;
  title: string;
  slug: string;
  cover: string | null;
  coverImageId: string | null;
  coverWidth: number | null;
  coverHeight: number | null;
  platforms: string[];
  rawPlatforms: string[];
  playModes: string[];
  rawGameModes: string[];
  genres: string[];
  themes: string[];
  firstReleaseDate: string | null;
  summary: string | null;
  igdbUrl: string | null;
};

type GeneratedIgdbFile = {
  generatedAt: string | null;
  gameCount: number;
  games: Record<string, GeneratedIgdbGame>;
};

const generatedData =
  igdbGeneratedData as GeneratedIgdbFile;

const ALLOWED_PLATFORMS =
  new Set<RecommenderPlatform>([
    "pc",
    "playstation",
    "xbox",
    "switch",
    "mobile",
    "web",
  ]);

const ALLOWED_PLAY_MODES =
  new Set<RecommenderPlayMode>([
    "solo",
    "co-op",
    "multiplayer",
  ]);

function isFiniteNumber(
  value: unknown,
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value)
  );
}

function assertGeneratedGame(
  localId: string,
  game: GeneratedIgdbGame,
): void {
  if (!game) {
    throw new Error(
      `Missing generated IGDB data for game: ${localId}`,
    );
  }

  if (
    game.localId !== localId
  ) {
    throw new Error(
      [
        `Generated IGDB key mismatch for ${localId}.`,
        `Received localId: ${game.localId}`,
      ].join(" "),
    );
  }

  if (
    !Number.isInteger(game.igdbId) ||
    game.igdbId <= 0
  ) {
    throw new Error(
      `Invalid IGDB ID for game: ${localId}`,
    );
  }

  if (
    !game.title ||
    !game.slug
  ) {
    throw new Error(
      `Missing title or slug for game: ${localId}`,
    );
  }

  for (const platform of game.platforms) {
    if (
      !ALLOWED_PLATFORMS.has(
        platform as RecommenderPlatform,
      )
    ) {
      throw new Error(
        [
          `Unsupported normalized platform "${platform}"`,
          `for game: ${localId}.`,
          "Update RecommenderPlatform before using it.",
        ].join(" "),
      );
    }
  }

  for (const playMode of game.playModes) {
    if (
      !ALLOWED_PLAY_MODES.has(
        playMode as RecommenderPlayMode,
      )
    ) {
      throw new Error(
        [
          `Unsupported normalized play mode "${playMode}"`,
          `for game: ${localId}.`,
          "Update RecommenderPlayMode before using it.",
        ].join(" "),
      );
    }
  }
}

function assertTraits(
  localId: string,
  traits: GameTraits,
): void {
  for (const key of GAME_TRAIT_KEYS) {
    const value = traits[key];

    if (
      !isFiniteNumber(value) ||
      value < 0 ||
      value > 5
    ) {
      throw new Error(
        [
          `Invalid trait "${key}" for ${localId}.`,
          `Expected a number from 0 to 5, received: ${String(value)}`,
        ].join(" "),
      );
    }
  }
}

function buildRecommenderGame(
  localId: string,
  generatedGame: GeneratedIgdbGame,
): RecommenderGame {
  assertGeneratedGame(
    localId,
    generatedGame,
  );

  const traits =
    getGameTraits(localId);

  assertTraits(
    localId,
    traits,
  );

  const guideDestination =
    getGuideDestination(localId);

  const platforms =
    generatedGame.platforms as RecommenderPlatform[];

  const playModes =
    generatedGame.playModes as RecommenderPlayMode[];

  return {
    id: localId,
    localId,

    igdbId: generatedGame.igdbId,
    title: generatedGame.title,
    name: generatedGame.title,
    slug: generatedGame.slug,

    cover: generatedGame.cover,
    image: generatedGame.cover,
    coverImageId:
      generatedGame.coverImageId,
    coverWidth:
      generatedGame.coverWidth,
    coverHeight:
      generatedGame.coverHeight,

    platforms,
    playModes,

    rawPlatforms:
      generatedGame.rawPlatforms,
    rawGameModes:
      generatedGame.rawGameModes,

    genres: generatedGame.genres,
    themes: generatedGame.themes,
    firstReleaseDate:
      generatedGame.firstReleaseDate,
    summary: generatedGame.summary,
    igdbUrl: generatedGame.igdbUrl,

    traits,

    guideDestination,
    hasGuide:
      guideDestination !== null,
  };
}

function buildGameCatalog(): RecommenderGame[] {
  const games: RecommenderGame[] = [];
  const seenLocalIds = new Set<string>();
  const seenIgdbIds = new Set<number>();

  for (const seed of GAME_SEEDS) {
    if (seenLocalIds.has(seed.id)) {
      throw new Error(
        `Duplicate local game ID in GAME_SEEDS: ${seed.id}`,
      );
    }

    if (seenIgdbIds.has(seed.igdbId)) {
      throw new Error(
        `Duplicate IGDB ID in GAME_SEEDS: ${seed.igdbId}`,
      );
    }

    seenLocalIds.add(seed.id);
    seenIgdbIds.add(seed.igdbId);

    const generatedGame =
      generatedData.games[seed.id];

    if (!generatedGame) {
      throw new Error(
        [
          `GAME_SEEDS contains "${seed.id}",`,
          "but igdb-games.generated.json does not.",
          "Run scripts/sync-igdb-games.mjs again.",
        ].join(" "),
      );
    }

    if (
      generatedGame.igdbId !==
      seed.igdbId
    ) {
      throw new Error(
        [
          `IGDB ID mismatch for ${seed.id}.`,
          `Seed: ${seed.igdbId}.`,
          `Generated: ${generatedGame.igdbId}.`,
        ].join(" "),
      );
    }

    games.push(
      buildRecommenderGame(
        seed.id,
        generatedGame,
      ),
    );
  }

  if (
    games.length !==
    generatedData.gameCount
  ) {
    const generatedOnlyIds =
      Object.keys(
        generatedData.games,
      ).filter(
        (localId) =>
          !seenLocalIds.has(localId),
      );

    if (generatedOnlyIds.length > 0) {
      throw new Error(
        [
          "igdb-games.generated.json contains games",
          "that are not present in GAME_SEEDS:",
          generatedOnlyIds.join(", "),
        ].join(" "),
      );
    }
  }

  return games;
}

/**
 * Main array consumed by the recommender.
 *
 * Its order follows GAME_SEEDS, so changing the seed order can also change
 * deterministic tie-breaking in the recommendation engine.
 */
export const GAMES =
  buildGameCatalog();

export const GAME_CATALOG = GAMES;

export const GAME_BY_ID =
  Object.fromEntries(
    GAMES.map((game) => [
      game.id,
      game,
    ]),
  ) as Record<
    string,
    RecommenderGame
  >;

export function getGameById(
  localId: string,
): RecommenderGame | null {
  return GAME_BY_ID[localId] ?? null;
}

export function getGamesWithGuides():
  RecommenderGame[] {
  return GAMES.filter(
    (game) => game.hasGuide,
  );
}

export function getGamesForPlatform(
  platform: RecommenderPlatform,
): RecommenderGame[] {
  return GAMES.filter(
    (game) =>
      game.platforms.includes(
        platform,
      ),
  );
}

export function getGamesForPlayMode(
  playMode: RecommenderPlayMode,
): RecommenderGame[] {
  return GAMES.filter(
    (game) =>
      game.playModes.includes(
        playMode,
      ),
  );
}

export const GAME_CATALOG_META = {
  generatedAt:
    generatedData.generatedAt,
  gameCount: GAMES.length,
  guideGameCount:
    getGamesWithGuides().length,
} as const;