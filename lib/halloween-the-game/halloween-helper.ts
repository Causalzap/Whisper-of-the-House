import {
    escapeAchievements,
    escapeItems,
    type EscapeHelperInput,
    type EscapeItemId,
    type EscapeRouteId,
    type SpawnKind,
  } from "@/data/halloween-the-game/escape-helper";
  
  import {
    recommendEscapeRoutes,
    type EscapeRecommendationResult,
    type EscapeRouteAnalysis,
    type RequirementGap,
  } from "./escape-recommender";
  
  import {
    recommendItemSearch,
    recommendSpawnKindSearch,
    type SpawnRecommendation,
  } from "./spawn-recommender";
  
  export interface HalloweenHelperResult {
    escape: EscapeRecommendationResult;
  
    bestRoute?: EscapeRouteAnalysis;
  
    fallbackRoute?: EscapeRouteAnalysis;
  
    searchPlans: SpawnRecommendation[];
  
    summary: string;
  
    nextAction: string;
  
    stopSearching: boolean;
  
    warnings: string[];
  }
  
  const routeSpawnKinds: Partial<
    Record<EscapeRouteId, SpawnKind>
  > = {
    sedan: "sedan",
    "storm-cellar": "storm-cellar",
    "escape-gate": "escape-gate",
  };
  
  function unique<T>(values: T[]): T[] {
    return [...new Set(values)];
  }
  
  function getGapItemIds(
    gaps: RequirementGap[],
  ): EscapeItemId[] {
    return unique(
      gaps.flatMap((gap) => gap.itemIds),
    );
  }
  
  function buildSearchPlans(
    input: EscapeHelperInput,
    bestRoute?: EscapeRouteAnalysis,
  ): SpawnRecommendation[] {
    if (!bestRoute) {
      return [];
    }
  
    const plans: SpawnRecommendation[] = [];
  
    /*
     * If the route itself has not been found,
     * finding that route comes before spending the
     * whole match on its inventory requirements.
     */
    if (
      bestRoute.state.discovery ===
      "unknown"
    ) {
      const spawnKind =
        routeSpawnKinds[bestRoute.routeId];
  
      if (spawnKind) {
        plans.push(
          recommendSpawnKindSearch(
            input,
            spawnKind,
          ),
        );
      }
    }
  
    const missingItemIds =
      getGapItemIds(
        bestRoute.missingRequirements,
      );
  
    for (const itemId of missingItemIds) {
      const plan = recommendItemSearch(
        input,
        itemId,
      );
  
      /*
       * Avoid duplicate search plans when the
       * same target arrived through multiple gaps.
       */
      if (
        !plans.some(
          (existing) =>
            existing.targetKey ===
            plan.targetKey,
        )
      ) {
        plans.push(plan);
      }
    }
  
    /*
     * Keep the result readable.
     *
     * In practice, if the route needs four separate
     * things it is usually no longer the kind of
     * route the player should dedicate the whole
     * match to anyway.
     */
    return plans.slice(0, 4);
  }
  
  function buildSummary(
    input: EscapeHelperInput,
    bestRoute?: EscapeRouteAnalysis,
    searchPlans: SpawnRecommendation[] = [],
  ): string {
    if (!bestRoute) {
      return "No usable escape route can be recommended from the current match state.";
    }
  
    if (
      bestRoute.readiness === "ready" &&
      bestRoute.goalSatisfied
    ) {
      return `${bestRoute.routeName} is ready and satisfies the current goal. Stop searching and commit to the escape.`;
    }
  
    if (
      input.goal === "achievement" &&
      input.achievementId
    ) {
      const achievement =
        escapeAchievements[
          input.achievementId
        ];
  
      if (
        achievement?.preferredRoute ===
        bestRoute.routeId
      ) {
        if (
          bestRoute.readiness === "ready"
        ) {
          return `${bestRoute.routeName} is ready, but ${achievement.name} still has an extra condition to finish before you leave.`;
        }
  
        return `${bestRoute.routeName} remains the priority because it is required for ${achievement.name}.`;
      }
    }
  
    if (
      bestRoute.state.discovery ===
      "unknown"
    ) {
      const routePlan =
        searchPlans.find(
          (plan) =>
            plan.target.kind === "spawn",
        );
  
      if (
        routePlan?.nextAreas.length
      ) {
        return `${bestRoute.routeName} is currently the best route to pursue, but you have not found it yet. Start with ${routePlan.nextAreas[0].label}.`;
      }
  
      return `${bestRoute.routeName} is currently the best route to pursue, but its location is still unknown.`;
    }
  
    if (
      bestRoute.routeMissingRequirements
        .length === 1
    ) {
      return `${bestRoute.routeName} is close. The main missing requirement is ${bestRoute.routeMissingRequirements[0].label}.`;
    }
  
    if (
      bestRoute.routeMissingRequirements
        .length > 1
    ) {
      const missing =
        bestRoute.routeMissingRequirements
          .map((gap) => gap.label)
          .join(", ");
  
      return `${bestRoute.routeName} is still the best current option, but it needs ${missing}.`;
    }
  
    if (
      bestRoute.readiness ===
      "needs-inspection"
    ) {
      return `${bestRoute.routeName} is found, but you should inspect its actual barriers before starting another loot search.`;
    }
  
    if (
      bestRoute.pendingBarrierActions
        .length > 0
    ) {
      return `${bestRoute.routeName} is actionable now because your team already has the tool needed for its next barrier.`;
    }
  
    return bestRoute.reason;
  }
  
  function shouldStopSearching(
    input: EscapeHelperInput,
    bestRoute?: EscapeRouteAnalysis,
  ): boolean {
    if (!bestRoute) {
      return false;
    }
  
    if (
      bestRoute.readiness !== "ready"
    ) {
      return false;
    }
  
    if (
      input.goal !== "achievement"
    ) {
      return true;
    }
  
    return bestRoute.goalSatisfied;
  }
  
  function getFinalNextAction(
    bestRoute?: EscapeRouteAnalysis,
    searchPlans: SpawnRecommendation[] = [],
  ): string {
    if (!bestRoute) {
      return "Update the routes and items your team has confirmed, then run the helper again.";
    }
  
    /*
     * Route logic remains the source of truth.
     *
     * Spawn plans only expand the instruction after
     * escape-recommender has decided what the route
     * actually needs.
     */
    if (
      bestRoute.state.discovery ===
        "unknown" &&
      searchPlans.length
    ) {
      return searchPlans[0].nextAction;
    }
  
    if (
      bestRoute.missingRequirements
        .length > 0 &&
      searchPlans.length
    ) {
      const firstUsefulPlan =
        searchPlans.find(
          (plan) =>
            plan.nextAreas.length > 0 ||
            plan.searchTargets.length > 0,
        ) ?? searchPlans[0];
  
      return firstUsefulPlan.nextAction;
    }
  
    return bestRoute.nextAction;
  }
  
  export function getHalloweenRecommendation(
    input: EscapeHelperInput,
  ): HalloweenHelperResult {
    const escape =
      recommendEscapeRoutes(input);
  
    const bestRoute = escape.bestRoute;
    const fallbackRoute =
      escape.fallbackRoute;
  
    const searchPlans =
      buildSearchPlans(
        input,
        bestRoute,
      );
  
    const warnings = unique([
      ...escape.warnings,
      ...searchPlans.flatMap(
        (plan) => plan.warnings,
      ),
    ]);
  
    /*
     * One useful extra warning:
     * the helper should not trap a player into
     * repeating a fully exhausted community pool.
     */
    if (
      searchPlans.some(
        (plan) =>
          plan.candidateAreaCount > 0 &&
          plan.nextAreas.length === 0 &&
          plan.checkedAreas.length > 0,
      )
    ) {
      warnings.push(
        "Every currently known candidate area for at least one required target has been checked. Repeating the same loop has low value; consider the fallback route or broaden the search.",
      );
    }
  
    /*
     * Make OR-requirements clear.
     *
     * Example:
     * Padlock Key OR Bolt Cutters.
     */
    const anyOfGap =
      bestRoute?.missingRequirements.find(
        (gap) => gap.itemIds.length > 1,
      );
  
    if (anyOfGap) {
      const itemNames =
        anyOfGap.itemIds.map(
          (itemId) =>
            escapeItems[itemId]?.name ??
            itemId,
        );
  
      warnings.push(
        `You only need one option for "${anyOfGap.label}". Do not treat ${itemNames.join(
          " and ",
        )} as separate mandatory requirements.`,
      );
    }
  
    return {
      escape,
  
      bestRoute,
      fallbackRoute,
  
      searchPlans,
  
      summary: buildSummary(
        input,
        bestRoute,
        searchPlans,
      ),
  
      nextAction:
        getFinalNextAction(
          bestRoute,
          searchPlans,
        ),
  
      stopSearching:
        shouldStopSearching(
          input,
          bestRoute,
        ),
  
      warnings: unique(warnings),
    };
  }