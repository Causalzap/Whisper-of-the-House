
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FarmingGuideContent from "@/data/nivalis-nights/farming-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/farming-guide`;

const metadataTitle =
  "Nivalis Nights Farming Guide: Seeds, Crops & Greenhouses";

const metadataDescription =
  "Unlock farming with Clen, grow onions and potatoes, choose farming modules, reach Level 4, improve crop yields, and expand your greenhouse in Nivalis Nights.";

const articleTitle =
  "Nivalis Nights Farming Guide: How to Grow Crops & Expand";

const articleDescription =
  "Find Clen at the Docks and start growing onions in Thaddius's greenhouse. Follow the potato-growing objective, buy seeds, choose compatible farming modules, unlock environmental controls at Farming Level 4, improve crop yields, and decide when Greenhouse 3B or another property is worth renting.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-clen-onion-seeds.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-first-greenhouse-root-module.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-farming-modules.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-farming-level-4-conditions.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-crop-level-3-yield-bonus.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-greenhouse-3b-rental.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-first-greenhouse-root-module.webp`;

const toc = [
  {
    id: "unlock-farming",
    label: "Find Clen & Unlock Farming",
  },
  {
    id: "first-greenhouse",
    label: "Plant Onions in the First Greenhouse",
  },
  {
    id: "harvest-and-replant",
    label: "Harvest Onions & Grow Potatoes",
  },
  {
    id: "buy-seeds",
    label: "Where to Buy Seeds",
  },
  {
    id: "farming-modules",
    label: "Farming Modules & Crop Types",
  },
  {
    id: "environment-controls",
    label: "Level 4 Environmental Controls",
  },
  {
    id: "crop-levels",
    label: "Crop Levels & Yield Bonuses",
  },
  {
    id: "what-to-grow-first",
    label: "Best Crops to Grow First",
  },
  {
    id: "greenhouse-3b",
    label: "Greenhouse 3B & Expansion",
  },
  {
    id: "farming-priority",
    label: "What to Do After the First Harvest",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/business-guide",
    label: "Ramen Noir Business & Profit Guide",
  },
  {
    href: "/nivalis-nights/manager",
    label: "Nivalis Nights Manager Guide",
  },
  {
    href: "/nivalis-nights/beginner-guide",
    label: "Nivalis Nights Beginner Guide",
  },
  {
    href: "/nivalis-nights/achievements",
    label: "Nivalis Nights Achievement Tracker",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Thaddius's starter greenhouse with a Root Farming Module for growing onions in Nivalis Nights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Nivalis Nights",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Farming Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-10-08",
      inLanguage: "en",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Whisper of the House",
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function NivalisNightsFarmingGuidePage() {
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
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FarmingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
