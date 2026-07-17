"use client";

import type {
  ReactNode,
} from "react";

import type {
  ExperienceOption,
} from "@/lib/game-recommender/types";

export function OptionSection({
  step,
  eyebrow,
  title,
  description,
  children,
}: {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[10px] font-black text-sky-700">
          {step}
        </span>

        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-700">
            {eyebrow}
          </p>

          <h3 className="mt-1 text-base font-black text-slate-950 sm:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-3 sm:ml-10">
        {children}
      </div>
    </section>
  );
}

export function ChoiceButton({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={[
        "inline-flex min-h-10 items-center justify-center rounded-full border",
        "px-4 py-2 text-sm font-black transition",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-sky-500 focus-visible:ring-offset-2",
        isSelected
          ? "border-sky-600 bg-sky-600 text-white"
          : [
              "border-slate-200 bg-white text-slate-700",
              "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800",
            ].join(" "),
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function ExperienceButton({
  option,
  isSelected,
  disabled,
  onClick,
}: {
  option: ExperienceOption;
  isSelected: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      disabled={disabled}
      onClick={onClick}
      className={[
        "rounded-2xl border p-3 text-left transition",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-sky-500 focus-visible:ring-offset-2",
        isSelected
          ? "border-sky-500 bg-sky-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/50",
        disabled
          ? "cursor-not-allowed opacity-45"
          : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={[
            "text-sm font-black",
            isSelected
              ? "text-sky-800"
              : "text-slate-900",
          ].join(" ")}
        >
          {option.label}
        </span>

        <span
          aria-hidden="true"
          className={[
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
            "text-xs font-black",
            isSelected
              ? "border-sky-600 bg-sky-600 text-white"
              : "border-slate-300 text-transparent",
          ].join(" ")}
        >
          ✓
        </span>
      </div>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {option.description}
      </p>
    </button>
  );
}
