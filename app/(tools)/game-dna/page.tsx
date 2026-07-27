import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GameDnaSeoContent from "@/components/game-dna/GameDnaSeoContent";
import GameDnaTool from "@/components/game-dna/GameDnaTool";
import IgdbAttribution from "@/components/site/IgdbAttribution";

import { GAMES } from "@/data/game-recommender/games";

import {
  toGameDnaGames,
} from "@/lib/game-dna/recommendations";

const gameDnaGames =
  toGameDnaGames(GAMES);

const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/game-dna`;

const metadataTitle =
  "Gaming DNA Test: Pick 9 Games & Reveal Your Playstyle";

const metadataDescription =
  "Pick nine games you love to reveal your Gaming DNA, strongest gameplay traits, and personalized game recommendations. Free, private, and no login.";

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
    card: "summary_large_image",
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
    title: "Choose nine games",
    description:
      "Start with games you know well and genuinely enjoy—not titles you only plan to try.",
  },
  {
    number: "02",
    title: "Make the grid yours",
    description:
      "Swap, remove, or drag games around until the nine picks feel like a fair snapshot of your taste.",
  },
  {
    number: "03",
    title: "Reveal your Gaming DNA",
    description:
      "We compare the shared gameplay patterns behind your picks and turn them into a ten-trait profile.",
  },
  {
    number: "04",
    title: "See what fits next",
    description:
      "Explore close matches, see why they fit, and jump into a guide hub when practical help is available.",
  },
];

const faqItems = [
  {
    question: "What is the Game DNA tool?",
    answer:
      "Game DNA starts with nine games you already know and enjoy. It looks for the gameplay patterns they share, then turns those patterns into a readable ten-trait playstyle profile.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Your grid and generated profile stay in this browser, so you can leave and come back without creating an account.",
  },
  {
    question: "How do I add a game to my grid?",
    answer:
      "Click any empty square in the 3×3 grid, then search or browse the game picker. You can replace or reorder a choice at any time before revealing the result.",
  },
  {
    question: "How are the game recommendations calculated?",
    answer:
      "Every game uses the same ten-trait scale: exploration, progression, systems, crafting, story, combat, strategy, puzzle solving, survival, and social play. Your nine picks are averaged into one profile, then compared with the rest of the library. Guide coverage may break a close tie, but it does not create the match.",
  },
  {
    question: "What does a title like Progression Architect mean?",
    answer:
      "It is a readable name for the strongest pattern in your grid. For example, Progression Architect usually points to a player who enjoys visible upgrades, deeper systems, and long-term growth.",
  },
  {
    question: "Why do some recommendations link to guide hubs?",
    answer:
      "When a close match already has useful coverage on Whisper of the House or a related guide site, the result links straight to that hub. Games without guides can still be valid matches.",
  },
  {
    question: "Are my game selections uploaded?",
    answer:
      "No. The tool stores selected game IDs and your generated profile locally in this browser. It does not create a public profile or ask for personal information.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gaming DNA Test",
    alternateName: "Game DNA",
    url: pageUrl,
    inLanguage: "en",
    description: metadataDescription,
    applicationCategory: "EntertainmentApplication",
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
      "Favorite games 3×3 grid",
      "Gaming playstyle profile",
      "Ten-trait preference analysis",
      "Personalized game recommendations",
      "Matching video game guide hubs",
      "Local browser storage",
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
        name: "Game DNA",
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

export default function GameDnaPage() {
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

        <GameDnaSeoContent />

        <QuickRecommenderCta />

        <FaqSection />

        <OwnershipNotice />
      </main>

      <Footer />
    </>
  );
}

function HeroSection() {
    return (
      <section
        className={[
          "relative overflow-hidden",
          "border-b border-slate-200",
          "bg-[#f4f8fc] text-slate-950",
        ].join(" ")}
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
          className={[
            "absolute inset-0",
            "bg-gradient-to-b",
            "from-white/35 to-transparent",
          ].join(" ")}
        />
  
        <div
          className={[
            pageShellClassName,
            "relative py-6 sm:py-7 lg:py-8",
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
              Game DNA
            </span>
          </nav>
  
          <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-end">
            <div className="max-w-[820px]">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700">
                Game DNA
              </p>
  
              <h1
                className={[
                  "mt-2 max-w-[820px]",
                  "text-3xl font-black leading-[1.08]",
                  "tracking-[-0.035em] text-slate-950",
                  "sm:text-4xl",
                  "lg:text-[2.5rem]",
                ].join(" ")}
              >
                Pick 9 Games. Reveal Your Playstyle.
              </h1>
  
              <p
                className={[
                  "mt-3 max-w-[760px]",
                  "text-sm leading-6 text-slate-600",
                  "sm:text-[15px] sm:leading-7",
                ].join(" ")}
              >
                Pick nine games you genuinely love. We will map the
                gameplay patterns they share, show what keeps pulling
                you back, and point you toward games that fit.
              </p>
  
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <HeroCheckIcon />
                  Free
                </span>
  
                <span className="inline-flex items-center gap-2">
                  <HeroCheckIcon />
                  No login
                </span>
  
                <span className="inline-flex items-center gap-2">
                  <HeroCheckIcon />
                  Saved in your browser
                </span>
              </div>
            </div>
  
            <div className="flex lg:justify-end">
              <a
                href="#game-dna-tool"
                className={[
                  "inline-flex min-h-10 items-center justify-center",
                  "rounded-full bg-sky-600 px-5 py-2.5",
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
                Start My Games Grid
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function HeroCheckIcon() {
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

function ToolSection() {
  return (
    <section
      id="game-dna-tool"
      className={[
        "scroll-mt-20",
        "bg-[linear-gradient(180deg,#eef3f8_0%,#f6f8fb_100%)]",
      ].join(" ")}
    >
      <div
        className={[
          pageShellClassName,
          "py-5 sm:py-8 lg:py-10",
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
            <GameDnaTool games={gameDnaGames} />
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-4">
              <HowItWorksCard />
              <PrivacyCard />
            </div>
          </aside>
        </div>

        <div className="mt-6 xl:hidden">
          <HowItWorksMobile />
        </div>
      </div>
    </section>
  );
}

function HowItWorksCard() {
  return (
    <section
      aria-labelledby="game-dna-how-it-works"
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
          id="game-dna-how-it-works"
          className="mt-1.5 text-lg font-black leading-6 tracking-tight text-slate-950"
        >
          From nine games to your next game
        </h2>
      </div>

      <div className="divide-y divide-slate-100">
        {howItWorksItems.map((item) => (
          <article
            key={item.number}
            className="flex gap-3 px-4 py-3.5"
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
            Your selected game IDs are stored in this browser.
            No account or public profile is required.
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
            From nine games to your next game
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

function QuickRecommenderCta() {
  return (
    <section className="border-t border-slate-200 bg-[#eef3f8]">
      <div
        className={[
          pageShellClassName,
          "py-8 sm:py-10 lg:py-12",
        ].join(" ")}
      >
        <div
          className={[
            "overflow-hidden rounded-[1.75rem]",
            "border border-sky-100",
            "bg-white shadow-sm",
          ].join(" ")}
        >
          <div
            className={[
              "grid gap-6 p-5",
              "sm:p-6 lg:p-8",
              "lg:grid-cols-[minmax(0,1fr)_auto]",
              "lg:items-center",
            ].join(" ")}
          >
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">
                Need a Faster Recommendation?
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Find a game that fits what you
                want to play today
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Gaming DNA reveals your
                longer-term playstyle. For a
                quicker answer, choose your
                current mood, platform, play
                mode, and a few favorite games
                to get a practical shortlist.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <HeroCheckIcon />
                  Takes about one minute
                </span>

                <span className="inline-flex items-center gap-2">
                  <HeroCheckIcon />
                  No login
                </span>

                <span className="inline-flex items-center gap-2">
                  <HeroCheckIcon />
                  Built for today&apos;s mood
                </span>
              </div>
            </div>

            <div className="flex lg:justify-end">
              <Link
                href="/what-game-should-i-play"
                className={[
                  "inline-flex min-h-11",
                  "items-center justify-center",
                  "rounded-full bg-sky-600",
                  "px-5 py-2.5",
                  "text-sm font-black text-white",
                  "shadow-sm transition",
                  "hover:-translate-y-0.5",
                  "hover:bg-sky-700",
                  "hover:shadow-md",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-sky-500",
                  "focus-visible:ring-offset-2",
                ].join(" ")}
              >
                Find My Next Game
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
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
              Game DNA FAQ
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              Learn how your grid is saved, how the playstyle
              profile works, and why some recommendations link
              to full guide hubs.
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
          Game titles, cover artwork, trademarks, and related
          materials belong to their respective owners.
        </p>
      </div>
    </section>
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