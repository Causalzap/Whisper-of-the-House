"use client";

import Image from "next/image";
import Link from "next/link";

import type { GameDnaGame } from "@/components/game-dna/GameDnaTool";

export type GameDnaRecommendation = {
  game: GameDnaGame;
  matchPercentage: number;
  rankingScore?: number;
  reason: string;

  /**
   * 可选，用于标识推荐类型。
   * 例如 Best Match、Explore Next、Wildcard。
   */
  label?: string;
};

export type RecommendedGamesProps = {
  recommendations: GameDnaRecommendation[];

  eyebrow?: string;
  title?: string;
  description?: string;

  /**
   * 默认只展示有 guideUrl 的游戏。
   * 如果以后需要展示没有攻略 Hub 的普通推荐，可以设为 false。
   */
  guideHubsOnly?: boolean;

  onRecommendationClick?: (
    recommendation: GameDnaRecommendation
  ) => void;

  className?: string;
};

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => void;

export default function RecommendedGames({
  recommendations,
  eyebrow = "Explore Next",
  title = "Matching guide hubs",
  description = "These games match your strongest preferences and have complete guide coverage on Whisper of the House.",
  guideHubsOnly = true,
  onRecommendationClick,
  className = "",
}: RecommendedGamesProps) {
  const visibleRecommendations = recommendations.filter(
    ({ game }) =>
      guideHubsOnly ? Boolean(game.guideUrl) : true
  );

  if (visibleRecommendations.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="matching-guide-hubs-title"
      className={[
        "mt-8 rounded-[2rem] border border-slate-200",
        "bg-white p-6 shadow-sm sm:p-8",
        className,
      ].join(" ")}
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
        {eyebrow}
      </p>

      <h2
        id="matching-guide-hubs-title"
        className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
      >
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleRecommendations.map(
          (recommendation, index) => (
            <RecommendationCard
              key={recommendation.game.id}
              recommendation={recommendation}
              fallbackLabel={getFallbackLabel(index)}
              onClick={() => {
                trackRecommendationClick(recommendation);
                onRecommendationClick?.(recommendation);
              }}
            />
          )
        )}
      </div>
    </section>
  );
}

function RecommendationCard({
  recommendation,
  fallbackLabel,
  onClick,
}: {
  recommendation: GameDnaRecommendation;
  fallbackLabel: string;
  onClick: () => void;
}) {
  const {
    game,
    matchPercentage,
    reason,
    label,
  } = recommendation;

  const destinationUrl = game.guideUrl ?? "#";

  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden",
        "rounded-3xl border border-slate-200",
        "bg-slate-50 transition",
        "hover:-translate-y-1 hover:border-violet-300",
        "hover:shadow-lg",
      ].join(" ")}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
        <Image
          src={game.cover}
          alt={`${game.title} game cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
        />

        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-violet-800 shadow-sm backdrop-blur-sm">
          {label ?? fallbackLabel}
        </div>

        <div
          className={[
            "absolute right-3 top-3",
            "rounded-full bg-black/75 px-3 py-1.5",
            "text-xs font-black text-white backdrop-blur-sm",
          ].join(" ")}
        >
          {clampPercentage(matchPercentage)}% match
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          {game.releaseYear ? (
            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500 shadow-sm">
              {game.releaseYear}
            </span>
          ) : null}

          {(game.genres ?? [])
            .slice(0, 2)
            .map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-bold text-violet-700"
              >
                {genre}
              </span>
            ))}
        </div>

        <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">
          {game.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
          {reason}
        </p>

        {game.guideCount && game.guideCount > 0 ? (
          <p className="mt-4 text-xs font-bold text-slate-500">
            {game.guideCount}{" "}
            {game.guideCount === 1 ? "guide" : "guides"} available
          </p>
        ) : null}

        {game.guideUrl ? (
          <Link
            href={destinationUrl}
            onClick={onClick}
            aria-label={`Open the ${game.title} guide hub`}
            className={[
              "mt-5 inline-flex min-h-11 w-full",
              "items-center justify-center rounded-full",
              "bg-violet-700 px-5 py-2.5",
              "text-sm font-black text-white transition",
              "hover:bg-violet-800",
              "focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-violet-500",
              "focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Open Guide Hub
            <ArrowRightIcon />
          </Link>
        ) : (
          <div
            className={[
              "mt-5 inline-flex min-h-11 w-full",
              "items-center justify-center rounded-full",
              "border border-slate-200 bg-white px-5 py-2.5",
              "text-sm font-black text-slate-400",
            ].join(" ")}
          >
            Guide coming later
          </div>
        )}
      </div>
    </article>
  );
}

function getFallbackLabel(index: number) {
  const labels = [
    "Best Match",
    "Explore Next",
    "Wildcard Pick",
  ];

  return labels[index] ?? "Recommended";
}

function clampPercentage(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(0, Math.min(99, Math.round(value)));
}

function trackRecommendationClick(
  recommendation: GameDnaRecommendation
) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (
    window as Window & {
      gtag?: GtagFunction;
    }
  ).gtag;

  gtag?.("event", "game_dna_recommended_hub_click", {
    game_id: recommendation.game.id,
    game_title: recommendation.game.title,
    match_percentage: clampPercentage(
      recommendation.matchPercentage
    ),
    destination_path:
      recommendation.game.guideUrl ?? "",
    recommendation_label:
      recommendation.label ?? "",
  });
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