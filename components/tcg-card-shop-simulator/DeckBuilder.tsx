"use client";

import { useMemo, useState } from "react";

import {
  TETRAMON_CARDS,
  TETRAMON_CARD_BY_ID,
  normalizeTetramonId,
} from "@/data/tcg-card-shop-simulator/tetramon-cards";

import {
  getTetramonCardScore,
  scoreTetramonDeck,
} from "@/data/tcg-card-shop-simulator/tetramon-scoring";

import type {
  CardEffectTag,
  CardTier,
  DeckCard,
  TetramonCard,
  TetramonCardClass,
  TetramonType,
} from "@/data/tcg-card-shop-simulator/tetramon-types";

/* =========================================================
   TYPES
   ========================================================= */

type SortMode =
  | "name"
  | "score"
  | "class"
  | "type";

type EvolutionFilter =
  | "all"
  | "starter"
  | "evolution"
  | "standalone";

interface BuilderFilters {
  search: string;
  type: TetramonType | "All";
  cardClass: TetramonCardClass | "All";
  tier: CardTier | "All";
  effect: CardEffectTag | "All";
  evolution: EvolutionFilter;
  sort: SortMode;
}

interface ResolvedDeckEntry {
  card: TetramonCard;
  copies: number;
}

interface EvolutionWarning {
  card: TetramonCard;
  copies: number;
  previousCards: TetramonCard[];
  previousCopies: number;
  status: "missing" | "thin";
}

/* =========================================================
   CONSTANTS
   ========================================================= */

const DECK_SIZE = 50;
const MAX_COPIES = 4;

const INITIAL_VISIBLE_CARDS = 8;
const LOAD_MORE_COUNT = 8;

const CANONICAL_URL =
  "https://www.whisperofthehouse.com/tcg-card-shop-simulator/deck-builder";

const TYPE_OPTIONS: Array<
  TetramonType | "All"
> = [
  "All",
  "Fire",
  "Water",
  "Earth",
  "Wind",
];

const CLASS_OPTIONS: Array<
  TetramonCardClass | "All"
> = [
  "All",
  "Basic",
  "Rare",
  "Epic",
  "Legendary",
];

const TIER_ORDER: Array<
  Exclude<CardTier, "Unranked">
> = [
  "S",
  "A",
  "B",
  "C",
];

/**
 * Only expose tiers that currently contain
 * at least one ranked card.
 *
 * This keeps an empty S Tier out of the UI
 * without changing the scoring model itself.
 */
const AVAILABLE_TIER_OPTIONS: Array<
  CardTier | "All"
> = [
  "All",
  ...TIER_ORDER.filter((tier) =>
    TETRAMON_CARDS.some((card) => {
      return (
        getTetramonCardScore(card.id)
          ?.tier === tier
      );
    })
  ),
];

const EVOLUTION_OPTIONS: Array<{
  value: EvolutionFilter;
  label: string;
}> = [
  {
    value: "all",
    label: "All Cards",
  },
  {
    value: "starter",
    label: "Evolution Starters",
  },
  {
    value: "evolution",
    label: "Needs Evolution",
  },
  {
    value: "standalone",
    label: "Standalone",
  },
];

const SORT_OPTIONS: Array<{
  value: SortMode;
  label: string;
}> = [
  {
    value: "score",
    label: "Card Score",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "class",
    label: "Card Class",
  },
  {
    value: "type",
    label: "Type",
  },
];

const EFFECT_OPTIONS: Array<{
  value: CardEffectTag | "All";
  label: string;
}> = [
  {
    value: "All",
    label: "All Effects",
  },
  {
    value: "draw",
    label: "Draw",
  },
  {
    value: "discard-self",
    label: "Self Discard",
  },
  {
    value: "discard-opponent",
    label: "Opponent Discard",
  },
  {
    value: "damage-boost",
    label: "Damage Boost",
  },
  {
    value: "double-damage",
    label: "Double Damage",
  },
  {
    value: "all-element-damage",
    label: "All-Element Damage",
  },
  {
    value: "shield",
    label: "Shield",
  },
  {
    value: "shield-break",
    label: "Shield Break",
  },
  {
    value: "drain",
    label: "Drain",
  },
  {
    value: "field-destruction",
    label: "Field Destruction",
  },
  {
    value: "random-field-destruction",
    label: "Random Destruction",
  },
  {
    value: "evolution-lock",
    label: "Evolution Lock",
  },
  {
    value: "damage-negation",
    label: "Damage Negation",
  },
  {
    value: "attack-disable",
    label: "Attack Disable",
  },
  {
    value: "unblockable-tp-damage",
    label: "Unblockable TP",
  },
  {
    value: "field-swap",
    label: "Field Swap",
  },
  {
    value: "conditional",
    label: "Conditional",
  },
];

const DEFAULT_FILTERS: BuilderFilters = {
  search: "",
  type: "All",
  cardClass: "All",
  tier: "All",
  effect: "All",
  evolution: "all",
  sort: "score",
};

/* =========================================================
   SEARCH
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

function cardMatchesSearch(
  card: TetramonCard,
  search: string
): boolean {
  const query =
    normalizeSearchText(search);

  if (!query) {
    return true;
  }

  const haystack =
    normalizeSearchText(
      [
        card.name,
        card.type,
        card.cardClass,
        card.playEffect,
        ...card.previousEvolutions,
        ...card.nextEvolutions,
      ].join(" ")
    );

  return haystack.includes(query);
}

/* =========================================================
   EVOLUTION FILTER
   ========================================================= */

function matchesEvolutionFilter(
  card: TetramonCard,
  filter: EvolutionFilter
): boolean {
  switch (filter) {
    case "starter":
      return (
        card.previousEvolutions.length ===
          0 &&
        card.nextEvolutions.length > 0
      );

    case "evolution":
      return (
        card.previousEvolutions.length >
        0
      );

    case "standalone":
      return (
        card.previousEvolutions.length ===
          0 &&
        card.nextEvolutions.length === 0
      );

    default:
      return true;
  }
}

/* =========================================================
   FILTER CARDS
   ========================================================= */

function filterCards(
  filters: BuilderFilters
): TetramonCard[] {
  const cards =
    TETRAMON_CARDS.filter((card) => {
      if (
        !cardMatchesSearch(
          card,
          filters.search
        )
      ) {
        return false;
      }

      if (
        filters.type !== "All" &&
        card.type !== filters.type
      ) {
        return false;
      }

      if (
        filters.cardClass !== "All" &&
        card.cardClass !==
          filters.cardClass
      ) {
        return false;
      }

      if (
        filters.effect !== "All" &&
        !card.effectTags.includes(
          filters.effect
        )
      ) {
        return false;
      }

      if (
        !matchesEvolutionFilter(
          card,
          filters.evolution
        )
      ) {
        return false;
      }

      if (
        filters.tier !== "All"
      ) {
        const result =
          getTetramonCardScore(
            card.id
          );

        if (
          result?.tier !==
          filters.tier
        ) {
          return false;
        }
      }

      return true;
    });

  return [...cards].sort((a, b) => {
    switch (filters.sort) {
      case "name":
        return a.name.localeCompare(
          b.name
        );

      case "class":
        return (
          classOrder(a.cardClass) -
            classOrder(b.cardClass) ||
          a.name.localeCompare(b.name)
        );

      case "type":
        return (
          a.type.localeCompare(
            b.type
          ) ||
          a.name.localeCompare(b.name)
        );

      case "score":
      default: {
        const aScore =
          getTetramonCardScore(
            a.id
          )?.score ?? 0;

        const bScore =
          getTetramonCardScore(
            b.id
          )?.score ?? 0;

        return (
          bScore - aScore ||
          a.name.localeCompare(b.name)
        );
      }
    }
  });
}

function classOrder(
  cardClass: TetramonCardClass
): number {
  switch (cardClass) {
    case "Basic":
      return 0;

    case "Rare":
      return 1;

    case "Epic":
      return 2;

    case "Legendary":
      return 3;
  }
}

/* =========================================================
   DECK HELPERS
   ========================================================= */

function totalDeckCards(
  deck: DeckCard[]
): number {
  return deck.reduce(
    (sum, entry) =>
      sum + entry.copies,
    0
  );
}

function getCopies(
  deck: DeckCard[],
  cardId: string
): number {
  return (
    deck.find(
      (entry) =>
        normalizeTetramonId(
          entry.cardId
        ) ===
        normalizeTetramonId(cardId)
    )?.copies ?? 0
  );
}

function resolveDeck(
  deck: DeckCard[]
): ResolvedDeckEntry[] {
  return deck.flatMap(
    ({ cardId, copies }) => {
      const card =
        TETRAMON_CARD_BY_ID.get(
          normalizeTetramonId(cardId)
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
   EVOLUTION WARNINGS
   ========================================================= */

function findEvolutionWarnings(
  deck: DeckCard[]
): EvolutionWarning[] {
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

  const warnings: EvolutionWarning[] =
    [];

  for (const {
    card,
    copies,
  } of resolved) {
    if (
      card.previousEvolutions.length ===
      0
    ) {
      continue;
    }

    const previousCards =
      card.previousEvolutions
        .map((id) =>
          TETRAMON_CARD_BY_ID.get(id)
        )
        .filter(
          (
            previous
          ): previous is TetramonCard =>
            Boolean(previous)
        );

    const previousCopies =
      card.previousEvolutions.reduce(
        (sum, previousId) =>
          sum +
          (copiesById.get(
            previousId
          ) ?? 0),
        0
      );

    if (previousCopies === 0) {
      warnings.push({
        card,
        copies,
        previousCards,
        previousCopies,
        status: "missing",
      });

      continue;
    }

    if (
      previousCopies < copies
    ) {
      warnings.push({
        card,
        copies,
        previousCards,
        previousCopies,
        status: "thin",
      });
    }
  }

  return warnings;
}

/* =========================================================
   COMPOSITION
   ========================================================= */

function countByClass(
  resolved: ResolvedDeckEntry[],
  cardClass: TetramonCardClass
): number {
  return resolved.reduce(
    (sum, entry) =>
      entry.card.cardClass ===
      cardClass
        ? sum + entry.copies
        : sum,
    0
  );
}

function countByType(
  resolved: ResolvedDeckEntry[],
  type: TetramonType
): number {
  return resolved.reduce(
    (sum, entry) =>
      entry.card.type === type
        ? sum + entry.copies
        : sum,
    0
  );
}

/* =========================================================
   COPY DECK
   ========================================================= */

function buildDeckText(
  resolved: ResolvedDeckEntry[]
): string {
  return resolved
    .map(
      ({ card, copies }) =>
        `${copies}x ${card.name}`
    )
    .join("\n");
}

/* =========================================================
   FORMAT EVOLUTION
   ========================================================= */

function formatCardNames(
  cards: TetramonCard[]
): string {
  if (cards.length === 0) {
    return "an earlier evolution";
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
    cards[cards.length - 1].name
  }`;
}

/* =========================================================
   SHARE HELPERS
   ========================================================= */

function openShareWindow(
  url: string
) {
  window.open(
    url,
    "_blank",
    "noopener,noreferrer,width=760,height=720"
  );
}

function getCurrentShareUrl() {
  if (
    typeof window !== "undefined"
  ) {
    return window.location.href;
  }

  return CANONICAL_URL;
}

/* =========================================================
   SMALL UI
   ========================================================= */

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
      >
        {children}
      </select>
    </label>
  );
}

function Metric({
  label,
  value,
  subtext,
}: {
  label: string;
  value: string | number;
  subtext?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-xl font-bold text-slate-950">
        {value}
      </div>

      {subtext ? (
        <div className="mt-1 text-xs leading-5 text-slate-500">
          {subtext}
        </div>
      ) : null}
    </div>
  );
}

/* =========================================================
   CARD ROW
   ========================================================= */

function CardRow({
  card,
  copies,
  deckIsFull,
  onAdd,
  onRemove,
}: {
  card: TetramonCard;
  copies: number;
  deckIsFull: boolean;
  onAdd: () => void;
  onRemove: () => void;
}) {
  const score =
    getTetramonCardScore(
      card.id
    );

  const cannotAdd =
    copies >= MAX_COPIES ||
    deckIsFull;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-bold text-slate-950">
              {card.name}
            </h4>

            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
              {card.type}
            </span>

            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
              {card.cardClass}
            </span>

            {score &&
            score.tier !==
              "Unranked" ? (
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-bold text-white">
                {score.tier} ·{" "}
                {score.score}
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {card.playEffect}
          </p>

          {card.previousEvolutions
            .length > 0 ? (
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Evolves from:{" "}
              <strong className="font-semibold text-slate-700">
                {card.previousEvolutions
                  .map(
                    (id) =>
                      TETRAMON_CARD_BY_ID.get(
                        id
                      )?.name ?? id
                  )
                  .join(" / ")}
              </strong>
            </p>
          ) : card.nextEvolutions
              .length > 0 ? (
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Evolution starter
            </p>
          ) : (
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Standalone card
            </p>
          )}
        </div>

        <div className="shrink-0">
          <div className="flex items-center overflow-hidden rounded-lg border border-slate-300 bg-white">
            <button
              type="button"
              onClick={onRemove}
              disabled={copies === 0}
              aria-label={`Remove one ${card.name}`}
              className="h-9 w-9 font-bold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              −
            </button>

            <div className="flex h-9 min-w-10 items-center justify-center border-x border-slate-300 px-2 text-sm font-bold text-slate-950">
              {copies}
            </div>

            <button
              type="button"
              onClick={onAdd}
              disabled={cannotAdd}
              aria-label={`Add one ${card.name}`}
              className="h-9 w-9 font-bold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   SHARE CARD
   ========================================================= */

function ShareDeckResult({
  deckTotal,
  uniqueCards,
  deckScore,
  evolutionIssues,
}: {
  deckTotal: number;
  uniqueCards: number;
  deckScore: number;
  evolutionIssues: number;
}) {
  const complete =
    deckTotal === DECK_SIZE;

  const headline =
    complete
      ? "My Tetramon Deck is Ready"
      : `My Tetramon Deck is ${deckTotal}/50`;

  const summary =
    `${deckTotal}/50 cards · ` +
    `${uniqueCards} unique · ` +
    `${deckScore}/100 structure score · ` +
    `${evolutionIssues} evolution issue${
      evolutionIssues === 1
        ? ""
        : "s"
    }`;

  const shareText =
    complete
      ? `I built a 50-card Tetramon deck in TCG Card Shop Simulator. ${deckScore}/100 structure score with ${evolutionIssues} evolution issue${evolutionIssues === 1 ? "" : "s"}.`
      : `I'm building a Tetramon deck in TCG Card Shop Simulator: ${deckTotal}/50 cards, ${deckScore}/100 structure score.`;

  function shareOnX() {
    const url =
      getCurrentShareUrl();

    openShareWindow(
      `https://x.com/intent/post?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(
        url
      )}`
    );
  }

  function shareOnBluesky() {
    const url =
      getCurrentShareUrl();

    const text =
      `${shareText}\n\n${url}`;

    openShareWindow(
      `https://bsky.app/intent/compose?text=${encodeURIComponent(
        text
      )}`
    );
  }

  function shareOnReddit() {
    const url =
      getCurrentShareUrl();

    const title =
      complete
        ? `My TCG Card Shop Simulator Tetramon deck — ${deckScore}/100 structure score`
        : `Building my TCG Card Shop Simulator Tetramon deck — ${deckTotal}/50`;

    openShareWindow(
      `https://www.reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(
        title
      )}`
    );
  }

  return (
    <div className="border-t border-violet-100 bg-gradient-to-br from-white via-violet-50 to-sky-50 px-5 py-7 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-violet-700 sm:text-sm">
            Share Your Deck
          </p>

          <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            {headline}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {summary}
          </p>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
            Share your build and invite
            other players to try the
            Tetramon deck tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:max-w-[430px] lg:justify-end">
          <button
            type="button"
            onClick={shareOnX}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <XIcon />
            Share on X
          </button>

          <button
            type="button"
            onClick={shareOnBluesky}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600"
          >
            <BlueskyIcon />
            Share on Bluesky
          </button>

          <button
            type="button"
            onClick={shareOnReddit}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <RedditIcon />
            Share on Reddit
          </button>
        </div>
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M5 4l14 16" />
      <path d="M19 4L5 20" />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 10.8c-.9-1.8-3.35-5.15-5.63-6.82C4.18 2.38 3.34 2.65 2.8 2.9 2.17 3.18 2 4.14 2 4.7c0 .56.31 4.61.52 5.28.68 2.22 3.1 2.97 5.33 2.73-3.89.58-7.35 2.01-2.82 7.05 4.98 5.15 6.82-1.1 6.97-2.48.15 1.38 1.99 7.63 6.97 2.48 4.53-5.04 1.07-6.47-2.82-7.05 2.23.24 4.65-.51 5.33-2.73.21-.67.52-4.72.52-5.28 0-.56-.17-1.52-.8-1.8-.54-.25-1.38-.52-3.57 1.08C15.35 5.65 12.9 9 12 10.8Z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.5 12.2c-1.7 0-3 1-3 2.4 0 2.4 3.3 4.4 7.5 4.4s7.5-2 7.5-4.4c0-1.4-1.3-2.4-3-2.4" />
      <path d="M8 15.2h.01" />
      <path d="M16 15.2h.01" />
      <path d="M9 17c1.6 1 4.4 1 6 0" />
      <path d="M9.2 11.8l1-5 4.2.9" />
      <circle
        cx="16.6"
        cy="8"
        r="1.5"
      />
      <path d="M5.4 13.4A2 2 0 1 1 7 10.2" />
      <path d="M18.6 13.4A2 2 0 1 0 17 10.2" />
    </svg>
  );
}

/* =========================================================
   MAIN
   ========================================================= */

export default function DeckBuilder() {
  const [deck, setDeck] =
    useState<DeckCard[]>([]);

  const [filters, setFilters] =
    useState<BuilderFilters>(
      DEFAULT_FILTERS
    );

  const [
    visibleCardCount,
    setVisibleCardCount,
  ] = useState(
    INITIAL_VISIBLE_CARDS
  );

  const [copied, setCopied] =
    useState(false);

  /* -------------------------------------------------------
     DERIVED DECK
     ------------------------------------------------------- */

  const deckTotal =
    useMemo(
      () =>
        totalDeckCards(deck),
      [deck]
    );

  const deckIsFull =
    deckTotal >= DECK_SIZE;

  const resolvedDeck =
    useMemo(
      () =>
        resolveDeck(deck),
      [deck]
    );

  const deckScore =
    useMemo(
      () =>
        scoreTetramonDeck(deck),
      [deck]
    );

  const evolutionWarnings =
    useMemo(
      () =>
        findEvolutionWarnings(deck),
      [deck]
    );

  const missingEvolutionCount =
    evolutionWarnings.filter(
      (warning) =>
        warning.status ===
        "missing"
    ).length;

  const thinEvolutionCount =
    evolutionWarnings.filter(
      (warning) =>
        warning.status === "thin"
    ).length;

  /* -------------------------------------------------------
     FILTERED CARDS
     ------------------------------------------------------- */

  const matchingCards =
    useMemo(
      () =>
        filterCards(filters),
      [filters]
    );

  const displayedCards =
    useMemo(
      () =>
        matchingCards.slice(
          0,
          visibleCardCount
        ),
      [
        matchingCards,
        visibleCardCount,
      ]
    );

  const hasMoreCards =
    displayedCards.length <
    matchingCards.length;

  /* -------------------------------------------------------
     COMPOSITION
     ------------------------------------------------------- */

  const classCounts =
    useMemo(() => {
      return Object.fromEntries(
        CLASS_OPTIONS
          .filter(
            (
              value
            ): value is TetramonCardClass =>
              value !== "All"
          )
          .map((cardClass) => [
            cardClass,
            countByClass(
              resolvedDeck,
              cardClass
            ),
          ])
      ) as Record<
        TetramonCardClass,
        number
      >;
    }, [resolvedDeck]);

  const typeCounts =
    useMemo(() => {
      return Object.fromEntries(
        TYPE_OPTIONS
          .filter(
            (
              value
            ): value is TetramonType =>
              value !== "All"
          )
          .map((type) => [
            type,
            countByType(
              resolvedDeck,
              type
            ),
          ])
      ) as Record<
        TetramonType,
        number
      >;
    }, [resolvedDeck]);

  /* -------------------------------------------------------
     FILTER ACTIONS
     ------------------------------------------------------- */

  function updateFilters(
    patch: Partial<BuilderFilters>
  ) {
    setFilters((current) => ({
      ...current,
      ...patch,
    }));

    setVisibleCardCount(
      INITIAL_VISIBLE_CARDS
    );
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);

    setVisibleCardCount(
      INITIAL_VISIBLE_CARDS
    );
  }

  /* -------------------------------------------------------
     DECK ACTIONS
     ------------------------------------------------------- */

  function addCard(
    cardId: string
  ) {
    if (
      deckTotal >= DECK_SIZE
    ) {
      return;
    }

    setDeck((current) => {
      const normalized =
        normalizeTetramonId(
          cardId
        );

      const existing =
        current.find(
          (entry) =>
            normalizeTetramonId(
              entry.cardId
            ) === normalized
        );

      if (existing) {
        if (
          existing.copies >=
          MAX_COPIES
        ) {
          return current;
        }

        return current.map(
          (entry) =>
            normalizeTetramonId(
              entry.cardId
            ) === normalized
              ? {
                  ...entry,
                  copies:
                    entry.copies +
                    1,
                }
              : entry
        );
      }

      return [
        ...current,
        {
          cardId: normalized,
          copies: 1,
        },
      ];
    });

    setCopied(false);
  }

  function removeCard(
    cardId: string
  ) {
    setDeck((current) => {
      const normalized =
        normalizeTetramonId(
          cardId
        );

      const existing =
        current.find(
          (entry) =>
            normalizeTetramonId(
              entry.cardId
            ) === normalized
        );

      if (!existing) {
        return current;
      }

      if (
        existing.copies <= 1
      ) {
        return current.filter(
          (entry) =>
            normalizeTetramonId(
              entry.cardId
            ) !== normalized
        );
      }

      return current.map(
        (entry) =>
          normalizeTetramonId(
            entry.cardId
          ) === normalized
            ? {
                ...entry,
                copies:
                  entry.copies - 1,
              }
            : entry
      );
    });

    setCopied(false);
  }

  function clearDeck() {
    setDeck([]);
    setCopied(false);
  }

  async function copyDeck() {
    if (
      resolvedDeck.length === 0
    ) {
      return;
    }

    const text =
      buildDeckText(
        resolvedDeck
      );

    try {
      await navigator.clipboard.writeText(
        text
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <section
      aria-labelledby="tetramon-deck-builder-title"
      className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
    >
      {/* HEADER */}

      <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Tetramon Deck Tool
        </p>

        <h2
          id="tetramon-deck-builder-title"
          className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          Build Your Tetramon Deck
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Search the current Tetramon
          card data, add up to four
          copies of each card, and watch
          the deck checks update as you
          build. The tool tracks your
          50-card limit, evolution
          support, consistency, draw,
          interaction, and synergy
          without treating those
          strategy signals as official
          deck rules.
        </p>
      </div>

      {/* STATUS BAR */}

      <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-3xl font-bold">
                {deckTotal}/50
              </span>

              <span className="text-sm text-slate-300">
                cards in deck
              </span>
            </div>

            <div className="mt-2 h-2 w-full max-w-md overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    (deckTotal /
                      DECK_SIZE) *
                      100
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyDeck}
              disabled={
                resolvedDeck.length ===
                0
              }
              className="rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied
                ? "Copied"
                : "Copy Deck List"}
            </button>

            <button
              type="button"
              onClick={clearDeck}
              disabled={
                deck.length === 0
              }
              className="rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear Deck
            </button>
          </div>
        </div>
      </div>

      {/* TOP METRICS */}

      <div className="grid gap-3 border-b border-slate-200 px-5 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <Metric
          label="Deck Score"
          value={
            deck.length > 0
              ? `${deckScore.score}/100`
              : "—"
          }
          subtext="Data-driven structure score"
        />

        <Metric
          label="Consistency"
          value={
            deck.length > 0
              ? deckScore.breakdown
                  .consistency
              : "—"
          }
        />

        <Metric
          label="Evolution Safety"
          value={
            deck.length > 0
              ? deckScore.breakdown
                  .evolutionSafety
              : "—"
          }
        />

        <Metric
          label="Evolution Issues"
          value={
            evolutionWarnings.length
          }
          subtext={
            missingEvolutionCount > 0
              ? `${missingEvolutionCount} missing · ${thinEvolutionCount} thin`
              : thinEvolutionCount > 0
                ? `${thinEvolutionCount} thin`
                : "No current warning"
          }
        />
      </div>

      {/* LIVE DECK CHECK */}

      {deck.length > 0 ? (
        <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
          <h3 className="text-lg font-bold text-slate-950">
            Live Deck Check
          </h3>

          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <div
              className={[
                "rounded-xl border p-4",
                deckTotal === DECK_SIZE
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50",
              ].join(" ")}
            >
              <div className="font-bold text-slate-950">
                {deckTotal ===
                DECK_SIZE
                  ? "50 / 50 cards"
                  : `${deckTotal} / 50 cards`}
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-700">
                {deckTotal ===
                DECK_SIZE
                  ? "The deck matches the documented 50-card deck-size rule."
                  : `Add ${
                      DECK_SIZE -
                      deckTotal
                    } more card${
                      DECK_SIZE -
                        deckTotal ===
                      1
                        ? ""
                        : "s"
                    } to complete the deck.`}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="font-bold text-slate-950">
                Copy limit protected
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-700">
                The builder prevents
                adding more than four
                copies of the same card
                name.
              </p>
            </div>
          </div>

          {evolutionWarnings.length >
          0 ? (
            <div className="mt-4 space-y-3">
              {evolutionWarnings.map(
                (warning) => (
                  <div
                    key={
                      warning.card.id
                    }
                    className={[
                      "rounded-xl border p-4",
                      warning.status ===
                      "missing"
                        ? "border-rose-200 bg-rose-50"
                        : "border-amber-200 bg-amber-50",
                    ].join(" ")}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-slate-950">
                          {
                            warning.card
                              .name
                          }
                        </div>

                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          {warning.status ===
                          "missing"
                            ? `You have ${warning.copies} cop${
                                warning.copies ===
                                1
                                  ? "y"
                                  : "ies"
                              } of ${warning.card.name}, but no ${formatCardNames(
                                warning.previousCards
                              )} in the deck.`
                            : `You have ${warning.copies} copies of ${warning.card.name} but only ${warning.previousCopies} earlier-stage cop${
                                warning.previousCopies ===
                                1
                                  ? "y"
                                  : "ies"
                              } from ${formatCardNames(
                                warning.previousCards
                              )}.`}
                        </p>
                      </div>

                      <span
                        className={[
                          "rounded-full px-2.5 py-1 text-xs font-bold",
                          warning.status ===
                          "missing"
                            ? "bg-rose-100 text-rose-800"
                            : "bg-amber-100 text-amber-900",
                        ].join(" ")}
                      >
                        {warning.status ===
                        "missing"
                          ? "Missing Stage"
                          : "Thin Support"}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : null}
        </div>
      ) : null}

      {/* MAIN BUILDER */}

      <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* CARD LIBRARY */}

        <div className="min-w-0 border-slate-200 lg:border-r">
          <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
            <label
              htmlFor="tetramon-card-search"
              className="block text-lg font-bold text-slate-950"
            >
              Find Cards
            </label>

            <input
              id="tetramon-card-search"
              type="search"
              value={filters.search}
              onChange={(event) =>
                updateFilters({
                  search:
                    event.target.value,
                })
              }
              placeholder="Search Flamchik, draw, destroy, evolution..."
              className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <SelectField
                label="Type"
                value={filters.type}
                onChange={(value) =>
                  updateFilters({
                    type:
                      value as
                        | TetramonType
                        | "All",
                  })
                }
              >
                {TYPE_OPTIONS.map(
                  (type) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  )
                )}
              </SelectField>

              <SelectField
                label="Class"
                value={
                  filters.cardClass
                }
                onChange={(value) =>
                  updateFilters({
                    cardClass:
                      value as
                        | TetramonCardClass
                        | "All",
                  })
                }
              >
                {CLASS_OPTIONS.map(
                  (cardClass) => (
                    <option
                      key={cardClass}
                      value={cardClass}
                    >
                      {cardClass}
                    </option>
                  )
                )}
              </SelectField>

              <SelectField
                label="Effect"
                value={filters.effect}
                onChange={(value) =>
                  updateFilters({
                    effect:
                      value as
                        | CardEffectTag
                        | "All",
                  })
                }
              >
                {EFFECT_OPTIONS.map(
                  (option) => (
                    <option
                      key={
                        option.value
                      }
                      value={
                        option.value
                      }
                    >
                      {option.label}
                    </option>
                  )
                )}
              </SelectField>

              <SelectField
                label="Evolution"
                value={
                  filters.evolution
                }
                onChange={(value) =>
                  updateFilters({
                    evolution:
                      value as EvolutionFilter,
                  })
                }
              >
                {EVOLUTION_OPTIONS.map(
                  (option) => (
                    <option
                      key={
                        option.value
                      }
                      value={
                        option.value
                      }
                    >
                      {option.label}
                    </option>
                  )
                )}
              </SelectField>

              <SelectField
                label="Tier"
                value={filters.tier}
                onChange={(value) =>
                  updateFilters({
                    tier:
                      value as
                        | CardTier
                        | "All",
                  })
                }
              >
                {AVAILABLE_TIER_OPTIONS.map(
                  (tier) => (
                    <option
                      key={tier}
                      value={tier}
                    >
                      {tier === "All"
                        ? "All Tiers"
                        : `${tier} Tier`}
                    </option>
                  )
                )}
              </SelectField>

              <SelectField
                label="Sort"
                value={filters.sort}
                onChange={(value) =>
                  updateFilters({
                    sort:
                      value as SortMode,
                  })
                }
              >
                {SORT_OPTIONS.map(
                  (option) => (
                    <option
                      key={
                        option.value
                      }
                      value={
                        option.value
                      }
                    >
                      {option.label}
                    </option>
                  )
                )}
              </SelectField>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <strong className="text-slate-800">
                  {
                    displayedCards.length
                  }
                </strong>{" "}
                of{" "}
                <strong className="text-slate-800">
                  {matchingCards.length}
                </strong>{" "}
                matching cards
                {matchingCards.length !==
                TETRAMON_CARDS.length
                  ? ` · ${TETRAMON_CARDS.length} total`
                  : ""}
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
              >
                Reset filters
              </button>
            </div>
          </div>

          {/* CARD RESULTS */}

          <div className="space-y-3 px-5 py-5 sm:px-6">
            {displayedCards.length >
            0 ? (
              <>
                {displayedCards.map(
                  (card) => (
                    <CardRow
                      key={card.id}
                      card={card}
                      copies={getCopies(
                        deck,
                        card.id
                      )}
                      deckIsFull={
                        deckIsFull
                      }
                      onAdd={() =>
                        addCard(
                          card.id
                        )
                      }
                      onRemove={() =>
                        removeCard(
                          card.id
                        )
                      }
                    />
                  )
                )}

                {hasMoreCards ? (
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCardCount(
                          (current) =>
                            Math.min(
                              current +
                                LOAD_MORE_COUNT,
                              matchingCards.length
                            )
                        )
                      }
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Show{" "}
                      {Math.min(
                        LOAD_MORE_COUNT,
                        matchingCards.length -
                          displayedCards.length
                      )}{" "}
                      More
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCardCount(
                          matchingCards.length
                        )
                      }
                      className="px-4 py-2.5 text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
                    >
                      Show All{" "}
                      {
                        matchingCards.length
                      }{" "}
                      Cards
                    </button>
                  </div>
                ) : matchingCards.length >
                  INITIAL_VISIBLE_CARDS ? (
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCardCount(
                          INITIAL_VISIBLE_CARDS
                        )
                      }
                      className="text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
                    >
                      Collapse to{" "}
                      {
                        INITIAL_VISIBLE_CARDS
                      }{" "}
                      Cards
                    </button>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <h3 className="font-bold text-slate-950">
                  No cards match these
                  filters
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Try clearing one of the
                  filters or searching for
                  a different card or Play
                  Effect.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CURRENT DECK */}

        <aside className="min-w-0 bg-slate-50">
          <div className="px-5 py-5 lg:sticky lg:top-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Current Deck
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {deckTotal}/50 cards ·{" "}
                  {resolvedDeck.length}{" "}
                  unique
                </p>
              </div>

              {deckTotal ===
              DECK_SIZE ? (
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                  Complete
                </span>
              ) : null}
            </div>

            {resolvedDeck.length >
            0 ? (
              <div className="mt-4 space-y-2">
                {resolvedDeck.map(
                  ({
                    card,
                    copies,
                  }) => {
                    const score =
                      getTetramonCardScore(
                        card.id
                      );

                    return (
                      <div
                        key={card.id}
                        className="rounded-lg border border-slate-200 bg-white p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="truncate text-sm font-bold text-slate-950">
                              {
                                card.name
                              }
                            </div>

                            <div className="mt-0.5 text-xs text-slate-500">
                              {
                                card.type
                              }{" "}
                              ·{" "}
                              {
                                card.cardClass
                              }
                              {score &&
                              score.tier !==
                                "Unranked"
                                ? ` · ${score.tier} ${score.score}`
                                : ""}
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-1">
                            <button
                              type="button"
                              onClick={() =>
                                removeCard(
                                  card.id
                                )
                              }
                              aria-label={`Remove one ${card.name}`}
                              className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 bg-white text-sm font-bold text-slate-700 hover:bg-slate-100"
                            >
                              −
                            </button>

                            <span className="min-w-6 text-center text-sm font-bold text-slate-900">
                              {
                                copies
                              }
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                addCard(
                                  card.id
                                )
                              }
                              disabled={
                                copies >=
                                  MAX_COPIES ||
                                deckIsFull
                              }
                              aria-label={`Add one ${card.name}`}
                              className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 bg-white text-sm font-bold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
                <p className="text-sm font-semibold text-slate-700">
                  Your deck is empty.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Search the card library
                  and press + to start
                  building.
                </p>
              </div>
            )}

            {resolvedDeck.length >
            0 ? (
              <>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <h4 className="text-sm font-bold text-slate-950">
                    Card Classes
                  </h4>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {CLASS_OPTIONS.filter(
                      (
                        value
                      ): value is TetramonCardClass =>
                        value !==
                        "All"
                    ).map(
                      (cardClass) => (
                        <div
                          key={
                            cardClass
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2"
                        >
                          <div className="text-xs text-slate-500">
                            {
                              cardClass
                            }
                          </div>

                          <div className="font-bold text-slate-950">
                            {
                              classCounts[
                                cardClass
                              ]
                            }
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-bold text-slate-950">
                    Types
                  </h4>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {TYPE_OPTIONS.filter(
                      (
                        value
                      ): value is TetramonType =>
                        value !==
                        "All"
                    ).map(
                      (type) => (
                        <div
                          key={type}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2"
                        >
                          <div className="text-xs text-slate-500">
                            {type}
                          </div>

                          <div className="font-bold text-slate-950">
                            {
                              typeCounts[
                                type
                              ]
                            }
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <h4 className="text-sm font-bold text-slate-950">
                    Deck Signals
                  </h4>

                  <div className="mt-3 space-y-2 text-sm">
                    <DeckSignal
                      label="Legality"
                      value={
                        deckScore
                          .breakdown
                          .legality
                      }
                    />

                    <DeckSignal
                      label="Consistency"
                      value={
                        deckScore
                          .breakdown
                          .consistency
                      }
                    />

                    <DeckSignal
                      label="Evolution Safety"
                      value={
                        deckScore
                          .breakdown
                          .evolutionSafety
                      }
                    />

                    <DeckSignal
                      label="Draw Support"
                      value={
                        deckScore
                          .breakdown
                          .drawSupport
                      }
                    />

                    <DeckSignal
                      label="Interaction"
                      value={
                        deckScore
                          .breakdown
                          .interaction
                      }
                    />

                    <DeckSignal
                      label="Synergy"
                      value={
                        deckScore
                          .breakdown
                          .synergy
                      }
                    />
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </aside>
      </div>

      {/* MODEL NOTE */}

      <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
        <p className="text-xs leading-5 text-slate-500">
          The builder enforces the
          documented 50-card deck size
          and maximum of four copies per
          card name. Card scores,
          evolution safety, consistency,
          draw support, interaction, and
          synergy are data-driven
          deck-building signals rather
          than tournament win rates or
          official competitive rankings.
        </p>
      </div>

      {/* SHARE RESULT */}

      {deck.length > 0 ? (
        <ShareDeckResult
          deckTotal={deckTotal}
          uniqueCards={
            resolvedDeck.length
          }
          deckScore={
            deckScore.score
          }
          evolutionIssues={
            evolutionWarnings.length
          }
        />
      ) : null}
    </section>
  );
}

/* =========================================================
   DECK SIGNAL
   ========================================================= */

function DeckSignal({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-slate-600">
          {label}
        </span>

        <span className="font-bold text-slate-950">
          {Math.round(value)}
        </span>
      </div>

      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-slate-800"
          style={{
            width: `${Math.max(
              0,
              Math.min(
                100,
                value
              )
            )}%`,
          }}
        />
      </div>
    </div>
  );
}