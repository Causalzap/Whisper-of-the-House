import type { AmINimaEntity } from "./types";
import { amINimaWords } from "./words";
import { amINimaMemories } from "./memories";
import {
  amINimaTomatoSeed,
  amINimaTomatoCharacters,
  amINimaCharacterCards,
} from "./tomato-characters";

// Derived registry; do not define entity names a second time.
export const amINimaEntities: AmINimaEntity[] = [
  ...amINimaWords,
  ...amINimaMemories,
  amINimaTomatoSeed,
  ...amINimaTomatoCharacters,
  ...amINimaCharacterCards,
];

const entityById = new Map(amINimaEntities.map((entity) => [entity.id, entity]));

export function getAmINimaEntity(id: string): AmINimaEntity | undefined {
  return entityById.get(id);
}

export function requireAmINimaEntity(id: string): AmINimaEntity {
  const entity = getAmINimaEntity(id);
  if (!entity) throw new Error(`Unknown Am I Nima entity: ${id}`);
  return entity;
}
