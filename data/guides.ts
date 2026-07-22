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

export const guideClusters = [
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
    "title": "Iron Nest",
    "game": "Iron Nest",
    "href": "/iron-nest",
    "slug": "iron-nest",
    "kind": "game",
    "status": "archive",
    "accent": "amber",
    "archiveCategory": "Strategy, simulation, puzzle & discovery",
    "label": "Demo Coverage",
    "description": "Start here for Iron Nest teleprinter orders, map grids, bearing, range, elevation, shell choice, powder charges, Star shell corrections, and Challenge Mode.",
    "coverage": [
      "Event Guide"
    ],
    "pages": [
      {
        "title": "Demo Guide, Map Tools, Shells & Aiming",
        "href": "/iron-nest",
        "type": "Event Guide",
        "description": "Start here for Iron Nest teleprinter orders, map grids, bearing, range, elevation, shell choice, powder charges, Star shell corrections, and Challenge Mode.",
        "archive": {
          "showInCollections": true,
          "order": 1
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
