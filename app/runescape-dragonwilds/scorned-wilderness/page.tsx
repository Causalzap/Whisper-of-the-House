import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsScornedWildernessContent from "@/data/runescape-dragonwilds/scorned-wilderness.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/scorned-wilderness`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-scorned-wilderness-dragon-gate.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-commander-zilyana.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-anima-orb-pylon.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-shattered-stronghold-breakable-wall.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-cataclysm-keep-anima-puzzle.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Scorned Wilderness Walkthrough",
  description:
    "Enter the Scorned Wilderness, use Zilyana checkpoints, solve Anima puzzles, clear Shattered Stronghold and Cataclysm Keep, and reach Kuldra.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Scorned Wilderness Walkthrough",
    description:
      "Follow the Scorned Wilderness route from the Dragon Gate through Zilyana, Anima puzzles, poison sections, Shattered Stronghold, and Cataclysm Keep.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Dragon Gate leading into the Scorned Wilderness in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Scorned Wilderness Walkthrough",
    description:
      "Reach Commander Zilyana, use extraction points, solve the Anima route, and clear the Scorned Wilderness path to Kuldra.",
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
          name: "Scorned Wilderness",
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
        "RuneScape: Dragonwilds Scorned Wilderness Walkthrough",
      description:
        "A complete Scorned Wilderness route covering the Dragon Gate, Commander Zilyana, extraction points, Anima mechanics, Dragontail Vines, Fragments of Ghornfell, Shattered Stronghold, Cataclysm Keep, and the final elemental puzzle before Kuldra.",
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
          name: "Scorned Wilderness",
        },
        {
          "@type": "Thing",
          name: "Commander Zilyana",
        },
        {
          "@type": "Thing",
          name: "Dragontail Vines",
        },
        {
          "@type": "Thing",
          name: "Fragments of Ghornfell",
        },
        {
          "@type": "Thing",
          name: "Shattered Stronghold",
        },
        {
          "@type": "Thing",
          name: "Cataclysm Keep",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Anima puzzles",
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
    id: "how-to-reach-scorned-wilderness",
    label: "How to enter Scorned Wilderness",
  },
  {
    id: "commander-zilyana",
    label: "Commander Zilyana",
  },
  {
    id: "what-to-bring",
    label: "What to bring",
  },
  {
    id: "raid-checkpoints",
    label: "Extraction points",
  },
  {
    id: "anima-mechanics",
    label: "Anima and pylons",
  },
  {
    id: "dragontail-vines",
    label: "Dragontail Vines",
  },
  {
    id: "fragments-of-ghornfell",
    label: "Fragments of Ghornfell",
  },
  {
    id: "poison-maze",
    label: "Poison maze",
  },
  {
    id: "shattered-stronghold",
    label: "Shattered Stronghold",
  },
  {
    id: "cataclysm-keep",
    label: "Cataclysm Keep",
  },
  {
    id: "air-water-earth-fire",
    label: "Air, Water, Earth, Fire",
  },
  {
    id: "raid-materials",
    label: "Materials to keep",
  },
  {
    id: "before-kuldra",
    label: "Before Kuldra",
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
    href: "/runescape-dragonwilds/kuldra",
    label: "Queen Kuldra Boss Walkthrough",
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
          title="RuneScape: Dragonwilds Scorned Wilderness Walkthrough"
          description="Reach the Dragon Gate after Fuzan, prepare at Commander Zilyana, use extraction points, solve the Anima routes, clear the stronghold sections, and open the path to Kuldra."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsScornedWildernessContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}