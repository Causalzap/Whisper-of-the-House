import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NoAsteroidsUpgradesContent from "@/data/no-asteroids/upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/no-asteroids`;
const pageUrl = `${hubUrl}/upgrades`;

const metadataTitle =
  "No Asteroids Best Upgrades: Tools, Money & Upgrade Order";

const metadataDescription =
  "Find the best No Asteroids upgrades, compare all six mining tools, earn money from eight minerals, improve cargo and oxygen capacity, and invest in drones and Charges.";

const articleTitle =
  "What Are the Best Upgrades to Buy First in No Asteroids?";

const articleDescription =
  "Choose between mining tools, Air Tanks, Cargo Hold, shared attributes, drones and Charges based on what is limiting your income and excavation.";

const imageUrls = [
  `${siteUrl}/images/no-asteroids/no-asteroids-early-upgrade-panels.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-shared-tool-upgrades.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-mineral-base-prices.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-drone-swarm-upgrades.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "best-first-upgrades",
    label: "Best First Upgrades",
  },
  {
    id: "mining-tools",
    label: "All Six Mining Tools",
  },
  {
    id: "shared-tool-upgrades",
    label: "Shared Tool Upgrades",
  },
  {
    id: "make-money",
    label: "How to Make Money Faster",
  },
  {
    id: "daily-orders",
    label: "Daily Orders",
  },
  {
    id: "minerals",
    label: "All Eight Minerals & Prices",
  },
  {
    id: "suit-upgrades",
    label: "Best Suit Upgrades",
  },
  {
    id: "drones",
    label: "Which Drones to Buy",
  },
  {
    id: "charges-mining-rigs",
    label: "Charges & Mining Rigs",
  },
  {
    id: "late-game-upgrades",
    label: "Best Late-Game Upgrades",
  },
  {
    id: "next-upgrades",
    label: "When to Invest in Ship Guns",
  },
];

const relatedLinks = [
  {
    href: "/no-asteroids",
    label: "Walkthrough & Guide: How to Win in 90 Days",
  },
  {
    href: "/no-asteroids/ship-guns",
    label: "Best Ship Guns: Weapons, Systems & Loadouts",
  },
  {
    href: "/no-asteroids/achievements",
    label: "All 65 Achievements & Checklist",
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
        url: heroImage,
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
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
          name: "No Asteroids",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Upgrades",
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
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      dateModified: "2026-11-25",
      image: imageUrls,
    },
  ],
};

export default function NoAsteroidsUpgradesPage() {
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
          gameTitle="No Asteroids"
          gameHref="/no-asteroids"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NoAsteroidsUpgradesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}