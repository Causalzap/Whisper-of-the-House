"use client";

import { useMemo, useState } from "react";

import {
  TETRAMON_CARD_BY_ID,
  normalizeTetramonId,
} from "@/data/tcg-card-shop-simulator/tetramon-cards";

import {
  TETRAMON_DECK_PRESETS,
} from "@/data/tcg-card-shop-simulator/tetramon-decks";

import {
  scoreTetramonDeck,
} from "@/data/tcg-card-shop-simulator/tetramon-scoring";

import type {
  DeckCard,
  TetramonCard,
  TetramonType,
} from "@/data/tcg-card-shop-simulator/tetramon-types";

/* =========================================================
   TYPES
   ========================================================= */

type PlayStyle =
  | "balanced"
  | "draw"
  | "control"
  | "damage"
  | "simple";

type EvolutionPreference =
  | "either"
  | "low-setup"
  | "evolution";

interface FinderAnswers {
  playStyle: PlayStyle;
  evolutionPreference: EvolutionPreference;
  preferredType: TetramonType | "Any";
}

interface ResolvedDeckCard {
  card: TetramonCard;
  copies: number;
}

interface DeckPresetLike {
  id: string;
  name: string;
  description?: string;
  cards: DeckCard[];
  tags?: string[];
}

interface RankedPreset {
  preset: DeckPresetLike;
  matchScore: number;
  reasons: string[];
  resolvedCards: ResolvedDeckCard[];
  deckScore: ReturnType<typeof scoreTetramonDeck>;
}

/* =========================================================
   OPTIONS
   ========================================================= */

const PLAY_STYLE_OPTIONS: Array<{
  value: PlayStyle;
  title: string;
  description: string;
}> = [
  {
    value: "balanced",
    title: "Balanced",
    description:
      "Give me a stable deck without forcing one narrow game plan.",
  },
  {
    value: "draw",
    title: "Draw & Cycle",
    description:
      "I want more cards, filtering, and ways to find the pieces I need.",
  },
  {
    value: "control",
    title: "Control",
    description:
      "I want to disrupt evolutions, hands, or the opponent's field.",
  },
  {
    value: "damage",
    title: "Damage",
    description:
      "I want a more direct plan built around pressure and damage effects.",
  },
  {
    value: "simple",
    title: "Easy to Pilot",
    description:
      "I want fewer awkward evolution dependencies and a simpler starting point.",
  },
];

const EVOLUTION_OPTIONS: Array<{
  value: EvolutionPreference;
  title: string;
  description: string;
}> = [
  {
    value: "either",
    title: "No Preference",
    description:
      "I'm fine with either standalone cards or evolution packages.",
  },
  {
    value: "low-setup",
    title: "Less Setup",
    description:
      "Prefer cards that are useful without relying heavily on evolution chains.",
  },
  {
    value: "evolution",
    title: "Evolution Payoffs",
    description:
      "I'm happy to build around evolution chains if the payoff is worth it.",
  },
];

const TYPE_OPTIONS: Array<TetramonType | "Any"> = [
  "Any",
  "Fire",
  "Water",
  "Earth",
  "Wind",
];

/* =========================================================
   HELPERS
   ========================================================= */

function resolveDeckCards(
  cards: DeckCard[]
): ResolvedDeckCard[] {
  return cards.flatMap((entry) => {
    const card = TETRAMON_CARD_BY_ID.get(
      normalizeTetramonId(entry.cardId)
    );

    if (!card) {
      return [];
    }

    return [
      {
        card,
        copies: entry.copies,
      },
    ];
  });
}

function totalCopies(cards: ResolvedDeckCard[]): number {
  return cards.reduce(
    (sum, entry) => sum + entry.copies,
    0
  );
}

function countCopiesWhere(
  cards: ResolvedDeckCard[],
  predicate: (card: TetramonCard) => boolean
): number {
  return cards.reduce((sum, entry) => {
    return predicate(entry.card)
      ? sum + entry.copies
      : sum;
  }, 0);
}

function normalizeText(value: string): string {
  return value.toLowerCase();
}

function cardHasText(
  card: TetramonCard,
  terms: string[]
): boolean {
  const text = normalizeText(card.playEffect);

  return terms.some((term) =>
    text.includes(term)
  );
}

function countDrawCopies(
  cards: ResolvedDeckCard[]
): number {
  return countCopiesWhere(cards, (card) =>
    cardHasText(card, ["draw"])
  );
}

function countControlCopies(
  cards: ResolvedDeckCard[]
): number {
  return countCopiesWhere(cards, (card) =>
    cardHasText(card, [
      "opponent discard",
      "oponnent discard",
      "cannot evolve",
      "destroy",
      "disable opponent",
      "swap",
      "negate",
    ])
  );
}

function countDamageCopies(
  cards: ResolvedDeckCard[]
): number {
  return countCopiesWhere(cards, (card) =>
    cardHasText(card, [
      "extra damage",
      "double damage",
      "triple damage",
      "unblockable tp damage",
    ])
  );
}

function countEvolutionDependentCopies(
  cards: ResolvedDeckCard[]
): number {
  return countCopiesWhere(
    cards,
    (card) =>
      card.previousEvolutions.length > 0
  );
}

function countStandaloneCopies(
  cards: ResolvedDeckCard[]
): number {
  return countCopiesWhere(
    cards,
    (card) =>
      card.previousEvolutions.length === 0
  );
}

function countTypeCopies(
  cards: ResolvedDeckCard[],
  type: TetramonType
): number {
  return countCopiesWhere(
    cards,
    (card) => card.type === type
  );
}

function getDeckTags(
  preset: DeckPresetLike
): string[] {
  return (preset.tags ?? []).map((tag) =>
    tag.toLowerCase()
  );
}

function hasPresetTag(
  preset: DeckPresetLike,
  terms: string[]
): boolean {
  const tags = getDeckTags(preset);

  return terms.some((term) =>
    tags.some((tag) =>
      tag.includes(term.toLowerCase())
    )
  );
}

/* =========================================================
   MATCH ENGINE
   ========================================================= */

/**
 * This score only answers:
 *
 * "How closely does this existing verified preset match
 * the player's stated preferences?"
 *
 * It is intentionally separate from scoreTetramonDeck(),
 * which evaluates the deck itself.
 *
 * We do NOT generate an untested 50-card list here.
 */
function rankPresetForAnswers(
  preset: DeckPresetLike,
  answers: FinderAnswers
): RankedPreset {
  const resolvedCards = resolveDeckCards(
    preset.cards
  );

  const deckScore = scoreTetramonDeck(
    preset.cards
  );

  const total = Math.max(
    totalCopies(resolvedCards),
    1
  );

  const drawCopies =
    countDrawCopies(resolvedCards);

  const controlCopies =
    countControlCopies(resolvedCards);

  const damageCopies =
    countDamageCopies(resolvedCards);

  const evolutionCopies =
    countEvolutionDependentCopies(
      resolvedCards
    );

  const standaloneCopies =
    countStandaloneCopies(
      resolvedCards
    );

  let score = 50;

  const reasons: string[] = [];

  /* -------------------------------------------------------
     PLAY STYLE
     ------------------------------------------------------- */

  switch (answers.playStyle) {
    case "balanced": {
      const categories = [
        drawCopies > 0,
        controlCopies > 0,
        damageCopies > 0,
      ].filter(Boolean).length;

      score += categories * 5;

      if (categories >= 2) {
        reasons.push(
          "It gives you more than one way to make progress instead of relying on a single effect package."
        );
      }

      break;
    }

    case "draw": {
      const ratio =
        drawCopies / total;

      score += Math.min(
        ratio * 70,
        28
      );

      if (
        hasPresetTag(preset, [
          "draw",
          "cycle",
          "discard",
          "filter",
        ])
      ) {
        score += 10;
      }

      if (drawCopies >= 8) {
        reasons.push(
          "A meaningful share of the list has draw or cycling effects."
        );
      }

      break;
    }

    case "control": {
      const ratio =
        controlCopies / total;

      score += Math.min(
        ratio * 70,
        28
      );

      if (
        hasPresetTag(preset, [
          "control",
          "discard",
          "lock",
          "destroy",
          "disruption",
        ])
      ) {
        score += 10;
      }

      if (controlCopies >= 8) {
        reasons.push(
          "The list contains repeated ways to disrupt the opponent's hand, evolution plan, damage, or field."
        );
      }

      break;
    }

    case "damage": {
      const ratio =
        damageCopies / total;

      score += Math.min(
        ratio * 70,
        28
      );

      if (
        hasPresetTag(preset, [
          "damage",
          "aggressive",
          "pressure",
          "fire",
        ])
      ) {
        score += 10;
      }

      if (damageCopies >= 8) {
        reasons.push(
          "The list contains a meaningful concentration of direct damage or damage-multiplier effects."
        );
      }

      break;
    }

    case "simple": {
      const standaloneRatio =
        standaloneCopies / total;

      score += Math.min(
        standaloneRatio * 28,
        28
      );

      if (
        deckScore.breakdown
          .evolutionSafety >= 85
      ) {
        score += 8;
      }

      if (
        hasPresetTag(preset, [
          "beginner",
          "simple",
          "consistent",
          "starter",
        ])
      ) {
        score += 8;
      }

      reasons.push(
        "This match favors lower setup friction and fewer unsupported evolution pieces."
      );

      break;
    }
  }

  /* -------------------------------------------------------
     EVOLUTION PREFERENCE
     ------------------------------------------------------- */

  if (
    answers.evolutionPreference ===
    "low-setup"
  ) {
    const standaloneRatio =
      standaloneCopies / total;

    score += Math.min(
      standaloneRatio * 24,
      24
    );

    score +=
      (deckScore.breakdown
        .evolutionSafety /
        100) *
      10;

    reasons.push(
      "It scores well for evolution safety relative to the available presets."
    );
  }

  if (
    answers.evolutionPreference ===
    "evolution"
  ) {
    const evolutionRatio =
      evolutionCopies / total;

    score += Math.min(
      evolutionRatio * 28,
      28
    );

    if (
      deckScore.breakdown
        .evolutionSafety >= 80
    ) {
      score += 8;
    }

    if (evolutionCopies > 0) {
      reasons.push(
        "The deck actually uses evolution-dependent cards instead of avoiding evolution entirely."
      );
    }
  }

  /* -------------------------------------------------------
     TYPE PREFERENCE
     ------------------------------------------------------- */

  if (
    answers.preferredType !== "Any"
  ) {
    const typeCopies =
      countTypeCopies(
        resolvedCards,
        answers.preferredType
      );

    const ratio =
      typeCopies / total;

    score += Math.min(
      ratio * 35,
      25
    );

    if (
      hasPresetTag(preset, [
        answers.preferredType,
      ])
    ) {
      score += 8;
    }

    if (typeCopies > 0) {
      reasons.push(
        `${typeCopies} of the ${total} cards in this preset are ${answers.preferredType} cards.`
      );
    }
  }

  /* -------------------------------------------------------
     BASE DECK QUALITY
     ------------------------------------------------------- */

  score +=
    (deckScore.score - 50) *
    0.22;

  if (
    deckScore.breakdown
      .consistency >= 70
  ) {
    reasons.push(
      "Its current deck-check model also gives it a solid consistency profile."
    );
  }

  if (
    deckScore.breakdown
      .evolutionSafety >= 90
  ) {
    reasons.push(
      "Its evolution-dependent cards are well supported by earlier stages in the list."
    );
  }

  return {
    preset,
    matchScore: Math.round(
      Math.max(
        0,
        Math.min(100, score)
      )
    ),
    reasons: Array.from(
      new Set(reasons)
    ).slice(0, 4),
    resolvedCards,
    deckScore,
  };
}

/* =========================================================
   DECK TEXT
   ========================================================= */

function buildDeckText(
  result: RankedPreset
): string {
  const lines = result.resolvedCards.map(
    ({ card, copies }) =>
      `${copies}x ${card.name}`
  );

  return [
    result.preset.name,
    "",
    ...lines,
  ].join("\n");
}

/* =========================================================
   SMALL UI COMPONENTS
   ========================================================= */

function ChoiceButton({
  selected,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        "rounded-xl border p-4 text-left transition",
        "focus:outline-none focus:ring-2 focus:ring-slate-400",
        selected
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-900 hover:border-slate-400",
      ].join(" ")}
    >
      <span className="block font-semibold">
        {title}
      </span>

      <span
        className={[
          "mt-1 block text-sm leading-6",
          selected
            ? "text-slate-200"
            : "text-slate-600",
        ].join(" ")}
      >
        {description}
      </span>
    </button>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-3">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-lg font-semibold text-slate-900">
        {value}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function FindMyDeck() {
  const [playStyle, setPlayStyle] =
    useState<PlayStyle>("balanced");

  const [
    evolutionPreference,
    setEvolutionPreference,
  ] =
    useState<EvolutionPreference>(
      "either"
    );

  const [
    preferredType,
    setPreferredType,
  ] =
    useState<
      TetramonType | "Any"
    >("Any");

  const [hasSearched, setHasSearched] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const answers: FinderAnswers =
    useMemo(
      () => ({
        playStyle,
        evolutionPreference,
        preferredType,
      }),
      [
        playStyle,
        evolutionPreference,
        preferredType,
      ]
    );

  const rankedPresets =
    useMemo(() => {
      return (
        TETRAMON_DECK_PRESETS as DeckPresetLike[]
      )
        .map((preset) =>
          rankPresetForAnswers(
            preset,
            answers
          )
        )
        .sort(
          (a, b) =>
            b.matchScore -
            a.matchScore
        );
    }, [answers]);

  const bestMatch =
    rankedPresets[0];

  const alternative =
    rankedPresets[1];

  function findDeck() {
    setCopied(false);
    setHasSearched(true);
  }

  function resetFinder() {
    setPlayStyle("balanced");
    setEvolutionPreference(
      "either"
    );
    setPreferredType("Any");
    setHasSearched(false);
    setCopied(false);
  }

  async function copyDeck() {
    if (!bestMatch) {
      return;
    }

    const text =
      buildDeckText(bestMatch);

    try {
      await navigator.clipboard.writeText(
        text
      );

      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1800
      );
    } catch {
      /**
       * Clipboard may be unavailable in some browser
       * contexts. The deck remains visible below.
       */
      setCopied(false);
    }
  }

  return (
    <section
      aria-labelledby="find-my-deck-title"
      className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
    >
      {/* ===================================================
          HEADER
          =================================================== */}

      <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Tetramon Deck Tool
        </p>

        <h2
          id="find-my-deck-title"
          className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          Find Me a Tetramon Deck
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Pick how you want to play and
          this tool will match you with
          the closest deck preset in our
          current data set. It does not
          invent a random 50-card list:
          the recommendation comes from
          the deck presets already
          checked against the deck and
          evolution data.
        </p>
      </div>

      {/* ===================================================
          FORM
          =================================================== */}

      <div className="space-y-7 px-5 py-6 sm:px-6">
        {/* -------------------------------------------------
            PLAY STYLE
            ------------------------------------------------- */}

        <fieldset>
          <legend className="text-lg font-bold text-slate-950">
            1. How do you want the deck
            to play?
          </legend>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLAY_STYLE_OPTIONS.map(
              (option) => (
                <ChoiceButton
                  key={option.value}
                  selected={
                    playStyle ===
                    option.value
                  }
                  title={option.title}
                  description={
                    option.description
                  }
                  onClick={() => {
                    setPlayStyle(
                      option.value
                    );
                    setHasSearched(
                      false
                    );
                  }}
                />
              )
            )}
          </div>
        </fieldset>

        {/* -------------------------------------------------
            EVOLUTION
            ------------------------------------------------- */}

        <fieldset>
          <legend className="text-lg font-bold text-slate-950">
            2. How much evolution setup
            do you want?
          </legend>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {EVOLUTION_OPTIONS.map(
              (option) => (
                <ChoiceButton
                  key={option.value}
                  selected={
                    evolutionPreference ===
                    option.value
                  }
                  title={option.title}
                  description={
                    option.description
                  }
                  onClick={() => {
                    setEvolutionPreference(
                      option.value
                    );
                    setHasSearched(
                      false
                    );
                  }}
                />
              )
            )}
          </div>
        </fieldset>

        {/* -------------------------------------------------
            TYPE
            ------------------------------------------------- */}

        <fieldset>
          <legend className="text-lg font-bold text-slate-950">
            3. Do you prefer a Tetramon
            type?
          </legend>

          <div className="mt-3 flex flex-wrap gap-2">
            {TYPE_OPTIONS.map(
              (type) => {
                const selected =
                  preferredType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={
                      selected
                    }
                    onClick={() => {
                      setPreferredType(
                        type
                      );
                      setHasSearched(
                        false
                      );
                    }}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-semibold transition",
                      "focus:outline-none focus:ring-2 focus:ring-slate-400",
                      selected
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-slate-500",
                    ].join(" ")}
                  >
                    {type}
                  </button>
                );
              }
            )}
          </div>
        </fieldset>

        {/* -------------------------------------------------
            ACTION
            ------------------------------------------------- */}

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
          <button
            type="button"
            onClick={findDeck}
            className="rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Find My Deck
          </button>

          <button
            type="button"
            onClick={resetFinder}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Reset
          </button>
        </div>

        {/* =================================================
            RESULT
            ================================================= */}

        {hasSearched && bestMatch ? (
          <div
            aria-live="polite"
            className="rounded-2xl border border-slate-300 bg-white"
          >
            {/* ---------------------------------------------
                RESULT HEADER
                --------------------------------------------- */}

            <div className="border-b border-slate-200 px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Best Match
              </p>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    {
                      bestMatch.preset
                        .name
                    }
                  </h3>

                  {bestMatch.preset
                    .description ? (
                    <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                      {
                        bestMatch.preset
                          .description
                      }
                    </p>
                  ) : null}
                </div>

                <div className="shrink-0 rounded-xl bg-slate-100 px-4 py-3 text-center">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Preference Match
                  </div>

                  <div className="mt-1 text-2xl font-bold text-slate-950">
                    {
                      bestMatch.matchScore
                    }
                    /100
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------
                METRICS
                --------------------------------------------- */}

            <div className="grid gap-3 border-b border-slate-200 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
              <Metric
                label="Cards"
                value={totalCopies(
                  bestMatch.resolvedCards
                )}
              />

              <Metric
                label="Deck Score"
                value={
                  bestMatch.deckScore
                    .score
                }
              />

              <Metric
                label="Consistency"
                value={
                  bestMatch.deckScore
                    .breakdown
                    .consistency
                }
              />

              <Metric
                label="Evolution Safety"
                value={
                  bestMatch.deckScore
                    .breakdown
                    .evolutionSafety
                }
              />
            </div>

            {/* ---------------------------------------------
                WHY
                --------------------------------------------- */}

            <div className="grid gap-6 border-b border-slate-200 px-5 py-5 lg:grid-cols-2">
              <div>
                <h4 className="font-bold text-slate-950">
                  Why this deck fits
                </h4>

                {bestMatch.reasons
                  .length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {bestMatch.reasons.map(
                      (reason) => (
                        <li
                          key={reason}
                          className="flex gap-2"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[2px] text-slate-400"
                          >
                            •
                          </span>

                          <span>
                            {reason}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    This is the closest
                    available preset to
                    the preferences you
                    selected.
                  </p>
                )}
              </div>

              <div>
                <h4 className="font-bold text-slate-950">
                  Deck check
                </h4>

                {bestMatch.deckScore
                  .warnings.length ===
                0 ? (
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    No major legality or
                    evolution-support
                    warning was found by
                    the current checker.
                  </p>
                ) : (
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {bestMatch.deckScore.warnings.map(
                      (warning) => (
                        <li
                          key={warning}
                          className="flex gap-2"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[2px] text-slate-400"
                          >
                            •
                          </span>

                          <span>
                            {warning}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>

            {/* ---------------------------------------------
                DECK LIST
                --------------------------------------------- */}

            <div className="px-5 py-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="font-bold text-slate-950">
                  Deck List
                </h4>

                <button
                  type="button"
                  onClick={copyDeck}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
                >
                  {copied
                    ? "Copied"
                    : "Copy Deck List"}
                </button>
              </div>

              <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {bestMatch.resolvedCards.map(
                  ({
                    card,
                    copies,
                  }) => (
                    <div
                      key={card.id}
                      className="flex items-center justify-between gap-4 border-b border-slate-100 py-2 text-sm"
                    >
                      <div>
                        <span className="font-semibold text-slate-900">
                          {card.name}
                        </span>

                        <span className="ml-2 text-slate-500">
                          {card.type} ·{" "}
                          {
                            card.cardClass
                          }
                        </span>
                      </div>

                      <span className="shrink-0 font-semibold text-slate-700">
                        ×{copies}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ---------------------------------------------
                ALTERNATIVE
                --------------------------------------------- */}

            {alternative ? (
              <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Another option:
                  </span>{" "}
                  {
                    alternative.preset
                      .name
                  }{" "}
                  scored{" "}
                  {
                    alternative.matchScore
                  }
                  /100 for the same
                  preferences.
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* =================================================
            METHODOLOGY NOTE
            ================================================= */}

        <p className="text-xs leading-5 text-slate-500">
          Recommendations are based on
          the deck presets currently
          included in the tool, documented
          card effects, evolution
          relationships, and the v1.2
          data-driven scoring model. This
          is not a tournament win-rate or
          competitive meta ranking.
        </p>
      </div>
    </section>
  );
}