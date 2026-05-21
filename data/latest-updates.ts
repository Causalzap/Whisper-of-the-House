// data/latest-updates.ts

export type LatestUpdateItem = {
    href: string;
    game: string;
    title: string;
    description: string;
    tagClass: string;
    hoverBorderClass: string;
    hoverTitleClass: string;
    updatedAt?: string;
  };
  
  export const latestUpdates: LatestUpdateItem[] = [
// ===== LEGO Batman: Legacy of the Dark Knight =====
{
  href: "/lego-batman",
  game: "LEGO Batman: Legacy of the Dark Knight",
  title: "Complete Guide & First Route",
  description:
    "Start here for the best first-playthrough route, Batcave systems, Red Bricks, Batgirl, Firefly, Poison Ivy, Bane, and cleanup planning.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},
{
  href: "/lego-batman/red-bricks",
  game: "LEGO Batman: Legacy of the Dark Knight",
  title: "All 23 Red Brick Locations",
  description:
    "Find every Red Brick, including all 14 mission puzzles, 9 Bat-Mite’s Shop bricks, modifier effects, shop refresh tips, and safe code 596.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},
{
  href: "/lego-batman/carmine-falcone",
  game: "LEGO Batman: Legacy of the Dark Knight",
  title: "Carmine Falcone Walkthrough",
  description:
    "Clear the Iceberg Lounge route, find Falcone’s office, solve the food order, reach House of Fun, and open the Filthy Rich Red Brick safe.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},
{
  href: "/lego-batman/batgirl-unlock",
  game: "LEGO Batman: Legacy of the Dark Knight",
  title: "Batgirl Unlock Guide",
  description:
    "Find when Barbara becomes Batgirl, how the Chapter 4 Firefly sequence unlocks her, what her tech does, and why Radio Towers matter.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},

    // ===== Dwarf Eats Mountain =====
{
  href: "/dwarf-eats-mountain",
  game: "Dwarf Eats Mountain",
  title: "Complete Guide Hub",
  description:
    "Find the right guide for build order, runners, Prestige, artifacts, Mithril, best builds, Goblin King, World Spire, and True Ending.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},
{
  href: "/dwarf-eats-mountain/build-order",
  game: "Dwarf Eats Mountain",
  title: "Beginner Build Order",
  description:
    "What to build first, Great Maw setup, Runners, N/A upgrades, building unlocks, first Mithril, Flameworks, Demo Shack, and first Prestige.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},
{
  href: "/dwarf-eats-mountain/runners-guide",
  game: "Dwarf Eats Mountain",
  title: "Runners Guide",
  description:
    "Fix gold not being collected, runner speed, carrying capacity, stunned runners, ore reclaim, Looming Motivation, and Mithril runner upgrades.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},
{
  href: "/dwarf-eats-mountain/prestige-ascension-guide",
  game: "Dwarf Eats Mountain",
  title: "Prestige & Ascension Guide",
  description:
    "When to Prestige, how to spend PP, best early upgrades, Swift Start, T6 stacking, Ascension Rank, and what resets or stays.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},

    {
      href: "/oaken-tower",
      game: "Oaken Tower",
      title: "Complete Guide Hub",
      description:
        "Start here for builds, Poison scaling, 10-win strategy, level vs reroll decisions, 3-star items, perk unlocks, and common run mistakes.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/oaken-tower/poison-build",
      game: "Oaken Tower",
      title: "Best Poison Build Guide",
      description:
        "Learn when to commit to Poison, which items and perks matter, how to use Venom Ring, Toxins, Poison Dagger, and how to handle matchups.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/oaken-tower/10-wins-guide",
      game: "Oaken Tower",
      title: "How to Get 10 Wins",
      description:
        "Fix 6-7 win stalls, protect your hearts, choose one real carry, stop over-rolling, and make safer final-fight decisions for 10 wins.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/oaken-tower/level-vs-reroll",
      game: "Oaken Tower",
      title: "Level vs Reroll Guide",
      description:
        "Know when to level, reroll, freeze, buy power, or save gold with XP cost, income, shop timing, freeze tricks, and 3-star chase decisions.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },

    {
      href: "/subnautica-2",
      game: "Subnautica 2",
      title: "Complete Guide Hub",
      description:
        "Start here for the first route, tools, Welcome Center, Digestion, resources, base setup, Tadpole, co-op, navigation, and Leviathan survival.",
      tagClass: "text-cyan-500",
      hoverBorderClass: "hover:border-cyan-300",
      hoverTitleClass: "group-hover:text-cyan-700",
    },
    {
      href: "/subnautica-2/what-to-do-first",
      game: "Subnautica 2",
      title: "What to Do First Guide",
      description:
        "A safe first two-hour route: craft core tools, reach the Welcome Center, unlock Digestion, find Silver, and prepare your first base.",
      tagClass: "text-cyan-500",
      hoverBorderClass: "hover:border-cyan-300",
      hoverTitleClass: "group-hover:text-cyan-700",
    },
    {
      href: "/subnautica-2/early-resources",
      game: "Subnautica 2",
      title: "Early Resources Guide",
      description:
        "Find early Titanium, Copper, Quartz, Silver, Salt, Rubber, Fibrous Pulp, Acidic Raion Pouches, Strong Acid, and key crafting materials.",
      tagClass: "text-cyan-500",
      hoverBorderClass: "hover:border-cyan-300",
      hoverTitleClass: "group-hover:text-cyan-700",
    },
    {
      href: "/subnautica-2/first-base-setup",
      game: "Subnautica 2",
      title: "First Base Setup Guide",
      description:
        "Learn when to leave the Lifepod, where to build your first base, how to set up storage, power, Habitat Beacon, and Moonpool space.",
      tagClass: "text-cyan-500",
      hoverBorderClass: "hover:border-cyan-300",
      hoverTitleClass: "group-hover:text-cyan-700",
    },

    {
      href: "/the-spell-brigade",
      game: "The Spell Brigade",
      title: "Complete Guide Hub",
      description:
        "Start here for builds, spells, elements, gold farming, solo play, wizard unlocks, achievements, Trial Covenants, Masteries, and Ascension.",
      tagClass: "text-violet-500",
      hoverBorderClass: "hover:border-violet-300",
      hoverTitleClass: "group-hover:text-violet-700",
    },
    {
      href: "/the-spell-brigade/best-builds",
      game: "The Spell Brigade",
      title: "Best Builds Guide",
      description:
        "Best builds for 1.0, including Falling Stars Lightning, Solar Pulse Aura, Acid Multi-Hit, Scepter Mesh, Dodge Crit Heal, and co-op routes.",
      tagClass: "text-violet-500",
      hoverBorderClass: "hover:border-violet-300",
      hoverTitleClass: "group-hover:text-violet-700",
    },
    {
      href: "/the-spell-brigade/best-spells-elements",
      game: "The Spell Brigade",
      title: "Best Spells & Elements Guide",
      description:
        "Spell rankings, base elements, advanced infusions, Plasma, Acid, Wildfire, Flux, Corrosion, Thunder, and wizard-specific element choices.",
      tagClass: "text-violet-500",
      hoverBorderClass: "hover:border-violet-300",
      hoverTitleClass: "group-hover:text-violet-700",
    },
    {
      href: "/the-spell-brigade/wizard-unlocks",
      game: "The Spell Brigade",
      title: "Wizard Unlocks Guide",
      description:
        "All 15 wizards, signature spells, passive traits, unlock planning, best wizard by role, Knelly, Pipwick, Wizard King, ranks, and ascension context.",
      tagClass: "text-violet-500",
      hoverBorderClass: "hover:border-violet-300",
      hoverTitleClass: "group-hover:text-violet-700",
    },

    // ===== Everything Is Crab =====
{
  href: "/everything-is-crab",
  game: "Everything Is Crab",
  title: "Complete Beginner Guide",
  description:
    "Core mechanics, first-clear route, Cheek Pouch, Trunk scaling, Carcinisation, biomes, genetics, bosses, and what to do after your first clear.",
  tagClass: "text-orange-500",
  hoverBorderClass: "hover:border-orange-300",
  hoverTitleClass: "group-hover:text-orange-700",
},
{
  href: "/everything-is-crab/best-builds",
  game: "Everything Is Crab",
  title: "Best Builds Guide",
  description:
    "Best first-clear builds, Trunk Hybrid, Body Slam Tank, Big Physical, Spines Reflect, Social Pack, evolution timing, and pivot rules.",
  tagClass: "text-orange-500",
  hoverBorderClass: "hover:border-orange-300",
  hoverTitleClass: "group-hover:text-orange-700",
},
{
  href: "/everything-is-crab/boss-guide",
  game: "Everything Is Crab",
  title: "Boss Guide",
  description:
    "How to beat Crabaroo, Aquaconda, Clawdia, Shellephant, Crabtaur, Crab Kin, Cataclysm, Final Challenge, and boss-ready builds.",
  tagClass: "text-orange-500",
  hoverBorderClass: "hover:border-orange-300",
  hoverTitleClass: "group-hover:text-orange-700",
},
{
  href: "/everything-is-crab/progression-guide",
  game: "Everything Is Crab",
  title: "Progression Guide",
  description:
    "Pressure levels, genetics, Codex checks, unlock tracking, Endless Mode preparation, milestone order, and what to test after each run.",
  tagClass: "text-orange-500",
  hoverBorderClass: "hover:border-orange-300",
  hoverTitleClass: "group-hover:text-orange-700",
},

{
  href: "/outbound",
  game: "Outbound",
  title: "Complete Beginner Guide Hub",
  description:
    "Start here for the best starting van, first steps, Signal Towers, blueprints, storage, energy, resources, Mossrocks, dogs, co-op, and early progression.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/outbound/leave-first-biome",
  game: "Outbound",
  title: "First Biome Progression Guide",
  description:
    "How to leave the first biome, including broken bridges, Everwood Planks, the drawbridge switch, Motor I, Pickaxe II, Mossrocks, and Paws & Whiskers Lodge.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/outbound/energy-guide",
  game: "Outbound",
  title: "Energy & Battery Guide",
  description:
    "Fix battery drain with Power Unit fuel, charging stations, solar, wind, rainwater, van weight, vehicle upgrades, co-op power tips, and out-of-power recovery.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/outbound/early-resources",
  game: "Outbound",
  title: "Early Resource Guide",
  description:
    "Find Scrap Metal, Everwood, Fiber, Litter, Coarse Ore, Silverbark, Redwood, Clay, Sawmill numbers, bridge materials, respawns, and farming routes.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},


// ===== Directive 8020 =====
{
  href: "/directive-8020",
  game: "Directive 8020",
  title: "Save Everyone Guide",
  description:
    "Best first-run route, key choices, Ep2 power routing, Ice and Fire, Two Eisele, Explorer vs Survivor, and what to clean up after Everyone Lives.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/directive-8020/choices-consequences",
  game: "Directive 8020",
  title: "Choices and Consequences Guide",
  description:
    "Major choices, delayed consequences, Ep2 Fire Control vs Landing Computer, Ice and Fire, Destinies, Survivor Mode, and final message branches.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/directive-8020/all-monster-scenes-alien-duplicates",
  game: "Directive 8020",
  title: "Mimic and Alien Duplicates Guide",
  description:
    "Which Eisele is fake, when to Test instead of Shoot, scanner verification, Eisele Double, Save Your Souls, intruder states, and contaminated endings.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/directive-8020/all-endings",
  game: "Directive 8020",
  title: "All Endings Guide",
  description:
    "Every ending variant, Everyone Lives, Beacon, Docked, Not Alone, Hitchhiker, Homeward Bound, Game Over, Everyone Dies, Destinies, and Cycle 13.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
      // ===== Road to Vostok =====
  {
    href: "/road-to-vostok/area-05-guide",
    game: "Road to Vostok",
    title: "Area 05 Guide",
    description:
      "Best first-run route, early loot order, Generalist timing, Village reset logic, and when School or Highway are actually worth pushing.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  {
    href: "/road-to-vostok/generalist-and-doctor-locations",
    game: "Road to Vostok",
    title: "Generalist and Doctor Locations",
    description:
      "Exact trader routes, unlock timing, who to visit first, and why their shelter and task paths matter more than random trades.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  {
    href: "/road-to-vostok/permadeath-save-and-stash-guide",
    game: "Road to Vostok",
    title: "Permadeath, Save, and Stash Guide",
    description:
      "How saving really works, what you lose on death, when Shelter stash is safe, and why stable loops beat greedy clears.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  {
    href: "/road-to-vostok/all-shelter-locations",
    game: "Road to Vostok",
    title: "All Shelter Locations",
    description:
      "Every current shelter, how to unlock each one, the best order, and which shelters are actually worth rushing.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },

  // ===== Shapez 2 =====
{
  href: "/shapez-2/manufacture-mode-guide",
  game: "Shapez 2",
  title: "Manufacture Mode Guide",
  description:
    "Dimensional Waste, Polishing Stations, Trade Stations, Donation and Research Stations, alternate recipes, and the Grand Vortex Assembler route.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/shapez-2/trade-station-guide",
  game: "Shapez 2",
  title: "Trade Station Guide",
  description:
    "How Trade Stations work in 1.0, including refined shapes, alternate recipes, Donation and Research Stations, rocket issues, and common bottlenecks.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/shapez-2/wires-belt-filter-guide",
  game: "Shapez 2",
  title: "Wires and Belt Filter Guide",
  description:
    "Belt Filter signal behavior, Displays, Belt Reader null output, logic gate traps, shape signals, and why your filter is not working.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/shapez-2/mam-guide",
  game: "Shapez 2",
  title: "MAM Guide",
  description:
    "Build your first 1.0 Make Anything Machine with Global Receivers, simulated buildings, NE orientation, Belt Filters, pins, crystals, and multiple MAMs.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},

// ===== Moomintroll Winter's Warmth =====
{
  href: "/moomintroll",
  game: "Moomintroll Winter's Warmth",
  title: "Complete Walkthrough & Guide",
  description:
    "Start here for the full winter route, including tools, vase pieces, side quests, the Great Winter Bonfire, achievements, and ending cleanup.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/moomintroll/vase-piece-locations",
  game: "Moomintroll Winter's Warmth",
  title: "All 25 Vase Piece Locations",
  description:
    "Every Moominmamma vase piece location, including tool requirements, quest rewards, bird drops, cave pieces, and final cleanup checks.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/moomintroll/tool-upgrades",
  game: "Moomintroll Winter's Warmth",
  title: "All Tool Upgrades Guide",
  description:
    "How to get and upgrade every tool, including the shovel, reinforced mittens, axe, lamp oil, whetstone, sharp axe, and upgraded shovel.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/moomintroll/great-winter-bonfire",
  game: "Moomintroll Winter's Warmth",
  title: "Great Winter Bonfire Guide",
  description:
    "How to prepare the Great Winter Bonfire, collect 125 firewood, invite five guests, find the musician, help winter beings, and fix blockers.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},

// ===== Gamble With Your Friends =====
{
  href: "/gamble-with-your-friends",
  game: "Gamble With Your Friends",
  title: "Complete Guide: Beginner Tips, Items, Best Games, and Achievements",
  description:
    "Start here for Gamble With Your Friends guides, including beginner routes, tickets, items, body parts, best games, item combos, Street Craps, and achievements.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},
{
  href: "/gamble-with-your-friends/beginner-guide",
  game: "Gamble With Your Friends",
  title: "Beginner Guide: Shared Bank, Quota, Floors, and First Run Tips",
  description:
    "Learn how to survive your first Gamble With Your Friends runs, including shared-bank mistakes, quota priorities, Floor 1 routes, safe games, and when to stop betting.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},
{
  href: "/gamble-with-your-friends/tickets-items-body-parts",
  game: "Gamble With Your Friends",
  title: "Items Guide: Tickets, Body Parts, Prices, and Best Purchases",
  description:
    "Understand tickets, item prices, pickup flow, body-part value, Golden Chip, Holy Statue, Taser, Quota Gun, Insurance, Drink, and other key items.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},
{
  href: "/gamble-with-your-friends/best-games",
  game: "Gamble With Your Friends",
  title: "Best Games Guide: Roulette, Blackjack, Craps, Duck Race, and Later Floors",
  description:
    "Find the best games to play in Gamble With Your Friends, including safe Floor 1 picks, high-risk later-floor games, item-supported tables, and blind max-bet traps.",
  tagClass: "text-yellow-500",
  hoverBorderClass: "hover:border-yellow-300",
  hoverTitleClass: "group-hover:text-yellow-700",
},


// ===== Magical Princess =====
{
  href: "/magical-princess/endings-guide",
  game: "Magical Princess",
  title: "Endings Guide: Career, Partner, Secret, True, and Golden Routes",
  description:
    "Start here for Magical Princess endings, including 50+ career, partner, and secret routes, Two Queens, Heir of the Stargazer, Golden Ending, and route order.",
  tagClass: "text-pink-500",
  hoverBorderClass: "hover:border-pink-300",
  hoverTitleClass: "group-hover:text-pink-700",
},
{
  href: "/magical-princess/forbidden-research-guide",
  game: "Magical Princess",
  title: "Forbidden Research Guide: Unlock the Hidden Library Route",
  description:
    "Learn how to unlock Forbidden Research, why Decipher Literature does not work, how Cornet's necklace changes the Library in NG+, and what to do after Level 5.",
  tagClass: "text-pink-500",
  hoverBorderClass: "hover:border-pink-300",
  hoverTitleClass: "group-hover:text-pink-700",
},
{
  href: "/magical-princess/true-ending-heir-of-the-stargazer",
  game: "Magical Princess",
  title: "True Ending Guide: How to Get Heir of the Stargazer",
  description:
    "Follow the full true ending route through Two Queens, Cornelia, the Inheritance Fragment, Forbidden Research, Anna's cue, and Infinite Mirror Labyrinth.",
  tagClass: "text-pink-500",
  hoverBorderClass: "hover:border-pink-300",
  hoverTitleClass: "group-hover:text-pink-700",
},
{
  href: "/magical-princess/golden-ending-guide",
  game: "Magical Princess",
  title: "Golden Ending Guide: Cornet's Necklace, NG+, and Labyrinth Route",
  description:
    "Get the Golden Ending by defeating Blackburn, receiving Cornet's necklace, unlocking Forbidden Research, entering the Labyrinth route, and avoiding normal ending lockouts.",
  tagClass: "text-pink-500",
  hoverBorderClass: "hover:border-pink-300",
  hoverTitleClass: "group-hover:text-pink-700",
},

// ===== Heroes Olden Era =====
{
  href: "/olden-era",
  game: "Heroes of Might and Magic: Olden Era",
  title: "Complete Guide: Subclasses, Factions, Economy, and Early Game Tips",
  description:
    "Start here for Heroes of Might and Magic: Olden Era guides, including subclasses, Necropolis, early economy, Focus Points, Law Points, and beginner routes.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/olden-era/subclass-guide",
  game: "Heroes of Might and Magic: Olden Era",
  title: "Subclass Guide: How to Unlock Advanced Classes",
  description:
    "Learn how subclasses and Advanced Classes work, including skill requirements, unlock mistakes, route planning, and when to force or abandon a subclass.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/olden-era/necropolis-guide",
  game: "Heroes of Might and Magic: Olden Era",
  title: "Necropolis Guide: Heroes, Skeleton Archers, Necromancy, and Build Order",
  description:
    "Play Necropolis with a stronger Week 1 plan, including best heroes, Skeleton Archer timing, Necromancy scaling, Focus usage, and safe early build order.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/olden-era/focus-points",
  game: "Heroes of Might and Magic: Olden Era",
  title: "Focus Points Explained: Focus Charges, Costs, and Combat Timing",
  description:
    "Understand Focus Points, Focus Charges, the 3 Charge cap, ability costs, generation rules, turn order, Necropolis Focus, and Schism Focus.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},

// ===== Farever =====
{
  href: "/farever",
  game: "Farever",
  title: "Farever Guide Hub",
  description:
    "Start here for Farever early access guides: beginner route, Codeex leveling, weapon skills, classes, mounts, and the first Mine Estrone dungeon.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/farever/beginner-guide",
  game: "Farever",
  title: "Beginner Guide: What to Do First",
  description:
    "Learn the best first-hour route in Farever: claim your free mount, follow map objectives, use Codeex, upgrade weapon skills, manage inventory, and prepare for your first dungeon.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/farever/codeex-leveling-guide",
  game: "Farever",
  title: "Codeex & Leveling Guide",
  description:
    "Use Codeex monster entries, 4-kill and 8-kill milestones, map completion, obelisks, mini bosses, and party credit to level efficiently in early Farever.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/farever/first-dungeon-guide",
  game: "Farever",
  title: "First Dungeon Guide: Mine Estrone & Reblochonk",
  description:
    "Clear Farever's early Mine Estrone dungeon route: choose Basic difficulty, track Secret Orbs, clear special foes, beat Reblochonk, and avoid confusing it with Crabgantua.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},

// ===== Far Far West =====
{
  href: "/far-far-west/secret-missions",
  game: "Far Far West",
  title: "All Secret Missions & Secret Jokers Guide",
  description:
    "Start here for every Far Far West secret mission: Ghost Bells, Canyon Medallions, Cactus Day, Woodlands Mushrooms, Area 41 symbols, and Snowman Parts.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},
{
  href: "/far-far-west/canyon-secret-medallion-locations",
  game: "Far Far West",
  title: "Canyon Secret Medallion Locations",
  description:
    "Find all 4 Canyon medallions, complete the Hawkeye targets, open the secret cave, and unlock Pigpick / Pick Pick plus the Elder Pickaxe reward.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},
{
  href: "/far-far-west/ghost-bell-shard-locations",
  game: "Far Far West",
  title: "Ghost Bell Shard Locations & Bellshot Guide",
  description:
    "Find all 3 Ghost Bell Shards, complete each bell order mini-game, return to the Great Bell, and unlock the Bellshot weapon Joker.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},
{
  href: "/far-far-west/area-41-symbol-order",
  game: "Far Far West",
  title: "Area 41 Symbol Order Guide",
  description:
    "Solve the Area 41 alien symbol puzzle, rotate the four pillars in the correct order, press the button, and unlock Anti-Gravity Falls.",
  tagClass: "text-amber-500",
  hoverBorderClass: "hover:border-amber-300",
  hoverTitleClass: "group-hover:text-amber-700",
},

// ===== Librarian: Tidy Up the Arcane Library! =====
{
  href: "/librarian",
  game: "Librarian: Tidy Up the Arcane Library!",
  title: "Complete Guide: Keys, Abilities, Sorting, Achievements, and Fixes",
  description:
    "Start here for Librarian guides, including all key locations, chest unlocks, best abilities, blue shelf indicators, book sorting, achievements, and common missing-book fixes.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/librarian/key-locations",
  game: "Librarian: Tidy Up the Arcane Library!",
  title: "All Key Locations: Crimson, Golden, Azure, and Emerald Keys",
  description:
    "Find every hidden key and chest reward, including the Crimson Octagon Key, Golden Diamond Key, Azure Star Key, Emerald Club Key, Jump, Sprint, and Carry Capacity upgrades.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/librarian/best-abilities",
  game: "Librarian: Tidy Up the Arcane Library!",
  title: "Best Abilities Guide: Assemble, Insight, Sorting, and Auto-Shelving",
  description:
    "Learn the best ability upgrade order, why Assemble is the strongest skill, when Sorting becomes worth it, how Auto-Shelving fits in, and what to avoid for Anti-Magic Master.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/librarian/book-sorting",
  game: "Librarian: Tidy Up the Arcane Library!",
  title: "Book Sorting Guide: Sections, Color Clues, and Blue Shelf Indicators",
  description:
    "Learn how book sorting works with section maps, title clues, color traps, volume order, small shelves, blue shelf indicators, and missing-book troubleshooting.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},

// ===== Fracture Field =====
{
  href: "/fracture-field",
  game: "Fracture Field",
  title: "Complete Walkthrough & Guide",
  description:
    "Start here for the full route: early upgrades, World Fracture, Drone Hub automation, Reality Shatter, layer walls, known fixes, and 100% cleanup.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/fracture-field/prestige-guide",
  game: "Fracture Field",
  title: "Prestige Guide",
  description:
    "World Fracture timing, Reality Shatter rules, what you lose or keep in v1.1.0, Core Fragment benchmarks, and best prestige upgrades.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/fracture-field/progression-guide",
  game: "Fracture Field",
  title: "Progression Guide",
  description:
    "All rock layers from Stone to Chronite, Iron wall fixes, Pierce vs Hardness, Drone Hub setup, Gold, Obsidian, and late-game routing.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/fracture-field/achievements-guide",
  game: "Fracture Field",
  title: "Achievements & 100% Guide",
  description:
    "100% completion roadmap, known achievement names, Golden Touch warning, bomb and drone setups, prestige milestones, and hardest achievements.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},

  // ===== Airborne Empire =====
{
  href: "/airborne-empire/kingsfell-guide/",
  game: "Airborne Empire",
  title: "Kingsfell Guide",
  description:
    "When to enter the final biome, how to prepare your city, Jet Engine timing, and the safest way to approach the endgame push.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/airborne-empire/pirate-queen-guide/",
  game: "Airborne Empire",
  title: "Pirate Queen Guide",
  description:
    "How to beat the final boss with the safest city setup, better anti-air control, cleaner approach timing, and smarter flank rotation.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/airborne-empire/tilt-lift-balance-guide/",
  game: "Airborne Empire",
  title: "Tilt, Lift, and Balance Guide",
  description:
    "Fix unstable layouts, solve the not enough lift to support weight warning, improve propulsion, and know when to rebuild instead of patching.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/airborne-empire/jet-engine-guide/",
  game: "Airborne Empire",
  title: "Jet Engine Guide",
  description:
    "When Jet Engine becomes relevant, how to rebuild your city around it, and why it matters so much in Kingsfell and the Pirate Queen fight.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},


// ===== holoVillage: Our Cozy Days =====
{
  href: "/holovillage-our-cozy-days",
  game: "holoVillage: Our Cozy Days",
  title: "Guide Hub",
  description:
    "Start here for the main holoVillage early-game guide cluster, including beginner tips, fishing, villagers, shop money systems, and early combat progression.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/holovillage-our-cozy-days/fishing-guide",
  game: "holoVillage: Our Cozy Days",
  title: "Fishing Guide",
  description:
    "Where to fish, why some water cannot be fished, how bait works, how to catch carp and koi, and what Fisher Rank unlocks in the early game.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/holovillage-our-cozy-days/how-to-invite-villagers",
  game: "holoVillage: Our Cozy Days",
  title: "How to Invite Villagers",
  description:
    "How villager houses, visitors, exchange points, invite points, next-day move-ins, villager jobs, and the workbox system work.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},
{
  href: "/holovillage-our-cozy-days/shop-money-guide",
  game: "holoVillage: Our Cozy Days",
  title: "Shop and Money Guide",
  description:
    "How to make money through Restaurant and Smitty systems, store setup, sales clerks, bonus profit, cooking, equipment sales, and what to sell early.",
  tagClass: "text-emerald-500",
  hoverBorderClass: "hover:border-emerald-300",
  hoverTitleClass: "group-hover:text-emerald-700",
},

// ===== Vampire Crawlers =====
{
  href: "/vampire-crawlers",
  game: "Vampire Crawlers",
  title: "Guide Hub",
  description:
    "Start here for the main Vampire Crawlers guide cluster, including early upgrades, combo sequencing, weapon evolutions, beginner characters, and hidden unlocks.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/vampire-crawlers/best-early-upgrades",
  game: "Vampire Crawlers",
  title: "Best Early Upgrades",
  description:
    "What to buy first in the Power-Up shop, including Reroll, Recovery, Might, Cooldown, Greed, Arcana reminders, Bing machines, and Blacksmith traps.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/vampire-crawlers/combo-guide",
  game: "Vampire Crawlers",
  title: "Combo Guide",
  description:
    "How 0-1-2 mana order works, when skipped numbers still count, how Wildcards and combo Gems change sequencing, and when to avoid Play All.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},
{
  href: "/vampire-crawlers/early-evolutions",
  game: "Vampire Crawlers",
  title: "Early Evolutions Guide",
  description:
    "Best early weapon evolutions, full recipe planning, Grim Grimoire tracking, what gets consumed after evolving, and when to delay chests or red-orb triggers.",
  tagClass: "text-violet-500",
  hoverBorderClass: "hover:border-violet-300",
  hoverTitleClass: "group-hover:text-violet-700",
},

    // ===== Sol Cesto =====
    {
      href: "/sol-cesto/all-characters-unlock-guide",
      game: "Sol Cesto",
      title: "All Characters Unlock Guide",
      description:
        "Full roster overview, normal progression unlocks, and the hidden Lizard route.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/sol-cesto/how-to-unlock-lizard",
      game: "Sol Cesto",
      title: "How to Unlock Lizard",
      description:
        "Egg location, Biome 3 hatch condition, and why the Candle is not required.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/sol-cesto/flute-guide",
      game: "Sol Cesto",
      title: "Flute Guide",
      description:
        "Flute Fragments, melody inputs, effects, and fountain bird repair explained.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/sol-cesto/how-to-unlock-huntress",
      game: "Sol Cesto",
      title: "How to Unlock Huntress",
      description:
        "The fastest Huntress unlock answer, what counts as a clear, and common confusion.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
  
    // ===== Retro Rewind =====
    {
      href: "/retro-rewind/custom-videos",
      game: "Retro Rewind",
      title: "Custom Videos Guide",
      description:
        "How custom videos work and how to use them effectively.",
      tagClass: "text-purple-500",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/retro-rewind/community",
      game: "Retro Rewind",
      title: "Community Insights",
      description:
        "Tips and strategies from the community.",
      tagClass: "text-purple-500",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/retro-rewind/is-the-black-market-worth-it",
      game: "Retro Rewind",
      title: "Black Market Worth It?",
      description:
        "Risks, rewards, and when to use it.",
      tagClass: "text-purple-500",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/retro-rewind/when-to-replace-damaged-tape",
      game: "Retro Rewind",
      title: "Replace Damaged Tape",
      description:
        "When replacing improves progress.",
      tagClass: "text-purple-500",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
  
    // ===== Soulmask =====
    {
      href: "/soulmask",
      game: "Soulmask",
      title: "Shifting Sands Guide Hub",
      description:
        "Your starting point for Shifting Sands guides, including beginner tips, airships, cross-map transfer, and tribesmen management.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/soulmask/tribesmen-role-system-guide",
      game: "Soulmask",
      title: "Tribesmen Role System Guide",
      description:
        "Learn how assignments, roles, and Training Ground work, and how to manage tribesmen more efficiently in 1.0.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/soulmask/airship-guide",
      game: "Soulmask",
      title: "Airship Guide",
      description:
        "Understand how airships work in Shifting Sands, including ship building, modules, combat use, and mobile base potential.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/soulmask/shifting-sands-beginner-guide",
      game: "Soulmask",
      title: "Shifting Sands Beginner Guide",
      description:
        "A practical first-steps guide for new and returning players, covering what to do in your first hours on the new map.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
  
    // ===== Crystalfall =====
    {
      href: "/crystalfall",
      game: "Crystalfall",
      title: "Crystalfall Guide Hub",
      description:
        "Your starting point for Crystalfall guides, including beginner tips, Fireball builds, crafting systems, and inventory management.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/crystalfall/beginner-guide",
      game: "Crystalfall",
      title: "Crystalfall Beginner Guide",
      description:
        "A practical first-steps guide covering the best starting class, Fireball opener, Aether priorities, and what to do in your first hours.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/crystalfall/fireball-build-guide",
      game: "Crystalfall",
      title: "Best Fireball Build for Beginners",
      description:
        "Learn the cleanest Technomancer Fireball setup, including early passive pathing, Rod compatibility, Aether sustain, and top upgrade priorities.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
    {
      href: "/crystalfall/crafting-sockets-gem-fusion-guide",
      game: "Crystalfall",
      title: "Crafting, Sockets, and Gem Fusion Guide",
      description:
        "Understand alpha and omega affixes, rarity upgrades, brick risk, sockets, Skill Crests, and how gem fusion works in Early Access.",
      tagClass: "text-amber-600",
      hoverBorderClass: "hover:border-purple-300",
      hoverTitleClass: "group-hover:text-purple-700",
    },
  
    // ===== Hozy =====
    {
      href: "/guides/hozy/cafe-layout-tips",
      game: "Hozy",
      title: "Cafe Layout Tips",
      description:
        "Keep the Cafe cozy without clutter.",
      tagClass: "text-indigo-500",
      hoverBorderClass: "hover:border-indigo-300",
      hoverTitleClass: "group-hover:text-indigo-700",
    },
    {
      href: "/guides/hozy/hardest-levels-ranked",
      game: "Hozy",
      title: "Hardest Levels Ranked",
      description:
        "Which rooms feel toughest to finish.",
      tagClass: "text-indigo-500",
      hoverBorderClass: "hover:border-indigo-300",
      hoverTitleClass: "group-hover:text-indigo-700",
    },
    {
      href: "/guides/hozy/penthouse-layout-guide",
      game: "Hozy",
      title: "Penthouse Layout Guide",
      description:
        "Balance the large space effectively.",
      tagClass: "text-indigo-500",
      hoverBorderClass: "hover:border-indigo-300",
      hoverTitleClass: "group-hover:text-indigo-700",
    },
    {
      href: "/guides/hozy/dreams-explained",
      game: "Hozy",
      title: "Dreams Explained",
      description:
        "Why the level feels so strange.",
      tagClass: "text-indigo-500",
      hoverBorderClass: "hover:border-indigo-300",
      hoverTitleClass: "group-hover:text-indigo-700",
    },
  
    // ===== GRIME II =====
    {
      href: "/grime-2/blade-mammoth-boss-guide",
      game: "GRIME II",
      title: "Blade Mammoth Boss Guide",
      description:
        "How to beat Blade Mammoth and survive Phase 2.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/grime-2/kankan-guide",
      game: "GRIME II",
      title: "Kankan Guide",
      description:
        "What to do, where to go, and how to get back on track.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/grime-2/best-early-weapons",
      game: "GRIME II",
      title: "Best Early Weapons",
      description:
        "Which weapon to use first and why Maul Axe is safest early.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/grime-2/vs-grime-1-differences",
      game: "GRIME II",
      title: "GRIME II vs GRIME 1",
      description:
        "What changed, what improved, and what old fans may miss.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },

    // ===== MOUSE: P.I. For Hire =====
{
  href: "/mouse-pi-for-hire/collectibles-hub",
  game: "MOUSE: P.I. For Hire",
  title: "Collectibles & 100% Completion Hub",
  description:
    "The best starting point for a safe 100% run, including missables rules, buy-back logic, Side Job risk, and the main collectible guides.",
  tagClass: "text-neutral-500",
  hoverBorderClass: "hover:border-neutral-300",
  hoverTitleClass: "group-hover:text-neutral-700",
},
{
  href: "/mouse-pi-for-hire/missables-guide",
  game: "MOUSE: P.I. For Hire",
  title: "Missables Guide",
  description:
    "Jack Squat lockout, best manual saves, what can be recovered later, and which missables actually threaten a full-completion route.",
  tagClass: "text-neutral-500",
  hoverBorderClass: "hover:border-neutral-300",
  hoverTitleClass: "group-hover:text-neutral-700",
},
{
  href: "/mouse-pi-for-hire/buy-back-guide",
  game: "MOUSE: P.I. For Hire",
  title: "Buy-Back Guide",
  description:
    "Which missed collectibles can be bought back later, which ones cannot, and why Side Job reward cards are the biggest exception.",
  tagClass: "text-neutral-500",
  hoverBorderClass: "hover:border-neutral-300",
  hoverTitleClass: "group-hover:text-neutral-700",
},
{
  href: "/mouse-pi-for-hire/baseball-card-locations",
  game: "MOUSE: P.I. For Hire",
  title: "Baseball Card Locations Guide",
  description:
    "How Baseball Cards work, where cards come from, how Prize Tokens and the Prize D-Spenser work, and which card sources are truly risky.",
  tagClass: "text-neutral-500",
  hoverBorderClass: "hover:border-neutral-300",
  hoverTitleClass: "group-hover:text-neutral-700",
},  

// ===== Pragmata =====
{
  href: "/pragmata/pragmata-best-pc-settings",
  game: "Pragmata",
  title: "Best PC Settings",
  description:
    "Best settings for 8GB and 16GB GPUs, ray tracing tradeoffs, and when DLSS or FSR gives the smoothest result.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/pragmata/pragmata-best-early-upgrades",
  game: "Pragmata",
  title: "Best Early Upgrades",
  description:
    "The best first upgrade priorities at the Shelter, and why mobility, hacking, and survivability beat blind damage stacking.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/pragmata/pragmata-unknown-signal-guide",
  game: "Pragmata",
  title: "Unknown Signal Guide",
  description:
    "How postgame really works: pod unlock paths, final boss rematch flow, best rewards, and what true cleanup actually requires.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
{
  href: "/pragmata/pragmata-pure-lunum-guide",
  game: "Pragmata",
  title: "Pure Lunum Guide",
  description:
    "Where Pure Lunum comes from, why it is effectively finite, and which high-end upgrades deserve it first.",
  tagClass: "text-sky-500",
  hoverBorderClass: "hover:border-sky-300",
  hoverTitleClass: "group-hover:text-sky-700",
},
  
    // ===== THE OCCULTIST =====
    {
      href: "/the-occultist",
      game: "THE OCCULTIST",
      title: "Guide Hub",
      description:
        "Collectibles, Codex pages, and the key puzzle solution routes in one place.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/the-occultist/all-medallion-locations",
      game: "THE OCCULTIST",
      title: "All 15 Medallion Locations",
      description:
        "Every Medallion location across the Farm, Hospital, Orphanage, Circus, Cemetery, Manor, and Temple.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/the-occultist/all-altar-locations",
      game: "THE OCCULTIST",
      title: "All 7 Altar Locations",
      description:
        "Every altar location, including the Lighthouse room, Mausoleum path, and final Redler Manor altar.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/the-occultist/codex-lumina-fragments",
      game: "THE OCCULTIST",
      title: "Codex Lumina Fragments",
      description:
        "Find all four missing Codex pages in Redler Manor and complete the ritual book route.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    
    // ===== Sintopia =====
{
  href: "/sintopia/best-hell-layout-guide",
  game: "Sintopia",
  title: "Best Hell Layout Guide",
  description:
    "How to build the best Hell layout, including Souls Dispatchers, Hearos lanes, fallback loops, Saints, Deviants, and long-run routing control.",
  tagClass: "text-rose-500",
  hoverBorderClass: "hover:border-rose-300",
  hoverTitleClass: "group-hover:text-rose-700",
},
{
  href: "/sintopia/hearos-guide",
  game: "Sintopia",
  title: "How to Get Hearos",
  description:
    "Learn the Hearos threshold, best first unlocks, why Souls fail to convert, and how Saints, Deviants, and routing affect Hearos income.",
  tagClass: "text-rose-500",
  hoverBorderClass: "hover:border-rose-300",
  hoverTitleClass: "group-hover:text-rose-700",
},
{
  href: "/sintopia/overworld-guide",
  game: "Sintopia",
  title: "Overworld Guide",
  description:
    "Best spells, ruler personalities, Power Shrines, Corruption Stones, Demons, Sin Spawns, and how the Overworld changes your Hell economy.",
  tagClass: "text-rose-500",
  hoverBorderClass: "hover:border-rose-300",
  hoverTitleClass: "group-hover:text-rose-700",
},
{
  href: "/sintopia/saints-guide",
  game: "Sintopia",
  title: "Saints Guide",
  description:
    "How to deal with Saints, break Holy Patience, use Waiting Lines and Waiting Booths, and when Attrition Warfare or Time Dilatator are worth it.",
  tagClass: "text-rose-500",
  hoverBorderClass: "hover:border-rose-300",
  hoverTitleClass: "group-hover:text-rose-700",
},
    // ===== All Will Fall =====
    {
      href: "/all-will-fall/oil-rig-guide/",
      game: "All Will Fall",
      title: "Oil Rig Guide",
      description:
        "Best early build order, first raise timing, and the 500% Rain Catcher setup.",
      tagClass: "text-orange-500",
      hoverBorderClass: "hover:border-orange-300",
      hoverTitleClass: "group-hover:text-orange-700",
    },
    {
      href: "/all-will-fall/tanker-truck-guide/",
      game: "All Will Fall",
      title: "Tanker Truck Guide",
      description:
        "Early build order, fuel math, and how to keep zone progression from stalling out.",
      tagClass: "text-orange-500",
      hoverBorderClass: "hover:border-orange-300",
      hoverTitleClass: "group-hover:text-orange-700",
    },
    {
      href: "/all-will-fall/tornado-race-guide/",
      game: "All Will Fall",
      title: "Tornado Race Guide",
      description:
        "Day 60 timeline, Thruster Engines, Power Grid timing, and evacuation planning.",
      tagClass: "text-orange-500",
      hoverBorderClass: "hover:border-orange-300",
      hoverTitleClass: "group-hover:text-orange-700",
    },
    {
      href: "/all-will-fall/collapse-troubleshooting/",
      game: "All Will Fall",
      title: "Collapse Troubleshooting",
      description:
        "Why buildings fail, what stability problems look like, and how to fix them fast.",
      tagClass: "text-orange-500",
      hoverBorderClass: "hover:border-orange-300",
      hoverTitleClass: "group-hover:text-orange-700",
    },
  
    // ===== The Long Dark Episode 5 =====
    {
      href: "/the-long-dark-episode-5",
      game: "The Long Dark",
      title: "Episode 5 Guide Hub",
      description:
        "Walkthroughs, missing people help, ending answers, and hardcase guides.",
      tagClass: "text-sky-500",
      hoverBorderClass: "hover:border-sky-300",
      hoverTitleClass: "group-hover:text-sky-700",
    },
    {
      href: "/the-long-dark-episode-5/episode-5-walkthrough",
      game: "The Long Dark",
      title: "Episode 5 Walkthrough",
      description:
        "Full chapter route from Perseverance Mills to the ending.",
      tagClass: "text-sky-500",
      hoverBorderClass: "hover:border-sky-300",
      hoverTitleClass: "group-hover:text-sky-700",
    },
    {
      href: "/the-long-dark-episode-5/episode-5-missing-people-locations",
      game: "The Long Dark",
      title: "Missing People Locations",
      description:
        "Basement, waterfall, and Constable routes in one guide.",
      tagClass: "text-sky-500",
      hoverBorderClass: "hover:border-sky-300",
      hoverTitleClass: "group-hover:text-sky-700",
    },
    {
      href: "/the-long-dark-episode-5/episode-5-ending-explained",
      game: "The Long Dark",
      title: "Episode 5 Ending Explained",
      description:
        "What the ending means, what Atwood reveals, and how to read the final scenes.",
      tagClass: "text-sky-500",
      hoverBorderClass: "hover:border-sky-300",
      hoverTitleClass: "group-hover:text-sky-700",
    },
  ];