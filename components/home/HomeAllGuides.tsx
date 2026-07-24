import Link from "next/link";

import {
  guideClusters,
  type GuideCluster,
  type GuidePageType,
  type HomeAccent,
} from "@/data/guides";

const HUB_PAGE_TYPES = new Set<GuidePageType>([
  "Guide Hub",
  "Class Guide Hub",
  "Event Hub",
  "Spotlight Coverage",
]);

const typedGuideClusters =
  guideClusters as readonly GuideCluster[];

const publishedGameHubs = typedGuideClusters.filter(
  (cluster) =>
    cluster.kind === "game" &&
    cluster.status !== "upcoming"
);

/**
 * The previous homepage section already displays the first
 * eight newest game hubs.
 *
 * Start this archive preview from the ninth hub so the
 * homepage does not repeat the same games again.
 */
const archivePreviewHubs = publishedGameHubs.slice(8, 17);

const totalSpokeGuides = publishedGameHubs.reduce(
  (total, cluster) =>
    total +
    cluster.pages.filter(
      (page) =>
        page.href !== cluster.href &&
        !HUB_PAGE_TYPES.has(page.type)
    ).length,
  0
);

const categoryCount = new Set(
  publishedGameHubs.map(
    (cluster) => cluster.archiveCategory
  )
).size;

const accentClasses: Record<
  HomeAccent,
  {
    badge: string;
    text: string;
    border: string;
    glow: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-200",
    text: "text-purple-200",
    border: "hover:border-purple-300/45",
    glow: "from-purple-500/15 via-purple-500/5 to-transparent",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-200",
    text: "text-blue-200",
    border: "hover:border-blue-300/45",
    glow: "from-blue-500/15 via-blue-500/5 to-transparent",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-200",
    text: "text-emerald-200",
    border: "hover:border-emerald-300/45",
    glow: "from-emerald-500/15 via-emerald-500/5 to-transparent",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-200",
    text: "text-amber-200",
    border: "hover:border-amber-300/45",
    glow: "from-amber-500/15 via-amber-500/5 to-transparent",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-200",
    text: "text-rose-200",
    border: "hover:border-rose-300/45",
    glow: "from-rose-500/15 via-rose-500/5 to-transparent",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-200",
    text: "text-cyan-200",
    border: "hover:border-cyan-300/45",
    glow: "from-cyan-500/15 via-cyan-500/5 to-transparent",
  },
};

function getSpokeCount(cluster: GuideCluster) {
  return cluster.pages.filter(
    (page) =>
      page.href !== cluster.href &&
      !HUB_PAGE_TYPES.has(page.type)
  ).length;
}

function ArchiveHubCard({
  cluster,
}: {
  cluster: GuideCluster;
}) {
  const color = accentClasses[cluster.accent];
  const spokeCount = getSpokeCount(cluster);

  return (
    <Link
      href={cluster.href}
      className={`group relative flex min-h-[205px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/70 hover:shadow-xl ${color.border}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${color.glow}`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
          >
            {cluster.label}
          </span>

          <span className="shrink-0 text-xs font-bold text-slate-500">
            {spokeCount}{" "}
            {spokeCount === 1 ? "guide" : "guides"}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-black leading-snug text-white transition-colors group-hover:text-purple-100">
          {cluster.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {cluster.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span className="line-clamp-1 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600">
            {cluster.archiveCategory}
          </span>

          <span
            className={`shrink-0 text-sm font-black ${color.text}`}
          >
            Open hub
            <span
              aria-hidden="true"
              className="ml-2 inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArchiveStats() {
  const stats = [
    {
      value: publishedGameHubs.length.toString(),
      label: "Game hubs",
    },
    {
      value: totalSpokeGuides.toString(),
      label: "Practical guides",
    },
    {
      value: categoryCount.toString(),
      label: "Guide categories",
    },
  ];

  return (
    <dl className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="px-3 py-4 text-center sm:px-5"
        >
          <dt className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500">
            {stat.label}
          </dt>

          <dd className="mt-1 text-xl font-black text-white sm:text-2xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function HomeAllGuides() {
  return (
    <section
      id="all-game-guides"
      className="scroll-mt-24 bg-slate-950 px-4 pb-20 pt-10 md:pb-24 md:pt-14"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl md:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-28 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-3xl"
          />

          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                  Complete Guide Archive
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
                  Browse every PC and indie game guide hub
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                  Find walkthroughs, beginner guides,
                  achievements, builds, boss help, endings,
                  collectibles, puzzle solutions, and system
                  guides across our complete game archive.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/all-game-guides"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-purple-500 px-6 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-400 hover:shadow-xl"
                  >
                    Browse All Game Guides

                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/guides"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-6 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-purple-300/40 hover:bg-white/[0.08] hover:text-white"
                  >
                    Search for a Guide
                  </Link>
                </div>
              </div>

              <ArchiveStats />
            </div>

            {archivePreviewHubs.length > 0 ? (
              <div className="mt-12">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                      More Game Hubs
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Continue exploring the archive
                    </h3>
                  </div>

                  <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                    More walkthrough clusters and evergreen
                    guides beyond the newest games featured above.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {archivePreviewHubs.map((cluster) => (
                    <ArchiveHubCard
                      key={cluster.href}
                      cluster={cluster}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-5 rounded-[2rem] border border-purple-300/15 bg-purple-400/[0.07] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
              <div>
                <h3 className="text-lg font-black text-white">
                  Know which game you need?
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
                  Open the full archive to browse every current
                  and older guide hub in one place.
                </p>
              </div>

              <Link
                href="/all-game-guides"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-black text-purple-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
              >
                Open Complete Archive

                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}