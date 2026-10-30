"use client";

import { useMemo, useState } from "react";

/**
 * Probably Stolen — Security Investigation & Fixers Planner
 * Full-release reference: October 29, 2026, Steam build 26284217.
 *
 * This component deliberately separates accumulated crime (Credits) from
 * investigation progress (0–100). Forecasts assume no NEW crimes, scripted
 * case changes, inspection seizures, or manual Evidence Removal.
 *
 * Fixers and day-start decay/growth are documented individually, but their
 * exact relative timing is not established by the available public material.
 * The user can compare both timing assumptions below.
 *
 * No dependencies beyond React and the site's existing Tailwind CSS.
 */

const CRIME_FIELDS = [
  { key: "weapons", label: "Trafficking — weapons" },
  { key: "narcotics", label: "Trafficking — narcotics" },
  { key: "accessCards", label: "Trafficking — access cards" },
  { key: "contraband", label: "Trafficking — other contraband" },
  { key: "stolen", label: "Possession — stolen goods" },
  { key: "fraud", label: "Fraudulent misrepresentation" },
  { key: "endangerment", label: "Consumer endangerment" },
  { key: "bribery", label: "Bribery of Security personnel" },
  { key: "license", label: "Operating without a license" },
  { key: "manslaughter", label: "Manslaughter" },
] as const;

type CrimeKey = (typeof CRIME_FIELDS)[number]["key"];
type CrimeRecord = Record<CrimeKey, number>;
type CrimeInputs = Record<CrimeKey, string>;
type Tier = 0 | 1 | 2 | 3;
type Difficulty = "cozy" | "normal" | "hard" | "challenge";
type ServiceTiming = "before" | "after";

const FIXERS: Record<Tier, { label: string; fraction: number; flat: number; nightly: number; unlock: number }> = {
  0: { label: "No Fixers", fraction: 0, flat: 0, nightly: 0, unlock: 0 },
  1: { label: "Fixers I", fraction: 0.15, flat: 50, nightly: 25, unlock: 350 },
  2: { label: "Fixers II", fraction: 0.2, flat: 150, nightly: 45, unlock: 450 },
  3: { label: "Fixers III", fraction: 0.25, flat: 400, nightly: 70, unlock: 550 },
};

const DIFFICULTIES: Record<Difficulty, { label: string; unlockMultiplier: number }> = {
  cozy: { label: "Price Gouge (Cozy)", unlockMultiplier: 1 },
  normal: { label: "Mark Up (Normal)", unlockMultiplier: 1 },
  hard: { label: "Thin Margins (Hard)", unlockMultiplier: 1.5 },
  challenge: { label: "Red Ink (Challenge)", unlockMultiplier: 2 },
};

const emptyCrime = (): CrimeRecord =>
  Object.fromEntries(CRIME_FIELDS.map(({ key }) => [key, 0])) as CrimeRecord;
const emptyInputs = (): CrimeInputs =>
  Object.fromEntries(CRIME_FIELDS.map(({ key }) => [key, "0"])) as CrimeInputs;

/** Non-negative, finite, integer values from editable inputs. */
function nonNegative(value: string, max = 100_000_000): number {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(max, Math.max(0, Math.trunc(n))) : 0;
}

function signed(value: string): number {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(200, Math.max(-200, Math.trunc(n))) : 0;
}

function sumCrime(values: CrimeRecord): number {
  return CRIME_FIELDS.reduce((total, { key }) => total + values[key], 0);
}

/** The game's nearest-integer rounding, ties to even (not Math.round). */
export function roundHalfToEven(value: number): number {
  const lo = Math.floor(value);
  const fraction = value - lo;
  if (fraction < 0.5 - 1e-9) return lo;
  if (fraction > 0.5 + 1e-9) return lo + 1;
  return lo % 2 === 0 ? lo : lo + 1;
}

export function investigationBaseGrowth(total: number): number {
  if (total < 100) return 0;
  if (total < 300) return 2;
  if (total < 850) return 6;
  if (total < 1200) return 9;
  if (total < 1500) return 12;
  if (total < 2500) return 20;
  return 33;
}

export function investigationGrowth(
  crimeTotal: number,
  securityReputation: number,
  upperLevelsReputation: number,
): number {
  let growth = investigationBaseGrowth(crimeTotal);
  // Trusted; floor first. At -60, Most Wanted replaces Watchlist.
  if (securityReputation >= 60) growth = Math.floor(growth / 2);
  if (securityReputation <= -60) growth = roundHalfToEven(growth * 1.5);
  else if (securityReputation <= -20) growth = roundHalfToEven(growth * 1.2);
  // Petition to Security is a separate Upper Levels modifier.
  if (upperLevelsReputation <= -60) growth = roundHalfToEven(growth * 1.5);
  return growth;
}

export function applyFixers(values: CrimeRecord, tier: Tier): CrimeRecord {
  if (tier === 0) return { ...values };
  const { fraction, flat } = FIXERS[tier];
  const result = { ...values };
  for (const { key } of CRIME_FIELDS) {
    const n = values[key];
    result[key] = Math.max(0, n - Math.trunc(n * fraction) - flat);
  }
  return result;
}

export function applyNaturalDecay(values: CrimeRecord, progressBeforeDay: number): CrimeRecord {
  if (progressBeforeDay >= 80) return { ...values };
  const result = { ...values };
  for (const { key } of CRIME_FIELDS) result[key] = Math.max(0, values[key] - 20);
  return result;
}

export function expectedSentence(total: number): string {
  if (total <= 0) return "No current recorded crime";
  if (total < 300) return "Fine (if the officer proceeds)";
  if (total < 1500) return "Arrest risk";
  return "Execution risk";
}

export type ForecastRow = {
  day: number;
  naturalDecay: number;
  fixerRemoved: number;
  total: number;
  investigationTotal: number;
  baseGrowth: number;
  appliedGrowth: number;
  progress: number;
  sentence: string;
  officerQueued: boolean;
};

export function simulateInvestigation(args: {
  startingCrime: CrimeRecord;
  startingProgress: number;
  securityReputation: number;
  upperLevelsReputation: number;
  tier: Tier;
  days: number;
  timing: ServiceTiming;
}): ForecastRow[] {
  const {
    startingCrime, startingProgress, securityReputation,
    upperLevelsReputation, tier, days, timing,
  } = args;
  let crime = { ...startingCrime };
  let progress = Math.max(0, Math.min(100, startingProgress));
  const rows: ForecastRow[] = [];
  if (progress >= 100) return rows; // Case might already have been dispatched.

  for (let day = 1; day <= days; day++) {
    const startingTotal = sumCrime(crime);
    let fixedTotal = startingTotal;
    let decayedTotal = startingTotal;
    let baseGrowth = 0;
    let appliedGrowth = 0;

    if (timing === "before") {
      crime = applyFixers(crime, tier);
      fixedTotal = sumCrime(crime);
      crime = applyNaturalDecay(crime, progress);
      decayedTotal = sumCrime(crime);
      baseGrowth = investigationBaseGrowth(decayedTotal);
      appliedGrowth = investigationGrowth(decayedTotal, securityReputation, upperLevelsReputation);
      progress = Math.min(100, progress + appliedGrowth);
    } else {
      crime = applyNaturalDecay(crime, progress);
      decayedTotal = sumCrime(crime);
      baseGrowth = investigationBaseGrowth(decayedTotal);
      appliedGrowth = investigationGrowth(decayedTotal, securityReputation, upperLevelsReputation);
      progress = Math.min(100, progress + appliedGrowth);
      crime = applyFixers(crime, tier);
      fixedTotal = sumCrime(crime);
    }

    const currentTotal = sumCrime(crime);
    rows.push({
      day,
      naturalDecay: timing === "before" ? fixedTotal - decayedTotal : startingTotal - decayedTotal,
      fixerRemoved: timing === "before" ? startingTotal - fixedTotal : decayedTotal - fixedTotal,
      total: currentTotal,
      investigationTotal: decayedTotal,
      baseGrowth,
      appliedGrowth,
      progress,
      sentence: expectedSentence(currentTotal),
      officerQueued: progress >= 100 && currentTotal > 0,
    });

    // After a case reaches 100, officer scheduling/arrival isn't a normal
    // repeating morning calculation; don't forecast through that event.
    if (progress >= 100) break;
  }
  return rows;
}

type UpgradeCost = {
  unlockTotal: number;
  favorUsed: number;
  upfrontCredits: number;
};

function getUpgradeCost(
  owned: Tier,
  target: Tier,
  difficulty: Difficulty,
  favor: number,
  overridePrices: Partial<Record<1 | 2 | 3, number>> = {},
): UpgradeCost {
  let unlockTotal = 0;
  for (let next = owned + 1; next <= target; next++) {
    const t = next as 1 | 2 | 3;
    unlockTotal += overridePrices[t] ?? Math.ceil(FIXERS[t].unlock * DIFFICULTIES[difficulty].unlockMultiplier);
  }
  const favorUsed = Math.min(unlockTotal, favor);
  return { unlockTotal, favorUsed, upfrontCredits: unlockTotal - favorUsed };
}

const num = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-amber-900";
const labelClass = "mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200";
const panelClass =
  "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:p-5";

type Scenario = {
  tier: Tier;
  rows: ForecastRow[];
  finalTotal: number;
  finalProgress: number;
  queued: boolean;
  cost: UpgradeCost;
  runningCost: number;
  allCredits: number;
  affordable: boolean;
  rentSafe: boolean;
};

export default function SecurityInvestigationPlanner() {
  const [crimeInputs, setCrimeInputs] = useState<CrimeInputs>(() => emptyInputs());
  const [progressInput, setProgressInput] = useState("0");
  const [securityInput, setSecurityInput] = useState("0");
  const [upperInput, setUpperInput] = useState("0");
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");
  const [ownedTier, setOwnedTier] = useState<Tier>(0);
  const [selectedTier, setSelectedTier] = useState<Tier>(0);
  const [days, setDays] = useState(7);
  const [timing, setTiming] = useState<ServiceTiming>("before");
  const [cashInput, setCashInput] = useState("0");
  const [favorInput, setFavorInput] = useState("0");
  const [rentInput, setRentInput] = useState("0");
  const [overrideFees, setOverrideFees] = useState(false);
  const [fees, setFees] = useState<Record<1 | 2 | 3, string>>({ 1: "25", 2: "45", 3: "70" });
  const [overrideUnlocks, setOverrideUnlocks] = useState(false);
  const [unlockPrices, setUnlockPrices] = useState<Record<1 | 2 | 3, string>>({ 1: "350", 2: "450", 3: "550" });

  const startingCrime = useMemo(() => {
    const crime = emptyCrime();
    for (const { key } of CRIME_FIELDS) crime[key] = nonNegative(crimeInputs[key]);
    return crime;
  }, [crimeInputs]);

  const progress = Math.min(100, nonNegative(progressInput));
  const securityRep = signed(securityInput);
  const upperRep = signed(upperInput);
  const cash = nonNegative(cashInput);
  const favor = nonNegative(favorInput);
  const rent = nonNegative(rentInput);
  const totalCrime = sumCrime(startingCrime);

  const customUnlockPrices = useMemo<Partial<Record<1 | 2 | 3, number>>>(() => {
    if (!overrideUnlocks) return {};
    return {
      1: nonNegative(unlockPrices[1]),
      2: nonNegative(unlockPrices[2]),
      3: nonNegative(unlockPrices[3]),
    };
  }, [overrideUnlocks, unlockPrices]);

  const scenarios = useMemo<Scenario[]>(() => {
    return ([0, 1, 2, 3] as Tier[]).map((tier) => {
      const rows = simulateInvestigation({
        startingCrime,
        startingProgress: progress,
        securityReputation: securityRep,
        upperLevelsReputation: upperRep,
        tier,
        days,
        timing,
      });
      const cost = getUpgradeCost(ownedTier, tier, difficulty, favor, customUnlockPrices);
      const fee = tier === 0 ? 0 : overrideFees ? nonNegative(fees[tier]) : FIXERS[tier].nightly;
      const runningCost = fee * rows.length;
      const allCredits = cost.upfrontCredits + runningCost;
      const last = rows.at(-1);
      return {
        tier,
        rows,
        finalTotal: last?.total ?? totalCrime,
        finalProgress: last?.progress ?? progress,
        queued: (progress >= 100 && totalCrime > 0) || Boolean(last?.officerQueued),
        cost,
        runningCost,
        allCredits,
        affordable: cost.upfrontCredits <= cash,
        rentSafe: cash - allCredits >= rent,
      };
    });
  }, [startingCrime, progress, securityRep, upperRep, days, timing, ownedTier, difficulty, favor,
    customUnlockPrices, overrideFees, fees, totalCrime, cash, rent]);

  const selected = scenarios.find((item) => item.tier === selectedTier) ?? scenarios[0];
  const noFixers = scenarios[0];
  const highCrime = totalCrime >= 1500;

  function loadExample() {
    const next = emptyInputs();
    next.weapons = "340";
    next.stolen = "180";
    setCrimeInputs(next);
    setProgressInput("30");
    setSecurityInput("0");
    setUpperInput("0");
    setOwnedTier(0);
    setSelectedTier(0);
    setDifficulty("normal");
    setDays(7);
    setTiming("before");
    setCashInput("800");
    setFavorInput("200");
    setRentInput("200");
    setOverrideFees(false);
    setOverrideUnlocks(false);
  }

  function clear() {
    setCrimeInputs(emptyInputs());
    setProgressInput("0");
    setSecurityInput("0");
    setUpperInput("0");
    setDifficulty("normal");
    setOwnedTier(0);
    setSelectedTier(0);
    setDays(7);
    setTiming("before");
    setCashInput("0");
    setFavorInput("0");
    setRentInput("0");
    setOverrideFees(false);
    setOverrideUnlocks(false);
    setFees({ 1: "25", 2: "45", 3: "70" });
    setUnlockPrices({ 1: "350", 2: "450", 3: "550" });
  }

  return (
    <section className="my-8 space-y-5 text-slate-800 dark:text-slate-100" aria-label="Security Investigation and Fixers calculator">
      <header className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30 sm:p-5">
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Security Investigation &amp; Fixers Planner</h2>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-amber-900 dark:bg-slate-900 dark:text-amber-300">Full-release rules · Oct 29, 2026</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Enter the category amounts from your <strong>Security Record</strong>. Compare the projected case, investigation progress, and the cost of leaving Fixers running. All forecasts assume no new crimes or story events.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={loadExample} className="rounded-lg bg-amber-700 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-800">Load 340 + 180 example</button>
          <button type="button" onClick={clear} className="rounded-lg border border-amber-300 px-3 py-2 text-sm font-semibold hover:bg-amber-100 dark:border-amber-700 dark:hover:bg-amber-900/40">Reset all inputs</button>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(270px,1fr)]">
        <div className={panelClass}>
          <h3 className="mb-1 text-lg font-bold">1. Your Security Record</h3>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Use current amounts from the document, not the lifetime totals on your end-of-run screen. Leave categories at zero when absent.</p>
          <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
            {CRIME_FIELDS.map(({ key, label }) => (
              <label key={key} className="block">
                <span className={labelClass}>{label}</span>
                <input
                  type="number"
                  min={0}
                  step={1}
                  inputMode="numeric"
                  className={fieldClass}
                  value={crimeInputs[key]}
                  onChange={(event) => setCrimeInputs((old) => ({ ...old, [key]: event.target.value }))}
                  aria-label={`${label} crime record in Credits`}
                />
              </label>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <label>
              <span className={labelClass}>Investigation / 100</span>
              <input type="number" min={0} max={100} step={1} className={fieldClass} value={progressInput} onChange={(e) => setProgressInput(e.target.value)} />
            </label>
            <label>
              <span className={labelClass}>Security reputation</span>
              <input type="number" min={-200} max={200} className={fieldClass} value={securityInput} onChange={(e) => setSecurityInput(e.target.value)} />
            </label>
            <label>
              <span className={labelClass}>Upper Levels rep</span>
              <input type="number" min={-200} max={200} className={fieldClass} value={upperInput} onChange={(e) => setUpperInput(e.target.value)} />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className={panelClass}>
            <h3 className="mb-3 text-lg font-bold">Your case now</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recorded crime</p>
            <p className="text-3xl font-bold tabular-nums">{num(totalCrime)} <span className="text-base font-medium">Credits</span></p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Possible sentence at officer arrival</p>
            <p className={`mt-1 text-base font-bold ${highCrime ? "text-red-600 dark:text-red-400" : ""}`}>{expectedSentence(totalCrime)}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Current investigation</p>
            <div className="mt-1 flex items-center justify-between text-sm"><span>{totalCrime < 100 ? "N/A shown below 100 crime" : "Evidence meter"}</span><strong>{progress}/100</strong></div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className={`h-full rounded-full ${progress >= 80 ? "bg-red-500" : "bg-amber-500"}`} style={{ width: `${progress}%` }} /></div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">Below 100 crime, the game may display N/A without erasing earlier progress. Sentences depend on the record when the officer arrives, not this number alone.</p>
          </div>
          <div className={panelClass}>
            <h3 className="mb-3 text-lg font-bold">Reputation effects</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Security:</strong> {securityRep >= 100 ? "VIP — routine inspections exempt; case investigation still possible" : securityRep >= 60 ? "Trusted — investigation growth halved" : securityRep <= -100 ? "By Any Means — separate Framed ending risk" : securityRep <= -60 ? "Most Wanted — investigation growth ×1.5" : securityRep <= -20 ? "Watchlist — investigation growth ×1.2" : "No investigation-growth modifier"}</p>
              <p><strong>Upper Levels:</strong> {upperRep <= -60 ? "Petition to Security — investigation growth ×1.5" : "No Petition penalty"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={panelClass}>
        <h3 className="mb-4 text-lg font-bold">2. Fixers budget &amp; forecast options</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label>
            <span className={labelClass}>Difficulty</span>
            <select className={fieldClass} value={difficulty} onChange={(e) => setDifficulty(e.target.value as Difficulty)}>
              {Object.entries(DIFFICULTIES).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
            </select>
          </label>
          <label>
            <span className={labelClass}>Already unlocked</span>
            <select className={fieldClass} value={ownedTier} onChange={(e) => setOwnedTier(Number(e.target.value) as Tier)}>
              {([0, 1, 2, 3] as Tier[]).map((tier) => <option key={tier} value={tier}>{tier === 0 ? "None" : FIXERS[tier].label}</option>)}
            </select>
          </label>
          <label>
            <span className={labelClass}>Available Credits</span>
            <input type="number" min={0} className={fieldClass} value={cashInput} onChange={(e) => setCashInput(e.target.value)} />
          </label>
          <label>
            <span className={labelClass}>Wild's Favor</span>
            <input type="number" min={0} className={fieldClass} value={favorInput} onChange={(e) => setFavorInput(e.target.value)} />
          </label>
          <label>
            <span className={labelClass}>Keep for next rent</span>
            <input type="number" min={0} className={fieldClass} value={rentInput} onChange={(e) => setRentInput(e.target.value)} />
          </label>
          <label>
            <span className={labelClass}>Forecast nights</span>
            <select className={fieldClass} value={days} onChange={(e) => setDays(Number(e.target.value))}>
              {[1, 2, 3, 4, 5, 6, 7].map((v) => <option key={v} value={v}>{v} {v === 1 ? "night" : "nights"}</option>)}
            </select>
          </label>
          <label className="sm:col-span-2">
            <span className={labelClass}>Compare the sequence of nightly effects</span>
            <select className={fieldClass} value={timing} onChange={(e) => setTiming(e.target.value as ServiceTiming)}>
              <option value="before">Fixers first, then natural decay &amp; investigation</option>
              <option value="after">Natural decay &amp; investigation first, then Fixers</option>
            </select>
          </label>
        </div>

        <details className="mt-4 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
          <summary className="cursor-pointer text-sm font-semibold">Advanced: enter your actual Joe Wild prices</summary>
          <p className="my-2 text-xs leading-relaxed text-slate-500">The listed unlock prices use the difficulty multiplier, but other perks can affect Joe Wild prices. Use the exact values shown in your save when they differ. Nightly fees are not assumed to scale with difficulty.</p>
          <label className="mb-2 flex items-center gap-2 text-sm"><input type="checkbox" checked={overrideUnlocks} onChange={(e) => setOverrideUnlocks(e.target.checked)} /> Use custom unlock prices</label>
          {overrideUnlocks && (
            <div className="mb-3 grid grid-cols-3 gap-2">{([1, 2, 3] as const).map((tier) => <label key={tier}><span className={labelClass}>Tier {tier} unlock</span><input className={fieldClass} type="number" min={0} value={unlockPrices[tier]} onChange={(e) => setUnlockPrices((old) => ({ ...old, [tier]: e.target.value }))} /></label>)}</div>
          )}
          <label className="mb-2 flex items-center gap-2 text-sm"><input type="checkbox" checked={overrideFees} onChange={(e) => setOverrideFees(e.target.checked)} /> Use custom nightly fees</label>
          {overrideFees && (
            <div className="grid grid-cols-3 gap-2">{([1, 2, 3] as const).map((tier) => <label key={tier}><span className={labelClass}>Tier {tier} fee</span><input className={fieldClass} type="number" min={0} value={fees[tier]} onChange={(e) => setFees((old) => ({ ...old, [tier]: e.target.value }))} /></label>)}</div>
          )}
        </details>
      </div>

      <div className={panelClass}>
        <h3 className="mb-1 text-lg font-bold">3. Compare the four options</h3>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">Unlocked levels are cumulative; buying III from zero requires I and II first. Wild's Favor pays unlock costs first, then Credits. Nightly fees use Credits. Scenario estimates assume you leave the selected service ON.</p>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <tr>
                <th className="p-3">Option</th>
                <th className="p-3">After {days} nights*</th>
                <th className="p-3">Investigation</th>
                <th className="p-3">Unlock (Favor / Credits)</th>
                <th className="p-3">Modeled night fees</th>
                <th className="p-3">Rent buffer</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((item) => (
                <tr key={item.tier} className={`border-t border-slate-200 dark:border-slate-700 ${item.tier === selectedTier ? "bg-amber-50 dark:bg-amber-950/30" : ""}`}>
                  <td className="p-3">
                    <button type="button" onClick={() => setSelectedTier(item.tier)} className="font-semibold text-amber-800 underline decoration-dotted underline-offset-2 hover:text-amber-600 dark:text-amber-300" aria-pressed={item.tier === selectedTier}>{FIXERS[item.tier].label}</button>
                  </td>
                  <td className="p-3 tabular-nums">{num(item.finalTotal)} C <span className="block text-xs text-slate-500">{item.rows.length} modeled</span></td>
                  <td className="p-3 tabular-nums">{item.finalProgress}/100 {item.queued && <span className="block font-semibold text-red-600 dark:text-red-400">Case at 100</span>}</td>
                  <td className="p-3 tabular-nums">{num(item.cost.favorUsed)} F / {num(item.cost.upfrontCredits)} C{!item.affordable && <span className="block text-xs font-semibold text-red-600">Cannot unlock now — hypothetical only</span>}</td>
                  <td className="p-3 tabular-nums">{num(item.runningCost)} C</td>
                  <td className="p-3">{!item.affordable ? <span className="font-semibold text-red-600 dark:text-red-400">Unlock unaffordable</span> : item.rentSafe ? <span className="font-semibold text-emerald-700 dark:text-emerald-400">Covered**</span> : <span className="font-semibold text-red-600 dark:text-red-400">Short**</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          * Forecast stops at investigation 100. Modeled fees cover only simulated nights, not necessarily the full selected period. Unaffordable upgrades are shown as what-if comparisons, not available purchases. ** Rent buffer means current Credits minus upfront Credits and simulated service fees, with no new sales, rent charges or other expenses included. Favor earned from nightly fees is not forecast.
        </p>
        {noFixers.finalProgress === selected.finalProgress && noFixers.finalTotal !== selected.finalTotal && selectedTier !== 0 && (
          <p className="mt-2 rounded-lg bg-amber-50 p-3 text-sm dark:bg-amber-950/30">Fixers lowered the case value, but did not reduce already accumulated investigation points. Check the current Security Record before assuming the officer will stand down.</p>
        )}
      </div>

      <div className={panelClass}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold">4. Night-by-night: {FIXERS[selectedTier].label}</h3>
          <label className="flex items-center gap-2 text-sm font-semibold">
            View plan
            <select className={`${fieldClass} !w-auto`} value={selectedTier} onChange={(e) => setSelectedTier(Number(e.target.value) as Tier)}>
              {([0, 1, 2, 3] as Tier[]).map((tier) => <option key={tier} value={tier}>{FIXERS[tier].label}</option>)}
            </select>
          </label>
        </div>
        {progress >= 100 ? (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950/30 dark:text-red-200">Your investigation is at 100/100. Normal daily forecasts are paused. Check the Assigned Case Officer and Active Operation in your Security Record: an officer may have been dispatched, but an empty crime record is not an automatic sentence.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[660px] border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase text-slate-600 dark:bg-slate-800 dark:text-slate-300"><tr><th className="p-3">Morning</th><th className="p-3">Natural decay</th><th className="p-3">Fixers removed</th><th className="p-3">Crime at investigation check</th><th className="p-3">Crime after nightly effects</th><th className="p-3">Evidence gain</th><th className="p-3">Evidence / 100</th><th className="p-3">Case at arrival</th></tr></thead>
              <tbody>
                {selected.rows.map((row) => <tr key={row.day} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="p-3 font-semibold">+{row.day}</td><td className="p-3 tabular-nums">−{num(row.naturalDecay)}</td><td className="p-3 tabular-nums">−{num(row.fixerRemoved)}</td><td className="p-3 tabular-nums">{num(row.investigationTotal)} C</td><td className="p-3 tabular-nums">{num(row.total)} C</td><td className="p-3 tabular-nums">+{row.appliedGrowth} <span className="text-xs text-slate-500">(base {row.baseGrowth})</span></td><td className="p-3 tabular-nums">{row.progress}/100</td><td className="p-3">{row.officerQueued ? <span className="font-semibold text-red-600">Officer may be queued</span> : row.sentence}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          The investigation-growth bracket uses the case amount at the morning check. When Fixers runs after that check, the final crime total can be smaller without reducing that morning's already calculated evidence gain.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {selected.queued ? "Investigation 100 is a dispatch warning, not an automatic sentence. The game checks the crime record when the officer arrives; evidence below 95 or a cleared case may withdraw that investigation path." : "The displayed sentence is a current-case bracket, not a guaranteed outcome. It can change before an officer arrives, and inspection-related punishments are separate."}
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <h3 className="mb-2 font-bold text-slate-800 dark:text-slate-100">What the planner does and does not predict</h3>
        <p className="mb-2">Each crime category naturally loses 20 Credits per day while progress is below 80. Each Fixers tier also reduces each category separately. Investigation growth is calculated from the post-decay record, with the game's reputation modifiers and integer rounding.</p>
        <p className="mb-2"><strong>Timing matters:</strong> published references describe the individual nightly effects, but do not establish the exact timing of Fixers relative to the morning investigation calculation. Use the timing selector to check both possible results; do not treat a borderline result as certain.</p>
        <p className="mb-2"><strong>Not modeled:</strong> newly committed crimes, delayed item-tracking conversions, scripted cases, one-time Evidence Removal, officer travel/dialogue scheduling, inspection confiscations, changing reputation, insufficient nightly cash, or service interruptions. Security VIP protects against routine inspections but does not erase an open case. Security at −100 can trigger a separate Framed ending.</p>
        <p className="text-xs">Rule reference: Probably Stolen full release, October 29, 2026 (Steam build 26284217). Recheck after major game patches. Independent math implementation; not an official game feature.</p>
      </div>
    </section>
  );
}
