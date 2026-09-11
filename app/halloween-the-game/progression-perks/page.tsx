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
  "Learn how Halloween: The Game progression, Perk Points, perk cards and Prestige work, including four XP tracks, Level 100 and Prestige Challenges.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-four-levels.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-prestige-level-100.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-perk-roll.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-perk-deck.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-challenge-types.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-civilian-stats.webp`,
];

const toc = [
  {
    id: "progression-overview",
    label: "Progression & Prestige overview",
  },
  {
    id: "prestige",
    label: "How Prestige Challenges work",
  },
  {
    id: "progression-tracks",
    label: "Profile, Killer, Civilian & Weapon XP",
  },
  {
    id: "perk-points",
    label: "Perk Points & card rolls",
  },
  {
    id: "challenge-types",
    label: "Challenge types",
  },
  {
    id: "civilian-stats",
    label: "Civilian stats & starting items",
  },
  {
    id: "spending-plan",
    label: "What to spend and level first",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Multiplayer Guide for Civilians",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
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
    title: "Halloween: The Game Progression, Perks & Prestige Guide",
    description:
      "Understand the four XP tracks, Perk Point economy, Civilian cards, challenge types, starting-item unlocks, and how Profile Prestige works.",
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
    title: "Halloween: The Game Progression, Perks & Prestige",
    description:
      "Learn how XP tracks, Perk Points, Civilian cards and Prestige Challenges work, including the Level 100 Profile Prestige requirement.",
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
        "A guide to Halloween: The Game progression covering Profile, Killer, Civilian, and Weapon XP; Perk Points and card rolls; perk upgrades and scrapping; passive, progressive, and Story Mode challenges; Civilian attributes and starting items; and Profile Prestige, including the Level 100 requirement and timed Prestige Challenge.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-11",
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
          name: "Halloween: The Game Prestige",
        },
        {
          "@type": "Thing",
          name: "Prestige Challenges",
        },
        {
          "@type": "Thing",
          name: "Perk Points",
        },
        {
          "@type": "Thing",
          name: "Civilian perk cards",
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
          name: "Civilian attributes",
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
          title="Halloween: The Game Progression, Perks & Prestige Guide"
          description="Understand the four XP tracks, spend Perk Points without wasting early rolls, and know what changes once Profile Level 100 opens Prestige Challenges."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 11, 2026"
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