import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsStarterBaseContent from "@/data/runescape-dragonwilds/starter-base.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/starter-base`;

const metadataTitle =
  "RuneScape Dragonwilds Best Base Locations & Starter Base Layout";

const metadataDescription =
  "Find good RuneScape Dragonwilds base locations, choose a starter spot, plan storage and workstations, and know when to expand or move.";

const articleDescription =
  "Compare useful base locations, choose a strong starter spot, plan storage, farming and workstations, and decide when expanding is better than moving.";

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-temple-woods-lake.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-outdoor-smelting.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-farm-plots.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-storage-16-chests.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-workstation-layout.webp`,
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Starter base location beside the Temple Woods lake in RuneScape Dragonwilds",
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
          name: "RuneScape: Dragonwilds Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Base Locations & Starter Base",
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
        "RuneScape Dragonwilds Best Base Locations & Starter Base Layout",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-17",
      dateModified: "2026-09-22",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds base locations",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds starter base",
        },
        {
          "@type": "Thing",
          name: "Temple Woods",
        },
        {
          "@type": "Thing",
          name: "Bramblemead Valley",
        },
        {
          "@type": "Thing",
          name: "Fellhollow",
        },
        {
          "@type": "Thing",
          name: "Umbral Sands",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds base building",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds storage",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds farming",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

const toc = [
  {
    id: "when-to-build",
    label: "When to replace the first shelter",
  },
  {
    id: "location-factors",
    label: "What makes a good base location",
  },
  {
    id: "best-starter-location",
    label: "Best starter base location",
  },
  {
    id: "other-base-locations",
    label: "Other good base locations",
  },
  {
    id: "base-size",
    label: "Starter base size",
  },
  {
    id: "building-materials",
    label: "Wood vs oak",
  },
  {
    id: "indoor-outdoor",
    label: "Indoor vs outdoor stations",
  },
  {
    id: "storage",
    label: "Storage layout",
  },
  {
    id: "campfires-and-farming",
    label: "Campfires and farming",
  },
  {
    id: "workstation-layout",
    label: "Workstation layout",
  },
  {
    id: "roof",
    label: "Eye of Oculus and roofing",
  },
  {
    id: "lodestone-space",
    label: "Lodestone placement",
  },
  {
    id: "when-to-expand",
    label: "Expand or move",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/progression",
    label: "RuneScape: Dragonwilds Progression Guide",
  },
  {
    href: "/runescape-dragonwilds/fast-travel",
    label: "Fast Travel, Lodestones and Vault Cores",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer Quest Walkthrough",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="RuneScape Dragonwilds Best Base Locations & Starter Base Layout"
          description="Choose a strong starter base location, compare later places to build, organize storage and workstations, and know when expanding is better than moving."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsStarterBaseContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}