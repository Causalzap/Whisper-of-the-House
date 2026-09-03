import type { ChecklistItem } from "@/data/checklists/types";


export const bombananaAchievementChecklistItems = [
  {
    id: "first-defusal",
    name: "First Defusal",
    requirement: "No description shown",
    steamRate: "100.0%",
    timing: "Campaign progression",
    category: "Campaign",
    searchText:
      "first defusal first bomb campaign",
  },

  {
    id: "here-we-go-again",
    name: "Here We Go Again",
    requirement:
      "Play the same level 3 times",
    steamRate: "100.0%",
    timing:
      "Continue to 6 runs for Still?",
    category: "Repeat",
    searchText:
      "same level 3 times replay repeat here we go again",
    detailHref:
      "#repeat-and-dice",
  },

  {
    id: "boom",
    name: "BOOM!",
    requirement:
      "Explode for the first time",
    steamRate: "98.6%",
    timing: "Natural play",
    category: "Campaign",
    searchText:
      "explode first time boom campaign",
  },

  {
    id: "junior-defuser",
    name: "Junior Defuser",
    requirement:
      "Complete 5 levels",
    steamRate: "89.0%",
    timing:
      "Campaign Level 5 milestone",
    category: "Campaign",
    searchText:
      "complete 5 levels junior defuser campaign",
    detailHref:
      "#campaign",
  },

  {
    id: "indecisive-monkeys",
    name: "Indecisive Monkeys",
    requirement:
      "Roll the dice 3 times",
    steamRate: "62.9%",
    timing:
      "Continue to 30 clicks for Rollaholic",
    category: "Repeat",
    searchText:
      "dice roll 3 times indecisive monkeys repeat",
    detailHref:
      "#repeat-and-dice",
  },

  {
    id: "still",
    name: "Still?",
    requirement:
      "Hidden: play the same level 6 times",
    steamRate: "61.1%",
    timing:
      "Continue after Here We Go Again",
    category: "Repeat",
    searchText:
      "hidden still same level 6 times replay repeat",
    detailHref:
      "#repeat-and-dice",
  },

  {
    id: "slapper",
    name: "Slapper",
    requirement:
      "Slap 30 times",
    steamRate: "50.1%",
    timing:
      "Natural play or cleanup",
    category: "Interaction",
    searchText:
      "slap 30 times slapper interaction",
    detailHref:
      "#slap-repair",
  },

  {
    id: "repairman",
    name: "Repairman",
    requirement:
      "Complete 5 repairs",
    steamRate: "43.7%",
    timing:
      "Natural play; continue to 50 for Fixaholic",
    category: "Interaction",
    searchText:
      "repair 5 times repairman interaction",
    detailHref:
      "#slap-repair",
  },

  {
    id: "wirecutting-expert",
    name: "Wirecutting Expert",
    requirement:
      "Cut 5 wires",
    steamRate: "30.1%",
    timing:
      "Campaign progression",
    category: "Campaign",
    searchText:
      "cut 5 wires cables wirecutting expert campaign",
    detailHref:
      "#campaign",
  },

  {
    id: "expert-defuser",
    name: "Expert Defuser",
    requirement:
      "Complete 15 levels",
    steamRate: "27.1%",
    timing:
      "Campaign Level 15 milestone",
    category: "Campaign",
    searchText:
      "complete 15 levels expert defuser campaign",
    detailHref:
      "#campaign",
  },

  {
    id: "just-in-time",
    name: "Just in Time!",
    requirement:
      "Defuse the bomb in the last 3 seconds",
    steamRate: "12.8%",
    timing:
      "Attempt after the final input is already solved",
    category: "Challenge",
    searchText:
      "last 3 seconds timer just in time achievement challenge",
    detailHref:
      "#just-in-time",
  },

  {
    id: "ouch",
    name: "OUCH!",
    requirement:
      "Get hit by 20 bottles",
    steamRate: "12.1%",
    timing:
      "Cleanup",
    category: "Interaction",
    searchText:
      "20 bottles hit ouch interaction cleanup",
    detailHref:
      "#slap-repair",
  },

  {
    id: "fixaholic",
    name: "Fixaholic",
    requirement:
      "Hidden: complete 50 repairs",
    steamRate: "11.9%",
    timing:
      "Continue after Repairman",
    category: "Interaction",
    searchText:
      "hidden fixaholic complete 50 repairs interaction",
    detailHref:
      "#slap-repair",
  },

  {
    id: "basket",
    name: "Basket!",
    requirement:
      "Score a basket",
    steamRate: "11.5%",
    timing:
      "Continue to 10 baskets for ŞENGÜN!",
    category: "Basketball",
    searchText:
      "basket score basketball achievement",
    detailHref:
      "#basket",
  },

  {
    id: "fearless-monkeys",
    name: "Fearless Monkeys",
    requirement:
      "Choose Hard difficulty in Custom Mode",
    steamRate: "3.3%",
    timing:
      "Custom Mode",
    category: "Custom",
    searchText:
      "fearless monkeys hard difficulty custom mode",
    detailHref:
      "#custom-endless",
  },

  {
    id: "punching-bag",
    name: "Punching Bag",
    requirement:
      "Hidden: get slapped 300 times",
    steamRate: "2.7%",
    timing:
      "Coordinated cleanup",
    category: "Interaction",
    searchText:
      "hidden punching bag get slapped 300 times interaction",
    detailHref:
      "#slap-repair",
  },

  {
    id: "rollaholic",
    name: "Rollaholic",
    requirement:
      "Hidden: click the dice 30 times",
    steamRate: "2.0%",
    timing:
      "Continue after Indecisive Monkeys",
    category: "Repeat",
    searchText:
      "hidden rollaholic dice 30 clicks repeat",
    detailHref:
      "#repeat-and-dice",
  },

  {
    id: "master-defuser",
    name: "Master Defuser",
    requirement:
      "Complete 30 levels",
    steamRate: "1.7%",
    timing:
      "Campaign completion",
    category: "Campaign",
    searchText:
      "complete 30 levels master defuser campaign",
    detailHref:
      "#campaign",
  },

  {
    id: "endless-junior",
    name: "Endless Junior",
    requirement:
      "Complete 5 waves in Endless Mode",
    steamRate: "1.2%",
    timing:
      "Endless Wave 5",
    category: "Endless",
    searchText:
      "endless junior 5 waves endless mode",
    detailHref:
      "#custom-endless",
  },

  {
    id: "sengun",
    name: "ŞENGÜN!",
    requirement:
      "Hidden: score 10 baskets",
    steamRate: "0.3%",
    timing:
      "Continue after Basket!",
    category: "Basketball",
    searchText:
      "hidden sengun score 10 baskets basketball",
    detailHref:
      "#basket",
  },

  {
    id: "slap-maniac",
    name: "Slap Maniac",
    requirement:
      "Hidden: slap 1000 times",
    steamRate: "0.2%",
    timing:
      "Long cleanup",
    category: "Interaction",
    searchText:
      "hidden slap maniac slap 1000 times interaction cleanup",
    detailHref:
      "#slap-repair",
  },

  {
    id: "endless-expert",
    name: "Endless Expert",
    requirement:
      "Complete 15 waves in Endless Mode",
    steamRate: "0.1%",
    timing:
      "Endless Wave 15",
    category: "Endless",
    searchText:
      "endless expert 15 waves endless mode",
    detailHref:
      "#custom-endless",
  },

  {
    id: "endless-master",
    name: "Endless Master",
    requirement:
      "Complete 30 waves in Endless Mode",
    steamRate: "0.1%",
    timing:
      "Endless Wave 30",
    category: "Endless",
    searchText:
      "endless master 30 waves endless mode",
    detailHref:
      "#custom-endless",
  },
] satisfies ChecklistItem[];