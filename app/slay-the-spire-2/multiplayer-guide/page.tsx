
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MultiplayerGuideContent from "@/data/slay-the-spire-2/multiplayer-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/multiplayer-guide`;

const metadataTitle =
  "Slay the Spire 2 Co-op Guide – Teams, Roles & Ascension";

const metadataDescription =
  "Play Slay the Spire 2 co-op with coordinated focus fire, team Block, shared debuffs, card passing, relic allocation, safer routes, and multiplayer Ascension.";

const articleTitle =
  "Slay the Spire 2 Co-op Guide: Teams, Roles & Ascension";

const articleDescription =
  "Coordinate up to four players by choosing targets, sharing defensive responsibilities, passing useful cards, and assigning rewards to the decks that benefit most. Learn how to handle weak draws, shared routes, and separate co-op Ascension progression.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-multiplayer-team-block-role.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-multiplayer-rally-34-block.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-multiplayer-pass-card-ally.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-multiplayer-ice-cream-team-choice.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-multiplayer-campfire-route.webp`,
];

const toc = [
  {
    id: "one-fight-four-hands",
    label: "Which enemy should the team kill first?",
  },
  {
    id: "team-roles",
    label: "Choosing team roles",
  },
  {
    id: "team-block",
    label: "How team-wide Block works",
  },
  {
    id: "shared-debuffs",
    label: "Using shared debuffs",
  },
  {
    id: "focus-fire",
    label: "Calling focus fire",
  },
  {
    id: "passing-cards",
    label: "Passing cards between players",
  },
  {
    id: "do-not-pollute-all-four-decks",
    label: "Avoiding unwanted cards",
  },
  {
    id: "shared-rewards",
    label: "Dividing shared relics and rewards",
  },
  {
    id: "team-shop-decisions",
    label: "Planning Merchant visits",
  },
  {
    id: "multiplayer-pathing",
    label: "Choosing safer co-op routes",
  },
  {
    id: "backup-plans",
    label: "Preparing for missed draws",
  },
  {
    id: "co-op-ascension",
    label: "Co-op Ascension progression",
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
      "Coordinate attacks, protect teammates with shared Block, pass cards, distribute relics, and prepare for tougher fights together in Slay the Spire 2 co-op.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[1],
        alt: "Slay the Spire 2 multiplayer combat with a card providing 34 Block to every player",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Learn focus fire, team-wide Block, card passing, shared rewards, backup defenses, and co-op Ascension in Slay the Spire 2.",

    images: [imageUrls[1]],
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
          name: "Slay the Spire 2 Co-op Guide",
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
        "Learn how to play Slay the Spire 2 co-op with up to four players. Coordinate enemy targeting and focus fire, use team-wide Block and shared debuffs, pass cards between allies, avoid adding unwanted cards to teammates' decks, distribute shared relics, plan Merchant visits and campfire routes, prepare backup defenses, and understand how multiplayer Ascension progression differs from solo play.",

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
          name: "Slay the Spire 2 multiplayer",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 cooperative play",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 co-op Ascension",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Team-wide Block",
        },
        {
          "@type": "Thing",
          name: "Focus fire",
        },
        {
          "@type": "Thing",
          name: "Shared debuffs",
        },
        {
          "@type": "Thing",
          name: "Card passing",
        },
        {
          "@type": "Thing",
          name: "Shared relics",
        },
        {
          "@type": "Thing",
          name: "Multiplayer routes",
        },
        {
          "@type": "Thing",
          name: "Co-op Ascension",
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
          <MultiplayerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
