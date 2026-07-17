"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ROLE_LABELS,
} from "@/lib/game-recommender/config";

import {
  trackRecommenderEvent,
} from "@/lib/game-recommender/analytics";

import type {
  RecommendationResult,
} from "@/lib/game-recommender/types";

export default function RecommendationCard({
  recommendation,
}: {
  recommendation: RecommendationResult;
}) {
  const {
    game,
    matchPercentage,
    role,
    explanation,
  } = recommendation;

  const isFeatured =
    role === "best-match";

  const isSurprise =
    role === "surprise";

  return (
    <article
      className={[
        "flex min-w-0 gap-4 rounded-2xl border p-3 sm:p-4",
        isFeatured
          ? "border-sky-200 bg-sky-50/45 lg:col-span-2"
          : isSurprise
            ? "border-slate-300 bg-slate-50"
            : "border-slate-200 bg-[#f8fafc]",
      ].join(" ")}
    >
      <div
        style={{
          aspectRatio: "2 / 3",
        }}
        className={[
          "relative shrink-0 overflow-hidden rounded-xl bg-slate-200",
          isFeatured
            ? "w-[104px] sm:w-[132px]"
            : "w-[88px] sm:w-[104px]",
        ].join(" ")}
      >
        <Image
          src={game.cover}
          alt={`${game.title} game cover`}
          fill
          sizes={
            isFeatured
              ? "132px"
              : "104px"
          }
          className="object-cover"
        />

        <span className="absolute left-2 top-2 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          {ROLE_LABELS[role]}
        </span>
      </div>

      <div className="min-w-0 flex-1 py-0.5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-sky-700">
              {explanation.eyebrow}
            </p>

            <h3
              className={[
                "mt-1 font-black leading-tight text-slate-950",
                isFeatured
                  ? "text-xl sm:text-2xl"
                  : "text-lg",
              ].join(" ")}
            >
              {game.title}
            </h3>
          </div>

          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-black text-sky-800 ring-1 ring-inset ring-sky-200">
            {matchPercentage}% match
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {explanation.summary}
        </p>

        <ul className="mt-3 space-y-1.5">
          {explanation.highlights.map(
            (highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-xs font-semibold leading-5 text-slate-600"
              >
                <CheckSmallIcon />
                <span>{highlight}</span>
              </li>
            ),
          )}
        </ul>

        {game.guideUrl ? (
          <Link
            href={game.guideUrl}
            onClick={() =>
              trackRecommenderEvent(
                "quick_recommender_guide_click",
                {
                  game_id: game.id,
                  game_title: game.title,
                  match_percentage:
                    matchPercentage,
                  result_role: role,
                },
              )
            }
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-xs font-black text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            Open Game Guide
            <ArrowRightIcon />
          </Link>
        ) : (
          <p className="mt-4 text-[11px] font-semibold text-slate-400">
            Guide coverage is not available
            for this game yet.
          </p>
        )}
      </div>
    </article>
  );
}

function CheckSmallIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
    >
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
    >
      <path
        d="m8 5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
