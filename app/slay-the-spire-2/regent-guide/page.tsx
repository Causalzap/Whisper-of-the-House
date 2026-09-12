import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RegentGuideContent from "@/data/slay-the-spire-2/regent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/regent-guide`;

const metadataTitle =
  "Slay the Spire 2 Regent Guide – Stars, Routes & Winning Runs";

const metadataDescription =
  "Win more Regent runs in Slay the Spire 2 with better Stars, block, shop, removal, Rest, Elite route, and late-run card decisions.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-underdocks-route.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-orbit-card-pick.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-block-over-stars.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-rest-before-dangerous-fight.webp`,
];

const toc = [
  {
    id: "stars-are-not-the-plan",
    label: "Stars are a resource, not the plan",
  },
  {
    id: "act-one-route",
    label: "Plan Act 1 around the first hard fight",
  },
  {
    id: "fix-the-bad-turn",
    label: "Buy what fixes the bad turn",
  },
  {
    id: "stars-as-budget",
    label: "Treat Stars like a budget",
  },
  {
    id: "card-removal",
    label: "When removal improves the deck",
  },
  {
    id: "rest-or-upgrade",
    label: "Rest or upgrade?",
  },
  {
    id: "prepare-next-boss",
    label: "Prepare for the next boss",
  },
  {
    id: "stop-adding-cards",
    label: "Know when to stop adding cards",
  },
  {
    id: "act-checkpoints",
    label: "What each Act should prove",
  },
  {
    id: "why-regent-runs-fail",
    label: "Why Regent runs collapse",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
  },
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/necrobinder-guide",
    label: "Slay the Spire 2 Necrobinder Guide",
  },
  {
    href: "/slay-the-spire-2/multiplayer-guide",
    label: "Slay the Spire 2 Multiplayer Guide",
  },
  {
    href: "/slay-the-spire-2",
    label: "Slay the Spire 2 Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,

  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: metadataTitle,

    description:
      "Learn how to turn Regent's Stars into reliable runs by fixing weak turns, choosing safer routes, buying the right shop answers, and stopping once the deck already solves its fights.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Regent map with several Elite and Rest Site route options",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Use Stars as a resource, cover weak defensive turns, route around real combat checks, and build a more consistent Regent run in Slay the Spire 2.",

    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "BreadcrumbList",

      "@id": `${pageUrl}#breadcrumb`,

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
          name: "Slay the Spire 2 Guide",
          item: `${siteUrl}/slay-the-spire-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Slay the Spire 2 Regent Guide",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Article",

      "@id": `${pageUrl}#article`,

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },

      headline:
        "Slay the Spire 2 Regent Guide: Stars, Routes and Winning Runs",

      description:
        "A player-focused Slay the Spire 2 Regent guide covering how to use Stars as a resource rather than a build goal, how to plan Act 1 around the first dangerous fight, when an Underdocks Elite route is too greedy, how to choose defensive cards over redundant Star generation, what to buy when a shop can fix a weak turn, when card removal improves draw quality, how to decide between Rest and Smith before a dangerous encounter, when to prepare for the next boss instead of adding more scaling, and how to recognize when a finished Regent deck should stop taking unnecessary cards and risks.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-12",

      articleSection: "Slay the Spire 2 Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Slay the Spire 2",
        },
        {
          "@type": "Thing",
          name: "Regent",
        },
        {
          "@type": "Thing",
          name: "Regent strategy",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Stars",
        },
        {
          "@type": "Thing",
          name: "Forged Blade",
        },
        {
          "@type": "Thing",
          name: "Underdocks",
        },
        {
          "@type": "Thing",
          name: "Elite routing",
        },
        {
          "@type": "Thing",
          name: "Card removal",
        },
        {
          "@type": "Thing",
          name: "Rest Sites",
        },
        {
          "@type": "Thing",
          name: "Merchants",
        },
      ],

      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },

      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Slay the Spire 2 Regent: How to Win More Consistently"
          description="Regent becomes much more reliable when I stop treating Stars as the objective. I use them to support the turn the deck actually needs, pick up real Block when the route demands it, spend Gold on immediate weaknesses, and stop adding cards once the important fights are already covered."
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="September 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RegentGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}