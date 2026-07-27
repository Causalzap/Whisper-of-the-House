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
  RecommendationRole,
} from "@/lib/game-recommender/types";

type RolePresentation = {
  borderClassName: string;
  backgroundClassName: string;
  eyebrowClassName: string;
};

const ROLE_PRESENTATION: Record<
  RecommendationRole,
  RolePresentation
> = {
  "best-match": {
    borderClassName: "border-sky-200",
    backgroundClassName: "bg-sky-50/45",
    eyebrowClassName: "text-sky-700",
  },

  "strong-alternative": {
    borderClassName: "border-slate-200",
    backgroundClassName: "bg-[#f8fafc]",
    eyebrowClassName: "text-sky-700",
  },

  wildcard: {
    borderClassName: "border-violet-200",
    backgroundClassName: "bg-violet-50/30",
    eyebrowClassName: "text-violet-700",
  },

  "more-match": {
    borderClassName: "border-slate-200",
    backgroundClassName: "bg-[#f8fafc]",
    eyebrowClassName: "text-sky-700",
  },

  surprise: {
    borderClassName: "border-amber-200",
    backgroundClassName: "bg-amber-50/35",
    eyebrowClassName: "text-amber-700",
  },
};

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

  const presentation =
    ROLE_PRESENTATION[role];

  const isFeatured =
    role === "best-match";

  const imageSource =
    game.image ?? game.cover;

  const destinationUrl =
    game.guideUrl;

  const isExternalGuide =
    Boolean(destinationUrl) &&
    isAbsoluteUrl(destinationUrl ?? "");

  const guideClickParameters = {
    game_id: game.id,
    game_title: game.title,
    match_percentage:
      matchPercentage,
    result_role: role,
  };

  return (
    <article
      className={[
        "group flex h-full min-w-0 flex-col",
        "overflow-hidden rounded-2xl border",
        "shadow-sm transition duration-300",
        "hover:-translate-y-0.5",
        "hover:shadow-lg",
        presentation.borderClassName,
        presentation.backgroundClassName,
        isFeatured
          ? "lg:col-span-2"
          : "",
      ].join(" ")}
    >
      <GameCoverStage
        imageSource={imageSource}
        gameTitle={game.title}
        role={role}
        matchPercentage={
          matchPercentage
        }
        isFeatured={isFeatured}
      />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p
          className={[
            "text-[10px] font-black",
            "uppercase tracking-[0.16em]",
            presentation.eyebrowClassName,
          ].join(" ")}
        >
          {explanation.eyebrow}
        </p>

        <h3
          className={[
            "mt-1.5 font-black",
            "leading-tight text-slate-950",
            isFeatured
              ? "text-2xl sm:text-3xl"
              : "text-xl sm:text-2xl",
          ].join(" ")}
        >
          {game.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {explanation.summary}
        </p>

        {explanation.highlights.length >
        0 ? (
          <ul className="mt-4 space-y-2">
            {explanation.highlights
              .slice(0, 3)
              .map((highlight) => (
                <li
                  key={highlight}
                  className={[
                    "flex gap-2.5",
                    "text-sm font-semibold",
                    "leading-6 text-slate-600",
                  ].join(" ")}
                >
                  <CheckSmallIcon />

                  <span>
                    {highlight}
                  </span>
                </li>
              ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-5">
          {destinationUrl ? (
            isExternalGuide ? (
              <a
                href={destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackRecommenderEvent(
                    "quick_recommender_guide_click",
                    guideClickParameters,
                  )
                }
                className={
                  guideButtonClassName
                }
              >
                Open Game Guide

                <ArrowRightIcon />
              </a>
            ) : (
              <Link
                href={destinationUrl}
                onClick={() =>
                  trackRecommenderEvent(
                    "quick_recommender_guide_click",
                    guideClickParameters,
                  )
                }
                className={
                  guideButtonClassName
                }
              >
                Open Game Guide

                <ArrowRightIcon />
              </Link>
            )
          ) : (
            <p className="text-xs font-semibold leading-5 text-slate-400">
              Guide coverage is not
              available for this game yet.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function GameCoverStage({
  imageSource,
  gameTitle,
  role,
  matchPercentage,
  isFeatured,
}: {
  imageSource: string;
  gameTitle: string;
  role: RecommendationRole;
  matchPercentage: number;
  isFeatured: boolean;
}) {
  return (
    <div
      className={[
        "relative w-full overflow-hidden",
        "bg-slate-950",
        isFeatured
          ? "h-[270px] sm:h-[320px]"
          : "h-[250px] sm:h-[290px]",
      ].join(" ")}
    >
      {/* 模糊背景填满横向图片区域 */}
      <Image
        src={imageSource}
        alt=""
        fill
        aria-hidden="true"
        sizes={
          isFeatured
            ? "(max-width: 1024px) 100vw, 900px"
            : "(max-width: 1024px) 100vw, 440px"
        }
        quality={50}
        className={[
          "scale-110 object-cover",
          "opacity-50 blur-2xl",
        ].join(" ")}
      />

      <div
        aria-hidden="true"
        className={[
          "absolute inset-0",
          "bg-gradient-to-b",
          "from-slate-950/5",
          "via-slate-950/10",
          "to-slate-950/45",
        ].join(" ")}
      />

      {/* 居中展示完整竖版封面 */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-5 sm:px-5">
        <div
          className={[
            "relative overflow-hidden",
            "rounded-xl bg-black/10",
            "shadow-2xl ring-1",
            "ring-white/15",
            isFeatured
              ? [
                  "h-[225px] w-[150px]",
                  "sm:h-[275px]",
                  "sm:w-[183px]",
                ].join(" ")
              : [
                  "h-[210px] w-[140px]",
                  "sm:h-[250px]",
                  "sm:w-[167px]",
                ].join(" "),
          ].join(" ")}
        >
          <Image
            src={imageSource}
            alt={`${gameTitle} game cover`}
            fill
            sizes={
              isFeatured
                ? "(max-width: 640px) 150px, 183px"
                : "(max-width: 640px) 140px, 167px"
            }
            quality={82}
            className={[
              "object-contain",
              "transition duration-500",
              "group-hover:scale-[1.015]",
            ].join(" ")}
          />
        </div>
      </div>

      <span
        className={[
          "absolute left-3 top-3",
          "max-w-[55%]",
          "rounded-full",
          "bg-slate-950/85",
          "px-3 py-1.5",
          "text-[10px] font-black",
          "uppercase tracking-[0.1em]",
          "text-white shadow-sm",
          "backdrop-blur-sm",
        ].join(" ")}
      >
        {ROLE_LABELS[role]}
      </span>

      <span
        className={[
          "absolute right-3 top-3",
          "rounded-full",
          "bg-white/95",
          "px-3 py-1.5",
          "text-xs font-black",
          "text-sky-800 shadow-sm",
          "backdrop-blur-sm",
        ].join(" ")}
      >
        {matchPercentage}% match
      </span>
    </div>
  );
}

const guideButtonClassName = [
  "inline-flex min-h-11",
  "items-center justify-center",
  "rounded-full bg-sky-600",
  "px-5 py-2.5",
  "text-sm font-black text-white",
  "transition",
  "hover:-translate-y-0.5",
  "hover:bg-sky-700",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-sky-500",
  "focus-visible:ring-offset-2",
].join(" ");

function isAbsoluteUrl(
  value: string,
) {
  return /^https?:\/\//i.test(value);
}

function CheckSmallIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-1 h-4 w-4 shrink-0 text-sky-600"
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