import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorAchievementsContent from "@/data/tcg-card-shop-simulator/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "TCG Card Shop Simulator Achievements Guide & Tracker";

const metadataDescription =
  "Track all 50 TCG Card Shop Simulator achievements and plan the fastest 100% route for profit, grading, packs, collection, Ascension, and Tetramon wins.";

const articleDescription =
  "A complete TCG Card Shop Simulator Version 1.0 achievements guide with an interactive 50-achievement tracker, practical 100% route, daily profit thresholds, manual checkout planning, pack and collection milestones, rare pulls, grading goals, Ascension achievements, and the TCG Arcade requirement for 50 customer Tetramon duel wins.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-day-1-daily-report.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-full-art-foil-pull.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-grading-service-options.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-tracker",
    label: "50-Achievement Tracker",
  },
  {
    id: "progression-milestones",
    label: "Progression milestones",
  },
  {
    id: "manual-checkouts",
    label: "1,000 manual checkouts",
  },
  {
    id: "profit-achievements",
    label: "Daily profit achievements",
  },
  {
    id: "seller-achievements",
    label: "Card sale achievements",
  },
  {
    id: "customer-counters",
    label: "Customer counters",
  },
  {
    id: "pack-collection",
    label: "Packs & collection",
  },
  {
    id: "rare-pulls",
    label: "Rare pull achievements",
  },
  {
    id: "grading-achievements",
    label: "Grading achievements",
  },
  {
    id: "tetramon-wins",
    label: "50 Tetramon wins",
  },
  {
    id: "late-game",
    label: "1.0 late-game goals",
  },
  {
    id: "completion-route",
    label: "100% completion route",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/progression-guide",
    label: "TCG Card Shop Simulator Progression Guide",
  },
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
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
        alt: "TCG Card Shop Simulator Daily Report showing revenue, costs, and profit for achievement planning",
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
          name: "Achievements Guide & Tracker",
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
        "TCG Card Shop Simulator Achievements Guide & 100% Tracker",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "TCG Card Shop Simulator",
        },
        {
          "@type": "Thing",
          name: "Achievements",
        },
        {
          "@type": "Thing",
          name: "100% Completion",
        },
        {
          "@type": "Thing",
          name: "Daily Profit Achievements",
        },
        {
          "@type": "Thing",
          name: "Card Collection",
        },
        {
          "@type": "Thing",
          name: "Pack Opening",
        },
        {
          "@type": "Thing",
          name: "Card Grading",
        },
        {
          "@type": "Thing",
          name: "Ascension Card Pack",
        },
        {
          "@type": "Thing",
          name: "TCG Arcade",
        },
        {
          "@type": "Thing",
          name: "Tetramon Duel Master",
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
          title="TCG Card Shop Simulator Achievements Guide & 100% Tracker"
          description="Track all 50 achievements, keep the easy counters moving naturally, and plan the grinds that can waste the most time: manual checkouts, profit days, grading, 25,000 packs, Ascension, and 50 Tetramon wins."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/tcg-card-shop-simulator"
          breadcrumbBaseLabel="TCG Card Shop Simulator"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}