import type {
    HalloweenMapId,
    SpawnAreaDefinition,
  } from "./types";
  
  const ESCAPE_MAP_SOURCE =
    "community-escape-map-2026-09-09";
  
  const GAS_MAP_SOURCE =
    "community-gas-map-2026-09-09";
  
  export const spawnAreasByMap: Record<
    HalloweenMapId,
    SpawnAreaDefinition[]
  > = {
    "east-haddonfield": [
      /* Sedan */
  
      {
        id: "eh-sedan-northeast",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:northeast-building",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-sedan-west",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:west-residential",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-sedan-central",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:central",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-sedan-east",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:east-residential",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Storm Cellar */
  
      {
        id: "eh-cellar-northwest",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:northwest-edge",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-cellar-north",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:north-main-house",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-cellar-west",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:west-residential",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-cellar-central",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:central",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-cellar-east",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:east-residential",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "eh-cellar-south",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:south-central",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Escape Gate */
  
      {
        id: "eh-gate-west",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:west-residential",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Gas */
  
      {
        id: "eh-gas-north",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:north-main-house",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "eh-gas-central",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:central",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "eh-gas-east",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:east-residential",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "eh-gas-southwest",
        mapId: "east-haddonfield",
        regionId: "east-haddonfield:southwest-residential",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
    ],
  
    "haddonfield-heights": [
      /* Sedan */
  
      {
        id: "hh-sedan-north-central",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:north-central-homes",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-sedan-victoria-west",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:central-victoria-west",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-sedan-south",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:south-mckinzie",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-sedan-southwest",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:southwest-park",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Storm Cellar */
  
      {
        id: "hh-cellar-northwest",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:northwest-syracuse",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-north-central",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:north-central-homes",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-northeast",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:northeast-edgemont",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-victoria-west",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:central-victoria-west",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-victoria-east",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:central-victoria-east",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-southeast",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:southeast-homes",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-south",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:south-mckinzie",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-cellar-southwest",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:southwest-park",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Escape Gate */
  
      {
        id: "hh-gate-north",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:north-mirada",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-gate-northeast",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:northeast-edgemont",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "hh-gate-south",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:south-mckinzie",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Gas */
  
      {
        id: "hh-gas-north-central",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:north-central-homes",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "hh-gas-northwest",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:northwest-syracuse",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "hh-gas-victoria-west",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:central-victoria-west",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "hh-gas-victoria-east",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:central-victoria-east",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "hh-gas-southwest",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:southwest-park",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "hh-gas-south",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:south-mckinzie",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "hh-gas-southeast",
        mapId: "haddonfield-heights",
        regionId: "haddonfield-heights:southeast-homes",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
    ],
  
    "orange-grove-estates": [
      /* Sedan */
  
      {
        id: "oge-sedan-northwest",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:northwest-westridge",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-sedan-north-central",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:north-central",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-sedan-central-park",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-park",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-sedan-central-west",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-west",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-sedan-east",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-east-fletcher",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-sedan-south",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:south-central",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Storm Cellar */
  
      {
        id: "oge-cellar-north",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:north-central",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-cellar-east",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-east-fletcher",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-cellar-southwest",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:southwest-orange-grove",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-cellar-south-central",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:south-central",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Escape Gate */
  
      {
        id: "oge-gate-north",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:north-central",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-gate-northeast",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:northeast-estates",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "oge-gate-southwest",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:southwest-orange-grove",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Gas */
  
      {
        id: "oge-gas-northwest",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:northwest-westridge",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "oge-gas-northeast",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:northeast-estates",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "oge-gas-park",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-park",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "oge-gas-central-west",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-west",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "oge-gas-central-east",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:central-east-fletcher",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "oge-gas-southwest",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:southwest-orange-grove",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "oge-gas-southeast",
        mapId: "orange-grove-estates",
        regionId: "orange-grove-estates:southeast-estates",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
    ],
  
    "haddonfield-town-center": [
      /* Sedan */
  
      {
        id: "htc-sedan-north",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:north-central",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "htc-sedan-west",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:west-peach",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "htc-sedan-east",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:east-peach",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "htc-sedan-southeast",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:southeast-cemetery",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "htc-sedan-south",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:south-central",
        kind: "sedan",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Storm Cellar */
  
      {
        id: "htc-cellar-west",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:west-peach",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "htc-cellar-central",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:central-rail",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
      {
        id: "htc-cellar-south",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:south-central",
        kind: "storm-cellar",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Escape Gate */
  
      {
        id: "htc-gate-southeast",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:southeast-cemetery",
        kind: "escape-gate",
        confidence: "reported",
        sourceId: ESCAPE_MAP_SOURCE,
      },
  
      /* Gas */
  
      {
        id: "htc-gas-north",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:north-central",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "htc-gas-northeast",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:northeast",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "htc-gas-west",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:west-peach",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "htc-gas-central",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:central-rail",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "htc-gas-southwest",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:southwest-eleanor",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
      {
        id: "htc-gas-southeast",
        mapId: "haddonfield-town-center",
        regionId: "haddonfield-town-center:southeast-cemetery",
        kind: "gas",
        confidence: "reported",
        sourceId: GAS_MAP_SOURCE,
      },
    ],
  };