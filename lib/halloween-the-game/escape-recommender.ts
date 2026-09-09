import {
    barrierDefinitions,
    escapeAchievements,
    escapeItems,
    escapeRoutes,
    type BarrierId,
    type EscapeAchievementId,
    type EscapeHelperInput,
    type EscapeItemId,
    type EscapeRouteDefinition,
    type EscapeRouteId,
    type MatchFlagId,
    type PlayerRouteState,
    type Requirement,
  } from "@/data/halloween-the-game/escape-helper";
  
  export type RouteReadiness =
    | "ready"
    | "one-step-away"
    | "in-progress"
    | "needs-inspection"
    | "blocked"
    | "unavailable";
  
  export interface RequirementGap {
    source:
      | "route"
      | "barrier"
      | "achievement";
  
    label: string;
  
    itemIds: EscapeItemId[];
    flagIds: MatchFlagId[];
  
    barrierId?: BarrierId;
  }
  
  export interface PendingBarrierAction {
    barrierId: BarrierId;
    barrierName: string;
  
    requirementLabel: string;
  }
  
  export interface EscapeRouteAnalysis {
    routeId: EscapeRouteId;
    routeName: string;
  
    state: PlayerRouteState;
  
    readiness: RouteReadiness;
  
    score: number;
  
    missingRequirements: RequirementGap[];
  
    routeMissingRequirements: RequirementGap[];
  
    achievementMissingRequirements: RequirementGap[];
  
    pendingBarrierActions: PendingBarrierAction[];
  
    unknownBarrierIds: BarrierId[];
  
    achievementPending: string[];
  
    goalSatisfied: boolean;
  
    nextAction: string;
    reason: string;
  
    warnings: string[];
  }
  
  export interface EscapeRecommendationResult {
    bestRoute?: EscapeRouteAnalysis;
  
    fallbackRoute?: EscapeRouteAnalysis;
  
    rankedRoutes: EscapeRouteAnalysis[];
  
    achievementId?: EscapeAchievementId;
  
    warnings: string[];
  }
  
  interface RequirementCheck {
    satisfied: boolean;
    gaps: RequirementGap[];
  }
  
  function unique<T>(values: T[]): T[] {
    return [...new Set(values)];
  }
  
  function getItemState(
    input: EscapeHelperInput,
    itemId: EscapeItemId,
  ) {
    return input.teamItems.find(
      (item) => item.itemId === itemId,
    );
  }
  
  export function isTeamItemAvailable(
    input: EscapeHelperInput,
    itemId: EscapeItemId,
  ): boolean {
    const state = getItemState(input, itemId);
  
    if (!state) {
      return false;
    }
  
    return (
      state.status === "found" ||
      state.status === "carried" ||
      state.status === "staged-at-exit"
    );
  }
  
  function getMatchFlag(
    input: EscapeHelperInput,
    flagId: MatchFlagId,
  ): boolean {
    switch (flagId) {
      case "police-wagon-available":
        return input.policeWagonAvailable === true;
    }
  }
  
  function requirementToLabel(
    requirement: Requirement,
  ): string {
    switch (requirement.kind) {
      case "item":
        return (
          escapeItems[requirement.itemId]?.name ??
          requirement.itemId
        );
  
      case "matchFlag":
        if (
          requirement.flagId ===
          "police-wagon-available"
        ) {
          return "Police Wagon available";
        }
  
        return requirement.flagId;
  
      case "anyOf":
        return requirement.options
          .map(requirementToLabel)
          .join(" or ");
  
      case "allOf":
        return requirement.requirements
          .map(requirementToLabel)
          .join(" + ");
    }
  }
  
  function collectItemIds(
    requirement: Requirement,
  ): EscapeItemId[] {
    switch (requirement.kind) {
      case "item":
        return [requirement.itemId];
  
      case "matchFlag":
        return [];
  
      case "anyOf":
        return unique(
          requirement.options.flatMap(
            collectItemIds,
          ),
        );
  
      case "allOf":
        return unique(
          requirement.requirements.flatMap(
            collectItemIds,
          ),
        );
    }
  }
  
  function collectFlagIds(
    requirement: Requirement,
  ): MatchFlagId[] {
    switch (requirement.kind) {
      case "item":
        return [];
  
      case "matchFlag":
        return [requirement.flagId];
  
      case "anyOf":
        return unique(
          requirement.options.flatMap(
            collectFlagIds,
          ),
        );
  
      case "allOf":
        return unique(
          requirement.requirements.flatMap(
            collectFlagIds,
          ),
        );
    }
  }
  
  function checkRequirement(
    input: EscapeHelperInput,
    requirement: Requirement,
    source: RequirementGap["source"],
    barrierId?: BarrierId,
  ): RequirementCheck {
    switch (requirement.kind) {
      case "item": {
        const satisfied = isTeamItemAvailable(
          input,
          requirement.itemId,
        );
  
        return {
          satisfied,
  
          gaps: satisfied
            ? []
            : [
                {
                  source,
                  label:
                    escapeItems[requirement.itemId]
                      ?.name ??
                    requirement.itemId,
  
                  itemIds: [requirement.itemId],
                  flagIds: [],
  
                  barrierId,
                },
              ],
        };
      }
  
      case "matchFlag": {
        const currentValue = getMatchFlag(
          input,
          requirement.flagId,
        );
  
        const satisfied =
          currentValue === requirement.equals;
  
        return {
          satisfied,
  
          gaps: satisfied
            ? []
            : [
                {
                  source,
                  label:
                    requirementToLabel(
                      requirement,
                    ),
  
                  itemIds: [],
                  flagIds: [
                    requirement.flagId,
                  ],
  
                  barrierId,
                },
              ],
        };
      }
  
      case "anyOf": {
        const optionChecks =
          requirement.options.map((option) =>
            checkRequirement(
              input,
              option,
              source,
              barrierId,
            ),
          );
  
        if (
          optionChecks.some(
            (check) => check.satisfied,
          )
        ) {
          return {
            satisfied: true,
            gaps: [],
          };
        }
  
        return {
          satisfied: false,
  
          gaps: [
            {
              source,
              label:
                requirementToLabel(requirement),
  
              itemIds:
                collectItemIds(requirement),
  
              flagIds:
                collectFlagIds(requirement),
  
              barrierId,
            },
          ],
        };
      }
  
      case "allOf": {
        const checks =
          requirement.requirements.map(
            (child) =>
              checkRequirement(
                input,
                child,
                source,
                barrierId,
              ),
          );
  
        return {
          satisfied: checks.every(
            (check) => check.satisfied,
          ),
  
          gaps: checks.flatMap(
            (check) => check.gaps,
          ),
        };
      }
    }
  }
  
  function getRouteState(
    input: EscapeHelperInput,
    routeId: EscapeRouteId,
  ): PlayerRouteState {
    return (
      input.routes.find(
        (route) => route.routeId === routeId,
      ) ?? {
        routeId,
        discovery: "unknown",
        progress: "unknown",
        barriers: [],
      }
    );
  }
  
  function dedupeGaps(
    gaps: RequirementGap[],
  ): RequirementGap[] {
    const seen = new Set<string>();
  
    return gaps.filter((gap) => {
      const key = [
        gap.source,
        gap.barrierId ?? "",
        gap.label,
      ].join(":");
  
      if (seen.has(key)) {
        return false;
      }
  
      seen.add(key);
      return true;
    });
  }
  
  function getFixedRequirementGaps(
    input: EscapeHelperInput,
    route: EscapeRouteDefinition,
  ): RequirementGap[] {
    return route.fixedRequirements.flatMap(
      (requirement) =>
        checkRequirement(
          input,
          requirement,
          "route",
        ).gaps,
    );
  }
  
  function getBarrierAnalysis(
    input: EscapeHelperInput,
    state: PlayerRouteState,
  ) {
    const missing: RequirementGap[] = [];
    const pending: PendingBarrierAction[] = [];
    const unknown: BarrierId[] = [];
  
    for (const barrierState of state.barriers) {
      if (barrierState.status === "cleared") {
        continue;
      }
  
      if (barrierState.status === "unknown") {
        unknown.push(barrierState.barrierId);
        continue;
      }
  
      const definition =
        barrierDefinitions[
          barrierState.barrierId
        ];
  
      if (!definition) {
        continue;
      }
  
      const check = checkRequirement(
        input,
        definition.requirement,
        "barrier",
        barrierState.barrierId,
      );
  
      if (check.satisfied) {
        pending.push({
          barrierId: barrierState.barrierId,
          barrierName: definition.name,
  
          requirementLabel:
            requirementToLabel(
              definition.requirement,
            ),
        });
      } else {
        missing.push(...check.gaps);
      }
    }
  
    return {
      missing: dedupeGaps(missing),
      pending,
      unknown: unique(unknown),
    };
  }
  
  function getAchievementAnalysis(
    input: EscapeHelperInput,
    routeId: EscapeRouteId,
  ) {
    const missing: RequirementGap[] = [];
    const pending: string[] = [];
  
    if (
      input.goal !== "achievement" ||
      !input.achievementId
    ) {
      return {
        missing,
        pending,
        preferredRoute: undefined,
      };
    }
  
    const achievement =
      escapeAchievements[input.achievementId];
  
    if (!achievement) {
      return {
        missing,
        pending,
        preferredRoute: undefined,
      };
    }
  
    if (achievement.preferredRoute !== routeId) {
      return {
        missing,
        pending,
        preferredRoute:
          achievement.preferredRoute,
      };
    }
  
    if (
      input.achievementId ===
        "risky-escape" &&
      !input.playerDrunk
    ) {
      const beerAvailable =
        isTeamItemAvailable(input, "beer");
  
      if (!beerAvailable) {
        missing.push({
          source: "achievement",
          label: "Beer",
          itemIds: ["beer"],
          flagIds: [],
        });
      } else {
        pending.push(
          "Get drunk only after the Sedan is prepared, then leave while driving it yourself.",
        );
      }
    }
  
    if (
      achievement.requiresDriving &&
      input.playerDrunk
    ) {
      pending.push(
        "Drive the Sedan out yourself; riding as a passenger does not satisfy the selected goal.",
      );
    }
  
    if (
      achievement.requiresFullResidentCapacity
    ) {
      if (
        !input.residentsReady ||
        input.residentsReady <= 0
      ) {
        pending.push(
          "Bring Residents to the Sedan before leaving. The achievement requires a full car.",
        );
      } else {
        pending.push(
          "Confirm every Resident passenger seat is filled before driving out.",
        );
      }
    }
  
    return {
      missing,
      pending,
      preferredRoute:
        achievement.preferredRoute,
    };
  }
  
  function getReadiness(
    route: EscapeRouteDefinition,
    state: PlayerRouteState,
    routeMissing: RequirementGap[],
    pendingBarriers: PendingBarrierAction[],
    unknownBarrierIds: BarrierId[],
  ): RouteReadiness {
    if (state.progress === "used") {
      return "unavailable";
    }
  
    if (state.progress === "blocked") {
      return "blocked";
    }
  
    if (state.progress === "ready") {
      return "ready";
    }
  
    if (state.discovery === "unknown") {
      return "unavailable";
    }
  
    if (
      route.barrierDriven &&
      state.barriers.length === 0
    ) {
      return "needs-inspection";
    }
  
    if (
      route.barrierDriven &&
      unknownBarrierIds.length > 0 &&
      !routeMissing.length &&
      !pendingBarriers.length
    ) {
      return "needs-inspection";
    }
  
    if (routeMissing.length === 1) {
      return "one-step-away";
    }
  
    if (routeMissing.length > 1) {
      return "in-progress";
    }
  
    if (pendingBarriers.length > 0) {
      return "one-step-away";
    }
  
    if (
      !routeMissing.length &&
      state.discovery === "found"
    ) {
      return "one-step-away";
    }
  
    return "in-progress";
  }
  
  function scoreRoute(
    input: EscapeHelperInput,
    route: EscapeRouteDefinition,
    state: PlayerRouteState,
    readiness: RouteReadiness,
    routeMissing: RequirementGap[],
    achievementMissing: RequirementGap[],
    pendingBarrierActions: PendingBarrierAction[],
    unknownBarrierIds: BarrierId[],
  ): number {
    if (state.progress === "used") {
      return -10000;
    }
  
    let score = 0;
  
    if (state.discovery === "found") {
      score += 30;
    } else {
      score -= 20;
    }
  
    switch (state.progress) {
      case "ready":
        score += 100;
        break;
  
      case "in-progress":
        score += 35;
        break;
  
      case "not-started":
        score += 10;
        break;
  
      case "blocked":
        score -= 100;
        break;
  
      case "unknown":
        break;
    }
  
    switch (readiness) {
      case "ready":
        score += 35;
        break;
  
      case "one-step-away":
        score += 18;
        break;
  
      case "needs-inspection":
        score -= 5;
        break;
  
      case "blocked":
        score -= 30;
        break;
  
      case "unavailable":
        score -= 10;
        break;
  
      case "in-progress":
        break;
    }
  
    score -= routeMissing.length * 22;
    score -= achievementMissing.length * 25;
  
    score += pendingBarrierActions.length * 6;
    score -= unknownBarrierIds.length * 6;
  
    if (input.goal === "escape-fast") {
      if (readiness === "ready") {
        score += 30;
      }
  
      if (readiness === "one-step-away") {
        score += 15;
      }
    }
  
    if (input.goal === "safest-route") {
      /*
       * We do not claim one route is intrinsically safer without
       * verified route-level danger data.
       *
       * "Safest" therefore means: lowest remaining uncertainty
       * and least unfinished work.
       */
      if (readiness === "ready") {
        score += 25;
      }
  
      if (
        readiness === "needs-inspection" ||
        state.discovery === "unknown"
      ) {
        score -= 15;
      }
    }
  
    if (
      input.goal === "save-residents" &&
      route.supportsResidents
    ) {
      score += 12;
    }
  
    if (
      input.goal === "achievement" &&
      input.achievementId
    ) {
      const achievement =
        escapeAchievements[input.achievementId];
  
      if (
        achievement?.preferredRoute ===
        route.id
      ) {
        score += 200;
      } else {
        score -= 140;
      }
    }
  
    return score;
  }
  
  function formatGapList(
    gaps: RequirementGap[],
  ): string {
    return gaps
      .map((gap) => gap.label)
      .join(", ");
  }
  
  function getNextAction(
    route: EscapeRouteDefinition,
    state: PlayerRouteState,
    readiness: RouteReadiness,
    routeMissing: RequirementGap[],
    achievementMissing: RequirementGap[],
    pendingBarriers: PendingBarrierAction[],
    achievementPending: string[],
  ): string {
    if (state.progress === "used") {
      return `${route.name} has already been used. Switch to another route.`;
    }
  
    if (state.progress === "blocked") {
      return `${route.name} is currently blocked. Switch priority unless the match state changes.`;
    }
  
    if (state.discovery === "unknown") {
      return `Find the ${route.name} first before committing more resources to it.`;
    }
  
    if (routeMissing.length > 0) {
      return `Find ${formatGapList(
        routeMissing,
      )} for the ${route.name}.`;
    }
  
    if (pendingBarriers.length > 0) {
      const first = pendingBarriers[0];
  
      return `Use ${first.requirementLabel} to clear the ${first.barrierName} at the ${route.name}.`;
    }
  
    if (readiness === "needs-inspection") {
      return `Inspect the ${route.name} and mark the barriers you actually see before searching for another item.`;
    }
  
    if (
      state.progress !== "ready" &&
      route.fixedRequirements.length > 0
    ) {
      const labels = route.fixedRequirements
        .map(requirementToLabel)
        .join(", ");
  
      return `Take ${labels} to the ${route.name} and finish preparing the route.`;
    }
  
    if (
      state.progress !== "ready" &&
      route.barrierDriven
    ) {
      return `Finish opening the ${route.name} and confirm that the route is ready.`;
    }
  
    if (
      state.progress === "ready" &&
      achievementMissing.length > 0
    ) {
      return `The ${route.name} is ready, but the selected achievement still needs ${formatGapList(
        achievementMissing,
      )}.`;
    }
  
    if (
      state.progress === "ready" &&
      achievementPending.length > 0
    ) {
      return achievementPending[0];
    }
  
    if (state.progress === "ready") {
      return `Commit to the ${route.name} now. Stop searching for unrelated escape items.`;
    }
  
    return `Continue preparing the ${route.name}.`;
  }
  
  function getReason(
    route: EscapeRouteDefinition,
    state: PlayerRouteState,
    readiness: RouteReadiness,
    routeMissing: RequirementGap[],
    pendingBarrierActions: PendingBarrierAction[],
  ): string {
    if (readiness === "ready") {
      return `${route.name} is already marked ready.`;
    }
  
    if (state.discovery === "unknown") {
      return `${route.name} has not been confirmed in this match yet.`;
    }
  
    if (routeMissing.length === 1) {
      return `${route.name} is only missing ${routeMissing[0].label}.`;
    }
  
    if (routeMissing.length > 1) {
      return `${route.name} still needs ${formatGapList(
        routeMissing,
      )}.`;
    }
  
    if (pendingBarrierActions.length > 0) {
      return `${route.name} has a known barrier that your team already has the tool to clear.`;
    }
  
    if (readiness === "needs-inspection") {
      return `${route.name} is found, but its remaining barrier state is still uncertain.`;
    }
  
    return `${route.name} is currently one of the more developed escape options in this match.`;
  }
  
  function analyseRoute(
    input: EscapeHelperInput,
    route: EscapeRouteDefinition,
  ): EscapeRouteAnalysis {
    const state = getRouteState(
      input,
      route.id,
    );
  
    /*
     * Once a route is explicitly marked READY, its normal escape
     * requirements are already completed.
     *
     * This matters because items such as Gas, Repair Kit, Keys,
     * Fuses, or barrier tools may already have been consumed or used.
     *
     * A ready route should therefore never ask the player to find
     * those route requirements again.
     *
     * Achievement-specific conditions are still checked separately.
     */
    const routeAlreadyReady =
      state.progress === "ready";
  
    const fixedMissing =
      routeAlreadyReady
        ? []
        : getFixedRequirementGaps(
            input,
            route,
          );
  
    const barrierAnalysis =
      routeAlreadyReady
        ? {
            missing: [],
            pending: [],
            unknown: [],
          }
        : getBarrierAnalysis(
            input,
            state,
          );
  
    const routeMissing =
      dedupeGaps([
        ...fixedMissing,
        ...barrierAnalysis.missing,
      ]);
  
    /*
     * Achievement conditions are intentionally evaluated even when
     * the escape route itself is ready.
     *
     * Examples:
     *
     * Risky Escape:
     *   Sedan ready
     *   → still needs Beer / drunk state / player driving
     *
     * I found the Car!:
     *   Sedan ready
     *   → still needs the Resident passenger condition
     */
    const achievementAnalysis =
      getAchievementAnalysis(
        input,
        route.id,
      );
  
    const achievementMissing =
      dedupeGaps(
        achievementAnalysis.missing,
      );
  
    const allMissing = dedupeGaps([
      ...routeMissing,
      ...achievementMissing,
    ]);
  
    const readiness = getReadiness(
      route,
      state,
      routeMissing,
      barrierAnalysis.pending,
      barrierAnalysis.unknown,
    );
  
    const score = scoreRoute(
      input,
      route,
      state,
      readiness,
      routeMissing,
      achievementMissing,
      barrierAnalysis.pending,
      barrierAnalysis.unknown,
    );
  
    const warnings: string[] = [];
  
    if (
      route.confidence === "reported"
    ) {
      warnings.push(
        `${route.name} route requirements still include community-observed variants, so the barrier state you see in the match should override assumptions.`,
      );
    }
  
    if (
      route.barrierDriven &&
      state.discovery === "found" &&
      state.progress !== "ready" &&
      state.barriers.length === 0
    ) {
      warnings.push(
        `${route.name} is barrier-driven. Inspect it before the helper recommends a specific access item.`,
      );
    }
  
    const selectedAchievement =
      input.goal === "achievement" &&
      input.achievementId
        ? escapeAchievements[
            input.achievementId
          ]
        : undefined;
  
    const goalSatisfied =
      !selectedAchievement ||
      (
        selectedAchievement.preferredRoute ===
          route.id &&
        state.progress === "ready" &&
        achievementMissing.length === 0 &&
        achievementAnalysis.pending.length ===
          0
      );
  
    return {
      routeId: route.id,
      routeName: route.name,
  
      state,
  
      readiness,
  
      score,
  
      missingRequirements: allMissing,
  
      routeMissingRequirements:
        routeMissing,
  
      achievementMissingRequirements:
        achievementMissing,
  
      pendingBarrierActions:
        barrierAnalysis.pending,
  
      unknownBarrierIds:
        barrierAnalysis.unknown,
  
      achievementPending:
        achievementAnalysis.pending,
  
      goalSatisfied,
  
      nextAction: getNextAction(
        route,
        state,
        readiness,
        routeMissing,
        achievementMissing,
        barrierAnalysis.pending,
        achievementAnalysis.pending,
      ),
  
      reason: getReason(
        route,
        state,
        readiness,
        routeMissing,
        barrierAnalysis.pending,
      ),
  
      warnings,
    };
  }
  
  export function recommendEscapeRoutes(
    input: EscapeHelperInput,
  ): EscapeRecommendationResult {
    const rankedRoutes = Object.values(
      escapeRoutes,
    )
      .map((route) =>
        analyseRoute(input, route),
      )
      .sort((a, b) => b.score - a.score);
  
    const usable = rankedRoutes.filter(
      (route) =>
        route.state.progress !== "used",
    );
  
    const bestRoute = usable[0];
  
    const fallbackRoute = usable.find(
      (route) =>
        route.routeId !==
          bestRoute?.routeId &&
        route.state.progress !== "blocked",
    );
  
    const warnings: string[] = [];
  
    if (
      input.goal === "achievement" &&
      input.achievementId &&
      bestRoute
    ) {
      const achievement =
        escapeAchievements[input.achievementId];
  
      if (
        achievement &&
        achievement.preferredRoute !==
          bestRoute.routeId
      ) {
        warnings.push(
          `${achievement.name} cannot be completed through ${bestRoute.routeName}. The required ${escapeRoutes[achievement.preferredRoute].name} route is not currently the best usable option.`,
        );
      }
    }
  
    if (
      bestRoute?.readiness ===
      "needs-inspection"
    ) {
      warnings.push(
        `Inspect ${bestRoute.routeName} before starting a long item search. Its exact barrier variant is not fully known yet.`,
      );
    }
  
    return {
      bestRoute,
      fallbackRoute,
      rankedRoutes,
  
      achievementId:
        input.achievementId,
  
      warnings: unique([
        ...warnings,
        ...(bestRoute?.warnings ?? []),
      ]),
    };
  }
  
  export function getRouteAnalysis(
    input: EscapeHelperInput,
    routeId: EscapeRouteId,
  ): EscapeRouteAnalysis {
    return analyseRoute(
      input,
      escapeRoutes[routeId],
    );
  }