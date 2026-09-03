import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import BombananaContent from "@/data/bombanana/index.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-hub.webp`,
  `${siteUrl}/images/bombanana/bombanana-bomb-timer-mistakes.webp`,
];


const toc = [
  {
    id: "what-kind-of-game",
    label: "What the game asks from three players",
  },
  {
    id: "first-hour",
    label: "What to learn first",
  },
  {
    id: "campaign",
    label: "30-level Campaign",
  },
  {
    id: "when-to-use-solver",
    label: "When to use the solver",
  },
  {
    id: "where-teams-get-stuck",
    label: "Why teams get stuck",
  },
  {
    id: "calculator",
    label: "Calculator",
  },
  {
    id: "chaos",
    label: "Chaos",
  },
  {
    id: "buy-or-skip",
    label: "Buy or skip",
  },
  {
    id: "when-to-stop-session",
    label: "When to stop retrying",
  },
  {
    id: "modes",
    label: "Campaign, Endless & Custom",
  },
  {
    id: "completion",
    label: "Completion",
  },
  {
    id: "where-next",
    label: "Where to go next",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver & Manual",
  },
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana/wire",
    label: "BOMBANANA Cable / Wire Guide",
  },
  {
    href: "/bombanana/calculator",
    label: "BOMBANANA Calculator Guide",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles Guide",
  },
  {
    href: "/bombanana/achievements",
    label: "BOMBANANA Achievements Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Manual & Guide: Solver, Levels, Roles",

  description:
    "BOMBANANA manual and guide for module solving, all 30 Campaign levels, Blind/Deaf/Mute roles, achievements, Endless, Custom, and common run failures.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Manual & Guide: Solver, Levels, Roles",

    description:
      "Solve the problem that is actually ending your BOMBANANA run, from module lookups and 30-level progression to role communication, Chaos, and completion.",

    url: pageUrl,

    siteName:
      "Whisper of the House",

    type:
      "article",

    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "BOMBANANA three-player co-op bomb defusal gameplay.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Manual & Guide: Solver, Levels, Roles",

    description:
      "Use the BOMBANANA guide for module solving, 30 Campaign levels, Blind/Deaf/Mute communication, achievements, Endless, and Custom.",

    images: [
      imageUrls[0],
    ],
  },
};


const jsonLd = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type":
        "BreadcrumbList",

      "@id":
        `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type":
            "ListItem",

          position:
            1,

          name:
            "Home",

          item:
            siteUrl,
        },
        {
          "@type":
            "ListItem",

          position:
            2,

          name:
            "BOMBANANA Guide",

          item:
            pageUrl,
        },
      ],
    },


    {
      "@type":
        "Article",

      "@id":
        `${pageUrl}#article`,

      mainEntityOfPage: {
        "@type":
          "WebPage",

        "@id":
          pageUrl,
      },

      headline:
        "BOMBANANA Guide: Modules, Roles, Levels & What to Fix Next",

      description:
        "A player-focused BOMBANANA guide for identifying why a run is failing, choosing between the module solver and deeper guides, progressing through the 30-level Campaign, fixing Blind, Deaf, and Mute communication, managing Chaos pressure, and moving into achievements, Endless, and Custom.",

      image:
        imageUrls,

      inLanguage:
        "en",

      datePublished:
        "2026-06-19",

      dateModified:
        "2026-09-03",

      articleSection:
        "Guides",

      about: [
        {
          "@type":
            "VideoGame",

          name:
            "BOMBANANA",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA module solver",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Campaign",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Blind Deaf Mute roles",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA achievements",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Endless and Custom modes",
        },
      ],

      isPartOf: {
        "@type":
          "WebSite",

        "@id":
          `${siteUrl}#website`,

        name:
          "Whisper of the House",

        url:
          siteUrl,
      },

      publisher: {
        "@type":
          "Organization",

        "@id":
          `${siteUrl}#organization`,

        name:
          "Whisper of the House",

        url:
          siteUrl,
      },

      breadcrumb: {
        "@id":
          `${pageUrl}#breadcrumb`,
      },
    },


    {
      "@type":
        "FAQPage",

      "@id":
        `${pageUrl}#faq`,

      mainEntity: [
        {
          "@type":
            "Question",

          name:
            "How many players is BOMBANANA for?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "BOMBANANA is built around three-player co-op, with Blind, Deaf, and Mute splitting the bomb, communication, and manual information between them.",
          },
        },


        {
          "@type":
            "Question",

          name:
            "How many Campaign levels are there in BOMBANANA?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "The full-release BOMBANANA Campaign has 30 levels. The Levels & Walkthrough guide covers the detailed progression, module introductions, timers, and late-game structure.",
          },
        },


        {
          "@type":
            "Question",

          name:
            "Is there a BOMBANANA solver?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Yes. The current BOMBANANA Module Solver handles Cable or Wire, Direction, and Calculator.",
          },
        },


        {
          "@type":
            "Question",

          name:
            "Why can we know the correct answer and still fail a BOMBANANA module?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "The manual answer is not always the final instruction Blind needs. The team still has to move that answer through the three roles without losing position, perspective, stage, or sequence information.",
          },
        },


        {
          "@type":
            "Question",

          name:
            "Should I memorize the whole BOMBANANA manual before playing?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "No. Learn what information each module needs, keep the callouts consistent, and use the manual or solver when a specific panel becomes the bottleneck.",
          },
        },


        {
          "@type":
            "Question",

          name:
            "What should I do if the same BOMBANANA module keeps ending our run?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Stop replaying the level unchanged. Identify whether the failure is the module rule, the physical input, or the role relay, fix that specific problem, and then return to the Campaign.",
          },
        },
      ],
    },
  ],
};


export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                jsonLd
              ),
          }}
        />

        <GuideArticlePage
          title="BOMBANANA Guide: Modules, Roles, Levels & What to Fix Next"
          description="Start with the problem that is actually ending the run. Use the solver for a known module state, or jump to the guide that owns the rule, role, progression, or completion problem."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="BOMBANANA"
          heading="Looking for another co-op game after BOMBANANA?"
          description="Use the quick recommender to find another game that fits your platform, group size, and current mood, or build a broader Gaming DNA profile from games you already love."
        />
      </main>

      <Footer />
    </>
  );
}