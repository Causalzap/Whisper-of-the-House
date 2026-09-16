"use client";

import { useMemo, useState } from "react";

import {
  TETRAMON_CARDS,
  TETRAMON_CARD_BY_ID,
  normalizeTetramonId,
} from "@/data/tcg-card-shop-simulator/tetramon-cards";

import {
  scoreTetramonDeck,
} from "@/data/tcg-card-shop-simulator/tetramon-scoring";

import type {
  DeckCard,
  TetramonCard,
  TetramonCardClass,
  TetramonType,
} from "@/data/tcg-card-shop-simulator/tetramon-types";

/* =========================================================
   TYPES
   ========================================================= */

type CheckStatus =
  | "good"
  | "warning"
  | "error"
  | "info";

interface ParsedDeckLine {
  raw: string;
  cardId?: string;
  card?: TetramonCard;
  copies?: number;
  error?: string;
}

interface EvolutionProblem {
  card: TetramonCard;
  copies: number;
  previousCards: TetramonCard[];
  previousCopies: number;
  status: "missing" | "thin";
}

interface DeckSummary {
  totalCards: number;
  uniqueCards: number;

  classCopies: Record<
    TetramonCardClass,
    number
  >;

  typeCopies: Record<
    TetramonType,
    number
  >;

  basicCopies: number;
  evolutionCopies: number;

  drawCopies: number;
  controlCopies: number;
  damageCopies: number;
}

interface CheckItem {
  id: string;
  status: CheckStatus;
  title: string;
  description: string;
}

/* =========================================================
   CONSTANTS
   ========================================================= */

const CARD_CLASSES: TetramonCardClass[] = [
  "Basic",
  "Rare",
  "Epic",
  "Legendary",
];

const CARD_TYPES: TetramonType[] = [
  "Fire",
  "Water",
  "Earth",
  "Wind",
];

const DECK_SIZE = 50;
const MAX_COPIES = 4;

/* =========================================================
   TEXT NORMALIZATION
   ========================================================= */

function normalizeSearchText(
  value: string
): string {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const CARD_BY_NORMALIZED_NAME =
  new Map<string, TetramonCard>(
    TETRAMON_CARDS.map((card) => [
      normalizeSearchText(card.name),
      card,
    ])
  );

/* =========================================================
   DECK LIST PARSER
   ========================================================= */

/**
 * Supported examples:
 *
 * 4x Flamchik
 * 4 Flamchik
 * Flamchik x4
 * Flamchik ×4
 * Flamchik
 *
 * A line without a quantity defaults to 1 copy.
 */
function parseDeckLine(
  rawLine: string
): ParsedDeckLine | null {
  const raw = rawLine.trim();

  if (!raw) {
    return null;
  }

  let copies = 1;
  let cardName = raw;

  /* -------------------------------------------------------
     PREFIX QUANTITY
     ------------------------------------------------------- */

  const prefixMatch = raw.match(
    /^(\d+)\s*[x×]?\s+(.+)$/
  );

  if (prefixMatch) {
    copies = Number(prefixMatch[1]);
    cardName = prefixMatch[2].trim();
  } else {
    /* -----------------------------------------------------
       SUFFIX QUANTITY
       ----------------------------------------------------- */

    const suffixMatch = raw.match(
      /^(.+?)\s*[x×]\s*(\d+)$/
    );

    if (suffixMatch) {
      cardName =
        suffixMatch[1].trim();

      copies =
        Number(suffixMatch[2]);
    }
  }

  if (
    !Number.isFinite(copies) ||
    copies < 1
  ) {
    return {
      raw,
      error:
        "Copy count must be at least 1.",
    };
  }

  const normalizedName =
    normalizeSearchText(cardName);

  const directCard =
    CARD_BY_NORMALIZED_NAME.get(
      normalizedName
    );

  if (directCard) {
    return {
      raw,
      cardId: directCard.id,
      card: directCard,
      copies,
    };
  }

  /**
   * Also allow the internal normalized card ID.
   */
  const normalizedId =
    normalizeTetramonId(cardName);

  const idCard =
    TETRAMON_CARD_BY_ID.get(
      normalizedId
    );

  if (idCard) {
    return {
      raw,
      cardId: idCard.id,
      card: idCard,
      copies,
    };
  }

  return {
    raw,
    copies,
    error: `Card not found: "${cardName}"`,
  };
}

function parseDeckText(
  input: string
): ParsedDeckLine[] {
  return input
    .split(/\r?\n/)
    .map(parseDeckLine)
    .filter(
      (
        line
      ): line is ParsedDeckLine =>
        line !== null
    );
}

/* =========================================================
   MERGE DUPLICATE LINES
   ========================================================= */

function parsedLinesToDeck(
  lines: ParsedDeckLine[]
): DeckCard[] {
  const copiesById =
    new Map<string, number>();

  for (const line of lines) {
    if (
      !line.cardId ||
      !line.card ||
      !line.copies ||
      line.error
    ) {
      continue;
    }

    copiesById.set(
      line.cardId,
      (copiesById.get(
        line.cardId
      ) ?? 0) + line.copies
    );
  }

  return Array.from(
    copiesById.entries()
  ).map(([cardId, copies]) => ({
    cardId,
    copies,
  }));
}

/* =========================================================
   RESOLVE DECK
   ========================================================= */

function resolveDeck(
  deck: DeckCard[]
): Array<{
  card: TetramonCard;
  copies: number;
}> {
  return deck.flatMap(
    ({ cardId, copies }) => {
      const card =
        TETRAMON_CARD_BY_ID.get(
          normalizeTetramonId(
            cardId
          )
        );

      if (!card) {
        return [];
      }

      return [
        {
          card,
          copies,
        },
      ];
    }
  );
}

/* =========================================================
   EFFECT HELPERS
   ========================================================= */

function effectText(
  card: TetramonCard
): string {
  return card.playEffect
    .toLowerCase()
    .replace(
      /\boponnent\b/g,
      "opponent"
    );
}

function isDrawCard(
  card: TetramonCard
): boolean {
  return /\bdraw\s+\d+/.test(
    effectText(card)
  );
}

function isControlCard(
  card: TetramonCard
): boolean {
  const text =
    effectText(card);

  return (
    text.includes(
      "opponent discard"
    ) ||
    text.includes(
      "cannot evolve"
    ) ||
    text.includes("destroy") ||
    text.includes("negate") ||
    text.includes(
      "disable opponent"
    ) ||
    text.includes("swap")
  );
}

function isDamageCard(
  card: TetramonCard
): boolean {
  const text =
    effectText(card);

  return (
    text.includes(
      "extra damage"
    ) ||
    text.includes(
      "double damage"
    ) ||
    text.includes(
      "triple damage"
    ) ||
    text.includes(
      "unblockable tp damage"
    )
  );
}

/* =========================================================
   SUMMARY
   ========================================================= */

function buildDeckSummary(
  deck: DeckCard[]
): DeckSummary {
  const resolved =
    resolveDeck(deck);

  const classCopies =
    Object.fromEntries(
      CARD_CLASSES.map(
        (cardClass) => [
          cardClass,
          0,
        ]
      )
    ) as Record<
      TetramonCardClass,
      number
    >;

  const typeCopies =
    Object.fromEntries(
      CARD_TYPES.map((type) => [
        type,
        0,
      ])
    ) as Record<
      TetramonType,
      number
    >;

  let totalCards = 0;
  let basicCopies = 0;
  let evolutionCopies = 0;

  let drawCopies = 0;
  let controlCopies = 0;
  let damageCopies = 0;

  for (const {
    card,
    copies,
  } of resolved) {
    totalCards += copies;

    classCopies[
      card.cardClass
    ] += copies;

    typeCopies[
      card.type
    ] += copies;

    if (
      card.cardClass ===
      "Basic"
    ) {
      basicCopies += copies;
    }

    if (
      card.previousEvolutions
        .length > 0
    ) {
      evolutionCopies +=
        copies;
    }

    if (isDrawCard(card)) {
      drawCopies += copies;
    }

    if (
      isControlCard(card)
    ) {
      controlCopies +=
        copies;
    }

    if (
      isDamageCard(card)
    ) {
      damageCopies +=
        copies;
    }
  }

  return {
    totalCards,
    uniqueCards:
      resolved.length,

    classCopies,
    typeCopies,

    basicCopies,
    evolutionCopies,

    drawCopies,
    controlCopies,
    damageCopies,
  };
}

/* =========================================================
   EVOLUTION CHECK
   ========================================================= */

function findEvolutionProblems(
  deck: DeckCard[]
): EvolutionProblem[] {
  const resolved =
    resolveDeck(deck);

  const copiesById =
    new Map<string, number>(
      resolved.map(
        ({ card, copies }) => [
          card.id,
          copies,
        ]
      )
    );

  const problems: EvolutionProblem[] =
    [];

  for (const {
    card,
    copies,
  } of resolved) {
    if (
      card.previousEvolutions
        .length === 0
    ) {
      continue;
    }

    const previousCards =
      card.previousEvolutions
        .map((id) =>
          TETRAMON_CARD_BY_ID.get(
            id
          )
        )
        .filter(
          (
            previous
          ): previous is TetramonCard =>
            Boolean(previous)
        );

    const previousCopies =
      card.previousEvolutions.reduce(
        (sum, id) =>
          sum +
          (copiesById.get(id) ??
            0),
        0
      );

    if (
      previousCopies === 0
    ) {
      problems.push({
        card,
        copies,
        previousCards,
        previousCopies,
        status: "missing",
      });

      continue;
    }

    /**
     * This is a consistency warning, not a legality rule.
     *
     * Example:
     * 4 copies of an evolved card with only 1 copy of
     * its earlier stage may be awkward to assemble.
     */
    if (
      previousCopies < copies
    ) {
      problems.push({
        card,
        copies,
        previousCards,
        previousCopies,
        status: "thin",
      });
    }
  }

  return problems;
}

/* =========================================================
   CHECKS
   ========================================================= */

function buildChecks(
  deck: DeckCard[],
  parseErrors: ParsedDeckLine[],
  summary: DeckSummary,
  evolutionProblems: EvolutionProblem[]
): CheckItem[] {
  const checks: CheckItem[] =
    [];

  /* -------------------------------------------------------
     CARD RECOGNITION
     ------------------------------------------------------- */

  if (parseErrors.length > 0) {
    checks.push({
      id: "unknown-cards",
      status: "error",
      title: `${parseErrors.length} line${
        parseErrors.length === 1
          ? ""
          : "s"
      } could not be read`,
      description:
        "Fix the card names or copy counts before relying on the rest of the deck check.",
    });
  } else {
    checks.push({
      id: "unknown-cards",
      status: "good",
      title:
        "All entered cards were recognized",
      description:
        "Every non-empty line matched a card in the current Tetramon data set.",
    });
  }

  /* -------------------------------------------------------
     DECK SIZE
     ------------------------------------------------------- */

  if (
    summary.totalCards ===
    DECK_SIZE
  ) {
    checks.push({
      id: "deck-size",
      status: "good",
      title: "50 / 50 cards",
      description:
        "The deck matches the documented 50-card deck-size rule.",
    });
  } else {
    const difference =
      DECK_SIZE -
      summary.totalCards;

    checks.push({
      id: "deck-size",
      status: "error",
      title: `${summary.totalCards} / ${DECK_SIZE} cards`,
      description:
        difference > 0
          ? `Add ${difference} more card${
              difference === 1
                ? ""
                : "s"
            } to reach 50.`
          : `Remove ${Math.abs(
              difference
            )} card${
              Math.abs(
                difference
              ) === 1
                ? ""
                : "s"
            } to reach 50.`,
    });
  }

  /* -------------------------------------------------------
     COPY LIMIT
     ------------------------------------------------------- */

  const overLimit =
    deck.filter(
      (entry) =>
        entry.copies >
        MAX_COPIES
    );

  if (
    overLimit.length === 0
  ) {
    checks.push({
      id: "copy-limit",
      status: "good",
      title:
        "No card exceeds 4 copies",
      description:
        "The list passes the documented maximum-copy check.",
    });
  } else {
    checks.push({
      id: "copy-limit",
      status: "error",
      title: `${overLimit.length} card${
        overLimit.length === 1
          ? ""
          : "s"
      } exceed the copy limit`,
      description:
        "A Tetramon deck can contain no more than 4 copies of the same card name.",
    });
  }

  /* -------------------------------------------------------
     EVOLUTION SUPPORT
     ------------------------------------------------------- */

  const missingEvolution =
    evolutionProblems.filter(
      (problem) =>
        problem.status ===
        "missing"
    );

  const thinEvolution =
    evolutionProblems.filter(
      (problem) =>
        problem.status ===
        "thin"
    );

  if (
    missingEvolution.length > 0
  ) {
    checks.push({
      id: "evolution",
      status: "error",
      title: `${missingEvolution.length} broken evolution path${
        missingEvolution.length ===
        1
          ? ""
          : "s"
      }`,
      description:
        "At least one evolved card has none of its documented previous evolution cards in the deck.",
    });
  } else if (
    thinEvolution.length > 0
  ) {
    checks.push({
      id: "evolution",
      status: "warning",
      title: `${thinEvolution.length} thin evolution package${
        thinEvolution.length ===
        1
          ? ""
          : "s"
      }`,
      description:
        "The required earlier evolution exists, but there are fewer copies of it than the evolved card.",
    });
  } else {
    checks.push({
      id: "evolution",
      status: "good",
      title:
        "Evolution paths are supported",
      description:
        "Every evolution-dependent card in the list has a documented earlier-stage card available.",
    });
  }

  /* -------------------------------------------------------
     BASIC ACCESS
     ------------------------------------------------------- */

  if (
    summary.basicCopies === 0 &&
    summary.evolutionCopies > 0
  ) {
    checks.push({
      id: "basic-access",
      status: "warning",
      title:
        "No Basic cards detected",
      description:
        "This list contains evolution-dependent cards but no Basic-class cards. Check whether your evolution packages can actually start reliably.",
    });
  } else if (
    summary.basicCopies > 0
  ) {
    checks.push({
      id: "basic-access",
      status: "info",
      title: `${summary.basicCopies} Basic card${
        summary.basicCopies === 1
          ? ""
          : "s"
      }`,
      description:
        "Basic count is shown as a consistency signal, not as a fixed deck-building requirement.",
    });
  }

  /* -------------------------------------------------------
     DRAW SUPPORT
     ------------------------------------------------------- */

  if (
    summary.drawCopies === 0
  ) {
    checks.push({
      id: "draw",
      status: "warning",
      title:
        "No draw effects detected",
      description:
        "The list may have fewer ways to find specific evolution pieces or recover from an awkward hand.",
    });
  } else {
    checks.push({
      id: "draw",
      status: "info",
      title: `${summary.drawCopies} card copies with draw effects`,
      description:
        "This is a deck-building signal rather than a requirement; some strategies need more cycling than others.",
    });
  }

  return checks;
}

/* =========================================================
   FORMAT HELPERS
   ========================================================= */

function formatPreviousCards(
  cards: TetramonCard[]
): string {
  if (cards.length === 0) {
    return "its earlier evolution";
  }

  if (cards.length === 1) {
    return cards[0].name;
  }

  if (cards.length === 2) {
    return `${cards[0].name} or ${cards[1].name}`;
  }

  return `${cards
    .slice(0, -1)
    .map((card) => card.name)
    .join(", ")}, or ${
    cards[
      cards.length - 1
    ].name
  }`;
}

function statusLabel(
  status: CheckStatus
): string {
  switch (status) {
    case "good":
      return "Pass";

    case "warning":
      return "Check";

    case "error":
      return "Fix";

    default:
      return "Info";
  }
}

function statusClasses(
  status: CheckStatus
): string {
  switch (status) {
    case "good":
      return "border-emerald-200 bg-emerald-50 text-emerald-900";

    case "warning":
      return "border-amber-200 bg-amber-50 text-amber-950";

    case "error":
      return "border-rose-200 bg-rose-50 text-rose-950";

    default:
      return "border-slate-200 bg-slate-50 text-slate-900";
  }
}

function badgeClasses(
  status: CheckStatus
): string {
  switch (status) {
    case "good":
      return "bg-emerald-100 text-emerald-800";

    case "warning":
      return "bg-amber-100 text-amber-900";

    case "error":
      return "bg-rose-100 text-rose-800";

    default:
      return "bg-slate-200 text-slate-700";
  }
}

/* =========================================================
   SMALL COMPONENTS
   ========================================================= */

function SummaryMetric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-2xl font-bold text-slate-950">
        {value}
      </div>
    </div>
  );
}

function CheckCard({
  item,
}: {
  item: CheckItem;
}) {
  return (
    <div
      className={[
        "rounded-xl border p-4",
        statusClasses(
          item.status
        ),
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-bold">
            {item.title}
          </h4>

          <p className="mt-1 text-sm leading-6 opacity-80">
            {item.description}
          </p>
        </div>

        <span
          className={[
            "shrink-0 rounded-full px-2.5 py-1 text-xs font-bold",
            badgeClasses(
              item.status
            ),
          ].join(" ")}
        >
          {statusLabel(
            item.status
          )}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   EXAMPLE DECK
   ========================================================= */

/**
 * This is intentionally only a parser example.
 *
 * It is NOT labelled as a recommended 50-card deck.
 */
const EXAMPLE_INPUT = `4x Flamchik
4x Pyropeck
2x Angez
4x Moskit`;

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function DeckChecker() {
  const [input, setInput] =
    useState("");

  const [checkedInput, setCheckedInput] =
    useState("");

  const [hasChecked, setHasChecked] =
    useState(false);

  /* -------------------------------------------------------
     PARSE
     ------------------------------------------------------- */

  const parsedLines =
    useMemo(
      () =>
        parseDeckText(
          checkedInput
        ),
      [checkedInput]
    );

  const parseErrors =
    useMemo(
      () =>
        parsedLines.filter(
          (line) =>
            Boolean(line.error)
        ),
      [parsedLines]
    );

  const deck =
    useMemo(
      () =>
        parsedLinesToDeck(
          parsedLines
        ),
      [parsedLines]
    );

  /* -------------------------------------------------------
     ANALYSIS
     ------------------------------------------------------- */

  const summary =
    useMemo(
      () =>
        buildDeckSummary(deck),
      [deck]
    );

  const evolutionProblems =
    useMemo(
      () =>
        findEvolutionProblems(
          deck
        ),
      [deck]
    );

  const checks =
    useMemo(
      () =>
        buildChecks(
          deck,
          parseErrors,
          summary,
          evolutionProblems
        ),
      [
        deck,
        parseErrors,
        summary,
        evolutionProblems,
      ]
    );

  const deckScore =
    useMemo(
      () =>
        scoreTetramonDeck(
          deck
        ),
      [deck]
    );

  /* -------------------------------------------------------
     OTHER DERIVED VALUES
     ------------------------------------------------------- */

  const resolvedDeck =
    useMemo(
      () =>
        resolveDeck(deck),
      [deck]
    );

  const overLimitCards =
    useMemo(
      () =>
        resolvedDeck.filter(
          ({ copies }) =>
            copies >
            MAX_COPIES
        ),
      [resolvedDeck]
    );

  const hasErrors =
    checks.some(
      (item) =>
        item.status ===
        "error"
    );

  const hasWarnings =
    checks.some(
      (item) =>
        item.status ===
        "warning"
    );

  /* -------------------------------------------------------
     ACTIONS
     ------------------------------------------------------- */

  function runCheck() {
    setCheckedInput(input);
    setHasChecked(true);
  }

  function reset() {
    setInput("");
    setCheckedInput("");
    setHasChecked(false);
  }

  function loadExample() {
    setInput(EXAMPLE_INPUT);
    setCheckedInput("");
    setHasChecked(false);
  }

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <section
      aria-labelledby="deck-checker-title"
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
          id="deck-checker-title"
          className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          Check Your Tetramon Deck
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Paste your deck list to check
          the 50-card rule, copy limits,
          evolution support, draw
          coverage, and other consistency
          signals. The checker separates
          actual deck-rule problems from
          strategy warnings so you can
          see what must be fixed and what
          is simply worth reviewing.
        </p>
      </div>

      {/* ===================================================
          INPUT
          =================================================== */}

      <div className="px-5 py-6 sm:px-6">
        <label
          htmlFor="tetramon-deck-input"
          className="block text-lg font-bold text-slate-950"
        >
          Paste your deck list
        </label>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Use one card per line. Formats
          such as{" "}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
            4x Flamchik
          </code>
          ,{" "}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
            4 Flamchik
          </code>
          , and{" "}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
            Flamchik x4
          </code>{" "}
          are accepted.
        </p>

        <textarea
          id="tetramon-deck-input"
          value={input}
          onChange={(event) => {
            setInput(
              event.target.value
            );
            setHasChecked(false);
          }}
          rows={12}
          spellCheck={false}
          placeholder={`4x Flamchik
4x Pyropeck
4x Kidsune
4x Bonfiox
...`}
          className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={runCheck}
            disabled={
              input.trim().length ===
              0
            }
            className="rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check My Deck
          </button>

          <button
            type="button"
            onClick={loadExample}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-slate-500"
          >
            Load Example
          </button>

          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-slate-500"
          >
            Clear
          </button>
        </div>
      </div>

      {/* ===================================================
          RESULTS
          =================================================== */}

      {hasChecked ? (
        <div
          aria-live="polite"
          className="border-t border-slate-200 bg-white"
        >
          {/* ------------------------------------------------
              RESULT VERDICT
              ------------------------------------------------ */}

          <div className="px-5 py-5 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Deck Check
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  {hasErrors
                    ? "This deck needs fixes"
                    : hasWarnings
                      ? "This deck passes the main rules, with some warnings"
                      : "No major problems found"}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  {hasErrors
                    ? "Start with the red checks below. Rule and parsing problems can make the rest of the analysis misleading."
                    : hasWarnings
                      ? "The deck does not show a major rule failure, but the yellow checks may affect how consistently the plan works."
                      : "The current checker did not find a deck-size, copy-limit, or evolution-support problem."}
                </p>
              </div>

              <div className="shrink-0 rounded-xl bg-slate-100 px-4 py-3 text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Deck Score
                </div>

                <div className="mt-1 text-2xl font-bold text-slate-950">
                  {deckScore.score}
                  /100
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  Data-driven check
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------
              SUMMARY
              ------------------------------------------------ */}

          <div className="grid gap-3 border-t border-slate-200 bg-slate-50 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
            <SummaryMetric
              label="Deck Size"
              value={`${summary.totalCards}/50`}
            />

            <SummaryMetric
              label="Unique Cards"
              value={
                summary.uniqueCards
              }
            />

            <SummaryMetric
              label="Basic Cards"
              value={
                summary.basicCopies
              }
            />

            <SummaryMetric
              label="Evolution Cards"
              value={
                summary.evolutionCopies
              }
            />
          </div>

          {/* ------------------------------------------------
              CHECK LIST
              ------------------------------------------------ */}

          <div className="border-t border-slate-200 px-5 py-6 sm:px-6">
            <h3 className="text-xl font-bold text-slate-950">
              What to Fix First
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Red items are actual rule,
              input, or broken-evolution
              problems. Yellow items are
              consistency warnings. Blue
              items are descriptive
              signals rather than rules.
            </p>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              {checks.map(
                (item) => (
                  <CheckCard
                    key={item.id}
                    item={item}
                  />
                )
              )}
            </div>
          </div>

          {/* ------------------------------------------------
              UNKNOWN INPUT
              ------------------------------------------------ */}

          {parseErrors.length > 0 ? (
            <div className="border-t border-slate-200 px-5 py-6 sm:px-6">
              <h3 className="text-xl font-bold text-slate-950">
                Unrecognized Lines
              </h3>

              <div className="mt-4 space-y-2">
                {parseErrors.map(
                  (line, index) => (
                    <div
                      key={`${line.raw}-${index}`}
                      className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3"
                    >
                      <code className="text-sm text-rose-950">
                        {line.raw}
                      </code>

                      <p className="mt-1 text-sm text-rose-800">
                        {line.error}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : null}

          {/* ------------------------------------------------
              COPY LIMIT DETAILS
              ------------------------------------------------ */}

          {overLimitCards.length >
          0 ? (
            <div className="border-t border-slate-200 px-5 py-6 sm:px-6">
              <h3 className="text-xl font-bold text-slate-950">
                Copy Limit Problems
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {overLimitCards.map(
                  ({
                    card,
                    copies,
                  }) => (
                    <div
                      key={card.id}
                      className="rounded-xl border border-rose-200 bg-rose-50 p-4"
                    >
                      <div className="font-bold text-rose-950">
                        {card.name}
                      </div>

                      <p className="mt-1 text-sm leading-6 text-rose-800">
                        {copies} copies
                        entered. Reduce
                        this to 4 or
                        fewer.
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : null}

          {/* ------------------------------------------------
              EVOLUTION PROBLEMS
              ------------------------------------------------ */}

          {evolutionProblems.length >
          0 ? (
            <div className="border-t border-slate-200 px-5 py-6 sm:px-6">
              <h3 className="text-xl font-bold text-slate-950">
                Evolution Problems
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Evolution cards need
                access to their
                documented earlier
                evolution. A missing
                stage is more serious
                than simply running
                fewer copies.
              </p>

              <div className="mt-4 space-y-3">
                {evolutionProblems.map(
                  (problem) => (
                    <div
                      key={
                        problem.card.id
                      }
                      className={[
                        "rounded-xl border p-4",
                        problem.status ===
                        "missing"
                          ? "border-rose-200 bg-rose-50"
                          : "border-amber-200 bg-amber-50",
                      ].join(" ")}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h4 className="font-bold text-slate-950">
                            {
                              problem.card
                                .name
                            }
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-slate-700">
                            You have{" "}
                            <strong>
                              {
                                problem.copies
                              }
                            </strong>{" "}
                            cop
                            {problem.copies ===
                            1
                              ? "y"
                              : "ies"}{" "}
                            of this card.
                            It evolves from{" "}
                            <strong>
                              {formatPreviousCards(
                                problem.previousCards
                              )}
                            </strong>
                            .
                          </p>
                        </div>

                        <span
                          className={[
                            "rounded-full px-2.5 py-1 text-xs font-bold",
                            problem.status ===
                            "missing"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-amber-100 text-amber-900",
                          ].join(" ")}
                        >
                          {problem.status ===
                          "missing"
                            ? "Missing Stage"
                            : "Thin Support"}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        {problem.status ===
                        "missing"
                          ? `No copy of ${formatPreviousCards(
                              problem.previousCards
                            )} was found in the deck.`
                          : `Only ${problem.previousCopies} earlier-stage copy${
                              problem.previousCopies ===
                              1
                                ? ""
                                : "ies"
                            } support ${problem.copies} copies of ${problem.card.name}. This is a consistency warning, not a deck-rule violation.`}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : null}

          {/* ------------------------------------------------
              DECK COMPOSITION
              ------------------------------------------------ */}

          <div className="border-t border-slate-200 bg-slate-50 px-5 py-6 sm:px-6">
            <h3 className="text-xl font-bold text-slate-950">
              Deck Composition
            </h3>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              {/* -------------------------------------------
                  CLASS
                  ------------------------------------------- */}

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h4 className="font-bold text-slate-950">
                  By Card Class
                </h4>

                <div className="mt-4 space-y-3">
                  {CARD_CLASSES.map(
                    (cardClass) => (
                      <div
                        key={
                          cardClass
                        }
                        className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-slate-600">
                          {cardClass}
                        </span>

                        <span className="font-bold text-slate-950">
                          {
                            summary
                              .classCopies[
                              cardClass
                            ]
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* -------------------------------------------
                  TYPE
                  ------------------------------------------- */}

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h4 className="font-bold text-slate-950">
                  By Type
                </h4>

                <div className="mt-4 space-y-3">
                  {CARD_TYPES.map(
                    (type) => (
                      <div
                        key={type}
                        className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-slate-600">
                          {type}
                        </span>

                        <span className="font-bold text-slate-950">
                          {
                            summary
                              .typeCopies[
                              type
                            ]
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* ---------------------------------------------
                ROLE SIGNALS
                --------------------------------------------- */}

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <SummaryMetric
                label="Draw Copies"
                value={
                  summary.drawCopies
                }
              />

              <SummaryMetric
                label="Control Copies"
                value={
                  summary.controlCopies
                }
              />

              <SummaryMetric
                label="Damage Copies"
                value={
                  summary.damageCopies
                }
              />
            </div>
          </div>

          {/* ------------------------------------------------
              MODEL BREAKDOWN
              ------------------------------------------------ */}

          <div className="border-t border-slate-200 px-5 py-6 sm:px-6">
            <h3 className="text-xl font-bold text-slate-950">
              Consistency Signals
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              These scores help compare
              deck structure. They are
              not tournament win rates
              and should not be read as
              guarantees that one deck
              will beat another.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SummaryMetric
                label="Legality"
                value={
                  deckScore.breakdown
                    .legality
                }
              />

              <SummaryMetric
                label="Consistency"
                value={
                  deckScore.breakdown
                    .consistency
                }
              />

              <SummaryMetric
                label="Evolution Safety"
                value={
                  deckScore.breakdown
                    .evolutionSafety
                }
              />

              <SummaryMetric
                label="Draw Support"
                value={
                  deckScore.breakdown
                    .drawSupport
                }
              />

              <SummaryMetric
                label="Interaction"
                value={
                  deckScore.breakdown
                    .interaction
                }
              />

              <SummaryMetric
                label="Synergy"
                value={
                  deckScore.breakdown
                    .synergy
                }
              />
            </div>
          </div>

          {/* ------------------------------------------------
              RECOGNIZED DECK
              ------------------------------------------------ */}

          {resolvedDeck.length > 0 ? (
            <div className="border-t border-slate-200 px-5 py-6 sm:px-6">
              <h3 className="text-xl font-bold text-slate-950">
                Recognized Cards
              </h3>

              <div className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {resolvedDeck.map(
                  ({
                    card,
                    copies,
                  }) => (
                    <div
                      key={card.id}
                      className="flex items-center justify-between gap-4 border-b border-slate-100 py-2.5 text-sm"
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

                      <span className="shrink-0 font-bold text-slate-700">
                        ×{copies}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : null}

          {/* ------------------------------------------------
              FOOTNOTE
              ------------------------------------------------ */}

          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
            <p className="text-xs leading-5 text-slate-500">
              Rule checks use the
              documented 50-card deck
              size and maximum of 4
              copies per card name.
              Evolution, draw,
              consistency, interaction,
              and synergy results are
              deck-building guidance
              derived from the current
              Tetramon data and scoring
              model rather than
              competitive match
              statistics.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}