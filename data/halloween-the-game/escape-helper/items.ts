import type {
    EscapeItemDefinition,
    EscapeItemId,
  } from "./types";
  
  export const escapeItems: Record<
    EscapeItemId,
    EscapeItemDefinition
  > = {
    gas: {
      id: "gas",
      name: "Gas",
      category: "escape",
      spawnRuleId: "gas-fixed-candidate-pool",
      confidence: "high",
      notes: [
        "Sedan escape requirement.",
        "Uses known candidate spawn locations rather than ordinary container loot.",
      ],
    },
  
    "sedan-key": {
      id: "sedan-key",
      name: "Sedan Key",
      category: "escape",
      spawnRuleId: "keys-random-loot",
      confidence: "high",
      notes: [
        "Sedan escape requirement.",
      ],
    },
  
    "repair-kit": {
      id: "repair-kit",
      name: "Repair Kit",
      category: "escape",
      spawnRuleId: "repair-kit-random",
      confidence: "high",
      notes: [
        "Sedan escape requirement.",
      ],
    },
  
    fuse: {
      id: "fuse",
      name: "Fuse",
      category: "access",
      spawnRuleId: "fuse-rare-random",
      confidence: "high",
    },
  
    "bolt-cutters": {
      id: "bolt-cutters",
      name: "Bolt Cutters",
      category: "tool",
      spawnRuleId: "bolt-cutters-random-loot",
      confidence: "high",
      notes: [
        "Useful for chains and some locked escape barriers.",
        "Also progresses the Unchained achievement.",
      ],
    },
  
    "padlock-key": {
      id: "padlock-key",
      name: "Padlock Key",
      category: "access",
      spawnRuleId: "keys-random-loot",
      confidence: "high",
    },
  
    "escape-key": {
      id: "escape-key",
      name: "Escape Key",
      category: "access",
      spawnRuleId: "keys-random-loot",
      confidence: "reported",
      notes: [
        "Kept separate from Padlock Key until route-specific usage is fully verified.",
      ],
    },
  
    "wood-axe": {
      id: "wood-axe",
      name: "Wood Axe",
      category: "tool",
      spawnRuleId: "wood-axe-random",
      confidence: "high",
      notes: [
        "Used to clear boarded escape barriers when that barrier variant appears.",
      ],
    },
  
    beer: {
      id: "beer",
      name: "Beer",
      category: "consumable",
      spawnRuleId: "beer-random",
      confidence: "high",
      notes: [
        "Relevant to the Risky Escape hidden achievement.",
      ],
    },
  
    "pocket-knife": {
      id: "pocket-knife",
      name: "Pocket Knife",
      category: "defense",
      spawnRuleId: "pocket-knife-random",
      confidence: "high",
      notes: [
        "Relevant to Laurie Strode's grab-escape achievement.",
      ],
    },
  };