
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenMultiplayerGuideContent from "@/data/halloween-the-game/multiplayer-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/multiplayer-guide`;

const metadataTitle =
  "Halloween: The Game Multiplayer Guide for Civilians";

const metadataDescription =
  "Find Residents and Special Targets, call police, complete Sedan and Storm Cellar escapes, avoid Michael's interruptions, and survive Civilian multiplayer.";

const articleDescription =
  "Learn how to survive Civilian multiplayer in Halloween: The Game. Discover Residents and Special Targets, understand Bloodthirst map reveals, make police calls, manage escape items, complete Sedan and Storm Cellar objectives, handle Noise Pings and Blackout, and choose when to escape or help teammates.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-first-objectives.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-call-police.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-police-call-retry.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-resident-call-help.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-car-items.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-tornado-shelter-padlock.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-open-exit-decision.webp`,
];

const toc = [
  {
    id: "opening-route",
    label: "What to do first",
  },
  {
    id: "resident-target-discovery",
    label: "Find Residents & Special Targets",
  },
  {
    id: "michael-bloodthirst-map",
    label: "Michael's Bloodthirst map reveals",
  },
  {
    id: "call-police",
    label: "When to call the police",
  },
  {
    id: "inventory",
    label: "Inventory and escape items",
  },
  {
    id: "residents",
    label: "Resident commands",
  },
  {
    id: "car-escape",
    label: "Sedan escape requirements",
  },
  {
    id: "storm-cellar",
    label: "Storm Cellar barriers",
  },
  {
    id: "escape-noise-pings",
    label: "Escape Noise Pings",
  },
  {
    id: "tower-farm-sewer",
    label: "Tower Farm Sewer Escape",
  },
  {
    id: "switch-routes",
    label: "When to switch escapes",
  },
  {
    id: "police-window",
    label: "Police pressure & weapons",
  },
  {
    id: "open-exit",
    label: "When to take an open exit",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/tower-farm-map-guide",
    label: "Tower Farm Map & Sewer Escape",
  },
  {
    href: "/halloween-the-game/items-guide",
    label: "All Items & Uses Guide",
  },
  {
    href: "/halloween-the-game/best-civilians",
    label: "Best Civilians Tier List",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks Guide",
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
      "Survive Civilian multiplayer with Resident discovery, police calls, escape tools, Sedan and Storm Cellar objectives, route switching, and updated Michael counterplay.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Civilian multiplayer opening objectives showing Residents, items, police, and escape tasks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Learn Civilian opening priorities, Resident discovery, Bloodthirst map reveals, police calls, escape decisions, and how to survive Michael.",
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
          name: "Multiplayer Guide",
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
        "Halloween: The Game Multiplayer Guide for Civilians",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-10-28",
      articleSection: "Halloween: The Game Multiplayer Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game multiplayer",
        },
        {
          "@type": "Thing",
          name: "Civilian survival",
        },
        {
          "@type": "Thing",
          name: "Resident discovery",
        },
        {
          "@type": "Thing",
          name: "Special Targets",
        },
        {
          "@type": "Thing",
          name: "Michael Myers Bloodthirst",
        },
        {
          "@type": "Thing",
          name: "Police calls",
        },
        {
          "@type": "Thing",
          name: "Sedan escape",
        },
        {
          "@type": "Thing",
          name: "Storm Cellar escape",
        },
        {
          "@type": "Thing",
          name: "Tower Farm Sewer Escape",
        },
        {
          "@type": "Thing",
          name: "Escape Noise Pings",
        },
        {
          "@type": "Thing",
          name: "Blackout",
        },
        {
          "@type": "Thing",
          name: "Civilian inventory",
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
          title="Halloween: The Game Multiplayer Guide – How to Escape as a Civilian"
          description="Learn where to search first, how to discover Residents and Special Targets, when to call police, and how to finish an escape before Michael interrupts it."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenMultiplayerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
