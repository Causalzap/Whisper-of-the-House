export type AmINimaEndingScene =
  | "fish-test"
  | "mirror-plan"
  | "identity-test"
  | "final-confrontation"
  | "mirror-identity"
  | "mirror-crucible"
  | "identity-explanation"
  | "final-verdict";

export type AmINimaEndingRouteStatus =
  | "partial-route"
  | "checkpoint-branch";

export type AmINimaEndingNameAttribution =
  | "supported"
  | "provisional";

export type AmINimaChoiceSelectionStatus =
  | "inferred"
  | "available-only";

export type AmINimaEndingChoice = {
  id: string;
  scene: AmINimaEndingScene;
  inputWord: string;
  dialogueOption: string;
  prompt?: string;
  selectionStatus: AmINimaChoiceSelectionStatus;
  note?: string;
};

export type AmINimaEnding = {
  id: string;
  name: string;
  routeStatus: AmINimaEndingRouteStatus;
  nameAttribution: AmINimaEndingNameAttribution;
  keyChoice: AmINimaEndingChoice;
  relatedChoices?: readonly AmINimaEndingChoice[];
  context: string;
  outcome: string;
  requiredConditions: "unknown";
  guideHref: string;
  note?: string;
};

export type AmINimaEndingChoiceView =
  AmINimaEndingChoice & {
    endingId: string;
    endingName: string;
    sceneLabel: string;
    guideHref: string;
    isKeyChoice: boolean;
  };

// Scene labels are descriptive gameplay checkpoints.
// They are not official chapter or room names.

export const amINimaEndingSceneLabels: Record<
  AmINimaEndingScene,
  string
> = {
  "fish-test": "Fish Test",
  "mirror-plan": "Mirror Conversation",
  "identity-test": "Identity Test",
  "final-confrontation": "Final Confrontation",
  "mirror-identity": "Mirror Identity",
  "mirror-crucible": "CRUCIBLE Mirror Scene",
  "identity-explanation": "Identity Explanation",
  "final-verdict": "Final Verdict",
};

// Ending entities.
//
// Stable IDs are preserved from V1.0.
//
// Key choices describe observed dialogue options at
// particular gameplay checkpoints, not guaranteed
// fresh-save routes or proven necessary conditions.
//
// A dialogue word may produce different options
// depending on the scene and prior story state.
//
// Input words are retained as gameplay labels rather
// than assigning unconfirmed collection entity IDs.

export const amINimaEndings: AmINimaEnding[] = [
  {
    id: "loyalty",
    name: "Loyalty",
    routeStatus: "partial-route",
    nameAttribution: "supported",

    keyChoice: {
      id: "loyalty-repression",
      scene: "final-confrontation",
      inputWord: "Repression",
      dialogueOption: "It's me, Mom.",
      selectionStatus: "inferred",
    },

    relatedChoices: [
      {
        id: "loyalty-pretend",
        scene: "mirror-plan",
        inputWord: "Pretend",
        dialogueOption: "I'm going to trick her.",
        selectionStatus: "inferred",
        note:
          "An approach focused on gaining Mom's trust rather than confronting her directly.",
      },
      {
        id: "loyalty-family",
        scene: "identity-test",
        inputWord: "Family",
        dialogueOption: "To love you.",
        prompt: "What does it mean to be Nima?",
        selectionStatus: "available-only",
        note:
          "Another Loyalty playthrough used Nima is happy. Family is not an established mandatory choice.",
      },
    ],

    context:
      "During the identity-related conversations, try to satisfy Mom's expectations and continue presenting yourself as Nima. The key Repression option appears during the later confrontation.",

    outcome:
      "You insist that you are Nima and eventually leave your fate in Mom's hands. The confrontation ends with your death and a return to the opening scene.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#loyalty-ending",

    note:
      "The route has been reached during the first loop. The complete set of necessary earlier answers remains unknown.",
  },

  {
    id: "duplicity",
    name: "Duplicity",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "duplicity-nima",
      scene: "final-confrontation",
      inputWord: "Nima",
      dialogueOption: "Of course I'm Nima.",
      selectionStatus: "inferred",
    },

    relatedChoices: [
      {
        id: "duplicity-james-pond",
        scene: "fish-test",
        inputWord: "James Pond",
        dialogueOption: "It's James.",
        prompt: "Go ahead. Take a bite.",
        selectionStatus: "available-only",
        note:
          "An earlier checkpoint associated with this branch. Its necessity has not been established.",
      },
    ],

    context:
      "During the confrontation with Mom, place Nima into the head input. The branch also includes an earlier fish-test scene involving James Pond.",

    outcome:
      "You identify yourself as Nima and later accompany Mom upstairs. She remains unconvinced, and the sequence ultimately ends with your death and a return to the repeated tests.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#duplicity-ending",

    note:
      "The James Pond response belongs to the fish test, while the Nima response belongs to the later confrontation.",
  },

  {
    id: "monster",
    name: "Monster",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "monster-monster",
      scene: "final-confrontation",
      inputWord: "Monster",
      dialogueOption: "I'm a monster.",
      prompt: "Why couldn't you just be Nima?",
      selectionStatus: "inferred",
    },

    context:
      "During the basement confrontation, Mom questions why you could not simply be Nima. Monster reveals a response accepting your monstrous identity.",

    outcome:
      "You acknowledge that you are a monster. The confrontation continues and ultimately ends with your death.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#monster-ending",

    note:
      "This is different from the Hive response associated with Symbiosis.",
  },

  {
    id: "martyr",
    name: "Martyr",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "martyr-death",
      scene: "final-confrontation",
      inputWord: "Death",
      dialogueOption: "I'm dead.",
      selectionStatus: "inferred",
    },

    context:
      "During the basement confrontation, Death reveals a response acknowledging that you are already dead.",

    outcome:
      "You acknowledge the truth about your existence and ask Mom to let you go. She does not accept your request, and the confrontation ends with your death.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#martyr-ending",
  },

  {
    id: "stasis",
    name: "Stasis",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "stasis-responsibility",
      scene: "fish-test",
      inputWord: "Responsibility",
      dialogueOption: "If you say so.",
      prompt: "Go ahead. Take a bite.",
      selectionStatus: "inferred",
    },

    context:
      "During the fish test at the basement table, Mom asks you to take a bite. Responsibility reveals a compliant response.",

    outcome:
      "You continue complying with Mom, and the voice associated with the mirror disappears. The sequence ultimately ends with you being sealed behind a brick wall.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#stasis-ending",

    note:
      "The branch does not represent a successful escape, even if earlier dialogue suggests that you have succeeded.",
  },

  {
    id: "assimilation",
    name: "Assimilation",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "assimilation-repression",
      scene: "fish-test",
      inputWord: "Repression",
      dialogueOption: "Swallow your hate.",
      prompt: "Go ahead. Take a bite.",
      selectionStatus: "inferred",
    },

    context:
      "During the fish test, Repression reveals a response focused on suppressing your hatred rather than expressing it openly.",

    outcome:
      "You conceal your resentment and later pursue revenge against Mom. The branch concludes with narration describing her final moments.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#assimilation-ending",

    note:
      "This use of Repression differs from the Loyalty and Fissure responses.",
  },

  {
    id: "carnage",
    name: "Carnage",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "carnage-fear",
      scene: "mirror-crucible",
      inputWord: "Fear",
      dialogueOption: "KILL MOM!",
      prompt: "She's my mother.",
      selectionStatus: "inferred",
    },

    context:
      "During the later mirror conversation, CRUCIBLE is displayed and Fear is available in the word library. Fear reveals the aggressive response at this particular checkpoint.",

    outcome:
      "You attack Mom, bringing the story to a violent conclusion followed by the credits.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#carnage-ending",

    note:
      "Fear can produce different responses in other conversations. CRUCIBLE has not been established as a necessary condition.",
  },

  {
    id: "fissure",
    name: "Fissure",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "fissure-repression",
      scene: "mirror-identity",
      inputWord: "Repression",
      dialogueOption: "I am Nima.",
      prompt: "Nima is dead.",
      selectionStatus: "inferred",
    },

    context:
      "During the mirror-related identity scene, the narration states that Nima is dead. Repression reveals a response insisting that you are Nima.",

    outcome:
      "The entity releases its control over your mind. Your body begins to fail, and the sequence presents your death as the price of freedom.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#fissure-ending",
  },

  {
    id: "symbiosis",
    name: "Symbiosis",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "symbiosis-hive",
      scene: "final-confrontation",
      inputWord: "Hive",
      dialogueOption: "You made me a monster.",
      selectionStatus: "inferred",
    },

    context:
      "During the basement confrontation, Hive reveals a response confronting Mom about her role in creating your current identity.",

    outcome:
      "The story continues into a secret area beneath the basement and addresses Mom's research. You eventually leave Mom and the bunker behind, returning toward the ancient pool connected to your origins.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#symbiosis-ending",

    note:
      "The branch includes the bunker, but manually unlocking its keypad door has not been established as a prerequisite.",
  },

  {
    id: "judgement",
    name: "Judgement",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "judgement-judgement",
      scene: "final-verdict",
      inputWord: "Judgement",
      dialogueOption: "Move on.",
      prompt: "What is your verdict?",
      selectionStatus: "inferred",
    },

    context:
      "After the late-game identity discussion, the Final Verdict offers a decision between Judgement and Acceptance.",

    outcome:
      "You leave Mom behind and step into the valley. The narration indicates that you will never see her again.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#judgement-ending",

    note:
      "The preceding route to the Final Verdict has not been fully established.",
  },

  {
    id: "acceptance",
    name: "Acceptance",
    routeStatus: "checkpoint-branch",
    nameAttribution: "provisional",

    keyChoice: {
      id: "acceptance-acceptance",
      scene: "final-verdict",
      inputWord: "Acceptance",
      dialogueOption: "Forgive her.",
      prompt: "What is your verdict?",
      selectionStatus: "inferred",
    },

    context:
      "At the Final Verdict, Acceptance reveals the forgiveness response instead of the Judgement response.",

    outcome:
      "You forgive Mom, step into the valley, and express a desire to continue living. The sequence concludes with the credits.",

    requiredConditions: "unknown",

    guideHref: "/am-i-nima/endings#acceptance-ending",

    note:
      "Acceptance has not been established as the game's only true ending.",
  },
];

// Shared late-game path.
//
// This is not a separate ending entity.
// The complete entry conditions remain unknown.

export const amINimaFinalVerdictPath = {
  id: "final-verdict-path",

  name: "Final Verdict Path",

  endingIds: ["judgement", "acceptance"] as const,

  requiredConditions: "unknown" as const,

  checkpoints: [
    {
      id: "crucible-mirror",
      scene: "mirror-crucible" as const,
      description:
        "CRUCIBLE is visible during the later mirror conversation.",
      note:
        "Its acquisition method and role as a prerequisite remain unknown.",
    },
    {
      id: "transcendence",
      description:
        "TRANSCENDENCE appears during the late-game sequence.",
      note:
        "The title does not establish an additional ending or a confirmed Memory collection entry.",
    },
    {
      id: "identity-explanation",
      scene: "identity-explanation" as const,
      description:
        "The conversation turns to Mom's actions and Nima's identity.",

      choice: {
        id: "shared-metempsychosis",
        scene: "identity-explanation",
        inputWord: "METEMPSYCHOSIS",
        dialogueOption: "You sacrificed Nima.",
        prompt: "How are you going to explain yourself?",
        selectionStatus: "inferred",
      } satisfies AmINimaEndingChoice,
    },
    {
      id: "final-verdict",
      scene: "final-verdict" as const,
      description:
        "Judgement and Acceptance become available when the game asks for your verdict.",
      prompt: "What is your verdict?",
    },
  ],

  guideHref: "/am-i-nima/endings#final-verdict",
};

// Derived ending data.

export const amINimaKnownEndingBranches =
  amINimaEndings.filter(
    (ending) => Boolean(ending.keyChoice)
  );

export const amINimaEndingCount =
  amINimaEndings.length;

// Flatten ending-related choices for lookup and
// display without maintaining a separate choice list.

export const amINimaEndingChoiceViews:
  AmINimaEndingChoiceView[] =
  amINimaEndings.flatMap((ending) => {
    const keyChoice: AmINimaEndingChoiceView = {
      ...ending.keyChoice,
      endingId: ending.id,
      endingName: ending.name,
      sceneLabel:
        amINimaEndingSceneLabels[ending.keyChoice.scene],
      guideHref: ending.guideHref,
      isKeyChoice: true,
    };

    const relatedChoices: AmINimaEndingChoiceView[] =
      (ending.relatedChoices ?? []).map((choice) => ({
        ...choice,
        endingId: ending.id,
        endingName: ending.name,
        sceneLabel:
          amINimaEndingSceneLabels[choice.scene],
        guideHref: ending.guideHref,
        isKeyChoice: false,
      }));

    return [...relatedChoices, keyChoice];
  });

// One principal branch choice per ending.

export const amINimaKeyEndingChoices =
  amINimaEndingChoiceViews.filter(
    (choice) => choice.isKeyChoice
  );

// Lookup by stable ending ID.

export function getAmINimaEnding(
  endingId: string
): AmINimaEnding | undefined {
  return amINimaEndings.find(
    (ending) => ending.id === endingId
  );
}

// Return endings whose main branch decision
// occurs in the selected scene.

export function getAmINimaEndingsByScene(
  scene: AmINimaEndingScene
): AmINimaEnding[] {
  return amINimaEndings.filter(
    (ending) => ending.keyChoice.scene === scene
  );
}

// Return every associated choice for a gameplay
// word, including related earlier choices.

export function getAmINimaEndingChoicesByWord(
  word: string
): AmINimaEndingChoiceView[] {
  const normalized = word.trim().toLowerCase();

  if (!normalized) {
    return [];
  }

  return amINimaEndingChoiceViews.filter(
    (choice) =>
      choice.inputWord.toLowerCase() === normalized
  );
}

// Return the ending-related choices available
// in a particular type of scene.

export function getAmINimaEndingChoicesByScene(
  scene: AmINimaEndingScene
): AmINimaEndingChoiceView[] {
  return amINimaEndingChoiceViews.filter(
    (choice) => choice.scene === scene
  );
}

// Search ending-related dialogue choices.

export function searchAmINimaEndingChoices(
  query: string
): AmINimaEndingChoiceView[] {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return amINimaEndingChoiceViews;
  }

  return amINimaEndingChoiceViews.filter(
    (choice) =>
      [
        choice.endingName,
        choice.inputWord,
        choice.dialogueOption,
        choice.sceneLabel,
        choice.prompt ?? "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
  );
}

// Judgement and Acceptance are two branches
// of the shared Final Verdict checkpoint.

export const amINimaFinalVerdictEndings =
  getAmINimaEndingsByScene("final-verdict");