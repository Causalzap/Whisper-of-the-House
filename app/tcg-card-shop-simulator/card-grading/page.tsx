import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorBestDecksContent from "@/data/tcg-card-shop-simulator/best-decks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/best-decks`;

const metadataTitle =
  "Best Decks in TCG Card Shop Simulator";

const metadataDescription =
  "Try tested Tetramon decks built around Wolan burst, discard and Mentos, or Shield and Fire, with substitutions and tournament play tips.";

const articleDescription =
  "Tested Tetramon deck builds for TCG Card Shop Simulator Version 1.0, including Wolan Evolution Burst, Discard and Recycle with Mentos, Shield and Fire, a Freeze alternative, missing-card substitutions, and tournament deck decisions.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-wolan-two-dragons-plus-28.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-mentos-discard-boost.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-shield-fire-board.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "best-deck-choice",
    label: "Which deck should you build?",
  },
  {
    id: "wolan-evolution",
    label: "Wolan Evolution Burst",
  },
  {
    id: "discard-recycle",
    label: "Discard & Recycle",
  },
  {
    id: "shield-fire",
    label: "Shield & Fire",
  },
  {
    id: "freeze-counter",
    label: "Freeze Counter",
  },
  {
    id: "missing-cards",
    label: "Missing-card replacements",
  },
  {
    id: "tournament-deck",
    label: "Best tournament deck",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/deck-builder",
    label: "Tetramon Deck Builder",
  },
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
  },
  {
    href: "/tcg-card-shop-simulator/tier-list",
    label: "Tetramon Tier List",
  },
  {
    href: "/tcg-card-shop-simulator/ascension-cards",
    label: "Ascension Cards Guide",
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
        alt: "Wolan and two Dragons producing a plus 28 Fire boost in TCG Card Shop Simulator",
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
          name: "Best Decks",
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
        "Best Decks in TCG Card Shop Simulator",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-19",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "TCG Card Shop Simulator",
        },
        {
          "@type": "Thing",
          name: "Tetramon",
        },
        {
          "@type": "Thing",
          name: "Tetramon Decks",
        },
        {
          "@type": "Thing",
          name: "Wolan Evolution Burst",
        },
        {
          "@type": "Thing",
          name: "Discard Deck",
        },
        {
          "@type": "Thing",
          name: "Mentos",
        },
        {
          "@type": "Thing",
          name: "Shield Deck",
        },
        {
          "@type": "Thing",
          name: "Fire Deck",
        },
        {
          "@type": "Thing",
          name: "Freeze Deck",
        },
        {
          "@type": "Thing",
          name: "Tetramon Tournament",
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
          title="Best Decks in TCG Card Shop Simulator"
          description="Start with Wolan Evolution Burst for the most proven tournament setup, use Discard and Mentos for a combo-heavy deck, or add Shield support when fast openings are ending matches before your damage comes online."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorBestDecksContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}