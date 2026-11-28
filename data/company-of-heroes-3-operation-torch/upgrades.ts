export type CampaignPerk = {
  id: string;
  name: string;
  effect: string;
  unitCategory: string;
};

export type CampaignUpgradeChoice = {
  id: string;
  missionId: string;
  unlockCondition: string;
  options: readonly [CampaignPerk, CampaignPerk];
};

// Operation Torch campaign upgrade choices.
// Each group contains two mutually exclusive perk options.
// Standard upgrades require mission completion.
// Bonus upgrades require completion of the corresponding Torch Objective.

export const operationTorchUpgradeChoices: CampaignUpgradeChoice[] = [
  // ============================================================
  // Mission 1: Operation Flagpole
  // ============================================================

  {
    id: "flagpole-captain",
    missionId: "operation-flagpole",
    unlockCondition: "Complete Operation Flagpole.",
    options: [
      {
        id: "captain-lead-from-the-front",
        name: "Lead from the Front",
        effect:
          "Captains receive 50% less incoming damage and gain +25% rate of fire and +25% accuracy.",
        unitCategory: "Captain",
      },
      {
        id: "captain-offensive-focus",
        name: "Offensive Focus",
        effect:
          "Reduces the cooldown of all Captain abilities by 50%.",
        unitCategory: "Captain",
      },
    ],
  },
  {
    id: "flagpole-recon-support",
    missionId: "operation-flagpole",
    unlockCondition:
      "Complete the Torch Objective in Operation Flagpole.",
    options: [
      {
        id: "grasshopper-recon-run",
        name: "Grasshopper Recon Run",
        effect:
          "Provides vision along the reconnaissance plane's flight path and can reveal camouflaged units.",
        unitCategory: "Reconnaissance",
      },
      {
        id: "smoke-screen",
        name: "Smoke Screen",
        effect:
          "Fires a smoke barrage that blocks vision in the target area. Smoke lasts up to 20 seconds.",
        unitCategory: "Reconnaissance",
      },
    ],
  },

  // ============================================================
  // Mission 2: Charlie Beach
  // ============================================================

  {
    id: "charlie-beach-riflemen",
    missionId: "charlie-beach",
    unlockCondition: "Complete Charlie Beach.",
    options: [
      {
        id: "riflemen-cover-protection",
        name: "Standoff",
        effect:
          "Riflemen are 25% harder to hit while positioned behind cover.",
        unitCategory: "Riflemen",
      },
      {
        id: "riflemen-rifle-damage",
        name: "Grab 'em by the Belt",
        effect:
          "Increases the damage dealt by standard rifles by 50%.",
        unitCategory: "Riflemen",
      },
    ],
  },
  {
    id: "charlie-beach-grenades",
    missionId: "charlie-beach",
    unlockCondition:
      "Complete the Torch Objective in Charlie Beach.",
    options: [
      {
        id: "grenade-throwing-range",
        name: "Grenade Range",
        effect:
          "Increases grenade ability range by 50%.",
        unitCategory: "Grenades",
      },
      {
        id: "grenade-cost-reduction",
        name: "Additional Requisition",
        effect:
          "Reduces grenade ability costs by 10 Munitions.",
        unitCategory: "Grenades",
      },
    ],
  },

  // ============================================================
  // Mission 3: Medjez El Bab
  // ============================================================

  {
    id: "medjez-el-bab-engineers",
    missionId: "medjez-el-bab",
    unlockCondition: "Complete Medjez El Bab.",
    options: [
      {
        id: "engineer-repair-construction-speed",
        name: "Prepared Repair Kits",
        effect:
          "Doubles Engineer construction and repair speed, providing +100% construction speed and +100% repair speed.",
        unitCategory: "Engineers",
      },
      {
        id: "engineer-mine-damage",
        name: "Prepared Stacked Mines",
        effect:
          "Mines deal twice as much damage. The displayed modifier is +100 damage.",
        unitCategory: "Engineers",
      },
    ],
  },
  {
    id: "medjez-el-bab-barracks",
    missionId: "medjez-el-bab",
    unlockCondition:
      "Capture both enemy outposts in Medjez El Bab and complete the mission.",
    options: [
      {
        id: "barracks-manpower-reduction",
        name: "Bureau of Personnel",
        effect:
          "Reduces the Manpower cost of training Barracks units by 10%.",
        unitCategory: "Barracks",
      },
      {
        id: "barracks-starting-veterancy",
        name: "Veteran Trainers",
        effect:
          "Units trained at the Barracks begin at Veterancy 1.",
        unitCategory: "Barracks",
      },
    ],
  },

  // ============================================================
  // Mission 4: Iron Rain
  // ============================================================

  {
    id: "iron-rain-halftracks",
    missionId: "iron-rain",
    unlockCondition: "Complete Iron Rain.",
    options: [
      {
        id: "halftrack-exchangeable-parts",
        name: "Exchangeable Parts",
        effect:
          "Converted US Halftracks can exchange their upgrades once every 120 seconds. Conversions after the first are free and take 8 seconds to complete.",
        unitCategory: "Halftracks",
      },
      {
        id: "halftrack-assault-carriers",
        name: "Assault Carriers",
        effect:
          "Upgrades all M3 Armored Personnel Carriers into M3 Assault Carriers and enables Assault Carrier deployment.",
        unitCategory: "Halftracks",
      },
    ],
  },
  {
    id: "iron-rain-reinforcement",
    missionId: "iron-rain",
    unlockCondition:
      "Complete the Torch Objective in Iron Rain.",
    options: [
      {
        id: "reinforcement-cost-reduction",
        name: "Triage",
        effect:
          "Reduces infantry reinforcement Manpower costs by 10%.",
        unitCategory: "Reinforcement",
      },
      {
        id: "reinforcement-speed",
        name: "Benzedrine",
        effect:
          "Improves Medical Tent healing speed and reduces reinforcement times for all infantry squads by 50%.",
        unitCategory: "Reinforcement",
      },
    ],
  },

  // ============================================================
  // Mission 5: Chouigui
  // ============================================================

  {
    id: "chouigui-stuart",
    missionId: "chouigui",
    unlockCondition: "Complete Chouigui.",
    options: [
      {
        id: "stuart-movement-speed",
        name: "No Governors",
        effect:
          "Increases Stuart movement speed by 100%.",
        unitCategory: "Stuart Tanks",
      },
      {
        id: "stuart-automatic-upgrade-packages",
        name: "Lessons of Chouigui",
        effect:
          "Automatically equips Stuarts with both the Survival Package and Tank Commander upgrades.",
        unitCategory: "Stuart Tanks",
      },
    ],
  },
  {
    id: "chouigui-artillery-air-support",
    missionId: "chouigui",
    unlockCondition:
      "Complete the Torch Objective in Chouigui.",
    options: [
      {
        id: "rapid-artillery",
        name: "155mm Rapid Artillery Barrage",
        effect:
          "Calls in an off-map artillery barrage with a wide blast radius. Very effective against stationary targets.",
        unitCategory: "Artillery & Air Support",
      },
      {
        id: "dual-p47",
        name: "Dual P-47 Rocket Strike",
        effect:
          "Calls in a dual rocket strike over the target area. Extremely effective against vehicles.",
        unitCategory: "Artillery & Air Support",
      },
    ],
  },

  // ============================================================
  // Mission 6: Hornet's Nest
  // ============================================================

  {
    id: "hornets-nest-scouts",
    missionId: "hornets-nest",
    unlockCondition: "Complete Hornet's Nest.",
    options: [
      {
        id: "scouts-pathfinders",
        name: "Pathfinders",
        effect:
          "Globally upgrades all Scouts to Pathfinders, increasing health and adding an additional soldier.",
        unitCategory: "Scouts",
      },
      {
        id: "scouts-artillery-observers",
        name: "Artillery Observers",
        effect:
          "Globally upgrades all Scouts to Artillery Observers, increasing health and adding an additional soldier. Artillery Observers can place camouflaged beacons that call down artillery on nearby units.",
        unitCategory: "Scouts",
      },
    ],
  },
  {
    id: "hornets-nest-infantry-support",
    missionId: "hornets-nest",
    unlockCondition:
      "Complete the Torch Objective in Hornet's Nest.",
    options: [
      {
        id: "infantry-attacking-spirit",
        name: "Attacking Spirit",
        effect:
          "Decapturing territory points with friendly squads immediately restores 15 health to nearby infantry and team weapon crews, followed by 75 health over 45 seconds. Healing over time is disabled during combat. Decapturing another territory point while the effect is active refreshes its duration.",
        unitCategory: "Infantry Support",
      },
      {
        id: "infantry-hold-the-line",
        name: "Hold the Line",
        effect:
          "Infantry receive 20% less damage while inside friendly territory.",
        unitCategory: "Infantry Support",
      },
    ],
  },

  // ============================================================
  // Mission 7: Longstop Infiltration
  // ============================================================

  {
    id: "longstop-infiltration-commandos",
    missionId: "longstop-infiltration",
    unlockCondition: "Complete Longstop Infiltration.",
    options: [
      {
        id: "commando-cross-training",
        name: "Cross-Trained",
        effect:
          "Commandos gain +40% damage and +55% accuracy when leaving stealth.",
        unitCategory: "Commandos",
      },
      {
        id: "commando-willie-pete-smoke",
        name: "Grenades Pouches",
        effect:
          "Allows Commandos to use Willy Pete smoke grenades. The smoke cloud continuously damages infantry and blocks vision.",
        unitCategory: "Commandos",
      },
    ],
  },
  {
    id: "longstop-infiltration-weapon-support",
    missionId: "longstop-infiltration",
    unlockCondition:
      "Complete the Torch Objective in Longstop Infiltration.",
    options: [
      {
        id: "weapon-support-concealment-training",
        name: "Concealment Training",
        effect:
          "Weapon Support Center units are 20% harder to hit.",
        unitCategory: "Weapon Support Center",
      },
      {
        id: "weapon-support-spotters",
        name: "Spotters",
        effect:
          "Increases the vision range of Weapon Support Center units by 50%.",
        unitCategory: "Weapon Support Center",
      },
    ],
  },

  // ============================================================
  // Mission 8: Sened Station
  // ============================================================

  {
    id: "sened-station-hmg",
    missionId: "sened-station",
    unlockCondition: "Complete Sened Station.",
    options: [
      {
        id: "hmg-linked-belts",
        name: "Link Belts",
        effect:
          "HMGs do not need to reload, according to the perk description. The displayed modifier is +100% reload speed.",
        unitCategory: "Heavy Machine Guns",
      },
      {
        id: "hmg-gun-shields",
        name: "Gun Shields",
        effect:
          "Doubles the effects of the Defensive Set-up passive, making HMGs an additional 20% harder to hit while set up.",
        unitCategory: "Heavy Machine Guns",
      },
    ],
  },
  {
    id: "sened-station-recovery-support",
    missionId: "sened-station",
    unlockCondition:
      "Complete the Torch Objective in Sened Station.",
    options: [
      {
        id: "infantry-no-man-left-behind",
        name: "No Man Left Behind",
        effect:
          "Allows infantry squads to recover casualties. Recovering a casualty immediately reinforces the squad with one additional wounded member. If the squad is already full, grants 30 Manpower instead.",
        unitCategory: "Infantry Support",
      },
      {
        id: "engineer-salvage-crew",
        name: "Salvage Crew",
        effect:
          "Allows Engineers to salvage vehicle wrecks. Completing the salvage grants 25% of the vehicle's original Manpower cost and 20% of its original Fuel cost, then removes the wreck.",
        unitCategory: "Engineers",
      },
    ],
  },

  // ============================================================
  // Mission 9: Faid
  // ============================================================

  {
    id: "faid-mortars",
    missionId: "faid",
    unlockCondition: "Complete Faid.",
    options: [
      {
        id: "mortar-heavy-he-rounds",
        name: "Heavy HE Rounds",
        effect:
          "Increases the Mortar's area-of-effect radius by 30%.",
        unitCategory: "Mortars",
      },
      {
        id: "mortar-light-he-rounds",
        name: "Light HE Rounds",
        effect:
          "Increases Mortar team weapon range by 20%.",
        unitCategory: "Mortars",
      },
    ],
  },
  {
    id: "faid-field-support",
missionId: "faid",
unlockCondition:
  "Complete the Find a Way to Help the Pinned Allies Torch Objective and finish Faid.",
    options: [
      {
        id: "vehicle-field-repairs",
        name: "Field Repairs",
        effect:
          "Repairs a designated friendly vehicle at a rate of 20 health per second for 20 seconds. Repairs are disabled during combat.",
        unitCategory: "Vehicle Support",
      },
      {
        id: "frontline-medical-station",
        name: "Frontline Medical Station",
        effect:
          "Deploys a self-constructing medical station in friendly territory. The station heals, collects casualties, and reinforces nearby infantry squads. It can also serve as a retreat point.",
        unitCategory: "Infantry Support",
      },
    ],
  },

  // ============================================================
  // Mission 10: Sbeitla
  // ============================================================

  {
    id: "sbeitla-snipers",
    missionId: "sbeitla",
    unlockCondition: "Complete Sbeitla.",
    options: [
      {
        id: "sniper-m1e7-prototype-rifle",
        name: "M1E7 Prototype Rifle",
        effect:
          "Sniper attacks apply suppression and gain +100% attack speed.",
        unitCategory: "Snipers",
      },
      {
        id: "sniper-ssb",
        name: "SSB Sniper",
        effect:
          "Globally upgrades all Snipers to SSB Sniper Teams, which can call in artillery barrages.",
        unitCategory: "Snipers",
      },
    ],
  },
  {
    id: "sbeitla-infantry-grenades",
    missionId: "sbeitla",
    unlockCondition:
      "Complete the Torch Objective in Sbeitla.",
    options: [
      {
        id: "infantry-grenade-sumps",
        name: "Grenade Sumps",
        effect:
          "Reduces the damage infantry receive while positioned behind cover.",
        unitCategory: "Infantry Support",
      },
      {
        id: "riflemen-offensive-grenades",
        name: "Offensive Grenades",
        effect:
          "Equips Riflemen with cooked M2 Frag Grenades that detonate quickly and deal damage in an area.",
        unitCategory: "Riflemen",
      },
    ],
  },

  // ============================================================
  // Mission 11: Kasserine
  // ============================================================

  {
    id: "kasserine-at-guns",
    missionId: "kasserine",
    unlockCondition: "Complete Kasserine.",
    options: [
      {
        id: "at-gun-pre-positioned-ap-ammo",
        name: "Pre-positioned AP Ammo",
        effect:
          "Removes the Munitions cost of the Armor Piercing Rounds ability (-100% Munitions cost).",
        unitCategory: "Anti-Tank Guns",
      },
      {
        id: "at-gun-maneuver-drills",
        name: "Maneuver Drills",
        effect:
          "AT Guns have no set-up or tear-down time according to the perk description. The displayed modifier is +100% set-up and teardown speed.",
        unitCategory: "Anti-Tank Guns",
      },
    ],
  },
  {
    id: "kasserine-motor-pool",
    missionId: "kasserine",
    unlockCondition:
      "Complete the Torch Objective in Kasserine.",
    options: [
      {
        id: "motor-pool-reinforced-armor",
        name: "Reinforced Armor",
        effect:
          "Increases the health of Motor Pool units by 33%.",
        unitCategory: "Motor Pool",
      },
      {
        id: "motor-pool-tungsten-rounds",
        name: "Tungsten Rounds",
        effect:
          "Increases the armor penetration of Motor Pool units by 50%.",
        unitCategory: "Motor Pool",
      },
    ],
  },

  // ============================================================
  // Mission 12: Fondouk
  // ============================================================

  {
    id: "fondouk-infiltration-network",
    missionId: "fondouk",
    unlockCondition: "Complete Fondouk.",
    options: [
      {
        id: "resistance-fighter-infiltration",
        name: "Resistance Fighter Infiltration",
        effect:
          "Allows garrisoned battlefield buildings to be converted into Forward Headquarters. These structures train infantry and team weapons, reinforce infantry, and improve infantry rate of fire.",
        unitCategory: "Forward Headquarters",
      },
      {
        id: "tunnel-networks",
        name: "Tunnel Networks",
        effect:
          "Allows a Tunnel Network to be constructed in the HQ sector through the command ability panel. Tunnel Hideouts can be deployed through the command ability panel in areas with vision or constructed by infantry squads.",
        unitCategory: "Tunnel Networks",
      },
    ],
  },
  {
    id: "fondouk-fighting-positions",
    missionId: "fondouk",
    unlockCondition:
      "Complete the Torch Objective in Fondouk.",
    options: [
      {
        id: "fighting-positions-anchor-points",
        name: "Anchor Points",
        effect:
          "Fighting Positions grant +25% accuracy to nearby infantry and team weapons.",
        unitCategory: "Fighting Positions",
      },
      {
        id: "fighting-positions-dig-any-time-you-stop",
        name: "Dig Any Time You Stop",
        effect:
          "Allows Fighting Positions to be constructed in neutral territory.",
        unitCategory: "Fighting Positions",
      },
    ],
  },

  // ============================================================
  // Mission 13: Return to Longstop
  // ============================================================

  {
    id: "return-to-longstop-hellcats",
    missionId: "return-to-longstop",
    unlockCondition: "Complete Return to Longstop.",
    options: [
      {
        id: "hellcat-hvap-t-rounds",
        name: "HVAP-T Rounds",
        effect:
          "Increases Hellcat weapon penetration by 50%.",
        unitCategory: "Hellcats",
      },
      {
        id: "hellcat-pintle-mount-m2",
        name: "Pintle Mount M2",
        effect:
          "Equips Hellcats with a pintle-mounted heavy machine gun, increasing their anti-infantry firepower.",
        unitCategory: "Hellcats",
      },
    ],
  },
  {
    id: "return-to-longstop-support-abilities",
    missionId: "return-to-longstop",
    unlockCondition:
      "Complete the Torch Objective in Return to Longstop.",
    options: [
      {
        id: "support-fire-direction-center",
        name: "Fire Direction Center",
        effect:
          "Reduces the Munitions cost of support abilities by 50%.",
        unitCategory: "Artillery & Air Support",
      },
      {
        id: "support-pre-registration",
        name: "Pre-Registration",
        effect:
          "Improves support ability accuracy with +100% weapon scatter accuracy.",
        unitCategory: "Artillery & Air Support",
      },
    ],
  },

  // ============================================================
  // Mission 14: Hill 609
  // ============================================================

  {
    id: "hill-609-shermans",
    missionId: "hill-609",
    unlockCondition: "Complete Hill 609.",
    options: [
      {
        id: "sherman-stabilizer-calibration",
        name: "Stabilizer Calibration",
        effect:
          "Shermans are 20% harder to hit while moving.",
        unitCategory: "Sherman Tanks",
      },
      {
        id: "sherman-easy-eight-production",
        name: "Unlock M4A3E8 Sherman Easy Eight Production",
        effect:
          "Allows the M4A3E8 Sherman Easy Eight to be produced from the Tank Depot.",
        unitCategory: "Sherman Tanks",
      },
    ],
  },
  {
    id: "hill-609-tank-depot",
    missionId: "hill-609",
    unlockCondition:
      "Complete the Torch Objective in Hill 609.",
    options: [
      {
        id: "tank-depot-crew-rotations",
        name: "Crew Rotations",
        effect:
          "Reduces the Manpower cost of training Tank Depot units by 10%.",
        unitCategory: "Tank Depot",
      },
      {
        id: "tank-depot-elite-trainers",
        name: "Elite Trainers",
        effect:
          "Units trained at the Tank Depot begin at Veterancy 3.",
        unitCategory: "Tank Depot",
      },
    ],
  },
];

// Flattened perk collection derived from the upgrade choices.

export const operationTorchCampaignPerks: CampaignPerk[] =
  operationTorchUpgradeChoices.flatMap((choice) => [
    ...choice.options,
  ]);

// Retrieve upgrade choices associated with a particular mission.

export function getOperationTorchMissionUpgrades(
  missionId: string
): CampaignUpgradeChoice[] {
  return operationTorchUpgradeChoices.filter(
    (choice) => choice.missionId === missionId
  );
}

// Retrieve an individual perk using its stable internal ID.

export function getOperationTorchCampaignPerk(
  perkId: string
): CampaignPerk | undefined {
  return operationTorchCampaignPerks.find(
    (perk) => perk.id === perkId
  );
}