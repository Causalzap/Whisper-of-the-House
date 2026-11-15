
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZombiesArentRealAchievementsContent from "@/data/zombies-arent-real/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/zombies-arent-real`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Zombies Aren't Real Achievements: All 14 Requirements";

const metadataDescription =
  "Track all 14 Zombies Aren't Real achievements, including Flawless, Glittery, Sparkly, Daring, Masterful, and No Friendly Fire.";

const articleTitle =
  "Zombies Aren't Real Achievements: How Do You Unlock All 14?";

const articleDescription =
  "Track all 14 Steam achievements, complete Scenario challenges, earn Gold and Diamond badges across Campaign stages, and understand the restrictions for Flawless, Daring, Masterful, and No Friendly Fire.";

const imageFilenames = [
  "zombies-arent-real-chicago-gold-result.webp",
  "zombies-arent-real-chicago-diamond-result.webp",
];

const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/zombies-arent-real/${file}`,
);

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "Chicago Level 4 Diamond Badge with 37 percent of civilians saved in Zombies Aren't Real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[1]],
  },
};

const toc = [
  {
    id: "achievement-tracker",
    label: "All 14 Achievements",
  },
  {
    id: "completion-order",
    label: "Best Completion Order",
  },
  {
    id: "first-scenario-achievements",
    label: "Scenario Achievements",
  },
  {
    id: "battle-action-achievements",
    label: "Battle Action Achievements",
  },
  {
    id: "campaign-badges",
    label: "Glittery & Sparkly",
  },
  {
    id: "flawless",
    label: "Flawless",
  },
  {
    id: "daring",
    label: "Daring",
  },
  {
    id: "masterful",
    label: "Masterful",
  },
  {
    id: "no-friendly-fire",
    label: "No Friendly Fire",
  },
  {
    id: "completionist",
    label: "Completionist",
  },
  {
    id: "final-cleanup",
    label: "Missing Achievement Fixes",
  },
];

const relatedLinks = [
  {
    href: "/zombies-arent-real",
    label: "Beginner Guide: First Defense, Units & Progression",
  },
  {
    href: "/zombies-arent-real/safe-zones",
    label: "Safe Zones: Gates, Hold & Evac Corridors",
  },
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
          name: "Zombies Aren't Real",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Zombies Aren't Real",
        },
        {
          "@type": "Thing",
          name: "All 14 Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Beginner's Luck and Back from the Brink",
        },
        {
          "@type": "Thing",
          name: "Choke Point and air support achievements",
        },
        {
          "@type": "Thing",
          name: "Golden and Freshly Cut",
        },
        {
          "@type": "Thing",
          name: "Glittery and Sparkly Campaign badges",
        },
        {
          "@type": "Thing",
          name: "Flawless and Daring",
        },
        {
          "@type": "Thing",
          name: "Masterful and No Friendly Fire",
        },
        {
          "@type": "Thing",
          name: "Completionist",
        },
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
          gameTitle="Zombies Aren't Real"
          gameHref="/zombies-arent-real"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZombiesArentRealAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
