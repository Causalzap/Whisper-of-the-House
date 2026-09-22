import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsDragonSlayerContent from "@/data/runescape-dragonwilds/dragon-slayer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/dragon-slayer`;

const metadataTitle =
  "RuneScape Dragonwilds Dragon Slayer Quest Walkthrough";

const metadataDescription =
  "Complete Dragon Slayer in RuneScape Dragonwilds: find Cathan, craft the Challenge Horn, beat Velgar, and turn in his head for the quest rewards.";

const articleDescription =
  "Start Dragon Slayer, follow Cathan's trail, gather the Challenge Horn materials, prepare for Velgar, survive the fight, and return his head to the Wise Old Man.";

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dragon-slayer-dragon-tooth.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-challenge-horn.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-velgar-air-magic.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-velgar-poison-attack.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dragon-slayer-rewards.webp`,
];

const heroImage = imageUrls[1];

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
        url: heroImage,
        alt: "Challenge Horn used during the Dragon Slayer quest in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "RuneScape: Dragonwilds Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dragon Slayer Quest",
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
        "RuneScape: Dragonwilds Dragon Slayer Quest Walkthrough",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-22",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "Dragon Slayer",
        },
        {
          "@type": "Thing",
          name: "Cathan",
        },
        {
          "@type": "Thing",
          name: "Velgar",
        },
        {
          "@type": "Thing",
          name: "Challenge Horn",
        },
        {
          "@type": "Thing",
          name: "Dragon Tooth",
        },
        {
          "@type": "Thing",
          name: "Bloodwood Sap",
        },
        {
          "@type": "Thing",
          name: "Anti-dragon Shield",
        },
        {
          "@type": "Thing",
          name: "Tome of the Dragon Slayer",
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
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

const toc = [
  {
    id: "start-dragon-slayer",
    label: "Start Dragon Slayer",
  },
  {
    id: "deer-antler",
    label: "Deer antler",
  },
  {
    id: "cathan-journal",
    label: "Cathan's Journal",
  },
  {
    id: "blue-flame-door",
    label: "Blue-flame door",
  },
  {
    id: "cathan-ghost",
    label: "Find Cathan",
  },
  {
    id: "challenge-horn-materials",
    label: "Craft the Challenge Horn",
  },
  {
    id: "before-summoning-velgar",
    label: "Prepare for Velgar",
  },
  {
    id: "summon-velgar",
    label: "Summon Velgar",
  },
  {
    id: "best-damage",
    label: "Damage against Velgar",
  },
  {
    id: "poison-resistance",
    label: "Anti-poison",
  },
  {
    id: "liftoff",
    label: "Velgar airborne attacks",
  },
  {
    id: "failed-attempts",
    label: "Why attempts fail",
  },
  {
    id: "after-velgar",
    label: "After beating Velgar",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/starter-base",
    label: "Best Starter Base Location & Layout",
  },
  {
    href: "/runescape-dragonwilds/progression",
    label: "RuneScape: Dragonwilds Progression Guide",
  },
  {
    href: "/runescape-dragonwilds/achievements",
    label: "All 50 Achievements",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="RuneScape: Dragonwilds Dragon Slayer Quest Walkthrough"
          description="Start Dragon Slayer, follow Cathan's trail, craft the Challenge Horn, prepare for Velgar, survive the fight, and return his head to the Wise Old Man."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsDragonSlayerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}