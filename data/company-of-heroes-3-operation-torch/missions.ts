export type OperationTorchMission = {
  id: string;
  name: string;
  focus?: string;
  guideHref?: string;
  guideLabel?: string;
};

// Operation Torch missions in campaign progression order.
// Stable mission IDs are shared with campaign upgrade data.

export const operationTorchMissions: OperationTorchMission[] = [
  {
    id: "operation-flagpole",
    name: "Operation Flagpole",
    focus: "Commando rescue and withdrawal",
    guideHref: "#operation-flagpole",
  },
  {
    id: "charlie-beach",
    name: "Charlie Beach",
    focus: "Beach landing, town capture, Commando rendezvous, and airfield assault",
    guideHref: "#charlie-beach",
  },
  {
    id: "medjez-el-bab",
    name: "Medjez El Bab",
    focus: "Whizbang artillery, Engineer rescue, enemy outposts, and bridge defense",
    guideHref: "#medjez-el-bab",
  },
  {
    id: "iron-rain",
    name: "Iron Rain",
    focus: "Convoy ambushes, four forward supply bases, and Halftrack support",
    guideHref: "#iron-rain",
  },
  {
    id: "chouigui",
    name: "Chouigui",
    focus: "Stuart tanks, bridge crossing, and airfield defense against German armor",
    guideHref: "#chouigui",
  },
  {
    id: "hornets-nest",
    name: "Hornet's Nest",
    focus: "Reconnaissance, British artillery, and evacuation defense",
    guideHref: "#hornets-nest",
  },
  {
    id: "longstop-infiltration",
    name: "Longstop Infiltration",
    focus: "Commando concealment, sniper objectives, demolition charges, and extraction",
    guideHref: "/company-of-heroes-3-operation-torch/longstop-infiltration",
    guideLabel: "Commando Walkthrough",
  },
  {
    id: "sened-station",
    name: "Sened Station",
    focus: "Railway junction, supply trucks, rallying retreating troops, and town defense",
    guideHref: "#sened-station",
  },
  {
    id: "faid",
    name: "Faid",
    focus: "Mortar recovery, Allied infantry rescue, enemy outposts, anti-tank defenses, and withdrawal",
    guideHref: "#faid",
  },
  {
    id: "sbeitla",
    name: "Sbeitla",
    focus: "Logistics Truck, base decommissioning, enemy officers, and ambulance escort",
    guideHref: "#sbeitla",
  },
  {
    id: "kasserine",
    name: "Kasserine",
    focus: "Isolated infantry rescue, choke point capture, anti-tank gun airdrops, and Tiger tank",
    guideHref: "#kasserine",
  },
  {
    id: "fondouk",
    name: "Fondouk",
    focus: "Partisan Tunnel Network, western bridge repair, enemy artillery, and British armored support",
    guideHref: "#fondouk",
  },
  {
    id: "return-to-longstop",
    name: "Return to Longstop",
    focus: "Hellcat tank destroyers, three fuel sites, roadblocks, and hilltop defense",
    guideHref: "#return-to-longstop",
  },
  {
    id: "hill-609",
    name: "Hill 609",
    focus: "Four secondary hills, enemy anti-aircraft guns, carpet bombing, and counterattack defense",
    guideHref: "#hill-609",
  },
  {
    id: "hill-604",
    name: "Hill 604",
    focus: "Failed frontal assault, village intelligence, Pershing reinforcements, and final summit capture",
    guideHref: "#hill-604",
  },
];

export function getOperationTorchMission(
  missionId: string
): OperationTorchMission | undefined {
  return operationTorchMissions.find(
    (mission) => mission.id === missionId
  );
}