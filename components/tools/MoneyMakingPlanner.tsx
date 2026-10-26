
"use client";

import { useEffect, useMemo, useState } from "react";

type Goal = "rent" | "profit" | "payback";

type Route = {
  id: string;
  name: string;
  enabled: boolean;
  costConfirmed: boolean;
  price: number;
  units: number;
  sellable: number;
  batchCost: number;
  payNow: number;
  extraCost: number;
  equipmentCost: number;
  days: number;
};

type Plan = {
  cash: number;
  rent: number;
  rentDay: number;
  reserve: number;
  goal: Goal;
  independentStock: boolean;
  routes: Route[];
};

type Option = {
  label: string;
  routeIds: string[];
  revenue: number;
  profit: number;
  invested: number;
  payback: number | null;
  balances: number[];
  lowest: number;
  safe: boolean;
  missing: boolean;
};

const route = (id: string, name: string): Route => ({
  id,
  name,
  enabled: true,
  costConfirmed: false,
  price: 0,
  units: 0,
  sellable: 0,
  batchCost: 0,
  payNow: 0,
  extraCost: 0,
  equipmentCost: 0,
  days: 1,
});

function preset(kind: "rent" | "crisis" | "mix"): Plan {
  if (kind === "rent") {
    return {
      cash: 400,
      rent: 240,
      rentDay: 6,
      reserve: 0,
      goal: "rent",
      independentStock: false,
      routes: [
        route("a", "Sell stocked water"),
        route("b", "Purify then sell"),
        route("c", "Buy equipment first"),
      ],
    };
  }

  if (kind === "crisis") {
    return {
      cash: 0,
      rent: 618,
      rentDay: 1,
      reserve: 0,
      goal: "rent",
      independentStock: false,
      routes: [
        route("a", "Sell current water"),
        route("b", "Process current water"),
        route("c", "Hold current water"),
      ],
    };
  }

  return {
    cash: 0,
    rent: 0,
    rentDay: 7,
    reserve: 0,
    goal: "profit",
    independentStock: false,
    routes: [
      route("a", "Water"),
      route("b", "Wine"),
      route("c", "Rat farming"),
    ],
  };
}

const storageKey = "probably-stolen-money-planner-v1";

const money = (n: number) =>
  `${Math.round(n * 100) / 100} Credits`;

const clean = (n: number) =>
  Number.isFinite(n) ? Math.max(0, n) : 0;

function evaluate(p: Plan, items: Route[]): Option {
  const missing = items.some(
    (r) =>
      r.price <= 0 ||
      r.units <= 0 ||
      r.sellable <= 0 ||
      r.payNow > r.batchCost ||
      !r.costConfirmed
  );

  const revenue = items.reduce(
    (v, r) =>
      v + r.price * Math.min(r.units, r.sellable),
    0
  );

  const costs = items.reduce(
    (v, r) => v + r.batchCost + r.extraCost,
    0
  );

  const upfront = items.reduce(
    (v, r) =>
      v + r.payNow + r.extraCost + r.equipmentCost,
    0
  );

  const invested = items.reduce(
    (v, r) => v + r.equipmentCost,
    0
  );

  let balance = p.cash - upfront;

  // Conservative: Day 1 rent must be affordable
  // before any projected Day 1 sale.
  const day1Protected =
    balance - (p.rentDay === 1 ? p.rent : 0);

  let lowest = Math.min(
    p.cash,
    balance,
    day1Protected
  );

  const balances: number[] = [];

  for (let day = 1; day <= 7; day++) {
    for (const r of items) {
      if (r.days === day) {
        balance +=
          r.price * Math.min(r.units, r.sellable);
      }
    }

    if (p.rentDay === day) {
      balance -= p.rent;
    }

    balances.push(balance);
    lowest = Math.min(lowest, balance);
  }

  // Equipment is an investment, not a batch expense.
  const profit = revenue - costs;

  const slowest = Math.max(
    ...items.map((r) => r.days)
  );

  const dailyMargin = profit / slowest;

  return {
    label: items.map((r) => r.name).join(" + "),
    routeIds: items.map((r) => r.id),
    revenue,
    profit,
    invested,
    payback:
      invested === 0
        ? 0
        : dailyMargin > 0
          ? invested / dailyMargin
          : null,
    balances,
    lowest,
    missing,
    safe: !missing && lowest >= p.reserve,
  };
}

export default function MoneyMakingPlanner() {
  const [plan, setPlan] = useState<Plan>(
    () => preset("rent")
  );

  const [slots, setSlots] = useState<
    Array<Plan | null>
  >([null, null, null]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const saved =
        window.localStorage.getItem(storageKey);

      if (saved) {
        const decoded = JSON.parse(saved) as
          Array<Plan | null>;

        if (
          Array.isArray(decoded) &&
          decoded.length === 3
        ) {
          setSlots(decoded);
        }
      }
    } catch {
      // Storage may be disabled.
      // Calculations still work without it.
    }
  }, []);

  function update<K extends keyof Plan>(
    field: K,
    value: Plan[K]
  ) {
    setPlan((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function updateRoute(
    id: string,
    change: Partial<Route>
  ) {
    setPlan((prev) => ({
      ...prev,
      routes: prev.routes.map((r) =>
        r.id === id ? { ...r, ...change } : r
      ),
    }));
  }

  function save(i: number) {
    const next = [...slots];

    next[i] = JSON.parse(
      JSON.stringify(plan)
    ) as Plan;

    setSlots(next);

    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(next)
      );

      setMessage(
        `Saved to slot ${i + 1} on this device.`
      );
    } catch {
      setMessage(
        "Local saving is unavailable in this browser."
      );
    }
  }

  function load(i: number) {
    if (!slots[i]) return;

    setPlan(
      JSON.parse(JSON.stringify(slots[i])) as Plan
    );

    setMessage(`Loaded slot ${i + 1}.`);
  }

  const options = useMemo(() => {
    const active = plan.routes.filter(
      (r) => r.enabled
    );

    const singles = active.map((r) =>
      evaluate(plan, [r])
    );

    const pairs: Option[] = [];

    if (plan.independentStock) {
      for (let i = 0; i < active.length; i++) {
        for (
          let j = i + 1;
          j < active.length;
          j++
        ) {
          pairs.push(
            evaluate(plan, [active[i], active[j]])
          );
        }
      }
    }

    const result = [...singles, ...pairs];

    result.sort((a, b) => {
      if (a.missing !== b.missing) {
        return Number(a.missing) -
          Number(b.missing);
      }

      if (a.safe !== b.safe) {
        return Number(b.safe) - Number(a.safe);
      }

      if (plan.goal === "payback") {
        return (
          (a.payback ?? Infinity) -
          (b.payback ?? Infinity)
        );
      }

      if (plan.goal === "rent") {
        return (
          b.lowest - a.lowest ||
          b.balances[6] - a.balances[6]
        );
      }

      return b.profit - a.profit;
    });

    return result;
  }, [plan]);

  const winner = options.find(
    (o) => o.safe && !o.missing
  );

  const nInput = (
    label: string,
    value: number,
    onChange: (n: number) => void,
    max?: number
  ) => (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium">{label}</span>

      <input
        className="w-full rounded-md border px-2 py-2 text-base"
        type="number"
        min={0}
        max={max}
        step="any"
        value={value}
        onChange={(e) =>
          onChange(clean(Number(e.target.value)))
        }
      />
    </label>
  );

  return (
    <div
      className="not-prose my-7 space-y-5 rounded-xl border p-4"
      aria-label="Probably Stolen Money Making Planner"
    >
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">
          Money-Making Planner
        </h2>

        <p className="text-sm opacity-80">
          Demo scenarios. Enter your current
          in-game sale quotes and costs.
          Buyer availability is not guaranteed.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["rent", "Rent Survival"],
            ["crisis", "Water Crisis"],
            ["mix", "Water vs Wine vs Rats"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className="rounded-md border px-3 py-2 text-sm"
            onClick={() => {
              setPlan(preset(id));
              setMessage("");
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nInput(
          "Current Cash",
          plan.cash,
          (x) => update("cash", x)
        )}

        {nInput(
          "Next Rent",
          plan.rent,
          (x) => update("rent", x)
        )}

        {nInput(
          "Rent Due — Day 1–7",
          plan.rentDay,
          (x) =>
            update(
              "rentDay",
              Math.min(7, Math.max(1, Math.round(x)))
            ),
          7
        )}

        {nInput(
          "Minimum Cash Reserve",
          plan.reserve,
          (x) => update("reserve", x)
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold">
          Optimize for
        </legend>

        <div className="flex flex-wrap gap-4 text-sm">
          {(
            [
              ["rent", "Survive rent"],
              ["profit", "Highest 7-day profit"],
              ["payback", "Fastest equipment payback"],
            ] as const
          ).map(([id, label]) => (
            <label
              key={id}
              className="flex items-center gap-1"
            >
              <input
                type="radio"
                checked={plan.goal === id}
                onChange={() => update("goal", id)}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4">
        {plan.routes.map((r, index) => (
          <section
            key={r.id}
            className="space-y-3 rounded-lg border p-3"
          >
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={r.enabled}
                  onChange={(e) =>
                    updateRoute(r.id, {
                      enabled: e.target.checked,
                    })
                  }
                />
                Compare
              </label>

              <input
                aria-label={`Route ${index + 1} name`}
                className="min-w-0 flex-1 rounded-md border px-2 py-2 font-medium"
                value={r.name}
                onChange={(e) =>
                  updateRoute(r.id, {
                    name: e.target.value,
                  })
                }
              />
            </div>

            {r.enabled && (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {nInput(
                  "Actual sale price / unit",
                  r.price,
                  (x) =>
                    updateRoute(r.id, { price: x })
                )}

                {nInput(
                  "Units in batch",
                  r.units,
                  (x) =>
                    updateRoute(r.id, { units: x })
                )}

                {nInput(
                  "Units you expect to sell",
                  r.sellable,
                  (x) =>
                    updateRoute(r.id, {
                      sellable: x,
                    })
                )}

                {nInput(
                  "Sale happens on Day 1–7",
                  r.days,
                  (x) =>
                    updateRoute(r.id, {
                      days: Math.min(
                        7,
                        Math.max(1, Math.round(x))
                      ),
                    }),
                  7
                )}

                {nInput(
                  "Full batch cost basis",
                  r.batchCost,
                  (x) =>
                    updateRoute(r.id, {
                      batchCost: x,
                      payNow: Math.min(
                        r.payNow,
                        x
                      ),
                    })
                )}

                {nInput(
                  "Of that, cash paid now",
                  r.payNow,
                  (x) =>
                    updateRoute(r.id, {
                      payNow: x,
                    })
                )}

                {nInput(
                  "Extra operating costs now",
                  r.extraCost,
                  (x) =>
                    updateRoute(r.id, {
                      extraCost: x,
                    })
                )}

                {nInput(
                  "New equipment cost now",
                  r.equipmentCost,
                  (x) =>
                    updateRoute(r.id, {
                      equipmentCost: x,
                    })
                )}
              </div>
            )}

            {r.enabled && (
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={r.costConfirmed}
                  onChange={(e) =>
                    updateRoute(r.id, {
                      costConfirmed: e.target.checked,
                    })
                  }
                />
                I entered the full batch cost
                (0 only if genuinely free)
              </label>
            )}

            {r.enabled &&
              r.payNow > r.batchCost && (
                <p
                  role="alert"
                  className="text-sm font-medium"
                >
                  Cash paid now cannot exceed
                  the full batch cost basis.
                </p>
              )}
          </section>
        ))}
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={plan.independentStock}
          onChange={(e) =>
            update(
              "independentStock",
              e.target.checked
            )
          }
        />

        <span>
          Also compare two-route combinations.
          I confirm these routes use{" "}
          <strong>
            separate inventory and non-duplicated costs
          </strong>
          . Do not combine selling and processing
          the same water as separate sales.
        </span>
      </label>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          Comparison
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2">Route</th>
                <th className="p-2">Revenue</th>
                <th className="p-2">Batch profit</th>
                <th className="p-2">Profit / day</th>
                <th className="p-2">Payback</th>
                <th className="p-2">End cash</th>
                <th className="p-2">Rent safety</th>
              </tr>
            </thead>

            <tbody>
              {options.map((o) => {
                const duration = Math.max(
                  ...o.routeIds.map(
                    (id) =>
                      plan.routes.find(
                        (r) => r.id === id
                      )?.days ?? 1
                  )
                );

                return (
                  <tr
                    key={o.routeIds.join("+")}
                    className="border-b"
                  >
                    <td className="p-2">
                      {o.label}
                    </td>

                    <td className="p-2">
                      {o.missing
                        ? "Enter values"
                        : money(o.revenue)}
                    </td>

                    <td className="p-2">
                      {o.missing
                        ? "—"
                        : money(o.profit)}
                    </td>

                    <td className="p-2">
                      {o.missing
                        ? "—"
                        : money(o.profit / duration)}
                    </td>

                    <td className="p-2">
                      {o.missing
                        ? "—"
                        : o.invested === 0
                          ? "No new equipment"
                          : o.payback === null
                            ? "No payback"
                            : `${o.payback.toFixed(1)} days`}
                    </td>

                    <td className="p-2">
                      {o.missing
                        ? "—"
                        : money(o.balances[6])}
                    </td>

                    <td className="p-2">
                      {o.missing
                        ? "Incomplete"
                        : o.safe
                          ? "Reserve preserved"
                          : "Cash shortage"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {winner ? (
        <div className="space-y-1 rounded-lg border p-3">
          <p className="font-semibold">
            Best eligible option: {winner.label}
          </p>

          <p className="text-sm">
            Projected revenue{" "}
            {money(winner.revenue)};
            batch profit{" "}
            {money(winner.profit)};
            minimum cash{" "}
            {money(winner.lowest)}.
          </p>

          <p className="text-xs opacity-80">
            One batch per selected route,
            expenses paid on Day 1,
            sales on the selected days,
            and one rent payment.
            Future buyers and events
            are not predicted.
          </p>
        </div>
      ) : (
        <p className="rounded-md border p-3 text-sm">
          Enter actual prices, quantities,
          and costs. No complete route currently
          meets the cash-reserve condition.
        </p>
      )}

      {winner && (
        <div className="space-y-2">
          <h3 className="font-semibold">
            Seven-day cash balance — {winner.label}
          </h3>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
            {winner.balances.map((b, i) => (
              <div
                key={i}
                className="rounded-md border p-2 text-center text-xs"
              >
                <div>Day {i + 1}</div>
                <strong className="block">
                  {Math.round(b)}
                </strong>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-sm font-semibold">
          Local save slots
        </p>

        <div className="flex flex-wrap gap-3">
          {slots.map((slot, i) => (
            <div
              key={i}
              className="flex items-center gap-2"
            >
              <span className="text-sm">
                Slot {i + 1}
              </span>

              <button
                type="button"
                className="rounded border px-2 py-1 text-sm"
                onClick={() => save(i)}
              >
                Save
              </button>

              <button
                type="button"
                disabled={!slot}
                className="rounded border px-2 py-1 text-sm disabled:opacity-50"
                onClick={() => load(i)}
              >
                Load
              </button>
            </div>
          ))}
        </div>

        {message && (
          <p role="status" className="text-xs">
            {message}
          </p>
        )}
      </div>

      <p className="text-xs opacity-80">
        Expected sales are estimates.
        You must have enough starting cash
        for upfront spending and Day 1 rent.
        Equipment purchases affect cash flow
        but are not deducted twice from
        batch profit.
      </p>
    </div>
  );
}
