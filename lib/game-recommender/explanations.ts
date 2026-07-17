import {
  EXPERIENCE_LABELS,
  PLATFORM_LABELS,
  PLAY_MODE_LABELS,
  SESSION_STYLE_LABELS,
  TRAIT_NOUN_LABELS,
  TRAIT_OUTCOME_LABELS,
} from "@/lib/game-recommender/config";

import type {
  GameDnaTraitId,
  RecommendationCandidate,
  RecommendationContext,
  RecommendationExplanation,
  RecommendationRole,
} from "@/lib/game-recommender/types";

export function buildRecommendationExplanation({
  candidate,
  context,
  role,
}: {
  candidate: RecommendationCandidate;
  context: RecommendationContext;
  role: RecommendationRole;
}): RecommendationExplanation {
  switch (role) {
    case "best-match":
      return buildBestMatchExplanation(
        candidate,
        context,
      );

    case "strong-alternative":
      return buildStrongAlternativeExplanation(
        candidate,
        context,
      );

    case "wildcard":
      return buildWildcardExplanation(
        candidate,
        context,
      );

    case "surprise":
      return buildSurpriseExplanation(
        candidate,
        context,
      );

    case "more-match":
    default:
      return buildMoreMatchExplanation(
        candidate,
        context,
      );
  }
}

function buildBestMatchExplanation(
  candidate: RecommendationCandidate,
  context: RecommendationContext,
): RecommendationExplanation {
  const sharedTraits = getTraitPhrase(
    candidate.matchingTraits,
    2,
  );

  const newDirection = getNewDirectionTrait(candidate);
  const favorite = candidate.closestFavorite?.game;

  const summary = favorite
    ? `${candidate.game.title} is your closest overall match to ${favorite.title}. It keeps ${sharedTraits}${
        newDirection
          ? ` while leaning further into ${TRAIT_NOUN_LABELS[newDirection]}.`
          : "."
      }`
    : `${candidate.game.title} is the strongest overall fit for the experience you want right now, led by ${sharedTraits}.`;

  const highlights: string[] = [];

  if (favorite) {
    pushUnique(
      highlights,
      `Closest to ${favorite.title} among your selected favorites.`,
    );
  } else {
    pushUnique(
      highlights,
      "Strongest overall fit across your current choices.",
    );
  }

  pushTraitOutcome(
    highlights,
    candidate.matchingTraits[0],
  );

  pushContextHighlight(
    highlights,
    candidate,
    context,
  );

  pushTraitOutcome(
    highlights,
    candidate.matchingTraits[1],
  );

  return {
    eyebrow: "Closest overall fit",
    summary,
    highlights: highlights.slice(0, 3),
  };
}

function buildStrongAlternativeExplanation(
  candidate: RecommendationCandidate,
  context: RecommendationContext,
): RecommendationExplanation {
  const sharedTraits = getTraitPhrase(
    candidate.matchingTraits,
    2,
  );

  const newDirection = getNewDirectionTrait(candidate);
  const favorite = candidate.closestFavorite?.game;

  const base = favorite
    ? `${candidate.game.title} keeps the ${sharedTraits} you enjoy in ${favorite.title}`
    : `${candidate.game.title} keeps your strongest preference for ${sharedTraits}`;

  const summary = newDirection
    ? `${base}, but shifts the experience toward ${TRAIT_NOUN_LABELS[newDirection]}.`
    : `${base} in a different overall package.`;

  const highlights: string[] = [];

  pushUnique(
    highlights,
    `Preserves ${sharedTraits} without copying the top result.`,
  );

  if (newDirection) {
    pushUnique(
      highlights,
      `Offers a stronger focus on ${TRAIT_NOUN_LABELS[newDirection]}.`,
    );
  }

  pushContextHighlight(
    highlights,
    candidate,
    context,
  );

  pushTraitOutcome(
    highlights,
    candidate.matchingTraits[0],
  );

  return {
    eyebrow: "A familiar alternative",
    summary,
    highlights: highlights.slice(0, 3),
  };
}

function buildWildcardExplanation(
  candidate: RecommendationCandidate,
  context: RecommendationContext,
): RecommendationExplanation {
  const sharedTrait =
    candidate.matchingTraits[0] ??
    candidate.signatureTraits[0];

  const newDirection = getNewDirectionTrait(candidate);
  const tradeoff = candidate.weakerTraits[0];

  const sharedText = sharedTrait
    ? TRAIT_NOUN_LABELS[sharedTrait]
    : "your strongest gameplay preferences";

  const summary = [
    `${candidate.game.title} is the most different option in this set.`,
    tradeoff
      ? `It moves away from ${TRAIT_NOUN_LABELS[tradeoff]},`
      : "It changes the overall pace,",
    `but still matches your interest in ${sharedText}`,
    newDirection
      ? `and adds more ${TRAIT_NOUN_LABELS[newDirection]}.`
      : "in a less obvious format.",
  ].join(" ");

  const highlights: string[] = [];

  if (newDirection) {
    pushUnique(
      highlights,
      `Introduces more ${TRAIT_NOUN_LABELS[newDirection]} than your top matches.`,
    );
  } else {
    pushUnique(
      highlights,
      "Takes your preferences in a less obvious direction.",
    );
  }

  if (sharedTrait) {
    pushUnique(
      highlights,
      `Still preserves your interest in ${TRAIT_NOUN_LABELS[sharedTrait]}.`,
    );
  }

  if (tradeoff) {
    pushUnique(
      highlights,
      `Trade-off: less emphasis on ${TRAIT_NOUN_LABELS[tradeoff]}.`,
    );
  }

  pushContextHighlight(
    highlights,
    candidate,
    context,
  );

  return {
    eyebrow: "A different direction",
    summary,
    highlights: highlights.slice(0, 3),
  };
}

function buildMoreMatchExplanation(
  candidate: RecommendationCandidate,
  context: RecommendationContext,
): RecommendationExplanation {
  const sharedTraits = getTraitPhrase(
    candidate.matchingTraits,
    2,
  );

  const favorite = candidate.closestFavorite?.game;
  const newDirection = getNewDirectionTrait(candidate);

  const summary = favorite
    ? `${candidate.game.title} shares ${sharedTraits} with ${favorite.title}${
        newDirection
          ? ` while offering more ${TRAIT_NOUN_LABELS[newDirection]}.`
          : "."
      }`
    : `${candidate.game.title} is another solid match built around ${sharedTraits}.`;

  const highlights: string[] = [];

  pushTraitOutcome(
    highlights,
    candidate.matchingTraits[0],
  );

  if (newDirection) {
    pushUnique(
      highlights,
      `Adds a stronger ${TRAIT_NOUN_LABELS[newDirection]} angle.`,
    );
  }

  pushContextHighlight(
    highlights,
    candidate,
    context,
  );

  pushTraitOutcome(
    highlights,
    candidate.matchingTraits[1],
  );

  return {
    eyebrow: "Another strong option",
    summary,
    highlights: highlights.slice(0, 3),
  };
}

function buildSurpriseExplanation(
  candidate: RecommendationCandidate,
  context: RecommendationContext,
): RecommendationExplanation {
  const sharedTrait =
    candidate.matchingTraits[0] ??
    candidate.signatureTraits[0];

  const signatureTrait =
    candidate.signatureTraits.find(
      (traitId) =>
        traitId !== sharedTrait,
    ) ?? candidate.signatureTraits[0];

  const sharedText = sharedTrait
    ? TRAIT_NOUN_LABELS[sharedTrait]
    : "one of your main preferences";

  const signatureText = signatureTrait
    ? TRAIT_NOUN_LABELS[signatureTrait]
    : "a different style of play";

  const summary = `${candidate.game.title} sits outside your top-ranked results, but it still connects through ${sharedText} while giving you more ${signatureText}.`;

  const highlights: string[] = [];

  pushUnique(
    highlights,
    "Chosen from compatible games beyond the top three.",
  );

  if (sharedTrait) {
    pushTraitOutcome(
      highlights,
      sharedTrait,
    );
  }

  if (
    signatureTrait &&
    signatureTrait !== sharedTrait
  ) {
    pushUnique(
      highlights,
      `Adds a stronger focus on ${TRAIT_NOUN_LABELS[signatureTrait]}.`,
    );
  }

  pushContextHighlight(
    highlights,
    candidate,
    context,
  );

  return {
    eyebrow: "A compatible surprise",
    summary,
    highlights: highlights.slice(0, 3),
  };
}

function getNewDirectionTrait(
  candidate: RecommendationCandidate,
) {
  return (
    candidate.strongerTraits[0] ??
    candidate.signatureTraits.find(
      (traitId) =>
        !candidate.matchingTraits.includes(
          traitId,
        ),
    ) ??
    null
  );
}

function getTraitPhrase(
  traitIds: GameDnaTraitId[],
  limit: number,
) {
  const labels = traitIds
    .slice(0, limit)
    .map(
      (traitId) =>
        TRAIT_NOUN_LABELS[traitId],
    );

  if (labels.length === 0) {
    return "balanced gameplay";
  }

  return joinNaturalList(labels);
}

function pushTraitOutcome(
  highlights: string[],
  traitId?: GameDnaTraitId,
) {
  if (!traitId) {
    return;
  }

  pushUnique(
    highlights,
    `${TRAIT_OUTCOME_LABELS[traitId]}.`,
  );
}

function pushContextHighlight(
  highlights: string[],
  candidate: RecommendationCandidate,
  context: RecommendationContext,
) {
  if (
    context.platform !== "any" &&
    candidate.game.platforms?.includes(
      context.platform,
    )
  ) {
    pushUnique(
      highlights,
      `Available for ${PLATFORM_LABELS[context.platform]}.`,
    );

    return;
  }

  if (
    context.playMode !== "any" &&
    candidate.game.playModes?.includes(
      context.playMode,
    )
  ) {
    pushUnique(
      highlights,
      `Supports ${PLAY_MODE_LABELS[context.playMode]}.`,
    );

    return;
  }

  const sessionStyle =
    candidate.game.sessionStyles?.[0];

  if (sessionStyle) {
    pushUnique(
      highlights,
      `${SESSION_STYLE_LABELS[sessionStyle]}.`,
    );

    return;
  }

  if (
    context.selectedExperienceIds.length > 0
  ) {
    const moodLabels =
      context.selectedExperienceIds
        .slice(0, 2)
        .map(
          (experienceId) =>
            EXPERIENCE_LABELS[
              experienceId
            ],
        );

    pushUnique(
      highlights,
      `Fits your ${joinNaturalList(moodLabels)} mood.`,
    );
  }
}

function pushUnique(
  values: string[],
  value: string,
) {
  if (!values.includes(value)) {
    values.push(value);
  }
}

function joinNaturalList(
  values: string[],
) {
  if (values.length === 0) {
    return "";
  }

  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  const lastValue =
    values[values.length - 1];

  return `${values
    .slice(0, -1)
    .join(", ")}, and ${lastValue}`;
}
