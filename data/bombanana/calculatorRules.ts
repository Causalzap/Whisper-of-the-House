export const calculatorLights = [
    "red",
    "blue",
    "green",
    "yellow",
  ] as const;
  
  
  export type CalculatorLight =
    typeof calculatorLights[number];
  
  
  export type Parity =
    | "odd"
    | "even";
  
  
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
  
  
  /**
   * BOMBANANA Calculator / Numpad module rules.
   *
   * Flow:
   *
   * 1. Solve the arithmetic expression.
   * 2. Enter the raw result on the keypad.
   * 3. A colored light appears.
   * 4. Determine whether the result is odd or even.
   * 5. Use light + parity to find the final keypad digit.
   */
  export const calculatorRules: CalculatorRule[] = [
  
    // =========================
    // Odd
    // =========================
  
    {
      light: "red",
      parity: "odd",
      answer: 3,
    },
  
    {
      light: "green",
      parity: "odd",
      answer: 2,
    },
  
    {
      light: "blue",
      parity: "odd",
      answer: 0,
    },
  
    {
      light: "yellow",
      parity: "odd",
      answer: 7,
    },
  
  
    // =========================
    // Even
    // =========================
  
    {
      light: "red",
      parity: "even",
      answer: 5,
    },
  
    {
      light: "green",
      parity: "even",
      answer: 9,
    },
  
    {
      light: "blue",
      parity: "even",
      answer: 1,
    },
  
    {
      light: "yellow",
      parity: "even",
      answer: 0,
    },
  
  ];
  
  
  /**
   * Calculate the raw arithmetic result.
   */
  export function calculateResult(
    a: number,
    b: number,
    operator: CalculatorOperator
  ): number {
  
    if (operator === "+") {
      return a + b;
    }
  
    return a - b;
  
  }
  
  
  /**
   * Return whether a number is odd or even.
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
   * the light color and result parity.
   */
  export function getCalculatorAnswer(
    light: CalculatorLight,
    parity: Parity
  ): CalculatorKey | null {
  
    const rule = calculatorRules.find(
      (rule) =>
        rule.light === light &&
        rule.parity === parity
    );
  
    return rule?.answer ?? null;
  
  }
  
  
  /**
   * Complete calculator solve helper.
   *
   * Example:
   *
   * solveCalculator(54, 6, "+", "green")
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
  ) {
  
    const result =
      calculateResult(
        a,
        b,
        operator
      );
  
  
    const parity =
      getParity(result);
  
  
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