import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenGuideContent from "@/data/halloween-the-game/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/halloween-the-game`;

const metadataTitle =
  "Halloween: The Game Guide – Walkthrough, Multiplayer & More";

const metadataDescription =
  "Find Halloween: The Game guides for the walkthrough, multiplayer, best Civilians, items, escapes, challenges, achievements, Prestige, Michael arrest, and endings.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-guide-haddonfield-night.webp`;

const toc = [
  {
    id: "where-to-start",
    label: "Choose what you need now",
  },
  {
    id: "story",
    label: "Story Mode walkthrough",
  },
  {
    id: "prologue-challenges",
    label: "Prologue challenges",
  },
  {
    id: "chapter-challenges",
    label: "Chapter 2 & 4 walkthroughs",
  },
  {
    id: "multiplayer",
    label: "Civilian multiplayer",
  },
  {
    id: "best-civilians",
    label: "Best Civilians",
  },
  {
    id: "items",
    label: "Items & inventory",
  },
  {
    id: "escape-search",
    label: "Escape and search decisions",
  },
  {
    id: "arrest-michael",
    label: "How to arrest Michael",
  },
  {
    id: "progression",
    label: "Progression & perks",
  },
  {
    id: "prestige",
    label: "Prestige challenges",
  },
  {
    id: "endings",
    label: "Story endings",
  },
  {
    id: "achievements",
    label: "All 50 achievements",
  },
  {
    id: "collectibles",
    label: "Collectibles",
  },
  {
    id: "multiplayer-maps",
    label: "Multiplayer maps",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/items-guide",
    label: "All Items & Uses Guide",
  },
  {
    href: "/halloween-the-game/best-civilians",
    label: "Best Civilians Tier List",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Chapter 2 Main Street Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "Chapter 4 Babysitters Walkthrough",
  },
  {
    href: "/halloween-the-game/achievements",
    label: "All 50 Achievements Guide",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks Guide",
  },
  {
    href: "/halloween-the-game/prestige-guide",
    label: "Prestige Challenges & Rewards Guide",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
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
    title: "Halloween: The Game Guide – Walkthrough, Multiplayer & More",
    description:
      "Choose the right Halloween: The Game guide for Story Mode, multiplayer, best Civilians, items, escapes, challenges, achievements, progression, Prestige, Michael arrest, and endings.",

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
    title: "Halloween: The Game Guide – Walkthrough, Multiplayer & More",
    description:
      "Find the right guide for Story Mode, multiplayer, best Civilians, items, escapes, challenges, achievements, Prestige, Michael arrest, and endings.",

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

      headline:
        "Halloween: The Game Guide – Walkthrough, Multiplayer, Best Civilians, Escapes and More",

      description:
        "A Halloween: The Game guide for choosing what to do next across Story Mode walkthroughs, chapter challenges, Civilian multiplayer, best Civilians, items and inventory, escape routes, achievements, Michael Myers arrest, progression, perks, Prestige, collectibles, and alternate endings.",

      url: pageUrl,

      image: [heroImage],

      inLanguage: "en",

      datePublished: "2026-09-04",
      dateModified: "2026-09-17",

      articleSection: "Halloween: The Game Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game walkthrough",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Story Mode",
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
          name: "Halloween: The Game best Civilians",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game items",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game inventory",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game escape routes",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game achievements",
        },
        {
          "@type": "Thing",
          name: "Michael Myers arrest",
        },
        {
          "@type": "Thing",
          name: "Michael Myers detainment",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game progression",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game perks",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Prestige",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game endings",
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
          title="Halloween: The Game Guide – Pick the Right Route for Your Next Goal"
          description="Choose the right path for Story Mode, a chapter challenge, Civilian multiplayer, the best Civilian for your role, an escape route, achievement cleanup, progression, Prestige, Michael arrest, or another ending."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
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