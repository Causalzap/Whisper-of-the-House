export const directions = [
  "up",
  "down",
  "left",
  "right",
] as const;


export type Direction =
  typeof directions[number];


export const arrowLights = [
  "red",
  "blue",
  "green",
  "yellow",
] as const;


export type ArrowLight =
  typeof arrowLights[number];


export const arrowNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
] as const;


export type ArrowNumber =
  typeof arrowNumbers[number];


export type ArrowRule = {
  light: ArrowLight;
  number: ArrowNumber;
  answer: Direction;
};


export type ArrowSolution = {
  light: ArrowLight;
  number: ArrowNumber;
  direction: Direction;
};


export type ArrowSolveResult =
  | {
      ok: true;
      solution: ArrowSolution;
    }
  | {
      ok: false;
      error: "unsupported-braille-number";
      number: number;
    };


/**
 * BOMBANANA Arrow / Direction module rules.
 *
 * Input:
 *
 * active LED
 * +
 * current Braille number
 * =
 * direction to press
 *
 * Supported Direction numbers:
 *
 * 1, 2, 3, 4, 5, 6, 7, 9
 *
 * Number 8 is not used by this module.
 *
 * The nested Record makes TypeScript verify that
 * every supported number contains every LED color.
 */
export const arrowRuleMap = {
  1: {
    red: "up",
    blue: "right",
    green: "left",
    yellow: "down",
  },

  2: {
    red: "right",
    blue: "down",
    green: "up",
    yellow: "left",
  },

  3: {
    red: "left",
    blue: "up",
    green: "right",
    yellow: "up",
  },

  4: {
    red: "up",
    blue: "right",
    green: "left",
    yellow: "down",
  },

  5: {
    red: "left",
    blue: "up",
    green: "right",
    yellow: "up",
  },

  6: {
    red: "up",
    blue: "left",
    green: "down",
    yellow: "right",
  },

  7: {
    red: "right",
    blue: "down",
    green: "up",
    yellow: "left",
  },

  8: {
    red: "up",
    blue: "left",
    green: "down",
    yellow: "right",
  },

  9: {
    red: "up",
    blue: "left",
    green: "down",
    yellow: "right",
  },
} as const satisfies Record<
  ArrowNumber,
  Record<ArrowLight, Direction>
>;


/**
 * Flat representation of the Direction rules.
 *
 * Keep this export for:
 *
 * - existing Solver code
 * - guide tables
 * - debugging
 * - tests
 *
 * arrowRuleMap remains the single source of truth.
 */
export const arrowRules: ArrowRule[] =
  arrowNumbers.flatMap(
    (number) =>
      arrowLights.map(
        (light) => ({
          light,
          number,
          answer:
            arrowRuleMap[
              number
            ][light],
        })
      )
  );


/**
 * Runtime guard for Direction-module Braille numbers.
 *
 * Important:
 *
 * Generic Braille can represent other digits,
 * including 8, but the Direction module only
 * accepts the numbers listed in arrowNumbers.
 */
export function isArrowNumber(
  value: number
): value is ArrowNumber {
  return (
    arrowNumbers as readonly number[]
  ).includes(value);
}


/**
 * Return the direction for one valid Direction state.
 *
 * Example:
 *
 * getArrowDirection(
 *   "green",
 *   2
 * )
 *
 * => "up"
 *
 * With typed inputs, every combination has a rule,
 * so there is no nullable result.
 */
export function getArrowDirection(
  light: ArrowLight,
  number: ArrowNumber
): Direction {
  return arrowRuleMap[number][light];
}


/**
 * Solve a Direction state when the number may come
 * from runtime input rather than a typed select.
 *
 * This is useful when the value comes from:
 *
 * - Braille conversion
 * - URL/search parameters
 * - stored state
 * - parsed user input
 *
 * Unsupported numbers return a specific error instead
 * of being cast to ArrowNumber.
 *
 * Example:
 *
 * solveArrowDetailed(
 *   "red",
 *   8
 * )
 *
 * =>
 * {
 *   ok: false,
 *   error: "unsupported-braille-number",
 *   number: 8
 * }
 */
export function solveArrowDetailed(
  light: ArrowLight,
  number: number
): ArrowSolveResult {
  if (!isArrowNumber(number)) {
    return {
      ok: false,
      error: "unsupported-braille-number",
      number,
    };
  }


  return {
    ok: true,
    solution: {
      light,
      number,
      direction:
        getArrowDirection(
          light,
          number
        ),
    },
  };
}


/**
 * Small convenience helper for code that already has
 * a valid ArrowNumber.
 *
 * Example:
 *
 * solveArrow(
 *   "blue",
 *   9
 * )
 *
 * => "left"
 */
export function solveArrow(
  light: ArrowLight,
  number: ArrowNumber
): Direction {
  return getArrowDirection(
    light,
    number
  );
}


/**
 * Human-readable Direction label.
 *
 * Useful for Solver output without duplicating
 * direction labels inside the React component.
 */
export function getDirectionLabel(
  direction: Direction
): string {
  switch (direction) {
    case "up":
      return "↑ Up";

    case "down":
      return "↓ Down";

    case "left":
      return "← Left";

    case "right":
      return "→ Right";
  }
}