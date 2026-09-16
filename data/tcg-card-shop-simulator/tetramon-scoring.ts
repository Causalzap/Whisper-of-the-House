// data/tcg-card-shop-simulator/tetramon-scoring.ts

import type {
    CardEffectTag,
    CardScoreBreakdown,
    CardScoreResult,
    CardTier,
    DeckCard,
    TetramonCard,
    TetramonCardClass,
    TetramonType,
  } from "./tetramon-types";
  
  import {
    TETRAMON_CARDS,
    TETRAMON_CARD_BY_ID,
    getDerivedCardStats,
    normalizeTetramonId,
  } from "./tetramon-cards";
  
  /* =========================================================
     MODEL VERSION
     ========================================================= */
  
  export const TETRAMON_SCORING_MODEL_VERSION = "1.2";
  
  /**
   * Data-driven deck-building model.
   *
   * This is NOT:
   * - an official in-game rating
   * - tournament win-rate data
   * - a competitive meta ranking
   *
   * v1.2:
   *
   * 1. Keeps the v1.1 scoring architecture.
   * 2. Makes Play Effect parsing more tolerant of source
   *    wording and source typos.
   * 3. Distinguishes destruction thresholds such as
   *    20 / 30 / 40 or less.
   * 4. Distinguishes "or higher" destruction conditions.
   * 5. Applies diminishing returns to multi-part effects.
   * 6. Caps heuristic Play Effect scores at 95 rather than
   *    allowing source-text arithmetic to imply certainty.
   */
  
  /* =========================================================
     SCORE WEIGHTS
     ========================================================= */
  
  export const CARD_SCORE_WEIGHTS = {
    reliability: 0.18,
    flexibility: 0.14,
    effectValue: 0.28,
    synergy: 0.14,
    evolutionAccessibility: 0.14,
    statEfficiency: 0.12,
  } as const;
  
  /* =========================================================
     EFFECT PARSING TYPES
     ========================================================= */
  
  export type DestructionThresholdDirection =
    | "or-less"
    | "or-higher"
    | null;
  
  export interface ParsedPlayEffect {
    draw: number;
  
    selfDiscard: number;
    opponentDiscard: number;
  
    extraDamage: number;
  
    doubleDamage: boolean;
    doubleShieldDamage: boolean;
    tripleShieldDamage: boolean;
  
    shield: number;
    drain: number;
  
    destroyCount: number;
    destroyAll: boolean;
    randomDestroy: boolean;
  
    destructionThreshold: number;
    destructionThresholdDirection:
      DestructionThresholdDirection;
  
    evolutionLockTurns: number;
  
    damageNegation: number;
  
    unblockableTpDamage: number;
  
    fieldSwap: number;
  
    attackDisableTurns: number;
  
    hasConditionalRestriction: boolean;
  }
  
  /* =========================================================
     NORMALIZE SOURCE TEXT FOR PARSING
     ========================================================= */
  
  /**
   * Source text itself remains untouched in tetramon-cards.ts.
   *
   * We only normalize a temporary parsing string here.
   */
  function normalizeEffectText(
    playEffect: string
  ): string {
    return playEffect
      .toLowerCase()
  
      /**
       * Known source typo:
       *
       * Katengu:
       * "Oponnent discard 1 card..."
       */
      .replace(/\boponnent\b/g, "opponent")
  
      /**
       * Normalize curly apostrophes if they ever appear.
       */
      .replace(/[’‘]/g, "'")
  
      /**
       * Collapse repeated whitespace.
       */
      .replace(/\s+/g, " ")
  
      .trim();
  }
  
  /* =========================================================
     COMPLETE EFFECT PARSER
     ========================================================= */
  
  export function parsePlayEffect(
    playEffect: string
  ): ParsedPlayEffect {
    const text =
      normalizeEffectText(playEffect);
  
    const threshold =
      parseDestructionThreshold(text);
  
    return {
      draw: parseDraw(text),
  
      selfDiscard:
        parseSelfDiscard(text),
  
      opponentDiscard:
        parseOpponentDiscard(text),
  
      extraDamage:
        parseExtraDamage(text),
  
      doubleDamage:
        text.includes("double damage") &&
        !text.includes(
          "double damage to shield"
        ),
  
      doubleShieldDamage:
        text.includes(
          "double damage to shield"
        ),
  
      tripleShieldDamage:
        text.includes(
          "triple damage to shield"
        ),
  
      shield: parseShield(text),
  
      drain:
        parseNumberBeforePhrase(
          text,
          "of damage dealt"
        ),
  
      destroyCount:
        parseDestroyCount(text),
  
      destroyAll:
        /\bdestroy all\b/.test(text),
  
      randomDestroy:
        isRandomDestroy(text),
  
      destructionThreshold:
        threshold.value,
  
      destructionThresholdDirection:
        threshold.direction,
  
      evolutionLockTurns:
        parseEvolutionLockTurns(
          text
        ),
  
      damageNegation:
        parseNegation(text),
  
      unblockableTpDamage:
        parseNumberBeforePhrase(
          text,
          "unblockable tp damage"
        ),
  
      fieldSwap:
        parseSwapCount(text),
  
      attackDisableTurns:
        parseAttackDisableTurns(
          text
        ),
  
      hasConditionalRestriction:
        threshold.direction !== null ||
        text.includes("but "),
    };
  }
  
  /* =========================================================
     EFFECT PARSER HELPERS
     ========================================================= */
  
  function parseDraw(
    text: string
  ): number {
    const match = text.match(
      /\bdraw\s+(\d+)\s+cards?\b/
    );
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  function parseSelfDiscard(
    text: string
  ): number {
    /**
     * Remove opponent-discard phrases before searching for
     * player/self discard.
     *
     * Supports:
     *
     * opponent discard 1 card
     * opponent's discard 1 card
     */
    const withoutOpponentDiscard =
      text.replace(
        /opponent(?:'s)?\s+discard\s+\d+\s+cards?/g,
        ""
      );
  
    const match =
      withoutOpponentDiscard.match(
        /\bdiscard\s+(\d+)\s+cards?\b/
      );
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  function parseOpponentDiscard(
    text: string
  ): number {
    const match = text.match(
      /opponent(?:'s)?\s+discard\s+(\d+)\s+cards?/
    );
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  function parseExtraDamage(
    text: string
  ): number {
    const match = text.match(
      /\bdeals?\s+(\d+)\s+extra damage\b/
    );
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  function parseShield(
    text: string
  ): number {
    const match = text.match(
      /\bshield to block\s+(\d+)\s+damage\b/
    );
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  function parseNegation(
    text: string
  ): number {
    const match = text.match(
      /\bnegate\s+(\d+)\b/
    );
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  function parseNumberBeforePhrase(
    text: string,
    phrase: string
  ): number {
    const escaped =
      phrase.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
  
    const regex = new RegExp(
      `(\\d+)\\s+${escaped}`
    );
  
    const match =
      text.match(regex);
  
    return match
      ? Number(match[1])
      : 0;
  }
  
  /* =========================================================
     DESTROY PARSER
     ========================================================= */
  
  function parseDestroyCount(
    text: string
  ): number {
    if (
      /\bdestroy all\b/.test(text)
    ) {
      /**
       * Used only as an internal magnitude marker.
       *
       * destroyAll remains the authoritative flag.
       */
      return 3;
    }
  
    /**
     * Examples:
     *
     * Destroy 1 card
     * Destroy 2 opponent's field card
     */
    const numericMatch =
      text.match(
        /\bdestroy\s+(\d+)\s+(?:opponent(?:'s)?\s+)?(?:field\s+)?cards?\b/
      );
  
    if (numericMatch) {
      return Number(
        numericMatch[1]
      );
    }
  
    /**
     * Handles source wording without a number:
     *
     * "destroy a field card"
     * "destroy a field card at random"
     * "destroy an opponent field card"
     */
    const articleMatch =
      text.match(
        /\bdestroy\s+(?:a|an|one)\s+(?:opponent(?:'s)?\s+)?(?:field\s+)?card\b/
      );
  
    if (articleMatch) {
      return 1;
    }
  
    return 0;
  }
  
  function isRandomDestroy(
    text: string
  ): boolean {
    return (
      /\bdestroy\b/.test(text) &&
      /\bat random\b/.test(text)
    );
  }
  
  /* =========================================================
     DESTRUCTION THRESHOLD PARSER
     ========================================================= */
  
  function parseDestructionThreshold(
    text: string
  ): {
    value: number;
    direction:
      DestructionThresholdDirection;
  } {
    /**
     * Examples:
     *
     * fire element 20 or less
     * water element 30 or less
     * earth element 40 or less
     * wind element 30 or higher
     */
    const lessMatch =
      text.match(
        /\b(\d+)\s+or less\b/
      );
  
    if (lessMatch) {
      return {
        value:
          Number(lessMatch[1]),
  
        direction: "or-less",
      };
    }
  
    const higherMatch =
      text.match(
        /\b(\d+)\s+or higher\b/
      );
  
    if (higherMatch) {
      return {
        value:
          Number(higherMatch[1]),
  
        direction: "or-higher",
      };
    }
  
    return {
      value: 0,
      direction: null,
    };
  }
  
  /* =========================================================
     OTHER PARSERS
     ========================================================= */
  
  function parseSwapCount(
    text: string
  ): number {
    const numericMatch =
      text.match(
        /\bswap\s+(\d+)\b/
      );
  
    if (numericMatch) {
      return Number(
        numericMatch[1]
      );
    }
  
    if (
      /\bswap\s+(?:a|an|one)\b/.test(
        text
      )
    ) {
      return 1;
    }
  
    return 0;
  }
  
  function parseEvolutionLockTurns(
    text: string
  ): number {
    if (
      !text.includes(
        "cannot evolve"
      )
    ) {
      return 0;
    }
  
    const match =
      text.match(
        /\bfor\s+(\d+)\s+turns?\b/
      );
  
    if (match) {
      return Number(match[1]);
    }
  
    if (
      text.includes("next turn")
    ) {
      return 1;
    }
  
    return 1;
  }
  
  function parseAttackDisableTurns(
    text: string
  ): number {
    if (
      !text.includes("disable") ||
      !text.includes("attack")
    ) {
      return 0;
    }
  
    const match =
      text.match(
        /\bfor\s+(\d+)\s+turns?\b/
      );
  
    return match
      ? Number(match[1])
      : 1;
  }
  
  /* =========================================================
     GLOBAL STAT DATA
     ========================================================= */
  
  function rawStatTotal(
    card: TetramonCard
  ): number {
    const {
      health,
      strength,
      vitality,
      spirit,
      magic,
      speed,
    } = card.stats;
  
    return (
      health +
      strength +
      vitality +
      spirit +
      magic +
      speed
    );
  }
  
  interface StatRange {
    min: number;
    max: number;
    average: number;
  }
  
  const GLOBAL_STAT_RANGE =
    buildGlobalStatRange();
  
  const STAT_RANGES_BY_CLASS =
    buildStatRangesByClass();
  
  function buildGlobalStatRange(): StatRange {
    return buildRange(
      TETRAMON_CARDS.map(
        rawStatTotal
      )
    );
  }
  
  function buildStatRangesByClass(): Record<
    TetramonCardClass,
    StatRange
  > {
    const result = {} as Record<
      TetramonCardClass,
      StatRange
    >;
  
    const classes: TetramonCardClass[] = [
      "Basic",
      "Rare",
      "Epic",
      "Legendary",
    ];
  
    for (const cardClass of classes) {
      result[cardClass] =
        buildRange(
          TETRAMON_CARDS
            .filter(
              (card) =>
                card.cardClass ===
                cardClass
            )
            .map(rawStatTotal)
        );
    }
  
    return result;
  }
  
  function buildRange(
    values: number[]
  ): StatRange {
    if (values.length === 0) {
      return {
        min: 0,
        max: 0,
        average: 0,
      };
    }
  
    return {
      min: Math.min(...values),
      max: Math.max(...values),
  
      average:
        values.reduce(
          (sum, value) =>
            sum + value,
          0
        ) / values.length,
    };
  }
  
  function normalizeRangeScore(
    value: number,
    range: StatRange,
    floor = 25
  ): number {
    if (
      range.max === range.min
    ) {
      return 50;
    }
  
    const normalized =
      (value - range.min) /
      (range.max - range.min);
  
    return clampScore(
      floor +
        normalized *
          (100 - floor)
    );
  }
  
  /* =========================================================
     EFFECT COMPONENT MODEL
     ========================================================= */
  
  /**
   * v1.2 calculates individual effect components first and
   * combines them with diminishing returns.
   *
   * This prevents:
   *
   * Draw 2 + Discard 3
   *
   * from simply becoming:
   *
   * base + full draw value + full discard value = 100.
   */
  
  interface EffectComponent {
    key: string;
    value: number;
  }
  
  function getEffectComponents(
    card: TetramonCard
  ): EffectComponent[] {
    const effect =
      parsePlayEffect(
        card.playEffect
      );
  
    const components: EffectComponent[] =
      [];
  
    /* -------------------------------------------------------
       DRAW
       ------------------------------------------------------- */
  
    if (effect.draw > 0) {
      components.push({
        key: "draw",
  
        value: scaleDiscrete(
          effect.draw,
          {
            1: 18,
            2: 29,
            3: 39,
            4: 47,
          },
          47
        ),
      });
    }
  
    /* -------------------------------------------------------
       SELF DISCARD
       ------------------------------------------------------- */
  
    if (
      effect.selfDiscard > 0
    ) {
      let value =
        -Math.min(
          effect.selfDiscard * 7,
          21
        );
  
      /**
       * Draw + discard has filtering value.
       */
      if (effect.draw > 0) {
        value += Math.min(
          7 +
            Math.min(
              effect.draw,
              effect.selfDiscard
            ) *
              3,
          15
        );
      }
  
      components.push({
        key: "self-discard",
        value,
      });
    }
  
    /* -------------------------------------------------------
       OPPONENT DISCARD
       ------------------------------------------------------- */
  
    if (
      effect.opponentDiscard > 0
    ) {
      components.push({
        key: "opponent-discard",
  
        value: scaleDiscrete(
          effect.opponentDiscard,
          {
            1: 18,
            2: 29,
            3: 38,
            4: 45,
          },
          45
        ),
      });
    }
  
    /* -------------------------------------------------------
       FLAT DAMAGE
       ------------------------------------------------------- */
  
    if (
      effect.extraDamage > 0
    ) {
      components.push({
        key: "extra-damage",
  
        value: scaleValue(
          effect.extraDamage,
          15,
          100,
          12,
          44
        ),
      });
    }
  
    /* -------------------------------------------------------
       DOUBLE DAMAGE
       ------------------------------------------------------- */
  
    if (
      effect.doubleDamage
    ) {
      components.push({
        key: "double-damage",
        value: 40,
      });
    }
  
    /* -------------------------------------------------------
       SHIELD
       ------------------------------------------------------- */
  
    if (effect.shield > 0) {
      components.push({
        key: "shield",
  
        value: scaleValue(
          effect.shield,
          20,
          80,
          16,
          39
        ),
      });
    }
  
    /* -------------------------------------------------------
       SHIELD DAMAGE
       ------------------------------------------------------- */
  
    if (
      effect.doubleShieldDamage
    ) {
      components.push({
        key: "double-shield-damage",
        value: 23,
      });
    }
  
    if (
      effect.tripleShieldDamage
    ) {
      components.push({
        key: "triple-shield-damage",
        value: 34,
      });
    }
  
    /* -------------------------------------------------------
       DRAIN
       ------------------------------------------------------- */
  
    if (effect.drain > 0) {
      components.push({
        key: "drain",
  
        value: scaleValue(
          effect.drain,
          10,
          50,
          13,
          37
        ),
      });
    }
  
    /* -------------------------------------------------------
       FIELD DESTRUCTION
       ------------------------------------------------------- */
  
    if (effect.destroyAll) {
      components.push({
        key: "destroy-all",
        value: 46,
      });
    } else if (
      effect.destroyCount > 0
    ) {
      let destroyValue =
        effect.destroyCount >= 2
          ? 38
          : 27;
  
      /**
       * A random target is less controllable than selecting a
       * target.
       */
      if (
        effect.randomDestroy
      ) {
        destroyValue -= 6;
      }
  
      /**
       * Threshold changes the eligible target pool.
       *
       * "or less":
       * 20 < 30 < 40
       *
       * This is directly supported by the source wording:
       * a 40-or-less condition includes a wider numerical
       * range than 20-or-less.
       */
      if (
        effect.destructionThresholdDirection ===
        "or-less"
      ) {
        destroyValue +=
          getOrLessThresholdBonus(
            effect.destructionThreshold
          );
      }
  
      /**
       * "or higher" is treated separately.
       *
       * We do not assume it is stronger or weaker than
       * "or less" without match evidence. We only recognize
       * that it is conditional.
       */
      if (
        effect.destructionThresholdDirection ===
        "or-higher"
      ) {
        destroyValue += 2;
      }
  
      components.push({
        key: "field-destruction",
        value: destroyValue,
      });
    }
  
    /* -------------------------------------------------------
       EVOLUTION LOCK
       ------------------------------------------------------- */
  
    if (
      effect.evolutionLockTurns > 0
    ) {
      components.push({
        key: "evolution-lock",
  
        value:
          effect.evolutionLockTurns >= 2
            ? 38
            : 27,
      });
    }
  
    /* -------------------------------------------------------
       DAMAGE NEGATION
       ------------------------------------------------------- */
  
    if (
      effect.damageNegation > 0
    ) {
      components.push({
        key: "damage-negation",
  
        value: scaleValue(
          effect.damageNegation,
          50,
          100,
          18,
          34
        ),
      });
    }
  
    /* -------------------------------------------------------
       UNBLOCKABLE TP
       ------------------------------------------------------- */
  
    if (
      effect.unblockableTpDamage > 0
    ) {
      components.push({
        key: "unblockable-tp",
  
        value: scaleValue(
          effect.unblockableTpDamage,
          20,
          40,
          27,
          43
        ),
      });
    }
  
    /* -------------------------------------------------------
       FIELD SWAP
       ------------------------------------------------------- */
  
    if (
      effect.fieldSwap > 0
    ) {
      components.push({
        key: "field-swap",
        value: 20,
      });
    }
  
    /* -------------------------------------------------------
       ATTACK DISABLE
       ------------------------------------------------------- */
  
    if (
      effect.attackDisableTurns > 0
    ) {
      components.push({
        key: "attack-disable",
  
        value:
          effect.attackDisableTurns >= 2
            ? 38
            : 27,
      });
    }
  
    return components;
  }
  
  /* =========================================================
     THRESHOLD VALUE
     ========================================================= */
  
  function getOrLessThresholdBonus(
    threshold: number
  ): number {
    if (threshold >= 40) {
      return 9;
    }
  
    if (threshold >= 30) {
      return 5;
    }
  
    if (threshold >= 20) {
      return 1;
    }
  
    return 0;
  }
  
  /* =========================================================
     DIMINISHING RETURNS
     ========================================================= */
  
  function combineEffectComponents(
    components: EffectComponent[]
  ): number {
    const positive =
      components
        .filter(
          (component) =>
            component.value > 0
        )
        .sort(
          (a, b) =>
            b.value - a.value
        );
  
    const negative =
      components.filter(
        (component) =>
          component.value < 0
      );
  
    let score = 28;
  
    /**
     * First effect receives full value.
     *
     * Second effect receives 72%.
     * Third receives 50%.
     * Fourth+ receives 35%.
     *
     * This keeps multi-part effects strong without pretending
     * each clause adds its full standalone value.
     */
    const multipliers = [
      1,
      0.72,
      0.5,
      0.35,
    ];
  
    positive.forEach(
      (component, index) => {
        const multiplier =
          multipliers[
            Math.min(
              index,
              multipliers.length - 1
            )
          ];
  
        score +=
          component.value *
          multiplier;
      }
    );
  
    /**
     * Negative costs are not diminished.
     */
    for (const component of negative) {
      score += component.value;
    }
  
    return Math.max(
      0,
      Math.min(95, score)
    );
  }
  
  /* =========================================================
     EFFECT VALUE
     ========================================================= */
  
  export function scoreCardEffectValue(
    card: TetramonCard
  ): number {
    const components =
      getEffectComponents(card);
  
    if (
      components.length === 0
    ) {
      return 28;
    }
  
    return combineEffectComponents(
      components
    );
  }
  
  /* =========================================================
     RELIABILITY
     ========================================================= */
  
  export function scoreCardReliability(
    card: TetramonCard
  ): number {
    const effect =
      parsePlayEffect(
        card.playEffect
      );
  
    let score = 70;
  
    const previousCount =
      card.previousEvolutions.length;
  
    const nextCount =
      card.nextEvolutions.length;
  
    if (previousCount === 0) {
      score += 10;
    } else {
      /**
       * Evolution is a real consistency cost, but no longer
       * an automatic high-stage punishment.
       */
      score -= 9;
  
      if (previousCount > 1) {
        score += Math.min(
          (previousCount - 1) * 5,
          10
        );
      }
    }
  
    if (effect.draw > 0) {
      score += Math.min(
        effect.draw * 5,
        16
      );
    }
  
    if (
      effect.selfDiscard > 0 &&
      effect.draw === 0
    ) {
      score -= 8;
    }
  
    if (
      effect.selfDiscard >
      effect.draw
    ) {
      score -= 4;
    }
  
    if (
      effect.hasConditionalRestriction
    ) {
      score -= 7;
    }
  
    if (nextCount > 0) {
      score += 4;
    }
  
    /**
     * Strong payoff partially compensates for setup risk.
     */
    const effectValue =
      scoreCardEffectValue(card);
  
    if (
      previousCount > 0 &&
      effectValue >= 80
    ) {
      score += 7;
    } else if (
      previousCount > 0 &&
      effectValue >= 65
    ) {
      score += 4;
    }
  
    return clampScore(score);
  }
  
  /* =========================================================
     FLEXIBILITY
     ========================================================= */
  
  export function scoreCardFlexibility(
    card: TetramonCard
  ): number {
    const effect =
      parsePlayEffect(
        card.playEffect
      );
  
    let score = 50;
  
    if (effect.draw > 0) {
      score += Math.min(
        7 + effect.draw * 3,
        18
      );
    }
  
    if (
      effect.destroyAll ||
      effect.destroyCount > 0
    ) {
      score += 12;
  
      /**
       * Target restrictions reduce portability.
       */
      if (
        effect.destructionThresholdDirection !==
        null
      ) {
        score -= 5;
      }
    }
  
    if (
      effect.opponentDiscard > 0
    ) {
      score += 10;
    }
  
    if (effect.drain > 0) {
      score += 7;
    }
  
    if (
      effect.unblockableTpDamage > 0
    ) {
      score += 12;
    }
  
    if (
      effect.evolutionLockTurns > 0
    ) {
      score += 10;
    }
  
    if (
      card.effectTags.includes(
        "all-element-damage"
      )
    ) {
      score += 16;
    }
  
    if (
      effect.damageNegation > 0
    ) {
      score += 5;
    }
  
    if (
      effect.attackDisableTurns > 0
    ) {
      score += 8;
    }
  
    if (
      effect.hasConditionalRestriction
    ) {
      score -= 5;
    }
  
    if (
      card.previousEvolutions.length > 0
    ) {
      score -= 6;
    }
  
    if (
      card.previousEvolutions.length ===
        0 &&
      card.nextEvolutions.length === 0
    ) {
      score += 6;
    }
  
    return clampScore(score);
  }
  
  /* =========================================================
     SYNERGY
     ========================================================= */
  
  export function scoreCardSynergy(
    card: TetramonCard
  ): number {
    const effect =
      parsePlayEffect(
        card.playEffect
      );
  
    let score = 42;
  
    score += Math.min(
      card.effectTags.length * 4,
      16
    );
  
    if (
      effect.draw > 0 &&
      effect.selfDiscard > 0
    ) {
      score += 18;
    }
  
    if (
      effect.opponentDiscard > 0 &&
      effect.evolutionLockTurns > 0
    ) {
      score += 14;
    }
  
    if (
      effect.draw > 0 &&
      (
        effect.destroyCount > 0 ||
        effect.destroyAll ||
        effect.damageNegation > 0 ||
        effect.evolutionLockTurns > 0
      )
    ) {
      score += 12;
    }
  
    if (
      effect.draw > 0 &&
      (
        effect.extraDamage > 0 ||
        effect.doubleDamage
      )
    ) {
      score += 10;
    }
  
    if (
      effect.draw > 0 &&
      effect.drain > 0
    ) {
      score += 10;
    }
  
    if (
      card.previousEvolutions.length > 0
    ) {
      score += 7;
    }
  
    if (
      card.nextEvolutions.length > 0
    ) {
      score += 7;
    }
  
    if (
      card.nextEvolutions.length > 1
    ) {
      score += 5;
    }
  
    return clampScore(score);
  }
  
  /* =========================================================
     EVOLUTION SETUP VS PAYOFF
     ========================================================= */
  
  export function scoreEvolutionAccessibility(
    card: TetramonCard
  ): number {
    const previousCount =
      card.previousEvolutions.length;
  
    const nextCount =
      card.nextEvolutions.length;
  
    const effectValue =
      scoreCardEffectValue(card);
  
    if (previousCount === 0) {
      /**
       * Standalone:
       * immediately playable from an evolution perspective.
       */
      if (nextCount === 0) {
        return 92;
      }
  
      /**
       * Starter:
       * accessible and opens a future evolution route.
       */
      return 88;
    }
  
    let score = 62;
  
    if (previousCount > 1) {
      score += Math.min(
        (previousCount - 1) * 8,
        16
      );
    }
  
    if (effectValue >= 90) {
      score += 22;
    } else if (
      effectValue >= 80
    ) {
      score += 17;
    } else if (
      effectValue >= 70
    ) {
      score += 12;
    } else if (
      effectValue >= 60
    ) {
      score += 7;
    } else if (
      effectValue < 45
    ) {
      score -= 6;
    }
  
    if (nextCount > 0) {
      score += 5;
    }
  
    return clampScore(score);
  }
  
  /* =========================================================
     STAT EFFICIENCY
     ========================================================= */
  
  export function scoreStatEfficiency(
    card: TetramonCard
  ): number {
    const total =
      rawStatTotal(card);
  
    const absoluteScore =
      normalizeRangeScore(
        total,
        GLOBAL_STAT_RANGE,
        25
      );
  
    const classScore =
      normalizeRangeScore(
        total,
        STAT_RANGES_BY_CLASS[
          card.cardClass
        ],
        25
      );
  
    /**
     * 60% absolute
     * 40% within-class
     */
    return clampScore(
      absoluteScore * 0.6 +
        classScore * 0.4
    );
  }
  
  /* =========================================================
     COMPLETE CARD SCORE
     ========================================================= */
  
  export function scoreTetramonCard(
    card: TetramonCard
  ): CardScoreResult {
    if (
      card.confidence !== "verified"
    ) {
      return {
        cardId: card.id,
  
        score: 0,
  
        tier: "Unranked",
  
        breakdown: {
          reliability: 0,
          flexibility: 0,
          effectValue: 0,
          synergy: 0,
          evolutionAccessibility: 0,
          statEfficiency: 0,
        },
  
        strengths: [],
  
        weaknesses: [
          "This card does not yet have enough verified gameplay data for the scoring model.",
        ],
  
        confidence:
          card.confidence,
      };
    }
  
    const breakdown: CardScoreBreakdown = {
      reliability:
        scoreCardReliability(card),
  
      flexibility:
        scoreCardFlexibility(card),
  
      effectValue:
        scoreCardEffectValue(card),
  
      synergy:
        scoreCardSynergy(card),
  
      evolutionAccessibility:
        scoreEvolutionAccessibility(
          card
        ),
  
      statEfficiency:
        scoreStatEfficiency(card),
    };
  
    const rawScore =
      breakdown.reliability *
        CARD_SCORE_WEIGHTS.reliability +
      breakdown.flexibility *
        CARD_SCORE_WEIGHTS.flexibility +
      breakdown.effectValue *
        CARD_SCORE_WEIGHTS.effectValue +
      breakdown.synergy *
        CARD_SCORE_WEIGHTS.synergy +
      breakdown.evolutionAccessibility *
        CARD_SCORE_WEIGHTS.evolutionAccessibility +
      breakdown.statEfficiency *
        CARD_SCORE_WEIGHTS.statEfficiency;
  
    const score =
      Math.round(rawScore);
  
    return {
      cardId: card.id,
  
      score,
  
      tier: scoreToTier(score),
  
      breakdown,
  
      strengths:
        deriveCardStrengths(
          card,
          breakdown
        ),
  
      weaknesses:
        deriveCardWeaknesses(
          card,
          breakdown
        ),
  
      confidence:
        card.confidence,
    };
  }
  
  /* =========================================================
     TIER THRESHOLDS
     ========================================================= */
  
  export function scoreToTier(
    score: number
  ): CardTier {
    if (score >= 82) {
      return "S";
    }
  
    if (score >= 70) {
      return "A";
    }
  
    if (score >= 58) {
      return "B";
    }
  
    return "C";
  }
  
  /* =========================================================
     CARD STRENGTHS
     ========================================================= */
  
  function deriveCardStrengths(
    card: TetramonCard,
    breakdown: CardScoreBreakdown
  ): string[] {
    const strengths: string[] = [];
  
    const effect =
      parsePlayEffect(
        card.playEffect
      );
  
    if (
      breakdown.effectValue >= 82
    ) {
      strengths.push(
        "High-impact Play Effect in the current data-driven model."
      );
    }
  
    if (
      breakdown.reliability >= 85
    ) {
      strengths.push(
        "Relatively low setup friction or strong consistency support."
      );
    }
  
    if (
      breakdown.flexibility >= 78
    ) {
      strengths.push(
        "Can contribute to several different deck plans."
      );
    }
  
    if (
      breakdown.synergy >= 78
    ) {
      strengths.push(
        "Strong build-around or archetype synergy potential."
      );
    }
  
    if (
      breakdown.evolutionAccessibility >=
      82
    ) {
      strengths.push(
        "Its evolution setup is favorable relative to its documented payoff."
      );
    }
  
    if (
      breakdown.statEfficiency >= 80
    ) {
      strengths.push(
        "Strong combined printed stats in both absolute and class-relative comparisons."
      );
    }
  
    if (effect.draw >= 3) {
      strengths.push(
        `Draws ${effect.draw} cards when its Play Effect resolves.`
      );
    }
  
    if (
      effect.extraDamage >= 80
    ) {
      strengths.push(
        `Provides a large +${effect.extraDamage} documented damage boost.`
      );
    }
  
    if (
      effect.doubleDamage
    ) {
      strengths.push(
        "Can double the documented element damage for the turn."
      );
    }
  
    if (effect.destroyAll) {
      strengths.push(
        "Can remove all qualifying opponent field cards."
      );
    } else if (
      effect.destroyCount >= 2
    ) {
      strengths.push(
        `Can destroy ${effect.destroyCount} qualifying opponent field cards.`
      );
    }
  
    if (
      effect.opponentDiscard >= 2
    ) {
      strengths.push(
        `Can force the opponent to discard ${effect.opponentDiscard} cards.`
      );
    }
  
    if (
      effect.evolutionLockTurns >= 2
    ) {
      strengths.push(
        "Can stop the opponent from evolving for two turns."
      );
    }
  
    if (
      effect.unblockableTpDamage >= 40
    ) {
      strengths.push(
        `Provides ${effect.unblockableTpDamage} documented unblockable TP damage.`
      );
    }
  
    return uniqueStrings(
      strengths
    ).slice(0, 4);
  }
  
  /* =========================================================
     CARD WEAKNESSES
     ========================================================= */
  
  function deriveCardWeaknesses(
    card: TetramonCard,
    breakdown: CardScoreBreakdown
  ): string[] {
    const weaknesses: string[] = [];
  
    const effect =
      parsePlayEffect(
        card.playEffect
      );
  
    if (
      card.previousEvolutions.length > 0
    ) {
      weaknesses.push(
        `Needs access to ${formatCardNames(
          card.previousEvolutions
        )} as a documented earlier evolution route.`
      );
    }
  
    if (
      effect.hasConditionalRestriction
    ) {
      weaknesses.push(
        "Part of its effect depends on a specific element, threshold, or board condition."
      );
    }
  
    if (
      effect.selfDiscard > 0 &&
      effect.draw === 0
    ) {
      weaknesses.push(
        "Its effect discards from your own hand without replacing those cards through draw."
      );
    }
  
    if (
      effect.selfDiscard >
      effect.draw
    ) {
      weaknesses.push(
        "Its draw-and-discard exchange can reduce hand size unless the discard itself supports the deck plan."
      );
    }
  
    if (
      breakdown.statEfficiency <= 38
    ) {
      weaknesses.push(
        "Combined printed stats are relatively low after both absolute and class-relative comparison."
      );
    }
  
    if (
      breakdown.flexibility <= 42
    ) {
      weaknesses.push(
        "Its effect is relatively narrow outside decks built to support it."
      );
    }
  
    if (
      breakdown.evolutionAccessibility <=
      55
    ) {
      weaknesses.push(
        "The documented payoff may not fully offset its evolution setup cost."
      );
    }
  
    return uniqueStrings(
      weaknesses
    ).slice(0, 4);
  }
  
  /* =========================================================
     SCORE ALL CARDS
     ========================================================= */
  
  export const TETRAMON_CARD_SCORES: CardScoreResult[] =
    TETRAMON_CARDS
      .map(scoreTetramonCard)
      .sort(
        (a, b) =>
          b.score - a.score
      );
  
  export const TETRAMON_CARD_SCORE_BY_ID: ReadonlyMap<
    string,
    CardScoreResult
  > = new Map(
    TETRAMON_CARD_SCORES.map(
      (result) => [
        result.cardId,
        result,
      ]
    )
  );
  
  export function getTetramonCardScore(
    cardId: string
  ): CardScoreResult | undefined {
    return TETRAMON_CARD_SCORE_BY_ID.get(
      normalizeTetramonId(cardId)
    );
  }
  
  /* =========================================================
     FILTERED RANKINGS
     ========================================================= */
  
  export function getRankedCardsByType(
    type: TetramonType
  ): CardScoreResult[] {
    return TETRAMON_CARD_SCORES.filter(
      (result) =>
        TETRAMON_CARD_BY_ID.get(
          result.cardId
        )?.type === type
    );
  }
  
  export function getRankedCardsByClass(
    cardClass: TetramonCardClass
  ): CardScoreResult[] {
    return TETRAMON_CARD_SCORES.filter(
      (result) =>
        TETRAMON_CARD_BY_ID.get(
          result.cardId
        )?.cardClass ===
        cardClass
    );
  }
  
  export function getRankedCardsByEffect(
    effectTag: CardEffectTag
  ): CardScoreResult[] {
    return TETRAMON_CARD_SCORES.filter(
      (result) =>
        TETRAMON_CARD_BY_ID.get(
          result.cardId
        )?.effectTags.includes(
          effectTag
        )
    );
  }
  
  /* =========================================================
     DECK SCORING TYPES
     ========================================================= */
  
  export interface TetramonDeckScoreBreakdown {
    legality: number;
  
    consistency: number;
  
    evolutionSafety: number;
  
    drawSupport: number;
  
    interaction: number;
  
    synergy: number;
  }
  
  export interface TetramonDeckScoreResult {
    score: number;
  
    breakdown:
      TetramonDeckScoreBreakdown;
  
    strengths: string[];
  
    warnings: string[];
  }
  
  /* =========================================================
     DECK HELPERS
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
  
  function totalDeckCards(
    deck: DeckCard[]
  ): number {
    return deck.reduce(
      (total, entry) =>
        total + entry.copies,
      0
    );
  }
  
  /* =========================================================
     DECK LEGALITY
     ========================================================= */
  
  function scoreDeckLegality(
    deck: DeckCard[]
  ): number {
    let score = 100;
  
    const total =
      totalDeckCards(deck);
  
    if (total !== 50) {
      score -= Math.min(
        Math.abs(50 - total) * 5,
        60
      );
    }
  
    for (const entry of deck) {
      if (
        entry.copies < 1 ||
        entry.copies > 4
      ) {
        score -= 30;
      }
  
      if (
        !TETRAMON_CARD_BY_ID.has(
          normalizeTetramonId(
            entry.cardId
          )
        )
      ) {
        score -= 30;
      }
    }
  
    return clampScore(score);
  }
  
  /* =========================================================
     DECK EVOLUTION SAFETY
     ========================================================= */
  
  function scoreDeckEvolutionSafety(
    deck: DeckCard[]
  ): number {
    const resolved =
      resolveDeck(deck);
  
    if (resolved.length === 0) {
      return 0;
    }
  
    const copiesById =
      new Map<string, number>();
  
    for (const {
      card,
      copies,
    } of resolved) {
      copiesById.set(
        card.id,
        copies
      );
    }
  
    let dependentCopies = 0;
    let supportedCopies = 0;
  
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
  
      dependentCopies += copies;
  
      const previousCopies =
        card.previousEvolutions.reduce(
          (total, previousId) =>
            total +
            (copiesById.get(
              previousId
            ) ?? 0),
          0
        );
  
      if (previousCopies > 0) {
        const supportRatio =
          Math.min(
            previousCopies / copies,
            1
          );
  
        supportedCopies +=
          copies * supportRatio;
      }
    }
  
    if (dependentCopies === 0) {
      return 100;
    }
  
    return clampScore(
      (supportedCopies /
        dependentCopies) *
        100
    );
  }
  
  /* =========================================================
     DECK DRAW SUPPORT
     ========================================================= */
  
  function scoreDeckDrawSupport(
    deck: DeckCard[]
  ): number {
    const resolved =
      resolveDeck(deck);
  
    if (resolved.length === 0) {
      return 0;
    }
  
    let weightedDraw = 0;
  
    for (const {
      card,
      copies,
    } of resolved) {
      const effect =
        parsePlayEffect(
          card.playEffect
        );
  
      weightedDraw +=
        effect.draw * copies;
    }
  
    return clampScore(
      (weightedDraw / 16) *
        100
    );
  }
  
  /* =========================================================
     DECK INTERACTION
     ========================================================= */
  
  function scoreDeckInteraction(
    deck: DeckCard[]
  ): number {
    const resolved =
      resolveDeck(deck);
  
    if (resolved.length === 0) {
      return 0;
    }
  
    let interactionPoints = 0;
  
    for (const {
      card,
      copies,
    } of resolved) {
      const effect =
        parsePlayEffect(
          card.playEffect
        );
  
      let perCopy = 0;
  
      perCopy +=
        effect.opponentDiscard *
        1.5;
  
      if (effect.destroyAll) {
        perCopy += 4;
      } else {
        perCopy +=
          effect.destroyCount * 2;
      }
  
      perCopy +=
        effect.evolutionLockTurns *
        1.5;
  
      if (
        effect.damageNegation > 0
      ) {
        perCopy += 1;
      }
  
      if (
        effect.attackDisableTurns > 0
      ) {
        perCopy +=
          effect.attackDisableTurns;
      }
  
      if (
        effect.fieldSwap > 0
      ) {
        perCopy += 1;
      }
  
      interactionPoints +=
        perCopy * copies;
    }
  
    return clampScore(
      (interactionPoints / 20) *
        100
    );
  }
  
  /* =========================================================
     DECK SYNERGY
     ========================================================= */
  
  function scoreDeckSynergy(
    deck: DeckCard[]
  ): number {
    const resolved =
      resolveDeck(deck);
  
    if (resolved.length === 0) {
      return 0;
    }
  
    let score = 35;
  
    const tagCounts =
      new Map<
        CardEffectTag,
        number
      >();
  
    for (const {
      card,
      copies,
    } of resolved) {
      for (const tag of
        card.effectTags) {
        tagCounts.set(
          tag,
          (tagCounts.get(tag) ??
            0) + copies
        );
      }
    }
  
    for (const count of
      tagCounts.values()) {
      if (count >= 10) {
        score += 10;
      } else if (
        count >= 6
      ) {
        score += 7;
      } else if (
        count >= 4
      ) {
        score += 4;
      }
    }
  
    if (
      (tagCounts.get("draw") ?? 0) >=
        4 &&
      (
        tagCounts.get(
          "discard-self"
        ) ?? 0
      ) >= 4
    ) {
      score += 10;
    }
  
    if (
      (
        tagCounts.get(
          "discard-opponent"
        ) ?? 0
      ) >= 4 &&
      (
        tagCounts.get(
          "evolution-lock"
        ) ?? 0
      ) >= 4
    ) {
      score += 8;
    }
  
    const deckIds =
      new Set(
        resolved.map(
          ({ card }) =>
            card.id
        )
      );
  
    let connectedEvolutionCards = 0;
  
    for (const {
      card,
      copies,
    } of resolved) {
      const connected = [
        ...card.previousEvolutions,
        ...card.nextEvolutions,
      ].some((id) =>
        deckIds.has(id)
      );
  
      if (connected) {
        connectedEvolutionCards +=
          copies;
      }
    }
  
    if (
      connectedEvolutionCards >= 12
    ) {
      score += 12;
    } else if (
      connectedEvolutionCards >= 8
    ) {
      score += 8;
    } else if (
      connectedEvolutionCards >= 4
    ) {
      score += 4;
    }
  
    return clampScore(score);
  }
  
  /* =========================================================
     DECK CONSISTENCY
     ========================================================= */
  
  function scoreDeckConsistency(
    deck: DeckCard[]
  ): number {
    const resolved =
      resolveDeck(deck);
  
    const total =
      totalDeckCards(deck);
  
    if (
      total === 0 ||
      resolved.length === 0
    ) {
      return 0;
    }
  
    let score = 52;
  
    const uniqueCards =
      resolved.length;
  
    const averageCopies =
      total /
      Math.max(
        uniqueCards,
        1
      );
  
    if (
      averageCopies >= 3.5
    ) {
      score += 18;
    } else if (
      averageCopies >= 3
    ) {
      score += 14;
    } else if (
      averageCopies >= 2
    ) {
      score += 8;
    }
  
    const drawScore =
      scoreDeckDrawSupport(deck);
  
    score +=
      (drawScore - 50) *
      0.18;
  
    const evolutionScore =
      scoreDeckEvolutionSafety(
        deck
      );
  
    score +=
      (evolutionScore - 50) *
      0.28;
  
    return clampScore(score);
  }
  
  /* =========================================================
     COMPLETE DECK SCORE
     ========================================================= */
  
  export function scoreTetramonDeck(
    deck: DeckCard[]
  ): TetramonDeckScoreResult {
    const breakdown: TetramonDeckScoreBreakdown =
      {
        legality:
          scoreDeckLegality(deck),
  
        consistency:
          scoreDeckConsistency(
            deck
          ),
  
        evolutionSafety:
          scoreDeckEvolutionSafety(
            deck
          ),
  
        drawSupport:
          scoreDeckDrawSupport(
            deck
          ),
  
        interaction:
          scoreDeckInteraction(
            deck
          ),
  
        synergy:
          scoreDeckSynergy(
            deck
          ),
      };
  
    const weighted =
      breakdown.legality * 0.3 +
      breakdown.consistency * 0.2 +
      breakdown.evolutionSafety *
        0.2 +
      breakdown.drawSupport * 0.1 +
      breakdown.interaction * 0.08 +
      breakdown.synergy * 0.12;
  
    return {
      score:
        Math.round(weighted),
  
      breakdown,
  
      strengths:
        deriveDeckStrengths(
          breakdown
        ),
  
      warnings:
        deriveDeckWarnings(
          deck,
          breakdown
        ),
    };
  }
  
  /* =========================================================
     DECK STRENGTHS
     ========================================================= */
  
  function deriveDeckStrengths(
    breakdown: TetramonDeckScoreBreakdown
  ): string[] {
    const strengths: string[] = [];
  
    if (
      breakdown.legality === 100
    ) {
      strengths.push(
        "Meets the 50-card deck-size and 4-copy checks used by the tool."
      );
    }
  
    if (
      breakdown.evolutionSafety >= 90
    ) {
      strengths.push(
        "Most evolution-dependent cards have enough documented earlier-stage support in the list."
      );
    }
  
    if (
      breakdown.consistency >= 75
    ) {
      strengths.push(
        "The list has strong consistency signals in the current model."
      );
    }
  
    if (
      breakdown.drawSupport >= 75
    ) {
      strengths.push(
        "The deck contains substantial draw and cycling value."
      );
    }
  
    if (
      breakdown.interaction >= 75
    ) {
      strengths.push(
        "The deck contains substantial opponent interaction."
      );
    }
  
    if (
      breakdown.synergy >= 75
    ) {
      strengths.push(
        "Multiple cards reinforce the same strategic themes or evolution packages."
      );
    }
  
    return strengths;
  }
  
  /* =========================================================
     DECK WARNINGS
     ========================================================= */
  
  function deriveDeckWarnings(
    deck: DeckCard[],
    breakdown: TetramonDeckScoreBreakdown
  ): string[] {
    const warnings: string[] = [];
  
    const total =
      totalDeckCards(deck);
  
    if (total !== 50) {
      warnings.push(
        `Deck contains ${total}/50 cards.`
      );
    }
  
    for (const entry of deck) {
      if (entry.copies > 4) {
        const card =
          TETRAMON_CARD_BY_ID.get(
            normalizeTetramonId(
              entry.cardId
            )
          );
  
        warnings.push(
          `${card?.name ?? entry.cardId} has ${entry.copies} copies; the deck limit is 4 copies of the same card name.`
        );
      }
  
      if (entry.copies < 1) {
        warnings.push(
          `${entry.cardId} has an invalid copy count.`
        );
      }
    }
  
    if (
      breakdown.evolutionSafety < 70
    ) {
      warnings.push(
        "Several evolution-dependent cards do not have enough documented earlier-stage support in the deck."
      );
    }
  
    if (
      breakdown.drawSupport < 30
    ) {
      warnings.push(
        "The deck has relatively little draw support in the current model."
      );
    }
  
    if (
      breakdown.consistency < 50
    ) {
      warnings.push(
        "The list may produce inconsistent hands because of card variety, draw support, or evolution dependencies."
      );
    }
  
    return uniqueStrings(
      warnings
    );
  }
  
  /* =========================================================
     TIER LIST METHODOLOGY
     ========================================================= */
  
  export const TETRAMON_TIER_LIST_METHODOLOGY =
    {
      modelVersion:
        TETRAMON_SCORING_MODEL_VERSION,
  
      title:
        "How the Tetramon Tier List Is Scored",
  
      summary:
        "This ranking uses documented card stats, Play Effect magnitude, evolution requirements, consistency, flexibility, and deck synergy. It is a data-driven deck-building ranking rather than a tournament win-rate or competitive meta ranking.",
  
      dimensions: [
        {
          key: "effectValue",
  
          label: "Play Effect",
  
          weight: 28,
  
          description:
            "Measures the documented effect and its magnitude, including draw count, damage bonus, shield value, drain, discard, destruction, evolution lock, and other effects.",
        },
  
        {
          key: "reliability",
  
          label: "Reliability",
  
          weight: 18,
  
          description:
            "Measures how consistently the card can contribute after accounting for evolution setup, draw, filtering, and conditional requirements.",
        },
  
        {
          key: "flexibility",
  
          label: "Flexibility",
  
          weight: 14,
  
          description:
            "Measures how easily the card can contribute across different deck plans rather than only one narrow setup.",
        },
  
        {
          key: "synergy",
  
          label: "Synergy",
  
          weight: 14,
  
          description:
            "Measures build-around potential from effect combinations and documented evolution relationships.",
        },
  
        {
          key:
            "evolutionAccessibility",
  
          label:
            "Evolution Setup vs Payoff",
  
          weight: 14,
  
          description:
            "Compares the card's documented evolution requirements with the value of its payoff instead of automatically penalizing higher evolution stages.",
        },
  
        {
          key: "statEfficiency",
  
          label: "Printed Stats",
  
          weight: 12,
  
          description:
            "Combines absolute six-stat strength across all cards with efficiency relative to cards in the same class.",
        },
      ],
    } as const;
  
  /* =========================================================
     TIER COUNTS
     ========================================================= */
  
  export function getTierCounts(): Record<
    CardTier,
    number
  > {
    return TETRAMON_CARD_SCORES.reduce(
      (counts, card) => {
        counts[card.tier] += 1;
  
        return counts;
      },
      {
        S: 0,
        A: 0,
        B: 0,
        C: 0,
        Unranked: 0,
      } as Record<CardTier, number>
    );
  }
  
  /* =========================================================
     SCORE EXTREMES
     ========================================================= */
  
  export function getScoreExtremes(
    count = 5
  ): {
    highest: CardScoreResult[];
    lowest: CardScoreResult[];
  } {
    const ranked =
      TETRAMON_CARD_SCORES.filter(
        (card) =>
          card.tier !== "Unranked"
      );
  
    return {
      highest:
        ranked.slice(0, count),
  
      lowest:
        ranked
          .slice(-count)
          .reverse(),
    };
  }
  
  /* =========================================================
     DEBUG: AVERAGE SCORE BY CLASS
     ========================================================= */
  
  export function getAverageScoreByClass(): Record<
    TetramonCardClass,
    number
  > {
    const classes: TetramonCardClass[] = [
      "Basic",
      "Rare",
      "Epic",
      "Legendary",
    ];
  
    const result = {} as Record<
      TetramonCardClass,
      number
    >;
  
    for (const cardClass of classes) {
      const scores =
        TETRAMON_CARD_SCORES
          .filter(
            (result) =>
              TETRAMON_CARD_BY_ID.get(
                result.cardId
              )?.cardClass ===
              cardClass
          )
          .map(
            (result) =>
              result.score
          );
  
      result[cardClass] =
        averageRounded(scores);
    }
  
    return result;
  }
  
  /* =========================================================
     DEBUG: AVERAGE SCORE BY TYPE
     ========================================================= */
  
  export function getAverageScoreByType(): Record<
    TetramonType,
    number
  > {
    const types: TetramonType[] = [
      "Fire",
      "Water",
      "Earth",
      "Wind",
    ];
  
    const result = {} as Record<
      TetramonType,
      number
    >;
  
    for (const type of types) {
      const scores =
        TETRAMON_CARD_SCORES
          .filter(
            (result) =>
              TETRAMON_CARD_BY_ID.get(
                result.cardId
              )?.type === type
          )
          .map(
            (result) =>
              result.score
          );
  
      result[type] =
        averageRounded(scores);
    }
  
    return result;
  }
  
  /* =========================================================
     DEBUG: PARSED EFFECT
     ========================================================= */
  
  /**
   * Useful for checking source edge cases such as Katengu,
   * Toxigoop, Voltrex, Clawcifear, etc.
   */
  export function getParsedCardEffect(
    cardId: string
  ): ParsedPlayEffect | undefined {
    const card =
      TETRAMON_CARD_BY_ID.get(
        normalizeTetramonId(
          cardId
        )
      );
  
    if (!card) {
      return undefined;
    }
  
    return parsePlayEffect(
      card.playEffect
    );
  }
  
  /* =========================================================
     DEBUG: EFFECT COMPONENTS
     ========================================================= */
  
  export function getCardEffectDebug(
    cardId: string
  ):
    | {
        cardId: string;
        playEffect: string;
        parsed: ParsedPlayEffect;
        components: EffectComponent[];
        effectScore: number;
      }
    | undefined {
    const card =
      TETRAMON_CARD_BY_ID.get(
        normalizeTetramonId(
          cardId
        )
      );
  
    if (!card) {
      return undefined;
    }
  
    return {
      cardId: card.id,
  
      playEffect:
        card.playEffect,
  
      parsed:
        parsePlayEffect(
          card.playEffect
        ),
  
      components:
        getEffectComponents(card),
  
      effectScore:
        scoreCardEffectValue(card),
    };
  }
  
  /* =========================================================
     RAW STAT HELPERS
     ========================================================= */
  
  export function getCardStatTotal(
    card: TetramonCard
  ): number {
    return getDerivedCardStats(
      card
    ).statTotal;
  }
  
  export function getGlobalStatRange(): StatRange {
    return {
      ...GLOBAL_STAT_RANGE,
    };
  }
  
  export function getClassStatRange(
    cardClass: TetramonCardClass
  ): StatRange {
    return {
      ...STAT_RANGES_BY_CLASS[
        cardClass
      ],
    };
  }
  
  /* =========================================================
     UTILITIES
     ========================================================= */
  
  function clampScore(
    value: number
  ): number {
    return Math.max(
      0,
      Math.min(
        100,
        value
      )
    );
  }
  
  function scaleValue(
    value: number,
    inputMin: number,
    inputMax: number,
    outputMin: number,
    outputMax: number
  ): number {
    if (
      inputMax === inputMin
    ) {
      return outputMin;
    }
  
    const normalized =
      Math.max(
        0,
        Math.min(
          1,
          (value - inputMin) /
            (inputMax - inputMin)
        )
      );
  
    return (
      outputMin +
      normalized *
        (outputMax - outputMin)
    );
  }
  
  function scaleDiscrete(
    value: number,
    map: Record<number, number>,
    fallbackMax: number
  ): number {
    if (
      map[value] !== undefined
    ) {
      return map[value];
    }
  
    const keys =
      Object.keys(map)
        .map(Number)
        .sort(
          (a, b) =>
            a - b
        );
  
    if (keys.length === 0) {
      return 0;
    }
  
    if (
      value <= keys[0]
    ) {
      return map[keys[0]];
    }
  
    if (
      value >=
      keys[keys.length - 1]
    ) {
      return fallbackMax;
    }
  
    const lower =
      [...keys]
        .reverse()
        .find(
          (key) =>
            key < value
        );
  
    const upper =
      keys.find(
        (key) =>
          key > value
      );
  
    if (
      lower === undefined ||
      upper === undefined
    ) {
      return fallbackMax;
    }
  
    return scaleValue(
      value,
      lower,
      upper,
      map[lower],
      map[upper]
    );
  }
  
  function uniqueStrings(
    values: string[]
  ): string[] {
    return [
      ...new Set(values),
    ];
  }
  
  function averageRounded(
    values: number[]
  ): number {
    if (
      values.length === 0
    ) {
      return 0;
    }
  
    const average =
      values.reduce(
        (sum, value) =>
          sum + value,
        0
      ) / values.length;
  
    return (
      Math.round(
        average * 10
      ) / 10
    );
  }
  
  function formatCardNames(
    ids: string[]
  ): string {
    const names =
      ids.map((id) => {
        return (
          TETRAMON_CARD_BY_ID.get(
            id
          )?.name ?? id
        );
      });
  
    if (names.length === 0) {
      return "an earlier evolution";
    }
  
    if (names.length === 1) {
      return names[0];
    }
  
    if (names.length === 2) {
      return `${names[0]} or ${names[1]}`;
    }
  
    return `${names
      .slice(0, -1)
      .join(", ")}, or ${
      names[
        names.length - 1
      ]
    }`;
  }