import Link from "next/link";
import {
  featureArticles,
  mainSpotlight,
  railItems,
  spotlightThemes,
  type SpotlightArticle,
} from "@/data/homeGuideCoverage";

type DisplayArticle = SpotlightArticle & {
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imagePadding?: boolean;
};

function getImageClass(article: DisplayArticle, large = false) {
  const fit = article.imageFit ?? "cover";

  if (fit === "contain") {
    return [
      "h-full w-full object-contain transition-transform duration-500",
      article.imagePadding === false ? "" : large ? "p-5" : "p-4",
      "group-hover:scale-[1.015]",
    ]
      .filter(Boolean)
      .join(" ");
  }

  return "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]";
}

function SpotlightVisual({
  article,
  large = false,
}: {
  article: DisplayArticle;
  large?: boolean;
}) {
  const fit = article.imageFit ?? "cover";
  const hasContainImage = article.image && fit === "contain";

  return (
    <div
      className={`relative overflow-hidden ${
        hasContainImage
          ? "bg-slate-950"
          : "bg-gradient-to-br from-purple-500/20 via-slate-800 to-blue-500/10"
      } ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}
    >
      {article.image ? (
        <img
          src={article.image}
          alt={`${article.title} feature image`}
          className={getImageClass(article, large)}
          style={{
            objectPosition: article.imagePosition ?? "center",
          }}
          loading={large ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6">
          <div className="max-w-[82%] text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-3xl border border-white/10 bg-white/10 shadow-sm" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-300">
              Spotlight
            </p>
            <p
              className={`mt-3 font-black leading-tight text-white ${
                large ? "text-3xl md:text-4xl" : "text-xl"
              }`}
            >
              {article.title}
            </p>
          </div>
        </div>
      )}

      {fit === "cover" ? (
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/70 to-transparent" />
      ) : null}
    </div>
  );
}

function TypeBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-purple-400/15 px-3 py-1 text-xs font-black text-purple-200">
      {children}
    </span>
  );
}

function GameBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
      {children}
    </span>
  );
}

function MainSpotlightCard({ article }: { article: DisplayArticle }) {
  return (
    <Link
      href={article.href}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50 hover:bg-white/[0.08] hover:shadow-xl"
    >
      <SpotlightVisual article={article} large />

      <div className="p-6 md:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          <TypeBadge>{article.type}</TypeBadge>
          <GameBadge>{article.game}</GameBadge>
        </div>

        <h3 className="text-3xl font-black leading-tight text-white group-hover:text-purple-200 md:text-4xl">
          {article.title}
        </h3>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
          {article.description}
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-400">{article.meta}</p>
          <span className="text-sm font-black text-purple-200">
            Open spotlight hub →
          </span>
        </div>
      </div>
    </Link>
  );
}

function RailCard({
  item,
}: {
  item: {
    title: string;
    href: string;
    label: string;
    description: string;
  };
}) {
  return (
    <Link
      href={item.href}
      className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.08]"
    >
      <div className="mb-3 inline-flex rounded-full bg-purple-400/15 px-3 py-1 text-xs font-black text-purple-200">
        {item.label}
      </div>

      <h3 className="text-lg font-black leading-snug text-white group-hover:text-purple-200">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {item.description}
      </p>

      <div className="mt-4 text-sm font-black text-purple-200">
        View coverage →
      </div>
    </Link>
  );
}

function FeatureArticleCard({ article }: { article: DisplayArticle }) {
  return (
    <Link
      href={article.href}
      className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50 hover:bg-white/[0.08] hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="h-1.5 w-14 rounded-full bg-purple-400/25" />
        <span className="text-xs font-semibold text-slate-500">
          {article.meta}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <TypeBadge>{article.type}</TypeBadge>
        <GameBadge>{article.game}</GameBadge>
      </div>

      <h3 className="text-xl font-black leading-snug text-white group-hover:text-purple-200">
        {article.title}
      </h3>

      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-300">
        {article.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-4 text-sm">
        <span className="text-slate-500">{article.game}</span>
        <span className="shrink-0 font-black text-purple-200">Read →</span>
      </div>
    </Link>
  );
}

function ThemeCard({
  theme,
}: {
  theme: {
    title: string;
    href: string;
    eyebrow: string;
    description: string;
  };
}) {
  return (
    <Link
      href={theme.href}
      className="group rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-slate-900"
    >
      <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black text-purple-200">
        {theme.eyebrow}
      </div>

      <h4 className="text-lg font-black text-white group-hover:text-purple-200">
        {theme.title}
      </h4>

      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {theme.description}
      </p>
    </Link>
  );
}

export default function HomeSpotlight() {
  return (
    <section className="bg-transparent px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">
              Spotlight
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Featured guide coverage
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              A rotating editorial spotlight for active guide clusters, practical
              walkthroughs, achievement cleanup, builds, collectibles, endings,
              and systems that players are using right now.
            </p>
          </div>

          <Link
            href="/#latest-updates"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-black text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:bg-white/[0.14] hover:text-white"
          >
            See latest updates →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <MainSpotlightCard article={mainSpotlight as DisplayArticle} />

          <div className="flex flex-col gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Editor&apos;s Note
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                Why this coverage matters
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Spotlight hubs are chosen when a game has enough route pressure,
                systems depth, endings, achievements, builds, or cleanup demand
                to deserve more than a single overview page.
              </p>
            </div>

            {railItems.map((item) => (
              <RailCard key={item.href} item={item} />
            ))}
          </div>
        </div>

        {featureArticles.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {featureArticles.map((article) => (
              <FeatureArticleCard
                key={article.href}
                article={article as DisplayArticle}
              />
            ))}
          </div>
        ) : null}

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-sm md:p-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Coverage Themes
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                What the spotlight section highlights
              </h3>
            </div>

            <Link
              href="/all-game-guides/"
              className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-black text-slate-100 transition hover:border-purple-300/50 hover:bg-white/10 hover:text-white"
            >
              Browse archive →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {spotlightThemes.map((theme) => (
              <ThemeCard key={theme.title} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}