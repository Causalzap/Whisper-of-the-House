import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AscensionGuideContent from "@/data/slay-the-spire-2/ascension-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/ascension-guide`;

const metadataTitle =
  "Slay the Spire 2 Ascension Guide – How to Climb A1–A10";

const metadataDescription =
  "Climb Slay the Spire 2 from A1 to A10 with route, HP, Gold, Rest, deck consistency, Elite risk, and double-boss decisions that actually matter.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-ascension-three-elites-too-greedy.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-ascension-glitterstream-upgrade.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-ascension-a10-bad-card-rewards.webp`,
];

const toc = [
  {
    id: "how-ascension-gets-harder",
    label: "Why Ascension keeps getting harder",
  },
  {
    id: "unlock-ascension",
    label: "How to unlock Ascension",
  },
  {
    id: "a1-a3",
    label: "A1–A3: Route, HP & Gold",
  },
  {
    id: "a4-a7",
    label: "A4–A7: Less room to recover",
  },
  {
    id: "a8-a10",
    label: "A8–A10: Weak turns get punished",
  },
  {
    id: "elite-risk-changes",
    label: "When another Elite is not worth it",
  },
  {
    id: "why-high-ascension-runs-fail",
    label: "Why strong-looking runs fail",
  },
  {
    id: "when-to-climb",
    label: "When to move up",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
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
      "Learn what changes from A1 through A10, how stacked modifiers alter route and resource decisions, and what makes a deck reliable enough to keep climbing.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Ascension map with several Elite routes available",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Understand A1–A10 as stacked pressure on routing, HP, Gold, Rest Sites, deck consistency, Elite risk, and the Act 3 double boss.",

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
          name: "Slay the Spire 2 Ascension Guide",
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
        "Slay the Spire 2 Ascension Guide: How to Climb from A1 to A10",

      description:
        "A player-focused Slay the Spire 2 Ascension guide covering how the difficulty ladder unlocks, how the A1 through A10 modifiers stack, and how route planning, HP management, Gold, potion capacity, Ascender's Bane, fewer Rest Sites, Scarcity, tougher enemies, Elite risk, deck consistency, and the Act 3 double boss change real run decisions as the climb gets harder.",

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
          name: "Slay the Spire 2 Ascension",
        },
        {
          "@type": "Thing",
          name: "Ascension 1 through Ascension 10",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Swarming Elites",
        },
        {
          "@type": "Thing",
          name: "Weary Traveler",
        },
        {
          "@type": "Thing",
          name: "Poverty",
        },
        {
          "@type": "Thing",
          name: "Tight Belt",
        },
        {
          "@type": "Thing",
          name: "Ascender's Bane",
        },
        {
          "@type": "Thing",
          name: "Gloom",
        },
        {
          "@type": "Thing",
          name: "Scarcity",
        },
        {
          "@type": "Thing",
          name: "Double Boss",
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
          title="Slay the Spire 2 Ascension: How to Climb A1–A10"
          description="Ascension keeps stacking pressure onto the same run. I use A1–A3 to tighten route, HP, and Gold decisions, A4–A7 to remove inconsistency, and A8–A10 to make sure the deck still works when weak turns stop being forgiven."
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="September 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AscensionGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}