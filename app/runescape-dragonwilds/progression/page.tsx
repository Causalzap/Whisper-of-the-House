import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonwildsProgressionContent from "@/data/runescape-dragonwilds/progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${siteUrl}/runescape-dragonwilds/progression`;

const metadataTitle =
  "RuneScape: Dragonwilds Progression Guide – What to Do Next";

const metadataDescription =
  "Follow the Dragonwilds progression order from Brynmoor and Velgar through Fellhollow, Fuzan, Scorned Wilderness and Queen Kuldra.";

const articleDescription =
  "Follow the RuneScape: Dragonwilds progression route from the early regions through Velgar, Fellhollow, Imaru, Dowdun Reach, Fuzan, Scorned Wilderness and Queen Kuldra, with practical upgrade and return points along the way.";

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-fuzan-to-scorned-transition.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-fellhollow-astral-path.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-fellhollow-blast-furnace.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "progression-order",
    label: "Progression order",
  },
  {
    id: "velgar",
    label: "When to fight Velgar",
  },
  {
    id: "fellhollow",
    label: "What to do after Velgar",
  },
  {
    id: "astral-form",
    label: "Fellhollow Astral Form",
  },
  {
    id: "steel-upgrade",
    label: "When to upgrade to Steel",
  },
  {
    id: "dowdun-reach",
    label: "After Imaru",
  },
  {
    id: "umbral-sands",
    label: "Umbral Sands & Fuzan",
  },
  {
    id: "scorned-transition",
    label: "After Fuzan",
  },
  {
    id: "kuldra",
    label: "When to fight Kuldra",
  },
  {
    id: "combat-progression",
    label: "Combat skill progression",
  },
  {
    id: "travel",
    label: "Lodestone progression",
  },
  {
    id: "returning-players",
    label: "Returning players",
  },
  {
    id: "after-kuldra",
    label: "After Queen Kuldra",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer & Velgar",
  },
  {
    href: "/runescape-dragonwilds/fast-travel",
    label: "Dragonwilds Fast Travel",
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
    href: "/runescape-dragonwilds/achievements",
    label: "All 50 Achievements",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 579,
        height: 444,
        alt: "Dragon Gate opening the route to the Scorned Wilderness in RuneScape Dragonwilds",
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
          name: "RuneScape: Dragonwilds",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Guide",
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
        "RuneScape: Dragonwilds Progression Guide – What to Do Next",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-18",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "Progression",
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
          name: "Dowdun Reach",
        },
        {
          "@type": "Thing",
          name: "Black Knight Titan",
        },
        {
          "@type": "Thing",
          name: "Umbral Sands",
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
          title="RuneScape: Dragonwilds Progression Guide – What to Do Next"
          description={articleDescription}
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/runescape-dragonwilds"
          breadcrumbBaseLabel="RuneScape: Dragonwilds"
          updatedAt="September 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonwildsProgressionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}