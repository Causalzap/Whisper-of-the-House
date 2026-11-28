import type { ChecklistItem } from "@/data/checklists/types";

import {
  amINimaEndings,
  amINimaEndingSceneLabels,
} from "./endings";

export type AmINimaAchievementCategory =
  | "Word Collection"
  | "Memories"
  | "Character Collection"
  | "Exploration"
  | "Special Actions"
  | "Loop Progression"
  | "Endings";

export type AmINimaAchievement = {
  id: string;
  name: string;
  requirement: string;
  category: AmINimaAchievementCategory;
  hidden: boolean;
  timing: string;
  detailHref: string;
  target?: number;
  endingId?: string;
};

// Collection achievement targets.
// These are achievement requirements, not the size
// of the currently available word or character database.

export const amINimaCollectionTargets = {
  nima101: 101,
  humanDictionary: 224,
  tomatoKingdom: 200,
} as const;

// Stable checklist IDs.
// Catalog identifiers are retained for local progress.
// They are not claimed to be independently authenticated
// Steam API identifiers.

const amINimaEndingAchievementIds: Record<string, string> = {
  loyalty: "loyalty",
  duplicity: "assim_fail",
  monster: "monster",
  martyr: "martyr",
  stasis: "stasis",
  assimilation: "assim_success",
  carnage: "carnage",
  fissure: "fissure",
  symbiosis: "parasite_bunker",
  judgement: "judgement",
  acceptance: "acceptance",
};

// Non-ending achievement entities.

export const amINimaNonEndingAchievements:
  AmINimaAchievement[] = [
    {
      id: "words_101",
      name: "Nima 101",
      requirement:
        `Discovered ${amINimaCollectionTargets.nima101} words.`,
      category: "Word Collection",
      hidden: false,
      timing: "Word collection",
      target: amINimaCollectionTargets.nima101,
      detailHref: "#word-collection",
    },
    {
      id: "words_all",
      name: "Human Dictionary",
      requirement:
        `Discovered all ${amINimaCollectionTargets.humanDictionary} words.`,
      category: "Word Collection",
      hidden: false,
      timing: "Word collection",
      target: amINimaCollectionTargets.humanDictionary,
      detailHref: "#word-collection",
    },
    {
      id: "memory",
      name: "Memories",
      requirement: "Remember a lost memory.",
      category: "Memories",
      hidden: false,
      timing: "Memory discovery",
      detailHref: "#memories-achievement",
    },
    {
      id: "tomato_kingdom",
      name: "Tomato Kingdom",
      requirement:
        `Discovered ${amINimaCollectionTargets.tomatoKingdom} Tomato Boy Characters.`,
      category: "Character Collection",
      hidden: false,
      timing: "Character collection",
      target: amINimaCollectionTargets.tomatoKingdom,
      detailHref: "#tomato-kingdom",
    },
    {
      id: "free_whiskers",
      name: "Free Whiskers",
      requirement: "Saved Whiskers in the boiler room.",
      category: "Special Actions",
      hidden: true,
      timing: "Boiler Room",
      detailHref: "#free-whiskers",
    },
    {
      id: "bunker",
      name: "Bunker",
      requirement: "Get into Annabelle's secret lab.",
      category: "Exploration",
      hidden: true,
      timing: "Secret lab exploration",
      detailHref: "#bunker-achievement",
    },
    {
      id: "loop",
      name: "Dark, cold, endless, and utterly serene.",
      requirement: "Complete your first loop of the game.",
      category: "Loop Progression",
      hidden: true,
      timing: "First loop",
      detailHref: "#first-loop",
    },
  ];

// Ending achievements are derived from the shared
// ending entities rather than redefining ending names.
//
// The achievement requirement is separate from
// the known checkpoint route and its prerequisites.

export const amINimaEndingAchievements:
  AmINimaAchievement[] =
  amINimaEndings.map((ending) => {
    const achievementId =
      amINimaEndingAchievementIds[ending.id];

    if (!achievementId) {
      throw new Error(
        `Missing Am I Nima achievement mapping: ${ending.id}`
      );
    }

    return {
      id: achievementId,
      name: ending.name,
      requirement: `Found the ${ending.name} Ending.`,
      category: "Endings",
      hidden: true,
      timing:
        amINimaEndingSceneLabels[ending.keyChoice.scene],
      endingId: ending.id,
      detailHref: ending.guideHref,
    };
  });

// Complete achievement entity collection.

export const amINimaAchievements: AmINimaAchievement[] = [
  ...amINimaNonEndingAchievements,
  ...amINimaEndingAchievements,
];

export const amINimaAchievementCount =
  amINimaAchievements.length;

export const amINimaHiddenAchievements =
  amINimaAchievements.filter(
    (achievement) => achievement.hidden
  );

export const amINimaHiddenAchievementCount =
  amINimaHiddenAchievements.length;

// Query helpers.

export function getAmINimaAchievement(
  achievementId: string
): AmINimaAchievement | undefined {
  return amINimaAchievements.find(
    (achievement) => achievement.id === achievementId
  );
}

export function getAmINimaAchievementByEndingId(
  endingId: string
): AmINimaAchievement | undefined {
  return amINimaEndingAchievements.find(
    (achievement) => achievement.endingId === endingId
  );
}

export function getAmINimaAchievementsByCategory(
  category: AmINimaAchievementCategory
): AmINimaAchievement[] {
  return amINimaAchievements.filter(
    (achievement) => achievement.category === category
  );
}

// Adapter for the existing ProgressChecklist component.
//
// Completion rates are intentionally omitted as
// fixed percentages because global rates change.
//
// No unsupported missability or difficulty ratings
// are assigned to achievements.

export const amINimaAchievementChecklistItems:
  ChecklistItem[] =
  amINimaAchievements.map((achievement) => ({
    id: achievement.id,
    name: achievement.name,
    requirement: achievement.requirement,
    steamRate: "—",
    category: achievement.category,
    timing: achievement.timing,
    detailHref: achievement.detailHref,
    searchText: [
      achievement.name,
      achievement.requirement,
      achievement.category,
      achievement.timing,
      achievement.hidden ? "hidden achievement" : "",
      achievement.endingId ?? "",
      "Am I Nima achievement",
    ]
      .filter(Boolean)
      .join(" "),
  }));