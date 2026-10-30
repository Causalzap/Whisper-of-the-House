"use client";

import { useMemo, useState, type ChangeEvent } from "react";

/**
 * Probably Stolen — Gunsmith Custom Order & Upgrade Service Checker
 * The values in ORDER_DATA represent reference Class I–III requests.
 * They are not a promise that an individual trade tablet will quote the same price:
 * difficulty, market events and other price modifiers may change the final offer.
 *
 * Users enter the CURRENT values on their gun tooltip. Do not silently treat the
 * parenthesized/base number as the current number. Attribute targets are strict >.
 */

type Tier = 1 | 2 | 3;
type Stat =
  | "firepower"
  | "style"
  | "reliability"
  | "recoil"
  | "ergonomics"
  | "accuracy"
  | "size";
type ServiceStat = Exclude<Stat, "size">;
type Caliber = "unknown" | "22" | "10mm" | "other";
type Suppressor = "none" | "makeshift" | "proper";
type Rule =
  | { kind: "stat"; stat: Stat; above: number }
  | { kind: "caliber"; caliber: "22" | "10mm" }
  | { kind: "suppressor"; level: "any" | "proper" };
type Bonus = { rule: Rule; credits: number };
type Order = {
  id: string;
  tier: Tier;
  title: string;
  summary: string;
  kind: "fixed" | "best";
  base?: readonly [number, number];
  required: Rule[];
  bonuses: Bonus[];
};
type Fields = Record<Stat, string>;
type ServiceFields = Record<ServiceStat, string>;

const STAT_NAMES: Record<Stat, string> = {
  firepower: "Firepower",
  style: "Style",
  reliability: "Reliability",
  recoil: "Recoil Control",
  ergonomics: "Ergonomics",
  accuracy: "Accuracy",
  size: "Size",
};
const STATS: Stat[] = [
  "firepower", "style", "reliability", "recoil", "ergonomics", "accuracy", "size",
];
const SERVICE_STATS: ServiceStat[] = [
  "firepower", "style", "reliability", "recoil", "ergonomics", "accuracy",
];
const stat = (name: Stat, above: number): Rule => ({ kind: "stat", stat: name, above });
const caliber = (value: "22" | "10mm"): Rule => ({ kind: "caliber", caliber: value });
const suppress = (level: "any" | "proper"): Rule => ({ kind: "suppressor", level });
const bonus = (name: Stat, above: number, credits: number): Bonus => ({
  rule: stat(name, above), credits,
});
const silencer = (level: "any" | "proper", credits: number): Bonus => ({
  rule: suppress(level), credits,
});
const fixed = (
  id: string, tier: Tier, title: string, summary: string,
  base: readonly [number, number], required: Rule[], bonuses: Bonus[],
): Order => ({ id, tier, title, summary, kind: "fixed", base, required, bonuses });
const best = (tier: Tier, requiredCaliber: "22" | "10mm"): Order => ({
  id: `t${tier}-best`, tier,
  title: `Best ${requiredCaliber === "22" ? ".22 SR" : "10mm"} gun`,
  summary: "Pays 150% of the gun's market price instead of a fixed order fee.",
  kind: "best", required: [caliber(requiredCaliber)], bonuses: [],
});

const ORDER_DATA: Order[] = [
  // Class I: seven stat-based requests, plus the best .22 SR request.
  fixed("t1-accurate", 1, "Accurate gun", "Accuracy-focused Class I order",
    [86, 96], [stat("firepower", 17)],
    [bonus("accuracy", 20, 46), bonus("accuracy", 24, 46),
      bonus("accuracy", 30, 46), bonus("reliability", 24, 46)]),
  fixed("t1-power", 1, "Serious firepower", "Firepower-focused Class I order",
    [63, 73], [stat("firepower", 11)],
    [bonus("firepower", 14, 34), bonus("firepower", 17, 40),
      bonus("firepower", 20, 40), bonus("firepower", 22, 40)]),
  fixed("t1-big", 1, "Big and intimidating", "Size-focused Class I order",
    [98, 108], [stat("firepower", 11)],
    [bonus("size", 10, 12), bonus("size", 12, 17), bonus("size", 14, 23)]),
  fixed("t1-suppressed", 1, "Accurate, preferably suppressed", "Accuracy plus suppressor bonuses",
    [86, 96], [stat("firepower", 17)],
    [bonus("accuracy", 20, 46), bonus("accuracy", 24, 46),
      bonus("accuracy", 30, 46), bonus("reliability", 24, 46),
      silencer("any", 22), silencer("proper", 53)]),
  fixed("t1-style", 1, "Stylish gun", "Style-focused Class I order",
    [69, 79], [stat("style", 4)],
    [bonus("style", 7, 34), bonus("style", 14, 63),
      bonus("style", 17, 57), bonus("style", 20, 52), bonus("style", 23, 46)]),
  fixed("t1-balanced", 1, "Shoots straight and does not jam", "Balanced Class I order",
    [92, 102], [stat("firepower", 15), stat("reliability", 23), stat("accuracy", 23)],
    [bonus("firepower", 21, 29), bonus("style", 17, 29),
      bonus("reliability", 32, 34), bonus("recoil", 69, 29),
      bonus("ergonomics", 54, 29), bonus("accuracy", 32, 34),
      bonus("size", 11, 23), silencer("any", 17), silencer("proper", 40)]),
  fixed("t1-handling", 1, "Steady and easy to handle", "Ergonomics and recoil control",
    [100, 110], [stat("ergonomics", 44), stat("recoil", 54)],
    [bonus("ergonomics", 59, 35), bonus("ergonomics", 69, 40),
      bonus("recoil", 74, 35), bonus("recoil", 84, 40),
      bonus("accuracy", 29, 25)]),
  best(1, "22"),
  // Class II: six stat-based requests, plus the best 10mm request.
  fixed("t2-reliable", 2, "Reliable, bonus for suppression", "Reliability-focused Class II order",
    [190, 200], [stat("reliability", 32)],
    [bonus("reliability", 39, 37), bonus("reliability", 41, 45),
      bonus("reliability", 45, 50), bonus("reliability", 47, 50),
      silencer("any", 27), silencer("proper", 63)]),
  fixed("t2-style", 2, "Stylish gun", "Style-focused Class II order",
    [190, 200], [stat("style", 25)],
    [bonus("style", 31, 25), bonus("style", 34, 30),
      bonus("style", 41, 35), bonus("style", 47, 45), bonus("style", 51, 55)]),
  fixed("t2-big", 2, "Intimidating and large", "Size-focused Class II order",
    [190, 200], [stat("firepower", 25)],
    [bonus("size", 10, 40), bonus("size", 11, 45),
      bonus("size", 12, 50), bonus("size", 13, 55)]),
  fixed("t2-power", 2, "Serious firepower", "Firepower-focused Class II order",
    [190, 200], [stat("firepower", 26)],
    [bonus("firepower", 28, 40), bonus("firepower", 32, 45),
      bonus("firepower", 35, 50), bonus("firepower", 38, 55)]),
  fixed("t2-sidearm", 2, "Well-rounded sidearm", "Balanced Class II order",
    [200, 210], [stat("firepower", 25), stat("reliability", 29), stat("accuracy", 33)],
    [bonus("firepower", 35, 40), bonus("style", 37, 35),
      bonus("reliability", 41, 40), bonus("recoil", 39, 35),
      bonus("ergonomics", 49, 35), bonus("accuracy", 47, 40),
      bonus("size", 11, 30), silencer("any", 22), silencer("proper", 53)]),
  fixed("t2-handling", 2, "10mm with good handling", "Caliber, ergonomics and recoil control",
    [200, 210], [caliber("10mm"), stat("ergonomics", 39), stat("recoil", 29)],
    [bonus("ergonomics", 49, 35), bonus("ergonomics", 59, 40),
      bonus("recoil", 34, 35), bonus("recoil", 44, 40), bonus("recoil", 52, 45)]),
  best(2, "10mm"),
  // Class III: six stat-based requests, plus the best 10mm request.
  fixed("t3-power", 3, "Serious firepower", "Firepower-focused Class III order",
    [350, 360], [stat("firepower", 59)],
    [bonus("firepower", 64, 65), bonus("firepower", 69, 70),
      bonus("firepower", 74, 75), bonus("firepower", 79, 80)]),
  fixed("t3-style", 3, "Stylish gun", "Style-focused Class III order",
    [350, 360], [stat("style", 52)],
    [bonus("style", 55, 65), bonus("style", 58, 70),
      bonus("style", 63, 75), bonus("style", 68, 80)]),
  fixed("t3-big", 3, "Big and intimidating", "Size-focused Class III order",
    [350, 360], [stat("size", 16)],
    [bonus("size", 17, 80), bonus("size", 19, 85),
      bonus("size", 22, 90), bonus("size", 25, 95)]),
  fixed("t3-reliable", 3, "Reliable and suppressed", "Reliability-focused Class III order",
    [350, 360], [stat("reliability", 59)],
    [bonus("reliability", 64, 75), bonus("reliability", 67, 80),
      bonus("reliability", 70, 95), bonus("reliability", 74, 100),
      silencer("any", 33), silencer("proper", 77)]),
  fixed("t3-handling", 3, "10mm with good handling", "Caliber, ergonomics and recoil control",
    [360, 370], [caliber("10mm"), stat("ergonomics", 54), stat("recoil", 24)],
    [bonus("ergonomics", 69, 60), bonus("ergonomics", 79, 65),
      bonus("recoil", 39, 60), bonus("recoil", 54, 65), bonus("recoil", 69, 70)]),
  fixed("t3-balanced", 3, "No weak spots", "Balanced Class III order",
    [360, 370], [stat("firepower", 57), stat("reliability", 57), stat("accuracy", 44)],
    [bonus("firepower", 74, 65), bonus("style", 64, 65),
      bonus("reliability", 71, 70), bonus("recoil", 39, 60),
      bonus("ergonomics", 69, 60), bonus("accuracy", 61, 65),
      bonus("size", 19, 60), silencer("any", 30), silencer("proper", 70)]),
  best(3, "10mm"),
];

const PERMITS: Record<Tier, {
  name: string; obtainedAt: number; revokedBelow: number; visitChance: number[];
}> = {
  1: { name: "Class I Weapon Permit", obtainedAt: 20, revokedBelow: 0, visitChance: [50, 75, 100] },
  2: { name: "Class II Weapon Permit", obtainedAt: 50, revokedBelow: 30, visitChance: [40, 60, 80, 100] },
  3: { name: "Class III Weapon Permit", obtainedAt: 80, revokedBelow: 60, visitChance: [35, 52, 70, 87, 100] },
};
const SERVICE: Record<Tier, {
  fee: readonly [number, number]; count: number; increment: number;
  doubleBonus: number; extraCount: number; extraBonus: number;
}> = {
  1: { fee: [30, 40], count: 1, increment: 8, doubleBonus: 15, extraCount: 2, extraBonus: 12 },
  2: { fee: [60, 70], count: 2, increment: 10, doubleBonus: 25, extraCount: 2, extraBonus: 20 },
  3: { fee: [100, 110], count: 2, increment: 12, doubleBonus: 40, extraCount: 3, extraBonus: 32 },
};

const emptyStats = (): Fields => ({
  firepower: "", style: "", reliability: "", recoil: "",
  ergonomics: "", accuracy: "", size: "",
});
const emptyServiceStats = (): ServiceFields => ({
  firepower: "", style: "", reliability: "", recoil: "",
  ergonomics: "", accuracy: "",
});
const toNumber = (value: string): number | null => {
  if (value.trim() === "") return null;
  const result = Number(value);
  return Number.isFinite(result) && result >= 0 ? result : null;
};
const format = (value: number): string => value.toLocaleString("en-US", { maximumFractionDigits: 2 });
const fieldClass = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-amber-900";
const labelClass = "mb-1 block text-xs font-semibold text-slate-600 dark:text-slate-300";
const panelClass = "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:p-5";

export function describeGunRule(rule: Rule): string {
  if (rule.kind === "stat") return `${STAT_NAMES[rule.stat]} > ${rule.above}`;
  if (rule.kind === "caliber") return `Caliber: ${rule.caliber === "22" ? ".22 SR" : "10mm"}`;
  return rule.level === "proper" ? "Proper Suppressor" : "Makeshift / Proper Suppressor";
}
export function isGunRuleMet(
  rule: Rule, stats: Fields, currentCaliber: Caliber, currentSuppressor: Suppressor,
): boolean {
  if (rule.kind === "caliber") return currentCaliber === rule.caliber;
  if (rule.kind === "suppressor")
    return rule.level === "any" ? currentSuppressor !== "none" : currentSuppressor === "proper";
  const value = toNumber(stats[rule.stat]);
  return value !== null && value > rule.above;
}
export function evaluateGunOrder(
  order: Order, stats: Fields, currentCaliber: Caliber, currentSuppressor: Suppressor,
) {
  const needed = order.required.map((rule) => ({
    rule, met: isGunRuleMet(rule, stats, currentCaliber, currentSuppressor),
  }));
  const earned = order.bonuses.map((item) => ({
    ...item, met: isGunRuleMet(item.rule, stats, currentCaliber, currentSuppressor),
  }));
  return {
    ready: needed.every((item) => item.met),
    needed,
    earned,
    bonusCredits: earned.reduce((sum, item) => sum + (item.met ? item.credits : 0), 0),
    maximumBonus: order.bonuses.reduce((sum, item) => sum + item.credits, 0),
    earnedCount: earned.filter((item) => item.met).length,
  };
}

const serviceDefaults = (tier: Tier) => {
  if (tier === 1) return { required: ["firepower"] as ServiceStat[], extras: ["accuracy", "reliability"] as ServiceStat[] };
  if (tier === 2) return { required: ["firepower", "reliability"] as ServiceStat[], extras: ["accuracy", "ergonomics"] as ServiceStat[] };
  return { required: ["firepower", "reliability"] as ServiceStat[], extras: ["accuracy", "ergonomics", "style"] as ServiceStat[] };
};

type CheckResult = "met" | "missing" | "below";
function valueStatus(rule: Rule, fields: Fields, currentCaliber: Caliber, currentSuppressor: Suppressor): CheckResult {
  if (rule.kind === "stat" && toNumber(fields[rule.stat]) === null) return "missing";
  if (rule.kind === "caliber" && currentCaliber === "unknown") return "missing";
  return isGunRuleMet(rule, fields, currentCaliber, currentSuppressor) ? "met" : "below";
}
function Status({ status }: { status: CheckResult }) {
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${
      status === "met"
        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
        : status === "below"
          ? "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200"
          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
    }`}>{status === "met" ? "Met" : status === "below" ? "Not met" : "Enter value"}</span>
  );
}

export default function GunsmithOrderChecker() {
  const [mode, setMode] = useState<"sale" | "service">("sale");
  const [tier, setTier] = useState<Tier>(1);
  const [orderId, setOrderId] = useState("t1-accurate");
  const [fields, setFields] = useState<Fields>(emptyStats);
  const [currentCaliber, setCurrentCaliber] = useState<Caliber>("unknown");
  const [currentSuppressor, setCurrentSuppressor] = useState<Suppressor>("none");
  const [gunMarketPrice, setGunMarketPrice] = useState("");
  const [gunCost, setGunCost] = useState("");
  const [modCost, setModCost] = useState("");
  const [daysSinceBuyer, setDaysSinceBuyer] = useState(0);
  const [serviceBefore, setServiceBefore] = useState<ServiceFields>(emptyServiceStats);
  const [serviceAfter, setServiceAfter] = useState<ServiceFields>(emptyServiceStats);
  const [serviceRequired, setServiceRequired] = useState<ServiceStat[]>(["firepower"]);
  const [serviceExtras, setServiceExtras] = useState<ServiceStat[]>(["accuracy", "reliability"]);
  const [partsValue, setPartsValue] = useState("");

  const orders = useMemo(() => ORDER_DATA.filter((entry) => entry.tier === tier), [tier]);
  const order = orders.find((entry) => entry.id === orderId) ?? orders[0];
  const result = useMemo(
    () => evaluateGunOrder(order, fields, currentCaliber, currentSuppressor),
    [order, fields, currentCaliber, currentSuppressor],
  );
  const hasRequiredInputs = order.required.every((rule) => valueStatus(rule, fields, currentCaliber, currentSuppressor) !== "missing");
  const hasCurrentPrice = toNumber(gunMarketPrice) !== null;
  const saleBaseRange = order.base;
  const grossMin = order.kind === "fixed" && saleBaseRange ? saleBaseRange[0] + result.bonusCredits : null;
  const grossMax = order.kind === "fixed" && saleBaseRange ? saleBaseRange[1] + result.bonusCredits : null;
  const bestGross = order.kind === "best" && hasCurrentPrice ? (toNumber(gunMarketPrice) ?? 0) * 1.5 : null;
  const haveSaleCosts = toNumber(gunCost) !== null && toNumber(modCost) !== null;
  const costTotal = haveSaleCosts ? (toNumber(gunCost) ?? 0) + (toNumber(modCost) ?? 0) : null;
  const serviceCfg = SERVICE[tier];
  const serviceReq = serviceRequired.slice(0, serviceCfg.count);
  const serviceExtra = serviceExtras.slice(0, serviceCfg.extraCount);
  const allSelected = [...serviceReq, ...serviceExtra];
  const duplicateSelections = new Set(allSelected).size !== allSelected.length;
  const serviceRows = SERVICE_STATS.map((key) => {
    const before = toNumber(serviceBefore[key]);
    const after = toNumber(serviceAfter[key]);
    return { key, before, after, change: before === null || after === null ? null : after - before };
  });
  const changeFor = (key: ServiceStat) => serviceRows.find((row) => row.key === key)?.change ?? null;
  const serviceReqValid = serviceReq.length === serviceCfg.count && serviceReq.every((key) => {
    const diff = changeFor(key);
    return diff !== null && diff >= serviceCfg.increment;
  });
  const serviceHasInputs = allSelected.every((key) => changeFor(key) !== null);
  const doubleBonusMet = serviceReq.some((key) => {
    const diff = changeFor(key);
    return diff !== null && diff >= serviceCfg.increment * 2;
  });
  const serviceExtraCount = serviceExtra.filter((key) => {
    const diff = changeFor(key);
    return diff !== null && diff >= serviceCfg.increment;
  }).length;
  const serviceBonuses = (doubleBonusMet ? serviceCfg.doubleBonus : 0) + serviceExtraCount * serviceCfg.extraBonus;
  const serviceReady = !duplicateSelections && serviceReqValid && serviceHasInputs;
  const receivedPartsValue = toNumber(partsValue);

  const chooseTier = (next: Tier) => {
    setTier(next);
    setOrderId(ORDER_DATA.find((item) => item.tier === next)?.id ?? "t1-accurate");
    const defaults = serviceDefaults(next);
    setServiceRequired(defaults.required);
    setServiceExtras(defaults.extras);
    setDaysSinceBuyer(0);
  };
  const loadExample = () => {
    chooseTier(1);
    setMode("sale");
    setOrderId("t1-accurate");
    // Six CURRENT numbers from an example Nestfire Compact tooltip.
    // The gun's Size was not in the recorded example, so it remains blank.
    setFields({ firepower: "17", style: "12", reliability: "25", recoil: "55", ergonomics: "42", accuracy: "25", size: "" });
    setCurrentCaliber("22");
    setCurrentSuppressor("none");
    setGunMarketPrice("");
    setGunCost("");
    setModCost("");
  };
  const clear = () => {
    setFields(emptyStats());
    setCurrentCaliber("unknown");
    setCurrentSuppressor("none");
    setGunMarketPrice("");
    setGunCost("");
    setModCost("");
    setServiceBefore(emptyServiceStats());
    setServiceAfter(emptyServiceStats());
    setPartsValue("");
  };

  const updateServicePick = (kind: "required" | "extra", index: number, newValue: ServiceStat) => {
    if (kind === "required") setServiceRequired((old) => old.map((value, idx) => idx === index ? newValue : value));
    else setServiceExtras((old) => old.map((value, idx) => idx === index ? newValue : value));
  };

  return (
    <section className="my-8 space-y-5 text-slate-800 dark:text-slate-100" aria-label="Probably Stolen gunsmith custom order checker">
      <header className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Gunsmith Custom Order Checker</h2>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-amber-900 dark:bg-slate-900 dark:text-amber-300">Class I–III orders</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed">
          Pick the buyer's request and enter the <strong>current gun stats</strong> shown in your inventory.
          See whether you can deliver it, which bonuses you earn, and which upgrade is worth pursuing next.
          You can also check requests where the buyer brings their own gun for modification.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={loadExample} className="rounded-lg bg-amber-700 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-800">Load Nestfire example</button>
          <button type="button" onClick={clear} className="rounded-lg border border-amber-300 px-3 py-2 text-sm font-semibold hover:bg-amber-100 dark:border-amber-700 dark:hover:bg-amber-900/40">Clear values</button>
        </div>
      </header>

      <div className={panelClass}>
        <h3 className="mb-3 text-lg font-semibold">1. Choose the buyer's request</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <label>
            <span className={labelClass}>Order type</span>
            <select className={fieldClass} value={mode} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setMode(event.target.value as "sale" | "service")}>
              <option value="sale">Sell a custom gun</option>
              <option value="service">Improve the customer's gun</option>
            </select>
          </label>
          <label>
            <span className={labelClass}>Weapon Permit class</span>
            <select className={fieldClass} value={tier} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => chooseTier(Number(event.target.value) as Tier)}>
              <option value={1}>Class I</option>
              <option value={2}>Class II</option>
              <option value={3}>Class III</option>
            </select>
          </label>
          {mode === "sale" && (
            <label>
              <span className={labelClass}>Buyer order</span>
              <select className={fieldClass} value={order.id} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setOrderId(event.target.value)}>
                {orders.map((entry) => <option key={entry.id} value={entry.id}>{entry.title}</option>)}
              </select>
            </label>
          )}
        </div>
        {mode === "sale" && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{order.summary}. All numeric requirements mean <strong>strictly greater than</strong> the displayed target: a gun with Firepower 17 does <strong>not</strong> satisfy Firepower &gt; 17.</p>}
        <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <strong>{PERMITS[tier].name}:</strong> Joe Wild's permit is delivered when Security reputation reaches +{PERMITS[tier].obtainedAt}; it can be revoked below +{PERMITS[tier].revokedBelow}. Display the permit to attract this class of gun buyer. Permit ownership does not guarantee a buyer on every day.
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <label htmlFor="gunsmith-no-buyer-days" className="font-semibold">Consecutive days without this buyer:</label>
            <select id="gunsmith-no-buyer-days" className="rounded border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-600 dark:bg-slate-900" value={daysSinceBuyer} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setDaysSinceBuyer(Number(event.target.value))}>
              {[0, 1, 2, 3, 4].map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
            <strong>Base visit chance: {PERMITS[tier].visitChance[Math.min(daysSinceBuyer, PERMITS[tier].visitChance.length - 1)]}%</strong>
            <span>(market events can change this)</span>
          </div>
        </div>
      </div>

      {mode === "sale" ? (
        <>
          <div className={panelClass}>
            <h3 className="mb-2 text-lg font-semibold">2. Enter your gun's actual stats</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">Use the finished numbers after condition and equipped modifications, not the parenthesized base values. You can leave unrelated fields blank.</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {STATS.map((key) => <label key={key}>
                <span className={labelClass}>{STAT_NAMES[key]}</span>
                <input className={fieldClass} type="number" inputMode="decimal" min={0} step="any" placeholder="Current value" value={fields[key]} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFields((old) => ({ ...old, [key]: event.target.value }))} />
              </label>)}
              <label>
                <span className={labelClass}>Caliber</span>
                <select className={fieldClass} value={currentCaliber} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setCurrentCaliber(event.target.value as Caliber)}>
                  <option value="unknown">Not entered</option>
                  <option value="22">.22 SR</option>
                  <option value="10mm">10mm</option>
                  <option value="other">Another caliber</option>
                </select>
              </label>
              <label>
                <span className={labelClass}>Suppressor fitted</span>
                <select className={fieldClass} value={currentSuppressor} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setCurrentSuppressor(event.target.value as Suppressor)}>
                  <option value="none">None</option>
                  <option value="makeshift">Makeshift Suppressor</option>
                  <option value="proper">Proper Suppressor</option>
                </select>
              </label>
              {order.kind === "best" && <label>
                <span className={labelClass}>Gun's current market value (Credits)</span>
                <input className={fieldClass} type="number" min={0} step="any" value={gunMarketPrice} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setGunMarketPrice(event.target.value)} placeholder="Enter displayed value" />
              </label>}
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">A proper Suppressor also counts toward the lower Makeshift / Suppressor bonus. Weapon condition and fitted parts can change the displayed stats. This checker does not calculate mod compatibility or predict the effect of unequipped parts.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={panelClass}>
              <h3 className="mb-3 text-lg font-semibold">3. Required conditions</h3>
              <div className="space-y-2">
                {result.needed.map(({ rule }, index) => <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800" key={index}>
                  <span className="font-medium">{describeGunRule(rule)}</span>
                  <Status status={valueStatus(rule, fields, currentCaliber, currentSuppressor)} />
                </div>)}
              </div>
              <p className={`mt-3 rounded-lg p-3 text-sm font-semibold ${
                hasRequiredInputs && result.ready ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" :
                hasRequiredInputs ? "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200" :
                "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              }`} aria-live="polite">
                {hasRequiredInputs && result.ready ? "All listed requirements met — the gun qualifies for this request." :
                  hasRequiredInputs ? "Not ready — at least one required condition is missing." :
                  "Enter the required values to check whether the gun qualifies."}
              </p>
              {hasRequiredInputs && !result.ready && <p className="mt-3 text-sm">Before delivering, fix: <strong>{result.needed.filter((row) => !row.met).map((row) => describeGunRule(row.rule)).join("; ")}</strong>.</p>}
            </div>
            <div className={panelClass}>
              <h3 className="mb-3 text-lg font-semibold">4. Bonus conditions</h3>
              {result.earned.length === 0 ? <p className="text-sm text-slate-600 dark:text-slate-300">This request has no separate stat bonuses. Its offer is based on market value.</p> :
                <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
                  {result.earned.map((row, index) => <div key={index} className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 text-sm dark:border-slate-800">
                    <div><span className="block font-medium">{describeGunRule(row.rule)}</span><span className="text-xs text-slate-500">+{row.credits} Credits</span></div>
                    <Status status={valueStatus(row.rule, fields, currentCaliber, currentSuppressor)} />
                  </div>)}
                </div>}
              <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Qualified bonus entries</p>
                <p className="mt-1 text-2xl font-bold tabular-nums">{result.earnedCount} / {result.earned.length}</p>
                <p className="text-sm">+{format(result.bonusCredits)} / +{format(result.maximumBonus)} possible Credits</p>
                {!result.ready && <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Potential only: these bonuses are not payable until the required conditions are met.</p>}
              </div>
            </div>
          </div>

          <div className={panelClass}>
            <h3 className="mb-3 text-lg font-semibold">5. Estimated order payment</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Reference payment (before market modifiers)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums" aria-live="polite">
                  {order.kind === "best" ? bestGross === null ? "Enter gun value" : `${format(bestGross)} Credits` :
                    `${format(grossMin ?? 0)}–${format(grossMax ?? 0)} Credits`}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {order.kind === "best" ? "1.5 × the gun's entered market value" : `Base ${format(saleBaseRange?.[0] ?? 0)}–${format(saleBaseRange?.[1] ?? 0)} + ${format(result.bonusCredits)} qualified bonus Credits`}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Can you fulfill it?</p>
                <p className="mt-1 text-xl font-bold">{!hasRequiredInputs ? "Awaiting required inputs" : result.ready ? "Yes — based on listed conditions" : "No — modify or change the gun"}</p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Gun buyers do not haggle. Your actual quote may differ due to difficulty, market events and other price changes.</p>
              </div>
            </div>
            <details className="mt-4 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <summary className="cursor-pointer text-sm font-semibold">Optional: estimate margin after gun and mod costs</summary>
              <p className="mt-2 text-xs text-slate-500">Enter your real cost basis. If you already owned the gun, include what you paid for it rather than treating its value as free profit. A cost of 0 is allowed; an empty field means unknown.</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label><span className={labelClass}>Gun acquisition / production cost</span><input className={fieldClass} type="number" min={0} step="any" value={gunCost} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setGunCost(event.target.value)} placeholder="Credits" /></label>
                <label><span className={labelClass}>Added parts and modifications cost</span><input className={fieldClass} type="number" min={0} step="any" value={modCost} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setModCost(event.target.value)} placeholder="Credits" /></label>
              </div>
              <p className="mt-3 text-sm font-semibold">
                {!haveSaleCosts || costTotal === null ? "Enter both costs to calculate a reference margin." :
                  order.kind === "best" && bestGross !== null ? `Reference margin: ${format(bestGross - costTotal)} Credits` :
                  order.kind === "fixed" ? `Reference margin: ${format((grossMin ?? 0) - costTotal)}–${format((grossMax ?? 0) - costTotal)} Credits` :
                  "Enter the gun market value to calculate the margin."}
              </p>
              <p className="mt-1 text-xs text-slate-500">Before rent, service fees, market effects and any remaining stock costs. An unqualified order cannot be sold at this modeled payment.</p>
            </details>
          </div>
        </>
      ) : (
        <>
          <div className={panelClass}>
            <h3 className="mb-2 text-lg font-semibold">2. Check the customer's upgrade request</h3>
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">For a service order, the customer brings the gun. Choose the exact required and bonus attributes shown in the customer's request. Then enter each stat before and after your changes.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-semibold">Required attributes (+{serviceCfg.increment} each)</h4>
                <div className="space-y-2">{Array.from({ length: serviceCfg.count }, (_, index) => <label key={`req-${index}`} className="block">
                  <span className={labelClass}>Required stat {index + 1}</span>
                  <select className={fieldClass} value={serviceReq[index]} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => updateServicePick("required", index, event.target.value as ServiceStat)}>
                    {SERVICE_STATS.map((key) => <option key={key} value={key}>{STAT_NAMES[key]}</option>)}
                  </select>
                </label>)}</div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Bonus attributes (+{serviceCfg.increment} each)</h4>
                <div className="space-y-2">{Array.from({ length: serviceCfg.extraCount }, (_, index) => <label key={`extra-${index}`} className="block">
                  <span className={labelClass}>Bonus stat {index + 1}</span>
                  <select className={fieldClass} value={serviceExtra[index]} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => updateServicePick("extra", index, event.target.value as ServiceStat)}>
                    {SERVICE_STATS.map((key) => <option key={key} value={key}>{STAT_NAMES[key]}</option>)}
                  </select>
                </label>)}</div>
              </div>
            </div>
            {duplicateSelections && <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">Choose distinct attributes for these slots. Check the customer's order rather than counting the same attribute twice.</p>}
          </div>
          <div className={panelClass}>
            <h3 className="mb-3 text-lg font-semibold">3. Compare stats before and after modification</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[470px] text-left text-sm">
                <thead><tr className="border-b border-slate-200 text-xs uppercase text-slate-500 dark:border-slate-700"><th className="py-2 pr-3">Stat</th><th className="px-2 py-2">Before</th><th className="px-2 py-2">After</th><th className="px-2 py-2 text-right">Change</th></tr></thead>
                <tbody>{SERVICE_STATS.map((key) => {
                  const diff = changeFor(key);
                  const selected = allSelected.includes(key);
                  return <tr key={key} className={`border-b border-slate-100 dark:border-slate-800 ${selected ? "bg-amber-50/40 dark:bg-amber-950/10" : ""}`}>
                    <th scope="row" className="py-2 pr-3 font-medium">{STAT_NAMES[key]}</th>
                    <td className="px-2 py-2"><input aria-label={`${STAT_NAMES[key]} before`} className={fieldClass} type="number" min={0} step="any" value={serviceBefore[key]} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setServiceBefore((old) => ({ ...old, [key]: event.target.value }))} /></td>
                    <td className="px-2 py-2"><input aria-label={`${STAT_NAMES[key]} after`} className={fieldClass} type="number" min={0} step="any" value={serviceAfter[key]} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setServiceAfter((old) => ({ ...old, [key]: event.target.value }))} /></td>
                    <td className="px-2 py-2 text-right font-semibold tabular-nums">{diff === null ? "—" : diff > 0 ? `+${format(diff)}` : format(diff)}</td>
                  </tr>;
                })}</tbody>
              </table>
            </div>
          </div>
          <div className={panelClass}>
            <h3 className="mb-3 text-lg font-semibold">4. Service requirements and reward</h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-2">
                {serviceReq.map((key, index) => {
                  const delta = changeFor(key);
                  return <div key={`check-${index}`} className="flex justify-between gap-2 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800">
                    <span><strong>{STAT_NAMES[key]}</strong> raised by at least {serviceCfg.increment}</span>
                    <Status status={delta === null ? "missing" : delta >= serviceCfg.increment ? "met" : "below"} />
                  </div>;
                })}
                <p className={`rounded-lg p-3 text-sm font-semibold ${serviceReady ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200"}`} aria-live="polite">
                  {serviceReady ? "Required stat increases achieved." : duplicateSelections ? "Choose distinct required and bonus attributes." : "Required increases are not yet confirmed."}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reference service reward</p>
                <p className="mt-2 text-xl font-bold tabular-nums">{format(serviceCfg.fee[0] + serviceBonuses)}–{format(serviceCfg.fee[1] + serviceBonuses)} Credits</p>
                <p className="mt-1 text-sm">Base service fee {serviceCfg.fee[0]}–{serviceCfg.fee[1]} + {format(serviceBonuses)} potential bonuses</p>
                <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <li>Any required stat raised by {serviceCfg.increment * 2}: +{serviceCfg.doubleBonus} Credits {doubleBonusMet ? "(met)" : "(not met)"}</li>
                  <li>Bonus attributes raised by {serviceCfg.increment}: {serviceExtraCount}/{serviceCfg.extraCount} × {serviceCfg.extraBonus} Credits</li>
                </ul>
                {!serviceReady && <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Potential only. The customer will not pay this request until its required improvements are satisfied.</p>}
              </div>
            </div>
            <label className="mt-4 block max-w-sm">
              <span className={labelClass}>Optional value of installed parts / Gun Parts (Credits)</span>
              <input className={fieldClass} type="number" min={0} step="any" value={partsValue} onChange={(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setPartsValue(event.target.value)} placeholder="Reimbursable parts value" />
            </label>
            {receivedPartsValue !== null && <p className="mt-3 text-sm font-semibold">Fee, bonuses and entered parts value: {format(serviceCfg.fee[0] + serviceBonuses + receivedPartsValue)}–{format(serviceCfg.fee[1] + serviceBonuses + receivedPartsValue)} Credits.</p>}
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">The customer pays for added modifications and Gun Parts separately from the service fee. Reimbursement for a part is not automatically profit. The game may apply other market changes. For service orders, the buyer's specific stat choices take precedence over the defaults shown here.</p>
          </div>
        </>
      )}

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <p className="font-semibold text-slate-800 dark:text-slate-100">How to use these results</p>
        <p className="mt-2">The order lists the attributes you must beat (strict &gt;), while each achieved bonus adds its own reward. Bonuses are cumulative, including multiple levels of the same stat. A proper Suppressor also earns the lower suppressor bonus.</p>
        <p className="mt-2">Order pay ranges are reference figures before difficulty and market effects; the customer's actual trade screen is authoritative. This tool does not invent attachment compatibility, printer recipes, condition effects, the exact random base offer, or a sale when a required condition fails. Gun trades may also affect Security records; a Weapon Permit does not erase an existing criminal investigation.</p>
      </div>
    </section>
  );
}
