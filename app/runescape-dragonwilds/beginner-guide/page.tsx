import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsBeginnerGuideContent from "@/data/runescape-dragonwilds/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-beginner-rest-meter.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-builds-melee-ranged-magic.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-special-attack-meter.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-storage-ledger.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Beginner Guide – What to Do First",
  description:
    "RuneScape Dragonwilds beginner tips for Rest, food, water, combat, Power Level, Runes, crafting, Storage Ledger, and early progression.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Beginner Guide – What to Do First",
    description:
      "Learn what to prioritize first, how Rest works, which combat style to level, how Power Level works, and how to prepare for longer trips.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Low Rest reducing stamina and carry capacity in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Beginner Guide – What to Do First",
    description:
      "Practical beginner help for Rest, food, combat, Power Level, Runes, crafting, storage, and early progression.",
    images: [imageUrls[0]],
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
          name: "Beginner Guide",
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
        "RuneScape: Dragonwilds Beginner Guide: What to Do First",
      description:
        "Beginner help for RuneScape: Dragonwilds covering early priorities, food and water, Rest, crafting recipes, combat styles, Power Level, special attacks, parries, Runes, the Storage Ledger, and preparation for longer exploration.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-17",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds beginner guide",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Rest",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds combat",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Power Level",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Runes",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Storage Ledger",
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
    id: "first-priorities",
    label: "What to do first",
  },
  {
    id: "food-and-water",
    label: "Food and water",
  },
  {
    id: "rest",
    label: "Rest, stamina, and carry weight",
  },
  {
    id: "knowledge-and-recipes",
    label: "Missing crafting recipes",
  },
  {
    id: "classes-and-builds",
    label: "Classes and combat styles",
  },
  {
    id: "power-level",
    label: "Power Level",
  },
  {
    id: "special-meter",
    label: "Special Meter",
  },
  {
    id: "parry-block-evade",
    label: "Parry, block, and evade",
  },
  {
    id: "ranged-and-magic",
    label: "Ranged and Magic",
  },
  {
    id: "runes",
    label: "Rune management",
  },
  {
    id: "storage-ledger",
    label: "Storage Ledger",
  },
  {
    id: "ready-to-progress",
    label: "When to move forward",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/fast-travel",
    label: "Fast Travel, Lodestones and Vault Cores",
  },
  {
    href: "/runescape-dragonwilds/starter-base",
    label: "Starter Base Location and Layout",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer and Velgar Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/crossplay-coop",
    label: "Crossplay and Co-op Guide",
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
          title="RuneScape: Dragonwilds Beginner Guide: What to Do First"
          description="Get the early survival loop working, understand Rest and Power Level, choose a combat style, manage Runes, organize storage, and know when your setup is ready for longer trips."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}