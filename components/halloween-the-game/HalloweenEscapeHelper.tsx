"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  barrierDefinitions,
  escapeAchievements,
  escapeItems,
  escapeRoutes,
  halloweenMaps,
  mapRegions,
  type BarrierId,
  type BarrierStatus,
  type EscapeAchievementId,
  type EscapeHelperInput,
  type EscapeItemId,
  type EscapeRouteId,
  type HalloweenMapId,
  type MapRegionId,
  type MatchGoal,
  type RouteProgressState,
  type SpawnAreaCheckStatus,
  type TeamItemStatus,
} from "@/data/halloween-the-game/escape-helper";

import {
  getHalloweenRecommendation,
} from "@/lib/halloween-the-game/halloween-helper";

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const shareUrl =
  "https://www.whisperofthehouse.com/halloween-the-game/escape-helper";

const normalRouteOrder: EscapeRouteId[] = [
  "sedan",
  "storm-cellar",
  "escape-gate",
];

const itemOrder: EscapeItemId[] = [
  "gas",
  "sedan-key",
  "repair-kit",
  "fuse",
  "bolt-cutters",
  "padlock-key",
  "escape-key",
  "wood-axe",
  "beer",
  "pocket-knife",
];

const sedanItemIds: EscapeItemId[] = [
  "sedan-key",
  "repair-kit",
  "gas",
];

const cellarItemIds: EscapeItemId[] = [
  "padlock-key",
  "bolt-cutters",
  "wood-axe",
];

const gateItemIds: EscapeItemId[] = [
  "fuse",
  "padlock-key",
  "bolt-cutters",
];

const goalOptions: Array<{
  id: MatchGoal;
  label: string;
  shortLabel: string;
}> = [
  {
    id: "escape-fast",
    label:
      "Prioritize the route that can be finished first.",
    shortLabel: "Escape Fast",
  },
  {
    id: "safest-route",
    label:
      "Prefer fewer unknowns and unfinished steps.",
    shortLabel: "Lowest Risk",
  },
  {
    id: "save-residents",
    label:
      "Keep Resident evacuation useful while choosing a route.",
    shortLabel: "Save Residents",
  },
  {
    id: "achievement",
    label:
      "Keep the route required by an achievement in priority.",
    shortLabel: "Achievement",
  },
];

const progressOptions: Array<{
  value: RouteProgressState;
  label: string;
}> = [
  {
    value: "not-started",
    label: "Found — inspect next",
  },
  {
    value: "in-progress",
    label: "Working on it",
  },
  {
    value: "ready",
    label: "Ready to use",
  },
  {
    value: "blocked",
    label: "Blocked",
  },
];

const itemStatusOptions: Array<{
  value: TeamItemStatus;
  label: string;
}> = [
  {
    value: "unknown",
    label: "Unknown",
  },
  {
    value: "found",
    label: "Found",
  },
  {
    value: "carried",
    label: "With team",
  },
  {
    value: "staged-at-exit",
    label: "At exit",
  },
  {
    value: "used",
    label: "Used",
  },
];

const barrierStatusOptions: Array<{
  value: BarrierStatus;
  label: string;
}> = [
  {
    value: "unknown",
    label: "Not sure",
  },
  {
    value: "present",
    label: "Still blocking",
  },
  {
    value: "cleared",
    label: "Cleared / not blocking",
  },
];

/* -------------------------------------------------------------------------- */
/* Initial state                                                              */
/* -------------------------------------------------------------------------- */

function createInitialInput(
  mapId: HalloweenMapId = "east-haddonfield",
): EscapeHelperInput {
  return {
    mapId,

    goal: "escape-fast",

    teamItems: itemOrder.map(
      (itemId) => ({
        itemId,
        status: "unknown",
      }),
    ),

    routes: Object.values(
      escapeRoutes,
    ).map((route) => ({
      routeId: route.id,
      discovery: "unknown",
      progress: "unknown",
      barriers: [],
    })),

    checkedSpawnAreas: [],

    residentsReady: 0,

    playerDrunk: false,

    policeWagonAvailable: false,
  };
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function unique<T>(
  values: T[],
): T[] {
  return [...new Set(values)];
}

function readinessLabel(
  readiness?: string,
): string {
  switch (readiness) {
    case "ready":
      return "Ready";

    case "one-step-away":
      return "One Step Away";

    case "in-progress":
      return "In Progress";

    case "needs-inspection":
      return "Inspect First";

    case "blocked":
      return "Blocked";

    case "unavailable":
      return "Not Confirmed";

    default:
      return "Unknown";
  }
}

function readinessClasses(
  readiness?: string,
): string {
  switch (readiness) {
    case "ready":
      return [
        "border-emerald-500/30",
        "bg-emerald-500/10",
        "text-emerald-300",
      ].join(" ");

    case "one-step-away":
      return [
        "border-orange-500/30",
        "bg-orange-500/10",
        "text-orange-200",
      ].join(" ");

    case "needs-inspection":
      return [
        "border-amber-500/30",
        "bg-amber-500/10",
        "text-amber-200",
      ].join(" ");

    case "blocked":
      return [
        "border-red-500/30",
        "bg-red-500/10",
        "text-red-300",
      ].join(" ");

    default:
      return [
        "border-slate-700",
        "bg-slate-900",
        "text-slate-300",
      ].join(" ");
  }
}

function routeIcon(
  routeId: EscapeRouteId,
): string {
  switch (routeId) {
    case "sedan":
      return "CAR";

    case "storm-cellar":
      return "CELLAR";

    case "escape-gate":
      return "GATE";

    case "police-wagon":
      return "WAGON";
  }
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HalloweenEscapeHelper() {
  const [input, setInput] =
    useState<EscapeHelperInput>(
      createInitialInput,
    );

  const result = useMemo(
    () =>
      getHalloweenRecommendation(
        input,
      ),
    [input],
  );

  const bestRoute =
    result.bestRoute;

  const fallbackRoute =
    result.fallbackRoute;

  const currentRegions =
    mapRegions[input.mapId] ?? [];

  const foundRouteIds =
    useMemo(
      () =>
        input.routes
          .filter(
            (route) =>
              route.discovery ===
              "found",
          )
          .map(
            (route) =>
              route.routeId,
          ),
      [input.routes],
    );

  const missingLabels =
    useMemo(
      () =>
        unique(
          bestRoute?.missingRequirements.map(
            (gap) =>
              gap.label,
          ) ?? [],
        ),
      [bestRoute],
    );

  /*
   * Only show items relevant to the current match
   * in the main UI.
   *
   * Everything else remains available under
   * "More team items".
   */
  const primaryItemIds =
    useMemo(() => {
      const ids =
        new Set<EscapeItemId>();

      if (
        foundRouteIds.includes(
          "sedan",
        )
      ) {
        sedanItemIds.forEach(
          (id) => ids.add(id),
        );
      }

      if (
        foundRouteIds.includes(
          "storm-cellar",
        )
      ) {
        cellarItemIds.forEach(
          (id) => ids.add(id),
        );
      }

      if (
        foundRouteIds.includes(
          "escape-gate",
        )
      ) {
        gateItemIds.forEach(
          (id) => ids.add(id),
        );
      }

      if (
        input.goal ===
          "achievement" &&
        input.achievementId ===
          "risky-escape"
      ) {
        ids.add("beer");
      }

      bestRoute?.missingRequirements.forEach(
        (gap) => {
          gap.itemIds.forEach(
            (id) =>
              ids.add(id),
          );
        },
      );

      return itemOrder.filter(
        (id) => ids.has(id),
      );
    }, [
      foundRouteIds,
      input.goal,
      input.achievementId,
      bestRoute,
    ]);

  const advancedItemIds =
    useMemo(
      () =>
        itemOrder.filter(
          (id) =>
            !primaryItemIds.includes(
              id,
            ),
        ),
      [primaryItemIds],
    );

  const hasMatchData =
    useMemo(() => {
      const routeFound =
        foundRouteIds.length >
        0;

      const itemKnown =
        input.teamItems.some(
          (item) =>
            item.status !==
            "unknown",
        );

      return (
        routeFound ||
        itemKnown ||
        input.policeWagonAvailable ===
          true ||
        input.checkedSpawnAreas
          .length > 0
      );
    }, [
      foundRouteIds,
      input.teamItems,
      input.policeWagonAvailable,
      input.checkedSpawnAreas,
    ]);

  const firstSearchArea =
    useMemo(() => {
      for (const plan of result.searchPlans) {
        const area =
          plan.nextAreas[0];

        if (area) {
          return area.label;
        }
      }

      return undefined;
    }, [result.searchPlans]);

  /* ---------------------------------------------------------------------- */
  /* Match state mutations                                                  */
  /* ---------------------------------------------------------------------- */

  function changeMap(
    mapId: HalloweenMapId,
  ) {
    setInput(
      (previous) => {
        const fresh =
          createInitialInput(
            mapId,
          );

        return {
          ...fresh,

          goal:
            previous.goal,

          achievementId:
            previous.goal ===
            "achievement"
              ? previous.achievementId
              : undefined,
        };
      },
    );
  }

  function changeGoal(
    goal: MatchGoal,
  ) {
    setInput(
      (previous) => ({
        ...previous,

        goal,

        achievementId:
          goal ===
          "achievement"
            ? previous.achievementId ??
              "i-found-the-car"
            : undefined,
      }),
    );
  }

  function changeAchievement(
    achievementId: EscapeAchievementId,
  ) {
    setInput(
      (previous) => ({
        ...previous,
        achievementId,
      }),
    );
  }

  function setRouteFound(
    routeId: EscapeRouteId,
    found: boolean,
  ) {
    setInput(
      (previous) => ({
        ...previous,

        routes:
          previous.routes.map(
            (routeState) => {
              if (
                routeState.routeId !==
                routeId
              ) {
                return routeState;
              }

              if (!found) {
                return {
                  ...routeState,

                  discovery:
                    "unknown",

                  progress:
                    "unknown",

                  barriers: [],
                };
              }

              const definition =
                escapeRoutes[
                  routeId
                ];

              return {
                ...routeState,

                discovery:
                  "found",

                progress:
                  routeState.progress ===
                  "unknown"
                    ? "not-started"
                    : routeState.progress,

                barriers:
                  routeState.barriers
                    .length > 0
                    ? routeState.barriers
                    : definition.possibleBarriers.map(
                        (
                          barrierId,
                        ) => ({
                          barrierId,
                          status:
                            "unknown" as const,
                        }),
                      ),
              };
            },
          ),
      }),
    );
  }

  function setRouteProgress(
    routeId: EscapeRouteId,
    progress: RouteProgressState,
  ) {
    setInput(
      (previous) => ({
        ...previous,

        routes:
          previous.routes.map(
            (routeState) =>
              routeState.routeId ===
              routeId
                ? {
                    ...routeState,

                    discovery:
                      "found",

                    progress,
                  }
                : routeState,
          ),
      }),
    );
  }

  function setBarrierStatus(
    routeId: EscapeRouteId,
    barrierId: BarrierId,
    status: BarrierStatus,
  ) {
    setInput(
      (previous) => ({
        ...previous,

        routes:
          previous.routes.map(
            (routeState) => {
              if (
                routeState.routeId !==
                routeId
              ) {
                return routeState;
              }

              const exists =
                routeState.barriers.some(
                  (barrier) =>
                    barrier.barrierId ===
                    barrierId,
                );

              if (!exists) {
                return {
                  ...routeState,

                  barriers: [
                    ...routeState.barriers,

                    {
                      barrierId,
                      status,
                    },
                  ],
                };
              }

              return {
                ...routeState,

                barriers:
                  routeState.barriers.map(
                    (barrier) =>
                      barrier.barrierId ===
                      barrierId
                        ? {
                            ...barrier,
                            status,
                          }
                        : barrier,
                  ),
              };
            },
          ),
      }),
    );
  }

  function setItemStatus(
    itemId: EscapeItemId,
    status: TeamItemStatus,
  ) {
    setInput(
      (previous) => ({
        ...previous,

        teamItems:
          previous.teamItems.map(
            (item) =>
              item.itemId ===
              itemId
                ? {
                    ...item,
                    status,
                  }
                : item,
          ),
      }),
    );
  }

  function setPoliceWagon(
    available: boolean,
  ) {
    setInput(
      (previous) => ({
        ...previous,

        policeWagonAvailable:
          available,

        routes:
          previous.routes.map(
            (routeState) => {
              if (
                routeState.routeId !==
                "police-wagon"
              ) {
                return routeState;
              }

              return available
                ? {
                    ...routeState,

                    discovery:
                      "found",

                    progress:
                      "ready",
                  }
                : {
                    ...routeState,

                    discovery:
                      "unknown",

                    progress:
                      "unknown",
                  };
            },
          ),
      }),
    );
  }

  function setSpawnAreaStatus(
    areaIds: string[],
    status:
      | SpawnAreaCheckStatus
      | "unchecked",
  ) {
    setInput(
      (previous) => {
        const remaining =
          previous.checkedSpawnAreas.filter(
            (state) =>
              !areaIds.includes(
                state.areaId,
              ),
          );

        if (
          status ===
          "unchecked"
        ) {
          return {
            ...previous,

            checkedSpawnAreas:
              remaining,
          };
        }

        return {
          ...previous,

          checkedSpawnAreas: [
            ...remaining,

            ...areaIds.map(
              (areaId) => ({
                areaId,
                status,
              }),
            ),
          ],
        };
      },
    );
  }

  function getSpawnAreaStatus(
    areaIds: string[],
  ):
    | SpawnAreaCheckStatus
    | "unchecked" {
    const states =
      areaIds
        .map(
          (areaId) =>
            input.checkedSpawnAreas.find(
              (state) =>
                state.areaId ===
                areaId,
            )?.status,
        )
        .filter(
          Boolean,
        ) as SpawnAreaCheckStatus[];

    if (
      states.includes(
        "confirmed-active",
      )
    ) {
      return "confirmed-active";
    }

    if (
      states.length > 0 &&
      states.every(
        (state) =>
          state ===
          "checked-empty",
      )
    ) {
      return "checked-empty";
    }

    return "unchecked";
  }

  function resetMatch() {
    setInput(
      (previous) => {
        const fresh =
          createInitialInput(
            previous.mapId,
          );

        return {
          ...fresh,

          goal:
            previous.goal,

          achievementId:
            previous.goal ===
            "achievement"
              ? previous.achievementId
              : undefined,
        };
      },
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Sharing                                                                */
  /* ---------------------------------------------------------------------- */

  function getShareNextStep(): string {
    if (
      firstSearchArea
    ) {
      return firstSearchArea;
    }

    if (
      result.stopSearching
    ) {
      return "Commit to the escape";
    }

    return result.nextAction;
  }

  function buildShareText(): string {
    const route =
      bestRoute?.routeName ??
      "Still deciding";

    const missing =
      missingLabels.length >
      0
        ? missingLabels.join(
            ", ",
          )
        : "Nothing";

    return [
      "My Halloween: The Game escape plan:",
      "",
      `Best Escape: ${route}`,
      `Missing: ${missing}`,
      `Next: ${getShareNextStep()}`,
      "",
      "Try the Escape & Spawn Helper:",
    ].join("\n");
  }

  function shareOnX() {
    const url = [
      "https://twitter.com/intent/tweet",
      `?text=${encodeURIComponent(
        buildShareText(),
      )}`,
      `&url=${encodeURIComponent(
        shareUrl,
      )}`,
    ].join("");

    window.open(
      url,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareOnBluesky() {
    const text = [
      buildShareText(),
      shareUrl,
    ].join("\n");

    const url =
      "https://bsky.app/intent/compose" +
      `?text=${encodeURIComponent(
        text,
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareOnReddit() {
    const route =
      bestRoute?.routeName ??
      "Escape Helper";

    const title =
      `My Halloween: The Game escape plan — ${route}`;

    const url =
      "https://www.reddit.com/submit" +
      `?url=${encodeURIComponent(
        shareUrl,
      )}` +
      `&title=${encodeURIComponent(
        title,
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer",
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Rendering helpers                                                      */
  /* ---------------------------------------------------------------------- */

  function renderItemRow(
    itemId: EscapeItemId,
  ) {
    const item =
      escapeItems[itemId];

    const state =
      input.teamItems.find(
        (entry) =>
          entry.itemId ===
          itemId,
      );

    return (
      <label
        key={itemId}
        className="grid min-h-12 grid-cols-[minmax(0,1fr)_140px] items-center gap-3 border-b border-slate-800/70 py-2 last:border-b-0"
      >
        <span className="min-w-0 text-sm font-medium text-slate-200">
          {item.name}
        </span>

        <select
          value={
            state?.status ??
            "unknown"
          }
          onChange={(
            event,
          ) =>
            setItemStatus(
              itemId,
              event.target
                .value as TeamItemStatus,
            )
          }
          className="min-h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm text-slate-200 outline-none focus:border-orange-500"
        >
          {itemStatusOptions.map(
            (option) => (
              <option
                key={
                  option.value
                }
                value={
                  option.value
                }
              >
                {
                  option.label
                }
              </option>
            ),
          )}
        </select>
      </label>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Render                                                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100">
      {/* Header */}

      <div className="border-b border-slate-800 px-4 py-5 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
              Live Match Assistant
            </p>

            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Halloween Escape
              &amp; Spawn Helper
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              You do not need
              to fill everything
              in. Start with what
              your team actually
              knows and update the
              match as it changes.
            </p>
          </div>

          <button
            type="button"
            onClick={
              resetMatch
            }
            className="min-h-10 rounded-lg border border-slate-700 px-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-900"
          >
            Reset
          </button>
        </div>

        {/* How to use */}

        <div className="mt-4 grid gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-sm text-slate-300 sm:grid-cols-3">
          <div className="flex gap-2">
            <span className="font-bold text-orange-400">
              1
            </span>

            <span>
              Pick your map.
            </span>
          </div>

          <div className="flex gap-2">
            <span className="font-bold text-orange-400">
              2
            </span>

            <span>
              Mark the exits
              your team found.
            </span>
          </div>

          <div className="flex gap-2">
            <span className="font-bold text-orange-400">
              3
            </span>

            <span>
              Update items and
              visible barriers.
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        {/* -------------------------------------------------------------- */}
        {/* 1. Match setup                                                 */}
        {/* -------------------------------------------------------------- */}

        <section>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Map */}

            <label>
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Map
              </span>

              <select
                value={
                  input.mapId
                }
                onChange={(
                  event,
                ) =>
                  changeMap(
                    event.target
                      .value as HalloweenMapId,
                  )
                }
                className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 text-base font-medium text-white outline-none focus:border-orange-500"
              >
                {Object.values(
                  halloweenMaps,
                ).map(
                  (map) => (
                    <option
                      key={
                        map.id
                      }
                      value={
                        map.id
                      }
                    >
                      {map.name}
                    </option>
                  ),
                )}
              </select>
            </label>

            {/* Current area */}

            <label>
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Current area
                <span className="ml-1 font-normal normal-case tracking-normal text-slate-600">
                  optional
                </span>
              </span>

              <select
                value={
                  input.currentRegionId ??
                  ""
                }
                onChange={(
                  event,
                ) =>
                  setInput(
                    (
                      previous,
                    ) => ({
                      ...previous,

                      currentRegionId:
                        event
                          .target
                          .value
                          ? (event
                              .target
                              .value as MapRegionId)
                          : undefined,
                    }),
                  )
                }
                className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 text-base text-white outline-none focus:border-orange-500"
              >
                <option value="">
                  Not sure
                </option>

                {currentRegions.map(
                  (region) => (
                    <option
                      key={
                        region.id
                      }
                      value={
                        region.id
                      }
                    >
                      {
                        region.label
                      }
                    </option>
                  ),
                )}
              </select>
            </label>
          </div>

          {/* Goal */}

          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
              Goal
            </p>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {goalOptions.map(
                (goal) => {
                  const active =
                    input.goal ===
                    goal.id;

                  return (
                    <button
                      key={
                        goal.id
                      }
                      type="button"
                      onClick={() =>
                        changeGoal(
                          goal.id,
                        )
                      }
                      title={
                        goal.label
                      }
                      className={[
                        "min-h-11 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                        active
                          ? "border-orange-500 bg-orange-500/10 text-orange-200"
                          : "border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-600",
                      ].join(
                        " ",
                      )}
                    >
                      {
                        goal.shortLabel
                      }
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Achievement */}

          {input.goal ===
            "achievement" && (
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-300">
                  Achievement
                </span>

                <select
                  value={
                    input.achievementId ??
                    "i-found-the-car"
                  }
                  onChange={(
                    event,
                  ) =>
                    changeAchievement(
                      event
                        .target
                        .value as EscapeAchievementId,
                    )
                  }
                  className="min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-base text-white outline-none focus:border-orange-500"
                >
                  {Object.values(
                    escapeAchievements,
                  ).map(
                    (
                      achievement,
                    ) => (
                      <option
                        key={
                          achievement.id
                        }
                        value={
                          achievement.id
                        }
                      >
                        {
                          achievement.name
                        }
                      </option>
                    ),
                  )}
                </select>
              </label>

              {input
                .achievementId ===
                "risky-escape" && (
                <label className="mt-3 flex min-h-11 items-center gap-3 rounded-lg border border-slate-800 px-3">
                  <input
                    type="checkbox"
                    checked={
                      input.playerDrunk ??
                      false
                    }
                    onChange={(
                      event,
                    ) =>
                      setInput(
                        (
                          previous,
                        ) => ({
                          ...previous,

                          playerDrunk:
                            event
                              .target
                              .checked,
                        }),
                      )
                    }
                    className="h-4 w-4 accent-orange-500"
                  />

                  <span className="text-sm text-slate-300">
                    I am already
                    drunk
                  </span>
                </label>
              )}

              {input
                .achievementId ===
                "i-found-the-car" && (
                <label className="mt-3 block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Residents
                    currently staged
                    for the Sedan
                  </span>

                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={
                      input.residentsReady ??
                      0
                    }
                    onChange={(
                      event,
                    ) => {
                      const raw =
                        Number(
                          event
                            .target
                            .value,
                        );

                      const value =
                        Number.isFinite(
                          raw,
                        )
                          ? Math.max(
                              0,
                              Math.min(
                                20,
                                raw,
                              ),
                            )
                          : 0;

                      setInput(
                        (
                          previous,
                        ) => ({
                          ...previous,

                          residentsReady:
                            value,
                        }),
                      );
                    }}
                    className="min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-base text-white outline-none focus:border-orange-500"
                  />
                </label>
              )}
            </div>
          )}
        </section>

        {/* -------------------------------------------------------------- */}
        {/* 2. Found escapes                                               */}
        {/* -------------------------------------------------------------- */}

        <section className="border-t border-slate-800 pt-6">
          <div>
            <h3 className="text-base font-bold text-white">
              What has your
              team found?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Mark only confirmed
              exits. You can add the
              details underneath.
            </p>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {normalRouteOrder.map(
              (routeId) => {
                const state =
                  input.routes.find(
                    (route) =>
                      route.routeId ===
                      routeId,
                  );

                const found =
                  state?.discovery ===
                  "found";

                const definition =
                  escapeRoutes[
                    routeId
                  ];

                return (
                  <button
                    key={
                      routeId
                    }
                    type="button"
                    onClick={() =>
                      setRouteFound(
                        routeId,
                        !found,
                      )
                    }
                    className={[
                      "min-h-14 rounded-xl border px-3 py-3 text-left transition",
                      found
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-slate-800 bg-slate-900/50 hover:border-slate-600",
                    ].join(
                      " ",
                    )}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span
                        className={[
                          "text-sm font-bold",
                          found
                            ? "text-orange-200"
                            : "text-slate-200",
                        ].join(
                          " ",
                        )}
                      >
                        {
                          definition.name
                        }
                      </span>

                      <span
                        className={[
                          "text-xs font-bold",
                          found
                            ? "text-orange-400"
                            : "text-slate-600",
                        ].join(
                          " ",
                        )}
                      >
                        {found
                          ? "FOUND"
                          : "—"}
                      </span>
                    </span>
                  </button>
                );
              },
            )}

            <button
              type="button"
              onClick={() =>
                setPoliceWagon(
                  !input.policeWagonAvailable,
                )
              }
              className={[
                "min-h-14 rounded-xl border px-3 py-3 text-left transition",
                input.policeWagonAvailable
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-600",
              ].join(
                " ",
              )}
            >
              <span className="flex items-center justify-between gap-2">
                <span
                  className={[
                    "text-sm font-bold",
                    input.policeWagonAvailable
                      ? "text-orange-200"
                      : "text-slate-200",
                  ].join(
                    " ",
                  )}
                >
                  Police Wagon
                </span>

                <span
                  className={[
                    "text-xs font-bold",
                    input.policeWagonAvailable
                      ? "text-orange-400"
                      : "text-slate-600",
                  ].join(
                    " ",
                  )}
                >
                  {input.policeWagonAvailable
                    ? "AVAILABLE"
                    : "—"}
                </span>
              </span>
            </button>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* 3. Route details                                               */}
        {/* -------------------------------------------------------------- */}

        {foundRouteIds.length >
          0 && (
          <section>
            <div className="space-y-3">
              {normalRouteOrder
                .filter(
                  (routeId) =>
                    foundRouteIds.includes(
                      routeId,
                    ),
                )
                .map(
                  (routeId) => {
                    const definition =
                      escapeRoutes[
                        routeId
                      ];

                    const state =
                      input.routes.find(
                        (route) =>
                          route.routeId ===
                          routeId,
                      );

                    if (!state) {
                      return null;
                    }

                    return (
                      <div
                        key={
                          routeId
                        }
                        className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
                      >
                        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_210px] sm:items-center">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                              {routeIcon(
                                routeId,
                              )}
                            </p>

                            <h4 className="mt-1 font-bold text-white">
                              {
                                definition.name
                              }
                            </h4>
                          </div>

                          <select
                            value={
                              state.progress ===
                              "unknown"
                                ? "not-started"
                                : state.progress
                            }
                            onChange={(
                              event,
                            ) =>
                              setRouteProgress(
                                routeId,
                                event
                                  .target
                                  .value as RouteProgressState,
                              )
                            }
                            className="min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-slate-200 outline-none focus:border-orange-500"
                          >
                            {progressOptions.map(
                              (
                                option,
                              ) => (
                                <option
                                  key={
                                    option.value
                                  }
                                  value={
                                    option.value
                                  }
                                >
                                  {
                                    option.label
                                  }
                                </option>
                              ),
                            )}
                          </select>
                        </div>

                        {definition
                          .barrierDriven &&
                          state.progress !==
                            "ready" &&
                          state.progress !==
                            "blocked" && (
                            <div className="mt-4 border-t border-slate-800 pt-4">
                              <p className="mb-3 text-sm font-semibold text-slate-300">
                                What is
                                blocking this
                                exit?
                              </p>

                              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {definition.possibleBarriers.map(
                                  (
                                    barrierId,
                                  ) => {
                                    const barrier =
                                      barrierDefinitions[
                                        barrierId
                                      ];

                                    const barrierState =
                                      state.barriers.find(
                                        (
                                          current,
                                        ) =>
                                          current.barrierId ===
                                          barrierId,
                                      );

                                    return (
                                      <label
                                        key={
                                          barrierId
                                        }
                                      >
                                        <span className="mb-1.5 block text-xs font-medium text-slate-400">
                                          {
                                            barrier.name
                                          }
                                        </span>

                                        <select
                                          value={
                                            barrierState?.status ??
                                            "unknown"
                                          }
                                          onChange={(
                                            event,
                                          ) =>
                                            setBarrierStatus(
                                              routeId,
                                              barrierId,
                                              event
                                                .target
                                                .value as BarrierStatus,
                                            )
                                          }
                                          className="min-h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm text-slate-200 outline-none focus:border-orange-500"
                                        >
                                          {barrierStatusOptions.map(
                                            (
                                              option,
                                            ) => (
                                              <option
                                                key={
                                                  option.value
                                                }
                                                value={
                                                  option.value
                                                }
                                              >
                                                {
                                                  option.label
                                                }
                                              </option>
                                            ),
                                          )}
                                        </select>
                                      </label>
                                    );
                                  },
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    );
                  },
                )}
            </div>
          </section>
        )}

        {/* -------------------------------------------------------------- */}
        {/* 4. Relevant team items                                         */}
        {/* -------------------------------------------------------------- */}

        {primaryItemIds.length >
          0 && (
          <section className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3">
            <div>
              <h3 className="text-sm font-bold text-white">
                Relevant team
                items
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                These are the
                items that can
                change the current
                recommendation.
              </p>
            </div>

            <div className="mt-2">
              {primaryItemIds.map(
                renderItemRow,
              )}
            </div>
          </section>
        )}

        {/* -------------------------------------------------------------- */}
        {/* 5. Current recommendation                                      */}
        {/* -------------------------------------------------------------- */}

        <section
          aria-live="polite"
          className="border-t border-slate-800 pt-6"
        >
          <div className="mb-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
              Current Plan
            </p>
          </div>

          {!hasMatchData ? (
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="font-bold text-white">
                Start with one
                thing you know
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Mark a found
                escape, Police
                Wagon, or a team
                item. The helper
                does not need a
                complete match log
                before it can start
                narrowing the plan.
              </p>
            </div>
          ) : bestRoute ? (
            <div className="space-y-4">
              {/* Main result */}

              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.07] p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-orange-300">
                      Best Escape
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {
                        bestRoute.routeName
                      }
                    </h3>
                  </div>

                  <span
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-bold",
                      readinessClasses(
                        bestRoute.readiness,
                      ),
                    ].join(
                      " ",
                    )}
                  >
                    {readinessLabel(
                      bestRoute.readiness,
                    )}
                  </span>
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                  {
                    result.summary
                  }
                </p>

                <div className="mt-4 rounded-xl border border-orange-500/20 bg-slate-950/60 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-300">
                    Do This Now
                  </p>

                  <p className="mt-2 text-base font-bold leading-6 text-white">
                    {
                      result.nextAction
                    }
                  </p>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Why
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {
                        bestRoute.reason
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Missing
                    </p>

                    {missingLabels.length >
                    0 ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {missingLabels.map(
                          (
                            label,
                          ) => (
                            <span
                              key={
                                label
                              }
                              className="rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-300"
                            >
                              {
                                label
                              }
                            </span>
                          ),
                        )}
                      </div>
                    ) : (
                      <p className="mt-1 text-sm text-slate-300">
                        Nothing
                        required right
                        now.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Stop searching */}

              {result.stopSearching && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-4">
                  <p className="font-bold text-emerald-300">
                    Stop searching.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-emerald-100/70">
                    The current
                    route is ready
                    for your selected
                    goal. More generic
                    escape loot is now
                    a distraction.
                  </p>
                </div>
              )}

              {/* Search next */}

              {result.searchPlans.length >
                0 && (
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <h3 className="text-sm font-bold text-white">
                    Search Next
                  </h3>

                  <div className="mt-4 space-y-5">
                    {result.searchPlans.map(
                      (plan) => {
                        const allAreas =
                          unique(
                            [
                              ...plan.nextAreas,
                              ...plan.checkedAreas,
                            ].map(
                              (
                                area,
                              ) =>
                                area.regionId,
                            ),
                          ).map(
                            (
                              regionId,
                            ) =>
                              [
                                ...plan.nextAreas,
                                ...plan.checkedAreas,
                              ].find(
                                (
                                  area,
                                ) =>
                                  area.regionId ===
                                  regionId,
                              )!,
                          );

                        return (
                          <div
                            key={
                              plan.targetKey
                            }
                          >
                            <div>
                              <p className="font-semibold text-slate-200">
                                {
                                  plan.targetLabel
                                }
                              </p>

                              <p className="mt-1 text-sm leading-6 text-slate-400">
                                {
                                  plan.nextAction
                                }
                              </p>
                            </div>

                            {allAreas.length >
                              0 && (
                              <div className="mt-3 overflow-hidden rounded-lg border border-slate-800">
                                {allAreas.map(
                                  (
                                    area,
                                    index,
                                  ) => (
                                    <div
                                      key={
                                        area.regionId
                                      }
                                      className={[
                                        "grid gap-2 px-3 py-2.5 sm:grid-cols-[minmax(0,1fr)_160px] sm:items-center",
                                        index >
                                        0
                                          ? "border-t border-slate-800"
                                          : "",
                                      ].join(
                                        " ",
                                      )}
                                    >
                                      <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <span className="text-sm text-slate-300">
                                            {
                                              area.label
                                            }
                                          </span>

                                          {area.isCurrentRegion && (
                                            <span className="rounded bg-orange-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-orange-300">
                                              Here
                                            </span>
                                          )}
                                        </div>
                                      </div>

                                      <select
                                        value={getSpawnAreaStatus(
                                          area.areaIds,
                                        )}
                                        onChange={(
                                          event,
                                        ) =>
                                          setSpawnAreaStatus(
                                            area.areaIds,
                                            event
                                              .target
                                              .value as
                                              | SpawnAreaCheckStatus
                                              | "unchecked",
                                          )
                                        }
                                        className="min-h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-2 text-sm text-slate-200 outline-none focus:border-orange-500"
                                      >
                                        <option value="unchecked">
                                          Not
                                          checked
                                        </option>

                                        <option value="checked-empty">
                                          Checked —
                                          empty
                                        </option>

                                        <option value="confirmed-active">
                                          Found here
                                        </option>
                                      </select>
                                    </div>
                                  ),
                                )}
                              </div>
                            )}

                            {plan
                              .searchTargets
                              .length >
                              0 && (
                              <div className="mt-3">
                                <p className="text-xs font-semibold text-slate-500">
                                  Check
                                  these first
                                </p>

                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {plan.searchTargets
                                    .slice(
                                      0,
                                      6,
                                    )
                                    .map(
                                      (
                                        target,
                                      ) => (
                                        <span
                                          key={
                                            target
                                          }
                                          className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-400"
                                        >
                                          {
                                            target
                                          }
                                        </span>
                                      ),
                                    )}
                                </div>
                              </div>
                            )}

                            {plan
                              .avoidTargets
                              .length >
                              0 && (
                              <p className="mt-3 text-xs leading-5 text-slate-500">
                                Low-value
                                places for
                                this search:{" "}
                                {plan.avoidTargets.join(
                                  ", ",
                                )}
                                .
                              </p>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              )}

              {/* Fallback */}

              {fallbackRoute && (
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Fallback
                    </p>

                    <span className="text-xs text-slate-500">
                      {readinessLabel(
                        fallbackRoute.readiness,
                      )}
                    </span>
                  </div>

                  <p className="mt-2 font-bold text-slate-200">
                    {
                      fallbackRoute.routeName
                    }
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {
                      fallbackRoute.reason
                    }
                  </p>
                </div>
              )}

              {/* Warnings */}

              {result.warnings.length >
                0 && (
                <details className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-300">
                    Match notes
                    and data
                    warnings
                  </summary>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-500">
                    {result.warnings.map(
                      (
                        warning,
                      ) => (
                        <li
                          key={
                            warning
                          }
                        >
                          {
                            warning
                          }
                        </li>
                      ),
                    )}
                  </ul>
                </details>
              )}
            </div>
          ) : null}
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Advanced items                                                 */}
        {/* -------------------------------------------------------------- */}

        <section>
          <details className="rounded-xl border border-slate-800 bg-slate-900/30">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-300">
              More team items
            </summary>

            <div className="border-t border-slate-800 px-4 py-2">
              <p className="py-2 text-xs leading-5 text-slate-500">
                Use this when
                your team already
                knows about an item
                that is not part of
                the current main
                route.
              </p>

              {advancedItemIds.length >
              0 ? (
                advancedItemIds.map(
                  renderItemRow,
                )
              ) : (
                <p className="py-3 text-sm text-slate-500">
                  Every relevant
                  item is already
                  shown above.
                </p>
              )}
            </div>
          </details>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Share                                                          */}
        {/* -------------------------------------------------------------- */}

        {hasMatchData &&
          bestRoute && (
          <section className="border-t border-slate-800 pt-6">
            <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] to-slate-950 p-4 sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-400">
                Share Your
                Escape Plan
              </p>

              <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div className="min-w-0">
                  <p className="text-lg font-bold text-white">
                    My Best Escape
                    is{" "}
                    {
                      bestRoute.routeName
                    }
                  </p>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                    <span>
                      Missing:{" "}
                      <strong className="font-semibold text-slate-200">
                        {missingLabels.length >
                        0
                          ? missingLabels.join(
                              ", ",
                            )
                          : "Nothing"}
                      </strong>
                    </span>

                    <span>
                      Next:{" "}
                      <strong className="font-semibold text-slate-200">
                        {getShareNextStep()}
                      </strong>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={
                      shareOnX
                    }
                    className="min-h-11 rounded-full bg-black px-5 text-sm font-bold text-white transition hover:opacity-85"
                  >
                    X&nbsp;&nbsp;Share
                  </button>

                  <button
                    type="button"
                    onClick={
                      shareOnBluesky
                    }
                    className="min-h-11 rounded-full bg-sky-500 px-5 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Share on
                    Bluesky
                  </button>

                  <button
                    type="button"
                    onClick={
                      shareOnReddit
                    }
                    className="min-h-11 rounded-full bg-orange-600 px-5 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Share on
                    Reddit
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* -------------------------------------------------------------- */}
        {/* Data note                                                      */}
        {/* -------------------------------------------------------------- */}

        <p className="border-t border-slate-800 pt-4 text-xs leading-5 text-slate-600">
          Spawn areas are
          treated as known
          observed candidates,
          not a claim that every
          possible spawn has
          already been
          documented.
        </p>
      </div>
    </div>
  );
}