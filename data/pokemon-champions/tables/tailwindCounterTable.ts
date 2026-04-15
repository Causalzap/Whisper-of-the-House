import type { ReactNode } from "react";

export type GuideTableColumn = {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
};

export type GuideTableRow = Record<string, ReactNode>;

export const tailwindCounterColumns: GuideTableColumn[] = [
  { key: "type", label: "Counter type" },
  { key: "why", label: "Why it works" },
  { key: "examples", label: "Examples" },
  { key: "reliability", label: "Reliability", align: "center" },
];

export const tailwindCounterRows: GuideTableRow[] = [
  {
    type: "Taunt",
    why: "Prevents clean Tailwind setup turns.",
    examples: "Aerodactyl, Whimsicott",
    reliability: "High",
  },
  {
    type: "Fake Out pressure",
    why: "Breaks support-based setup turns.",
    examples: "Incineroar, Sneasler",
    reliability: "High",
  },
  {
    type: "Mirror Tailwind",
    why: "Prevents a one-sided speed war.",
    examples: "Whimsicott, Talonflame, Aerodactyl",
    reliability: "High",
  },
  {
    type: "Trick Room reversal",
    why: "Flips the speed order entirely.",
    examples: "Farigiraf, Ursaluna teams",
    reliability: "High",
  },
  {
    type: "Direct setter pressure",
    why: "Punishes fragile Tailwind leads before they convert speed into tempo.",
    examples: "Aerodactyl mirrors, Talonflame pressure",
    reliability: "Medium",
  },
  {
    type: "Better post-Tailwind positioning",
    why: "Stops the first boosted turn from snowballing into a losing board.",
    examples: "Rotom-Wash balance, Protect timing",
    reliability: "High",
  },
  {
    type: "Bulky anti-offense",
    why: "Absorbs the first boosted turn better and stabilizes after Tailwind goes up.",
    examples: "Corviknight, Rotom-Wash, Incineroar",
    reliability: "Medium",
  },
];