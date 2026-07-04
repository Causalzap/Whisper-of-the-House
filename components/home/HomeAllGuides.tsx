import Link from "next/link";

type FeaturedGuideHub = {
  title: string;
  href: string;
  category: string;
  description: string;
  label: string;
};

type ArchiveGuide = {
  title: string;
  href: string;
};

const featuredGuideHubs: FeaturedGuideHub[] = [
  {
    title: "The Binding of Isaac: Rebirth",
    href: "/the-binding-of-isaac-rebirth",
    category: "Roguelike Unlock Routes",
    label: "Active Hub",
    description:
      "DLC buying, first ten runs, beginner characters, unlock order, Repentance routes, Tainted characters, Hush, Mother, Home, and Beast planning.",
  },
  {
    title: "Supermarket Chaos",
    href: "/supermarket-chaos",
    category: "Sorting & Section Routes",
    label: "Active Hub",
    description:
      "4,668-product cleanup, 16-section routing, beginner route, achievements, Extra Carry, Match Finder, Shelf Finder, and tricky item locations.",
  },
  {
    title: "The Last Caretaker",
    href: "/the-last-caretaker",
    category: "Survival Systems",
    label: "Active Hub",
    description:
      "New Horizons, Project Eden, Oil Whale, ship routing, power, fuel, roots, samples, and late-system cleanup guides.",
  },
  {
    title: "Warhammer 40,000: Darktide - Skitarii Class",
    href: "/darktide",
    category: "Builds & Combat",
    label: "Class Guides",
    description:
      "Skitarii beginner routes, Cog Tree, Servo Skull inputs, Capacitance, Redline, best builds, weapons, and troubleshooting.",
  },
  {
    title: "Moldwasher",
    href: "/moldwasher",
    category: "Walkthrough & Collectibles",
    label: "Cozy Cleanup",
    description:
      "Mission walkthroughs, hidden objects, collectibles, mold types, tools, stuck fixes, achievements, and 100% cleanup help.",
  },
  {
    title: "Timberborn",
    href: "/timberborn",
    category: "Colony Survival",
    label: "Systems",
    description:
      "Badtide defense, drought planning, dams, levees, floodgates, irrigation, reservoirs, and automation logic guides.",
  },
  {
    title: "Steam Next Fest June 2026",
    href: "/steam-next-fest",
    category: "Demo Coverage",
    label: "Event Hub",
    description:
      "Demo guide hubs for Iron Nest, Dust Front RTS, BOMBANANA, Casualties Unknown, and other Steam discovery picks.",
  },
];

const previewGuides: ArchiveGuide[] = [
  { title: "Master Healer Kale with useless party", href: "/master-healer-kale" },
  { title: "Supermarket Chaos", href: "/supermarket-chaos" },
  { title: "Frostpunk 2: Breach of Trust", href: "/frostpunk-2-breach-of-trust" },
  { title: "The Last Caretaker", href: "/the-last-caretaker" },
  { title: "Darktide Skitarii", href: "/darktide" },
  { title: "Moldwasher", href: "/moldwasher" },
  { title: "Timberborn", href: "/timberborn" },
  { title: "Thank You For Your Application", href: "/thank-you-for-your-application" },
  { title: "Steam Next Fest June 2026", href: "/steam-next-fest" },
  { title: "SpaceCraft", href: "/spacecraft" },
  { title: "Tales of Seikyu", href: "/tales-of-seikyu" },
  { title: "The Adventures of Elliot", href: "/the-adventures-of-elliot" },
  { title: "Subnautica 2", href: "/subnautica-2" },
  { title: "Whisper of the House", href: "/guides" },
  { title: "Starminer", href: "/starminer" },
  { title: "Mina the Hollower", href: "/mina-the-hollower" },
  { title: "Scale the Depths", href: "/scale-the-depths" },
  { title: "Fatekeeper", href: "/fatekeeper" },
  { title: "Solarpunk™", href: "/solarpunk" },
];

const guideStats = [
  {
    value: "60+",
    label: "Guide hubs",
  },
  {
    value: "6",
    label: "Featured clusters",
  },
  {
    value: "Archive",
    label: "Full index page",
  },
];

export default function HomeAllGuides() {
  return (
    <section
      id="all-game-guides"
      className="scroll-mt-24 bg-slate-950 px-4 py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">
              Guide Archive
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Browse the active guide archive
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              Start with current guide clusters on the homepage, or open the full archive when you
              already know the game you need. The complete index now lives on its own page so the
              homepage keeps a publication feel.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {guideStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center"
              >
                <div className="text-xl font-black text-white md:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Featured Coverage
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">Current guide clusters</h3>
            </div>
            <Link
              href="/all-game-guides/"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-purple-300 hover:text-white sm:inline-flex"
            >
              Complete archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuideHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group flex min-h-[240px] flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/60 hover:bg-white/[0.09]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-purple-400/15 px-3 py-1 text-xs font-bold text-purple-200">
                    {hub.label}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {hub.category}
                  </span>
                </div>

                <h4 className="text-xl font-black leading-snug text-white group-hover:text-purple-100">
                  {hub.title}
                </h4>

                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-300">
                  {hub.description}
                </p>

                <div className="mt-5 inline-flex items-center text-sm font-bold text-purple-200">
                  View guide hub
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Archive Preview
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">Popular guide hubs</h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              A compact homepage preview keeps the index useful without turning the homepage into a
              sitemap. Open the complete archive for every available guide hub.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {previewGuides.map((game) => (
              <Link
                key={`${game.title}-${game.href}`}
                href={game.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-slate-900"
              >
                <span className="text-sm font-semibold leading-snug text-slate-100 group-hover:text-purple-100">
                  {game.title}
                </span>
                <span className="shrink-0 text-sm font-bold text-purple-300 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-purple-300/20 bg-purple-400/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-lg font-black text-white">Need a specific game?</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                Use the full archive page to browse every guide hub, older cluster, and completion page.
              </p>
            </div>
            <Link
              href="/all-game-guides/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-black text-purple-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-50"
            >
              Browse Complete Archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
