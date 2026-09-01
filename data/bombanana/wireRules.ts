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
  
  
  export type WireCount =
    | 3
    | 4;
  
  
  export type WireRule = {
    count: WireCount;
    light: WireLight;
    targetColor: WireColor;
  };
  
  
  export type WireSolution = {
    /**
     * 1-based position:
     * 1 = first wire
     * 2 = second wire
     * etc.
     */
    position: number;
  
    /**
     * Actual color that should be cut.
     */
    color: WireColor;
  };
  
  
  /**
   * BOMBANANA Wire module rules.
   *
   * Rule:
   *
   * number of wires
   * +
   * light color
   * =
   * wire color to cut
   *
   * The physical wire order does NOT change the rule.
   * It only determines which position the target color is in.
   */
  export const wireRules: WireRule[] = [
  
    // =========================
    // 3 wires
    // =========================
  
    {
      count: 3,
      light: "red",
      targetColor: "blue",
    },
  
    {
      count: 3,
      light: "blue",
      targetColor: "green",
    },
  
    {
      count: 3,
      light: "green",
      targetColor: "yellow",
    },
  
    {
      count: 3,
      light: "yellow",
      targetColor: "red",
    },
  
  
    // =========================
    // 4 wires
    // =========================
  
    {
      count: 4,
      light: "red",
      targetColor: "green",
    },
  
    {
      count: 4,
      light: "blue",
      targetColor: "yellow",
    },
  
    {
      count: 4,
      light: "green",
      targetColor: "red",
    },
  
    {
      count: 4,
      light: "yellow",
      targetColor: "blue",
    },
  
  ];
  
  
  /**
   * Find the target wire color.
   *
   * Example:
   *
   * getWireTargetColor(3, "red")
   *
   * => "blue"
   */
  export function getWireTargetColor(
    count: WireCount,
    light: WireLight
  ): WireColor | null {
  
    const rule = wireRules.find(
      (rule) =>
        rule.count === count &&
        rule.light === light
    );
  
  
    return rule?.targetColor ?? null;
  
  }
  
  
  /**
   * Solve the complete wire module.
   *
   * Pass wires in left-to-right order.
   *
   * Example:
   *
   * solveWire(
   *   ["yellow", "blue", "green"],
   *   "red"
   * )
   *
   * =>
   * {
   *   position: 2,
   *   color: "blue"
   * }
   */
  export function solveWire(
    wires: WireColor[],
    light: WireLight
  ): WireSolution | null {
  
    if (
      wires.length !== 3 &&
      wires.length !== 4
    ) {
      return null;
    }
  
  
    const targetColor =
      getWireTargetColor(
        wires.length as WireCount,
        light
      );
  
  
    if (!targetColor) {
      return null;
    }
  
  
    const index =
      wires.indexOf(targetColor);
  
  
    if (index === -1) {
      return null;
    }
  
  
    return {
      position: index + 1,
      color: targetColor,
    };
  
  }
  
  
  /**
   * Human-readable wire position.
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
        return `${position}th`;
  
    }
  
  }