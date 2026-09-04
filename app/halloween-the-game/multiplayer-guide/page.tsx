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
  "Learn what to do first as a Civilian, call police, manage items, open car or Storm Cellar escapes, switch routes, and know when to leave.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-first-objectives.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-call-police.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-police-call-retry.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-car-items.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-resident-call-help.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-tornado-shelter-padlock.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-multiplayer-open-exit-decision.webp`,
];

const toc = [
  {
    id: "opening-route",
    label: "What to do first",
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
    label: "How to use residents",
  },
  {
    id: "car-escape",
    label: "How the car escape works",
  },
  {
    id: "storm-cellar",
    label: "How the Storm Cellar works",
  },
  {
    id: "switch-routes",
    label: "When to switch escape routes",
  },
  {
    id: "police-window",
    label: "Use police and weapons for time",
  },
  {
    id: "open-exit",
    label: "When to take an open exit",
  },
  {
    id: "next-match",
    label: "How to approach the next match",
  },
];

const relatedLinks = [
    {
      href: "/halloween-the-game/how-to-arrest-michael-myers",
      label: "How to Arrest Michael Myers",
    },
    {
      href: "/halloween-the-game/progression-perks",
      label: "Progression, Perks & Prestige",
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
    title: "Halloween: The Game Multiplayer Guide — Civilian Survival",
    description:
      "Build a Civilian match around real escape progress: make police calls, connect items to objectives, use residents, finish the car or Storm Cellar, and leave when the route is ready.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Civilian multiplayer opening objectives",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Multiplayer Guide",
    description:
      "Learn the Civilian opening, police calls, inventory choices, car and Storm Cellar routes, and when an open exit is worth taking.",
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
      description:
        "A practical Civilian multiplayer guide for Halloween: The Game covering the opening search, safe police calls and retries, inventory decisions, resident commands, the three-step car escape, variable Storm Cellar barriers, route switching, using police pressure and weapons to create interaction time, and deciding whether to rescue teammates or take an already-open exit.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
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
          name: "Police calls",
        },
        {
          "@type": "Thing",
          name: "Car escape",
        },
        {
          "@type": "Thing",
          name: "Storm Cellar escape",
        },
        {
          "@type": "Thing",
          name: "Haddonfield residents",
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
          title="Turn the First Useful Find Into an Escape Plan"
          description="Civilian matches get easier once every item, resident, police call, and fight is judged by whether it moves a real escape forward."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
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