// src/data/tcg-card-shop-simulator/tetramon-types.ts

/**
 * Shared data model for the Tetramon Duel Master tools.
 *
 * Data is intentionally split into:
 *
 * 1. Source facts
 *    - card name
 *    - card class
 *    - type
 *    - card number range
 *    - play effect
 *    - evolution relationships
 *    - six printed stats
 *
 * 2. Derived tool data
 *    - effect tags
 *    - evolution depth
 *    - stat totals
 *    - deck warnings
 *    - rule-based scores
 *
 * This keeps factual card data separate from our own
 * deck-building and ranking logic.
 */

/* =========================================================
   CARD BASICS
   ========================================================= */

   export const TETRAMON_TYPES = [
    "Fire",
    "Water",
    "Earth",
    "Wind",
  ] as const;
  
  export type TetramonType =
    (typeof TETRAMON_TYPES)[number];
  
  export const TETRAMON_CARD_CLASSES = [
    "Basic",
    "Rare",
    "Epic",
    "Legendary",
  ] as const;
  
  export type TetramonCardClass =
    (typeof TETRAMON_CARD_CLASSES)[number];
  
  /**
   * Confidence describes the completeness of our factual
   * gameplay data for a card.
   *
   * verified:
   * All fields required by the tool have been checked.
   *
   * partial:
   * The card is real, but one or more gameplay fields are
   * still incomplete.
   *
   * provisional:
   * The entry exists for temporary matching/import purposes
   * and should not be ranked.
   */
  export type CardDataConfidence =
    | "verified"
    | "partial"
    | "provisional";
  
  /* =========================================================
     CARD NUMBER
     ========================================================= */
  
  /**
   * A playable Tetramon identity can correspond to a range
   * of collectible card numbers.
   *
   * Example:
   *
   * Flamchik
   * 1333 - 1344
   *
   * The Deck Builder treats this as one playable card rather
   * than twelve separate cosmetic/collection variants.
   */
  export interface TetramonCardNumberRange {
    from: number;
    to: number;
  }
  
  /* =========================================================
     CARD STATS
     ========================================================= */
  
  export interface TetramonCardStats {
    health: number;
    strength: number;
    vitality: number;
    spirit: number;
    magic: number;
    speed: number;
  }
  
  export type TetramonStatKey =
    keyof TetramonCardStats;
  
  /* =========================================================
     EFFECT TAGS
     ========================================================= */
  
  /**
   * These tags are DERIVED DATA.
   *
   * They are not presented as official in-game classifications.
   *
   * They allow Find My Deck, Deck Checker and Tier List to
   * reason about card roles without repeatedly parsing raw
   * Play Effect strings in React components.
   */
  export const CARD_EFFECT_TAGS = [
    "draw",
    "discard-self",
    "discard-opponent",
  
    "damage-boost",
    "double-damage",
    "all-element-damage",
  
    "shield",
    "shield-break",
  
    "drain",
  
    "field-destruction",
    "random-field-destruction",
  
    "evolution-lock",
  
    "damage-negation",
    "attack-disable",
  
    "unblockable-tp-damage",
  
    "field-swap",
  
    "conditional",
  ] as const;
  
  export type CardEffectTag =
    (typeof CARD_EFFECT_TAGS)[number];
  
  /* =========================================================
     CARD DATA
     ========================================================= */
  
  export interface TetramonCard {
    /**
     * Stable normalized internal ID.
     *
     * Example:
     * "flamchik"
     * "pyropeck"
     */
    id: string;
  
    name: string;
  
    /**
     * Wiki grouping:
     * Basic / Rare / Epic / Legendary.
     *
     * Do NOT use this field alone to infer whether a card
     * requires an evolution prerequisite.
     */
    cardClass: TetramonCardClass;
  
    /**
     * Fire / Water / Earth / Wind.
     */
    type: TetramonType;
  
    cardNumber: TetramonCardNumberRange;
  
    /**
     * Basic-card source data includes an album page.
     *
     * Other classes may not expose it in the source table,
     * so this remains optional.
     */
    albumPage?: number;
  
    /**
     * Raw normalized Play Effect text.
     *
     * Keep this close to the source wording.
     * Interpretation belongs in effectTags/scoring.
     */
    playEffect: string;
  
    /**
     * Evolution relationships.
     *
     * Arrays are required because the data contains branching
     * evolution paths.
     *
     * Example:
     *
     * Beakai
     *   -> Talontsu
     *   -> Talonika
     *
     * Both can later lead toward Talonryu.
     *
     * Empty array means no relationship is documented.
     */
    previousEvolutions: string[];
    nextEvolutions: string[];
  
    stats: TetramonCardStats;
  
    /**
     * Derived from playEffect.
     *
     * These tags power filters and recommendation logic.
     */
    effectTags: CardEffectTag[];
  
    confidence: CardDataConfidence;
  }
  
  /* =========================================================
     DERIVED CARD DATA
     ========================================================= */
  
  export interface TetramonDerivedStats {
    /**
     * Simple sum of the six printed stats.
     *
     * This is useful for comparison but is NOT itself a
     * card-strength score.
     */
    statTotal: number;
  
    /**
     * Number of documented previous-evolution links.
     */
    previousEvolutionCount: number;
  
    /**
     * Number of documented next-evolution links.
     */
    nextEvolutionCount: number;
  
    hasPreviousEvolution: boolean;
    hasNextEvolution: boolean;
  
    /**
     * True when a card participates in at least one
     * documented evolution relationship.
     */
    isEvolutionCard: boolean;
  
    /**
     * True when the card has no documented previous evolution
     * but does have a next evolution.
     *
     * Note that this is derived from source relationships,
     * not from Basic/Rare/Epic/Legendary alone.
     */
    isEvolutionStarter: boolean;
  
    /**
     * True when the card has a previous evolution but no
     * documented next evolution.
     */
    isEvolutionFinisher: boolean;
  }
  
  /* =========================================================
     DECK CARD
     ========================================================= */
  
  export interface DeckCard {
    cardId: string;
    copies: number;
  }
  
  /**
   * Expanded form used when a component needs the full card
   * object together with its deck quantity.
   */
  export interface ResolvedDeckCard {
    card: TetramonCard;
    copies: number;
  }
  
  /* =========================================================
     OFFICIAL / VERIFIED DECK RULES
     ========================================================= */
  
  /**
   * These values belong to the actual Duel Master rules
   * represented by our tool.
   *
   * They should remain separate from recommendation heuristics.
   */
  export interface TetramonDeckRules {
    requiredDeckSize: number;
    maxCopiesPerCardName: number;
    openingHandSize: number;
    mulligans: number;
    guardianCards: number;
    startingTamerPoints: number;
    guardianThresholds: readonly number[];
  }
  
  /* =========================================================
     DECK CHECKER
     ========================================================= */
  
  export type DeckCheckSeverity =
    | "error"
    | "warning"
    | "info"
    | "success";
  
  export type DeckCheckCategory =
    | "deck-size"
    | "copy-limit"
    | "unknown-card"
    | "evolution"
    | "type-balance"
    | "draw"
    | "consistency"
    | "data-quality";
  
  export interface DeckCheckIssue {
    id: string;
  
    severity: DeckCheckSeverity;
  
    category: DeckCheckCategory;
  
    title: string;
  
    message: string;
  
    /**
     * Cards responsible for or related to the warning.
     */
    cardIds?: string[];
  }
  
  /* =========================================================
     DECK STATS
     ========================================================= */
  
  export interface DeckTypeCounts {
    Fire: number;
    Water: number;
    Earth: number;
    Wind: number;
  }
  
  export interface DeckClassCounts {
    Basic: number;
    Rare: number;
    Epic: number;
    Legendary: number;
  }
  
  export interface DeckStatTotals {
    health: number;
    strength: number;
    vitality: number;
    spirit: number;
    magic: number;
    speed: number;
  }
  
  export interface DeckCheckStats {
    totalCards: number;
  
    uniqueCards: number;
  
    typeCounts: DeckTypeCounts;
  
    classCounts: DeckClassCounts;
  
    statTotals: DeckStatTotals;
  
    /**
     * Total number of copies carrying each derived effect tag.
     */
    effectTagCounts: Partial<
      Record<CardEffectTag, number>
    >;
  
    cardsWithPreviousEvolution: number;
  
    cardsWithNextEvolution: number;
  
    evolutionStarters: number;
  
    evolutionFinishers: number;
  
    verifiedCards: number;
  
    incompleteDataCards: number;
  }
  
  export interface DeckCheckResult {
    /**
     * Legal refers only to verified hard-rule violations.
     *
     * A deck can be legal while still receiving strategic
     * warnings.
     */
    legal: boolean;
  
    stats: DeckCheckStats;
  
    issues: DeckCheckIssue[];
  
    errorCount: number;
  
    warningCount: number;
  
    infoCount: number;
  }
  
  /* =========================================================
     EVOLUTION GRAPH
     ========================================================= */
  
  export interface EvolutionNode {
    cardId: string;
  
    previous: string[];
  
    next: string[];
  }
  
  export interface EvolutionChain {
    /**
     * Starting card IDs.
     *
     * Usually one, but arrays allow branching graphs.
     */
    roots: string[];
  
    /**
     * All card IDs reachable in this evolution family.
     */
    cards: string[];
  
    /**
     * Final documented cards in the family.
     */
    finishers: string[];
  
    hasBranch: boolean;
  }
  
  export interface EvolutionValidationIssue {
    id: string;
  
    type:
      | "missing-card"
      | "missing-reverse-link"
      | "conflicting-link"
      | "cycle";
  
    message: string;
  
    cardIds: string[];
  }
  
  /* =========================================================
     FIND MY DECK
     ========================================================= */
  
  export const DECK_GOALS = [
    "beginner",
    "consistency",
    "aggressive",
    "evolution",
    "draw",
    "discard",
    "control",
    "balanced",
  ] as const;
  
  export type DeckGoal =
    (typeof DECK_GOALS)[number];
  
  export const DECK_EXPERIENCE_LEVELS = [
    "new",
    "learning",
    "experienced",
  ] as const;
  
  export type DeckExperience =
    (typeof DECK_EXPERIENCE_LEVELS)[number];
  
  export interface DeckFinderPreferences {
    experience: DeckExperience;
  
    goal: DeckGoal;
  
    /**
     * null = no preferred type.
     */
    preferredType: TetramonType | null;
  
    /**
     * Useful for players who do not want a deck that frequently
     * strands higher evolution cards in hand.
     */
    preferSimpleEvolution: boolean;
  
    /**
     * Optional card the player specifically wants to build around.
     *
     * Used by:
     * /deck-builder?core=pyropeck
     */
    coreCardId?: string;
  }
  
  /* =========================================================
     DECK PRESETS
     ========================================================= */
  
  export type DeckPresetStatus =
    | "community"
    | "tested"
    | "experimental";
  
  export type DeckEvidenceLevel =
    | "strong"
    | "moderate"
    | "limited";
  
  export interface TetramonDeckPreset {
    id: string;
  
    name: string;
  
    description: string;
  
    cards: DeckCard[];
  
    goals: DeckGoal[];
  
    types: TetramonType[];
  
    status: DeckPresetStatus;
  
    /**
     * Describes the strength of evidence behind this preset.
     *
     * It is NOT a win-rate confidence value.
     */
    evidenceLevel: DeckEvidenceLevel;
  
    /**
     * Main cards/archetype anchors.
     */
    coreCardIds: string[];
  
    whyItWorks: string[];
  
    cautions: string[];
  
    /**
     * Optional source-facing note for our own maintenance.
     * Components do not need to render it.
     */
    editorialNote?: string;
  }
  
  /* =========================================================
     DECK RECOMMENDATIONS
     ========================================================= */
  
  export interface DeckRecommendation {
    deck: TetramonDeckPreset;
  
    /**
     * 0–100 preference-match score.
     *
     * This means:
     *
     * "How closely does this documented preset match the
     * player's requested style?"
     *
     * It does NOT mean win rate or meta strength.
     */
    fitScore: number;
  
    reasons: string[];
  
    cautions: string[];
  }
  
  /* =========================================================
     CARD SCORING
     ========================================================= */
  
  /**
   * All scoring dimensions below are OUR derived model.
   *
   * None should be presented as official stats or tournament
   * performance measurements.
   */
  export interface CardScoreBreakdown {
    /**
     * How reliably the card contributes without demanding
     * awkward prerequisites.
     */
    reliability: number;
  
    /**
     * How easily it fits into different deck plans.
     */
    flexibility: number;
  
    /**
     * Quality of the documented Play Effect.
     */
    effectValue: number;
  
    /**
     * Synergy potential with documented deck mechanics.
     */
    synergy: number;
  
    /**
     * How safe its evolution requirements are from a
     * deck-consistency perspective.
     */
    evolutionAccessibility: number;
  
    /**
     * Printed-stat contribution relative to comparable cards.
     */
    statEfficiency: number;
  }
  
  export type CardTier =
    | "S"
    | "A"
    | "B"
    | "C"
    | "Unranked";
  
  export interface CardScoreResult {
    cardId: string;
  
    /**
     * 0–100 model score.
     */
    score: number;
  
    tier: CardTier;
  
    breakdown: CardScoreBreakdown;
  
    strengths: string[];
  
    weaknesses: string[];
  
    confidence: CardDataConfidence;
  }
  
  /* =========================================================
     TIER LIST FILTERING
     ========================================================= */
  
  export interface TierListFilters {
    type: TetramonType | "All";
  
    cardClass: TetramonCardClass | "All";
  
    effectTag: CardEffectTag | "All";
  
    evolutionOnly: boolean;
  }
  
  /* =========================================================
     BUILDER STATE
     ========================================================= */
  
  export interface TetramonDeckBuilderState {
    cards: DeckCard[];
  
    search: string;
  
    typeFilter: TetramonType | "All";
  
    classFilter: TetramonCardClass | "All";
  
    effectFilter: CardEffectTag | "All";
  }
  
  /* =========================================================
     SHARE / IMPORT
     ========================================================= */
  
  /**
   * Portable representation used for copy/share/import.
   *
   * Versioning this now prevents us from locking ourselves into
   * the first serialization format forever.
   */
  export interface TetramonSharedDeck {
    version: 1;
  
    name?: string;
  
    cards: DeckCard[];
  }
  
  /* =========================================================
     TOOL DATASET
     ========================================================= */
  
  /**
   * Useful if we later want to expose the entire factual dataset
   * to a client component in one object.
   */
  export interface TetramonDataset {
    cards: TetramonCard[];
  
    deckRules: TetramonDeckRules;
  
    presets: TetramonDeckPreset[];
  }