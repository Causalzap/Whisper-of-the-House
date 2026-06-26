import Link from "next/link";
import {
  guideHubs,
  quickLanes,
  spotlightHub,
  type GuideHub,
  type HomeAccent,
} from "@/data/homeGuideCoverage";

const accentClasses: Record<
  HomeAccent,
  {
    badge: string;
    border: string;
    glow: string;
    text: string;
    fallback: string;
    line: string;
  }
> = {
  purple: {
    badge: "bg-purple-400/15 text-purple-200",
    border: "hover:border-purple-300/50",
    glow: "from-purple-500/20 to-fuchsia-500/10",
    text: "text-purple-200",
    fallback: "from-purple-500/20 via-slate-800 to-fuchsia-500/10",
    line: "bg-purple-400/30",
  },
  blue: {
    badge: "bg-blue-400/15 text-blue-200",
    border: "hover:border-blue-300/50",
    glow: "from-blue-500/20 to-cyan-500/10",
    text: "text-blue-200",
    fallback: "from-blue-500/20 via-slate-800 to-cyan-500/10",
    line: "bg-blue-400/30",
  },
  emerald: {
    badge: "bg-emerald-400/15 text-emerald-200",
    border: "hover:border-emerald-300/50",
    glow: "from-emerald-500/20 to-teal-500/10",
    text: "text-emerald-200",
    fallback: "from-emerald-500/20 via-slate-800 to-teal-500/10",
    line: "bg-emerald-400/30",
  },
  amber: {
    badge: "bg-amber-400/15 text-amber-200",
    border: "hover:border-amber-300/50",
    glow: "from-amber-500/20 to-orange-500/10",
    text: "text-amber-200",
    fallback: "from-amber-500/20 via-slate-800 to-orange-500/10",
    line: "bg-amber-400/30",
  },
  rose: {
    badge: "bg-rose-400/15 text-rose-200",
    border: "hover:border-rose-300/50",
    glow: "from-rose-500/20 to-red-500/10",
    text: "text-rose-200",
    fallback: "from-rose-500/20 via-slate-800 to-red-500/10",
    line: "bg-rose-400/30",
  },
  cyan: {
    badge: "bg-cyan-400/15 text-cyan-200",
    border: "hover:border-cyan-300/50",
    glow: "from-cyan-500/20 to-sky-500/10",
    text: "text-cyan-200",
    fallback: "from-cyan-500/20 via-slate-800 to-sky-500/10",
    line: "bg-cyan-400/30",
  },
};

type DisplayHub = GuideHub & {
  accent?: HomeAccent;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imagePadding?: boolean;
};

function getAccent(accent?: HomeAccent) {
  return accentClasses[accent ?? "purple"];
}

function getImageClass(hub: DisplayHub, large = false) {
  const fit = hub.imageFit ?? "cover";

  if (fit === "contain") {
    return [
      "h-full w-full object-contain transition-transform duration-500",
      hub.imagePadding === false ? "" : large ? "p-5" : "p-4",
      "group-hover:scale-[1.015]",
    ]
      .filter(Boolean)
      .join(" ");
  }

  return "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]";
}

function HubVisual({
  hub,
  large = false,
}: {
  hub: DisplayHub;
  large?: boolean;
}) {
  const color = getAccent(hub.accent);
  const fit = hub.imageFit ?? "cover";
  const hasContainImage = hub.image && fit === "contain";

  return (
    <div
      className={`relative overflow-hidden ${
        hasContainImage
          ? "bg-slate-950"
          : `bg-gradient-to-br ${color.fallback}`
      } ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}
    >
      {hub.image ? (
        <img
          src={hub.image}
          alt={`${hub.title} guide hub`}
          className={getImageClass(hub, large)}
          style={{
            objectPosition: hub.imagePosition ?? "center",
          }}
          loading={large ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6">
          <div className="max-w-[82%] text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-2xl border border-white/10 bg-white/10 shadow-sm" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-300">
              Guide Hub
            </p>
            <p
              className={`mt-3 font-black leading-tight text-white ${
                large ? "text-3xl md:text-4xl" : "text-xl"
              }`}
            >
              {hub.title}
            </p>
          </div>
        </div>
      )}

      {fit === "cover" ? (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
      ) : null}
    </div>
  );
}

function Pill({
  children,
  accent = "purple",
  muted = false,
}: {
  children: React.ReactNode;
  accent?: HomeAccent;
  muted?: boolean;
}) {
  const color = getAccent(accent);

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-black ${
        muted ? "bg-white/10 text-slate-200" : color.badge
      }`}
    >
      {children}
    </span>
  );
}

function CoveragePills({
  items,
  accent = "purple",
}: {
  items: string[];
  accent?: HomeAccent;
}) {
  const color = getAccent(accent);

  if (!items.length) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${color.badge}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SpotlightHubCard({ hub }: { hub: DisplayHub }) {
  const accent = hub.accent ?? "purple";
  const color = getAccent(accent);

  return (
    <Link
      href={hub.href}
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-sm transition-all duration-300 hover:-translate-y-1 ${color.border} hover:bg-white/[0.08] hover:shadow-xl`}
    >
      <HubVisual hub={hub} large />

      <div className="p-6 md:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Pill accent={accent}>{hub.eyebrow}</Pill>
          <Pill accent={accent} muted>
            {hub.label}
          </Pill>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-950">
            {hub.status}
          </span>
        </div>

        <h3 className="text-3xl font-black leading-tight text-white group-hover:text-purple-200">
          {hub.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-slate-300">
          {hub.description}
        </p>

        <CoveragePills items={hub.coverage} accent={accent} />

        <div className={`mt-6 text-sm font-black ${color.text}`}>
          Open spotlight hub →
        </div>
      </div>
    </Link>
  );
}

function PublicationFocusCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/10 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
        Guide publication focus
      </p>

      <h3 className="mt-2 text-2xl font-black text-white">
        Hubs are built around player decisions
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Each hub gives readers a route map first, then sends them to dedicated
        pages for walkthroughs, endings, achievements, builds, collectibles,
        puzzles, or system-specific help.
      </p>
    </div>
  );
}

function QuickLaneCard({
  lane,
}: {
  lane: {
    title: string;
    description: string;
    href: string;
  };
}) {
  return (
    <Link
      href={lane.href}
      className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.08] hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-white group-hover:text-purple-200">
            {lane.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {lane.description}
          </p>
        </div>

        <span className="text-sm font-black text-purple-200 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

function HubCard({ hub }: { hub: DisplayHub }) {
  const accent = hub.accent ?? "purple";
  const color = getAccent(accent);

  return (
    <Link
      href={hub.href}
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-sm transition-all duration-300 hover:-translate-y-1 ${color.border} hover:bg-white/[0.08] hover:shadow-lg`}
    >
      <HubVisual hub={hub} />

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Pill accent={accent}>{hub.eyebrow}</Pill>
          <Pill accent={accent} muted>
            {hub.label}
          </Pill>
        </div>

        <h3 className="text-xl font-black leading-snug text-white group-hover:text-purple-200">
          {hub.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {hub.description}
        </p>

        <CoveragePills items={hub.coverage} accent={accent} />

        <div className={`mt-5 text-sm font-black ${color.text}`}>
          View guide hub →
        </div>
      </div>
    </Link>
  );
}

export default function HomeGuideHubs() {
  const spotlight = spotlightHub as DisplayHub;
  const hubs = guideHubs as DisplayHub[];

  return (
    <section
      id="featured-games"
      className="scroll-mt-24 bg-transparent px-4 py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">
              Featured Game Hubs
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Current walkthrough hubs
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              Start with active guide clusters for games where players need route
              help, achievement cleanup, system explanations, builds,
              collectibles, or spoiler-light ending guidance.
            </p>
          </div>

          <Link
            href="/all-game-guides/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-black text-slate-100 transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.14] hover:text-white"
          >
            Browse all guide hubs →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <SpotlightHubCard hub={spotlight} />

          <div className="grid gap-4">
            <PublicationFocusCard />

            {quickLanes.map((lane) => (
              <QuickLaneCard key={lane.title} lane={lane} />
            ))}
          </div>
        </div>

        {hubs.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {hubs.map((hub) => (
              <HubCard key={hub.href} hub={hub} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}