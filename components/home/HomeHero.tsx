import Link from "next/link";

type EditorPick = {
  title: string;
  href: string;
  game: string;
  type: string;
  description: string;
  accent: "purple" | "blue" | "emerald" | "amber" | "rose" | "cyan";
};

type HeroStat = {
  value: string;
  label: string;
};

type GuideType = {
  label: string;
  href: string;
};

const editorPicks: EditorPick[] = [
  {
    title: "New Horizons Guide, Project Eden & Ship Routes",
    href: "/the-last-caretaker/new-horizons-guide",
    game: "The Last Caretaker",
    type: "Walkthrough",
    description:
      "Route New Horizons, Project Eden, Oil Whale, power, fuel, wall outlets, and ship cleanup decisions.",
    accent: "purple",
  },
  {
    title: "Best Skitarii Builds Guide",
    href: "/darktide/best-skitarii-builds",
    game: "Darktide Skitarii",
    type: "Builds",
    description:
      "Build around Redline, Cog Tree choices, Servo Skull inputs, weapons, and safer early class routes.",
    accent: "rose",
  },
  {
    title: "Moldwasher Collectibles Guide",
    href: "/moldwasher/collectibles-guide",
    game: "Moldwasher",
    type: "Collectibles",
    description:
      "Find hidden objects, stickers, CDs, toys, tricky corners, cleanup spots, and 100% collection checks.",
    accent: "emerald",
  },
];

const heroStats: HeroStat[] = [
  {
    value: "60+",
    label: "Guide hubs",
  },
  {
    value: "6",
    label: "Guide formats",
  },
  {
    value: "Updated",
    label: "Around releases",
  },
];

const guideTypes: GuideType[] = [
  {
    label: "Walkthroughs",
    href: "/#featured-games",
  },
  {
    label: "Achievements",
    href: "/#latest-updates",
  },
  {
    label: "Endings",
    href: "/best-games-with-multiple-endings",
  },
  {
    label: "Builds",
    href: "/#featured-games",
  },
  {
    label: "Collectibles",
    href: "/#latest-updates",
  },
  {
    label: "Puzzle Solutions",
    href: "/#all-game-guides",
  },
];

const accentClasses: Record<
  EditorPick["accent"],
  {
    badge: string;
    border: string;
    glow: string;
    text: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-100",
    border: "hover:border-purple-300/60",
    glow: "from-purple-500/20 to-fuchsia-500/10",
    text: "text-purple-200",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-100",
    border: "hover:border-blue-300/60",
    glow: "from-blue-500/20 to-cyan-500/10",
    text: "text-blue-200",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-100",
    border: "hover:border-emerald-300/60",
    glow: "from-emerald-500/20 to-teal-500/10",
    text: "text-emerald-200",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-100",
    border: "hover:border-amber-300/60",
    glow: "from-amber-500/20 to-orange-500/10",
    text: "text-amber-200",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-100",
    border: "hover:border-rose-300/60",
    glow: "from-rose-500/20 to-red-500/10",
    text: "text-rose-200",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-100",
    border: "hover:border-cyan-300/60",
    glow: "from-cyan-500/20 to-sky-500/10",
    text: "text-cyan-200",
  },
};

function SearchBox() {
  return (
    <form
      action="/guides"
      method="get"
      className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row lg:mx-0"
    >
      <label htmlFor="home-guide-search" className="sr-only">
        Search game guides
      </label>

      <input
        id="home-guide-search"
        type="search"
        name="q"
        placeholder="Search game guides..."
        className="min-h-12 flex-1 rounded-2xl border border-white/15 bg-white px-4 text-slate-950 shadow-sm outline-none placeholder:text-slate-500 focus:border-purple-300"
      />

      <button
        type="submit"
        className="min-h-12 rounded-2xl bg-white px-6 font-bold text-purple-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
      >
        Search
      </button>
    </form>
  );
}

function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-3 pt-2">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center backdrop-blur-sm"
        >
          <div className="text-xl font-black text-white md:text-2xl">
            {stat.value}
          </div>
          <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function GuideTypePills() {
  return (
    <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
      {guideTypes.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-purple-200 hover:bg-white/15 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function EditorPickCard({ pick, index }: { pick: EditorPick; index: number }) {
  const color = accentClasses[pick.accent];

  return (
    <Link
      href={pick.href}
      className={`group block rounded-3xl border border-white/10 bg-white/[0.07] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] ${color.border}`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${color.badge}`}>
            {pick.type}
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
            {pick.game}
          </span>
        </div>

        <span className="text-xs font-black text-slate-500">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-base font-black leading-snug text-white group-hover:text-purple-100">
        {pick.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">
        {pick.description}
      </p>

      <div className={`mt-4 text-sm font-bold ${color.text}`}>
        Read guide →
      </div>
    </Link>
  );
}

function EditorialPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-md">
        <div className="mb-5 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/10 p-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-purple-200">
                Editor&apos;s Desk
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                Active guide coverage
              </h2>
            </div>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-purple-950">
              New
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-200">
            Practical routes for new PC and indie games: first-hour help, route
            locks, builds, achievements, collectibles, endings, and systems that
            players actually search for while playing.
          </p>
        </div>

        <div className="space-y-3">
          {editorPicks.map((pick, index) => (
            <EditorPickCard key={pick.href} pick={pick} index={index} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href="/#latest-updates"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/15"
          >
            Latest Updates
          </Link>

          <Link
            href="/#all-game-guides"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/15"
          >
            All Game Guides
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pt-20 pb-16 text-white md:pt-24 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,#020617_0%,#111827_48%,#1e1b4b_100%)]" />
      <div className="container relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-purple-100 shadow-sm backdrop-blur-sm">
              Independent PC & indie game guide publication
            </div>

            <div>
              <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Practical guides for new PC and indie games
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl lg:mx-0">
                Whisper of the House covers walkthroughs, endings, achievements,
                builds, collectibles, puzzle solutions, boss help, and first-hour
                routes for Steam, indie, cozy, survival, RPG, puzzle, and strategy
                games.
              </p>
            </div>

            <SearchBox />

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/#latest-updates"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3 font-black text-purple-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
              >
                Latest Updates
              </Link>

              <Link
                href="/#featured-games"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Featured Hubs
              </Link>

              <Link
                href="/#all-game-guides"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                All Game Guides
              </Link>
            </div>

            <GuideTypePills />

            <HeroStats />
          </div>

          <EditorialPanel />
        </div>
      </div>
    </section>
  );
}