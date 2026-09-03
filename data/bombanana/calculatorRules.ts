export const calculatorLights = [
  "red",
  "blue",
  "green",
  "yellow",
] as const;


export type CalculatorLight =
  typeof calculatorLights[number];


export const calculatorParities = [
  "odd",
  "even",
] as const;


export type Parity =
  typeof calculatorParities[number];


export type CalculatorKey =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9;


export type CalculatorOperator =
  | "+"
  | "-";


export type CalculatorRule = {
  light: CalculatorLight;
  parity: Parity;
  answer: CalculatorKey;
};


export type CalculatorEquationStage = {
  /**
   * Raw arithmetic result entered first.
   */
  result: number;

  /**
   * Odd/even state of the raw result.
   * This is used only after the LED appears.
   */
  parity: Parity;
};


export type CalculatorFinalStage = {
  /**
   * Raw result already entered into the module.
   */
  result: number;

  /**
   * Odd/even state of the raw result.
   */
  parity: Parity;

  /**
   * LED shown after the raw result is accepted.
   */
  light: CalculatorLight;

  /**
   * Final single keypad digit.
   */
  answer: CalculatorKey;
};


/**
 * BOMBANANA Calculator module rule table.
 *
 * The game flow is:
 *
 * 1. Solve the equation.
 * 2. Enter the raw result.
 * 3. Wait for the colored LED to appear.
 * 4. Classify the raw result as odd or even.
 * 5. Use parity + LED to get the final keypad digit.
 *
 * Keeping the rules in a nested Record makes TypeScript
 * verify that every parity has every supported LED color.
 */
export const calculatorRuleMap = {
  odd: {
    red: 3,
    blue: 0,
    green: 2,
    yellow: 7,
  },

  even: {
    red: 5,
    blue: 1,
    green: 9,
    yellow: 0,
  },
} as const satisfies Record<
  Parity,
  Record<CalculatorLight, CalculatorKey>
>;


/**
 * Flat version of the same rule data.
 *
 * Keep this export for tables, debugging, tests,
 * or any existing code that expects CalculatorRule[].
 *
 * calculatorRuleMap remains the single source of truth.
 */
export const calculatorRules: CalculatorRule[] =
  calculatorParities.flatMap(
    (parity) =>
      calculatorLights.map(
        (light) => ({
          light,
          parity,
          answer:
            calculatorRuleMap[
              parity
            ][light],
        })
      )
  );


/**
 * Calculate the raw arithmetic result.
 *
 * This is Stage 1 of the Calculator module.
 *
 * Example:
 *
 * calculateResult(55, 2, "+")
 *
 * => 57
 */
export function calculateResult(
  a: number,
  b: number,
  operator: CalculatorOperator
): number {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;
  }
}


/**
 * Return whether an integer is odd or even.
 *
 * Negative values are handled correctly as well.
 *
 * Examples:
 *
 * getParity(57)  => "odd"
 * getParity(28)  => "even"
 * getParity(-3)  => "odd"
 */
export function getParity(
  value: number
): Parity {
  return Math.abs(value) % 2 === 0
    ? "even"
    : "odd";
}


/**
 * Find the final keypad digit from
 * the LED color and raw-result parity.
 *
 * This function keeps the previous nullable return
 * type so existing Solver code can continue handling
 * a failed lookup safely.
 *
 * With valid typed inputs, every combination is covered.
 *
 * Examples:
 *
 * getCalculatorAnswer("red", "odd")
 * => 3
 *
 * getCalculatorAnswer("yellow", "even")
 * => 0
 */
export function getCalculatorAnswer(
  light: CalculatorLight,
  parity: Parity
): CalculatorKey | null {
  return (
    calculatorRuleMap[
      parity
    ]?.[light] ?? null
  );
}


/**
 * Stage 1:
 *
 * Solve the equation before the LED exists.
 *
 * Example:
 *
 * solveCalculatorEquation(
 *   55,
 *   2,
 *   "+"
 * )
 *
 * =>
 * {
 *   result: 57,
 *   parity: "odd"
 * }
 *
 * The player should enter 57 into the module,
 * then read the LED that appears afterward.
 */
export function solveCalculatorEquation(
  a: number,
  b: number,
  operator: CalculatorOperator
): CalculatorEquationStage {
  const result =
    calculateResult(
      a,
      b,
      operator
    );

  return {
    result,
    parity:
      getParity(result),
  };
}


/**
 * Stage 2:
 *
 * Call this only after the raw result has been accepted
 * and the Calculator shows its colored LED.
 *
 * Example:
 *
 * solveCalculatorFinalStage(
 *   57,
 *   "red"
 * )
 *
 * =>
 * {
 *   result: 57,
 *   parity: "odd",
 *   light: "red",
 *   answer: 3
 * }
 */
export function solveCalculatorFinalStage(
  result: number,
  light: CalculatorLight
): CalculatorFinalStage | null {
  const parity =
    getParity(result);

  const answer =
    getCalculatorAnswer(
      light,
      parity
    );

  if (answer === null) {
    return null;
  }

  return {
    result,
    parity,
    light,
    answer,
  };
}


/**
 * Convenience helper for tests, tools,
 * or cases where both stages are already known.
 *
 * IMPORTANT:
 *
 * During a real BOMBANANA solve, the LED does not
 * belong to the initial equation state. The player
 * enters the raw result first, then reads the LED.
 *
 * Prefer:
 *
 * solveCalculatorEquation(...)
 *
 * followed by:
 *
 * solveCalculatorFinalStage(...)
 *
 * for UI flows that mirror the actual module.
 *
 * This function is retained for backwards compatibility.
 *
 * Example:
 *
 * solveCalculator(
 *   54,
 *   6,
 *   "+",
 *   "green"
 * )
 *
 * =>
 * {
 *   result: 60,
 *   parity: "even",
 *   answer: 9
 * }
 */
export function solveCalculator(
  a: number,
  b: number,
  operator: CalculatorOperator,
  light: CalculatorLight
): {
  result: number;
  parity: Parity;
  answer: CalculatorKey | null;
} {
  const {
    result,
    parity,
  } =
    solveCalculatorEquation(
      a,
      b,
      operator
    );

  const answer =
    getCalculatorAnswer(
      light,
      parity
    );

  return {
    result,
    parity,
    answer,
  };
}