import Link from "next/link";

type GameDiscoveryCtaProps = {
  gameTitle: string;

  heading?: string;
  description?: string;

  quickHref?: string;
  dnaHref?: string;

  primary?: "quick" | "dna";
};

const primaryButtonClassName = [
  "inline-flex min-h-11",
  "items-center justify-center",
  "rounded-full bg-sky-600",
  "px-5 py-2.5",
  "text-sm font-black text-white",
  "shadow-sm transition",
  "hover:-translate-y-0.5",
  "hover:bg-sky-700",
  "hover:shadow-md",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-sky-500",
  "focus-visible:ring-offset-2",
].join(" ");

const secondaryButtonClassName = [
  "inline-flex min-h-11",
  "items-center justify-center",
  "rounded-full border",
  "border-sky-200 bg-white",
  "px-5 py-2.5",
  "text-sm font-black text-sky-800",
  "transition",
  "hover:-translate-y-0.5",
  "hover:border-sky-400",
  "hover:bg-sky-50",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-sky-500",
  "focus-visible:ring-offset-2",
].join(" ");

export default function GameDiscoveryCta({
  gameTitle,
  heading,
  description,
  quickHref = "/what-game-should-i-play",
  dnaHref = "/game-dna",
  primary = "quick",
}: GameDiscoveryCtaProps) {
  const quickIsPrimary =
    primary === "quick";

  const resolvedHeading =
    heading ??
    `Enjoyed ${gameTitle}? Find what to play next.`;

  const resolvedDescription =
    description ??
    `Find another game that fits what you liked about ${gameTitle}. Get a quick shortlist for today, or build a deeper Gaming DNA profile from nine games you already love.`;

  return (
    <section
      aria-label={`Game discovery tools after ${gameTitle}`}
      className={[
        "border-t border-slate-200",
        "bg-[#f3f6fa]",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto w-full max-w-7xl",
          "px-4 py-8",
          "sm:px-6 sm:py-10",
          "lg:px-8",
        ].join(" ")}
      >
        <div
          className={[
            "overflow-hidden",
            "rounded-[1.75rem]",
            "border border-sky-100",
            "bg-white shadow-sm",
          ].join(" ")}
        >
          <div
            className={[
              "grid gap-6 p-5",
              "sm:p-6 lg:p-8",
              "lg:grid-cols-[minmax(0,1fr)_auto]",
              "lg:items-center",
            ].join(" ")}
          >
            <div className="max-w-3xl">
              <p
                className={[
                  "text-[10px] font-black",
                  "uppercase tracking-[0.22em]",
                  "text-sky-700",
                ].join(" ")}
              >
                Keep Exploring
              </p>

              <h2
                className={[
                  "mt-2 text-2xl",
                  "font-black tracking-tight",
                  "text-slate-950",
                  "sm:text-3xl",
                ].join(" ")}
              >
                {resolvedHeading}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {resolvedDescription}
              </p>

              <div
                className={[
                  "mt-4 flex flex-wrap",
                  "gap-x-5 gap-y-2",
                  "text-xs font-bold",
                  "text-slate-500",
                ].join(" ")}
              >
                <span className="inline-flex items-center gap-2">
                  <CheckIcon />
                  Match today&apos;s mood
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckIcon />
                  Use games you already enjoy
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckIcon />
                  No login
                </span>
              </div>
            </div>

            <div
              className={[
                "flex flex-wrap gap-3",
                "lg:max-w-[230px]",
                "lg:flex-col",
              ].join(" ")}
            >
              <Link
                href={quickHref}
                className={
                  quickIsPrimary
                    ? primaryButtonClassName
                    : secondaryButtonClassName
                }
              >
                Find My Next Game
                <ArrowRightIcon />
              </Link>

              <Link
                href={dnaHref}
                className={
                  quickIsPrimary
                    ? secondaryButtonClassName
                    : primaryButtonClassName
                }
              >
                Build My Gaming DNA
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 text-sky-600"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="m6.5 10 2.2 2.2 4.8-4.8"
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