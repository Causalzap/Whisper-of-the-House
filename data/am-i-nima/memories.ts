import type { AmINimaEntity } from "./types";

// Only classified Memory entities. Other special UI labels are not included.
// Recipe relations belong to word-combinations.ts.
export const amINimaMemories: AmINimaEntity[] = [
  { id: "memory-obsession", name: "OBSESSION", kind: "memory" },
  { id: "memory-consumption", name: "CONSUMPTION", kind: "memory" },
];
