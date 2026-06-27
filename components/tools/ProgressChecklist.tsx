"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChecklistItem } from "@/data/checklists/types";

type StatusFilter = "all" | "incomplete" | "done";
type RiskFilter = "all" | "highRisk";

type ProgressChecklistProps = {
  storageKey: string;
  title: string;
  description?: string;
  items: ChecklistItem[];
  shareUrl?: string;
  maxVisibleRows?: number;
};

export default function ProgressChecklist({
  storageKey,
  title,
  description,
  items,
  shareUrl,
  maxVisibleRows = 30,
}: ProgressChecklistProps) {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("all");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle"
  );

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (!saved) return;

      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setCheckedIds(new Set(parsed));
      }
    } catch {
      // Ignore broken localStorage data.
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(Array.from(checkedIds))
      );
    } catch {
      // Ignore localStorage write errors.
    }
  }, [checkedIds, storageKey]);

  const categories = useMemo(() => {
    return Array.from(new Set(items.map((item) => item.category))).sort();
  }, [items]);

  const completedCount = checkedIds.size;
  const totalCount = items.length;
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const isDone = checkedIds.has(item.id);

      if (statusFilter === "done" && !isDone) return false;
      if (statusFilter === "incomplete" && isDone) return false;

      if (categoryFilter !== "all" && item.category !== categoryFilter) {
        return false;
      }

      if (
        riskFilter === "highRisk" &&
        item.risk !== "High" &&
        item.risk !== "Very High"
      ) {
        return false;
      }

      if (!normalizedQuery) return true;

      const haystack = [
        item.name,
        item.requirement,
        item.category,
        item.steamRate,
        item.timing,
        item.risk,
        item.searchText,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [
    items,
    checkedIds,
    query,
    statusFilter,
    categoryFilter,
    riskFilter,
  ]);

  const shouldUseInternalScroll = items.length > maxVisibleRows;

  function toggleItem(id: string) {
    setCheckedIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function resetProgress() {
    const confirmed = window.confirm(
      "Reset this checklist progress on this browser?"
    );

    if (!confirmed) return;

    setCheckedIds(new Set());
  }

  async function copyUrl() {
    const url =
      shareUrl ||
      (typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}`
        : "");

    try {
      await navigator.clipboard.writeText(url);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 1800);
    }
  }

  return (
    <section
      className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      aria-labelledby={`${storageKey}-title`}
    >
      <div className="border-b border-slate-200 bg-white p-4 md:p-5">
        <div>
          <h3
            id={`${storageKey}-title`}
            className="text-lg font-bold tracking-tight text-slate-950 md:text-xl"
          >
            {title}
          </h3>

          {description ? (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Progress: {completedCount} / {totalCount} completed
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Saved in this browser. No login required.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={copyUrl}
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                {copyState === "copied"
                  ? "Copied"
                  : copyState === "error"
                    ? "Copy failed"
                    : "Copy URL"}
              </button>

              <button
                type="button"
                onClick={resetProgress}
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-950 transition-all"
              style={{ width: `${progressPercent}%` }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <label className="block">
            <span className="sr-only">Search checklist items</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search achievement, item, trigger, note..."
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={statusFilter === "all"}
              onClick={() => setStatusFilter("all")}
            >
              All
            </FilterButton>

            <FilterButton
              active={statusFilter === "incomplete"}
              onClick={() => setStatusFilter("incomplete")}
            >
              Incomplete
            </FilterButton>

            <FilterButton
              active={statusFilter === "done"}
              onClick={() => setStatusFilter("done")}
            >
              Done
            </FilterButton>

            <FilterButton
              active={riskFilter === "highRisk"}
              onClick={() =>
                setRiskFilter((current) =>
                  current === "highRisk" ? "all" : "highRisk"
                )
              }
            >
              High Risk
            </FilterButton>
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={categoryFilter === "all"}
              onClick={() => setCategoryFilter("all")}
            >
              All Categories
            </FilterButton>

            {categories.map((category) => (
              <FilterButton
                key={category}
                active={categoryFilter === category}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          shouldUseInternalScroll
            ? "max-h-[620px] overflow-y-auto"
            : "overflow-visible"
        }
      >
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <thead
            className={
              shouldUseInternalScroll
                ? "sticky top-0 z-10 bg-slate-50 text-xs uppercase tracking-wide text-slate-500"
                : "bg-slate-50 text-xs uppercase tracking-wide text-slate-500"
            }
          >
            <tr>
              <th className="w-[30%] border-b border-slate-200 px-4 py-3">
                Achievement
              </th>
              <th className="w-[40%] border-b border-slate-200 px-4 py-3">
                Requirement
              </th>
              <th className="w-[12%] border-b border-slate-200 px-4 py-3">
                Rate
              </th>
              <th className="w-[18%] border-b border-slate-200 px-4 py-3">
                Timing
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const isDone = checkedIds.has(item.id);

                return (
                  <tr
                    key={item.id}
                    className={
                      isDone
                        ? "bg-slate-50 text-slate-500"
                        : "bg-white text-slate-900"
                    }
                  >
                    <td className="border-b border-slate-100 px-4 py-3 align-top">
                      <label className="flex cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggleItem(item.id)}
                          aria-label={`Mark ${item.name} as completed`}
                          className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300"
                        />

                        <span className="min-w-0">
                          <span
                            className={
                              isDone
                                ? "block font-semibold text-slate-500 line-through"
                                : "block font-semibold text-slate-950"
                            }
                          >
                            {item.name}
                          </span>

                          <span className="mt-1 flex flex-wrap gap-1.5">
                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                              {item.category}
                            </span>

                            {item.risk ? <RiskBadge risk={item.risk} /> : null}
                          </span>
                        </span>
                      </label>
                    </td>

                    <td className="border-b border-slate-100 px-4 py-3 align-top leading-6">
                      <span>{item.requirement}</span>

                      {item.detailHref ? (
                        <a
                          href={item.detailHref}
                          className="ml-2 whitespace-nowrap font-medium text-blue-700 hover:underline"
                        >
                          Details ↓
                        </a>
                      ) : null}
                    </td>

                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                      {item.steamRate || "—"}
                    </td>

                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                      {item.timing || "—"}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  No checklist items match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500 md:px-5">
        Tip: use search for a specific achievement name, or filter by incomplete
        and high-risk items when cleaning up your last few unlocks.
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full bg-slate-950 px-3 py-1.5 text-sm font-medium text-white"
          : "rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      }
    >
      {children}
    </button>
  );
}

function RiskBadge({
  risk,
}: {
  risk: NonNullable<ChecklistItem["risk"]>;
}) {
  const className =
    risk === "High" || risk === "Very High"
      ? "bg-amber-100 text-amber-900"
      : risk === "Medium"
        ? "bg-yellow-100 text-yellow-900"
        : risk === "Low"
          ? "bg-emerald-100 text-emerald-800"
          : "bg-slate-100 text-slate-600";

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>
      Risk: {risk}
    </span>
  );
}