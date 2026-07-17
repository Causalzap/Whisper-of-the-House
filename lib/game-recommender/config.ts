import type {
  ExperienceOption,
  ExperiencePreferenceId,
  GameDnaTraitId,
  GamePlatform,
  GamePlayMode,
  GameSessionStyle,
  PlatformOption,
  PlayModeOption,
  RecommendationRole,
} from "@/lib/game-recommender/types";

export const INITIAL_VISIBLE_RESULTS = 3;
export const SURPRISE_POOL_LIMIT = 20;
export const MAXIMUM_MOOD_SELECTIONS = 3;

export const PLATFORM_OPTIONS: PlatformOption[] = [
  { id: "any", label: "Any Platform" },
  { id: "pc", label: "PC / Steam" },
  { id: "playstation", label: "PlayStation" },
  { id: "xbox", label: "Xbox" },
  { id: "switch", label: "Nintendo Switch" },
];

export const PLAY_MODE_OPTIONS: PlayModeOption[] = [
  { id: "any", label: "Any Mode" },
  { id: "solo", label: "Solo" },
  { id: "co-op", label: "Co-op" },
  { id: "multiplayer", label: "Multiplayer" },
];

export const EXPERIENCE_OPTIONS: ExperienceOption[] = [
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
      "Characters, worldbuilding, and a clear narrative payoff.",
  },
  {
    id: "challenging",
    label: "Challenging",
    description:
      "Demanding encounters, risk, and meaningful mastery.",
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

export const EXPERIENCE_LABELS: Record<
  ExperiencePreferenceId,
  string
> = {
  relaxing: "relaxing",
  "story-rich": "story-rich",
  challenging: "challenging",
  progression: "progression-focused",
  strategic: "strategic",
  exploration: "exploration-focused",
  "co-op": "co-op-friendly",
};

export const EXPERIENCE_TRAIT_ADJUSTMENTS: Record<
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

export const TRAIT_NOUN_LABELS: Record<
  GameDnaTraitId,
  string
> = {
  exploration: "exploration",
  progression: "progression",
  systems: "layered systems",
  crafting: "crafting and building",
  story: "story and characters",
  combat: "combat mastery",
  strategy: "planning and strategy",
  puzzle: "puzzle solving",
  survival: "survival pressure",
  social: "shared play",
};

export const TRAIT_OUTCOME_LABELS: Record<
  GameDnaTraitId,
  string
> = {
  exploration: "Rewards curiosity and discovery",
  progression: "Offers visible growth and meaningful upgrades",
  systems: "Has layered mechanics to learn and combine",
  crafting: "Makes gathering and building feel useful",
  story: "Puts characters and narrative payoff at the center",
  combat: "Rewards stronger execution and combat mastery",
  strategy: "Gives planning and decision-making real weight",
  puzzle: "Rewards observation and problem solving",
  survival: "Adds risk, recovery, and resource pressure",
  social: "Works well as a shared or cooperative experience",
};

export const PLATFORM_LABELS: Record<
  Exclude<GamePlatform, "any">,
  string
> = {
  pc: "PC / Steam",
  playstation: "PlayStation",
  xbox: "Xbox",
  switch: "Nintendo Switch",
};

export const PLAY_MODE_LABELS: Record<
  Exclude<GamePlayMode, "any">,
  string
> = {
  solo: "solo play",
  "co-op": "co-op play",
  multiplayer: "multiplayer",
};

export const SESSION_STYLE_LABELS: Record<
  GameSessionStyle,
  string
> = {
  "short-sessions": "Works well for shorter play sessions",
  "long-sessions": "Best suited to a longer uninterrupted session",
  "long-term": "Built for long-term progression and repeat play",
};

export const ROLE_LABELS: Record<
  RecommendationRole,
  string
> = {
  "best-match": "Best Match",
  "strong-alternative": "Strong Alternative",
  wildcard: "Wildcard Pick",
  "more-match": "More Match",
  surprise: "Surprise Pick",
};
