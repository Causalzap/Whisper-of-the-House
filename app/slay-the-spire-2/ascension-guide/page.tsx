
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
  "Climb Slay the Spire 2 from A1 to A10. Learn every Ascension modifier, A6 Inflation costs, Elite routes, HP management, and Act 3 double-boss strategy.";

const articleTitle =
  "Slay the Spire 2 Ascension: How to Climb A1–A10";

const articleDescription =
  "Climb from A1 to A10 by adapting to stacked difficulty modifiers. Manage early Elite routes, reduced Ancient healing, less Gold, expensive card removal, tougher enemies, and the two Act 3 bosses.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-ascension-three-elites-too-greedy.webp`,
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
    label: "A4–A7: Potions, Bane, Inflation & Scarcity",
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
    href: "/slay-the-spire-2/blitz",
    label: "Slay the Spire 2 Blitz Mode Guide",
  },
  {
    href: "/slay-the-spire-2/dread",
    label: "Slay the Spire 2 Dread Mode Guide",
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
      "Understand how A1–A10 changes Elite routes, Ancient healing, Gold, potions, card removal, and the two Act 3 boss fights.",

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
      "Climb A1–A10 with better Elite decisions, HP and Gold management, A6 Inflation planning, and preparation for two Act 3 bosses.",

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
        "Climb Slay the Spire 2 from Ascension 1 to Ascension 10. Learn how Elite encounters, reduced Ancient healing, Gold penalties, smaller potion capacity, Ascender's Bane, A6 Inflation, Scarcity, stronger enemies, and the two Act 3 bosses affect your route, card choices, and survival.",

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
          name: "Inflation",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Home"
          gameHref="/"
          updatedAt="November 16, 2026"
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
