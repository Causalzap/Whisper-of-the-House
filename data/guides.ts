// data/guides.ts
//
// Single source of truth for guide hubs, homepage coverage,
// /all-game-guides/ collections, footer featured links, and latest guide pages.
//
// Maintenance rule:
// - Add a new game hub as one GuideCluster.
// - Add spoke pages under cluster.pages.
// - Use cluster.home.featuredHub to show a hub on the homepage.
// - Use page.home.latest to show a page in Latest Stories.

export type HomeAccent =
  | "purple"
  | "blue"
  | "emerald"
  | "amber"
  | "rose"
  | "cyan";

export type HomeImageFit = "cover" | "contain";

export type HomeImageFields = {
  /**
   * Use a public path such as:
   * /images/home/the-last-caretaker-hub.webp
   *
   * Do not include /public in the URL.
   */
  image?: string;

  /**
   * cover = best for gameplay screenshots / scene images.
   * contain = best for Steam header images, logo capsules, or images with important text.
   */
  imageFit?: HomeImageFit;

  /**
   * Works with both cover and contain.
   * Examples: "center", "top", "left center", "right center", "50% 35%".
   */
  imagePosition?: string;

  /**
   * Useful when imageFit is "contain", especially for Steam logo/header assets.
   */
  imagePadding?: boolean;
};

export type GuideClusterKind = "game" | "event" | "collection";

export type GuideClusterStatus = "active" | "archive" | "upcoming";

export type GuidePageType =
  | "Guide"
  | "Guide Hub"
  | "Class Guide Hub"
  | "Event Hub"
  | "Spotlight Coverage"
  | "Walkthrough"
  | "Beginner Guide"
  | "Achievements"
  | "Endings"
  | "Builds"
  | "Bosses"
  | "Collectibles"
  | "Systems"
  | "Puzzle Help"
  | "Event Guide";

export type ArchiveCategory =
  | "Cozy, crafting, survival & systems"
  | "RPG, action, builds & combat"
  | "Story, endings, horror & route locks"
  | "Strategy, simulation, puzzle & discovery"
  | "Older archive";

export type GuidePageHomeFlags = {
  latest?: boolean;
  latestFeatured?: boolean;
  latestOrder?: number;

  spotlightFeature?: boolean;
  spotlightRail?: boolean;
  spotlightOrder?: number;
  spotlightMeta?: string;
};

export type GuidePageArchiveFlags = {
  showInCollections?: boolean;
  order?: number;
};

export type GuidePage = HomeImageFields & {
  title: string;
  href: string;
  type: GuidePageType;
  description: string;
  date?: string;

  home?: GuidePageHomeFlags;
  archive?: GuidePageArchiveFlags;
};

export type GuideClusterHomeFlags = {
  featuredHub?: boolean;
  featuredHubSpotlight?: boolean;
  featuredHubOrder?: number;
  footerFeatured?: boolean;
};

export type GuideCluster = HomeImageFields & {
  title: string;
  game: string;
  href: string;
  slug: string;
  kind: GuideClusterKind;

  status: GuideClusterStatus;
  accent: HomeAccent;
  archiveCategory: ArchiveCategory;

  label: string;
  eyebrow?: string;
  hubStatus?: string;
  description: string;
  coverage: string[];

  home?: GuideClusterHomeFlags;
  pages: GuidePage[];
};

export const guideClusters: GuideCluster[] = [
  {
    title: "Halloween: The Game",
    game: "Halloween: The Game",
    href: "/halloween-the-game",
    slug: "halloween-the-game",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "Story, endings, horror & route locks",
  
    label: "Asymmetrical Horror & Michael Myers",
    eyebrow: "Guide Hub",
    hubStatus:
      "Full story + multiplayer + 3 endings + progression + Chapter 2 & 4 challenges",
  
    description:
      "Use the Halloween: The Game guide hub to choose what to do next in the story, survive Civilian multiplayer, complete Main Street and The Babysitters challenges, detain Michael Myers, understand progression and perks, and unlock all three confirmed endings.",
  
    coverage: [
      "Complete single-player route through the Prologue and five chapters, from Smith's Grove and Road to Haddonfield through Main Street, Returning Home, The Babysitters, Into the Shadows, and the final Chapter 5 escape",
      "Main Street Chapter 2 challenge route through Michael's mask, Shape Jump lighting restrictions, Eric's stockroom shelf kill, Tanya's cash-register execution, Slab's peeing window, Rachel's environmental kill, all three friends, body cleanup, Judith Myers' gravestone, and the car",
      "The Babysitters Chapter 4 sequence through Wallace House, Annie's car kill, Bob and Lynda stalking, Bloodthirsty, Bob's kitchen wall interaction, the Sheet disguise, Lynda's telephone kill, the staged upstairs scene, Laurie, and the film-plot challenge",
      "Civilian multiplayer decisions through first objectives, police calls, residents, inventory limits, car repair, Sedan Keys, Storm Cellar access, route switching, police pressure, rescue decisions, and knowing when an open exit is worth taking",
      "Michael Myers detainment through police setup, spectator mode, the CB radio, Loomis, Police Reinforcements, authority pressure, the arrest meter, knockdown timing, the final Arrest interaction, and MICHAEL DETAINED!",
      "Progression through Profile, Killer, Civilian, and Weapon XP, passive and progressive challenges, Perk Points, perk rolls, temporary upgrades, scrapping, Civilian stats, starting items, and Profile Prestige",
      "All three confirmed Chapter 5 endings through the railroad, cornfield, and sewer escape routes, including replaying Into the Shadows without restarting the full campaign",
      "First-pass guidance for achievements and trophies, collectibles, multiplayer map learning, and Civilian or perk choices while those broader completion and optimization goals remain inside the hub",
    ],
  
    image:
      "/images/halloween-the-game/halloween-the-game-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 44,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Halloween: The Game Guide: Walkthrough, Multiplayer & More",
        href: "/halloween-the-game",
        type: "Guide Hub",
        description:
          "Start here to choose the right guide for story mode, Civilian multiplayer, Michael detainment, progression, endings, chapter challenges, and later completion goals.",
        image:
          "/images/halloween-the-game/halloween-the-game-guide-haddonfield-night.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "Prologue + 5 chapters, Main Street, The Babysitters, Civilian multiplayer, Michael detainment, progression, perks, Prestige, railroad, cornfield, and sewer endings",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Halloween: The Game Walkthrough – All 6 Story Chapters",
        href: "/halloween-the-game/walkthrough",
        type: "Walkthrough",
        description:
          "Follow Michael from Smith's Grove through all six story stages, with the required route, major chapter blockers, when to skip optional challenges, and how to reach the final escape.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-story-six-chapters.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 293,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Prologue, Smith's Grove, Road to Haddonfield, Main Street, Returning Home, The Babysitters, Into the Shadows, HUD objectives, Shape Jump, detainment, and final exit",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Halloween: The Game Multiplayer Guide for Civilians",
        href: "/halloween-the-game/multiplayer-guide",
        type: "Beginner Guide",
        description:
          "Learn what to do first as a Civilian, call police, manage items and residents, progress car or Storm Cellar escapes, switch routes, and know when to leave.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-multiplayer-first-objectives.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 294,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "First objectives, phones, police calls, residents, inventory, Repair Kits, Sedan Keys, car escape, Storm Cellar, route switching, police windows, and open-exit decisions",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Halloween: The Game Progression, Perks & Prestige Guide",
        href: "/halloween-the-game/progression-perks",
        type: "Systems",
        description:
          "Understand Profile, Killer, Civilian and Weapon XP, Perk Points, perk rolls and upgrades, Civilian stats, challenge types, starting items, and Prestige.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-progression-four-levels.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 295,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Profile, Killer, Civilian and Weapon levels, Perk Points, card rolls, rarity, Equip / Upgrade / Scrap, Civilian stats, starting items, challenges, Level 100 Profile Prestige, and timed Prestige Challenges",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "How to Arrest Michael Myers in Halloween: The Game",
        href: "/halloween-the-game/how-to-arrest-michael-myers",
        type: "Guide",
        description:
          "Set up Michael Myers' multiplayer detainment with police, spectator mode, the CB radio, Loomis, Reinforcements, arrest pressure, knockdown, and the final Arrest interaction.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-arrest-michael-success.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 296,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Police calls, spectator mode, CB radio, Loomis, Reinforcements Available, returned police officer, arrest meter, POLICE WAGON CALLED, knockdown, Arrest interaction, and MICHAEL DETAINED!",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Halloween: The Game Main Street Walkthrough & Challenges",
        href: "/halloween-the-game/main-street-walkthrough",
        type: "Walkthrough",
        description:
          "Complete Main Street and all six Chapter 2 challenges, including Eric's shelf kill, Tanya's register, Slab's timing, Rachel and her friends, body cleanup, and Judith's grave.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-main-street-challenges.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 297,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Six Chapter 2 challenges, hardware store, Michael's mask, Shape Jump lighting, Eric shelf kill, Tanya cash register, Slab peeing, Rachel Head Impale, three friends, body cleanup, Judith gravestone, and car",
        },
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Halloween: The Game Babysitters Walkthrough & Challenges",
        href: "/halloween-the-game/the-babysitters-walkthrough",
        type: "Walkthrough",
        description:
          "Complete all six Babysitters challenges through Annie's car kill, Bob and Lynda stalking, Bob's wall kill, Bloodthirsty, the Sheet, telephone kill, house setup, and Laurie.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-the-babysitters-challenges.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 298,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Six Chapter 4 challenges, Wallace House, Annie car kill, Bob and Lynda stalking, Bloodthirsty, Bob kitchen wall, Sheet disguise, Lynda telephone kill, staged bedroom, Laurie, and film-plot route",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Halloween: The Game Endings: Full, Cornfield & Sewer",
        href: "/halloween-the-game/endings",
        type: "Endings",
        description:
          "Get all three confirmed endings through the railroad, cornfield, and sewer routes, then replay Into the Shadows for the alternatives without restarting the story.",
        date: "Updated recently",
        image:
          "/images/halloween-the-game/halloween-the-game-endings-three-routes.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 299,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Railroad Full Ending, one-minute train timer, Cornfield Ending, Sewer Ending, Escape Through the Sewer, final route commits, shared narration, and Chapter 5 replay order",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
    ],
  },
  {
    title: "BOMBANANA",
    game: "BOMBANANA",
    href: "/bombanana",
    slug: "bombanana",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
  
    label: "Three-Player Co-op Bomb Defusal",
    eyebrow: "Guide Hub",
    hubStatus:
      "30 Campaign levels + module solver + roles + 23 achievements",
  
    description:
      "Use the BOMBANANA guide hub to diagnose what is stopping a run, solve individual modules, improve Blind / Deaf / Mute communication, follow all 30 Campaign levels, manage Chaos, and finish all 23 achievements.",
  
    coverage: [
      "Full 30-level Campaign progression with timers, fixed module introductions, Random Easy / Medium / Hard slots, Chaos combinations, mistake allowances, practice checkpoints, and decisions about when to replay or push forward",
      "Live Module Solver for Cable / Wire, Direction, and Calculator, including current-v1 rules, physical Cable positions, all 36 Direction LED-Braille states, and Calculator raw-result to final-key flow",
      "Blind, Deaf, and Mute communication through role responsibilities, left/right perspective, physical-position language, repeat versus reset calls, ordered-state relay, and role-swap diagnosis",
      "Symbol, Piano, Soundboard, and Switch procedures through sounding-shape identification, staged inputs, Braille and LED note sequences, 3×3 grid communication, and complete four-light / four-number Switch states",
      "Chaos management across Slider, Pressure, and Alarm, including interruption priority, attention budgeting, preserving an unfinished defusal state, and late-Campaign stacked hazards",
      "All 23 Steam achievements with an interactive checklist and cleanup route for Campaign milestones, repeated levels, dice, repairs, slaps, baskets, Just in Time!, Custom Hard, and Endless",
    ],
  
    image:
      "/images/bombanana/bombanana-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 43,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "BOMBANANA Guide: Modules, Roles, Levels & Achievements",
        href: "/bombanana",
        type: "Guide Hub",
        description:
          "Start here to diagnose the team's current bottleneck, choose the right module help, decide when to replay a level, and move between Campaign, Endless, Custom, and achievement cleanup.",
        image:
          "/images/bombanana/bombanana-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "30 Campaign levels, Blind / Deaf / Mute roles, Module Solver, Cable, Direction, Calculator, Symbol, Piano, Soundboard, Switch, Chaos, Endless, Custom, and 23 achievements",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "BOMBANANA Module Solver: Cable, Direction & Calculator",
        href: "/bombanana/module-solver",
        type: "Puzzle Help",
        description:
          "Enter the current Cable, Direction, or Calculator state and get the next usable answer without rereading the full manual during a live bomb.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-manual-layout.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 285,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Cable and Wire solver, Direction LED + Braille lookup, Calculator arithmetic, odd/even parity, final keypad digit, and current-v1 rules",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",
        href: "/bombanana/levels",
        type: "Walkthrough",
        description:
          "Follow all 30 Campaign levels with timers, module combinations, Chaos systems, mistake allowances, first appearances, and useful replay checkpoints.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-campaign-level-11-select.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 286,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "All 30 levels, timers, Random Easy / Medium / Hard slots, mistake allowance, Direction at Level 4, Switch at 16, Maze at 18, Morse at 21, Monkey-Says at 23, and late-game Chaos",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "BOMBANANA Cable / Wire Guide: LED Rules & Cut Positions",
        href: "/bombanana/wire",
        type: "Puzzle Help",
        description:
          "Use cable count and the active LED to find the target color, translate that color into a physical position, and give Blind a cut instruction that can actually be used.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-cable-module-three-cables.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "BOMBANANA Calculator Guide: Odd/Even & Final Key",
        href: "/bombanana/calculator",
        type: "Puzzle Help",
        description:
          "Solve the arithmetic result, enter it first, read the new LED, use odd or even parity, and press the correct final Calculator key.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-calculator-red-led-keypad.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "BOMBANANA Roles Guide: Blind, Deaf & Mute Communication",
        href: "/bombanana/roles",
        type: "Guide",
        description:
          "Build a reliable Blind, Deaf, and Mute relay with physical-position language, perspective rules, repeat and reset signals, and better role assignments.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-role-selection-lobby.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "BOMBANANA Direction Guide: Braille & LED Answers",
        href: "/bombanana/direction",
        type: "Puzzle Help",
        description:
          "Read the active LED and Braille number together, use the correct answer across all 36 states, and avoid stale-state and left/right mistakes.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-direction-green-light-braille-two.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 287,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Braille 1–9, 36 LED-number states, five repeating patterns, Green + 2, one-press re-read flow, and left/right perspective",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "BOMBANANA Symbol Guide: Sound, Stages & Buttons",
        href: "/bombanana/symbol",
        type: "Puzzle Help",
        description:
          "Rotate the pointer until one symbol makes a sound, describe that shape consistently, use the current stage, and press the matching colored button.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-symbol-active-shape.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 288,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Sounding symbol, pointer rotation, four stages, shape naming, look-alike symbols, current-stage color input, and Level 8 practice",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "BOMBANANA Piano Guide: Braille, LED & Note Sequences",
        href: "/bombanana/piano",
        type: "Puzzle Help",
        description:
          "Combine the Braille octave and active light, find the correct four-note sequence, keep the notes in order, and diagnose Piano input mistakes.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-piano-yellow-light.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 289,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Braille octave, Red / Yellow / Green / Blue light, four-note sequences, Yellow + 1 example, relay mistakes, and Level 9 practice",
        },
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "BOMBANANA Soundboard Guide: Braille, Colors & Grid",
        href: "/bombanana/soundboard",
        type: "Puzzle Help",
        description:
          "Find the button that makes a sound, combine its Braille number and color, resolve the 3×3 pattern, and track the cells still waiting to be pressed.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-soundboard-active-button.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 290,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Sound search, Braille + color state, 3×3 grid positions, target versus answer cells, pressed-cell tracking, relay errors, and Level 11",
        },
  
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title:
          "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",
        href: "/bombanana/chaos",
        type: "Systems",
        description:
          "Manage Slider, Pressure, and Alarm while normal modules are still active, decide when danger deserves an interruption, and resume the previous solve cleanly.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-chaos-modules.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 291,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "27 of 30 Campaign levels, Slider at Level 4, Pressure at 6, Alarm at 10, stacked Chaos, interruption priority, attention budget, and Levels 12 / 26 / 29",
        },
  
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
  
      {
        title:
          "BOMBANANA Switch Guide: Lights, Numbers & Enter",
        href: "/bombanana/switch",
        type: "Puzzle Help",
        description:
          "Keep all four light colors and four numbers in one ordered state, resolve the four switch positions, reread uncertain values, and press Enter only after confirmation.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-switch-module.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestOrder: 292,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Four-light order, four-number state, Up / Down outputs, physical switch positions, full-state rereads, Enter confirmation, and Level 16 practice",
        },
  
        archive: {
          showInCollections: true,
          order: 12,
        },
      },
  
      {
        title:
          "BOMBANANA Achievements Guide: All 23 & Checklist",
        href: "/bombanana/achievements",
        type: "Achievements",
        description:
          "Track all 23 Steam achievements with a persistent checklist and cleanup route for Campaign, repeat counters, slaps, repairs, baskets, Custom, and Endless.",
        date: "Updated recently",
        image:
          "/images/bombanana/bombanana-slapping-between-rounds.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 13,
        },
      },
    ],
  },
  {
    title: "Neverness to Everness",
    game: "Neverness to Everness",
    href: "/neverness-to-everness",
    slug: "neverness-to-everness",
    kind: "game",
    status: "active",
    accent: "purple",
    archiveCategory: "RPG, action, builds & combat",
    label: "Urban Open-World RPG & Anomaly Exploration",
    eyebrow: "Spotlight Hub",
    hubStatus:
      "Version 1.3 + Chapter 6 + Duskmoor 100% + 6 Anomaly Commissions + Gauntlet 1–99",
  
    description:
      "Use the Neverness to Everness guide hub to decide what to do next in Version 1.3, unlock and clear Chapter 6: Fogden Game, finish Duskmoor at 100%, solve all six Anomaly Commissions, and push Gauntlet of Valor through Floor 99 into Infinity.",
  
    coverage: [
      "Version 1.3 progression from Fighting with a Dragon into Chapter 6: Fogden Game, then onward to Duskmoor exploration or Gauntlet of Valor depending on whether story, region completion, or combat is the current goal",
      "Chapter 6: Fogden Game through the abandoned-building TV route, disappearing right-corridor entrance, 10 Lumen Circles, Daffodil route, Shackled Past, Helm of Theseus, Linko and Nitsa, Eternal Present, future route, Madam T, Fog Coffin Colossus, and the final Bureau report",
      "Duskmoor 100% exploration through all 50 Oracle Stones, Wertheimer Tower, ReroRero Phone Booths, check-ins, the motorcycle 80 km/h speed check, Teardrop Lake, western jumps, mountain cleanup, volleyball, and missing-completion troubleshooting",
      "All six Duskmoor Anomaly Commissions — Fawn Alone, Lantern Parade, Twin Blooms, Finale: Da Capo, Sunken Door, and Storybook Skirmish — including trigger conditions, missing-spawn fixes, Mirror Wraith, rewards, achievements, and Annulith totals",
      "Gauntlet of Valor progression through Floors 1–99, short-timer breakpoints, late boss floors, Floor 99, Infinite Floor, Mystery Buttons, Warren Gold Coins, first-clear rewards, and the decision between Infinity and other farming routes",
    ],
  
    image:
      "/images/neverness-to-everness/neverness-to-everness-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 42,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Neverness to Everness 1.3 Guide: Story, Duskmoor & Gauntlet",
        href: "/neverness-to-everness",
        type: "Guide Hub",
        description:
          "Start here to decide whether your next NTE 1.3 goal is Chapter 6, Duskmoor completion, a stuck Anomaly Commission, or Gauntlet of Valor.",
        image:
          "/images/neverness-to-everness/nte-chapter-6-fogden-building.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "Version 1.3 progression, Chapter 7 before Chapter 6, Fogden Game, Duskmoor exploration, Anomaly Commissions, Gauntlet of Valor, Floor 99, and Infinity",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "NTE Chapter 6 Fogden Game Walkthrough & Puzzle Guide",
        href:
          "/neverness-to-everness/chapter-6-fogden-game-walkthrough",
        type: "Walkthrough",
        description:
          "Clear Chapter 6 from the abandoned-building TV puzzle through 10 Lumen Circles, Shackled Past, the Helm of Theseus, final battle, and Bureau report.",
        date: "Updated recently",
        image:
          "/images/neverness-to-everness/nte-chapter-6-fogden-building.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 281,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Fighting with a Dragon requirement, abandoned building, TV chain, right corridor, 10 Lumen Circles, Shackled Past, Helm of Theseus, Madam T, Fog Coffin Colossus, and Bureau report",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "NTE Duskmoor 100% Guide: All 50 Oracle Stones & Check-Ins",
        href:
          "/neverness-to-everness/duskmoor-100-percent-guide",
        type: "Collectibles",
        description:
          "Clear Duskmoor with all 50 Oracle Stones, check-ins, road and lake routes, the 80 km/h motorcycle check, mountain cleanup, and missing-progress fixes.",
        date: "Updated recently",
        image:
          "/images/neverness-to-everness/nte-duskmoor-tower-start.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 282,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "50 Oracle Stones, Wertheimer Tower, ReroRero Phone Booths, 80 km/h check-in, Teardrop Lake, western jumps, mountain Stone, volleyball, and stuck-below-100% fixes",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "NTE Duskmoor Anomaly Commissions Guide: All 6 & Rewards",
        href:
          "/neverness-to-everness/duskmoor-anomaly-commissions",
        type: "Guide",
        description:
          "Complete all six Duskmoor Anomaly Commissions with trigger and spawn fixes, Twin Blooms resets, Mirror Wraith strategy, achievements, and Annulith rewards.",
        date: "Updated recently",
        image:
          "/images/neverness-to-everness/nte-duskmoor-fawn-alone-night-route.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 283,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Fawn Alone, Lantern Parade, Twin Blooms, Finale: Da Capo, Sunken Door, Storybook Skirmish, Divergent Flowers, Mirror Wraith, rewards, and Annulith",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "NTE Gauntlet of Valor Guide: Floor 1–99, Infinity & Rewards",
        href:
          "/neverness-to-everness/gauntlet-of-valor-guide",
        type: "Guide",
        description:
          "Push Gauntlet of Valor through Floors 1–99, diagnose late-floor walls, clear Floor 99, unlock Infinity, and judge the Mystery Button and Gold Coin rewards.",
        date: "Updated recently",
        image:
          "/images/neverness-to-everness/nte-gauntlet-floor-99-boss-rush.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 284,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Floors 1–99, Floor 81 timer, Floors 90–98 bosses, Floor 99, Infinite Floor, Mystery Buttons, Warren Gold Coins, rewards, and farming value",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
    ],
  },
  {
    title: "Breathedge 2",
    game: "Breathedge 2",
    href: "/breathedge-2",
    slug: "breathedge-2",
    kind: "game",
    status: "active",
    accent: "cyan",
    archiveCategory: "Cozy, crafting, survival & systems",
    label: "Open-World Space Survival & Crafting",
    eyebrow: "Spotlight Hub",
    hubStatus:
      "Chapter 1 + Outskirts + Depot + survival systems + Early Access ending",
  
    description:
      "Use the Breathedge 2 guide hub to follow Chapter 1, clear the Station Outskirts and Depot, solve antenna and Attendant objectives, extend oxygen range, reach 100 Cold Protection, identify important resources, and understand the current Early Access ending.",
  
    coverage: [
      "Complete Chapter 1 progression from the crashed train and Station Outskirts through communications, the cold gate, Depot, jammer triangulation, military facility, shuttle route, cooling system, signal jammer, and current Early Access story cutoff",
      "Station Outskirts progression through the External Module, train recovery, food and water setup, interphone and communications route, ticket booth, Public Oxygen Station, Attendant side route, 100 Cold Protection gate, Antenna Debris, and Depot transition",
      "Depot progression through Raise Ambient Temperature to 100%, Service Warmer repairs, Light Bulbs, route planning between heat sources, Foreman calibration, Small Engine research, and the final heater",
      "Three Antennas progression through the damaged station antenna, sector frequency data, homemade beacon, Tuning Unit, battery, Electrical Tape, government probe, onboard clock, electronics repair, both Antenna Debris parts, and New Coordinates Detected",
      "Attendant reconstruction through the body below the station platform, head near the starting train benches, and the hard-to-see arm beside the blue machinery bridge and three orange-ball landmark",
      "Cold Protection progression through the 100-point requirement, Space Suit wardrobe, Cardboard and Foam insulation, a practical 106 Cold setup, secondary stat tradeoffs, Frostbite, Hypothermia, and retreat decisions",
      "Oxygen management through the Public Oxygen Station, Ice, Oxyworms, Purified Oxygen, Oxyworm Nests, longer exploration routes, turnaround decisions, and the difference between Oxygen and Gas",
      "Resource and crafting priorities through Electronics, Wires, Electrical Tape, Aluminum, Plastic, Light Bulbs, Rubber, Refined Metal, Titanium, Ice, insulation materials, object recognition, scavenging decisions, and the Backpack upgrade from 110 to 185 carry weight",
      "Current Early Access ending through signal jammer retrieval, Mary's 779014-EE5 coordinates, the betrayal, the Chapter 1 cutoff, post-ending scavenging, and what remains playable afterward",
    ],
  
    image:
      "/images/breathedge-2/breathedge-2-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 41,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Breathedge 2 Guide: Walkthrough, Survival & Chapter 1",
        href: "/breathedge-2",
        type: "Guide Hub",
        description:
          "Start here for the Chapter 1 route, Outskirts and Depot progression, hidden objectives, oxygen, Cold Protection, resources, crafting, and the current Early Access ending.",
        image:
          "/images/breathedge-2/breathedge-2-chapter-one-mary.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "Chapter 1, Station Outskirts, Depot, Attendant, Three Antennas, oxygen, Cold Protection, resources, crafting, signal jammer, and Early Access ending",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Breathedge 2 Walkthrough: Complete Chapter 1 Guide",
        href: "/breathedge-2/walkthrough",
        type: "Walkthrough",
        description:
          "Follow Chapter 1 from the crashed train through the Outskirts and Depot, then triangulate the jammer, clear the facility and reach the current story ending.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-outskirts-external-module-battery.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 272,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Crashed train, Outskirts communications, Cold Protection gate, Depot, antenna route, jammer triangulation, military facility, shuttle, cooling system, signal jammer, and Chapter 1 ending",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Breathedge 2 Outskirts Walkthrough: Train, Antennas & Depot",
        href: "/breathedge-2/outskirts-walkthrough",
        type: "Walkthrough",
        description:
          "Power the crashed train, stabilize food and water, restore communications, repair the oxygen station, clear the cold gate and antenna debris, then reach Depot.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-outskirts-overview.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 273,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "External Module, crashed train, food and water, communications, ticket booth, Public Oxygen Station, Attendant, 100 Cold Protection, Antenna Debris, and Depot transition",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Breathedge 2 Depot Walkthrough: Service Warmers & Foreman",
        href: "/breathedge-2/depot-walkthrough",
        type: "Walkthrough",
        description:
          "Raise Depot temperature to 100%, repair Service Warmers, find Light Bulbs, solve the Foreman test, research Small Engines, and finish the heating route.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-depot-area-discovered.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 274,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Depot, 17% to 100% ambient temperature, Service Warmers, Light Bulbs, repair materials, heat-source routing, Foreman calibration, Small Engines, and final heater",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Breathedge 2 Attendant Parts: Body, Head & Arm Locations",
        href: "/breathedge-2/attendant-parts",
        type: "Puzzle Help",
        description:
          "Find the Attendant body, head and hidden arm in the Station Outskirts, including the bridge, blue machinery and three-orange-ball landmark.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-attendant-arm-bridge-landmark.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 275,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Assemble the Attendant, body location, head location, hidden arm, small metal bridge, blue machinery, three orange balls, and Welcome to the Outskirts",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Breathedge 2 Three Antennas & Antenna Debris Locations",
        href: "/breathedge-2/antenna-locations",
        type: "Puzzle Help",
        description:
          "Repair the damaged antenna, homemade beacon and government probe, then find both 0/2 Antenna Debris parts and unlock New Coordinates.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-three-antennas-journal.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 276,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Three Antennas, sector frequency map, homemade beacon, Tuning Unit, battery, Electrical Tape, government probe, onboard clock, 0/2 Antenna Debris, and New Coordinates",
        },
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Breathedge 2 Cold Protection Guide: How to Reach 100+",
        href: "/breathedge-2/cold-protection",
        type: "Systems",
        description:
          "Reach 100 Cold Protection with Space Suit upgrades and insulation, understand protection tradeoffs, and survive colder routes without losing the run.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-cold-protection-106.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 277,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Raise Cold Protection to 100, Space Suit wardrobe, Cardboard, Foam, practical 106 Cold setup, secondary stat tradeoffs, Frostbite, Hypothermia, and retreat decisions",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Breathedge 2 Oxygen Guide: Station, Oxyworms & Refills",
        href: "/breathedge-2/oxygen-guide",
        type: "Systems",
        description:
          "Repair the Public Oxygen Station, unlock Purified Oxygen, use Oxyworm Nests, manage Ice, and extend the range of longer Chapter 1 trips.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-public-oxygen-station-repaired.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 278,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Public Oxygen Station, repair materials, Ice, Oxyworms, Purified Oxygen, 120 Oxygen refill, Oxyworm Nests, exploration range, turnaround planning, and Oxygen vs Gas",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Breathedge 2 Resources & Crafting Guide: What to Keep",
        href: "/breathedge-2/resources-crafting",
        type: "Systems",
        description:
          "Recognize important Chapter 1 materials, decide what to keep and spend, solve repair bottlenecks, and know when Titanium is worth using on the Backpack.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-backpack-185-capacity.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 279,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Electronics, Wires, Electrical Tape, Aluminum, Plastic, Light Bulbs, Rubber, Refined Metal, Titanium, Ice, insulation, Backpack, 110 to 185 capacity, and scavenging priorities",
        },
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "Breathedge 2 Ending Explained: Mary, Betrayal & Chapter 2",
        href: "/breathedge-2/ending",
        type: "Endings",
        description:
          "Understand Mary's 779014-EE5 coordinates, the betrayal, the current Chapter 1 cutoff, whether Chapter 2 is playable, and what remains afterward.",
        date: "Updated recently",
        image:
          "/images/breathedge-2/breathedge-2-early-access-ending.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 280,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Signal jammer, Mary, 779014-EE5, betrayal, Early Access story cutoff, Chapter 2 status, post-ending scavenging, and Chapter 1 completion",
        },
  
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
    ],
  },
  {
    title: "Big Ambitions",
    game: "Big Ambitions",
    href: "/big-ambitions",
    slug: "big-ambitions",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Business Management & Tycoon Simulation",
    eyebrow: "Spotlight Hub",
    hubStatus:
      "1.0 progression + businesses + HR + logistics + factories + 126 achievements",
  
    description:
      "Use the Big Ambitions 1.0 guide hub to choose what to build next, scale employees and HR, automate warehouses and logistics, set better prices, manufacture with factories, compete with Special Rivals, and complete all 126 achievements.",
  
    coverage: [
      "Full 1.0 progression from the first profitable business through the second-business objective, Headquarters, warehouse automation, Product Manufacturing, factories, multi-district expansion, and late-game company scaling",
      "Business selection by progression stage, current market demand, startup burden, staffing, customer capacity, property fit, competition, and supply requirements across Gym, Hairdresser, Fast Food, Supermarket, Clothing, Electronics, Jewelry, and other business types",
      "Employee and HR management from recruitment and candidate demands through schedules, training, HR Managers, Headhunters, absence coverage, resignations, retirements, automatic replacement, and large-workforce scaling",
      "Warehouse and logistics automation through Purchasing Agents, importer supply, pallet storage, Smart Delivery, delivery vehicles, Logistics Managers, store stock targets, route capacity, shortage diagnosis, and multi-warehouse scaling",
      "Factory manufacturing through building choice, usable floor area, production layouts, product selection, raw materials, Factory Workers, storage, production-line scaling, finished-goods bottlenecks, and 1.0 overproduction pressure",
      "Pricing decisions from manual local-market checks and Store Insight diagnosis through neighborhood pricing, Pricing Managers, Current Price, Suggested Price, Market Price, Apply Suggested Prices, and repricing after competitive changes",
      "Special Rival strategy through Rival profiles, first warnings versus Active Rivalry, profitable target selection, direct competition, income pressure, Rival-owned property, business takeover negotiations, and Arch-nemesis defeat requirements",
      "All 126 achievements with an interactive checklist and practical route covering long counters, specialist workforces, Executive Producer Factory production, Arch-nemesis, property and luxury goals, casino, age milestones, golf, tennis, and the three hidden achievements",
    ],
  
    image: "/images/big-ambitions/big-ambitions-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 40,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Big Ambitions Guide: Progression, Businesses & Systems",
        href: "/big-ambitions",
        type: "Guide Hub",
        description:
          "Start here to identify what your Big Ambitions 1.0 company needs next, then jump to the guide for progression, businesses, employees, logistics, factories, pricing, Rivals, or achievements.",
        image:
          "/images/big-ambitions/big-ambitions-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "Big Ambitions 1.0 progression, business selection, employees, Headquarters, warehouse logistics, Market Insider, pricing, factories, Special Rivals, and 126 achievements",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Big Ambitions Progression Guide: What to Do & Unlock Next",
        href: "/big-ambitions/progression-guide",
        type: "Guide",
        description:
          "Follow Big Ambitions 1.0 from the first business through the second-business objective, Headquarters, warehouses, Product Manufacturing, factories, and multi-district expansion.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-1-0-business-choice-menu.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 264,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "First business, $15,000 opening loan, second-business objective, Headquarters timing, warehouse unlock, Product Manufacturing, Factory handoff, and multi-district progression",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Big Ambitions Best Businesses: What to Open at Each Stage",
        href: "/big-ambitions/best-businesses",
        type: "Guide",
        description:
          "Compare Big Ambitions 1.0 businesses by stage, demand, staffing, startup cost, capacity, property fit, competition, and supply burden before opening the next location.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-market-insider-first-business-demand.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 265,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Gym, Hairdresser, Fast Food, Supermarket, Clothing, Electronics, demand, Traffic Index, customer capacity, equipment cost, property fit, and competition",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Big Ambitions Employees & HR Guide: Hiring and Automation",
        href: "/big-ambitions/employees-hr-guide",
        type: "Systems",
        description:
          "Manage recruitment, employee demands, schedules and training, then scale through HR Managers, Headhunters, absence coverage, and automatic employee replacement.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-headhunter-automatic-replacement.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 266,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Recruitment, candidate skill and wage, employee demands, scheduling, training, HR Managers, Headhunters, sick calls, resignations, retirements, and automatic replacement",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Big Ambitions Warehouse & Logistics Guide: Smart Delivery",
        href: "/big-ambitions/warehouse-logistics-guide",
        type: "Systems",
        description:
          "Build a reliable supply chain with Purchasing Agents, warehouses, Smart Delivery, delivery vehicles, Logistics Managers, stock targets, and delivery troubleshooting.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-logistics-manager-delivery-destinations.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 267,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Purchasing Agents, importers, warehouses, pallet storage, Smart Delivery, stock targets, delivery vehicles, Logistics Managers, store restocking, shortages, and second warehouses",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Big Ambitions Factory Guide: Manufacturing & Production",
        href: "/big-ambitions/factory-guide",
        type: "Systems",
        description:
          "Set up and scale Big Ambitions 1.0 manufacturing with the right Factory building, products, raw materials, workers, storage, production lines, and output balance.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-factory-production-floor.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 268,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Factory timing, usable floor area, post-rework layouts, manufactured products, raw materials, Factory Workers, storage, production lines, overproduction, and stopped-line troubleshooting",
        },
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Big Ambitions Pricing Guide: Best Prices & Pricing Manager",
        href: "/big-ambitions/pricing-guide",
        type: "Systems",
        description:
          "Set prices using local markets and Store Insight, then manage multiple locations with Current, Suggested and Market Price through the Pricing Manager.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-pricing-manager-suggested-prices.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 269,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Manual pricing, Store Insight, neighborhood markets, service and product prices, Pricing Manager, Current Price, Suggested Price, Market Price, Apply Suggested Prices, and Rival repricing",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Big Ambitions Rivals Guide: Special Rivals & Takeovers",
        href: "/big-ambitions/rivals-guide",
        type: "Guide",
        description:
          "Understand Special Rivals and Active Rivalry, choose profitable targets, create direct competition, negotiate takeovers, handle Rival property, and work toward defeating all four.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-active-rivalry-income-impact.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 270,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Special Rivals, first warnings, Active Rivalry, profitable targets, direct competition, Rival income, property ownership, business takeovers, former Rivals, and Arch-nemesis",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Big Ambitions Achievements Guide: All 126 & Checklist",
        href: "/big-ambitions/achievements",
        type: "Achievements",
        description:
          "Track all 126 Big Ambitions achievements with an interactive checklist and route for long counters, employees, factories, Rivals, property, sports, luxury goals, and hidden achievements.",
        date: "Updated recently",
        image:
          "/images/big-ambitions/big-ambitions-golf-tennis-activities-map.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 271,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "All 126 achievements, persistent checklist, long counters, specialist employees, Executive Producer, Arch-nemesis, Hoarder, Insomnia, property, casino, golf, tennis, Bullseye, Hostile Takeover, and Pound Sand",
        },
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
    ],
  },
  {
    title: "STAR WARS Zero Company",
    game: "STAR WARS Zero Company",
    href: "/star-wars-zero-company",
    slug: "star-wars-zero-company",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "RPG, action, builds & combat",
    label: "Turn-Based Tactical RPG",
    eyebrow: "Spotlight Hub",
    hubStatus:
      "14 chapters + choices + classes + 53 achievements + Expert/Beskar",
  
    description:
      "Use the STAR WARS Zero Company guide hub to plan a first run, follow the 14-chapter Critical route, build a flexible squad, handle choices and injuries, clear Gorga's debt, recruit Tel-Rea, and plan all 53 achievements.",
  
    coverage: [
      "Complete 14-chapter Critical Mission route from Serelonus and Gorga through Republic Intelligence, Cortilius, Luunata, Order 66, Captain Rex, Umbara, Cineurore, the final pursuit of Fathom, and the epilogue",
      "First-run campaign planning around Holo Table expiry timers, Cycles, Operations versus Tactical Missions, Intel, Influence, Recruitment, Den conversations, Action Points, Call for Backup, Advantage, Overwatch, Bonds, Focus Points, Cross Training, and early upgrades",
      "All eight starting specializations — Assault, Gunslinger, Heavy, Medic, Soldier, Sharpshooter, Scout, and Scoundrel — with Hawks recommendations, weapon-class fit, specialization changes, locked talents, Focus progression, and Cross Training",
      "Major choices and consequences including Kaller or Dantooine, Pick Your Poison, Gorga's Revenge, Bruckner, Dilemmas, Bond reactions, Credit tradeoffs, Relief Ship, and Crisis decisions",
      "Gorga's In Debt to the Hutts route through the 80,000-Credit warning, nine-Cycle pressure, Bruckner, Lothal, Pick Your Poison, the Republic Intelligence payment, and Payback without grinding the displayed debt",
      "Dark Waters progression through Takali Canal, the canal drain, underground Fathom route, blocked shot, convert rescue, Shadow Plague reveal, and Hawks' first meeting with Tel-Rea",
      "Smuggler's Den through Three Tower District, the Vinsar Materials service entrance, warehouse reinforcements, Destroyer Droid, battle-droid shipment, and the progression point where Tel-Rea joins Zero Company",
      "Injury and Permadeath management through Downed Operators, Rally, the three-Injury death rule, MedBay recovery, Bacta treatment, Trick's first-down protection, Aurelio, permanent loss, and the Memorial",
      "Story, Normal, Hard and Expert difficulty decisions, including reduced effective weapon range, lower starting Bonds, disabled Bacta Tank, Permadeath versus Beskar Mode, and Expert + Beskar planning",
      "All 53 achievements with an interactive checklist and 100% roadmap covering Very High Bonds, 50 Optional Missions, 20 Operators, 1,138 Tactical Mission kills, Astromechs, Operator stories, combat cleanup, Captain, and Legend",
    ],
  
    image:
      "/images/star-wars-zero-company/star-wars-zero-company-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 39,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "STAR WARS Zero Company Guide: First Run, Choices & Builds",
        href: "/star-wars-zero-company",
        type: "Guide Hub",
        description:
          "Start here for Critical Missions, Holo Table timing, difficulty, roster planning, choices, injuries, major roadblocks, the story route, and 100% completion.",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-holotable-objectives-expire.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "First-run planning, Critical Missions, Cycles, difficulty, roster depth, choices, Order 66, Trick, achievements, ending, and postgame",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Walkthrough & 14-Chapter Order",
        href: "/star-wars-zero-company/walkthrough",
        type: "Walkthrough",
        description:
          "Follow the full 14-chapter Critical route from Serelonus through Gorga, Cortilius, Luunata, Order 66, Captain Rex, Umbara, Cineurore, Fathom, and the epilogue.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-walkthrough-luunata-citadel-briefing.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 254,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "All 14 chapters, Critical Mission order, Serelonus, Gorga, Republic Intelligence, Cortilius, Luunata, Order 66, Captain Rex, Umbara, Cineurore, Fathom, and epilogue",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Beginner Guide & First-Run Tips",
        href: "/star-wars-zero-company/beginner-guide",
        type: "Beginner Guide",
        description:
          "Plan Cycles, prioritize expiring work, manage Intel and Operators, claim Influence rewards, use the Den, spend AP and Advantage better, and avoid common first-run mistakes.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-call-for-backup.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 255,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Cycles, Operations vs Tactical Missions, expiry timers, Intel, Influence, Recruitment, Den conversations, AP, Call for Backup, Advantage, Overwatch, Bonds, and upgrades",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Best Classes & Specializations",
        href: "/star-wars-zero-company/classes-specializations",
        type: "Builds",
        description:
          "Compare all eight specializations, choose Hawks' role and weapon class, change specialization when the build stops fitting, and shape Operators through talents, Focus Points, and Cross Training.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-eight-starting-specializations.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 256,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Assault, Gunslinger, Heavy, Medic, Soldier, Sharpshooter, Scout, Scoundrel, Hawks builds, weapon classes, specialization changes, talents, Focus Points, and Cross Training",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Trophy Guide & 53 Achievements",
        href: "/star-wars-zero-company/achievements-trophies",
        type: "Achievements",
        description:
          "Track all 53 achievements with a 100% roadmap for long counters, Very High Bonds, roster goals, Astromechs, Operator stories, combat cleanup, Expert, and Beskar.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-do-or-do-not-90-percent-miss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 257,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "All 53 achievements, 50 Optional Missions, 1,138 kills, 20 Operators, Very High Bonds, Astromechs, Operator stories, combat cleanup, Expert, and Legend",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Zero Company In Debt to the Hutts: 80,000 Credits Guide",
        href:
          "/star-wars-zero-company/in-debt-to-the-hutts-walkthrough",
        type: "Walkthrough",
        description:
          "Do not grind the 80,000-Credit debt. Follow Bruckner, Lothal, Pick Your Poison and Republic Intelligence, then clear Gorga's debt through Payback.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-in-debt-80000-nine-cycles.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 258,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "80,000 Credits, nine Cycles, Bruckner, Lothal, Pick Your Poison, Republic Intelligence payment, and Payback without grinding",
        },
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Dark Waters Walkthrough: Takali Canal, Fathom & Tel-Rea",
        href: "/star-wars-zero-company/dark-waters-walkthrough",
        type: "Walkthrough",
        description:
          "Drain Takali Canal, follow the underground route to Fathom, handle the blocked shot and convert rescue, survive the fight, and meet Tel-Rea.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-dark-waters-tel-rea-first-meeting.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 259,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Takali Canal, drain route, underground tunnels, Fathom initiation, blocked shot, convert rescue, Shadow Plague, and Tel-Rea's first meeting",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Smuggler's Den Walkthrough & Tel-Rea Recruitment Guide",
        href:
          "/star-wars-zero-company/smugglers-den-walkthrough",
        type: "Walkthrough",
        description:
          "Find the Vinsar Materials service entrance, survive warehouse reinforcements, expose the battle-droid shipment, and recruit Tel-Rea after Smuggler's Den.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-smugglers-den-tel-rea-joins.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 260,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Three Tower District, Vinsar Materials, service entrance, warehouse reinforcements, Destroyer Droid, battle-droid shipment, Hadrix, and Tel-Rea recruitment",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Injuries, Permadeath & Aurelio",
        href: "/star-wars-zero-company/permadeath-injuries",
        type: "Systems",
        description:
          "Learn how Downed Operators, Injuries, Rally and MedBay recovery work, what happens at three Injuries, when Bacta helps, how Trick differs, and whether Aurelio can be saved.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-medbay-one-cycle-three-injuries.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 261,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Downed Operators, Rally, Injuries, three-Injury death rule, MedBay, Bacta Tank, Trick, Aurelio, Permadeath, Memorial, and permanent loss",
        },
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Best Difficulty & Beskar Mode",
        href: "/star-wars-zero-company/difficulty-settings",
        type: "Systems",
        description:
          "Choose between Story, Normal, Hard and Expert, understand what Expert changes, separate Permadeath from Beskar, and decide when Expert + Beskar is worth attempting.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-difficulty-settings-story-normal-hard-expert.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 262,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Story, Normal, Hard, Expert, reduced weapon range, lower starting Bonds, disabled Bacta Tank, Permadeath vs Beskar, first-run difficulty, Captain, and Legend",
        },
  
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title:
          "STAR WARS Zero Company Choices & Consequences Guide",
        href: "/star-wars-zero-company/choices-consequences",
        type: "Guide",
        description:
          "Choose between Kaller and Dantooine, decide what to do with Bruckner, and judge Dilemmas, Bonds, Credits and Crisis decisions by what they actually change.",
        date: "Updated recently",
        image:
          "/images/star-wars-zero-company/star-wars-zero-company-pick-your-poison-kaller-dantooine.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 263,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Kaller or Dantooine, Pick Your Poison, Gorga's Revenge, Bruckner, Dilemmas, Bond reactions, Relief Ship, Credits, and Crisis decisions",
        },
  
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
    ],
  },
  {
    title: "Aliens: Fireteam Elite 2",
    game: "Aliens: Fireteam Elite 2",
    href: "/aliens-fireteam-elite-2",
    slug: "aliens-fireteam-elite-2",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "RPG, action, builds & combat",
    label: "Co-op Horde Shooter & Campaign",
    eyebrow: "Spotlight Hub",
    hubStatus: "14 missions + Kits + Queen + 30 achievements",
  
    description:
      "Use the Aliens: Fireteam Elite 2 guide hub to follow all 14 campaign missions, choose and build a Kit, fix progression blockers, clear every campaign, defeat the Xenomorph Queen, and complete all 30 achievements.",
  
    coverage: [
      "Complete 14-mission campaign order from Banshee Down through Rescue and Recovery, Boarding Party, Rock Bottom, Ancient Anomaly, and Final Endeavor, including Endeavor debrief gates and locked-mission troubleshooting",
      "Beginner progression through Duelist, Machinist, Marauder, Hunter, Medic and Specialist, Perk Grid connections, Combat Rating, weapon slots, Requisition spending, weapon ranks, Augments, damage types, ammo and Aid Kit management",
      "Rescue and Recovery through Piping Hot, Breaking and Entering and Synth Headache, including Piper, the signal jammer, colony intel terminals, Esther, security resets, turrets and landing-pad extraction",
      "Boarding Party through Bomb Squad, Dumpster Diving and Sleep Study, including the Demetrius warhead terminals, Cargo Bay upload, cryopods, Engine Bay and final holdout",
      "Rock Bottom through Power Problems, Running on Fumes and Hive Mind, including mine terminals, battery breakers, reactor pressure, Acidium plumbing, self-destruct consoles, Hive escape and late cryopod intel",
      "Ancient Anomaly through the quarry and Engineer ship, including turret routes, corrupted uploads, chained intel objectives, hybrid cryopods, four-console progression and the final command-room defense",
      "Final Endeavor through Dr. Pierce's mine route, lockdown override, laboratory investigation, the first Queen escape sequence, the real Xenomorph Queen boss fight and campaign ending",
      "All 30 achievements with an interactive checklist and efficient 100% route covering campaign clears, Intense, Extreme and Insane, Pure Professionals, Specialist, Horde Mode, weapon ranks, attachments, Augments and kill counters",
    ],
  
    image:
      "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 38,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Aliens Fireteam Elite 2 Guide: Walkthrough, Kits & Tips",
        href: "/aliens-fireteam-elite-2",
        type: "Guide Hub",
        description:
          "Start here for the campaign route, Kit and progression decisions, locked-mission fixes, solo and co-op help, difficulty, the Queen, and post-game cleanup.",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-guide-speak-to-ship-crew.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "14 missions, campaign order, Kits, Combat Rating, locked missions, solo and co-op, difficulty, Xenomorph Queen, and post-game progression",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Walkthrough & Mission Order",
        href: "/aliens-fireteam-elite-2/walkthrough",
        type: "Walkthrough",
        description:
          "Follow all 14 campaign missions in order, learn what unlocks each stage, fix locked mission cards, and continue from Prologue through Final Endeavor.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-walkthrough-rescue-and-recovery-mission-order.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 244,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "All 14 missions, Prologue, Rescue and Recovery, Boarding Party, Rock Bottom, Ancient Anomaly, Final Endeavor, Endeavor debriefs, and locked mission fixes",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Beginner Guide & Tips",
        href: "/aliens-fireteam-elite-2/beginner-guide",
        type: "Beginner Guide",
        description:
          "Start with the right Kit, Perk Grid, weapons, Combat Rating, damage types, Requisition spending, weapon ranks, Augments, ammo habits, and difficulty.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-perk-grid-combat-rating.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 245,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Duelist, Machinist, Marauder, Hunter, Medic, Specialist, Perk Grid, Combat Rating, weapon ranks, Augments, thermal and electric damage, Requisition, ammo, and Aid Kits",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Rescue & Recovery Walkthrough",
        href:
          "/aliens-fireteam-elite-2/rescue-and-recovery-walkthrough",
        type: "Walkthrough",
        description:
          "Clear Piping Hot, Breaking and Entering, and Synth Headache with the jammer, Piper, colony intel, Esther, security terminals, turrets, and extraction explained.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-piping-hot-signal-jammer.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 246,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Piping Hot, Piper, signal jammer, Breaking and Entering, colony intel, Synth Headache, Esther, security terminals, turrets, and landing-pad extraction",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Boarding Party Walkthrough",
        href:
          "/aliens-fireteam-elite-2/boarding-party-walkthrough",
        type: "Walkthrough",
        description:
          "Clear Bomb Squad, Dumpster Diving, and Sleep Study with the Demetrius warhead terminals, Cargo Bay upload, cryopods, Engine Bay, and final holdout.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-boarding-party-bomb-squad-warheads.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 247,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Bomb Squad, three warhead terminals, Dumpster Diving, Cargo Bay upload, Sleep Study, cryopods, Engine Bay, Synthetics, and final holdout",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Rock Bottom Walkthrough",
        href:
          "/aliens-fireteam-elite-2/rock-bottom-walkthrough",
        type: "Walkthrough",
        description:
          "Clear Power Problems, Running on Fumes, and Hive Mind with the mine terminals, breakers, reactor valve, Acidium plumbing, Hive, and intel sequence.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-power-plant-pressure-valve.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 248,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Power Problems, door terminals, battery breakers, reactor pressure valve, Running on Fumes, Acidium, self-destruct consoles, Hive Mind, cryopods, and intel",
        },
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Ancient Anomaly Walkthrough",
        href:
          "/aliens-fireteam-elite-2/ancient-anomaly-walkthrough",
        type: "Walkthrough",
        description:
          "Clear all three Ancient Anomaly missions with the quarry turrets, Engineer ship objectives, corrupted upload, hybrid cryopods, consoles, and final defense.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-3-95-percent-casualty.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 249,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Quarry turrets, Dr. Pierce, Engineer ship, corrupted upload, chained intel, hybrid cryopods, four consoles, 95% casualty report, and command-room defense",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Final Endeavor Walkthrough",
        href:
          "/aliens-fireteam-elite-2/final-endeavor-walkthrough",
        type: "Bosses",
        description:
          "Clear Final Endeavor, follow Dr. Pierce through the mines, escape the first Queen encounter, and defeat the Xenomorph Queen in the real boss fight.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-queen-boss-fight.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 250,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Reckoning, Dr. Pierce, mine lockdown, final laboratory, first Queen escape, real Xenomorph Queen fight, ammo management, adds, arena rotation, and ending",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Aliens Fireteam Elite 2 Achievements Guide: All 30",
        href: "/aliens-fireteam-elite-2/achievements",
        type: "Achievements",
        description:
          "Track all 30 achievements and finish campaign clears, difficulty runs, Pure Professionals, Specialist, Horde Mode, weapons, attachments, Augments, and kill counters.",
        date: "Updated recently",
        image:
          "/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-achievements-difficulty-selection.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 251,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "All 30 achievements, campaign clears, Intense, Extreme, Insane, Pure Professionals, Specialist, Horde Mode, weapon ranks, 50 attachments, five Augments, and kill counters",
        },
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
    ],
  },
  {
    title: "No More Room in Hell 2",
    game: "No More Room in Hell 2",
    href: "/no-more-room-in-hell-2",
    slug: "no-more-room-in-hell-2",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "Story, endings, horror & route locks",
    label: "Co-op Survival Horror & Zombie Extraction",
    eyebrow: "Spotlight Hub",
    hubStatus:
      "Maps + achievements + survival systems + progression + combat decisions",
  
    description:
      "Use the No More Room in Hell 2 guide hub to survive objective and extraction missions, learn map routes, plan achievement progression, understand combat systems, and solve the most common survival blockers without wasting runs.",
  
    coverage: [
      "Main objective progression across all six core maps including Broadway, Beaulieu Hospital, Lewiston, Raven Rock, Pottsville, and Power Plant, with route decisions, objective order, extraction timing, and dangerous sections",
      "Combat and survival fundamentals including stamina management, melee decisions, firearms, ammunition choices, healing timing, barricades, infected threats, and surviving high-pressure objective phases",
      "All 35 achievements with a practical 100% route covering map clears, difficulty completions, Responder progression, Pacifist, Pulling a Trigger Is Like Ordering Takeout, weapon challenges, Nightmare, and final cleanup",
      "Early Extraction decisions including when leaving early is correct, how objective progress affects risk, and how to avoid losing valuable runs",
      "Infection management through symptoms, cure items, serum preparation, and when continuing a mission becomes too risky",
      "Future system coverage including Survival Mode, weapons, skills, enemy types, and progression guides as the game receives more updates",
    ],
  
    image:
      "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 33,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "No More Room in Hell 2 Guide: Maps, Achievements & Survival",
        href: "/no-more-room-in-hell-2",
        type: "Guide Hub",
        description:
          "Start here for No More Room in Hell 2 progression, map walkthroughs, achievements, combat decisions, extraction strategy, and survival systems.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "Six objective maps, achievements, combat survival, infection, extraction decisions, Responder progression, and future systems",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Combat & Survival Guide",
        href: "/no-more-room-in-hell-2/combat-survival-guide",
        type: "Systems",
        description:
          "Learn stamina management, melee timing, firearm decisions, ammunition control, healing windows, barricades, and survival choices that keep runs alive.",
        date: "Updated recently",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-combat-survival-guide.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 201,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Stamina, melee, firearms, ammo management, healing timing, barricades, runners, Prime zombies, and survival decisions",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Achievements Guide: All 35 & 100% Route",
        href: "/no-more-room-in-hell-2/achievements",
        type: "Achievements",
        description:
          "Complete all 35 achievements with an efficient 100% route covering maps, Responder progression, Pacifist, weapon challenges, Nightmare, and cleanup.",
        date: "Updated recently",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pacifist-extraction.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 202,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "All 35 achievements, Pacifist, weapon challenges, map clears, Responder goals, Nightmare, and 100% cleanup",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Early Extraction Guide",
        href: "/no-more-room-in-hell-2/early-extraction",
        type: "Guide",
        description:
          "Understand when extracting early is the right decision, how to protect a successful run, and when pushing objectives is too risky.",
        date: "Updated recently",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-early-extraction.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 203,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Extraction timing, risk decisions, failed objectives, survival priorities, and protecting successful runs",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Infection Cure Guide",
        href: "/no-more-room-in-hell-2/how-to-cure-infection",
        type: "Systems",
        description:
          "Learn how infection works, when symptoms become dangerous, how to use cure items, and when abandoning a run is smarter.",
        date: "Updated recently",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-infection-cure.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 204,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Infection stages, cure items, serum timing, symptoms, and survival decisions",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Broadway Walkthrough",
        href: "/no-more-room-in-hell-2/broadway-walkthrough",
        type: "Walkthrough",
        description:
          "Clear Broadway with objective order, safer routes, extraction preparation, and practical survival decisions.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Beaulieu Hospital Walkthrough",
        href: "/no-more-room-in-hell-2/beaulieu-hospital-walkthrough",
        type: "Walkthrough",
        description:
          "Follow the Hospital route, handle objectives, manage infected pressure, and prepare before dangerous sections.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-beaulieu-hospital.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Lewiston Walkthrough",
        href: "/no-more-room-in-hell-2/lewiston-walkthrough",
        type: "Walkthrough",
        description:
          "Complete Lewiston objectives with route guidance, extraction planning, and survival tips.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Raven Rock Walkthrough",
        href: "/no-more-room-in-hell-2/raven-rock-walkthrough",
        type: "Walkthrough",
        description:
          "Navigate Raven Rock objectives, dangerous encounters, and extraction decisions.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Pottsville Walkthrough",
        href: "/no-more-room-in-hell-2/pottsville-walkthrough",
        type: "Walkthrough",
        description:
          "Clear Pottsville objectives while managing zombie pressure, positioning, and extraction risk.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title:
          "No More Room in Hell 2 Power Plant Walkthrough",
        href: "/no-more-room-in-hell-2/power-plant-walkthrough",
        type: "Walkthrough",
        description:
          "Finish the Power Plant mission with objective routing, combat preparation, and safer extraction planning.",
        image:
          "/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
    ],
  },
  {
    title: "How to Fish",
    game: "How to Fish",
    href: "/how-to-fish",
    slug: "how-to-fish",
    kind: "game",
    status: "active",
    accent: "cyan",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Fishing Adventure & Boss Progression",
    eyebrow: "Spotlight Hub",
    hubStatus: "All 5 areas + bosses + 49 creatures + 28 achievements",
  
    description:
      "Use the How to Fish guide hub to follow all five progression areas, solve NPC and bait blockers, defeat every major boss, find all 49 creatures, and complete all 28 achievements.",
  
    coverage: [
      "Main progression from the Lighthouse and Spider Crab through Island 2, Island 3, Island 4, the military and Volcano area, the Mutated Bowhead Whale, and the final route toward the mainland",
      "Opening progression through Beer, Empty Beer Can bait, the Spider Crab self-stun window, Spider Crab Shell, Boat Keys, and the 10-cost Radar",
      "Island 2 progression through the 0/3 Leech request, ground-pickup Leeches, NPC bait conversion, Giant Piranha preparation, Giant Piranha Skeleton, Island 3 Flash Drive, and Radar route",
      "Island 3 progression through the Tourist's Endangered Species request, valid catch checks, Carrot reward, Pufferfish preparation, tree-circling strategy, Pufferfish Tail, and Island 4 coordinates",
      "Late-game boss progression through the Terrorizing Bird, Tuna trigger, Bowhead Whale experiment, Volcano encounter, and Mutated Bowhead Whale, including positioning, ranged-damage decisions, and Dynamite",
      "All 49 normal creatures across the Lighthouse, Forest, Desert, Rocks, and Volcano areas, with lure pools, Boss Lures, story triggers, missing-creature diagnosis, Collector, and separate Fishipedia Drip cleanup",
      "All 28 achievements with Killscore, 360 no scope, cooking, casino and money goals, boat and gear upgrades, Easy, Collector, Fishipedia, Bean, Handyman, and a practical 100% route",
    ],
  
    image:
      "/images/how-to-fish/how-to-fish-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 37,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "How to Fish Walkthrough: All Islands & Progression Guide",
        href: "/how-to-fish",
        type: "Guide Hub",
        description:
          "Follow the main route across all five areas, solve NPC progression gates, use Radar coordinates, reach every major boss, and finish the Volcano and mainland route.",
        image:
          "/images/how-to-fish/how-to-fish-scientist-whale-mission.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Five progression areas, Lighthouse, Spider Crab, Leeches, Giant Piranha, Tourist, Carrot, Pufferfish, Terrorizing Bird, scientist, Volcano, Radar, and final route",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "How to Fish Spider Crab: Stun, Beer Can & Boat Keys",
        href: "/how-to-fish/spider-crab",
        type: "Bosses",
        description:
          "Get the Empty Beer Can, trigger the Spider Crab, use its self-stun window, keep the Spider Crab Shell, unlock the Boat Keys, and buy the Radar.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-spider-crab-stun-window.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 242,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Beer, Empty Beer Can, Spider Crab trigger, self-stun window, Knife timing, Spider Crab Shell, Boat Keys, Radar, and Lighthouse progression",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "How to Fish Leech Bait: Find 3 Leeches on Island 2",
        href: "/how-to-fish/leech-bait",
        type: "Guide",
        description:
          "Find all three Leeches as ground pickups on Island 2, complete the 0/3 request, return them to the NPC, prepare the boss bait, and trigger the Giant Piranha.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-leech-ground-location.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 237,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Island 2, 0/3 Leeches, ground pickups, NPC hand-in, Leech bait conversion, boss trigger, and Giant Piranha handoff",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "How to Fish Giant Piranha: Boss, Skeleton & Island 3",
        href: "/how-to-fish/giant-piranha",
        type: "Bosses",
        description:
          "Prepare for the Giant Piranha, choose between the 150 Shotgun and 230 Big Motor, collect its Skeleton, complete the NPC hand-in, and unlock Island 3.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-giant-piranha-boss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 238,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "150 Shotgun, 230 Big Motor, Giant Piranha fight, food, ranged damage, Giant Piranha Skeleton, Island 3 Flash Drive, Radar, and Tourist handoff",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "How to Fish Endangered Fish: Tourist & Carrot Guide",
        href: "/how-to-fish/endangered-fish",
        type: "Guide",
        description:
          "Complete the Tourist's Island 3 request by finding a creature with the Endangered Species status, keep the catch intact, and get the Carrot for Pufferfish.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-endangered-species-tag.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 239,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Island 3 Tourist, Endangered Species status, Needlefish, valid catch checks, no Endangered Bait, Carrot reward, and Pufferfish prerequisite",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "How to Fish Pufferfish: Carrot, Boss Fight & Tail",
        href: "/how-to-fish/pufferfish",
        type: "Bosses",
        description:
          "Prepare before using the Carrot, beat the Pufferfish with the tree-circling route, fix SMG recoil, collect the Pufferfish Tail, and unlock Island 4.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-pufferfish-dodge-route.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 240,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Carrot boss trigger, 650 SMG, 600 Compensator, tree-circling route, later Pufferfish phase, Pufferfish Tail, Tourist hand-in, Island 4, and Terrorizing Bird handoff",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "How to Fish Boss Guide: All Bosses & Best Strategies",
        href: "/how-to-fish/boss-guide",
        type: "Bosses",
        description:
          "Follow the main boss order from Spider Crab to Mutated Bowhead Whale, fix missing triggers, use better positioning, and know when upgrades or Dynamite actually help.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-mutated-bowhead-whale-boss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 236,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Spider Crab, Giant Piranha, Pufferfish, Terrorizing Bird, Mutated Bowhead Whale, boss triggers, Tuna, Dynamite, Volcano boundary, ranged damage, and positioning",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "How to Fish All 49 Creatures: Locations & Collector Guide",
        href: "/how-to-fish/all-fish-locations",
        type: "Collectibles",
        description:
          "Find all 49 creatures by island, lure, Boss Lure, and story trigger, diagnose missing encyclopedia slots, and separate Collector from Fishipedia Drip cleanup.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-sunfish-beginner-boss-lure.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 243,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "All 49 creatures, encyclopedia slots, Lighthouse, Forest, Desert, Rocks, Volcano, lure pools, Boss Lures, Collector, Fishipedia, Drip variants, and missing-creature diagnosis",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "How to Fish Achievements: All 28 & 100% Guide",
        href: "/how-to-fish/achievements",
        type: "Achievements",
        description:
          "Track all 28 achievements and finish Killscore, cooking, casino, gear, boat, Collector, Fishipedia, Easy, Bean, Handyman, and the remaining 100% cleanup.",
        date: "Updated recently",
        image:
          "/images/how-to-fish/how-to-fish-achievements-360-no-scope.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 241,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "All 28 achievements, Killscore, 360 no scope, cooking, roulette, Legendary skins, Rich! Millionaire, Easy, Collector, Fishipedia, Bean, Handyman, and 100% route",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
    ],
  },
  {
    title: "Project P.I.T.T.",
    game: "Project P.I.T.T.",
    href: "/project-pitt",
    slug: "project-pitt",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Incremental Factory Automation",
    eyebrow: "Spotlight Hub",
    hubStatus: "Progression + automation + 23 achievements + Secret Ending",
  
    description:
      "Use the Project P.I.T.T. guide hub to follow progression from Ducks through Cash Registers, Piñatas and Anomalies, fix automation layouts, solve the 200 kg and 0% blockers, complete all 23 achievements, troubleshoot stuck progression, and reach the Secret Ending.",
  
    coverage: [
      "Main progression from early Ducks and Cash Registers through Phase 3 Piñatas, Phase 4 Anomalies, the camera and fuse branch, the 200 kg platform, the 0% gate, and hidden-route handoff",
      "Automation decisions through straight Duck lanes, Cash Register landings, Cushion and Slick Panels, staged Fans, Sticky Tools, containment, catches, jams, overshoot, undershoot, and knowing when to stop upgrading",
      "Product-specific automation for Ducks, Cash Registers and Piñatas, including the Duck 5-second to 2-second production jump, Cash Register soft landings and handoffs, controlled Piñata breaks, Candy containment, and late combo support",
      "Anomaly production through the one Duck plus one Cash Register plus one Piñata recipe, ingredient buffers, Intern Substitute, output physics, supply balancing, Anomaly crates, and hidden-route preparation",
      "Hidden progression through the 200 kg platform, the 0% device, Anomaly gate requirement, clone room, mining layers, UV clues, Access Card, elevator code 2640, and the Secret Ending",
      "All 23 achievements with launch-window unlock-rate context, combo and loose-product goals, all 10 Gambling Crates, hidden-route achievement groups, late factory grinds, and a practical 100% cleanup order",
      "Troubleshooting for scripted Phase 3 destruction, stuck 0% progression, inactive Anomaly workbench states, achievement unlock problems, Secret Ending state issues, and recording-related hitching",
    ],
  
    image: "/images/project-pitt/project-pitt-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 36,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Project P.I.T.T. Guide: Progression, Automation & Endings",
        href: "/project-pitt",
        type: "Guide Hub",
        description:
          "Start here to identify your current product, blocker, or late-game objective, then jump to the one Project P.I.T.T. guide that owns the full solution.",
        image: "/images/project-pitt/project-pitt-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Progression, automation layouts, Ducks, Cash Registers, Piñatas, Anomalies, 200 kg and 0% blockers, achievements, troubleshooting, and Secret Ending",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Progression Guide: What to Do Next",
        href: "/project-pitt/progression-guide",
        type: "Walkthrough",
        description:
          "Follow the run from Ducks to Cash Registers, Phase 3 Piñatas, Phase 4 Anomalies, the camera and fuse branch, the 200 kg blocker, and the hidden route without overbuilding each stage.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-phase-3-pinata-unlocked.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 226,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Ducks to Cash Registers, Phase 3, Piñatas, Phase 4, Anomalies, cameras, three fuses, 200 kg branch, and hidden-route handoff",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Automation Layout Helper: Fix Jams & Airflow",
        href: "/project-pitt/automation-layouts",
        type: "Systems",
        description:
          "Fix jams, overshoot, undershoot, weak airflow, bad catches, containment problems and moving tools by diagnosing the first visible automation failure.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-duck-straight-catcher-layout.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 227,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Jams, overshoot, undershoot, Fans, containment, catch zones, Cushion, Slick, Sticky Tools, Duck routes, and early Cash Register layouts",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Duck Automation Guide: 12 to 30 Ducks/Min",
        href: "/project-pitt/duck-automation",
        type: "Systems",
        description:
          "Build a reliable Duck lane, scale the automatic source from 12 to 30 Ducks per minute, add a roof and Sticky Tools only when needed, and know when to stop investing.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-duck-auto-machine-2-second-rate.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 228,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Automated Duck Workbench, straight lane, staged Fans, roof timing, Sticky Tools, 5 seconds to 2 seconds, 12 to 30 Ducks/min, Bumpers, and Magnet recovery",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Cash Register Automation Guide",
        href: "/project-pitt/cash-register-automation",
        type: "Systems",
        description:
          "Build a Cash Register route with soft landings, Cushion and Slick Panels, Piston handoffs, stronger Fans, manual-plus-auto merging, and smart Phase 3 stop timing.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-cash-register-cushion-slick-transfer.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 229,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Cash Register geometry, Cushion landing, Slick transport, Piston handoff, manual and automatic merge, Industrial Fan bottlenecks, upgrades, and Phase 3 warning",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Piñata Automation Guide: Candy & $10M Setup",
        href: "/project-pitt/pinata-automation",
        type: "Systems",
        description:
          "Keep Piñatas intact during soft transport, create one controlled break point near the Pit, contain Candy, and buy the $10 million automatic source only after the lane works.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-pinata-break-wall-candy.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 230,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Phase 3 Piñatas, Cushion transport, intentional break point, Candy containment, $10M automation, second source, Duck combo support, and production timing",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Anomaly Guide: Recipe, Workbench & Crates",
        href: "/project-pitt/anomaly-guide",
        type: "Systems",
        description:
          "Make Anomalies with one Duck, one Cash Register and one Piñata, balance ingredient buffers, use Intern Substitute, control output physics, and switch to crates for bulk farming.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-anomaly-workbench-recipe.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 231,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "1 Duck + 1 Cash Register + 1 Piñata recipe, ingredient buffers, Intern Substitute, Anomaly physics, supply balancing, crates, and hidden-route preparation",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Project P.I.T.T. 200kg Platform & 0% Gate Solution",
        href: "/project-pitt/200kg-platform-what-next",
        type: "Puzzle Help",
        description:
          "Solve the 200 kg platform, understand why the next device stays at 0%, know when to leave if Anomalies are locked, and open the hidden gate when you return.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-200kg-platform-206-open.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 232,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "200 kg platform, stable weight, working 206 kg example, bulkhead opening, 0% device, Anomaly timing, 100% gate, and hidden-route handoff",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Secret Ending Guide: Code 2640 & UV Clues",
        href: "/project-pitt/secret-ending",
        type: "Endings",
        description:
          "Follow the post-gate route through the clone room, four mining layers, UV clues, Access Card, elevator code 2640, and the Project P.I.T.T. Secret Ending.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-secret-ending-elevator-override.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 233,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Clone room, 200-clone objective, four mining layers, UV Lamp, 0-4-6-2 clues, Access Card, elevator code 2640, and Secret Ending",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Achievements Guide: All 23 Requirements",
        href: "/project-pitt/achievements",
        type: "Achievements",
        description:
          "Track all 23 Project P.I.T.T. achievements, their requirements and launch-window unlock rates, then finish hidden-route, collectible, combo and factory-grind cleanup efficiently.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-achievements-remaining-eight.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 234,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "All 23 achievements, x100 x200 x300 combos, 500 and 1,000 loose products, 10 Gambling Crates, hidden-route badges, $1T, 400/min, and 100% cleanup",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title:
          "Project P.I.T.T. Troubleshooting: Bugs & Stuck Progression",
        href: "/project-pitt/troubleshooting",
        type: "Guide",
        description:
          "Diagnose scripted Phase 3 destruction, stuck progression, the 0% device, Anomaly workbench problems, missing achievements, Secret Ending state issues, and recording hitching.",
        date: "Updated recently",
        image:
          "/images/project-pitt/project-pitt-phase-3-factory-break.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 235,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Phase 3 destruction, stuck 0%, Anomaly workbench state, missing achievements, Secret Ending unlock state, real-problem checks, reload order, and recording hitching",
        },
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
    ],
  },
  {
    title: "Crimson Desert",
    game: "Crimson Desert",
    href: "/crimson-desert",
    slug: "crimson-desert",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "RPG, action, builds & combat",
    label: "Open-World Action RPG",
    eyebrow: "Spotlight Hub",
    hubStatus: "Trading + farming + hunting + Abyss Artifacts + quest blockers",
  
    description:
      "Use the Crimson Desert guide hub to plan profitable trading routes, manage farming and ranching, solve hunting challenges, spend Abyss Artifacts intelligently, and fix missing or stuck side quests without losing track of progression.",
  
    coverage: [
      "Buyer-first trading through current price checks, Packaged Trade Goods, Royal Trading Posts, multi-stop routes, wagon risk, Buy-versus-Sell checks, and knowing when a detour is no longer worth the profit",
      "Farming and ranching through watering, fertilizer, Rubber Trees, Cacao, Howling Hill Ranch, livestock capacity, breeding pairs, feed management, overcrowding, and deciding when camp production is worth another stop",
      "Hunting through variable wildlife spawns, White Crow's Gaze conditions, Feather of the Earth, Wild Showdown, Pine Broom, special-animal decisions, and The End of Myth legendary targets",
      "Abyss Artifact spending through Health, Stamina, Spirit and skill priorities, Research and material gates, camp-storage checks, save-versus-spend decisions, and the distinction between Abyss Artifacts and Sealed Abyss Artifact objectives",
      "Missing and stuck side-quest troubleshooting through Halted Research, Research Institute availability, locked Oongka, quest prerequisites, A Special Blueprint, Faction progress, and knowing when progression matters more than another map search",
    ],
  
    image:
      "/images/crimson-desert/crimson-desert-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 35,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Crimson Desert Guide: Trading, Farming, Hunting & Progression",
        href: "/crimson-desert",
        type: "Guide Hub",
        description:
          "Start here when progression stalls. Jump to trading, farming and ranching, hunting, Abyss Artifact decisions, or missing and stuck side-quest troubleshooting.",
        image:
          "/images/crimson-desert/crimson-desert-wagon-off-trade-route-risk.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Trading routes, farming and ranching, White Crow's Gaze hunting, Abyss Artifact spending, Research blockers, locked characters, and side-quest troubleshooting",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Crimson Desert Trading Guide: Routes, Prices & Wagons",
        href: "/crimson-desert/trading-guide",
        type: "Systems",
        description:
          "Plan profitable trades by finding the buyer first, comparing current prices and detours, combining useful stops, and protecting valuable Packaged Goods on the wagon.",
        date: "Updated recently",
        image:
          "/images/crimson-desert/crimson-desert-84450-packaged-salt-sale.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 221,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Buyer-first routes, Packaged Cheese and Salt, Royal Trading Posts, current prices, Buy vs Sell checks, multi-stop planning, detours, and wagon risk",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Crimson Desert Farming Guide: Crops, Ranching & Livestock",
        href: "/crimson-desert/farming-ranching-guide",
        type: "Systems",
        description:
          "Manage crops and livestock with better watering, fertilizer, Rubber Tree and Cacao decisions, ranch capacity, breeding pairs, feed, and overcrowding cleanup.",
        date: "Updated recently",
        image:
          "/images/crimson-desert/crimson-desert-fertilizer-water-crops.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 222,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Howling Hill Ranch, watering, fertilizer, Water Backpack, Rubber Trees, Cacao, ranch capacity, breeding pairs, livestock feed, and overcrowding",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Crimson Desert Hunting Guide: White Crow's Gaze & Animals",
        href: "/crimson-desert/hunting-guide",
        type: "Guide",
        description:
          "Handle variable animal spawns, Feather of the Earth, Wild Showdown, Pine Broom, special-animal decisions, and The End of Myth legendary hunts.",
        date: "Updated recently",
        image:
          "/images/crimson-desert/crimson-desert-feather-of-the-earth-kiwi.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 223,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Random wildlife spawns, wolf checks, Feather of the Earth, Kiwi catching, Wild Showdown, Pine Broom, special animals, and The End of Myth",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Crimson Desert Abyss Artifacts Guide: What to Spend Them On",
        href: "/crimson-desert/abyss-artifacts-guide",
        type: "Systems",
        description:
          "Decide whether to spend Abyss Artifacts on Health, Stamina, Spirit or skills, identify Research and material gates, and know when saving them is better.",
        date: "Updated recently",
        image:
          "/images/crimson-desert/crimson-desert-save-21-abyss-artifacts.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 224,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Health vs Stamina vs Spirit, skill upgrades, Research gates, missing materials, camp storage, save vs spend, and Sealed Abyss Artifact distinction",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Crimson Desert Side Quests Guide: Missing & Stuck Quests",
        href: "/crimson-desert/side-quests-guide",
        type: "Guide",
        description:
          "Fix missing and stuck side content by checking Halted Research, locked Oongka, Research Institute availability, prerequisites, Faction progress, and quest state.",
        date: "Updated recently",
        image:
          "/images/crimson-desert/crimson-desert-halted-research-22-hours.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 225,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Halted Research, Research Institute problems, locked Oongka, The Void, missing prerequisites, House Roberts progress, A Special Blueprint, and quest-state diagnosis",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
    ],
  },
  {
    title: "Mortal Shell 2",
    game: "Mortal Shell II",
    href: "/mortal-shell-2",
    slug: "mortal-shell-2",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "RPG, action, builds & combat",
    label: "Soulslike Action RPG",
    eyebrow: "Spotlight Hub",
    hubStatus:
      "Progression + Shells + weapons + bosses + 53 achievements + endings",
  
    description:
      "Use the Mortal Shell 2 guide hub to decide where to go next, solve progression gates, choose worthwhile Shell and weapon detours, clear major bosses and dungeons, track all 53 achievements, and prepare for endings and New Game Plus.",
  
    coverage: [
      "World and progression decisions from Marrow Keep through Fainweald, Ova recovery, the Gloom Siphon, Mether's Breath, Outskirts of Mammon, the Unfound Path, endgame, and knowing when an optional route is worth taking",
      "All eight permanent post-opening Shells with location and route-cost decisions, plus dedicated Gragu, Eredrim, Genessa, and Sariel routes",
      "All eight melee weapons with practical tiering and acquisition decisions, plus dedicated Axe & Dagger, Veteran's Battle Axe, and Great Martyr's Blade routes",
      "All eight Sidearms with locations, Resolve economy, early-versus-late acquisition decisions, and Caged Hystrix as the stronger late-game sustained-pressure option",
      "Major boss and dungeon blockers including the opening Tar Golem, Magdalena the Lady of the Woods, Sariel and the Chamber of Becoming, King's Crypt, Shrine of Trials, and Martyr's Prison",
      "Difficulty decisions through Standard play, Slayer Seal, Thestus and Night Mode, including when one expensive route is the problem and when combat difficulty itself needs changing",
      "All 53 achievements with a progress checklist, opening missable windows, Shell, Weapon and Sidearm cleanup, Tarstones, Heavy Metal, Peter's Perfect Parry, Seeking the Past, and later-cycle completion",
      "Ending progression through Zmey, Walk the Unfound Path, pre-ending cleanup, Send Ova, the main ending, Baghead secret ending, and New Game Plus",
    ],
  
    image:
      "/images/mortal-shell-2/mortal-shell-2-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 34,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Mortal Shell 2 Guide: Progression, Map & Area Order",
        href: "/mortal-shell-2",
        type: "Guide Hub",
        description:
          "Start here to decide where to go next, recognize progression gates, judge Shell and weapon detours, and jump to the boss, achievement, ending, or system guide that owns the solution.",
        image:
          "/images/mortal-shell-2/mortal-shell-2-marrow-keep-home.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          spotlightMeta:
            "Progression, map and area order, Ova, corruption gates, Shell and weapon detours, bosses, difficulty, 53 achievements, endings, and NG+",
        },
  
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Progression Guide: Best Route & Where to Go",
        href: "/mortal-shell-2/progression-guide",
        type: "Walkthrough",
        description:
          "Follow the main route from Marrow Keep through early Shell and weapon decisions, Ova progression, Mammon, the Unfound Path, and endgame without clearing every branch too early.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-outskirts-of-mammon-teleporter.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 204,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Marrow Keep, Widow's Overlook, Fainweald, Mushroom Village, Ova, corruption gates, Outskirts of Mammon, Unfound Path, underpowered checks, and endgame",
        },
  
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Ova & Gloom Siphon: Mether's Breath Guide",
        href: "/mortal-shell-2/ova-gloom-siphon",
        type: "Systems",
        description:
          "Recover Unblemished Ova, return them to the Gloom Siphon, unlock Mether's Breath, cleanse corruption, and use revitalized Beacons for faster travel.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-path-blocked-by-corruption.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 205,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Black corruption, Unblemished Ova, Milos, Gloom Siphon, Mether's Breath, corruption cleansing, revitalized Beacons, and fast travel",
        },
  
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Mortal Shell 2 All Shell Locations & How to Unlock All 8",
        href: "/mortal-shell-2/all-shells-locations",
        type: "Guide",
        description:
          "Find and unlock Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel, with the route and prerequisite that actually gates each Shell.",
        date: "Updated recently",
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 206,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, Sariel, all eight locations, prerequisites, and unlock routes",
        },
  
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Best Weapons & Weapon Tier List: All 8 Ranked",
        href: "/mortal-shell-2/weapons-guide",
        type: "Builds",
        description:
          "Compare all eight melee weapons, from Axatana and Great Martyr's Blade to Axe & Dagger and Veteran's Battle Axe, with practical tiering, builds, and investment decisions.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-running-heavy.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 207,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Axatana, Great Martyr's Blade, Clockwork Scythe, Veteran's Battle Axe, Axe & Dagger, Iconoclast, Obsidian Hammer, Black Needle, Frost, and Tarstones",
        },
  
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Mortal Shell 2 All 8 Sidearm Locations & Best Sidearm",
        href: "/mortal-shell-2/sidearms-guide",
        type: "Guide",
        description:
          "Find all eight Sidearms, compare the best ranged options, understand Resolve-powered combat, and decide which pickups and Coin upgrades are worth prioritizing.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-sidearm-resolve-tutorial.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 208,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Naylshotte, Troubadour's Lute, Forgotten Crossbow, Salvaged Trebuchaxe, Triarch Repeater, Ballistazooka, Cursed Child, Caged Hystrix, Resolve, and upgrades",
        },
  
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Heart of Vatra Location & Gragu Unlock",
        href: "/mortal-shell-2/heart-of-vatra-gragu",
        type: "Guide",
        description:
          "Light all three Temple of Vatra offerings, collect Berserker's Stone, take the Heart of Vatra, escape the sealed route, and return it to unlock Gragu.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-heart-of-vatra-altar.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 209,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Temple of Vatra, three offerings, Berserker's Stone, Heart of Vatra, sealed escape route, One-Legged Wolf, and Gragu unlock",
        },
  
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Eredrim Guide: How to Unlock Him Early",
        href: "/mortal-shell-2/how-to-unlock-eredrim",
        type: "Guide",
        description:
          "Unlock Eredrim through the Citadel-side route, activate the useful nearby Beacon, handle the required encounter, and decide whether rushing the Shell fits the current run.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-eredrim-citadel-bag-shortcut.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 210,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Gloomshade Grove, Citadel access, wall-bag shortcut, Beacon, Warden, Eredrim location, and early Shell decision",
        },
  
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Genessa Guide: How to Unlock Her",
        href: "/mortal-shell-2/how-to-unlock-genessa",
        type: "Guide",
        description:
          "Follow the Genessa route through Outskirts of Mammon and Revenant Graves, recover Sester's Censer, clear the encounter, and return to Marrow Keep.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-outskirts-of-mammon-teleporter.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 211,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Outskirts of Mammon, bridge drop, teleport gate, Revenant Graves, Sester's Censer, return to Marrow Keep, and Genessa unlock",
        },
  
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Sariel Boss Guide: Chamber of Becoming",
        href: "/mortal-shell-2/sariel-boss-guide",
        type: "Bosses",
        description:
          "Reach Sariel through the Chamber of Becoming route, survive the encounter sequence, stop the revive mechanic, and collect the Shell and equipment rewards.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-sariel-four-statuettes.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 212,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Outskirts of Mammon, Sariel temple, Chamber of Becoming, three encounters, four statuettes, revive mechanic, Shell unlock, Clockwork Scythe, and Caged Hystrix",
        },
  
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Axe & Dagger Location & Shrine of Trials Puzzle",
        href: "/mortal-shell-2/shrine-of-trials-axe-dagger",
        type: "Guide",
        description:
          "Find the Chapel Key near Mushroom Village, enter the Shrine of Trials, solve its hidden-wall and pillar puzzles, defeat the final enemy, and get Axe & Dagger.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-axe-dagger-hidden-archway.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 213,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Mushroom Village, hidden gates, Chapel Key, king inscription, backward wall, pillar puzzles, final enemy, and Axe & Dagger location",
        },
  
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Veteran's Battle Axe Location & King's Crypt Guide",
        href: "/mortal-shell-2/kings-crypt-veterans-battle-axe",
        type: "Guide",
        description:
          "Reach King's Crypt north of Black Ridge Pass, survive wall arrows, floor spikes, exploding enemies and the final guard, then collect the Veteran's Battle Axe.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-kings-crypt-floor-spikes.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 214,
          spotlightFeature: true,
          spotlightOrder: 11,
          spotlightMeta:
            "Black Ridge Pass, King's Crypt, wall arrows, floor spikes, exploding enemies, doorway bear trap, final guard, Battle Axe pickup, and early heavy-weapon detour",
        },
  
        archive: {
          showInCollections: true,
          order: 12,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Great Martyr's Blade Location & Frost Guide",
        href: "/mortal-shell-2/great-martyrs-blade",
        type: "Guide",
        description:
          "Reach Martyr's Prison, collect the Great Martyr's Blade, follow the route tied to its upgrade setup, and decide when investing in Frost is worth the detour.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-weapon.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 215,
          spotlightFeature: true,
          spotlightOrder: 12,
          spotlightMeta:
            "Gloomshade Grove, Citadel prerequisite, Martyr's Prison, Great Martyr's Blade location, Warden's Stone, Frost, heavy control, and investment timing",
        },
  
        archive: {
          showInCollections: true,
          order: 13,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Tar Golem: How to Beat It & What Happens",
        href: "/mortal-shell-2/tar-golem",
        type: "Bosses",
        description:
          "Beat the opening Tar Golem, understand why the fight is optional for progression, learn what changes after a win or loss, and use the correct retry route.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-tar-golem-first-boss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 216,
          spotlightFeature: true,
          spotlightOrder: 13,
          spotlightMeta:
            "Opening Tar Golem, how to beat it, optional progression, win vs lose outcome, rear-cliff retry, full Health reset, No You Still Can't Win, and fresh-save re-fight",
        },
  
        archive: {
          showInCollections: true,
          order: 14,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Magdalena Boss Guide: Charge, Break & Wasps",
        href: "/mortal-shell-2/magdalena-boss-guide",
        type: "Bosses",
        description:
          "Beat Magdalena by controlling the arena edge, dodging her charge late, keeping melee punishes short, using Break windows, and surviving the wasp swarm and summons.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-magdalena-lady-of-the-woods-boss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 217,
          spotlightFeature: true,
          spotlightOrder: 14,
          spotlightMeta:
            "Glutted Mire, arena-edge positioning, late charge dodge, fire ring, Corrosive Stone, Break windows, wasp swarm, summons, and Magdalena's Memento",
        },
  
        archive: {
          showInCollections: true,
          order: 15,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Difficulty Settings: Slayer Seal & Night",
        href: "/mortal-shell-2/difficulty-settings",
        type: "Systems",
        description:
          "Understand why there is no normal Easy mode menu, how Slayer Seal changes combat difficulty, its achievement consequence, and when Standard or Night makes more sense.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-slayer-seal-difficulty.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 218,
          spotlightFeature: true,
          spotlightOrder: 15,
          spotlightMeta:
            "No Easy Normal Hard menu, Standard difficulty, Slayer Seal, Break Damage, achievement consequence, boss help, Night Mode, and when to switch",
        },
  
        archive: {
          showInCollections: true,
          order: 16,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Night Mode Guide: Thestus, Changes & Rewards",
        href: "/mortal-shell-2/night-mode",
        type: "Systems",
        description:
          "Unlock Night Mode with Thestus, understand tougher encounters, traps and support enemies, and decide when its better rewards justify the added difficulty.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-thestus-night-mode.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 219,
          spotlightFeature: true,
          spotlightOrder: 16,
          spotlightMeta:
            "Thestus, Night unlock, tougher enemies, traps, support healers, better rewards, farming, progression efficiency, and when to turn Night off",
        },
  
        archive: {
          showInCollections: true,
          order: 17,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Endings Guide: Send Ova & Baghead Ending",
        href: "/mortal-shell-2/endings",
        type: "Endings",
        description:
          "Handle Walk the Unfound Path, Zmey, pre-ending cleanup, the Send Ova commitment, the main ending, Baghead secret ending, and New Game Plus transition.",
        date: "Updated recently",
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 220,
          spotlightFeature: true,
          spotlightOrder: 17,
          spotlightMeta:
            "Walk the Unfound Path, Zmey, Marrow Keep cleanup, Send Ova, point of no return, main ending, Baghead ending, credits, reload behavior, and NG+",
        },
  
        archive: {
          showInCollections: true,
          order: 18,
        },
      },
  
      {
        title:
          "Mortal Shell 2 Trophy Guide: All 53 Achievements & Roadmap",
        href: "/mortal-shell-2/achievements",
        type: "Achievements",
        description:
          "Track all 53 achievements, protect the three important first-cycle trophy windows, combine collection cleanup, and finish Shell Memories through New Game Plus and later cycles.",
        date: "Updated recently",
        image:
          "/images/mortal-shell-2/mortal-shell-2-mid-summer-maragold-flower-crown.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
  
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 252,
          spotlightFeature: true,
          spotlightOrder: 18,
          spotlightMeta:
            "All 53 achievements, Mid Summer, Tar Golem, Peter's Perfect Parry, Stoned, Heavy Metal, Baghead, Shell and weapon collections, Seeking the Past, No Lifer, and NG+ cleanup",
        },
  
        archive: {
          showInCollections: true,
          order: 19,
        },
      },
    ],
  },
  {
    title: "Ghost Recon Wildlands",
    game: "Tom Clancy's Ghost Recon Wildlands",
    href: "/ghost-recon-wildlands",
    slug: "ghost-recon-wildlands",
    kind: "game",
    status: "active",
    accent: "blue",
    archiveCategory: "RPG, action, builds & combat",
    label: "Open-World Tactical Shooter",
    eyebrow: "Spotlight Hub",
    hubStatus: "Last Rites + Predator + 2026 settings",
  
    description:
      "Use the Ghost Recon Wildlands guide hub for the 2026 return: complete Last Rites, find its progression-critical intel, understand the ending, beat Predator, tune Ghost Parameters and World settings, and compare the free update with Definitive Edition.",
  
    coverage: [
      "Returning-player route through the 2026 update, Last Rites first, the regular Bolivia campaign afterward, Predator as a separate contained challenge, and the correct guide for each blocker",
      "Complete six-mission Last Rites progression through Operation: Lazarus, Deadly Obsession, And Your Enemies Closer, Vow of Silence, With Extreme Prejudice, and The Price of Freedom",
      "Progression-critical Last Rites intel through the Unidad outpost, black site, Victor Vargas evidence, hidden Data Server, cultist clues, high-level cultist, and Penitentes stronghold",
      "Last Rites ending through Ines Cortez, La Llorona, Emily Price, the failed asset history, terminate-to-exfiltrate order change, martyr problem, and final debrief",
      "The Jungle Moved Predator mission through Caimanes, three investigation areas, Thermal Vision decision, hard-cover boss fight, self-destruct escape, and Predator Biomask",
      "2026 gameplay customization through One Primary Weapon, Tactical Reload, Revive, Difficulty, HUD, AI squad size, alarms, jammers, SAM launchers, time, weather, and World and Session settings",
      "2026 update overview through Last Rites, returning Predator content, 4K and 60 FPS support, PC controller support, free rewards, and free-update-versus-Definitive-Edition decisions",
    ],
  
    image:
      "/images/ghost-recon-wildlands/ghost-recon-wildlands-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 33,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Ghost Recon Wildlands Guide: Last Rites & Predator",
        href: "/ghost-recon-wildlands",
        type: "Guide Hub",
        description:
          "Start here for the 2026 returning-player route, Last Rites, Intel, the ending, Predator, Ghost Parameters, settings, and Definitive Edition decisions.",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Last Rites, progression Intel, ending explained, Predator, Ghost Parameters, 2026 settings, free update, and Definitive Edition",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Ghost Recon Wildlands Last Rites Walkthrough",
        href:
          "/ghost-recon-wildlands/last-rites-walkthrough",
        type: "Walkthrough",
        description:
          "Complete all six Last Rites missions, survive the Data Server upload, handle the drone and tripwire objectives, reach the old gold mine, and extract Ines Cortez.",
        date: "Updated recently",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-briefing-la-llorona.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 198,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "All six Last Rites missions, Data Server defense, drone eavesdrop, tripwires, old gold mine, terminate-to-exfiltrate change, and Ines extraction",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Ghost Recon Wildlands Last Rites Intel Locations",
        href:
          "/ghost-recon-wildlands/last-rites-intel-locations",
        type: "Guide",
        description:
          "Find every progression-critical Last Rites intel trigger, including the Unidad outpost, black site, Vargas evidence, hidden Data Server, cultist clues, and stronghold intel.",
        date: "Updated recently",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-unidad-outpost-intel.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 199,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Unidad outpost intel, black site, Victor Vargas evidence, hidden Data Server, drone cultist clue, high-level cultist, stronghold intel, and stuck progression",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Ghost Recon Wildlands Last Rites Ending Explained",
        href:
          "/ghost-recon-wildlands/last-rites-ending-explained",
        type: "Endings",
        description:
          "Understand who La Llorona really is, what happened to Ines Cortez, Emily Price's role, why the kill order becomes an extraction, and what the final debrief means.",
        date: "Updated recently",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-ines-price-confrontation.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 200,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Ines Cortez, La Llorona, Emily Price, CIA asset history, murdered children, martyr problem, exfiltration order, and final debrief",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Ghost Recon Wildlands Predator Mission Guide",
        href:
          "/ghost-recon-wildlands/predator-mission",
        type: "Bosses",
        description:
          "Start The Jungle Moved in Caimanes, finish all three investigation areas, fight Predator from hard cover, survive the self-destruct, and unlock the Predator Biomask.",
        date: "Updated recently",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-the-jungle-moved-caimanes.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 201,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "The Jungle Moved, Caimanes, three investigation areas, Thermal Vision, hard-cover boss strategy, Confirm Predator's death, self-destruct, and Biomask",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Ghost Recon Wildlands Ghost Parameters & Settings Guide",
        href:
          "/ghost-recon-wildlands/ghost-parameters",
        type: "Systems",
        description:
          "Choose Ghost Parameters, Difficulty, HUD and World settings for One Primary, Tactical Reload, revives, squad size, SAMs, alarms, jammers, time, weather, and survival.",
        date: "Updated recently",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-ghost-parameters-menu.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 202,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "One Primary Weapon, Tactical Reload, Revive, health regeneration, Difficulty, HUD, AI squad size, alarms, jammers, SAMs, time, weather, and World settings",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Ghost Recon Wildlands 2026 Update: What Changed",
        href:
          "/ghost-recon-wildlands/2026-update",
        type: "Guide",
        description:
          "See what changed in Wildlands in 2026, including Last Rites, Predator, gameplay customization, 4K and 60 FPS, free rewards, and the Definitive Edition difference.",
        date: "Updated recently",
        image:
          "/images/ghost-recon-wildlands/ghost-recon-wildlands-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 203,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Last Rites, Predator return, Ghost Parameters, Difficulty and HUD, 4K 60 FPS, PC controller support, free rewards, and free update vs Definitive Edition",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
    ],
  },
  {
    title: "Hell Let Loose: Vietnam",
    game: "Hell Let Loose: Vietnam",
    href: "/hell-let-loose-vietnam",
    slug: "hell-let-loose-vietnam",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "RPG, action, builds & combat",
    label: "50v50 Tactical Shooter",
    eyebrow: "Spotlight Hub",
    hubStatus: "First-match + faction systems + 49 achievements",
  
    description:
      "Use the Hell Let Loose: Vietnam guide hub to learn the first-match loop, fix bad spawn routes, understand NVA Tunnels and US helicopters, unlock leadership, build better loadouts, run USA Commander, and track all 49 achievements.",
  
    coverage: [
      "First-match route through Getting Started, Tactical Map habits, PC radio channels, first-role choices, useful spawn selection, objective play, and redeploy timing",
      "Outpost and Garrison decisions through squad versus team spawning, 50- and 100-supply Garrison costs, 200-meter spacing, territory restrictions, Specialist supply runs, and collapsed-network recovery",
      "Exact Connect a Tunnel to a Garrison Tutorial solution using the pre-placed E5 Tunnel, Tactical Map selection order, Garrison Fast Travel, and the later friendly-Tunnel dismantle step",
      "NVA Tunnel network planning through placement, connections, Fast Travel, five-link routing, distance limits, the five-minute placement cooldown, relay decisions, Enemy Near warnings, and dismantling",
      "US helicopter controls through pitch, roll, yaw, Collective, takeoff, landing, Transport and Supply jobs, Recon Flare use, co-pilot work, Auto-Level, and Helipad recovery",
      "Squad Leader and Commander unlock requirements through Getting Started, Squad Leader and Commander Tutorials, Requirements Not Met diagnosis, completion verification, and training-registration troubleshooting",
      "Role progression and loadout decisions through weapon and equipment unlocks, Utility and Lethal slots, weight limits, Medic progression, Machine Gunner equipment, and Tutorial-versus-live loadout differences",
      "USA Commander decision-making through Resource Nodes, defensive spawn redundancy, helicopter assignments, Commander Outpost use, 150-Munition Supply Drops, Recon, Reinforce, Napalm, Artillery, and backline Tunnel pressure",
      "All 49 achievements with an interactive checklist, four hidden achievements, one-match requirements, six map-win targets, four mode-win grinds, twelve Roles at Level 5, Career progression, Node builds, and final 100% cleanup",
    ],
  
    image:
      "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 32,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Hell Let Loose Vietnam Guide: Beginner, Tunnels & More",
        href: "/hell-let-loose-vietnam",
        type: "Guide Hub",
        description:
          "Start with the first-match route, then solve spawn problems, NVA Tunnels, US helicopters, leadership locks, progression, USA Commander play, and achievements.",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-tactical-map.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Beginner route, spawn network, NVA Tunnels, Tunnel Tutorial blocker, US helicopters, leadership unlocks, progression, USA Commander, and all 49 achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Beginner Guide: First Match Tips",
        href: "/hell-let-loose-vietnam/beginner-guide",
        type: "Beginner Guide",
        description:
          "Learn the first-match routine through Getting Started, radio controls, role choice, Tactical Map checks, useful spawns, objective play, and redeploy timing.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-tactical-map.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 189,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Getting Started, Tactical Map, C Unit Radio, V Proximity Chat, first infantry role, Medic support play, useful spawns, objectives, and redeploy timing",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Spawn, Garrison & Outpost Guide",
        href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
        type: "Systems",
        description:
          "Use Outposts and Garrisons correctly, understand supply costs and territory rules, check 200-meter spacing, and rebuild a collapsed spawn network.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-spawn-network-outpost-garrison.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 190,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Outpost vs Garrison, 0-supply OPs, 50-supply friendly Garrisons, 100-supply enemy Garrisons, 200m spacing, territory rules, Specialist supplies, and spawn recovery",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Connect Tunnel to Garrison Tutorial",
        href: "/hell-let-loose-vietnam/tutorial-connect-tunnel-garrison",
        type: "Puzzle Help",
        description:
          "Finish the Squad Leader Tutorial blocker by connecting the pre-placed E5 Tunnel to the Garrison from the Tactical Map, then continue through Fast Travel.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tutorial-connect-tunnel-garrison.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 191,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Connect a Tunnel to a Garrison, E5 pre-placed Tunnel, Tactical Map selection order, Tunnel first then Garrison, Fast Travel, and friendly Tunnel dismantle",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam NVA Tunnels Guide",
        href: "/hell-let-loose-vietnam/nva-tunnels-guide",
        type: "Systems",
        description:
          "Build and manage NVA Tunnel routes with placement rules, Tactical Map connections, Fast Travel, network limits, relay planning, cooldowns, and troubleshooting.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-network-live-map.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 192,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Tunnel placement, Tactical Map connections, Tunnel-to-Tunnel and Tunnel-to-Garrison routes, five connections, distance limits, 5-minute cooldown, Fast Travel, Enemy Near, and dismantling",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Helicopter Controls Guide",
        href: "/hell-let-loose-vietnam/helicopter-controls",
        type: "Systems",
        description:
          "Learn helicopter controls, Collective, takeoff and landing, Transport and Supply jobs, Recon Flare use, co-pilot tasks, Auto-Level, and Helipad recovery.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-helicopter-controls-keybinds.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 193,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Pitch, roll, yaw, Increase and Reduce Collective, takeoff, hover and landing, Supply Drop, Transport Helicopter, Recon Flare, Auto-Level, co-pilot, and Helipad",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Unlock Squad Leader & Commander",
        href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
        type: "Guide",
        description:
          "Fix Requirements Not Met for Squad Leader and Commander, confirm the required Basic Training Tutorials, and troubleshoot completed training that still appears locked.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-commander-training-requirements.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 194,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Squad Leader requires Getting Started plus Squad Leader Training; Commander requires Getting Started, Squad Leader and Commander Tutorials; Requirements Not Met and registration troubleshooting",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Progression & Loadouts Guide",
        href: "/hell-let-loose-vietnam/progression-loadouts",
        type: "Systems",
        description:
          "Understand Role Progression, weapon and equipment unlocks, slot expansion, loadout weight, Medic and Machine Gunner milestones, and missing Tutorial equipment.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-us-medic-progression.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 195,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Role Levels, weapon and equipment unlocks, Utility and Lethal slots, weight, US Medic progression, NVA Machine Gunner unlocks, Tutorial equipment, and loadout tradeoffs",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam USA Commander Guide & Abilities",
        href: "/hell-let-loose-vietnam/usa-commander-guide",
        type: "Guide",
        description:
          "Run USA Commander with better Resource Nodes, defensive spawns, helicopter assignments, Munitions spending, Commander Outpost use, and ability timing.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-usa-commander-layered-garrisons.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 196,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Resource Nodes, layered Garrisons, helicopter assignments, Tunnel pressure, Commander Outpost, 150-Munition Supply Drop, Recon, Reinforce, Napalm, Artillery, and defensive recovery",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "Hell Let Loose Vietnam Achievements: All 49 Checklist",
        href: "/hell-let-loose-vietnam/achievements",
        type: "Achievements",
        description:
          "Track all 49 achievements with an interactive checklist, clear the four hidden achievements, overlap map and mode wins, and finish the longest 100% grinds.",
        date: "Updated recently",
        image:
          "/images/hell-let-loose-vietnam/hell-let-loose-vietnam-achievements-progress.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 197,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Interactive 49-achievement checklist, four hidden achievements, Guardian Angel, pilot and one-match requirements, six 3-win maps, four 20-win modes, 12 Roles at Level 5, Nodes, and 100% cleanup",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
    ],
  },
  {
    title: "Servant of the Lake",
    game: "Servant of the Lake",
    href: "/servant-of-the-lake",
    slug: "servant-of-the-lake",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "Story, endings, horror & route locks",
    label: "Rusty Lake Puzzle Adventure",
    eyebrow: "Spotlight Hub",
    hubStatus: "24-task walkthrough + puzzles + 49-achievement tool",
  
    description:
      "Use the Servant of the Lake guide hub for the full 24-task Day 1–3 walkthrough, puzzle solutions, dedicated Coffee, Laundry, Bathroom and Alchemy guides, all 49 achievements with a hidden-achievement checklist, and the Secret Ending route.",
  
    coverage: [
      "Full 24-task progression from The Arrival through all Day 1, Day 2 and Day 3 duties to The Departure, with clear task handoffs and completion checkpoints",
      "Puzzle solutions for shorter blockers including Breakfast, flowers and flag, Waking up William, Cleaning the Floors, Cellar Time Pieces and tools, dinner preparation, serving rules, and other task-specific puzzles",
      "Waking up Aldous through the 7:00 alarm, Razor, shaving and earlobe sequence, Cloth, crow interaction, Berries, exercise route, dressing, and the final Day 1 morning checkpoint",
      "Preparing Coffee with Alexandra 3, Aldous 1 and William 5, code 315, Coffee Beans, Ground Coffee, serving Aldous, and the handoff to William",
      "Doing the Washing from dirty clothes and the baby's diaper through wet laundry, the seven-piece 0-to-6 clothesline order, Bathroom Key, and the transition into Helping with Bathing",
      "Helping with Bathing through the category puzzle, sliding puzzle, Scissors, Soap, stitches, Maggot, mouse, Comb, directional bubbles, code 281, pendant, and Alexandra's Bronze Time Piece",
      "Assisting in Alchemy through Left and Right symbols, cabinet code 2451, Egg, Oil, Acid, Blood, Strange Fruit, Juice, and the final Egg-first Elixir recipe",
      "All 49 achievements with an interactive checklist covering 24 story achievements, 24 task-linked hidden achievements, Notebook replay, hidden triggers, cleanup risk, and the You've found him! secret achievement",
      "Secret Ending route from Kate's post-game note and the 4:05 clock through the Bathroom clue, nine-step Alchemy maze, Attic constellation, bronze-silver-gold clue, secret chamber, Telescope, castle, and You've found him!",
    ],
  
    image:
      "/images/servant-of-the-lake/servant-of-the-lake-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 31,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Servant of the Lake Guide: Walkthrough, Puzzles & Achievements",
        href: "/servant-of-the-lake",
        type: "Guide Hub",
        description:
          "Start here for the Day 1–3 walkthrough, puzzle solutions, dedicated puzzle guides, the 49-achievement checklist, Secret Ending, and Rusty Lake: Roots connection.",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "24-task walkthrough, puzzle solutions, Coffee 315, Laundry 0–6, Bathroom 281, Alchemy 2451, 49-achievement checklist, hidden achievements, Secret Ending, and Roots connection",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Servant of the Lake Walkthrough: All 24 Tasks (Day 1–3)",
        href: "/servant-of-the-lake/walkthrough",
        type: "Walkthrough",
        description:
          "Follow all 24 main tasks from The Arrival to The Departure, with Day 1–3 routes, progression items, completion checkpoints, puzzle handoffs, and stuck fixes.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-1-arrival.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 180,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "All 24 Notebook tasks across Day 1–3, progression checkpoints, Aldous, William, Laundry, Bathroom, Cellar, Alchemy, dinner, The Departure, and post-game handoff",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title: "Servant of the Lake Puzzle Solutions & Codes",
        href: "/servant-of-the-lake/puzzle-solutions",
        type: "Puzzle Help",
        description:
          "Quickly solve Breakfast, flowers, flag, William, floor puzzles, Coffee, Laundry, Bathroom, Cellar, Alchemy, dinner, and other Day 1–3 blockers.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-coffee-315-code.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 181,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Breakfast, flowers, flag, William, floor puzzles, Coffee 315, Laundry 0–6, Bathroom 281, Cellar Time Pieces, Alchemy 2451, and dinner rules",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title: "Servant of the Lake Waking Up Aldous Guide",
        href: "/servant-of-the-lake/waking-up-aldous",
        type: "Puzzle Help",
        description:
          "Wake Aldous at 7:00, get the Razor, finish the shaving and earlobe chain, clean his ear, get the Berries, solve the exercise sequence, and dress him.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-aldous-clock-700.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 182,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "7:00 alarm, Razor, shaving, earlobe, Cloth, crow, Berries, Toy Soldier exercise sequence, dressing, and Day 1 morning completion",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title: "Servant of the Lake Coffee Puzzle: 315 Code & Beans",
        href: "/servant-of-the-lake/coffee-puzzle",
        type: "Puzzle Help",
        description:
          "Use Alexandra, Aldous and William's pointing clues to get 315, unlock the Coffee Beans, grind them, serve Aldous, and continue to William.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-coffee-315-code.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 183,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Alexandra 3, Aldous 1, William 5, Coffee code 315, Coffee Beans, Ground Coffee, serve Aldous first, and bring coffee to William",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title: "Servant of the Lake Laundry Puzzle: 0-6 Order & Key",
        href: "/servant-of-the-lake/laundry-puzzle",
        type: "Puzzle Help",
        description:
          "Collect and wash the dirty clothes and diaper, hang all seven pieces, arrange them from 0 to 6 line markings, and get the Bathroom Key.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-laundry-clothes-order.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 184,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Dirty clothes, baby and diaper, wet laundry, seven-piece clothesline, 0–6 line order, Bathroom Key, and Helping with Bathing handoff",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Servant of the Lake Bathroom Puzzle: 281 & Time Piece",
        href: "/servant-of-the-lake/bathroom-puzzle",
        type: "Puzzle Help",
        description:
          "Solve Alexandra's Bathroom chain through Scissors, Soap, Maggot, mouse, Comb, bubbles, code 281, pendant, and the Bronze Time Piece.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-bathroom-281-code.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 185,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Bathroom Key, category puzzle, sliding puzzle, Scissors, Soap, Maggot, mouse, Comb, bubbles, 281, pendant, and Bronze Time Piece",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Servant of the Lake Alchemy Puzzle: 2451 & Elixir",
        href: "/servant-of-the-lake/alchemy-puzzle",
        type: "Puzzle Help",
        description:
          "Use code 2451, decode Left and Right, make Egg, Oil, Acid, Blood, Strange Fruit and Juice, then mix the final Elixir in the correct order.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-alchemy-2451-code.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 186,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Left and Right symbols, cabinet code 2451, Egg, Oil, Acid, Blood, Strange Fruit, Juice, Elixir order, and Alchemy troubleshooting",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Servant of the Lake Achievements: All 49 & Hidden Guide",
        href: "/servant-of-the-lake/achievements",
        type: "Achievements",
        description:
          "Track all 49 achievements with an interactive checklist, clear the 24 task-linked hidden achievements through Notebook replay, and finish the You've found him! secret route.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-achievements-notebook.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 187,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Interactive 49-achievement checklist: 24 story achievements, 24 hidden task achievements, Notebook replay, Matcha Latte, A Perfect Hunt, Checking the Furniture, Finishing Touch, First Aid, and You've found him!",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title:
          "Servant of the Lake Secret Ending & You've Found Him",
        href: "/servant-of-the-lake/secret-ending",
        type: "Endings",
        description:
          "Follow Kate's post-game missing-brother route through 4:05, the Bathroom clue, Alchemy maze, Attic constellation, secret chamber, Telescope, castle, and You've found him!.",
        date: "Updated recently",
        image:
          "/images/servant-of-the-lake/servant-of-the-lake-secret-ending-405-clock.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 188,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Kate's note, five past four, 4:05 clock, Bathroom clue, nine-step maze, Attic constellation, bronze-silver-gold symbols, secret chamber, Telescope, castle, and You've found him!",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
    ],
  },
  {
    title: "War in the North: Legacy Edition",
    game: "The Lord of the Rings: War in the North - Legacy Edition",
    href: "/war-in-the-north-legacy-edition",
    slug: "war-in-the-north-legacy-edition",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "RPG, action, builds & combat",
    label: "Action RPG & Co-op Adventure",
    eyebrow: "Spotlight Hub",
    hubStatus: "Campaign + builds + 100% coverage",
  
    description:
      "Use the War in the North Legacy Edition guide hub for the full campaign walkthrough, Legacy changes, Eradan, Farin and Andriel builds, weapons and Mithril, Secrets, side quests, all seven Lidless Eye Scrolls, achievements, and co-op help.",
  
    coverage: [
      "Full campaign progression from Bree and Fornost through Sarn Ford, the Barrow-downs, Rivendell, the Ettenmoors, Mount Gundabad, Nordinbad, Mirkwood, the Grey Mountains, Carn Dûm, and the final Agandaûr battle",
      "Legacy Edition changes including seamless character hot-swapping, updated party Health, Mana and EXP information, refined target locking, autosave, modern co-op support, gyro controls, and current PC requirements",
      "Eradan, Farin and Andriel build decisions through Evasion, Sanctuary, War-cry, skill priorities, stat allocation, solo survival, respec timing, character switching, and harder-difficulty planning",
      "Weapons and Mithril decisions through sockets, jewels, species-specific damage, the tested 25,671 vs about 11,000 Orc damage comparison, weapon-versus-armor investment, Legendary gear, and vendor buying rules",
      "25-Secret route through Fornost, the Barrow-downs and Amon Gorthad, with Ranger caches, Farin walls, Andriel hidden routes, nested Secrets, later backup locations, and Seeker troubleshooting",
      "Side quests and missables from Bree through Fornost, Sarn Ford, Rivendell, Mount Gundabad, Nordinbad and Mirkwood, including Truesilver, Work of Westernesse, Athelas, Black Pearl, and Glorihirin",
      "All seven Cult of the Lidless Eye Scrolls in campaign order from the Fornost Battlements through the Ettenmoors, Mount Gundabad, Wulfrun, Urgost's Lair, and the final Elrond hand-in",
      "All 46 achievements with a three-clear Normal to Heroic to Legendary roadmap, single-playthrough counters, Secrets, quests, co-op requirements, missables, and Eagle Savior",
      "Online and split-screen co-op, Steam Remote Play Together, current crossplay status, host and client save precautions, joining problems, revives, and Fellowship coordination",
    ],
  
    image:
      "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 30,
      footerFeatured: true,
    },
  
    pages: [
      {
        title: "War in the North Legacy Edition Guide: Walkthrough & Builds",
        href: "/war-in-the-north-legacy-edition",
        type: "Guide Hub",
        description:
          "Start here for campaign progression, Legacy Edition changes, character builds, weapons and Mithril, Secrets, side quests, achievements, Scrolls, and co-op.",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-urgost-deal.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Walkthrough, Legacy changes, Eradan, Farin and Andriel builds, weapons, Mithril, 25 Secrets, side quests, seven Lidless Eye Scrolls, all 46 achievements, and co-op",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title: "War in the North Legacy Edition Walkthrough",
        href: "/war-in-the-north-legacy-edition/walkthrough",
        type: "Walkthrough",
        description:
          "Follow the campaign from Bree and Fornost through the Barrow-downs, Ettenmoors, Mount Gundabad, Mirkwood, Nordinbad, Carn Dûm, and Agandaûr.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-carn-dum-final-bridge.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 171,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Bree, Fornost, Sarn Ford, Barrow-downs, Rivendell, Bargrisar, Mount Gundabad, Wulfrun, Saenathra, Urgost, Nordinbad siege, Carn Dûm, and Agandaûr",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title: "War in the North Legacy Edition Changes: What's New",
        href: "/war-in-the-north-legacy-edition/legacy-edition-changes",
        type: "Guide",
        description:
          "See what changed from the original game, including character hot-swapping, updated party UI, refined target lock, autosave, co-op, gyro, and PC changes.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-party-hud-bars.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 172,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Seamless hot-swap, updated party Health Mana EXP UI, refined target locking, autosave, bug fixes, online and split-screen co-op, gyro, PC requirements, and old-guide checks",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title: "War in the North Legacy Edition Best Character & Builds",
        href: "/war-in-the-north-legacy-edition/best-character-builds",
        type: "Builds",
        description:
          "Compare Eradan, Farin, and Andriel for solo play, then build around Evasion, Sanctuary, War-cry, stat priorities, respec timing, and harder difficulties.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-andriel-sanctuary.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 173,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Eradan vs Farin vs Andriel, Evasion, Sanctuary, War-cry, Heavy Shot, stat priorities, character switching, respec timing, solo survival, and harder difficulties",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title: "War in the North Legacy Edition Weapons & Mithril Guide",
        href: "/war-in-the-north-legacy-edition/weapons-mithril-upgrades",
        type: "Systems",
        description:
          "Choose weapons, sockets, jewels and species bonuses, compare Mithril with sockets, decide between weapons and armor, and avoid wasting upgrades.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-andriel-staff-two-sockets.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 174,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Mithril unlock, weapon vs armor, sockets, 6 vs 8 Mithril upgrades, 25,671 vs about 11,000 damage test, Orc bonuses, Legendary gear, vendors, and upgrade priorities",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title: "War in the North Legacy Edition Secrets: 25-Secret Route",
        href: "/war-in-the-north-legacy-edition/secrets",
        type: "Collectibles",
        description:
          "Find 25 Secrets through Fornost, the Barrow-downs, and Amon Gorthad, then use later backup locations if an early Secret fails to register.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-nested-secret.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 175,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "15 Fornost Secrets, 9 Barrow-downs Secrets, Amon Gorthad 25th Secret, Ranger caches, Farin walls, Andriel routes, nested Secrets, backups, and Seeker troubleshooting",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title: "War in the North Legacy Edition Side Quests & Missables",
        href: "/war-in-the-north-legacy-edition/side-quests",
        type: "Guide",
        description:
          "Complete side quests in campaign order, keep the right quest items, know when to return to each hub, and avoid missing late hand-ins.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-truesilver-mithril-return.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 176,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Rowlie's Gift, Otto's Arsenal, Work of Westernesse, Seer's Words, Athelas, Last Sons of Cardolan, The Poet, Truesilver, Black Pearl, and Glorihirin",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title: "War in the North Legacy Edition Lidless Eye Scroll Locations",
        href: "/war-in-the-north-legacy-edition/lidless-eye-scrolls",
        type: "Collectibles",
        description:
          "Find all seven Cult of the Lidless Eye Scrolls in campaign order from Fornost through Urgost's Lair and finish the investigation with Elrond.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-1-fornost.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 177,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Seven Lidless Eye Scrolls: Fornost, Coldfells, High Moors, Mount Gundabad, Wulfrun, Urgost's Lair, Carn Dûm Captain, and final Elrond hand-in",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title: "War in the North Legacy Edition Achievements: 100% Roadmap",
        href: "/war-in-the-north-legacy-edition/achievements",
        type: "Achievements",
        description:
          "Get all 46 achievements with a Normal to Heroic to Legendary route, single-playthrough counters, missables, Secrets, co-op, and Eagle Savior.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-agandaur-final-battle.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 178,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "All 46 achievements, Normal Heroic Legendary clears, NG+ carryover, single-playthrough counters, 25 Secrets, 15 quests, co-op, missables, and Eagle Savior",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title: "War in the North Legacy Edition Co-op & Crossplay Guide",
        href: "/war-in-the-north-legacy-edition/co-op-crossplay-troubleshooting",
        type: "Guide",
        description:
          "Set up online or split-screen co-op, understand Remote Play Together and current crossplay status, test saves, and troubleshoot multiplayer progress.",
        date: "Updated recently",
        image:
          "/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-revive-companion.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 179,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Three-player Fellowship, online co-op, split-screen, Steam Remote Play Together, crossplay status, host and client saves, reconnect testing, revives, and Sanctuary",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
    ],
  },
  {
    title: "Doloc Town",
    game: "Doloc Town",
    href: "/doloc-town",
    slug: "doloc-town",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "Cozy, crafting, survival & systems",
    label: "Post-Apocalyptic Farming RPG",
    eyebrow: "Spotlight Hub",
    hubStatus: "Progression + farm systems + completion coverage",

    description:
      "Use the Doloc Town guide hub for main-story progression, Environmental Modifier repair, money decisions, crop profit, acid rain, automation, genetics, fishing, fish breeding, livestock, and all 80 achievements.",

    coverage: [
      "Main-story progression from the opening farm through River Valley, Guild and Jetpack unlocks, the Treaty Port night meeting, Copper Pickaxe gate, Environmental Modifier handoff, Wetlands, Old City Ruins, and later story stages",
      "Environmental Modifier troubleshooting from the Core Extractor and Core Sample through Small Batteries, rear-panel circuit repair, Phase 1 activation, and the handoff back into regional progression",
      "Farm economy decisions with early Gold protection, 500G and 4,000G bag upgrades, 1,500G Copper Pickaxe budgeting, sell-versus-recycle choices, broke recovery, and the Best Crops and Profit Calculator",
      "Crop survival and scale through Acid Rain, End Crops, Plastic Mulch, Weather Station planning, sprinklers, generators, power storage, Automation Workbench, Drone Stations, Farming Drones, and specialized drones",
      "Late farm systems through Gene 101, Gene Activation Chamber, Archive Attic, Gene Capsules, cloning, multi-gene synthesis, livestock sheds, feeding, breeding, manure, and expansion decisions",
      "Fishing from Light Man's free Old Fishing Rod through cast and meter controls, rod upgrades, weather and water clues, Salmon Fest, Fish Tanks, roe, parent ratios, rare variants, and Abundant Collection",
      "All 80 achievements with hidden triggers, story milestones, long counters, faction and relationship cleanup, festival goals, automation targets, and a practical 100% completion order",
    ],

    image: "/images/doloc-town/doloc-town-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,

    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 29,
      footerFeatured: true,
    },

    pages: [
      {
        title: "Doloc Town Guide: Walkthrough, Farming, Fishing & More",
        href: "/doloc-town",
        type: "Guide Hub",
        description:
          "Start here to choose the right Doloc Town guide for progression, money, crops, weather, automation, genetics, fishing, livestock, and achievement cleanup.",
        image: "/images/doloc-town/doloc-town-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Walkthrough, Environmental Modifier, money, crop calculator, Acid Rain, automation, genetics, fishing, fish breeding, livestock, and all 80 achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },

      {
        title: "Doloc Town Walkthrough: Main Story & Progression Guide",
        href: "/doloc-town/walkthrough",
        type: "Walkthrough",
        description:
          "Follow the main story from the starting farm through River Valley, Treaty Port, the Environmental Modifier, Wetlands, Old City, and late progression handoffs.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-river-valley-jetpack-double-jump.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 160,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Starting farm, River Valley, Guild, Jetpack, Treaty Port 6–10 PM meeting, Copper Pickaxe, Environmental Modifier handoff, Wetlands, and Old City",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },

      {
        title: "Doloc Town Environmental Modifier Guide",
        href: "/doloc-town/environmental-modifier",
        type: "Systems",
        description:
          "Find the Core Extractor, bring back the Core Sample, build the correct Small Batteries, repair the rear circuit, troubleshoot the terminal, and activate Phase 1.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-environmental-modifier-machine.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 161,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Core Extractor, Core Sample, Environmental Modifier, 2 Small Batteries, 5 Electric Wires, rear-panel repair, troubleshooting, and 30 Energy Phase 1",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },

      {
        title: "Doloc Town Money Guide: Gold, Spending & Early Priorities",
        href: "/doloc-town/money-guide",
        type: "Guide",
        description:
          "Protect early Gold, time bag upgrades, stack side quests, save for progression tools, choose between selling and recycling, and recover after overspending.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-money-first-bag-upgrade-500g.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 162,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "100G mixed seed gamble, 500G first bag, side-quest income, 1,500G Copper Pickaxe reserve, sell vs recycle, 4,000G bag, and broke recovery",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },

      {
        title: "Doloc Town Best Crops & Profit Calculator",
        href: "/doloc-town/best-crops",
        type: "Systems",
        description:
          "Compare Doloc Town crops by climate, genes, sell method, profit per day, profit per tile, growth time, seed cost, and direct versus processed value.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-seed-shop-early-crops.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 163,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Interactive crop calculator with climate, genes, crop type, direct or processed sale, profit per day, profit per tile, growth time, and seed cost",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },

      {
        title: "Doloc Town Acid Rain: Crop Protection & Weather Guide",
        href: "/doloc-town/acid-rain",
        type: "Guide",
        description:
          "Protect crops with End Crops, two-day Plastic Mulch, Weather Station forecasts, indoor growing, and practical decisions for severe weather.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-acid-rain-warning.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 164,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Acid Rain, End Crops, two-day Plastic Mulch, Weather Station, Light and Heavy Rain, Early and Harsh Dry periods, indoor crops, and exposed equipment",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },

      {
        title: "Doloc Town Farming Automation Guide",
        href: "/doloc-town/farming-automation",
        type: "Systems",
        description:
          "Automate farming with sprinklers, generators, power storage, Rubber, the Automation Workbench, Drone Stations, Farming Drones, and specialized drones.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-manual-to-automatic-sprinkler.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 165,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Manual and Automatic Sprinklers, Simple Generator, power storage, Rubber, Automation Workbench, Basic Drone, Drone Stations, Farming Drone, and large-scale automation",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },

      {
        title: "Doloc Town Crop Genetics Guide",
        href: "/doloc-town/crop-genetics",
        type: "Systems",
        description:
          "Progress from the Gene Activation Chamber and Archive Attic to Gene Capsules, cloning, Gene Synthesizer, multi-gene crops, backups, and troubleshooting.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-achievements-gene-activation-chamber.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 166,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Gene 101, Gene Activation Chamber, latent genes, Archive Attic, Gene Capsules, duplication, Gene Synthesizer, three-gene crops, and Seed Compressor backups",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },

      {
        title: "Doloc Town Fishing Guide: Rods, Controls & Rare Fish",
        href: "/doloc-town/fishing-guide",
        type: "Guide",
        description:
          "Take Light Man's free Old Fishing Rod, learn cast and meter controls, upgrade rods only when needed, use weather and water clues, and prepare for Salmon Fest.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-fishing-controls-cast-and-lift.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 167,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Old Fishing Rod, cast distance, lift timing, hold and release meter control, yellow bonus windows, rod upgrades, RNG, weather fish, Salmon Fest, and rare catches",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },

      {
        title: "Doloc Town Fish Breeding: Variants, Roe & Tank Guide",
        href: "/doloc-town/fish-breeding",
        type: "Systems",
        description:
          "Breed fish variants with Fish Tanks, roe, fry, parent ratios, Salmon Fest stock, Large Fish Tanks, advanced chains, and the Abundant Collection route.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-fish-breeding-fish-tank-tech.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 168,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Fish Tank, Fish Incubator, roe and fry, Blackback Sardine, small-tank ratios, Large Fish Tank, Koi, Shiny Golden Fish, and Abundant Collection",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },

      {
        title: "Doloc Town Animals: Livestock, Feeding & Breeding Guide",
        href: "/doloc-town/animals",
        type: "Guide",
        description:
          "Unlock the Small Livestock Shed, build a reliable feeding loop, raise the first Stilttail Pheasant, save the first Egg, breed animals, and expand safely.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-livestock-shed-materials.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 169,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Small Livestock Shed, Feeding Trough, Alfalfa, Stilttail Pheasant, first Egg, animal prices, Breeding Room, Animal Toilet, manure, and Noah's Ark planning",
        },
        archive: {
          showInCollections: true,
          order: 11,
        },
      },

      {
        title: "Doloc Town Achievements: Hidden, Rare & 100% Guide",
        href: "/doloc-town/achievements",
        type: "Achievements",
        description:
          "Track all 80 achievements with hidden triggers, rare goals, story milestones, fishing, genes, factions, festivals, automation, and a practical 100% cleanup order.",
        date: "Updated recently",
        image:
          "/images/doloc-town/doloc-town-achievements-trash-bin.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 170,
          spotlightFeature: true,
          spotlightOrder: 11,
          spotlightMeta:
            "All 80 achievements, hidden actions, trash and Lank, exploration secrets, fishing and farm counters, genetics, factions, festivals, automation, and 100% cleanup",
        },
        archive: {
          showInCollections: true,
          order: 12,
        },
      },
    ],
  },
  {
    title: "Pax Autocratica",
    game: "Pax Autocratica",
    href: "/pax-autocratica",
    slug: "pax-autocratica",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Colony Sim & FPS Roguelite",
    eyebrow: "Spotlight Hub",
    hubStatus: "Early game to Elysia clear coverage",
  
    description:
      "Follow the Pax Autocratica guide hub from the first 4 Titanite and Command Center repair through Elysia progression, Capture Rounds, prisoners, working hours, Core builds, and MEC-KONG 7X.",
  
    coverage: [
      "Opening route from 4 Titanite and the Command Center repair through Barracks research, first weapon transfer, A20, first expedition, Resource Transport Station timing, and bottleneck-based research decisions",
      "Elysia progression through Expedition Progress, Enemy Strength, return timing, 100% progress, both Decisive Battles, the final blockade, sector overlord, and post-Elysia army preparation",
      "Capture Rounds with F and hold-F controls, displayed Capture Rate, lower-health and higher-quality capture bonuses, target selection, Prison research, captive storage, capacity, Willpower, Convictions, Indoctrination, and Electroshock",
      "Work Schedule troubleshooting through Victory Square, Unified Labor research, Directives, Daily working hours, Issue Directive, tested 20-hour and 15-hour schedules, 24h Paid Time Off, and worker-shortage diagnosis",
      "Core Fragment decisions with Weapon Core terminology, Nebula Assault Rifle, Electric Bouncer, Missile Core, duplicate upgrades, Extended Magazine, Power Reload, return-to-base resets, and Core Seeds",
      "MEC-KONG 7X boss preparation with Lv.10 identification, Laser Rifle use, sustained Gatling pressure, Critical Health recovery, grenade openings, Second Chance, and the final Elysia victory",
    ],
  
    image:
      "/images/pax-autocratica/pax-autocratica-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 28,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Pax Autocratica Beginner Guide & Early-Game Walkthrough",
        href: "/pax-autocratica",
        type: "Guide Hub",
        description:
          "Start with 4 Titanite, repair the Command Center, research the Barracks, equip the first weapon, launch the first expedition, and let real colony bottlenecks decide what to build next.",
        image:
          "/images/pax-autocratica/pax-autocratica-first-elysia-expedition.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "4 Titanite, Command Center, Barracks, first weapon, A20, first expedition, Resource Transport Station, research priorities, and early colony bottlenecks",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Pax Autocratica Elysia Walkthrough & Progression Guide",
        href: "/pax-autocratica/elysia-walkthrough",
        type: "Walkthrough",
        description:
          "Progress through Elysia with safer return timing, Expedition Progress and Enemy Strength decisions, both Decisive Battles, the final blockade, and the sector clear.",
        date: "Updated recently",
        image:
          "/images/pax-autocratica/pax-autocratica-return-to-base-100-percent.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 155,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "First expedition, Expedition Progress, Enemy Strength, Return to Base at 100%, first and second Decisive Battles, blockade, MEC-KONG 7X, and Elysia secured",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Pax Autocratica Capture Enemies & Prisoners Guide",
        href: "/pax-autocratica/capture-enemies-prisoners",
        type: "Systems",
        description:
          "Use Capture Rounds, improve Capture Rate, choose worthwhile targets, manage Prison capacity and captive storage, then convert prisoners into useful colony workers.",
        date: "Updated recently",
        image:
          "/images/pax-autocratica/pax-autocratica-capture-rounds-tutorial.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 156,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Capture Rounds, F controls, Capture Rate, target health, stronger enemies, Prison blueprint, captive storage, Willpower, Convictions, Indoctrination, and Electroshock",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Pax Autocratica Work Schedule & Overworked Soldiers Guide",
        href: "/pax-autocratica/work-schedule",
        type: "Systems",
        description:
          "Unlock Unified Labor, change Daily working hours, recover exhausted soldiers with Paid Time Off, and tell an unsustainable schedule from a real worker shortage.",
        date: "Updated recently",
        image:
          "/images/pax-autocratica/pax-autocratica-20-hour-workday.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 157,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Victory Square, Unified Labor, Directives, Daily working hours, Issue Directive, 20-hour and 15-hour schedules, 24h Paid Time Off, Exhausted soldiers, and labor shortages",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Pax Autocratica Core Fragments & Weapon Cores Guide",
        href: "/pax-autocratica/core-fragments",
        type: "Builds",
        description:
          "Choose Core Fragments around your current weapon, stack useful duplicate upgrades, compare tested effects, understand resets, and use Core Seeds for future runs.",
        date: "Updated recently",
        image:
          "/images/pax-autocratica/pax-autocratica-core-fragment-storage-pod.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 158,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Core Fragments, Weapon Cores, Nebula Assault Rifle, Electric Bouncer, Missile Core, duplicate upgrades, Extended Magazine, Power Reload, resets, and Core Seeds",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Pax Autocratica MEC-KONG 7X Boss Guide",
        href: "/pax-autocratica/mec-kong-boss-guide",
        type: "Bosses",
        description:
          "Beat MEC-KONG 7X by managing Gatling pressure, healing before another burst becomes lethal, using grenade openings, and keeping the build that already carried the run.",
        date: "Updated recently",
        image:
          "/images/pax-autocratica/pax-autocratica-mec-kong-gatling-gun.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 159,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "MEC-KONG 7X Lv.10, final Elysia fight, Laser Rifle, Gatling pressure, 4/314 Critical Health, healing, grenades, Second Chance, and Boss Victory",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
    ],
  },
  {
    title: "Sovereign Tower",
    game: "Sovereign Tower",
    href: "/sovereign-tower",
    slug: "sovereign-tower",
    kind: "game",
    status: "active",
    accent: "purple",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Fantasy Kingdom Management",
    eyebrow: "Spotlight Hub",
    hubStatus: "Act 1–3 routes + timeline coverage",
  
    description:
      "Follow the Sovereign Tower guide hub through Act 1 and Act 2 routing, Demon Power rewinds, Knight questlines, county alliances, King Slayer, the Golden Key, and major timeline decisions.",
  
    coverage: [
      "Act 1 first-clear routing through early Gold management, Groveshire versus Gavault, county-alliance timing, Dragon Knight preparation objectives, final-party setup, and the Act 1 Demon checkpoint",
      "Demon Power rewind rules, retained Knight knowledge, event markers, changed audiences, failed-loop diagnosis, Before murder timing, Act locks, and now-or-never checkpoints",
      "Gwendan's 350 Gold debt, Tower murder investigation, inconsistent evidence, occult influence, dismissal before the murder, victim survival, Map Room recall, and True Noble Soul progression",
      "Groveshire beast investigation through the Black Forest, Angelica's Wolf resolution, county alliance, Good Boy, the human curse reveal, cure decision, Sir Rufus transformation, and Wolf Habits",
      "Act 2 scheduling around the eight-slot Round Table, Clovermont, the Tower murder, Gideon recruitment, South Bay, temporary Knight absences, five-circle King Slayer pressure, and the final Act checkpoint",
      "South Bay Wish-Granting Lamp route through the Tower Library, Djinn Island, stolen Lamp, auction recovery, Yannis survival, Ligia recruitment, plus the alternate political-instability alliance route",
      "King Slayer preparation from the five-circle warning through late emergencies, final resolution choices, four-Knight purification, 2–5 Damage Risk, Glass Blade, Spectral Eye, and the Act 2 rewind checkpoint",
      "Golden Key progression from Angelica's clue and zero-risk search assignment through obtaining the relic, the Emperor's peace offer, the 13-cycle refusal route, and give-or-keep planning",
    ],
    image:
      "/images/sovereign-tower/sovereign-tower-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 27,
      footerFeatured: true,
    },
  
    pages: [
      {
        title:
          "Sovereign Tower Guide: Walkthrough, Rewind, Knights & Routes",
        href: "/sovereign-tower",
        type: "Guide Hub",
        description:
          "Start here for Act routes, Demon Power, Knight planning, Gwendan, Wolf and Rufus, South Bay, King Slayer, the Golden Key, and the major decisions that shape each timeline.",
        image:
          "/images/sovereign-tower/sovereign-tower-act-2-round-table-eight-slots.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Act 1 and Act 2 routes, Demon Power, Knight planning, Groveshire, Gwendan, Wolf and Rufus, South Bay, King Slayer, Golden Key, and timeline checkpoints",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title:
          "Sovereign Tower Act 1 Best Route & Dragon Knight Guide",
        href: "/sovereign-tower/act-1-best-route",
        type: "Walkthrough",
        description:
          "Choose Groveshire or Gavault, protect early Gold, secure an allied county, prioritize the Dragon Knight objectives, and stop at the Act 1 point of no return.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-act-1-dragon-knight-objectives.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 139,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Groveshire vs Gavault, early Gold, allied county, Merchant 10, Noble 8, 400 Gold, Dragon Knight preparation, final party, and Act 1 checkpoint",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title:
          "Sovereign Tower Demon Power Guide: Rewind & Timeline Rules",
        href: "/sovereign-tower/demon-power",
        type: "Systems",
        description:
          "Learn what Demon Power keeps, how to choose a rewind point, why outcomes can repeat, how event markers work, and when an older Act becomes inaccessible.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-demon-power-cycle-selector.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 140,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Rewind rules, retained Knight knowledge, cycle selector, Before murder markers, changed audiences, failed rewinds, Act locks, and now-or-never checkpoints",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title:
          "Sovereign Tower Gwendan Guide: Murder, Debt & True Noble Soul",
        href: "/sovereign-tower/gwendan-questline",
        type: "Guide",
        description:
          "Handle Gwendan's 350 Gold debt, investigate the Tower murder, confront the inconsistent evidence, prevent the killing, dismiss him safely, and continue his personal route.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-gwendan-inconsistent-evidence.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 141,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "350 Gold debt, Tower murder, inconsistent evidence, occult whispers, Before murder intervention, temporary dismissal, victim survival, recall, and True Noble Soul",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title:
          "Sovereign Tower Wolf Guide: Curse, Rufus & Good Boy",
        href: "/sovereign-tower/groveshire-wolf",
        type: "Guide",
        description:
          "Solve the Groveshire beast route, use Angelica to recruit the Wolf, unlock Good Boy, reveal the human curse, choose whether to cure it, and continue as Sir Rufus.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-wolf-joins-round-table.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 142,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Black Forest, Beast is a Wolf, Angelica, Groveshire alliance, Wolf recruitment, Good Boy, curse reveal, cure choice, Sir Rufus, and Wolf Habits",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title:
          "Sovereign Tower Act 2 Walkthrough: Murder to King Slayer",
        href: "/sovereign-tower/act-2-walkthrough",
        type: "Walkthrough",
        description:
          "Plan Act 2 around the eight-slot Round Table, Tower murder, Gideon, South Bay, the Wolf-to-Rufus transition, King Slayer's five circles, and the final Demon checkpoint.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-act-2-round-table-eight-slots.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 143,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Eight-slot Round Table, Clovermont, Tower murder, Gwendan intervention, Gideon, South Bay scheduling, Wolf-to-Rufus absence, five circles, final resolution, and Act 2 checkpoint",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title:
          "Sovereign Tower South Bay Lamp Guide: Yannis & Ligia",
        href: "/sovereign-tower/south-bay-lamp",
        type: "Walkthrough",
        description:
          "Find the Wish-Granting Lamp through the Tower Library, Djinn Island and auction, save Yannis for the clean route, or recover South Bay after his death.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-south-bay-wish-granting-lamp.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 144,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Ligia, three-cycle investigation, Tower Library, Djinn Island, stolen Lamp, auction, Yannis survival, South Bay alliance, political instability, and Ligia recruitment",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title:
          "Sovereign Tower King Slayer: Purification, Glass Blade & Eye",
        href: "/sovereign-tower/king-slayer",
        type: "Bosses",
        description:
          "Handle the five-circle countdown, compare the final King Slayer resolutions, prepare the four-Knight purification route, manage 2–5 Damage Risk, and earn the Spectral Eye.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-king-slayer-purification-choice.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 145,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Five-circle countdown, sorceress support, late emergencies, final resolution choice, four-Knight purification, 2–5 Damage Risk, Glass Blade, Spectral Eye, and Act 2 lock",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title:
          "Sovereign Tower Golden Key: How to Get It & Emperor Choice",
        href: "/sovereign-tower/golden-key",
        type: "Guide",
        description:
          "Follow Angelica's clue to the Golden Key, complete the zero-risk search assignment, obtain the relic, and decide whether to give it to the Emperor or keep expanding.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-golden-key-obtained.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 146,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Angelica clue, mysterious manor, Search for the golden key, zero Damage Risk, Spectral Eye, Golden Key obtained, Emperor peace offer, and 13 cycles until ruin",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
      {
        title:
          "Sovereign Tower Act 3 Walkthrough & Golden Key Route",
        href: "/sovereign-tower/act-3-walkthrough",
        type: "Walkthrough",
        description:
          "Progress through Act 3 after King Slayer, manage the Golden Key and Emperor route, prioritize late-game decisions, and prepare for the final timeline outcomes.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-golden-key-thirteen-cycle-warning.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 147,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Act 3 progression, Golden Key timing, Emperor route, remaining-cycle pressure, late Knight and county decisions, final preparation, and timeline checkpoints",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
      
      {
        title:
          "Sovereign Tower Endings Guide: Choices & Final Routes",
        href: "/sovereign-tower/endings",
        type: "Endings",
        description:
          "Compare Sovereign Tower ending routes, understand the late choices that lead to each outcome, and use Demon Power when you need to return for another ending.",
        date: "Updated recently",
        image:
          "/images/sovereign-tower/sovereign-tower-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 148,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Major endings, late-game choices, Golden Key consequences, final route requirements, outcome cleanup, and Demon Power rewind planning",
        },
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
    ],
  },
  {
    title: "Iron Nest",
    game: "Iron Nest",
    href: "/iron-nest",
    slug: "iron-nest",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Heavy Artillery Simulator",
    eyebrow: "Spotlight Hub",
    hubStatus: "Full campaign + fire-control tool + all endings",
  
    description:
      "Follow the complete Iron Nest guide from Calibration Fire and triangulation through all 15 campaign missions, with an interactive Fire Mission Helper for position reports, target location, firing solutions, and all four White Shells endings.",
  
    coverage: [
      "Core operating loop from teleprinter orders and target location through bearing, range, powder charges, elevation, loading, turret rotation, firing, confirmation, and bad-shot recovery",
      "Triangulation with spotter bearings, bearing-and-distance intersections, chained reference points, Position Reports, firing-origin recovery, and the difference between observation bearings and turret bearings",
      "Interactive Fire Mission Helper with Find My Position, Locate Target, and Fire Solution modes for combining reports and converting confirmed coordinates into bearing, range, powder charges, and elevation",
      "Missions 2–7: Fire and Light, Liberation, Counter-Battery, Iron Road, Siege of Cartagena, and The Gorge, including Star Shell corrections, AP targets, train interception, Emergency Move, Smoke support, and manual observed fire",
      "Missions 8–10: Rock of Gibraltar, Dead Reckoning, and Fire on Call, covering HMS Rockingham, moving-vessel interception, Tear Shell reveals, hidden targets, War Horn timing, live support calls, and danger-close fire",
      "Missions 11–14: High Tide, Blind Fire, Phantom Battery, and Final Harvest, including multiple moving landing craft, chained blind-fire geometry, mobile counter-battery threats, listening posts, train timing, and live support",
      "Mission 15 White Shells with PRPG, chemical and Atomic routes, The Road Not Taken betrayal sequence, all four ending achievements, plus Challenge Mode fundamentals",
    ],
  
    image: "/images/iron-nest/iron-nest-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 26,
      footerFeatured: true,
    },
  
    pages: [
      {
        title: "Iron Nest Guide: Missions, Triangulation & Shells",
        href: "/iron-nest",
        type: "Guide Hub",
        description:
          "Use the complete campaign directory, Fire Mission Helper, shared firing loop, triangulation, shell decisions, troubleshooting, and all four endings.",
        image: "/images/iron-nest/iron-nest-demo-protocol.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Complete campaign hub with Missions 1–15, the Fire Mission Helper, triangulation, firing solutions, shells, moving targets, counter-battery fire, troubleshooting, and all four endings",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title: "IRON NEST Fire Mission Helper & Triangulation Calculator",
        href: "/iron-nest/fire-mission-helper",
        type: "Systems",
        description:
          "Recover the Iron Nest position from reports, locate targets from bearing or distance data, then calculate bearing, range, powder charges, and elevation.",
        date: "New",
        image:
          "/images/iron-nest/iron-nest-fire-mission-helper-ui.webp",
        imageFit: "contain",
        imagePosition: "center",
        imagePadding: true,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 253,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Interactive Find My Position, Locate Target, and Fire Solution helper for Position Reports, triangulation, bearing, range, powder charges, and elevation",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "How to Triangulate in Iron Nest",
        href: "/iron-nest/how-to-triangulate",
        type: "Systems",
        description:
          "Use spotter bearings, distance constraints, chained references, intersections, and Position Reports without confusing observation bearings with turret bearings.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-fire-and-light-opening-triangulation.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 130,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Spotter bearings, bearing origins, distance constraints, intersections, chained references, Position Reports, firing-origin recovery, and triangulation troubleshooting",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title: "Iron Nest Fire and Light Walkthrough",
        href: "/iron-nest/fire-and-light-walkthrough",
        type: "Walkthrough",
        description:
          "Triangulate the opening target, clear the follow-up hostile pair, switch to Star Shells, apply the observer correction, and complete Mission 2.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-fire-and-light-star-shell-correction.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 124,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Mission 2 with two-spotter triangulation, opening H shot, follow-up hostiles, palace illumination, Star Shell correction, and Starburst confirmed",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title: "Iron Nest Liberation Walkthrough",
        href: "/iron-nest/liberation-walkthrough",
        type: "Walkthrough",
        description:
          "Replace the firing origin, clear the opening infantry, complete P4 reconnaissance, destroy the AP-only cache, and protect nearby friendlies.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-liberation-underground-cache-ap-solution.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 125,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Mission 3 with repositioning, three opening infantry, P4 reconnaissance, underground AP cache, final urban targets, and friendly-fire decisions",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title: "Iron Nest Counter-Battery Walkthrough",
        href: "/iron-nest/counter-battery-mission",
        type: "Walkthrough",
        description:
          "Pre-calculate the opening artillery positions, manage the Counter-Battery Timer, use both guns efficiently, and locate the fresh battery.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-counter-battery-timer-extended.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 126,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Mission 4 with three opening artillery positions, two-gun preload, first-impact CBT trigger, timer extensions, fresh reconnaissance, and final cleanup",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title: "Iron Nest Iron Road Walkthrough",
        href: "/iron-nest/iron-road-walkthrough",
        type: "Walkthrough",
        description:
          "Build future train waypoints, subtract shell flight time, destroy both AP emplacements, protect the allied route, and time the War Horn.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-iron-road-train-firing-solution.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 127,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Mission 5 with train timetable, future waypoints, shell flight time, two AP emplacements, optional targets, allied route, and War Horn timing",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title: "Iron Nest Siege of Cartagena Walkthrough",
        href: "/iron-nest/siege-of-cartagena-walkthrough",
        type: "Walkthrough",
        description:
          "Solve the chained installations, destroy both coastal batteries, recover after Emergency Move, clear the breakout threshold, and answer Smoke calls.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-siege-of-cartagena-breakout-success.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 128,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Mission 6 with signal station, assembly area, Field Command, coastal batteries, Emergency Move, Position Reports, War Horn, Smoke, and breakout",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title: "Iron Nest The Gorge Walkthrough",
        href: "/iron-nest/the-gorge-walkthrough",
        type: "Walkthrough",
        description:
          "Restart the damaged Nest, scout east, operate without the ballistic calculator, correct manual shots, protect the convoy, and clear the pass.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-the-gorge-pass-clear.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 129,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Mission 7 with engine restart, unavailable ballistic calculator, eastbound reconnaissance, manual ranging, impact corrections, convoy safety, and pass clear",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title: "Iron Nest Rock of Gibraltar Walkthrough",
        href: "/iron-nest/rock-of-gibraltar-walkthrough",
        type: "Walkthrough",
        description:
          "Locate HMS Rockingham without aerial reconnaissance, wait until 11:08, use AP, then optionally calculate the moving-vessel interception.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-rockingham-ap-solution.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 131,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Mission 8 with The Mole, Dockmaster's House, HMS Rockingham, 11:08 restriction, Forward Observer decisions, AP firing solution, and optional moving vessel",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title: "Iron Nest Dead Reckoning Walkthrough",
        href: "/iron-nest/dead-reckoning-walkthrough",
        type: "Walkthrough",
        description:
          "Reveal hidden targets with Tear Shells, clear the three primary positions, solve the late Field Command correction, and time the War Horn.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-dead-reckoning-tear-shell-reveal.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 132,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Mission 9 with Tear Shell reveals, hidden positions, first primary targets, late Field Command correction, shell choice, War Horn, and optional cleanup",
        },
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
  
      {
        title: "Iron Nest Fire on Call Walkthrough",
        href: "/iron-nest/fire-on-call-walkthrough",
        type: "Walkthrough",
        description:
          "Answer timed frontline support calls with Tear, H and Smoke, move friendlies out of danger, and use precise AP fire for danger-close targets.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-fire-on-call-danger-close-ap.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 133,
          spotlightFeature: true,
          spotlightOrder: 11,
          spotlightMeta:
            "Mission 10 with War Horn preparation, live support calls, Tear-then-H sequences, Smoke repositioning, support deadlines, danger-close AP, and stand-down",
        },
        archive: {
          showInCollections: true,
          order: 12,
        },
      },
  
      {
        title: "Iron Nest High Tide Walkthrough",
        href: "/iron-nest/high-tide-walkthrough",
        type: "Walkthrough",
        description:
          "Track multiple landing craft, calculate moving AP intercepts, manage both guns, fall back toward the beach when necessary, and hold until 07:14.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-high-tide-first-intercept-solution.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 134,
          spotlightFeature: true,
          spotlightOrder: 12,
          spotlightMeta:
            "Mission 11 with multiple landing craft, future intercepts, AP launch timing, dual-gun target queues, beach fallback, and the 07:14 survival objective",
        },
        archive: {
          showInCollections: true,
          order: 13,
        },
      },
  
      {
        title: "Iron Nest Blind Fire Walkthrough",
        href: "/iron-nest/blind-fire-walkthrough",
        type: "Walkthrough",
        description:
          "Build Alpha and Bravo, locate all four AA batteries, manage chained positional error, and fire without normal reconnaissance or impact imagery.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-blind-fire-reference-alpha.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 135,
          spotlightFeature: true,
          spotlightOrder: 13,
          spotlightMeta:
            "Mission 12 with reconnaissance blackout, Reference Alpha, AA Batteries 1–2, Reference Bravo, Batteries 3–4, chained error, shell tolerance, and Forward Observer decisions",
        },
        archive: {
          showInCollections: true,
          order: 14,
        },
      },
  
      {
        title: "Iron Nest Phantom Battery Walkthrough",
        href: "/iron-nest/phantom-battery-walkthrough",
        type: "Walkthrough",
        description:
          "Restart and relocate Iron Nest, recover your firing origin, use listening posts, gain +90s CBT from enemy spotters, and destroy the mobile battery.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-phantom-battery-listening-post-intersection.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 136,
          spotlightFeature: true,
          spotlightOrder: 14,
          spotlightMeta:
            "Mission 13 with engine restart, Emergency Move, Position Reports, listening-post triangulation, AP targets, enemy spotter +90s extensions, and mobile battery tracking",
        },
        archive: {
          showInCollections: true,
          order: 15,
        },
      },
  
      {
        title: "Iron Nest Final Harvest Walkthrough",
        href: "/iron-nest/final-harvest-walkthrough",
        type: "Walkthrough",
        description:
          "Time the train intercept, pre-plan static targets, manage counter-battery fire, answer live support calls, watch powder, and stop when the objective is complete.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-final-harvest-train-schedule.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 137,
          spotlightFeature: true,
          spotlightOrder: 15,
          spotlightMeta:
            "Mission 14 with train schedule and launch timing, Reference Alpha, Fire Direction Centers, AA battery, counter-battery phase, live H support, powder management, and stand-down",
        },
        archive: {
          showInCollections: true,
          order: 16,
        },
      },
  
      {
        title: "Iron Nest White Shells Endings Guide",
        href: "/iron-nest/white-shells-endings",
        type: "Endings",
        description:
          "Unlock all four White Shells endings through PRPG, chemical submission, Atomic destruction, or The Road Not Taken betrayal route.",
        date: "Updated recently",
        image:
          "/images/iron-nest/iron-nest-white-shells-road-not-taken-ending.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 138,
          spotlightFeature: true,
          spotlightOrder: 16,
          spotlightMeta:
            "Mission 15 and all four endings: A City in Celebration, A City Subdued, A City Silent, The Road Not Taken, betrayal preparation, retaliation priorities, and achievements",
        },
        archive: {
          showInCollections: true,
          order: 17,
        },
      },
    ],
  },
  {
    title: "Fields of Mistria",
    game: "Fields of Mistria",
    href: "/fields-of-mistria",
    slug: "fields-of-mistria",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "Cozy, crafting, survival & systems",
    label: "Cozy Farming RPG",
    eyebrow: "Spotlight Hub",
    hubStatus: "Mines-to-Marriage coverage",
    description:
      "Follow the Fields of Mistria 1.0 guide hub from Stone Star and the Mines through the Water Seal, Deep Woods, Saturday Market Plaza, Bell Tower, marriage, and all 69 achievements.",
    coverage: [
      "Early progression from the Museum meeting and Renown farming through Stone Star, the Mines reopening, first Bag Upgrade, ladder access, and the Floor 5 elevator checkpoint",
      "Floor 20 Water Tablet route, Eiland and Juniper translation, Ruby, Stone Loach, Lantern Moth, Upper Mines Mushroom, active-inventory checks, and Summon Rain",
      "Fire Seal and Dragon's Breath progression, Eastern Road barrier, Deep Woods navigation, Caldarus temple, shrine teleport, Hardwood, and the Deep Woods Forage Set",
      "Gold Star Plaza expansion, all five construction materials, Voidite and monster-drop farming routes, Donation Box hand-in, Stillwell missions, and Zorel's music shop",
      "Bell Tower repair route, Dragon-Forged Core and Fang recipes, Ancient Firefly, Void Herbs, Void Stone, Monster Cores, Crystal Resonator, and bell selection",
      "Dating and marriage from Eight Hearts and 10 Hearts through Elsie's Engagement Ring recipe, proposal confirmation, wedding date, planning choices, outfits, ceremony, and I do",
      "All 69 achievements in one-save order, including Town Ranks, seals, repairs, relationships, skills, economy, Museum sets, Stillwell missions, marriage, and family goals",
    ],
    image:
      "/images/fields-of-mistria/fields-of-mistria-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 25,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Fields of Mistria Guide Hub",
        href: "/fields-of-mistria",
        type: "Guide Hub",
        description:
          "Start here for the progression route from Stone Star and the Mines through seals, Deep Woods, Saturday Market Plaza, Bell Tower, marriage, and achievement cleanup.",
        image:
          "/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-complete.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Stone Star, Mines, Water Seal, later seals, Deep Woods, Saturday Market Plaza, Bell Tower, marriage, and all 69 achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "How to Unlock the Mines in Fields of Mistria",
        href: "/fields-of-mistria/how-to-unlock-mines",
        type: "Walkthrough",
        description:
          "Reach Stone Star, trigger the Mine reopening meeting, prepare the first descent, enter by ladder, and secure the Floor 5 elevator checkpoint.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-mines-reopening.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 117,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Museum meeting, Renown, Stone Star, reopening letter, Mine entrance, Bag Upgrade, collapsed shaft, ladder access, and Floor 5",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Fields of Mistria Water Seal Guide",
        href: "/fields-of-mistria/water-seal-guide",
        type: "Puzzle Help",
        description:
          "Find the Floor 20 Water Tablet, complete Eiland and Juniper's translation route, collect all four offerings, open the seal, and unlock Summon Rain.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-water-seal-opened.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 118,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Floor 20 tablet, Water Tablet Rubbing, Eiland, Juniper, Ruby, Stone Loach, Lantern Moth, Upper Mines Mushroom, altar, and Summon Rain",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "How to Unlock the Deep Woods in Fields of Mistria",
        href: "/fields-of-mistria/how-to-unlock-deep-woods",
        type: "Walkthrough",
        description:
          "Complete the Fire Seal, unlock Dragon's Breath, burn the Eastern Road barrier, follow the forest route to Caldarus, and activate the Deep Woods teleport.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-deep-woods-eastern-road-route.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 119,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Fire Seal, Dragon's Breath, Eastern Road entrance, magical barrier, lower-right route, grave-marker landmark, Caldarus, teleport, and Hardwood",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Fields of Mistria Saturday Market Plaza Guide",
        href: "/fields-of-mistria/saturday-market-plaza",
        type: "Guide",
        description:
          "Reach Gold Star, gather all five Plaza materials, use the tested Mine farming routes, report to Adeline, and unlock Stillwell and Zorel.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-complete.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 120,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Gold Star, Nora's letter, Manor House meeting, Voidite, Refined Stone, Mistril Ingots, Monster Cores, Monster Blocks, Adeline, Stillwell, and Zorel",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "Fields of Mistria Bell Tower Guide",
        href: "/fields-of-mistria/bell-tower-guide",
        type: "Walkthrough",
        description:
          "Start Zorel's Bell Tower quest, craft the Dragon-Forged Core and Fang, finish the Donation Box, select a bell sound, and unlock Ringing Ovation.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-bell-tower-repaired.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 121,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Zorel's letter, Adeline and Landen, Refined Stone, Hardwood, Dragon-Forged Core, Dragon-Forged Fang, Ancient Firefly, Void materials, and bell sounds",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
      {
        title: "Fields of Mistria Marriage Guide",
        href: "/fields-of-mistria/marriage-guide",
        type: "Guide",
        description:
          "Reach 10 Hearts while Dating, receive Elsie's Engagement Ring recipe, propose, choose a wedding date, complete the planning conversations, and get married.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-marriage-ceremony.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 122,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Dating, 10 Hearts, Elsie's recipe, Engagement Ring, proposal confirmation, other relationships, wedding date, flowers, cake, meal, outfits, ceremony, and I do",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
      {
        title: "Fields of Mistria Achievements Guide",
        href: "/fields-of-mistria/achievements-guide",
        type: "Achievements",
        description:
          "Track all 69 achievements with a one-save roadmap for Town Ranks, seals, repairs, relationships, skills, economy, Museum sets, Stillwell, marriage, and family goals.",
        date: "Updated recently",
        image:
          "/images/fields-of-mistria/fields-of-mistria-stone-star-rank.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 123,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "All 69 achievements, old-save unlocks, Town Ranks, seals, repairs, relationships, marriage, skills, money, ranching, Museum sets, Stillwell, Parent, and Time Flies",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
    ],
  },
  {
    title: "Big Walk",
    game: "Big Walk",
    href: "/big-walk",
    slug: "big-walk",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Co-op Puzzle Adventure",
    eyebrow: "Spotlight Hub",
    hubStatus: "Tutorial-to-Big-Game coverage",
  
    description:
      "Follow the Big Walk guide hub from the tutorial and Map Room through the Chairlift, Tunnel, Train, Black Tower, puzzle solutions, Big Goodbye, Purple Puzzles, Shiny, achievements, and Big Game.",
  
    coverage: [
      "First-session planning, player-count world versions, Host saves, proximity voice, Lost and Found, equipment priorities, Train Station staging, and return-or-leave decisions",
      "Four opening Heads, glass enclosure, symbol room, simultaneous switches, blank key, four cutters, drawbridge activation, and key-fits-but-does-not-work fixes",
      "Five-Head Red Tower route, Red Key cutters, Map Room entry, completion flags, portable map, Compass, Laser Pointers, and route planning",
      "Five-Head Green Tower route, Train Station Head cache, Green Key cutters, Chairlift activation, Big Sit, and the upper route toward Yellow",
      "Yellow Tower and Tunnel progression, Blue Tower and Train progression, Big Tunnel, Big Ride, and the late-game handoff toward Black Tower",
      "Black Tower location, synchronized trigger, vision sequence, completion requirement, Black Key, Wall route, and the handoff into the final Black Sphere",
      "Standard puzzle solutions for the communication room, timed maze, basketball, projectile relay, five-pose telescope, Green Path order, counting symbols, and blindfold panels",
      "Dedicated Peg Puzzle and 4166 / 1899 solutions covering terrain reconstruction, missing colored pieces, map coordinates, hidden button, and remote glass-box reward",
      "Optional Shiny route through the underground colored tunnels, multicolor bridge, red zigzag stairs, hidden Shiny location, and Big Makeover",
      "Black Sphere, Wave Goodbye, Big Goodbye, seven post-game Purple Puzzles, remaining normal-puzzle cleanup, final key, hidden completion room, Big Game, and all 12 achievement triggers",
    ],
  
    image: "/images/big-walk/big-walk-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
  
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 24,
      footerFeatured: true,
    },
  
    pages: [
      {
        title: "Big Walk Walkthrough and Guide",
        href: "/big-walk",
        type: "Guide Hub",
        description:
          "Start here for the full Big Walk progression route from the tutorial and Map Room through the Chairlift, Tunnel, Train, Black Tower, Big Goodbye, Purple cleanup, and Big Game.",
        image:
          "/images/big-walk/big-walk-map-room-completion-flags.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Tutorial, Red Tower, Map Room, Chairlift, Tunnel, Train, Black Tower, Black Sphere, Big Goodbye, Purple Puzzles, and Big Game",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
  
      {
        title: "Big Walk Beginner Guide",
        href: "/big-walk/beginner-guide",
        type: "Beginner Guide",
        description:
          "Choose the right player-count version, organize equipment, use Lost and Found, stage items at the Train Station, and know when to return Heads or end the session.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-player-count-version-selection.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 108,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Player-count worlds, Host saves, communication checks, carry priority, Train Station staging, Backpack use, return thresholds, and Lost and Found",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
  
      {
        title: "Big Walk Tutorial and Drawbridge Walkthrough",
        href: "/big-walk/tutorial-walkthrough",
        type: "Walkthrough",
        description:
          "Find all four tutorial Heads, solve the glass, symbol, and switch rooms, shape the blank key through four cutters, and open the drawbridge.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-drawbridge-open.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 109,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Four tutorial Heads, glass enclosure, symbol communication, simultaneous switches, blank key, four cutters, drawbridge, and stuck-key fixes",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
  
      {
        title: "Big Walk Red Tower and Map Room Guide",
        href: "/big-walk/how-to-unlock-map",
        type: "Walkthrough",
        description:
          "Reach Red Tower, return five Heads, finish the Red Key cutters, open the Map Room, and use completion flags, the portable map, Compass, and Laser Pointers.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-red-tower-blinking-light-route.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 110,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Red beacon route, five-slot receiver, Head returns, Red Key cutters, Map Room, completion flags, portable map, Compass, and Laser Pointers",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
  
      {
        title: "Big Walk Green Tower and Chairlift Guide",
        href: "/big-walk/green-tower-walkthrough",
        type: "Walkthrough",
        description:
          "Use the Train Station as a Head cache, complete the five-Head Green route, finish the Green Key cutters, activate the Chairlift, and unlock Big Sit.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-green-tower-five-heads-complete.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 112,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Green receiver, Train Station cache, carrying plan, Green Key cutters, Chairlift activation, Big Sit, and the upper route toward Yellow",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
  
      {
        title: "Big Walk Yellow Tower and Tunnel Guide",
        href: "/big-walk/yellow-tower-tunnel",
        type: "Walkthrough",
        description:
          "Reach Yellow from the Green Chairlift route, return five Heads, finish the Yellow Key cutters, open the underground Tunnel, and unlock Big Tunnel.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-yellow-tunnel-door-open.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 114,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "Green Chairlift approach, Yellow receiver, challenge route, Yellow Key cutters, underground Tunnel, Big Tunnel, and the route toward Blue",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
  
      {
        title: "Big Walk Blue Tower and Train Guide",
        href: "/big-walk/blue-tower-train",
        type: "Walkthrough",
        description:
          "Complete the Blue Tower route, return five Heads, find the easy-to-miss key cutter, activate the Train loop, and unlock Big Ride.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-blue-train-activated.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 115,
          spotlightFeature: true,
          spotlightOrder: 8,
          spotlightMeta:
            "Blue receiver, puzzle roles, Blue Key cutters, cutter under the rock, Train activation, moving carriage, Big Ride, and late-game handoff",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
  
      {
        title: "Big Walk Black Tower and Black Key Guide",
        href: "/big-walk/black-tower",
        type: "Walkthrough",
        description:
          "Find the Black Tower, trigger its vision, finish the current progression requirement, get the Black Key, and use it to open the Wall.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-black-tower-monolith-location.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 150,
          spotlightFeature: true,
          spotlightOrder: 13,
          spotlightMeta:
            "Black Tower location, synchronized trigger, vision sequence, progression requirement, Black Key, Wall slot, gate opening, and ending handoff",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
  
      {
        title: "Big Walk Endings Guide",
        href: "/big-walk/ending-guide",
        type: "Endings",
        description:
          "Finish the Black Sphere for Big Goodbye, then complete full puzzle cleanup, make the final key appear, enter the hidden room, and unlock Big Game.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-big-game-completion-message.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 116,
          spotlightFeature: true,
          spotlightOrder: 9,
          spotlightMeta:
            "Black Sphere, final mechanism, Wave Goodbye, Big Goodbye, full-completion checks, final key, hidden room, white exit, and Big Game",
        },
        archive: {
          showInCollections: true,
          order: 9,
        },
      },
  
      {
        title: "Big Walk Purple Puzzles Guide",
        href: "/big-walk/purple-puzzles",
        type: "Puzzle Help",
        description:
          "Solve all seven post-game Purple Puzzles, including the 30-minute timer, Golf Course object, light room, music, matching, symbols, and Purple Flagpole.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-purple-light-number-system.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 151,
          spotlightFeature: true,
          spotlightOrder: 14,
          spotlightMeta:
            "Seven post-game Purple Puzzles, 30-minute timer, Golf Course object, light signals, music, nine-object matching, fixed symbols, and Purple Flagpole",
        },
        archive: {
          showInCollections: true,
          order: 10,
        },
      },
  
      {
        title: "Big Walk Puzzle Solutions",
        href: "/big-walk/puzzles",
        type: "Puzzle Help",
        description:
          "Solve the communication room, timed maze, basketball, projectile relay, five-pose telescope, Green Path, counting-symbol, and blindfold puzzles.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-green-path-order-complete.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 111,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Communication room, timed maze, basketball, projectile relay, five-pose telescope, Green Path order, counting symbols, blindfold panels, and puzzle fixes",
        },
        archive: {
          showInCollections: true,
          order: 11,
        },
      },
  
      {
        title: "Big Walk Peg Puzzle Solution",
        href: "/big-walk/peg-puzzle",
        type: "Puzzle Help",
        description:
          "Find every colored piece, use the surrounding landscape as the answer key, rebuild the Pegboard, locate missing pieces, and validate the finished puzzle.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-peg-puzzle-solved.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 147,
          spotlightFeature: true,
          spotlightOrder: 10,
          spotlightMeta:
            "Colored Pegboard, loose pieces, terrain clues, aqueduct and tree alignment, last-piece search, completed layout, and validation fixes",
        },
        archive: {
          showInCollections: true,
          order: 12,
        },
      },
  
      {
        title: "Big Walk 4166 1899 Puzzle Solution",
        href: "/big-walk/4166-1899-puzzle",
        type: "Puzzle Help",
        description:
          "Read 4166 and 1899 as map coordinates, reach the target area, find the hidden camouflage-box button, and remotely open the glass box.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-4166-1899-coordinate-board.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 148,
          spotlightFeature: true,
          spotlightOrder: 11,
          spotlightMeta:
            "4166 / 1899 coordinates, Map Room navigation, 41.66 / 18.99 target, green structure landmark, hidden button, and two-player glass-box solution",
        },
        archive: {
          showInCollections: true,
          order: 13,
        },
      },
  
      {
        title: "Big Walk How to Get Shiny",
        href: "/big-walk/how-to-get-shiny",
        type: "Walkthrough",
        description:
          "Follow the underground route through the Blue entrance, green pipe, colored tunnels, multicolor bridge, and red stairs to get Shiny and unlock Big Makeover.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-shiny-secret-location.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 149,
          spotlightFeature: true,
          spotlightOrder: 12,
          spotlightMeta:
            "Yellow progression prerequisite, Blue tunnel entrance, green pipe, mixed-color route, green tunnels, multicolor bridge, red stairs, Shiny, and Big Makeover",
        },
        archive: {
          showInCollections: true,
          order: 14,
        },
      },
  
      {
        title: "Big Walk Achievements Guide",
        href: "/big-walk/achievements",
        type: "Achievements",
        description:
          "Track all 12 achievements by their exact trigger and fix unlock problems for Backpack, Map Room, Chairlift, Tunnel, Train, Wall, endings, and Shiny.",
        date: "Updated recently",
        image:
          "/images/big-walk/big-walk-hip-belt-map.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 113,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "All 12 achievement triggers, Backpack, Map Room, hip belt, Chairlift, highest point, Tunnel, Train, Wall, Big Goodbye, Big Game, and Big Makeover",
        },
        archive: {
          showInCollections: true,
          order: 15,
        },
      },
    ],
  },
  {
    title: "IDLE_DIRECTIVE",
    game: "IDLE_DIRECTIVE",
    href: "/idle-directive",
    slug: "idle-directive",
    kind: "game",
    status: "active",
    accent: "cyan",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Incremental Automation",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the IDLE_DIRECTIVE guide hub from the first Scavenge and Navigation repair through Spires, Prestige, Traders, Labs, Blueprints, automation, Terminals, layouts, and all 43 achievements.",
    coverage: [
      "Fresh-start progression from Diagnostics, Scanners and Scavenge through Recycler repair, Navigation, Mobility, the first Spire, Signal Decryption, Traders, Labs, Blueprints, the Replicator, and Terminal progression",
      "Four-point and 26-point first Prestige routes, System Reset losses, Signal Decryption, Tasks, Auto Explore, Repair Speed, repair rewards, the 40-point Replicator unlock, Reactor decisions, and later Augment spending",
      "Spinner and Repeater contact, Biogenerator and Biocell fuel, Collector, Grabber, Salvager and Harvester roles, automated Metal and Biomass chains, storage bottlenecks, Taskmasters, and Auto Explore settings",
      "Post-reset bootstrap, Concentrator and Energy Cell cluster, Power Amplifier harvesting wing, stationary dual-resource base, Battery placement, storage placement, expansion space, and rebuild decisions",
      "All 43 achievements, including 50 million installed Energy Capacity, 300% Energy Efficiency, item level 250, exploration, travel, repairs, Trader Reputation, Omega, Directive Complete, and Launch",
    ],
    image:
      "/images/idle-directive/idle-directive-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 23,
      footerFeatured: true,
    },
    pages: [
      {
        title: "IDLE_DIRECTIVE Guide Hub",
        href: "/idle-directive",
        type: "Guide Hub",
        description:
          "Start here for the complete route from the first Scavenge and Navigation repair through Spires, Prestige, Trader Tasks, Labs, Blueprints, the Replicator, and Terminals.",
        image:
          "/images/idle-directive/idle-directive-spire-decrypt-trader-locations.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Fresh start, Recycler, Navigation, Mobility, Spires, Prestige, Traders, Tasks, Labs, Blueprints, Replicator, Terminals, automation, layouts, and achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "IDLE_DIRECTIVE First Prestige & Best Augments",
        href: "/idle-directive/first-prestige-best-augments",
        type: "Systems",
        description:
          "Compare four-point and 26-point first Prestiges, understand what System Reset removes, prioritize Signal Decryption, Tasks and Auto Explore, and plan later Augments.",
        date: "Updated recently",
        image:
          "/images/idle-directive/idle-directive-first-prestige-reset-summary.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 104,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Four-point and 26-point resets, Reset losses, Signal Decryption, Tasks, Auto Explore, Repair Speed, repair rewards, Replicator timing, Reactors, and later Prestiges",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "IDLE_DIRECTIVE Automation & Machines Guide",
        href: "/idle-directive/automation-machines-guide",
        type: "Systems",
        description:
          "Fix machine connections, automate Metal and Biomass, diagnose storage bottlenecks, use the Replicator and Taskmasters, and configure Auto Explore safely.",
        date: "Updated recently",
        image:
          "/images/idle-directive/idle-directive-scrap-furnace-metal-chain.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 105,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Spinner and Repeater, Biogenerator and Biocell, collection machines, Scrap-to-Metal, Carcass-to-Biomass, storage, amplifiers, Replicator, Taskmasters, and Auto Explore",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "IDLE_DIRECTIVE Layout Examples",
        href: "/idle-directive/layout-examples",
        type: "Systems",
        description:
          "Use four working Body Grid layouts for post-reset power, Concentrator Energy Cells, amplified harvesting, and stationary Metal and Biomass automation.",
        date: "Updated recently",
        image:
          "/images/idle-directive/idle-directive-power-amplifier-harvester-layout.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 106,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Post-reset bootstrap, Concentrator cluster, Power Amplifier harvesting wing, dual-resource base, Batteries, storage, expansion space, and rebuild signals",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "IDLE_DIRECTIVE Achievements Guide",
        href: "/idle-directive/achievements-guide",
        type: "Achievements",
        description:
          "Complete all 43 IDLE_DIRECTIVE achievements, including 50 million Energy Capacity, 300% Efficiency, level 250, Trader Reputation, Omega, Terminals, and Launch.",
        date: "Updated recently",
        image:
          "/images/idle-directive/idle-directive-achievements-overview-14-of-43.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 107,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "All 43 achievements, installed Energy Capacity, 300% Efficiency, item level 250, exploration, travel, repairs, Traders, Omega, Directive Complete, and Launch",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
    ],
  },
  {
    title: "Quasimorph",
    game: "Quasimorph",
    href: "/quasimorph",
    slug: "quasimorph",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "RPG, action, builds & combat",
    label: "Turn-Based Extraction RPG",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Quasimorph 1.0 guide hub from the tutorial and first contracts through loot priority, wounds and infection, Quasimorphosis, Magnum upgrades, faction barter, and the verified opening RealWare storyline.",
    coverage: [
      "Stable early-campaign route from the tutorial and first Conveyor through replaceable loadouts, nearby contract selection, objective-first extraction, post-mission unloading, and buy-wait-turn-back decisions",
      "Contract cards, Beneficiary and Victim choices, travel and expiration checks, Difficulty, Floors, Power Concentration, mission objectives, random events, and the decision to take, wait, change side, or leave the board",
      "Mission items, production and mercenary mind chips, Magnum components, common-material caps, weapon and armour comparisons, dismantling, barter goods, full-backpack decisions, and extraction timing",
      "Health Monitor triage, Stealth-Walk-Run restrictions, Bandages and Splints, Rag and Plastic emergency stabilization, infection risk, Auto-Doc limits, medical loadouts, and wounded-route extraction decisions",
      "Conveyor, Monitoring, Scanner, Capsule, Scavengers, Recycling, Clone Rank, Engineering, late branches, verified upgrade values, and a bottleneck-based Magnum purchase order",
      "Quasimorphosis meter decisions, Ecolapse timing, phasing enemies, resistance checks, Baron fights, post-Baron danger, and the verified RealWare opening from the AnCom data choice through the Palace Asteroid EMP Scorcher objective",
    ],
    image:
      "/images/quasimorph/quasimorph-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 22,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Quasimorph Guide Hub",
        href: "/quasimorph",
        type: "Guide Hub",
        description:
          "Start here for the stable campaign loop, contract and extraction priorities, barter and faction decisions, opening story choice, and the correct focused guide for the problem blocking the current run.",
        image:
          "/images/quasimorph/quasimorph-quasimorphosis-grasp-152.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Stable campaign loop, contracts, loot, wounds, Quasimorphosis, Magnum upgrades, barter, factions, story choice, and buy-wait-turn-back rules",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "Quasimorph Beginner Guide",
        href: "/quasimorph/beginner-guide",
        type: "Beginner Guide",
        description:
          "Finish the tutorial, unload the first operator, install the Conveyor, build a replaceable loadout, use Stealth, Walk and Run correctly, complete the objective first, and reset the Magnum after extraction.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-first-mission-operator-class-loadout.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 97,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Tutorial unload, Conveyor, first destination, replaceable operator loadout, Stealth-Walk-Run, Health and Quasimorphosis checks, objective-first route, and post-extraction reset",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Quasimorph Contracts Guide",
        href: "/quasimorph/contracts-guide",
        type: "Systems",
        description:
          "Read Beneficiary, Victim, Reward, travel, Time remains, Difficulty, Floors, Power Concentration and objectives, then decide when to take, wait, change side or skip the contract.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-ancom-espionage-venus-contract.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 98,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Beneficiary and Victim, travel, expiration, Difficulty, Floors, Power Concentration, objective text, random events, bad boards, and take-wait-turn-back decisions",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "Quasimorph Loot Priority Guide",
        href: "/quasimorph/loot-priority",
        type: "Systems",
        description:
          "Decide what to keep, drop, dismantle, trade or extract first, from mission items and permanent chips to Magnum components, weapons, armour and capped common materials.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-production-chip-shuttle-priority.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 99,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Objective slots, production and mind chips, Magnum components, material caps, weapon and armour checks, dismantling, barter, full backpacks, and extraction timing",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Quasimorph Wounds & Infection Guide",
        href: "/quasimorph/wounds-infection-medicine",
        type: "Systems",
        description:
          "Read the Health Monitor, leave Run before treatment, use Bandages, Splints, Rags and Plastic correctly, manage infection risk, check Auto-Docs, and know when to extract.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-autodoc-heal-60-hp-five-batteries.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 100,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Health Monitor, body-part injuries, Pain, movement restrictions, Bandages, Splints, eight-turn Rag and Plastic stabilization, infection risk, Auto-Docs, and extraction",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "Quasimorph Ship Upgrades Guide",
        href: "/quasimorph/ship-upgrades",
        type: "Systems",
        description:
          "Choose the next Magnum upgrade by the current bottleneck, from Conveyor, Monitoring and Scanner to Capsule, Scavengers, Clone Rank, Engineering and specialized late branches.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-monitoring-upgrade-tree.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 101,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Conveyor, Monitoring charges and Reload, Scanner floors, Capsule slots and charges, Scavengers, Clone Rank, Engineering, late branches, and buy-wait-turn-back rules",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
      {
        title: "Quasimorphosis, Ecolapse & Barons Guide",
        href: "/quasimorph/quasimorphosis-guide",
        type: "Systems",
        description:
          "Read the Quasimorphosis meter, prepare for Ecolapse, avoid wasting attacks on phasing enemies, check Baron resistances, survive the kill, and decide whether to continue or extract.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-quasimorphosis-grasp-152.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 102,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Quasimorphosis thresholds, Ecolapse, first-turn invulnerability, phasing enemies, resistance checks, Baron fights, post-Baron danger, and continue-or-extract decisions",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
      {
        title: "How to Start the RealWare Storyline",
        href: "/quasimorph/start-realware-storyline",
        type: "Walkthrough",
        description:
          "Give the opening AnCom data to RealWare, wait for contact, find the correct AnCom Espionage contract, hack the PCPU, and prepare for the Palace Asteroid EMP Scorcher objective.",
        date: "Updated recently",
        image:
          "/images/quasimorph/quasimorph-realware-emp-scorcher-objective.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 103,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "AnCom PCPU recipient choice, RealWare waiting period, matching Espionage contract, PCPU hack, Palace Asteroid, EMP Scorcher, Covert Operations, and go-or-wait preparation",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
    ],
  },

  {
  title: "Waterpark Simulator",
  game: "Waterpark Simulator",
  href: "/waterpark-simulator",
  slug: "waterpark-simulator",
  kind: "game",
  status: "active",
  accent: "cyan",
  archiveCategory: "Strategy, simulation, puzzle & discovery",
  label: "Waterpark Management Sim",
  eyebrow: "Spotlight Hub",
  hubStatus: "Tutorial-to-Diamond + systems coverage",

  description:
    "Follow the Waterpark Simulator 1.0 guide hub from the Hard Mode Beach Map tutorial through four stars, then continue into five stars and Diamond with focused guides for Research, Satisfaction, money, staff, Museum quests, Mafia, Custom Slides, and all 71 achievements.",

  coverage: [
    "Continuous Hard Mode Beach Map route from the tutorial through four stars, including first-star objectives, daily operating loops, Park Size gates, Museum timing, the Ocean Prestige gate, guest capacity, Chlorine, and buy-wait-turn-back decisions",

    "Five-star and Diamond progression from the $500,000 cumulative earnings and two 4-Prestige Slide requirements through five stars, $1,000,000 cumulative earnings, a 6-Prestige Wonder Attraction, Research bottlenecks, layout rebuilding, and the final Diamond trigger",

    "Closing-time Research Point route, cleaning and repair actions, the Modern Toilets and Mop Upgrade chain into Chlorine, ticket and vending priorities, Hiring Level Up, Park Size, and staff competing for maintenance work",

    "Satisfaction diagnosis from a 60% failure to a 94% day with 103 guests, including empty pools, waiting for service, dirty water, trash, showers, overcrowding, decoration, and one-day recovery testing",

    "Hard Mode cash flow, construction losses versus operating losses, early reserves, attraction upgrades, tickets, tips, Poster Marketing, vending machines, Night Shift, staff costs, no-build test days, and expansion rules",

    "Ticket Worker, Janitor, Maintenance, Vendor, Restocker, Security, Entertainer and Mascot decisions, candidate stats, assignments, breaks, Hiring Level, Staff Overflow, idle-worker fixes, and a tested six-worker core",

    "Goldie, Poseidon, Yogi and Aztec Museum routes, Pirate, Ocean and Wellness rewards, star gates, themed construction costs, manual quest conflicts, and the late Museum branch toward a Wonder Attraction",

    "Mafia decision route covering the tested $750 offer and later $7,500 settlement demand, refusal, sabotage warnings, crew attacks, catching Mafia, damaged attractions, and recovery priorities",

    "Custom Slides from the Research unlock and editor through landing-first planning, short test routes, uphill sections, long routes, overshoots, segment costs, Advanced Custom Slides, and build troubleshooting",

    "All 71 achievements with Beach and City Map milestones, Hard Mode, Diamond, Yogi, Security, Custom Slides, Zipline, long cleaning and sales counters, and an efficient 100% cleanup route",
  ],

  image:
    "/images/waterpark-simulator/waterpark-simulator-hub.webp",
  imageFit: "cover",
  imagePosition: "center",
  imagePadding: false,

  home: {
    featuredHub: true,
    featuredHubSpotlight: true,
    featuredHubOrder: 21,
    footerFeatured: true,
  },

  pages: [
    {
      title: "Waterpark Simulator Guide Hub",
      href: "/waterpark-simulator",
      type: "Guide Hub",
      description:
        "Start here for the Hard Mode Beach Map route from the tutorial through four stars, then use focused guides for five stars, Diamond, Research, money, staff, Museum quests and other bottlenecks.",
      image:
        "/images/waterpark-simulator/waterpark-simulator-four-star-achievement.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        spotlightMeta:
          "Tutorial to four stars, daily operating loop, Park Size, Museum timing, Ocean Prestige gate, capacity, Chlorine, late-game handoff, and progression fixes",
      },
      archive: {
        showInCollections: true,
        order: 1,
      },
    },

    {
      title: "Waterpark Simulator Research Points & Unlock Order",
      href: "/waterpark-simulator/research-points",
      type: "Systems",
      description:
        "Earn Research Points through a closing-time maintenance route, unlock Chlorine at the right time, and choose ticket, vending, Hiring Level or Park Size upgrades by the park's current bottleneck.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-end-of-day-research-loop.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 91,
        spotlightFeature: true,
        spotlightOrder: 1,
        spotlightMeta:
          "Closing-time maintenance loop, Research actions, Chlorine chain, dirty-water limits, ticket and vending priorities, Hiring Level, Park Size, and staff competition",
      },
      archive: {
        showInCollections: true,
        order: 2,
      },
    },

    {
      title: "Waterpark Simulator Satisfaction Guide",
      href: "/waterpark-simulator/increase-satisfaction",
      type: "Systems",
      description:
        "Fix low or apparently stuck Satisfaction by diagnosing empty pools, service queues, trash, dirty water, missing showers, overcrowding and premature expansion.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-60-percent-satisfaction-no-water.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 92,
        spotlightFeature: true,
        spotlightOrder: 2,
        spotlightMeta:
          "60% to 94% recovery, empty pools, waiting for service, disgusting complaints, trash, showers, capacity, decoration, and one-day testing",
      },
      archive: {
        showInCollections: true,
        order: 3,
      },
    },

    {
      title: "Waterpark Simulator Money Guide",
      href: "/waterpark-simulator/make-money",
      type: "Systems",
      description:
        "Separate construction spending from real operating losses, protect wages and stock, use Night Shift once the park is ready, and expand only after a stable no-build test day.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-day-1-daily-report.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 93,
        spotlightFeature: true,
        spotlightOrder: 3,
        spotlightMeta:
          "Daily Profit diagnosis, operating reserve, attraction upgrades, tickets, tips, Poster Marketing, vending, Night Shift, staff costs, no-build test, and expansion",
      },
      archive: {
        showInCollections: true,
        order: 4,
      },
    },

    {
      title: "Waterpark Simulator Staff Guide",
      href: "/waterpark-simulator/staff-guide",
      type: "Systems",
      description:
        "Choose hires by the park's current bottleneck, compare employee stats, manage assignments and limits, and add Security, Entertainers and Mascots only when the core roster is stable.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-first-ticket-worker-brock.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 94,
        spotlightFeature: true,
        spotlightOrder: 4,
        spotlightMeta:
          "Ticket Worker, Janitor, Maintenance, Vendors, Restocker, Security, Entertainer, Mascot, stats, assignments, breaks, Hiring Level, Staff Overflow, and idle-worker fixes",
      },
      archive: {
        showInCollections: true,
        order: 5,
      },
    },

    {
      title: "Waterpark Simulator Museum Guide",
      href: "/waterpark-simulator/museum-guide",
      type: "Guide",
      description:
        "Complete Goldie, Poseidon, Yogi and Aztec quests, spend theme rewards, solve Museum star gates, manage themed builds, and progress toward the Wonder Attraction path.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-museum-unlocked.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 95,
        spotlightFeature: true,
        spotlightOrder: 5,
        spotlightMeta:
          "Museum unlock, Pirate, Ocean and Aztec rewards, Goldie, Poseidon, Yogi, Wellness, star gates, quest days, staff conflicts, and the Wonder Attraction path",
      },
      archive: {
        showInCollections: true,
        order: 6,
      },
    },

    {
      title: "Waterpark Simulator 5-Star & Diamond Prestige Guide",
      href: "/waterpark-simulator/5-star-diamond-prestige-guide",
      type: "Walkthrough",
      description:
        "Reach five stars with $500,000 earned and two 4-Prestige Slides, then reach Diamond with $1,000,000 earned and a 6-Prestige Wonder Attraction.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-diamond-objectives.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 153,
        spotlightFeature: true,
        spotlightOrder: 6,
        spotlightMeta:
          "$500K earned, two 4-Prestige Slides, five stars, $1M earned, 6-Prestige Wonder Attraction, Museum handoff, Research bottlenecks, layout rebuilding, and Diamond",
      },
      archive: {
        showInCollections: true,
        order: 7,
      },
    },

    {
      title: "Waterpark Simulator Mafia Guide",
      href: "/waterpark-simulator/mafia-guide",
      type: "Guide",
      description:
        "Follow the tested Mafia route from the first cash offer through the later settlement demand, refusal, sabotage warning, crew attack, catching Mafia and attraction repairs.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-mafia-sabotage-warning.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 152,
        spotlightFeature: true,
        spotlightOrder: 7,
        spotlightMeta:
          "Mafia cash offer, tested $750 to $7,500 demand, refusal, Mafia trouble warning, sabotage crew, catching Mafia, damaged attractions, and recovery",
      },
      archive: {
        showInCollections: true,
        order: 8,
      },
    },

    {
      title: "Waterpark Simulator Custom Slides Guide",
      href: "/waterpark-simulator/custom-slides-guide",
      type: "Systems",
      description:
        "Unlock Custom Slides, plan the landing first, build short test routes, control height, fix overshoots, extend long slides and decide when Advanced Custom Slides are worth it.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-custom-slide-editor.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 154,
        spotlightFeature: true,
        spotlightOrder: 8,
        spotlightMeta:
          "Custom Slides unlock, editor, landing-first planning, segment costs, short test routes, uphill sections, long routes, overshoot fixes, and Advanced Custom Slides",
      },
      archive: {
        showInCollections: true,
        order: 9,
      },
    },

    {
      title: "Waterpark Simulator Achievements Guide",
      href: "/waterpark-simulator/achievements-guide",
      type: "Achievements",
      description:
        "Track all 71 achievements with exact conditions and an efficient route across Beach and City maps, Hard Mode, long counters, Yogi, Security, five stars and Diamond.",
      date: "Updated recently",
      image:
        "/images/waterpark-simulator/waterpark-simulator-zipline-ride.webp",
      imageFit: "cover",
      imagePosition: "center",
      imagePadding: false,
      home: {
        latest: true,
        latestFeatured: true,
        latestOrder: 96,
        spotlightFeature: true,
        spotlightOrder: 9,
        spotlightMeta:
          "All 71 achievements, Beach and City maps, Hard Mode, Museum and Yogi, Security, sales, cleaning, Custom Slides, Zipline, five stars, and Diamond Prestige",
      },
      archive: {
        showInCollections: true,
        order: 10,
      },
    },
  ],
},

  {
    title: "How Many Dudes?",
    game: "How Many Dudes?",
    href: "/how-many-dudes",
    slug: "how-many-dudes",
    kind: "game",
    status: "active",
    accent: "purple",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Army-Building Roguelite",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the How Many Dudes? guide hub for five-Type team building, tested Warlock, Cyborg and Cave builds, the Round 100 route, the G.O.A.T. at Round 105, Relic shop decisions, Tier 2 unlocks, and all 69 achievements.",
    coverage: [
      "Core roster rules, five-Type role planning, Dude Families, Daily Dude, Pocket Dice, Relic Pool decisions, recovery priorities, progression checkpoints, and the correct focused guide for each bottleneck",
      "Three Tier 1-clearing teams built around Warlock and Chef, Cyborg and General, or Cave and Cleric, with recruit order, role checks, Relic priorities, scaling decisions, and route-specific result references",
      "Round 1–100 route planning, Business Dude 15-round investments, Scavenger 11-round Relic loans, Round 60 Separator, safer late fights, Round 94 decisions, and the Round 100 Gorilla pack",
      "Rounds 101–104 recovery, final-shop priorities, Round 105 modifiers, 250 Rams, G.O.A.T. Stomp, Dude Juice and Health Potion timing, Bottled Lightning limits, and the final boss order",
      "Andon Cord, Shadowy Funnel, Time Sink, Time Trigger, Heroic Medal, Shield Belt, Copper Bolts, Cave Painting, late consumables, trigger requirements, and early-versus-late shop decisions",
      "Regular, Silver and Gold Stars, five Gold-Star Dude Types for Tier 2, the 20-Silver-Star Pocket Dice reward, Ensemble at 75 Discoveries, Endless limitations, and all 69 achievements",
    ],
    image:
      "/images/how-many-dudes/how-many-dudes-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 20,
      footerFeatured: true,
    },
    pages: [
      {
        title: "How Many Dudes? Guide Hub",
        href: "/how-many-dudes",
        type: "Guide Hub",
        description:
          "Start here for five-Type roster planning, Dude Families, recovery, Relic Pool decisions, progression checkpoints, and the correct build, Round 100, G.O.A.T., Tier 2, Relic, or achievement guide.",
        image:
          "/images/how-many-dudes/how-many-dudes-warlock-chef-time-ranger-mutant-build.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Five-Type roster roles, Dude Families, Daily Dude, Pocket Dice, Relic Pool, recovery, builds, Round 100, G.O.A.T., Tier 2, Relics, and achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "How Many Dudes Best Builds",
        href: "/how-many-dudes/best-builds",
        type: "Builds",
        description:
          "Compare three Tier 1-clearing five-Type teams built around Warlock, Cyborg, or Cave, with recruit order, role checks, Relic priorities, scaling decisions, and result references.",
        date: "Updated recently",
        image:
          "/images/how-many-dudes/how-many-dudes-cyborg-samurai-assassin-franken-general-build.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 85,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Warlock, Chef, Time, Mutant and Ranger; Cyborg, Samurai, Assassin, Franken and General; Cave, Cleric, Vampire, Ghost and Medic",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "How Many Dudes Round 100 Guide",
        href: "/how-many-dudes/round-100-guide",
        type: "Walkthrough",
        description:
          "Build the roster through Round 100, time Business investments and Relic loans, avoid expensive late losses, prepare recovery items, and beat the Gorilla pack.",
        date: "Updated recently",
        image:
          "/images/how-many-dudes/how-many-dudes-round-100-frenzied-gorilla-boss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 86,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Five roster jobs, Business Dude timing, Scavenger loans, Round 60 Separator, safer Rounds 81–99, Frenzied Gorillas, Meteor, and Dude Juice",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "How Many Dudes G.O.A.T. Boss Guide",
        href: "/how-many-dudes/goat-boss-guide",
        type: "Bosses",
        description:
          "Repair the roster through Rounds 101–104, read the final modifier, clear 250 Rams, survive G.O.A.T. Stomp, and time Dude Juice and Health Potion.",
        date: "Updated recently",
        image:
          "/images/how-many-dudes/how-many-dudes-round-105-goat-250-rams.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 87,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Rounds 101–104, final shop, 250 Rams, Taunt Resistance, Crit Avoidance, G.O.A.T. Stomp, Dude Juice, Health Potion, and Bottled Lightning",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "How Many Dudes Relic Combinations",
        href: "/how-many-dudes/relic-combinations",
        type: "Systems",
        description:
          "Choose Relics by the problem they solve, compare Warlock, Time, General, Franken and Cave packages, and prepare the right consumables for late bosses.",
        date: "Updated recently",
        image:
          "/images/how-many-dudes/how-many-dudes-andon-cord-shadowy-funnel-time-sink.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 88,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Andon Cord, Shadowy Funnel, Time Sink, Time Trigger, Heroic Medal, Shield Belt, Copper Bolts, Cave Painting, and late consumables",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "How Many Dudes Tier 2 Progression Guide",
        href: "/how-many-dudes/tier-2-progression",
        type: "Systems",
        description:
          "Earn Silver and Gold Stars, unlock Tier 2 with five Gold-Star Dude Types, claim the Pocket Dice reward, reach 75 Discoveries, and avoid wasted Endless runs.",
        date: "Updated recently",
        image:
          "/images/how-many-dudes/how-many-dudes-five-gold-stars-unlock-tier-2.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 89,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Regular, Silver and Gold Stars, five Gold-Star Dude Types, Tier 2, 20 Silver Stars, extra Pocket Dice, 75 Discoveries, Ensemble, and Endless",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
      {
        title: "How Many Dudes Achievements Guide",
        href: "/how-many-dudes/achievements-guide",
        type: "Achievements",
        description:
          "Track all 69 achievements with a searchable checklist covering discoveries, Dude Types, Relics, Stars, bosses, economy, consumables, and progression cleanup.",
        date: "Updated recently",
        image:
          "/images/how-many-dudes/how-many-dudes-stars-regular-silver-gold.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 90,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "All 69 achievements, searchable checklist, discoveries, Dude Types, Relics, Stars, Round 100, G.O.A.T., economy, consumables, and progression cleanup",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
    ],
  },
  {
    title: "Bills Must Be Paid",
    game: "Bills Must Be Paid",
    href: "/bills-must-be-paid",
    slug: "bills-must-be-paid",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Incremental Bill Survival",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Bills Must Be Paid guide hub for first-cycle priorities, bill reserves, Big Toni loans, bankruptcy timing, Legacy Points, Skill Tree upgrades, Rings and Bracelets, all 27 achievements, and the complete 100% route.",
    coverage: [
      "Beginner progression, first-cycle priorities, accuracy achievements, bill reserves, desk diagnosis, temporary versus permanent progression, bankruptcy decisions, and the correct guide for each bottleneck",
      "Damage, Spawn, Stamina, Hammer, Loot, Luck, Midas Touch, Super Jackpot, high-HP Piggy walls, desk troubleshooting, and the late King Piggy Skill Tree branches required for Maxed Out",
      "Bill protection, early-payment decisions, recoverable versus dead cycles, Big Toni loan terms, daily earnings cuts, repayment, bankruptcy timing, and verified bill checkpoints",
      "Legacy Point conversion, first Prestige purchases, Early Speed Ring, Early Piggy Ring, Crit Ring, Damage Ring III, Orb Ring, Double Loot Ring, and the final Prestige Jewelry reset",
      "All 27 achievements, accuracy and first-hit setups, gambling, Piggy Shuffle, loan achievements, Super Jackpot, Piggy and Coin collections, King Piggy, Taxes, Keep Playing, Maxed Out, and the complete cycle-by-cycle 100% route",
    ],
    image:
      "/images/bills-must-be-paid/bills-must-be-paid-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 19,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Bills Must Be Paid Guide Hub",
        href: "/bills-must-be-paid",
        type: "Guide Hub",
        description:
          "Start here for the core loop, first-cycle route, bill protection, desk bottlenecks, bankruptcy planning, post-game order, and the correct detailed guide for your current problem.",
        image:
          "/images/bills-must-be-paid/bills-must-be-paid-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "First-cycle priorities, bill reserves, desk diagnosis, bankruptcy, Legacy Points, King Piggy, Taxes, post-game order, achievements, upgrades, and Prestige",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "Bills Must Be Paid Best Upgrades & Skill Tree",
        href: "/bills-must-be-paid/best-upgrades-skill-tree",
        type: "Systems",
        description:
          "Choose Damage, Spawn, Stamina, Hammers, Loot, Midas Touch, and Super Jackpot by reading the desk, then find the late King Piggy branches required for Maxed Out.",
        date: "Updated recently",
        image:
          "/images/bills-must-be-paid/bills-must-be-paid-super-jackpot-skill-tree-node.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 80,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Desk bottlenecks, Damage versus Speed, Starting Piggies, Spawn Rate, Stamina, Hammer breakpoints, Loot, Midas Touch, Super Jackpot, and King Piggy branches",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Bills Must Be Paid Bills, Loans & Bankruptcy Guide",
        href: "/bills-must-be-paid/bills-loans-bankruptcy",
        type: "Systems",
        description:
          "Protect bill money, judge early payments, calculate whether a cycle can recover, use Big Toni safely, and time bankruptcy without wasting paid-bill progress.",
        date: "Updated recently",
        image:
          "/images/bills-must-be-paid/bills-must-be-paid-big-tony-loan-terms.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 81,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Bill reserves, early payments, verified checkpoints, Big Toni interest and daily cuts, repayment, recoverable cycles, Legacy Points, and bankruptcy timing",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "Bills Must Be Paid Prestige, Rings & Bracelets",
        href: "/bills-must-be-paid/prestige-rings-bracelets",
        type: "Systems",
        description:
          "Spend Legacy Points on permanent Damage, Starting Piggies, Stamina, Loot and Crit, compare early-payment Rings, and save completion jewelry for the final reset.",
        date: "Updated recently",
        image:
          "/images/bills-must-be-paid/bills-must-be-paid-double-loot-ring-one-million.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 82,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Legacy Point conversion, first Prestige purchases, Early Speed Ring, Early Piggy Ring, Crit Ring, Damage Ring III, Orb Ring, Double Loot Ring, and final reset order",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Bills Must Be Paid Achievements Guide",
        href: "/bills-must-be-paid/achievements-guide",
        type: "Achievements",
        description:
          "Unlock all 27 achievements with safe setups for accuracy, Strong Start, Multismasher, Piggy Shuffle, Big Toni, Super Jackpot, collections, Maxed Out, and Prestige Jewelry.",
        date: "Updated recently",
        image:
          "/images/bills-must-be-paid/bills-must-be-paid-maxed-out-achievement.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 83,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "All 27 achievements, accuracy route, Strong Start, Multismasher, gambling, Piggy Shuffle, Big Toni, Super Jackpot, collections, Freedom, Maxed Out, and Prestige Jewelry",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "Bills Must Be Paid 100% Walkthrough",
        href: "/bills-must-be-paid/100-percent-walkthrough",
        type: "Walkthrough",
        description:
          "Follow the full cycle route from opening achievements and the first bankruptcy through Big Toni, every collection, King Piggy, Taxes, Maxed Out, and the final Prestige.",
        date: "Updated recently",
        image:
          "/images/bills-must-be-paid/bills-must-be-paid-prestige-jewelry-achievement.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 84,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Cycle 1 setup, first Prestige, Cycle 2 achievements, winning cycle, Piggy and Coin collections, King Piggy, Taxes, Keep Playing, Maxed Out, and final jewelry",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
    ],
  },
  {
    title: "Sir, We Have an Orc Problem",
    game: "Sir, We Have an Orc Problem",
    href: "/sir-we-have-an-orc-problem",
    slug: "sir-we-have-an-orc-problem",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Incremental Tower Defense",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Sir, We Have an Orc Problem guide hub for turret builds and tier rankings, upgrade order and farming efficiency, the Level 3.2 three-route wall, and Level 6.1 and 6.2 perfect-clear progression.",
    coverage: [
      "Core controls, manual and Automatic Missile behavior, survival versus perfect-clear rewards, active ability roles, recurring enemy behavior, progression checkpoints, failure diagnosis, and restricted achievement conditions",
      "Gunner, Cannon, Flamethrower, Laser, Mortar, and Tesla Coil roles, progression-focused turret tier list, firing angles, burn coverage, Laser geometry, late cleanup, knockback direction, layered builds, and ability support",
      "Stage-based upgrade planner, survival and perfect-clear resources, early Gunner breakpoints, Penetration, Rapid Fire, Automatic Missile, short-stage farming, Level 3.1 bonuses, Silver Orc economy, tower-count decisions, and late-game payout calculations",
      "Level 3.2 route diagnosis for the overlooked bottom path, crowded middle pocket, final top-route leak, enemy pressure phases, farming-versus-repositioning decisions, fresh-save route, and transition into Level 4",
      "Level 6.1 top-left and bottom-left route fixes, final-wave pressure, Level 6.2 ability timing, survived-versus-perfect-clear conditions, Against All Odds, Four-tified restrictions, tower-only adjustments, and endgame troubleshooting",
    ],
    image:
      "/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 18,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Sir, We Have an Orc Problem Guide Hub",
        href: "/sir-we-have-an-orc-problem",
        type: "Guide Hub",
        description:
          "Start here for controls, abilities, reward conditions, enemy behavior, achievement restrictions, progression checks, and the correct turret, farming, Level 3.2, or endgame guide.",
        image:
          "/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-layered-burn-gunner-tesla-build.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Controls, abilities, survival and perfect-clear rewards, enemy behavior, achievements, turret builds, upgrade farming, Level 3.2, and Levels 6.1–6.2",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title:
          "Sir, We Have an Orc Problem Best Turrets & Tier List",
        href:
          "/sir-we-have-an-orc-problem/best-turrets-builds",
        type: "Builds",
        description:
          "Rank every turret for reliable progression, compare Gunner, Cannon and Flamethrower, fix Laser and Mortar placement, control knockback, and build a layered defense.",
        date: "Updated recently",
        image:
          "/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-layered-burn-gunner-tesla-build.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 76,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Turret tier list, Gunner, Cannon, Flamethrower, Laser, Mortar, Tesla Coil, firing angles, knockback, layered builds, abilities, and build troubleshooting",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title:
          "Sir, We Have an Orc Problem Best Upgrades & Farming",
        href:
          "/sir-we-have-an-orc-problem/best-upgrades-farming",
        type: "Systems",
        description:
          "Follow the stage-based upgrade planner, compare survival and perfect-clear resources, farm short stages efficiently, and know when cheap stats beat another tower.",
        date: "Updated recently",
        image:
          "/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-late-game-40k-farm.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 77,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Upgrade planner, resource types, perfect-clear bonus, Penetration, Rapid Fire, Automatic Missile, short-stage farming, Level 3.1 bonuses, Silver Orcs, and late-game payouts",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title:
          "Sir, We Have an Orc Problem Level 3.2 Guide",
        href:
          "/sir-we-have-an-orc-problem/level-3-2-guide",
        type: "Walkthrough",
        description:
          "Beat Level 3.2 by covering the overlooked bottom route, avoiding an overbuilt middle, reinforcing the top, and knowing whether to farm or reposition.",
        date: "Updated recently",
        image:
          "/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-2-bottom-leak.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 78,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Level 3.2 quick facts, hidden bottom route, middle pressure pocket, top-route leaks, enemy phases, farming decisions, clear sequence, and Level 4 transition",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title:
          "Sir, We Have an Orc Problem Levels 6.1 & 6.2 Guide",
        href:
          "/sir-we-have-an-orc-problem/level-6-1-6-2-guide",
        type: "Walkthrough",
        description:
          "Fix Level 6.1 outer-route leaks, preserve Nuke or Cryo Beam for the Level 6.2 final rush, and separate survival, perfect clear, and achievement conditions.",
        date: "Updated recently",
        image:
          "/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-6-2-perfect-clear.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 79,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Level 6.1 outer routes, final-wave pressure, Level 6.2 acceleration, Nuke and Cryo timing, perfect clear, Against All Odds, Four-tified, and tower-only adjustments",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
    ],
  },
  {
    title: "Scrap Mechanic",
    game: "Scrap Mechanic",
    href: "/scrap-mechanic",
    slug: "scrap-mechanic",
    kind: "game",
    status: "active",
    accent: "amber",
    archiveCategory: "Cozy, crafting, survival & systems",
    label: "Survival Engineering",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Scrap Mechanic 1.0 guide hub from the first Grow Lab and Hubert's Warehouse route through the Trash Bot boss, Mining Site 01, Plasma Drill vehicles, ore processing, Vault Quotas, the Small Tank Watchtower quest, and all 34 achievements.",
    coverage: [
      "First Grow Lab preparation, route order, combat checks, progression rewards, later Grow Lab rules, keys, respawn planning, and safe exits",
      "Hubert's Lost and Found route, regular Warehouse Keys, Farmbot drops, Warehouse Master Key differences, the correct story marker, and locked-door troubleshooting",
      "Story Warehouse preparation, Anti-theft protection, Utility rooms, Return Chutes, Trash Bot damage windows, backpack recovery, Lorenzo, the Mining Site 01 reveal, Plasma Drill Level 1, and the five-minute self-destruct escape",
      "Mining Site 01 access, Plasma Drill Terramass detection, ore ejection, fixed-drill failures, Turret Seat aiming, Sticky Wheels, Electric Engine power, multiple drills, and underground return decisions",
      "Crushbot input, Residual Ore, Prospector materials, water and connection failures, Ore Balls, the Caster, heavy Ingot transport, Vault Quotas, buffer storage, and automated processing",
      "Hubert's Small Tank location, Warehouse loot window, Watchtower material requirements, hologram placement failures, Fire Extinguisher reward, and the searchable route for all 34 achievements",
    ],
    image:
      "/images/scrap-mechanic/scrap-mechanic-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 17,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Scrap Mechanic 1.0 Guide Hub",
        href: "/scrap-mechanic",
        type: "Guide Hub",
        description:
          "Choose the correct route for early Grow Labs, Warehouse access, the story Warehouse, Mining Site 01, ore processing, Hubert's Watchtower, or achievement cleanup.",
        image:
          "/images/scrap-mechanic/scrap-mechanic-story-warehouse-exterior.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Grow Labs, Warehouse keys, Trash Bot, Mining Site 01, Plasma Drill vehicles, ore processing, Vault Quotas, Watchtower construction, and achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "Scrap Mechanic First Grow Lab Walkthrough",
        href: "/scrap-mechanic/first-grow-lab-walkthrough",
        type: "Walkthrough",
        description:
          "Prepare for the first Grow Lab, follow the interior route, handle its combat and progression checks, collect the reward, and leave without losing the next objective.",
        date: "Updated recently",
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 69,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "First Grow Lab access, preparation, combat route, progression checks, reward, exit, and later numbered Lab rules",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Scrap Mechanic Warehouse Key Guide",
        href: "/scrap-mechanic/warehouse-key",
        type: "Guide",
        description:
          "Get the regular Warehouse Key from Hubert or Farmbot drops, distinguish it from the Master Key, follow the correct story marker, and fix a locked entrance.",
        date: "Updated recently",
        image:
          "/images/scrap-mechanic/scrap-mechanic-hubert-spare-warehouse-key.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 70,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Lost and Found, Hubert's spare key, Farmbot drops, regular versus Master Key, carried inventory, story marker, and locked-door fixes",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "Scrap Mechanic Warehouse Walkthrough",
        href: "/scrap-mechanic/warehouse-walkthrough",
        type: "Walkthrough",
        description:
          "Clear the story Warehouse, beat the Trash Bot, recover your backpack, use the Master Key, reveal Mining Site 01, and escape the self-destruct.",
        date: "Updated recently",
        image:
          "/images/scrap-mechanic/scrap-mechanic-trashbot-exposed-head.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 71,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Anti-theft lock, Utility elevators, Return Chute, Trash Bot weak point, backpack recovery, Lorenzo, Master Key, Mining Site 01, and self-destruct",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Scrap Mechanic Hubert Watchtower & Small Tank",
        href: "/scrap-mechanic/hubert-watchtower-small-tank",
        type: "Walkthrough",
        description:
          "Find and collect the physical Small Tank, prepare the Watchtower materials, place every hologram part correctly, and claim Hubert's Fire Extinguisher.",
        date: "Updated recently",
        image:
          "/images/scrap-mechanic/scrap-mechanic-hubert-watchtower-small-tank-installed.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 72,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Small Tank location, Warehouse Anti-theft lock, loot timing, bulk materials, hologram placement, hidden parts, and Fire Extinguisher reward",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "Scrap Mechanic Mining Site 01 Guide",
        href: "/scrap-mechanic/mining-guide",
        type: "Systems",
        description:
          "Enter Mining Site 01, identify valid Terramass, collect ejected Ore, fix Plasma Drill vehicles, aim with the Turret Seat, and plan traction and power.",
        date: "Updated recently",
        image:
          "/images/scrap-mechanic/scrap-mechanic-mining-site-01-gyro-core-map.webp",
        imageFit: "contain",
        imagePosition: "center",
        imagePadding: true,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 73,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Mining access, Terramass meter, ore ejection, fixed-drill failures, Turret Seat clearance, Sticky Wheels, Electric Engine, Batteries, and multiple drills",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
      {
        title: "Scrap Mechanic Ore Processing Guide",
        href: "/scrap-mechanic/ore-processing-guide",
        type: "Systems",
        description:
          "Process mined Ore with the Crushbot and Prospector, form Ore Balls, cast and haul Ingots, protect Vault Quotas, and repair failed automation.",
        date: "Updated recently",
        image:
          "/images/scrap-mechanic/scrap-mechanic-crushbot-manual-ore-input.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 74,
          spotlightFeature: true,
          spotlightOrder: 6,
          spotlightMeta:
            "Crushbot input, Residual Ore, Prospector water and materials, connections, Ore Balls, Caster, Ingots, Vault Quotas, buffers, and automation",
        },
        archive: {
          showInCollections: true,
          order: 7,
        },
      },
      {
        title: "Scrap Mechanic Achievements Guide",
        href: "/scrap-mechanic/achievements",
        type: "Achievements",
        description:
          "Track all 34 achievements with story milestones, combat counters, construction goals, Vault targets, vehicle challenges, and long-term cleanup priorities.",
        date: "Updated recently",
        image:
          "/images/scrap-mechanic/scrap-mechanic-vault-10000-quota.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 75,
          spotlightFeature: true,
          spotlightOrder: 7,
          spotlightMeta:
            "All 34 achievements, story milestones, Grow Labs, Trash Bot, Minerbots, construction goals, Vault value, vehicles, and long-term counters",
        },
        archive: {
          showInCollections: true,
          order: 8,
        },
      },
    ],
  },
  {
    title: "Go-Go Town!",
    game: "Go-Go Town!",
    href: "/go-go-town",
    slug: "go-go-town",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Town Management Sim",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Go-Go Town 1.0 guide hub from Forestry, Mining and the Town Hall through shops, Townies, EGO Tech, Tourist Tracker, automation, Challenge 10, Agent Peanut, the Safe, Bunker Network, and Town Deed.",
    coverage: [
      "Complete 1.0 progression route from the TownCo. tutorial, Forestry, Mining, Planks, Bricks, Town Hall, Train Station, first shop, housing, Townies, Tourist Tracker, Import, Export, Creative Mode, and Challenge 10 preparation",
      "Worker demand, Townie housing and assignments, Storage locks, processors, Industry Zone connections, Courier road access, full inventories, Garbage Disposal, Maintenance, Bubble Gun cleanup, and Garbirds",
      "Top Town Tournament goals, Claim Rewards, Town Rank versus EGO Tech, Rebuy, missing buildings, Tourism Hub No Spot, Advanced Materials Factory setup, missing recipes, and progression reset checks",
      "Challenge 10, number-one Town Ranking, Agent Peanut, Town Co. Safe location and code, TownCo. Bunker Door Key, surface bunker entrances, Unable to Pass to Destination, red bunker door, and Town Deed"
    ],
    image:
      "/images/go-go-town/go-go-town-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 16,
      footerFeatured: true
    },
    pages: [
      {
        title: "Go-Go Town 1.0 Guide Hub",
        href: "/go-go-town",
        type: "Guide Hub",
        description:
          "Start with Forestry and Mining, finish the Town Hall, run the first shop, house Townies, spend EGO safely, automate stable routes, use Import wisely, and prepare for Challenge 10.",
        image:
          "/images/go-go-town/go-go-town-town-hall-complete-train-station.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Forestry, Mining, Town Hall, first shop, housing, Townies, Tourist Tracker, EGO Tech, automation, Import, Creative Mode, and Challenge 10"
        },
        archive: {
          showInCollections: true,
          order: 1
        }
      },
      {
        title: "Go-Go Town Automation Not Working Guide",
        href: "/go-go-town/automation-not-working",
        type: "Systems",
        description:
          "Fix idle workers, unassignable Townies, stopped processors, Storage blocks, Courier routes, Industry Zone access, garbage buildup, Maintenance failures, and Garbirds.",
        date: "Updated recently",
        image:
          "/images/go-go-town/go-go-town-worker-no-demand.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 66,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Townie housing and jobs, worker demand, tools, processors, Storage locks, Couriers, Industry Zone access, Maintenance, garbage, and Garbirds"
        },
        archive: {
          showInCollections: true,
          order: 2
        }
      },
      {
        title: "Go-Go Town Progression Stuck Guide",
        href: "/go-go-town/progression-stuck",
        type: "Systems",
        description:
          "Fix Town Goals that will not advance, unclaimed rewards, locked EGO Tech, missing Rebuy items, Tourism Hub No Spot, unfinished buildings, and recipes that never appear.",
        date: "Updated recently",
        image:
          "/images/go-go-town/go-go-town-rank-nine-tech-tier-six.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 67,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Town Goals, Claim Rewards, Town Rank versus EGO Tech, Tourist Tracker, Rebuy, missing buildings, Tourism Hub, factories, recipes, and Creative Mode"
        },
        archive: {
          showInCollections: true,
          order: 3
        }
      },
      {
        title: "Go-Go Town Agent Peanut Safe Code Guide",
        href: "/go-go-town/agent-peanut-safe-code",
        type: "Endings",
        description:
          "Reach number one, find Agent Peanut, open the Town Co. Safe, collect the Bunker Door Key, fix blocked bunker destinations, open the red door, and discover the Town Deed.",
        date: "Updated recently",
        image:
          "/images/go-go-town/go-go-town-safe-locked-code-required.webp",
        imageFit: "contain",
        imagePosition: "center",
        imagePadding: true,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 68,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Challenge 10, number-one ranking, Agent Peanut, Safe code, Bunker Door Key, bunker entrances, destination errors, red door, and Town Deed"
        },
        archive: {
          showInCollections: true,
          order: 4
        }
      }
    ]
  },
  {
    title: "Grim Dawn: Fangs of Asterkarn",
    game: "Grim Dawn: Fangs of Asterkarn",
    href: "/grim-dawn-fangs-of-asterkarn",
    slug: "grim-dawn-fangs-of-asterkarn",
    kind: "game",
    status: "active",
    accent: "cyan",
    archiveCategory: "RPG, action, builds & combat",
    label: "ARPG Expansion",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Grim Dawn: Fangs of Asterkarn guide hub for the Fort Ikon and Frostveil route, Garmir and the missing Scouts, Wereraven leveling, Ritual of Cleansing materials, Soul Echoes, Ascension, Elderveil, and Awakened Epic items.",
    coverage: [
      "Expansion requirements, the Fort Ikon northwest entrance, Frostveil Riftgate, the correct eastern route, Garmir the Lost, missing Scouts, Ulfgarn, Journey to Kurnhold, Hearth in the Blizzard, Rock Feathers, and common story progression blocks",
      "Cold and Frostburn Wereraven leveling with the Berserker mastery bar, Ice Talons, Cold Snap, Rallying Cry, Tsunami, Viper, Blizzard, Behemoth, Energy fixes, gear priorities, attributes, Veteran decisions, and the later Occultist transition",
      "Ritual of Cleansing routes for the Ashen Heart of the Void, three Blood Basins, Blood of Ch'thon, Naddo the Anointed, Embers of the First Flame, Root of Bargoll, Bargoll, Essence of Ugdenbog, and all three Kurnhold turn-ins",
      "Soul Echoes, Soul Fragments, Ashes of Awakening, the Altar of Ascension, Jornn the Runekeeper, Inventor Alteration, Elderveil, Elder Noltukari, the Runed Orb, supported Epic recipes, and the correct Awaken-first-then-Ascend order",
    ],
    image:
      "/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-frostveil-rift.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 15,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Grim Dawn: Fangs of Asterkarn Guide Hub",
        href: "/grim-dawn-fangs-of-asterkarn",
        type: "Guide Hub",
        description:
          "Start here for the Fort Ikon entrance, Frostveil and Kurnhold story order, Berserker transformations, optional quests, returning-player preparation, and the correct walkthrough, build, or Ascension guide.",
        image:
          "/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-frostveil-rift.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Fort Ikon entrance, Frostveil route, Kurnhold progression, Berserker transformations, optional quests, Wereraven build, Ritual materials, Soul Echoes, and Ascension",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "The Asterkarn Incident Walkthrough",
        href:
          "/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough",
        type: "Walkthrough",
        description:
          "Leave Fort Ikon, activate the Frostveil Riftgate, avoid the northwest Hearth detour, defeat Garmir, find the missing Scouts, speak to Ulfgarn, and fix incomplete quest progress.",
        date: "Updated recently",
        image:
          "/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-frostveil-rift.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 62,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Scout Avirs, Fort Ikon entrance, Frostveil Riftgate, north-then-east route, Hearth detour, Garmir, missing Scouts, Ulfgarn, Frozen Aster, and Journey to Kurnhold",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Grim Dawn Wereraven Leveling Build",
        href: "/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build",
        type: "Builds",
        description:
          "Level a self-cast Cold and Frostburn Wereraven with the right Berserker skill order, Ice Talons rotation, devotions, Energy fixes, gear, attributes, and Occultist timing.",
        date: "Updated recently",
        image:
          "/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-mastery-bar-unlock.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 63,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Berserker mastery bar, Wereraven, Ice Talons, Cold Snap, Rallying Cry, Tsunami, Viper, Blizzard, Behemoth, Energy sustain, gear, attributes, and Occultist",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "Grim Dawn Ritual of Cleansing Walkthrough",
        href:
          "/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough",
        type: "Walkthrough",
        description:
          "Find the Ashen Heart of the Void, activate all three Blood Basins, recover the Embers, kill Root of Bargoll and Bargoll, and complete every Kurnhold material turn-in.",
        date: "Updated recently",
        image:
          "/images/grim-dawn-fangs-of-asterkarn/grim-dawn-ritual-cleansing-ashen-heart-void.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 64,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Ashen Heart of the Void, Blood of Ch'thon, three Blood Basins, World's Tear, Naddo, Embers of the First Flame, Root of Bargoll, Bargoll, and all material turn-ins",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Grim Dawn Soul Echoes & Awakened Epic Items",
        href:
          "/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items",
        type: "Systems",
        description:
          "Farm Soul Echoes and Ashes, find Elderveil and the Runed Orb, understand Ascended Affixes, Awaken supported Epic items, and avoid using the wrong upgrade order.",
        date: "Updated recently",
        image:
          "/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-recipe-200k.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 65,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Soul Echoes, Soul Fragments, Ashes of Awakening, Altar mechanics, Jornn, Inventor Alteration, Elderveil, Elder Noltukari, Runed Orb recipes, and Awaken-first-then-Ascend",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
    ],
  },
  {
    title: "Dirty Business",
    game: "Dirty Business",
    href: "/dirty-business",
    slug: "dirty-business",
    kind: "game",
    status: "active",
    accent: "emerald",
    archiveCategory: "Strategy, simulation, puzzle & discovery",
    label: "Crime Business Sim",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Dirty Business guide hub for beginner progression, customer Orders, Reputation unlocks, product quality, Botanist automation, Weapon Printing, Acid Disposal, LSD production, co-op, save transfer, Companies, aircraft, and all 75 achievements.",
    coverage: [
      "Beginner progression from the first Weed Order through Levels 5, 13, 15, 30, 32, 37, and 38, with clean Reputation gains, production priorities, storage decisions, and buy-now-versus-wait rules",
      "Customer Order activation, product packing, Order Delivery Elevator assignment, Missing Packs fixes, quality requirements, Deformed Weapons, penalties, Complete Selected Orders, Collect Payment, box organization, and co-op tablet roles",
      "Botanist hiring, Worker balance, task and strain matching, Supply Rack inputs, Seeds, Soil, Watering Cans, Plastic Packs, unavailable equipment, Product Rack output, Idle statuses, and stuck Worker tutorials",
      "Weapon Printing, Gunsmith timing, Acid Disposal, Hydrochloric Acid setup, Slugs, Slug Extract, Distiller temperature, Blotting Paper, first LSD Sheet, production bottlenecks, and capacity decisions",
      "Demo save transfer, Steam Cloud safety, manual backup checks, Dealers, Companies, aircraft access, cargo, airdrops, late distribution, and the searchable checklist for all 75 achievements",
    ],
    image: "/images/dirty-business/dirty-business-hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 14,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Dirty Business Guide Hub",
        href: "/dirty-business",
        type: "Guide Hub",
        description:
          "Start here for beginner progression, production priorities, customer Orders, quality, co-op, save safety, Weapon Printing, Acid Disposal, Workers, LSD, distribution, and achievements.",
        image: "/images/home/dirty-business-hub.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Beginner progression, production priorities, Orders, quality, Deformed products, Weapon Printing, Acid Disposal, co-op, saves, Workers, LSD, Companies, aircraft, and achievements",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "Dirty Business Leveling & Reputation Guide",
        href: "/dirty-business/leveling-reputation-unlocks",
        type: "Beginner Guide",
        description:
          "Follow the Level 1–38 Reputation route, plan key unlocks, overlap Weed and Weapon production, prepare Workers and LSD, and buy only upgrades that remove real bottlenecks.",
        date: "Updated recently",
        image:
          "/images/dirty-business/dirty-business-level-5-weapon-printing-unlock.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 57,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Level 1–38 route, clean Reputation Orders, penalty comparison, Weapon Printing, Acid Disposal, Worker costs, LSD, Companies, aircraft access, and buy-or-wait decisions",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Dirty Business Customer Orders & Delivery Guide",
        href: "/dirty-business/orders-delivery-guide",
        type: "Systems",
        description:
          "Complete customer Orders, assign elevator boxes, fix Missing Packs, quality and Deformed-product penalties, missing payment, box confusion, and co-op tablet issues.",
        date: "Updated recently",
        image:
          "/images/dirty-business/dirty-business-delivery-drag-box-to-order.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 58,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Order activation, packing, Delivery assignment, Missing Packs, quality requirements, Deformed Weapons, penalty isolation, Complete Selected Orders, Collect Payment, boxes, and co-op",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "Dirty Business Botanist Not Working Guide",
        href: "/dirty-business/workers-not-working",
        type: "Systems",
        description:
          "Fix an Idle Botanist with the correct task, strain, Worker balance, Supply Rack inputs, available Pots and packing stations, Product Rack space, and tutorial recovery steps.",
        date: "Updated recently",
        image:
          "/images/dirty-business/dirty-business-worker-no-plastic-bags.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 59,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Botanist Current Status, Worker balance, task and strain matching, Seeds, Soil, Watering Cans, Plastic Packs, unavailable equipment, Product Rack output, and tutorial fixes",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Dirty Business How to Make LSD",
        href: "/dirty-business/how-to-make-lsd",
        type: "Systems",
        description:
          "Make the first LSD Sheet with Basic Slugs, Slug Food, Slug Extract, the five-Extract Distiller step, Too Hot fix, Blotting Paper, dispensing, and capacity upgrades.",
        date: "Updated recently",
        image:
          "/images/dirty-business/dirty-business-level-30-lsd-unlock.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 60,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Level 30 LSD unlock, Basic Slug, Slug Tank, Slug Food, Slug Extract, five-Extract Distiller load, Too Hot, Blotting Paper, Dispense, first Sheet, and bottlenecks",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "Dirty Business Achievements Guide",
        href: "/dirty-business/achievements-guide",
        type: "Achievements",
        description:
          "Track all 75 achievements with a searchable checklist, one-save strategy, hidden Level 67 goal, production counters, Acid, LSD, banknotes, aircraft, cargo, and trolley cleanup.",
        date: "Updated recently",
        image:
          "/images/dirty-business/dirty-business-achievement-believe-feed-unicorn.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 61,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "All 75 achievements, searchable checklist, one-save strategy, Six. Seven., Back in Business, Acid, Workers, Unicorn, LSD, banknotes, aircraft, cargo, airdrops, and trolley",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
    ],
  },
  {
    title: "Tears of Metal",
    game: "Tears of Metal",
    href: "/tears-of-metal",
    slug: "tears-of-metal",
    kind: "game",
    status: "active",
    accent: "rose",
    archiveCategory: "RPG, action, builds & combat",
    label: "Army Roguelite",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the Tears of Metal guide hub for the first Campaign and Act 1 route, Wallace and Brienne builds, Village upgrades, co-op Host and resource rules, and Gilles and Iseult boss fights.",
    coverage: [
      "First Campaign route to the Great Gates, Threat thresholds, Block, Parry and Dodge decisions, Beacon and Archer Tower priority, Commander rescues, Healing Fonts, Chests, Wallace starter builds, and Gilles preparation",
      "Tested Wallace Delayed Heat, Heavy explosion and Vortex build, Brienne Direct Hits, Burning and Combust build, required Emblems, fallback choices, army formations, encounter fit, and solo or co-op adjustments",
      "Triskeles, Statues, Gems, Scrolls, Dragonstone Shards, Wallace permanent upgrades, Barracks training, Recruitment Drive, Military Advantage, Marriott, Market, Cartographer, Pilgrim's Itinerary, and Ally Monikers",
      "Multiplayer lobby setup, Host-owned item pool, Friends visibility, Lobby Code, shared Village cursors, route confirmation, personal pickups, shared paid Chests, separate Coins, healing assignment, revive costs, and battlefield roles",
      "Gilles normal strings, overhead slam and second form, Iseult Erupting Earth, relocation and clone checks, main-health-bar target confirmation, high-Threat adjustments, minimum Wallace and Brienne builds, and two-player boss roles",
    ],
    image:
      "/images/tears-of-metal/tears-of-metal-gilles-the-hog-boss.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 13,
      footerFeatured: true,
    },
    pages: [
      {
        title: "Tears of Metal Guide Hub",
        href: "/tears-of-metal",
        type: "Guide Hub",
        description:
          "Start here for the first Campaign route, Wallace and Brienne builds, Village progression, co-op Host and resource rules, and Gilles and Iseult boss help.",
        image:
          "/images/tears-of-metal/tears-of-metal-gilles-the-hog-boss.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "First Campaign route, Threat, Wallace and Brienne builds, Village upgrades, co-op Host rules, loot, Coins, revives, Gilles, and Iseult",
        },
        archive: {
          showInCollections: true,
          order: 1,
        },
      },
      {
        title: "Tears of Metal Beginner Guide",
        href: "/tears-of-metal/beginner-guide",
        type: "Beginner Guide",
        description:
          "Plan the Act 1 route to the Great Gates, control Threat, prioritize Beacons and rescues, spend Coins safely, build Wallace, and prepare for Gilles.",
        date: "Updated recently",
        image:
          "/images/tears-of-metal/tears-of-metal-act-one-route-great-gates.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 53,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "Act 1 route, Threat stop rules, Block and Dodge decisions, Beacons, Archer Towers, Commander rescues, Healing Fonts, Chests, Wallace starter builds, and Gilles preparation",
        },
        archive: {
          showInCollections: true,
          order: 2,
        },
      },
      {
        title: "Best Wallace & Brienne Builds in Tears of Metal",
        href: "/tears-of-metal/best-builds",
        type: "Builds",
        description:
          "Build Wallace with Delayed Heat, Heavy explosions, and Vortex, or Brienne with Direct Hits, Burning, Combust, and reliable fallback Emblems.",
        date: "Updated recently",
        image:
          "/images/tears-of-metal/tears-of-metal-wallace-ravager-delayed-heat.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 54,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Wallace Delayed Heat, Heavy explosions, Vortex, Brienne Direct Hits, Burning, Combust, required Emblems, fallback choices, army formations, solo, co-op, and encounter fit",
        },
        archive: {
          showInCollections: true,
          order: 3,
        },
      },
      {
        title: "Tears of Metal Village Upgrades & Upgrade Order",
        href: "/tears-of-metal/village-upgrades",
        type: "Systems",
        description:
          "Choose early hero and Barracks upgrades, understand permanent currencies, compare Market and Cartographer, unlock Marriott, and assign Ally Monikers.",
        date: "Updated recently",
        image:
          "/images/tears-of-metal/tears-of-metal-barracks-upgrades.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 52,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Triskeles, Statues, Gems, Scrolls, Dragonstone Shards, Wallace stats, Barracks upgrades, Recruitment Drive, Military Advantage, Market, Cartographer, Marriott, and Monikers",
        },
        archive: {
          showInCollections: true,
          order: 4,
        },
      },
      {
        title: "Tears of Metal Co-op Guide",
        href: "/tears-of-metal/co-op-guide",
        type: "Systems",
        description:
          "Choose the right Host, start a multiplayer Campaign, confirm routes, assign loot and healing, preserve separate Coins, and handle revive costs safely.",
        date: "Updated recently",
        image:
          "/images/tears-of-metal/tears-of-metal-co-op-route-vote-flag.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 55,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "Host-owned item pool, Friends lobby, Lobby Code, shared Village cursors, route voting, personal pickups, shared paid Chests, separate Coins, healing, revives, and battlefield roles",
        },
        archive: {
          showInCollections: true,
          order: 5,
        },
      },
      {
        title: "Tears of Metal Gilles & Iseult Boss Guide",
        href: "/tears-of-metal/boss-guide",
        type: "Bosses",
        description:
          "Beat Gilles and Iseult with tested attack cues, safe punish windows, Erupting Earth movement, clone checks, Threat advice, and two-player roles.",
        date: "Updated recently",
        image:
          "/images/tears-of-metal/tears-of-metal-iseult-clone-phase.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 56,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Gilles attack strings, overhead slam, second form, Iseult Erupting Earth, relocation, clone checks, main boss health bar confirmation, high Threat, minimum builds, and co-op roles",
        },
        archive: {
          showInCollections: true,
          order: 6,
        },
      },
    ],
  },
  {
    title: "DragonSword Awakening",
    game: "DragonSword Awakening",
    href: "/dragonsword-awakening",
    slug: "dragonsword-awakening",
    kind: "game",
    status: "active",
    accent: "purple",
    archiveCategory: "RPG, action, builds & combat",
    label: "Action RPG",
    eyebrow: "Spotlight Hub",
    hubStatus: "Complete first-wave coverage",
    description:
      "Follow the DragonSword Awakening guide hub for beginner progression, Chapters 1–8, tested team comps, Signal Skills, gear sets, reforging, Basic and Exclusive Karma, Lv.70 Ursula, and the ending.",
    coverage: [
      "First-team investment, Fate's Invitation, early resources, Signal Skills, Active Skill recovery, Regional Missions, World Bosses, Master Skills, Treasure Maps, Familiars, and early progression troubleshooting",
      "Complete Chapter 1–8 main route, the Goblin treasure cave, Alboin's ancient device, Dragon Cult teleport, Bardok's Barrier Stone, northern fog cliff, Rock Tribe investigation, Reina rescue, Ropi, the mural door, Dragon Egg, Worm nest, and final operation",
      "Tested Cerese, Othello, and Dana ranged team, Charlotte, Johnny, and Reina action team, Cerese–Othello–Reina hybrid, Lute survival variation, Signal conditions, switching, rotations, replacements, and investment order",
      "3+2 gear set construction, Azure Gale effects, crafted main stats, Forging Molds, reforge stop rules, Gold costs, Basic Karma, Exclusive Karma, World Boss drops, Hero Logs, dismantling, and Mission Medal resources",
      "Chapter 8 preparation, Dragon Egg and Worm route, Lv.70 Ursula, lightning attacks, both pursuit phases, signal flare, Lute's Dragon-like power, Eona's Legacy, Ropi, the royal ceremony, and the ending"
    ],
    image:
      "/images/dragonsword-awakening/dragonsword-awakening-final-true-dragon-transformation.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    home: {
      featuredHub: true,
      featuredHubSpotlight: true,
      featuredHubOrder: 12,
      footerFeatured: true
    },
    pages: [
      {
        title: "DragonSword Awakening Guide Hub",
        href: "/dragonsword-awakening",
        type: "Guide Hub",
        description:
          "Choose the right DragonSword Awakening guide for beginner progression, Chapters 1–8, team builds, gear and Karma, Lv.70 Ursula, or the ending.",
        image:
          "/images/dragonsword-awakening/dragonsword-awakening-final-true-dragon-transformation.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          spotlightMeta:
            "Beginner progression, Chapters 1–8, tested teams, Signal Skills, gear sets, reforging, Karma, Lv.70 Ursula, and ending coverage"
        },
        archive: {
          showInCollections: true,
          order: 1
        }
      },
      {
        title: "DragonSword Awakening Beginner Guide",
        href: "/dragonsword-awakening/beginner-guide",
        type: "Beginner Guide",
        description:
          "Choose a first team, protect early resources, use Fate's Invitation, activate Signal Skills, and prioritize Regional Missions, World Bosses, Master Skills, and Treasure Maps.",
        date: "Updated recently",
        image:
          "/images/dragonsword-awakening/dragonsword-awakening-break-signal-skill.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 47,
          spotlightFeature: true,
          spotlightOrder: 1,
          spotlightMeta:
            "First team, Fate's Invitation, Signal Skills, early resources, Regional Missions, World Bosses, Master Skills, Treasure Maps, and progression troubleshooting"
        },
        archive: {
          showInCollections: true,
          order: 2
        }
      },
      {
        title: "DragonSword Awakening Chapter 1–8 Walkthrough",
        href: "/dragonsword-awakening/walkthrough",
        type: "Walkthrough",
        description:
          "Complete Chapters 1–8 with fixes for the Goblin cave, ancient device, Dragon Cult teleport, Barrier Stone, fog road, Reina rescue, mural door, Dragon Egg, Worm nest, and final operation.",
        date: "Updated recently",
        image:
          "/images/dragonsword-awakening/dragonsword-awakening-northern-fog-blocked-road-cliff.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 48,
          spotlightFeature: true,
          spotlightOrder: 2,
          spotlightMeta:
            "Chapters 1–8, Goblin cave, ancient device, Dragon Cult altar, Barrier Stone, fog cliff, Reina rescue, Ropi, mural door, Dragon Egg, Worm nest, and final operation"
        },
        archive: {
          showInCollections: true,
          order: 3
        }
      },
      {
        title: "DragonSword Awakening Best Team Comps",
        href: "/dragonsword-awakening/best-team-comps",
        type: "Builds",
        description:
          "Compare tested ranged, action, hybrid, and Lute team variations with Signal conditions, rotations, switching, replacements, defensive responses, and investment priorities.",
        date: "Updated recently",
        image:
          "/images/dragonsword-awakening/dragonsword-awakening-ranged-team-cerese-othello-dana.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 49,
          spotlightFeature: true,
          spotlightOrder: 3,
          spotlightMeta:
            "Cerese ranged team, Charlotte action team, Reina hybrid, Lute survival variation, Signal Skills, rotations, switching, replacements, and investment order"
        },
        archive: {
          showInCollections: true,
          order: 4
        }
      },
      {
        title: "DragonSword Awakening Gear & Karma Guide",
        href: "/dragonsword-awakening/gear-karma-guide",
        type: "Systems",
        description:
          "Build 3+2 gear sets, choose crafted main stats, use Forging Molds safely, control reforge costs, farm Basic Karma, and plan Exclusive Karma upgrades and dismantling.",
        date: "Updated recently",
        image:
          "/images/dragonsword-awakening/dragonsword-awakening-reforge-50000-gold-cost.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 50,
          spotlightFeature: true,
          spotlightOrder: 4,
          spotlightMeta:
            "3+2 gear sets, Azure Gale, main stats, Forging Molds, 50,000 Gold reforges, Basic Karma, Exclusive Karma, dismantling, World Bosses, and material routes"
        },
        archive: {
          showInCollections: true,
          order: 5
        }
      },
      {
        title: "DragonSword Awakening Ursula Final Boss & Ending",
        href: "/dragonsword-awakening/ending-final-boss",
        type: "Endings",
        description:
          "Beat Lv.70 Ursula, follow the Dragon Egg and Worm route, survive lightning and both pursuits, use the signal flare, and understand Eona's Legacy, Lute, Ropi, and the ending.",
        date: "Updated recently",
        image:
          "/images/dragonsword-awakening/dragonsword-awakening-ursula-transformation.webp",
        imageFit: "cover",
        imagePosition: "center",
        imagePadding: false,
        home: {
          latest: true,
          latestFeatured: true,
          latestOrder: 51,
          spotlightFeature: true,
          spotlightOrder: 5,
          spotlightMeta:
            "Dragon Egg, Worm route, Lv.70 Ursula, lightning attacks, both pursuits, signal flare, Lute's Dragon power, Eona's Legacy, Ropi, ceremony, and ending"
        },
        archive: {
          showInCollections: true,
          order: 6
        }
      }
    ]
  },
  {
    "title": "ZeroSpace",
    "game": "ZeroSpace",
    "href": "/zerospace",
    "slug": "zerospace",
    "kind": "game",
    "status": "active",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "RTS Command",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Complete first-wave coverage",
    "description":
      "Follow the ZeroSpace guide hub for beginner economy and production, the Act 1 Campaign walkthrough, Mission 3 Arcadia, Old Bessie, the final swarm, alliances, Capture Points, Jump Fuel, and System Mastery.",
    "coverage": [
      "Beginner RTS economy, Hexite, Flux, Supply, blocked production, Production Tab routing, Harvesters, heroes, expansions, Strider transport, Mercenary charges, and first-base troubleshooting",
      "Act 1 mission order, Operation Moby, the Trisaris diversion, ship boarding, five Koru Hearts, City Uprising, Deru Laboratory, four bunkers, Machine Works, Trinity, Kris, and confirmed choice consequences",
      "Mission 3 Arcadia opening build, Supply Platform rocket turrets, Flux timing, Bastions, Moran heavy gunners, Old Bessie, the southern Grell source, final swarm preparation, and the Colonists-or-Militia evacuation choice",
      "Galactic War alliances, galaxy-map routing, Capture Points, occupation bonuses, Jump Fuel, Credits, Influence, Commander XP, four-level System Mastery, Play Co-op, Play with AI, and system-capture troubleshooting"
    ],
    "image":
      "/images/zerospace/zerospace-galactic-war-galaxy-map.webp",
    "imageFit": "cover",
    "imagePosition": "center",
    "imagePadding": false,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 11,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "ZeroSpace Guide Hub",
        "href": "/zerospace",
        "type": "Guide Hub",
        "description":
          "Start here for beginner economy, Act 1 missions and choices, the Mission 3 Arcadia defense, Old Bessie, the final swarm, Capture Points, Jump Fuel, and System Mastery.",
        "image":
          "/images/zerospace/zerospace-galactic-war-galaxy-map.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "spotlightMeta":
            "Beginner economy, Act 1 Campaign, Mission 3 Arcadia, Old Bessie, final swarm, alliances, Capture Points, Jump Fuel, and System Mastery"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "ZeroSpace Beginner Guide",
        "href": "/zerospace/beginner-guide",
        "type": "Beginner Guide",
        "description":
          "Learn Hexite, Flux, Supply, production queues, Harvesters, heroes, expansion timing, Strider transport, Mercenary deployment, and the first stable base route.",
        "date": "Updated recently",
        "image":
          "/images/zerospace/zerospace-tutorial-production-tab.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 43,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta":
            "Hexite, Flux, Supply, blocked production, Production Tab, Harvesters, heroes, expansion timing, Striders, Mercenaries, and first-base troubleshooting"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "ZeroSpace Act 1 Campaign Walkthrough",
        "href": "/zerospace/campaign-walkthrough-choices",
        "type": "Walkthrough",
        "description":
          "Complete Act 1 with Operation Moby objectives, the Trisaris decision, ship boarding, five Koru Hearts, Deru Laboratory, Machine Works, Trinity, and confirmed choices.",
        "date": "Updated recently",
        "image":
          "/images/zerospace/zerospace-operation-moby-forward-base.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 44,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta":
            "Operation Moby, Trisaris, ship boarding, Kris, five Koru Hearts, City Uprising, Deru Laboratory, four bunkers, Machine Works, Trinity, and confirmed choices"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "ZeroSpace Mission 3 Arcadia Walkthrough",
        "href": "/zerospace/mission-3-arcadia-walkthrough",
        "type": "Walkthrough",
        "description":
          "Stabilize the Arcadia base, start Flux income, upgrade rocket turrets, kill Old Bessie, destroy the southern Grell source, survive the final swarm, and choose an evacuation route.",
        "date": "Updated recently",
        "image":
          "/images/zerospace/zerospace-arcadia-final-swarm.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 45,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta":
            "Opening build, Flux timing, rocket turrets, Bastions, heavy gunners, Old Bessie, southern Grell source, final swarm, and Colonists-or-Militia choice"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "ZeroSpace Galactic War Guide",
        "href": "/zerospace/galactic-war-beginner-guide",
        "type": "Systems",
        "description":
          "Understand alliances, Capture Points, Jump Fuel, occupation bonuses, System Mastery, Credits, Influence, Commander XP, system travel, Co-op, and AI missions.",
        "date": "Updated recently",
        "image":
          "/images/zerospace/zerospace-galactic-war-galaxy-map.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 46,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta":
            "Alliances, galaxy map, Capture Points, occupation bonuses, Jump Fuel, Credits, Influence, Commander XP, four-level System Mastery, Co-op, and AI"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      }
    ]
  },
  {
    "title": "Happy's Humble Burger Cult",
    "game": "Happy's Humble Burger Cult",
    "href": "/happys-humble-burger-cult",
    "slug": "happys-humble-burger-cult",
    "kind": "game",
    "status": "active",
    "accent": "rose",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Shift Survival",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Complete first-wave coverage",
    "description":
      "Follow the Happy's Humble Burger Cult guide hub from the Tutorial and first restaurant through core sandwich recipes, Weird Sandwich fixes, Salmon Nuggets, bagging, quota, Overtime, Closeout Duties, and the elevator escape.",
    "coverage": [
      "Tutorial route, essential controls, Solo versus Co-op, first restaurant orientation, contract and modifier choices, the first three-item order, Simulation Stability, first quota, and first elevator escape",
      "Order categories, verified Deep Sea Sammy, Vegan Surprise, Dairy Fairy, and Peppery Breast stacks, Weird Sandwich fixes, Salmon Nuggets, baked goods, drinks, bagging, incorrect deliveries, Pickup, Drive-Thru, kitchen roles, and Toe",
      "Quota versus completed shifts, Overtime decisions, clock-out sequence, Closeout Duty streak scaling, Restock, grease, rat traps, Thermostats, appliances, fires, trash, Solo priorities, Co-op splits, and Escape",
      "July 18 balance patch changes, one-duty fresh streaks, remaining Stability delaying Joy, Pacifist Mode, input rebinding, troubleshooting, and tested launch-week evidence boundaries"
    ],
    "image":
      "/images/happys-humble-burger-cult/happys-humble-burger-cult-first-lobby-order.webp",
    "imageFit": "cover",
    "imagePosition": "center",
    "imagePadding": false,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 10,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Happy's Humble Burger Cult Guide Hub",
        "href": "/happys-humble-burger-cult",
        "type": "Guide Hub",
        "description":
          "Start here for the first shift, core recipes, Weird Sandwiches, Salmon Nuggets, bagging errors, quota, Overtime, Closeout Duties, and the elevator escape.",
        "image":
          "/images/happys-humble-burger-cult/happys-humble-burger-cult-first-lobby-order.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "spotlightMeta":
            "First shift, Solo and Co-op, core recipes, Weird Sandwiches, Salmon Nuggets, bagging, quota, Overtime, Closeout Duties, and elevator escape"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Happy's Humble Burger Cult First Shift Guide",
        "href": "/happys-humble-burger-cult/beginner-guide",
        "type": "Beginner Guide",
        "description":
          "Complete the first shift with the Tutorial, essential controls, Solo or Co-op roles, first restaurant route, modifier choice, first order, quota, Closeout, and elevator.",
        "date": "Updated recently",
        "image":
          "/images/happys-humble-burger-cult/happys-humble-burger-cult-first-restaurant-tablet-map.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 40,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta":
            "Tutorial, essential controls, Solo versus Co-op, first restaurant route, contract and modifier choice, first three-item order, quota, Closeout, and elevator"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Happy's Humble Burger Cult Orders & Kitchen Guide",
        "href": "/happys-humble-burger-cult/orders-kitchen-guide",
        "type": "Systems",
        "description":
          "Follow core sandwich stacks, fix Weird Sandwiches, find Salmon Nuggets, bag orders correctly, diagnose incorrect deliveries, and separate Lobby, Pickup, and Drive-Thru.",
        "date": "Updated recently",
        "image":
          "/images/happys-humble-burger-cult/happys-humble-burger-cult-recipe-list-over-picture.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 41,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta":
            "Deep Sea Sammy, Vegan Surprise, Dairy Fairy, Peppery Breast, Weird Sandwich fixes, Salmon Nuggets, bagging, delivery errors, Pickup, Drive-Thru, roles, and Toe"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Happy's Humble Burger Cult Quota & Closeout Guide",
        "href": "/happys-humble-burger-cult/quota-overtime-closeout-guide",
        "type": "Systems",
        "description":
          "Understand quota, decide whether Overtime is worth it, clock out correctly, complete Restock and Thermostat tasks, clear Closeout, and unlock the elevator.",
        "date": "Updated recently",
        "image":
          "/images/happys-humble-burger-cult/happys-humble-burger-cult-closeout-duty-list.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 42,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta":
            "Quota versus shift completion, Overtime, clock-out, duty streak scaling, Restock, grease, traps, Thermostats, appliances, fires, trash, Solo route, and Escape"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Ore Factory Squad",
    "game": "Ore Factory Squad",
    "href": "/ore-factory-squad",
    "slug": "ore-factory-squad",
    "kind": "game",
    "status": "active",
    "accent": "amber",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Factory Route",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Complete first-wave coverage",
    "description":
      "Follow the Ore Factory Squad guide hub from Greenpark Lot to Level 5 with factory storage, Stock Sell, contracts, the Mining Lift, Cement, property switching, Dynamite, Copper, Iron, and the first Smelting Furnace setup.",
    "coverage": [
      "Greenpark Lot purchase, the first 12 ore, Sorting Station setup, Factory Storage, tracked product pallets, early upgrades, first sales, contracts, Mining Lift progression, and the Level 5 route",
      "Marked storage, Stock Sell demand, partial pallets, finished-product tracking, direct sales, exact contract products, Pallet Packer setup, blocked outputs, deadlines, truck loading, and delivery",
      "Lift Head placement, Lift Extensions, Ladder is blocked fixes, packed mining-box transfer, Surface, Mid, and Deep Layers, Remaining Resources, and efficient shaft planning",
      "Limestone detection, Limestone Blocks, the tested 2:1 Cement recipe, Forming Press setup, Dynamite costs, reduced yield, Secret Cave access, and precision mining",
      "Greenpark removal, the one-Active-Property restriction, Westmont, Forest listings, Copper and Iron test loads, the $2,000 Metal Processing License #1, the $1,500 Smelting Furnace, Ingots, and Plates"
    ],
    "image":
      "/images/ore-factory-squad/ore-factory-squad-first-property-purchase.webp",
    "imageFit": "cover",
    "imagePosition": "center",
    "imagePadding": false,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 9,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Ore Factory Squad Guide Hub",
        "href": "/ore-factory-squad",
        "type": "Guide Hub",
        "description":
          "Start here for Greenpark-to-Level-5 progression, factory storage, sales, contracts, Mining Lift routes, Cement, property switching, Dynamite, Copper, Iron, and smelting.",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-first-property-purchase.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "spotlightMeta":
            "Greenpark to Level 5, factory storage, Stock Sell, contracts, Mining Lift, Cement, properties, Dynamite, Copper, Iron, and first-stage smelting"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Ore Factory Squad Beginner Guide",
        "href": "/ore-factory-squad/beginner-guide",
        "type": "Beginner Guide",
        "description":
          "Follow the tested Greenpark Lot to Level 5 route with the first 12 ore, Sorting Station, storage, sales, contracts, upgrades, Mining Lift, and early metal progression.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-first-property-purchase.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 37,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta":
            "Greenpark Lot, first 12 ore, Sorting Station, Factory Storage, sales, contracts, upgrades, Mining Lift, Remaining Resources, and Level 5"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Ore Factory Squad How to Sell Products",
        "href": "/ore-factory-squad/how-to-sell-products",
        "type": "Systems",
        "description":
          "Fix products missing from Stock Sell, place finished pallets inside marked storage, read buyer demand, sell partial pallets, and protect useful contract stock.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-stock-sell-coal-offer.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 32,
          "spotlightRail": true,
          "spotlightOrder": 8,
          "spotlightMeta":
            "Marked storage, tracked inventory, partial pallets, buyer demand, Stock Sell offers, night restrictions, XP, and sell-or-keep decisions"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Ore Factory Squad Contracts & Pallet Packer Guide",
        "href": "/ore-factory-squad/complete-contracts-pallet-packer",
        "type": "Systems",
        "description":
          "Choose achievable contracts, match exact finished products, configure the Pallet Packer, clear blocked outputs, load the truck, and complete delivery before the deadline.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-contract-pallet-packer.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 36,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta":
            "Contract selection, negotiation, exact product stages, Pallet Packer setup, Contract Output, Excess Output, blocked outputs, deadlines, bonuses, and delivery"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Ore Factory Squad Mining Lift Guide",
        "href": "/ore-factory-squad/mining-lift-guide",
        "type": "Systems",
        "description":
          "Place the Mining Lift Head, add Extensions safely, fix Ladder is blocked, move packed mining boxes, and build a practical route through lower resource layers.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-mining-lift-full-depth-route.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 35,
          "spotlightRail": true,
          "spotlightOrder": 5,
          "spotlightMeta":
            "Lift Head placement, $10 Extensions, Ladder is blocked, upper and lower landings, packed mining boxes, electrical obstacles, and shaft depth"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "Ore Factory Squad Limestone & Cement Guide",
        "href": "/ore-factory-squad/find-limestone-make-cement",
        "type": "Guide",
        "description":
          "Find Limestone below the Surface, distinguish it from Sandstone, make Limestone Blocks, use the Forming Press, and calculate the tested 2:1 Cement recipe.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-cement-recipe-forming-press.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 34,
          "spotlightRail": true,
          "spotlightOrder": 6,
          "spotlightMeta":
            "Remaining Resources, Detector readings, Limestone versus Sandstone, Limestone Blocks, the 2:1 Cement recipe, Forming Press setup, and output troubleshooting"
        },
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      },
      {
        "title": "Ore Factory Squad Remaining Resources & Property Guide",
        "href": "/ore-factory-squad/remaining-resources-switch-property",
        "type": "Systems",
        "description":
          "Read Surface, Mid, and Deep reserves, fix Remove your first property first, recover Greenpark safely, and choose Westmont or Forest for the next production stage.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-remove-first-property-warning.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 38,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta":
            "Remaining Resources, Surface, Mid and Deep Layers, Greenpark recovery, one Active Property, Westmont, Forest, Woodland Lot, Copper, Iron, and test loads"
        },
        "archive": {
          "showInCollections": true,
          "order": 7
        }
      },
      {
        "title": "Ore Factory Squad Dynamite Guide",
        "href": "/ore-factory-squad/dynamite-worth-it",
        "type": "Guide",
        "description":
          "Decide when Dynamite is worth using with the $600 unlock, $50 throws, reduced resource yield, Secret Cave access, safe blast placement, and tool comparisons.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-dynamite-cost-reduced-yield.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 33,
          "spotlightRail": true,
          "spotlightOrder": 7,
          "spotlightMeta":
            "$600 unlock, $50 throws, repeated blast costs, reduced resource yield, Secret Caves, safe use, Detector targeting, Pickaxe cleanup, and Mining Lift routes"
        },
        "archive": {
          "showInCollections": true,
          "order": 8
        }
      },
      {
        "title": "Ore Factory Squad Copper & Iron Ingot Guide",
        "href": "/ore-factory-squad/smelt-copper-iron-ingots",
        "type": "Systems",
        "description":
          "Buy Metal Processing License #1 and the Smelting Furnace, move Copper and Iron into Factory Storage, make Ingots, switch recipes, and fix missing output.",
        "date": "Updated recently",
        "image":
          "/images/ore-factory-squad/ore-factory-squad-level-four-unlocks.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 39,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta":
            "$2,000 Metal Processing License #1, $1,500 Smelting Furnace, $3,500 confirmed budget, Factory Storage, Copper and Iron Ingots, recipe switching, output pallets, and Plates"
        },
        "archive": {
          "showInCollections": true,
          "order": 9
        }
      }
    ]
  },
  {
    "title": "The Incident at Galley House",
    "game": "The Incident at Galley House",
    "href": "/the-incident-at-galley-house",
    "slug": "the-incident-at-galley-house",
    "kind": "game",
    "status": "active",
    "accent": "cyan",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Deduction Mystery",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Complete first-wave coverage",
    "description": "Follow The Incident at Galley House guide hub for progressive puzzle hints, all 106 scene codes, Person 1–11 identities, Person 12 and Person K, all 15 achievements, the modern investigation, and the full ending explanation.",
    "coverage": [
      "Reconstruction machine setup, Time-Location-People code structure, all room abbreviations, rejected-code diagnosis, silent participants, thunderclaps, early-game routing, and the exact Time 31 solution",
      "All 106 valid reconstructions across Times 01–32, the original case, hidden profiles, modern IDs, Scene 00, achievement-only inputs, and Person 1–11 name and animal-portrait matches",
      "Rupert Galley as Person 12, Katherine Beaumont as Person K, Fox and Deer evidence, Manual Calibration, Amelia West, Wintercote, 01-ST-12, and 25-WI-K",
      "All 15 Steam achievements, launch completion-rate snapshot, Persistence, House Tour, Full House, Death Note, Still Alive, TYPE HE-L-P, Hallucination, Spectronoeticist, and completed-save cleanup",
      "Amelia West, the emotional memory chain, the historical Galley House incident, modern thunderclaps, Pippa, Lawrence, Megan, Ervin Dolskey's containment plan, Reya's survival, Eleanor's memorial, and Scene 00"
    ],
    "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-code-machine.webp",
    "imageFit": "cover",
    "imagePadding": false,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 7,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "The Incident at Galley House Guide Hub",
        "href": "/the-incident-at-galley-house",
        "type": "Guide Hub",
        "description": "Start here for spoiler-safe hints, the complete scene-code walkthrough, hidden Person 12 and Person K solutions, all achievements, modern investigation help, and the ending explanation.",
        "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-code-machine.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "spotlightMeta": "Progressive hints, all 106 scene codes, Person 1–11 identities, Person 12 and K, achievements, modern investigation help, and ending spoilers"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "The Incident at Galley House All Scene Codes",
        "href": "/the-incident-at-galley-house/all-scene-codes",
        "type": "Walkthrough",
        "description": "Find all 106 valid scene codes for Times 01–32, Person 1–11 names and portraits, Person 12, Person K, modern IDs, achievement inputs, and Scene 00.",
        "date": "Updated recently",
        "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-first-scene-code.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 27,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "All 106 original, hidden, modern, and Scene 00 reconstructions, plus Person 1–11 names, portraits, special codes, and code troubleshooting"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "The Incident at Galley House Hints & Scene Solutions",
        "href": "/the-incident-at-galley-house/hints",
        "type": "Puzzle Help",
        "description": "Use progressive hints, fix rejected scene codes, decode every room abbreviation, solve Time 31, track thunderclaps, and find missing participants without revealing every answer.",
        "date": "Updated recently",
        "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-time-31-reya-lawrence.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 28,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Progressive scene hints, machine setup, all room abbreviations, rejected-code diagnosis, silent participants, thunderclaps, and Time 31"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "The Incident at Galley House Person 12 & Person K",
        "href": "/the-incident-at-galley-house/person-12-person-k",
        "type": "Puzzle Help",
        "description": "Identify Rupert Galley as Person 12 and Katherine Beaumont as Person K, match Fox and Deer, and solve the hidden 01-ST-12 and 25-WI-K scenes.",
        "date": "Updated recently",
        "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-person-12-code.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 29,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Rupert Galley, Katherine Beaumont, Fox, Deer, Manual Calibration, Amelia West, Wintercote, 01-ST-12, and 25-WI-K"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "The Incident at Galley House Achievements Guide",
        "href": "/the-incident-at-galley-house/achievements-guide",
        "type": "Achievements",
        "description": "Unlock all 15 achievements in one save with exact codes for Person 12, Person K, Still Alive, TYPE HE-L-P, Hallucination, Spectronoeticist, and Scene 00.",
        "date": "Updated recently",
        "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-achievement-progress.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 30,
          "spotlightRail": true,
          "spotlightOrder": 4,
          "spotlightMeta": "All 15 achievements, launch completion rates, hidden profiles, Still Alive, TYPE HE-L-P, Hallucination, Spectronoeticist, and one-save cleanup"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "The Incident at Galley House Ending Explained",
        "href": "/the-incident-at-galley-house/ending-explained",
        "type": "Endings",
        "description": "Understand Amelia West, the emotional memory chain, modern thunderclaps, Ervin Dolskey's plan, why Reya survives, Eleanor's memorial, and Scene 00.",
        "date": "Updated recently",
        "image": "/images/the-incident-at-galley-house/the-incident-at-galley-house-ervin-emotional-connections-rule.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestOrder": 31,
          "spotlightRail": true,
          "spotlightOrder": 5,
          "spotlightMeta": "Amelia West, the three memory-chain rules, Pippa, Lawrence, Megan, Ervin's containment plan, Reya's survival, Eleanor, and Scene 00"
        },
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      }
    ]
  },
  {
    "title": "Ascend to ZERO",
    "game": "Ascend to ZERO",
    "href": "/ascend-to-zero",
    "slug": "ascend-to-zero",
    "kind": "game",
    "status": "active",
    "accent": "amber",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Time-Loop Guide",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the Ascend to ZERO guide hub for Limited Time, Time Stop, first-run progression, survivor services, Entry Stats, item processing, Stage 2, verified Avatar builds, and all 58 achievements.",
    "coverage": [
      "First-run Institute route, the 30-second Limited Time clock, Time Stop, Avatar Skills, elite targeting, common-enemy farming, Area Expanders, and when to return to the Underground Bunker",
      "Seis, Gabriella, Javier, Mai, and BIVI survivor unlocks, the Supply Shop, Time Machine Entry Stats, Warehouse, Conversion, Extraction, equipment upgrades, and Handbook progression",
      "Attack, Defense, Health, Agility, and Luck, early Entry Stat priorities, Zero Coins, Zero Cells, Zero Keys, temporary versus permanent equipment, weapon slots, Gadget slots, and beginner Tech Chips",
      "Terrae Motus, the Central Control Room, the post-boss EXIT, the Level Two dialogue choice, the three different Lv.20,000 labels, and the first Desert objective",
      "Verified Chrono Child, Blossom Blade, Golden Gunslinger, and Scarlet Pirate builds, weapon tags, Tech Chip priorities, all 58 achievements, missable checks, Stage 4, Multidimension Mode, and BIVI cleanup"
    ],
    "image": "/images/ascend-to-zero/ascend-to-zero-limited-time-time-stop.webp",
    "imageFit": "cover",
    "imagePadding": false,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 6,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Ascend to ZERO Guide Hub",
        "href": "/ascend-to-zero",
        "type": "Guide Hub",
        "description": "Start here for Limited Time, Time Stop, the Institute route, survivor services, Entry Stats, currencies, item processing, Tech Chips, Terrae Motus, and the Desert.",
        "image": "/images/ascend-to-zero/ascend-to-zero-limited-time-time-stop.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "spotlightMeta": "Limited Time, Time Stop, elite routes, survivor services, Entry Stats, equipment processing, currencies, Terrae Motus, and Desert progression"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Ascend to ZERO Stage 2 & Desert Unlock Guide",
        "href": "/ascend-to-zero/how-to-unlock-stage-2-desert",
        "type": "Walkthrough",
        "description": "Defeat Terrae Motus, use the post-boss EXIT, choose the correct Level Two dialogue, and understand why the Desert Lv.20,000 objective is not a prerequisite.",
        "date": "Updated recently",
        "image": "/images/ascend-to-zero/ascend-to-zero-terrae-motus-stage-2-exit.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 24,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "Central Control Room, Terrae Motus, post-boss EXIT, Level Two dialogue, three Lv.20,000 labels, and first Desert-room troubleshooting"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Ascend to ZERO Best Builds & Avatar Tier List",
        "href": "/ascend-to-zero/best-builds",
        "type": "Builds",
        "description": "Compare the verified Avatar tier list, weapon tags, Tech Chip priorities, and practical builds for Chrono Child, Blossom Blade, Golden Gunslinger, and Scarlet Pirate.",
        "date": "Updated recently",
        "image": "/images/ascend-to-zero/ascend-to-zero-avatar-skill-comparison.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 25,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Verified Avatar tier list, Chrono Child, Blossom Blade, Golden Gunslinger, Scarlet Pirate, weapon tags, Tech Chips, boss checks, and Build fixes"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Ascend to ZERO Achievements Guide",
        "href": "/ascend-to-zero/achievements-guide",
        "type": "Achievements",
        "description": "Complete all 58 achievements with missable checks, a four-phase roadmap, Avatar setups, Conversion traps, Bunker milestones, Stage 4, Multidimension Mode, and BIVI cleanup.",
        "date": "Updated recently",
        "image": "/images/ascend-to-zero/ascend-to-zero-achievement-end-of-predator.webp",
        "imageFit": "cover",
        "imagePadding": false,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 26,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "All 58 achievements, missable checks, four-phase roadmap, Avatar challenges, Conversion setups, Stage 4, Mode 12, and BIVI completion"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Backyard Baseball 2026",
    "game": "Backyard Baseball 2026",
    "href": "/backyard-baseball",
    "slug": "backyard-baseball",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Team Planner",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the Backyard Baseball 2026 guide hub for beginner controls, all five difficulties, League Play, the S- and A-tier list, the best team and lineup, player unlocks, card packs, Tokens, and all 51 achievements.",
    "coverage": [
      "First-hour route, Tutorial, Quick Play, Pickup Game, Backyard Derby, Wiggle Ball, League Play, batting timing, pitching, manual fielding, runner control, sprinting, sliding, and Power-Up strategy",
      "New Kid, Sandlot Star, Playground Pro, Backyard Legend, and Neighborhood Hero difficulty progression, Swing Spot Assist, Errors, Hot and Cold Players, Birthday Boost, day and night settings, and multiplayer availability",
      "Eight-team and 14-game League structure, BYB All-City Playoffs, Super Entire Nation Tournament, Ultra Grand Championship, pitching stamina, substitutions, defensive alignment, postseason planning, and championship progression",
      "Complete S- and A-tier player ratings, recommended nine-player team, batting order, fielding lineup, pitching rotation, Pete Wheeler, Pablo Sanchez, Angela Delvecchio, Kenny Kawaguchi, Kiesha Phillips, boosts, and Custom Kid builds",
      "Sixteen known selectable unlocks, Mr. Clanky, Vinnie the Gooch, Sunny Day, six hidden Backyard Kids, seven MLB Pros, card and Token routes, all 51 achievements, five-phase 100% roadmap, hidden conditions, card collection, and unlock troubleshooting"
    ],
    "image": "/images/home/backyard-baseball-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 5,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Backyard Baseball 2026 Guide Hub",
        "href": "/backyard-baseball",
        "type": "Spotlight Coverage",
        "description": "Start here for beginner controls, six game modes, five difficulties, League Play, the S- and A-tier list, player unlocks, card packs, Tokens, and all 51 achievements.",
        "image": "/images/home/backyard-baseball-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "First-hour route, six game modes, five difficulties, 14-game League, Tier List, best team, hidden players, MLB Pros, cards, Tokens, and all 51 achievements"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Backyard Baseball 2026 Beginner Guide",
        "href": "/backyard-baseball/beginner-guide",
        "type": "Guide",
        "description": "Learn batting, pitching, fielding, runner control, sliding, stamina, substitutions, all six Power-Ups, and which of the five difficulties to choose.",
        "date": "Updated recently",
        "image": "/images/home/backyard-baseball-beginner-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 20,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "First-game settings, five difficulties, batting timing, pitching stamina, fielding, runner control, sliding, substitutions, and all six Power-Ups"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Backyard Baseball 2026 Best Players & Tier List",
        "href": "/backyard-baseball/best-players-team-lineup",
        "type": "Guide",
        "description": "Compare S- and A-tier player ratings, copy the recommended nine-player team, and plan the best batting order, fielding lineup, rotation, boosts, and Custom Kid build.",
        "date": "Updated recently",
        "image": "/images/home/backyard-baseball-best-players-tier-list.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 21,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "S- and A-tier ratings, recommended nine-player roster, batting order, fielding lineup, pitching rotation, player boosts, and Custom Kid builds"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Backyard Baseball 2026 Unlock All Players Guide",
        "href": "/backyard-baseball/unlock-all-players",
        "type": "Guide",
        "description": "Unlock Mr. Clanky, Vinnie the Gooch, Sunny Day, six hidden Backyard Kids, and seven MLB Pros with card, Token, Derby, Wiggle Ball, and League routes.",
        "date": "Updated recently",
        "image": "/images/home/backyard-baseball-unlock-all-players.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 22,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Mr. Clanky, Vinnie, Sunny Day, six hidden Backyard Kids, seven MLB Pros, card pulls, Tokens, steals, Derby targets, and League routes"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Backyard Baseball 2026 Achievements Guide",
        "href": "/backyard-baseball/achievements-guide",
        "type": "Guide",
        "description": "Complete all 51 achievements with a five-phase 100% roadmap covering hidden conditions, strikeouts, League trophies, Power-Ups, player unlocks, and card collection.",
        "date": "Updated recently",
        "image": "/images/home/backyard-baseball-achievements-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 23,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "All 51 achievements, five-phase roadmap, strikeout strategy, League double plays, postseason trophies, second championship, hidden conditions, and card cleanup"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      }
    ]
  },
  {
    "title": "Forest Escape Last Train",
    "game": "Forest Escape: Last Train",
    "href": "/forest-escape-last-train",
    "slug": "forest-escape-last-train",
    "kind": "game",
    "status": "active",
    "accent": "emerald",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Route Map",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the Forest Escape Last Train guide hub for first-run survival, puzzle solutions, The Depot Cannon Carriage, the complete Warden boss route, all 41 achievements, Warden Keys, and newspapers.",
    "coverage": [
      "Three starting points, Easy vs Normal vs Hard, Front Light, Train Horn, Control Lever, confirmed controls, Coal, furnace temperature, braking, reversing, derailment fixes, and first-run departure planning",
      "Barricades, shop prices, Aid Kits, Respawn Tokens, Revolver ammo, early threats, safe revives, checkpoints, solo play, online co-op, and Engineer-Scout role division",
      "Music Rails 1-2-5-4-3 sequence, Iris Lake six-torch route, Carousel horse emotes, Trippy Grid clown rules, and Blue, Green, Red, and Yellow Key solutions",
      "The Depot railway switches, Cannon Carriage attachment, six-key Boss Door, 1 Coal plus 2 Rock cannon cost, Eye and Ear swarms, poison movement, Warden platform puzzles, and final Ear strategy",
      "All 41 achievements, three-pass cleanup route, confirmed Warden-key rewards, newspaper tracking, Ring, Mythbuster, Monster Hunter planning, resources, gold, and ammunition"
    ],
    "image": "/images/home/forest-escape-last-train-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 4,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Forest Escape Last Train Guide Hub",
        "href": "/forest-escape-last-train",
        "type": "Spotlight Coverage",
        "description": "Start here for first-run survival, four verified puzzle solutions, the complete Warden boss route, all 41 achievements, Warden Keys, and newspapers.",
        "image": "/images/home/forest-escape-last-train-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "First-run survival, four verified puzzles, The Depot, Cannon Carriage, complete Warden strategy, all 41 achievements, Warden Keys, and newspapers"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Forest Escape Last Train Beginner Guide",
        "href": "/forest-escape-last-train/beginner-guide",
        "type": "Guide",
        "description": "Survive your first run with train-part locations, difficulty advice, confirmed controls, Coal management, shop priorities, revives, checkpoints, and co-op roles.",
        "date": "Updated recently",
        "image": "/images/home/forest-escape-last-train-beginner-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 16,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "Three starting points, difficulty choice, train parts, controls, Coal, furnace temperature, shops, revives, checkpoints, solo play, and co-op roles"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Forest Escape Last Train Puzzle Guide",
        "href": "/forest-escape-last-train/locations-puzzle-guide",
        "type": "Guide",
        "description": "Solve Music Rails, Iris Lake, Carousel, and Trippy Grid with the chime order, six-torch route, horse poses, and all four colored maze keys.",
        "date": "Updated recently",
        "image": "/images/home/forest-escape-last-train-puzzle-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 17,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Music Rails 1-2-5-4-3, Iris Lake six torches, Carousel horse poses, Trippy Grid clown rules, and all four colored keys"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Forest Escape Last Train Warden Boss Guide",
        "href": "/forest-escape-last-train/warden-boss-guide",
        "type": "Guide",
        "description": "Beat the Warden with The Depot Cannon Carriage, six Warden Keys, cannon resource management, poison movement, platform puzzles, and final Ear strategy.",
        "date": "Updated recently",
        "image": "/images/home/forest-escape-last-train-warden-boss-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 18,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "The Depot, Cannon Carriage, six-key Boss Door, 1 Coal plus 2 Rock shots, poison, Eye and Ear swarms, boss puzzles, and final Ear"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Forest Escape Last Train Achievements Guide",
        "href": "/forest-escape-last-train/achievements-guide",
        "type": "Guide",
        "description": "Complete all 41 achievements with a three-pass roadmap, Warden-key rewards, newspaper tracking, revive routes, Ring planning, and exact resource calculations.",
        "date": "Updated recently",
        "image": "/images/home/forest-escape-last-train-achievements-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 19,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "All 41 achievements, Warden Keys, newspapers, Ring, revives, Mythbuster, Monster Hunter, gold, ammunition, and final-route achievements"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      }
    ]
  },
  {
    "title": "Granblue Relink Endless Ragnarok",
    "game": "Granblue Fantasy: Relink",
    "href": "/granblue-relink-endless-ragnarok",
    "slug": "granblue-relink-endless-ragnarok",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Route Map",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Granblue Relink Endless Ragnarok guide hub for start requirements, Seedhollow, Conflux, Fatebreaker, Chaos, AI teams, new characters, Crewmate Cards, summons, Master Traits, and late progression.",
    "coverage": [
      "Save-state checks, Seedhollow route, Chapter 6 Conflux access, DLC not showing up fixes, fresh-save vs returning-save routing, and what to do first",
      "Conflux portal routing, aura priorities, reward chests, cycles, Resonance points, gray exit timing, and when to farm before Chaos",
      "Seofon and Tweyen trial, Fate Breaker grade, Chaos-level quests, Fatebreaker sigils, stable-clear checks, and when to return to Conflux",
      "Solo AI team setup, Eugen, Cagliostro, Zeta, Backup Character, Damage Cap, survival sigils, Conflux catch-up, and Chaos-ready party stability",
      "Beatrix, Eustace, Fraux, Fediel, Gallanza, Maglielle, Crewmate Card costs, Chapter Ø unlocks, manual vs AI testing, and who to build first"
    ],
    "image": "/images/home/granblue-relink-endless-ragnarok-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 3,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Granblue Relink Endless Ragnarok Guide Hub",
        "href": "/granblue-relink-endless-ragnarok",
        "type": "Spotlight Coverage",
        "description": "Start here for Endless Ragnarok requirements, Seedhollow, Conflux, Fatebreaker, Chaos, AI teams, new characters, summons, Master Traits, and stuck fixes.",
        "image": "/images/home/granblue-relink-endless-ragnarok-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "Start route, Seedhollow, Conflux, Fatebreaker, Chaos, AI teams, new characters, summons, Master Traits, and stuck fixes"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Granblue Relink Endless Ragnarok: How to Start",
        "href": "/granblue-relink-endless-ragnarok/how-to-start",
        "type": "Guide",
        "description": "Start Endless Ragnarok from Seedhollow, check requirements, unlock Conflux, fix DLC not showing up, and follow fresh or returning save routes.",
        "date": "Updated recently",
        "image": "/images/home/granblue-relink-endless-ragnarok-how-to-start.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 11,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "Seedhollow, save-state checks, Chapter 6 Conflux access, DLC not showing up, fresh-save routing, and returning-save route"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Granblue Relink Conflux Guide",
        "href": "/granblue-relink-endless-ragnarok/conflux-guide",
        "type": "Guide",
        "description": "Route Conflux with Seedhollow unlock steps, portal choices, aura priorities, reward chests, cycles, Resonance points, and gray exit timing.",
        "date": "Updated recently",
        "image": "/images/home/granblue-relink-endless-ragnarok-conflux-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 12,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Seedhollow Conflux route, portals, auras, reward chests, cycles, Resonance points, gray exit, and Chaos prep"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Granblue Relink Fatebreaker and Chaos Guide",
        "href": "/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression",
        "type": "Guide",
        "description": "Beat Seofon and Tweyen, unlock Fatebreaker, route Chaos quests, check Fatebreaker sigils, and know when to return to Conflux.",
        "date": "Updated recently",
        "image": "/images/home/granblue-relink-endless-ragnarok-fatebreaker-chaos-progression.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 13,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Seofon and Tweyen trial, Fate Breaker grade, Chaos quests, Fatebreaker sigils, stable clears, and Conflux rebuilds"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Granblue Relink Best AI Team Builds",
        "href": "/granblue-relink-endless-ragnarok/best-ai-team-builds",
        "type": "Guide",
        "description": "Build a stable Endless Ragnarok AI team for solo Conflux and Chaos with Eugen, Cagliostro, Zeta, Backup Character, sigils, and traits.",
        "date": "Updated recently",
        "image": "/images/home/granblue-relink-endless-ragnarok-best-ai-team-builds.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 14,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "Eugen, Cagliostro, Zeta, Backup Character, Damage Cap, survival sigils, AI uptime, Conflux catch-up, and Chaos stability"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "Granblue Relink New Characters Unlock Guide",
        "href": "/granblue-relink-endless-ragnarok/new-characters-unlock-guide",
        "type": "Guide",
        "description": "Unlock Beatrix, Eustace, Fraux, Fediel, Gallanza and Maglielle, compare Crewmate Card costs, and decide who to build first.",
        "date": "Updated recently",
        "image": "/images/home/granblue-relink-endless-ragnarok-new-characters-unlock-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 15,
          "spotlightFeature": true,
          "spotlightOrder": 5,
          "spotlightMeta": "Beatrix, Eustace, Fraux, Fediel, Gallanza, Maglielle, Crewmate Cards, Chapter Ø, manual vs AI, and Conflux investment"
        },
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      }
    ]
  },
  {
    "title": "Moonlight Peaks",
    "game": "Moonlight Peaks",
    "href": "/moonlight-peaks",
    "slug": "moonlight-peaks",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Route Map",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Moonlight Peaks guide hub for first-week routing, Misty Shores, copper, tool upgrades, barn animals, magic, bug net, Soul Blobs, and feature unlocks.",
    "coverage": [
      "First-week route, Blood Grapes, Town Hall, Chester selling, stamina, sleep saving, Aquaflux awareness, and Hellkitten form",
      "Orlock's Wine Scheme, A Bridge Too Far, Noel's fishing challenge, Misty Shores, Cave of Echoes, Copper Ore, and Copper Bars",
      "Howling Hammer hours, Ridge's upgrade menu, pickaxe-first logic, Copper/Iron/Gold tool costs, Furnace recipes, and inventory timing",
      "Barn cost, Luna's animal rotation, Cheeken, Piggoat, Draculamb, Cowcula, Fodder, fertilizer, Death, bug net, Soul Blobs, jobs, Vampsters, and Nokturna"
    ],
    "image": "/images/home/moonlight-peaks-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 2,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Moonlight Peaks Guide Hub",
        "href": "/moonlight-peaks",
        "type": "Spotlight Coverage",
        "description": "Start here for Moonlight Peaks beginner route, Misty Shores, copper, tools, barn animals, magic, bug net, Soul Blobs, jobs, and unlocks.",
        "image": "/images/home/moonlight-peaks-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "Beginner route, Misty Shores, copper, tools, barn animals, magic, bug net, Soul Blobs, and unlocks"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Moonlight Peaks Beginner Guide",
        "href": "/moonlight-peaks/beginner-guide",
        "type": "Guide",
        "description": "Start Moonlight Peaks with Blood Grapes, Town Hall, Chester selling, sleep saving, Aquaflux, Hellkitten form, early money, and first buys.",
        "date": "Updated recently",
        "image": "/images/home/moonlight-peaks-beginner-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 6,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "Blood Grapes, Town Hall, Chester selling, sleep saving, Aquaflux, Hellkitten form, early money, and first buys"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Moonlight Peaks Misty Shores and Copper Guide",
        "href": "/moonlight-peaks/misty-shores-mines-copper-guide",
        "type": "Guide",
        "description": "Unlock Misty Shores with A Bridge Too Far, finish Noel's fishing challenge, find Cave of Echoes copper, make Copper Bars, and prep mine runs.",
        "date": "Updated recently",
        "image": "/images/home/moonlight-peaks-misty-shores-mines-copper-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 7,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "A Bridge Too Far, Noel's 3-fish challenge, Cave of Echoes, Copper Ore, Copper Bars, and mining prep"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Moonlight Peaks Tool Upgrades Guide",
        "href": "/moonlight-peaks/early-resources-tool-upgrades-guide",
        "type": "Guide",
        "description": "Upgrade tools with Howling Hammer hours, Ridge's menu, pickaxe-first order, Copper/Iron/Gold costs, Furnace bars, and sell-or-keep rules.",
        "date": "Updated recently",
        "image": "/images/home/moonlight-peaks-early-resources-tool-upgrades-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 8,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Howling Hammer hours, Ridge's upgrade menu, tool costs, Copper/Iron/Gold Bars, Furnace recipes, and pickaxe-first logic"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Moonlight Peaks Barn and Animals Guide",
        "href": "/moonlight-peaks/barn-animals-guide",
        "type": "Guide",
        "description": "Build the Moonlight Peaks barn with cost, 10x6 size, 4 animal slots, Luna rotation, Cheeken, Cowcula, Piggoat, Draculamb, and Fodder.",
        "date": "Updated recently",
        "image": "/images/home/moonlight-peaks-barn-animals-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 9,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "4,000 gold barn, 10x6 placement, Luna rotation, Cheeken, Piggoat, Draculamb, Cowcula, Fodder, and fertilizer"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "Moonlight Peaks Feature Unlocks Guide",
        "href": "/moonlight-peaks/feature-unlocks-guide",
        "type": "Guide",
        "description": "Unlock fishing, broken wand, Aquaflux, bug net, Death, Soul Blobs, Antique Clock, jobs, Vampsters, special shops, and Nokturna.",
        "date": "Updated recently",
        "image": "/images/home/moonlight-peaks-feature-unlocks-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 10,
          "spotlightFeature": true,
          "spotlightOrder": 5,
          "spotlightMeta": "Fishing, broken wand, Aquaflux, Death, bug net, 100 Soul Blobs, Antique Clock, jobs, Vampsters, shops, and Nokturna"
        },
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      }
    ]
  },
  {
    "title": "Esports Manager 2026",
    "game": "Esports Manager 2026",
    "href": "/esports-manager-2026",
    "slug": "esports-manager-2026",
    "kind": "game",
    "status": "active",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Route Map",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Esports Manager 2026 guide hub for roster setup, scouting, contracts, sponsors, budget, training, tactics, achievements, and crash fixes.",
    "coverage": [
      "First-season route, roster setup, first contract, staff, and first tournament",
      "Scouting, free agents, player page checks, contracts, paid transfers, and bench depth",
      "Sponsors, six slots, objective rewards, income activation, Finance Manager, and transfer budget",
      "Auto Schedule, three attributes, map practice, scrims, Tactic Creator, economy calls, and achievements"
    ],
    "image": "/images/home/esports-manager-2026-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 1,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Esports Manager 2026 Guide Hub",
        "href": "/esports-manager-2026",
        "type": "Spotlight Coverage",
        "description": "Start here for Esports Manager 2026 roster setup, scouting, sponsors, budget, training, tactics, achievements, and crash fixes.",
        "image": "/images/home/esports-manager-2026-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "Roster setup, scouting, sponsors, budget, training, tactics, achievements, and crash fixes"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Esports Manager 2026 Beginner Guide",
        "href": "/esports-manager-2026/beginner-guide",
        "type": "Guide",
        "description": "Start Esports Manager 2026 with a first-season route for roster setup, first player signing, staff, training, sponsors, budget, and tournaments.",
        "date": "Updated recently",
        "image": "/images/home/esports-manager-2026-beginner-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 1,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "First-season route, roster setup, first signing, staff, training, sponsors, budget, and tournaments"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Esports Manager 2026 Scouting and Contracts Guide",
        "href": "/esports-manager-2026/scouting-contracts-guide",
        "type": "Guide",
        "description": "Scout and sign better players with free agents, player page checks, contract duration, wage pressure, bench depth, and paid transfers.",
        "date": "Updated recently",
        "image": "/images/home/esports-manager-2026-scouting-contracts-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 2,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Free agents, player page checks, contract duration, wage pressure, bench depth, and paid transfers"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Esports Manager 2026 Sponsors and Budget Guide",
        "href": "/esports-manager-2026/sponsors-budget-guide",
        "type": "Guide",
        "description": "Choose the best Esports Manager 2026 sponsors by objective fit, six slots, income activation, rewards, Finance Manager, and transfer budget timing.",
        "date": "Updated recently",
        "image": "/images/home/esports-manager-2026-sponsors-budget-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 3,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Sponsor tiers, six slots, objective rewards, income activation, Finance Manager, and transfer budget timing"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Esports Manager 2026 Training and Tactics Guide",
        "href": "/esports-manager-2026/training-tactics-guide",
        "type": "Guide",
        "description": "Train smarter with Auto Schedule, three attributes, map practice, scrims, Tactic Creator, timeouts, role fit, and economy calls.",
        "date": "Updated recently",
        "image": "/images/home/esports-manager-2026-training-tactics-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 4,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "Auto Schedule, three attributes, map practice, scrims, Tactic Creator, timeouts, role fit, and economy calls"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "Esports Manager 2026 Achievements Guide",
        "href": "/esports-manager-2026/achievements-guide",
        "type": "Guide",
        "description": "Track all 21 Esports Manager 2026 achievements with checklist progress, Steam unlock rates, first-week goals, scouting, budget, academy, and Major routes.",
        "date": "Updated recently",
        "image": "/images/home/esports-manager-2026-achievements-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 5,
          "spotlightFeature": true,
          "spotlightOrder": 5,
          "spotlightMeta": "21 achievements, checklist progress, Steam unlock rates, scouting, budget, academy, and Major cleanup"
        },
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      }
    ]
  },

  {
    "title": "Master Healer Kale with Useless Party",
    "game": "Master Healer Kale with Useless Party",
    "href": "/master-healer-kale",
    "slug": "master-healer-kale",
    "kind": "game",
    "status": "active",
    "accent": "emerald",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Route Map",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Master Healer Kale guide hub for Heal timing, Goblin Leader, Ruby choices, best skills, achievements, Nightmare Mode, and 100% cleanup.",
    "coverage": [
      "Heal timing, Goblin Leader, and first Ruby route",
      "Best skills, Tavern choices, and Madeleine damage",
      "38 achievements, dungeon conditions, and 100% cleanup",
      "Nightmare Mode, Ruby refarming, facilities, and Demon King"
    ],
    "image": "/images/home/master-healer-kale-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 1,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Master Healer Kale Guide Hub",
        "href": "/master-healer-kale",
        "type": "Spotlight Coverage",
        "description": "Start here for Master Healer Kale route planning, Heal timing, Goblin Leader, Ruby choices, dungeon effects, Demon King, and Nightmare Mode.",
        "image": "/images/home/master-healer-kale-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "Heal timing, Goblin Leader, Ruby choices, dungeon effects, Demon King, and Nightmare Mode"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Master Healer Kale Achievements Guide",
        "href": "/master-healer-kale/achievements-guide",
        "type": "Guide",
        "description": "Clear all 38 Master Healer Kale achievements with completion rates, Gotta Go Fast, Machine Gun Punch, I Am The Best, Nightmare Demon King, and 100% Tavern.",
        "date": "Updated recently",
        "image": "/images/home/master-healer-kale-achievements-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 1,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "38 achievements, completion rates, dungeon conditions, spell chains, Nightmare, and 100% Tavern"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Master Healer Kale Best Skills and Skill Tree",
        "href": "/master-healer-kale/best-skills-skill-tree",
        "type": "Guide",
        "description": "Choose Master Healer Kale best skills with Heal, Party Heal, Meditate, Protection, Reset Point, Madeleine vs Klepon, Angel Form, and Tavern priorities.",
        "date": "Updated recently",
        "image": "/images/home/master-healer-kale-best-skills-skill-tree.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 2,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Heal, Party Heal, Meditate, Protection, Reset Point, Madeleine vs Klepon, and Angel Form"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Master Healer Kale Nightmare Mode Endgame",
        "href": "/master-healer-kale/nightmare-mode-endgame",
        "type": "Guide",
        "description": "Prepare Master Healer Kale Nightmare Mode with Ruby refarming, Training Facility, Research Facility, Phoenix Staff, God Armor, Angel Form, and Nightmare Demon King.",
        "date": "Updated recently",
        "image": "/images/home/master-healer-kale-nightmare-mode-endgame.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 3,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Nightmare Mode, Ruby refarming, Training Facility, Research Facility, Phoenix Staff, God Armor, and Demon King"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "The Binding of Isaac: Rebirth",
    "game": "The Binding of Isaac: Rebirth",
    "href": "/the-binding-of-isaac-rebirth",
    "slug": "the-binding-of-isaac-rebirth",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Route Map",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active The Binding of Isaac: Rebirth guide hub for DLC buying, first runs, beginner characters, unlock order, Repentance routes, Tainted characters, and Home.",
    "coverage": [
      "DLC buying and Complete Bundle route",
      "First ten runs and beginner decisions",
      "Best beginner characters and unlocks",
      "Unlock order, Tainted characters, and Home route"
    ],
    "image": "/images/home/the-binding-of-isaac-rebirth-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 1,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "The Binding of Isaac: Rebirth Guide Hub",
        "href": "/the-binding-of-isaac-rebirth",
        "type": "Spotlight Coverage",
        "description": "Start here for The Binding of Isaac: Rebirth route planning, DLC buying, beginner help, characters, unlock order, Repentance gates, Tainted characters, and Home.",
        "image": "/images/home/the-binding-of-isaac-rebirth-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "DLC buying, first runs, characters, unlock order, Repentance, Tainted characters, and Home"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "The Binding of Isaac DLC Buying Guide",
        "href": "/the-binding-of-isaac-rebirth/dlc-buying-guide",
        "type": "Guide",
        "description": "Choose Rebirth DLC with Complete Bundle price anchors, Afterbirth+, Repentance, Repentance+, sale advice, Steam bundle pricing, and when to wait.",
        "date": "Updated recently",
        "image": "/images/home/the-binding-of-isaac-rebirth-dlc-buying-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 1,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "Complete Bundle, Afterbirth+, Repentance, Repentance+, sale price, and when to wait"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "The Binding of Isaac Rebirth Beginner Guide",
        "href": "/the-binding-of-isaac-rebirth/beginner-guide",
        "type": "Beginner Guide",
        "description": "Start Isaac with item rooms, shops, bombs, tinted rocks, Secret Rooms, D6, Devil Deals, Mom's Foot, first ten runs, and beginner mistakes.",
        "date": "Updated recently",
        "image": "/images/home/the-binding-of-isaac-rebirth-beginner-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 2,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "First ten runs, item rooms, shops, bombs, tinted rocks, D6, Devil Deals, and Mom"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "The Binding of Isaac Best Beginner Characters",
        "href": "/the-binding-of-isaac-rebirth/best-beginner-characters",
        "type": "Guide",
        "description": "Choose Isaac, Magdalene, Lazarus, Azazel, Cain and delayed characters with unlock conditions, starting setups, Normal/Hard advice, and problem-based picks.",
        "date": "Updated recently",
        "image": "/images/home/the-binding-of-isaac-rebirth-best-beginner-characters.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestOrder": 3,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Isaac, Magdalene, Lazarus, Azazel, Cain, unlocks, starting setups, and Normal/Hard"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "The Binding of Isaac Unlock Order Guide",
        "href": "/the-binding-of-isaac-rebirth/unlock-order",
        "type": "Guide",
        "description": "Plan Isaac Rebirth unlocks with challenges, Donation Machine 600/999, Greed milestones, Boss Rush, Hush, Delirium, Repentance, and Soul Stones.",
        "date": "Updated recently",
        "image": "/images/home/the-binding-of-isaac-rebirth-unlock-order.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestOrder": 4,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "Challenges, Donation Machine, Greed milestones, Boss Rush, Hush, Delirium, and Soul Stones"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "The Binding of Isaac Tainted Characters Unlock Guide",
        "href": "/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide",
        "type": "Guide",
        "description": "Unlock Tainted characters with Hush x3, Mother, Strange Door, The Fool, Dad's Note, Red Key, Cracked Key, Home, Dogma, and Beast routing.",
        "date": "Updated recently",
        "image": "/images/home/the-binding-of-isaac-rebirth-tainted-characters-unlock-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestOrder": 5,
          "spotlightFeature": true,
          "spotlightOrder": 5,
          "spotlightMeta": "Hush x3, Mother, Strange Door, The Fool, Dad's Note, Red Key, Cracked Key, and Home"
        },
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      }
    ]
  },
  {
    "title": "Supermarket Chaos",
    "game": "Supermarket Chaos",
    "href": "/supermarket-chaos",
    "slug": "supermarket-chaos",
    "kind": "game",
    "status": "active",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Section Routes",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Supermarket Chaos guide hub for the 4,668-product cleanup, 16-section routing, achievements, upgrades, tricky item locations, and shelf feedback.",
    "coverage": [
      "4,668-product cleanup route",
      "16-section item routing",
      "Achievements and 100% checklist",
      "Extra Carry and finder upgrades"
    ],
    "image": "/images/home/supermarket-chaos-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 3,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Supermarket Chaos Guide Hub",
        "href": "/supermarket-chaos",
        "type": "Spotlight Coverage",
        "description": "Start here for Supermarket Chaos route planning, beginner help, achievements, section map, item locations, upgrades, 4,668 products, and 16 sections.",
        "image": "/images/home/supermarket-chaos-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "Beginner route, achievements, section map, upgrades, and 4,668 products"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Supermarket Chaos Beginner Guide",
        "href": "/supermarket-chaos/beginner-guide",
        "type": "Beginner Guide",
        "description": "Start Supermarket Chaos with the first-hour route, section signs, controls, shelf feedback, Extra Carry timing, temporary piles, and beginner mistakes.",
        "date": "Updated recently",
        "image": "/images/home/supermarket-chaos-beginner-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 1,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "First-hour route, controls, shelf feedback, Extra Carry, and mistakes"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Supermarket Chaos Achievements Guide",
        "href": "/supermarket-chaos/achievements-guide",
        "type": "Achievements",
        "description": "Unlock all 12 Supermarket Chaos achievements with the 100% checklist, Too Heavy, Lucky 777, One More, Complete, no-popup checks, and 4,668-product route.",
        "date": "Updated recently",
        "image": "/images/home/supermarket-chaos-achievements-guide.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 2,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "12 achievements, Too Heavy, Lucky 777, One More, Complete, and 100%"
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Supermarket Chaos Best Upgrades & Skills",
        "href": "/supermarket-chaos/best-upgrades-skills",
        "type": "Guide",
        "description": "Plan the best Supermarket Chaos upgrades with Extra Carry, Match Finder, Shelf Finder, Match Finder+, current costs, level caps, and cleanup efficiency.",
        "date": "Updated recently",
        "image": "/images/home/supermarket-chaos-best-upgrades-skills.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestOrder": 3,
          "spotlightFeature": true,
          "spotlightOrder": 3,
          "spotlightMeta": "Extra Carry, Match Finder, Shelf Finder, Match Finder+, costs, and level caps"
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Supermarket Chaos Section Map & Item Locations",
        "href": "/supermarket-chaos/section-map-item-locations",
        "type": "Guide",
        "description": "Find Supermarket Chaos item locations with the 16-section map, Tea/Candies, Breakfast/Sweets, Pasta/Condiments, Bento, Ramen, iT, Cleaning, and shelf feedback.",
        "date": "Updated recently",
        "image": "/images/home/supermarket-chaos-section-map-item-locations.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestOrder": 4,
          "spotlightFeature": true,
          "spotlightOrder": 4,
          "spotlightMeta": "16 sections, Tea/Candies, Breakfast/Sweets, Pasta/Condiments, Bento, Ramen, and tricky items"
        },
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      }
    ]
  },
  {
    "title": "Frostpunk 2: Breach of Trust",
    "game": "Frostpunk 2: Breach of Trust",
    "href": "/frostpunk-2-breach-of-trust",
    "slug": "frostpunk-2-breach-of-trust",
    "kind": "game",
    "status": "active",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Aurora Routes",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Breach of Trust guide hub for Aurora negotiation, Fishery Hubs, conquest, tremors, Emergency Shelter Hubs, Volcanic Night, evacuation, and Generator Core timing.",
    "coverage": [
    "Aurora negotiation",
    "Fishery Hubs and food transfer",
    "Conquer Aurora war route",
    "Tremors and evacuation"
    ],
    "image": "/images/home/frostpunk-2-breach-of-trust-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "featuredHub": true,
    "featuredHubSpotlight": true,
    "featuredHubOrder": 1,
    "footerFeatured": true
    },
    "pages": [
    {
    "title": "Frostpunk 2 Breach of Trust Guide Hub",
    "href": "/frostpunk-2-breach-of-trust",
    "type": "Spotlight Coverage",
    "description": "Start here for Breach of Trust route planning, Aurora choices, food transfer, tremor safety, Volcanic Night, evacuation, and Generator Core timing.",
    "image": "/images/home/frostpunk-2-breach-of-trust-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "spotlightMeta": "Aurora, Fishery Hubs, conquest, tremors, evacuation, and Generator Core"
    },
    "archive": {
    "showInCollections": true,
    "order": 1
    }
    },
    {
    "title": "Breach of Trust Walkthrough",
    "href": "/frostpunk-2-breach-of-trust/walkthrough",
    "type": "Walkthrough",
    "description": "Follow the full Breach of Trust route with Vote of Trust, Aurora negotiation or war, steam output, Emergency Shelter Hubs, Fishery Hubs, Volcanic Night, and Generator Core timing.",
    "date": "Updated recently",
    "image": "/images/home/frostpunk-2-breach-of-trust-walkthrough.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestFeatured": true,
    "latestOrder": 1,
    "spotlightFeature": true,
    "spotlightOrder": 1,
    "spotlightMeta": "Vote of Trust, Aurora choice, tremors, Fishery Hubs, and evacuation"
    },
    "archive": {
    "showInCollections": true,
    "order": 2
    }
    },
    {
    "title": "Aurora Negotiation & Fishery Hub Guide",
    "href": "/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide",
    "type": "Guide",
    "description": "Negotiate with Aurora, send promised resources, manage Strength and Defiance, build Fishery Hubs, transfer food, use Skyways, and fix New Edinburgh's food crisis.",
    "date": "Updated recently",
    "image": "/images/home/frostpunk-2-breach-of-trust-aurora-fishery.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestFeatured": true,
    "latestOrder": 2,
    "spotlightFeature": true,
    "spotlightOrder": 2,
    "spotlightMeta": "Aurora deals, promised resources, Fishery Hubs, food transfer, and Skyways"
    },
    "archive": {
    "showInCollections": true,
    "order": 3
    }
    },
    {
    "title": "Conquer Aurora War Route Guide",
    "href": "/frostpunk-2-breach-of-trust/conquer-aurora-war-route-guide",
    "type": "Guide",
    "description": "Conquer Aurora with Barracks, hired soldiers, conscription, Heavy Weaponry, attack timing, Flawless Victory planning, resistance control, and occupation recovery.",
    "date": "Updated recently",
    "image": "/images/home/frostpunk-2-breach-of-trust-conquer-aurora.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestOrder": 3,
    "spotlightFeature": true,
    "spotlightOrder": 3,
    "spotlightMeta": "Barracks, conscription, Heavy Weaponry, attacks, resistance, and occupation"
    },
    "archive": {
    "showInCollections": true,
    "order": 4
    }
    },
    {
    "title": "Tremor & Evacuation Guide",
    "href": "/frostpunk-2-breach-of-trust/tremor-evacuation-guide",
    "type": "Guide",
    "description": "Survive Breach of Trust tremors and Volcanic Night with steam output control, Emergency Shelter Hub coverage, evacuation airships, and Generator Core timing.",
    "date": "Updated recently",
    "image": "/images/home/frostpunk-2-breach-of-trust-tremor-evacuation.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestOrder": 4,
    "spotlightFeature": true,
    "spotlightOrder": 4,
    "spotlightMeta": "Steam output, Emergency Shelter Hubs, Volcanic Night, airships, and Generator Core"
    },
    "archive": {
    "showInCollections": true,
    "order": 5
    }
    }
    ]
  },
    
  {
    "title": "DELTARUNE",
    "game": "DELTARUNE",
    "href": "/deltarune",
    "slug": "deltarune",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Older archive",
    "label": "Chapter 5 Routes",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active Chapter 5 guide hub for all 19 Pink Coins, Mystery Key, Pink/Miumu, Flowery, foxes, Secret Egg, Weird Route, Side B, Sans Bread, and save-file planning.",
    "coverage": [
    "All 19 Pink Coins",
    "Pink/Miumu secret boss",
    "Flowery final boss",
    "Weird Route and Side B"
    ],
    "image": "/images/home/deltarune-chapter-5-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "featuredHub": true,
    "featuredHubOrder": 1,
    "footerFeatured": true
    },
    "pages": [
    {
    "title": "DELTARUNE Chapter 5 Guide Hub",
    "href": "/deltarune",
    "type": "Spotlight Coverage",
    "description": "Start here for Chapter 5 route planning, all 19 Pink Coins, Mystery Key, Pink/Miumu, Flowery, foxes, Secret Egg, Weird Route, Side B, and save files.",
    "image": "/images/home/deltarune-chapter-5-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "spotlightMeta": "Pink Coins, secret boss, Flowery, foxes, Egg, Weird Route, and Side B"
    },
    "archive": {
    "showInCollections": true,
    "order": 1
    }
    },
    {
    "title": "All 19 Pink Coins & Mystery Key Guide",
    "href": "/deltarune/chapter-5-secret-boss-pink-coins",
    "type": "Collectibles",
    "description": "Find all 19 Chapter 5 Pink Coins, get 10 for the Mystery Key, use extras for flower gear, check Petal Feather timing, Ferroll help, and Pink Door prep.",
    "date": "Updated recently",
    "image": "/images/home/deltarune-pink-coins.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestFeatured": true,
    "latestOrder": 1,
    "spotlightFeature": true,
    "spotlightOrder": 1,
    "spotlightMeta": "19 Pink Coins, Mystery Key, Pink Door, flower gear, and Ferroll"
    },
    "archive": {
    "showInCollections": true,
    "order": 2
    }
    },
    {
    "title": "Pink/Miumu Secret Boss DOKI Guide",
    "href": "/deltarune/chapter-5-secret-boss-guide",
    "type": "Guide",
    "description": "Beat Pink/Miumu with 15/15/20 DOKI targets, Purple Soul hearts, MegaFlirt, GigaFlirt, LovelyBoy, CAT gear, date answers, and DIE maze tips.",
    "date": "Updated recently",
    "image": "/images/home/deltarune-pink-miumu-secret-boss.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestFeatured": true,
    "latestOrder": 2,
    "spotlightFeature": true,
    "spotlightOrder": 2,
    "spotlightMeta": "DOKI, TP cap, GigaFlirt, LovelyBoy, dates, and DIE maze"
    },
    "archive": {
    "showInCollections": true,
    "order": 3
    }
    },
    {
    "title": "Flowery Final Boss & Ending Guide",
    "href": "/deltarune/chapter-5-final-boss-guide",
    "type": "Guide",
    "description": "Beat Flowery with Posey/PoseyZ timing, Blow Away, Orange dash, Knife Cutting, Justice trial, 50% Mercy, first fountain, and second fountain.",
    "date": "Updated recently",
    "image": "/images/home/deltarune-flowery-final-boss.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestOrder": 3,
    "spotlightFeature": true,
    "spotlightOrder": 3,
    "spotlightMeta": "Flowery, Mercy route, Knife Cutting, Justice, and fountains"
    },
    "archive": {
    "showInCollections": true,
    "order": 4
    }
    },
    {
    "title": "Foxes & Secret Egg Guide",
    "href": "/deltarune/chapter-5-foxes-secret-egg",
    "type": "Guide",
    "description": "Find 3 foxes for Aqua, all 5 foxes for the Pink Coin room, avoid the sun-style mix-up, then solve the wheat, dog flower, watering can, and Egg route.",
    "date": "Updated recently",
    "image": "/images/home/deltarune-foxes-secret-egg.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestOrder": 4,
    "spotlightFeature": true,
    "spotlightOrder": 4,
    "spotlightMeta": "3 foxes, 5 foxes, Pink Coin room, wheat route, dog flowers, and Egg"
    },
    "archive": {
    "showInCollections": true,
    "order": 5
    }
    },
    {
    "title": "Chapter 5 Weird Route & Side B Guide",
    "href": "/deltarune/chapter-5-weird-route",
    "type": "Guide",
    "description": "Start from the Chapter 4 Weird Route state, force Kris out of bed, get Bread from Sans, survive the lake Proceed timer, avoid Aborted route, and reach Side B.",
    "date": "Updated recently",
    "image": "/images/home/deltarune-weird-route-side-b.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
    "latest": true,
    "latestOrder": 5,
    "spotlightFeature": true,
    "spotlightOrder": 5,
    "spotlightMeta": "Chapter 4 state, Sans Bread, lake timer, Shattered Rose, and Side B"
    },
    "archive": {
    "showInCollections": true,
    "order": 6
    }
    }
    ]
    },
    
  
  {
    "title": "The Last Caretaker",
    "game": "The Last Caretaker",
    "href": "/the-last-caretaker",
    "slug": "the-last-caretaker",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Older archive",
    "label": "Survival Systems",
    "eyebrow": "Spotlight Hub",
    "hubStatus": "Active coverage",
    "description": "Follow the active guide hub for New Horizons, Project Eden, Oil Whale, ship routing, wall outlets, fuel, roots, samples, power, and late-system cleanup decisions.",
    "coverage": [
      "New Horizons route",
      "Project Eden setup",
      "Oil Whale logistics",
      "Ship power and cleanup"
    ],
    "image": "/images/home/the-last-caretaker-hub.webp",
    "imageFit": "contain",
    "imagePadding": true,
    "home": {
      "featuredHub": true,
      "featuredHubSpotlight": true,
      "featuredHubOrder": 1,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "The Last Caretaker Guide Hub",
        "href": "/the-last-caretaker",
        "type": "Spotlight Coverage",
        "description": "Follow the active guide hub for New Horizons, Project Eden, Oil Whale, ship routing, wall outlets, fuel, roots, samples, power, and late-system cleanup decisions.",
        "image": "/images/home/the-last-caretaker-hub.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "spotlightMeta": "Survival systems, ship routing, Project Eden, fuel, power, and cleanup"
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "New Horizons Guide, Project Eden & Ship Routes",
        "href": "/the-last-caretaker/new-horizons-guide",
        "type": "Walkthrough",
        "description": "Start here for New Horizons, Project Eden, Oil Whale, power, fuel, wall outlets, roots, samples, and ship cleanup decisions.",
        "date": "Updated recently",
        "image": "/images/home/the-last-caretaker-new-horizons.webp",
        "imageFit": "contain",
        "imagePadding": true,
        "home": {
          "latest": true,
          "latestFeatured": true,
          "latestOrder": 1,
          "spotlightFeature": true,
          "spotlightOrder": 1,
          "spotlightMeta": "Route help"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Oil Whale & Project Jonah Guide",
        "href": "/the-last-caretaker/oil-whale-guide",
        "type": "Guide",
        "description": "Start Project Jonah, bring a mature human, dock beside the Oil Whale, handle 10,000L oil pulls, 75-100kW power, tanks, and transfer setup.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Project Eden First Roots Guide",
        "href": "/the-last-caretaker/project-eden-guide",
        "type": "Guide",
        "description": "Start Project Eden at Pishon, craft Stainless Steel with oil, place Eden Frame, build Farming Platform, connect water and power, then grow first roots.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  
  {
    "title": "Darktide Skitarii",
    "game": "Darktide Skitarii",
    "href": "/darktide",
    "slug": "darktide",
    "kind": "game",
    "status": "active",
    "accent": "rose",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Builds & Combat",
    "eyebrow": "Class Guide Hub",
    "hubStatus": "Build cluster",
    "description": "Skitarii first-hour basics, Cog Tree, Servo Skull inputs, Capacitance, Redline, best builds, weapons, and troubleshooting routes.",
    "coverage": [
      "Best builds",
      "Weapons",
      "Servo Skull",
      "Beginner route"
    ],
    "image": "/images/home/darktide-skitarii-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Warhammer 40,000: Darktide - Skitarii Class",
        "href": "/darktide",
        "type": "Class Guide Hub",
        "description": "Skitarii first-hour basics, Cog Tree, Servo Skull inputs, Capacitance, Redline, best builds, weapons, and troubleshooting routes.",
        "image": "/images/home/darktide-skitarii-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Skitarii Builds Guide",
        "href": "/darktide/best-skitarii-builds",
        "type": "Builds",
        "description": "Build around Redline, Cog Tree choices, Servo Skull inputs, weapons, Capacitance, and safer early class routes.",
        "date": "Updated recently",
        "image": "/images/home/darktide-skitarii-builds.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "home": {
          "latest": true,
          "latestOrder": 2,
          "spotlightFeature": true,
          "spotlightOrder": 2,
          "spotlightMeta": "Combat setup"
        },
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Skitarii Weapons Guide",
        "href": "/darktide/skitarii-weapons",
        "type": "Builds",
        "description": "Choose Skitarii weapons by leveling role, Arc Maul safety, Phosphor vs Galvanic, Arc Rifle Blaze Away, Transonic Blades modes, and Power Sword charges.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Servo Skull Guide",
        "href": "/darktide/skitarii-servo-skull",
        "type": "Guide",
        "description": "Fix Skitarii Servo Skull with double-tap Tag, Blitz input, Data Interrogator, Medicae revive, Purgator fire, Noospheric Command, and shared Charges.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Moldwasher",
    "game": "Moldwasher",
    "href": "/moldwasher",
    "slug": "moldwasher",
    "kind": "game",
    "status": "active",
    "accent": "emerald",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Walkthrough & Collectibles",
    "eyebrow": "Cozy Cleanup Hub",
    "hubStatus": "Completion help",
    "description": "Mission walkthroughs, mold types, hidden objects, collectibles, tools, stuck fixes, achievements, and 100% cleanup help.",
    "coverage": [
      "Walkthrough",
      "Collectibles",
      "Achievements",
      "Stuck fixes"
    ],
    "image": "/images/home/moldwasher-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "footerFeatured": false
    },
    "pages": [
      {
        "title": "Moldwasher",
        "href": "/moldwasher",
        "type": "Guide Hub",
        "description": "Mission walkthroughs, mold types, hidden objects, collectibles, tools, stuck fixes, achievements, and 100% cleanup help.",
        "image": "/images/home/moldwasher-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Walkthrough, Levels, Tools & Stuck Fixes",
        "href": "/moldwasher/walkthrough",
        "type": "Walkthrough",
        "description": "Beat Moldwasher with level tips for sink 0%, rice and rubbish bags, pickaxe unlock, air duct, dinner fight, Zen Mode, mold types, and hidden drop fixes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Hidden Objects & Collectibles Guide",
        "href": "/moldwasher/hidden-objects-collectibles",
        "type": "Collectibles",
        "description": "Find Moldwasher hidden drops, stickers, toys, cassettes, CDs, Gamer Brain, dog bowl, coffee, sticker fridge, gachapon rewards, and missing collectibles.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Moldwasher Achievements Guide",
        "href": "/moldwasher/achievements-guide",
        "type": "Achievements",
        "description": "Complete all Moldwasher achievements with unlock notes, hidden triggers, cleanup advice, and 100% route help.",
        "date": "Updated recently",
        "image": "/images/home/moldwasher-achievements.webp",
        "imageFit": "cover",
        "imagePosition": "center",
        "home": {
          "latest": true,
          "latestOrder": 4
        },
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Timberborn",
    "game": "Timberborn",
    "href": "/timberborn",
    "slug": "timberborn",
    "kind": "game",
    "status": "active",
    "accent": "amber",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Systems",
    "eyebrow": "Colony Survival Hub",
    "hubStatus": "System guides",
    "description": "Badtide defense, drought planning, dams, levees, floodgates, irrigation, reservoirs, and automation logic guides.",
    "coverage": [
      "Badtides",
      "Automation",
      "Reservoirs",
      "Floodgates"
    ],
    "image": "/images/home/timberborn-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 4,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Timberborn",
        "href": "/timberborn",
        "type": "Guide Hub",
        "description": "Badtide defense, drought planning, dams, levees, floodgates, irrigation, reservoirs, and automation logic guides.",
        "image": "/images/home/timberborn-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "First Drought Guide",
        "href": "/timberborn/first-drought-guide",
        "type": "Guide",
        "description": "Survive the first drought with 2.1 / 2.5 / 3 water math, tank targets, pump reach, difficulty scaling, population control and recovery fixes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Dam, Levee & Floodgate Guide",
        "href": "/timberborn/dam-levee-floodgate-guide",
        "type": "Guide",
        "description": "Choose dams, levees, floodgates, reservoirs, spillways and T-valves with 65% dam buffers, 1/2/3 m gates and evaporation math.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Irrigation & Reservoir Guide",
        "href": "/timberborn/irrigation-reservoir-guide",
        "type": "Guide",
        "description": "Keep crops watered with reservoir depth, 0.045 evaporation, pump depth, canal width, green coverage, Cattails, Spadderdock and drought recovery.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Guide Collections",
    "game": "Guide Collections",
    "href": "/new-steam-game-guides",
    "slug": "new-steam-game-guides",
    "kind": "collection",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Endings & Routes",
    "description": "Find new Steam games with practical beginner paths, Steam snapshots, endings, achievements, builds, cozy progression, survival tips, and guide-backed review notes.",
    "coverage": [
      "Guide",
      "Endings"
    ],
    "pages": [
      {
        "title": "New Steam Game Guides",
        "href": "/new-steam-game-guides",
        "type": "Guide",
        "description": "Find new Steam games with practical beginner paths, Steam snapshots, endings, achievements, builds, cozy progression, survival tips, and guide-backed review notes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Games With Multiple Endings",
        "href": "/best-games-with-multiple-endings",
        "type": "Endings",
        "description": "Find games where endings, choices, route locks, true ending requirements, achievements, survival checks, and spoiler-light guide paths matter.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Steam Indie Games With Guides",
        "href": "/best-steam-indie-games-with-guides",
        "type": "Guide",
        "description": "Browse Steam indie and indie-scale games where guides help with first routes, builds, collectibles, achievements, automation, and progression.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Cozy Management & Crafting Games",
        "href": "/best-cozy-management-crafting-games",
        "type": "Guide",
        "description": "Find cozy, crafting, management, repair, life sim, automation, and base-building games with practical guide paths for early systems.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Thank You For Your Application",
    "game": "Thank You For Your Application",
    "href": "/thank-you-for-your-application",
    "slug": "thank-you-for-your-application",
    "kind": "game",
    "status": "active",
    "accent": "blue",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Endings & Ratings",
    "eyebrow": "Route Lock Hub",
    "hubStatus": "Ending routes",
    "description": "Beginner tips, final evaluation answers, ratings, route locks, job outcomes, endings, overtime risks, and achievement cleanup.",
    "coverage": [
      "Endings",
      "Ratings",
      "Route locks",
      "Achievements"
    ],
    "image": "/images/home/thank-you-application-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Thank You For Your Application",
        "href": "/thank-you-for-your-application",
        "type": "Guide Hub",
        "description": "Beginner tips, final evaluation answers, ratings, route locks, job outcomes, endings, overtime risks, and achievement cleanup.",
        "image": "/images/home/thank-you-application-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Resume Rules & Thanks Letter Guide",
        "href": "/thank-you-for-your-application/resume-rules-thanks-letter-guide",
        "type": "Guide",
        "description": "Master resume rules, Thanks Letters, local vs non-local checks, certificates, Psychological Reports, forged docs and breakdown index limits.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Thank You For Your Application Endings Guide",
        "href": "/thank-you-for-your-application/endings-guide",
        "type": "Endings",
        "description": "Track route locks, ratings, final evaluation outcomes, overtime risks, true ending checks, and recovery points.",
        "date": "Updated recently",
        "image": "/images/home/thank-you-application-endings.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "home": {
          "latest": true,
          "latestOrder": 6
        },
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Achievements Guide, Hidden Triggers & 100%",
        "href": "/thank-you-for-your-application/achievements-guide",
        "type": "Achievements",
        "description": "Unlock all 15 Steam achievements with hidden triggers, Brain in a Vat, Work Life Not Balanced, A New Job for Life and safe cleanup order.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Dust Front RTS",
    "game": "Dust Front RTS",
    "href": "/dust-front-rts",
    "slug": "dust-front-rts",
    "kind": "game",
    "status": "archive",
    "accent": "rose",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Demo Coverage",
    "description": "Beat the Dust Front RTS demo with deployment zones, Bandit and Mutant counters, early vision, fabricators, Complector Brutes, warehouses, and MCV pushes.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Hardest Difficulty Strategy Guide",
        "href": "/dust-front-rts",
        "type": "Guide",
        "description": "Beat the Dust Front RTS demo with deployment zones, Bandit and Mutant counters, early vision, fabricators, Complector Brutes, warehouses, and MCV pushes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      }
    ]
  },
  {
    "title": "BOMBANANA",
    "game": "BOMBANANA",
    "href": "/bombanana",
    "slug": "bombanana",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Demo Coverage",
    "description": "Defuse BOMBANANA with bomb handler and manual reader roles, wire LEDs, D-pad values, numpad math, switch panels, odd/even logic, and co-op mistakes.",
    "coverage": [
      "Event Guide"
    ],
    "pages": [
      {
        "title": "Demo Guide, Roles, Modules & Callouts",
        "href": "/bombanana",
        "type": "Event Guide",
        "description": "Defuse BOMBANANA with bomb handler and manual reader roles, wire LEDs, D-pad values, numpad math, switch panels, odd/even logic, and co-op mistakes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      }
    ]
  },
  {
    "title": "Casualties Unknown",
    "game": "Casualties Unknown",
    "href": "/casualties-unknown",
    "slug": "casualties-unknown",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Demo Coverage",
    "description": "Survive Casualties Unknown with the canteen route, glowplants, bio-chem fluid, foliage bag, dirty water, lockpicking, body conditions, and early mistakes.",
    "coverage": [
      "Event Guide"
    ],
    "pages": [
      {
        "title": "Demo Guide, Canteen, Crafting & Survival",
        "href": "/casualties-unknown",
        "type": "Event Guide",
        "description": "Survive Casualties Unknown with the canteen route, glowplants, bio-chem fluid, foliage bag, dirty water, lockpicking, body conditions, and early mistakes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      }
    ]
  },
  {
    "title": "The Adventures of Elliot",
    "game": "The Adventures of Elliot",
    "href": "/the-adventures-of-elliot",
    "slug": "the-adventures-of-elliot",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Rpg",
    "description": "Start here for The Adventures of Elliot guides: Faie, Southern Caves, Ignite, Golden Bell, cats, Shards, Shrines, Secret Treasure Routes and trophies.",
    "coverage": [
      "Guide Hub",
      "Walkthrough",
      "Collectibles"
    ],
    "pages": [
      {
        "title": "Guide Hub, Walkthrough, Cats & Shards",
        "href": "/the-adventures-of-elliot",
        "type": "Guide Hub",
        "description": "Start here for The Adventures of Elliot guides: Faie, Southern Caves, Ignite, Golden Bell, cats, Shards, Shrines, Secret Treasure Routes and trophies.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Walkthrough, Moon Mirror & Western Marge",
        "href": "/the-adventures-of-elliot/walkthrough",
        "type": "Walkthrough",
        "description": "Follow the early route with Faie, Southern Caves, Ignite, Hammer, Magicite, Shards, cats, Golden Bell, time travel, Moon Mirror and Western Marge.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Cat Locations, Cat Needle & Rewards",
        "href": "/the-adventures-of-elliot/cat-locations",
        "type": "Collectibles",
        "description": "Find 50 cats with the Huther fountain traveler, meow clues, Cat Needle, Bomb Pouch, Quiver, Golden Egg, Katzenmeister and by-age tracking.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Shards of Life, Shrines & Secret Routes",
        "href": "/the-adventures-of-elliot/shards-of-life-locations",
        "type": "Walkthrough",
        "description": "Track Shards of Life with route clues, 4-Shard HP upgrades, Shrines of Life, cracked walls, Secret Treasure Routes, caves and puzzle chests.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "33 Immortals",
    "game": "33 Immortals",
    "href": "/33-immortals",
    "slug": "33-immortals",
    "kind": "game",
    "status": "active",
    "accent": "blue",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Co-op",
    "eyebrow": "Co-op Guide Hub",
    "hubStatus": "Combat help",
    "description": "Beginner progression, weapons, bosses, relics, paths, wishing, co-op pressure, and achievements.",
    "coverage": [
      "Beginner route",
      "Weapons",
      "Bosses",
      "Relics"
    ],
    "image": "/images/home/33-immortals-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "pages": [
      {
        "title": "33 Immortals",
        "href": "/33-immortals",
        "type": "Guide Hub",
        "description": "Beginner progression, weapons, bosses, relics, paths, wishing, co-op pressure, and achievements.",
        "image": "/images/home/33-immortals-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Progression Guide",
        "href": "/33-immortals/beginner-progression-guide",
        "type": "Beginner Guide",
        "description": "Survive your first 33 Immortals runs with first 10 minutes routing, Dust, Bones, Shrines, Chambers, Secret Chambers, Unique Elites, and Ascension timing.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Weapons Unlock, Tier & Mastery Guide",
        "href": "/33-immortals/weapons-unlock-upgrades-guide",
        "type": "Builds",
        "description": "Choose the best 33 Immortals weapon with 1.0 tier signals, Bow recall, Glaive Temperance, Crossbows Pride, unlock costs, upgrade slots, and 48% Mastery.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Relics, Paths & Wishing Guide",
        "href": "/33-immortals/relics-paths-wishing-guide",
        "type": "Systems",
        "description": "Build better 33 Immortals runs with Relic Paths, key Relic names, Co-op Power, Co-Strike, Bones rerolls, dismantling, Relic Wishing, and boss Relics.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Tales of Seikyu",
    "game": "Tales of Seikyu",
    "href": "/tales-of-seikyu",
    "slug": "tales-of-seikyu",
    "kind": "game",
    "status": "active",
    "accent": "emerald",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy RPG",
    "eyebrow": "Cozy RPG Hub",
    "hubStatus": "Guide cluster",
    "description": "Beginner routes, yokai forms, request board help, romance, gifts, marriage, and achievements.",
    "coverage": [
      "Beginner route",
      "Yokai forms",
      "Romance",
      "Achievements"
    ],
    "image": "/images/home/tales-of-seikyu-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 8,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Tales of Seikyu",
        "href": "/tales-of-seikyu",
        "type": "Guide Hub",
        "description": "Beginner routes, yokai forms, request board help, romance, gifts, marriage, and achievements.",
        "image": "/images/home/tales-of-seikyu-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Yokai Forms, Slime, Tengu & Fox Guide",
        "href": "/tales-of-seikyu/yokai-forms-guide",
        "type": "Guide",
        "description": "Unlock Boar, Slime, Tengu, Yuki-onna and Fox Form, use boss scrolls, form upgrades, Slime watering, Tengu flight, and blocked-route checks.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Romance, Gifts & Marriage Guide",
        "href": "/tales-of-seikyu/romance-gifts-marriage-guide",
        "type": "Guide",
        "description": "Plan loved gifts, birthdays, heart events, hug, kiss, sleepover, special ring, proposal, wedding, spouse life, and 1.0 romance routes.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Fox Ruins, Bosses, Scrolls & 75 Rooms",
        "href": "/tales-of-seikyu/fox-ruins-guide",
        "type": "Bosses",
        "description": "Clear Fox Ruins with offerings, relic waypoints, foxholes, puzzles, bosses, form gates, transformation scrolls, treasure rooms, and 75-room routing.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "SpaceCraft",
    "game": "SpaceCraft",
    "href": "/spacecraft",
    "slug": "spacecraft",
    "kind": "game",
    "status": "active",
    "accent": "purple",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Progression",
    "eyebrow": "Survival Crafting Hub",
    "hubStatus": "Early systems",
    "description": "Survival crafting, permits, resources, Noviciate Corporation unlocks, base automation, and early progression help.",
    "coverage": [
      "Permits",
      "Resources",
      "Base setup",
      "Corporation unlocks"
    ],
    "image": "/images/home/spacecraft-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 7,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "SpaceCraft",
        "href": "/spacecraft",
        "type": "Guide Hub",
        "description": "Survival crafting, permits, resources, Noviciate Corporation unlocks, base automation, and early progression help.",
        "image": "/images/home/spacecraft-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide & First Route",
        "href": "/spacecraft/beginner-guide",
        "type": "Walkthrough",
        "description": "Follow the first SpaceCraft route through Copper, Iron, Scanalyzer Alpha, Gray Quartz, Gravite, Silicon Gel, FTL, Magnetic Plasma, and RakMu.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Scanalyzer Alpha & FTL Guide",
        "href": "/spacecraft/scanlyzer-alpha-ftl-engine",
        "type": "Guide",
        "description": "Fix Scanalyzer Alpha, find Gray Quartz and Gravite, craft Crystalline Focuser, unlock Electromagnetism, install FTL Engine, and refill Magnetic Plasma.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Resources, Mining Bureau & Deposits Guide",
        "href": "/spacecraft/resources-locations",
        "type": "Collectibles",
        "description": "Find Copper, Iron, Gray Quartz, Gravite, B-Carbon, Silicate, Pyrite, Mining Bureau coordinates, deposits, tool gates, and refining choices.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Fears to Fathom - Scratch Creek",
    "game": "Fears to Fathom - Scratch Creek",
    "href": "/fears-to-fathom-scratch-creek",
    "slug": "fears-to-fathom-scratch-creek",
    "kind": "game",
    "status": "archive",
    "accent": "rose",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Endings & Routes",
    "description": "Start here for Scratch Creek walkthrough, co-op route, trailer setup, Miss Julia's parsonage, ending escape, Cow Clicker, and all achievements.",
    "coverage": [
      "Guide Hub",
      "Walkthrough",
      "Endings",
      "Achievements"
    ],
    "pages": [
      {
        "title": "Guide Hub, Walkthrough, Ending & Achievements",
        "href": "/fears-to-fathom-scratch-creek",
        "type": "Guide Hub",
        "description": "Start here for Scratch Creek walkthrough, co-op route, trailer setup, Miss Julia's parsonage, ending escape, Cow Clicker, and all achievements.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Full Walkthrough & Co-op Route Guide",
        "href": "/fears-to-fathom-scratch-creek/walkthrough",
        "type": "Walkthrough",
        "description": "Follow Marcus and Tessa from moving out, trailer setup, GPS driving, fallen-tree stop, gas station, parsonage, Henry, and final escape.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Ending Guide, Trailer Unhook & Final Escape",
        "href": "/fears-to-fathom-scratch-creek/ending-guide",
        "type": "Endings",
        "description": "Fix the Scratch Creek ending, unhook the trailer, solve the hitch prompt, split co-op roles, avoid failed escapes, and understand the ending.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "All Achievements Guide & Hidden Unlocks",
        "href": "/fears-to-fathom-scratch-creek/achievements-guide",
        "type": "Achievements",
        "description": "Unlock all 10 Scratch Creek achievements, including Holy Cow, Down in the Dark, Eavesdropper, Come In, The Drifter, and Out of Sight.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Burglin' Gnomes",
    "game": "Burglin' Gnomes",
    "href": "/burglin-gnomes",
    "slug": "burglin-gnomes",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Older archive",
    "label": "Systems",
    "description": "Start here for Burglin' Gnomes beginner routes, task tiers, old man survival, co-op roles, Plasto, Clonk, upgrades, and tornado escape.",
    "coverage": [
      "Guide Hub",
      "Beginner Guide",
      "Walkthrough",
      "Guide"
    ],
    "pages": [
      {
        "title": "Guide Hub: Tasks, Co-op, Materials & Tips",
        "href": "/burglin-gnomes",
        "type": "Guide Hub",
        "description": "Start here for Burglin' Gnomes beginner routes, task tiers, old man survival, co-op roles, Plasto, Clonk, upgrades, and tornado escape.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide, Controls, Tasks & First Runs",
        "href": "/burglin-gnomes/beginner-guide",
        "type": "Beginner Guide",
        "description": "Learn Burglin' Gnomes controls, crown target, safe window entry, noise, fridge rescue, CPR, upgrades, and when to leave before wipes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Tasks Guide, Priority Tiers & Routes",
        "href": "/burglin-gnomes/tasks-guide",
        "type": "Walkthrough",
        "description": "Plan Burglin' Gnomes tasks by LOW/MED/HIGH tiers, route Break TV, flush, Jonathan, materials, shed key, and avoid bad combos.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Survival Guide, Enemies, Guns & Rescue",
        "href": "/burglin-gnomes/survival-enemies-guide",
        "type": "Guide",
        "description": "Survive the old man, gun routes, evil gnomes, Roomba, floor hazards, fridge rescue, CPR, tools, traps, and tornado escape.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Voidling Bound",
    "game": "Voidling Bound",
    "href": "/voidling-bound",
    "slug": "voidling-bound",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Start here for Voidling Bound beginner tips, Kwipeck, Mutagens, Research Points, Evolution, Golden Eggs, Quackies, Breeding, Splicing, and Abyss prep.",
    "coverage": [
      "Guide Hub",
      "Walkthrough",
      "Collectibles"
    ],
    "pages": [
      {
        "title": "Guide Hub, Beginner Tips, Mutagens & Eggs",
        "href": "/voidling-bound",
        "type": "Guide Hub",
        "description": "Start here for Voidling Bound beginner tips, Kwipeck, Mutagens, Research Points, Evolution, Golden Eggs, Quackies, Breeding, Splicing, and Abyss prep.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide, Stats, Elements & First Route",
        "href": "/voidling-bound/beginner-guide",
        "type": "Walkthrough",
        "description": "Start Voidling Bound with the best difficulty, Kwipeck stats, element matchups, status effects, early upgrades, Atlas replay tips, and Breeding prep.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Golden Egg Locations & Secret Voidlings",
        "href": "/voidling-bound/golden-egg-locations",
        "type": "Collectibles",
        "description": "Find every Voidling Bound Golden Egg with route cues, hatch results like Qwebeck Kwipeck and Hellfire Packuran, return-to-ship tips, and cleanup advice.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Quackies Locations, Names, Colors & Checklist",
        "href": "/voidling-bound/quackies-locations",
        "type": "Collectibles",
        "description": "Find all 26 Voidling Bound Quackies with mission checklist, names, colors, landmarks, high-friction misses, and cleanup route for every system.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Solarpunk",
    "game": "Solarpunk",
    "href": "/solarpunk",
    "slug": "solarpunk",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy",
    "description": "Start here for Solarpunk first island, Standard vs Soft, Research Table, Map, Airship Dock, power, Wheat, chickens, eggs, and progression gates.",
    "coverage": [
      "Beginner Guide",
      "Walkthrough",
      "Guide",
      "Systems"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Airship, Energy, Farming & Research",
        "href": "/solarpunk",
        "type": "Beginner Guide",
        "description": "Start here for Solarpunk first island, Standard vs Soft, Research Table, Map, Airship Dock, power, Wheat, chickens, eggs, and progression gates.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide & First Island Route",
        "href": "/solarpunk/beginners-guide",
        "type": "Walkthrough",
        "description": "Choose Standard or Soft, collect berries and cotton, craft the Survival Guide, build water, storage, bed, beehives, and prepare for the first airship.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Airship Guide: Parts, Dock & Range Upgrade",
        "href": "/solarpunk/airship-guide",
        "type": "Guide",
        "description": "Find the Crashed Airship Component, build the Airship Dock, craft your first airship, upgrade range with 32 Copper, and reach Wheat and Quartz.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Energy Guide: Power, Drill, Battery & Windmill",
        "href": "/solarpunk/energy-system-guide",
        "type": "Systems",
        "description": "Fix power problems with Network Display, solar panels, drill load, batteries, sprinklers, switches, mining outposts, Advanced Dock, and Windmill.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Gothic 1 Remake",
    "game": "Gothic 1 Remake",
    "href": "/gothic-1-remake",
    "slug": "gothic-1-remake",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Rpg",
    "description": "Start here for Gothic 1 Remake guides: first route, Old Sword, Draxâs bow, Diggerâs Dress, best faction, Old Camp, and Diegoâs List.",
    "coverage": [
      "Walkthrough",
      "Systems",
      "Guide"
    ],
    "pages": [
      {
        "title": "New Camp Walkthrough",
        "href": "/gothic-1-remake/new-camp-walkthrough",
        "type": "Walkthrough",
        "description": "Join Lares with Mordragâs Ring, Diegoâs List, Herb Merchant, The Raid, Rice Lord, bridge toll, Level 5, and 3 major Lares tasks.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Swamp Camp Walkthrough",
        "href": "/gothic-1-remake/swamp-camp-walkthrough",
        "type": "Walkthrough",
        "description": "Join the Brotherhood with Baal Parvez, Joru, four Guru approvals, Dusty, Swampweed Harvest, Sleep scroll, Cor Kalom, and Novice rewards.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Skills & Trainers Guide",
        "href": "/gothic-1-remake/skills-trainers",
        "type": "Systems",
        "description": "Plan first LP with no respec, trainer costs, Diego, one-handed training, Fingers, Huno, Drax, Cavalorn, Theron, and magic routes.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Lockpicking Guide",
        "href": "/gothic-1-remake/lockpicking-guide",
        "type": "Guide",
        "description": "Solve the lockpicking slider puzzle, avoid broken picks, find Fingers, learn Trained and Master costs, buy lockpicks, and handle owned chests.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      },
      {
        "title": "Beginner Route, Gear, Factions & Diegoâs List",
        "href": "/gothic-1-remake",
        "type": "Walkthrough",
        "description": "Start here for Gothic 1 Remake guides: first route, Old Sword, Draxâs bow, Diggerâs Dress, best faction, Old Camp, and Diegoâs List.",
        "archive": {
          "showInCollections": true,
          "order": 5
        }
      },
      {
        "title": "Beginner Guide: What to Do First",
        "href": "/gothic-1-remake/beginner-guide",
        "type": "Beginner Guide",
        "description": "Learn what to do first, where to find the Old Sword, how escort XP works, when to spend LP, what enemies to avoid, and when to choose a camp.",
        "archive": {
          "showInCollections": true,
          "order": 6
        }
      },
      {
        "title": "Perfect Start Route",
        "href": "/gothic-1-remake/perfect-start",
        "type": "Walkthrough",
        "description": "Follow the best first route with Diego, Old Sword, Draxâs free bow, Old Camp safe bed, Mordrag escort, Riderâs Bow, and Lares access.",
        "archive": {
          "showInCollections": true,
          "order": 7
        }
      },
      {
        "title": "Best Faction Guide",
        "href": "/gothic-1-remake/best-faction",
        "type": "Guide",
        "description": "Compare Old Camp, New Camp, and Swamp Camp by armor, magic route, economy, trainers, Chapter 4 exile, and faction lock-in timing.",
        "archive": {
          "showInCollections": true,
          "order": 8
        }
      }
    ]
  },
  {
    "title": "House Flipper Remastered Collection",
    "game": "House Flipper Remastered Collection",
    "href": "/house-flipper-remastered-collection",
    "slug": "house-flipper-remastered-collection",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Completion",
    "description": "Start here for House Flipper Remastered Classic Mode, Free Play, first jobs, money, buyers, DLC regions, Heart Valley, and all 56 achievements.",
    "coverage": [
      "Achievements",
      "Beginner Guide",
      "Walkthrough",
      "Systems"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Jobs, Money, DLC & Achievements",
        "href": "/house-flipper-remastered-collection",
        "type": "Achievements",
        "description": "Start here for House Flipper Remastered Classic Mode, Free Play, first jobs, money, buyers, DLC regions, Heart Valley, and all 56 achievements.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide",
        "href": "/house-flipper-remastered-collection/beginner-guide",
        "type": "Beginner Guide",
        "description": "Pick Classic Mode or Free Play, clean the office, use the laptop, follow first jobs, choose early perks, use UV light, and avoid bad starts.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "First Jobs Walkthrough",
        "href": "/house-flipper-remastered-collection/first-jobs-walkthrough",
        "type": "Walkthrough",
        "description": "Finish Ex-Boyfriend Stole the Radiator, Cleaning the Garage, A Heated Argument, Art in Every Corner, tool unlocks, UV light, and 100% fixes.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Money Guide",
        "href": "/house-flipper-remastered-collection/money-guide",
        "type": "Systems",
        "description": "Make more money with jobs, room labels, buyer feedback, Dolan Trusk, Oceanside Villa profit, negotiation timing, and renovation cost control.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Realm of Ink",
    "game": "Realm of Ink",
    "href": "/realm-of-ink",
    "slug": "realm-of-ink",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Endings & Routes",
    "description": "Start here for Realm of Ink beginner tips, Ink Gems, Momo, Curios, Oread, best builds, final boss, true ending, Endless, and Rupture.",
    "coverage": [
      "Guide Hub",
      "Beginner Guide",
      "Builds",
      "Guide"
    ],
    "pages": [
      {
        "title": "Guide Hub, Builds, Oread & Endgame",
        "href": "/realm-of-ink",
        "type": "Guide Hub",
        "description": "Start here for Realm of Ink beginner tips, Ink Gems, Momo, Curios, Oread, best builds, final boss, true ending, Endless, and Rupture.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide, Ink Gems, Momo & Curios",
        "href": "/realm-of-ink/beginner-guide",
        "type": "Beginner Guide",
        "description": "Learn Ink Gems, Momo, Curios, dash heavy attacks, Way Stations, challenge rooms, Fox Blood, Primordial Ink, Rupture, and early mistakes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Builds, Violeta, Oread & Red Crit",
        "href": "/realm-of-ink/best-builds",
        "type": "Builds",
        "description": "Use Violeta status, Oread lasers, Red Crit, Venom + Ivy DOT, Momo pets, boss setups, Dragon Hair Brush, and Rupture build tips.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Endless, Rupture & High Difficulty Guide",
        "href": "/realm-of-ink/endless-rupture-guide",
        "type": "Guide",
        "description": "Unlock Endless mode, learn Rupture rewards, Dragon Hair Brush, Rupture 50, Archive builds, boss checks, and high difficulty build prep.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Fatekeeper",
    "game": "Fatekeeper",
    "href": "/fatekeeper",
    "slug": "fatekeeper",
    "kind": "game",
    "status": "archive",
    "accent": "rose",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Builds & Combat",
    "description": "Start here for Fatekeeper first hour, Haven, portal training, Ancient Hallways, safe builds, Blade vs Axe, fire spells, alchemy, and final EA boss help.",
    "coverage": [
      "Beginner Guide",
      "Walkthrough",
      "Builds",
      "Bosses"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Builds, Weapons & Boss",
        "href": "/fatekeeper",
        "type": "Beginner Guide",
        "description": "Start here for Fatekeeper first hour, Haven, portal training, Ancient Hallways, safe builds, Blade vs Axe, fire spells, alchemy, and final EA boss help.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide & First Hour Route",
        "href": "/fatekeeper/beginner-guide",
        "type": "Walkthrough",
        "description": "Explore Haven, finish portal training, craft at the alchemy table, enter Ancient Hallways, compare Blade vs Axe, find Ring of Life, and avoid early mistakes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Builds & Upgrade Priority",
        "href": "/fatekeeper/best-build",
        "type": "Builds",
        "description": "Choose safe melee, fire, alchemy, shatter, telekinesis, wind, or dagger builds with difficulty, core stats, Burning Axe, respec tips, and boss-ready routes.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Final EA Boss Guide",
        "href": "/fatekeeper/boss-guide",
        "type": "Bosses",
        "description": "Beat Fatekeeper's final Early Access fight with prep, adds control, block timing, fire damage, stomp dodges, phase two resets, and safe punish windows.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Scale the Depths",
    "game": "Scale the Depths",
    "href": "/scale-the-depths/loch-ness-100-percent-guide",
    "slug": "scale-the-depths",
    "kind": "game",
    "status": "archive",
    "accent": "cyan",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Finish Loch Ness with 23/23 customers, 7/7 treasures, Beithir, Nessie, Sputnik artifact, golden switch route, upgrades and cleanup checks.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Loch Ness 100% Guide",
        "href": "/scale-the-depths/loch-ness-100-percent-guide",
        "type": "Guide",
        "description": "Finish Loch Ness with 23/23 customers, 7/7 treasures, Beithir, Nessie, Sputnik artifact, golden switch route, upgrades and cleanup checks.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Outer Banks 100% Guide",
        "href": "/scale-the-depths/outer-banks-100-percent-guide",
        "type": "Guide",
        "description": "Find 5 messages, 6 artifacts, Compass, Spring, Sonar Receiver, Spanish Doubloon, boat blueprint, blue switches and Lost Dimetrodon.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Huatulco 100% Guide",
        "href": "/scale-the-depths/huatulco-100-percent-guide",
        "type": "Guide",
        "description": "Clear Huatulco pressure plate doors, Quetzalcoatl Statue, Shark Tooth, Pouch, boat decal, cosmetics, switches and Hoga.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Point Nemo 100% Guide",
        "href": "/scale-the-depths/point-nemo-100-percent-guide",
        "type": "Guide",
        "description": "Solve the three-hint door puzzle, find 5 messages, Sextant, Toy Submarine, Magnet, Sewing Needle, switches and Apophis 99942.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Mina the Hollower",
    "game": "Mina the Hollower",
    "href": "/mina-the-hollower",
    "slug": "mina-the-hollower",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Builds & Combat",
    "description": "Start after Ossex with the Isle Map, route order, Bones, upgrades, weapons, trinkets, fast travel, and early beginner tips.",
    "coverage": [
      "Walkthrough",
      "Guide"
    ],
    "pages": [
      {
        "title": "Beginner Guide & Walkthrough",
        "href": "/mina-the-hollower",
        "type": "Walkthrough",
        "description": "Start after Ossex with the Isle Map, route order, Bones, upgrades, weapons, trinkets, fast travel, and early beginner tips.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Where to Go First & Dungeon Order",
        "href": "/mina-the-hollower/where-to-go-first",
        "type": "Guide",
        "description": "Follow the best route after Ossex: Isle Map first, then Queensbury Crypt, Nox's Bayou, Septemburg, Sandfalls, Bone Beach, and Astral Orrery.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Isle Map, Rhene & Drillhardt Guide",
        "href": "/mina-the-hollower/how-to-get-map",
        "type": "Guide",
        "description": "Enter the Hollower's Guild, rescue Rhene from the Rebel Barracks, dig out Drillhardt, buy the Isle Map, and learn what the Enhanced Map does.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Bones Farming & Bone Stones Guide",
        "href": "/mina-the-hollower/bones-farming",
        "type": "Guide",
        "description": "Get safe Bone Stones, farm early Bones, unlock Elizabeth's Deboning Wand, pair it with Stolenoid, and use Mourner's Mile for bigger gains.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Cheap Car Repair",
    "game": "Cheap Car Repair",
    "href": "/cheap-car-repair",
    "slug": "cheap-car-repair",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy",
    "description": "Start here for Cheap Car Repair basics, controls, sloppiness, early missions, money, parts, Daddy's Little Girl, Kingman, and Shocked Driver.",
    "coverage": [
      "Walkthrough",
      "Guide",
      "Systems"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Tips, Missions & How to Play",
        "href": "/cheap-car-repair",
        "type": "Walkthrough",
        "description": "Start here for Cheap Car Repair basics, controls, sloppiness, early missions, money, parts, Daddy's Little Girl, Kingman, and Shocked Driver.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Daddy's Little Girl Mission Walkthrough",
        "href": "/cheap-car-repair/daddys-little-girl-mission",
        "type": "Walkthrough",
        "description": "Complete Angelica's job: rear-left tire, battery, brake fluid, petrol mix, rear engine access, air intake pipe, air filter choice, and Angelica turn-in.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Controls, Drop Items & Save Guide",
        "href": "/cheap-car-repair/controls-drop-items-save-tools",
        "type": "Guide",
        "description": "Learn Cheap Car Repair controls, how to drop items with G, save your game, remap keys, run faster, use tools, fluids, pliers, and the service pit.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "How to Make Money Fast",
        "href": "/cheap-car-repair/how-to-make-money",
        "type": "Systems",
        "description": "Make money fast with better job choices, cheap parts, found parts, sloppiness bonuses, regular clients, scrapyard savings, and early profit routes.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Starminer",
    "game": "Starminer",
    "href": "/starminer",
    "slug": "starminer",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy",
    "description": "Start here for Starminer first hour, Campaign vs Sandbox, controls, mining, credits, Low Energy, heat signature, G2 Solar, and research.",
    "coverage": [
      "Beginner Guide",
      "Guide",
      "Systems"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Mining, Power & Research",
        "href": "/starminer",
        "type": "Beginner Guide",
        "description": "Start here for Starminer first hour, Campaign vs Sandbox, controls, mining, credits, Low Energy, heat signature, G2 Solar, and research.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner First Hour Guide",
        "href": "/starminer/beginner-first-hour",
        "type": "Beginner Guide",
        "description": "Pick a preset, choose 3 modifiers, survive Campaign or Sandbox, scan, mine, sell, fix power, and avoid early overbuilding mistakes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Mining, Scanner & Laser Guide",
        "href": "/starminer/how-to-mine-scanner-laser",
        "type": "Guide",
        "description": "Fix Composition Unknown, scanner angle, mining laser range, haulers not collecting, Low Energy while mining, and early resource choices.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Power, Heat & Low Energy Guide",
        "href": "/starminer/power-heat-low-energy",
        "type": "Systems",
        "description": "Fix Low Energy with solar, batteries, G2 Solar, Thermal Dumpers, Radiators, heat signature control, and safer Research Lab timing.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Romestead",
    "game": "Romestead",
    "href": "/romestead",
    "slug": "romestead",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy",
    "description": "Start here for Romestead first town setup, Farmstead, gods, Giant Owl, dungeons, workers, food, offerings, and death recovery.",
    "coverage": [
      "Beginner Guide",
      "Builds",
      "Guide",
      "Bosses"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Bosses & Progression",
        "href": "/romestead",
        "type": "Beginner Guide",
        "description": "Start here for Romestead first town setup, Farmstead, gods, Giant Owl, dungeons, workers, food, offerings, and death recovery.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "First Day & Base Building Guide",
        "href": "/romestead/first-day-base-building",
        "type": "Builds",
        "description": "Build a safer first town with Workbench, Town Core, Altar, Food Storage, Leather Bedroll, workers, raids, and Defense Value.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Farmstead, Workers & Food Guide",
        "href": "/romestead/farmstead-workers-food-logistics",
        "type": "Guide",
        "description": "Fix Farmstead, worker, food, and logistics problems with 40 wheat, crop range, Well unlock, farmer levels, storage, and Warehouse checks.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Giant Owl Boss Guide",
        "href": "/romestead/giant-owl-guardian-of-minerva",
        "type": "Bosses",
        "description": "Find the Giant Owl nest, break the egg, prepare gear, survive Phase 2, claim Guardianâs Eye rewards, and unlock the next progression tier.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Paralives",
    "game": "Paralives",
    "href": "/paralives",
    "slug": "paralives",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Builds & Combat",
    "description": "Start here for Paralives beginner tips, early builds, skills, careers, job performance, upgrade points, and progression routes.",
    "coverage": [
      "Beginner Guide",
      "Systems",
      "Guide"
    ],
    "pages": [
      {
        "title": "Beginner Guide, Skills & Careers",
        "href": "/paralives",
        "type": "Beginner Guide",
        "description": "Start here for Paralives beginner tips, early builds, skills, careers, job performance, upgrade points, and progression routes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Early Game Skills & Careers",
        "href": "/paralives/best-early-game-skills-talents-careers",
        "type": "Systems",
        "description": "Pick stronger early skills, talents, vibes, careers, stats, Application Points routes, and first-save builds for smoother progression.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "How to Level Skills Faster",
        "href": "/paralives/level-skills-faster",
        "type": "Systems",
        "description": "Level skills faster with the right stats, Knowledge Skills, direct practice, Town Events, Together Cards, talents, and daily routines.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Job Performance Not Improving Fix",
        "href": "/paralives/job-performance-not-improving",
        "type": "Guide",
        "description": "Fix stuck job performance with skills, needs, career rank, perks, Story Cards, strikes, Moon Book, vacation days, and work checks.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "ZERO PARADES: For Dead Spies",
    "game": "ZERO PARADES: For Dead Spies",
    "href": "/zero-parades",
    "slug": "zero-parades",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Builds & Combat",
    "description": "Start here for first-run tips, safe build direction, stress and Exertion basics, Conditioning, early clues, and Bootleg Bazaar routing.",
    "coverage": [
      "Walkthrough",
      "Builds",
      "Guide"
    ],
    "pages": [
      {
        "title": "Beginner Guide & First Route",
        "href": "/zero-parades",
        "type": "Walkthrough",
        "description": "Start here for first-run tips, safe build direction, stress and Exertion basics, Conditioning, early clues, and Bootleg Bazaar routing.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Early Game Walkthrough",
        "href": "/zero-parades/early-game",
        "type": "Walkthrough",
        "description": "Find Pseudopod clues, the purchase order, red disc, half cipher, Rosetta cipher, Constance, Carmuna, and what to do first in Bootleg Bazaar.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Build for First Playthrough",
        "href": "/zero-parades/best-build",
        "type": "Builds",
        "description": "Use a safe 45-point starting build, compare Relation, Intellect, and Action choices, patch weak checks with gear, and avoid bad early skill traps.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Stress & Exertion Guide",
        "href": "/zero-parades/stress-exertion",
        "type": "Guide",
        "description": "Learn Fatigue, Anxiety, Delirium, Exertion, Pressured limits, skill loss, recovery consumables, and when a check is worth pushing.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "LEGO Batman: Legacy of the Dark Knight",
    "game": "LEGO Batman: Legacy of the Dark Knight",
    "href": "/lego-batman",
    "slug": "lego-batman",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Older archive",
    "label": "Systems",
    "description": "Start here for the best first-playthrough route, Batcave systems, Red Bricks, Batgirl, Firefly, Poison Ivy, Bane, and cleanup planning.",
    "coverage": [
      "Walkthrough",
      "Collectibles",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide & First Route",
        "href": "/lego-batman",
        "type": "Walkthrough",
        "description": "Start here for the best first-playthrough route, Batcave systems, Red Bricks, Batgirl, Firefly, Poison Ivy, Bane, and cleanup planning.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "All 23 Red Brick Locations",
        "href": "/lego-batman/red-bricks",
        "type": "Collectibles",
        "description": "Find every Red Brick, including all 14 mission puzzles, 9 Bat-Miteâs Shop bricks, modifier effects, shop refresh tips, and safe code 596.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Carmine Falcone Walkthrough",
        "href": "/lego-batman/carmine-falcone",
        "type": "Walkthrough",
        "description": "Clear the Iceberg Lounge route, find Falconeâs office, solve the food order, reach House of Fun, and open the Filthy Rich Red Brick safe.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Batgirl Unlock Guide",
        "href": "/lego-batman/batgirl-unlock",
        "type": "Guide",
        "description": "Find when Barbara becomes Batgirl, how the Chapter 4 Firefly sequence unlocks her, what her tech does, and why Radio Towers matter.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Dwarf Eats Mountain",
    "game": "Dwarf Eats Mountain",
    "href": "/dwarf-eats-mountain",
    "slug": "dwarf-eats-mountain",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Older archive",
    "label": "Endings & Routes",
    "description": "Find the right guide for build order, runners, Prestige, artifacts, Mithril, best builds, Goblin King, World Spire, and True Ending.",
    "coverage": [
      "Guide Hub",
      "Beginner Guide",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide Hub",
        "href": "/dwarf-eats-mountain",
        "type": "Guide Hub",
        "description": "Find the right guide for build order, runners, Prestige, artifacts, Mithril, best builds, Goblin King, World Spire, and True Ending.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Build Order",
        "href": "/dwarf-eats-mountain/build-order",
        "type": "Beginner Guide",
        "description": "What to build first, Great Maw setup, Runners, N/A upgrades, building unlocks, first Mithril, Flameworks, Demo Shack, and first Prestige.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Runners Guide",
        "href": "/dwarf-eats-mountain/runners-guide",
        "type": "Guide",
        "description": "Fix gold not being collected, runner speed, carrying capacity, stunned runners, ore reclaim, Looming Motivation, and Mithril runner upgrades.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Prestige & Ascension Guide",
        "href": "/dwarf-eats-mountain/prestige-ascension-guide",
        "type": "Guide",
        "description": "When to Prestige, how to spend PP, best early upgrades, Swift Start, T6 stacking, Ascension Rank, and what resets or stays.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Oaken Tower",
    "game": "Oaken Tower",
    "href": "/oaken-tower",
    "slug": "oaken-tower",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Builds & Combat",
    "description": "Start here for builds, Poison scaling, 10-win strategy, level vs reroll decisions, 3-star items, perk unlocks, and common run mistakes.",
    image: "/images/oaken-tower/hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    "coverage": [
      "Guide Hub",
      "Builds",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide Hub",
        "href": "/oaken-tower",
        "type": "Guide Hub",
        "description": "Start here for builds, Poison scaling, 10-win strategy, level vs reroll decisions, 3-star items, perk unlocks, and common run mistakes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Poison Build Guide",
        "href": "/oaken-tower/poison-build",
        "type": "Builds",
        "description": "Learn when to commit to Poison, which items and perks matter, how to use Venom Ring, Toxins, Poison Dagger, and how to handle matchups.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "How to Get 10 Wins",
        "href": "/oaken-tower/10-wins-guide",
        "type": "Guide",
        "description": "Fix 6-7 win stalls, protect your hearts, choose one real carry, stop over-rolling, and make safer final-fight decisions for 10 wins.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Level vs Reroll Guide",
        "href": "/oaken-tower/level-vs-reroll",
        "type": "Guide",
        "description": "Know when to level, reroll, freeze, buy power, or save gold with XP cost, income, shop timing, freeze tricks, and 3-star chase decisions.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Subnautica 2",
    "game": "Subnautica 2",
    "href": "/subnautica-2",
    "slug": "subnautica-2",
    "kind": "game",
    "status": "archive",
    "accent": "cyan",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Systems",
    "description": "Start here for the first route, tools, Welcome Center, Digestion, resources, base setup, Tadpole, co-op, navigation, and Leviathan survival.",
    "coverage": [
      "Guide Hub",
      "Guide",
      "Systems"
    ],
    "pages": [
      {
        "title": "Complete Guide Hub",
        "href": "/subnautica-2",
        "type": "Guide Hub",
        "description": "Start here for the first route, tools, Welcome Center, Digestion, resources, base setup, Tadpole, co-op, navigation, and Leviathan survival.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "What to Do First Guide",
        "href": "/subnautica-2/what-to-do-first",
        "type": "Guide",
        "description": "A safe first two-hour route: craft core tools, reach the Welcome Center, unlock Digestion, find Silver, and prepare your first base.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Early Resources Guide",
        "href": "/subnautica-2/early-resources",
        "type": "Systems",
        "description": "Find early Titanium, Copper, Quartz, Silver, Salt, Rubber, Fibrous Pulp, Acidic Raion Pouches, Strong Acid, and key crafting materials.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "First Base Setup Guide",
        "href": "/subnautica-2/first-base-setup",
        "type": "Guide",
        "description": "Learn when to leave the Lifepod, where to build your first base, how to set up storage, power, Habitat Beacon, and Moonpool space.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "The Spell Brigade",
    "game": "The Spell Brigade",
    "href": "/the-spell-brigade",
    "slug": "the-spell-brigade",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Builds & Combat",
    "description": "Start here for builds, spells, elements, gold farming, solo play, wizard unlocks, achievements, Trial Covenants, Masteries, and Ascension.",
    "coverage": [
      "Guide Hub",
      "Builds",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide Hub",
        "href": "/the-spell-brigade",
        "type": "Guide Hub",
        "description": "Start here for builds, spells, elements, gold farming, solo play, wizard unlocks, achievements, Trial Covenants, Masteries, and Ascension.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Builds Guide",
        "href": "/the-spell-brigade/best-builds",
        "type": "Builds",
        "description": "Best builds for 1.0, including Falling Stars Lightning, Solar Pulse Aura, Acid Multi-Hit, Scepter Mesh, Dodge Crit Heal, and co-op routes.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Spells & Elements Guide",
        "href": "/the-spell-brigade/best-spells-elements",
        "type": "Guide",
        "description": "Spell rankings, base elements, advanced infusions, Plasma, Acid, Wildfire, Flux, Corrosion, Thunder, and wizard-specific element choices.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Wizard Unlocks Guide",
        "href": "/the-spell-brigade/wizard-unlocks",
        "type": "Guide",
        "description": "All 15 wizards, signature spells, passive traits, unlock planning, best wizard by role, Knelly, Pipwick, Wizard King, ranks, and ascension context.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Everything Is Crab",
    "game": "Everything Is Crab",
    "href": "/everything-is-crab",
    "slug": "everything-is-crab",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Older archive",
    "label": "Older Archive",
    "description": "Core mechanics, first-clear route, Cheek Pouch, Trunk scaling, Carcinisation, biomes, genetics, bosses, and what to do after your first clear.",
    "coverage": [
      "Beginner Guide",
      "Builds",
      "Bosses",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Beginner Guide",
        "href": "/everything-is-crab",
        "type": "Beginner Guide",
        "description": "Core mechanics, first-clear route, Cheek Pouch, Trunk scaling, Carcinisation, biomes, genetics, bosses, and what to do after your first clear.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Builds Guide",
        "href": "/everything-is-crab/best-builds",
        "type": "Builds",
        "description": "Best first-clear builds, Trunk Hybrid, Body Slam Tank, Big Physical, Spines Reflect, Social Pack, evolution timing, and pivot rules.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Boss Guide",
        "href": "/everything-is-crab/boss-guide",
        "type": "Bosses",
        "description": "How to beat Crabaroo, Aquaconda, Clawdia, Shellephant, Crabtaur, Crab Kin, Cataclysm, Final Challenge, and boss-ready builds.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Progression Guide",
        "href": "/everything-is-crab/progression-guide",
        "type": "Guide",
        "description": "Pressure levels, genetics, Codex checks, unlock tracking, Endless Mode preparation, milestone order, and what to test after each run.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Outbound",
    "game": "Outbound",
    "href": "/outbound",
    "slug": "outbound",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy",
    "description": "Start here for the best starting van, first steps, Signal Towers, blueprints, storage, energy, resources, Mossrocks, dogs, co-op, and early progression.",
    "coverage": [
      "Guide Hub",
      "Guide",
      "Systems"
    ],
    "pages": [
      {
        "title": "Complete Beginner Guide Hub",
        "href": "/outbound",
        "type": "Guide Hub",
        "description": "Start here for the best starting van, first steps, Signal Towers, blueprints, storage, energy, resources, Mossrocks, dogs, co-op, and early progression.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "First Biome Progression Guide",
        "href": "/outbound/leave-first-biome",
        "type": "Guide",
        "description": "How to leave the first biome, including broken bridges, Everwood Planks, the drawbridge switch, Motor I, Pickaxe II, Mossrocks, and Paws & Whiskers Lodge.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Energy & Battery Guide",
        "href": "/outbound/energy-guide",
        "type": "Systems",
        "description": "Fix battery drain with Power Unit fuel, charging stations, solar, wind, rainwater, van weight, vehicle upgrades, co-op power tips, and out-of-power recovery.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Early Resource Guide",
        "href": "/outbound/early-resources",
        "type": "Systems",
        "description": "Find Scrap Metal, Everwood, Fiber, Litter, Coarse Ore, Silverbark, Redwood, Clay, Sawmill numbers, bridge materials, respawns, and farming routes.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Directive 8020",
    "game": "Directive 8020",
    "href": "/directive-8020",
    "slug": "directive-8020",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Story",
    "description": "Best first-run route, key choices, Ep2 power routing, Ice and Fire, Two Eisele, Explorer vs Survivor, and what to clean up after Everyone Lives.",
    "coverage": [
      "Guide",
      "Endings"
    ],
    "pages": [
      {
        "title": "Save Everyone Guide",
        "href": "/directive-8020",
        "type": "Guide",
        "description": "Best first-run route, key choices, Ep2 power routing, Ice and Fire, Two Eisele, Explorer vs Survivor, and what to clean up after Everyone Lives.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Choices and Consequences Guide",
        "href": "/directive-8020/choices-consequences",
        "type": "Guide",
        "description": "Major choices, delayed consequences, Ep2 Fire Control vs Landing Computer, Ice and Fire, Destinies, Survivor Mode, and final message branches.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Mimic and Alien Duplicates Guide",
        "href": "/directive-8020/all-monster-scenes-alien-duplicates",
        "type": "Guide",
        "description": "Which Eisele is fake, when to Test instead of Shoot, scanner verification, Eisele Double, Save Your Souls, intruder states, and contaminated endings.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "All Endings Guide",
        "href": "/directive-8020/all-endings",
        "type": "Endings",
        "description": "Every ending variant, Everyone Lives, Beacon, Docked, Not Alone, Hitchhiker, Homeward Bound, Game Over, Everyone Dies, Destinies, and Cycle 13.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Road to Vostok",
    "game": "Road to Vostok",
    "href": "/road-to-vostok/area-05-guide",
    "slug": "road-to-vostok",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Best first-run route, early loot order, Generalist timing, Village reset logic, and when School or Highway are actually worth pushing.",
    "coverage": [
      "Guide",
      "Collectibles"
    ],
    "pages": [
      {
        "title": "Area 05 Guide",
        "href": "/road-to-vostok/area-05-guide",
        "type": "Guide",
        "description": "Best first-run route, early loot order, Generalist timing, Village reset logic, and when School or Highway are actually worth pushing.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Generalist and Doctor Locations",
        "href": "/road-to-vostok/generalist-and-doctor-locations",
        "type": "Collectibles",
        "description": "Exact trader routes, unlock timing, who to visit first, and why their shelter and task paths matter more than random trades.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Permadeath, Save, and Stash Guide",
        "href": "/road-to-vostok/permadeath-save-and-stash-guide",
        "type": "Guide",
        "description": "How saving really works, what you lose on death, when Shelter stash is safe, and why stable loops beat greedy clears.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "All Shelter Locations",
        "href": "/road-to-vostok/all-shelter-locations",
        "type": "Collectibles",
        "description": "Every current shelter, how to unlock each one, the best order, and which shelters are actually worth rushing.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Shapez 2",
    "game": "Shapez 2",
    "href": "/shapez-2/manufacture-mode-guide",
    "slug": "shapez-2",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Dimensional Waste, Polishing Stations, Trade Stations, Donation and Research Stations, alternate recipes, and the Grand Vortex Assembler route.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Manufacture Mode Guide",
        "href": "/shapez-2/manufacture-mode-guide",
        "type": "Guide",
        "description": "Dimensional Waste, Polishing Stations, Trade Stations, Donation and Research Stations, alternate recipes, and the Grand Vortex Assembler route.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Trade Station Guide",
        "href": "/shapez-2/trade-station-guide",
        "type": "Guide",
        "description": "How Trade Stations work in 1.0, including refined shapes, alternate recipes, Donation and Research Stations, rocket issues, and common bottlenecks.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Wires and Belt Filter Guide",
        "href": "/shapez-2/wires-belt-filter-guide",
        "type": "Guide",
        "description": "Belt Filter signal behavior, Displays, Belt Reader null output, logic gate traps, shape signals, and why your filter is not working.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "MAM Guide",
        "href": "/shapez-2/mam-guide",
        "type": "Guide",
        "description": "Build your first 1.0 Make Anything Machine with Global Receivers, simulated buildings, NE orientation, Belt Filters, pins, crystals, and multiple MAMs.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Moomintroll Winter's Warmth",
    "game": "Moomintroll Winter's Warmth",
    "href": "/moomintroll",
    "slug": "moomintroll",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Older archive",
    "label": "Endings & Routes",
    "description": "Start here for the full winter route, including tools, vase pieces, side quests, the Great Winter Bonfire, achievements, and ending cleanup.",
    "coverage": [
      "Walkthrough",
      "Collectibles",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Walkthrough & Guide",
        "href": "/moomintroll",
        "type": "Walkthrough",
        "description": "Start here for the full winter route, including tools, vase pieces, side quests, the Great Winter Bonfire, achievements, and ending cleanup.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "All 25 Vase Piece Locations",
        "href": "/moomintroll/vase-piece-locations",
        "type": "Collectibles",
        "description": "Every Moominmamma vase piece location, including tool requirements, quest rewards, bird drops, cave pieces, and final cleanup checks.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "All Tool Upgrades Guide",
        "href": "/moomintroll/tool-upgrades",
        "type": "Guide",
        "description": "How to get and upgrade every tool, including the shovel, reinforced mittens, axe, lamp oil, whetstone, sharp axe, and upgraded shovel.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Great Winter Bonfire Guide",
        "href": "/moomintroll/great-winter-bonfire",
        "type": "Guide",
        "description": "How to prepare the Great Winter Bonfire, collect 125 firewood, invite five guests, find the musician, help winter beings, and fix blockers.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Gamble With Your Friends",
    "game": "Gamble With Your Friends",
    "href": "/gamble-with-your-friends",
    "slug": "gamble-with-your-friends",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Older archive",
    "label": "Completion",
    "description": "Start here for Gamble With Your Friends guides, including beginner routes, tickets, items, body parts, best games, item combos, Street Craps, and achievements.",
    image: "/images/gamble-with-your-friends/hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    "coverage": [
      "Achievements",
      "Beginner Guide",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide: Beginner Tips, Items, Best Games, and Achievements",
        "href": "/gamble-with-your-friends",
        "type": "Achievements",
        "description": "Start here for Gamble With Your Friends guides, including beginner routes, tickets, items, body parts, best games, item combos, Street Craps, and achievements.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide: Shared Bank, Quota, Floors, and First Run Tips",
        "href": "/gamble-with-your-friends/beginner-guide",
        "type": "Beginner Guide",
        "description": "Learn how to survive your first Gamble With Your Friends runs, including shared-bank mistakes, quota priorities, Floor 1 routes, safe games, and when to stop betting.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Items Guide: Tickets, Body Parts, Prices, and Best Purchases",
        "href": "/gamble-with-your-friends/tickets-items-body-parts",
        "type": "Guide",
        "description": "Understand tickets, item prices, pickup flow, body-part value, Golden Chip, Holy Statue, Taser, Quota Gun, Insurance, Drink, and other key items.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Best Games Guide: Roulette, Blackjack, Craps, Duck Race, and Later Floors",
        "href": "/gamble-with-your-friends/best-games",
        "type": "Guide",
        "description": "Find the best games to play in Gamble With Your Friends, including safe Floor 1 picks, high-risk later-floor games, item-supported tables, and blind max-bet traps.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Magical Princess",
    "game": "Magical Princess",
    "href": "/magical-princess/endings-guide",
    "slug": "magical-princess",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Endings & Routes",
    "description": "Start here for Magical Princess endings, including 50+ career, partner, and secret routes, Two Queens, Heir of the Stargazer, Golden Ending, and route order.",
    "coverage": [
      "Endings",
      "Walkthrough"
    ],
    "pages": [
      {
        "title": "Endings Guide: Career, Partner, Secret, True, and Golden Routes",
        "href": "/magical-princess/endings-guide",
        "type": "Endings",
        "description": "Start here for Magical Princess endings, including 50+ career, partner, and secret routes, Two Queens, Heir of the Stargazer, Golden Ending, and route order.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Forbidden Research Guide: Unlock the Hidden Library Route",
        "href": "/magical-princess/forbidden-research-guide",
        "type": "Walkthrough",
        "description": "Learn how to unlock Forbidden Research, why Decipher Literature does not work, how Cornet's necklace changes the Library in NG+, and what to do after Level 5.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "True Ending Guide: How to Get Heir of the Stargazer",
        "href": "/magical-princess/true-ending-heir-of-the-stargazer",
        "type": "Endings",
        "description": "Follow the full true ending route through Two Queens, Cornelia, the Inheritance Fragment, Forbidden Research, Anna's cue, and Infinite Mirror Labyrinth.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Golden Ending Guide: Cornet's Necklace, NG+, and Labyrinth Route",
        "href": "/magical-princess/golden-ending-guide",
        "type": "Endings",
        "description": "Get the Golden Ending by defeating Blackburn, receiving Cornet's necklace, unlocking Forbidden Research, entering the Labyrinth route, and avoiding normal ending lockouts.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Heroes of Might and Magic: Olden Era",
    "game": "Heroes of Might and Magic: Olden Era",
    "href": "/olden-era",
    "slug": "olden-era",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Start here for Heroes of Might and Magic: Olden Era guides, including subclasses, Necropolis, early economy, Focus Points, Law Points, and beginner routes.",
    "coverage": [
      "Builds",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide: Subclasses, Factions, Economy, and Early Game Tips",
        "href": "/olden-era",
        "type": "Builds",
        "description": "Start here for Heroes of Might and Magic: Olden Era guides, including subclasses, Necropolis, early economy, Focus Points, Law Points, and beginner routes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Subclass Guide: How to Unlock Advanced Classes",
        "href": "/olden-era/subclass-guide",
        "type": "Builds",
        "description": "Learn how subclasses and Advanced Classes work, including skill requirements, unlock mistakes, route planning, and when to force or abandon a subclass.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Necropolis Guide: Heroes, Skeleton Archers, Necromancy, and Build Order",
        "href": "/olden-era/necropolis-guide",
        "type": "Builds",
        "description": "Play Necropolis with a stronger Week 1 plan, including best heroes, Skeleton Archer timing, Necromancy scaling, Focus usage, and safe early build order.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Focus Points Explained: Focus Charges, Costs, and Combat Timing",
        "href": "/olden-era/focus-points",
        "type": "Guide",
        "description": "Understand Focus Points, Focus Charges, the 3 Charge cap, ability costs, generation rules, turn order, Necropolis Focus, and Schism Focus.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Farever",
    "game": "Farever",
    "href": "/farever",
    "slug": "farever",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Older archive",
    "label": "Builds & Combat",
    "description": "Start here for Farever early access guides: beginner route, Codeex leveling, weapon skills, classes, mounts, and the first Mine Estrone dungeon.",
    "coverage": [
      "Guide Hub",
      "Beginner Guide",
      "Guide"
    ],
    "pages": [
      {
        "title": "Farever Guide Hub",
        "href": "/farever",
        "type": "Guide Hub",
        "description": "Start here for Farever early access guides: beginner route, Codeex leveling, weapon skills, classes, mounts, and the first Mine Estrone dungeon.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Beginner Guide: What to Do First",
        "href": "/farever/beginner-guide",
        "type": "Beginner Guide",
        "description": "Learn the best first-hour route in Farever: claim your free mount, follow map objectives, use Codeex, upgrade weapon skills, manage inventory, and prepare for your first dungeon.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Codeex & Leveling Guide",
        "href": "/farever/codeex-leveling-guide",
        "type": "Guide",
        "description": "Use Codeex monster entries, 4-kill and 8-kill milestones, map completion, obelisks, mini bosses, and party credit to level efficiently in early Farever.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "First Dungeon Guide: Mine Estrone & Reblochonk",
        "href": "/farever/first-dungeon-guide",
        "type": "Guide",
        "description": "Clear Farever's early Mine Estrone dungeon route: choose Basic difficulty, track Secret Orbs, clear special foes, beat Reblochonk, and avoid confusing it with Crabgantua.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Far Far West",
    "game": "Far Far West",
    "href": "/far-far-west/secret-missions",
    "slug": "far-far-west",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Older archive",
    "label": "Older Archive",
    "description": "Start here for every Far Far West secret mission: Ghost Bells, Canyon Medallions, Cactus Day, Woodlands Mushrooms, Area 41 symbols, and Snowman Parts.",
    "coverage": [
      "Walkthrough",
      "Collectibles",
      "Guide"
    ],
    "pages": [
      {
        "title": "All Secret Missions & Secret Jokers Guide",
        "href": "/far-far-west/secret-missions",
        "type": "Walkthrough",
        "description": "Start here for every Far Far West secret mission: Ghost Bells, Canyon Medallions, Cactus Day, Woodlands Mushrooms, Area 41 symbols, and Snowman Parts.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Canyon Secret Medallion Locations",
        "href": "/far-far-west/canyon-secret-medallion-locations",
        "type": "Collectibles",
        "description": "Find all 4 Canyon medallions, complete the Hawkeye targets, open the secret cave, and unlock Pigpick / Pick Pick plus the Elder Pickaxe reward.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Ghost Bell Shard Locations & Bellshot Guide",
        "href": "/far-far-west/ghost-bell-shard-locations",
        "type": "Collectibles",
        "description": "Find all 3 Ghost Bell Shards, complete each bell order mini-game, return to the Great Bell, and unlock the Bellshot weapon Joker.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Area 41 Symbol Order Guide",
        "href": "/far-far-west/area-41-symbol-order",
        "type": "Guide",
        "description": "Solve the Area 41 alien symbol puzzle, rotate the four pillars in the correct order, press the button, and unlock Anti-Gravity Falls.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Librarian: Tidy Up the Arcane Library!",
    "game": "Librarian: Tidy Up the Arcane Library!",
    "href": "/librarian",
    "slug": "librarian",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Completion",
    "description": "Start here for Librarian guides, including all key locations, chest unlocks, best abilities, blue shelf indicators, book sorting, achievements, and common missing-book fixes.",
    image: "/images/librarian/hub.webp",
    imageFit: "cover",
    imagePosition: "center",
    imagePadding: false,
    "coverage": [
      "Achievements",
      "Collectibles",
      "Guide"
    ],
    "pages": [
      {
        "title": "Complete Guide: Keys, Abilities, Sorting, Achievements, and Fixes",
        "href": "/librarian",
        "type": "Achievements",
        "description": "Start here for Librarian guides, including all key locations, chest unlocks, best abilities, blue shelf indicators, book sorting, achievements, and common missing-book fixes.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "All Key Locations: Crimson, Golden, Azure, and Emerald Keys",
        "href": "/librarian/key-locations",
        "type": "Collectibles",
        "description": "Find every hidden key and chest reward, including the Crimson Octagon Key, Golden Diamond Key, Azure Star Key, Emerald Club Key, Jump, Sprint, and Carry Capacity upgrades.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Abilities Guide: Assemble, Insight, Sorting, and Auto-Shelving",
        "href": "/librarian/best-abilities",
        "type": "Guide",
        "description": "Learn the best ability upgrade order, why Assemble is the strongest skill, when Sorting becomes worth it, how Auto-Shelving fits in, and what to avoid for Anti-Magic Master.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Book Sorting Guide: Sections, Color Clues, and Blue Shelf Indicators",
        "href": "/librarian/book-sorting",
        "type": "Guide",
        "description": "Learn how book sorting works with section maps, title clues, color traps, volume order, small shelves, blue shelf indicators, and missing-book troubleshooting.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Fracture Field",
    "game": "Fracture Field",
    "href": "/fracture-field",
    "slug": "fracture-field",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Start here for the full route: early upgrades, World Fracture, Drone Hub automation, Reality Shatter, layer walls, known fixes, and 100% cleanup.",
    "coverage": [
      "Walkthrough",
      "Guide",
      "Achievements"
    ],
    "pages": [
      {
        "title": "Complete Walkthrough & Guide",
        "href": "/fracture-field",
        "type": "Walkthrough",
        "description": "Start here for the full route: early upgrades, World Fracture, Drone Hub automation, Reality Shatter, layer walls, known fixes, and 100% cleanup.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Prestige Guide",
        "href": "/fracture-field/prestige-guide",
        "type": "Guide",
        "description": "World Fracture timing, Reality Shatter rules, what you lose or keep in v1.1.0, Core Fragment benchmarks, and best prestige upgrades.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Progression Guide",
        "href": "/fracture-field/progression-guide",
        "type": "Guide",
        "description": "All rock layers from Stone to Chronite, Iron wall fixes, Pierce vs Hardness, Drone Hub setup, Gold, Obsidian, and late-game routing.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Achievements & 100% Guide",
        "href": "/fracture-field/achievements-guide",
        "type": "Achievements",
        "description": "100% completion roadmap, known achievement names, Golden Touch warning, bomb and drone setups, prestige milestones, and hardest achievements.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Airborne Empire",
    "game": "Airborne Empire",
    "href": "/airborne-empire/kingsfell-guide",
    "slug": "airborne-empire",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "When to enter the final biome, how to prepare your city, Jet Engine timing, and the safest way to approach the endgame push.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Kingsfell Guide",
        "href": "/airborne-empire/kingsfell-guide",
        "type": "Guide",
        "description": "When to enter the final biome, how to prepare your city, Jet Engine timing, and the safest way to approach the endgame push.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Pirate Queen Guide",
        "href": "/airborne-empire/pirate-queen-guide",
        "type": "Guide",
        "description": "How to beat the final boss with the safest city setup, better anti-air control, cleaner approach timing, and smarter flank rotation.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Tilt, Lift, and Balance Guide",
        "href": "/airborne-empire/tilt-lift-balance-guide",
        "type": "Guide",
        "description": "Fix unstable layouts, solve the not enough lift to support weight warning, improve propulsion, and know when to rebuild instead of patching.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Jet Engine Guide",
        "href": "/airborne-empire/jet-engine-guide",
        "type": "Guide",
        "description": "When Jet Engine becomes relevant, how to rebuild your city around it, and why it matters so much in Kingsfell and the Pirate Queen fight.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "holoVillage: Our Cozy Days",
    "game": "holoVillage: Our Cozy Days",
    "href": "/holovillage-our-cozy-days",
    "slug": "holovillage-our-cozy-days",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Older archive",
    "label": "Builds & Combat",
    "description": "Start here for the main holoVillage early-game guide cluster, including beginner tips, fishing, villagers, shop money systems, and early combat progression.",
    "coverage": [
      "Guide Hub",
      "Guide",
      "Systems"
    ],
    "pages": [
      {
        "title": "Guide Hub",
        "href": "/holovillage-our-cozy-days",
        "type": "Guide Hub",
        "description": "Start here for the main holoVillage early-game guide cluster, including beginner tips, fishing, villagers, shop money systems, and early combat progression.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Fishing Guide",
        "href": "/holovillage-our-cozy-days/fishing-guide",
        "type": "Guide",
        "description": "Where to fish, why some water cannot be fished, how bait works, how to catch carp and koi, and what Fisher Rank unlocks in the early game.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "How to Invite Villagers",
        "href": "/holovillage-our-cozy-days/how-to-invite-villagers",
        "type": "Guide",
        "description": "How villager houses, visitors, exchange points, invite points, next-day move-ins, villager jobs, and the workbox system work.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Shop and Money Guide",
        "href": "/holovillage-our-cozy-days/shop-money-guide",
        "type": "Systems",
        "description": "How to make money through Restaurant and Smitty systems, store setup, sales clerks, bonus profit, cooking, equipment sales, and what to sell early.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Vampire Crawlers",
    "game": "Vampire Crawlers",
    "href": "/vampire-crawlers",
    "slug": "vampire-crawlers",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Builds & Combat",
    "description": "Start here for the main Vampire Crawlers guide cluster, including early upgrades, combo sequencing, weapon evolutions, beginner characters, and hidden unlocks.",
    "coverage": [
      "Guide Hub",
      "Guide"
    ],
    "pages": [
      {
        "title": "Guide Hub",
        "href": "/vampire-crawlers",
        "type": "Guide Hub",
        "description": "Start here for the main Vampire Crawlers guide cluster, including early upgrades, combo sequencing, weapon evolutions, beginner characters, and hidden unlocks.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Early Upgrades",
        "href": "/vampire-crawlers/best-early-upgrades",
        "type": "Guide",
        "description": "What to buy first in the Power-Up shop, including Reroll, Recovery, Might, Cooldown, Greed, Arcana reminders, Bing machines, and Blacksmith traps.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Combo Guide",
        "href": "/vampire-crawlers/combo-guide",
        "type": "Guide",
        "description": "How 0-1-2 mana order works, when skipped numbers still count, how Wildcards and combo Gems change sequencing, and when to avoid Play All.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Early Evolutions Guide",
        "href": "/vampire-crawlers/early-evolutions",
        "type": "Guide",
        "description": "Best early weapon evolutions, full recipe planning, Grim Grimoire tracking, what gets consumed after evolving, and when to delay chests or red-orb triggers.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Sol Cesto",
    "game": "Sol Cesto",
    "href": "/sol-cesto/all-characters-unlock-guide",
    "slug": "sol-cesto",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Rpg",
    "description": "Full roster overview, normal progression unlocks, and the hidden Lizard route.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "All Characters Unlock Guide",
        "href": "/sol-cesto/all-characters-unlock-guide",
        "type": "Guide",
        "description": "Full roster overview, normal progression unlocks, and the hidden Lizard route.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "How to Unlock Lizard",
        "href": "/sol-cesto/how-to-unlock-lizard",
        "type": "Guide",
        "description": "Egg location, Biome 3 hatch condition, and why the Candle is not required.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Flute Guide",
        "href": "/sol-cesto/flute-guide",
        "type": "Guide",
        "description": "Flute Fragments, melody inputs, effects, and fountain bird repair explained.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "How to Unlock Huntress",
        "href": "/sol-cesto/how-to-unlock-huntress",
        "type": "Guide",
        "description": "The fastest Huntress unlock answer, what counts as a clear, and common confusion.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Retro Rewind",
    "game": "Retro Rewind",
    "href": "/retro-rewind/custom-videos",
    "slug": "retro-rewind",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Older archive",
    "label": "Older Archive",
    "description": "How custom videos work and how to use them effectively.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Custom Videos Guide",
        "href": "/retro-rewind/custom-videos",
        "type": "Guide",
        "description": "How custom videos work and how to use them effectively.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Community Insights",
        "href": "/retro-rewind/community",
        "type": "Guide",
        "description": "Tips and strategies from the community.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Black Market Worth It?",
        "href": "/retro-rewind/is-the-black-market-worth-it",
        "type": "Guide",
        "description": "Risks, rewards, and when to use it.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Replace Damaged Tape",
        "href": "/retro-rewind/when-to-replace-damaged-tape",
        "type": "Guide",
        "description": "When replacing improves progress.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Soulmask",
    "game": "Soulmask",
    "href": "/soulmask",
    "slug": "soulmask",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Rpg",
    "description": "Your starting point for Shifting Sands guides, including beginner tips, airships, cross-map transfer, and tribesmen management.",
    "coverage": [
      "Guide Hub",
      "Systems",
      "Guide",
      "Beginner Guide"
    ],
    "pages": [
      {
        "title": "Shifting Sands Guide Hub",
        "href": "/soulmask",
        "type": "Guide Hub",
        "description": "Your starting point for Shifting Sands guides, including beginner tips, airships, cross-map transfer, and tribesmen management.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Tribesmen Role System Guide",
        "href": "/soulmask/tribesmen-role-system-guide",
        "type": "Systems",
        "description": "Learn how assignments, roles, and Training Ground work, and how to manage tribesmen more efficiently in 1.0.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Airship Guide",
        "href": "/soulmask/airship-guide",
        "type": "Guide",
        "description": "Understand how airships work in Shifting Sands, including ship building, modules, combat use, and mobile base potential.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Shifting Sands Beginner Guide",
        "href": "/soulmask/shifting-sands-beginner-guide",
        "type": "Beginner Guide",
        "description": "A practical first-steps guide for new and returning players, covering what to do in your first hours on the new map.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Crystalfall",
    "game": "Crystalfall",
    "href": "/crystalfall",
    "slug": "crystalfall",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Builds & Combat",
    "description": "Your starting point for Crystalfall guides, including beginner tips, Fireball builds, crafting systems, and inventory management.",
    "coverage": [
      "Guide Hub",
      "Beginner Guide",
      "Guide"
    ],
    "pages": [
      {
        "title": "Crystalfall Guide Hub",
        "href": "/crystalfall",
        "type": "Guide Hub",
        "description": "Your starting point for Crystalfall guides, including beginner tips, Fireball builds, crafting systems, and inventory management.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Crystalfall Beginner Guide",
        "href": "/crystalfall/beginner-guide",
        "type": "Beginner Guide",
        "description": "A practical first-steps guide covering the best starting class, Fireball opener, Aether priorities, and what to do in your first hours.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Fireball Build for Beginners",
        "href": "/crystalfall/fireball-build-guide",
        "type": "Beginner Guide",
        "description": "Learn the cleanest Technomancer Fireball setup, including early passive pathing, Rod compatibility, Aether sustain, and top upgrade priorities.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Crafting, Sockets, and Gem Fusion Guide",
        "href": "/crystalfall/crafting-sockets-gem-fusion-guide",
        "type": "Guide",
        "description": "Understand alpha and omega affixes, rarity upgrades, brick risk, sockets, Skill Crests, and how gem fusion works in Early Access.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Hozy",
    "game": "Hozy",
    "href": "/guides/hozy/cafe-layout-tips",
    "slug": "guides",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Cozy, crafting, survival & systems",
    "label": "Cozy",
    "description": "Keep the Cafe cozy without clutter.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Cafe Layout Tips",
        "href": "/guides/hozy/cafe-layout-tips",
        "type": "Guide",
        "description": "Keep the Cafe cozy without clutter.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Hardest Levels Ranked",
        "href": "/guides/hozy/hardest-levels-ranked",
        "type": "Guide",
        "description": "Which rooms feel toughest to finish.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Penthouse Layout Guide",
        "href": "/guides/hozy/penthouse-layout-guide",
        "type": "Guide",
        "description": "Balance the large space effectively.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Dreams Explained",
        "href": "/guides/hozy/dreams-explained",
        "type": "Guide",
        "description": "Why the level feels so strange.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "GRIME II",
    "game": "GRIME II",
    "href": "/grime-2/blade-mammoth-boss-guide",
    "slug": "grime-2",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "RPG, action, builds & combat",
    "label": "Rpg",
    "description": "How to beat Blade Mammoth and survive Phase 2.",
    "coverage": [
      "Bosses",
      "Guide",
      "Builds"
    ],
    "pages": [
      {
        "title": "Blade Mammoth Boss Guide",
        "href": "/grime-2/blade-mammoth-boss-guide",
        "type": "Bosses",
        "description": "How to beat Blade Mammoth and survive Phase 2.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Kankan Guide",
        "href": "/grime-2/kankan-guide",
        "type": "Guide",
        "description": "What to do, where to go, and how to get back on track.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Best Early Weapons",
        "href": "/grime-2/best-early-weapons",
        "type": "Builds",
        "description": "Which weapon to use first and why Maul Axe is safest early.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "GRIME II vs GRIME 1",
        "href": "/grime-2/vs-grime-1-differences",
        "type": "Guide",
        "description": "What changed, what improved, and what old fans may miss.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "MOUSE: P.I. For Hire",
    "game": "MOUSE: P.I. For Hire",
    "href": "/mouse-pi-for-hire/collectibles-hub",
    "slug": "mouse-pi-for-hire",
    "kind": "game",
    "status": "archive",
    "accent": "purple",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Completion",
    "description": "The best starting point for a safe 100% run, including missables rules, buy-back logic, Side Job risk, and the main collectible guides.",
    "coverage": [
      "Collectibles",
      "Guide"
    ],
    "pages": [
      {
        "title": "Collectibles & 100% Completion Hub",
        "href": "/mouse-pi-for-hire/collectibles-hub",
        "type": "Collectibles",
        "description": "The best starting point for a safe 100% run, including missables rules, buy-back logic, Side Job risk, and the main collectible guides.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Missables Guide",
        "href": "/mouse-pi-for-hire/missables-guide",
        "type": "Guide",
        "description": "Jack Squat lockout, best manual saves, what can be recovered later, and which missables actually threaten a full-completion route.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Buy-Back Guide",
        "href": "/mouse-pi-for-hire/buy-back-guide",
        "type": "Guide",
        "description": "Which missed collectibles can be bought back later, which ones cannot, and why Side Job reward cards are the biggest exception.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Baseball Card Locations Guide",
        "href": "/mouse-pi-for-hire/baseball-card-locations",
        "type": "Collectibles",
        "description": "How Baseball Cards work, where cards come from, how Prize Tokens and the Prize D-Spenser work, and which card sources are truly risky.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Pragmata",
    "game": "Pragmata",
    "href": "/pragmata/pragmata-best-pc-settings",
    "slug": "pragmata",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Strategy",
    "description": "Best settings for 8GB and 16GB GPUs, ray tracing tradeoffs, and when DLSS or FSR gives the smoothest result.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Best PC Settings",
        "href": "/pragmata/pragmata-best-pc-settings",
        "type": "Guide",
        "description": "Best settings for 8GB and 16GB GPUs, ray tracing tradeoffs, and when DLSS or FSR gives the smoothest result.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Best Early Upgrades",
        "href": "/pragmata/pragmata-best-early-upgrades",
        "type": "Guide",
        "description": "The best first upgrade priorities at the Shelter, and why mobility, hacking, and survivability beat blind damage stacking.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Unknown Signal Guide",
        "href": "/pragmata/pragmata-unknown-signal-guide",
        "type": "Guide",
        "description": "How postgame really works: pod unlock paths, final boss rematch flow, best rewards, and what true cleanup actually requires.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Pure Lunum Guide",
        "href": "/pragmata/pragmata-pure-lunum-guide",
        "type": "Guide",
        "description": "Where Pure Lunum comes from, why it is effectively finite, and which high-end upgrades deserve it first.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "THE OCCULTIST",
    "game": "THE OCCULTIST",
    "href": "/the-occultist",
    "slug": "the-occultist",
    "kind": "game",
    "status": "archive",
    "accent": "emerald",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Completion",
    "description": "Collectibles, Codex pages, and the key puzzle solution routes in one place.",
    "coverage": [
      "Guide Hub",
      "Collectibles",
      "Guide"
    ],
    "pages": [
      {
        "title": "Guide Hub",
        "href": "/the-occultist",
        "type": "Guide Hub",
        "description": "Collectibles, Codex pages, and the key puzzle solution routes in one place.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "All 15 Medallion Locations",
        "href": "/the-occultist/all-medallion-locations",
        "type": "Collectibles",
        "description": "Every Medallion location across the Farm, Hospital, Orphanage, Circus, Cemetery, Manor, and Temple.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "All 7 Altar Locations",
        "href": "/the-occultist/all-altar-locations",
        "type": "Collectibles",
        "description": "Every altar location, including the Lighthouse room, Mausoleum path, and final Redler Manor altar.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Codex Lumina Fragments",
        "href": "/the-occultist/codex-lumina-fragments",
        "type": "Guide",
        "description": "Find all four missing Codex pages in Redler Manor and complete the ritual book route.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Sintopia",
    "game": "Sintopia",
    "href": "/sintopia/best-hell-layout-guide",
    "slug": "sintopia",
    "kind": "game",
    "status": "archive",
    "accent": "rose",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Builds & Combat",
    "description": "How to build the best Hell layout, including Souls Dispatchers, Hearos lanes, fallback loops, Saints, Deviants, and long-run routing control.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Best Hell Layout Guide",
        "href": "/sintopia/best-hell-layout-guide",
        "type": "Guide",
        "description": "How to build the best Hell layout, including Souls Dispatchers, Hearos lanes, fallback loops, Saints, Deviants, and long-run routing control.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "How to Get Hearos",
        "href": "/sintopia/hearos-guide",
        "type": "Guide",
        "description": "Learn the Hearos threshold, best first unlocks, why Souls fail to convert, and how Saints, Deviants, and routing affect Hearos income.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Overworld Guide",
        "href": "/sintopia/overworld-guide",
        "type": "Guide",
        "description": "Best spells, ruler personalities, Power Shrines, Corruption Stones, Demons, Sin Spawns, and how the Overworld changes your Hell economy.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Saints Guide",
        "href": "/sintopia/saints-guide",
        "type": "Guide",
        "description": "How to deal with Saints, break Holy Patience, use Waiting Lines and Waiting Booths, and when Attrition Warfare or Time Dilatator are worth it.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "All Will Fall",
    "game": "All Will Fall",
    "href": "/all-will-fall/oil-rig-guide/",
    "slug": "all-will-fall",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Older archive",
    "label": "Builds & Combat",
    "description": "Best early build order, first raise timing, and the 500% Rain Catcher setup.",
    "coverage": [
      "Guide"
    ],
    "pages": [
      {
        "title": "Oil Rig Guide",
        "href": "/all-will-fall/oil-rig-guide",
        "type": "Guide",
        "description": "Best early build order, first raise timing, and the 500% Rain Catcher setup.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Tanker Truck Guide",
        "href": "/all-will-fall/tanker-truck-guide",
        "type": "Guide",
        "description": "Early build order, fuel math, and how to keep zone progression from stalling out.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Tornado Race Guide",
        "href": "/all-will-fall/tornado-race-guide",
        "type": "Guide",
        "description": "Day 60 timeline, Thruster Engines, Power Grid timing, and evacuation planning.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Collapse Troubleshooting",
        "href": "/all-will-fall/collapse-troubleshooting",
        "type": "Guide",
        "description": "Why buildings fail, what stability problems look like, and how to fix them fast.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "The Long Dark",
    "game": "The Long Dark",
    "href": "/the-long-dark-episode-5",
    "slug": "the-long-dark-episode-5",
    "kind": "game",
    "status": "archive",
    "accent": "blue",
    "archiveCategory": "Story, endings, horror & route locks",
    "label": "Endings & Routes",
    "description": "Walkthroughs, missing people help, ending answers, and hardcase guides.",
    "coverage": [
      "Guide Hub",
      "Walkthrough",
      "Collectibles",
      "Endings"
    ],
    "pages": [
      {
        "title": "Episode 5 Guide Hub",
        "href": "/the-long-dark-episode-5",
        "type": "Guide Hub",
        "description": "Walkthroughs, missing people help, ending answers, and hardcase guides.",
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      },
      {
        "title": "Episode 5 Walkthrough",
        "href": "/the-long-dark-episode-5/episode-5-walkthrough",
        "type": "Walkthrough",
        "description": "Full chapter route from Perseverance Mills to the ending.",
        "archive": {
          "showInCollections": true,
          "order": 2
        }
      },
      {
        "title": "Missing People Locations",
        "href": "/the-long-dark-episode-5/episode-5-missing-people-locations",
        "type": "Collectibles",
        "description": "Basement, waterfall, and Constable routes in one guide.",
        "archive": {
          "showInCollections": true,
          "order": 3
        }
      },
      {
        "title": "Episode 5 Ending Explained",
        "href": "/the-long-dark-episode-5/episode-5-ending-explained",
        "type": "Endings",
        "description": "What the ending means, what Atwood reveals, and how to read the final scenes.",
        "archive": {
          "showInCollections": true,
          "order": 4
        }
      }
    ]
  },
  {
    "title": "Steam Next Fest",
    "game": "Steam Next Fest",
    "href": "/steam-next-fest",
    "slug": "steam-next-fest",
    "kind": "event",
    "status": "active",
    "accent": "cyan",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Demo Guides",
    "eyebrow": "Event Coverage",
    "hubStatus": "Discovery hub",
    "description": "Demo guide hubs for Iron Nest, Dust Front RTS, BOMBANANA, Casualties Unknown, and other early Steam discoveries.",
    "coverage": [
      "Demo picks",
      "First-hour help",
      "Event hubs",
      "Steam discovery"
    ],
    "image": "/images/home/steam-next-fest-hub.webp",
    "imageFit": "contain",
    "imagePosition": "center",
    "home": {
      "featuredHub": true,
      "featuredHubOrder": 6,
      "footerFeatured": true
    },
    "pages": [
      {
        "title": "Steam Next Fest June 2026 Demo Guides",
        "href": "/steam-next-fest",
        "type": "Event Hub",
        "description": "Demo guide hubs for Iron Nest, Dust Front RTS, BOMBANANA, Casualties Unknown, and other early Steam discoveries.",
        "date": "Updated recently",
        "image": "/images/home/steam-next-fest-hub.webp",
        "imageFit": "contain",
        "imagePosition": "center",
        "home": {
          "latest": true,
          "latestOrder": 7,
          "spotlightRail": true,
          "spotlightOrder": 3
        },
        "archive": {
          "showInCollections": true,
          "order": 1
        }
      }
    ]
  }
] satisfies GuideCluster[];
