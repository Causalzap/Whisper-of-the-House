import type { ChecklistItem } from "@/data/checklists/types";

type RawAchievement = readonly [
  name: string,
  requirement: string,
  steamRate: string,
  category: string,
  timing: string,
  risk: "Low" | "Medium" | "High",
  detailHref: string,
];

// Snapshot of the 37 achievement descriptions and completion rates supplied for October 2026.
// Preserve each achievement ID when updating descriptions or adding route details.
const rawAchievements: RawAchievement[] = [
  ["Corporate Exercise", "Pass the Wellness Check", "100.0%", "Story", "Opening", "Low", "#story-milestones"],
  ["The World of Tomorrow", "Awoke in a new world", "100.0%", "Story", "Opening", "Low", "#story-milestones"],
  ["Smooth Moves", "Perform a crouch slide", "90.7%", "Optional Action", "Anytime", "Low", "#early-optional"],
  ["Micromanagement", "Created a brand new access card", "88.6%", "Story", "Shrinking Laboratory", "Low", "#story-milestones"],
  ["'Morrow's Miracles", "Obtained an experimental Norček prototype", "86.2%", "Story", "Prototype Testing", "Low", "#story-milestones"],
  ["All Matters Exotic", "Arrived at the Exotic Matter Laboratory", "77.7%", "Story", "Exotic Matter Laboratory", "Low", "#story-milestones"],
  ["Onwards and Upwards", "Activated the Cargo Elevator", "66.2%", "Story", "Cargo Elevator", "Low", "#story-milestones"],
  ["This is fine", "Arrived at the Particle Accelerator Terminus", "59.6%", "Story", "Particle Accelerator", "Low", "#story-milestones"],
  ["MAGNETS!", "Reactivated a Magnetic Stabilizer", "56.9%", "Story", "Magnetic Stabilizer", "Low", "#story-milestones"],
  ["Referral Bonus", "Invite a friend to play We Were Here Tomorrow", "51.2%", "Optional Action", "Before or during co-op", "Medium", "#early-optional"],
  ["Goop Lookin'", "Gooped your partner", "43.3%", "Prototype Interaction", "After Goop Gun unlock", "Low", "#prototype-achievements"],
  ["Now I’m Hooked", "Hooked your partner", "40.6%", "Prototype Interaction", "After Hook Gun unlock", "Low", "#prototype-achievements"],
  ["Christmas Riot", "You found a highly sought after toy - Don’t let your partner see it", "39.5%", "Toy / Collectible", "Explore optional rooms", "High", "#christmas-riot"],
  ["Any Colour You Like", "Reactivated the targeting array", "36.1%", "Story", "Laser Calibration", "Low", "#story-milestones"],
  ["Spiraling", "Gained access to Gravitonics", "29.4%", "Story", "After Laser Calibration", "Low", "#story-milestones"],
  ["Relativity", "Explored impossible staircases", "21.3%", "Story", "Gravitonics", "Low", "#story-milestones"],
  ["Ensnared Potential", "Turned the particle accelerator on", "19.6%", "Story", "Particle Accelerator", "Low", "#story-milestones"],
  ["Recon & Disclose", "Arrived on the second floor of R&D Headquarters", "18.3%", "Story", "R&D Headquarters", "Low", "#story-milestones"],
  ["Turn It Off And On Again", "Restored power to R&D Headquarters", "7.4%", "Story", "R&D Power Network", "Low", "#story-milestones"],
  ["Double Time", "Obtained an upgraded Norček prototype", "6.1%", "Story", "R&D Upgrade", "Low", "#story-milestones"],
  ["A Matter of Time", "Arrived at the Temporal Research Centre", "5.5%", "Story", "Temporal Research Centre", "Low", "#story-milestones"],
  ["Many Ways", "Activated the Cargo Elevator without using a Fuse", "3.4%", "Alternative Objective", "Cargo Elevator", "High", "#many-ways"],
  ["You’re Chatty for a Statue", "Use the Goop Gun to lock your partner in place", "2.3%", "Prototype Interaction", "After Goop Gun unlock", "Medium", "#prototype-achievements"],
  ["Danger! High Voltage", "Use the Hook Gun to grapple to an Energized surface", "2.2%", "Prototype Interaction", "When energized surfaces are accessible", "Medium", "#prototype-achievements"],
  ["Knowledge Transfer", "Restored power to the Temporal Research Centre", "1.3%", "Story", "Temporal Research Centre", "Low", "#story-milestones"],
  ["Forward to the Past", "Adventured through the TRC Construction Site", "1.1%", "Story", "TRC Construction Site", "Low", "#story-milestones"],
  ["All Grown Up", "Cultivated a Battery Bulb", "0.6%", "Research Objective", "Xenobotany", "Medium", "#late-research"],
  ["Once More", "Geared up for one more adventure", "0.4%", "Story", "Late Research", "Low", "#story-milestones"],
  ["Through the Looking Glass", "Ventured Beyond the Rift", "0.4%", "Story", "Beyond the Rift", "Low", "#story-milestones"],
  ["Eternal Recurrence", "Got stuck in a time loop", "0.3%", "Story", "Time Rewind", "Low", "#story-milestones"],
  ["We Are Friends!", "Got acquainted with an alien lifeform", "0.3%", "Research Objective", "Later Journey", "Medium", "#late-research"],
  ["Dawn of Tomorrow", "Secured Rift Zero", "0.2%", "Ending", "Rift Zero final choice", "High", "#rift-zero-endings"],
  ["Farpoint", "Discovered the Human Outpost", "0.2%", "Story", "Later Journey", "Low", "#story-milestones"],
  ["Tomorrow May Never Come", "Closed Rift Zero", "0.2%", "Ending", "Rift Zero final choice", "High", "#rift-zero-endings"],
  ["Class 1 Hoarder", "Collect all unique plushies", "0.1%", "Toy / Collectible", "Across multiple areas", "High", "#plushies"],
  ["Essentia Emendare", "Finished the expedition team’s project", "0.1%", "Research Objective", "Later Journey", "Medium", "#late-research"],
  ["Why So Molecular?", "Restored power to the Theta Splice device", "0.1%", "Research Objective", "Later Journey", "Medium", "#late-research"],
];

function createAchievementId(name: string): string {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const weWereHereTomorrowAchievementChecklistItems: ChecklistItem[] =
  rawAchievements.map(([name, requirement, steamRate, category, timing, risk, detailHref]) => ({
    id: createAchievementId(name),
    name,
    requirement,
    category,
    steamRate,
    timing,
    risk,
    detailHref,
    searchText: `${name} ${requirement} ${category} ${timing} We Were Here Tomorrow achievement`,
  }));
