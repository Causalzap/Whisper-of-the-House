
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/slay-the-spire-2/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/beginner-guide`;

const metadataTitle =
  "Slay the Spire 2 Beginner Guide – How to Get Your First Win";

const metadataDescription =
  "Get your first Slay the Spire 2 win with better Act 1 routes, card picks, Skip decisions, Merchant spending, Elite fights, potions, and Rest Site choices.";

const articleTitle =
  "Slay the Spire 2 Beginner Guide: How to Get Your First Win";

const articleDescription =
  "Learn how to survive Act 1, choose cards that solve immediate combat problems, avoid dangerous Elite routes, and spend HP, Gold, and potions effectively. Build a reliable deck without committing to a combination too early.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-map-branching-route.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-lethal-before-block.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-card-reward-skip.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-shop-remove-strike.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-rest-or-smith.webp`,
];

const toc = [
  {
    id: "first-win-plan",
    label: "Choosing an Act 1 route",
  },
  {
    id: "solve-the-next-fight",
    label: "Picking early card rewards",
  },
  {
    id: "check-lethal",
    label: "Checking lethal before Block",
  },
  {
    id: "skip-card-rewards",
    label: "When to Skip card rewards",
  },
  {
    id: "when-to-commit",
    label: "When to commit to a build",
  },
  {
    id: "shops",
    label: "Spending Gold at Merchants",
  },
  {
    id: "rest-or-smith",
    label: "Choosing Rest or Smith",
  },
  {
    id: "elite-readiness",
    label: "When to fight an Elite",
  },
  {
    id: "enemy-priority",
    label: "Choosing which enemy to kill",
  },
  {
    id: "potions",
    label: "When to use potions",
  },
  {
    id: "act-one-check",
    label: "Preparing to leave Act 1",
  },
  {
    id: "act-two-reset",
    label: "Adjusting your plan in Act 2",
  },
  {
    id: "after-first-win",
    label: "What to do after your first win",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/regent-guide",
    label: "Slay the Spire 2 Regent Guide",
  },
  {
    href: "/slay-the-spire-2/necrobinder-guide",
    label: "Slay the Spire 2 Necrobinder Guide",
  },
  {
    href: "/slay-the-spire-2/the-fool",
    label: "Slay the Spire 2 The Fool Guide",
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
      "Survive your first Slay the Spire 2 runs by choosing safer routes, judging card rewards, recognizing lethal attacks, and using Gold, potions, and Rest Sites effectively.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Act 1 map showing branching paths, Rest Sites, Elite encounters, and a Merchant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Learn Act 1 pathing, card rewards, Skip decisions, Elite preparation, Merchant spending, and Rest versus Smith for your first Slay the Spire 2 win.",

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
          name: "Slay the Spire 2 Beginner Guide",
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

      headline: articleTitle,

      description:
        "Learn how to get your first win in Slay the Spire 2. Choose Act 1 routes with safer branches, compare early card rewards, check lethal damage before spending Energy on Block, Skip unnecessary cards, spend Gold at Merchants, decide between Rest and Smith, prepare for Elite encounters, use potions, and adjust your deck when entering Act 2.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-11-16",

      articleSection: "Slay the Spire 2 Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Slay the Spire 2",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 beginner strategy",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 first win",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Act 1 pathing",
        },
        {
          "@type": "Thing",
          name: "Card rewards",
        },
        {
          "@type": "Thing",
          name: "Card Skip",
        },
        {
          "@type": "Thing",
          name: "Elite encounters",
        },
        {
          "@type": "Thing",
          name: "Merchants",
        },
        {
          "@type": "Thing",
          name: "Rest Sites",
        },
        {
          "@type": "Thing",
          name: "Card upgrades",
        },
        {
          "@type": "Thing",
          name: "Potions",
        },
        {
          "@type": "Thing",
          name: "Card removal",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Home"
          gameHref="/"
          updatedAt="November 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
