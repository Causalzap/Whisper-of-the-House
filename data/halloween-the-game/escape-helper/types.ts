export type HalloweenMapId =
  | "east-haddonfield"
  | "haddonfield-heights"
  | "orange-grove-estates"
  | "haddonfield-town-center";

export type EscapeRouteId =
  | "sedan"
  | "storm-cellar"
  | "escape-gate"
  | "police-wagon";

export type EscapeItemId =
  | "gas"
  | "sedan-key"
  | "repair-kit"
  | "fuse"
  | "bolt-cutters"
  | "padlock-key"
  | "escape-key"
  | "wood-axe"
  | "beer"
  | "pocket-knife";

export type BarrierId =
  | "padlock"
  | "chains"
  | "boards"
  | "fuse-box";

export type SpawnKind =
  | "sedan"
  | "storm-cellar"
  | "escape-gate"
  | "gas";

export type SpawnModel =
  | "fixed-candidate-pool"
  | "random-loot"
  | "rare-random-loot"
  | "unknown-random";

export type DataConfidence =
  | "confirmed"
  | "high"
  | "reported"
  | "unverified";

export type EvidenceKind =
  | "multiplayer-observation"
  | "community-map"
  | "community-notes"
  | "achievement-list";

export type MapRegionId = `${HalloweenMapId}:${string}`;

export type MatchFlagId = "police-wagon-available";

export type MatchGoal =
  | "escape-fast"
  | "safest-route"
  | "save-residents"
  | "achievement";

export type EscapeAchievementId =
  | "i-found-the-car"
  | "risky-escape";

export type Requirement =
  | {
      kind: "item";
      itemId: EscapeItemId;
    }
  | {
      kind: "anyOf";
      options: Requirement[];
    }
  | {
      kind: "allOf";
      requirements: Requirement[];
    }
  | {
      kind: "matchFlag";
      flagId: MatchFlagId;
      equals: boolean;
    };

export interface EvidenceRef {
  sourceId: string;
  kind: EvidenceKind;
  confidence: DataConfidence;
  lastVerified: string;
}

export interface EscapeItemDefinition {
  id: EscapeItemId;
  name: string;

  category:
    | "escape"
    | "access"
    | "tool"
    | "consumable"
    | "defense";

  spawnRuleId?: string;

  confidence: DataConfidence;

  notes?: string[];
}

export interface BarrierDefinition {
  id: BarrierId;
  name: string;
  requirement: Requirement;

  confidence: DataConfidence;

  notes?: string[];
}

export interface EscapeRouteDefinition {
  id: EscapeRouteId;
  name: string;

  fixedRequirements: Requirement[];

  /**
   * These are barriers the player may encounter after discovering the route.
   * We do not assume every match uses every barrier.
   */
  possibleBarriers: BarrierId[];

  barrierDriven: boolean;

  supportsResidents: boolean;

  achievementIds?: EscapeAchievementId[];

  confidence: DataConfidence;

  notes?: string[];
}

export interface HalloweenMapDefinition {
  id: HalloweenMapId;
  name: string;

  knownSpawnKinds: SpawnKind[];

  coverage: {
    escapeSpawns: "partial" | "good";
    gasSpawns: "partial" | "good";
  };

  notes?: string[];
}

export interface MapRegionDefinition {
  id: MapRegionId;
  mapId: HalloweenMapId;

  label: string;

  shortLabel: string;

  aliases?: string[];

  description?: string;
}

export interface SpawnAreaDefinition {
  id: string;

  mapId: HalloweenMapId;

  regionId: MapRegionId;

  kind: SpawnKind;

  /**
   * Community maps currently show that this region can contain this spawn.
   * It does NOT mean the spawn appears here every match.
   */
  confidence: DataConfidence;

  sourceId: string;

  candidateCount?: number;

  landmark?: string;

  notes?: string[];
}

export interface SpawnRuleDefinition {
  id: string;

  itemIds: EscapeItemId[];

  model: SpawnModel;

  summary: string;

  preferredSearchTargets?: string[];

  poorSearchTargets?: string[];

  typicalPerMatch?: {
    min?: number;
    max?: number;
  };

  confidence: DataConfidence;

  notes?: string[];
}

export interface EscapeAchievementDefinition {
  id: EscapeAchievementId;

  name: string;

  preferredRoute: EscapeRouteId;

  additionalItemRequirements?: EscapeItemId[];

  requiresDriving?: boolean;

  requiresDrunkState?: boolean;

  requiresFullResidentCapacity?: boolean;

  notes?: string[];
}

/* -------------------------------------------------------------------------- */
/* Runtime state                                                              */
/* -------------------------------------------------------------------------- */

export type TeamItemStatus =
  | "unknown"
  | "found"
  | "carried"
  | "staged-at-exit"
  | "used";

export interface TeamItemState {
  itemId: EscapeItemId;
  status: TeamItemStatus;
}

export type BarrierStatus =
  | "unknown"
  | "present"
  | "cleared";

export interface BarrierState {
  barrierId: BarrierId;
  status: BarrierStatus;
}

export type RouteDiscoveryState =
  | "unknown"
  | "found";

export type RouteProgressState =
  | "unknown"
  | "not-started"
  | "in-progress"
  | "ready"
  | "blocked"
  | "used";

export interface PlayerRouteState {
  routeId: EscapeRouteId;

  discovery: RouteDiscoveryState;

  progress: RouteProgressState;

  barriers: BarrierState[];
}

export type SpawnAreaCheckStatus =
  | "unchecked"
  | "checked-empty"
  | "confirmed-active";

export interface SpawnAreaCheckState {
  areaId: string;

  status: SpawnAreaCheckStatus;
}

export interface EscapeHelperInput {
  mapId: HalloweenMapId;

  goal: MatchGoal;

  achievementId?: EscapeAchievementId;

  currentRegionId?: MapRegionId;

  teamItems: TeamItemState[];

  routes: PlayerRouteState[];

  checkedSpawnAreas: SpawnAreaCheckState[];

  residentsReady?: number;

  playerDrunk?: boolean;

  policeWagonAvailable?: boolean;
}