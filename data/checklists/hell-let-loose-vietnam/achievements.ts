import type { ChecklistItem } from "@/data/checklists/types";

const achievementGuideHref = "/hell-let-loose-vietnam/achievements";

export const hellLetLooseVietnamAchievementChecklistItems: ChecklistItem[] = [
  // ---------------------------------------------------------------------------
  // Early & Training
  // ---------------------------------------------------------------------------

  {
    id: "welcome-to-nam",
    name: "Welcome to 'Nam",
    requirement: "Kill your first enemy.",
    category: "Early & Training",
    timing: "Any Match",
    risk: "None",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Welcome to Nam achievement kill first enemy first kill beginner combat",
  },
  {
    id: "unlock-your-potential",
    name: "Unlock your Potential",
    requirement: 'Complete the "Getting Started" tutorial.',
    category: "Early & Training",
    timing: "Basic Training",
    risk: "None",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Unlock your Potential achievement Getting Started tutorial Basic Training",
  },
  {
    id: "liberation",
    name: "Liberation",
    requirement: "Win a match as the NVA.",
    category: "Early & Training",
    timing: "NVA Match",
    risk: "None",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Liberation achievement win as NVA faction victory Vietnam",
  },
  {
    id: "fire-and-fiery",
    name: "Fire and Fiery",
    requirement: "Win a match as the US.",
    category: "Early & Training",
    timing: "US Match",
    risk: "None",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Fire and Fiery achievement win as US USA faction victory Vietnam",
  },
  {
    id: "let-loose",
    name: "Let Loose",
    requirement: "Win back-to-back matches.",
    category: "Early & Training",
    timing: "Two Consecutive Matches",
    risk: "Low",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Let Loose achievement win back to back consecutive matches two wins",
  },
  {
    id: "rigorous-training",
    name: "Rigorous Training",
    requirement: "Complete 4 different tutorials.",
    category: "Early & Training",
    timing: "Basic Training",
    risk: "Low",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Rigorous Training achievement complete 4 different tutorials Basic Training",
  },
  {
    id: "pursuit-of-perfection",
    name: "Pursuit of Perfection",
    requirement: "Complete 8 different tutorials.",
    category: "Early & Training",
    timing: "Basic Training",
    risk: "Low",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Pursuit of Perfection achievement complete 8 different tutorials Basic Training",
  },
  {
    id: "surprise-attack",
    name: "Surprise Attack",
    requirement: "Use a Tunnel for the first time.",
    category: "Early & Training",
    timing: "NVA Tunnel Network",
    risk: "Low",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Surprise Attack achievement use Tunnel first time NVA fast travel",
  },
  {
    id: "going-dark",
    name: "Going Dark",
    requirement: "Build your first Tunnel.",
    category: "Early & Training",
    timing: "NVA Squad Leader or Commander",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#best-100-percent-route`,
    searchText:
      "Going Dark achievement build first Tunnel NVA Squad Leader Commander Field Pad",
  },

  // ---------------------------------------------------------------------------
  // Hidden
  // ---------------------------------------------------------------------------

  {
    id: "caved-in",
    name: "Caved In",
    requirement: "Dismantle an enemy Tunnel.",
    category: "Hidden",
    timing: "Against NVA",
    risk: "High",
    detailHref: `${achievementGuideHref}#caved-in`,
    searchText:
      "Caved In hidden achievement dismantle destroy enemy NVA Tunnel",
  },
  {
    id: "shipwrecked",
    name: "Shipwrecked",
    requirement: "Kill an enemy player with a boat.",
    category: "Hidden",
    timing: "Boat Combat",
    risk: "High",
    detailHref: `${achievementGuideHref}#shipwrecked`,
    searchText:
      "Shipwrecked hidden achievement kill enemy player with boat boat kill",
  },
  {
    id: "death-from-below",
    name: "Death From Below",
    requirement:
      "Kill an airborne helicopter pilot while they are still seated in the aircraft.",
    category: "Hidden",
    timing: "Enemy Helicopter Airborne",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#death-from-below`,
    searchText:
      "Death From Below hidden achievement kill airborne helicopter pilot seated pilot snipe",
  },
  {
    id: "eagle-has-landed",
    name: "Eagle Has Landed",
    requirement: "Destroy an enemy helicopter.",
    category: "Hidden",
    timing: "Enemy Helicopter",
    risk: "High",
    detailHref: `${achievementGuideHref}#eagle-has-landed`,
    searchText:
      "Eagle Has Landed hidden achievement destroy enemy helicopter chopper",
  },

  // ---------------------------------------------------------------------------
  // Combat
  // ---------------------------------------------------------------------------

  {
    id: "bloodthirsty",
    name: "Bloodthirsty",
    requirement: "Kill 5 players without dying.",
    category: "Combat",
    timing: "One Life",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#one-match-achievements`,
    searchText:
      "Bloodthirsty achievement kill 5 players without dying kill streak five",
  },
  {
    id: "relentless",
    name: "Relentless",
    requirement: "Kill 12 players without dying.",
    category: "Combat",
    timing: "One Life",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#one-match-achievements`,
    searchText:
      "Relentless achievement kill 12 players without dying twelve kill streak",
  },
  {
    id: "stick-around",
    name: "Stick Around",
    requirement: "Get a bayonet kill.",
    category: "Combat",
    timing: "Bayonet-equipped Loadout",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#long-cleanup`,
    searchText:
      "Stick Around achievement bayonet kill melee bayonet enemy",
  },
  {
    id: "marksman",
    name: "Marksman",
    requirement: "Get a total of 100 headshots.",
    category: "Combat",
    timing: "Cumulative",
    risk: "High",
    detailHref: `${achievementGuideHref}#long-cleanup`,
    searchText:
      "Marksman achievement 100 headshots total headshot kills cumulative",
  },
  {
    id: "dont-look-down",
    name: "Don’t Look Down",
    requirement: "Destroy a vehicle with an AT mine.",
    category: "Combat",
    timing: "AT Mine Loadout",
    risk: "High",
    detailHref: `${achievementGuideHref}#long-cleanup`,
    searchText:
      "Don't Look Down achievement destroy vehicle AT mine anti tank mine",
  },
  {
    id: "demolition-man",
    name: "Demolition Man",
    requirement: "Detonate a total of 10 satchel charges that you placed.",
    category: "Combat",
    timing: "Cumulative",
    risk: "High",
    detailHref: `${achievementGuideHref}#long-cleanup`,
    searchText:
      "Demolition Man achievement detonate 10 satchel charges placed by you",
  },
  {
    id: "fubar",
    name: "F.U.B.A.R",
    requirement: "Destroy a vehicle with an Artillery Strike or Mortar.",
    category: "Combat",
    timing: "Artillery or Mortar",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#long-cleanup`,
    searchText:
      "FUBAR achievement destroy vehicle artillery strike mortar vehicle kill",
  },
  {
    id: "is-it-a-bird",
    name: "Is it a Bird?",
    requirement: "Get a total of 100 kills with Artillery.",
    category: "Combat",
    timing: "Cumulative Artillery",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#long-cleanup`,
    searchText:
      "Is it a Bird achievement 100 artillery kills total artillery gun",
  },

  // ---------------------------------------------------------------------------
  // Boats
  // ---------------------------------------------------------------------------

  {
    id: "floater",
    name: "Floater",
    requirement: "Drive a boat for 3 minutes in one match.",
    category: "Boats",
    timing: "One Match",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#one-match-achievements`,
    searchText:
      "Floater achievement drive boat 3 minutes one match three minutes",
  },
  {
    id: "gonna-need-another-boat",
    name: "Gonna Need Another Boat",
    requirement: "Destroy an enemy boat.",
    category: "Boats",
    timing: "Enemy Boat",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#shipwrecked`,
    searchText:
      "Gonna Need Another Boat achievement destroy enemy boat patrol boat",
  },

  // ---------------------------------------------------------------------------
  // Helicopters
  // ---------------------------------------------------------------------------

  {
    id: "flight-of-the-valkyrie",
    name: "Flight of the Valkyrie",
    requirement: "Pilot a helicopter for 3 minutes in one match.",
    category: "Helicopters",
    timing: "One Match as Pilot",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#pilot-achievements`,
    searchText:
      "Flight of the Valkyrie achievement pilot chopper helicopter 3 minutes one match",
  },
  {
    id: "lz-not-secure",
    name: "LZ Not Secure",
    requirement:
      "As a Pilot, drop 30 friendly troops into enemy territory.",
    category: "Helicopters",
    timing: "Transport Helicopter",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#pilot-achievements`,
    searchText:
      "LZ Not Secure achievement pilot drop 30 friendly troops enemy territory transport helicopter",
  },

  // ---------------------------------------------------------------------------
  // Building & Support
  // ---------------------------------------------------------------------------

  {
    id: "can-we-fix-it",
    name: "Can we fix it?",
    requirement: "Build or upgrade 30 objects or structures in one match.",
    category: "Building & Support",
    timing: "One Match",
    risk: "High",
    detailHref: `${achievementGuideHref}#one-match-achievements`,
    searchText:
      "Can we fix it achievement build upgrade 30 objects structures one match Engineer",
  },
  {
    id: "guardian-angel",
    name: "Guardian Angel",
    requirement:
      "As a Medic, drag a wounded ally 20 meters in one continuous attempt.",
    category: "Building & Support",
    timing: "Medic",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#guardian-angel`,
    searchText:
      "Guardian Angel achievement Medic drag wounded ally 20 meters one attempt body drag",
  },

  // ---------------------------------------------------------------------------
  // Map Wins
  // ---------------------------------------------------------------------------

  {
    id: "re-port-for-duty",
    name: "Re-Port for Duty",
    requirement: "Win 3 matches on Cam Ranh Port.",
    category: "Map Wins",
    timing: "Cam Ranh Port",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#map-win-achievements`,
    searchText:
      "Re-Port for Duty achievement win 3 matches Cam Ranh Port map",
  },
  {
    id: "operation-starlite",
    name: "Operation Starlite",
    requirement: "Win 3 matches on Vạn Tường.",
    category: "Map Wins",
    timing: "Vạn Tường",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#map-win-achievements`,
    searchText:
      "Operation Starlite achievement win 3 matches Van Tuong Vạn Tường map",
  },
  {
    id: "track-record",
    name: "Track Record",
    requirement: "Win 3 matches on Thanh Hòa Bridge.",
    category: "Map Wins",
    timing: "Thanh Hòa Bridge",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#map-win-achievements`,
    searchText:
      "Track Record achievement win 3 matches Thanh Hoa Bridge Thanh Hòa map",
  },
  {
    id: "the-main-strip",
    name: "The Main Strip",
    requirement: "Win 3 matches on Đăk Tô Airfield.",
    category: "Map Wins",
    timing: "Đăk Tô Airfield",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#map-win-achievements`,
    searchText:
      "The Main Strip achievement win 3 matches Dak To Airfield Đăk Tô map",
  },
  {
    id: "on-the-cliff",
    name: "On the Cliff!",
    requirement: "Win 3 matches on Quảng Ngãi.",
    category: "Map Wins",
    timing: "Quảng Ngãi",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#map-win-achievements`,
    searchText:
      "On the Cliff achievement win 3 matches Quang Ngai Quảng Ngãi map",
  },
  {
    id: "no-quarter-near-hue",
    name: "No Quarter Near Hue",
    requirement: "Win 3 matches on Huế Outskirts.",
    category: "Map Wins",
    timing: "Huế Outskirts",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#map-win-achievements`,
    searchText:
      "No Quarter Near Hue achievement win 3 matches Hue Outskirts Huế map",
  },

  // ---------------------------------------------------------------------------
  // Mode Wins
  // ---------------------------------------------------------------------------

  {
    id: "conquest-victory",
    name: "Conquest Victory!",
    requirement: "Win 20 Conquest Battles.",
    category: "Mode Wins",
    timing: "Conquest",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#game-mode-wins`,
    searchText:
      "Conquest Victory achievement win 20 Conquest battles matches mode",
  },
  {
    id: "domination-victory",
    name: "Domination Victory!",
    requirement: "Win 20 Domination Battles.",
    category: "Mode Wins",
    timing: "Domination",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#game-mode-wins`,
    searchText:
      "Domination Victory achievement win 20 Domination battles matches mode",
  },
  {
    id: "offensive-victory",
    name: "Offensive Victory!",
    requirement: "Win 20 Offensive Battles.",
    category: "Mode Wins",
    timing: "Offensive",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#game-mode-wins`,
    searchText:
      "Offensive Victory achievement win 20 Offensive battles matches mode",
  },
  {
    id: "warfare-victory",
    name: "Warfare Victory!",
    requirement: "Win 20 Warfare Battles.",
    category: "Mode Wins",
    timing: "Warfare",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#game-mode-wins`,
    searchText:
      "Warfare Victory achievement win 20 Warfare battles matches mode",
  },

  // ---------------------------------------------------------------------------
  // Role Progression
  // ---------------------------------------------------------------------------

  {
    id: "alfa-one",
    name: "Alfa One",
    requirement: "Advance 1 Role to Level 5.",
    category: "Role Progression",
    timing: "Role Progression",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#role-level-five`,
    searchText:
      "Alfa One achievement advance 1 role level 5 role progression",
  },
  {
    id: "charlie-three",
    name: "Charlie Three",
    requirement: "Advance 3 Roles to Level 5.",
    category: "Role Progression",
    timing: "Role Progression",
    risk: "High",
    detailHref: `${achievementGuideHref}#role-level-five`,
    searchText:
      "Charlie Three achievement advance 3 roles level 5 role progression",
  },
  {
    id: "foxtrot-six",
    name: "Foxtrot Six",
    requirement: "Advance 6 Roles to Level 5.",
    category: "Role Progression",
    timing: "Role Progression",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#role-level-five`,
    searchText:
      "Foxtrot Six achievement advance 6 roles level 5 role progression",
  },
  {
    id: "lima-one-two",
    name: "Lima One Two",
    requirement: "Advance 12 Roles to Level 5.",
    category: "Role Progression",
    timing: "Role Progression",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#role-level-five`,
    searchText:
      "Lima One Two achievement advance 12 roles level 5 role progression twelve roles",
  },

  // ---------------------------------------------------------------------------
  // Career
  // ---------------------------------------------------------------------------

  {
    id: "the-tenth-step",
    name: "The Tenth Step",
    requirement: "Reach Career Level 10.",
    category: "Career",
    timing: "Cumulative",
    risk: "None",
    detailHref: `${achievementGuideHref}#career-levels`,
    searchText:
      "The Tenth Step achievement career level 10 ten progression",
  },
  {
    id: "beyond-beginning",
    name: "Beyond Beginning",
    requirement: "Reach Career Level 20.",
    category: "Career",
    timing: "Cumulative",
    risk: "Low",
    detailHref: `${achievementGuideHref}#career-levels`,
    searchText:
      "Beyond Beginning achievement career level 20 twenty progression",
  },
  {
    id: "hardened",
    name: "Hardened",
    requirement: "Reach Career Level 30.",
    category: "Career",
    timing: "Cumulative",
    risk: "Medium",
    detailHref: `${achievementGuideHref}#career-levels`,
    searchText:
      "Hardened achievement career level 30 thirty progression",
  },
  {
    id: "veteran",
    name: "Veteran",
    requirement: "Reach Career Level 40.",
    category: "Career",
    timing: "Cumulative",
    risk: "High",
    detailHref: `${achievementGuideHref}#career-levels`,
    searchText:
      "Veteran achievement career level 40 forty progression",
  },
  {
    id: "im-beginning-to-regret-this",
    name: "I’m Beginning To Regret This!",
    requirement: "Reach Career Level 50.",
    category: "Career",
    timing: "Cumulative",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#career-levels`,
    searchText:
      "I'm Beginning To Regret This achievement career level 50 fifty progression",
  },

  // ---------------------------------------------------------------------------
  // Long Grind
  // ---------------------------------------------------------------------------

  {
    id: "calling-reinforcements",
    name: "Calling Reinforcements",
    requirement: "Build a total of 100 Manpower Nodes.",
    category: "Long Grind",
    timing: "Cumulative Node Builds",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#node-achievements`,
    searchText:
      "Calling Reinforcements achievement build 100 manpower nodes Engineer resource node",
  },
  {
    id: "full-tank",
    name: "Full Tank",
    requirement: "Build a total of 100 Fuel Nodes.",
    category: "Long Grind",
    timing: "Cumulative Node Builds",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#node-achievements`,
    searchText:
      "Full Tank achievement build 100 fuel nodes Engineer resource node",
  },
  {
    id: "locked-and-loaded",
    name: "Locked and Loaded",
    requirement: "Build a total of 100 Munitions Nodes.",
    category: "Long Grind",
    timing: "Cumulative Node Builds",
    risk: "Very High",
    detailHref: `${achievementGuideHref}#node-achievements`,
    searchText:
      "Locked and Loaded achievement build 100 munitions nodes Engineer resource node",
  },
];