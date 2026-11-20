
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlacksmithMasterWorkshopLayoutContent from "@/data/blacksmith-master/workshop-layout.mdx";

// -----------------------------------------------------------------------------
// Page URLs
// -----------------------------------------------------------------------------

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/blacksmith-master`;
const pageUrl = `${hubUrl}/workshop-layout`;

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

const metadataTitle =
  "Blacksmith Master Workshop Layout: Fix Production Bottlenecks";

const metadataDescription =
  "Fix Blacksmith Master Furnace queues, Ore and Ingot shortages, Assistant assignments, empty Store Racks, and production delays across multiple floors.";

const articleTitle =
  "Blacksmith Master Workshop Layout: How Do You Fix Production Bottlenecks?";

const articleDescription =
  "Find why Blacksmiths stop crafting, keep Ore and Ingots moving, assign Assistants, restock Store Racks, and organize a multi-floor workshop.";

const imageUrls = [
  `${siteUrl}/images/blacksmith-master/blacksmith-master-second-furnace-bottleneck.webp`,
  `${siteUrl}/images/blacksmith-master/blacksmith-master-copper-ore-restock.webp`,
];

const heroImage = imageUrls[0];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: heroImage,
        width: 1596,
        height: 1034,
        alt: "Blacksmith Master workshop production bottleneck with workers and crafting equipment",
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

// -----------------------------------------------------------------------------
// Table of Contents
// -----------------------------------------------------------------------------

const toc = [
  {
    id: "production-chain",
    label: "How the Production Chain Works",
  },
  {
    id: "starting-layout",
    label: "Best Early Workshop Layout",
  },
  {
    id: "ore-ingots",
    label: "Fix Ore & Ingot Shortages",
  },
  {
    id: "furnace-smelter",
    label: "Furnace & Smelter Upgrades",
  },
  {
    id: "assistant-jobs",
    label: "Assistant & Blacksmith Assignments",
  },
  {
    id: "complex-crafting",
    label: "Complex Crafting Layout",
  },
  {
    id: "rack-restocking",
    label: "Fix Empty Store Racks",
  },
  {
    id: "multi-floor-layout",
    label: "Multi-Floor Workshop Layout",
  },
  {
    id: "bottleneck-checklist",
    label: "Production Bottleneck Checklist",
  },
  {
    id: "next-steps",
    label: "What to Upgrade Next",
  },
];

// -----------------------------------------------------------------------------
// Related Guides
// -----------------------------------------------------------------------------

const relatedLinks = [
  {
    href: "/blacksmith-master",
    label: "Blacksmith Master Guide & Walkthrough",
  },
  {
    href: "/blacksmith-master/mastery-tree",
    label: "Mastery Tree & Best Unlock Order",
  },
  {
    href: "/blacksmith-master/master-workers",
    label: "Master Workers & Siege Machines",
  },
  {
    href: "/blacksmith-master/achievements",
    label: "All 72 Achievements & Checklist",
  },
];

// -----------------------------------------------------------------------------
// Structured Data
// -----------------------------------------------------------------------------

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
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
          name: "Blacksmith Master",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Workshop Layout",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      dateModified: "2026-11-20",
      image: imageUrls,
    },
  ],
};

// -----------------------------------------------------------------------------
// Page Component
// -----------------------------------------------------------------------------

export default function BlacksmithMasterWorkshopLayoutPage() {
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
          gameTitle="Blacksmith Master"
          gameHref="/blacksmith-master"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BlacksmithMasterWorkshopLayoutContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
