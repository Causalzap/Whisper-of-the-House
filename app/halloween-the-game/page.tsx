
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenGuideContent from "@/data/halloween-the-game/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/halloween-the-game`;

const metadataTitle =
  "Halloween: The Game Guide: Story, Multiplayer & Unlocks";

const metadataDescription =
  "Choose what to do next in Halloween: The Game. Find Story walkthroughs, Civilian escape strategies, Tower Farm, challenges, perks, Prestige, and endings.";

const articleDescription =
  "Find your next objective in Halloween: The Game. Follow Story Mode, plan Civilian escapes, explore Tower Farm, compare free and paid unlocks, complete challenges, and earn Prestige rewards.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-guide-haddonfield-night.webp`;

const imageUrls = [heroImage];

const toc = [
  {
    id: "where-to-start",
    label: "What should you do next?",
  },
  {
    id: "story",
    label: "Story Mode",
  },
  {
    id: "challenges",
    label: "Challenges",
  },
  {
    id: "multiplayer",
    label: "Civilian Multiplayer",
  },
  {
    id: "progression",
    label: "Progression & Prestige",
  },
  {
    id: "patch-1-2-0",
    label: "Patch 1.2.0 changes",
  },
  {
    id: "escape-search",
    label: "Which escape to finish?",
  },
  {
    id: "multiplayer-maps",
    label: "Tower Farm & five maps",
  },
  {
    id: "free-paid-unlocks",
    label: "Free vs paid unlocks",
  },
  {
    id: "halloween-event",
    label: "Halloween event rewards",
  },
  {
    id: "arrest-michael",
    label: "Escape or arrest Michael?",
  },
  {
    id: "after-story",
    label: "What to do after Story",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/challenges",
    label: "Challenges & Unlocks",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/tower-farm-map-guide",
    label: "Tower Farm Map & Sewer Escape",
  },
  {
    href: "/halloween-the-game/best-civilians",
    label: "Best Civilians Tier List",
  },
  {
    href: "/halloween-the-game/items-guide",
    label: "All Items & Uses",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks",
  },
  {
    href: "/halloween-the-game/prestige-guide",
    label: "Prestige Challenges & Rewards",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
  },
  {
    href: "/halloween-the-game/achievements",
    label: "All 50 Achievements",
  },
  {
    href: "/halloween-the-game/endings",
    label: "Story Endings",
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
      "Find Story Mode routes, Civilian escape decisions, Tower Farm's Sewer Escape, new character unlocks, challenges, Prestige rewards, and achievement cleanup.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Michael Myers moving through Haddonfield at night in Halloween The Game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Plan your next Halloween: The Game objective with Story walkthroughs, multiplayer escapes, Tower Farm, challenges, character unlocks, and Prestige.",
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

      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",

      datePublished: "2026-09-04",
      dateModified: "2026-10-28",

      articleSection: "Halloween: The Game Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Story Mode",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game walkthrough",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game challenges",
        },
        {
          "@type": "Thing",
          name: "Civilian multiplayer",
        },
        {
          "@type": "Thing",
          name: "Civilian escape routes",
        },
        {
          "@type": "Thing",
          name: "Resident discovery",
        },
        {
          "@type": "Thing",
          name: "Michael Myers Bloodthirst",
        },
        {
          "@type": "Thing",
          name: "Tower Farm",
        },
        {
          "@type": "Thing",
          name: "Sewer Escape",
        },
        {
          "@type": "Thing",
          name: "Scythe",
        },
        {
          "@type": "Thing",
          name: "Michelle Blanton",
        },
        {
          "@type": "Thing",
          name: "Eugene Kelly",
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
          name: "Prestige Challenges",
        },
        {
          "@type": "Thing",
          name: "Michael Myers detainment",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game achievements",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game endings",
        },
      ],

      isPartOf: {
        "@id": `${siteUrl}#website`,
      },

      publisher: {
        "@id": `${siteUrl}#organization`,
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
      url: siteUrl,
      name: "Whisper of the House",
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
          title="Halloween: The Game Guide: Story, Multiplayer & Unlocks"
          description="Choose your next objective in Story Mode or Civilian multiplayer, compare escape routes, explore Tower Farm, and find the right challenges, perks, Prestige rewards, and endings."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
