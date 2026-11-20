
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlacksmithMasterAchievementsContent from "@/data/blacksmith-master/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/blacksmith-master`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Blacksmith Master Achievements: All 72 & 100% Checklist";

const metadataDescription =
  "Track all 72 Blacksmith Master achievements, complete Merchant Offer milestones, unlock Hidden Riches, collect every Blueprint, and finish A True Master.";

const articleTitle =
  "Blacksmith Master Achievements: How Do You Unlock All 72?";

const articleDescription =
  "Track all 72 Steam achievements with a checklist, complete special Merchant Offers, unlock Full Deck, and upgrade every Blueprint for A True Master.";

const imageUrls = [
  `${siteUrl}/images/blacksmith-master/blacksmith-master-full-deck-last-blueprint.webp`,
  `${siteUrl}/images/blacksmith-master/blacksmith-master-hidden-riches-treasure-chest.webp`,
  `${siteUrl}/images/blacksmith-master/blacksmith-master-all-72-achievements.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-checklist",
    label: "All 72 Achievements Checklist",
  },
  {
    id: "completion-order",
    label: "Best 100% Completion Order",
  },
  {
    id: "merchant-achievements",
    label: "Merchant Offer Achievements",
  },
  {
    id: "crafting-achievements",
    label: "Crafting Achievements",
  },
  {
    id: "shop-achievements",
    label: "Shop & Customer Achievements",
  },
  {
    id: "staff-achievements",
    label: "Staff & Worker Achievements",
  },
  {
    id: "resource-achievements",
    label: "Mining & Forest Achievements",
  },
  {
    id: "mastery-achievements",
    label: "Mastery Tree Achievements",
  },
  {
    id: "ingot-achievements",
    label: "Smelting & Ingot Achievements",
  },
  {
    id: "trade-achievements",
    label: "Trade Route Achievements",
  },
  {
    id: "blueprint-achievements",
    label: "Blueprint Achievements",
  },
  {
    id: "day-achievements",
    label: "Day Milestones & Debt",
  },
  {
    id: "final-check",
    label: "Missing Achievements Checklist",
  },
  {
    id: "next-steps",
    label: "After 72/72 Completion",
  },
];

const relatedLinks = [
  {
    href: "/blacksmith-master",
    label: "Beginner Guide: Start & Make Money",
  },
  {
    href: "/blacksmith-master/mastery-tree",
    label: "Mastery Tree & Best Unlock Order",
  },
  {
    href: "/blacksmith-master/workshop-layout",
    label: "Workshop Layout & Production Bottlenecks",
  },
  {
    href: "/blacksmith-master/master-workers",
    label: "Master Workers & Siege Machines",
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
        width: 1338,
        height: 834,
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
          name: "Blacksmith Master",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
      dateModified: "2026-11-20",
      image: imageUrls,
    },
  ],
};

export default function BlacksmithMasterAchievementsPage() {
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
          gameTitle="Blacksmith Master"
          gameHref="/blacksmith-master"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BlacksmithMasterAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
