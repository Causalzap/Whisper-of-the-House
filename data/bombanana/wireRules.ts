export const wireColors = [
  "red",
  "blue",
  "green",
  "yellow",
] as const;


export type WireColor =
  typeof wireColors[number];


export const wireLights = [
  "red",
  "blue",
  "green",
  "yellow",
] as const;


export type WireLight =
  typeof wireLights[number];


export const wireCounts = [
  3,
  4,
] as const;


export type WireCount =
  typeof wireCounts[number];


export type WirePosition =
  | 1
  | 2
  | 3
  | 4;


export type WireRule = {
  count: WireCount;
  light: WireLight;
  targetColor: WireColor;
};


export type WireSolution = {
  /**
   * Physical position from left to right.
   *
   * 1 = first wire
   * 2 = second wire
   * 3 = third wire
   * 4 = fourth wire
   */
  position: WirePosition;

  /**
   * Actual wire color that should be cut.
   */
  color: WireColor;
};


export type WireSolveResult =
  | {
      ok: true;
      solution: WireSolution;
    }
  | {
      ok: false;
      error: "invalid-wire-count";
    }
  | {
      ok: false;
      error: "target-color-missing";
      targetColor: WireColor;
    }
  | {
      ok: false;
      error: "target-color-duplicated";
      targetColor: WireColor;
      positions: WirePosition[];
    };


/**
 * BOMBANANA Cable / Wire module rules.
 *
 * Rule:
 *
 * cable count
 * +
 * active light color
 * =
 * target cable color
 *
 * Cable order does not change the rule.
 * The left-to-right order only determines the
 * physical position of the target cable.
 *
 * Using a nested Record makes TypeScript verify that
 * both cable counts contain every supported LED color.
 */
export const wireRuleMap = {
  3: {
    red: "blue",
    blue: "green",
    green: "yellow",
    yellow: "red",
  },

  4: {
    red: "green",
    blue: "yellow",
    green: "red",
    yellow: "blue",
  },
} as const satisfies Record<
  WireCount,
  Record<WireLight, WireColor>
>;


/**
 * Flat representation of the rule table.
 *
 * Useful for:
 * - guide tables
 * - debugging
 * - tests
 * - existing code expecting WireRule[]
 *
 * wireRuleMap remains the single source of truth.
 */
export const wireRules: WireRule[] =
  wireCounts.flatMap(
    (count) =>
      wireLights.map(
        (light) => ({
          count,
          light,
          targetColor:
            wireRuleMap[
              count
            ][light],
        })
      )
  );


/**
 * Runtime WireCount guard.
 *
 * Useful when the count comes from UI state,
 * URL parameters, parsed data, or other untyped input.
 */
export function isWireCount(
  value: number
): value is WireCount {
  return value === 3 || value === 4;
}


/**
 * Find the target wire color.
 *
 * Example:
 *
 * getWireTargetColor(
 *   3,
 *   "red"
 * )
 *
 * => "blue"
 *
 * Because WireCount and WireLight are exhaustive types,
 * every valid input has a rule.
 */
export function getWireTargetColor(
  count: WireCount,
  light: WireLight
): WireColor {
  return wireRuleMap[count][light];
}


/**
 * Solve the wire module with detailed validation.
 *
 * Pass cable colors in physical left-to-right order.
 *
 * Unlike the backwards-compatible solveWire() helper,
 * this function tells the UI why a solve failed.
 *
 * Example:
 *
 * solveWireDetailed(
 *   ["yellow", "blue", "green"],
 *   "red"
 * )
 *
 * =>
 * {
 *   ok: true,
 *   solution: {
 *     position: 2,
 *     color: "blue"
 *   }
 * }
 */
export function solveWireDetailed(
  wires: readonly WireColor[],
  light: WireLight
): WireSolveResult {
  if (!isWireCount(wires.length)) {
    return {
      ok: false,
      error: "invalid-wire-count",
    };
  }


  const targetColor =
    getWireTargetColor(
      wires.length,
      light
    );


  const positions: WirePosition[] = [];


  wires.forEach(
    (color, index) => {
      if (color !== targetColor) {
        return;
      }

      positions.push(
        (index + 1) as WirePosition
      );
    }
  );


  if (positions.length === 0) {
    return {
      ok: false,
      error: "target-color-missing",
      targetColor,
    };
  }


  if (positions.length > 1) {
    return {
      ok: false,
      error: "target-color-duplicated",
      targetColor,
      positions,
    };
  }


  return {
    ok: true,
    solution: {
      position: positions[0],
      color: targetColor,
    },
  };
}


/**
 * Backwards-compatible wire solver.
 *
 * Existing UI code can keep using:
 *
 * const answer =
 *   solveWire(wires, light);
 *
 * Successful solve:
 *
 * {
 *   position: 2,
 *   color: "blue"
 * }
 *
 * Invalid or ambiguous state:
 *
 * null
 *
 * New UI code that needs to explain WHY the state is
 * invalid should use solveWireDetailed() instead.
 */
export function solveWire(
  wires: readonly WireColor[],
  light: WireLight
): WireSolution | null {
  const result =
    solveWireDetailed(
      wires,
      light
    );


  if (!result.ok) {
    return null;
  }


  return result.solution;
}


/**
 * Human-readable physical cable position.
 *
 * BOMBANANA currently uses only positions 1–4,
 * but the fallback keeps this helper safe if it is
 * reused elsewhere.
 */
export function getWirePositionLabel(
  position: number
): string {
  switch (position) {
    case 1:
      return "first";

    case 2:
      return "second";

    case 3:
      return "third";

    case 4:
      return "fourth";

    default:
      return getOrdinalLabel(position);
  }
}


/**
 * Generic ordinal fallback.
 *
 * Examples:
 *
 * 5  => "5th"
 * 11 => "11th"
 * 21 => "21st"
 */
function getOrdinalLabel(
  value: number
): string {
  const absolute =
    Math.abs(
      Math.trunc(value)
    );

  const lastTwo =
    absolute % 100;

  if (
    lastTwo >= 11 &&
    lastTwo <= 13
  ) {
    return `${value}th`;
  }


  switch (absolute % 10) {
    case 1:
      return `${value}st`;

    case 2:
      return `${value}nd`;

    case 3:
      return `${value}rd`;

    default:
      return `${value}th`;
  }
}