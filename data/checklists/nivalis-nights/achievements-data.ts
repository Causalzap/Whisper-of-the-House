import type { ChecklistItem } from "@/data/checklists/types";

// Steam unlock-rate snapshot from the launch-window achievement list.
export const nivalisNightsAchievementRateSnapshot = "September 29, 2026";

type AchievementSeed = readonly [
  name: string,
  requirement: string,
  steamRate: string,
];

type AchievementMeta = Pick<
  ChecklistItem,
  "category" | "timing" | "risk" | "detailHref"
>;

function createAchievementId(name: string): string {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\*/g, "star")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeAchievementItems(
  entries: readonly AchievementSeed[],
  meta: AchievementMeta
): ChecklistItem[] {
  return entries.map(([name, requirement, steamRate]) => ({
    id: createAchievementId(name),
    name,
    requirement,
    steamRate,
    category: meta.category,
    timing: meta.timing,
    risk: meta.risk,
    detailHref: meta.detailHref,
    searchText: `${name} ${requirement} ${meta.category} ${meta.timing} Nivalis Nights achievement`,
  }));
}

const businessAchievements: readonly AchievementSeed[] = [
  ["First customer", "You have served the first customer.", "85.4%"],
  ["First 4* Review", "Get your first 4* review.", "85.0%"],
  ["Offer Drinks", "Offer drinks on the menu in one of your venues.", "52.8%"],
  ["First 5* Review", "Get your first 5* review.", "28.1%"],
  [
    "Serve 100 Customers",
    "Serve 100 customers across all your venues.",
    "20.8%",
  ],
  [
    "Handle a Complaint",
    "Handle a complaint from one of your customers.",
    "15.2%",
  ],
  [
    "Offer a Dessert",
    "Put a dessert on your restaurant's menu.",
    "12.3%",
  ],
  [
    "500 Daily Revenue",
    "Reach a daily revenue of 500 lims across your venues.",
    "5.3%",
  ],
  [
    "Pictures on the wall!",
    "Put a picture on the wall in one of your venues.",
    "3.2%",
  ],
  ["1000 Revenue", "Earn a total of 1000 Lims in revenue.", "2.7%"],
  [
    "Umbrella Corp",
    "Place an umbrella in one of your venues to protect more customers from the rain.",
    "1.9%",
  ],
  [
    "4* Average Reviews",
    "Get an average of 4* reviews in one of your venues. Requires at least 100 reviews.",
    "0.8%",
  ],
  [
    "Own 2 Venues",
    "Start operating 2 venues. You need to gain a permit to lease your second venue.",
    "0.6%",
  ],
  [
    "Debt Free",
    "You did it! Ramen Noir is debt-free. Congratulations!",
    "0.3%",
  ],
  [
    "Serve 500 Customers",
    "Serve 500 customers across all your venues.",
    "0.2%",
  ],
  ["Own 5 Venues", "Start operating 5 venues.", "0.1%"],
  [
    "Paid Back a Loan",
    "You have paid back a loan shark with interest.",
    "0.1%",
  ],
];

const fishingAchievements: readonly AchievementSeed[] = [
  ["Burbot", "Find and catch Burbot.", "6.0%"],
  ["Pike", "Find and catch Pike.", "5.6%"],
  ["Stickleback", "Find and catch Stickleback.", "5.5%"],
  ["Whitefish", "Find and catch Whitefish.", "0.5%"],
  ["Taimen", "Find and catch Taimen.", "0.2%"],
  ["Bream", "Find and catch Bream.", "0.1%"],
  ["Brook Trout", "Find and catch Brook Trout.", "0.1%"],
  ["Carp", "Find and catch Carp.", "0.1%"],
  ["Crucian", "Find and catch Crucian.", "0.1%"],
  ["Dace", "Find and catch Dace.", "0.1%"],
  ["Grayling", "Find and catch Grayling.", "0.1%"],
  ["Ide", "Find and catch Ide.", "0.1%"],
  ["Lake Trout", "Find and catch Lake Trout.", "0.1%"],
  ["Perch", "Find and catch Perch.", "0.1%"],
  ["Rainbow Trout", "Find and catch Rainbow Trout.", "0.1%"],
  ["Roach", "Find and catch Roach.", "0.1%"],
  ["Rudd", "Find and catch Rudd.", "0.1%"],
  ["Ruffe", "Find and catch Ruffe.", "0.1%"],
  ["Sabrefish", "Find and catch Sabrefish.", "0.1%"],
  ["Salmon", "Find and catch Salmon.", "0.1%"],
  ["Tench", "Find and catch Tench.", "0.1%"],
  ["Volga Zander", "Find and catch Volga Zander.", "0.1%"],
  ["Zander", "Find and catch Zander.", "0.1%"],
  ["Zope", "Find and catch Zope.", "0.1%"],
];

const farmingAchievements: readonly AchievementSeed[] = [
  [
    "First Harvest",
    "Plant and harvest something in the greenhouse.",
    "14.0%",
  ],
  ["Harvester", "Plant, grow, and harvest 5 unique crops.", "0.7%"],
  [
    "Farmer",
    "Successfully harvest 10 different types of crops.",
    "0.1%",
  ],
  [
    "Farming Specialist",
    "Cultivate a diverse garden from all available crop types.",
    "0.1%",
  ],
  [
    "Serial Farmer",
    "Grow 20 different crops from seed to harvest.",
    "0.1%",
  ],
];

const locationAchievements: readonly AchievementSeed[] = [
  ["Lowtown", "Visit Lowtown.", "100.0%"],
  ["Meridian Market", "Visit Meridian Market.", "100.0%"],
  ["Docks", "Visit the Docks.", "38.6%"],
  ["Metro Hub", "Visit Metro Hub.", "33.5%"],
  ["Eastern Residential", "Visit Eastern Residential.", "25.3%"],
  ["The Stacks", "Visit The Stacks.", "20.7%"],
  ["Central Canyon", "Visit Central Canyon.", "13.0%"],
  ["Industrial District", "Visit Industrial District.", "8.6%"],
  ["Oil Rig", "Visit Oil Rig.", "5.5%"],
  ["Sewers", "Visit the Sewers.", "5.5%"],
  ["Seaside Boardwalk", "Visit Seaside Boardwalk.", "3.1%"],
  ["Mountain Town", "Visit Mountain Town.", "2.9%"],
  ["Hive Mall", "Visit Hive Mall.", "0.9%"],
  ["Space Port", "Visit the Space Port.", "0.7%"],
  ["Helix Monumental", "Visit Helix Monumental.", "0.6%"],
  ["Skyhigh Gardens", "Visit Skyhigh Gardens.", "0.4%"],
  ["Calypso Island", "Visit Calypso Island.", "0.2%"],
  ["Spire", "Visit the Spire.", "0.2%"],
];

const apartmentAchievements: readonly AchievementSeed[] = [
  [
    "Meridian Rim, Level 42, Unit 3",
    "Discover apartment Meridian Rim, Level 42, Unit 3.",
    "26.7%",
  ],
  [
    "Low-Tide Residences, Unit 7b",
    "Discover apartment Low-Tide Residences, Unit 7b.",
    "6.5%",
  ],
  [
    "Nexus Tier, Unit 2351",
    "Discover apartment Nexus Tier, Unit 2351.",
    "2.3%",
  ],
  [
    "Zenith Spire, Suite 902-A",
    "Discover apartment Zenith Spire, Suite 902-A.",
    "1.5%",
  ],
  [
    "808 Harbor Overlook",
    "Discover apartment 808 Harbor Overlook.",
    "0.6%",
  ],
  [
    "Seaboard Residences, App. 15",
    "Discover apartment Seaboard Residences, App. 15.",
    "0.5%",
  ],
  [
    "Stacks Unit 1804-C",
    "Discover apartment Stacks Unit 1804-C.",
    "0.1%",
  ],
  [
    "Calypso Island Beach Villa",
    "Discover apartment Calypso Island Beach Villa.",
    "0.1%",
  ],
  [
    "Calypso Island Water Villa",
    "Discover apartment Calypso Island Water Villa.",
    "0.1%",
  ],
  [
    "Mahogany Spire, Unit 89c",
    "Discover apartment Mahogany Spire, Unit 89c.",
    "0.1%",
  ],
  [
    "Sky-Lot 49, Apex Tier",
    "Discover apartment Sky-Lot 49, Apex Tier.",
    "0.1%",
  ],
];

const diningAchievements: readonly AchievementSeed[] = [
  [
    "Foodie",
    "Eat at 5 different restaurants across the city.",
    "0.1%",
  ],
  [
    "Gastronomy Nerd",
    "Try dishes from 10 separate dining locations.",
    "0.1%",
  ],
  [
    "Connoisseur",
    "Sample the menu at 20 distinct eateries.",
    "0.1%",
  ],
  [
    "Gourmet",
    "Discover and dine at 30 unique food spots.",
    "0.1%",
  ],
  [
    "Megacity Epicurean",
    "Complete your culinary tour of 50 dining spots across Nivalis.",
    "0.1%",
  ],
];

const graffitiAchievements: readonly AchievementSeed[] = [
  ["Found a Graffiti", "Find a Graffiti.", "25.9%"],
  ["5 Graffiti Found", "Find 5 Graffiti.", "0.6%"],
  ["10 Graffiti Found", "Find 10 Graffiti.", "0.1%"],
  ["Graffiti Admirer", "Find all Graffiti.", "0.1%"],
];

const menuCardAchievements: readonly AchievementSeed[] = [
  [
    "Collectable Menu Found",
    "Find an old collectable menu card.",
    "17.3%",
  ],
  [
    "Menu Collector",
    "Find 10 collectable menu cards.",
    "0.1%",
  ],
  [
    "Historian",
    "Find all collectable menu cards.",
    "0.1%",
  ],
];

const postcardAchievements: readonly AchievementSeed[] = [
  [
    "Skyhigh Gardens Postcard",
    "Collect a postcard of Skyhigh Gardens.",
    "1.4%",
  ],
  [
    "Metro Hub Postcard",
    "Collect a postcard of Metro Hub.",
    "0.8%",
  ],
  [
    "Meridian Market Postcard",
    "Collect a postcard of Meridian Market.",
    "0.6%",
  ],
  [
    "Docks Postcard",
    "Collect a postcard of the Docks.",
    "0.2%",
  ],
  [
    "Calypso Island Postcard",
    "Collect a postcard of Calypso Island.",
    "0.1%",
  ],
  [
    "Central Canyon Postcard",
    "Collect a postcard of Central Canyon.",
    "0.1%",
  ],
  [
    "Helix Postcard",
    "Collect a postcard of Helix Monumental.",
    "0.1%",
  ],
  [
    "Outer Space Postcard",
    "Collect a postcard of Outer Space.",
    "0.1%",
  ],
  [
    "Space Port Postcard",
    "Collect a postcard of the Space Port.",
    "0.1%",
  ],
  [
    "Spire Postcard",
    "Collect a postcard of the Spire.",
    "0.1%",
  ],
];

const questAchievements: readonly AchievementSeed[] = [
  [
    "Noodle Bar Introduction",
    "Hidden achievement: You got familiar with the Noodle Bar. Good start!",
    "73.3%",
  ],
  [
    "Seafarer",
    "Hidden achievement: Become a boat captain and explore the gridless sea around Nivalis.",
    "27.8%",
  ],
  [
    "After Curfew",
    "Hidden achievement: Get detected by a CorpSec security camera.",
    "8.1%",
  ],
  [
    "Seen a Ghost",
    "Make contact with a ghost in Nivalis.",
    "0.5%",
  ],
  [
    "A Knight in Nivalis",
    'Win the "A Knight in Nivalis" chess tournament.',
    "0.1%",
  ],
  [
    "Aseptic",
    "Solve the Aseptic case!",
    "0.1%",
  ],
  [
    "Certified Decorator",
    "Stage 5 apartments for various clients.",
    "0.1%",
  ],
  [
    "Coffee Time",
    "Nivalis needs caffeine. Deliver 3 runs of coffee for Coffee PoccoCup.",
    "0.1%",
  ],
  [
    "Fauxter's Band",
    "Hidden achievement: Put Fauxter's band back together.",
    "0.1%",
  ],
  [
    "Find Love",
    "Hidden achievement: Meet someone to fall in love with.",
    "0.1%",
  ],
  [
    "Find Salma's Brother",
    "Hidden achievement: Help Salma find her missing brother.",
    "0.1%",
  ],
  [
    "Good Game",
    "Play a Game of Chess.",
    "0.1%",
  ],
  [
    "Home Makeover",
    "Design the interior of an apartment for a client.",
    "0.1%",
  ],
  [
    "Lost Child",
    "Hidden achievement: Play hide & seek with Silo Mills.",
    "0.1%",
  ],
  [
    "Ma Gomba's Gift",
    "Grow poisonous mushrooms for Ma Gomba.",
    "0.1%",
  ],
  [
    "Mask for Iann",
    "Hidden achievement: Raise enough money to help Lochlainn get a mask for his dying son Iann.",
    "0.1%",
  ],
  [
    "Project Grapevine",
    "Spread seeds on the Oil Rig.",
    "0.1%",
  ],
  [
    "Rat Whisperer",
    "Help rat whisperer Gladstone on a secret mission during curfew.",
    "0.1%",
  ],
  [
    "Scorpion",
    "Hidden achievement: Meet the Scorpion.",
    "0.1%",
  ],
  [
    "Thaddeus Mystery",
    "Hidden achievement: Learn the truth about Thaddeus.",
    "0.1%",
  ],
  [
    "The Lost Captain",
    "Hidden achievement: Reconcile the remaining crew of robot sailors.",
    "0.1%",
  ],
  [
    "The Network",
    "Hidden achievement: Discover the Network!",
    "0.1%",
  ],
  [
    "Where is Ava?",
    "Hidden achievement: Find Ava!",
    "0.1%",
  ],
];

export const nivalisNightsAchievementChecklistItems: ChecklistItem[] = [
  ...makeAchievementItems(
    businessAchievements,
    {
      category: "Business",
      timing: "Business progression",
      risk: "Low",
      detailHref: "#business",
    }
  ),

  ...makeAchievementItems(
    fishingAchievements,
    {
      category: "Fishing",
      timing: "Fishing progression / cleanup",
      risk: "Medium",
      detailHref: "#fishing",
    }
  ),

  ...makeAchievementItems(
    farmingAchievements,
    {
      category: "Farming",
      timing: "Greenhouse progression",
      risk: "Low",
      detailHref: "#farming",
    }
  ),

  ...makeAchievementItems(
    locationAchievements,
    {
      category: "Locations",
      timing: "Story and exploration",
      risk: "None",
      detailHref: "#locations",
    }
  ),

  ...makeAchievementItems(
    apartmentAchievements,
    {
      category: "Apartments",
      timing: "City exploration",
      risk: "Low",
      detailHref: "#apartments",
    }
  ),

  ...makeAchievementItems(
    diningAchievements,
    {
      category: "Dining",
      timing: "City exploration",
      risk: "Low",
      detailHref: "#dining",
    }
  ),

  ...makeAchievementItems(
    graffitiAchievements,
    {
      category: "Graffiti",
      timing: "Collectible cleanup",
      risk: "Medium",
      detailHref: "#collectibles",
    }
  ),

  ...makeAchievementItems(
    menuCardAchievements,
    {
      category: "Menu Cards",
      timing: "Collectible cleanup",
      risk: "Medium",
      detailHref: "#collectibles",
    }
  ),

  ...makeAchievementItems(
    postcardAchievements,
    {
      category: "Postcards",
      timing: "District exploration",
      risk: "Low",
      detailHref: "#postcards",
    }
  ),

  ...makeAchievementItems(
    questAchievements,
    {
      category: "Quests",
      timing: "Character and story progression",
      risk: "Medium",
      detailHref: "#quests",
    }
  ),
];