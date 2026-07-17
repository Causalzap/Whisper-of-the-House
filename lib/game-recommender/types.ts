import type {
  GameDnaGame,
  GameDnaTraitId,
  GameDnaTraits,
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

export type RecommenderGame = GameDnaGame & {
  /**
   * Optional platform metadata.
   *
   * When this field is missing, the game remains eligible instead of being
   * excluded by a platform filter.
   */
  platforms?: Array<Exclude<GamePlatform, "any">>;

  /**
   * Optional play-mode metadata.
   */
  playModes?: Array<Exclude<GamePlayMode, "any">>;

  /**
   * Optional session-length metadata.
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

export type RecommendationResult = RecommendationCandidate & {
  role: RecommendationRole;
  explanation: RecommendationExplanation;
};

export type RecommendationContext = {
  selectedGames: RecommenderGame[];
  selectedExperienceIds: ExperiencePreferenceId[];
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
