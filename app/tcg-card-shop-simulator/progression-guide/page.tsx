import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorProgressionContent from "@/data/tcg-card-shop-simulator/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/progression-guide`;

const metadataTitle =
  "TCG Card Shop Simulator Progression Guide: What to Unlock";

const metadataDescription =
  "See what to unlock next in TCG Card Shop Simulator, when to expand or hire, how level 7 Workbench changes progression, and when Ascension opens.";

const articleDescription =
  "A TCG Card Shop Simulator Version 1.0 progression guide covering early shop priorities, tutorial gates, shop-level unlock decisions, the level 7 Workbench and Tetramon branch, expansion timing, employee hiring, grading and automation, and the late-game Ascension milestones at shop levels 70 and 85.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-level-up-unlocks.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-shop-expansion-400.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-ascension-pack-level-70.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "progression-order",
    label: "What to unlock next",
  },
  {
    id: "first-days",
    label: "Opening shop priorities",
  },
  {
    id: "card-table",
    label: "Card Table objective",
  },
  {
    id: "shop-level-unlocks",
    label: "Shop level unlocks",
  },
  {
    id: "workbench-level-7",
    label: "Level 7 Workbench",
  },
  {
    id: "expansion-timing",
    label: "When to expand",
  },
  {
    id: "when-to-hire",
    label: "When to hire",
  },
  {
    id: "mid-game",
    label: "Mid-game priorities",
  },
  {
    id: "grading-workbench-automation",
    label: "Grading & automation",
  },
  {
    id: "late-game",
    label: "Ascension & late game",
  },
  {
    id: "progression-stuck",
    label: "Why progression is stuck",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
  },
  {
    href: "/tcg-card-shop-simulator/money-guide",
    label: "TCG Card Shop Simulator Money Guide",
  },
  {
    href: "/tcg-card-shop-simulator/achievements",
    label: "TCG Card Shop Simulator Achievements Guide",
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
        alt: "Shop level unlocks appearing during early progression in TCG Card Shop Simulator",
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
          name: "Progression Guide",
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
        "TCG Card Shop Simulator Progression Guide: What to Unlock Next",
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
          name: "Shop Progression",
        },
        {
          "@type": "Thing",
          name: "Shop Level",
        },
        {
          "@type": "Thing",
          name: "Workbench",
        },
        {
          "@type": "Thing",
          name: "Tetramon Duel Master",
        },
        {
          "@type": "Thing",
          name: "Shop Expansion",
        },
        {
          "@type": "Thing",
          name: "Employees",
        },
        {
          "@type": "Thing",
          name: "Card Grading",
        },
        {
          "@type": "Thing",
          name: "Automation",
        },
        {
          "@type": "Thing",
          name: "Ascension Card Pack",
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
          title="TCG Card Shop Simulator Progression Guide: What to Unlock Next"
          description="Work out what deserves your next purchase, when the shop actually needs more space or staff, when level 7 opens Tetramon deck building, and how to reach the late Ascension unlocks without forcing every new system at once."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorProgressionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}