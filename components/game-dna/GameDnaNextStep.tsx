"use client";

import Link from "next/link";

type GameDnaNextStepProps = {
  isVisible: boolean;

  /**
   * Optional profile title for more personal copy.
   * Example: "Optimization Architect".
   */
  profileTitle?: string | null;

  /**
   * Optional selected-game count for analytics.
   */
  selectedGameCount?: number;

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

export default function GameDnaNextStep({
  isVisible,
  profileTitle,
  selectedGameCount = 9,
  className = "",
}: GameDnaNextStepProps) {
  if (!isVisible) {
    return null;
  }

  const normalizedProfileTitle =
    profileTitle?.trim() ||
    "Gaming DNA";

  return (
    <section
      aria-labelledby="game-dna-next-step-title"
      className={[
        "mt-6 overflow-hidden rounded-[2rem]",
        "border border-sky-200",
        "bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.20),transparent_34%),linear-gradient(135deg,#effaff_0%,#ffffff_48%,#f5f3ff_100%)]",
        "p-5 shadow-sm sm:p-7",
        className,
      ].join(" ")}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-700">
            Not sure what to play next?
          </p>

          <h2
            id="game-dna-next-step-title"
            className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
          >
            Your DNA is clear. Now find a
            game that fits tonight.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Your{" "}
            <strong className="font-black text-slate-800">
              {normalizedProfileTitle}
            </strong>{" "}
            result captures your long-term
            taste. Add the practical stuff
            that changes from day to day—
            what you are playing on,
            whether you are solo or with
            friends, and the kind of mood
            you are in—and we will turn it
            into a shorter list.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <FeatureChip>
              Keep your saved DNA
            </FeatureChip>

            <FeatureChip>
              Pick your platform
            </FeatureChip>

            <FeatureChip>
              Solo or co-op
            </FeatureChip>

            <FeatureChip>
              Choose tonight&apos;s mood
            </FeatureChip>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:min-w-[250px]">
          <Link
            href="/what-game-should-i-play?source=game-dna"
            onClick={() =>
              trackNextStepClick({
                profileTitle:
                  normalizedProfileTitle,
                selectedGameCount,
              })
            }
            className={[
              "inline-flex min-h-12",
              "items-center justify-center",
              "rounded-full",
              "bg-gradient-to-r",
              "from-sky-600 to-violet-700",
              "px-6 py-3",
              "text-sm font-black text-white",
              "shadow-sm transition",
              "hover:from-sky-700",
              "hover:to-violet-800",
              "hover:shadow-md",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
              "focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Build My Shortlist

            <ArrowRightIcon />
          </Link>

          <a
            href="#game-dna-recommendations-title"
            className={[
              "inline-flex min-h-11",
              "items-center justify-center",
              "rounded-full",
              "border border-slate-300",
              "bg-white px-5 py-2.5",
              "text-sm font-black",
              "text-slate-700",
              "transition",
              "hover:border-slate-400",
              "hover:bg-slate-50",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
            ].join(" ")}
          >
            See My Guide Matches
          </a>
        </div>
      </div>

      <p className="mt-5 border-t border-slate-200/80 pt-4 text-xs leading-5 text-slate-500">
        Your profile stays on this device.
        No sign-in and no upload required.
      </p>
    </section>
  );
}

function FeatureChip({
  children,
}: {
  children: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm">
      <CheckIcon />

      {children}
    </span>
  );
}

function trackNextStepClick({
  profileTitle,
  selectedGameCount,
}: {
  profileTitle: string;
  selectedGameCount: number;
}) {
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
    "game_dna_quick_recommender_clicked",
    {
      profile_title:
        profileTitle,

      selected_game_count:
        selectedGameCount,

      destination_path:
        "/what-game-should-i-play",

      source:
        "game_dna_result",
    },
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5 shrink-0 text-sky-600"
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