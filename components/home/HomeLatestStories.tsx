import Link from "next/link";
import {
  latestStories,
  type HomeAccent,
  type LatestStory,
} from "@/data/homeGuideCoverage";

const accentClasses: Record<
  HomeAccent,
  {
    badge: string;
    text: string;
    border: string;
    soft: string;
    line: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-200",
    text: "text-purple-200",
    border: "hover:border-purple-300/50",
    soft: "bg-purple-400/10",
    line: "bg-purple-400/30",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-200",
    text: "text-blue-200",
    border: "hover:border-blue-300/50",
    soft: "bg-blue-400/10",
    line: "bg-blue-400/30",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-200",
    text: "text-emerald-200",
    border: "hover:border-emerald-300/50",
    soft: "bg-emerald-400/10",
    line: "bg-emerald-400/30",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-200",
    text: "text-amber-200",
    border: "hover:border-amber-300/50",
    soft: "bg-amber-400/10",
    line: "bg-amber-400/30",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-200",
    text: "text-rose-200",
    border: "hover:border-rose-300/50",
    soft: "bg-rose-400/10",
    line: "bg-rose-400/30",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-200",
    text: "text-cyan-200",
    border: "hover:border-cyan-300/50",
    soft: "bg-cyan-400/10",
    line: "bg-cyan-400/30",
  },
};

type DisplayStory = LatestStory & {
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imagePadding?: boolean;
};

function StoryBadges({ story }: { story: DisplayStory }) {
  const color = accentClasses[story.accent];

  return (
    <div className="flex flex-wrap gap-2">
      <span
        className={`rounded-full px-3 py-1 text-xs font-black ${color.badge}`}
      >
        {story.type}
      </span>

      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
        {story.game}
      </span>
    </div>
  );
}

function FeaturedStoryImage({ story }: { story: DisplayStory }) {
  if (!story.image) {
    return (
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-purple-500/20 via-slate-800 to-blue-500/10">
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-2xl border border-white/10 bg-white/10 shadow-sm" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-300">
              Featured Story
            </p>
            <p className="mt-3 text-2xl font-black text-white">
              {story.game}
            </p>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Featured card intentionally uses cover.
   * It looks better for a magazine-style hero card than contain/letterboxing.
   * If an image crops badly, use a hand-cropped 16:9 asset in /public/images/home/.
   */

  const imageFitClass =
  story.imageFit === "contain" ? "object-contain" : "object-cover";

  const imagePaddingClass = story.imagePadding ? "p-4 md:p-6" : "";

  return (
  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950">
    <img
      src={story.image}
      alt={story.title}
      className={`h-full w-full ${imageFitClass} ${imagePaddingClass} transition-transform duration-500 group-hover:scale-[1.02]`}
      style={{
        objectPosition: story.imagePosition ?? "center",
      }}
      loading="eager"
      
      decoding="async"
    />
  </div>
);
}

function FeaturedStoryCard({ story }: { story: DisplayStory }) {
  const color = accentClasses[story.accent];

  return (
    <Link
      href={story.href}
      className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-sm transition-all duration-300 hover:-translate-y-1 ${color.border} hover:bg-white/[0.08] hover:shadow-xl`}
    >
      <FeaturedStoryImage story={story} />

      <div className="p-6 md:p-8">
        <StoryBadges story={story} />

        <h3 className="mt-4 text-3xl font-black leading-tight text-white group-hover:text-purple-200 md:text-4xl">
          {story.title}
        </h3>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
          {story.excerpt}
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium text-slate-400">
            {story.date}
          </span>

          <span className={`text-sm font-black ${color.text}`}>
            Read featured update →
          </span>
        </div>
      </div>
    </Link>
  );
}

function CompactStoryRow({ story }: { story: DisplayStory }) {
  const color = accentClasses[story.accent];

  return (
    <Link
      href={story.href}
      className={`group block rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${color.border} hover:bg-white/[0.08] hover:shadow-md`}
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-black ${color.badge}`}
          >
            {story.type}
          </span>

          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
            {story.game}
          </span>
        </div>

        <span
          className={`shrink-0 text-sm font-black transition-transform group-hover:translate-x-1 ${color.text}`}
        >
          →
        </span>
      </div>

      <h3 className="line-clamp-2 text-base font-black leading-snug text-white group-hover:text-purple-200">
        {story.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">
        {story.excerpt}
      </p>
    </Link>
  );
}

function TextStoryCard({ story }: { story: DisplayStory }) {
  const color = accentClasses[story.accent];

  return (
    <Link
      href={story.href}
      className={`group rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 ${color.border} hover:bg-white/[0.08] hover:shadow-lg`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className={`h-1.5 w-14 rounded-full ${color.line}`} />

        <span className="text-xs font-semibold text-slate-500">
          {story.date}
        </span>
      </div>

      <StoryBadges story={story} />

      <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-snug text-white group-hover:text-purple-200">
        {story.title}
      </h3>

      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-300">
        {story.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-sm text-slate-500">{story.game}</span>

        <span className={`shrink-0 text-sm font-black ${color.text}`}>
          Read →
        </span>
      </div>
    </Link>
  );
}

function EditorFeedIntro() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
        Editor&apos;s Feed
      </p>

      <h3 className="mt-2 text-2xl font-black text-white">
        Active coverage this week
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        These updates highlight guide clusters with new route pressure,
        achievement demand, build questions, collectibles, endings, or systems
        that need practical explanations.
      </p>
    </div>
  );
}

export default function HomeLatestStories() {
  const featured =
    latestStories.find((story) => story.featured) ?? latestStories[0];

  if (!featured) {
    return null;
  }

  const otherStories = latestStories.filter(
    (story) => story.href !== featured.href
  );

  const railStories = otherStories.slice(0, 3);
  const gridStories = otherStories.slice(3, 7);

  return (
    <section
      id="latest-updates"
      className="scroll-mt-24 bg-transparent px-4 py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">
              Latest Stories
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              New guides & fresh walkthrough updates
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              Fresh walkthroughs, route guides, achievement cleanup pages,
              collectible routes, build guides, ending help, and system explainers
              from active PC and indie game coverage.
            </p>
          </div>

          <Link
            href="/all-game-guides"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-black text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.14] hover:text-white"
          >
            Browse all guides →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <FeaturedStoryCard story={featured as DisplayStory} />

          <div className="flex flex-col gap-4">
            <EditorFeedIntro />

            {railStories.map((story) => (
              <CompactStoryRow key={story.href} story={story as DisplayStory} />
            ))}
          </div>
        </div>

        {gridStories.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gridStories.map((story) => (
              <TextStoryCard key={story.href} story={story as DisplayStory} />
            ))}
          </div>
        ) : null}

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-sm md:p-6">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                More Updates
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                Follow new guide clusters as they expand
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                New release hubs usually start with beginner routes, then expand
                into walkthroughs, builds, endings, achievements, collectibles,
                and system-specific pages when player search demand appears.
              </p>
            </div>

            <Link
              href="/#featured-games"
              className="inline-flex items-center justify-center rounded-xl bg-purple-500 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-400"
            >
              View featured hubs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}