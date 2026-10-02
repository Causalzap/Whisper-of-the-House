import type { ChecklistItem } from "@/data/checklists/types";


type AchievementSeed = readonly [
  name: string,
  requirement: string,
];


type AchievementMeta = Pick<
  ChecklistItem,
  "category" | "timing" | "risk" | "detailHref"
>;


function createAchievementId(name: string): string {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/…/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


function makeAchievementItems(
  entries: readonly AchievementSeed[],
  meta: AchievementMeta
): ChecklistItem[] {
  return entries.map(([name, requirement]) => ({
    id: createAchievementId(name),
    name,
    requirement,

    // Current dataset does not include a reliable Steam global unlock-rate
    // snapshot, so leave the value blank rather than inventing percentages.
    steamRate: "",

    category: meta.category,
    timing: meta.timing,
    risk: meta.risk,
    detailHref: meta.detailHref,

    searchText: [
      name,
      requirement,
      meta.category,
      meta.timing,
      "Gears of War E-Day achievement",
    ].join(" "),
  }));
}


/* -------------------------------------------------------------------------- */
/* Campaign Story                                                             */
/* -------------------------------------------------------------------------- */

const campaignStoryAchievements: readonly AchievementSeed[] = [
  [
    "Emergence Begins",
    "Unlock during Act 1 of the Campaign.",
  ],
  [
    "We Must Improvise",
    "Unlock during Act 1 of the Campaign.",
  ],
  [
    "The Bigger They Are…",
    "Unlock during Act 1 of the Campaign.",
  ],
  [
    "The Scorched Legion",
    "Unlock during Act 2 of the Campaign.",
  ],
  [
    "You Want What On the Front of a Gun?!",
    "Unlock during Act 2 of the Campaign.",
  ],
  [
    "Got to the Choppa",
    "Unlock during Act 2 of the Campaign.",
  ],
  [
    "Get Back You Eight-legged Freak",
    "Unlock during Act 3 of the Campaign.",
  ],
  [
    "Twice the Pride, Double the Fall",
    "Unlock during Act 3 of the Campaign.",
  ],
  [
    "…The Harder They Fall",
    "Unlock during Act 3 of the Campaign.",
  ],
  [
    "End of the Line",
    "Unlock during Act 4 of the Campaign.",
  ],
  [
    "The Only Good Bug is a Dead Bug",
    "Unlock during Act 4 of the Campaign.",
  ],
  [
    "Nothing Left but the Fight",
    "Unlock during Act 5 of the Campaign.",
  ],
  [
    "For My Boys",
    "Unlock during Act 5 of the Campaign.",
  ],
];


/* -------------------------------------------------------------------------- */
/* Campaign Completion                                                        */
/* -------------------------------------------------------------------------- */

const campaignCompletionAchievements: readonly AchievementSeed[] = [
  [
    "The Lucky Ones Died on E-Day",
    "Earn all other Achievements.",
  ],
  [
    "You’re My Brother",
    "Complete all Acts of the Campaign on Co-Op (any difficulty).",
  ],
  [
    "Side Piece",
    "Complete all Secondary Objectives in the Campaign (any difficulty).",
  ],
  [
    "Relax. I’m the Map.",
    "Discover all Hard Cases in the Campaign.",
  ],
  [
    "Memories From E-Day",
    "Find all Collectibles in the Campaign (any difficulty).",
  ],
  [
    "Quartermaster",
    "Unlock all Supply Cache items in the Campaign.",
  ],
  [
    "Remember Kalona",
    "Complete all Acts of the Campaign (any difficulty).",
  ],
  [
    "Today We Are Canceling the Apocalypse",
    "Complete all Acts of the Campaign on Insane difficulty.",
  ],
  [
    "For Whom The Bell Tolls",
    "Complete Campaign on Insane, complete all side missions, find all hidden items.",
  ],
  [
    "Dead Serious",
    "100% Campaign on Insane, 25,000 kills in Versus, max Player Level, and max 4 classes.",
  ],
];


/* -------------------------------------------------------------------------- */
/* Horde Siege                                                                */
/* -------------------------------------------------------------------------- */

const hordeSiegeAchievements: readonly AchievementSeed[] = [
  [
    "Lift Outta Hell",
    "Complete and Survive 50 Horde Siege Missions (Infantry difficulty or higher).",
  ],
  [
    "Best I Can Do Is a Pizza Party",
    "Complete any 100 Secondary Objectives in Horde Siege.",
  ],
  [
    "Turn It Up to 11",
    "Execute 50 enemies Stunned by the Sonic Disruptor in Horde Siege.",
  ],
  [
    "Never Fight Alone",
    "Extract from Horde Siege with all squadmates alive on Allfather difficulty.",
  ],
  [
    "I’m All Amped Up",
    "Maintain 30 seconds of Adrenaline with the Injector in Horde Siege.",
  ],
  [
    "Spotted and Slotted",
    "Pulse 1,000 enemies with the Pulse Drone in Horde Siege.",
  ],
  [
    "Form-Up!",
    "Receive the max reward from a Perk Cache in Horde Siege (any difficulty).",
  ],
  [
    "Who Loves Ya, Baby?",
    "Revive 20 players from other squads in Horde Siege.",
  ],
  [
    "Down, but Not Dead",
    "Revive 250 squadmates from DBNO with the Stim Vaporizer in Horde Siege.",
  ],
  [
    "Stacks, On Stacks, On Stacks",
    "Spend 150,000 Energy at the Supply Cache in Horde Siege (any difficulty).",
  ],
  [
    "Like a Boss",
    "Successfully complete 25 Invasion Events in Horde Siege (any difficulty).",
  ],
  [
    "This Is My Rifle",
    "Unlock all Weapon Mods in Horde Siege.",
  ],
  [
    "Crepe du Raven",
    "Carefully inspect the underside of a Raven in Horde Siege.",
  ],
  [
    "I Didn’t Hear No Bell",
    "Save your entire squad while you’re moments from death in Horde Siege.",
  ],
  [
    "I WILL MASSACRE YOU",
    "Kill 50,000 Enemies in Horde Siege (any difficulty).",
  ],
  [
    "Siege Specialist",
    "Reach max level with the Assault, Breacher, Marksman, and Medic classes in Horde Siege.",
  ],
];


/* -------------------------------------------------------------------------- */
/* Versus                                                                     */
/* -------------------------------------------------------------------------- */

const versusAchievements: readonly AchievementSeed[] = [
  [
    "Somebody Set Us Up the Bomb",
    "Plant the bomb in Demolition and have it explode without the enemy defusing it.",
  ],
  [
    "It Only Game, Why You Heff to Be Mad?",
    "Win a game of Conquest without the enemy team scoring.",
  ],
  [
    "Days Since Last Accident: 0",
    "Commit a workplace safety violation on Battleship in Versus.",
  ],
  [
    "HEY NOW, YOU’RE AN ALL STAR…",
    "Get 25,000 kills in Versus.",
  ],
];


/* -------------------------------------------------------------------------- */
/* Account Progression                                                        */
/* -------------------------------------------------------------------------- */

const accountProgressionAchievements: readonly AchievementSeed[] = [
  [
    "Field Service",
    "Reach Player Level 100 and Re-Up for the first time.",
  ],
  [
    "Got Your Wings",
    "Re-up for the final time and claim your wings.",
  ],
];


/* -------------------------------------------------------------------------- */
/* Combat / Misc                                                              */
/* -------------------------------------------------------------------------- */

const combatAndMiscAchievements: readonly AchievementSeed[] = [
  [
    "FNG",
    "Complete Boot Camp.",
  ],
  [
    "Just Let Me Get One More…",
    "Get 100 Revives.",
  ],
  [
    "I Am Heavy Weapons Guy",
    "Kill 10 enemies in a row using a single detached turret.",
  ],
  [
    "Brotector",
    "Save another player from a struggle with a Locust.",
  ],
  [
    "Okay, Boomer.",
    "Carve-up a Boomer.",
  ],
  [
    "Right in the Ticker",
    "Convert a Ticker to express air mail and return to sender.",
  ],
  [
    "Chainsaw Go Brrrrrrrrr",
    "Let a chainsaw do what it does best against a Locust in Campaign or Horde Siege.",
  ],
  [
    "Explosive Indigestion",
    "Play a game of explosive cornhole with a Bilefrog.",
  ],
  [
    "Two Grubs, One Gut-Punch",
    "Show two Grubs what a single Gut-Puncher round can do.",
  ],
  [
    "Payback’s A Pitch",
    "Take revenge on an Armored Wretch that stunned you.",
  ],
];


/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const gearsEDayAchievementChecklistItems: ChecklistItem[] = [
  ...makeAchievementItems(
    campaignStoryAchievements,
    {
      category: "Campaign Story",
      timing: "Story progression",
      risk: "None",
      detailHref: "#campaign",
    }
  ),

  ...makeAchievementItems(
    campaignCompletionAchievements,
    {
      category: "Campaign Completion",
      timing: "Campaign progression / cleanup",
      risk: "Medium",
      detailHref: "#campaign-completion",
    }
  ),

  ...makeAchievementItems(
    hordeSiegeAchievements,
    {
      category: "Horde Siege",
      timing: "Horde progression / cleanup",
      risk: "Medium",
      detailHref: "#horde-siege",
    }
  ),

  ...makeAchievementItems(
    versusAchievements,
    {
      category: "Versus",
      timing: "Versus progression / cleanup",
      risk: "Medium",
      detailHref: "#versus",
    }
  ),

  ...makeAchievementItems(
    accountProgressionAchievements,
    {
      category: "Account Progression",
      timing: "Long-term progression",
      risk: "Medium",
      detailHref: "#progression",
    }
  ),

  ...makeAchievementItems(
    combatAndMiscAchievements,
    {
      category: "Combat / Misc",
      timing: "Natural play / cleanup",
      risk: "Low",
      detailHref: "#combat",
    }
  ),
];