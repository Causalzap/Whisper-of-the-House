
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ForgedResolveContent from "@/data/crimson-desert/forged-resolve.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const dlcPath = "/crimson-desert/charting-the-unknown";
const pagePath = "/crimson-desert/forged-resolve";
const pageUrl = `${siteUrl}${pagePath}`;

const articleTitle =
  "How Do You Complete Forged Resolve in Crimson Desert?";

const metadataDescription =
  "Complete all 10 Forged Resolve quests in Crimson Desert. Solve Broken Device and Fractured Door, find Marni's secret workshop, and beat Stoneback Crab.";

const articleDescription =
  "Follow Oongka's 10-quest journey from Pailune to Scholastone, solve both mechanical puzzles, find Marni's hidden workshop, and finish Unidentified Attack.";


  const imageUrls = [
    `${siteUrl}/images/crimson-desert/crimson-desert-charting-the-unknown-story-questlines.webp`,
    `${siteUrl}/images/crimson-desert/crimson-desert-forged-resolve-broken-device-panel.webp`,
    `${siteUrl}/images/crimson-desert/crimson-desert-forged-resolve-fractured-door-complete.webp`,
    `${siteUrl}/images/crimson-desert/crimson-desert-forged-resolve-secret-bookshelf-plant.webp`,
    `${siteUrl}/images/crimson-desert/crimson-desert-forged-resolve-marni-hidden-workshop.webp`,
    `${siteUrl}/images/crimson-desert/crimson-desert-forged-resolve-scrap-metal-queen-stoneback-crab.webp`,
    `${siteUrl}/images/crimson-desert/crimson-desert-forged-resolve-unidentified-attack-complete.webp`,
  ];
  

export const metadata: Metadata = {
  title: articleTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: articleTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: articleTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "how-to-start",
    label: "How to Start Forged Resolve",
  },
  {
    id: "quest-order",
    label: "All 10 Quests in Order",
  },
  {
    id: "a-new-path",
    label: "A New Path",
  },
  {
    id: "to-scholastone",
    label: "To Scholastone",
  },
  {
    id: "unfamiliar-workshop",
    label: "Broken Device Solution",
  },
  {
    id: "fractured-door",
    label: "Fractured Door: 15 Moves",
  },
  {
    id: "fateful-encounter",
    label: "Marni's Secret Room",
  },
  {
    id: "scattered-pieces",
    label: "The Scattered Pieces",
  },
  {
    id: "twisted-fate",
    label: "Goyen Encounter",
  },
  {
    id: "unidentified-attack",
    label: "Stoneback Crab & Harkan",
  },
  {
    id: "complete-forged-resolve",
    label: "Confirm Quest Completion",
  },
  {
    id: "forged-resolve-rewards",
    label: "Quest Rewards",
  },
];

const relatedLinks = [
  {
    label: "Charting the Unknown DLC",
    href: dlcPath,
  },
  {
    label: "Beyond the Margins Walkthrough",
    href: "/crimson-desert/beyond-the-margins",
  },
  {
    label: "From the Ashes Walkthrough",
    href: "/crimson-desert/from-the-ashes",
  },
];

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
          name: "Crimson Desert",
          item: `${siteUrl}/crimson-desert`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charting the Unknown",
          item: `${siteUrl}${dlcPath}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Forged Resolve",
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
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
        },
        {
          "@type": "Thing",
          name: "Charting the Unknown",
        },
        {
          "@type": "Thing",
          name: "Forged Resolve",
        },
        {
          "@type": "Thing",
          name: "Broken Device",
        },
        {
          "@type": "Thing",
          name: "Fractured Door",
        },
        {
          "@type": "Thing",
          name: "Marni's Manor",
        },
        {
          "@type": "Thing",
          name: "Stoneback Crab",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <GuideArticlePage
          title={articleTitle}
          description="Complete Oongka's ten quests, repair the power regulator, solve Fractured Door, discover Marni's hidden workshop, and defeat the final machine."
          gameTitle="Crimson Desert: Charting the Unknown"
          gameHref={dlcPath}
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ForgedResolveContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
