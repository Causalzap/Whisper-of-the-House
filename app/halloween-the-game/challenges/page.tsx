
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenChallengesContent from "@/data/halloween-the-game/challenges.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/challenges`;

const metadataTitle =
  "Halloween: The Game Challenges Guide – All 36 Story Challenges";

const metadataDescription =
  "Complete all 36 Story Challenges, unlock the Scythe, track Progressive goals, and fix stuck challenge counters in Halloween: The Game.";

const articleDescription =
  "Complete all 36 Story Challenges across the Prologue and five chapters in Halloween: The Game. Learn how to unlock the Scythe, complete Progressive Challenge stages, track the pumpkin event, handle reduced requirements in Patch 1.2.0, and troubleshoot challenges that do not count.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-chapter-3-returning-home-challenges.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-chapter-5-into-the-shadows-challenges.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-scythe-progressive-reward.webp`,
];

const toc = [
  {
    id: "challenge-types",
    label: "Story, Progressive & Passive Challenges",
  },
  {
    id: "unlock-scythe",
    label: "How to unlock the Scythe",
  },
  {
    id: "scythe-progressive-challenges-locked",
    label: "Scythe Challenges locked",
  },
  {
    id: "progressive-goals-1-2-0",
    label: "Patch 1.2.0 challenge changes",
  },
  {
    id: "reduced-progress-not-completing",
    label: "Progress exceeds the new goal",
  },
  {
    id: "smash-50-pumpkins",
    label: "Smash 50 Pumpkins",
  },
  {
    id: "all-story-challenges",
    label: "All 36 Story Challenges",
  },
  {
    id: "chapter-4",
    label: "Chapter 4 Challenges",
  },
  {
    id: "chapter-5",
    label: "Chapter 5 Challenges",
  },
  {
    id: "progressive-challenges",
    label: "Progressive Challenge counters",
  },
  {
    id: "passive-after-prestige",
    label: "Passive Challenges after Prestige",
  },
  {
    id: "private-match",
    label: "Challenges in Private Matches",
  },
  {
    id: "why-it-did-not-count",
    label: "Why a challenge did not count",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "Prologue Challenges",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Main Street Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "The Babysitters Walkthrough",
  },
  {
    href: "/halloween-the-game/tower-farm-map-guide",
    label: "Tower Farm Map & Sewer Escape",
  },
  {
    href: "/halloween-the-game/prestige-guide",
    label: "Prestige Challenges & Rewards",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks",
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
      "Find all 36 Story Challenges, unlock the Scythe, complete updated Progressive goals, and troubleshoot missing challenge progress.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1904,
        height: 768,
        alt: "Halloween The Game Chapter 3 Returning Home Story Challenges screen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "All 36 Story Challenges, Scythe unlock requirements, Progressive Challenge changes, Private Match tracking, and counter fixes.",
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
          name: "Halloween: The Game",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Challenges Guide",
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
        "Halloween: The Game Challenges Guide – All 36 Story Challenges",

      description: articleDescription,

      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",

      datePublished: "2026-09-23",
      dateModified: "2026-10-28",

      articleSection:
        "Halloween: The Game Challenges",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Story Challenges",
        },
        {
          "@type": "Thing",
          name: "Progressive Challenges",
        },
        {
          "@type": "Thing",
          name: "Passive Challenges",
        },
        {
          "@type": "Thing",
          name: "Scythe Starting Weapon",
        },
        {
          "@type": "Thing",
          name: "Scythe Progressive Challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween 5 Michael Myers",
        },
        {
          "@type": "Thing",
          name: "Lethal Efficiency: The Sequel",
        },
        {
          "@type": "Thing",
          name: "Jack Ghoul Goggles",
        },
        {
          "@type": "Thing",
          name: "50 Pumpkins Challenge",
        },
        {
          "@type": "Thing",
          name: "Challenge progress tracking",
        },
        {
          "@type": "Thing",
          name: "Private Match Challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Patch 1.2.0",
        },
      ],

      author: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },

      publisher: {
        "@id": `${siteUrl}#organization`,
      },

      isPartOf: {
        "@id": `${siteUrl}#website`,
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
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

export default function HalloweenChallengesPage() {
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
          title="Halloween: The Game Challenges Guide – All 36 Story Challenges"
          description="Complete Story Challenges, unlock the Scythe through Progressive Challenges, check Patch 1.2.0 requirements, and fix counters that fail to increase."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenChallengesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
