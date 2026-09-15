import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethBuildsContent from "@/data/dimraeth/builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/builds`;

const metadataTitle =
  "Dimraeth Builds Guide: Shadow DoT & Bleed Brawler";

const metadataDescription =
  "Build a stronger Dimraeth character with tested Shadow DoT and Bleed Brawler routes, attribute priorities, gear sets, status loops, and skill swaps.";

const articleDescription =
  "A practical Dimraeth builds guide covering attribute investment, Memory and Intelligence for Shadow magic, Poison and Decay loops, Aether Shade and Convergence gear sets, Concentration recovery, Minotaur Brawler Bleed progression, Frenzied Slashes, status spenders, pet synergy, and when to replace temporary skills or equipment.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-attribute-training-memory-intelligence.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-shadow-contagion-poison.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-aether-shade-convergence-build.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-brawler-16-bleed-stacks.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-frenzied-slashes-pure-bleed.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "build-first",
    label: "Choose a combat loop",
  },
  {
    id: "attributes",
    label: "Attribute priorities",
  },
  {
    id: "shadow-dot",
    label: "Shadow DoT build",
  },
  {
    id: "gear-sets",
    label: "Gear sets",
  },
  {
    id: "brawler-transition",
    label: "Bleed Brawler",
  },
  {
    id: "status-spenders",
    label: "Status spenders",
  },
  {
    id: "when-to-switch",
    label: "When to change the build",
  },
  {
    id: "pets",
    label: "Pet synergy",
  },
  {
    id: "loot-decisions",
    label: "What gear to keep",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets Guide",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
  },
  {
    href: "/dimraeth/goblin-king",
    label: "Dimraeth Goblin King Guide",
  },
  {
    href: "/dimraeth/forest-king",
    label: "Dimraeth Forest King Guide",
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
        alt: "Dimraeth attribute training for a Shadow magic build",
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
          name: "Builds Guide",
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
        "Dimraeth Builds Guide: Shadow DoT, Bleed Brawler and Attributes",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Builds",
        },
        {
          "@type": "Thing",
          name: "Attributes",
        },
        {
          "@type": "Thing",
          name: "Shadow",
        },
        {
          "@type": "Thing",
          name: "Brawler",
        },
        {
          "@type": "Thing",
          name: "Memory",
        },
        {
          "@type": "Thing",
          name: "Intelligence",
        },
        {
          "@type": "Thing",
          name: "Poison",
        },
        {
          "@type": "Thing",
          name: "Decay",
        },
        {
          "@type": "Thing",
          name: "Bleed",
        },
        {
          "@type": "Thing",
          name: "Aether Shade",
        },
        {
          "@type": "Thing",
          name: "Convergence",
        },
        {
          "@type": "Thing",
          name: "Frenzied Slashes",
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
          title="Dimraeth Builds: Shadow DoT, Bleed Brawler & Attributes"
          description="Build around one combat loop instead of chasing every new drop. These tested Shadow and Brawler routes show how attributes, status effects, gear sets, and skill swaps fit together."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}