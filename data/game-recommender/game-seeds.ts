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

      {
        id: "counter-strike-2",
        igdbId: 242408,
        expectedName: "Counter-Strike 2",
      },
      {
        id: "dota-2",
        igdbId: 2963,
        expectedName: "Dota 2",
      },
      {
        id: "pubg-battlegrounds",
        igdbId: 27789,
        expectedName: "PUBG: Battlegrounds",
      },
      {
        id: "apex-legends",
        igdbId: 114795,
        expectedName: "Apex Legends",
      },
      {
        id: "rust",
        igdbId: 3277,
        expectedName: "Rust",
      },
      {
        id: "dead-by-daylight",
        igdbId: 18866,
        expectedName: "Dead by Daylight",
      },
      {
        id: "rainbow-six-siege",
        igdbId: 7360,
        expectedName: "Rainbow Six Siege",
      },
      {
        id: "marvel-rivals",
        igdbId: 294041,
        expectedName: "Marvel Rivals",
      },
      {
        id: "delta-force",
        igdbId: 262186,
        expectedName: "Delta Force",
      },
      {
        id: "team-fortress-2",
        igdbId: 891,
        expectedName: "Team Fortress 2",
      },
      {
        id: "left-4-dead-2",
        igdbId: 124,
        expectedName: "Left 4 Dead 2",
      },
      {
        id: "destiny-2",
        igdbId: 25657,
        expectedName: "Destiny 2",
      },
      {
        id: "path-of-exile",
        igdbId: 1911,
        expectedName: "Path of Exile",
      },
      {
        id: "path-of-exile-2",
        igdbId: 125642,
        expectedName: "Path of Exile 2",
      },
      {
        id: "hearts-of-iron-iv",
        igdbId: 15894,
        expectedName: "Hearts of Iron IV",
      },
      {
        id: "the-elder-scrolls-v-skyrim-special-edition",
        igdbId: 19457,
        expectedName: "The Elder Scrolls V: Skyrim - Special Edition",
      },
      {
        id: "fallout-4",
        igdbId: 9630,
        expectedName: "Fallout 4",
      },
      {
        id: "fallout-76",
        igdbId: 103020,
        expectedName: "Fallout 76",
      },
      {
        id: "mount-and-blade-ii-bannerlord",
        igdbId: 9608,
        expectedName: "Mount & Blade II: Bannerlord",
      },
      {
        id: "total-war-warhammer-iii",
        igdbId: 143114,
        expectedName: "Total War: Warhammer III",
      },
      {
        id: "ark-survival-evolved",
        igdbId: 10239,
        expectedName: "Ark: Survival Evolved",
      },
      {
        id: "ark-survival-ascended",
        igdbId: 250509,
        expectedName: "Ark: Survival Ascended",
      },
      {
        id: "black-myth-wukong",
        igdbId: 136879,
        expectedName: "Black Myth: Wukong",
      },
      {
        id: "ready-or-not",
        igdbId: 28489,
        expectedName: "Ready or Not",
      },
      {
        id: "repo",
        igdbId: 332780,
        expectedName: "R.E.P.O.",
      },
      {
        id: "peak",
        igdbId: 349524,
        expectedName: "Peak",
      },
      {
        id: "lethal-company",
        igdbId: 212089,
        expectedName: "Lethal Company",
      },
      {
        id: "sons-of-the-forest",
        igdbId: 127346,
        expectedName: "Sons of the Forest",
      },
      {
        id: "once-human",
        igdbId: 204538,
        expectedName: "Once Human",
      },
      {
        id: "geometry-dash",
        igdbId: 11642,
        expectedName: "Geometry Dash",
      },
      {
        id: "street-fighter-6",
        igdbId: 191692,
        expectedName: "Street Fighter 6",
      },
      {
        id: "farming-simulator-25",
        igdbId: 306822,
        expectedName: "Farming Simulator 25",
      },
      {
        id: "escape-from-tarkov",
        igdbId: 15536,
        expectedName: "Escape from Tarkov",
      },
      {
        id: "battlefield-6",
        igdbId: 317407,
        expectedName: "Battlefield 6",
      },
      {
        id: "slay-the-spire-2",
        igdbId: 296831,
        expectedName: "Slay the Spire II",
      },
      {
        id: "payday-2",
        igdbId: 2058,
        expectedName: "Payday 2",
      },
      {
        id: "war-thunder",
        igdbId: 2165,
        expectedName: "War Thunder",
      },
      {
        id: "naraka-bladepoint",
        igdbId: 127352,
        expectedName: "Naraka: Bladepoint",
      },
      {
        id: "overwatch-2",
        igdbId: 125174,
        expectedName: "Overwatch",
      },
      {
        id: "diablo-iv",
        igdbId: 125165,
        expectedName: "Diablo IV",
      },
      {
        id: "final-fantasy-xiv-online",
        igdbId: 386,
        expectedName: "Final Fantasy XIV Online",
      },
      {
        id: "v-rising",
        igdbId: 148228,
        expectedName: "V Rising",
      },
      {
        id: "forza-horizon-6",
        igdbId: 348330,
        expectedName: "Forza Horizon 6",
      },
      {
        id: "monster-hunter-wilds",
        igdbId: 279661,
        expectedName: "Monster Hunter Wilds",
      },
      {
        id: "clair-obscur-expedition-33",
        igdbId: 305152,
        expectedName: "Clair Obscur: Expedition 33",
      },
      {
        id: "kingdom-come-deliverance-ii",
        igdbId: 298526,
        expectedName: "Kingdom Come: Deliverance II",
      },
      {
        id: "doom-the-dark-ages",
        igdbId: 302704,
        expectedName: "Doom: The Dark Ages",
      },
      {
        id: "assassin-s-creed-shadows",
        igdbId: 300976,
        expectedName: "Assassin's Creed Shadows",
      },
      {
        id: "split-fiction",
        igdbId: 325594,
        expectedName: "Split Fiction",
      },
      {
        id: "hades-ii",
        igdbId: 228525,
        expectedName: "Hades II",
      },
      {
        id: "hollow-knight-silksong",
        igdbId: 115289,
        expectedName: "Hollow Knight: Silksong",
      },
      {
        id: "schedule-i",
        igdbId: 328373,
        expectedName: "Schedule I",
      },
      {
        id: "arc-raiders",
        igdbId: 185258,
        expectedName: "ARC Raiders",
      },
      {
        id: "the-elder-scrolls-iv-oblivion-remastered",
        igdbId: 267306,
        expectedName: "The Elder Scrolls IV: Oblivion Remastered",
      },
      {
        id: "final-fantasy-vii-rebirth",
        igdbId: 133236,
        expectedName: "Final Fantasy VII Rebirth",
      },
      {
        id: "marvel-s-spider-man-2",
        igdbId: 127044,
        expectedName: "Marvel's Spider-Man 2",
      },
      {
        id: "ghost-of-tsushima-director-s-cut",
        igdbId: 153700,
        expectedName: "Ghost of Tsushima: Director's Cut",
      },
      {
        id: "god-of-war-ragnarok",
        igdbId: 112875,
        expectedName: "God of War Ragnarök",
      },
      {
        id: "horizon-forbidden-west",
        igdbId: 112874,
        expectedName: "Horizon Forbidden West",
      },
      {
        id: "the-last-of-us-part-ii-remastered",
        igdbId: 277143,
        expectedName: "The Last of Us Part II Remastered",
      },
      {
        id: "silent-hill-2",
        igdbId: 222341,
        expectedName: "Silent Hill 2",
      },
      {
        id: "resident-evil-village",
        igdbId: 55163,
        expectedName: "Resident Evil Village",
      },
      {
        id: "alan-wake-2",
        igdbId: 185246,
        expectedName: "Alan Wake II",
      },
      {
        id: "warhammer-40-000-space-marine-2",
        igdbId: 185252,
        expectedName: "Warhammer 40,000: Space Marine II",
      },
      {
        id: "metaphor-refantazio",
        igdbId: 26602,
        expectedName: "Metaphor: ReFantazio",
      },
      {
        id: "persona-3-reload",
        igdbId: 252647,
        expectedName: "Persona 3 Reload",
      },
      {
        id: "dragon-s-dogma-2",
        igdbId: 115060,
        expectedName: "Dragon's Dogma II",
      },
      {
        id: "assassin-s-creed-odyssey",
        igdbId: 103054,
        expectedName: "Assassin's Creed Odyssey",
      },
      {
        id: "kingdom-come-deliverance",
        igdbId: 4843,
        expectedName: "Kingdom Come: Deliverance",
      },
      {
        id: "assassin-s-creed-black-flag-resynced",
        igdbId: 337738,
        expectedName: "Assassin's Creed Black Flag Resynced",
      },
      {
        id: "marvel-tokon-fighting-souls",
        igdbId: 347132,
        expectedName: "Marvel Tokon: Fighting Souls",
      },
      {
        id: "fortnite",
        igdbId: 1905,
        expectedName: "Fortnite",
      },
      {
        id: "league-of-legends",
        igdbId: 115,
        expectedName: "League of Legends",
      },
      {
        id: "valorant",
        igdbId: 126459,
        expectedName: "Valorant",
      },
      {
        id: "rocket-league",
        igdbId: 11198,
        expectedName: "Rocket League",
      },
      {
        id: "roblox",
        igdbId: 17269,
        expectedName: "Roblox",
      },
      {
        id: "world-of-warcraft",
        igdbId: 123,
        expectedName: "World of Warcraft",
      },
      {
        id: "genshin-impact",
        igdbId: 119277,
        expectedName: "Genshin Impact",
      },
      {
        id: "wuthering-waves",
        igdbId: 202956,
        expectedName: "Wuthering Waves",
      },
      {
        id: "zenless-zone-zero",
        igdbId: 200551,
        expectedName: "Zenless Zone Zero",
      },
      {
        id: "the-legend-of-zelda-breath-of-the-wild",
        igdbId: 7346,
        expectedName: "The Legend of Zelda: Breath of the Wild",
      },
      {
        id: "the-legend-of-zelda-tears-of-the-kingdom",
        igdbId: 119388,
        expectedName: "The Legend of Zelda: Tears of the Kingdom",
      },
      {
        id: "animal-crossing-new-horizons",
        igdbId: 109462,
        expectedName: "Animal Crossing: New Horizons",
      },
      {
        id: "mario-kart-8-deluxe",
        igdbId: 26764,
        expectedName: "Mario Kart 8 Deluxe",
      },
      {
        id: "super-mario-odyssey",
        igdbId: 26758,
        expectedName: "Super Mario Odyssey",
      },
      {
        id: "super-smash-bros-ultimate",
        igdbId: 90101,
        expectedName: "Super Smash Bros. Ultimate",
      },
      {
        id: "pokemon-legends-arceus",
        igdbId: 144054,
        expectedName: "Pokémon Legends: Arceus",
      },
      {
        id: "bloodborne",
        igdbId: 7334,
        expectedName: "Bloodborne",
      },
      {
        id: "big-walk",
        igdbId: 279624,
        expectedName: "Big Walk",
      },
      {
        id: "grounded-2",
        igdbId: 348187,
        expectedName: "Grounded 2",
      },
      {
        id: "restory-chill-electronics-repairs",
        igdbId: 380960,
        expectedName: "ReStory: Chill Electronics Repairs",
      },
      {
        id: "corsair-cove",
        igdbId: 398638,
        expectedName: "Corsair Cove",
      },
      {
        id: "grain-rot",
        igdbId: 400575,
        expectedName: "Grain Rot",
      },
      {
        id: "hell-let-loose-vietnam",
        igdbId: 362063,
        expectedName: "Hell Let Loose: Vietnam",
      },
      {
        id: "ghost-recon-wildlands",
        igdbId: 11171,
        expectedName: "Tom Clancy's Ghost Recon: Wildlands",
      },
      {
        id: "fields-of-mistria",
        igdbId: 226035,
        expectedName: "Fields of Mistria",
      },
      {
        id: "mistfall-hunter",
        igdbId: 320141,
        expectedName: "Mistfall Hunter",
      },
      {
        id: "sephiria",
        igdbId: 278379,
        expectedName: "Sephiria",
      },
  
  // Group B: 46 existing guide-covered games
      {
        id: "grim-dawn-fangs-of-asterkarn",
        igdbId: 298931,
        expectedName: "Grim Dawn: Fangs of Asterkarn",
      },
      {
        id: "dirty-business",
        igdbId: 398532,
        expectedName: "Dirty Business",
      },
      {
        id: "tears-of-metal",
        igdbId: 305011,
        expectedName: "Tears of Metal",
      },
      {
        id: "dragonsword-awakening",
        igdbId: 398217,
        expectedName: "DragonSword: Awakening",
      },
      {
        id: "zerospace",
        igdbId: 262659,
        expectedName: "ZeroSpace",
      },
      {
        id: "happys-humble-burger-cult",
        igdbId: 407065,
        expectedName: "Happy's Humble Burger Cult",
      },
      {
        id: "ore-factory-squad",
        igdbId: 395307,
        expectedName: "Ore Factory Squad",
      },
      {
        id: "the-incident-at-galley-house",
        igdbId: 350434,
        expectedName: "The Incident at Galley House",
      },
      {
        id: "ascend-to-zero",
        igdbId: 316425,
        expectedName: "Ascend to Zero",
      },
      {
        id: "backyard-baseball",
        igdbId: 393033,
        expectedName: "Backyard Baseball",
      },
      {
        id: "forest-escape-last-train",
        igdbId: 389724,
        expectedName: "Forest Escape: Last Train",
      },
      {
        id: "granblue-relink-endless-ragnarok",
        igdbId: 388441,
        expectedName: "Granblue Fantasy: Relink - Endless Ragnarok",
      },
      {
        id: "moonlight-peaks",
        igdbId: 237123,
        expectedName: "Moonlight Peaks",
      },
      {
        id: "esports-manager-2026",
        igdbId: 285684,
        expectedName: "Esports Manager 2026",
      },
      {
        id: "master-healer-kale",
        igdbId: 406380,
        expectedName: "Master Healer Kale With Useless Party",
      },
      {
        id: "supermarket-chaos",
        igdbId: 407502,
        expectedName: "Supermarket Chaos",
      },
      {
        id: "frostpunk-2-breach-of-trust",
        igdbId: 397575,
        expectedName: "Frostpunk 2: Breach of Trust",
      },
      {
        id: "deltarune",
        igdbId: 171233,
        expectedName: "Deltarune",
      },
      {
        id: "the-last-caretaker",
        igdbId: 333443,
        expectedName: "The Last Caretaker",
      },
      {
        id: "darktide",
        igdbId: 402515,
        expectedName: "Warhammer 40,000: Darktide - Skitarii",
      },
      {
        id: "moldwasher",
        igdbId: 342738,
        expectedName: "Moldwasher",
      },
      {
        id: "thank-you-for-your-application",
        igdbId: 312791,
        expectedName: "Thank You For Your Application",
      },
      {
        id: "33-immortals",
        igdbId: 252828,
        expectedName: "33 Immortals",
      },
      {
        id: "tales-of-seikyu",
        igdbId: 245733,
        expectedName: "Tales of Seikyu",
      },
      {
        id: "spacecraft",
        igdbId: 324574,
        expectedName: "SpaceCraft",
      },
      {
        id: "orb-of-creation",
        igdbId: 182972,
        expectedName: "Orb of Creation",
      },
      {
        id: "sand-raiders",
        igdbId: 252846,
        expectedName: "Sand: Raiders Of Sophie",
      },
      {
        id: "dave-the-diver-in-the-jungle",
        igdbId: 325582,
        expectedName: "Dave the Diver: In the Jungle",
      },
      {
        id: "backrooms-lost-runners",
        igdbId: 364009,
        expectedName: "Backrooms Lost Runners",
      },
      {
        id: "echoes-of-aincrad",
        igdbId: 393932,
        expectedName: "Echoes of Aincrad",
      },
      {
        id: "meccha-chameleon",
        igdbId: 405028,
        expectedName: "Meccha Chameleon",
      },
      {
        id: "lost-castle-2",
        igdbId: 263225,
        expectedName: "Lost Castle 2",
      },
      {
        id: "tabletop-tavern",
        igdbId: 373282,
        expectedName: "Tabletop Tavern",
      },
      {
        id: "witchspire",
        igdbId: 362094,
        expectedName: "Witchspire",
      },
      {
        id: "arms-of-god",
        igdbId: 324148,
        expectedName: "Arms of God",
      },
      {
        id: "blasphemous-2-the-third-sin",
        igdbId: 404910,
        expectedName: "Blasphemous II: The Third Sin",
      },
      {
        id: "slots-and-diapers",
        igdbId: 392541,
        expectedName: "Slots & Diapers",
      },
      {
        id: "serpents-gaze",
        igdbId: 380138,
        expectedName: "Serpent's Gaze",
      },
      {
        id: "fortune-mill",
        igdbId: 403497,
        expectedName: "Fortune Mill",
      },
      {
        id: "lumentale-memories-of-trey",
        igdbId: 231484,
        expectedName: "LumenTale: Memories of Trey",
      },
      {
        id: "crashout-crew",
        igdbId: 372144,
        expectedName: "Crashout Crew",
      },
      {
        id: "tower-of-babel",
        igdbId: 329785,
        expectedName: "Tower of Babel: Survivors of Chaos",
      },
      {
        id: "town-to-city",
        igdbId: 329736,
        expectedName: "Town to City",
      },
      {
        id: "teamfight-manager-2",
        igdbId: 369638,
        expectedName: "Teamfight Manager 2",
      },
      {
        id: "dq7-reimagined",
        igdbId: 366884,
        expectedName: "Dragon Quest VII Reimagined",
      },
      {
        id: "the-house-always-wins",
        igdbId: 378526,
        expectedName: "The House Always Wins",
      },
  ] satisfies readonly GameSeed[];