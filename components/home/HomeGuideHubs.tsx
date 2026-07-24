import type { ReactNode } from "react";
import Link from "next/link";

import {
  guideClusters,
  type GuideCluster,
  type GuidePage,
  type GuidePageType,
  type HomeAccent,
} from "@/data/guides";

type GuideItem = {
  cluster: GuideCluster;
  page: GuidePage;
};

type LaneIconName =
  | "beginner"
  | "walkthrough"
  | "achievement"
  | "build"
  | "ending"
  | "puzzle";

type GuideLane = {
  key: string;
  title: string;
  description: string;
  types: GuidePageType[];
  accent: HomeAccent;
  icon: LaneIconName;
};

const HUB_PAGE_TYPES = new Set<GuidePageType>([
  "Guide Hub",
  "Class Guide Hub",
  "Event Hub",
  "Spotlight Coverage",
]);

const typedGuideClusters =
  guideClusters as readonly GuideCluster[];

const guideLanes: GuideLane[] = [
  {
    key: "beginner-guides",
    title: "Beginner Guides",
    description:
      "Start a new game with first-hour routes, early priorities, progression advice, resource decisions, and common mistake fixes.",
    types: ["Beginner Guide"],
    accent: "purple",
    icon: "beginner",
  },
  {
    key: "walkthroughs",
    title: "Walkthroughs & How-To Guides",
    description:
      "Follow objectives, mission routes, unlock requirements, progression steps, and practical solutions for places where a run can stall.",
    types: ["Walkthrough", "Guide"],
    accent: "blue",
    icon: "walkthrough",
  },
  {
    key: "achievements",
    title: "Achievements & Collectibles",
    description:
      "Plan completion routes, clean up missable achievements, find hidden items, and finish collectible checks without unnecessary replays.",
    types: ["Achievements", "Collectibles"],
    accent: "emerald",
    icon: "achievement",
  },
  {
    key: "builds",
    title: "Builds & Boss Guides",
    description:
      "Compare skills, classes, weapons, team setups, boss patterns, safe openings, and fallback choices for difficult encounters.",
    types: ["Builds", "Bosses"],
    accent: "rose",
    icon: "build",
  },
  {
    key: "endings",
    title: "Endings & Story Routes",
    description:
      "Understand ending requirements, route locks, important choices, hidden scenes, and spoiler-aware paths through story-heavy games.",
    types: ["Endings"],
    accent: "amber",
    icon: "ending",
  },
  {
    key: "puzzle-help",
    title: "Puzzle Solutions & System Help",
    description:
      "Solve passwords, codes, machine setups, resource systems, crafting problems, route logic, and mechanics that are easy to misread.",
    types: ["Puzzle Help", "Systems"],
    accent: "cyan",
    icon: "puzzle",
  },
];

const accentClasses: Record<
  HomeAccent,
  {
    badge: string;
    icon: string;
    border: string;
    text: string;
    glow: string;
    linkHover: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-200",
    icon: "border-purple-300/20 bg-purple-400/10 text-purple-200",
    border: "hover:border-purple-300/45",
    text: "text-purple-200",
    glow: "from-purple-500/15 via-purple-500/5 to-transparent",
    linkHover:
      "hover:border-purple-300/30 hover:bg-purple-400/[0.07]",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-200",
    icon: "border-blue-300/20 bg-blue-400/10 text-blue-200",
    border: "hover:border-blue-300/45",
    text: "text-blue-200",
    glow: "from-blue-500/15 via-blue-500/5 to-transparent",
    linkHover:
      "hover:border-blue-300/30 hover:bg-blue-400/[0.07]",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-200",
    icon: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
    border: "hover:border-emerald-300/45",
    text: "text-emerald-200",
    glow: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    linkHover:
      "hover:border-emerald-300/30 hover:bg-emerald-400/[0.07]",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-200",
    icon: "border-amber-300/20 bg-amber-400/10 text-amber-200",
    border: "hover:border-amber-300/45",
    text: "text-amber-200",
    glow: "from-amber-500/15 via-amber-500/5 to-transparent",
    linkHover:
      "hover:border-amber-300/30 hover:bg-amber-400/[0.07]",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-200",
    icon: "border-rose-300/20 bg-rose-400/10 text-rose-200",
    border: "hover:border-rose-300/45",
    text: "text-rose-200",
    glow: "from-rose-500/15 via-rose-500/5 to-transparent",
    linkHover:
      "hover:border-rose-300/30 hover:bg-rose-400/[0.07]",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-200",
    icon: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
    border: "hover:border-cyan-300/45",
    text: "text-cyan-200",
    glow: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    linkHover:
      "hover:border-cyan-300/30 hover:bg-cyan-400/[0.07]",
  },
};

/**
 * data/guides.ts is already maintained newest to oldest.
 *
 * flatMap() preserves the physical cluster and page order.
 * No latestOrder or date sorting is used here.
 */
const allSpokeGuides: GuideItem[] =
  typedGuideClusters.flatMap((cluster) =>
    cluster.pages
      .filter(
        (page) =>
          page.href !== cluster.href &&
          !HUB_PAGE_TYPES.has(page.type)
      )
      .map((page) => ({
        cluster,
        page,
      }))
  );

const activeHubCount = typedGuideClusters.filter(
  (cluster) =>
    cluster.kind === "game" &&
    cluster.status !== "upcoming"
).length;

function selectLaneGuides(
  lane: GuideLane,
  limit = 3
): GuideItem[] {
  const matchingGuides = allSpokeGuides.filter((item) =>
    lane.types.includes(item.page.type)
  );

  const selected: GuideItem[] = [];
  const selectedHrefs = new Set<string>();
  const selectedGames = new Set<string>();

  /**
   * First pass: show one guide per game so a lane does not
   * become three links from the same content cluster.
   */
  for (const item of matchingGuides) {
    if (selectedGames.has(item.cluster.game)) {
      continue;
    }

    selected.push(item);
    selectedHrefs.add(item.page.href);
    selectedGames.add(item.cluster.game);

    if (selected.length >= limit) {
      return selected;
    }
  }

  /**
   * Second pass: fill remaining places when the lane does
   * not contain enough different games.
   */
  for (const item of matchingGuides) {
    if (selectedHrefs.has(item.page.href)) {
      continue;
    }

    selected.push(item);
    selectedHrefs.add(item.page.href);

    if (selected.length >= limit) {
      break;
    }
  }

  return selected;
}

function getLaneGuideCount(lane: GuideLane) {
  return allSpokeGuides.filter((item) =>
    lane.types.includes(item.page.type)
  ).length;
}

function LaneIcon({
  name,
}: {
  name: LaneIconName;
}): ReactNode {
  const commonProps = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-6 w-6",
  };

  if (name === "beginner") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 3 4.5 7.2 12 11.4l7.5-4.2L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 9.2v5.1c0 1.7 2.5 3.2 5.5 3.2s5.5-1.5 5.5-3.2V9.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M19.5 7.2v5.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "walkthrough") {
    return (
      <svg {...commonProps}>
        <path
          d="M5 19V6.5A2.5 2.5 0 0 1 7.5 4H19v13H7.5A2.5 2.5 0 0 0 5 19Zm0 0a2 2 0 0 0 2 2h12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 8h6M9 12h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "achievement") {
    return (
      <svg {...commonProps}>
        <path
          d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 6H4v1.5A4.5 4.5 0 0 0 8.5 12M16 6h4v1.5a4.5 4.5 0 0 1-4.5 4.5M12 12.5V17m-3 3h6M10 17h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "build") {
    return (
      <svg {...commonProps}>
        <path
          d="m14.5 4.5 5 5M13 6l5 5M4 20l5.5-1.5L18 10l-4-4-8.5 8.5L4 20Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m5.5 14.5 4 4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "ending") {
    return (
      <svg {...commonProps}>
        <path
          d="M5 4v16M5 6h11l-2.5 4L16 14H5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M9 4h3a2 2 0 1 1 4 0h3v5a2 2 0 1 0 0 4v6h-6a2 2 0 1 1-4 0H4v-5a2 2 0 1 0 0-4V4h5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GuideLink({
  item,
  accent,
}: {
  item: GuideItem;
  accent: HomeAccent;
}) {
  const color = accentClasses[accent];

  return (
    <li>
      <Link
        href={item.page.href}
        className={`group/link block rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 transition-all duration-200 ${color.linkHover}`}
      >
        <span className="block truncate text-[10px] font-black uppercase tracking-[0.1em] text-slate-500">
          {item.cluster.game}
        </span>

        <span className="mt-1.5 flex items-start justify-between gap-4">
          <span className="line-clamp-2 text-sm font-bold leading-snug text-slate-200 transition-colors group-hover/link:text-white">
            {item.page.title}
          </span>

          <span
            aria-hidden="true"
            className={`mt-0.5 shrink-0 text-sm font-black transition-transform group-hover/link:translate-x-1 ${color.text}`}
          >
            →
          </span>
        </span>
      </Link>
    </li>
  );
}

function GuideLaneCard({
  lane,
}: {
  lane: GuideLane;
}) {
  const color = accentClasses[lane.accent];
  const guides = selectLaneGuides(lane);
  const totalCount = getLaneGuideCount(lane);

  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/45 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/65 hover:shadow-xl md:p-6 ${color.border}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${color.glow}`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${color.icon}`}
          >
            <LaneIcon name={lane.icon} />
          </div>

          <span
            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
          >
            {totalCount} {totalCount === 1 ? "guide" : "guides"}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-black leading-tight text-white">
          {lane.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-slate-400">
          {lane.description}
        </p>

        {guides.length > 0 ? (
          <div className="mt-5">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-slate-600">
              Recommended guides
            </p>

            <ul className="space-y-2.5">
              {guides.map((item) => (
                <GuideLink
                  key={item.page.href}
                  item={item}
                  accent={lane.accent}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function HomeGuideHubs() {
  return (
    <section
      id="featured-games"
      className="scroll-mt-24 px-4 py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-5 shadow-xl md:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-28 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-3xl"
          />

          <div className="relative">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                  Browse by What You Need
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
                  Find the right game guide for your next step
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                  Browse beginner guides, walkthroughs, achievements,
                  collectibles, builds, boss help, endings, puzzle
                  solutions, and system explanations across PC and indie
                  games.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold text-slate-400">
                  {activeHubCount} active game hubs
                </span>

                <Link
                  href="/all-game-guides"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-purple-300/20 bg-purple-400/10 px-5 text-sm font-black text-purple-100 transition hover:-translate-y-0.5 hover:border-purple-300/45 hover:bg-purple-400/15 hover:text-white"
                >
                  Browse all guides
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guideLanes.map((lane) => (
                <GuideLaneCard
                  key={lane.key}
                  lane={lane}
                />
              ))}
            </div>

            <div className="mt-8 grid gap-5 rounded-[2rem] border border-white/10 bg-slate-950/45 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
              <div>
                <h3 className="text-xl font-black text-white">
                  Looking for a specific game?
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
                  Open the complete archive to browse every active game
                  hub, older walkthrough cluster, achievement guide,
                  build, ending route, collectible page, and puzzle
                  solution.
                </p>
              </div>

              <Link
                href="/all-game-guides"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-purple-500 px-6 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-400 hover:shadow-xl"
              >
                Explore the Guide Archive
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