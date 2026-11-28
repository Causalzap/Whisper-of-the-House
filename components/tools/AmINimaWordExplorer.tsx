"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { amINimaEntities } from "@/data/am-i-nima/entities";
import {
  amINimaRecipeViews,
  getAmINimaAvailableRecipes,
  getAmINimaRecipesByResult,
  searchAmINimaRecipes,
} from "@/data/am-i-nima/word-combinations";
import { getAmINimaWordLocations } from "@/data/am-i-nima/word-locations";
import type {
  AmINimaEntityKind,
  AmINimaRecipeKind,
} from "@/data/am-i-nima/types";

const STORAGE_KEY = "am-i-nima-word-explorer-v1";
const VALID_IDS = new Set(amINimaEntities.map((entity) => entity.id));
const ENTITIES = [...amINimaEntities].sort((a, b) =>
  a.name.localeCompare(b.name, "en")
);

const KIND_LABELS: Record<AmINimaEntityKind, string> = {
  ordinary: "Words",
  memory: "Memories",
  tomato_seed: "Tomato seed",
  tomato_character: "Tomato characters",
  character_card: "Other character cards",
};

const KINDS: AmINimaEntityKind[] = [
  "ordinary", "memory", "tomato_seed", "tomato_character", "character_card",
];

const RECIPE_KINDS: AmINimaRecipeKind[] = [
  "ordinary", "memory", "tomato_seed", "tomato_character",
];

type Tab = "recipes" | "collection";
type SearchMode = "all" | "ingredient" | "result";
type CollectionStatus = "all" | "missing" | "collected";

const INPUT_CLASS =
  "w-full min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200";
const BUTTON_CLASS =
  "rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500";

function FilterButton({ active, children, onClick }: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`${BUTTON_CLASS} ${active ? "!border-slate-950 !bg-slate-950 !text-white" : ""}`}
    >
      {children}
    </button>
  );
}

export default function AmINimaWordExplorer() {
  const [ownedIds, setOwnedIds] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const [edited, setEdited] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [tab, setTab] = useState<Tab>("recipes");
  const [recipeQuery, setRecipeQuery] = useState("");
  const [searchMode, setSearchMode] = useState<SearchMode>("all");
  const [exactResultId, setExactResultId] = useState<string | null>(null);
  const [recipeKind, setRecipeKind] = useState<"all" | AmINimaRecipeKind>("all");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [newResultsOnly, setNewResultsOnly] = useState(false);
  const [collectionQuery, setCollectionQuery] = useState("");
  const [collectionKind, setCollectionKind] = useState<"all" | AmINimaEntityKind>("ordinary");
  const [collectionStatus, setCollectionStatus] = useState<CollectionStatus>("all");

  // Never write an empty initial state over an existing save. A write is
  // permitted only after hydration AND an explicit collection edit.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        const parsed: unknown = JSON.parse(saved);
        if (!Array.isArray(parsed)) throw new Error("Invalid collection save");
        setOwnedIds(new Set(parsed.filter(
          (id): id is string => typeof id === "string" && VALID_IDS.has(id)
        )));
      }
    } catch {
      setStorageError(true);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || !edited) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...ownedIds]));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [ownedIds, hydrated, edited]);

  const progress = useMemo(() => KINDS.map((kind) => {
    const entries = ENTITIES.filter((entity) => entity.kind === kind);
    return {
      kind,
      total: entries.length,
      collected: entries.filter((entity) => ownedIds.has(entity.id)).length,
    };
  }), [ownedIds]);

  const availableRecipeIds = useMemo(() => new Set(
    getAmINimaAvailableRecipes(ownedIds).map((recipe) => recipe.id)
  ), [ownedIds]);

  const filteredRecipes = useMemo(() => {
    const q = recipeQuery.trim().toLowerCase();
    const terms = q.split(/\s*\+\s*|\s+/).filter(Boolean);
    const matches = exactResultId
      ? getAmINimaRecipesByResult(exactResultId)
      : searchMode === "all"
      ? searchAmINimaRecipes(q)
      : amINimaRecipeViews.filter((recipe) => {
        if (!q) return true;
        if (searchMode === "result") {
          return recipe.outputs.some((name) => name.toLowerCase().includes(q));
        }
        const inputText = recipe.inputs.join(" ").toLowerCase();
        return terms.every((term) => inputText.includes(term));
      });
    return matches.filter((recipe) =>
      (recipeKind === "all" || recipe.kind === recipeKind) &&
      (!availableOnly || availableRecipeIds.has(recipe.id)) &&
      (!newResultsOnly || recipe.outputIds.some((id) => !ownedIds.has(id)))
    );
  }, [recipeQuery, searchMode, exactResultId, recipeKind, availableOnly, newResultsOnly, availableRecipeIds, ownedIds]);

  const filteredEntities = useMemo(() => {
    const q = collectionQuery.trim().toLowerCase();
    return ENTITIES.filter((entity) => {
      if (collectionKind !== "all" && entity.kind !== collectionKind) return false;
      if (collectionStatus === "missing" && ownedIds.has(entity.id)) return false;
      if (collectionStatus === "collected" && !ownedIds.has(entity.id)) return false;
      return entity.name.toLowerCase().includes(q);
    });
  }, [collectionQuery, collectionKind, collectionStatus, ownedIds]);

  function toggleOwned(id: string) {
    if (!hydrated || !VALID_IDS.has(id)) return;
    setEdited(true);
    setOwnedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function markStartingWords() {
    if (!hydrated) return;
    setEdited(true);
    setOwnedIds((current) => {
      const next = new Set(current);
      for (const entity of ENTITIES) {
        if (entity.isStartingWord) next.add(entity.id);
      }
      return next;
    });
  }

  function resetProgress() {
    if (!hydrated || !window.confirm("Reset all word explorer collection progress in this browser?")) return;
    setEdited(true);
    setOwnedIds(new Set());
  }

  function findRecipes(id: string, name: string) {
    setExactResultId(id);
    setRecipeQuery(name);
    setSearchMode("result");
    setRecipeKind("all");
    setAvailableOnly(false);
    setNewResultsOnly(false);
    setTab("recipes");
  }

  function clearRecipeFilters() {
    setExactResultId(null);
    setRecipeQuery("");
    setSearchMode("all");
    setRecipeKind("all");
    setAvailableOnly(false);
    setNewResultsOnly(false);
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="border-b border-slate-200 p-4 md:p-5">
        <h3 className="text-lg font-bold tracking-tight text-slate-950 md:text-xl">
          Word Recipe Finder &amp; Collection Tracker
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Browse {amINimaRecipeViews.length} known combinations. Mark the discoveries
          you actually have in the game, then find recipes using your marked ingredients.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
          {progress.map(({ kind, total, collected }) => (
            <div key={kind} className="min-w-0 rounded-xl border border-slate-200 p-3">
              <p className="text-xs font-medium leading-5 text-slate-600">{KIND_LABELS[kind]}</p>
              <p className="mt-1 text-lg font-bold tabular-nums text-slate-950" aria-live="polite">
                {collected} / {total}
              </p>
              <div
                role="progressbar"
                aria-label={`${KIND_LABELS[kind]} marked in this list`}
                aria-valuemin={0}
                aria-valuemax={Math.max(total, 1)}
                aria-valuenow={collected}
                className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"
              >
                <div className="h-full rounded-full bg-slate-950" style={{ width: `${total ? collected / total * 100 : 0}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Counts refer only to entries listed here, not in-game achievement completion.
          Other character cards are kept separate from Tomato characters.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className={`text-xs ${storageError ? "text-amber-800" : "text-slate-500"}`} role="status">
            {!hydrated ? "Loading collection…" : storageError
              ? "Browser storage could not be read or saved. Progress may not persist."
              : "Progress saved in this browser. No login required."}
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={BUTTON_CLASS} disabled={!hydrated} onClick={markStartingWords}>
              Mark starting words
            </button>
            <button type="button" className={BUTTON_CLASS} disabled={!hydrated} onClick={resetProgress}>Reset progress</button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Word explorer view">
          <FilterButton active={tab === "recipes"} onClick={() => setTab("recipes")}>Recipe Finder</FilterButton>
          <FilterButton active={tab === "collection"} onClick={() => setTab("collection")}>Collection Tracker</FilterButton>
        </div>
      </div>

      {tab === "recipes" ? (
        <div key="recipes">
          <div className="space-y-3 border-b border-slate-200 p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_10rem_11rem]">
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-semibold text-slate-700">Search recipes</span>
                <input type="search" value={recipeQuery} onChange={(e) => { setExactResultId(null); setRecipeQuery(e.target.value); }} placeholder="e.g. Nima + Mom or Pride" className={INPUT_CLASS} />
              </label>
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-semibold text-slate-700">Search by</span>
                <select value={searchMode} onChange={(e) => { setExactResultId(null); setSearchMode(e.target.value as SearchMode); }} className={INPUT_CLASS}>
                  <option value="all">Input or result</option>
                  <option value="ingredient">Ingredients</option>
                  <option value="result">Result only</option>
                </select>
              </label>
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-semibold text-slate-700">Recipe category</span>
                <select value={recipeKind} onChange={(e) => setRecipeKind(e.target.value as "all" | AmINimaRecipeKind)} className={INPUT_CLASS}>
                  <option value="all">All categories</option>
                  {RECIPE_KINDS.map((kind) => <option key={kind} value={kind}>{KIND_LABELS[kind]}</option>)}
                </select>
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <label className="flex cursor-pointer items-center gap-2">
                <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} disabled={!hydrated} className="h-4 w-4 accent-slate-950" />
                Available recipes only
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="checkbox" checked={newResultsOnly} onChange={(e) => setNewResultsOnly(e.target.checked)} disabled={!hydrated} className="h-4 w-4 accent-slate-950" />
                Uncollected results only
              </label>
              <button type="button" className="text-sm font-medium text-blue-700 hover:underline" onClick={clearRecipeFilters}>Clear filters</button>
            </div>
            <p className="text-xs leading-5 text-slate-500">
              Available means the ingredient names are marked in your collection. It does not guarantee the recipe works in your current day, loop, or game state. Multiple listed results may be discovered separately.
            </p>
            <p className="text-sm font-semibold text-slate-900" aria-live="polite">
              {filteredRecipes.length} of {amINimaRecipeViews.length} recipes · {availableRecipeIds.size} ingredient matches
            </p>
          </div>
          <div className="max-h-[620px] divide-y divide-slate-100 overflow-y-auto overscroll-contain" role="region" aria-label="Matching recipes" tabIndex={0}>
            {filteredRecipes.length === 0 ? (
              <p className="px-4 py-10 text-center text-sm text-slate-500">
                No matching recipes in this list. Try changing the search or filters, or mark more ingredients in the collection tracker.
              </p>
            ) : filteredRecipes.map((recipe) => {
              const missing = [...new Set(recipe.inputIds.filter((id) => !ownedIds.has(id)))];
              const missingNames = [...new Set(recipe.inputs.filter((_, index) => !ownedIds.has(recipe.inputIds[index])))];
              return (
                <div key={recipe.id} className="grid gap-3 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:px-5">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">{KIND_LABELS[recipe.kind]}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {recipe.inputIds.map((id, index) => (
                        <span key={`${id}-${index}`} className="inline-flex items-center gap-1.5">
                          {index > 0 && <span aria-hidden="true" className="text-slate-400">+</span>}
                          <button
                            type="button"
                            disabled={!hydrated}
                            aria-pressed={ownedIds.has(id)}
                            aria-label={`${ownedIds.has(id) ? "Unmark" : "Mark"} ${recipe.inputs[index]} as collected`}
                            onClick={() => toggleOwned(id)}
                            className={`rounded-lg border px-2.5 py-1.5 text-sm font-medium disabled:opacity-50 ${ownedIds.has(id) ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-slate-50 text-slate-800"}`}
                          >
                            {recipe.inputs[index]}{ownedIds.has(id) ? " ✓" : ""}
                          </button>
                        </span>
                      ))}
                    </div>
                    <p className={`mt-2 text-xs leading-5 ${missing.length ? "text-slate-600" : "font-medium text-emerald-800"}`}>
                      {missing.length ? `Missing: ${missingNames.join(", ")}` : "Both ingredients marked"}
                    </p>
                  </div>
                  <div className="min-w-0 rounded-xl bg-slate-50 p-3">
                    <p className="mb-2 text-xs font-medium text-slate-500">Known results — mark individually</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {recipe.outputIds.map((id, index) => (
                        <label key={id} className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-800">
                          <input type="checkbox" disabled={!hydrated} checked={ownedIds.has(id)} onChange={() => toggleOwned(id)} className="h-4 w-4 shrink-0 accent-slate-950" />
                          <span className={ownedIds.has(id) ? "text-slate-500" : ""}>{recipe.outputs[index]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-500 md:px-5">
            Click an ingredient or result to update your collection. Only mark discoveries you have actually obtained; the tool does not play the game or unlock words automatically.
          </div>
        </div>
      ) : (
        <div key="collection">
          <div className="space-y-3 border-b border-slate-200 p-4 md:p-5">
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,12rem)]">
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-semibold text-slate-700">Search collection</span>
                <input type="search" value={collectionQuery} onChange={(e) => setCollectionQuery(e.target.value)} placeholder="Search a word, memory or character..." className={INPUT_CLASS} />
              </label>
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-semibold text-slate-700">Collection category</span>
                <select value={collectionKind} onChange={(e) => setCollectionKind(e.target.value as "all" | AmINimaEntityKind)} className={INPUT_CLASS}>
                  <option value="all">All entries</option>
                  {KINDS.map((kind) => <option key={kind} value={kind}>{KIND_LABELS[kind]}</option>)}
                </select>
              </label>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Collection status">
              <FilterButton active={collectionStatus === "all"} onClick={() => setCollectionStatus("all")}>All</FilterButton>
              <FilterButton active={collectionStatus === "missing"} onClick={() => setCollectionStatus("missing")}>Uncollected</FilterButton>
              <FilterButton active={collectionStatus === "collected"} onClick={() => setCollectionStatus("collected")}>Collected</FilterButton>
              <button type="button" className="px-2 text-sm font-medium text-blue-700 hover:underline" onClick={() => { setCollectionQuery(""); setCollectionKind("all"); setCollectionStatus("all"); }}>Clear filters</button>
            </div>
            <p className="text-sm font-semibold text-slate-900" aria-live="polite">{filteredEntities.length} matching entries</p>
          </div>
          <div className="max-h-[620px] divide-y divide-slate-100 overflow-y-auto overscroll-contain" role="region" aria-label="Collection entries" tabIndex={0}>
            {filteredEntities.length === 0 ? (
              <p className="px-4 py-10 text-center text-sm text-slate-500">No entries match these filters.</p>
            ) : filteredEntities.map((entity) => {
              const recipes = getAmINimaRecipesByResult(entity.id);
              const locations = getAmINimaWordLocations(entity.id);
              const collected = ownedIds.has(entity.id);
              return (
                <div key={entity.id} className={`flex flex-wrap items-start justify-between gap-3 p-4 md:px-5 ${collected ? "bg-slate-50" : "bg-white"}`}>
                  <div className="min-w-0 flex-1 basis-48">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input type="checkbox" checked={collected} disabled={!hydrated} onChange={() => toggleOwned(entity.id)} className="mt-0.5 h-5 w-5 shrink-0 accent-slate-950" />
                      <span className="min-w-0">
                        <span className={`block font-semibold ${collected ? "text-slate-500 line-through" : "text-slate-950"}`}>{entity.name}</span>
                        <span className="mt-0.5 block text-xs text-slate-500">{KIND_LABELS[entity.kind]}{entity.isStartingWord ? " · Starting word" : ""}</span>
                      </span>
                    </label>
                    {locations.length > 0 ? (
                      <ul className="mt-2 space-y-1 pl-8 text-sm leading-6 text-slate-600">
                        {locations.map((location) => (
                          <li key={location.id}>
                            {location.method}{location.guideHref && <> <a href={location.guideHref} className="font-medium text-blue-700 hover:underline">Details</a></>}
                          </li>
                        ))}
                      </ul>
                    ) : recipes.length === 0 && !entity.isStartingWord ? (
                      <p className="mt-2 pl-8 text-xs leading-5 text-slate-500">No acquisition method listed yet.</p>
                    ) : null}
                  </div>
                  {recipes.length > 0 && (
                    <button type="button" onClick={() => findRecipes(entity.id, entity.name)} className={BUTTON_CLASS}>
                      {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="border-t border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-500 md:px-5">
            Mark or unmark entries at any time. Collection changes also update the available-recipe filter. This list is incomplete and does not read your game save.
          </div>
        </div>
      )}
    </div>
  );
}
