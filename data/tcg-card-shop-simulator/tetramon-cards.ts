// src/data/tcg-card-shop-simulator/tetramon-cards.ts

import type {
    CardEffectTag,
    EvolutionValidationIssue,
    TetramonCard,
    TetramonCardClass,
    TetramonDerivedStats,
    TetramonType,
  } from "./tetramon-types";
  
  /* =========================================================
     EFFECT TAGGING
     ========================================================= */
  
  /**
   * These tags are our derived tool data.
   * They are NOT official in-game classifications.
   */
  export function deriveEffectTags(
    playEffect: string
  ): CardEffectTag[] {
    const text = playEffect.toLowerCase();
    const tags = new Set<CardEffectTag>();
  
    if (/\bdraw\b/.test(text)) {
      tags.add("draw");
    }
  
    if (
      /\bdiscard\b/.test(text) &&
      !text.includes("opponent discard")
    ) {
      tags.add("discard-self");
    }
  
    if (
      text.includes("opponent discard") ||
      text.includes("opponent's hand")
    ) {
      tags.add("discard-opponent");
    }
  
    if (
      text.includes("extra damage") ||
      text.includes("deals double damage") ||
      text.includes("deals triple damage")
    ) {
      tags.add("damage-boost");
    }
  
    if (text.includes("double damage")) {
      tags.add("double-damage");
    }
  
    if (text.includes("all element deals")) {
      tags.add("all-element-damage");
    }
  
    if (
      text.includes("create a shield") ||
      text.includes("block")
    ) {
      tags.add("shield");
    }
  
    if (text.includes("damage to shield")) {
      tags.add("shield-break");
    }
  
    if (text.includes("drain")) {
      tags.add("drain");
    }
  
    if (
      text.includes("destroy") &&
      text.includes("field card")
    ) {
      tags.add("field-destruction");
    }
  
    if (
      text.includes("destroy") &&
      text.includes("at random")
    ) {
      tags.add("random-field-destruction");
    }
  
    if (
      text.includes("cannot evolve") ||
      text.includes("opponent cannot evolve")
    ) {
      tags.add("evolution-lock");
    }
  
    if (
      text.includes("negate") &&
      text.includes("damage")
    ) {
      tags.add("damage-negation");
    }
  
    if (
      text.includes("disable") &&
      text.includes("attack")
    ) {
      tags.add("attack-disable");
    }
  
    if (
      text.includes("unblockable") &&
      text.includes("tp damage")
    ) {
      tags.add("unblockable-tp-damage");
    }
  
    if (text.includes("swap")) {
      tags.add("field-swap");
    }
  
    if (
      text.includes("or less") ||
      text.includes("or higher") ||
      text.includes("but ")
    ) {
      tags.add("conditional");
    }
  
    return [...tags];
  }
  
  /* =========================================================
     INTERNAL RAW DATA
     ========================================================= */
  
  type RawCard = readonly [
    name: string,
    cardClass: TetramonCardClass,
    type: TetramonType,
    from: number,
    to: number,
    playEffect: string,
    previousEvolutions: readonly string[],
    nextEvolutions: readonly string[],
    health: number,
    strength: number,
    vitality: number,
    spirit: number,
    magic: number,
    speed: number,
    albumPage?: number,
  ];
  
  const rawCards: RawCard[] = [
    /* =======================================================
       BASIC
       ======================================================= */
  
    [
      "Pigni",
      "Basic",
      "Fire",
      1,
      12,
      "Fire element deals 30 extra damage this turn",
      [],
      ["Burpig"],
      79,
      34,
      25,
      11,
      14,
      20,
      1,
    ],
    [
      "Kidsune",
      "Basic",
      "Fire",
      49,
      60,
      "Fire element deals 15 extra damage this turn, draw 1",
      [],
      ["Bonfiox"],
      75,
      12,
      13,
      28,
      33,
      24,
      5,
    ],
    [
      "Nanomite",
      "Basic",
      "Earth",
      97,
      108,
      "Create a shield to block 20 damage",
      [],
      ["Decimite"],
      110,
      25,
      30,
      3,
      25,
      8,
      9,
    ],
    [
      "Sapoling",
      "Basic",
      "Earth",
      145,
      156,
      "Draw 1 card, then discard 1 card",
      [],
      ["Forush"],
      100,
      22,
      18,
      22,
      17,
      12,
      13,
    ],
    [
      "Minstar",
      "Basic",
      "Water",
      193,
      204,
      "Draw 1 card",
      [],
      ["Trickstar"],
      78,
      12,
      13,
      28,
      32,
      15,
      17,
    ],
    [
      "Shellow",
      "Basic",
      "Water",
      241,
      252,
      "Draw 1 card",
      [],
      ["Clamigo"],
      81,
      16,
      27,
      15,
      12,
      13,
      21,
    ],
    [
      "Wurmgle",
      "Basic",
      "Wind",
      289,
      300,
      "Opponent cannot evolve next turn",
      [],
      ["Pupazz"],
      70,
      13,
      14,
      27,
      32,
      15,
      25,
    ],
    [
      "Nocti",
      "Basic",
      "Wind",
      337,
      348,
      "Drain 10 of damage dealt this turn",
      [],
      ["Lunight"],
      77,
      22,
      17,
      17,
      19,
      33,
      29,
    ],
    [
      "Helio",
      "Basic",
      "Earth",
      457,
      468,
      "Draw 1 card, then discard 1 card",
      [],
      ["Pixy"],
      80,
      11,
      12,
      25,
      30,
      18,
      39,
    ],
    [
      "Werboo",
      "Basic",
      "Wind",
      505,
      516,
      "Opponent discard 1 card at random",
      [],
      [],
      81,
      12,
      17,
      20,
      33,
      28,
      43,
    ],
    [
      "Flami",
      "Basic",
      "Fire",
      517,
      528,
      "Fire element deals 30 extra damage this turn",
      [],
      [],
      79,
      28,
      18,
      25,
      25,
      29,
      44,
    ],
    [
      "Kyrone",
      "Basic",
      "Water",
      553,
      564,
      "Water element deals 30 extra damage this turn",
      [],
      ["Twofrost"],
      87,
      19,
      14,
      16,
      30,
      23,
      47,
    ],
    [
      "Lupup",
      "Basic",
      "Fire",
      661,
      672,
      "Destroy 1 opponent's field card with fire element 20 or less",
      [],
      ["Luphire"],
      78,
      27,
      24,
      12,
      12,
      26,
      56,
    ],
    [
      "Gupi",
      "Basic",
      "Water",
      709,
      720,
      "Destroy 1 opponent's field card with water element 20 or less",
      [],
      ["Sharfin"],
      90,
      32,
      18,
      18,
      8,
      23,
      60,
    ],
    [
      "Batrang",
      "Basic",
      "Wind",
      757,
      768,
      "Wind element deals 50 extra damage this turn",
      [],
      [],
      83,
      28,
      18,
      17,
      10,
      26,
      64,
    ],
    [
      "Tetron",
      "Basic",
      "Wind",
      805,
      816,
      "All element deals 10 extra damage this turn",
      [],
      ["Raxx"],
      69,
      11,
      19,
      25,
      30,
      33,
      68,
    ],
    [
      "Clawop",
      "Basic",
      "Earth",
      853,
      864,
      "Destroy 1 opponent's field card with earth element 20 or less",
      [],
      ["Clawdos"],
      89,
      30,
      21,
      21,
      12,
      11,
      72,
    ],
    [
      "Sunflork",
      "Basic",
      "Fire",
      901,
      912,
      "Negate 50 of opponent's fire element damage next turn, draw 1",
      [],
      ["Scarlios"],
      88,
      28,
      18,
      22,
      15,
      23,
      76,
    ],
    [
      "Crobib",
      "Basic",
      "Water",
      937,
      948,
      "Negate 50 of opponent's water element damage next turn, draw 1",
      [],
      ["Crosilisk"],
      84,
      18,
      16,
      23,
      24,
      18,
      79,
    ],
    [
      "Nimblis",
      "Basic",
      "Wind",
      973,
      984,
      "Negate 50 of opponent's wind element damage next turn, draw 1",
      [],
      ["Nimboculo"],
      65,
      12,
      16,
      30,
      36,
      20,
      82,
    ],
    [
      "Esmeri",
      "Basic",
      "Earth",
      1009,
      1020,
      "Negate 50 of opponent's earth element damage next turn, draw 1",
      [],
      ["Esmerock"],
      105,
      27,
      27,
      25,
      15,
      12,
      85,
    ],
    [
      "Seedant",
      "Basic",
      "Earth",
      1117,
      1128,
      "Earth element deals 30 extra damage this turn",
      [],
      ["Budwing"],
      109,
      21,
      30,
      27,
      12,
      12,
      94,
    ],
    [
      "Mufflin",
      "Basic",
      "Earth",
      1225,
      1236,
      "Drain 20 of damage dealt this turn",
      [],
      ["Muffleur"],
      90,
      12,
      21,
      18,
      25,
      17,
      103,
    ],
    [
      "Anguifish",
      "Basic",
      "Water",
      1261,
      1272,
      "Water element deals 30 extra damage this turn",
      [],
      ["Amneshark"],
      93,
      19,
      28,
      25,
      24,
      22,
      106,
    ],
    [
      "Flamchik",
      "Basic",
      "Fire",
      1333,
      1344,
      "Deals double damage to shield this turn",
      [],
      ["Pyropeck"],
      87,
      28,
      20,
      19,
      12,
      29,
      112,
    ],
    [
      "Poseia",
      "Basic",
      "Water",
      1357,
      1368,
      "Destroy 1 opponent's field card with water element 20 or less",
      [],
      ["Posteed"],
      79,
      17,
      19,
      28,
      27,
      21,
      114,
    ],
    [
      "Sludglop",
      "Basic",
      "Wind",
      1405,
      1416,
      "Opponent discard 1 card at random, then draw 1 card",
      [],
      ["Sludgetox"],
      68,
      15,
      20,
      28,
      29,
      17,
      118,
    ],
  
    /* =======================================================
       RARE
       ======================================================= */
  
    [
      "Burpig",
      "Rare",
      "Fire",
      13,
      24,
      "Fire element deals 60 extra damage this turn",
      ["Pigni"],
      ["Inferhog"],
      81,
      35,
      25,
      12,
      14,
      18,
    ],
    [
      "Bonfiox",
      "Rare",
      "Fire",
      61,
      72,
      "Fire element deals 30 extra damage this turn, draw 1",
      ["Kidsune"],
      ["Honobi"],
      78,
      12,
      13,
      29,
      34,
      25,
    ],
    [
      "Decimite",
      "Rare",
      "Earth",
      109,
      120,
      "Create a shield to block 40 damage",
      ["Nanomite"],
      ["Meganite"],
      117,
      26,
      32,
      3,
      26,
      8,
    ],
    [
      "Forush",
      "Rare",
      "Earth",
      157,
      168,
      "Draw 2 card, then discard 2 card",
      ["Sapoling"],
      ["Timbro"],
      110,
      26,
      22,
      20,
      18,
      11,
    ],
    [
      "Trickstar",
      "Rare",
      "Water",
      205,
      216,
      "Draw 2 card",
      ["Minstar"],
      ["Princestar"],
      82,
      13,
      13,
      30,
      31,
      15,
    ],
    [
      "Clamigo",
      "Rare",
      "Water",
      253,
      264,
      "Draw 2 card",
      ["Shellow"],
      ["Aquariff"],
      84,
      17,
      28,
      17,
      13,
      13,
    ],
    [
      "Pupazz",
      "Rare",
      "Wind",
      301,
      312,
      "Opponent cannot evolve next turn, draw 1",
      ["Wurmgle"],
      ["Mothini"],
      73,
      13,
      16,
      28,
      34,
      12,
    ],
    [
      "Lunight",
      "Rare",
      "Wind",
      349,
      360,
      "Drain 20 of damage dealt this turn",
      ["Nocti"],
      ["Vampicant"],
      83,
      23,
      18,
      19,
      19,
      34,
    ],
    [
      "Minotos",
      "Rare",
      "Fire",
      385,
      396,
      "Destroy 1 card on opponent's field",
      [],
      [],
      90,
      34,
      22,
      22,
      10,
      18,
    ],
    [
      "Jelicleen",
      "Rare",
      "Water",
      421,
      432,
      "Draw 2 cards",
      [],
      [],
      90,
      8,
      16,
      33,
      35,
      15,
    ],
    [
      "Wispo",
      "Rare",
      "Earth",
      433,
      444,
      "Randomly swap 1 of opponent's field card",
      [],
      [],
      94,
      8,
      20,
      35,
      35,
      27,
    ],
    [
      "Mummog",
      "Rare",
      "Wind",
      445,
      456,
      "Opponent cannot evolve for 2 turn",
      [],
      [],
      91,
      23,
      20,
      23,
      21,
      16,
    ],
    [
      "Pixy",
      "Rare",
      "Earth",
      469,
      480,
      "Draw 2 card, then discard 2 card",
      ["Helio"],
      ["Flory"],
      82,
      12,
      12,
      26,
      32,
      17,
    ],
    [
      "Angez",
      "Rare",
      "Wind",
      529,
      540,
      "Wind element deals 30 extra damage this turn",
      [],
      [],
      90,
      12,
      22,
      30,
      25,
      19,
    ],
    [
      "Twofrost",
      "Rare",
      "Water",
      565,
      576,
      "Water element deals 60 extra damage this turn",
      ["Kyrone"],
      ["Threeze"],
      88,
      20,
      14,
      17,
      31,
      23,
    ],
    [
      "Luphire",
      "Rare",
      "Fire",
      673,
      684,
      "Destroy 1 opponent's field card with fire element 30 or less",
      ["Lupup"],
      ["Lucinder"],
      80,
      28,
      25,
      13,
      12,
      28,
    ],
    [
      "Sharfin",
      "Rare",
      "Water",
      721,
      732,
      "Destroy 1 opponent's field card with water element 30 or less",
      ["Gupi"],
      ["Gilgabass"],
      95,
      34,
      19,
      19,
      8,
      24,
    ],
    [
      "Dusko",
      "Rare",
      "Wind",
      769,
      780,
      "Opponent cannot evolve for 2 turn",
      [],
      [],
      94,
      12,
      20,
      34,
      30,
      29,
    ],
    [
      "Raxx",
      "Rare",
      "Wind",
      817,
      828,
      "All element deals 20 extra damage this turn",
      ["Tetron"],
      ["Gannon"],
      79,
      33,
      27,
      19,
      16,
      34,
    ],
    [
      "Clawdos",
      "Rare",
      "Earth",
      865,
      876,
      "Destroy 1 opponent's field card with earth element 30 or less",
      ["Clawop"],
      ["Clawaken"],
      92,
      31,
      22,
      23,
      12,
      11,
    ],
    [
      "Scarlios",
      "Rare",
      "Fire",
      913,
      924,
      "Negate 75 of opponent's fire element damage next turn, draw 1",
      ["Sunflork"],
      ["Scarkgorus"],
      92,
      30,
      19,
      24,
      16,
      25,
    ],
    [
      "Crosilisk",
      "Rare",
      "Water",
      949,
      960,
      "Negate 75 of opponent's water element damage next turn, draw 1",
      ["Crobib"],
      ["Crorathian"],
      90,
      22,
      18,
      26,
      28,
      19,
    ],
    [
      "Nimboculo",
      "Rare",
      "Wind",
      985,
      996,
      "Negate 75 of opponent's wind element damage next turn, draw 1",
      ["Nimblis"],
      ["Nimbustrike"],
      68,
      13,
      17,
      32,
      38,
      23,
    ],
    [
      "Esmerock",
      "Rare",
      "Earth",
      1021,
      1032,
      "Negate 75 of opponent's earth element damage next turn, draw 1",
      ["Esmeri"],
      ["Esmerdios"],
      112,
      30,
      30,
      28,
      18,
      13,
    ],
    [
      "Crablox",
      "Rare",
      "Water",
      1069,
      1080,
      "Draw 2 card, then discard 1 card at random",
      [],
      ["Clawvenger"],
      97,
      33,
      33,
      15,
      11,
      23,
    ],
    [
      "Lumie",
      "Rare",
      "Fire",
      1105,
      1116,
      "Wind element deals double damage this turn, but earth element deals no damage",
      [],
      [],
      87,
      15,
      15,
      30,
      30,
      26,
    ],
    [
      "Budwing",
      "Rare",
      "Earth",
      1129,
      1140,
      "Earth element deals 60 extra damage this turn",
      ["Seedant"],
      ["Buzzeed"],
      99,
      20,
      27,
      24,
      12,
      12,
    ],
    [
      "Beakai",
      "Rare",
      "Wind",
      1153,
      1164,
      "Opponent discard 1 cards at random, draw 1",
      [],
      ["Talontsu"],
      90,
      25,
      20,
      14,
      9,
      30,
    ],
    [
      "Muffleur",
      "Rare",
      "Earth",
      1237,
      1248,
      "Drain 20 of damage dealt this turn, draw 1",
      ["Mufflin"],
      ["Mufflimax"],
      99,
      13,
      22,
      19,
      27,
      17,
    ],
    [
      "Amneshark",
      "Rare",
      "Water",
      1273,
      1284,
      "Water element deals 60 extra damage this turn",
      ["Anguifish"],
      ["Amnesilla"],
      103,
      21,
      30,
      27,
      25,
      22,
    ],
    [
      "Frizard",
      "Rare",
      "Fire",
      1297,
      1308,
      "Deal 20 unblockable TP damage",
      [],
      ["Gekoflare"],
      92,
      33,
      30,
      12,
      5,
      31,
    ],
    [
      "Pyropeck",
      "Rare",
      "Fire",
      1345,
      1356,
      "Deals triple damage to shield this turn",
      ["Flamchik"],
      [],
      90,
      31,
      22,
      20,
      13,
      30,
    ],
    [
      "Posteed",
      "Rare",
      "Water",
      1369,
      1380,
      "Destroy 1 opponent's field card with water element 30 or less",
      ["Poseia"],
      ["Poseigon"],
      81,
      18,
      20,
      30,
      29,
      22,
    ],
    [
      "Sludgetox",
      "Rare",
      "Wind",
      1417,
      1428,
      "Opponent discard 2 card at random, then draw 2 card",
      ["Sludglop"],
      ["Toxigoop"],
      71,
      17,
      21,
      29,
      31,
      18,
    ],
  
    /* =======================================================
       EPIC
       ======================================================= */
  
    [
      "Inferhog",
      "Epic",
      "Fire",
      25,
      36,
      "Fire element deals 100 extra damage this turn",
      ["Burpig"],
      ["Blazoar"],
      83,
      36,
      26,
      12,
      15,
      17,
    ],
    [
      "Honobi",
      "Epic",
      "Fire",
      73,
      84,
      "Fire element deals 50 extra damage this turn, draw 1",
      ["Bonfiox"],
      ["Kyuenbi"],
      81,
      13,
      14,
      31,
      36,
      26,
    ],
    [
      "Meganite",
      "Epic",
      "Earth",
      121,
      132,
      "Create a shield to block 60 damage",
      ["Decimite"],
      ["Giganite"],
      124,
      27,
      33,
      3,
      27,
      8,
    ],
    [
      "Timbro",
      "Epic",
      "Earth",
      169,
      180,
      "Draw 2 card, then discard 1 card",
      ["Forush"],
      ["Mammotree"],
      118,
      28,
      24,
      21,
      20,
      10,
    ],
    [
      "Princestar",
      "Epic",
      "Water",
      217,
      228,
      "Draw 3 card",
      ["Trickstar"],
      ["Kingstar"],
      87,
      13,
      14,
      32,
      33,
      16,
    ],
    [
      "Aquariff",
      "Epic",
      "Water",
      265,
      276,
      "Draw 3 card",
      ["Clamigo"],
      ["Fistronk"],
      88,
      19,
      29,
      19,
      14,
      12,
    ],
    [
      "Mothini",
      "Epic",
      "Wind",
      313,
      324,
      "Opponent cannot evolve next turn, draw 2",
      ["Pupazz"],
      ["Royalama"],
      77,
      14,
      18,
      29,
      36,
      25,
    ],
    [
      "Vampicant",
      "Epic",
      "Wind",
      361,
      372,
      "Drain 30 of damage dealt this turn",
      ["Lunight"],
      ["Dracunix"],
      88,
      24,
      20,
      20,
      19,
      35,
    ],
    [
      "Drilceros",
      "Epic",
      "Fire",
      397,
      408,
      "Deals double damage to shield for 2 turn",
      [],
      [],
      93,
      27,
      25,
      22,
      17,
      10,
    ],
    [
      "Grizzaw",
      "Epic",
      "Earth",
      409,
      420,
      "Destroy 1 card on opponent's field",
      [],
      [],
      100,
      32,
      25,
      18,
      3,
      20,
    ],
    [
      "Flory",
      "Epic",
      "Earth",
      481,
      492,
      "Draw 2 card, then discard 1 card",
      ["Pixy"],
      ["Magnoria"],
      84,
      12,
      12,
      27,
      34,
      17,
    ],
    [
      "Moskit",
      "Epic",
      "Wind",
      541,
      552,
      "Drain 30 of damage dealt this turn",
      [],
      [],
      82,
      30,
      18,
      18,
      15,
      31,
    ],
    [
      "Threeze",
      "Epic",
      "Water",
      577,
      588,
      "Water element deals 100 extra damage this turn",
      ["Twofrost"],
      ["Hydroid"],
      89,
      21,
      14,
      18,
      32,
      23,
    ],
    [
      "Tortugor",
      "Epic",
      "Earth",
      649,
      660,
      "Create a shield to block 50 damage, then draw 1 card",
      [],
      [],
      115,
      27,
      29,
      28,
      11,
      8,
    ],
    [
      "Lucinder",
      "Epic",
      "Fire",
      685,
      696,
      "Destroy 1 opponent's field card with fire element 40 or less",
      ["Luphire"],
      ["Lucadence"],
      82,
      29,
      26,
      14,
      13,
      30,
    ],
    [
      "Gilgabass",
      "Epic",
      "Water",
      733,
      744,
      "Destroy 1 opponent's field card with water element 40 or less",
      ["Sharfin"],
      ["Jigajawr"],
      100,
      36,
      19,
      20,
      8,
      24,
    ],
    [
      "Wolgin",
      "Epic",
      "Wind",
      781,
      792,
      "Disable opponent's wind element attack for 2 turn",
      [],
      [],
      91,
      33,
      17,
      16,
      8,
      30,
    ],
    [
      "Gannon",
      "Epic",
      "Wind",
      829,
      840,
      "All element deals 30 extra damage this turn",
      ["Raxx"],
      ["GigatronX"],
      71,
      14,
      20,
      29,
      37,
      34,
    ],
    [
      "Clawaken",
      "Epic",
      "Earth",
      877,
      888,
      "Destroy 1 opponent's field card with earth element 40 or less",
      ["Clawdos"],
      ["Clawcifear"],
      95,
      32,
      24,
      24,
      12,
      11,
    ],
    [
      "Scarkgorus",
      "Epic",
      "Fire",
      925,
      936,
      "Negate 100 of opponent's fire element damage next turn, draw 1",
      ["Scarlios"],
      [],
      95,
      32,
      20,
      26,
      18,
      28,
    ],
    [
      "Crorathian",
      "Epic",
      "Water",
      961,
      972,
      "Negate 100 of opponent's water element damage next turn, draw 1",
      ["Crosilisk"],
      [],
      93,
      25,
      20,
      30,
      31,
      20,
    ],
    [
      "Nimbustrike",
      "Epic",
      "Wind",
      997,
      1008,
      "Negate 100 of opponent's wind element damage next turn",
      ["Nimboculo"],
      [],
      72,
      14,
      18,
      34,
      40,
      26,
    ],
    [
      "Esmerdios",
      "Epic",
      "Earth",
      1033,
      1044,
      "Negate 100 of opponent's earth element damage next turn, draw 1",
      ["Esmerock"],
      [],
      120,
      35,
      33,
      30,
      20,
      13,
    ],
    [
      "Litspire",
      "Epic",
      "Fire",
      1045,
      1056,
      "Discard 1 card, then destroy 1 card on opponent's field",
      [],
      [],
      105,
      12,
      12,
      16,
      39,
      22,
    ],
    [
      "Clawvenger",
      "Epic",
      "Water",
      1081,
      1092,
      "Draw 3 card, then discard 2 card at random",
      ["Crablox"],
      [],
      108,
      35,
      35,
      15,
      11,
      25,
    ],
    [
      "Buzzeed",
      "Epic",
      "Earth",
      1141,
      1152,
      "Earth element deals 100 extra damage this turn",
      ["Budwing"],
      [],
      121,
      22,
      34,
      30,
      12,
      12,
    ],
    [
      "Talontsu",
      "Epic",
      "Wind",
      1165,
      1176,
      "Opponent discard 2 cards at random, draw 1",
      ["Beakai"],
      ["Talonryu"],
      100,
      29,
      24,
      15,
      10,
      30,
    ],
    [
      "Talonika",
      "Epic",
      "Wind",
      1177,
      1188,
      "Opponent discard 1 cards at random, draw 2",
      ["Beakai"],
      ["Talonryu"],
      98,
      25,
      23,
      20,
      16,
      31,
    ],
    [
      "Kataryu",
      "Epic",
      "Wind",
      1201,
      1212,
      "Opponent discard 1 card",
      [],
      ["Katengu"],
      105,
      33,
      23,
      19,
      11,
      30,
    ],
    [
      "Mufflimax",
      "Epic",
      "Earth",
      1249,
      1260,
      "Drain 30 of damage dealt this turn, draw 1",
      ["Muffleur"],
      [],
      106,
      15,
      24,
      20,
      30,
      17,
    ],
    [
      "Amnesilla",
      "Epic",
      "Water",
      1285,
      1296,
      "Water element deals 90 extra damage this turn",
      ["Amneshark"],
      [],
      112,
      23,
      33,
      30,
      27,
      22,
    ],
    [
      "Gekoflare",
      "Epic",
      "Fire",
      1309,
      1320,
      "Deal 40 unblockable TP damage",
      ["Frizard"],
      [],
      101,
      36,
      33,
      13,
      5,
      33,
    ],
    [
      "Poseigon",
      "Epic",
      "Water",
      1381,
      1392,
      "Destroy 1 opponent's field card with water element 40 or less",
      ["Posteed"],
      ["Poseidrake"],
      83,
      19,
      21,
      31,
      31,
      23,
    ],
    [
      "Toxigoop",
      "Epic",
      "Wind",
      1429,
      1440,
      "Opponent discard 3 card at random, then draw 2 card",
      ["Sludgetox"],
      ["Toximuck"],
      75,
      20,
      23,
      30,
      34,
      19,
    ],
  
    /* =======================================================
       LEGENDARY
       ======================================================= */
  
    [
      "Blazoar",
      "Legendary",
      "Fire",
      37,
      48,
      "Fire element deals double damage this turn",
      ["Inferhog"],
      [],
      85,
      38,
      28,
      12,
      15,
      16,
    ],
    [
      "Kyuenbi",
      "Legendary",
      "Fire",
      85,
      96,
      "Fire element deals 80 extra damage this turn, draw 1",
      ["Honobi"],
      [],
      86,
      15,
      15,
      33,
      38,
      27,
    ],
    [
      "Giganite",
      "Legendary",
      "Earth",
      133,
      144,
      "Create a shield to block 80 damage",
      ["Meganite"],
      [],
      131,
      30,
      34,
      2,
      28,
      8,
    ],
    [
      "Mammotree",
      "Legendary",
      "Earth",
      181,
      192,
      "Draw 3 card, then discard 2 card",
      ["Timbro"],
      [],
      125,
      30,
      26,
      22,
      21,
      9,
    ],
    [
      "Kingstar",
      "Legendary",
      "Water",
      229,
      240,
      "Draw 4 card",
      ["Princestar"],
      [],
      92,
      16,
      17,
      35,
      35,
      10,
    ],
    [
      "Fistronk",
      "Legendary",
      "Water",
      277,
      288,
      "Draw 4 card",
      ["Aquariff"],
      [],
      94,
      23,
      30,
      21,
      15,
      11,
    ],
    [
      "Royalama",
      "Legendary",
      "Wind",
      325,
      336,
      "Opponent cannot evolve for 2 turn, draw 1",
      ["Mothini"],
      [],
      83,
      15,
      20,
      30,
      40,
      22,
    ],
    [
      "Dracunix",
      "Legendary",
      "Wind",
      373,
      384,
      "Drain 50 of damage dealt this turn",
      ["Vampicant"],
      [],
      93,
      25,
      22,
      20,
      20,
      36,
    ],
    [
      "Magnoria",
      "Legendary",
      "Earth",
      493,
      504,
      "Draw 3 card, then discard 2 card",
      ["Flory"],
      [],
      90,
      13,
      13,
      28,
      35,
      15,
    ],
    [
      "Hydroid",
      "Legendary",
      "Water",
      589,
      600,
      "Water element deals double damage this turn",
      ["Threeze"],
      [],
      90,
      22,
      14,
      18,
      23,
      23,
    ],
    [
      "Drakon",
      "Legendary",
      "Fire",
      601,
      612,
      "Fire element deals double damage this turn",
      [],
      [],
      100,
      30,
      25,
      20,
      30,
      18,
    ],
    [
      "Bogon",
      "Legendary",
      "Earth",
      613,
      624,
      "Earth element deals double damage this turn",
      [],
      [],
      123,
      33,
      24,
      24,
      20,
      11,
    ],
    [
      "Hydron",
      "Legendary",
      "Water",
      625,
      636,
      "Water element deals double damage this turn",
      [],
      [],
      90,
      22,
      19,
      33,
      33,
      20,
    ],
    [
      "Raizon",
      "Legendary",
      "Wind",
      637,
      648,
      "Wind element deals double damage this turn",
      [],
      [],
      93,
      20,
      24,
      24,
      33,
      35,
    ],
    [
      "Lucadence",
      "Legendary",
      "Fire",
      697,
      708,
      "Destroy 2 opponent's field card with fire element 40 or less",
      ["Lucinder"],
      [],
      84,
      30,
      26,
      15,
      14,
      32,
    ],
    [
      "Jigajawr",
      "Legendary",
      "Water",
      745,
      756,
      "Destroy 2 opponent's field card with water element 40 or less",
      ["Gilgabass"],
      [],
      90,
      32,
      18,
      18,
      8,
      23,
    ],
    [
      "Jacktern",
      "Legendary",
      "Wind",
      793,
      804,
      "Opponent discard 2 card at random",
      [],
      [],
      85,
      12,
      15,
      22,
      30,
      22,
    ],
    [
      "GigatronX",
      "Legendary",
      "Wind",
      841,
      852,
      "All element deals 40 extra damage this turn",
      ["Gannon"],
      [],
      82,
      33,
      27,
      25,
      32,
      34,
    ],
    [
      "Clawcifear",
      "Legendary",
      "Earth",
      889,
      900,
      "Destroy 2 opponent's field card with earth element 40 or less",
      ["Clawaken"],
      [],
      100,
      33,
      26,
      25,
      11,
      10,
    ],
    [
      "Voltrex",
      "Legendary",
      "Wind",
      1057,
      1068,
      "Destroy all opponent's field card with wind element 30 or higher",
      [],
      [],
      112,
      25,
      23,
      20,
      30,
      27,
    ],
    [
      "Flambrolly",
      "Legendary",
      "Fire",
      1093,
      1104,
      "Fire element deals double damage this turn, but water element deals no damage",
      [],
      [],
      115,
      30,
      25,
      25,
      28,
      18,
    ],
    [
      "Talonryu",
      "Legendary",
      "Wind",
      1189,
      1200,
      "Destroy 1 card on opponent's field, draw 2",
      ["Talontsu", "Talonika"],
      [],
      110,
      33,
      27,
      26,
      23,
      31,
    ],
    [
      "Katengu",
      "Legendary",
      "Wind",
      1213,
      1224,
      "Oponnent discard 1 card, then destroy a field card at random",
      ["Kataryu"],
      [],
      115,
      38,
      24,
      21,
      11,
      33,
    ],
    [
      "Terradrakon",
      "Legendary",
      "Earth",
      1321,
      1332,
      "Earth element deals double damage this turn",
      [],
      [],
      125,
      27,
      35,
      22,
      12,
      20,
    ],
    [
      "Poseidrake",
      "Legendary",
      "Water",
      1393,
      1404,
      "Destroy 2 opponent's field card with water element 40 or less",
      ["Poseigon"],
      [],
      86,
      20,
      22,
      34,
      34,
      24,
    ],
    [
      "Toximuck",
      "Legendary",
      "Wind",
      1441,
      1452,
      "Opponent discard 4 card at random, then draw 2 card",
      ["Toxigoop"],
      [],
      80,
      22,
      24,
      32,
      36,
      20,
    ],
  ];
  
  /* =========================================================
     NORMALIZATION
     ========================================================= */
  
  export function normalizeTetramonId(
    value: string
  ): string {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  
  export const TETRAMON_CARDS: TetramonCard[] =
    rawCards.map(
      ([
        name,
        cardClass,
        type,
        from,
        to,
        playEffect,
        previousEvolutions,
        nextEvolutions,
        health,
        strength,
        vitality,
        spirit,
        magic,
        speed,
        albumPage,
      ]) => ({
        id: normalizeTetramonId(name),
        name,
        cardClass,
        type,
  
        cardNumber: {
          from,
          to,
        },
  
        ...(albumPage !== undefined
          ? { albumPage }
          : {}),
  
        playEffect,
  
        previousEvolutions:
          previousEvolutions.map(
            normalizeTetramonId
          ),
  
        nextEvolutions:
          nextEvolutions.map(
            normalizeTetramonId
          ),
  
        stats: {
          health,
          strength,
          vitality,
          spirit,
          magic,
          speed,
        },
  
        effectTags:
          deriveEffectTags(playEffect),
  
        confidence: "verified",
      })
    );
  
  /* =========================================================
     LOOKUPS
     ========================================================= */
  
  export const TETRAMON_CARD_BY_ID: ReadonlyMap<
    string,
    TetramonCard
  > = new Map(
    TETRAMON_CARDS.map((card) => [
      card.id,
      card,
    ])
  );
  
  export const TETRAMON_CARD_BY_NAME: ReadonlyMap<
    string,
    TetramonCard
  > = new Map(
    TETRAMON_CARDS.map((card) => [
      card.name.toLowerCase(),
      card,
    ])
  );
  
  export function getTetramonCard(
    cardId: string
  ): TetramonCard | undefined {
    return TETRAMON_CARD_BY_ID.get(
      normalizeTetramonId(cardId)
    );
  }
  
  export function findTetramonCardByName(
    name: string
  ): TetramonCard | undefined {
    return TETRAMON_CARD_BY_NAME.get(
      name.trim().toLowerCase()
    );
  }
  
  /* =========================================================
     FILTER HELPERS
     ========================================================= */
  
  export function getCardsByType(
    type: TetramonType
  ): TetramonCard[] {
    return TETRAMON_CARDS.filter(
      (card) => card.type === type
    );
  }
  
  export function getCardsByClass(
    cardClass: TetramonCardClass
  ): TetramonCard[] {
    return TETRAMON_CARDS.filter(
      (card) => card.cardClass === cardClass
    );
  }
  
  export function getCardsByEffectTag(
    tag: CardEffectTag
  ): TetramonCard[] {
    return TETRAMON_CARDS.filter((card) =>
      card.effectTags.includes(tag)
    );
  }
  
  export function getEvolutionCards(): TetramonCard[] {
    return TETRAMON_CARDS.filter(
      (card) =>
        card.previousEvolutions.length > 0 ||
        card.nextEvolutions.length > 0
    );
  }
  
  export function getStandaloneCards(): TetramonCard[] {
    return TETRAMON_CARDS.filter(
      (card) =>
        card.previousEvolutions.length === 0 &&
        card.nextEvolutions.length === 0
    );
  }
  
  export function getEvolutionStarters(): TetramonCard[] {
    return TETRAMON_CARDS.filter(
      (card) =>
        card.previousEvolutions.length === 0 &&
        card.nextEvolutions.length > 0
    );
  }
  
  export function getEvolutionFinishers(): TetramonCard[] {
    return TETRAMON_CARDS.filter(
      (card) =>
        card.previousEvolutions.length > 0 &&
        card.nextEvolutions.length === 0
    );
  }
  
  /* =========================================================
     DERIVED STATS
     ========================================================= */
  
  export function getDerivedCardStats(
    card: TetramonCard
  ): TetramonDerivedStats {
    const {
      health,
      strength,
      vitality,
      spirit,
      magic,
      speed,
    } = card.stats;
  
    const previousEvolutionCount =
      card.previousEvolutions.length;
  
    const nextEvolutionCount =
      card.nextEvolutions.length;
  
    const hasPreviousEvolution =
      previousEvolutionCount > 0;
  
    const hasNextEvolution =
      nextEvolutionCount > 0;
  
    return {
      statTotal:
        health +
        strength +
        vitality +
        spirit +
        magic +
        speed,
  
      previousEvolutionCount,
      nextEvolutionCount,
  
      hasPreviousEvolution,
      hasNextEvolution,
  
      isEvolutionCard:
        hasPreviousEvolution ||
        hasNextEvolution,
  
      isEvolutionStarter:
        !hasPreviousEvolution &&
        hasNextEvolution,
  
      isEvolutionFinisher:
        hasPreviousEvolution &&
        !hasNextEvolution,
    };
  }
  
  /* =========================================================
     EVOLUTION HELPERS
     ========================================================= */
  
  export function getPreviousEvolutions(
    card: TetramonCard
  ): TetramonCard[] {
    return card.previousEvolutions
      .map((id) =>
        TETRAMON_CARD_BY_ID.get(id)
      )
      .filter(
        (card): card is TetramonCard =>
          Boolean(card)
      );
  }
  
  export function getNextEvolutions(
    card: TetramonCard
  ): TetramonCard[] {
    return card.nextEvolutions
      .map((id) =>
        TETRAMON_CARD_BY_ID.get(id)
      )
      .filter(
        (card): card is TetramonCard =>
          Boolean(card)
      );
  }
  
  /**
   * Returns every card connected to the same evolution family.
   *
   * Handles branching chains such as:
   *
   * Beakai
   *   -> Talontsu
   *   -> Talonika
   *
   * both leading toward Talonryu.
   */
  export function getEvolutionFamily(
    cardId: string
  ): TetramonCard[] {
    const start =
      TETRAMON_CARD_BY_ID.get(
        normalizeTetramonId(cardId)
      );
  
    if (!start) return [];
  
    const visited = new Set<string>();
    const queue = [start.id];
  
    while (queue.length > 0) {
      const currentId = queue.shift();
  
      if (
        !currentId ||
        visited.has(currentId)
      ) {
        continue;
      }
  
      visited.add(currentId);
  
      const current =
        TETRAMON_CARD_BY_ID.get(currentId);
  
      if (!current) continue;
  
      for (const related of [
        ...current.previousEvolutions,
        ...current.nextEvolutions,
      ]) {
        if (!visited.has(related)) {
          queue.push(related);
        }
      }
    }
  
    return [...visited]
      .map((id) =>
        TETRAMON_CARD_BY_ID.get(id)
      )
      .filter(
        (card): card is TetramonCard =>
          Boolean(card)
      );
  }
  
  /* =========================================================
     EVOLUTION DATA VALIDATION
     ========================================================= */
  
  /**
   * Checks whether evolution links are internally consistent.
   *
   * Example:
   *
   * Flamchik -> Pyropeck
   *
   * should be mirrored by:
   *
   * Pyropeck <- Flamchik
   *
   * This is a development/data-quality helper.
   */
  export function validateEvolutionData():
    EvolutionValidationIssue[] {
    const issues: EvolutionValidationIssue[] =
      [];
  
    for (const card of TETRAMON_CARDS) {
      for (const nextId of card.nextEvolutions) {
        const next =
          TETRAMON_CARD_BY_ID.get(nextId);
  
        if (!next) {
          issues.push({
            id: `missing-next-${card.id}-${nextId}`,
            type: "missing-card",
            message: `${card.name} references missing next evolution "${nextId}".`,
            cardIds: [card.id, nextId],
          });
  
          continue;
        }
  
        if (
          !next.previousEvolutions.includes(
            card.id
          )
        ) {
          issues.push({
            id: `reverse-next-${card.id}-${next.id}`,
            type: "missing-reverse-link",
            message: `${card.name} evolves into ${next.name}, but ${next.name} does not list ${card.name} as a previous evolution.`,
            cardIds: [card.id, next.id],
          });
        }
      }
  
      for (const previousId of
        card.previousEvolutions) {
        const previous =
          TETRAMON_CARD_BY_ID.get(
            previousId
          );
  
        if (!previous) {
          issues.push({
            id: `missing-previous-${card.id}-${previousId}`,
            type: "missing-card",
            message: `${card.name} references missing previous evolution "${previousId}".`,
            cardIds: [
              previousId,
              card.id,
            ],
          });
  
          continue;
        }
  
        if (
          !previous.nextEvolutions.includes(
            card.id
          )
        ) {
          issues.push({
            id: `reverse-previous-${previous.id}-${card.id}`,
            type: "missing-reverse-link",
            message: `${card.name} lists ${previous.name} as a previous evolution, but ${previous.name} does not list ${card.name} as a next evolution.`,
            cardIds: [
              previous.id,
              card.id,
            ],
          });
        }
      }
    }
  
    return issues;
  }
  
  /* =========================================================
     SEARCH
     ========================================================= */
  
  export function searchTetramonCards(
    query: string
  ): TetramonCard[] {
    const normalized =
      query.trim().toLowerCase();
  
    if (!normalized) {
      return TETRAMON_CARDS;
    }
  
    return TETRAMON_CARDS.filter(
      (card) =>
        card.name
          .toLowerCase()
          .includes(normalized) ||
        card.playEffect
          .toLowerCase()
          .includes(normalized) ||
        card.type
          .toLowerCase()
          .includes(normalized) ||
        card.cardClass
          .toLowerCase()
          .includes(normalized)
    );
  }
  
  /* =========================================================
     DATASET SUMMARY
     ========================================================= */
  
  export const TETRAMON_CARD_COUNT =
    TETRAMON_CARDS.length;
  
  export const TETRAMON_CARD_COUNTS_BY_CLASS =
    TETRAMON_CARDS.reduce(
      (counts, card) => {
        counts[card.cardClass] += 1;
        return counts;
      },
      {
        Basic: 0,
        Rare: 0,
        Epic: 0,
        Legendary: 0,
      } as Record<TetramonCardClass, number>
    );
  
  export const TETRAMON_CARD_COUNTS_BY_TYPE =
    TETRAMON_CARDS.reduce(
      (counts, card) => {
        counts[card.type] += 1;
        return counts;
      },
      {
        Fire: 0,
        Water: 0,
        Earth: 0,
        Wind: 0,
      } as Record<TetramonType, number>
    );