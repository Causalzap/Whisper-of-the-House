
import type { ChecklistItem } from "@/data/checklists/types";

// Dungeonbound achievements — November 18, 2026 snapshot.
// Preserve Steam's unique achievement IDs. Display names are NOT unique.
// Columns: ID | Display name | Requirement | Steam unlock rate

const rawAchievementData = `
RL_RIVALS_10|Challenger|Beat 10 PvP players|72.3%
RL_BLEED_JEIKU|First Cut|Apply Bleed to 10 different enemies|70.9%
RL_HERO_PALADIN|Laying on Hands|Heal 5000 HP in climbs|58.9%
RL_HERO_SNUFFY|Quick Paws|Reach 20 Speed in a climb|58.2%
RL_HALLOWEEN_HAUNTED|Haunted House|Buy 13 haunted items from shops|52.8%
RL_RIVALS_50|Duelist|Beat 50 PvP players|49.5%
RL_RELICS_15|Reliquarian|Claim 15 relics|49.3%
RL_REROLLS_50|Restless|Reroll the shop 50 times|43.7%
RL_BUY_150|Hoarder|Buy 150 items from shops|40.1%
RL_SELL_100|Merchant|Sell 100 items|36.6%
RL_RIVALS_100|Undisputed|Beat 100 PvP players|35.9%
RL_BEAT_ACT_1|First Steps|Beat Act 1|35.0%
INFLICT_100|Afflicter|Inflict 100 status effects|32.4%
RL_FUSE_20|Apprentice Smith|Fuse 20 items|32.1%
RL_RIVAL_DEATHS_25|Fallen|Die to 25 PvP players|29.2%
FUSE_5|Alchemist|Fuse 5 items at the forge|28.4%
KILL_100|Slayer|Kill 100 enemies|27.7%
INFLICT_500|Plaguebringer|Inflict 500 status effects|27.6%
UPGRADES_10|Apprentice Smith|Upgrade items 10 times|27.3%
STATUS_DMG_5000|Slow Death|Deal 5000 damage with status effects|25.7%
VAMPIRES_7|Van Helsing|Kill 7 vampires|25.6%
ELITES_25|Elite Hunter|Kill 25 elite enemies|24.3%
RL_REROLLS_150|High Roller|Reroll shops 150 times|23.3%
RL_FLOOR_10|High Ground|Reach floor 10 in a climb|22.2%
RL_VAMPIRE_PACT|Blood Pact|Beat 10 vampiric enemies and collect 10 vampiric items|21.6%
DEMONS_50|Demonbane|Kill 50 demons|21.1%
ITEM_LV5|Refinement|Get an item to level 5|20.4%
CLEAR_ALL|Dungeonbound|Clear all 5 dungeons|20.3%
VOID_REALM|Into the Void|Clear Act 5, The Dungeon|20.3%
RL_KING_500K|Death's Door|Deal 500,000 damage to Death in one fight|19.8%
RL_HERO_ACHLYS|Venom Collector|Buy 10 poison weapons|19.2%
RL_MONSTERS_150|Beast Hunter|Kill 150 monsters in climbs|18.9%
FUSE_15|Master Melder|Fuse 15 items at the forge|17.7%
RL_FLOOR_12|Deep Delver|Reach floor 12 in a climb|17.4%
RL_WINS_3|Veteran|Win 3 climbs (beat floor 8)|16.8%
COOP_ROYAL_AEGIS|Shield of the Court|Reach 10 new floors in co-op climbs|16.7%
BOSSES_10|Regicide|Kill 10 bosses|13.9%
RL_FLOOR_15|Abyss Walker|Reach floor 15 in a climb|13.8%
RL_FUSE_50|Forgemaster|Fuse 50 items|13.7%
COOP_ROYAL_BLADE|Sword of the Court|Give 5 items to teammates|13.7%
RL_KING_1M|Cheating Death|Deal 1,000,000 damage to Death in one fight|13.4%
BEASTS_100|Beast Tamer|Kill 100 beasts|13.1%
COOP_FLOORS_20|Shoulder to Shoulder|Reach 20 new floors in co-op climbs|12.7%
RL_HALLOWEEN_BUTCHER|Carving Night|Win a climb with Pumpkin Head (beat floor 8)|12.6%
GOBLINS_100|Warren Cleaner|Kill 100 Earth enemies|12.6%
ITEM_LV7|Tempering|Get an item to level 7|12.4%
RL_HERO_BLACK_KNIGHT|Broken Oath|Defeat the Flame Knight in Act 2|11.8%
COOP_GIFTS_10|Open Hand|Give 10 items to teammates|11.4%
RL_WIN_RL_WARRIOR|Crusade|Win a climb with Joshua (beat floor 8)|11.2%
RL_WINS_5|Veteran Climber|Win 5 climbs (beat floor 8)|11.1%
DRAGONS_25|Dragonslayer|Kill 25 dragons|10.0%
UNDEAD_100|Gravecleaner|Kill 100 undead|9.9%
CURSE_5|Dark Bargainer|Curse 5 items|9.8%
RL_DEATHS_100|Undying|Die 100 times in climbs|9.7%
UPGRADES_50|Master Smith|Upgrade items 50 times|8.9%
KILL_500|Butcher|Kill 500 enemies|8.7%
RL_RUNES_20|Runecarver|Earn 20 runes|8.3%
RL_WIN_RL_ARCHER|True Aim|Win a climb with the Windrunner (beat floor 8)|8.3%
COOP_WIN_1|War Band|Win a co-op climb (beat floor 8 as a team)|8.3%
DIE_10|Persistence|Die 10 times|8.1%
RL_HERO_MAKKEN|Stake Through the Heart|Defeat Makken in Act 3|7.7%
COOP_PRISM_DAGGER|Through the Glass|Give 30 items to teammates|7.4%
COOP_ROYAL_LONGBOW|Bow of the Court|Win 2 co-op climbs (beat floor 8 as a team)|6.7%
ITEM_LV10|Perfection|Get an item to level 10|6.6%
RL_HERO_HADES|Gates of the Underworld|Beat Act 3|6.1%
RL_MONSTERS_400|Exterminator|Kill 400 monsters in climbs|5.9%
RL_WIN_FIRE_ANGEL|Holy Fire|Win a climb with the Paladin (beat floor 8)|5.5%
RL_WIN_WYRMBLOOD|Dragonborn|Win a climb with Sansara (beat floor 8)|5.4%
RL_WIN_GALE_DANCER|Eye of the Storm|Win a climb with Snuffy (beat floor 8)|5.4%
RL_WIN_BLOOD_COUNTESS|Blood Moon|Win a climb with Makken (beat floor 8)|4.8%
RL_WIN_STORMCALLER|Thunderhead|Win a climb with the Valkyrie (beat floor 8)|3.7%
UPGRADES_100|Grandmaster Smith|Upgrade items 100 times|3.5%
RL_HERO_THIEF|Thick as Thieves|Defeat 25 Thieves|2.7%
RL_FINAL_BOSS|Kingslayer|Defeat the King in Act 5|2.6%
RL_HERO_SANSARA|Wyrm's Awakening|Beat Act 5|2.5%
RL_WIN_FLAME_KNIGHT|Knight's Oath|Win a climb with the Black Knight (beat floor 8)|2.1%
RL_HERO_ATLAS|Toppled Titan|Defeat Atlas in Act 5|1.9%
CURSE_15|Hexbound|Curse 15 items|1.4%
RL_WIN_GRAVEWARDEN|Long Winter|Win a climb with Hades (beat floor 8)|1.4%
RUNS_25|Veteran Delver|Start 25 runs|1.3%
RL_WIN_IRONCLAD|Unbroken|Win a climb with Atlas (beat floor 8)|1.1%
RL_KING_1B|Death Defier|Deal 1,000,000,000 damage to Death in one fight|0.9%
RL_WIN_RELIC_HUNTER|Treasure Seeker|Win a climb with the Thief (beat floor 8)|0.8%
KILL_2000|Exterminator|Kill 2000 enemies|0.5%
`.trim();

type AchievementCategory =
  | "Story & Acts"
  | "Hero Wins"
  | "Climb & Rivals"
  | "Forge & Equipment"
  | "Combat & Enemies"
  | "Shops & Loot"
  | "Co-op"
  | "Death Challenges";

const storyActIds = new Set([
  "RL_BEAT_ACT_1",
  "CLEAR_ALL",
  "VOID_REALM",
  "RL_HERO_BLACK_KNIGHT",
  "RL_HERO_MAKKEN",
  "RL_HERO_HADES",
  "RL_FINAL_BOSS",
  "RL_HERO_SANSARA",
  "RL_HERO_ATLAS",
]);

const shopLootIds = new Set([
  "RL_HALLOWEEN_HAUNTED",
  "RL_RELICS_15",
  "RL_REROLLS_50",
  "RL_BUY_150",
  "RL_SELL_100",
  "RL_REROLLS_150",
  "RL_VAMPIRE_PACT",
  "RL_HERO_ACHLYS",
]);

const highEffortIds = new Set([
  "RL_KING_1B",
  "RL_FLOOR_15",
  "RL_FINAL_BOSS",
  "RL_HERO_ATLAS",
  "RL_WIN_IRONCLAD",
  "RL_WIN_GRAVEWARDEN",
  "RL_WIN_RELIC_HUNTER",
  "RL_MONSTERS_400",
  "KILL_2000",
  "UPGRADES_100",
  "COOP_ROYAL_LONGBOW",
]);

function categoryFor(id: string): AchievementCategory {
  if (storyActIds.has(id)) return "Story & Acts";

  if (id.startsWith("RL_WIN_") || id === "RL_HALLOWEEN_BUTCHER") {
    return "Hero Wins";
  }

  if (id.startsWith("COOP_")) return "Co-op";

  if (id.startsWith("RL_KING_")) return "Death Challenges";

  if (
    /^(RL_FUSE_|FUSE_|UPGRADES_|ITEM_LV|CURSE_|RL_RUNES_)/.test(id)
  ) {
    return "Forge & Equipment";
  }

  if (shopLootIds.has(id)) return "Shops & Loot";

  if (
    /^(RL_RIVALS_|RL_RIVAL_DEATHS_|RL_MONSTERS_|RL_FLOOR_|RL_WINS_|RL_DEATHS_|RUNS_|DIE_)/.test(
      id
    )
  ) {
    return "Climb & Rivals";
  }

  return "Combat & Enemies";
}

const sectionByCategory: Record<AchievementCategory, string> = {
  "Story & Acts": "#act-boss-achievements",
  "Hero Wins": "#hero-win-achievements",
  "Climb & Rivals": "#climb-achievements",
  "Forge & Equipment": "#forge-achievements",
  "Combat & Enemies": "#combat-achievements",
  "Shops & Loot": "#shop-achievements",
  "Co-op": "#coop-achievements",
  "Death Challenges": "#death-achievements",
};

const timingByCategory: Record<AchievementCategory, string> = {
  "Story & Acts": "Act progression",
  "Hero Wins": "Hero-specific Climb",
  "Climb & Rivals": "Climb progression",
  "Forge & Equipment": "Equipment progression",
  "Combat & Enemies": "Combat milestones",
  "Shops & Loot": "Shopping & collection",
  "Co-op": "Co-op",
  "Death Challenges": "Single fight",
};

// Editorial planning flags, not confirmed missability ratings.
function riskFor(
  id: string,
  category: AchievementCategory
): "Low" | "Medium" | "High" {
  if (highEffortIds.has(id)) return "High";

  if (
    category === "Hero Wins" ||
    category === "Co-op" ||
    category === "Death Challenges" ||
    category === "Story & Acts"
  ) {
    return "Medium";
  }

  return "Low";
}

export const dungeonboundAchievementChecklistItems: ChecklistItem[] =
  rawAchievementData.split("\n").map((line) => {
    const parts = line.split("|");

    if (parts.length !== 4) {
      throw new Error(`Invalid Dungeonbound achievement row: ${line}`);
    }

    const [id, name, requirement, steamRate] = parts;
    const category = categoryFor(id);

    return {
      id,
      name,
      requirement,
      steamRate,
      category,
      timing: timingByCategory[category],
      risk: riskFor(id, category),
      detailHref: sectionByCategory[category],
      searchText: `${name} ${requirement} ${category} ${timingByCategory[category]} Dungeonbound achievement`,
    };
  });

// Guard against missing records or duplicate achievement IDs.
// Display names may repeat, but IDs must never repeat.
if (dungeonboundAchievementChecklistItems.length !== 84) {
  throw new Error(
    `Expected 84 Dungeonbound achievements, found ${dungeonboundAchievementChecklistItems.length}`
  );
}

const achievementIds = dungeonboundAchievementChecklistItems.map(
  (item) => item.id
);

if (new Set(achievementIds).size !== 84) {
  throw new Error("Duplicate Dungeonbound achievement IDs detected");
}
