import type {
    BarrierDefinition,
    BarrierId,
  } from "./types";
  
  export const barrierDefinitions: Record<
    BarrierId,
    BarrierDefinition
  > = {
    padlock: {
      id: "padlock",
      name: "Padlock",
      requirement: {
        kind: "anyOf",
        options: [
          {
            kind: "item",
            itemId: "padlock-key",
          },
          {
            kind: "item",
            itemId: "bolt-cutters",
          },
        ],
      },
      confidence: "high",
    },
  
    chains: {
      id: "chains",
      name: "Chains",
      requirement: {
        kind: "item",
        itemId: "bolt-cutters",
      },
      confidence: "high",
    },
  
    boards: {
      id: "boards",
      name: "Wooden Boards",
      requirement: {
        kind: "item",
        itemId: "wood-axe",
      },
      confidence: "high",
      notes: [
        "A discovered exit can remain blocked by boards even after its lock has been cleared.",
      ],
    },
  
    "fuse-box": {
      id: "fuse-box",
      name: "Fuse Box",
      requirement: {
        kind: "item",
        itemId: "fuse",
      },
      confidence: "high",
    },
  };