import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../components/Layout";
import {
  guideClusters,
  type GuideCluster,
  type GuidePageType,
  type HomeAccent,
  type HomeImageFit,
} from "@/data/guides";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-game-guides`;

export const metadata: Metadata = {
  title: "All PC & Indie Game Guides | Whisper of the House",
  description:
    "Browse PC and indie game guide hubs for walkthroughs, beginner guides, achievements, builds, endings, collectibles, bosses, puzzle solutions, and system help.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "All PC & Indie Game Guides | Whisper of the House",
    description:
      "Browse complete game guide hubs with walkthroughs, beginner routes, achievements, builds, endings, collectibles, bosses, puzzles, and system help.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All PC & Indie Game Guides | Whisper of the House",
    description:
      "Browse complete PC and indie game guide hubs, walkthroughs, achievements, builds, endings, collectibles, and puzzle solutions.",
  },
};

type ArchiveCategory = GuideCluster["archiveCategory"];

type HubImageProps = {
  image?: string;
  alt: string;
  fallbackTitle: string;
  imageFit?: HomeImageFit;
  imagePosition?: string;
  imagePadding?: boolean;
  priority?: boolean;
  sizes: string;
};

type CategoryMeta = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  accent: HomeAccent;
};

const HUB_PAGE_TYPES = new Set<GuidePageType>([
  "Guide Hub",
  "Class Guide Hub",
  "Event Hub",
  "Spotlight Coverage",
]);

const typedGuideClusters =
  guideClusters as readonly GuideCluster[];

/**
 * data/guides.ts is maintained newest to oldest.
 *
 * No date sorting or latestOrder sorting is used here.
 */
const publishedClusters = typedGuideClusters.filter(
  (cluster) => cluster.status !== "upcoming"
);

const publishedGameHubs = publishedClusters.filter(
  (cluster) => cluster.kind === "game"
);

const specialCollections = publishedClusters.filter(
  (cluster) => cluster.kind !== "game"
);

const newestGameHubs = publishedGameHubs.slice(0, 9);

const activeGameHubCount = publishedGameHubs.filter(
  (cluster) => cluster.status === "active"
).length;

const totalGuidePageCount = publishedClusters.reduce(
  (total, cluster) => total + cluster.pages.length,
  0
);

const categoryOrder: readonly ArchiveCategory[] = [
  "Cozy, crafting, survival & systems",
  "RPG, action, builds & combat",
  "Story, endings, horror & route locks",
  "Strategy, simulation, puzzle & discovery",
  "Older archive",
];

const categoryMeta: Record<ArchiveCategory, CategoryMeta> = {
  "Cozy, crafting, survival & systems": {
    id: "cozy-survival-systems",
    shortLabel: "Cozy & Survival",
    title: "Cozy, crafting, survival and system guides",
    description:
      "Browse cozy games, crafting routes, survival priorities, management systems, resource planning, upgrades, and progression help.",
    accent: "emerald",
  },
  "RPG, action, builds & combat": {
    id: "rpg-action-builds",
    shortLabel: "RPG & Action",
    title: "RPG, action, build and combat guides",
    description:
      "Find character builds, skill priorities, team setups, weapons, boss strategies, combat routes, classes, and progression advice.",
    accent: "rose",
  },
  "Story, endings, horror & route locks": {
    id: "story-endings-routes",
    shortLabel: "Story & Endings",
    title: "Story, ending, horror and route-lock guides",
    description:
      "Explore walkthrough routes, ending requirements, hidden scenes, codes, decisions, story locks, achievements, and spoiler-aware help.",
    accent: "amber",
  },
  "Strategy, simulation, puzzle & discovery": {
    id: "strategy-simulation-puzzles",
    shortLabel: "Strategy & Puzzle",
    title: "Strategy, simulation, puzzle and discovery guides",
    description:
      "Browse simulations, strategy games, management routes, puzzle solutions, exploration help, objectives, maps, and discovery systems.",
    accent: "blue",
  },
  "Older archive": {
    id: "older-game-archive",
    shortLabel: "Older Archive",
    title: "Older and evergreen game guide hubs",
    description:
      "Find established walkthrough collections and evergreen guides that remain useful for specific games, routes, mechanics, and completion goals.",
    accent: "purple",
  },
};

const categoryGroups = categoryOrder
  .map((category) => ({
    category,
    meta: categoryMeta[category],
    hubs: publishedGameHubs.filter(
      (cluster) => cluster.archiveCategory === category
    ),
  }))
  .filter((group) => group.hubs.length > 0);

const accentClasses: Record<
  HomeAccent,
  {
    badge: string;
    text: string;
    border: string;
    glow: string;
    soft: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-200",
    text: "text-purple-200",
    border: "hover:border-purple-300/45",
    glow: "from-purple-500/20 via-purple-500/5 to-transparent",
    soft: "bg-purple-400/10",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-200",
    text: "text-blue-200",
    border: "hover:border-blue-300/45",
    glow: "from-blue-500/20 via-blue-500/5 to-transparent",
    soft: "bg-blue-400/10",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-200",
    text: "text-emerald-200",
    border: "hover:border-emerald-300/45",
    glow: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    soft: "bg-emerald-400/10",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-200",
    text: "text-amber-200",
    border: "hover:border-amber-300/45",
    glow: "from-amber-500/20 via-amber-500/5 to-transparent",
    soft: "bg-amber-400/10",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-200",
    text: "text-rose-200",
    border: "hover:border-rose-300/45",
    glow: "from-rose-500/20 via-rose-500/5 to-transparent",
    soft: "bg-rose-400/10",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-200",
    text: "text-cyan-200",
    border: "hover:border-cyan-300/45",
    glow: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    soft: "bg-cyan-400/10",
  },
};

const faqItems = [
  {
    question: "How do I find guides for a specific game?",
    answer:
      "Start with the newest game hubs, or open one of the archive categories below. Every game card links to a dedicated hub containing its available walkthroughs and practical guides.",
  },
  {
    question: "What types of game guides are included?",
    answer:
      "The archive includes beginner guides, walkthroughs, achievements, builds, boss guides, endings, collectibles, puzzle solutions, system explanations, and completion routes.",
  },
  {
    question: "Why are the guides organized around game hubs?",
    answer:
      "A game hub provides one clear starting point and links to the focused guides for that game. This makes it easier to find a specific solution without browsing a large wiki-style index.",
  },
  {
    question: "Where can I find older game guides?",
    answer:
      "Open the Older Archive category near the bottom of the directory. Older hubs remain available when their walkthroughs, mechanics, achievements, or puzzle solutions are still useful.",
  },
];

function getSpokeCount(cluster: GuideCluster) {
  return cluster.pages.filter(
    (page) =>
      page.href !== cluster.href &&
      !HUB_PAGE_TYPES.has(page.type)
  ).length;
}

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "All PC and Indie Game Guides",
  url: pageUrl,
  description:
    "A complete directory of Whisper of the House PC and indie game guide hubs, walkthroughs, achievements, builds, endings, collectibles, bosses, puzzle solutions, and system guides.",
  isPartOf: {
    "@type": "WebSite",
    name: "Whisper of the House",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: publishedGameHubs.length,
    itemListElement: publishedGameHubs.map((cluster, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: cluster.title,
      url: `${siteUrl}${cluster.href}`,
    })),
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

function HubImage({
  image,
  alt,
  fallbackTitle,
  imageFit = "cover",
  imagePosition = "center",
  imagePadding = false,
  priority = false,
  sizes,
}: HubImageProps) {
  if (!image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/15 via-slate-900 to-blue-500/10 p-6">
        <div className="max-w-[84%] text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-300">
            Guide Hub
          </p>

          <p className="mt-3 line-clamp-3 text-lg font-black leading-tight text-white">
            {fallbackTitle}
          </p>
        </div>
      </div>
    );
  }

  const fitClass =
    imageFit === "contain"
      ? "object-contain"
      : "object-cover";

  const paddingClass = imagePadding
    ? "p-3 sm:p-4"
    : "";

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${
        imageFit === "contain"
          ? "bg-slate-950"
          : "bg-slate-900"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`h-full w-full ${fitClass} ${paddingClass} transition-transform duration-500 group-hover:scale-[1.025]`}
        style={{
          objectPosition: imagePosition,
        }}
      />

      {imageFit === "cover" ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}

function ArchiveStat({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="px-4 py-4 text-center sm:px-5">
      <div className="text-xl font-black text-white sm:text-2xl">
        {value}
      </div>

      <div className="mt-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-500">
        {label}
      </div>
    </div>
  );
}

function NewestHubCard({
  cluster,
  priority = false,
}: {
  cluster: GuideCluster;
  priority?: boolean;
}) {
  const color = accentClasses[cluster.accent];
  const spokeCount = getSpokeCount(cluster);

  return (
    <Link
      href={cluster.href}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/45 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/70 hover:shadow-xl ${color.border}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <HubImage
          image={cluster.image}
          alt={`${cluster.title} guide hub`}
          fallbackTitle={cluster.title}
          imageFit={cluster.imageFit ?? "cover"}
          imagePosition={cluster.imagePosition ?? "center"}
          imagePadding={cluster.imagePadding ?? false}
          priority={priority}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
          >
            {cluster.label}
          </span>

          <span className="text-xs font-bold text-slate-500">
            {spokeCount} {spokeCount === 1 ? "guide" : "guides"}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-xl font-black leading-snug text-white transition-colors group-hover:text-purple-100">
          {cluster.title}
        </h3>

        <div className={`mt-auto pt-5 text-sm font-black ${color.text}`}>
          Open guide hub
          <span
            aria-hidden="true"
            className="ml-2 inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function DirectoryHubCard({
  cluster,
}: {
  cluster: GuideCluster;
}) {
  const color = accentClasses[cluster.accent];
  const spokeCount = getSpokeCount(cluster);

  return (
    <Link
      href={cluster.href}
      className={`group relative flex min-h-[145px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/45 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/75 hover:shadow-lg ${color.border}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${color.glow}`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
          >
            {cluster.label}
          </span>

          <span className="shrink-0 text-xs font-bold text-slate-600">
            {spokeCount} {spokeCount === 1 ? "guide" : "guides"}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-lg font-black leading-snug text-white transition-colors group-hover:text-purple-100">
          {cluster.title}
        </h3>

        <div className={`mt-auto pt-5 text-sm font-black ${color.text}`}>
          Open hub

          <span
            aria-hidden="true"
            className="ml-2 inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategoryDirectorySection({
  group,
  defaultOpen = false,
}: {
  group: (typeof categoryGroups)[number];
  defaultOpen?: boolean;
}) {
  const color = accentClasses[group.meta.accent];

  return (
    <details
      id={group.meta.id}
      open={defaultOpen}
      className="group scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 transition hover:bg-white/[0.035] md:px-7 md:py-6 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
            >
              {group.hubs.length}{" "}
              {group.hubs.length === 1 ? "hub" : "hubs"}
            </span>

            <span className="text-xs font-bold text-slate-500">
              {group.meta.shortLabel}
            </span>
          </div>

          <h2 className="mt-3 text-xl font-black leading-tight text-white md:text-2xl">
            {group.meta.title}
          </h2>

          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-400">
            {group.meta.description}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-lg font-black text-purple-200 transition-transform group-open:rotate-180"
        >
          ↓
        </span>
      </summary>

      <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-7 md:pb-7">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {group.hubs.map((cluster) => (
            <DirectoryHubCard
              key={cluster.href}
              cluster={cluster}
            />
          ))}
        </div>
      </div>
    </details>
  );
}

function SpecialCollectionCard({
  cluster,
}: {
  cluster: GuideCluster;
}) {
  const color = accentClasses[cluster.accent];
  const pageCount = cluster.pages.length;

  return (
    <Link
      href={cluster.href}
      className={`group relative flex min-h-[180px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/70 hover:shadow-xl ${color.border}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${color.glow}`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
          >
            {cluster.kind === "event" ? "Event Hub" : "Collection"}
          </span>

          <span className="text-xs font-bold text-slate-600">
            {pageCount} {pageCount === 1 ? "page" : "pages"}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-black leading-snug text-white transition-colors group-hover:text-purple-100">
          {cluster.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {cluster.description}
        </p>

        <div className={`mt-auto pt-5 text-sm font-black ${color.text}`}>
          Open collection
          <span
            aria-hidden="true"
            className="ml-2 inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArchiveFaq() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 md:p-7">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
          Guide Archive FAQ
        </p>

        <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
          Finding the right game guide
        </h2>
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-2">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-white/[0.08] bg-slate-950/45"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-black text-white [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>

              <span
                aria-hidden="true"
                className="shrink-0 text-purple-300 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <p className="border-t border-white/[0.08] px-5 py-4 text-sm leading-relaxed text-slate-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function AllGameGuidesPage() {
  return (
    <Layout>
      <main
        id="main-content"
        className="min-h-screen bg-slate-950 text-white"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />

        <section className="relative isolate overflow-hidden px-4 pb-14 pt-16 md:pb-16 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-16 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-blue-500/[0.08] blur-3xl"
          />

          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-9 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-black text-slate-300 transition hover:border-purple-300/45 hover:bg-white/[0.08] hover:text-white"
                >
                  ← Back to homepage
                </Link>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                  Complete Guide Directory
                </p>

                <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  All PC and indie game guide hubs
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                  Browse walkthroughs, beginner guides, achievements,
                  builds, boss help, endings, collectibles, puzzle
                  solutions, and system guides organized around each game.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#newest-game-hubs"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-purple-500 px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-purple-400"
                  >
                    Browse newest hubs
                  </a>

                  <a
                    href="#complete-directory"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-5 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-purple-300/40 hover:bg-white/[0.08] hover:text-white"
                  >
                    Open complete directory
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                <div className="grid grid-cols-3 divide-x divide-white/10">
                  <ArchiveStat
                    value={publishedGameHubs.length}
                    label="Game hubs"
                  />

                  <ArchiveStat
                    value={totalGuidePageCount}
                    label="Guide pages"
                  />

                  <ArchiveStat
                    value={activeGameHubCount}
                    label="Active hubs"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="newest-game-hubs"
          className="scroll-mt-24 px-4 pb-20"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
                  Newest Guide Hubs
                </p>

                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                  Start with our latest game coverage
                </h2>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-400">
                  These are the newest game guide hubs currently available
                  in the archive.
                </p>
              </div>

              <a
                href="#complete-directory"
                className="inline-flex w-fit items-center text-sm font-black text-purple-200 transition hover:text-white"
              >
                Browse every game hub →
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {newestGameHubs.map((cluster, index) => (
                <NewestHubCard
                  key={cluster.href}
                  cluster={cluster}
                  priority={index < 2}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="complete-directory"
          className="scroll-mt-24 px-4 pb-20 pt-4 md:pb-24 md:pt-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-5 md:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-purple-500/[0.08] blur-3xl"
              />

              <div className="relative">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
                      Complete Archive
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                      Browse every game hub by category
                    </h2>

                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
                      Expand a category to find its complete list of game
                      hubs. Each hub leads to the focused guides available
                      for that game.
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-black text-slate-400">
                    {publishedGameHubs.length} game hubs
                  </span>
                </div>

                <nav
                  aria-label="Game guide archive categories"
                  className="mt-7 flex flex-wrap gap-2.5"
                >
                  {categoryGroups.map((group) => {
                    const color =
                      accentClasses[group.meta.accent];

                    return (
                      <a
                        key={group.meta.id}
                        href={`#${group.meta.id}`}
                        className={`rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${color.soft} ${color.text} ${color.border}`}
                      >
                        {group.meta.shortLabel}
                        <span className="ml-2 text-xs opacity-60">
                          {group.hubs.length}
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-8 space-y-4">
                {categoryGroups.map((group) => (
                  <CategoryDirectorySection
                    key={group.meta.id}
                    group={group}
                  />
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {specialCollections.length > 0 ? (
          <section className="px-4 pb-20 pt-4 md:pb-24 md:pt-6">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
                  Events & Collections
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Special guide collections
                </h2>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-400">
                  Browse event coverage and curated guide collections that
                  are not tied to a single game hub.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {specialCollections.map((cluster) => (
                  <SpecialCollectionCard
                    key={cluster.href}
                    cluster={cluster}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-4 pb-20 md:pb-24">
          <div className="container mx-auto max-w-6xl">
            <ArchiveFaq />
          </div>
        </section>
      </main>
    </Layout>
  );
}