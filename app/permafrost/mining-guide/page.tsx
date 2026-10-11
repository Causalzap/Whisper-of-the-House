
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostMiningContent from "@/data/permafrost/mining-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/mining-guide`;

const metadataTitle =
  "Permafrost Mining Guide: Copper, Iron, Moonrock & Wire";

const metadataDescription =
  "Find Flint, Copper, Coal, Iron, and Moonrock in Permafrost. Upgrade pickaxes, make Wire and Ingots, and use the Stone Furnace and Professional Smelter.";

const articleDescription =
  "Find Flint, Copper, Coal, Iron, and Moonrock deposits, choose the right pickaxe, process ore into Ingots and Wire, and prepare Quality Metal for advanced equipment.";

const heroImage =
  "/images/permafrost/permafrost-copper-ingot-smelting.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-flint-boulder-bone-cave.webp`,
  `${siteUrl}/images/permafrost/permafrost-coal-boulder-tool-limit.webp`,
  `${siteUrl}/images/permafrost/permafrost-stone-furnace-requirements.webp`,
];

const toc = [
  {
    id: "flint-location",
    label: "Flint & Flint Pickaxe",
  },
  {
    id: "copper-location",
    label: "Copper Locations & Bridge",
  },
  {
    id: "pickaxe-upgrades",
    label: "Pickaxe Mining Requirements",
  },
  {
    id: "coal-location",
    label: "Coal Locations & Crafting",
  },
  {
    id: "stone-furnace",
    label: "Build the Stone Furnace",
  },
  {
    id: "copper-ingot",
    label: "Make Copper Ingots",
  },
  {
    id: "copper-ingots-and-wire",
    label: "Craft Wire From Copper",
  },
  {
    id: "iron-mining",
    label: "Iron & Advanced Pickaxes",
  },
  {
    id: "moonrock-smelting",
    label: "Moonrock & Quality Metal",
  },
  {
    id: "mining-problems",
    label: "Mining & Smelting Problems",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests & White Hell Preparation",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Zones & Portable Heat",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Starting Classes & Skill Progression",
  },
  {
    href: "/permafrost/achievements",
    label: "All 42 Achievements",
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
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function PermafrostMiningPage() {
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
            name: "Permafrost",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mining Guide",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
        dateModified: "2026-10-11",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
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
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PermafrostMiningContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
