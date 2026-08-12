import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownHubContent from "@/data/doloc-town/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/doloc-town`;

const imageUrl = `${siteUrl}/images/doloc-town/doloc-town-hub.webp`;

export const metadata: Metadata = {
  title: "Doloc Town Guide: Walkthrough, Farming, Fishing & More",
  description:
    "Use the Doloc Town guide hub for walkthroughs, money, crops, fishing, automation, genetics, animals, achievements, weather and progression help.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Guide Hub",
    description:
      "A practical Doloc Town guide hub connecting the main story, money, crops, fishing, automation, genetics, livestock, weather and achievement guides.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrl,
        width: 1280,
        height: 720,
        alt: "Doloc Town farm and post-apocalyptic world used as the main guide hub image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Guide Hub",
    description:
      "Find the right Doloc Town guide for progression, money, farming, fishing, automation, genetics, animals, weather and achievements.",
    images: [imageUrl],
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
          name: "Doloc Town Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Doloc Town Guide Hub",
      description:
        "A player-focused Doloc Town guide hub that routes readers to the correct Owner Page for main-story progression, Environmental Modifier repair, money decisions, crop profit, acid rain, farming automation, crop genetics, fishing, fish breeding, animals, and achievement cleanup.",
      image: imageUrl,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: {
        "@type": "VideoGame",
        name: "Doloc Town",
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Doloc Town Guides",
        numberOfItems: 11,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Walkthrough and Progression Guide",
            url: `${pageUrl}/walkthrough`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Environmental Modifier Guide",
            url: `${pageUrl}/environmental-modifier`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Money Guide",
            url: `${pageUrl}/money-guide`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Best Crops and Profit Calculator",
            url: `${pageUrl}/best-crops`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Acid Rain and Crop Protection Guide",
            url: `${pageUrl}/acid-rain`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Farming Automation Guide",
            url: `${pageUrl}/farming-automation`,
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Crop Genetics Guide",
            url: `${pageUrl}/crop-genetics`,
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Fishing Guide",
            url: `${pageUrl}/fishing-guide`,
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Fish Breeding Guide",
            url: `${pageUrl}/fish-breeding`,
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "Animals and Livestock Guide",
            url: `${pageUrl}/animals`,
          },
          {
            "@type": "ListItem",
            position: 11,
            name: "Achievements Guide",
            url: `${pageUrl}/achievements`,
          },
        ],
      },
    },
  ],
};

const toc = [
  { id: "start-with-progression", label: "Start with progression" },
  { id: "environmental-modifier", label: "Environmental Modifier" },
  { id: "money-and-farm", label: "Money and crop profit" },
  { id: "weather-and-automation", label: "Weather and automation" },
  { id: "advanced-farm-systems", label: "Crop genetics" },
  { id: "fishing", label: "Fishing and fish breeding" },
  { id: "animals", label: "Animals and livestock" },
  { id: "friendship-and-small-topics", label: "Friendship and smaller topics" },
  { id: "completion", label: "Achievement cleanup" },
  { id: "priority-order", label: "System priority order" },
  { id: "guide-list", label: "All Doloc Town guides" },
  { id: "coverage-boundary", label: "When to add another guide" },
];

const relatedLinks = [
  { href: "/doloc-town/walkthrough", label: "Doloc Town Walkthrough" },
  { href: "/doloc-town/money-guide", label: "Doloc Town Money Guide" },
  { href: "/doloc-town/best-crops", label: "Best Crops and Profit Calculator" },
  { href: "/doloc-town/fishing-guide", label: "Doloc Town Fishing Guide" },
  { href: "/doloc-town/achievements", label: "Doloc Town Achievements Guide" },
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
          title="Doloc Town Guide Hub"
          description="I use this hub as a decision map: start with the current blocker, then move to the Owner Page for story progression, money, crops, weather, automation, genetics, fishing, livestock, or completion."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Doloc Town"
          heading="Looking for another game after Doloc Town?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />

      </main>

      <Footer />
    </>
  );
}