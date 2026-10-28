
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
  "Learn how to Prestige in Halloween: The Game, including level caps, Perk Point costs, Profile and Jennifer challenges, rewards, and tracking problems.";

const articleDescription =
  "Learn how Prestige works in Halloween: The Game, from Profile, Michael, Civilian, and Weapon level requirements to timed challenges, Perk Point costs, Bloodthirsty Pitchfork executions, Jennifer's townsfolk objective, Private Match attempts, rewards, and challenge troubleshooting.";

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
    label: "Challenge costs & requirements",
  },
  {
    id: "confirmed-prestige-challenges",
    label: "Prestige challenges & rewards",
  },
  {
    id: "profile-prestige",
    label: "Profile Prestige: Pitchfork",
  },
  {
    id: "profile-prestige-private-match",
    label: "Pitchfork in Private Matches",
  },
  {
    id: "jennifer-prestige",
    label: "Jennifer: Convince 30 Townsfolk",
  },
  {
    id: "prestige-not-working",
    label: "Prestige not working",
  },
  {
    id: "before-starting-prestige",
    label: "When to start Prestige",
  },
  {
    id: "after-prestige",
    label: "Challenges after Prestige",
  },
  {
    id: "prestige-reset-rewards",
    label: "Prestige resets & rewards",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks Guide",
  },
  {
    href: "/halloween-the-game/challenges",
    label: "Challenges & Unlocks Guide",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
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
    title: metadataTitle,
    description:
      "Reach Prestige level caps, check challenge costs, complete Profile and Jennifer objectives, and troubleshoot missing or stalled progress.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Profile Prestige screen showing the Level 100 requirement for Prestige 1",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Prestige level requirements, timed challenges, Perk Point costs, Profile Pitchfork executions, Jennifer's challenge, and rewards.",
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
        "Halloween: The Game Prestige Guide – Challenges & Rewards",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-12",
      dateModified: "2026-10-28",
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
          name: "Bloodthirsty Pitchfork Executions",
        },
        {
          "@type": "Thing",
          name: "Clown Myers",
        },
        {
          "@type": "Thing",
          name: "Michael Prestige Tints",
        },
        {
          "@type": "Thing",
          name: "Perk Points",
        },
        {
          "@type": "Thing",
          name: "Private Matches",
        },
        {
          "@type": "Thing",
          name: "Passive Challenges",
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
          title="Halloween: The Game Prestige Guide – How to Prestige"
          description="Reach the required level cap, check Prestige costs and timed objectives, complete Profile or Jennifer challenges, and fix problems with missing or stalled progress."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
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
