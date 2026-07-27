import type {
  GameDnaGame,
  GameDnaTraitId,
  GameDnaTraits,
} from "@/lib/game-dna/recommendations";

/**
 * Platforms currently exposed as filters in the quick recommender UI.
 *
 * The shared IGDB catalog may also contain "mobile" and "web".
 * Those catalog values remain valid on GameDnaGame, but they do not
 * need to appear as selectable filters on this page.
 */
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

export type GameSessionStyle =
  | "short-sessions"
  | "long-sessions"
  | "long-term";

export type ExperiencePreferenceId =
  | "relaxing"
  | "story-rich"
  | "challenging"
  | "progression"
  | "strategic"
  | "exploration"
  | "co-op";

export type RecommendationRole =
  | "best-match"
  | "strong-alternative"
  | "wildcard"
  | "more-match"
  | "surprise";

/**
 * The quick recommender uses the shared Game DNA game shape directly.
 *
 * Do not redefine `platforms` or `playModes` here. GameDnaGame already
 * carries the normalized values from the shared IGDB catalog, including
 * possible "mobile" and "web" platform values. Narrowing that property
 * here would make the shared catalog incompatible with this component.
 */
export type RecommenderGame =
  GameDnaGame & {
    /**
     * Optional session-length metadata maintained by the quick
     * recommender when it is available.
     */
    sessionStyles?: GameSessionStyle[];
  };

export type ExperienceOption = {
  id: ExperiencePreferenceId;
  label: string;
  description: string;
};

export type PlatformOption = {
  id: GamePlatform;
  label: string;
};

export type PlayModeOption = {
  id: GamePlayMode;
  label: string;
};

export type ClosestFavoriteMatch = {
  game: RecommenderGame;
  matchPercentage: number;
};

export type RecommendationExplanation = {
  eyebrow: string;
  summary: string;
  highlights: string[];
};

export type RecommendationCandidate = {
  game: RecommenderGame;
  matchPercentage: number;
  rankingScore: number;
  traitDistance: number;
  matchingTraits: GameDnaTraitId[];
  strongerTraits: GameDnaTraitId[];
  weakerTraits: GameDnaTraitId[];
  signatureTraits: GameDnaTraitId[];
  closestFavorite: ClosestFavoriteMatch | null;
};

export type RecommendationResult =
  RecommendationCandidate & {
    role: RecommendationRole;
    explanation: RecommendationExplanation;
  };

export type RecommendationContext = {
  selectedGames: RecommenderGame[];
  selectedExperienceIds:
    ExperiencePreferenceId[];
  platform: GamePlatform;
  playMode: GamePlayMode;
  userTraits: GameDnaTraits;
};

export type QuickGameRecommenderProps = {
  games: RecommenderGame[];
  maximumFavoriteGames?: number;
  resultLimit?: number;
  className?: string;
};

export type AnalyticsParameters = Record<
  string,
  string | number | boolean
>;

export type {
  GameDnaTraitId,
  GameDnaTraits,
};