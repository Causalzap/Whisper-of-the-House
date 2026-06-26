import type { Metadata } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { latestUpdates as rawLatestUpdates } from "@/data/latest-updates";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-game-guides/`;

export const metadata: Metadata = {
  title: "All Game Guides Archive | Whisper of the House",
  description:
    "Browse PC and indie game guide hubs, walkthroughs, achievements, endings, builds, collectibles, systems guides, puzzle help, and game collections.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "All Game Guides Archive | Whisper of the House",
    description:
      "Browse active guide hubs, walkthroughs, achievements, endings, builds, collectibles, systems guides, puzzle help, and older game collections.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Game Guides Archive | Whisper of the House",
    description:
      "Browse active guide hubs, walkthroughs, achievements, endings, builds, collectibles, systems guides, puzzle help, and older game collections.",
  },
};

type GuideLink = {
  title: string;
  href: string;
};

type ActiveGuideHub = GuideLink & {
  label: string;
  description: string;
  coverage: string[];
};

type GuideGroup = {
  title: string;
  eyebrow: string;
  description: string;
  guides: GuideLink[];
};

type RawLatestUpdate = {
  title?: string;
  href?: string;
  game?: string;
  description?: string;
  excerpt?: string;
  summary?: string;
  type?: string;
  tag?: string;
  category?: string;
  date?: string;
};

type NormalizedUpdate = {
  title: string;
  href: string;
  game: string;
  description: string;
  type: string;
  date: string;
};

type UpdateGroup = {
  game: string;
  updates: NormalizedUpdate[];
};

const activeGuideHubs: ActiveGuideHub[] = [
  {
    title: "The Last Caretaker",
    href: "/the-last-caretaker",
    label: "Survival Systems",
    description:
      "New Horizons, Project Eden, Oil Whale, ship routing, power, fuel, roots, samples, and cleanup decisions.",
    coverage: ["New Horizons", "Project Eden", "Oil Whale", "Ship systems"],
  },
  {
    title: "Warhammer 40,000: Darktide - Skitarii Class",
    href: "/darktide",
    label: "Builds & Combat",
    description:
      "Skitarii beginner routes, Cog Tree, Servo Skull inputs, Capacitance, Redline, builds, weapons, and troubleshooting.",
    coverage: ["Best builds", "Weapons", "Servo Skull", "Beginner route"],
  },
  {
    title: "Moldwasher",
    href: "/moldwasher",
    label: "Walkthrough & Collectibles",
    description:
      "Mission walkthroughs, hidden objects, collectibles, tools, stuck fixes, achievements, and 100% cleanup help.",
    coverage: ["Walkthrough", "Collectibles", "Achievements", "Stuck fixes"],
  },
  {
    title: "Timberborn",
    href: "/timberborn",
    label: "Colony Systems",
    description:
      "Badtide defense, drought planning, dams, levees, floodgates, irrigation, reservoirs, and automation logic.",
    coverage: ["Badtides", "Automation", "Reservoirs", "Floodgates"],
  },
  {
    title: "Thank You For Your Application",
    href: "/thank-you-for-your-application",
    label: "Endings & Route Locks",
    description:
      "Beginner tips, final evaluation answers, ratings, route locks, job outcomes, endings, and achievement cleanup.",
    coverage: ["Endings", "Ratings", "Route locks", "Achievements"],
  },
  {
    title: "Steam Next Fest June 2026 Demo Guides",
    href: "/steam-next-fest",
    label: "Demo Coverage",
    description:
      "Selected Steam demo guide hubs, first-hour help, route notes, systems, and discovery coverage.",
    coverage: ["Demo picks", "First-hour help", "Event hubs", "Steam discovery"],
  },
];

const guideGroups: GuideGroup[] = [
  {
    title: "Active guide hubs",
    eyebrow: "Current Coverage",
    description:
      "Current and recently expanded guide hubs with walkthroughs, systems, achievements, endings, builds, or collectibles.",
    guides: [
      { title: "The Last Caretaker", href: "/the-last-caretaker" },
      { title: "Warhammer 40,000: Darktide - Skitarii Class", href: "/darktide" },
      { title: "Moldwasher", href: "/moldwasher" },
      { title: "Timberborn", href: "/timberborn" },
      {
        title: "Thank You For Your Application",
        href: "/thank-you-for-your-application",
      },
      { title: "Steam Next Fest June 2026 Demo Guides", href: "/steam-next-fest" },
      {
        title: "The Adventures of Elliot: The Millennium Tales",
        href: "/the-adventures-of-elliot",
      },
      { title: "SpaceCraft", href: "/spacecraft" },
      { title: "Tales of Seikyu", href: "/tales-of-seikyu" },
      { title: "33 Immortals", href: "/33-immortals" },
      { title: "Realm of Ink", href: "/realm-of-ink" },
      { title: "Subnautica 2", href: "/subnautica-2" },
    ],
  },
  {
    title: "Cozy, crafting, survival & systems",
    eyebrow: "Systems",
    description:
      "Games where progression, resources, crafting chains, base setup, colony pressure, and cleanup routes matter.",
    guides: [
      { title: "Whisper of the House", href: "/guides" },
      { title: "SpaceCraft", href: "/spacecraft" },
      { title: "Tales of Seikyu", href: "/tales-of-seikyu" },
      { title: "Timberborn", href: "/timberborn" },
      { title: "Moldwasher", href: "/moldwasher" },
      {
        title: "House Flipper Remastered Collection",
        href: "/house-flipper-remastered-collection",
      },
      { title: "Solarpunk™", href: "/solarpunk" },
      { title: "Outbound", href: "/outbound" },
      { title: "Romestead", href: "/romestead" },
      { title: "Starminer", href: "/starminer" },
      { title: "Cheap Car Repair", href: "/cheap-car-repair" },
      { title: "Paralives", href: "/paralives" },
    ],
  },
  {
    title: "RPG, action, builds & combat",
    eyebrow: "Combat",
    description:
      "Guides focused on weapons, builds, bosses, character routes, class choices, combat pressure, and completion cleanup.",
    guides: [
      { title: "Warhammer 40,000: Darktide - Skitarii Class", href: "/darktide" },
      {
        title: "The Adventures of Elliot: The Millennium Tales",
        href: "/the-adventures-of-elliot",
      },
      { title: "33 Immortals", href: "/33-immortals" },
      { title: "Realm of Ink", href: "/realm-of-ink" },
      { title: "GRIME II", href: "/grime-2" },
      { title: "Soulmask", href: "/soulmask" },
      { title: "Crystalfall", href: "/crystalfall" },
      { title: "Sol Cesto", href: "/sol-cesto" },
      { title: "Lucky Tower Ultimate", href: "/lucky-tower-ultimate" },
      { title: "Vampire Crawlers", href: "/vampire-crawlers" },
      { title: "The Spell Brigade", href: "/the-spell-brigade" },
      { title: "Deep Rock Galactic: Rogue Core", href: "/deep-rock-galactic" },
      { title: "Mina the Hollower", href: "/mina-the-hollower" },
      { title: "Fatekeeper", href: "/fatekeeper" },
      { title: "Gothic 1 Remake", href: "/gothic-1-remake" },
    ],
  },
  {
    title: "Story, endings, horror & route locks",
    eyebrow: "Routes",
    description:
      "Pages for endings, choices, route locks, story progress, horror objectives, and spoiler-light outcome help.",
    guides: [
      {
        title: "Thank You For Your Application",
        href: "/thank-you-for-your-application",
      },
      { title: "The Long Dark Episode 5", href: "/the-long-dark-episode-5" },
      { title: "I Am Jesus Christ", href: "/i-am-jesus-christ" },
      { title: "The Occultist", href: "/the-occultist" },
      { title: "MOUSE: P.I. For Hire", href: "/mouse-pi-for-hire" },
      { title: "Directive 8020", href: "/directive-8020" },
      { title: "ZERO PARADES: For Dead Spies", href: "/zero-parades" },
      {
        title: "Fears to Fathom - Scratch Creek",
        href: "/fears-to-fathom-scratch-creek",
      },
      { title: "Magical Princess", href: "/magical-princess/endings-guide" },
    ],
  },
  {
    title: "Strategy, simulation, puzzle & discovery",
    eyebrow: "Discovery",
    description:
      "Guide hubs and archive entries for puzzle logic, strategy systems, simulation planning, and Steam discovery coverage.",
    guides: [
      { title: "Steam Next Fest June 2026 Demo Guides", href: "/steam-next-fest" },
      { title: "shapez 2 - Factory", href: "/shapez-2" },
      { title: "Fracture Field", href: "/fracture-field" },
      { title: "Heroes of Might and Magic: Olden Era", href: "/olden-era" },
      { title: "Airborne Empire", href: "/airborne-empire" },
      { title: "Pragmata", href: "/pragmata" },
      { title: "Sintopia", href: "/sintopia" },
      { title: "Road To Vostok", href: "/road-to-vostok" },
      { title: "Subnautica 2", href: "/subnautica-2" },
      { title: "Scale the Depths", href: "/scale-the-depths" },
      { title: "Voidling Bound", href: "/voidling-bound" },
    ],
  },
  {
    title: "Older archive",
    eyebrow: "Archive",
    description:
      "Earlier guides and smaller game collections kept available for readers looking for a specific older game, route, achievement, or puzzle answer.",
    guides: [
      { title: "Retro Rewind", href: "/retro-rewind" },
      { title: "Hozy", href: "/guides/hozy" },
      { title: "Pokemon Champions", href: "/pokemon-champions" },
      { title: "Moomintroll: Winter's Warmth", href: "/moomintroll" },
      { title: "Far Far West", href: "/far-far-west" },
      { title: "Gamble With Your Friends", href: "/gamble-with-your-friends" },
      { title: "Librarian: Tidy Up the Arcane Library!", href: "/librarian" },
      { title: "Farever", href: "/farever" },
      {
        title: "Everything is Crab: The Animal Evolution Roguelite",
        href: "/everything-is-crab",
      },
      { title: "Oaken Tower", href: "/oaken-tower" },
      { title: "Dwarf Eats Mountain", href: "/dwarf-eats-mountain" },
      {
        title: "LEGO® Batman™: Legacy of the Dark Knight",
        href: "/lego-batman",
      },
      { title: "Burglin' Gnomes", href: "/burglin-gnomes" },
    ],
  },
];

const faqItems = [
  {
    question: "How do I find guides for a specific game?",
    answer:
      "Start with the featured guide hubs near the top of this page, then use the game collections and category sections to browse related guides.",
  },
  {
    question: "What types of guides are included?",
    answer:
      "The archive includes walkthroughs, beginner routes, achievements, endings, builds, collectibles, puzzle solutions, combat help, and system explainers.",
  },
  {
    question: "Why are some games listed in more than one category?",
    answer:
      "Some games fit multiple player needs. For example, a survival game may also have achievements, systems, collectibles, or route-lock pages.",
  },
  {
    question: "Where are older guides kept?",
    answer:
      "Older single-page guides and smaller game collections stay in the archive sections so readers can still find them when they need a specific game or topic.",
  },
];

function normalizeLatestUpdates(updates: RawLatestUpdate[]): NormalizedUpdate[] {
  return updates
    .filter((item) => item.href && item.title)
    .map((item) => ({
      title: item.title ?? "Guide",
      href: item.href ?? "/",
      game: item.game ?? "Game Guide",
      description:
        item.description ??
        item.excerpt ??
        item.summary ??
        "Open this guide for route help, progression notes, achievements, systems, or completion details.",
      type: item.type ?? item.tag ?? item.category ?? "Guide",
      date: item.date ?? "",
    }));
}

function groupUpdatesByGame(updates: NormalizedUpdate[]): UpdateGroup[] {
  const groups = new Map<string, NormalizedUpdate[]>();

  updates.forEach((update) => {
    const current = groups.get(update.game) ?? [];
    current.push(update);
    groups.set(update.game, current);
  });

  return Array.from(groups.entries()).map(([game, groupedUpdates]) => ({
    game,
    updates: groupedUpdates.slice(0, 4),
  }));
}

function countUniqueGuides(groups: GuideGroup[]) {
  const uniqueHrefs = new Set<string>();

  groups.forEach((group) => {
    group.guides.forEach((guide) => {
      uniqueHrefs.add(guide.href);
    });
  });

  return uniqueHrefs.size;
}

const normalizedUpdates = normalizeLatestUpdates(
  rawLatestUpdates as RawLatestUpdate[]
);

const recentUpdateGroups = groupUpdatesByGame(normalizedUpdates).slice(0, 18);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "All Game Guides Archive",
  url: pageUrl,
  description:
    "A complete archive of Whisper of the House game guide hubs, walkthroughs, achievements, ending routes, build pages, collectible guides, system guides, game collections, and older archive entries.",
  isPartOf: {
    "@type": "WebSite",
    name: "Whisper of the House",
    url: siteUrl,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "All Game Guides",
      item: pageUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}

function ActiveHubCard({ hub }: { hub: ActiveGuideHub }) {
  return (
    <Link
      href={hub.href}
      className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/60 hover:bg-white/[0.08] hover:shadow-lg"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-purple-400/15 px-3 py-1 text-xs font-black text-purple-200">
          {hub.label}
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
          Guide Hub
        </span>
      </div>

      <h2 className="text-xl font-black leading-snug text-white group-hover:text-purple-200">
        {hub.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {hub.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {hub.coverage.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 text-sm font-black text-purple-200">
        Open guide hub →
      </div>
    </Link>
  );
}

function UpdateGroupCard({ group }: { group: UpdateGroup }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-purple-300">
            Guide Collection
          </p>
          <h3 className="mt-1 text-xl font-black text-white">{group.game}</h3>
        </div>

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
          {group.updates.length} guides
        </span>
      </div>

      <div className="space-y-3">
        {group.updates.map((update) => (
          <Link
            key={`${group.game}-${update.href}`}
            href={update.href}
            className="group/link block rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-purple-300/50 hover:bg-slate-900"
          >
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-400/15 px-2.5 py-1 text-[11px] font-black text-purple-200">
                {update.type}
              </span>

              {update.date ? (
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                  {update.date}
                </span>
              ) : null}
            </div>

            <h4 className="text-sm font-black leading-snug text-white group-hover/link:text-purple-200">
              {update.title}
            </h4>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
              {update.description}
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}

function GuideCard({ guide }: { guide: GuideLink }) {
  return (
    <Link
      href={guide.href}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.08]"
    >
      <span className="text-sm font-bold leading-snug text-slate-200 group-hover:text-purple-100">
        {guide.title}
      </span>
      <span className="shrink-0 text-sm font-black text-purple-300 transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

function GuideGroupSection({ group }: { group: GuideGroup }) {
  return (
    <section className="scroll-mt-24">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            {group.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">{group.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            {group.description}
          </p>
        </div>

        <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300">
          {group.guides.length} guides
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {group.guides.map((guide) => (
          <GuideCard
            key={`${group.title}-${guide.title}-${guide.href}`}
            guide={guide}
          />
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 md:p-6">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
          Archive FAQ
        </p>
        <h2 className="mt-2 text-2xl font-black text-white">
          Finding the right game guide
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {faqItems.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-white/10 bg-slate-900/75 p-5"
          >
            <h3 className="font-black text-white">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AllGameGuidesPage() {
  const uniqueGuideCount = countUniqueGuides(guideGroups);

  return (
    <Layout>
      <main className="bg-slate-950 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <section className="relative isolate overflow-hidden px-4 py-16 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-20 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <Link
                  href="/"
                  className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-slate-200 transition hover:border-purple-300/60 hover:bg-white/10 hover:text-white"
                >
                  ← Back to homepage
                </Link>

                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">
                  Complete Archive
                </p>

                <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  Complete game guide archive
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                  Browse active guide hubs, walkthroughs, achievements, endings,
                  builds, collectibles, system explainers, puzzle solutions, and
                  older PC game guide collections in one place.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <StatCard value={`${uniqueGuideCount}+`} label="Guide entries" />
                <StatCard
                  value={recentUpdateGroups.length}
                  label="Game collections"
                />
                <StatCard value={activeGuideHubs.length} label="Featured hubs" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 md:pb-20">
          <div className="container mx-auto max-w-6xl space-y-14">
            <section>
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                    Featured Guide Hubs
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-white">
                    Start with the main game hubs
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                    These hubs collect the most useful routes, systems,
                    achievements, endings, builds, and cleanup guides for
                    currently featured games.
                  </p>
                </div>

                <Link
                  href="/#latest-updates"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-black text-slate-100 transition hover:border-purple-300/50 hover:bg-white/[0.14]"
                >
                  Homepage latest stories →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {activeGuideHubs.map((hub) => (
                  <ActiveHubCard key={hub.href} hub={hub} />
                ))}
              </div>
            </section>

            {recentUpdateGroups.length > 0 ? (
              <section>
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                      Game Guide Collections
                    </p>
                    <h2 className="mt-2 text-3xl font-black text-white">
                      Browse related guides by game
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                      Each collection groups related walkthroughs, achievements,
                      endings, builds, collectibles, puzzle help, and system
                      guides for the same game.
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300">
                    {normalizedUpdates.length} guide pages
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {recentUpdateGroups.map((group) => (
                    <UpdateGroupCard key={group.game} group={group} />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-6">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                  Browse by Category
                </p>
                <h2 className="mt-2 text-3xl font-black text-white">
                  Full guide archive
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                  Use these categories when you know the type of game or guide
                  you need. Some games appear in more than one section when they
                  support multiple player needs.
                </p>
              </div>

              <div className="space-y-10">
                {guideGroups.map((group) => (
                  <GuideGroupSection key={group.title} group={group} />
                ))}
              </div>
            </section>

            <FaqSection />
          </div>
        </section>
      </main>
    </Layout>
  );
}