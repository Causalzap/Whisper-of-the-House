import Link from "next/link";

type EditorialPillar = {
  title: string;
  description: string;
};

type GuideFormat = {
  title: string;
  description: string;
};

type EditorialStep = {
  step: string;
  title: string;
  description: string;
};

type TrustLink = {
  label: string;
  href: string;
  description: string;
};

type EditorialMetric = {
  value: string;
  label: string;
};

const editorialMetrics: EditorialMetric[] = [
  {
    value: "Player-first",
    label: "Guide direction",
  },
  {
    value: "Route-based",
    label: "Page structure",
  },
  {
    value: "Updated",
    label: "Active coverage",
  },
];

const editorialPillars: EditorialPillar[] = [
  {
    title: "Practical routes, not wiki dumps",
    description:
      "Guides focus on the decisions players need during a run: what to do first, what blocks progress, what can wait, and where cleanup begins.",
  },
  {
    title: "Separate pages for separate needs",
    description:
      "Walkthroughs, endings, achievements, builds, collectibles, puzzle solutions, and system explainers are split so readers can reach the right answer quickly.",
  },
  {
    title: "Coverage changes with the game",
    description:
      "Active hubs can expand around launches, demos, patches, route discoveries, achievement demand, and corrections when important details change.",
  },
];

const guideFormats: GuideFormat[] = [
  {
    title: "Walkthroughs",
    description:
      "Story routes, mission flow, first-hour direction, progression walls, cleanup order, and where-to-go-next help.",
  },
  {
    title: "Achievement Guides",
    description:
      "Unlock notes, hidden triggers, missable warnings, route-specific requirements, and 100% cleanup priorities.",
  },
  {
    title: "Endings & Route Locks",
    description:
      "Spoiler-light ending paths, choice locks, final evaluation checks, true ending requirements, and recovery notes.",
  },
  {
    title: "Builds & Bosses",
    description:
      "Weapon choices, skill direction, boss pressure points, safer early builds, and practical combat decisions.",
  },
  {
    title: "Collectibles & Locations",
    description:
      "Hidden objects, item locations, map clues, cleanup paths, and practical notes for hard-to-find progress checks.",
  },
  {
    title: "Systems & Progression",
    description:
      "Resource loops, automation, base setup, crafting chains, permits, upgrades, survival pressure, and progression planning.",
  },
];

const editorialSteps: EditorialStep[] = [
  {
    step: "01",
    title: "Start from the player problem",
    description:
      "Each guide begins with a real play-session question: how to progress, how to unlock something, how to avoid a bad route, or how to clean up efficiently.",
  },
  {
    step: "02",
    title: "Map the route before the details",
    description:
      "The hub gives the route map first. Dedicated pages then handle deeper walkthroughs, builds, endings, collectibles, or achievement cleanup.",
  },
  {
    step: "03",
    title: "Turn mechanics into choices",
    description:
      "Instead of listing every possible detail, guides emphasize timing, priority order, risk, route locks, safe cleanup windows, and decisions that change a run.",
  },
  {
    step: "04",
    title: "Keep active hubs current",
    description:
      "When a game changes or a new player demand appears, recent updates and active guide hubs surface the pages that need attention first.",
  },
];

const trustLinks: TrustLink[] = [
  {
    label: "About",
    href: "/about",
    description: "Who runs the site and what the guide publication covers.",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    description:
      "How site data, analytics, advertising, and privacy choices are handled.",
  },
  {
    label: "Terms of Service",
    href: "/terms-of-service",
    description:
      "The basic terms for using the site, reading guides, and accessing content.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Reach the site for corrections, questions, or coverage notes.",
  },
];

function MetricStrip() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {editorialMetrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center shadow-sm"
        >
          <div className="text-sm font-black text-white md:text-base">
            {metric.value}
          </div>
          <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function TrustLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {trustLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-white/[0.08]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-black text-white group-hover:text-purple-100">
                {link.label}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {link.description}
              </p>
            </div>

            <span className="shrink-0 text-sm font-black text-purple-300 transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function PillarCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {editorialPillars.map((pillar) => (
        <article
          key={pillar.title}
          className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-sm"
        >
          <h3 className="text-lg font-black text-white">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {pillar.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function EditorialSteps() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-sm md:p-6">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
          How Guides Are Built
        </p>
        <h3 className="mt-2 text-2xl font-black text-white">
          From player question to usable route
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Active guide clusters are designed so readers can start at a hub,
          choose the right dedicated page, and return later for achievements,
          endings, collectibles, builds, or system-specific cleanup.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {editorialSteps.map((item) => (
          <article
            key={item.step}
            className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-400/15 text-sm font-black text-purple-200">
                {item.step}
              </span>
              <h4 className="text-lg font-black text-white">{item.title}</h4>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function GuideFormats() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-sm md:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Guide Formats
          </p>
          <h3 className="mt-2 text-2xl font-black text-white">
            Practical formats for different player needs
          </h3>
        </div>

        <Link
          href="/all-game-guides"
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-slate-100 transition hover:border-purple-300/60 hover:bg-white/[0.14] hover:text-white"
        >
          Browse all guides →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guideFormats.map((format) => (
          <article
            key={format.title}
            className="rounded-2xl border border-white/10 bg-slate-900/75 p-4 transition hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-slate-900"
          >
            <h4 className="font-black text-white">{format.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {format.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArchiveCta() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/10 p-6">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="text-2xl font-black text-white">
            Looking for a specific game?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Use the complete guide archive to jump into active hubs, older guide
            clusters, walkthrough pages, and completion resources.
          </p>
        </div>

        <Link
          href="/all-game-guides"
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-black text-purple-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-50"
        >
          Open Guide Archive
        </Link>
      </div>
    </div>
  );
}

export default function HomeEditorialFocus() {
  return (
    <section
      id="editorial-focus"
      aria-labelledby="editorial-focus-title"
      className="relative isolate overflow-hidden bg-transparent px-4 py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">
              Editorial Focus
            </p>

            <h2
              id="editorial-focus-title"
              className="text-3xl font-black tracking-tight text-white md:text-4xl"
            >
              Guides written for actual play sessions
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Whisper of the House covers new PC and indie games with practical
              walkthroughs, achievements, endings, builds, collectibles, puzzle
              solutions, and system guides. The goal is to help players make
              progress faster without turning every page into a full wiki dump.
            </p>

            <div className="mt-7">
              <MetricStrip />
            </div>

            <div className="mt-7 rounded-[2rem] border border-purple-300/20 bg-gradient-to-br from-purple-500/15 to-blue-500/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-200">
                Publication direction
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                The site prioritizes practical guide clusters for games where
                players need routes, decisions, cleanup help, and clear answers.
                It is built as a guide publication, not a collection of isolated
                search pages.
              </p>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Site Trust
              </p>
              <TrustLinks />
            </div>
          </aside>

          <div className="space-y-8">
            <PillarCards />
            <EditorialSteps />
            <GuideFormats />
            <ArchiveCta />
          </div>
        </div>
      </div>
    </section>
  );
}