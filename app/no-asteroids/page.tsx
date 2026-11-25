import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NoAsteroidsContent from "@/data/no-asteroids/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/no-asteroids`;
const pageUrl = hubUrl;

const metadataTitle =
  "No Asteroids Walkthrough & Guide: How to Win in 90 Days";

const metadataDescription =
  "Follow the No Asteroids walkthrough, unlock the Engine Room, improve mining progression, destroy the asteroid before impact, clear the final 1%, and take new contracts.";

const articleTitle =
  "No Asteroids Walkthrough & Guide: How Do You Destroy the Asteroid in 90 Days?";

const articleDescription =
  "Complete your first mining shifts, unlock ship weapons, accelerate asteroid destruction, find the final remaining rocks, and continue into new asteroid contracts.";

const imageUrls = [
  `${siteUrl}/images/no-asteroids/no-asteroids-90-day-contract.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-engine-room-unlock.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-day-40-progress.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-earth-saved-ending.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "progression-roadmap",
    label: "Progression Roadmap",
  },
  {
    id: "first-shift",
    label: "Your First Mining Shift",
  },
  {
    id: "early-game",
    label: "Early-Game Progression",
  },
  {
    id: "before-each-shift",
    label: "Pre-Shift Preparation",
  },
  {
    id: "engine-room",
    label: "How to Unlock the Engine Room",
  },
  {
    id: "landing-sites",
    label: "Landing Sites & Hop",
  },
  {
    id: "hazards",
    label: "Solar Flares & Mining Hazards",
  },
  {
    id: "midgame",
    label: "Midgame Destruction",
  },
  {
    id: "progress-check",
    label: "Are You on Track?",
  },
  {
    id: "late-game",
    label: "Late-Game Demolition",
  },
  {
    id: "last-one-percent",
    label: "Destroy the Last 1%",
  },
  {
    id: "ending",
    label: "Earth Saved & Endings",
  },
  {
    id: "next-contracts",
    label: "New Asteroid Contracts",
  },
  {
    id: "common-problems",
    label: "Common Progression Problems",
  },
];

const relatedLinks = [
  {
    href: "/no-asteroids/upgrades",
    label: "Best Upgrades: Tools, Money & Upgrade Order",
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
        width: 1484,
        height: 986,
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

export default function NoAsteroidsPage() {
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
          <NoAsteroidsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}