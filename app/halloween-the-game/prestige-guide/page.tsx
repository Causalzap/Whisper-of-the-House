import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenPrestigeGuideContent from "@/data/halloween-the-game/prestige-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/prestige-guide`;

const metadataTitle =
  "Halloween: The Game Prestige Guide – Challenges & Rewards";

const metadataDescription =
  "Learn how Prestige works in Halloween: The Game, including level requirements, challenge costs, Profile and Jennifer objectives, rewards, and current errors.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-progression-prestige-level-100.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-jennifer-prestige-start-cost.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-jennifer-prestige-challenge.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prestige-challenge-unavailable.webp`,
];

const toc = [
  {
    id: "how-to-prestige",
    label: "How to Prestige",
  },
  {
    id: "starting-a-prestige-challenge",
    label: "Cost & when to start",
  },
  {
    id: "confirmed-prestige-challenges",
    label: "Confirmed challenges & rewards",
  },
  {
    id: "prestige-not-working",
    label: "Prestige not working",
  },
  {
    id: "before-starting-prestige",
    label: "Before starting Prestige",
  },
  {
    id: "other-prestige-objectives",
    label: "Other Prestige objectives",
  },
  {
    id: "private-match-prestige",
    label: "Private Match farming",
  },
  {
    id: "after-prestige",
    label: "What happens after Prestige",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Leveling Guide",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/achievements",
    label: "Achievements Guide",
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
    title: "Halloween: The Game Prestige Guide – Challenges & Rewards",
    description:
      "Reach the correct level cap, start a timed Prestige Challenge, manage Perk Point costs, and work through confirmed Profile and Civilian objectives.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Profile Prestige screen requiring Level 100 before Prestige 1",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Prestige Guide – Challenges & Rewards",
    description:
      "Prestige requirements, challenge costs, confirmed objectives, rewards, Private Match farming, and current Prestige errors.",
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
          name: "Prestige Guide",
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
        "Halloween: The Game Prestige Guide — Challenges, Rewards & Requirements",
      description:
        "A player-focused guide to Prestige in Halloween: The Game, covering Profile, Michael, Civilian and Weapon level requirements, timed Prestige Challenges, Perk Point costs, the Profile Bloodthirsty Pitchfork objective, Jennifer's townsfolk objective, Private Match farming, and current challenge tracking or availability errors.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-12",
      dateModified: "2026-09-12",
      articleSection: "Halloween: The Game Progression",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
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
          name: "Profile Prestige",
        },
        {
          "@type": "Thing",
          name: "Michael Myers Prestige",
        },
        {
          "@type": "Thing",
          name: "Civilian Prestige",
        },
        {
          "@type": "Thing",
          name: "Weapon Prestige",
        },
        {
          "@type": "Thing",
          name: "Jennifer Aarons Prestige",
        },
        {
          "@type": "Thing",
          name: "Clown Myers",
        },
        {
          "@type": "Thing",
          name: "Bloodthirsty Pitchfork Executions",
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
          title="Halloween: The Game Prestige Guide – Challenges, Rewards & Requirements"
          description="Reach the right level cap, start Prestige at the right time, and work through the confirmed Profile and Civilian challenges without wasting hours on a broken counter."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenPrestigeGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}