import Link from "next/link";

type HeroAccent =
  | "purple"
  | "blue"
  | "emerald"
  | "amber"
  | "rose"
  | "cyan";

type FeaturedGuide = {
  title: string;
  href: string;
  game: string;
  type: string;
  description: string;
  highlights: string[];
  accent: HeroAccent;
};

const featuredGuide: FeaturedGuide = {
  title: "New Horizons Guide, Project Eden & Ship Routes",
  href: "/the-last-caretaker/new-horizons-guide",
  game: "The Last Caretaker",
  type: "Walkthrough",
  description:
    "Route New Horizons, Project Eden, Oil Whale, power, fuel, wall outlets, and ship cleanup decisions without wasting a run.",
  highlights: ["Project Eden", "Oil Whale", "Ship routes"],
  accent: "purple",
};

const guideTypes = [
  "Walkthroughs",
  "Beginner Guides",
  "Achievements",
  "Endings",
  "Builds",
  "Puzzle Help",
] as const;

const accentClasses: Record<
  HeroAccent,
  {
    badge: string;
    border: string;
    button: string;
    glow: string;
    text: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-100",
    border: "hover:border-purple-300/60",
    button: "bg-purple-500 hover:bg-purple-400",
    glow: "from-purple-500/25 via-fuchsia-500/10 to-transparent",
    text: "text-purple-200",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-100",
    border: "hover:border-blue-300/60",
    button: "bg-blue-500 hover:bg-blue-400",
    glow: "from-blue-500/25 via-cyan-500/10 to-transparent",
    text: "text-blue-200",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-100",
    border: "hover:border-emerald-300/60",
    button: "bg-emerald-500 hover:bg-emerald-400",
    glow: "from-emerald-500/25 via-teal-500/10 to-transparent",
    text: "text-emerald-200",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-100",
    border: "hover:border-amber-300/60",
    button: "bg-amber-500 hover:bg-amber-400",
    glow: "from-amber-500/25 via-orange-500/10 to-transparent",
    text: "text-amber-200",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-100",
    border: "hover:border-rose-300/60",
    button: "bg-rose-500 hover:bg-rose-400",
    glow: "from-rose-500/25 via-red-500/10 to-transparent",
    text: "text-rose-200",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-100",
    border: "hover:border-cyan-300/60",
    button: "bg-cyan-500 hover:bg-cyan-400",
    glow: "from-cyan-500/25 via-sky-500/10 to-transparent",
    text: "text-cyan-200",
  },
};

function SearchBox() {
  return (
    <form
      action="/all-game-guides"
      method="get"
      role="search"
      className="mx-auto max-w-2xl lg:mx-0"
    >
      <label htmlFor="home-guide-search" className="sr-only">
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
        Search by game title or the exact problem stopping your run.
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

function FeaturedGuideCard({ guide }: { guide: FeaturedGuide }) {
  const color = accentClasses[guide.accent];

  return (
    <aside
      aria-labelledby="home-featured-guide-title"
      className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className={`absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br ${color.glow} blur-3xl`}
      />

      <div
        className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-1 ${color.border}`}
      >
        <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-6 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide ${color.badge}`}
            >
              Featured Guide
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-300">
              {guide.type}
            </span>
          </div>

          <p className={`mt-7 text-sm font-black ${color.text}`}>
            {guide.game}
          </p>

          <h2
            id="home-featured-guide-title"
            className="mt-3 text-3xl font-black leading-tight tracking-tight text-white md:text-4xl"
          >
            {guide.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {guide.description}
          </p>
        </div>

        <div className="p-6 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Inside this guide
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {guide.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={guide.href}
              className={`inline-flex min-h-12 flex-1 items-center justify-center rounded-xl px-5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300/30 ${color.button}`}
            >
              Read Featured Guide
              <span
                aria-hidden="true"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/#featured-games"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] px-5 text-sm font-bold text-slate-100 transition hover:border-purple-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              Explore Guide Hubs
            </Link>
          </div>
        </div>
      </div>
    </aside>
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
              Player-first PC & indie game guides
            </div>

            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-5xl lg:mx-0 lg:text-6xl">
              Practical guides for the PC and indie games you&apos;re playing now
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl lg:mx-0">
              Find walkthroughs, beginner routes, achievements, endings,
              builds, collectibles, and puzzle solutions for new PC and indie
              games.
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

          <FeaturedGuideCard guide={featuredGuide} />
        </div>
      </div>
    </section>
  );
}