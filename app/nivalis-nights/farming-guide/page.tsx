import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FarmingGuideContent from "@/data/nivalis-nights/farming-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/farming-guide`;

const metadataTitle =
  "Nivalis Nights Farming Guide: Greenhouse, Seeds, Modules & Crops";

const metadataDescription =
  "Unlock farming in Nivalis Nights, find Clen and the starter greenhouse, grow onions, buy seeds and modules, reach Farming Level 4, improve crop yields, and decide when Greenhouse 3B is worth renting.";

const articleDescription =
  "A practical Nivalis Nights farming guide covering how to unlock the starter greenhouse, plant and harvest onions, buy new seeds, match crops to farming modules, unlock environmental controls at Farming Level 4, improve crop yields, choose useful crops, and decide when another greenhouse is worth the cost.";

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
    label: "Talk to Clen at the Docks to Unlock Farming",
  },
  {
    id: "first-greenhouse",
    label: "Use the Starter Greenhouse First",
  },
  {
    id: "harvest-and-replant",
    label: "Harvest, Replant, and Keep Modules Working",
  },
  {
    id: "buy-seeds",
    label: "Buy New Seeds Only When You Can Grow Them",
  },
  {
    id: "farming-modules",
    label: "Match Each Crop to the Correct Farming Module",
  },
  {
    id: "environment-controls",
    label: "Farming Level 4 Environmental Controls",
  },
  {
    id: "crop-levels",
    label: "Crop Levels and Yield Bonuses",
  },
  {
    id: "what-to-grow-first",
    label: "What Should You Grow First?",
  },
  {
    id: "greenhouse-3b",
    label: "When Is Greenhouse 3B Worth Renting?",
  },
  {
    id: "farming-priority",
    label: "What to Prioritize After the First Harvest",
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
        alt: "Nivalis Nights starter greenhouse with the Root Farming Module used to grow onions",
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
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-10-01",
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
          title="Nivalis Nights Farming Guide: How to Unlock the Greenhouse & Grow Crops"
          description="Find Clen, start with the free greenhouse and Onion Seeds, match crops to the right modules, unlock environmental controls, improve yields, and expand only when the starter space becomes the bottleneck."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
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