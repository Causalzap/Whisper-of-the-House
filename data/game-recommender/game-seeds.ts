export type GameSeed = {
    id: string;
    igdbId: number;
    expectedName: string;
  };
  
  export const GAME_SEEDS = [
    // Existing 9-game test pool
    {
      id: "stardew-valley",
      igdbId: 17000,
      expectedName: "Stardew Valley",
    },
    {
      id: "terraria",
      igdbId: 1879,
      expectedName: "Terraria",
    },
    {
      id: "elden-ring",
      igdbId: 119133,
      expectedName: "Elden Ring",
    },
    {
      id: "the-binding-of-isaac-rebirth",
      igdbId: 7789,
      expectedName: "The Binding of Isaac: Rebirth",
    },
    {
      id: "hollow-knight",
      igdbId: 14593,
      expectedName: "Hollow Knight",
    },
    {
      id: "hades",
      igdbId: 113112,
      expectedName: "Hades",
    },
    {
      id: "slay-the-spire",
      igdbId: 40477,
      expectedName: "Slay the Spire",
    },
    {
      id: "balatro",
      igdbId: 251833,
      expectedName: "Balatro",
    },
    {
      id: "core-keeper",
      igdbId: 152127,
      expectedName: "Core Keeper",
    },
  
    // 10 additional popular anchor games
    {
      id: "minecraft",
      igdbId: 135400,
      expectedName: "Minecraft",
    },
    {
      id: "baldurs-gate-3",
      igdbId: 119171,
      expectedName: "Baldur's Gate III",
    },
    {
      id: "cyberpunk-2077",
      igdbId: 1877,
      expectedName: "Cyberpunk 2077",
    },
    {
      id: "the-witcher-3-wild-hunt",
      igdbId: 1942,
      expectedName: "The Witcher 3: Wild Hunt",
    },
    {
      id: "factorio",
      igdbId: 7046,
      expectedName: "Factorio",
    },
    {
      id: "rimworld",
      igdbId: 9789,
      expectedName: "RimWorld",
    },
    {
      id: "dead-cells",
      igdbId: 26855,
      expectedName: "Dead Cells",
    },
    {
      id: "vampire-survivors",
      igdbId: 186725,
      expectedName: "Vampire Survivors",
    },
    {
      id: "portal-2",
      igdbId: 72,
      expectedName: "Portal 2",
    },
    {
      id: "dont-starve-together",
      igdbId: 17832,
      expectedName: "Don't Starve Together",
    },
  
    // 11 games with guide coverage
    {
      id: "rubinite",
      igdbId: 265796,
      expectedName: "Rubinite",
    },
    {
      id: "shift-at-midnight",
      igdbId: 352789,
      expectedName: "Shift at Midnight",
    },
    {
      id: "bookshop-simulator",
      igdbId: 337720,
      expectedName: "Bookshop Simulator",
    },
    {
      id: "pathogenic",
      igdbId: 349463,
      expectedName: "Pathogenic",
    },
    {
      id: "funnel-runners",
      igdbId: 393305,
      expectedName: "Funnel Runners",
    },
    {
      id: "angels-fall-first",
      igdbId: 17279,
      expectedName: "Angels Fall First",
    },
    {
      id: "cat-mail-co",
      igdbId: 406739,
      expectedName: "Cat Mail Co.",
    },
    {
      id: "doom-the-dark-ages-revelations",
      igdbId: 405075,
      expectedName: "Doom: The Dark Ages - Revelations",
    },
    {
      id: "nuclear-epoch",
      igdbId: 370864,
      expectedName: "Nuclear Epoch",
    },
    {
      id: "the-mound-omen-of-cthulhu",
      igdbId: 334673,
      expectedName: "The Mound: Omen of Cthulhu",
    },
    {
      id: "dimhaven-the-lost-source",
      igdbId: 253578,
      expectedName: "Dimhaven: The Lost Source",
    },
    {
        id: "celeste",
        igdbId: 26226,
        expectedName: "Celeste",
      },
      {
        id: "subnautica",
        igdbId: 9254,
        expectedName: "Subnautica",
      },
      {
        id: "no-mans-sky",
        igdbId: 3225,
        expectedName: "No Man's Sky",
      },
      {
        id: "dave-the-diver",
        igdbId: 203722,
        expectedName: "Dave the Diver",
      },
      {
        id: "dredge",
        igdbId: 164867,
        expectedName: "Dredge",
      },
      {
        id: "cult-of-the-lamb",
        igdbId: 165351,
        expectedName: "Cult of the Lamb",
      },
      {
        id: "oxygen-not-included",
        igdbId: 19542,
        expectedName: "Oxygen Not Included",
      },
      {
        id: "satisfactory",
        igdbId: 90558,
        expectedName: "Satisfactory",
      },
      {
        id: "cities-skylines",
        igdbId: 9066,
        expectedName: "Cities: Skylines",
      },
      {
        id: "civilization-vi",
        igdbId: 19130,
        expectedName: "Sid Meier's Civilization VI",
      },
      {
        id: "xcom-2",
        igdbId: 10919,
        expectedName: "XCOM 2",
      },
      {
        id: "disco-elysium",
        igdbId: 26472,
        expectedName: "Disco Elysium",
      },
      {
        id: "outer-wilds",
        igdbId: 11737,
        expectedName: "Outer Wilds",
      },
      {
        id: "it-takes-two",
        igdbId: 135243,
        expectedName: "It Takes Two",
      },
      {
        id: "deep-rock-galactic",
        igdbId: 27134,
        expectedName: "Deep Rock Galactic",
      },
      {
        id: "crusader-kings-iii",
        igdbId: 124954,
        expectedName: "Crusader Kings III",
      },
      {
        id: "into-the-breach",
        igdbId: 27117,
        expectedName: "Into the Breach",
      },
      {
        id: "return-of-the-obra-dinn",
        igdbId: 9643,
        expectedName: "Return of the Obra Dinn",
      },
      {
        id: "the-talos-principle-ii",
        igdbId: 79864,
        expectedName: "The Talos Principle II",
      },
      {
        id: "valheim",
        igdbId: 104967,
        expectedName: "Valheim",
      },
      {
        id: "risk-of-rain-2",
        igdbId: 28512,
        expectedName: "Risk of Rain 2",
      },
      {
        id: "monster-hunter-world",
        igdbId: 36926,
        expectedName: "Monster Hunter: World",
      },
      {
        id: "doom-eternal",
        igdbId: 103298,
        expectedName: "Doom Eternal",
      },
      {
        id: "resident-evil-4",
        igdbId: 132181,
        expectedName: "Resident Evil 4",
      },
      {
        id: "phasmophobia",
        igdbId: 132516,
        expectedName: "Phasmophobia",
      },
      {
        id: "euro-truck-simulator-2",
        igdbId: 3070,
        expectedName: "Euro Truck Simulator 2",
      },
      {
        id: "forza-horizon-5",
        igdbId: 141503,
        expectedName: "Forza Horizon 5",
      },
      {
        id: "animal-well",
        igdbId: 191435,
        expectedName: "Animal Well",
      },
      {
        id: "undertale",
        igdbId: 12517,
        expectedName: "Undertale",
      },
      {
        id: "spiritfarer",
        igdbId: 119304,
        expectedName: "Spiritfarer",
      },
      // Batch 3
      {
        id: "red-dead-redemption-2",
        igdbId: 25076,
        expectedName: "Red Dead Redemption 2",
      },
      {
        id: "grand-theft-auto-v",
        igdbId: 1020,
        expectedName: "Grand Theft Auto V",
      },
      {
        id: "mass-effect-legendary-edition",
        igdbId: 140839,
        expectedName: "Mass Effect Legendary Edition",
      },
      {
        id: "divinity-original-sin-ii",
        igdbId: 11800,
        expectedName: "Divinity: Original Sin II",
      },
      {
        id: "persona-5-royal",
        igdbId: 114283,
        expectedName: "Persona 5 Royal",
      },
      {
        id: "nier-automata",
        igdbId: 11208,
        expectedName: "NieR: Automata",
      },
      {
        id: "death-stranding",
        igdbId: 19564,
        expectedName: "Death Stranding",
      },
      {
        id: "control",
        igdbId: 103329,
        expectedName: "Control",
      },
      {
        id: "dishonored-2",
        igdbId: 11118,
        expectedName: "Dishonored 2",
      },
      {
        id: "sekiro-shadows-die-twice",
        igdbId: 76882,
        expectedName: "Sekiro: Shadows Die Twice",
      },
      {
        id: "dark-souls-iii",
        igdbId: 11133,
        expectedName: "Dark Souls III",
      },
      {
        id: "lies-of-p",
        igdbId: 148241,
        expectedName: "Lies of P",
      },
      {
        id: "remnant-ii",
        igdbId: 228535,
        expectedName: "Remnant II",
      },
      {
        id: "helldivers-2",
        igdbId: 250616,
        expectedName: "Helldivers 2",
      },
      {
        id: "warframe",
        igdbId: 2903,
        expectedName: "Warframe",
      },
      // Batch 4
      {
        id: "the-sims-4",
        igdbId: 3212,
        expectedName: "The Sims 4",
      },
      {
        id: "planet-zoo",
        igdbId: 117717,
        expectedName: "Planet Zoo",
      },
      {
        id: "two-point-hospital",
        igdbId: 82117,
        expectedName: "Two Point Hospital",
      },
      {
        id: "frostpunk",
        igdbId: 23248,
        expectedName: "Frostpunk",
      },
      {
        id: "against-the-storm",
        igdbId: 147519,
        expectedName: "Against the Storm",
      },
      {
        id: "timberborn",
        igdbId: 126381,
        expectedName: "Timberborn",
      },
      {
        id: "prison-architect",
        igdbId: 1338,
        expectedName: "Prison Architect",
      },
      {
        id: "dyson-sphere-program",
        igdbId: 139078,
        expectedName: "Dyson Sphere Program",
      },
      {
        id: "kerbal-space-program",
        igdbId: 3102,
        expectedName: "Kerbal Space Program",
      },
      {
        id: "anno-1800",
        igdbId: 55036,
        expectedName: "Anno 1800",
      },
      {
        id: "powerwash-simulator",
        igdbId: 138590,
        expectedName: "PowerWash Simulator",
      },
      {
        id: "potion-craft",
        igdbId: 142941,
        expectedName: "Potion Craft",
      },
      {
        id: "papers-please",
        igdbId: 2935,
        expectedName: "Papers, Please",
      },
      {
        id: "mini-motorways",
        igdbId: 122559,
        expectedName: "Mini Motorways",
      },
      {
        id: "dorfromantik",
        igdbId: 134799,
        expectedName: "Dorfromantik",
      },
      // Batch 5
      {
        id: "ori-and-the-will-of-the-wisps",
        igdbId: 37001,
        expectedName: "Ori and the Will of the Wisps",
      },
      {
        id: "a-short-hike",
        igdbId: 116753,
        expectedName: "A Short Hike",
      },
      {
        id: "firewatch",
        igdbId: 9730,
        expectedName: "Firewatch",
      },
      {
        id: "what-remains-of-edith-finch",
        igdbId: 11233,
        expectedName: "What Remains of Edith Finch",
      },
      {
        id: "the-stanley-parable-ultra-deluxe",
        igdbId: 113119,
        expectedName: "The Stanley Parable: Ultra Deluxe",
      },
      {
        id: "inscryption",
        igdbId: 139090,
        expectedName: "Inscryption",
      },
      {
        id: "the-witness",
        igdbId: 5601,
        expectedName: "The Witness",
      },
      {
        id: "baba-is-you",
        igdbId: 76638,
        expectedName: "Baba Is You",
      },
      {
        id: "cocoon",
        igdbId: 204627,
        expectedName: "Cocoon",
      },
      {
        id: "chants-of-sennaar",
        igdbId: 198499,
        expectedName: "Chants of Sennaar",
      },
      {
        id: "little-nightmares-ii",
        igdbId: 121760,
        expectedName: "Little Nightmares II",
      },
      {
        id: "soma",
        igdbId: 9727,
        expectedName: "Soma",
      },
      {
        id: "alien-isolation",
        igdbId: 4754,
        expectedName: "Alien: Isolation",
      },
      {
        id: "dead-space",
        igdbId: 159119,
        expectedName: "Dead Space",
      },
      {
        id: "amnesia-the-bunker",
        igdbId: 228258,
        expectedName: "Amnesia: The Bunker",
      },
      // Batch 6
      {
        id: "overcooked-2",
        igdbId: 103341,
        expectedName: "Overcooked! 2",
      },
      {
        id: "human-fall-flat",
        igdbId: 16992,
        expectedName: "Human: Fall Flat",
      },
      {
        id: "sea-of-thieves",
        igdbId: 11137,
        expectedName: "Sea of Thieves",
      },
      {
        id: "raft",
        igdbId: 27082,
        expectedName: "Raft",
      },
      {
        id: "grounded",
        igdbId: 125624,
        expectedName: "Grounded",
      },
      {
        id: "project-zomboid",
        igdbId: 3189,
        expectedName: "Project Zomboid",
      },
      {
        id: "the-long-dark",
        igdbId: 8347,
        expectedName: "The Long Dark",
      },
      {
        id: "7-days-to-die",
        igdbId: 5574,
        expectedName: "7 Days to Die",
      },
      {
        id: "enshrouded",
        igdbId: 248643,
        expectedName: "Enshrouded",
      },
      {
        id: "palworld",
        igdbId: 151665,
        expectedName: "Palworld",
      },
  ] satisfies readonly GameSeed[];