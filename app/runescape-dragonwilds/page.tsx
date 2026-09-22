import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsContent from "@/data/runescape-dragonwilds/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/runescape-dragonwilds`;

const metadataTitle =
  "RuneScape Dragonwilds Guide & Walkthrough – Progression & Bosses";

const metadataDescription =
  "Follow RuneScape Dragonwilds from beginner survival through Dragon Slayer, region progression, Scorned Wilderness, Queen Kuldra, co-op, and post-game goals.";

const articleDescription =
  "Find where to go next in RuneScape: Dragonwilds, from early survival and base setup through Dragon Slayer, later regions, Scorned Wilderness, Queen Kuldra, co-op, achievements, and post-game goals.";

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-hub.webp`,
];

const heroImage = imageUrls[0];

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
        alt: "RuneScape Dragonwilds progression guide from the opening regions to Queen Kuldra",
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
        "RuneScape Dragonwilds Guide & Walkthrough – Progression & Bosses",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-22",
      articleSection: "Game Guides",
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
          name: "RuneScape Dragonwilds walkthrough",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds beginner survival",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds base building",
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
          name: "Fellhollow",
        },
        {
          "@type": "Thing",
          name: "Imaru",
        },
        {
          "@type": "Thing",
          name: "Black Knight Titan",
        },
        {
          "@type": "Thing",
          name: "Fuzan",
        },
        {
          "@type": "Thing",
          name: "Scorned Wilderness",
        },
        {
          "@type": "Thing",
          name: "Queen Kuldra",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds crossplay",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds achievements",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "main-progression",
    label: "Main progression order",
  },
  {
    id: "dragon-slayer",
    label: "Dragon Slayer",
  },
  {
    id: "base-and-travel",
    label: "Base and fast travel",
  },
  {
    id: "after-fuzan",
    label: "Where to go after Fuzan",
  },
  {
    id: "queen-kuldra",
    label: "Queen Kuldra",
  },
  {
    id: "combat",
    label: "Combat progression",
  },
  {
    id: "coop",
    label: "Crossplay and co-op",
  },
  {
    id: "returning-players",
    label: "Returning players",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "after-kuldra",
    label: "After Queen Kuldra",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds/progression",
    label: "RuneScape: Dragonwilds Progression Guide",
  },
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/starter-base",
    label: "Best Base Locations & Starter Base Layout",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer Quest Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/fast-travel",
    label: "Fast Travel & Lodestones",
  },
  {
    href: "/runescape-dragonwilds/scorned-wilderness",
    label: "Scorned Wilderness Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/kuldra",
    label: "Queen Kuldra Boss Guide",
  },
  {
    href: "/runescape-dragonwilds/crossplay-coop",
    label: "Crossplay & Co-op",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="RuneScape: Dragonwilds Guide & Walkthrough"
          description="Find where to go next, what to prepare before each major region and boss, when to improve your base or travel network, and how the 1.0 route continues through Queen Kuldra."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 22, 2026"
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