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
  
  
  /**
   * Convert a Braille character to its numeric value.
   *
   * Returns null when the character is not supported.
   */
  export function getBrailleNumber(
    braille: string
  ): BrailleNumber | null {
    if (braille in brailleMap) {
      return brailleMap[
        braille as BrailleCharacter
      ];
    }
  
    return null;
  }