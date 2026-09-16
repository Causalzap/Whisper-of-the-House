import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsDragonSlayerContent from "@/data/runescape-dragonwilds/dragon-slayer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/dragon-slayer`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dragon-slayer-dragon-tooth.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-challenge-horn.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-velgar-air-magic.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-velgar-poison-attack.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dragon-slayer-rewards.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Dragon Slayer Guide – Beat Velgar",
  description:
    "Finish Dragon Slayer in RuneScape Dragonwilds: craft the Challenge Horn, prepare for poison, beat Velgar, and turn in Velgar's head.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Dragon Slayer Guide – Beat Velgar",
    description:
      "Craft the Challenge Horn, prepare Anti-poison, use strong damage against Velgar, survive liftoff attacks, and finish Dragon Slayer.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        alt: "Air magic being used against Velgar in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Dragon Slayer Guide – Beat Velgar",
    description:
      "Beat Velgar with Challenge Horn preparation, Anti-poison, Air damage, liftoff counters, and the correct quest turn-in.",
    images: [imageUrls[2]],
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
          name: "Dragon Slayer",
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
        "RuneScape: Dragonwilds Dragon Slayer Guide: How to Beat Velgar",
      description:
        "A complete Dragon Slayer walkthrough covering the Challenge Horn, Dragon Tooth and Bloodwood Sap, Velgar preparation, poison resistance, Air damage, liftoff attacks, and the quest turn-in.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-16",
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

const toc = [
  {
    id: "challenge-horn-materials",
    label: "Challenge Horn materials",
  },
  {
    id: "before-summoning-velgar",
    label: "Before summoning Velgar",
  },
  {
    id: "best-damage",
    label: "Best damage against Velgar",
  },
  {
    id: "poison-resistance",
    label: "Anti-poison",
  },
  {
    id: "liftoff",
    label: "Velgar liftoff attacks",
  },
  {
    id: "successful-attempt",
    label: "What changed on the kill",
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
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/achievements",
    label: "All 50 Achievements",
  },
  {
    href: "/runescape-dragonwilds/scorned-wilderness",
    label: "Scorned Wilderness Walkthrough",
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
          title="RuneScape: Dragonwilds Dragon Slayer Guide: How to Beat Velgar"
          description="Craft the Challenge Horn, prepare for Velgar's poison, use the damage that works best for your setup, survive the liftoff sequence, and turn in Velgar's head to finish Dragon Slayer."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 16, 2026"
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