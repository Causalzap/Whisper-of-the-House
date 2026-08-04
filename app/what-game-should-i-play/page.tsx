import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuickGameRecommender from "@/components/game-recommender/QuickGameRecommender";
import IgdbAttribution from "@/components/site/IgdbAttribution";

import {
  GAMES,
} from "@/data/game-recommender/games";

import {
  toGameDnaGames,
} from "@/lib/game-dna/recommendations";

const siteName = "Whisper of the House";
const siteUrl = "https://www.whisperofthehouse.com";
const pagePath = "/what-game-should-i-play";
const pageUrl = `${siteUrl}${pagePath}`;
const recommenderGames =
  toGameDnaGames(GAMES);

const gameCount =
  recommenderGames.length;

const metadataTitle =
  "What Game Should I Play? Free Game Recommender";

const metadataDescription =
  `Choose a mood, platform, play mode, and optional favorite games to get personalized recommendations from ${gameCount} PC and console games. Free, with no sign-in.`;

const pageShellClassName = [
  "mx-auto w-full",
  "max-w-[1160px]",
  "min-[1800px]:max-w-[1280px]",
  "px-4 sm:px-6 lg:px-8",
].join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: metadataTitle,
  description: metadataDescription,
  applicationName: siteName,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    siteName,
    title: metadataTitle,
    description: metadataDescription,
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const howItWorksItems = [
  {
    number: "01",
    title: "Choose what you feel like playing",
    description:
      "Start with at least one mood or playstyle, such as relaxing, story-rich, challenging, strategic, exploratory, or co-op friendly.",
  },
  {
    number: "02",
    title: "Narrow the session",
    description:
      "Add your platform and choose solo, co-op, or multiplayer so the shortlist fits how you can actually play today.",
  },
  {
    number: "03",
    title: "Add favorites and compare matches",
    description:
      "Optionally add games you already enjoy, then review the strongest recommendations and why each one fits your choices.",
  },
] as const;

const recommendationSignals = [
  {
    title: "Your mood and energy",
    description:
      "Choose whether you want to relax, follow a story, solve difficult systems, explore freely, make steady progress, or play with other people.",
  },
  {
    title: "How you can play today",
    description:
      "Platform and play mode remove recommendations that do not fit the session. A great co-op game is not useful when you are playing alone.",
  },
  {
    title: "Games you already enjoy",
    description:
      "Favorites help identify the combat, exploration, progression, strategy, crafting, storytelling, and systems you tend to prefer.",
  },
] as const;

const decisionSteps = [
  {
    number: "01",
    title: "Start with your mood",
    description:
      "Decide whether you want something relaxing, challenging, story-driven, strategic, social, or focused on exploration.",
  },
  {
    number: "02",
    title: "Check your time and attention",
    description:
      "A long RPG may fit a free weekend, while a run-based game, puzzle, or short match may work better for a brief evening.",
  },
  {
    number: "03",
    title: "Choose how you are playing",
    description:
      "Narrow the list by platform and by whether you are playing solo, with one friend, or with a larger group.",
  },
  {
    number: "04",
    title: "Use favorites as reference points",
    description:
      "Look for the specific qualities you want again, such as exploration, progression, combat, systems, story, or crafting—not just the same genre.",
  },
] as const;

const faqItems = [
  {
    question: "What game should I play?",
    answer:
      "Choose a game that fits your current mood, available time, platform, and whether you are playing alone or with other people. A relaxing or run-based game can suit a short, low-energy session, while a story-heavy RPG or complex strategy game may fit a longer one. The recommender combines those factors with games you already enjoy to create a more specific shortlist.",
  },
  {
    question: "Why can’t I decide what game to play?",
    answer:
      "Decision fatigue usually happens when you compare too many games at once or focus on what you think you should finish. Narrow the choice by your mood, available time, platform, and play mode before comparing individual titles.",
  },
  {
    question: "What should I play when nothing sounds fun?",
    answer:
      "Choose something with a low commitment and a quick feedback loop, such as a short puzzle, a run-based game, a familiar comfort game, or a multiplayer match. Avoid starting a long story-heavy game unless you are ready to give it your attention.",
  },
  {
    question: "Do I need to choose three favorite games?",
    answer:
      "No. A mood or playstyle choice is enough to generate results. Favorite games are optional, but adding one to three can make the shortlist more specific by showing the tool what kinds of experiences you already enjoy.",
  },
  {
    question: "How does the game recommendation quiz work?",
    answer:
      "Each game has a human-reviewed playstyle profile covering exploration, progression, systems, crafting, story, combat, strategy, puzzles, survival, and social play. The tool compares your mood and playstyle choices with those profiles, then applies your platform, play-mode, and optional favorite-game signals.",
  },
  {
    question: "What game should I play next on Steam or PC?",
    answer:
      "Choose PC or Steam in the platform options. The results will prioritize matching games that are available on PC in the current game pool, then rank them by how well they fit your other choices.",
  },
  {
    question: "Are the recommendations random?",
    answer:
      "The main recommendations are not random. They are ranked from the closest fit to broader matches based on your selected mood, playstyle, platform, play mode, and optional favorites. A separate surprise option may surface another suitable game outside the main shortlist.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. The tool is free to use, requires no sign-in, and does not create a public profile. Your current selections remain in the browser while you use the page.",
  },
  {
    question: "What is the difference between this tool and Game DNA?",
    answer:
      "This quick recommender helps you choose a game for the session you have today using your mood, platform, play mode, and up to three optional favorites. Game DNA uses a nine-game grid to build a deeper, reusable profile of your long-term playstyle before recommending what to play next.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: `${siteUrl}/`,
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: `${siteUrl}/`,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
    },

    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: metadataTitle,
      description: metadataDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#application`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      inLanguage: "en",
    },

    {
      "@type": "WebApplication",
      "@id": `${pageUrl}#application`,
      name: "What Game Should I Play?",
      url: pageUrl,
      description: metadataDescription,
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Any",
      browserRequirements:
        "Requires JavaScript and a modern web browser.",
      isAccessibleForFree: true,
      creator: {
        "@id": `${siteUrl}/#organization`,
      },
      featureList: [
        "Current mood and playstyle matching",
        "Platform preference filtering",
        "Solo, cooperative, and multiplayer filtering",
        "Optional recommendations based on games you already enjoy",
        "Explanations for why each game fits",
        "Direct links to matching game guide hubs",
        "No account required",
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "What Game Should I Play?",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function WhatGameShouldIPlayPage() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        className="min-h-screen bg-[#f3f6fa] text-slate-950"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <HeroSection />

        <ToolSection />

        <RecommendationSignalsSection />

        <DecisionGuideSection />

        <GameDnaSection />

        <FaqSection />

        <CreditsSection />
      </main>

      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section
      aria-labelledby="what-game-heading"
      className="relative overflow-hidden border-b border-slate-200 bg-[#f4f8fc]"
    >
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0",
          "bg-[radial-gradient(circle_at_10%_0%,rgba(14,165,233,0.09),transparent_31%),radial-gradient(circle_at_88%_20%,rgba(59,130,246,0.045),transparent_27%)]",
        ].join(" ")}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/35 to-transparent"
      />

      <div
        className={[
          pageShellClassName,
          "relative py-7 sm:py-9 lg:py-10",
        ].join(" ")}
      >
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-bold text-slate-500"
        >
          <Link
            href="/"
            className="transition hover:text-slate-950"
          >
            Home
          </Link>

          <span
            aria-hidden="true"
            className="mx-2 text-slate-300"
          >
            /
          </span>

          <span
            aria-current="page"
            className="text-sky-700"
          >
            What Game Should I Play?
          </span>
        </nav>

        <div className="mt-5 grid gap-7 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <div className="max-w-[850px]">
            <p className="text-[10px] font-black uppercase tracking-[0.26em] text-sky-700">
              Free Game Recommender
            </p>

            <h1
              id="what-game-heading"
              className={[
                "mt-2 max-w-[850px]",
                "text-4xl font-black leading-[1.06]",
                "tracking-[-0.04em] text-slate-950",
                "sm:text-5xl",
                "lg:text-[3.25rem]",
              ].join(" ")}
            >
              What Game Should I Play?
            </h1>

            <p
              className={[
                "mt-4 max-w-[780px]",
                "text-base leading-7 text-slate-600",
                "sm:text-lg sm:leading-8",
              ].join(" ")}
            >
              Choose the mood you want today, then narrow the
              results by platform, play mode, and games you already
              enjoy. The tool creates a practical shortlist instead
              of another generic list of popular games.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                {gameCount} games to compare
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                Free
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                No sign-in
              </span>
            </div>
          </div>

          <div className="flex lg:justify-end">
            <a
              href="#game-recommender"
              className={[
                "inline-flex min-h-11 items-center",
                "justify-center rounded-full",
                "bg-sky-600 px-5 py-2.5",
                "text-sm font-black text-white",
                "shadow-sm transition",
                "hover:-translate-y-0.5",
                "hover:bg-sky-700 hover:shadow-md",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-sky-500",
                "focus-visible:ring-offset-2",
                "focus-visible:ring-offset-[#f4f8fc]",
              ].join(" ")}
            >
              Find My Next Game
              <ArrowDownIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolSection() {
  return (
    <section
      id="game-recommender"
      aria-label="Game recommendation tool"
      className={[
        "scroll-mt-20",
        "bg-[linear-gradient(180deg,#eaf1f7_0%,#f5f8fb_100%)]",
      ].join(" ")}
    >
      <div
        className={[
          pageShellClassName,
          "py-6 sm:py-9 lg:py-11",
        ].join(" ")}
      >
        <div
          className={[
            "grid gap-5",
            "xl:grid-cols-[minmax(0,1fr)_286px]",
            "xl:items-start",
          ].join(" ")}
        >
          <div className="min-w-0">
            <QuickGameRecommender
              games={recommenderGames}
              maximumFavoriteGames={3}
              resultLimit={8}
            />
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-4">
              <HowItWorksCard />

              <PrivacyCard />
            </div>
          </aside>
        </div>

        <div className="mt-5 xl:hidden">
          <HowItWorksMobile />
        </div>
      </div>
    </section>
  );
}

function HowItWorksCard() {
  return (
    <section
      aria-labelledby="quick-recommender-how-it-works"
      className={[
        "overflow-hidden rounded-[1.5rem]",
        "border border-slate-200",
        "bg-white shadow-sm",
      ].join(" ")}
    >
      <div className="border-b border-slate-100 px-4 py-4">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-700">
          How It Works
        </p>

        <h2
          id="quick-recommender-how-it-works"
          className="mt-1.5 text-lg font-black leading-6 tracking-tight text-slate-950"
        >
          Find a game in three steps
        </h2>
      </div>

      <div className="divide-y divide-slate-100">
        {howItWorksItems.map((item) => (
          <article
            key={item.number}
            className="flex gap-3 px-4 py-4"
          >
            <span
              className={[
                "flex h-7 w-7 shrink-0",
                "items-center justify-center",
                "rounded-full bg-sky-50",
                "text-[10px] font-black text-sky-700",
              ].join(" ")}
            >
              {item.number}
            </span>

            <div className="min-w-0">
              <h3 className="text-sm font-black leading-5 text-slate-950">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PrivacyCard() {
  return (
    <aside
      className={[
        "rounded-[1.5rem]",
        "border border-sky-100",
        "bg-sky-50/80 p-4",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <span
          className={[
            "flex h-9 w-9 shrink-0",
            "items-center justify-center",
            "rounded-full bg-white",
            "text-sky-700 shadow-sm",
          ].join(" ")}
        >
          <ShieldIcon />
        </span>

        <div className="min-w-0">
          <h2 className="text-sm font-black text-slate-950">
            Private by default
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-slate-600">
            No sign-in, account, or public profile is required.
            Your current choices stay in this browser while you
            use the tool.
          </p>
        </div>
      </div>
    </aside>
  );
}

function HowItWorksMobile() {
  return (
    <details
      className={[
        "group overflow-hidden",
        "rounded-[1.5rem]",
        "border border-slate-200",
        "bg-white shadow-sm",
      ].join(" ")}
    >
      <summary
        className={[
          "flex cursor-pointer list-none",
          "items-center justify-between gap-4",
          "px-4 py-4",
        ].join(" ")}
      >
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-700">
            How It Works
          </p>

          <h2 className="mt-1 text-base font-black text-slate-950">
            Find a game in three steps
          </h2>
        </div>

        <span
          aria-hidden="true"
          className={[
            "flex h-8 w-8 shrink-0",
            "items-center justify-center",
            "rounded-full bg-slate-100",
            "text-xl font-light text-sky-700",
            "transition group-open:rotate-45",
          ].join(" ")}
        >
          +
        </span>
      </summary>

      <div className="border-t border-slate-100">
        {howItWorksItems.map((item) => (
          <article
            key={item.number}
            className="flex gap-3 border-b border-slate-100 px-4 py-4 last:border-b-0"
          >
            <span
              className={[
                "flex h-8 w-8 shrink-0",
                "items-center justify-center",
                "rounded-full bg-sky-50",
                "text-[11px] font-black text-sky-700",
              ].join(" ")}
            >
              {item.number}
            </span>

            <div>
              <h3 className="text-sm font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </details>
  );
}

function RecommendationSignalsSection() {
  return (
    <section
      aria-labelledby="recommendation-signals-heading"
      className="border-t border-slate-200 bg-white"
    >
      <div
        className={[
          pageShellClassName,
          "py-10 sm:py-12 lg:py-14",
        ].join(" ")}
      >
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
            Built Around Your Session
          </p>

          <h2
            id="recommendation-signals-heading"
            className="mt-2 text-3xl font-black tracking-tight text-slate-950"
          >
            Find a game that fits the session you have today
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            The best choice depends on more than your favorite
            genre. Your mood, platform, play mode, and current energy
            can change what feels right from one session to the next.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {recommendationSignals.map((item, index) => (
            <article
              key={item.title}
              className={[
                "rounded-[1.5rem]",
                "border border-slate-200",
                "bg-[#f7f9fc] p-5",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-9 w-9 items-center",
                  "justify-center rounded-full",
                  "bg-sky-50 text-xs font-black",
                  "text-sky-700",
                ].join(" ")}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionGuideSection() {
  return (
    <section
      aria-labelledby="how-to-decide-heading"
      className="border-t border-slate-200 bg-[#f7f9fc]"
    >
      <div
        className={[
          pageShellClassName,
          "py-10 sm:py-12 lg:py-14",
        ].join(" ")}
      >
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
            A Simple Decision Framework
          </p>

          <h2
            id="how-to-decide-heading"
            className="mt-2 text-3xl font-black tracking-tight text-slate-950"
          >
            How to Decide What Game to Play
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Choosing a game becomes easier when you stop comparing
              your entire library and focus on the session you actually
              have today.
            </p>

            <p>
              Start with your mood, then consider how much time and
              attention you have. Narrow the list by platform and play
              mode, and use games you already enjoy as reference points
              for the specific qualities you want again.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {decisionSteps.map((item) => (
            <article
              key={item.number}
              className={[
                "rounded-[1.5rem]",
                "border border-slate-200",
                "bg-white p-5 shadow-sm",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-9 w-9 items-center",
                  "justify-center rounded-full",
                  "bg-sky-50 text-xs font-black",
                  "text-sky-700",
                ].join(" ")}
              >
                {item.number}
              </span>

              <h3 className="mt-4 text-base font-black leading-6 text-slate-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className={[
            "mt-7 rounded-[1.5rem]",
            "border border-sky-100",
            "bg-sky-50/70 p-5 sm:p-6",
          ].join(" ")}
        >
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            The recommender above combines these signals and turns them
            into a ranked shortlist, so you do not need to compare every
            game in your backlog manually.
          </p>

          <a
            href="#game-recommender"
            className={[
              "mt-4 inline-flex min-h-10 items-center",
              "justify-center rounded-full",
              "bg-sky-600 px-4 py-2",
              "text-sm font-black text-white",
              "transition hover:bg-sky-700",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
              "focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Find a Game for This Session
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function GameDnaSection() {
  return (
    <section
      aria-labelledby="game-dna-next-step-heading"
      className="border-t border-slate-200 bg-[#eef4f9]"
    >
      <div
        className={[
          pageShellClassName,
          "py-9 sm:py-11",
        ].join(" ")}
      >
        <div
          className={[
            "flex flex-col gap-5",
            "rounded-[1.75rem]",
            "border border-sky-100",
            "bg-white p-6 shadow-sm",
            "sm:p-8",
            "lg:flex-row lg:items-center",
            "lg:justify-between",
          ].join(" ")}
        >
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
              Want a Deeper Profile?
            </p>

            <h2
              id="game-dna-next-step-heading"
              className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              Reveal your full Gaming DNA
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This quick recommender helps with the session you
              have today. Game DNA uses nine favorite games to reveal
              your strongest playstyle traits, build a shareable 3×3
              grid, and create a deeper long-term profile.
            </p>
          </div>

          <Link
            href="/game-dna"
            className={[
              "inline-flex min-h-11 shrink-0",
              "items-center justify-center",
              "rounded-full bg-slate-950",
              "px-5 py-2.5 text-sm font-black",
              "text-white transition",
              "hover:-translate-y-0.5",
              "hover:bg-slate-800",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-sky-500",
              "focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Build My Gaming DNA
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      aria-labelledby="game-recommendation-faq-heading"
      className="border-t border-slate-200 bg-[#f7f9fc]"
    >
      <div
        className={[
          pageShellClassName,
          "py-10 sm:py-12 lg:py-14",
        ].join(" ")}
      >
        <div
          className={[
            "grid gap-7",
            "lg:grid-cols-[280px_minmax(0,1fr)]",
            "min-[1800px]:grid-cols-[330px_minmax(0,1fr)]",
          ].join(" ")}
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
              Frequently Asked Questions
            </p>

            <h2
              id="game-recommendation-faq-heading"
              className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              Game Recommendation FAQ
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              Learn how the shortlist is built, how existing
              favorites are handled, and when the full Game DNA
              tool is the better choice.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className={[
                  "group overflow-hidden",
                  "rounded-xl border border-slate-200",
                  "bg-white shadow-sm",
                ].join(" ")}
              >
                <summary
                  className={[
                    "flex cursor-pointer list-none",
                    "items-center justify-between gap-5",
                    "px-4 py-4 text-left",
                    "text-sm font-black text-slate-900",
                    "sm:px-5",
                  ].join(" ")}
                >
                  <span>{item.question}</span>

                  <span
                    aria-hidden="true"
                    className={[
                      "flex h-7 w-7 shrink-0",
                      "items-center justify-center",
                      "rounded-full bg-slate-100",
                      "text-lg font-light text-sky-700",
                      "transition group-open:rotate-45",
                    ].join(" ")}
                  >
                    +
                  </span>
                </summary>

                <div
                  className={[
                    "border-t border-slate-100",
                    "px-4 py-4",
                    "text-sm leading-7 text-slate-600",
                    "sm:px-5",
                  ].join(" ")}
                >
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CreditsSection() {
  return (
    <section
      aria-label="Game data and ownership credits"
      className="border-t border-slate-200 bg-white"
    >
      <div
        className={[
          pageShellClassName,
          "flex flex-col items-center gap-3 py-5 text-center",
        ].join(" ")}
      >
        <IgdbAttribution
          variant="compact"
          tone="light"
        />

        <p className="text-[11px] leading-5 text-slate-500">
          Game titles, cover artwork, trademarks, and related
          materials belong to their respective owners.
        </p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 text-sky-600"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="m6.5 10 2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
    >
      <path
        d="M10 4v12m0 0 5-5m-5 5-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="ml-2 h-4 w-4"
    >
      <path
        d="m8 5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M10 2.5 16 5v4.2c0 3.9-2.2 6.5-6 8.3-3.8-1.8-6-4.4-6-8.3V5l6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="m7.3 10 1.8 1.8 3.6-3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}