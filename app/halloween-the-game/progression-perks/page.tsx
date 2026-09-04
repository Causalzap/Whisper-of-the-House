import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProgressionPerksContent from "@/data/halloween-the-game/progression-perks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/progression-perks`;

const metadataTitle =
  "Halloween: The Game Progression, Perks & Prestige Guide";

const metadataDescription =
  "Learn how XP, Perk Points, Civilian stats, perk rolls, temporary upgrades, weapon levels, challenges, and Prestige work in Halloween: The Game.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-four-levels.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-challenge-types.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-perk-roll.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-perk-deck.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-civilian-stats.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-prestige-level-100.webp`,
];

const toc = [
  {
    id: "progression-tracks",
    label: "Profile, Killer, Civilian & Weapon XP",
  },
  {
    id: "unlocks",
    label: "What progression unlocks",
  },
  {
    id: "challenge-types",
    label: "Challenge types",
  },
  {
    id: "perk-points",
    label: "How Perk Points work",
  },
  {
    id: "perk-cards",
    label: "How to judge perk cards",
  },
  {
    id: "perk-management",
    label: "Equip, upgrade or scrap perks",
  },
  {
    id: "temporary-upgrades",
    label: "Temporary perk upgrades",
  },
  {
    id: "civilian-stats",
    label: "Civilian stats explained",
  },
  {
    id: "starting-items",
    label: "Starting-item unlocks",
  },
  {
    id: "prestige",
    label: "How Prestige works",
  },
  {
    id: "spending-plan",
    label: "When to spend Perk Points",
  },
  {
    id: "what-to-level-first",
    label: "What to level first",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Multiplayer Guide for Civilians",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
  },
  {
    href: "/halloween-the-game",
    label: "Halloween: The Game Guide",
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
    title: "Halloween: The Game Progression, Perks & Prestige",
    description:
      "Understand the four XP tracks, Civilian perk economy, stats, challenges, starting-item unlocks, temporary upgrades, and the Prestige system.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game progression menu showing Profile Killer Civilian and Weapon levels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Progression & Perks Guide",
    description:
      "Learn where XP goes, how Perk Points work, what Civilian stats mean, when to upgrade cards, and how Prestige changes your spending.",
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
          name: "Halloween: The Game Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression, Perks & Prestige",
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
        "Halloween: The Game Progression, Perks and Prestige Guide",
      description:
        "A complete guide to Halloween: The Game progression covering Profile, Killer, Civilian, and Weapon XP tracks; progression unlocks; passive, progressive, and story challenges; the separate Perk Point economy; Civilian perk rolls, card effects, temporary upgrades, and scrapping; Athleticism, Personality, Resourcefulness, and Capability; starting-item unlocks; and the Prestige system. The Profile Prestige screen shown requires Level 100 before Prestige 1 becomes available, followed by a timed Prestige Challenge that can require additional Perk Points after a failed attempt.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      articleSection: "Halloween: The Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game progression",
        },
        {
          "@type": "Thing",
          name: "Perk Points",
        },
        {
          "@type": "Thing",
          name: "Civilian perks",
        },
        {
          "@type": "Thing",
          name: "Civilian stats",
        },
        {
          "@type": "Thing",
          name: "Profile Level",
        },
        {
          "@type": "Thing",
          name: "Killer Level",
        },
        {
          "@type": "Thing",
          name: "Civilian Level",
        },
        {
          "@type": "Thing",
          name: "Weapon Level",
        },
        {
          "@type": "Thing",
          name: "Prestige",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Know Which Progression Track You Are Actually Building"
          description="XP, Perk Points, Civilian levels, weapon progress, perk cards, and Prestige all move differently. Use each system for the unlock or match role you are trying to improve."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProgressionPerksContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}