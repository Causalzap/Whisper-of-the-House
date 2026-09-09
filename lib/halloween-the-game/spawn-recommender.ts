import {
    escapeItems,
    halloweenMaps,
    mapRegions,
    spawnAreasByMap,
    spawnRules,
    type DataConfidence,
    type EscapeHelperInput,
    type EscapeItemId,
    type HalloweenMapId,
    type MapRegionId,
    type SpawnKind,
  } from "@/data/halloween-the-game/escape-helper";
  
  export type SpawnSearchTarget =
    | {
        kind: "item";
        itemId: EscapeItemId;
      }
    | {
        kind: "spawn";
        spawnKind: SpawnKind;
      };
  
  export type SpawnSearchMode =
    | "fixed-candidate-pool"
    | "map-candidate-search"
    | "general-loot-search"
    | "rare-loot-search"
    | "unverified-loot-search";
  
  export interface SpawnAreaRecommendation {
    regionId: MapRegionId;
    label: string;
    shortLabel: string;
  
    areaIds: string[];
  
    status:
      | "confirmed-active"
      | "unchecked"
      | "checked-empty";
  
    confidence: DataConfidence;
  
    isCurrentRegion: boolean;
  }
  
  export interface SpawnRecommendation {
    target: SpawnSearchTarget;
  
    targetKey: string;
    targetLabel: string;
  
    mapId: HalloweenMapId;
    mapName: string;
  
    mode: SpawnSearchMode;
  
    summary: string;
    nextAction: string;
  
    nextAreas: SpawnAreaRecommendation[];
    checkedAreas: SpawnAreaRecommendation[];
  
    searchTargets: string[];
    avoidTargets: string[];
  
    candidateAreaCount: number;
  
    confidence: DataConfidence;
  
    warnings: string[];
  }
  
  const confidenceWeight: Record<DataConfidence, number> = {
    confirmed: 4,
    high: 3,
    reported: 2,
    unverified: 1,
  };
  
  const fixedItemSpawnKinds: Partial<
    Record<EscapeItemId, SpawnKind>
  > = {
    gas: "gas",
  };
  
  function unique<T>(values: T[]): T[] {
    return [...new Set(values)];
  }
  
  function getTargetKey(target: SpawnSearchTarget): string {
    if (target.kind === "item") {
      return `item:${target.itemId}`;
    }
  
    return `spawn:${target.spawnKind}`;
  }
  
  function getSpawnKindLabel(kind: SpawnKind): string {
    switch (kind) {
      case "sedan":
        return "Sedan";
      case "storm-cellar":
        return "Storm Cellar";
      case "escape-gate":
        return "Escape Gate";
      case "gas":
        return "Gas";
    }
  }
  
  function getTargetLabel(target: SpawnSearchTarget): string {
    if (target.kind === "item") {
      return escapeItems[target.itemId]?.name ?? target.itemId;
    }
  
    return getSpawnKindLabel(target.spawnKind);
  }
  
  function getRegionDefinition(
    mapId: HalloweenMapId,
    regionId: MapRegionId,
  ) {
    return mapRegions[mapId]?.find(
      (region) => region.id === regionId,
    );
  }
  
  function getAreaCheckStatus(
    input: EscapeHelperInput,
    areaId: string,
  ) {
    return input.checkedSpawnAreas.find(
      (state) => state.areaId === areaId,
    )?.status;
  }
  
  function getGroupConfidence(
    confidences: DataConfidence[],
  ): DataConfidence {
    if (!confidences.length) {
      return "unverified";
    }
  
    return confidences.reduce((best, current) => {
      return confidenceWeight[current] >
        confidenceWeight[best]
        ? current
        : best;
    });
  }
  
  function getMapCandidateRecommendation(
    input: EscapeHelperInput,
    target: SpawnSearchTarget,
    spawnKind: SpawnKind,
    confidence: DataConfidence,
  ): SpawnRecommendation {
    const map = halloweenMaps[input.mapId];
  
    const candidateAreas = (
      spawnAreasByMap[input.mapId] ?? []
    ).filter((area) => area.kind === spawnKind);
  
    const grouped = new Map<
      MapRegionId,
      {
        areaIds: string[];
        confidences: DataConfidence[];
      }
    >();
  
    for (const area of candidateAreas) {
      const existing = grouped.get(area.regionId);
  
      if (existing) {
        existing.areaIds.push(area.id);
        existing.confidences.push(area.confidence);
        continue;
      }
  
      grouped.set(area.regionId, {
        areaIds: [area.id],
        confidences: [area.confidence],
      });
    }
  
    const groups: SpawnAreaRecommendation[] = [
      ...grouped.entries(),
    ].map(([regionId, group]) => {
      const region = getRegionDefinition(
        input.mapId,
        regionId,
      );
  
      const statuses = group.areaIds.map((areaId) =>
        getAreaCheckStatus(input, areaId),
      );
  
      const hasConfirmedActive = statuses.some(
        (status) => status === "confirmed-active",
      );
  
      const allCheckedEmpty =
        statuses.length > 0 &&
        statuses.every(
          (status) => status === "checked-empty",
        );
  
      return {
        regionId,
        label: region?.label ?? regionId,
        shortLabel:
          region?.shortLabel ?? region?.label ?? regionId,
  
        areaIds: group.areaIds,
  
        status: hasConfirmedActive
          ? "confirmed-active"
          : allCheckedEmpty
            ? "checked-empty"
            : "unchecked",
  
        confidence: getGroupConfidence(
          group.confidences,
        ),
  
        isCurrentRegion:
          input.currentRegionId === regionId,
      };
    });
  
    groups.sort((a, b) => {
      const statusRank = (
        item: SpawnAreaRecommendation,
      ) => {
        if (item.status === "confirmed-active") {
          return 0;
        }
  
        if (item.isCurrentRegion) {
          return 1;
        }
  
        if (item.status === "unchecked") {
          return 2;
        }
  
        return 3;
      };
  
      const rankDifference =
        statusRank(a) - statusRank(b);
  
      if (rankDifference !== 0) {
        return rankDifference;
      }
  
      return (
        confidenceWeight[b.confidence] -
        confidenceWeight[a.confidence]
      );
    });
  
    const nextAreas = groups.filter(
      (group) => group.status !== "checked-empty",
    );
  
    const checkedAreas = groups.filter(
      (group) => group.status === "checked-empty",
    );
  
    const warnings: string[] = [];
  
    const coverage =
      spawnKind === "gas"
        ? map.coverage.gasSpawns
        : map.coverage.escapeSpawns;
  
    if (coverage === "partial") {
      warnings.push(
        "The current location pool is community-observed and still partial. Treat these as known candidates, not a guaranteed complete spawn list.",
      );
    }
  
    if (confidence === "reported") {
      warnings.push(
        "This recommendation uses reported community spawn behavior rather than an official complete spawn table.",
      );
    }
  
    if (!candidateAreas.length) {
      return {
        target,
        targetKey: getTargetKey(target),
        targetLabel: getTargetLabel(target),
  
        mapId: input.mapId,
        mapName: map.name,
  
        mode:
          spawnKind === "gas"
            ? "fixed-candidate-pool"
            : "map-candidate-search",
  
        summary: `There are not enough structured ${getTargetLabel(
          target,
        )} candidate areas for ${map.name} yet.`,
  
        nextAction:
          "Continue normal route scouting and update the helper when you confirm a location.",
  
        nextAreas: [],
        checkedAreas: [],
  
        searchTargets: [],
        avoidTargets: [],
  
        candidateAreaCount: 0,
  
        confidence: "unverified",
  
        warnings,
      };
    }
  
    if (!nextAreas.length) {
      warnings.push(
        "You have checked every currently known candidate area for this target.",
      );
  
      return {
        target,
        targetKey: getTargetKey(target),
        targetLabel: getTargetLabel(target),
  
        mapId: input.mapId,
        mapName: map.name,
  
        mode:
          spawnKind === "gas"
            ? "fixed-candidate-pool"
            : "map-candidate-search",
  
        summary: `All currently known ${getTargetLabel(
          target,
        )} candidate areas on ${map.name} are marked checked.`,
  
        nextAction:
          "Do not loop through the same known areas again unless the match state changed. Consider switching to another escape route or broadening the search because the current candidate pool may still be incomplete.",
  
        nextAreas: [],
        checkedAreas,
  
        searchTargets: [],
        avoidTargets: [],
  
        candidateAreaCount: candidateAreas.length,
  
        confidence,
  
        warnings,
      };
    }
  
    const first = nextAreas[0];
  
    const nextAction =
      first.status === "confirmed-active"
        ? `Go to ${first.label}. You already marked a matching ${getTargetLabel(
            target,
          )} spawn as active there.`
        : `Check ${first.label} next for ${getTargetLabel(
            target,
          )}.`;
  
    return {
      target,
      targetKey: getTargetKey(target),
      targetLabel: getTargetLabel(target),
  
      mapId: input.mapId,
      mapName: map.name,
  
      mode:
        spawnKind === "gas"
          ? "fixed-candidate-pool"
          : "map-candidate-search",
  
      summary: `${getTargetLabel(
        target,
      )} uses known candidate areas on ${map.name}. Checked-empty areas are removed from the next-search list.`,
  
      nextAction,
  
      nextAreas,
      checkedAreas,
  
      searchTargets: [],
      avoidTargets: [],
  
      candidateAreaCount: candidateAreas.length,
  
      confidence,
  
      warnings,
    };
  }
  
  function getLootRecommendation(
    input: EscapeHelperInput,
    itemId: EscapeItemId,
  ): SpawnRecommendation {
    const item = escapeItems[itemId];
    const map = halloweenMaps[input.mapId];
  
    const rule = item.spawnRuleId
      ? spawnRules[item.spawnRuleId]
      : undefined;
  
    if (!rule) {
      return {
        target: {
          kind: "item",
          itemId,
        },
  
        targetKey: `item:${itemId}`,
        targetLabel: item.name,
  
        mapId: input.mapId,
        mapName: map.name,
  
        mode: "unverified-loot-search",
  
        summary: `There is not enough verified spawn data yet to give ${item.name} a map-specific search route.`,
  
        nextAction:
          "Search normal loot while progressing toward a known escape instead of crossing the entire map only for this item.",
  
        nextAreas: [],
        checkedAreas: [],
  
        searchTargets: [],
        avoidTargets: [],
  
        candidateAreaCount: 0,
  
        confidence: "unverified",
  
        warnings: [
          "No reliable map-specific location pattern is currently stored for this item.",
        ],
      };
    }
  
    const warnings: string[] = [];
  
    if (
      rule.confidence === "reported" ||
      rule.confidence === "unverified"
    ) {
      warnings.push(
        "This search pattern is based on observed player behavior and can be expanded as more spawn data is verified.",
      );
    }
  
    let mode: SpawnSearchMode;
  
    switch (rule.model) {
      case "rare-random-loot":
        mode = "rare-loot-search";
        break;
  
      case "random-loot":
        mode = "general-loot-search";
        break;
  
      default:
        mode = "unverified-loot-search";
        break;
    }
  
    const searchTargets =
      rule.preferredSearchTargets ?? [];
  
    const avoidTargets =
      rule.poorSearchTargets ?? [];
  
    let nextAction: string;
  
    if (searchTargets.length) {
      nextAction = `Search ${searchTargets
        .slice(0, 3)
        .join(
          ", ",
        )} first while continuing toward a useful escape route.`;
    } else {
      nextAction =
        "Keep searching normal loot while moving toward a useful escape route; there is not enough verified evidence to justify a dedicated cross-map search.";
    }
  
    return {
      target: {
        kind: "item",
        itemId,
      },
  
      targetKey: `item:${itemId}`,
      targetLabel: item.name,
  
      mapId: input.mapId,
      mapName: map.name,
  
      mode,
  
      summary: rule.summary,
  
      nextAction,
  
      nextAreas: [],
      checkedAreas: [],
  
      searchTargets,
      avoidTargets,
  
      candidateAreaCount: 0,
  
      confidence: rule.confidence,
  
      warnings,
    };
  }
  
  export function recommendSpawnSearch(
    input: EscapeHelperInput,
    target: SpawnSearchTarget,
  ): SpawnRecommendation {
    if (target.kind === "spawn") {
      return getMapCandidateRecommendation(
        input,
        target,
        target.spawnKind,
        "reported",
      );
    }
  
    const item = escapeItems[target.itemId];
  
    const fixedSpawnKind =
      fixedItemSpawnKinds[target.itemId];
  
    if (fixedSpawnKind) {
      const rule = item.spawnRuleId
        ? spawnRules[item.spawnRuleId]
        : undefined;
  
      return getMapCandidateRecommendation(
        input,
        target,
        fixedSpawnKind,
        rule?.confidence ?? item.confidence,
      );
    }
  
    return getLootRecommendation(
      input,
      target.itemId,
    );
  }
  
  export function recommendItemSearch(
    input: EscapeHelperInput,
    itemId: EscapeItemId,
  ): SpawnRecommendation {
    return recommendSpawnSearch(input, {
      kind: "item",
      itemId,
    });
  }
  
  export function recommendSpawnKindSearch(
    input: EscapeHelperInput,
    spawnKind: SpawnKind,
  ): SpawnRecommendation {
    return recommendSpawnSearch(input, {
      kind: "spawn",
      spawnKind,
    });
  }
  
  export function getKnownSpawnRegions(
    input: EscapeHelperInput,
    spawnKind: SpawnKind,
  ): MapRegionId[] {
    return unique(
      (spawnAreasByMap[input.mapId] ?? [])
        .filter((area) => area.kind === spawnKind)
        .map((area) => area.regionId),
    );
  }