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
  "Play Slay the Spire 2 co-op with better team roles, focus fire, shared Block, card passing, relic choices, routes, and multiplayer Ascension decisions.";

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
    label: "Play one fight, not four turns",
  },
  {
    id: "team-roles",
    label: "How team roles should form",
  },
  {
    id: "team-block",
    label: "Team-wide Block",
  },
  {
    id: "shared-debuffs",
    label: "Why shared debuffs are stronger",
  },
  {
    id: "focus-fire",
    label: "How to call focus fire",
  },
  {
    id: "passing-cards",
    label: "Who should receive passed cards",
  },
  {
    id: "do-not-pollute-all-four-decks",
    label: "Avoid polluting teammates' decks",
  },
  {
    id: "shared-rewards",
    label: "Who should take shared rewards",
  },
  {
    id: "team-shop-decisions",
    label: "Plan shops as a team",
  },
  {
    id: "multiplayer-pathing",
    label: "Choose co-op routes",
  },
  {
    id: "backup-plans",
    label: "Why every role needs a backup",
  },
  {
    id: "co-op-ascension",
    label: "How co-op Ascension works",
  },
  {
    id: "co-op-run-check",
    label: "What to call before a hard fight",
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
      "Coordinate four decks around one fight with team Block, focus fire, shared debuffs, passed cards, reward allocation, route decisions, and co-op Ascension.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[1],
        alt: "Slay the Spire 2 multiplayer card giving 34 Block to all players",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Build useful team roles, coordinate targets and Block, allocate shared rewards, and understand multiplayer Ascension in Slay the Spire 2.",

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
          name: "Slay the Spire 2 Multiplayer Guide",
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
        "Slay the Spire 2 Co-op Guide: Teams, Roles and Multiplayer Ascension",

      description:
        "A player-focused Slay the Spire 2 multiplayer guide covering how four decks coordinate around the same combat, when a player should specialize in team-wide Block, why shared enemy debuffs gain value in co-op, how to call focus fire before damage is spent, when cards should move between allies, how party-wide card effects can pollute multiple decks, how to allocate shared relics and rewards, when the team should route toward shops or campfires, why specialized roles still need backup plans, and how cooperative Ascension progression differs from solo play.",

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
          name: "Slay the Spire 2 multiplayer",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 co-op",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Team Block",
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
          title="Slay the Spire 2 Co-op Guide: Teams, Roles & Ascension"
          description="Co-op gets much easier once four decks stop solving the same problem twice. I call the target first, work out who is covering incoming damage, pass shared resources to the deck that uses them best, and keep backup options when the team's specialist misses a key draw."
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="September 12, 2026"
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