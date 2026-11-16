
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlitzContent from "@/data/slay-the-spire-2/blitz.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/blitz`;

const metadataTitle =
  "Slay the Spire 2 Blitz Mode Guide: Unlocks & Strategies";

const metadataDescription =
  "Learn how to unlock and beat Slay the Spire 2 Blitz Mode. Choose three starting cards, use free Merchant rewards, and climb Blitz Ascension.";

const articleTitle =
  "Slay the Spire 2 Blitz Mode: How Do You Unlock It and Win?";

const articleDescription =
  "Blitz replaces the normal map and Gold economy with short Acts, three chosen starting cards, and limited free Merchant selections. Learn how to prepare for forced fights, finish the final boss, and climb its five Ascension levels.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-blitz-starting-three-cards.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-blitz-merchant-three-choices.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-blitz-defect-refract-aeonglass.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-blitz-fool-queen-failure.webp`,
];

const toc = [
  {
    id: "unlock-blitz",
    label: "How to unlock Blitz",
  },
  {
    id: "blitz-rules",
    label: "What changes in Blitz Mode",
  },
  {
    id: "starting-three-cards",
    label: "Choosing three starting cards",
  },
  {
    id: "blitz-merchant",
    label: "Using free Merchant selections",
  },
  {
    id: "best-blitz-strategies",
    label: "Strategies for each character",
  },
  {
    id: "fool-blitz-failure",
    label: "Why The Fool can lose Blitz",
  },
  {
    id: "later-acts",
    label: "Preparing for Elite and Boss fights",
  },
  {
    id: "blitz-ascension",
    label: "Blitz Ascension levels",
  },
  {
    id: "blitz-troubleshooting",
    label: "Why Blitz runs fail",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/the-fool",
    label: "Slay the Spire 2 The Fool Guide",
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
    href: "/slay-the-spire-2/dread",
    label: "Slay the Spire 2 Dread Mode Guide",
  },
  {
    href: "/slay-the-spire-2/aeonglass",
    label: "Slay the Spire 2 Aeonglass Boss Guide",
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
      "Pick three starting cards, survive Blitz's shortened encounters, choose free Merchant rewards, and prepare for the final boss without a normal map or Gold.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Blitz Mode allowing three cards to be added to the starting deck",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Unlock Blitz Mode, choose your starting cards, use Merchant rewards, and climb five Blitz Ascension levels.",
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
          name: "Slay the Spire 2 Blitz Mode Guide",
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
        "Learn how to unlock Blitz Mode in Slay the Spire 2 by completing an Ascension run. Choose three starting cards, survive short Acts without the normal map or Gold, and use three free Merchant selections to improve damage, defense, draw, or Energy. Prepare for forced Elite and Boss encounters, compare character strategies, avoid common mistakes with The Fool, and climb Blitz Mode's five Ascension levels.",

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
          name: "Blitz Mode",
        },
        {
          "@type": "Thing",
          name: "Blitz Ascension",
        },
      ],

      mentions: [
        { "@type": "Thing", name: "Starting card selection" },
        { "@type": "Thing", name: "Blitz Merchant" },
        { "@type": "Thing", name: "Free Merchant rewards" },
        { "@type": "Thing", name: "Blitz Ascension" },
        { "@type": "Thing", name: "The Fool" },
        { "@type": "Thing", name: "Defect" },
        { "@type": "Thing", name: "Refract" },
        { "@type": "Thing", name: "Aeonglass" },
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
          <BlitzContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
