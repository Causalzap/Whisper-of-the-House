import type {
    EscapeHelperInput,
    EscapeRouteId,
  } from "@/data/halloween-the-game/escape-helper";
  
  import type {
    RouteReadiness,
  } from "./escape-recommender";
  
  import {
    getHalloweenRecommendation,
  } from "./halloween-helper";
  
  export interface HalloweenHelperScenario {
    name: string;
  
    input: EscapeHelperInput;
  
    expected: {
      bestRoute: EscapeRouteId;
  
      readiness?: RouteReadiness;
  
      firstSearchTargetKey?: string;
  
      stopSearching?: boolean;
  
      nextActionIncludes?: string;
    };
  }
  
  export interface HalloweenScenarioResult {
    name: string;
  
    passed: boolean;
  
    failures: string[];
  }
  
  export const halloweenHelperScenarios: HalloweenHelperScenario[] =
    [
      {
        name: "Sedan missing only Gas with southern Gas areas already checked",
  
        input: {
          mapId: "haddonfield-heights",
  
          goal: "escape-fast",
  
          currentRegionId:
            "haddonfield-heights:central-victoria-east",
  
          teamItems: [
            {
              itemId: "sedan-key",
              status: "carried",
            },
            {
              itemId: "repair-kit",
              status: "carried",
            },
            {
              itemId: "gas",
              status: "unknown",
            },
          ],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "in-progress",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [
            {
              areaId:
                "hh-gas-southwest",
              status: "checked-empty",
            },
            {
              areaId: "hh-gas-south",
              status: "checked-empty",
            },
          ],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "one-step-away",
  
          firstSearchTargetKey:
            "item:gas",
  
          stopSearching: false,
  
          nextActionIncludes:
            "East Victoria Way",
        },
      },
  
      {
        name: "Sedan has all three items but still needs to be prepared",
  
        input: {
          mapId: "east-haddonfield",
  
          goal: "escape-fast",
  
          teamItems: [
            {
              itemId: "sedan-key",
              status: "carried",
            },
            {
              itemId: "repair-kit",
              status: "carried",
            },
            {
              itemId: "gas",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "in-progress",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "one-step-away",
  
          stopSearching: false,
  
          nextActionIncludes:
            "finish preparing",
        },
      },
  
      {
        name: "Sedan is fully ready",
  
        input: {
          mapId: "east-haddonfield",
  
          goal: "escape-fast",
  
          teamItems: [],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "ready",
  
          stopSearching: true,
  
          nextActionIncludes:
            "Commit",
        },
      },
  
      {
        name: "Storm Cellar has a Padlock and the team already has a key",
  
        input: {
          mapId: "haddonfield-heights",
  
          goal: "escape-fast",
  
          teamItems: [
            {
              itemId: "padlock-key",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "in-progress",
  
              barriers: [
                {
                  barrierId: "padlock",
                  status: "present",
                },
              ],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "storm-cellar",
  
          readiness: "one-step-away",
  
          stopSearching: false,
  
          nextActionIncludes:
            "Padlock",
        },
      },
  
      {
        name: "Storm Cellar boards are present but Wood Axe is missing",
  
        input: {
          mapId: "orange-grove-estates",
  
          goal: "escape-fast",
  
          teamItems: [],
  
          routes: [
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "in-progress",
  
              barriers: [
                {
                  barrierId: "boards",
                  status: "present",
                },
              ],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "storm-cellar",
  
          readiness: "one-step-away",
  
          firstSearchTargetKey:
            "item:wood-axe",
  
          stopSearching: false,
  
          nextActionIncludes:
            "normal loot",
        },
      },
  
      {
        name: "Storm Cellar boards can be cleared immediately",
  
        input: {
          mapId: "orange-grove-estates",
  
          goal: "escape-fast",
  
          teamItems: [
            {
              itemId: "wood-axe",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "in-progress",
  
              barriers: [
                {
                  barrierId: "boards",
                  status: "present",
                },
              ],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "storm-cellar",
  
          readiness: "one-step-away",
  
          stopSearching: false,
  
          nextActionIncludes:
            "Wood Axe",
        },
      },
  
      {
        name: "Best route is Sedan but its location has not been found",
  
        input: {
          mapId: "haddonfield-town-center",
  
          goal: "escape-fast",
  
          teamItems: [
            {
              itemId: "gas",
              status: "carried",
            },
            {
              itemId: "repair-kit",
              status: "carried",
            },
            {
              itemId: "sedan-key",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "unknown",
              progress: "not-started",
              barriers: [],
            },
  
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "blocked",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "unavailable",
  
          firstSearchTargetKey:
            "spawn:sedan",
  
          stopSearching: false,
  
          nextActionIncludes:
            "North-Central Town Center",
        },
      },
  
      {
        name: "Police Wagon is ready while normal exits are unknown",
  
        input: {
          mapId: "east-haddonfield",
  
          goal: "escape-fast",
  
          policeWagonAvailable: true,
  
          teamItems: [],
  
          routes: [
            {
              routeId: "police-wagon",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "police-wagon",
  
          readiness: "ready",
  
          stopSearching: true,
  
          nextActionIncludes:
            "Commit",
        },
      },
  
      {
        name: "Risky Escape keeps Sedan priority even when Cellar is ready",
  
        input: {
          mapId: "east-haddonfield",
  
          goal: "achievement",
  
          achievementId: "risky-escape",
  
          playerDrunk: false,
  
          teamItems: [
            {
              itemId: "beer",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
  
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "ready",
  
          stopSearching: false,
  
          nextActionIncludes:
            "Get drunk",
        },
      },
  
      {
        name: "Risky Escape has a ready Sedan but still needs Beer",
  
        input: {
          mapId: "haddonfield-heights",
  
          goal: "achievement",
  
          achievementId: "risky-escape",
  
          playerDrunk: false,
  
          teamItems: [],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "ready",
  
          firstSearchTargetKey:
            "item:beer",
  
          stopSearching: false,
  
          nextActionIncludes:
            "normal loot",
        },
      },
  
      {
        name: "I Found the Car keeps Sedan priority until Residents are ready",
  
        input: {
          mapId: "orange-grove-estates",
  
          goal: "achievement",
  
          achievementId:
            "i-found-the-car",
  
          residentsReady: 0,
  
          teamItems: [],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
  
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "ready",
  
          stopSearching: false,
  
          nextActionIncludes:
            "Residents",
        },
      },
  
      {
        name: "Ready Cellar beats Sedan that is still missing Gas",
  
        input: {
          mapId: "haddonfield-heights",
  
          goal: "escape-fast",
  
          teamItems: [
            {
              itemId: "sedan-key",
              status: "carried",
            },
            {
              itemId: "repair-kit",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "in-progress",
              barriers: [],
            },
  
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "ready",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "storm-cellar",
  
          readiness: "ready",
  
          stopSearching: true,
  
          nextActionIncludes:
            "Commit",
        },
      },
  
      {
        name: "Gate with active Fuse Box recommends Fuse search",
  
        input: {
          mapId: "haddonfield-town-center",
  
          goal: "escape-fast",
  
          teamItems: [],
  
          routes: [
            {
              routeId: "escape-gate",
              discovery: "found",
              progress: "in-progress",
  
              barriers: [
                {
                  barrierId: "fuse-box",
                  status: "present",
                },
              ],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "escape-gate",
  
          readiness: "one-step-away",
  
          firstSearchTargetKey:
            "item:fuse",
  
          stopSearching: false,
  
          nextActionIncludes:
            "lockboxes",
        },
      },
  
      {
        name: "All known Gas candidates checked should not tell player to loop again",
  
        input: {
          mapId: "east-haddonfield",
  
          goal: "escape-fast",
  
          teamItems: [
            {
              itemId: "sedan-key",
              status: "carried",
            },
            {
              itemId: "repair-kit",
              status: "carried",
            },
          ],
  
          routes: [
            {
              routeId: "sedan",
              discovery: "found",
              progress: "in-progress",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [
            {
              areaId: "eh-gas-north",
              status: "checked-empty",
            },
            {
              areaId: "eh-gas-central",
              status: "checked-empty",
            },
            {
              areaId: "eh-gas-east",
              status: "checked-empty",
            },
            {
              areaId: "eh-gas-southwest",
              status: "checked-empty",
            },
          ],
        },
  
        expected: {
          bestRoute: "sedan",
  
          readiness: "one-step-away",
  
          firstSearchTargetKey:
            "item:gas",
  
          stopSearching: false,
  
          nextActionIncludes:
            "Do not loop",
        },
      },
  
      {
        name: "Cellar found but barrier variant unknown should be inspected before loot hunting",
  
        input: {
          mapId: "east-haddonfield",
  
          goal: "escape-fast",
  
          teamItems: [],
  
          routes: [
            {
              routeId: "storm-cellar",
              discovery: "found",
              progress: "not-started",
              barriers: [],
            },
          ],
  
          checkedSpawnAreas: [],
        },
  
        expected: {
          bestRoute: "storm-cellar",
  
          readiness: "needs-inspection",
  
          stopSearching: false,
  
          nextActionIncludes:
            "Inspect",
        },
      },
    ];
  
  function getFirstSearchTargetKey(
    result: ReturnType<
      typeof getHalloweenRecommendation
    >,
  ): string | undefined {
    return result.searchPlans[0]?.targetKey;
  }
  
  export function runHalloweenHelperScenarios(): HalloweenScenarioResult[] {
    return halloweenHelperScenarios.map(
      (scenario) => {
        const result =
          getHalloweenRecommendation(
            scenario.input,
          );
  
        const failures: string[] = [];
  
        if (
          result.bestRoute?.routeId !==
          scenario.expected.bestRoute
        ) {
          failures.push(
            `Expected best route "${scenario.expected.bestRoute}", got "${result.bestRoute?.routeId ?? "none"}".`,
          );
        }
  
        if (
          scenario.expected.readiness &&
          result.bestRoute?.readiness !==
            scenario.expected.readiness
        ) {
          failures.push(
            `Expected readiness "${scenario.expected.readiness}", got "${result.bestRoute?.readiness ?? "none"}".`,
          );
        }
  
        if (
          scenario.expected
            .firstSearchTargetKey
        ) {
          const actual =
            getFirstSearchTargetKey(result);
  
          if (
            actual !==
            scenario.expected
              .firstSearchTargetKey
          ) {
            failures.push(
              `Expected first search target "${scenario.expected.firstSearchTargetKey}", got "${actual ?? "none"}".`,
            );
          }
        }
  
        if (
          typeof scenario.expected
            .stopSearching === "boolean" &&
          result.stopSearching !==
            scenario.expected.stopSearching
        ) {
          failures.push(
            `Expected stopSearching=${scenario.expected.stopSearching}, got ${result.stopSearching}.`,
          );
        }
  
        if (
          scenario.expected
            .nextActionIncludes &&
          !result.nextAction
            .toLowerCase()
            .includes(
              scenario.expected.nextActionIncludes.toLowerCase(),
            )
        ) {
          failures.push(
            `Expected nextAction to contain "${scenario.expected.nextActionIncludes}", got "${result.nextAction}".`,
          );
        }
  
        return {
          name: scenario.name,
  
          passed: failures.length === 0,
  
          failures,
        };
      },
    );
  }
  
  export function assertHalloweenHelperScenarios(): void {
    const results =
      runHalloweenHelperScenarios();
  
    const failed = results.filter(
      (result) => !result.passed,
    );
  
    if (!failed.length) {
      return;
    }
  
    const message = failed
      .map((result) => {
        return [
          `Scenario failed: ${result.name}`,
          ...result.failures.map(
            (failure) => `  - ${failure}`,
          ),
        ].join("\n");
      })
      .join("\n\n");
  
    throw new Error(message);
  }