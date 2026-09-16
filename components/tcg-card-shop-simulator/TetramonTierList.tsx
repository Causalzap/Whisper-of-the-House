"use client";

import {
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";

import {
  TETRAMON_CARDS,
  TETRAMON_CARD_BY_ID,
} from "@/data/tcg-card-shop-simulator/tetramon-cards";

import {
  getTetramonCardScore,
} from "@/data/tcg-card-shop-simulator/tetramon-scoring";

import type {
  CardEffectTag,
  CardScoreResult,
  CardTier,
  TetramonCard,
  TetramonCardClass,
  TetramonType,
} from "@/data/tcg-card-shop-simulator/tetramon-types";

/* =========================================================
   TYPES
   ========================================================= */

type TierFilter =
  | "All"
  | "S"
  | "A"
  | "B"
  | "C";

type SortMode =
  | "score-desc"
  | "score-asc"
  | "name"
  | "class"
  | "type";

interface TierFilters {
  search: string;
  tier: TierFilter;
  type: TetramonType | "All";
  cardClass:
    | TetramonCardClass
    | "All";
  effect: CardEffectTag | "All";
  sort: SortMode;
}

interface RankedCard {
  card: TetramonCard;
  result: CardScoreResult;
}

/* =========================================================
   DISPLAY
   ========================================================= */

const INITIAL_VISIBLE_CARDS = 12;
const LOAD_MORE_COUNT = 12;

/* =========================================================
   OPTIONS
   ========================================================= */

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

const TIER_OPTIONS: TierFilter[] = [
  "All",
  "S",
  "A",
  "B",
  "C",
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
    value:
      "random-field-destruction",
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
    value:
      "unblockable-tp-damage",
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

const SORT_OPTIONS: Array<{
  value: SortMode;
  label: string;
}> = [
  {
    value: "score-desc",
    label: "Highest Score",
  },
  {
    value: "score-asc",
    label: "Lowest Score",
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

const DEFAULT_FILTERS: TierFilters = {
  search: "",
  tier: "All",
  type: "All",
  cardClass: "All",
  effect: "All",
  sort: "score-desc",
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

function matchesSearch(
  card: TetramonCard,
  search: string
): boolean {
  const query =
    normalizeSearchText(search);

  if (!query) {
    return true;
  }

  const evolutionNames = [
    ...card.previousEvolutions,
    ...card.nextEvolutions,
  ]
    .map(
      (id) =>
        TETRAMON_CARD_BY_ID.get(
          id
        )?.name ?? id
    )
    .join(" ");

  const haystack =
    normalizeSearchText(
      [
        card.name,
        card.type,
        card.cardClass,
        card.playEffect,
        evolutionNames,
        ...card.effectTags,
      ].join(" ")
    );

  return haystack.includes(query);
}

/* =========================================================
   CLASS ORDER
   ========================================================= */

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
   RANKED DATA
   ========================================================= */

function buildRankedCards():
  RankedCard[] {
  return TETRAMON_CARDS.flatMap(
    (card) => {
      const result =
        getTetramonCardScore(
          card.id
        );

      if (!result) {
        return [];
      }

      return [
        {
          card,
          result,
        },
      ];
    }
  );
}

const ALL_RANKED_CARDS =
  buildRankedCards();

const ALL_CARDS_BY_SCORE = [
  ...ALL_RANKED_CARDS,
].sort(
  (a, b) =>
    b.result.score -
      a.result.score ||
    a.card.name.localeCompare(
      b.card.name
    )
);

const OVERALL_RANK_BY_CARD_ID =
  new Map<string, number>(
    ALL_CARDS_BY_SCORE.map(
      (ranked, index) => [
        ranked.card.id,
        index + 1,
      ]
    )
  );

/* =========================================================
   FILTER + SORT
   ========================================================= */

function filterRankedCards(
  filters: TierFilters
): RankedCard[] {
  const filtered =
    ALL_RANKED_CARDS.filter(
      ({ card, result }) => {
        if (
          !matchesSearch(
            card,
            filters.search
          )
        ) {
          return false;
        }

        if (
          filters.tier !== "All" &&
          result.tier !==
            filters.tier
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
          filters.cardClass !==
            "All" &&
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

        return true;
      }
    );

  return [...filtered].sort(
    (a, b) => {
      switch (filters.sort) {
        case "score-asc":
          return (
            a.result.score -
              b.result.score ||
            a.card.name.localeCompare(
              b.card.name
            )
          );

        case "name":
          return a.card.name.localeCompare(
            b.card.name
          );

        case "class":
          return (
            classOrder(
              a.card.cardClass
            ) -
              classOrder(
                b.card.cardClass
              ) ||
            b.result.score -
              a.result.score ||
            a.card.name.localeCompare(
              b.card.name
            )
          );

        case "type":
          return (
            a.card.type.localeCompare(
              b.card.type
            ) ||
            b.result.score -
              a.result.score ||
            a.card.name.localeCompare(
              b.card.name
            )
          );

        case "score-desc":
        default:
          return (
            b.result.score -
              a.result.score ||
            a.card.name.localeCompare(
              b.card.name
            )
          );
      }
    }
  );
}

/* =========================================================
   TIER COUNTS
   ========================================================= */

function getTierCount(
  tier: TierFilter
): number {
  if (tier === "All") {
    return ALL_RANKED_CARDS.length;
  }

  return ALL_RANKED_CARDS.filter(
    ({ result }) =>
      result.tier === tier
  ).length;
}

/* =========================================================
   EVOLUTION TEXT
   ========================================================= */

function getEvolutionText(
  card: TetramonCard
): string {
  const previous =
    card.previousEvolutions.map(
      (id) =>
        TETRAMON_CARD_BY_ID.get(
          id
        )?.name ?? id
    );

  const next =
    card.nextEvolutions.map(
      (id) =>
        TETRAMON_CARD_BY_ID.get(
          id
        )?.name ?? id
    );

  if (
    previous.length === 0 &&
    next.length === 0
  ) {
    return "Standalone card";
  }

  if (
    previous.length === 0 &&
    next.length > 0
  ) {
    return `Evolution starter → ${next.join(
      " / "
    )}`;
  }

  if (
    previous.length > 0 &&
    next.length === 0
  ) {
    return `Evolves from ${previous.join(
      " / "
    )}`;
  }

  return `${previous.join(
    " / "
  )} → ${card.name} → ${next.join(
    " / "
  )}`;
}

/* =========================================================
   SCORE EXPLANATION
   ========================================================= */

function getScoreSummary(
  result: CardScoreResult
): string {
  const breakdown =
    result.breakdown;

  const entries = [
    {
      label: "effect value",
      value:
        breakdown.effectValue,
    },
    {
      label: "reliability",
      value:
        breakdown.reliability,
    },
    {
      label: "evolution access",
      value:
        breakdown
          .evolutionAccessibility,
    },
    {
      label: "synergy",
      value:
        breakdown.synergy,
    },
    {
      label: "flexibility",
      value:
        breakdown.flexibility,
    },
    {
      label: "stat efficiency",
      value:
        breakdown.statEfficiency,
    },
  ].sort(
    (a, b) =>
      b.value - a.value
  );

  const strongest =
    entries[0];

  const second =
    entries[1];

  return `Its strongest model signals are ${strongest.label} (${Math.round(
    strongest.value
  )}) and ${second.label} (${Math.round(
    second.value
  )}).`;
}

/* =========================================================
   UI HELPERS
   ========================================================= */

function tierBadgeClasses(
  tier: CardTier
): string {
  switch (tier) {
    case "S":
      return "bg-slate-950 text-white";

    case "A":
      return "bg-slate-800 text-white";

    case "B":
      return "bg-slate-200 text-slate-900";

    case "C":
      return "bg-slate-100 text-slate-700";

    default:
      return "bg-slate-100 text-slate-500";
  }
}

function scoreBarWidth(
  value: number
): string {
  return `${Math.max(
    0,
    Math.min(
      100,
      Math.round(value)
    )
  )}%`;
}

/* =========================================================
   SELECT FIELD
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
  children: ReactNode;
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

/* =========================================================
   SCORE SIGNAL
   ========================================================= */

function ScoreSignal({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const rounded =
    Math.round(value);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="text-slate-500">
          {label}
        </span>

        <span className="font-bold text-slate-800">
          {rounded}
        </span>
      </div>

      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-slate-800"
          style={{
            width:
              scoreBarWidth(
                rounded
              ),
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   DECK CTA ICON
   ========================================================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}

/* =========================================================
   CARD ROW
   ========================================================= */

function TierCard({
  ranked,
}: {
  ranked: RankedCard;
}) {
  const { card, result } =
    ranked;

  const [expanded, setExpanded] =
    useState(false);

  const overallRank =
    OVERALL_RANK_BY_CARD_ID.get(
      card.id
    );

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.02]">
      {/* SUMMARY */}

      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={[
                  "inline-flex min-w-9 items-center justify-center rounded-lg px-2.5 py-1 text-sm font-black",
                  tierBadgeClasses(
                    result.tier
                  ),
                ].join(" ")}
              >
                {result.tier}
              </span>

              <h3 className="text-lg font-bold text-slate-950">
                {card.name}
              </h3>

              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                {card.type}
              </span>

              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                {card.cardClass}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              {card.playEffect}
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              {getEvolutionText(
                card
              )}
            </p>
          </div>

          {/* SCORE */}

          <div className="flex shrink-0 items-end justify-between gap-5 border-t border-slate-100 pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
            {overallRank ? (
              <div className="text-xs font-semibold text-slate-400">
                Overall #{overallRank}
              </div>
            ) : null}

            <div className="text-right">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Card Score
              </div>

              <div className="mt-0.5 text-2xl font-black leading-none text-slate-950">
                {result.score}
                <span className="ml-0.5 text-sm font-semibold text-slate-400">
                  /100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIONS */}

        <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 sm:flex sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={() =>
              setExpanded(
                (current) =>
                  !current
              )
            }
            aria-expanded={
              expanded
            }
            className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
          >
            {expanded
              ? "Hide Score Details"
              : "Why This Score?"}
          </button>

          <Link
            href={`/tcg-card-shop-simulator/deck-builder?core=${encodeURIComponent(
              card.id
            )}`}
            aria-label={`Build a Tetramon deck around ${card.name}`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-bold !text-white !no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white hover:!no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            <span>
              Build a Deck With This Card
            </span>

            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* EXPANDED SCORE */}

      {expanded ? (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-5 sm:px-5">
          <h4 className="font-bold text-slate-950">
            Why {card.name} scored{" "}
            {result.score}
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {getScoreSummary(
              result
            )}{" "}
            These values come from
            the current card data and
            v1.2 scoring model rather
            than match win rates.
          </p>

          <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            <ScoreSignal
              label="Effect Value"
              value={
                result.breakdown
                  .effectValue
              }
            />

            <ScoreSignal
              label="Reliability"
              value={
                result.breakdown
                  .reliability
              }
            />

            <ScoreSignal
              label="Evolution Access"
              value={
                result.breakdown
                  .evolutionAccessibility
              }
            />

            <ScoreSignal
              label="Synergy"
              value={
                result.breakdown
                  .synergy
              }
            />

            <ScoreSignal
              label="Flexibility"
              value={
                result.breakdown
                  .flexibility
              }
            />

            <ScoreSignal
              label="Stat Efficiency"
              value={
                result.breakdown
                  .statEfficiency
              }
            />
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              <MiniStat
                label="Health"
                value={
                  card.stats.health
                }
              />

              <MiniStat
                label="Strength"
                value={
                  card.stats.strength
                }
              />

              <MiniStat
                label="Vitality"
                value={
                  card.stats.vitality
                }
              />

              <MiniStat
                label="Spirit"
                value={
                  card.stats.spirit
                }
              />

              <MiniStat
                label="Magic"
                value={
                  card.stats.magic
                }
              />

              <MiniStat
                label="Speed"
                value={
                  card.stats.speed
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

/* =========================================================
   MINI STAT
   ========================================================= */

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-center">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </div>

      <div className="mt-0.5 font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

/* =========================================================
   TIER SUMMARY
   ========================================================= */

function TierSummary({
  selected,
  onSelect,
}: {
  selected: TierFilter;
  onSelect: (
    tier: TierFilter
  ) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {TIER_OPTIONS.map(
        (tier) => {
          const count =
            getTierCount(tier);

          const active =
            selected === tier;

          return (
            <button
              key={tier}
              type="button"
              onClick={() =>
                onSelect(tier)
              }
              aria-pressed={
                active
              }
              className={[
                "rounded-xl border px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
                active
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50",
              ].join(" ")}
            >
              <div
                className={[
                  "text-xs font-semibold uppercase tracking-wide",
                  active
                    ? "text-slate-300"
                    : "text-slate-500",
                ].join(" ")}
              >
                {tier === "All"
                  ? "All Cards"
                  : `${tier} Tier`}
              </div>

              <div className="mt-1 text-xl font-black">
                {count}
              </div>
            </button>
          );
        }
      )}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function TetramonTierList() {
  const [filters, setFilters] =
    useState<TierFilters>(
      DEFAULT_FILTERS
    );

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(
    INITIAL_VISIBLE_CARDS
  );

  const matchingCards =
    useMemo(
      () =>
        filterRankedCards(
          filters
        ),
      [filters]
    );

  const displayedCards =
    useMemo(
      () =>
        matchingCards.slice(
          0,
          visibleCount
        ),
      [
        matchingCards,
        visibleCount,
      ]
    );

  const hasMoreCards =
    displayedCards.length <
    matchingCards.length;

  const topCard =
    ALL_CARDS_BY_SCORE[0] ??
    null;

  function updateFilters(
    patch:
      Partial<TierFilters>
  ) {
    setFilters((current) => ({
      ...current,
      ...patch,
    }));

    setVisibleCount(
      INITIAL_VISIBLE_CARDS
    );
  }

  function resetFilters() {
    setFilters(
      DEFAULT_FILTERS
    );

    setVisibleCount(
      INITIAL_VISIBLE_CARDS
    );
  }

  return (
    <section
      aria-labelledby="tetramon-tier-list-title"
      className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
    >
      {/* HEADER */}

      <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Tetramon Card Rankings
        </p>

        <h2
          id="tetramon-tier-list-title"
          className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
        >
          Tetramon Card Tier List
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Compare all{" "}
          {TETRAMON_CARDS.length}{" "}
          playable Tetramon card
          identities by card effect,
          reliability, evolution
          accessibility, synergy,
          flexibility, and stats. The
          ranking is built to help with
          deck construction rather than
          imitate a tournament win-rate
          meta that the current match
          data cannot support.
        </p>

        {topCard ? (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            The current highest score
            belongs to{" "}
            <strong className="font-semibold text-slate-800">
              {topCard.card.name}
            </strong>{" "}
            at{" "}
            <strong className="font-semibold text-slate-800">
              {topCard.result.score}
              /100
            </strong>
            . That makes it the strongest
            individual profile in this
            model, not an automatic fit
            for every 50-card deck.
          </p>
        ) : null}
      </div>

      {/* TIER SUMMARY */}

      <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
        <TierSummary
          selected={
            filters.tier
          }
          onSelect={(tier) =>
            updateFilters({
              tier,
            })
          }
        />

        <p className="mt-3 text-xs leading-5 text-slate-500">
          An empty tier is intentional.
          Cards are not moved upward just
          to create a more even-looking
          distribution.
        </p>
      </div>

      {/* FILTERS */}

      <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-6">
        <label
          htmlFor="tetramon-tier-search"
          className="block text-sm font-bold text-slate-950"
        >
          Search cards
        </label>

        <input
          id="tetramon-tier-search"
          type="search"
          value={
            filters.search
          }
          onChange={(event) =>
            updateFilters({
              search:
                event.target.value,
            })
          }
          placeholder="Search Flamchik, draw, shield, destroy..."
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            label="Card Class"
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
                  key={
                    cardClass
                  }
                  value={
                    cardClass
                  }
                >
                  {cardClass}
                </option>
              )
            )}
          </SelectField>

          <SelectField
            label="Effect"
            value={
              filters.effect
            }
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
            label="Sort"
            value={
              filters.sort
            }
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
              {
                matchingCards.length
              }
            </strong>{" "}
            matching cards
            {matchingCards.length !==
            ALL_RANKED_CARDS.length
              ? ` · ${ALL_RANKED_CARDS.length} total`
              : ""}
          </p>

          <button
            type="button"
            onClick={
              resetFilters
            }
            className="text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
          >
            Reset filters
          </button>
        </div>
      </div>

      {/* RESULTS */}

      <div className="px-5 py-5 sm:px-6">
        {displayedCards.length >
        0 ? (
          <>
            <div className="space-y-3">
              {displayedCards.map(
                (ranked) => (
                  <TierCard
                    key={
                      ranked.card.id
                    }
                    ranked={
                      ranked
                    }
                  />
                )
              )}
            </div>

            {hasMoreCards ? (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount(
                      (current) =>
                        Math.min(
                          current +
                            LOAD_MORE_COUNT,
                          matchingCards.length
                        )
                    )
                  }
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
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
                    setVisibleCount(
                      matchingCards.length
                    )
                  }
                  className="px-3 py-2.5 text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
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
              <div className="mt-5 border-t border-slate-200 pt-5 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount(
                      INITIAL_VISIBLE_CARDS
                    )
                  }
                  className="text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
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
              Try another type,
              class, effect, tier, or
              clear the search field.
            </p>

            <button
              type="button"
              onClick={
                resetFilters
              }
              className="mt-4 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Show All Cards
            </button>
          </div>
        )}
      </div>

      {/* METHODOLOGY */}

      <div className="border-t border-slate-200 bg-white px-5 py-5 sm:px-6">
        <h3 className="font-bold text-slate-950">
          How This Tier List Works
        </h3>

        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
          The ranking uses documented
          card stats, Play Effects,
          evolution requirements,
          evolution accessibility,
          deck-building consistency,
          flexibility, and synergy.
          Effect values account for
          differences such as draw
          quantity, discard quantity,
          damage bonuses, shields,
          damage negation, field
          destruction thresholds, and
          other effect magnitudes where
          the card data provides them.
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          This is a data-driven
          deck-building ranking rather
          than a tournament meta
          ranking. Positions can change
          when stronger 1.0 match
          evidence becomes available,
          but cards are not promoted or
          demoted merely to create a
          predetermined number of S-,
          A-, B-, or C-tier cards.
        </p>
      </div>
    </section>
  );
}