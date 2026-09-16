import {
    TETRAMON_CARD_COUNT,
    TETRAMON_CARD_COUNTS_BY_CLASS,
    TETRAMON_CARD_COUNTS_BY_TYPE,
    validateEvolutionData,
  } from "../data/tcg-card-shop-simulator/tetramon-cards";
  
  import {
    TETRAMON_DECK_PRESET_COUNT,
    validateDeckPresets,
  } from "../data/tcg-card-shop-simulator/tetramon-decks";
  
  import {
    TETRAMON_SCORING_MODEL_VERSION,
    getTierCounts,
    getScoreExtremes,
  } from "../data/tcg-card-shop-simulator/tetramon-scoring";
  
  console.log("\n================================");
  console.log("TETRAMON DATA CHECK");
  console.log("================================\n");
  
  console.log("Total cards:");
  console.log(TETRAMON_CARD_COUNT);
  
  console.log("\nCards by class:");
  console.table(TETRAMON_CARD_COUNTS_BY_CLASS);
  
  console.log("\nCards by type:");
  console.table(TETRAMON_CARD_COUNTS_BY_TYPE);
  
  /* -----------------------------------------
     EVOLUTION
  ----------------------------------------- */
  
  console.log("\n================================");
  console.log("EVOLUTION VALIDATION");
  console.log("================================\n");
  
  const evolutionIssues = validateEvolutionData();
  
  console.log(
    `Evolution issues: ${evolutionIssues.length}`
  );
  
  if (evolutionIssues.length > 0) {
    console.table(
      evolutionIssues.map((issue) => ({
        type: issue.type,
        cards: issue.cardIds.join(" → "),
        message: issue.message,
      }))
    );
  } else {
    console.log("✓ No evolution issues");
  }
  
  /* -----------------------------------------
     DECK PRESETS
  ----------------------------------------- */
  
  console.log("\n================================");
  console.log("DECK PRESET VALIDATION");
  console.log("================================\n");
  
  console.log(
    `Deck presets: ${TETRAMON_DECK_PRESET_COUNT}`
  );
  
  const deckIssues = validateDeckPresets();
  
  console.log(
    `Deck preset issues: ${deckIssues.length}`
  );
  
  if (deckIssues.length > 0) {
    console.table(deckIssues);
  } else {
    console.log("✓ No deck preset issues");
  }
  
  /* -----------------------------------------
     SCORING
  ----------------------------------------- */
  
  console.log("\n================================");
  console.log("SCORING MODEL");
  console.log("================================\n");
  
  console.log(
    `Model version: ${TETRAMON_SCORING_MODEL_VERSION}`
  );
  
  const tierCounts = getTierCounts();
  
  console.log("\nTier distribution:");
  console.table(tierCounts);
  
  const extremes = getScoreExtremes(10);
  
  console.log("\nTOP 10 CARDS:");
  console.table(
    extremes.highest.map((result, index) => ({
      rank: index + 1,
      card: result.cardId,
      score: result.score,
      tier: result.tier,
  
      reliability:
        result.breakdown.reliability,
  
      flexibility:
        result.breakdown.flexibility,
  
      effect:
        result.breakdown.effectValue,
  
      synergy:
        result.breakdown.synergy,
  
      evolution:
        result.breakdown.evolutionAccessibility,
  
      stats:
        result.breakdown.statEfficiency,
    }))
  );
  
  console.log("\nBOTTOM 10 CARDS:");
  console.table(
    extremes.lowest.map((result) => ({
      card: result.cardId,
      score: result.score,
      tier: result.tier,
  
      reliability:
        result.breakdown.reliability,
  
      flexibility:
        result.breakdown.flexibility,
  
      effect:
        result.breakdown.effectValue,
  
      synergy:
        result.breakdown.synergy,
  
      evolution:
        result.breakdown.evolutionAccessibility,
  
      stats:
        result.breakdown.statEfficiency,
    }))
  );
  
  console.log("\n================================");
  console.log("CHECK COMPLETE");
  console.log("================================\n");