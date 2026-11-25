import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NoAsteroidsAchievementsContent from "@/data/no-asteroids/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/no-asteroids`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "No Asteroids Achievements Guide: All 65 Achievements";

const metadataDescription =
  "Track all 65 No Asteroids achievements with an interactive checklist, collect all 36 Museum Finds, unlock ship interactions, earn Wide awake, and complete ending achievements.";

const articleTitle =
  "No Asteroids Achievements: How Do You Unlock All 65?";

const articleDescription =
  "Track completed achievements, finish Museum collections, wash the Lander to 100%, complete optional ship interactions, and plan blackout-free and ending-related achievements.";

const imageUrls = [
  `${siteUrl}/images/no-asteroids/no-asteroids-lost-in-orbit-camera.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-museum-collection-rewards.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-lander-wash-progress.webp`,
  `${siteUrl}/images/no-asteroids/no-asteroids-vhs-tape-find.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-checklist",
    label: "All 65 Achievements Checklist",
  },
  {
    id: "completion-order",
    label: "Achievement Completion Order",
  },
  {
    id: "mining-progression",
    label: "Mining & Progression",
  },
  {
    id: "equipment-achievements",
    label: "Tools, Drones & Ship Guns",
  },
  {
    id: "money-orders",
    label: "Money & Daily Orders",
  },
  {
    id: "survival-achievements",
    label: "Wide Awake & Survival",
  },
  {
    id: "ship-interactions",
    label: "Optional Ship Interactions",
  },
  {
    id: "lander-cleaning",
    label: "Fresh Off the Line",
  },
  {
    id: "telescope-achievement",
    label: "Bets Are Open",
  },
  {
    id: "museum-collections",
    label: "Museum & All 36 Finds",
  },
  {
    id: "mineral-completion",
    label: "Mineralogist & Mining Combo",
  },
  {
    id: "ending-achievements",
    label: "Endings & Overtime",
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
    href: "/no-asteroids/ship-guns",
    label: "Best Ship Guns: Weapons, Systems & Loadouts",
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
        height: 848,
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
      dateModified: "2026-11-25",
      image: imageUrls,
    },
  ],
};

export default function NoAsteroidsAchievementsPage() {
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
          <NoAsteroidsAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}