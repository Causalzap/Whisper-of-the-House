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
  // Effects describe the values displayed in the After Action screen.
  // Additional choices can be added as later missions become available.
  
  export const operationTorchUpgradeChoices: CampaignUpgradeChoice[] = [
    // ============================================================
    // Operation Flagpole
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
    // Charlie Beach
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
    // Medjez El Bab
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
    // Iron Rain
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
    // Chouigui
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
    // Hornet's Nest
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
    // Longstop Infiltration
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
    // Sened Station
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
  ];
  
  // Flattened collection for future tools, lookups, and filters.
  // Derived from the same canonical upgrade choices.
  
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