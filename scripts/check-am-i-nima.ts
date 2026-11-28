import { amINimaEntities, getAmINimaEntity } from "../data/am-i-nima/entities";
import { amINimaWords } from "../data/am-i-nima/words";
import { amINimaRecipes, amINimaRecipeViews, getAmINimaAvailableRecipes,
  getAmINimaRecipesByIngredient, getAmINimaRecipesByResult,
  searchAmINimaRecipes } from "../data/am-i-nima/word-combinations";
import { amINimaWordLocations, amINimaWordLocationViews } from "../data/am-i-nima/word-locations";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function checkUnique(ids: string[], label: string) {
  assert(ids.length === new Set(ids).size, `Duplicate ${label}`);
}

checkUnique(amINimaEntities.map((entity) => entity.id), "entity ID");
checkUnique(amINimaEntities.map((entity) => `${entity.kind}:${entity.name.toLowerCase()}`), "entity name in category");
checkUnique(amINimaRecipes.map((recipe) => recipe.id), "recipe ID");
checkUnique(amINimaWordLocations.map((location) => location.id), "location ID");
checkUnique(amINimaRecipes.map((recipe) => [...recipe.inputIds].sort().join("|")), "input pair");

for (const entity of amINimaEntities) {
  assert(entity.name.trim().length > 0, `Blank entity name: ${entity.id}`);
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entity.id), `Invalid entity ID: ${entity.id}`);
}
for (const recipe of amINimaRecipes) {
  assert(recipe.inputIds.length === 2, `Invalid input count: ${recipe.id}`);
  assert(recipe.outputIds.length > 0, `No output: ${recipe.id}`);
  checkUnique([...recipe.outputIds], `outputs in ${recipe.id}`);
  for (const id of recipe.inputIds) {
    assert(getAmINimaEntity(id), `Unknown input ${id} in ${recipe.id}`);
  }
  for (const id of recipe.outputIds) {
    const entity = getAmINimaEntity(id);
    assert(entity, `Unknown output ${id} in ${recipe.id}`);
    assert(entity.kind === recipe.kind, `Wrong output classification: ${recipe.id}`);
  }
}
for (const location of amINimaWordLocations) {
  assert(getAmINimaEntity(location.entityId), `Unknown location entity: ${location.id}`);
  assert(location.method.trim(), `Blank acquisition method: ${location.id}`);
}
assert(amINimaRecipeViews.length === amINimaRecipes.length, "Recipe view count mismatch");
assert(amINimaWordLocationViews.length === amINimaWordLocations.length, "Location view count mismatch");

// Regression tests for important supported cases, without assuming acyclic recipes.
const multi = amINimaRecipeViews.find((recipe) => recipe.id === "r11");
assert(multi && multi.outputs.join("|") === "Love|Fear|Family", "Multi-output regression");
assert(getAmINimaRecipesByResult("word-mom").length > 1, "Alternative recipes missing");
assert(getAmINimaRecipesByIngredient("memory-obsession").some((r) => r.outputIds.includes("word-power")), "Memory input lost");
assert(getAmINimaAvailableRecipes(new Set(["word-water"])).some((r) => r.outputIds.includes("word-river")), "Repeated input regression");
assert(getAmINimaAvailableRecipes(new Set()).length === 0, "Empty inventory regression");
assert(getAmINimaAvailableRecipes(new Set(["word-nima"])).every((r) => r.inputIds.every((id) => id === "word-nima")), "Missing ingredient regression");
assert(searchAmINimaRecipes("life + fossil").some((r) => r.outputIds.includes("memory-obsession")), "Recipe search regression");
assert(searchAmINimaRecipes("OBSESSION").length > 0, "Reverse search regression");
assert(!amINimaWords.some((entity) => entity.kind !== "ordinary"), "Non-ordinary entity in word list");

const counts = Object.fromEntries(["ordinary", "memory", "tomato_seed", "tomato_character", "character_card"].map((kind) => [kind, amINimaEntities.filter((entity) => entity.kind === kind).length]));
console.log("Am I Nima data checks passed.");
console.log("Entities by kind:", counts);
console.log("Recipe groups:", amINimaRecipes.length);
console.log("Result relationships:", amINimaRecipes.reduce((sum, recipe) => sum + recipe.outputIds.length, 0));
console.log("Acquisition relationships:", amINimaWordLocations.length);
