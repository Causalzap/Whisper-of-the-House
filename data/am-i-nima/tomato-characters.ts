import type { AmINimaEntity } from "./types";

export const amINimaTomatoSeed: AmINimaEntity = 
{ id: "seed-tomato-boy", name: "Tomato Boy", kind: "tomato_seed" };

// Known character outputs; collection registration is not established.
export const amINimaTomatoCharacters: AmINimaEntity[] = [
  { id: "tomato-tomato-pop", name: "Tomato Pop", kind: "tomato_character" },
  { id: "tomato-pear-boy", name: "Pear Boy", kind: "tomato_character" },
];

// Named cards with unresolved collection classification. Do not count as
// confirmed Tomato Kingdom members or ordinary words.
export const amINimaCharacterCards: AmINimaEntity[] = [
  { id: "card-giant-belgium-boy", name: "Giant Belgium Boy", kind: "character_card" },
  { id: "card-pomegranate-prince", name: "Pomegranate Prince", kind: "character_card" },
];
