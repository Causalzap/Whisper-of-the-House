import type { AmINimaWordLocation, AmINimaWordLocationView } from "./types";
import { requireAmINimaEntity } from "./entities";

// Known acquisition methods, not exclusive routes. Uncertain room labels,
// dates and requirements are omitted rather than guessed.
export const amINimaWordLocations: AmINimaWordLocation[] = [
  { id: "loc01", entityId: "word-fossil", acquisition: "object", method: "Inspect the highlighted upper-shelf paleobiology book in the bedroom." },
  { id: "loc02", entityId: "word-trapped", acquisition: "object", method: "Inspect the bedroom shelf aquarium." },
  { id: "loc03", entityId: "card-pomegranate-prince", acquisition: "object", method: "Open the bedroom locker with POND, then inspect the figurine.", guideHref: "/am-i-nima#locker-code" },
  { id: "v31-loc01", entityId: "word-art", acquisition: "object", method: "Inspect the pants." },
  { id: "v31-loc-plant", entityId: "word-plant", acquisition: "object", method: "Inspect dying plant." },
  { id: "v31-loc-neglect", entityId: "word-neglect", acquisition: "object", method: "Inspect dying plant." },
  { id: "v31-loc02", entityId: "word-manipulation", acquisition: "object", method: "Inspect the object associated with the threat to cut uncombed hair." },
  { id: "v31-loc-child", entityId: "word-child", acquisition: "object", method: "Inspect baby photograph." },
  { id: "v31-loc-happy", entityId: "word-happy", acquisition: "object", method: "Inspect baby photograph." },
  { id: "v31-loc03", entityId: "word-dissonance", acquisition: "object", method: "Inspect the handmade key holder." },
  { id: "v31-story01", entityId: "word-vancouver", acquisition: "story", method: "Consider the kingdom-by-the-sea/home option during the drawing discussion." },
];

export const amINimaWordLocationViews: AmINimaWordLocationView[] =
  amINimaWordLocations.map((location) => {
    const entity = requireAmINimaEntity(location.entityId);
    return { ...location, word: entity.name, kind: entity.kind };
  });

export function getAmINimaWordLocations(id: string): AmINimaWordLocationView[] {
  return amINimaWordLocationViews.filter((location) => location.entityId === id);
}
