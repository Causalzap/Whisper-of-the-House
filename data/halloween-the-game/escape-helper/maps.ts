import type {
    HalloweenMapDefinition,
    HalloweenMapId,
  } from "./types";
  
  export const halloweenMaps: Record<
    HalloweenMapId,
    HalloweenMapDefinition
  > = {
    "east-haddonfield": {
      id: "east-haddonfield",
      name: "East Haddonfield",
  
      knownSpawnKinds: [
        "sedan",
        "storm-cellar",
        "escape-gate",
        "gas",
      ],
  
      coverage: {
        escapeSpawns: "partial",
        gasSpawns: "partial",
      },
    },
  
    "haddonfield-heights": {
      id: "haddonfield-heights",
      name: "Haddonfield Heights",
  
      knownSpawnKinds: [
        "sedan",
        "storm-cellar",
        "escape-gate",
        "gas",
      ],
  
      coverage: {
        escapeSpawns: "partial",
        gasSpawns: "partial",
      },
    },
  
    "orange-grove-estates": {
      id: "orange-grove-estates",
      name: "Orange Grove Estates",
  
      knownSpawnKinds: [
        "sedan",
        "storm-cellar",
        "escape-gate",
        "gas",
      ],
  
      coverage: {
        escapeSpawns: "partial",
        gasSpawns: "partial",
      },
    },
  
    "haddonfield-town-center": {
      id: "haddonfield-town-center",
      name: "Haddonfield Town Center",
  
      knownSpawnKinds: [
        "sedan",
        "storm-cellar",
        "escape-gate",
        "gas",
      ],
  
      coverage: {
        escapeSpawns: "partial",
        gasSpawns: "partial",
      },
    },
  };