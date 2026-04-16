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

      // ===== Road to Vostok =====
  {
    href: "/road-to-vostok/area-05-guide/",
    game: "Road to Vostok",
    title: "Area 05 Guide",
    description:
      "Best first-run route, early loot order, Generalist timing, Village reset logic, and when School or Highway are actually worth pushing.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  {
    href: "/road-to-vostok/generalist-and-doctor-locations/",
    game: "Road to Vostok",
    title: "Generalist and Doctor Locations",
    description:
      "Exact trader routes, unlock timing, who to visit first, and why their shelter and task paths matter more than random trades.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  {
    href: "/road-to-vostok/permadeath-save-and-stash-guide/",
    game: "Road to Vostok",
    title: "Permadeath, Save, and Stash Guide",
    description:
      "How saving really works, what you lose on death, when Shelter stash is safe, and why stable loops beat greedy clears.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  {
    href: "/road-to-vostok/all-shelter-locations/",
    game: "Road to Vostok",
    title: "All Shelter Locations",
    description:
      "Every current shelter, how to unlock each one, the best order, and which shelters are actually worth rushing.",
    tagClass: "text-sky-500",
    hoverBorderClass: "hover:border-sky-300",
    hoverTitleClass: "group-hover:text-sky-700",
  },
  
    // ===== Pokemon Champions =====
    {
      href: "/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles/",
      game: "Pokemon Champions",
      title: "Incineroar Counter Guide",
      description:
        "How to beat Incineroar in Doubles: Fake Out cycles, Parting Shot loops, and best counter picks.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    {
      href: "/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles/",
      game: "Pokemon Champions",
      title: "Sneasler Counter Guide",
      description:
        "Best counters for Sneasler: Ghost-types, Psychic pressure, and stopping Unburden sweeps.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    {
      href: "/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles/",
      game: "Pokemon Champions",
      title: "Tailwind Counter Guide",
      description:
        "How to beat Tailwind teams: Taunt, Fake Out pressure, Trick Room reversal, and positioning tips.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    {
      href: "/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles/",
      game: "Pokemon Champions",
      title: "Trick Room Counter Guide",
      description:
        "How to stop Trick Room: Taunt leads, double targeting setters, and reversing speed control.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
  
    // ===== I Am Jesus Christ =====
    {
      href: "/i-am-jesus-christ/walkthrough/",
      game: "I Am Jesus Christ",
      title: "Full Walkthrough",
      description:
        "Full story route from John the Baptist to the ending.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    {
      href: "/i-am-jesus-christ/miracles-list/",
      game: "I Am Jesus Christ",
      title: "Miracles List",
      description:
        "Holy Spirit, Divine Vision, miracle categories, and key story scenes.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    {
      href: "/i-am-jesus-christ/apostles-locations/",
      game: "I Am Jesus Christ",
      title: "12 Apostles Locations",
      description:
        "Recruitment order, trigger chains, missables, and follower route help.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
    {
      href: "/i-am-jesus-christ/who-should-play/",
      game: "I Am Jesus Christ",
      title: "Who Should Play?",
      description:
        "Buying advice for Christians, non-Christians, and story-first players.",
      tagClass: "text-amber-500",
      hoverBorderClass: "hover:border-amber-300",
      hoverTitleClass: "group-hover:text-amber-700",
    },
  
    // ===== Sol Cesto =====
    {
      href: "/sol-cesto/all-characters-unlock-guide/",
      game: "Sol Cesto",
      title: "All Characters Unlock Guide",
      description:
        "Full roster overview, normal progression unlocks, and the hidden Lizard route.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/sol-cesto/how-to-unlock-lizard/",
      game: "Sol Cesto",
      title: "How to Unlock Lizard",
      description:
        "Egg location, Biome 3 hatch condition, and why the Candle is not required.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/sol-cesto/flute-guide/",
      game: "Sol Cesto",
      title: "Flute Guide",
      description:
        "Flute Fragments, melody inputs, effects, and fountain bird repair explained.",
      tagClass: "text-emerald-500",
      hoverBorderClass: "hover:border-emerald-300",
      hoverTitleClass: "group-hover:text-emerald-700",
    },
    {
      href: "/sol-cesto/how-to-unlock-huntress/",
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