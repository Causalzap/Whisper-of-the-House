import Image from "next/image";
import Link from "next/link";

type GameFinderOption = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  accent: "violet" | "sky";
  icon: "dna" | "quick";
  previewImage?: string;
  previewAlt?: string;
};

const guideTypes = [
  "Walkthroughs",
  "Beginner Guides",
  "Achievements",
  "Endings",
  "Builds",
  "Puzzle Help",
] as const;

const gameFinderOptions:
  readonly GameFinderOption[] = [
    {
      eyebrow: "Your long-term taste",
      title: "Build your Gaming DNA",
      description:
        "Pick nine games you know well and see what keeps showing up in your taste.",
      href: "/game-dna",
      cta: "Pick My 9 Games",
      accent: "violet",
      icon: "dna",
      previewImage:
        "/images/tools/game-dna-home-preview.webp",
      previewAlt:
        "A completed 3 by 3 Gaming DNA grid with nine favorite games",
    },
    {
      eyebrow: "Choose for tonight",
      title: "Get a shorter list now",
      description:
        "Tell us your platform, solo or co-op, and your mood. We will narrow the options.",
      href: "/what-game-should-i-play",
      cta: "Find a Game for Tonight",
      accent: "sky",
      icon: "quick",
    },
  ];

function SearchBox() {
  return (
    <form
      action="/all-game-guides"
      method="get"
      role="search"
      className="mx-auto max-w-2xl lg:mx-0"
    >
      <label
        htmlFor="home-guide-search"
        className="sr-only"
      >
        Search PC and indie game guides
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative min-w-0 flex-1">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
          >
            <path
              d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <input
            id="home-guide-search"
            type="search"
            name="q"
            placeholder="Search a game, boss, item, achievement, or puzzle..."
            autoComplete="off"
            className="min-h-14 w-full rounded-2xl border border-white/15 bg-white py-3 pl-12 pr-4 text-base text-slate-950 shadow-xl outline-none placeholder:text-slate-500 focus:border-purple-300 focus:ring-4 focus:ring-purple-300/20"
          />
        </div>

        <button
          type="submit"
          className="min-h-14 shrink-0 rounded-2xl bg-white px-7 font-black text-purple-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300/40"
        >
          Find a Guide
        </button>
      </div>

      <p className="mt-3 text-center text-xs leading-relaxed text-slate-400 lg:text-left">
        Search by game title or the exact
        problem stopping your run.
      </p>
    </form>
  );
}

function GuideTypeLabels() {
  return (
    <div aria-label="Types of game guides covered">
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-400 lg:text-left">
        Guide coverage
      </p>

      <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
        {guideTypes.map((item) => (
          <li key={item}>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-slate-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GameFinderCard() {
  return (
    <aside
      aria-labelledby="home-game-finder-title"
      className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-500/25 via-sky-500/10 to-transparent blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 shadow-2xl backdrop-blur-md">
        <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-6 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-violet-400/15 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-violet-100">
              Find Your Next Game
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-300">
              Two ways to start
            </span>
          </div>

          <h2
            id="home-game-finder-title"
            className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-4xl"
          >
            Stuck choosing what to play?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Build a profile from nine
            favorites, or take the quick
            route and find something that
            fits tonight.
          </p>
        </div>

        <div className="space-y-3 p-5 md:p-6">
          {gameFinderOptions.map(
            (option) => (
              <GameFinderOptionCard
                key={option.href}
                option={option}
              />
            ),
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs font-semibold text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              Free
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              No sign-in
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              Private by default
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function GameFinderOptionCard({
  option,
}: {
  option: GameFinderOption;
}) {
  const isViolet =
    option.accent === "violet";

  const wrapperClassName = isViolet
    ? "hover:border-violet-300/60 hover:bg-violet-400/[0.10]"
    : "hover:border-sky-300/60 hover:bg-sky-400/[0.10]";

  const iconClassName = isViolet
    ? "bg-violet-400/15 text-violet-200"
    : "bg-sky-400/15 text-sky-200";

  const eyebrowClassName = isViolet
    ? "text-violet-200"
    : "text-sky-200";

  const ctaClassName = isViolet
    ? "text-violet-200"
    : "text-sky-200";

  if (
    option.previewImage &&
    option.previewAlt
  ) {
    return (
      <Link
        href={option.href}
        className={[
          "group block overflow-hidden",
          "rounded-[1.4rem]",
          "border border-white/10",
          "bg-white/[0.055]",
          "transition duration-200",
          "hover:-translate-y-0.5",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-violet-300",
          wrapperClassName,
        ].join(" ")}
        aria-label={`${option.title}: ${option.cta}`}
      >
        <div className="grid gap-4 p-4 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-sm sm:aspect-square">
            <Image
              src={option.previewImage}
              alt={option.previewAlt}
              fill
              sizes="(max-width: 640px) 100vw, 140px"
              className="object-cover transition duration-500 group-hover:scale-[1.035]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
            />
          </div>

          <div className="min-w-0 py-1">
            <p
              className={[
                "text-[10px] font-black",
                "uppercase tracking-[0.16em]",
                eyebrowClassName,
              ].join(" ")}
            >
              {option.eyebrow}
            </p>

            <h3 className="mt-1.5 text-lg font-black leading-tight text-white">
              {option.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {option.description}
            </p>

            <span
              className={[
                "mt-3 inline-flex",
                "items-center text-sm",
                "font-black",
                ctaClassName,
              ].join(" ")}
            >
              {option.cta}

              <span
                aria-hidden="true"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={option.href}
      className={[
        "group block rounded-[1.4rem]",
        "border border-white/10",
        "bg-white/[0.055] p-4",
        "transition duration-200",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-violet-300",
        wrapperClassName,
      ].join(" ")}
      aria-label={`${option.title}: ${option.cta}`}
    >
      <div className="flex gap-4">
        <span
          className={[
            "flex h-12 w-12 shrink-0",
            "items-center justify-center",
            "rounded-2xl",
            iconClassName,
          ].join(" ")}
        >
          {option.icon === "dna" ? (
            <GridDnaIcon />
          ) : (
            <QuickPickIcon />
          )}
        </span>

        <div className="min-w-0 flex-1">
          <p
            className={[
              "text-[10px] font-black",
              "uppercase tracking-[0.16em]",
              eyebrowClassName,
            ].join(" ")}
          >
            {option.eyebrow}
          </p>

          <h3 className="mt-1.5 text-lg font-black leading-tight text-white">
            {option.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {option.description}
          </p>

          <span
            className={[
              "mt-3 inline-flex",
              "items-center text-sm",
              "font-black",
              ctaClassName,
            ].join(" ")}
          >
            {option.cta}

            <span
              aria-hidden="true"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-16 pt-16 text-white md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#020617_0%,#0f172a_48%,#1e1b4b_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(168,85,247,0.24),transparent_32%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.10),transparent_38%)]"
      />

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-bold text-purple-100 shadow-sm backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]"
              />

              Player-first PC & indie game
              guides
            </div>

            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-5xl lg:mx-0 lg:text-6xl">
              Practical guides for the PC
              and indie games you&apos;re
              playing now
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl lg:mx-0">
              Find walkthroughs, beginner
              routes, achievements, endings,
              builds, collectibles, and
              puzzle solutions for new PC
              and indie games.
            </p>

            <div className="mt-8">
              <SearchBox />
            </div>

            <div className="mt-7">
              <GuideTypeLabels />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-purple-300"
                />

                Specific routes and decisions
              </span>

              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-purple-300"
                />

                Updated around releases
              </span>

              <Link
                href="/all-game-guides"
                className="font-bold text-purple-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              >
                Browse all game guides →
              </Link>
            </div>
          </div>

          <GameFinderCard />
        </div>
      </div>
    </section>
  );
}

function GridDnaIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      {[
        [4, 4],
        [10, 4],
        [16, 4],
        [4, 10],
        [10, 10],
        [16, 10],
        [4, 16],
        [10, 16],
        [16, 16],
      ].map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="4"
          height="4"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      ))}
    </svg>
  );
}

function QuickPickIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M5 7h3.5l7 10H19M5 17h3.5l2.2-3.1M13.3 10.1 15.5 7H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m17 5 2 2-2 2M17 15l2 2-2 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
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