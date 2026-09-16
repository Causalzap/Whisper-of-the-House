import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorDeckBuilderContent from "@/data/tcg-card-shop-simulator/deck-builder.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/deck-builder`;

const metadataTitle =
  "TCG Card Shop Simulator Tetramon Deck Builder";

const metadataDescription =
  "Build a 50-card Tetramon deck, fix evolution gaps, check consistency, and find a starting deck with TCG Card Shop Simulator deck tools.";

const articleDescription =
  "An interactive TCG Card Shop Simulator Tetramon deck builder for Version 1.0, with the 50-card and four-copy rules, evolution support checks, deck consistency signals, card filtering, starting archetype recommendations, and a deck checker for existing lists.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetramon-workbench-deck-edit.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetramon-deck-rules.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetramon-non-starter-hand.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetramon-evolution-ready.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-workbench",
    label: "Unlock the Workbench",
  },
  {
    id: "deck-rules",
    label: "50-card deck rules",
  },
  {
    id: "legal-but-unplayable",
    label: "Why legal decks get stuck",
  },
  {
    id: "evolution-support",
    label: "Evolution support",
  },
  {
    id: "card-score",
    label: "Card scores",
  },
  {
    id: "cards-i-dont-own",
    label: "Missing deck cards",
  },
  {
    id: "find-a-deck",
    label: "Find a deck",
  },
  {
    id: "check-existing-deck",
    label: "Check an existing deck",
  },
  {
    id: "before-first-match",
    label: "Before your first match",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
  },
  {
    href: "/tcg-card-shop-simulator/tier-list",
    label: "Tetramon Card Tier List",
  },
  {
    href: "/tcg-card-shop-simulator/progression-guide",
    label: "TCG Card Shop Simulator Progression Guide",
  },
  {
    href: "/tcg-card-shop-simulator/money-guide",
    label: "TCG Card Shop Simulator Money Guide",
  },
  {
    href: "/tcg-card-shop-simulator",
    label: "TCG Card Shop Simulator Guide Hub",
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
        alt: "Tetramon Deck Edit screen at the Workbench in TCG Card Shop Simulator",
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
          name: "TCG Card Shop Simulator",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tetramon Deck Builder",
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
        "TCG Card Shop Simulator Tetramon Deck Builder",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-16",
      articleSection: "Game Tools",
      about: [
        {
          "@type": "VideoGame",
          name: "TCG Card Shop Simulator",
        },
        {
          "@type": "Thing",
          name: "Tetramon Duel Master",
        },
        {
          "@type": "Thing",
          name: "Deck Building",
        },
        {
          "@type": "Thing",
          name: "50-Card Deck",
        },
        {
          "@type": "Thing",
          name: "Evolution",
        },
        {
          "@type": "Thing",
          name: "Deck Consistency",
        },
        {
          "@type": "Thing",
          name: "Tetramon Cards",
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
      "@type": "WebApplication",
      "@id": `${pageUrl}#tool`,
      name:
        "TCG Card Shop Simulator Tetramon Deck Builder",
      url: pageUrl,
      description:
        "Build and check a 50-card Tetramon deck, find evolution gaps, inspect deck structure, and get starting deck recommendations.",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements:
        "Requires a modern web browser with JavaScript enabled.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "50-card deck builder",
        "Four-copy limit protection",
        "Tetramon card search and filtering",
        "Evolution support warnings",
        "Deck consistency checks",
        "Draw support analysis",
        "Interaction and synergy signals",
        "Find My Deck recommendations",
        "Existing deck checker",
      ],
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
          title="TCG Card Shop Simulator Tetramon Deck Builder"
          description="Build a legal 50-card Tetramon deck, catch missing evolution stages before a match, find a starting archetype, or paste in an existing list to see what needs fixing."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/tcg-card-shop-simulator"
          breadcrumbBaseLabel="TCG Card Shop Simulator"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorDeckBuilderContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}