import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NineKingsBestBuildsContent from "@/data/9-kings/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/9-kings/best-builds`;

const metadataTitle = "9 Kings Best Builds (1.0): Joker, Greed & King Strategies";
const metadataDescription = "Compare 9 Kings 1.0 builds for Joker, Greed, Nothing, and Spells, with core cards, placement, Perks, Decrees, and fixes for failed runs.";
const articleTitle = "What Are the Best Builds in 9 Kings 1.0?";
const articleDescription = "Compare Greed Mercenary economy, Nothing Paladin, Joker Leech and Lab Rat Poison, and King of Spells setups, including card choices, placement, scaling, and weaknesses.";

const imageUrls = [
  `${siteUrl}/images/9-kings/9-kings-greed-opening-card-options.webp`,
  `${siteUrl}/images/9-kings/9-kings-greed-mercenary-gold-scaling.webp`,
  `${siteUrl}/images/9-kings/9-kings-greed-dispenser-attack-speed.webp`,
  `${siteUrl}/images/9-kings/9-kings-nothing-paladin-starting-layout.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-treant-leech-wall-layout.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-lab-rat-level-scaling.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-lab-rat-poison-layout.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "King of Greed Mercenary card tooltip showing additional units from Gold held",
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

const toc = [
  { id: "choose-build", label: "Choose a Build" },
  { id: "king-of-greed", label: "King of Greed: Mercenaries" },
  { id: "king-of-nothing", label: "King of Nothing: Paladin" },
  { id: "joker-leech", label: "Joker: Treant & Leech" },
  { id: "joker-lab-rat", label: "Joker: Lab Rat Poison" },
  { id: "king-of-spells", label: "King of Spells: Rainbow" },
  { id: "rainbow-cards", label: "Nine Rainbow Cards" },
  { id: "perks-decrees", label: "Perks & Decrees" },
  { id: "missing-key-cards", label: "When Key Cards Are Missing" },
];

const relatedLinks = [
  { href: "/9-kings", label: "Beginner Guide: First Run & Year 33" },
  { href: "/9-kings/joker-mode", label: "Joker Mode: Custom Deck & Conditions" },
  { href: "/9-kings/achievements", label: "99 Achievements & Checklist" },
];

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
          name: "9 Kings",
          item: `${siteUrl}/9-kings`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Builds",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-13",
      dateModified: "2026-11-13",
      about: [
        { "@type": "VideoGame", name: "9 Kings" },
        { "@type": "Thing", name: "King of Greed Mercenary, Vault, and Dispenser" },
        { "@type": "Thing", name: "King of Nothing Paladin and Farm" },
        { "@type": "Thing", name: "Joker Treant, Leech, and Wall Maker" },
        { "@type": "Thing", name: "Joker Lab Rat, Cauldron, and poison" },
        { "@type": "Thing", name: "King of Spells Wizard, Library, and Replicator" },
        { "@type": "Thing", name: "Rainbow cards added in 9 Kings version 1.0" },
        { "@type": "Thing", name: "Perks, Decrees, and missing-card alternatives" },
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

export default function Page() {
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
          gameTitle="9 Kings"
          gameHref="/9-kings"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NineKingsBestBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
