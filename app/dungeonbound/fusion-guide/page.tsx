
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DungeonboundFusionContent from "@/data/dungeonbound/fusion-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dungeonbound`;
const pageUrl = `${hubUrl}/fusion-guide`;

const metadataTitle =
  "Dungeonbound Fusion Guide: Forges, Runes & Mega Forge";

const metadataDescription =
  "Merge identical items, fuse equipment at the Forge, compare variants and inherited effects, use Gems and Runes, and avoid mistakes with Mega Forge.";

const articleTitle =
  "Dungeonbound Fusion Guide: How Do You Combine Items?";

const articleDescription =
  "Combine equipment, compare Forge results, preserve important abilities, manage shared timers and Rune coverage, and use the Mega Forge without weakening your build.";

const imageUrls = [
  `${siteUrl}/images/dungeonbound/dungeonbound-rowan-cloak-buckler-fusion-variants.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-wooden-cloak-fusion-result.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-valkyrie-coil-forged-effects.webp`,
];

const toc = [
  { id: "fusion-vs-merge", label: "Fusion vs. Merge" },
  { id: "fusion-forge", label: "How to Use the Fusion Forge" },
  { id: "fusion-inheritance", label: "What Fusion Keeps or Removes" },
  { id: "timer-items", label: "Shared Timers & Item Effects" },
  { id: "gems-and-runes", label: "Gems & Runes" },
  { id: "mega-forge", label: "How the Mega Forge Works" },
  { id: "upgrade-stations", label: "Upgrade Altars & Other Stations" },
  { id: "potion-fusion", label: "Potion Fusion" },
  { id: "fusion-mistakes", label: "Fix a Weaker Fused Build" },
  { id: "fusion-decisions", label: "Which Items to Fuse First" },
  { id: "fusion-checklist", label: "Checks Before Confirming Fusion" },
];

const relatedLinks = [
  {
    href: "/dungeonbound",
    label: "Beginner Guide: Equipment & Inventory",
  },
  {
    href: "/dungeonbound/act-1",
    label: "Climb Act 1: Equipment Decisions",
  },
  {
    href: "/dungeonbound/walkthrough",
    label: "Story Walkthrough & Permanent Upgrades",
  },
  {
    href: "/dungeonbound/achievements",
    label: "Fusion & Upgrade Achievements",
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: imageUrls[0],
        width: 784,
        height: 858,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

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
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
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
          name: "Dungeonbound",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fusion Guide",
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
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-18",
      image: imageUrls,
    },
  ],
};

export default function DungeonboundFusionPage() {
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
          gameTitle="Dungeonbound"
          gameHref="/dungeonbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DungeonboundFusionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
