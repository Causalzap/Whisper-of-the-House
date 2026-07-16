import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GameDnaTool from "@/components/game-dna/GameDnaTool";

import { gameDnaGames } from "@/data/game-dna/games";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/game-dna`;

const metadataTitle =
  "Game DNA – Pick 9 Games & Reveal Your Playstyle";

const metadataDescription =
  "Pick nine favorite games, build a 3×3 grid, reveal your playstyle, and discover matching games and guide hubs. Free, private, and no login.";

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
      "Click the highlighted empty position, search the library, and add a game that represents your taste.",
  },
  {
    number: "02",
    title: "Arrange your grid",
    description:
      "Remove, replace, and reorder your selections before generating your Gaming DNA.",
  },
  {
    number: "03",
    title: "Reveal your playstyle",
    description:
      "Your nine games are compared across ten gameplay traits to identify your strongest preferences.",
  },
  {
    number: "04",
    title: "Find your next game",
    description:
      "Matching games are ranked by similarity, with direct links to relevant guide hubs when available.",
  },
];

const faqItems = [
  {
    question: "What is the Game DNA tool?",
    answer:
      "Game DNA analyzes nine of your favorite games and creates a playstyle profile based on the mechanics and experiences that appear most often in your selections.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Game DNA does not require an account or login. Your current selections are stored locally in your browser so you can return and continue later.",
  },
  {
    question: "How do I add a game to my grid?",
    answer:
      "Click the highlighted empty position in the 3×3 grid. A game picker will open, allowing you to search the library and select a title.",
  },
  {
    question: "How are the game recommendations calculated?",
    answer:
      "Each game has scores for exploration, progression, systems, crafting, story, combat, strategy, puzzle solving, survival, and social play. Your nine selections are combined and compared with other games in the library.",
  },
  {
    question: "What does a title like Progression Architect mean?",
    answer:
      "It is the name of your generated playstyle profile. The title summarizes the strongest gameplay preferences found across your nine selected games.",
  },
  {
    question: "Why do some recommendations link to guide hubs?",
    answer:
      "When a matching game has coverage on Whisper of the House, the recommendation links directly to its walkthroughs, beginner guides, builds, achievements, and other practical help.",
  },
  {
    question: "Are my game selections uploaded?",
    answer:
      "The current version stores selected game IDs in your browser. It does not create a public profile or require personal information.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Game DNA",
    url: pageUrl,
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
                Build a favorite-games 3×3, discover the gameplay
                traits that define your taste, and find matching
                games with practical guide coverage.
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 text-sky-300"
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