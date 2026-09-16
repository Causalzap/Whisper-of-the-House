import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsContent from "@/data/runescape-dragonwilds/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/runescape-dragonwilds`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-fellhollow-astral-path.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-fellhollow-blast-furnace.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Guide – Progression & Boss Order",
  description:
    "Follow RuneScape Dragonwilds progression from Brynmoor and Ghornfell through Velgar, Imaru, Fuzan, Scorned Wilderness, and Queen Kuldra.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Guide – Progression & Boss Order",
    description:
      "Follow the main region and boss order, know when to upgrade gear, move through Fellhollow and Umbral Sands, and reach Queen Kuldra.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Astral Form revealing a progression route through Fellhollow in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Guide – Progression & Boss Order",
    description:
      "The main RuneScape Dragonwilds route from Brynmoor and Ghornfell to Velgar, Fellhollow, Fuzan, Scorned Wilderness, and Kuldra.",
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
        "RuneScape: Dragonwilds Guide: Progression & Boss Order",
      description:
        "A RuneScape: Dragonwilds progression guide covering the route through Brynmoor, Ghornfell, Velgar, Fellhollow, Imaru, Dowdun Reach, the Black Knight Titan, Umbral Sands, Fuzan, Scorned Wilderness, and Queen Kuldra.",
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
          name: "RuneScape Dragonwilds progression",
        },
        {
          "@type": "Thing",
          name: "Brynmoor",
        },
        {
          "@type": "Thing",
          name: "Ghornfell",
        },
        {
          "@type": "Thing",
          name: "Fellhollow",
        },
        {
          "@type": "Thing",
          name: "Dowdun Reach",
        },
        {
          "@type": "Thing",
          name: "Umbral Sands",
        },
        {
          "@type": "Thing",
          name: "Scorned Wilderness",
        },
        {
          "@type": "Thing",
          name: "Velgar",
        },
        {
          "@type": "Thing",
          name: "Queen Kuldra",
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
    id: "progression-order",
    label: "Progression order",
  },
  {
    id: "dragon-slayer",
    label: "Dragon Slayer and Velgar",
  },
  {
    id: "fellhollow",
    label: "Fellhollow after Velgar",
  },
  {
    id: "astral-form",
    label: "Astral Form routes",
  },
  {
    id: "steel-upgrade",
    label: "When to make Steel gear",
  },
  {
    id: "dowdun-reach",
    label: "Dowdun Reach",
  },
  {
    id: "umbral-sands",
    label: "Umbral Sands",
  },
  {
    id: "scorned-wilderness",
    label: "Scorned Wilderness",
  },
  {
    id: "kuldra",
    label: "Queen Kuldra",
  },
  {
    id: "combat-choice",
    label: "Combat style",
  },
  {
    id: "version-1",
    label: "What changed in 1.0",
  },
  {
    id: "after-kuldra",
    label: "After Kuldra",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer and Velgar Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/scorned-wilderness",
    label: "Scorned Wilderness Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/kuldra",
    label: "Queen Kuldra Boss Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/achievements",
    label: "All 50 Achievements",
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
          title="RuneScape: Dragonwilds Guide: Progression & Boss Order"
          description="Follow the main route from Brynmoor and Ghornfell through Velgar, Fellhollow, Dowdun Reach, Umbral Sands, Scorned Wilderness, and Queen Kuldra, with practical gear-upgrade points along the way."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}