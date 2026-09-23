import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenGuideContent from "@/data/halloween-the-game/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/halloween-the-game`;

const metadataTitle =
  "Halloween: The Game Guide – Walkthrough, Challenges & Multiplayer";

const metadataDescription =
  "Find Halloween: The Game walkthroughs, challenges, multiplayer guides, best Civilians, items, escapes, achievements, Prestige, endings, and more.";

const articleDescription =
  "Choose the right Halloween: The Game guide for Story Mode, challenges, Civilian multiplayer, characters, items, escapes, Michael detainment, progression, Prestige, achievements, collectibles, and endings.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-guide-haddonfield-night.webp`;

const toc = [
  {
    id: "where-to-start",
    label: "Choose What You Need",
  },
  {
    id: "story",
    label: "Story Mode",
  },
  {
    id: "challenges",
    label: "Challenges",
  },
  {
    id: "multiplayer",
    label: "Civilian Multiplayer",
  },
  {
    id: "best-civilians",
    label: "Best Civilians",
  },
  {
    id: "items",
    label: "Items & Inventory",
  },
  {
    id: "escape-search",
    label: "Escape Decisions",
  },
  {
    id: "arrest-michael",
    label: "Arrest Michael",
  },
  {
    id: "progression",
    label: "Progression & Perks",
  },
  {
    id: "prestige",
    label: "Prestige",
  },
  {
    id: "endings",
    label: "Endings",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "collectibles",
    label: "Collectibles",
  },
  {
    id: "multiplayer-maps",
    label: "Multiplayer Maps",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/challenges",
    label: "All Challenges Guide",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/best-civilians",
    label: "Best Civilians Guide",
  },
  {
    href: "/halloween-the-game/items-guide",
    label: "All Items & Uses Guide",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks Guide",
  },
  {
    href: "/halloween-the-game/prestige-guide",
    label: "Prestige Guide",
  },
  {
    href: "/halloween-the-game/achievements",
    label: "All 50 Achievements Guide",
  },
  {
    href: "/halloween-the-game/endings",
    label: "Endings Guide",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Michael Myers moving through Haddonfield at night in Halloween The Game",
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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Halloween: The Game Guide",
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

      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      image: [heroImage],
      inLanguage: "en",

      datePublished: "2026-09-04",
      dateModified: "2026-09-23",

      articleSection: "Halloween: The Game Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game walkthrough",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game multiplayer",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Civilians",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game items",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game escape routes",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game progression",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Prestige",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game achievements",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game endings",
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
      url: siteUrl,
      name: "Whisper of the House",
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
          title="Halloween: The Game Guide – Walkthrough, Challenges & Multiplayer"
          description={articleDescription}
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}