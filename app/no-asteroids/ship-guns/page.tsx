import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NoAsteroidsShipGunsContent from "@/data/no-asteroids/ship-guns.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/no-asteroids`;
const pageUrl = `${hubUrl}/ship-guns`;

const metadataTitle =
  "No Asteroids Best Ship Guns: All Weapons & Upgrade Priority";

const metadataDescription =
  "Compare all nine No Asteroids ship guns, weapon prices, Tractor Beam, Air Generator, shared Engineering upgrades, mounting slots, and the best ship loadouts.";

const articleTitle =
  "Which Ship Guns Should You Buy in No Asteroids?";

const articleDescription =
  "Choose your first ship gun, recover drifting ore, unlock mounting slots, compare the Laser Beam and Collapsar, and configure weapons for automatic asteroid destruction.";

const imageUrls = [
  `${siteUrl}/images/no-asteroids/no-asteroids-ship-weapon-comparison.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-tractor-beam-installation.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-shared-ship-gun-upgrades.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-collapsar-purchase.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-ship-guns-work",
    label: "How Ship Guns Work",
  },
  {
    id: "all-ship-guns",
    label: "All Nine Ship Guns & Prices",
  },
  {
    id: "best-first-ship-guns",
    label: "Best First Ship Guns",
  },
  {
    id: "tractor-beam",
    label: "Tractor Beam & Ore Recovery",
  },
  {
    id: "shared-ship-upgrades",
    label: "Best Shared Ship Upgrades",
  },
  {
    id: "weapon-slots",
    label: "How to Unlock More Slots",
  },
  {
    id: "duplicate-ship-guns",
    label: "Duplicate Ship Guns & Prices",
  },
  {
    id: "air-generator",
    label: "Air Generator vs Another Gun",
  },
  {
    id: "laser-beam",
    label: "Is the Laser Beam Worth Buying?",
  },
  {
    id: "collapsar",
    label: "Is the Collapsar Worth Buying?",
  },
  {
    id: "best-loadout",
    label: "Best Ship Gun Loadouts",
  },
  {
    id: "engineering-priorities",
    label: "Ship Gun Troubleshooting",
  },
  {
    id: "final-cleanup",
    label: "Can Ship Guns Destroy Everything?",
  },
];

const relatedLinks = [
  {
    href: "/no-asteroids",
    label: "Walkthrough & Guide: How to Win in 90 Days",
  },
  {
    href: "/no-asteroids/upgrades",
    label: "Best Upgrades: Tools, Money & Upgrade Order",
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
          name: "Ship Guns",
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

export default function NoAsteroidsShipGunsPage() {
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
          <NoAsteroidsShipGunsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}