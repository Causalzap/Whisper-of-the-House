
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadContent from "@/data/slay-the-spire-2/dread.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/dread`;

const metadataTitle =
  "Slay the Spire 2 Dread Mode Guide: All Boss Dominions";

const metadataDescription =
  "Unlock Dread Mode in Slay the Spire 2, learn all 12 Boss Dominions, handle extra Ascender's Banes, and survive stronger bosses.";

const articleTitle =
  "Slay the Spire 2 Dread Mode: How Do You Unlock It and Survive Boss Dominions?";

const articleDescription =
  "Reach Ascension 10 with all six characters to unlock Dread. Learn how Boss Dominions change encounters, why extra Ascender's Banes disrupt your deck, and how to handle Ceremonial Beast, Kaiser Crab, Knowledge Demon, and stronger bosses.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-dread-mode-rules.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-dread-ceremonial-beast-ritual.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-dread-kaiser-crab-plating.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-dread-knowledge-demon-choice.webp`,
];

const toc = [
  {
    id: "unlock-dread",
    label: "How to unlock Dread Mode",
  },
  {
    id: "dread-rules",
    label: "Dread vs normal Ascension 10",
  },
  {
    id: "all-boss-dominions",
    label: "All 12 Boss Dominions",
  },
  {
    id: "ceremonial-beast-ironclad",
    label: "Ceremonial Beast: Ritual",
  },
  {
    id: "kaiser-crab-plating",
    label: "Kaiser Crab: Plating",
  },
  {
    id: "knowledge-demon-dominion",
    label: "Knowledge Demon: Sloth or Amnesia",
  },
  {
    id: "curses-and-card-access",
    label: "Managing extra Ascender's Banes",
  },
  {
    id: "dread-bosses",
    label: "Surviving stronger Dread bosses",
  },
  {
    id: "fool-dread",
    label: "The Fool's successful Dread run",
  },
  {
    id: "dread-route-decisions",
    label: "When to avoid an Elite",
  },
  {
    id: "dread-troubleshooting",
    label: "Why Dread runs fail",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/blitz",
    label: "Slay the Spire 2 Blitz Mode Guide",
  },
  {
    href: "/slay-the-spire-2/the-fool",
    label: "Slay the Spire 2 The Fool Guide",
  },
  {
    href: "/slay-the-spire-2/aeonglass",
    label: "Slay the Spire 2 Aeonglass Boss Guide",
  },
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
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
      "Unlock Dread after reaching A10 with all six characters. Learn Boss Dominions, extra Ascender's Banes, stronger bosses, and safer route decisions.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Dread Mode rules showing Ascension modifiers, Boss Dominions, extra Banes, and stronger bosses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Learn all 12 Dread Boss Dominions, deal with Ritual and Plating, choose Sloth or Amnesia, and survive the A10 challenge.",
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
          name: "Slay the Spire 2 Dread Mode Guide",
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
        "Learn how to unlock Dread Mode in Slay the Spire 2 by reaching Ascension 10 with all six characters. Understand how all ten Ascension modifiers combine with extra Ascender's Banes, stronger bosses, and Boss Dominions that affect normal enemies and Elites. Compare all 12 Dominions, survive Ceremonial Beast's Ritual, overcome Kaiser Crab's Plating, choose between Sloth and Amnesia under Knowledge Demon, and prepare for difficult encounters before taking optional Elite fights.",

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
          name: "Dread Mode",
        },
        {
          "@type": "Thing",
          name: "Dread Boss Dominions",
        },
      ],

      mentions: [
        { "@type": "Thing", name: "Ascension 10" },
        { "@type": "Thing", name: "Boss Dominion" },
        { "@type": "Thing", name: "Ascender's Bane" },
        { "@type": "Thing", name: "Ceremonial Beast" },
        { "@type": "Thing", name: "Ritual" },
        { "@type": "Thing", name: "Kaiser Crab" },
        { "@type": "Thing", name: "Plating" },
        { "@type": "Thing", name: "Knowledge Demon" },
        { "@type": "Thing", name: "Sloth" },
        { "@type": "Thing", name: "Amnesia" },
        { "@type": "Thing", name: "The Fool" },
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
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="November 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DreadContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
