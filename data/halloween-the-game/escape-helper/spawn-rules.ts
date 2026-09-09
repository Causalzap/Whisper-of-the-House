import type {
    SpawnRuleDefinition,
  } from "./types";
  
  export const spawnRules: Record<
    string,
    SpawnRuleDefinition
  > = {
    "gas-fixed-candidate-pool": {
      id: "gas-fixed-candidate-pool",
  
      itemIds: [
        "gas",
      ],
  
      model: "fixed-candidate-pool",
  
      summary:
        "Gas is drawn from known candidate locations rather than ordinary random container loot.",
  
      typicalPerMatch: {
        min: 3,
        max: 4,
      },
  
      confidence: "reported",
  
      notes: [
        "Use map-specific Gas candidate areas before clearing random drawers.",
        "The community location pool is still being expanded, so the tool should say known candidates rather than all possible candidates.",
      ],
    },
  
    "bolt-cutters-random-loot": {
      id: "bolt-cutters-random-loot",
  
      itemIds: [
        "bolt-cutters",
      ],
  
      model: "random-loot",
  
      summary:
        "Bolt Cutters use random loot positions rather than one fixed map spawn.",
  
      preferredSearchTargets: [
        "large drawers",
        "tables",
        "shelves",
        "unlocked chests",
        "red toolboxes",
        "visible ground loot",
      ],
  
      poorSearchTargets: [
        "small drawers",
        "kitchens",
      ],
  
      confidence: "reported",
    },
  
    "keys-random-loot": {
      id: "keys-random-loot",
  
      itemIds: [
        "sedan-key",
        "padlock-key",
        "escape-key",
      ],
  
      model: "random-loot",
  
      summary:
        "Keys can appear across normal searchable surfaces and containers.",
  
      preferredSearchTargets: [
        "drawers",
        "tables",
        "shelves",
        "chests",
        "red toolboxes",
        "visible ground loot",
      ],
  
      confidence: "reported",
    },
  
    "fuse-rare-random": {
      id: "fuse-rare-random",
  
      itemIds: [
        "fuse",
      ],
  
      model: "rare-random-loot",
  
      summary:
        "Fuses are rare and should not be treated like a fixed map spawn.",
  
      preferredSearchTargets: [
        "lockboxes",
        "drawers",
        "NPC conversations",
      ],
  
      confidence: "reported",
  
      notes: [
        "NPC interaction can matter, so searching containers alone is not always the best plan.",
      ],
    },
  
    "repair-kit-random": {
      id: "repair-kit-random",
  
      itemIds: [
        "repair-kit",
      ],
  
      model: "unknown-random",
  
      summary:
        "Repair Kit locations are not yet mapped strongly enough to recommend exact candidate areas.",
  
      confidence: "unverified",
    },
  
    "wood-axe-random": {
      id: "wood-axe-random",
  
      itemIds: [
        "wood-axe",
      ],
  
      model: "unknown-random",
  
      summary:
        "Wood Axe is currently treated as general match loot until a reliable map-specific pattern is confirmed.",
  
      confidence: "unverified",
    },
  
    "beer-random": {
      id: "beer-random",
  
      itemIds: [
        "beer",
      ],
  
      model: "unknown-random",
  
      summary:
        "Beer is currently only used by the tool for Risky Escape planning.",
  
      confidence: "unverified",
    },
  
    "pocket-knife-random": {
      id: "pocket-knife-random",
  
      itemIds: [
        "pocket-knife",
      ],
  
      model: "unknown-random",
  
      summary:
        "Pocket Knife is not part of normal escape-route ranking.",
  
      confidence: "unverified",
    },
  };