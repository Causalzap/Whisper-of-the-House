import type {
    EscapeRouteDefinition,
    EscapeRouteId,
  } from "./types";
  
  export const escapeRoutes: Record<
    EscapeRouteId,
    EscapeRouteDefinition
  > = {
    sedan: {
      id: "sedan",
      name: "Sedan",
  
      fixedRequirements: [
        {
          kind: "item",
          itemId: "sedan-key",
        },
        {
          kind: "item",
          itemId: "repair-kit",
        },
        {
          kind: "item",
          itemId: "gas",
        },
      ],
  
      possibleBarriers: [],
  
      barrierDriven: false,
  
      supportsResidents: true,
  
      achievementIds: [
        "i-found-the-car",
        "risky-escape",
      ],
  
      confidence: "confirmed",
  
      notes: [
        "The three Sedan requirements can be split across different teammates.",
        "Once all three are confirmed, additional generic escape-loot searching usually has low value.",
      ],
    },
  
    "storm-cellar": {
      id: "storm-cellar",
      name: "Storm Cellar",
  
      fixedRequirements: [],
  
      possibleBarriers: [
        "padlock",
        "chains",
        "boards",
      ],
  
      barrierDriven: true,
  
      supportsResidents: true,
  
      confidence: "high",
  
      notes: [
        "Inspect the discovered Cellar before recommending a specific item.",
        "The route can be partially prepared: one barrier may already be cleared while another remains.",
      ],
    },
  
    "escape-gate": {
      id: "escape-gate",
      name: "Escape Gate",
  
      fixedRequirements: [],
  
      possibleBarriers: [
        "fuse-box",
        "padlock",
        "chains",
      ],
  
      barrierDriven: true,
  
      supportsResidents: true,
  
      confidence: "reported",
  
      notes: [
        "Gate requirements should be derived from the barriers the player actually sees.",
        "Do not assume every Gate needs the same combination in every match.",
      ],
    },
  
    "police-wagon": {
      id: "police-wagon",
      name: "Police Wagon",
  
      fixedRequirements: [
        {
          kind: "matchFlag",
          flagId: "police-wagon-available",
          equals: true,
        },
      ],
  
      possibleBarriers: [],
  
      barrierDriven: false,
  
      supportsResidents: true,
  
      confidence: "high",
  
      notes: [
        "Availability comes from match progression rather than an inventory checklist.",
      ],
    },
  };