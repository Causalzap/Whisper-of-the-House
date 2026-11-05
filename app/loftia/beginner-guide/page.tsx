import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LoftiaBeginnerGuideContent from "@/data/loftia/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/loftia`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Loftia Beginner Guide: First Quests, Glider & Upgrades";

const metadataDescription =
  "Start Loftia with Milo and Hazel, unlock your house, Garden Beds, Refining Station, and Glider, then take the Airtram to Hanging Gardens.";

const articleTitle =
  "How Do You Get Started and Progress in Loftia?";

const articleDescription =
  "Complete Pebble and Milo’s opening tasks, set up your island, grow crops for Hazel, buy your first Garden Bed permit, refine Glider materials, and travel to Hanging Gardens.";

const imageUrls = [
  `${siteUrl}/images/loftia/loftia-milo-first-salvage-quest.webp`,
  `${siteUrl}/images/loftia/loftia-refining-station-empty-battery.webp`,
  `${siteUrl}/images/loftia/loftia-amani-garden-bed-permit.webp`,
  `${siteUrl}/images/loftia/loftia-refining-station-first-materials.webp`,
  `${siteUrl}/images/loftia/loftia-glider-crafting-requirements.webp`,
  `${siteUrl}/images/loftia/loftia-hanging-gardens-airtram.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "first-quests",
    label: "First Quests",
  },
  {
    id: "first-home",
    label: "House & Crafting",
  },
  {
    id: "battery-energy",
    label: "Battery & Energy",
  },
  {
    id: "first-sprout",
    label: "The First Sprout",
  },
  {
    id: "garden-bed-permit",
    label: "Second Garden Bed",
  },
  {
    id: "permission-to-glide",
    label: "Unlock the Glider",
  },
  {
    id: "refining-station",
    label: "Refining Station",
  },
  {
    id: "glider-recipe",
    label: "Glider Recipe",
  },
  {
    id: "hanging-gardens",
    label: "Reach Hanging Gardens",
  },
  {
    id: "early-upgrades",
    label: "Early Upgrades",
  },
  {
    id: "stuck",
    label: "Common Progression Problems",
  },
];

const relatedLinks = [
  {
    href: "/loftia",
    label: "Loftia Guide",
  },
  {
    href: "/loftia/money-making",
    label: "Make Dew: Crops & Cooking",
  },
  {
    href: "/loftia/pets",
    label: "Pets: First Dog Rescue",
  },
  {
    href: "/loftia/research-and-tool-upgrades",
    label: "Research: Hammer & Pruners Lv.2",
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
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
    images: [
      {
        url: heroImage,
        alt: "Milo explaining the first salvage materials needed in Loftia",
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
          name: "Loftia",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-05",
      dateModified: "2026-11-05",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function LoftiaBeginnerGuidePage() {
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
          description={articleDescription}
          gameTitle="Loftia"
          gameHref="/loftia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LoftiaBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
