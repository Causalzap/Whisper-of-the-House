import type { ChecklistItem } from "@/data/checklists/types";

type RawAchievement = readonly [
  name: string,
  requirement: string,
  steamRate: string,
];

type AchievementFamilyMeta = Pick<
  ChecklistItem,
  "category" | "timing" | "risk" | "detailHref"
>;

const achievementFamilyMeta: Record<string, AchievementFamilyMeta> = {
  "Product Pusher": {
    category: "Business Growth",
    timing: "Normal progression",
    risk: "Low",
    detailHref: "#natural-progression",
  },
  "Your Best Friend": {
    category: "Progression",
    timing: "Normal Uncle Fred progression",
    risk: "Low",
    detailHref: "#natural-progression",
  },
  "Employee of the Month": {
    category: "Employees",
    timing: "Normal training progression",
    risk: "Low",
    detailHref: "#natural-progression",
  },
  "Dirty Floors": {
    category: "Business Performance",
    timing: "High-capacity business",
    risk: "Medium",
    detailHref: "#customer-income",
  },
  "Money Maker": {
    category: "Business Performance",
    timing: "Strong single-business setup",
    risk: "Medium",
    detailHref: "#customer-income",
  },
  "Boss Man": {
    category: "Employees",
    timing: "Normal company growth",
    risk: "Low",
    detailHref: "#natural-progression",
  },
  "Carpark": {
    category: "Vehicles",
    timing: "Late-game fleet cleanup",
    risk: "Medium",
    detailHref: "#vehicles-luxury",
  },
  "Big Stacks": {
    category: "Wealth",
    timing: "Normal company growth",
    risk: "Low",
    detailHref: "#natural-progression",
  },
  "Suit Castles": {
    category: "Business Growth",
    timing: "Office expansion",
    risk: "Medium",
    detailHref: "#natural-progression",
  },
  "Mad Whip": {
    category: "Vehicles",
    timing: "Late-game purchase",
    risk: "Low",
    detailHref: "#vehicles-luxury",
  },
  "The Designer": {
    category: "Property / Interior",
    timing: "Mid / late expansion",
    risk: "Low",
    detailHref: "#property-achievements",
  },
  "Home Sweet Home": {
    category: "Property",
    timing: "Late-game cleanup",
    risk: "Medium",
    detailHref: "#property-achievements",
  },
  "The Passenger": {
    category: "Travel Counter",
    timing: "Start early / background progress",
    risk: "High",
    detailHref: "#start-early",
  },
  "Right and Wrong": {
    category: "Specialist Employees",
    timing: "Late-game workforce scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "Blue Cheese": {
    category: "Wealth",
    timing: "Normal company growth",
    risk: "Low",
    detailHref: "#natural-progression",
  },
  "Mechanic Paradise": {
    category: "Vehicles",
    timing: "Background progress / late cleanup",
    risk: "High",
    detailHref: "#vehicles-luxury",
  },
  "Storage King": {
    category: "Property / Logistics",
    timing: "Late-game cleanup",
    risk: "Medium",
    detailHref: "#property-achievements",
  },
  "Private Mansion": {
    category: "Property",
    timing: "Late-game property purchase",
    risk: "Low",
    detailHref: "#property-achievements",
  },
  "Lucky Potato": {
    category: "Casino",
    timing: "Late-game cleanup",
    risk: "Medium",
    detailHref: "#long-save-achievements",
  },
  "Society's Friend": {
    category: "Long Save",
    timing: "Long-term company operation",
    risk: "High",
    detailHref: "#long-save-achievements",
  },
  "Geek Squad": {
    category: "Specialist Employees",
    timing: "Late-game workforce scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "Human Resources": {
    category: "Specialist Employees",
    timing: "Late-game workforce scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "Ludomani": {
    category: "Casino",
    timing: "Late-game cleanup",
    risk: "Low",
    detailHref: "#long-save-achievements",
  },
  "Hoarder": {
    category: "Cleanup Grind",
    timing: "Late-game stockpile",
    risk: "Very High",
    detailHref: "#hoarder-insomnia",
  },
  "Bricks and Mortar": {
    category: "Property",
    timing: "Late-game ownership cleanup",
    risk: "High",
    detailHref: "#property-achievements",
  },
  "Bling Cribs": {
    category: "Property / Luxury",
    timing: "Late-game furnishing cleanup",
    risk: "High",
    detailHref: "#property-achievements",
  },
  "Crime Rider": {
    category: "Travel Counter",
    timing: "Start early / background progress",
    risk: "Very High",
    detailHref: "#start-early",
  },
  "Freightshakers": {
    category: "Specialist Employees",
    timing: "Late-game logistics scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "Sea Bling": {
    category: "Luxury",
    timing: "Endgame purchase",
    risk: "High",
    detailHref: "#vehicles-luxury",
  },
  "Expensive Drops": {
    category: "Travel Counter",
    timing: "Start early / background progress",
    risk: "High",
    detailHref: "#start-early",
  },
  "Insomnia": {
    category: "Cleanup Grind",
    timing: "Late-game cleanup",
    risk: "High",
    detailHref: "#hoarder-insomnia",
  },
  "The Sailer": {
    category: "Luxury",
    timing: "Endgame purchase",
    risk: "High",
    detailHref: "#vehicles-luxury",
  },
  "Another One": {
    category: "Long Save",
    timing: "Very late save",
    risk: "Very High",
    detailHref: "#long-save-achievements",
  },
  "Executive Producer": {
    category: "Factory",
    timing: "Start before final cleanup",
    risk: "Very High",
    detailHref: "#factory-achievements",
  },
  "Graphic Design Is My Passion": {
    category: "Specialist Employees",
    timing: "Late-game workforce scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "A Game of Love": {
    category: "Sports",
    timing: "Late-game activity cleanup",
    risk: "Medium",
    detailHref: "#golf-tennis",
  },
  "Arch-nemesis": {
    category: "Rivals",
    timing: "Late-game Rival cleanup",
    risk: "Very High",
    detailHref: "#rival-achievements",
  },
  Bullseye: {
    category: "Hidden",
    timing: "Golf cleanup",
    risk: "Medium",
    detailHref: "#hidden-achievements",
  },
  "Hostile Takeover": {
    category: "Hidden",
    timing: "After defeating a Rival",
    risk: "Very High",
    detailHref: "#hidden-achievements",
  },
  "Just Tap It In": {
    category: "Sports",
    timing: "Late-game activity cleanup",
    risk: "High",
    detailHref: "#golf-tennis",
  },
  "Oh, the Places You’ll Go": {
    category: "Specialist Employees",
    timing: "Late-game workforce scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "Party Planning Committee": {
    category: "Specialist Employees",
    timing: "Late-game workforce scaling",
    risk: "High",
    detailHref: "#specialist-employees",
  },
  "Pound Sand": {
    category: "Hidden",
    timing: "Late-game beach cleanup",
    risk: "Low",
    detailHref: "#hidden-achievements",
  },
  "They See Me Rollin’": {
    category: "Travel Counter",
    timing: "Use naturally after private driver unlock",
    risk: "High",
    detailHref: "#start-early",
  },
};

const rawAchievements: RawAchievement[] = [
  ["Product Pusher - Bronze", "Run 1 successful retail business", "75.6%"],
  [
    "Your Best Friend - Bronze",
    "Complete 30 of Uncle Fred's objectives",
    "68.7%",
  ],
  [
    "Employee of the Month - Bronze",
    "Reach level 50% of any employee skill",
    "58.1%",
  ],
  [
    "Dirty Floors - Bronze",
    "Reach at least 100 customers per day for one business",
    "48.8%",
  ],
  [
    "Money Maker - Bronze",
    "Reach a weekly income of $10,000 for one business",
    "45.9%",
  ],
  [
    "Your Best Friend - Silver",
    "Complete 60 of Uncle Fred's objectives",
    "45.6%",
  ],
  ["Boss Man - Bronze", "Employ at least 10 people", "41.9%"],
  ["Carpark - Bronze", "Own a total of 2 vehicles", "41.9%"],
  [
    "Employee of the Month - Silver",
    "Reach level 75% of any employee skill",
    "39.1%",
  ],
  ["Big Stacks - Bronze", "Reach a bank balance of $100,000", "35.2%"],
  [
    "Employee of the Month - Gold",
    "Reach level 100% of any employee skill",
    "31.6%",
  ],
  [
    "Suit Castles - Bronze",
    "Run 1 successful office-based business",
    "31.6%",
  ],
  ["Mad Whip - Bronze", "Own a car worth at least $15,000", "30.1%"],
  [
    "The Designer - Bronze",
    "Spend at least $20,000 on interior designing",
    "29.8%",
  ],
  [
    "Dirty Floors - Silver",
    "Reach at least 250 customers per day for one business",
    "29.4%",
  ],
  [
    "Money Maker - Silver",
    "Reach a weekly income of $50,000 for one business",
    "28.0%",
  ],
  [
    "Your Best Friend - Gold",
    "Complete 90 of Uncle Fred's objectives",
    "27.2%",
  ],
  ["Home Sweet Home - Bronze", "Rent at least 2 apartments", "24.8%"],
  ["The Passenger - Bronze", "Complete 10 taxi rides", "23.8%"],
  ["Boss Man - Silver", "Employ at least 50 people", "23.6%"],
  [
    "Right and Wrong - Bronze",
    "Hire and schedule at least 5 lawyers",
    "23.5%",
  ],
  [
    "Blue Cheese - Bronze",
    "Reach a total personal wealth of $1,000,000",
    "23.3%",
  ],
  ["Mad Whip - Silver", "Own a car worth at least $90,000", "23.1%"],
  [
    "Mechanic Paradise - Bronze",
    "Spend at least $10,000 on repairing vehicles",
    "21.9%",
  ],
  ["Storage King - Bronze", "Rent at least 2 warehouses", "21.7%"],
  [
    "Product Pusher - Silver",
    "Run 5 successful retail businesses",
    "21.5%",
  ],
  [
    "Private Mansion - Bronze",
    "Own an apartment of at least 90 square meters",
    "20.1%",
  ],
  ["Big Stacks - Silver", "Reach a bank balance of $2,000,000", "19.8%"],
  ["Boss Man - Gold", "Employ at least 100 people", "16.1%"],
  [
    "Money Maker - Gold",
    "Reach a weekly income of $250,000 for one business",
    "15.5%",
  ],
  [
    "Private Mansion - Silver",
    "Own an apartment of at least 200 square meters",
    "14.7%",
  ],
  ["Mad Whip - Gold", "Own a car worth at least $120,000", "14.2%"],
  [
    "Lucky Potato - Bronze",
    "Win a total of $50,000 at the casino",
    "14.1%",
  ],
  [
    "Mechanic Paradise - Silver",
    "Spend at least $50,000 on repairing vehicles",
    "13.3%",
  ],
  [
    "Society's Friend - Bronze",
    "Pay at least $100,000 in taxes",
    "13.3%",
  ],
  ["The Passenger - Silver", "Complete 50 taxi rides", "12.6%"],
  [
    "Geek Squad - Bronze",
    "Hire and schedule at least 5 programmers",
    "12.4%",
  ],
  [
    "The Designer - Silver",
    "Spend at least $150,000 on interior designing",
    "12.2%",
  ],
  [
    "Human Resources - Bronze",
    "Hire and schedule at least 5 HR Managers",
    "11.7%",
  ],
  [
    "Right and Wrong - Silver",
    "Hire and schedule at least 25 lawyers",
    "11.2%",
  ],
  ["Big Stacks - Gold", "Reach a bank balance of $10,000,000", "10.7%"],
  [
    "Blue Cheese - Silver",
    "Reach a total personal wealth of $10,000,000",
    "10.7%",
  ],
  ["Ludomani - Bronze", "Visit the casino at least 2 times", "10.7%"],
  [
    "Dirty Floors - Gold",
    "Reach at least 800 customers per day for one business",
    "10.1%",
  ],
  [
    "Private Mansion - Gold",
    "Own an apartment of at least 500 square meters",
    "8.0%",
  ],
  [
    "Hoarder - Bronze",
    "Stockpile at least 100,000 of any product",
    "7.2%",
  ],
  ["Bricks and Mortar - Bronze", "Own at least 2 buildings", "6.7%"],
  [
    "Geek Squad - Silver",
    "Hire and schedule at least 25 programmers",
    "6.4%",
  ],
  [
    "Mechanic Paradise - Gold",
    "Spend at least $250,000 on repairing vehicles",
    "6.1%",
  ],
  [
    "Bling Cribs - Bronze",
    "Own an apartment with furniture worth at least $100,000",
    "6.0%",
  ],
  ["Crime Rider - Bronze", "Receive at least 10 parking tickets", "6.0%"],
  [
    "Freightshakers - Bronze",
    "Hire and schedule at least 5 delivery drivers",
    "5.8%",
  ],
  [
    "Lucky Potato - Silver",
    "Win a total of $250,000 at the casino",
    "5.7%",
  ],
  [
    "Right and Wrong - Gold",
    "Hire and schedule at least 100 lawyers",
    "4.5%",
  ],
  ["Carpark - Silver", "Own a total of 10 vehicles", "4.2%"],
  [
    "Suit Castles - Silver",
    "Run 5 successful office-based businesses",
    "4.2%",
  ],
  ["Storage King - Silver", "Rent at least 5 warehouses", "4.1%"],
  [
    "Sea Bling - Bronze",
    "Own a boat worth at least $2,500,000",
    "3.7%",
  ],
  [
    "Lucky Potato - Gold",
    "Win a total of $1,000,000 at the casino",
    "3.5%",
  ],
  [
    "Blue Cheese - Gold",
    "Reach a total personal wealth of $100,000,000",
    "3.1%",
  ],
  ["Ludomani - Silver", "Visit the casino at least 5 times", "3.0%"],
  [
    "Expensive Drops - Bronze",
    "Spend at least $1,000 on gasoline",
    "2.7%",
  ],
  [
    "Sea Bling - Silver",
    "Own a boat worth at least $3,000,000",
    "2.7%",
  ],
  ["Bricks and Mortar - Silver", "Own at least 10 buildings", "2.5%"],
  [
    "Geek Squad - Gold",
    "Hire and schedule at least 100 programmers",
    "2.4%",
  ],
  ["The Passenger - Gold", "Complete 250 taxi rides", "2.4%"],
  [
    "Human Resources - Silver",
    "Hire and schedule at least 20 HR Managers",
    "2.2%",
  ],
  ["Insomnia - Bronze", "Become hospitalized 5 times", "2.1%"],
  [
    "Society's Friend - Silver",
    "Pay at least $5,000,000 in taxes",
    "2.0%",
  ],
  [
    "Freightshakers - Silver",
    "Hire and schedule at least 10 delivery drivers",
    "1.9%",
  ],
  [
    "Bling Cribs - Silver",
    "Own an apartment with furniture worth at least $500,000",
    "1.7%",
  ],
  ["The Sailer - Bronze", "Own at least 2 boats", "1.6%"],
  [
    "Product Pusher - Gold",
    "Run 30 successful retail businesses",
    "1.5%",
  ],
  [
    "The Designer - Gold",
    "Spend at least $1,000,000 on interior designing",
    "1.5%",
  ],
  ["Storage King - Gold", "Rent at least 10 warehouses", "1.4%"],
  [
    "Suit Castles - Gold",
    "Run 10 successful office-based businesses",
    "1.4%",
  ],
  ["Crime Rider - Silver", "Receive at least 50 parking tickets", "1.3%"],
  ["Home Sweet Home - Silver", "Rent at least 10 apartments", "1.3%"],
  [
    "Sea Bling - Gold",
    "Own a boat worth at least $90,000,000",
    "1.3%",
  ],
  ["Bricks and Mortar - Gold", "Own at least 30 buildings", "1.2%"],
  ["Ludomani - Gold", "Visit the casino at least 10 times", "1.1%"],
  [
    "Bling Cribs - Gold",
    "Own an apartment with furniture worth at least $2,000,000",
    "0.8%",
  ],
  [
    "Society's Friend - Gold",
    "Pay at least $20,000,000 in taxes",
    "0.8%",
  ],
  ["Insomnia - Silver", "Become hospitalized 10 times", "0.7%"],
  ["The Sailer - Silver", "Own at least 5 boats", "0.7%"],
  [
    "Freightshakers - Gold",
    "Hire and schedule at least 20 delivery drivers",
    "0.6%",
  ],
  ["Home Sweet Home - Gold", "Rent at least 20 apartments", "0.6%"],
  [
    "Human Resources - Gold",
    "Hire and schedule at least 50 HR Managers",
    "0.6%",
  ],
  ["Crime Rider - Gold", "Receive at least 250 parking tickets", "0.5%"],
  [
    "Hoarder - Silver",
    "Stockpile at least 2,000,000 of any product",
    "0.5%",
  ],
  ["The Sailer - Gold", "Own at least 10 boats", "0.5%"],
  ["Carpark - Gold", "Own a total of 40 vehicles", "0.4%"],
  ["Insomnia - Gold", "Become hospitalized 20 times", "0.4%"],
  [
    "Expensive Drops - Gold",
    "Spend at least $10,000 on gasoline",
    "0.3%",
  ],
  [
    "Expensive Drops - Silver",
    "Spend at least $5,000 on gasoline",
    "0.3%",
  ],
  [
    "Hoarder - Gold",
    "Stockpile at least 10,000,000 of any product",
    "0.3%",
  ],
  ["Another One - Bronze", "Celebrate your 70th birthday", "0.2%"],
  ["Another One - Gold", "Celebrate your 100th birthday", "0.2%"],
  ["Another One - Silver", "Celebrate your 75th birthday", "0.2%"],
  [
    "Executive Producer - Bronze",
    "Produce at least 10,000 items in a factory",
    "0.2%",
  ],
  [
    "Graphic Design Is My Passion - Bronze",
    "Hire and schedule at least 5 graphic designers",
    "0.2%",
  ],
  ["A Game of Love - Bronze", "Win at least 1 match of tennis", "0.1%"],
  ["A Game of Love - Gold", "Win at least 3 matches of tennis", "0.1%"],
  ["A Game of Love - Silver", "Win at least 2 matches of tennis", "0.1%"],
  ["Arch-nemesis - Bronze", "Defeat 1 Special Rival", "0.1%"],
  ["Arch-nemesis - Gold", "Defeat all 4 Special Rivals", "0.1%"],
  ["Arch-nemesis - Silver", "Defeat 2 Special Rivals", "0.1%"],
  [
    "Bullseye",
    "Hidden achievement: Hit the golf cart while playing golf",
    "0.1%",
  ],
  [
    "Executive Producer - Gold",
    "Produce at least 1,000,000 items in a factory",
    "0.1%",
  ],
  [
    "Executive Producer - Silver",
    "Produce at least 100,000 items in a factory",
    "0.1%",
  ],
  [
    "Graphic Design Is My Passion - Gold",
    "Hire and schedule at least 100 graphic designers",
    "0.1%",
  ],
  [
    "Graphic Design Is My Passion - Silver",
    "Hire and schedule at least 25 graphic designers",
    "0.1%",
  ],
  [
    "Hostile Takeover",
    "Hidden achievement: Own the Hamptons home of a former rival",
    "0.1%",
  ],
  [
    "Just Tap It In - Bronze",
    "Score at least 250 points in a single golf game",
    "0.1%",
  ],
  [
    "Just Tap It In - Gold",
    "Score at least 750 points in a single golf game",
    "0.1%",
  ],
  [
    "Just Tap It In - Silver",
    "Score at least 500 points in a single golf game",
    "0.1%",
  ],
  [
    "Oh, the Places You’ll Go - Bronze",
    "Hire and schedule at least 5 travel agents",
    "0.1%",
  ],
  [
    "Oh, the Places You’ll Go - Gold",
    "Hire and schedule at least 100 travel agents",
    "0.1%",
  ],
  [
    "Oh, the Places You’ll Go - Silver",
    "Hire and schedule at least 25 travel agents",
    "0.1%",
  ],
  [
    "Party Planning Committee - Bronze",
    "Hire and schedule at least 5 event planners",
    "0.1%",
  ],
  [
    "Party Planning Committee - Gold",
    "Hire and schedule at least 100 event planners",
    "0.1%",
  ],
  [
    "Party Planning Committee - Silver",
    "Hire and schedule at least 25 event planners",
    "0.1%",
  ],
  [
    "Pound Sand",
    "Hidden achievement: Destroy a sandcastle on the beach",
    "0.1%",
  ],
  [
    "They See Me Rollin’ - Bronze",
    "Use your private driver at least 10 times",
    "0.1%",
  ],
  [
    "They See Me Rollin’ - Gold",
    "Use your private driver at least 100 times",
    "0.1%",
  ],
  [
    "They See Me Rollin’ - Silver",
    "Use your private driver at least 25 times",
    "0.1%",
  ],
];

function getAchievementFamily(name: string): string {
  return name.replace(/ - (Bronze|Silver|Gold)$/, "");
}

function createAchievementId(name: string): string {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const bigAmbitionsAchievementChecklistItems: ChecklistItem[] =
  rawAchievements.map(([name, requirement, steamRate]) => {
    const family = getAchievementFamily(name);
    const meta = achievementFamilyMeta[family];

    if (!meta) {
      throw new Error(
        `Missing Big Ambitions achievement metadata for "${family}".`,
      );
    }

    return {
      id: createAchievementId(name),
      name,
      requirement,
      category: meta.category,
      steamRate,
      timing: meta.timing,
      risk: meta.risk,
      detailHref: meta.detailHref,
      searchText: `${name} ${requirement} ${meta.category} ${meta.timing} Big Ambitions achievement`,
    };
  });