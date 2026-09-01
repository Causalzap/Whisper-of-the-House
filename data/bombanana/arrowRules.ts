export type Direction =
  | "up"
  | "down"
  | "left"
  | "right";


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
  9,
] as const;


export type ArrowNumber =
  typeof arrowNumbers[number];


export type ArrowRule = {
  light: ArrowLight;
  number: ArrowNumber;
  answer: Direction;
};


/**
 * BOMBANANA Arrow / Direction module rules.
 *
 * Input:
 * - LED light color
 * - Braille number
 *
 * Output:
 * - Direction to press
 *
 * Note:
 * The Direction module uses:
 * 1, 2, 3, 4, 5, 6, 7, 9
 *
 * There is no number 8 in this module.
 */
export const arrowRules: ArrowRule[] = [

  // =========================
  // Number 1
  // =========================

  {
    light: "red",
    number: 1,
    answer: "up",
  },

  {
    light: "yellow",
    number: 1,
    answer: "down",
  },

  {
    light: "green",
    number: 1,
    answer: "left",
  },

  {
    light: "blue",
    number: 1,
    answer: "right",
  },


  // =========================
  // Number 2
  // =========================

  {
    light: "red",
    number: 2,
    answer: "right",
  },

  {
    light: "yellow",
    number: 2,
    answer: "left",
  },

  {
    light: "green",
    number: 2,
    answer: "up",
  },

  {
    light: "blue",
    number: 2,
    answer: "down",
  },


  // =========================
  // Number 3
  // =========================

  {
    light: "red",
    number: 3,
    answer: "left",
  },

  {
    light: "yellow",
    number: 3,
    answer: "up",
  },

  {
    light: "green",
    number: 3,
    answer: "right",
  },

  {
    light: "blue",
    number: 3,
    answer: "up",
  },


  // =========================
  // Number 4
  // Same pattern as 1
  // =========================

  {
    light: "red",
    number: 4,
    answer: "up",
  },

  {
    light: "yellow",
    number: 4,
    answer: "down",
  },

  {
    light: "green",
    number: 4,
    answer: "left",
  },

  {
    light: "blue",
    number: 4,
    answer: "right",
  },


  // =========================
  // Number 5
  // Same pattern as 3
  // =========================

  {
    light: "red",
    number: 5,
    answer: "left",
  },

  {
    light: "yellow",
    number: 5,
    answer: "up",
  },

  {
    light: "green",
    number: 5,
    answer: "right",
  },

  {
    light: "blue",
    number: 5,
    answer: "up",
  },


  // =========================
  // Number 6
  // =========================

  {
    light: "red",
    number: 6,
    answer: "up",
  },

  {
    light: "yellow",
    number: 6,
    answer: "right",
  },

  {
    light: "green",
    number: 6,
    answer: "down",
  },

  {
    light: "blue",
    number: 6,
    answer: "left",
  },


  // =========================
  // Number 7
  // Same pattern as 2
  // =========================

  {
    light: "red",
    number: 7,
    answer: "right",
  },

  {
    light: "yellow",
    number: 7,
    answer: "left",
  },

  {
    light: "green",
    number: 7,
    answer: "up",
  },

  {
    light: "blue",
    number: 7,
    answer: "down",
  },


  // =========================
  // Number 9
  // Same pattern as 6
  // =========================

  {
    light: "red",
    number: 9,
    answer: "up",
  },

  {
    light: "yellow",
    number: 9,
    answer: "right",
  },

  {
    light: "green",
    number: 9,
    answer: "down",
  },

  {
    light: "blue",
    number: 9,
    answer: "left",
  },

];