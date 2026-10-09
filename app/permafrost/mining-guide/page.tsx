import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostMiningContent from "@/data/permafrost/mining-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/mining-guide`;

const metadataTitle =
  "Permafrost Mining Guide: Copper, Coal, Flint & Wire";

const metadataDescription =
  "Find Copper, Flint, and Coal in Permafrost, repair the bridge near New Home, upgrade your pickaxe, make Copper Ingots, and craft Wire for the radio.";

const articleDescription =
  "Find early Copper, Flint, and Coal deposits, repair the road bridge, choose the correct pickaxe, build the Stone Furnace, and turn Copper into Ingots and Wire.";

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
    id: "copper-location",
    label: "Copper Locations & Bridge",
  },
  {
    id: "flint-location",
    label: "Flint & Flint Pickaxe",
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
    id: "mining-problems",
    label: "Mining & Crafting Problems",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "New Home & Radio Walkthrough",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Zones & Portable Heat",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Starting Skills & Specializations",
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
        headline:
          "Permafrost Mining Guide: Copper, Coal, Flint & Wire",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
        dateModified: "2026-10-09",
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
          title="Permafrost Mining Guide: Copper, Coal, Flint & Wire"
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/permafrost"
          breadcrumbBaseLabel="Permafrost"
          updatedAt="October 9, 2026"
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