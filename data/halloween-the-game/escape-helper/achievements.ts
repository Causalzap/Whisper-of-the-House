import type {
    EscapeAchievementDefinition,
    EscapeAchievementId,
  } from "./types";
  
  export const escapeAchievements: Record<
    EscapeAchievementId,
    EscapeAchievementDefinition
  > = {
    "i-found-the-car": {
      id: "i-found-the-car",
  
      name: "I found the Car!",
  
      preferredRoute: "sedan",
  
      requiresFullResidentCapacity: true,
  
      notes: [
        "Do not take another ready escape if the player explicitly selected this achievement.",
        "The Sedan should be prepared before committing Residents to the route.",
      ],
    },
  
    "risky-escape": {
      id: "risky-escape",
  
      name: "Risky Escape",
  
      preferredRoute: "sedan",
  
      additionalItemRequirements: [
        "beer",
      ],
  
      requiresDriving: true,
  
      requiresDrunkState: true,
  
      notes: [
        "Prepare the Sedan before deliberately creating the drunk state.",
      ],
    },
  };