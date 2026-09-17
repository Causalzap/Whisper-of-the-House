import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsStarterBaseContent from "@/data/runescape-dragonwilds/starter-base.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/starter-base`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-temple-woods-lake.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-outdoor-smelting.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-farm-plots.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-storage-16-chests.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-starter-base-workstation-layout.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Starter Base – Best Location & Layout",
  description:
    "Build a practical Dragonwilds starter base with the right location, storage, farming, smelting, workstations, and room to expand.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Starter Base – Best Location & Layout",
    description:
      "Choose a useful starter base location and organize storage, farming, smelting, crafting stations, outdoor space, and later expansion.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        alt: "Completed starter base workstation layout in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Starter Base – Best Location & Layout",
    description:
      "Plan a long-term starter base with practical storage, farming, crafting, smelting, and expansion space.",
    images: [imageUrls[4]],
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
          name: "Starter Base",
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
        "RuneScape Dragonwilds Starter Base: Best Location & Layout",
      description:
        "A practical RuneScape: Dragonwilds starter base guide covering location choice, base size, indoor and outdoor workstations, farming plots, storage, campfires, Eye of Oculus roof building, Lodestone space, and expansion decisions.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
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
          name: "RuneScape Dragonwilds base building",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds farming",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds storage",
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

const toc = [
  {
    id: "when-to-build",
    label: "When to build a real base",
  },
  {
    id: "best-location",
    label: "Best starter base location",
  },
  {
    id: "base-size",
    label: "How big should it be?",
  },
  {
    id: "indoor-outdoor",
    label: "Indoor vs outdoor stations",
  },
  {
    id: "campfires",
    label: "Campfire placement",
  },
  {
    id: "farming",
    label: "Where to put farming plots",
  },
  {
    id: "storage",
    label: "How much storage?",
  },
  {
    id: "workstation-layout",
    label: "Workstation layout",
  },
  {
    id: "roof",
    label: "Building the roof",
  },
  {
    id: "lodestone-space",
    label: "Where to leave Lodestone space",
  },
  {
    id: "when-to-expand",
    label: "When to expand or rebuild",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/fast-travel",
    label: "Fast Travel, Lodestones and Vault Cores",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer and Velgar Walkthrough",
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
          title="RuneScape Dragonwilds Starter Base: Best Location & Layout"
          description="Choose a practical first long-term base location, organize indoor and outdoor workstations, leave room for farming and storage, and expand only when the current layout stops working."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
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