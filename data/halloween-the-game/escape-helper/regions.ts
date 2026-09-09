import type {
    HalloweenMapId,
    MapRegionDefinition,
  } from "./types";
  
  export const mapRegions: Record<
    HalloweenMapId,
    MapRegionDefinition[]
  > = {
    "east-haddonfield": [
      {
        id: "east-haddonfield:northwest-edge",
        mapId: "east-haddonfield",
        label: "Northwest Edge",
        shortLabel: "Northwest",
      },
      {
        id: "east-haddonfield:north-main-house",
        mapId: "east-haddonfield",
        label: "North Main House",
        shortLabel: "North House",
      },
      {
        id: "east-haddonfield:northeast-building",
        mapId: "east-haddonfield",
        label: "Northeast Building",
        shortLabel: "Northeast",
      },
      {
        id: "east-haddonfield:west-residential",
        mapId: "east-haddonfield",
        label: "West Residential Area",
        shortLabel: "West",
      },
      {
        id: "east-haddonfield:central",
        mapId: "east-haddonfield",
        label: "Central Haddonfield",
        shortLabel: "Central",
      },
      {
        id: "east-haddonfield:east-residential",
        mapId: "east-haddonfield",
        label: "East Residential Area",
        shortLabel: "East",
      },
      {
        id: "east-haddonfield:southwest-residential",
        mapId: "east-haddonfield",
        label: "Southwest Residential Area",
        shortLabel: "Southwest",
      },
      {
        id: "east-haddonfield:south-central",
        mapId: "east-haddonfield",
        label: "South-Central Area",
        shortLabel: "South",
      },
      {
        id: "east-haddonfield:southeast-edge",
        mapId: "east-haddonfield",
        label: "Southeast Edge",
        shortLabel: "Southeast",
      },
    ],
  
    "haddonfield-heights": [
      {
        id: "haddonfield-heights:north-mirada",
        mapId: "haddonfield-heights",
        label: "North / Mirada Way",
        shortLabel: "Mirada Way",
        aliases: ["north edge"],
      },
      {
        id: "haddonfield-heights:northwest-syracuse",
        mapId: "haddonfield-heights",
        label: "Northwest / Syracuse Ave",
        shortLabel: "Syracuse Ave",
      },
      {
        id: "haddonfield-heights:north-central-homes",
        mapId: "haddonfield-heights",
        label: "North-Central Homes",
        shortLabel: "North-Central",
      },
      {
        id: "haddonfield-heights:northeast-edgemont",
        mapId: "haddonfield-heights",
        label: "Northeast / Edgemont Side",
        shortLabel: "Northeast",
      },
      {
        id: "haddonfield-heights:central-victoria-west",
        mapId: "haddonfield-heights",
        label: "West Victoria Way",
        shortLabel: "West Victoria",
      },
      {
        id: "haddonfield-heights:central-victoria-east",
        mapId: "haddonfield-heights",
        label: "East Victoria Way",
        shortLabel: "East Victoria",
      },
      {
        id: "haddonfield-heights:southwest-park",
        mapId: "haddonfield-heights",
        label: "Southwest Park",
        shortLabel: "Southwest Park",
      },
      {
        id: "haddonfield-heights:south-mckinzie",
        mapId: "haddonfield-heights",
        label: "South / McKinzie Lane",
        shortLabel: "McKinzie Lane",
      },
      {
        id: "haddonfield-heights:southeast-homes",
        mapId: "haddonfield-heights",
        label: "Southeast Homes",
        shortLabel: "Southeast",
      },
    ],
  
    "orange-grove-estates": [
      {
        id: "orange-grove-estates:northwest-westridge",
        mapId: "orange-grove-estates",
        label: "Northwest / Westridge Drive",
        shortLabel: "Westridge",
      },
      {
        id: "orange-grove-estates:north-central",
        mapId: "orange-grove-estates",
        label: "North-Central Estates",
        shortLabel: "North-Central",
      },
      {
        id: "orange-grove-estates:northeast-estates",
        mapId: "orange-grove-estates",
        label: "Northeast Estates",
        shortLabel: "Northeast",
      },
      {
        id: "orange-grove-estates:central-park",
        mapId: "orange-grove-estates",
        label: "Central Park and Courts",
        shortLabel: "Central Park",
      },
      {
        id: "orange-grove-estates:central-west",
        mapId: "orange-grove-estates",
        label: "Central-West Homes",
        shortLabel: "Central-West",
      },
      {
        id: "orange-grove-estates:central-east-fletcher",
        mapId: "orange-grove-estates",
        label: "Central-East / Fletcher Way",
        shortLabel: "Fletcher Way",
      },
      {
        id: "orange-grove-estates:southwest-orange-grove",
        mapId: "orange-grove-estates",
        label: "Southwest / Orange Grove Ave",
        shortLabel: "Southwest",
      },
      {
        id: "orange-grove-estates:south-central",
        mapId: "orange-grove-estates",
        label: "South-Central Estates",
        shortLabel: "South-Central",
      },
      {
        id: "orange-grove-estates:southeast-estates",
        mapId: "orange-grove-estates",
        label: "Southeast Estates",
        shortLabel: "Southeast",
      },
    ],
  
    "haddonfield-town-center": [
      {
        id: "haddonfield-town-center:northwest",
        mapId: "haddonfield-town-center",
        label: "Northwest Town Center",
        shortLabel: "Northwest",
      },
      {
        id: "haddonfield-town-center:north-central",
        mapId: "haddonfield-town-center",
        label: "North-Central Town Center",
        shortLabel: "North-Central",
      },
      {
        id: "haddonfield-town-center:northeast",
        mapId: "haddonfield-town-center",
        label: "Northeast Town Center",
        shortLabel: "Northeast",
      },
      {
        id: "haddonfield-town-center:west-peach",
        mapId: "haddonfield-town-center",
        label: "West / Peach Street",
        shortLabel: "West Peach",
      },
      {
        id: "haddonfield-town-center:central-rail",
        mapId: "haddonfield-town-center",
        label: "Central Rail Area",
        shortLabel: "Central",
      },
      {
        id: "haddonfield-town-center:east-peach",
        mapId: "haddonfield-town-center",
        label: "East / Peach Street",
        shortLabel: "East Peach",
      },
      {
        id: "haddonfield-town-center:southwest-eleanor",
        mapId: "haddonfield-town-center",
        label: "Southwest / Eleanor Ave",
        shortLabel: "Southwest",
      },
      {
        id: "haddonfield-town-center:south-central",
        mapId: "haddonfield-town-center",
        label: "South-Central Town Center",
        shortLabel: "South-Central",
      },
      {
        id: "haddonfield-town-center:southeast-cemetery",
        mapId: "haddonfield-town-center",
        label: "Southeast / Mt. Sinclair Cemetery",
        shortLabel: "Cemetery",
      },
    ],
  };