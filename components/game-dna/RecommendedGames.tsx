"use client";

import Image from "next/image";
import Link from "next/link";

import type {
  GameDnaClosestGame,
  GameDnaRecommendationData,
} from "@/lib/game-dna/recommendations";

export type GameDnaRecommendation =
  GameDnaRecommendationData;

export type RecommendedGamesProps = {
  recommendations:
    readonly GameDnaRecommendation[];

  eyebrow?: string;
  title?: string;
  description?: string;

  /**
   * Keep true on the Game DNA page when this section is specifically meant
   * to send players into guide hubs that already exist.
   */
  guideHubsOnly?: boolean;

  onRecommendationClick?: (
    recommendation:
      GameDnaRecommendation,
  ) => void;

  className?: string;
};

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: Record<
    string,
    string | number | boolean
  >,
) => void;

export default function RecommendedGames({
  recommendations,
  eyebrow = "Explore Next",
  title = "Guide-backed matches",
  description =
    "These games reflect the strongest patterns in your Gaming DNA and already have practical guides available when you need help getting started.",
  guideHubsOnly = true,
  onRecommendationClick,
  className = "",
}: RecommendedGamesProps) {
  const visibleRecommendations =
    recommendations.filter(
      ({ game }) =>
        guideHubsOnly
          ? Boolean(game.guideUrl)
          : true,
    );

  if (
    visibleRecommendations.length ===
    0
  ) {
    return null;
  }

  const gridClassName =
    getGridClassName(
      visibleRecommendations.length,
    );

  return (
    <section
      aria-labelledby="game-dna-recommendations-title"
      className={[
        "mt-8 rounded-[2rem]",
        "border border-slate-200",
        "bg-white p-5 shadow-sm",
        "sm:p-7 lg:p-8",
        className,
      ].join(" ")}
    >
      <header className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
          {eyebrow}
        </p>

        <h2
          id="game-dna-recommendations-title"
          className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
        >
          {title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>

        <div className="mt-4 inline-flex max-w-2xl items-start gap-2 rounded-2xl border border-violet-100 bg-violet-50 px-3.5 py-3 text-xs leading-5 text-slate-600">
          <InfoIcon />

          <p>
            Fit scores compare the ten
            gameplay traits in your
            grid. They are not review
            scores or guarantees that
            you will enjoy a game.
          </p>
        </div>
      </header>

      <div
        className={[
          "mt-6 grid gap-5",
          gridClassName,
        ].join(" ")}
      >
        {visibleRecommendations.map(
          (
            recommendation,
            index,
          ) => (
            <RecommendationCard
              key={
                recommendation.game.id
              }
              recommendation={
                recommendation
              }
              fallbackLabel={
                getFallbackLabel(index)
              }
              rank={index + 1}
              onClick={() => {
                trackRecommendationClick(
                  recommendation,
                );

                onRecommendationClick?.(
                  recommendation,
                );
              }}
            />
          ),
        )}
      </div>
    </section>
  );
}

function RecommendationCard({
  recommendation,
  fallbackLabel,
  rank,
  onClick,
}: {
  recommendation:
    GameDnaRecommendation;
  fallbackLabel: string;
  rank: number;
  onClick: () => void;
}) {
  const {
    game,
    matchPercentage,
    reason,
    label,
    closestSelectedGames,
    differenceNote,
  } = recommendation;

  const displayLabel =
    normalizeRecommendationLabel(
      label || fallbackLabel,
    );

  const fitScore =
    clampFitScore(
      matchPercentage,
    );

  const destinationUrl =
    game.guideUrl;

  const isExternalGuide =
    Boolean(destinationUrl) &&
    (game.guideIsInternal ===
      false ||
      isAbsoluteUrl(
        destinationUrl ?? "",
      ));

  const guideAvailability =
    getGuideAvailabilityText(
      game.guideCount,
    );

  return (
    <article
      className={[
        "group flex min-w-0",
        "h-full flex-col overflow-hidden",
        "rounded-[1.75rem]",
        "border border-slate-200",
        "bg-slate-50",
        "transition duration-300",
        "hover:-translate-y-1",
        "hover:border-violet-300",
        "hover:shadow-xl",
      ].join(" ")}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
        <Image
          src={game.cover}
          alt={`${game.title} game cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <FitLabel
            rank={rank}
            label={displayLabel}
          />

          <span
            className={[
              "inline-flex min-h-8",
              "items-baseline gap-1.5",
              "whitespace-nowrap",
              "rounded-full bg-slate-950",
              "px-3 py-1 text-white",
            ].join(" ")}
            aria-label={`Fit score ${fitScore} out of 100`}
          >
            <strong className="text-sm font-black">
              {fitScore}
            </strong>

            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-300">
              fit score
            </span>
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {game.releaseYear ? (
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500 shadow-sm">
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

        <h3 className="mt-4 text-xl font-black leading-tight tracking-tight text-slate-950 sm:text-2xl">
          {game.title}
        </h3>

        <div className="mt-4">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-violet-700">
            Why it fits
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            {reason}
          </p>
        </div>

        {closestSelectedGames.length >
        0 ? (
          <ClosestGames
            games={
              closestSelectedGames
            }
          />
        ) : null}

        {differenceNote ? (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3.5">
            <div className="flex gap-2.5">
              <DifferenceIcon />

              <div>
                <p className="text-xs font-black leading-5 text-amber-900">
                  How it differs from your picks
                </p>

                <p className="mt-1.5 text-xs leading-5 text-amber-950/80">
                  {differenceNote}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-auto pt-5">
          <div className="border-t border-slate-200 pt-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold text-slate-500">
                {guideAvailability}
              </p>

              {game.guideSiteName ? (
                <span className="text-[10px] font-bold text-slate-400">
                  {game.guideSiteName}
                </span>
              ) : null}
            </div>

            {destinationUrl ? (
              <Link
                href={destinationUrl}
                target={
                  isExternalGuide
                    ? "_blank"
                    : undefined
                }
                rel={
                  isExternalGuide
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={onClick}
                aria-label={`Open the ${game.title} guide hub`}
                className={[
                  "mt-4 inline-flex",
                  "min-h-12 w-full",
                  "items-center justify-center",
                  "rounded-full",
                  "bg-gradient-to-r",
                  "from-violet-700",
                  "to-fuchsia-700",
                  "px-5 py-3",
                  "text-sm font-black",
                  "text-white shadow-sm",
                  "transition",
                  "hover:from-violet-800",
                  "hover:to-fuchsia-800",
                  "hover:shadow-md",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-violet-500",
                  "focus-visible:ring-offset-2",
                ].join(" ")}
              >
                Open Guide Hub

                {isExternalGuide ? (
                  <ExternalLinkIcon />
                ) : (
                  <ArrowRightIcon />
                )}
              </Link>
            ) : (
              <div
                className={[
                  "mt-4 inline-flex",
                  "min-h-12 w-full",
                  "items-center justify-center",
                  "rounded-full",
                  "border border-slate-200",
                  "bg-white px-5 py-3",
                  "text-sm font-black",
                  "text-slate-400",
                ].join(" ")}
              >
                Guide not available yet
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function FitLabel({
  rank,
  label,
}: {
  rank: number;
  label: string;
}) {
  const badgeClassName =
    getFitBadgeClassName(label);

  return (
    <span
      className={[
        "inline-flex min-h-8",
        "items-center rounded-full",
        "px-3 py-1",
        "text-[10px] font-black",
        "uppercase tracking-[0.14em]",
        badgeClassName,
      ].join(" ")}
    >
      <span className="mr-1.5 opacity-65">
        #{rank}
      </span>

      {label}
    </span>
  );
}

function ClosestGames({
  games,
}: {
  games:
    readonly GameDnaClosestGame[];
}) {
  const visibleGames =
    games.slice(0, 2);

  return (
    <div className="mt-4">
      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
        Closest to games you picked
      </p>

      <div className="mt-2 grid gap-2">
        {visibleGames.map(
          (game) => (
            <div
              key={game.id}
              className={[
                "flex min-w-0",
                "items-center gap-3",
                "rounded-2xl",
                "border border-slate-200",
                "bg-white p-2.5",
                "shadow-sm",
              ].join(" ")}
              title={`${game.title}: ${game.similarity} similarity score`}
            >
              <span className="relative h-12 w-9 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                <Image
                  src={game.cover}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>

              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-black leading-5 text-slate-800">
                  {game.title}
                </p>

                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  From your 3×3 grid
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function normalizeRecommendationLabel(
  value: string,
): string {
  const normalized =
    value
      .trim()
      .toLocaleLowerCase(
        "en-US",
      );

  switch (normalized) {
    case "best match":
    case "top match":
      return "Top Match";

    case "strong match":
    case "strong fit":
    case "explore next":
      return "Strong Fit";

    case "also recommended":
    case "also recommend":
    case "good fit":
      return "Good Fit";

    case "worth exploring":
      return "Worth Exploring";

    case "wildcard":
    case "wildcard pick":
    case "wildcard match":
      return "Wildcard";

    default:
      return (
        value.trim() ||
        "Recommended"
      );
  }
}

function getFallbackLabel(
  index: number,
): string {
  const labels = [
    "Top Match",
    "Strong Fit",
    "Good Fit",
  ];

  return (
    labels[index] ??
    "Recommended"
  );
}

function getFitBadgeClassName(
  label: string,
): string {
  switch (
    label.toLocaleLowerCase(
      "en-US",
    )
  ) {
    case "top match":
      return "bg-violet-100 text-violet-800";

    case "strong fit":
      return "bg-sky-100 text-sky-800";

    case "good fit":
      return "bg-emerald-100 text-emerald-800";

    case "worth exploring":
      return "bg-amber-100 text-amber-900";

    case "wildcard":
      return "bg-rose-100 text-rose-800";

    default:
      return "bg-slate-200 text-slate-700";
  }
}

function getGridClassName(
  recommendationCount: number,
): string {
  if (
    recommendationCount === 1
  ) {
    return "mx-auto w-full max-w-xl";
  }

  if (
    recommendationCount === 2
  ) {
    return "mx-auto w-full max-w-5xl md:grid-cols-2";
  }

  return "md:grid-cols-2 2xl:grid-cols-3";
}

function getGuideAvailabilityText(
  guideCount:
    | number
    | undefined,
): string {
  if (
    !guideCount ||
    guideCount <= 0
  ) {
    return "Guide hub available";
  }

  return `${guideCount} ${
    guideCount === 1
      ? "guide"
      : "guides"
  } available`;
}

function clampFitScore(
  value: number,
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      99,
      Math.round(value * 10) / 10,
    ),
  );
}

function isAbsoluteUrl(
  value: string,
): boolean {
  return /^https?:\/\//i.test(
    value,
  );
}

function trackRecommendationClick(
  recommendation:
    GameDnaRecommendation,
) {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  const gtag = (
    window as Window & {
      gtag?: GtagFunction;
    }
  ).gtag;

  gtag?.(
    "event",
    "game_dna_recommended_hub_click",
    {
      game_id:
        recommendation.game.id,

      game_title:
        recommendation.game.title,

      match_percentage:
        clampFitScore(
          recommendation.matchPercentage,
        ),

      destination_path:
        recommendation.game
          .guideUrl ?? "",

      recommendation_label:
        recommendation.label ?? "",

      closest_selected_games:
        recommendation
          .closestSelectedGames
          .map((game) => game.id)
          .join("|"),

      difference_note_shown:
        Boolean(
          recommendation.differenceNote,
        ),
    },
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-violet-600"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M10 9.1v4.2M10 6.7h.01"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DifferenceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
    >
      <path
        d="M4.5 6.5h11M4.5 13.5h11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="m12.5 3.5 3 3-3 3M7.5 10.5l-3 3 3 3"
        stroke="currentColor"
        strokeWidth="1.6"
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

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
    >
      <path
        d="M11 4h5v5M16 4l-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}