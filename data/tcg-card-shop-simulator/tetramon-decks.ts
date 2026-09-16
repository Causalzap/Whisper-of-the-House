// src/data/tcg-card-shop-simulator/tetramon-decks.ts

import type {
    DeckCard,
    DeckEvidenceLevel,
    DeckFinderPreferences,
    DeckGoal,
    DeckPresetStatus,
    DeckRecommendation,
    TetramonCard,
    TetramonDeckPreset,
    TetramonType,
  } from "./tetramon-types";
  
  import {
    TETRAMON_CARD_BY_ID,
    getTetramonCard,
    normalizeTetramonId,
  } from "./tetramon-cards";
  
  /* =========================================================
     EXTENDED PRESET MODEL
     ========================================================= */
  
  /**
   * The base TetramonDeckPreset type is intentionally generic.
   *
   * For the actual site we also need to distinguish between:
   *
   * - a complete 50-card deck list
   * - a documented community archetype whose full list has
   *   not yet been preserved in our source material
   *
   * This prevents the UI from accidentally presenting a partial
   * community list as a ready-to-play legal deck.
   */
  export interface TetramonDeckPresetData
    extends TetramonDeckPreset {
    /**
     * True only when we have a complete 50-card list.
     */
    completeDeckList: boolean;
  
    /**
     * Human-readable archetype label.
     *
     * Examples:
     * "Self-Mill"
     * "Evolution / Discard"
     */
    archetype: string;
  
    /**
     * Short explanation of the deck's primary game plan.
     */
    gamePlan: string;
  
    /**
     * Cards explicitly documented as part of the concept,
     * even when the complete 50-card list is not available.
     */
    documentedCardIds: string[];
  
    /**
     * Optional cards mentioned as supporting pieces but for
     * which we do not have a reliable copy count.
     */
    supportingCardIds?: string[];
  
    /**
     * Keep source context separate from player-facing copy.
     */
    sourceNote?: string;
  }
  
  /* =========================================================
     SMALL HELPERS
     ========================================================= */
  
  function deckCard(
    cardName: string,
    copies: number
  ): DeckCard {
    return {
      cardId: normalizeTetramonId(cardName),
      copies,
    };
  }
  
  function cardIds(
    ...names: string[]
  ): string[] {
    return names.map(normalizeTetramonId);
  }
  
  /* =========================================================
     COMMUNITY PRESETS
     ========================================================= */
  
  /**
   * IMPORTANT:
   *
   * These are community/documented archetypes.
   *
   * They are NOT:
   * - tournament win-rate rankings
   * - official starter decks
   * - guaranteed optimal builds
   *
   * Do not label them "meta" unless later evidence supports it.
   */
  
  export const TETRAMON_DECK_PRESETS: TetramonDeckPresetData[] =
    [
      /* =====================================================
         FLAMCHIK / PYROPECK SELF-MILL
         ===================================================== */
  
      {
        id: "flamchik-pyropeck-self-mill",
  
        name: "Flamchik / Pyropeck Self-Mill",
  
        archetype: "Self-Mill / Regrowth",
  
        description:
          "A community-built Fire-focused concept built around discarding cards, recovering value through regrowth-style effects, and using Flamchik into Pyropeck as one of its payoff lines.",
  
        gamePlan:
          "Cycle and discard aggressively, use the graveyard/discard pile as part of the deck's resource plan, then convert the setup into high-impact Flamchik and Pyropeck turns.",
  
        /**
         * We have direct evidence for several quantities from
         * the community deck code preserved in the discussion.
         *
         * Do NOT fill the missing slots until the complete
         * source list is available.
         */
        cards: [
          deckCard("Angez", 2),
          deckCard("Moskit", 4),
          deckCard("Flamchik", 4),
          deckCard("Pyropeck", 4),
        ],
  
        completeDeckList: false,
  
        documentedCardIds: cardIds(
          "Angez",
          "Moskit",
          "Flamchik",
          "Pyropeck"
        ),
  
        coreCardIds: cardIds(
          "Flamchik",
          "Pyropeck"
        ),
  
        goals: [
          "aggressive",
          "draw",
          "evolution",
        ],
  
        types: [
          "Fire",
          "Wind",
        ],
  
        status: "community",
  
        evidenceLevel: "moderate",
  
        whyItWorks: [
          "Flamchik and Pyropeck form a documented evolution pair, so the deck has a concrete evolution payoff rather than relying on unrelated high-rarity cards.",
          "The community list explicitly combines the Flamchik/Pyropeck plan with discard and regrowth-style play.",
          "Moskit gives the documented shell a Wind card with a drain effect, while Angez provides a straightforward Wind damage boost.",
          "The community player reported a turn reaching 150 damage after discarding heavily and then playing two Flamchiks.",
        ],
  
        cautions: [
          "The complete 50-card community list is not stored in this dataset yet, so this preset should be shown as an archetype rather than a ready-to-import deck.",
          "Pyropeck has Flamchik as its documented previous evolution, so drawing Pyropeck without access to Flamchik can reduce hand flexibility.",
          "Do not describe this deck as tournament-proven or meta-ranked without match-performance evidence.",
        ],
  
        sourceNote:
          "Community Reddit deck-code discussion. The preserved source explicitly included 2x Angez, 4x Moskit, 4x Flamchik and 4x Pyropeck and described the list as Flamchik/Pyropeck self-mill with regrowths.",
  
        editorialNote:
          "Upgrade to a complete preset when the full community deck code is captured.",
      },
  
      /* =====================================================
         KIDSUNE EVOLUTION / DISCARD
         ===================================================== */
  
      {
        id: "kidsune-evolution-discard",
  
        name: "Kidsune Evolution / Discard",
  
        archetype: "Evolution / Discard",
  
        description:
          "A community deck concept centered on reaching the Kidsune evolution line quickly while using discard-oriented cards and the Helio evolution family to keep the deck moving.",
  
        gamePlan:
          "Establish the Kidsune evolution line early, use discard effects to cycle through less useful cards, and lean on the Helio family for additional draw-and-discard consistency.",
  
        /**
         * Exact quantities for this community list were not
         * preserved in the current source material.
         *
         * Keep cards empty rather than inventing copy counts.
         */
        cards: [],
  
        completeDeckList: false,
  
        documentedCardIds: cardIds(
          "Kidsune",
          "Bonfiox",
          "Honobi",
          "Kyuenbi",
          "Helio",
          "Pixy",
          "Flory",
          "Magnoria"
        ),
  
        supportingCardIds: cardIds(
          "Helio",
          "Pixy",
          "Flory",
          "Magnoria"
        ),
  
        coreCardIds: cardIds(
          "Kidsune",
          "Bonfiox",
          "Honobi",
          "Kyuenbi"
        ),
  
        goals: [
          "evolution",
          "draw",
          "consistency",
        ],
  
        types: [
          "Fire",
          "Earth",
        ],
  
        status: "community",
  
        evidenceLevel: "limited",
  
        whyItWorks: [
          "Kidsune has a fully documented evolution path through Bonfiox and Honobi into Kyuenbi.",
          "Each step in the Kidsune line improves the Fire damage-and-draw effect, giving the chain a coherent payoff.",
          "Helio, Pixy, Flory and Magnoria form a documented Earth evolution family built around draw-and-discard effects.",
          "The community strategy specifically described rushing the Kidsune evolution while discarding and using the Helio tree as part of the supporting package.",
        ],
  
        cautions: [
          "Exact copy counts from the community list are not currently preserved, so this is an archetype reference rather than a legal 50-card deck.",
          "Running multiple evolution families can increase the number of cards that depend on drawing the correct earlier stages.",
          "The deck should not be presented as a tournament or win-rate recommendation without additional match evidence.",
        ],
  
        sourceNote:
          "Community Reddit discussion describing a deck that rushes the Kidsune evolution while discarding, with the Helio tree and regrowth-style cards as supporting pieces.",
  
        editorialNote:
          "Do not generate copy counts algorithmically. Add them only when the original community deck list is recovered.",
      },
    ];
  
  /* =========================================================
     PRESET LOOKUPS
     ========================================================= */
  
  export const TETRAMON_DECK_PRESET_BY_ID: ReadonlyMap<
    string,
    TetramonDeckPresetData
  > = new Map(
    TETRAMON_DECK_PRESETS.map((deck) => [
      deck.id,
      deck,
    ])
  );
  
  export function getTetramonDeckPreset(
    deckId: string
  ): TetramonDeckPresetData | undefined {
    return TETRAMON_DECK_PRESET_BY_ID.get(
      normalizeTetramonId(deckId)
    );
  }
  
  /* =========================================================
     RESOLVE CARDS
     ========================================================= */
  
  export function resolvePresetCards(
    preset: TetramonDeckPresetData
  ): Array<{
    card: TetramonCard;
    copies: number;
  }> {
    return preset.cards.flatMap(
      ({ cardId, copies }) => {
        const card =
          TETRAMON_CARD_BY_ID.get(cardId);
  
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
  
  export function resolveDocumentedCards(
    preset: TetramonDeckPresetData
  ): TetramonCard[] {
    return preset.documentedCardIds
      .map((id) => getTetramonCard(id))
      .filter(
        (card): card is TetramonCard =>
          Boolean(card)
      );
  }
  
  /* =========================================================
     PRESET SUMMARY
     ========================================================= */
  
  export function getPresetCardCount(
    preset: TetramonDeckPresetData
  ): number {
    return preset.cards.reduce(
      (total, card) =>
        total + card.copies,
      0
    );
  }
  
  export function isCompletePreset(
    preset: TetramonDeckPresetData
  ): boolean {
    return (
      preset.completeDeckList &&
      getPresetCardCount(preset) === 50
    );
  }
  
  /* =========================================================
     FIND MY DECK
     ========================================================= */
  
  /**
   * This score is a PREFERENCE MATCH.
   *
   * It does NOT represent:
   *
   * - win rate
   * - tournament performance
   * - meta strength
   * - card power
   *
   * The purpose is simply:
   *
   * "Which documented archetype most closely matches what the
   * player said they want to play?"
   */
  export function scoreDeckFit(
    preset: TetramonDeckPresetData,
    preferences: DeckFinderPreferences
  ): DeckRecommendation {
    let score = 0;
  
    const reasons: string[] = [];
    const cautions: string[] = [
      ...preset.cautions,
    ];
  
    /* -------------------------------------------------------
       GOAL MATCH
       ------------------------------------------------------- */
  
    if (
      preset.goals.includes(
        preferences.goal
      )
    ) {
      score += 40;
  
      reasons.push(
        `Matches the ${formatGoal(
          preferences.goal
        )} playstyle you selected.`
      );
    }
  
    /* -------------------------------------------------------
       TYPE MATCH
       ------------------------------------------------------- */
  
    if (
      preferences.preferredType &&
      preset.types.includes(
        preferences.preferredType
      )
    ) {
      score += 25;
  
      reasons.push(
        `Uses ${preferences.preferredType} cards as part of its documented game plan.`
      );
    }
  
    if (!preferences.preferredType) {
      score += 10;
    }
  
    /* -------------------------------------------------------
       CORE CARD MATCH
       ------------------------------------------------------- */
  
    if (preferences.coreCardId) {
      const coreId =
        normalizeTetramonId(
          preferences.coreCardId
        );
  
      if (
        preset.coreCardIds.includes(coreId)
      ) {
        score += 25;
  
        const card =
          getTetramonCard(coreId);
  
        reasons.push(
          card
            ? `${card.name} is one of this archetype's core cards.`
            : "Your selected core card is part of this archetype."
        );
      } else if (
        preset.documentedCardIds.includes(
          coreId
        )
      ) {
        score += 15;
  
        const card =
          getTetramonCard(coreId);
  
        reasons.push(
          card
            ? `${card.name} is documented as part of this archetype.`
            : "Your selected card appears in this archetype."
        );
      }
    }
  
    /* -------------------------------------------------------
       EXPERIENCE
       ------------------------------------------------------- */
  
    if (
      preferences.experience === "new"
    ) {
      if (
        preset.goals.includes(
          "consistency"
        )
      ) {
        score += 10;
  
        reasons.push(
          "The archetype includes consistency as one of its main goals."
        );
      }
  
      if (
        preset.goals.includes(
          "evolution"
        )
      ) {
        cautions.push(
          "This archetype uses evolution lines, so new players should check that earlier stages are included before adding higher evolutions."
        );
      }
    }
  
    /* -------------------------------------------------------
       SIMPLE EVOLUTION PREFERENCE
       ------------------------------------------------------- */
  
    if (
      preferences.preferSimpleEvolution
    ) {
      const evolutionComplexity =
        getPresetEvolutionComplexity(
          preset
        );
  
      if (evolutionComplexity === "low") {
        score += 15;
  
        reasons.push(
          "Its documented core has relatively light evolution dependency."
        );
      } else if (
        evolutionComplexity === "high"
      ) {
        score -= 10;
  
        cautions.push(
          "This archetype relies on several evolution stages, so it may not match your preference for simpler evolution setup."
        );
      }
    }
  
    /* -------------------------------------------------------
       EVIDENCE
       ------------------------------------------------------- */
  
    if (
      preset.evidenceLevel === "strong"
    ) {
      score += 10;
    } else if (
      preset.evidenceLevel ===
      "moderate"
    ) {
      score += 5;
    }
  
    /* -------------------------------------------------------
       PARTIAL LIST CAUTION
       ------------------------------------------------------- */
  
    if (!preset.completeDeckList) {
      cautions.push(
        "This is currently an archetype recommendation, not a complete 50-card importable list."
      );
    }
  
    return {
      deck: preset,
      fitScore: clamp(
        Math.round(score),
        0,
        100
      ),
      reasons: uniqueStrings(reasons),
      cautions: uniqueStrings(cautions),
    };
  }
  
  /* =========================================================
     FIND RECOMMENDATIONS
     ========================================================= */
  
  export function findRecommendedDecks(
    preferences: DeckFinderPreferences,
    limit = 3
  ): DeckRecommendation[] {
    return TETRAMON_DECK_PRESETS
      .map((preset) =>
        scoreDeckFit(
          preset,
          preferences
        )
      )
      .sort(
        (a, b) =>
          b.fitScore - a.fitScore
      )
      .slice(0, limit);
  }
  
  /* =========================================================
     CORE CARD LOOKUP
     ========================================================= */
  
  export function getDecksForCard(
    cardId: string
  ): TetramonDeckPresetData[] {
    const normalized =
      normalizeTetramonId(cardId);
  
    return TETRAMON_DECK_PRESETS.filter(
      (preset) =>
        preset.documentedCardIds.includes(
          normalized
        )
    );
  }
  
  export function getDecksByType(
    type: TetramonType
  ): TetramonDeckPresetData[] {
    return TETRAMON_DECK_PRESETS.filter(
      (preset) =>
        preset.types.includes(type)
    );
  }
  
  export function getDecksByGoal(
    goal: DeckGoal
  ): TetramonDeckPresetData[] {
    return TETRAMON_DECK_PRESETS.filter(
      (preset) =>
        preset.goals.includes(goal)
    );
  }
  
  /* =========================================================
     EVOLUTION COMPLEXITY
     ========================================================= */
  
  export type PresetEvolutionComplexity =
    | "none"
    | "low"
    | "medium"
    | "high";
  
  /**
   * This is deliberately simple.
   *
   * It measures how much of the documented archetype is tied
   * to cards that have evolution relationships.
   *
   * It is NOT a strength score.
   */
  export function getPresetEvolutionComplexity(
    preset: TetramonDeckPresetData
  ): PresetEvolutionComplexity {
    const cards =
      resolveDocumentedCards(preset);
  
    if (cards.length === 0) {
      return "none";
    }
  
    const evolutionCards =
      cards.filter(
        (card) =>
          card.previousEvolutions.length >
            0 ||
          card.nextEvolutions.length > 0
      ).length;
  
    if (evolutionCards === 0) {
      return "none";
    }
  
    const ratio =
      evolutionCards / cards.length;
  
    if (ratio <= 0.25) {
      return "low";
    }
  
    if (ratio <= 0.5) {
      return "medium";
    }
  
    return "high";
  }
  
  /* =========================================================
     PRESET DATA VALIDATION
     ========================================================= */
  
  export interface DeckPresetValidationIssue {
    presetId: string;
  
    severity: "error" | "warning";
  
    message: string;
  }
  
  export function validateDeckPresets():
    DeckPresetValidationIssue[] {
    const issues: DeckPresetValidationIssue[] =
      [];
  
    for (const preset of
      TETRAMON_DECK_PRESETS) {
      /* -----------------------------------------------------
         UNKNOWN CARDS
         ----------------------------------------------------- */
  
      const referencedIds = new Set([
        ...preset.cards.map(
          (card) => card.cardId
        ),
        ...preset.documentedCardIds,
        ...preset.coreCardIds,
        ...(preset.supportingCardIds ??
          []),
      ]);
  
      for (const cardId of referencedIds) {
        if (
          !TETRAMON_CARD_BY_ID.has(cardId)
        ) {
          issues.push({
            presetId: preset.id,
            severity: "error",
            message: `Preset references unknown card "${cardId}".`,
          });
        }
      }
  
      /* -----------------------------------------------------
         COPY LIMIT
         ----------------------------------------------------- */
  
      for (const entry of preset.cards) {
        if (entry.copies < 1) {
          issues.push({
            presetId: preset.id,
            severity: "error",
            message: `${entry.cardId} has an invalid copy count of ${entry.copies}.`,
          });
        }
  
        if (entry.copies > 4) {
          issues.push({
            presetId: preset.id,
            severity: "error",
            message: `${entry.cardId} exceeds the 4-copy deck limit.`,
          });
        }
      }
  
      /* -----------------------------------------------------
         COMPLETE LIST
         ----------------------------------------------------- */
  
      const total =
        getPresetCardCount(preset);
  
      if (
        preset.completeDeckList &&
        total !== 50
      ) {
        issues.push({
          presetId: preset.id,
          severity: "error",
          message: `Preset is marked complete but contains ${total}/50 cards.`,
        });
      }
  
      if (
        !preset.completeDeckList &&
        total === 50
      ) {
        issues.push({
          presetId: preset.id,
          severity: "warning",
          message:
            "Preset contains 50 cards but is still marked as an incomplete community list.",
        });
      }
  
      /* -----------------------------------------------------
         CORE CARD RELATIONSHIP
         ----------------------------------------------------- */
  
      for (const coreId of
        preset.coreCardIds) {
        if (
          !preset.documentedCardIds.includes(
            coreId
          )
        ) {
          issues.push({
            presetId: preset.id,
            severity: "warning",
            message: `Core card "${coreId}" is not included in documentedCardIds.`,
          });
        }
      }
    }
  
    return issues;
  }
  
  /* =========================================================
     UI LABEL HELPERS
     ========================================================= */
  
  export function getPresetStatusLabel(
    status: DeckPresetStatus
  ): string {
    switch (status) {
      case "community":
        return "Community Deck";
  
      case "tested":
        return "Tested Deck";
  
      case "experimental":
        return "Experimental Deck";
    }
  }
  
  export function getEvidenceLabel(
    evidence: DeckEvidenceLevel
  ): string {
    switch (evidence) {
      case "strong":
        return "Strong Evidence";
  
      case "moderate":
        return "Moderate Evidence";
  
      case "limited":
        return "Limited Evidence";
    }
  }
  
  /* =========================================================
     UTILITIES
     ========================================================= */
  
  function formatGoal(
    goal: DeckGoal
  ): string {
    switch (goal) {
      case "beginner":
        return "beginner-friendly";
  
      case "consistency":
        return "consistency";
  
      case "aggressive":
        return "aggressive";
  
      case "evolution":
        return "evolution";
  
      case "draw":
        return "draw-heavy";
  
      case "discard":
        return "discard";
  
      case "control":
        return "control";
  
      case "balanced":
        return "balanced";
    }
  }
  
  function clamp(
    value: number,
    min: number,
    max: number
  ): number {
    return Math.min(
      max,
      Math.max(min, value)
    );
  }
  
  function uniqueStrings(
    values: string[]
  ): string[] {
    return [...new Set(values)];
  }
  
  /* =========================================================
     SUMMARY
     ========================================================= */
  
  export const TETRAMON_DECK_PRESET_COUNT =
    TETRAMON_DECK_PRESETS.length;
  
  export const COMPLETE_TETRAMON_DECK_PRESETS =
    TETRAMON_DECK_PRESETS.filter(
      isCompletePreset
    );
  
  export const COMMUNITY_TETRAMON_DECK_PRESETS =
    TETRAMON_DECK_PRESETS.filter(
      (preset) =>
        preset.status === "community"
    );