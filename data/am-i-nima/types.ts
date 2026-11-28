export type AmINimaEntityKind =
  | "ordinary"
  | "memory"
  | "tomato_seed"
  | "tomato_character"
  | "character_card";

export type AmINimaRecipeKind = Exclude<AmINimaEntityKind, "character_card">;

export type AmINimaEntity = {
  id: string;
  name: string;
  kind: AmINimaEntityKind;
  isStartingWord?: boolean;
};

export type AmINimaRecipe = {
  id: string;
  inputIds: readonly [string, string];
  outputIds: readonly [string, ...string[]];
  kind: AmINimaRecipeKind;
};

export type AmINimaRecipeView = AmINimaRecipe & {
  inputs: readonly [string, string];
  outputs: readonly string[];
};

export type AmINimaWordLocation = {
  id: string;
  entityId: string;
  acquisition: "object" | "story";
  method: string;
  guideHref?: string;
};

export type AmINimaWordLocationView = AmINimaWordLocation & {
  word: string;
  kind: AmINimaEntityKind;
};
