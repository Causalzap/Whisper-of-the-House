export type OperationTorchMission = {
    id: string;
    name: string;
    focus?: string;
    guideHref?: string;
    guideLabel?: string;
  };
  
  // Operation Torch mission entities.
  // Stable IDs are shared with campaign upgrade data.
  // Later mission order is not encoded as a confirmed numeric field.
  
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
      focus: "Beach landing, inland advance, and airfield capture",
      guideHref: "#charlie-beach",
    },
    {
      id: "medjez-el-bab",
      name: "Medjez El Bab",
      focus: "Whizbang artillery, Engineer rescue, and bridge defense",
      guideHref: "#medjez-el-bab",
    },
    {
      id: "iron-rain",
      name: "Iron Rain",
      focus: "Convoy route, Halftracks, and enemy ambushes",
      guideHref: "#iron-rain",
    },
    {
      id: "chouigui",
      name: "Chouigui",
      focus: "Stuart tanks, bridge crossing, and armored counterattacks",
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
      focus: "Commando stealth and demolition objectives",
      guideHref: "/company-of-heroes-3-operation-torch/longstop-infiltration",
      guideLabel: "Commando Walkthrough",
    },
    {
      id: "sened-station",
      name: "Sened Station",
      focus: "Railway junction, supply trucks, and town defense",
      guideHref: "#sened-station",
    },
    {
      id: "faid",
      name: "Faid",
      focus: "Mountain pass and defensive preparation",
      guideHref: "#faid",
      guideLabel: "Opening Objectives",
    },
    {
      id: "sbeitla",
      name: "Sbeitla",
    },
    {
      id: "kasserine",
      name: "Kasserine",
    },
    {
      id: "fondouk",
      name: "Fondouk",
    },
    {
      id: "return-to-longstop",
      name: "Return to Longstop",
    },
    {
      id: "hill-609",
      name: "Hill 609",
    },
    {
      id: "hill-604",
      name: "Hill 604",
    },
  ];
  
  export function getOperationTorchMission(
    missionId: string
  ): OperationTorchMission | undefined {
    return operationTorchMissions.find(
      (mission) => mission.id === missionId
    );
  }