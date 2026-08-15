import type { ChecklistItem } from "@/data/checklists/types";

const achievementGuideHref = "/servant-of-the-lake/achievements";

// 49 total achievements:
// - 24 story task achievements
// - 24 task-linked hidden achievements
// - 1 post-game secret achievement
//
// Steam unlock rates are intentionally omitted because they move quickly
// after launch and are not needed for the checklist workflow.

export const servantOfTheLakeAchievementChecklistItems: ChecklistItem[] = [
  // ---------------------------------------------------------------------------
  // Day 1 — Story
  // ---------------------------------------------------------------------------

  {
    id: "the-arrival",
    name: "The Arrival",
    requirement: "Complete The Arrival and begin your first day at the Vanderboom estate.",
    category: "Day 1 Story",
    timing: "The Arrival",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "The Arrival story achievement day 1 front yard contract notebook Vanderboom estate",
  },
  {
    id: "preparing-breakfast",
    name: "Preparing Breakfast",
    requirement: "Complete Preparing Breakfast for Mr. Aldous.",
    category: "Day 1 Story",
    timing: "Preparing Breakfast",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Preparing Breakfast story achievement day 1 porridge Aldous morning",
  },
  {
    id: "waking-up-aldous",
    name: "Waking up Aldous",
    requirement: "Complete Aldous's full morning routine and finish Waking up Aldous.",
    category: "Day 1 Story",
    timing: "Waking up Aldous",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Waking up Aldous story achievement day 1 morning routine bedroom",
  },
  {
    id: "preparing-the-reception",
    name: "Preparing the Reception",
    requirement: "Finish the estate setup required for Preparing the Reception.",
    category: "Day 1 Story",
    timing: "Preparing the Reception",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Preparing the Reception story achievement day 1 reception clean paintings candles",
  },
  {
    id: "welcoming-the-guests",
    name: "Welcoming the Guests",
    requirement: "Complete the guest-arrival sequence and finish Welcoming the Guests.",
    category: "Day 1 Story",
    timing: "Welcoming the Guests",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Welcoming the Guests story achievement day 1 Alexandra William carriage garden",
  },
  {
    id: "serving-tea",
    name: "Serving Tea",
    requirement: "Prepare and serve Alexandra's tea to complete Serving Tea.",
    category: "Day 1 Story",
    timing: "Serving Tea",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Serving Tea story achievement day 1 Alexandra tea sugar evening",
  },
  {
    id: "opening-the-reunion",
    name: "Opening the Reunion",
    requirement: "Complete the family reunion sequence in the Living Room.",
    category: "Day 1 Story",
    timing: "Opening the Reunion",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Opening the Reunion story achievement day 1 living room Vanderboom family",
  },
  {
    id: "the-night-watch",
    name: "The Night Watch",
    requirement: "Complete the required hallway rounds during The Night Watch.",
    category: "Day 1 Story",
    timing: "The Night Watch",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "The Night Watch story achievement day 1 hallway abnormal bell candle",
  },
  {
    id: "searching-the-attic",
    name: "Searching the Attic",
    requirement: "Complete the Attic search and finish the final task of Day 1.",
    category: "Day 1 Story",
    timing: "Searching the Attic",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Searching the Attic story achievement day 1 attic scroll constellation crow",
  },

  // ---------------------------------------------------------------------------
  // Day 1 — Hidden
  // ---------------------------------------------------------------------------

  {
    id: "petting-the-horse",
    name: "Petting the Horse",
    requirement:
      "During The Arrival, feed the horse the carrot, then keep petting and interacting with it before leaving the front yard.",
    category: "Day 1 Hidden",
    timing: "The Arrival",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Petting the Horse hidden achievement day 1 arrival horse carrot pet front yard",
  },
  {
    id: "feeding-the-cat",
    name: "Feeding the Cat",
    requirement:
      "During Preparing Breakfast, use the alternate breakfast-food interaction on Rusty instead of relying only on the normal mouse interaction.",
    category: "Day 1 Hidden",
    timing: "Preparing Breakfast",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Feeding the Cat hidden achievement Rusty breakfast milk porridge food mouse day 1",
  },
  {
    id: "exercising-with-mr-aldous",
    name: "Exercising with Mr. Aldous",
    requirement:
      "During Waking up Aldous, complete the extra exercise interaction before finishing his outfit and morning routine.",
    category: "Day 1 Hidden",
    timing: "Waking up Aldous",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Exercising with Mr Aldous hidden achievement exercise morning bedroom day 1",
  },
  {
    id: "small-repairs",
    name: "Small Repairs",
    requirement:
      "During Preparing the Reception, keep interacting with the suspicious small painting until it comes apart, then repair it.",
    category: "Day 1 Hidden",
    timing: "Preparing the Reception",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Small Repairs hidden achievement painting picture servant room preparing reception repair day 1",
  },
  {
    id: "ruining-the-bouquet",
    name: "Ruining the Bouquet",
    requirement:
      "During Welcoming the Guests, let the goat interfere with the bouquet before finishing and delivering the flowers.",
    category: "Day 1 Hidden",
    timing: "Welcoming the Guests",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Ruining the Bouquet hidden achievement goat flowers bouquet smells like goat day 1 guests",
  },
  {
    id: "serving-matcha-latte",
    name: "Serving Matcha Latte",
    requirement:
      "During Serving Tea, use Rusty's extra interaction to obtain the green powder, then add it to Alexandra's drink before completing the normal tea sequence.",
    category: "Day 1 Hidden",
    timing: "Serving Tea",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#serving-matcha-latte`,
    searchText:
      "Serving Matcha Latte hidden achievement green powder Rusty cat Alexandra tea milk sugar day 1",
  },
  {
    id: "soothing-the-baby",
    name: "Soothing the Baby",
    requirement:
      "During Opening the Reunion, use the Champagne on baby James before finishing the family scene.",
    category: "Day 1 Hidden",
    timing: "Opening the Reunion",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Soothing the Baby hidden achievement James champagne reunion day 1 baby",
  },
  {
    id: "checking-for-intruders",
    name: "Checking for Intruders",
    requirement:
      "During The Night Watch, thoroughly inspect the hallway rounds and correctly handle the strange or abnormal states instead of rushing through them.",
    category: "Day 1 Hidden",
    timing: "The Night Watch",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Checking for Intruders hidden achievement night watch hallway abnormal intruder bell candle day 1",
  },
  {
    id: "chase-away-the-crow",
    name: "Chase away the Crow",
    requirement:
      "During Searching the Attic, interact with the Crow when it appears and chase it away before finishing the Attic route.",
    category: "Day 1 Hidden",
    timing: "Searching the Attic",
    risk: "Low",
    detailHref: `${achievementGuideHref}#day-1-hidden-achievements`,
    searchText:
      "Chase away the Crow hidden achievement attic crow bird day 1 searching attic",
  },

  // ---------------------------------------------------------------------------
  // Day 2 — Story
  // ---------------------------------------------------------------------------

  {
    id: "preparing-coffee",
    name: "Preparing Coffee",
    requirement: "Complete the Day 2 coffee preparation and serving sequence.",
    category: "Day 2 Story",
    timing: "Preparing Coffee",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Preparing Coffee story achievement day 2 coffee Aldous William morning",
  },
  {
    id: "waking-up-william",
    name: "Waking up William",
    requirement: "Complete William's full wake-up sequence.",
    category: "Day 2 Story",
    timing: "Waking up William",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Waking up William story achievement day 2 coffee bedroom morning",
  },
  {
    id: "cleaning-the-floors",
    name: "Cleaning the Floors",
    requirement: "Complete all required hallway floor-cleaning puzzles.",
    category: "Day 2 Story",
    timing: "Cleaning the Floors",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Cleaning the Floors story achievement day 2 hallway dirt floor puzzle",
  },
  {
    id: "going-hunting",
    name: "Going Hunting",
    requirement: "Complete the required Day 2 hunting sequence.",
    category: "Day 2 Story",
    timing: "Going Hunting",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Going Hunting story achievement day 2 rifle hunt animals Aldous",
  },
  {
    id: "doing-the-washing",
    name: "Doing the Washing",
    requirement: "Complete the Laundry task and obtain the progression handoff.",
    category: "Day 2 Story",
    timing: "Doing the Washing",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Doing the Washing story achievement laundry washing clothes bathroom key day 2",
  },
  {
    id: "helping-with-bathing",
    name: "Helping with Bathing",
    requirement: "Complete Alexandra's Bathroom sequence.",
    category: "Day 2 Story",
    timing: "Helping with Bathing",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Helping with Bathing story achievement Alexandra bathroom bronze time piece day 2",
  },
  {
    id: "night-time-duties",
    name: "Night Time Duties",
    requirement: "Complete the Day 2 night assignment and prepare to enter the Cellar.",
    category: "Day 2 Story",
    timing: "Night Time Duties",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Night Time Duties story achievement day 2 three time pieces cellar night",
  },
  {
    id: "inspecting-the-cellar",
    name: "Inspecting the Cellar",
    requirement: "Complete the Cellar and cave sequence at the end of Day 2.",
    category: "Day 2 Story",
    timing: "Inspecting the Cellar",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Inspecting the Cellar story achievement day 2 cave lady of the lake book",
  },

  // ---------------------------------------------------------------------------
  // Day 2 — Hidden
  // ---------------------------------------------------------------------------

  {
    id: "serving-aldous-favorite-coffee",
    name: "Serving Mr. Aldous his Favorite Coffee",
    requirement:
      "During Preparing Coffee, roast the coffee beans before brewing and serve the roasted coffee to Aldous.",
    category: "Day 2 Hidden",
    timing: "Preparing Coffee",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Serving Mr Aldous his Favorite Coffee hidden achievement roasted coffee beans flavor aroma day 2",
  },
  {
    id: "tickling-mr-william",
    name: "Tickling Mr. William",
    requirement:
      "During Waking up William, follow the toe clue and complete the extra tickling interaction before he fully wakes up.",
    category: "Day 2 Hidden",
    timing: "Waking up William",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Tickling Mr William hidden achievement toes feet wake William day 2 morning",
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    requirement:
      "During Cleaning the Floors, find and complete the extra hidden cleaning interaction before leaving the hallway route.",
    category: "Day 2 Hidden",
    timing: "Cleaning the Floors",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Deep Cleaning hidden achievement floor hallway extra dirt cleaning day 2",
  },
  {
    id: "a-perfect-hunt",
    name: "A Perfect Hunt",
    requirement:
      "During Going Hunting, shoot all five listed targets: deer, pheasant, rabbit, pigeon, and boar.",
    category: "Day 2 Hidden",
    timing: "Going Hunting",
    risk: "High",
    detailHref: `${achievementGuideHref}#perfect-hunt`,
    searchText:
      "A Perfect Hunt hidden achievement deer pheasant rabbit pigeon boar shoot all animals day 2",
  },
  {
    id: "close-inspections",
    name: "Close Inspections",
    requirement:
      "During Doing the Washing, perform the extra inspection on the laundry-related objects before finishing the task.",
    category: "Day 2 Hidden",
    timing: "Doing the Washing",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Close Inspections hidden achievement laundry washing inspect clothes objects day 2",
  },
  {
    id: "cleaning-the-windows",
    name: "Cleaning the Windows",
    requirement:
      "During Helping with Bathing, wait for the Bathroom window to steam up, then return to it and complete the extra cleaning interaction.",
    category: "Day 2 Hidden",
    timing: "Helping with Bathing",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Cleaning the Windows hidden achievement bathroom steam fog window Alexandra day 2",
  },
  {
    id: "garbage-disposal",
    name: "Garbage Disposal",
    requirement:
      "During Night Time Duties, complete the optional disposal interaction before committing to the Cellar route.",
    category: "Day 2 Hidden",
    timing: "Night Time Duties",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Garbage Disposal hidden achievement throw dispose garbage night time duties day 2 cellar",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    requirement:
      "During Inspecting the Cellar, investigate the suspicious pest or hole and use the available tool interaction on it before finishing the cave route.",
    category: "Day 2 Hidden",
    timing: "Inspecting the Cellar",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-2-hidden-achievements`,
    searchText:
      "Pest Control hidden achievement cellar pest hole tool hammer stab day 2",
  },

  // ---------------------------------------------------------------------------
  // Day 3 — Story
  // ---------------------------------------------------------------------------

  {
    id: "looking-for-the-cat",
    name: "Looking for the Cat",
    requirement: "Find Rusty and complete the Day 3 cat-search task.",
    category: "Day 3 Story",
    timing: "Looking for the Cat",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Looking for the Cat story achievement Rusty cat search day 3 morning",
  },
  {
    id: "assisting-in-alchemy",
    name: "Assisting in Alchemy",
    requirement: "Complete Aldous's Alchemy sequence and finish the Elixir.",
    category: "Day 3 Story",
    timing: "Assisting in Alchemy",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Assisting in Alchemy story achievement day 3 elixir Aldous laboratory",
  },
  {
    id: "unforeseen-maintenance",
    name: "Unforeseen Maintenance",
    requirement: "Complete the required furniture and estate repairs.",
    category: "Day 3 Story",
    timing: "Unforeseen Maintenance",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Unforeseen Maintenance story achievement day 3 chair portraits furniture repairs",
  },
  {
    id: "preparing-dinner",
    name: "Preparing Dinner",
    requirement: "Finish the soup, potatoes, and cake required for dinner.",
    category: "Day 3 Story",
    timing: "Preparing Dinner",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Preparing Dinner story achievement soup potatoes cake kitchen day 3",
  },
  {
    id: "dressing-up-for-dinner",
    name: "Dressing up for Dinner",
    requirement: "Complete the evening dressing and preparation sequence.",
    category: "Day 3 Story",
    timing: "Dressing up for Dinner",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Dressing up for Dinner story achievement day 3 evening outfit tie hat",
  },
  {
    id: "serving-dinner",
    name: "Serving Dinner",
    requirement: "Complete the final family dinner sequence.",
    category: "Day 3 Story",
    timing: "Serving Dinner",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "Serving Dinner story achievement day 3 final dinner Vanderboom family",
  },
  {
    id: "the-departure",
    name: "The Departure",
    requirement: "Complete the normal ending route and leave the Vanderboom estate.",
    category: "Day 3 Story",
    timing: "The Departure",
    risk: "None",
    detailHref: `${achievementGuideHref}#story-achievements`,
    searchText:
      "The Departure story achievement ending day 3 escape normal ending",
  },

  // ---------------------------------------------------------------------------
  // Day 3 — Hidden
  // ---------------------------------------------------------------------------

  {
    id: "petting-the-cat",
    name: "Petting the Cat",
    requirement:
      "During Looking for the Cat, pet Rusty after finding him and before finishing the search task.",
    category: "Day 3 Hidden",
    timing: "Looking for the Cat",
    risk: "Low",
    detailHref: `${achievementGuideHref}#day-3-hidden-achievements`,
    searchText:
      "Petting the Cat hidden achievement Rusty pet cat day 3 looking for cat",
  },
  {
    id: "animal-testing",
    name: "Animal testing",
    requirement:
      "During Assisting in Alchemy, make the Elixir and use it on Harvey before completing the normal Alchemy handoff.",
    category: "Day 3 Hidden",
    timing: "Assisting in Alchemy",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-3-hidden-achievements`,
    searchText:
      "Animal testing hidden achievement Harvey bird elixir alchemy day 3",
  },
  {
    id: "checking-the-furniture",
    name: "Checking the Furniture",
    requirement:
      "During the Day 3 maintenance memory, inspect the furniture before finishing the normal repair task and interact with the suspicious hidden spot until the concealed note appears.",
    category: "Day 3 Hidden",
    timing: "Unforeseen Maintenance",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#checking-the-furniture`,
    searchText:
      "Checking the Furniture hidden achievement furniture concealed note hidden spot maintenance day 3",
  },
  {
    id: "seasoning-the-soup",
    name: "Seasoning the Soup",
    requirement:
      "During Preparing Dinner, catch the fly, keep the dead fly, and put it into the soup before the dinner preparation is finalized.",
    category: "Day 3 Hidden",
    timing: "Preparing Dinner",
    risk: "High",
    detailHref: `${achievementGuideHref}#day-3-hidden-achievements`,
    searchText:
      "Seasoning the Soup hidden achievement dead fly soup dinner kitchen day 3",
  },
  {
    id: "finishing-touch",
    name: "Finishing Touch",
    requirement:
      "During Dressing up for Dinner, obtain the fish pin and give it to William instead of keeping it.",
    category: "Day 3 Hidden",
    timing: "Dressing up for Dinner",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#finishing-touch`,
    searchText:
      "Finishing Touch hidden achievement fish pin William dressing dinner day 3",
  },
  {
    id: "safety-test",
    name: "Safety Test",
    requirement:
      "During the Serving Dinner setup, perform the optional safety check on the prepared object before moving into the final meal.",
    category: "Day 3 Hidden",
    timing: "Serving Dinner",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#day-3-hidden-achievements`,
    searchText:
      "Safety Test hidden achievement serving dinner safety check sturdy object day 3 evening",
  },
  {
    id: "first-aid",
    name: "First Aid",
    requirement:
      "During The Departure, stop at the injured William sequence and fully complete the optional treatment before continuing the escape.",
    category: "Day 3 Hidden",
    timing: "The Departure",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#first-aid`,
    searchText:
      "First Aid hidden achievement William injured treatment water departure day 3 ending",
  },

  // ---------------------------------------------------------------------------
  // Post-game Secret
  // ---------------------------------------------------------------------------

  {
    id: "youve-found-him",
    name: "You've found him!",
    requirement:
      "Complete Kate's post-game missing-brother investigation through the replayed memories and reach the final hidden location.",
    category: "Secret",
    timing: "Post-game Secret Location",
    risk: "Very High",
    detailHref: "/servant-of-the-lake/secret-ending",
    searchText:
      "You've found him secret achievement Kate brother secret ending hidden location 4:05 clock telescope castle post game",
  },
];