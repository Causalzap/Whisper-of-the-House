import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuickGameRecommender from "@/components/game-recommender/QuickGameRecommender";

import { gameDnaGames } from "@/data/game-dna/games";

const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/what-game-should-i-play`;

const metadataTitle =
  "What Game Should I Play? Free Game Recommendation Quiz";

const metadataDescription =
  "Choose games you like, your platform, and how you want to play. Get personalized video game recommendations instantly. Free and no login.";

const pageShellClassName = [
  "mx-auto w-full",
  "max-w-[1160px]",
  "min-[1800px]:max-w-[1280px]",
  "px-4 sm:px-6 lg:px-8",
].join(" ");

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
  },

  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

const howItWorksItems = [
  {
    number: "01",
    title: "Choose games you already like",
    description:
      "Select up to three games that represent your taste. These choices give the recommender a starting point.",
  },
  {
    number: "02",
    title: "Tell us what you want today",
    description:
      "Choose your platform, preferred play mode, and the kind of experience you are looking for right now.",
  },
  {
    number: "03",
    title: "Get personalized matches",
    description:
      "The recommender compares your choices with each game's playstyle traits and ranks the closest matches.",
  },
];

const recommendationSignals = [
  {
    title: "Games you already enjoy",
    description:
      "Your selected favorites reveal patterns in exploration, progression, combat, strategy, story, crafting, and other gameplay traits.",
  },
  {
    title: "Your platform",
    description:
      "Narrow the results to PC, Steam, PlayStation, Xbox, Nintendo Switch, or games available across multiple platforms.",
  },
  {
    title: "How you want to play",
    description:
      "Look for solo, co-op, multiplayer, relaxing, challenging, story-rich, strategic, or progression-focused games.",
  },
];

const faqItems = [
  {
    question: "What game should I play?",
    answer:
      "Choose a few games you already enjoy, select your platform and current preferences, and the recommender will rank games that best match your taste.",
  },
  {
    question:
      "How does the game recommendation quiz work?",
    answer:
      "Each game is scored across gameplay traits such as exploration, progression, systems, crafting, story, combat, strategy, puzzle solving, survival, and social play. Your answers are compared with those scores to generate personalized matches.",
  },
  {
    question:
      "Can you recommend games based on games I already like?",
    answer:
      "Yes. You can select up to three games you enjoy. The tool uses their shared gameplay traits as the foundation for your recommendations.",
  },
  {
    question:
      "What game should I play next on Steam?",
    answer:
      "Select PC or Steam as your platform preference. The recommender will prioritize matching PC games in the current library.",
  },
  {
    question:
      "Are the game recommendations random?",
    answer:
      "No. Results are ranked using your selected games, platform, play mode, and gameplay preferences. A small wildcard option may be shown separately when it offers useful variety.",
  },
  {
    question:
      "Do I need to create an account?",
    answer:
      "No. The game recommendation quiz is free and does not require an account or login.",
  },
  {
    question:
      "What is the difference between this tool and Game DNA?",
    answer:
      "This page gives you a quick recommendation after a few choices. Game DNA asks you to select nine favorite games and creates a more detailed gaming playstyle profile.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "What Game Should I Play?",
    url: pageUrl,
    description: metadataDescription,
    applicationCategory:
      "EntertainmentApplication",
    operatingSystem: "Any",
    browserRequirements:
      "Requires JavaScript and a modern web browser.",
    isAccessibleForFree: true,

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },

    creator: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },

    featureList: [
      "Personalized video game recommendations",
      "Recommendations based on games you like",
      "Platform preference filtering",
      "Solo, co-op, and multiplayer filtering",
      "Gameplay mood and playstyle matching",
      "Matching game guide hubs",
      "No account required",
    ],
  },

  {
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
        name: "What Game Should I Play?",
        item: pageUrl,
      },
    ],
  },

  {
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
  },
];

export default function WhatGameShouldIPlayPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f3f6fa] text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <HeroSection />

        <ToolSection />

        <RecommendationSignalsSection />

        <GameDnaSection />

        <FaqSection />

        <OwnershipNotice />
      </main>

      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f4f8fc]">
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

          <span className="text-sky-700">
            What Game Should I Play?
          </span>
        </nav>

        <div className="mt-5 grid gap-7 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <div className="max-w-[850px]">
            <p className="text-[10px] font-black uppercase tracking-[0.26em] text-sky-700">
              Free Game Recommendation Quiz
            </p>

            <h1
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
              Choose a few games you enjoy and tell us
              what you want to play today. Get
              personalized video game recommendations
              based on your taste, platform, and preferred
              playstyle.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                Personalized matches
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                Free
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckIcon />
                No login
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
              games={gameDnaGames}
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
            No account required
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-slate-600">
            Use the game recommendation quiz without
            creating an account or public profile.
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
    <section className="border-t border-slate-200 bg-white">
      <div
        className={[
          pageShellClassName,
          "py-10 sm:py-12 lg:py-14",
        ].join(" ")}
      >
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
            Personalized Recommendations
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Find games based on games you like
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            The recommendations are not picked from a
            random list. They are ranked using the games
            you enjoy and the kind of experience you want
            to play next.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {recommendationSignals.map(
            (item, index) => (
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
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3 className="mt-4 text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function GameDnaSection() {
  return (
    <section className="border-t border-slate-200 bg-[#eef4f9]">
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

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Reveal your full Gaming DNA
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Pick nine favorite games to discover your
              strongest playstyle traits, build a 3×3 grid,
              and get a more detailed gaming profile.
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
    <section className="border-t border-slate-200 bg-[#f7f9fc]">
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

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Game Recommendation FAQ
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              Learn how the quiz chooses matches, how to
              find a game for Steam, and how it differs from
              the full Game DNA tool.
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

function OwnershipNotice() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div
        className={[
          pageShellClassName,
          "py-5 text-center",
        ].join(" ")}
      >
        <p className="text-[11px] leading-5 text-slate-500">
          Game titles, cover artwork, trademarks, and
          related materials belong to their respective
          owners.
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