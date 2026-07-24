import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  guideClusters,
  type GuideCluster,
  type GuidePage,
  type GuidePageType,
  type HomeAccent,
  type HomeImageFit,
} from "@/data/guides";

/**
 * Featured Guide Hubs
 *
 * 以后需要轮换首页 Featured，只修改这里。
 * 数组顺序就是首页显示顺序。
 */
const FEATURED_HUB_HREFS = [
  "/librarian",
  "/gamble-with-your-friends",
  "/oaken-tower",
  "/dragonsword-awakening",
] as const;

type GuideImageProps = {
  image?: string;
  alt: string;
  fallbackTitle: string;
  imageFit?: HomeImageFit;
  imagePosition?: string;
  imagePadding?: boolean;
  priority?: boolean;
  sizes: string;
};

const HUB_PAGE_TYPES = new Set<GuidePageType>([
  "Guide Hub",
  "Class Guide Hub",
  "Event Hub",
  "Spotlight Coverage",
]);

const accentClasses: Record<
  HomeAccent,
  {
    badge: string;
    text: string;
    border: string;
    glow: string;
    spokeHover: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-200",
    text: "text-purple-200",
    border: "hover:border-purple-300/50",
    glow: "from-purple-500/20 via-purple-500/5 to-transparent",
    spokeHover:
      "hover:border-purple-300/35 hover:bg-purple-400/[0.08]",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-200",
    text: "text-blue-200",
    border: "hover:border-blue-300/50",
    glow: "from-blue-500/20 via-blue-500/5 to-transparent",
    spokeHover:
      "hover:border-blue-300/35 hover:bg-blue-400/[0.08]",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-200",
    text: "text-emerald-200",
    border: "hover:border-emerald-300/50",
    glow: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    spokeHover:
      "hover:border-emerald-300/35 hover:bg-emerald-400/[0.08]",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-200",
    text: "text-amber-200",
    border: "hover:border-amber-300/50",
    glow: "from-amber-500/20 via-amber-500/5 to-transparent",
    spokeHover:
      "hover:border-amber-300/35 hover:bg-amber-400/[0.08]",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-200",
    text: "text-rose-200",
    border: "hover:border-rose-300/50",
    glow: "from-rose-500/20 via-rose-500/5 to-transparent",
    spokeHover:
      "hover:border-rose-300/35 hover:bg-rose-400/[0.08]",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-200",
    text: "text-cyan-200",
    border: "hover:border-cyan-300/50",
    glow: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    spokeHover:
      "hover:border-cyan-300/35 hover:bg-cyan-400/[0.08]",
  },
};

/**
 * data/guides.ts 按照从新到旧排列。
 *
 * 当前组件不会使用 date、latestOrder 或 sort() 重新排序。
 */
const typedGuideClusters =
  guideClusters as readonly GuideCluster[];

function getSpokePages(
  cluster: GuideCluster
): GuidePage[] {
  return cluster.pages.filter(
    (page) =>
      page.href !== cluster.href &&
      !HUB_PAGE_TYPES.has(page.type)
  );
}

/**
 * 固定的四个 Featured Hub。
 *
 * 找不到的 href 会被自动忽略，不会导致页面报错。
 */
const featuredHubs: GuideCluster[] =
  FEATURED_HUB_HREFS.map((hubHref) =>
    typedGuideClusters.find(
      (cluster) => cluster.href === hubHref
    )
  ).filter(
    (cluster): cluster is GuideCluster =>
      cluster !== undefined
  );

/**
 * Latest Guide Hubs 排除 Featured Hub，避免首页重复。
 */
const featuredHubHrefSet = new Set<string>(
  FEATURED_HUB_HREFS
);

const latestGameHubs = typedGuideClusters
  .filter(
    (cluster) =>
      cluster.kind === "game" &&
      cluster.status !== "upcoming" &&
      !featuredHubHrefSet.has(cluster.href)
  )
  .slice(0, 8);

function GuideImage({
  image,
  alt,
  fallbackTitle,
  imageFit = "cover",
  imagePosition = "center",
  imagePadding = false,
  priority = false,
  sizes,
}: GuideImageProps) {
  if (!image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/15 via-slate-900 to-blue-500/10 p-6">
        <div className="max-w-[82%] text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-300">
            Guide Hub
          </p>

          <p className="mt-3 line-clamp-3 text-xl font-black leading-tight text-white">
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
          {title}
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
          {description}
        </p>
      </div>

      {action ? (
        <div className="shrink-0 self-start md:self-auto">
          {action}
        </div>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Featured Guide Hubs                                                        */
/* -------------------------------------------------------------------------- */

function FeaturedHubCard({
  cluster,
}: {
  cluster: GuideCluster;
}) {
  const color = accentClasses[cluster.accent];
  const spokeCount = getSpokePages(cluster).length;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.065] hover:shadow-xl ${color.border}`}
    >
      <Link
        href={cluster.href}
        aria-label={`Open ${cluster.title} guide hub`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <GuideImage
          image={cluster.image}
          alt={`${cluster.title} guide hub`}
          fallbackTitle={cluster.title}
          imageFit={cluster.imageFit ?? "cover"}
          imagePosition={
            cluster.imagePosition ?? "center"
          }
          imagePadding={
            cluster.imagePadding ?? false
          }
          sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
          >
            {cluster.label}
          </span>

          <span className="text-xs font-bold text-slate-500">
            {spokeCount}{" "}
            {spokeCount === 1 ? "guide" : "guides"}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-xl font-black leading-snug text-white transition-colors group-hover:text-purple-100">
          <Link href={cluster.href}>
            {cluster.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {cluster.description}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={cluster.href}
            className={`inline-flex items-center text-sm font-black ${color.text}`}
          >
            Open guide hub

            <span
              aria-hidden="true"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function FeaturedGuidesSection() {
  if (!featuredHubs.length) {
    return null;
  }

  return (
    <section
      id="featured-guides"
      className="scroll-mt-24 px-4 pb-16 pt-8 md:pb-20 md:pt-10"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Guide Hubs"
          title="Handpicked game guide hubs"
          description="Explore selected PC and indie game hubs with walkthroughs, beginner guides, builds, achievements, collectibles, puzzle help, and practical system guides."
          action={
            <Link
              href="/all-game-guides"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/10 hover:text-white"
            >
              Browse all game hubs

              <span
                aria-hidden="true"
                className="ml-2"
              >
                →
              </span>
            </Link>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredHubs.map((cluster) => (
            <FeaturedHubCard
              key={cluster.href}
              cluster={cluster}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Latest Guide Hubs                                                          */
/* -------------------------------------------------------------------------- */

function SpokeLink({
  page,
  accent,
}: {
  page: GuidePage;
  accent: HomeAccent;
}) {
  const color = accentClasses[accent];

  return (
    <li>
      <Link
        href={page.href}
        className={`group/spoke flex min-h-11 items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 transition ${color.spokeHover}`}
      >
        <span className="line-clamp-1 text-sm font-semibold text-slate-300 transition group-hover/spoke:text-white">
          {page.title}
        </span>

        <span
          aria-hidden="true"
          className={`shrink-0 text-sm font-black transition-transform group-hover/spoke:translate-x-1 ${color.text}`}
        >
          →
        </span>
      </Link>
    </li>
  );
}

function LatestGuideHubCard({
  cluster,
  priority = false,
}: {
  cluster: GuideCluster;
  priority?: boolean;
}) {
  const color = accentClasses[cluster.accent];
  const spokes = getSpokePages(cluster);

  /**
   * 首页只展示两个 Spoke。
   * 完整列表留给 Hub 页面。
   */
  const visibleSpokes = spokes.slice(0, 2);

  return (
    <article
      className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/45 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/65 hover:shadow-xl ${color.border}`}
    >
      <Link
        href={cluster.href}
        aria-label={`Open ${cluster.title} guide hub`}
        className="relative block aspect-[16/9] overflow-hidden sm:aspect-[2/1]"
      >
        <GuideImage
          image={cluster.image}
          alt={`${cluster.title} guide hub`}
          fallbackTitle={cluster.title}
          imageFit={cluster.imageFit ?? "cover"}
          imagePosition={cluster.imagePosition ?? "center"}
          imagePadding={cluster.imagePadding ?? false}
          priority={priority}
          sizes="(min-width: 1024px) 550px, 100vw"
        />
      </Link>

      <div className="relative p-5 md:p-6">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${color.glow} opacity-55`}
        />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${color.badge}`}
            >
              {cluster.label}
            </span>

            <span className="text-xs font-bold text-slate-500">
              {spokes.length}{" "}
              {spokes.length === 1 ? "guide" : "guides"}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-black leading-tight text-white transition-colors group-hover:text-purple-100 md:text-3xl">
            <Link href={cluster.href}>
              {cluster.title}
            </Link>
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
            {cluster.description}
          </p>

          {visibleSpokes.length > 0 ? (
            <div className="mt-5">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.14em] text-slate-500">
                Start with these guides
              </p>

              <ul className="space-y-2">
                {visibleSpokes.map((page) => (
                  <SpokeLink
                    key={page.href}
                    page={page}
                    accent={cluster.accent}
                  />
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-5 flex justify-end border-t border-white/10 pt-5">
            <Link
              href={cluster.href}
              className={`inline-flex items-center text-sm font-black ${color.text}`}
            >
              Open guide hub

              <span
                aria-hidden="true"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function LatestGuideHubsSection() {
  if (!latestGameHubs.length) {
    return null;
  }

  return (
    <section
      id="latest-updates"
      className="scroll-mt-24 px-4 pb-16 pt-6 md:pb-20 md:pt-8"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Latest Guide Hubs"
          title="Explore our newest game guide hubs"
          description="Choose a recent PC or indie game, then open its beginner guides, walkthroughs, builds, achievements, endings, boss help, collectibles, and puzzle solutions."
          action={
            <Link
              href="/all-game-guides"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/10 hover:text-white"
            >
              Browse all game hubs

              <span
                aria-hidden="true"
                className="ml-2"
              >
                →
              </span>
            </Link>
          }
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {latestGameHubs.map((cluster, index) => (
            <LatestGuideHubCard
              key={cluster.href}
              cluster={cluster}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeLatestStories() {
  return (
    <>
      <LatestGuideHubsSection />
      <FeaturedGuidesSection />
    </>
  );
}