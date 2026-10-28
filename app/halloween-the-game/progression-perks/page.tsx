
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProgressionPerksContent from "@/data/halloween-the-game/progression-perks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/progression-perks`;

const metadataTitle =
  "Halloween: The Game Progression & Perks Guide (1.2.0)";

const metadataDescription =
  "Compare four XP tracks, Perk Points, card rolls, 19 updated perks, and Michael's Blackout, Reality Tear, Shadow Strike, and Group Rage.";

const articleDescription =
  "Understand Profile, Killer, Civilian, and Weapon XP in Halloween: The Game. Learn how Perk Points, card rolls, temporary upgrades, and loadouts work; compare all 19 perks changed in Patch 1.2.0; and choose when to use Michael's updated abilities, including Blackout, Reality Tear, Shadow Strike, and Group Rage.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-four-levels.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-perk-roll.webp`,
];

const toc = [
  {
    id: "progression-tracks",
    label: "Four XP progression tracks",
  },
  {
    id: "michael-abilities-1-2-0",
    label: "Michael abilities in Patch 1.2.0",
  },
  {
    id: "blackout",
    label: "Blackout",
  },
  {
    id: "reality-tear",
    label: "Reality Tear",
  },
  {
    id: "shadow-strike",
    label: "Shadow Strike",
  },
  {
    id: "group-rage",
    label: "Group Rage",
  },
  {
    id: "perk-points",
    label: "Perk Points, rolls & upgrades",
  },
  {
    id: "perk-points-vs-match-xp",
    label: "Perk Points vs in-match XP",
  },
  {
    id: "perk-values-1-2-0",
    label: "All 19 updated perk values",
  },
  {
    id: "perk-changes-that-matter",
    label: "Which perks are worth using?",
  },
  {
    id: "perk-upgrade-decisions",
    label: "Should you upgrade old cards?",
  },
  {
    id: "challenge-rewards",
    label: "Challenge rewards",
  },
  {
    id: "civilian-stats",
    label: "Civilian attributes & perks",
  },
  {
    id: "starting-items",
    label: "Starting-item unlocks",
  },
  {
    id: "spending-plan",
    label: "What to level and spend first",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/prestige-guide",
    label: "Prestige Challenges & Rewards",
  },
  {
    href: "/halloween-the-game/challenges",
    label: "Challenges & Unlocks Guide",
  },
  {
    href: "/halloween-the-game/best-civilians",
    label: "Best Civilians Tier List",
  },
  {
    href: "/halloween-the-game/items-guide",
    label: "All Items & Uses Guide",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/tower-farm-map-guide",
    label: "Tower Farm Map & Sewer Escape",
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
    title: metadataTitle,
    description:
      "Learn the four XP tracks, Perk Point spending, card upgrades, all 19 updated perk values, and Michael's abilities after Patch 1.2.0.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game progression menu showing Profile, Killer, Civilian, and Weapon levels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Compare XP tracks, Perk Points, perk cards, 19 balance changes, and Michael's updated Blackout, Reality Tear, Shadow Strike, and Group Rage.",
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
          item: `${siteUrl}/`,
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
          name: "Progression & Perks",
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
        "Halloween: The Game Progression & Perks Guide (Patch 1.2.0)",

      description: articleDescription,

      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",

      datePublished: "2026-09-04",
      dateModified: "2026-10-28",

      articleSection:
        "Halloween: The Game Progression Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
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
          name: "Perk Points",
        },
        {
          "@type": "Thing",
          name: "Civilian Perk Cards",
        },
        {
          "@type": "Thing",
          name: "Perk Deck",
        },
        {
          "@type": "Thing",
          name: "Perk upgrades",
        },
        {
          "@type": "Thing",
          name: "Civilian attributes",
        },
        {
          "@type": "Thing",
          name: "Starting Items",
        },
        {
          "@type": "Thing",
          name: "Blackout",
        },
        {
          "@type": "Thing",
          name: "Reality Tear",
        },
        {
          "@type": "Thing",
          name: "Shadow Strike",
        },
        {
          "@type": "Thing",
          name: "Group Rage",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Patch 1.2.0 perks",
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

      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Halloween: The Game Progression & Perks Guide"
          description="Understand four XP tracks, earn and spend Perk Points, build Civilian Perk Decks, compare 19 updated perks, and use Michael's changed abilities in Patch 1.2.0."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
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
