import type { AmINimaRecipe, AmINimaRecipeView } from "./types";
import { requireAmINimaEntity } from "./entities";

// Known result relationships. Input order is retained; multiple outputs
// need not be simultaneous. Availability can depend on the current game state.
// IDs retain their V0.3.1 research record identifiers for stable references.
export const amINimaRecipes: AmINimaRecipe[] = [
  { id: "r01", inputIds: ["word-fear", "word-sad"], outputIds: ["word-isolation"], kind: "ordinary" },
  { id: "r02", inputIds: ["word-family", "word-isolation"], outputIds: ["word-dad"], kind: "ordinary" },
  { id: "r03", inputIds: ["word-lonely", "word-dad"], outputIds: ["word-grief"], kind: "ordinary" },
  { id: "r04", inputIds: ["word-stranger", "word-grief"], outputIds: ["word-lonely"], kind: "ordinary" },
  { id: "r05", inputIds: ["word-grief", "word-lonely"], outputIds: ["word-isolation"], kind: "ordinary" },
  { id: "r06", inputIds: ["word-nima", "word-isolation"], outputIds: ["word-mom"], kind: "ordinary" },
  { id: "r07", inputIds: ["word-hungry", "word-congee"], outputIds: ["word-disgust"], kind: "ordinary" },
  { id: "r08", inputIds: ["word-grief", "word-dad"], outputIds: ["word-sad"], kind: "ordinary" },
  { id: "r09", inputIds: ["word-grief", "word-dream"], outputIds: ["word-dad"], kind: "ordinary" },
  { id: "r10", inputIds: ["word-nima", "word-stranger"], outputIds: ["word-mom"], kind: "ordinary" },
  { id: "r11", inputIds: ["word-nima", "word-mom"], outputIds: ["word-love", "word-fear", "word-family"], kind: "ordinary" },
  { id: "r14", inputIds: ["word-friend", "word-plush"], outputIds: ["seed-tomato-boy"], kind: "tomato_seed" },
  { id: "v31-r001", inputIds: ["word-lonely", "word-love"], outputIds: ["word-mom"], kind: "ordinary" },
  { id: "v31-r002", inputIds: ["word-dad", "word-family"], outputIds: ["word-mom", "word-nima"], kind: "ordinary" },
  { id: "v31-r003", inputIds: ["word-mom", "word-disgust"], outputIds: ["word-food"], kind: "ordinary" },
  { id: "v31-r004", inputIds: ["word-nima", "word-disgust"], outputIds: ["word-nima"], kind: "ordinary" },
  { id: "v31-r005", inputIds: ["word-fish", "word-dad"], outputIds: ["word-james-pond"], kind: "ordinary" },
  { id: "v31-r006", inputIds: ["word-heart", "word-trophy"], outputIds: ["word-pride"], kind: "ordinary" },
  { id: "v31-r007", inputIds: ["word-judgement", "word-power"], outputIds: ["word-hate"], kind: "ordinary" },
  { id: "v31-r008", inputIds: ["word-science", "word-hungry"], outputIds: ["word-food"], kind: "ordinary" },
  { id: "v31-r009", inputIds: ["word-mom", "word-pretend"], outputIds: ["word-happy"], kind: "ordinary" },
  { id: "v31-r010", inputIds: ["word-pretend", "word-happy"], outputIds: ["word-sad"], kind: "ordinary" },
  { id: "v31-r011", inputIds: ["word-doubt", "word-sad"], outputIds: ["word-repression"], kind: "ordinary" },
  { id: "v31-r012", inputIds: ["word-experiment", "word-punishment"], outputIds: ["word-scientist"], kind: "ordinary" },
  { id: "v31-r013", inputIds: ["word-indulgence", "word-painkillers"], outputIds: ["word-death"], kind: "ordinary" },
  { id: "v31-r014", inputIds: ["word-ego", "word-philosophy"], outputIds: ["word-narcissism"], kind: "ordinary" },
  { id: "v31-r015", inputIds: ["word-nima", "word-narcissism"], outputIds: ["word-god"], kind: "ordinary" },
  { id: "v31-r016", inputIds: ["word-mom", "word-narcissism"], outputIds: ["word-monster"], kind: "ordinary" },
  { id: "v31-r017", inputIds: ["memory-obsession", "word-god"], outputIds: ["word-power"], kind: "ordinary" },
  { id: "v31-r018", inputIds: ["word-mom", "word-dissonance"], outputIds: ["word-hate", "word-love"], kind: "ordinary" },
  { id: "v31-r019", inputIds: ["word-ideal", "word-narcissism"], outputIds: ["word-nima"], kind: "ordinary" },
  { id: "v31-r020", inputIds: ["word-hungry", "word-nima"], outputIds: ["word-food"], kind: "ordinary" },
  { id: "v31-r021", inputIds: ["word-stranger", "word-sad"], outputIds: ["word-mom"], kind: "ordinary" },
  { id: "v31-r022", inputIds: ["word-love", "word-mom"], outputIds: ["word-work"], kind: "ordinary" },
  { id: "v31-r023", inputIds: ["word-grief", "word-work"], outputIds: ["word-science"], kind: "ordinary" },
  { id: "v31-r024", inputIds: ["word-mom", "word-lonely"], outputIds: ["word-dad"], kind: "ordinary" },
  { id: "v31-r025", inputIds: ["word-love", "word-dad"], outputIds: ["word-water"], kind: "ordinary" },
  { id: "v31-r026", inputIds: ["word-water", "word-water"], outputIds: ["word-river"], kind: "ordinary" },
  { id: "v31-r027", inputIds: ["word-lonely", "word-river"], outputIds: ["word-nima"], kind: "ordinary" },
  { id: "v31-r028", inputIds: ["word-stranger", "word-judgement"], outputIds: ["word-predator"], kind: "ordinary" },
  { id: "v31-r029", inputIds: ["word-mom", "word-envy"], outputIds: ["word-forgiveness"], kind: "ordinary" },
  { id: "v31-r030", inputIds: ["word-mom", "word-forgiveness"], outputIds: ["word-shame"], kind: "ordinary" },
  { id: "v31-r031", inputIds: ["word-shame", "word-memory"], outputIds: ["word-disappointment"], kind: "ordinary" },
  { id: "v31-r032", inputIds: ["word-ghost", "word-ego"], outputIds: ["word-afterlife"], kind: "ordinary" },
  { id: "v31-r033", inputIds: ["word-nima", "word-corpse"], outputIds: ["word-birth"], kind: "ordinary" },
  { id: "v31-r034", inputIds: ["word-nima", "word-remnant"], outputIds: ["word-mind", "word-body", "word-ghost"], kind: "ordinary" },
  { id: "v31-r035", inputIds: ["word-mind", "word-body"], outputIds: ["word-death"], kind: "ordinary" },
  { id: "v31-r036", inputIds: ["word-hospital", "word-regret"], outputIds: ["word-escape"], kind: "ordinary" },
  { id: "v31-r037", inputIds: ["word-escape", "word-coffin"], outputIds: ["word-zombie"], kind: "ordinary" },
  { id: "v31-r038", inputIds: ["word-zombie", "word-corpse"], outputIds: ["word-rebirth"], kind: "ordinary" },
  { id: "v31-r039", inputIds: ["word-joke", "word-dad"], outputIds: ["word-judgement", "word-pain"], kind: "ordinary" },
  { id: "v31-r040", inputIds: ["word-nima", "word-book"], outputIds: ["word-school"], kind: "ordinary" },
  { id: "v31-r041", inputIds: ["word-school", "word-fossil"], outputIds: ["word-science"], kind: "ordinary" },
  { id: "v31-r042", inputIds: ["word-fossil", "word-science"], outputIds: ["word-present", "word-pride"], kind: "ordinary" },
  { id: "v31-r043", inputIds: ["word-dad", "word-afterlife"], outputIds: ["word-embryo"], kind: "ordinary" },
  { id: "v31-r044", inputIds: ["word-mom", "word-dad"], outputIds: ["word-family"], kind: "ordinary" },
  { id: "v31-r046", inputIds: ["word-family", "word-indulgence"], outputIds: ["word-aquarium"], kind: "ordinary" },
  { id: "v31-r047", inputIds: ["word-homicide", "word-mom"], outputIds: ["word-nima"], kind: "ordinary" },
  { id: "v31-r048", inputIds: ["word-cambrian-era", "word-burgess-shale"], outputIds: ["word-home"], kind: "ordinary" },
  { id: "v31-r049", inputIds: ["word-mom", "word-heart"], outputIds: ["word-hate", "word-love"], kind: "ordinary" },
  { id: "v31-r050", inputIds: ["word-hate", "word-love"], outputIds: ["word-mirror"], kind: "ordinary" },
  { id: "v31-r051", inputIds: ["word-pearl", "word-retirement-home"], outputIds: ["word-stranger"], kind: "ordinary" },
  { id: "v31-r052", inputIds: ["word-forgotten", "word-reality"], outputIds: ["word-happy"], kind: "ordinary" },
  { id: "v31-r053", inputIds: ["word-mom", "word-pain"], outputIds: ["word-nima"], kind: "ordinary" },
  { id: "v31-r054", inputIds: ["seed-tomato-boy", "word-dad"], outputIds: ["tomato-tomato-pop"], kind: "tomato_character" },
  { id: "v31-r055", inputIds: ["seed-tomato-boy", "word-work"], outputIds: ["tomato-pear-boy"], kind: "tomato_character" },
  { id: "v31-r056", inputIds: ["word-life", "word-fossil"], outputIds: ["memory-obsession"], kind: "memory" },
  { id: "v31-r057", inputIds: ["word-pride", "word-guilt"], outputIds: ["memory-consumption"], kind: "memory" },
];

export const amINimaRecipeViews: AmINimaRecipeView[] = amINimaRecipes.map(
  (recipe) => ({
    ...recipe,
    inputs: [
      requireAmINimaEntity(recipe.inputIds[0]).name,
      requireAmINimaEntity(recipe.inputIds[1]).name,
    ],
    outputs: recipe.outputIds.map((id) => requireAmINimaEntity(id).name),
  })
);

export function getAmINimaRecipesByIngredient(id: string): AmINimaRecipeView[] {
  return amINimaRecipeViews.filter((recipe) => recipe.inputIds.includes(id));
}

export function getAmINimaRecipesByResult(id: string): AmINimaRecipeView[] {
  return amINimaRecipeViews.filter((recipe) => recipe.outputIds.includes(id));
}

// Ingredient match only: not a guarantee of in-game availability.
// Repeated ingredients (e.g. Water + Water) are allowed.
export function getAmINimaAvailableRecipes(
  ownedIds: ReadonlySet<string>
): AmINimaRecipeView[] {
  return amINimaRecipeViews.filter((recipe) =>
    recipe.inputIds.every((id) => ownedIds.has(id))
  );
}

export function searchAmINimaRecipes(query: string): AmINimaRecipeView[] {
  const terms = query.trim().toLowerCase().split(/\s*\+\s*|\s+/).filter(Boolean);
  return amINimaRecipeViews.filter((recipe) => {
    const text = [...recipe.inputs, ...recipe.outputs].join(" ").toLowerCase();
    return terms.every((term) => text.includes(term));
  });
}
