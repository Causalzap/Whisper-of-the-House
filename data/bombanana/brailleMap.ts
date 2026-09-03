export const brailleMap = {
  "⠚": 0,
  "⠁": 1,
  "⠃": 2,
  "⠉": 3,
  "⠙": 4,
  "⠑": 5,
  "⠋": 6,
  "⠛": 7,
  "⠓": 8,
  "⠊": 9,
} as const;


export type BrailleCharacter =
  keyof typeof brailleMap;


export type BrailleNumber =
  typeof brailleMap[BrailleCharacter];


export const brailleNumbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
] as const satisfies readonly BrailleNumber[];


/**
 * Reverse lookup:
 *
 * numeric digit
 * ->
 * Braille character
 *
 * Useful for UI labels, tables, tests,
 * and displaying a known number as Braille.
 */
export const brailleCharacterMap = {
  0: "⠚",
  1: "⠁",
  2: "⠃",
  3: "⠉",
  4: "⠙",
  5: "⠑",
  6: "⠋",
  7: "⠛",
  8: "⠓",
  9: "⠊",
} as const satisfies Record<
  BrailleNumber,
  BrailleCharacter
>;


/**
 * Check whether a string is one of the supported
 * Braille digit characters.
 */
export function isBrailleCharacter(
  value: string
): value is BrailleCharacter {
  return Object.prototype.hasOwnProperty.call(
    brailleMap,
    value
  );
}


/**
 * Check whether a number is a supported
 * single Braille digit from 0 through 9.
 */
export function isBrailleNumber(
  value: number
): value is BrailleNumber {
  return (
    brailleNumbers as readonly number[]
  ).includes(value);
}


/**
 * Convert a Braille character to its numeric value.
 *
 * Examples:
 *
 * getBrailleNumber("⠁")
 * => 1
 *
 * getBrailleNumber("⠓")
 * => 8
 *
 * getBrailleNumber("?")
 * => null
 */
export function getBrailleNumber(
  braille: string
): BrailleNumber | null {
  if (!isBrailleCharacter(braille)) {
    return null;
  }

  return brailleMap[braille];
}


/**
 * Convert a numeric digit to its Braille character.
 *
 * Examples:
 *
 * getBrailleCharacter(1)
 * => "⠁"
 *
 * getBrailleCharacter(8)
 * => "⠓"
 *
 * getBrailleCharacter(12)
 * => null
 */
export function getBrailleCharacter(
  value: number
): BrailleCharacter | null {
  if (!isBrailleNumber(value)) {
    return null;
  }

  return brailleCharacterMap[value];
}


/**
 * Safe runtime conversion when the source may be
 * either a Braille character or a numeric digit.
 *
 * Useful for parsed input, stored values, or future
 * Solver UI where the input format may vary.
 */
export function parseBrailleNumber(
  value: string | number
): BrailleNumber | null {
  if (
    typeof value === "number"
  ) {
    return isBrailleNumber(value)
      ? value
      : null;
  }

  return getBrailleNumber(value);
}