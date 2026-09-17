import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethSanctumContent from "@/data/dimraeth/sanctum.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/sanctum`;

const metadataTitle =
  "Dimraeth Sanctum Guide: Workbench, Storage & Pinewood Planks";

const metadataDescription =
  "Build your Dimraeth Sanctum in the right order: get Pinewood Planks, place the Workbench and storage, then add useful facilities and production.";

const articleDescription =
  "A practical Dimraeth Sanctum guide covering how to get the first Pinewood Planks, build the Workbench, add Pinewood Chest storage, use the Water Well and crafting stations, recruit NPCs, unlock the Facility Center, assign followers, produce recurring resources, handle Home Uplift, and decide when to return during progression.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-workshop-stations.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-water-well.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-first-npc-recruit.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-facility-center.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "what-to-build-first",
    label: "What to build first",
  },
  {
    id: "pinewood-planks",
    label: "Pinewood Planks & Workbench",
  },
  {
    id: "storage",
    label: "Pinewood Chest & storage",
  },
  {
    id: "water-well",
    label: "Water Well",
  },
  {
    id: "crafting-stations",
    label: "Crafting stations",
  },
  {
    id: "recruit-npcs",
    label: "Recruit NPCs",
  },
  {
    id: "facility-center",
    label: "Facility Center",
  },
  {
    id: "followers",
    label: "Assign followers",
  },
  {
    id: "passive-resources",
    label: "Passive production",
  },
  {
    id: "home-uplift",
    label: "Does Home Uplift block progress?",
  },
  {
    id: "when-to-return",
    label: "When to return",
  },
  {
    id: "multiplayer-sanctum",
    label: "Sanctum in co-op",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/achievements",
    label: "Dimraeth Achievements",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets & Companions",
  },
  {
    href: "/dimraeth/co-op-progression",
    label: "Dimraeth Co-op Progression",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
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
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Dimraeth Workbench requiring Pinewood Planks in the Sanctum",
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
          name: "Dimraeth",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sanctum Guide",
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
        "Dimraeth Sanctum Guide: Workbench, Storage, Pinewood Planks and Facilities",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-17",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Sanctum",
        },
        {
          "@type": "Thing",
          name: "Workbench",
        },
        {
          "@type": "Thing",
          name: "Pinewood Planks",
        },
        {
          "@type": "Thing",
          name: "Pinewood Chest",
        },
        {
          "@type": "Thing",
          name: "Storage",
        },
        {
          "@type": "Thing",
          name: "Water Well",
        },
        {
          "@type": "Thing",
          name: "Crafting Stations",
        },
        {
          "@type": "Thing",
          name: "Facility Center",
        },
        {
          "@type": "Thing",
          name: "Followers",
        },
        {
          "@type": "Thing",
          name: "NPC Recruitment",
        },
        {
          "@type": "Thing",
          name: "Home Uplift",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="Dimraeth Sanctum: What to Build First, Workbench & Storage"
          description="Get the first Pinewood Planks, build the Workbench and storage without wasting early materials, then add the facilities, followers, and production that actually save time."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethSanctumContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}