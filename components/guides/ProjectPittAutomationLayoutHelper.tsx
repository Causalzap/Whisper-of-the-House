"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  getAutomationRecommendations,
  productOptions,
  routeFeatureOptions,
  symptomOptions,
  unlockOptions,
  type ProjectPittProduct,
  type ProjectPittSymptom,
  type RouteFeature,
  type UnlockState,
} from "@/data/project-pitt/projectPittAutomationRules";

const defaultProduct: ProjectPittProduct = "duck";
const defaultSymptom: ProjectPittSymptom = "jam";
const defaultUnlock: UnlockState = "early";

function toggleFeature(
  current: RouteFeature[],
  feature: RouteFeature,
): RouteFeature[] {
  return current.includes(feature)
    ? current.filter((item) => item !== feature)
    : [...current, feature];
}

export default function ProjectPittAutomationLayoutHelper() {
  const [product, setProduct] =
    useState<ProjectPittProduct>(defaultProduct);
  const [symptom, setSymptom] =
    useState<ProjectPittSymptom>(defaultSymptom);
  const [unlock, setUnlock] = useState<UnlockState>(defaultUnlock);
  const [features, setFeatures] = useState<RouteFeature[]>(["fans", "walls"]);

  const currentProduct = productOptions.find((item) => item.id === product)!;
  const currentSymptom = symptomOptions.find((item) => item.id === symptom)!;

  function featureIsAvailable(feature: RouteFeature) {
    if (feature === "sticky") return unlock !== "early";
    if (feature === "slick") return unlock === "slick";
    return true;
  }

  function changeUnlock(nextUnlock: UnlockState) {
    setUnlock(nextUnlock);

    setFeatures((current) =>
      current.filter((feature) => {
        if (feature === "sticky") return nextUnlock !== "early";
        if (feature === "slick") return nextUnlock === "slick";
        return true;
      }),
    );
  }

  const recommendations = useMemo(
    () =>
      getAutomationRecommendations({
        product,
        symptom,
        features,
        unlock,
      }),
    [product, symptom, features, unlock],
  );

  const primary = recommendations[0];
  const secondary = recommendations.slice(1, 3);

  function reset() {
    setProduct(defaultProduct);
    setSymptom(defaultSymptom);
    setUnlock(defaultUnlock);
    setFeatures(["fans", "walls"]);
  }

  return (
    <section
      aria-labelledby="project-pitt-layout-helper-title"
      className="my-10 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/70"
    >
      <div className="border-b border-slate-800 bg-slate-900/70 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Early Automation Helper
            </p>
            <h2
              id="project-pitt-layout-helper-title"
              className="text-2xl font-bold tracking-tight text-white"
            >
              What should I change in this layout?
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Pick the product, the failure you can actually see, and what the
              route already uses. I&apos;ll suggest the first change I would
              test instead of pretending there is one perfect factory layout.
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <div className="space-y-8 border-b border-slate-800 p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <fieldset>
            <legend className="text-base font-semibold text-white">
              1. Product
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {productOptions.map((option) => {
                const selected = option.id === product;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setProduct(option.id)}
                    className={[
                      "rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                      selected
                        ? "border-emerald-400/70 bg-emerald-400/10"
                        : "border-slate-700 bg-slate-900/40 hover:border-slate-500",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-white">
                        {option.label}
                      </span>
                      <span
                        className={[
                          "rounded-full px-2 py-1 text-[11px] font-semibold",
                          option.status === "Well-supported"
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-amber-400/15 text-amber-300",
                        ].join(" ")}
                      >
                        {option.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-5 text-slate-400">
                      {option.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-semibold text-white">
              2. What is going wrong?
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {symptomOptions.map((option) => {
                const selected = option.id === symptom;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSymptom(option.id)}
                    className={[
                      "rounded-lg border px-3 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                      selected
                        ? "border-emerald-400/70 bg-emerald-400/10 text-white"
                        : "border-slate-700 bg-slate-900/30 text-slate-300 hover:border-slate-500 hover:text-white",
                    ].join(" ")}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-semibold text-white">
              3. What is unlocked?
            </legend>
            <div className="mt-3 space-y-2">
              {unlockOptions.map((option) => {
                const selected = option.id === unlock;
                return (
                  <label
                    key={option.id}
                    className={[
                      "flex cursor-pointer gap-3 rounded-lg border p-3 transition",
                      selected
                        ? "border-emerald-400/60 bg-emerald-400/10"
                        : "border-slate-700 bg-slate-900/30 hover:border-slate-500",
                    ].join(" ")}
                  >
                    <input
                      type="radio"
                      name="project-pitt-unlock"
                      value={option.id}
                      checked={selected}
                      onChange={() => changeUnlock(option.id)}
                      className="mt-1 h-4 w-4 accent-emerald-400"
                    />
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        {option.description}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-semibold text-white">
              4. What is already in the route?
            </legend>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Select only the things that are part of the layout you are
              diagnosing right now.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {routeFeatureOptions.map((option) => {
                const checked = features.includes(option.id);
                const available = featureIsAvailable(option.id);

                return (
                  <label
                    key={option.id}
                    className={[
                      "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition",
                      !available
                        ? "cursor-not-allowed border-slate-900 bg-slate-950/30 text-slate-600"
                        : checked
                          ? "cursor-pointer border-slate-500 bg-slate-800/70 text-white"
                          : "cursor-pointer border-slate-800 bg-slate-900/20 text-slate-300 hover:border-slate-600",
                    ].join(" ")}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={!available}
                      onChange={() =>
                        setFeatures((current) =>
                          toggleFeature(current, option.id),
                        )
                      }
                      className="h-4 w-4 rounded accent-emerald-400 disabled:cursor-not-allowed"
                    />
                    <span>
                      {option.label}
                      {!available ? (
                        <span className="ml-2 text-[11px] text-slate-600">
                          Locked
                        </span>
                      ) : null}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="bg-slate-950/40 p-5 sm:p-6">
          <div className="sticky top-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200">
                {currentProduct.label}
              </span>
              <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200">
                {currentSymptom.short}
              </span>
              <span
                className={[
                  "rounded-full px-2.5 py-1 text-xs font-semibold",
                  currentProduct.status === "Well-supported"
                    ? "bg-emerald-400/15 text-emerald-300"
                    : "bg-amber-400/15 text-amber-300",
                ].join(" ")}
              >
                {currentProduct.status}
              </span>
            </div>

            {primary ? (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Likely problem
                </p>
                <h3 className="mt-2 text-xl font-bold leading-tight text-white">
                  {primary.diagnosis}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {primary.why}
                </p>

                <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    Try this first
                  </p>
                  <p className="mt-2 font-semibold leading-6 text-white">
                    {primary.primaryFix}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">
                    Then test in this order
                  </p>
                  <ol className="mt-3 space-y-3">
                    {primary.nextSteps.map((step, index) => (
                      <li
                        key={`${primary.id}-${index}`}
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-200">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {primary.avoid ? (
                  <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
                      Do not do this first
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {primary.avoid}
                    </p>
                  </div>
                ) : null}

                {secondary.length > 0 ? (
                  <details className="mt-5 rounded-xl border border-slate-800 bg-slate-900/30">
                    <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-200">
                      Other possible causes
                    </summary>
                    <div className="space-y-4 border-t border-slate-800 px-4 py-4">
                      {secondary.map((item) => (
                        <div key={item.id}>
                          <p className="text-sm font-semibold text-white">
                            {item.diagnosis}
                          </p>
                          <p className="mt-1 text-sm leading-5 text-slate-400">
                            {item.primaryFix}
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : null}

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="text-sm leading-6 text-slate-400">
                    Need the full product-specific setup?
                  </p>
                  <Link
                    href={currentProduct.guideHref}
                    className="mt-2 inline-flex font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-200"
                  >
                    Open the {currentProduct.guideLabel}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/40 p-5">
                <h3 className="font-semibold text-white">
                  No strong match for this combination yet
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  I would not invent a layout recommendation here. Reset one
                  option, simplify the route, or use the product-specific guide
                  for a manual diagnosis.
                </p>
                <Link
                  href={currentProduct.guideHref}
                  className="mt-4 inline-flex font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-200"
                >
                  Open the {currentProduct.guideLabel}
                </Link>
              </div>
            )}

            <p className="mt-5 text-xs leading-5 text-slate-500">
              MVP scope: Ducks are well-supported. Cash Register recommendations
              are early/experimental. Piñata and Anomaly are intentionally not
              included until the same kind of repeatable layout data exists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
