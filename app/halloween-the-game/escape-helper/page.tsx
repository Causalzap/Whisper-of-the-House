import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenEscapeHelperContent from "@/data/halloween-the-game/escape-helper.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/escape-helper`;

const imageUrls = [
  `${siteUrl}/images/halloween-the-game/halloween-escape-helper-exit-key-axe.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-escape-helper-team-sedan-items.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-escape-helper-police-wagon.webp`,
];

export const metadata: Metadata = {
  title: "Halloween: The Game Escape & Spawn Helper",
  description:
    "Choose your map, found exits, team items, barriers, and checked spawn areas to get the best escape route and next place to search.",
  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Halloween: The Game Escape & Spawn Helper",
    description:
      "Track exits, team items, barriers, and checked spawn areas during a match to find the best escape and your next useful search.",
    siteName: "Whisper of the House",

    images: [
      {
        url: imageUrls[0],
        width: 688,
        height: 499,
        alt: "Halloween The Game escape route with another barrier remaining after the first access step",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Escape & Spawn Helper",
    description:
      "Choose your current match state to find the best escape route, missing requirement, next search area, and fallback.",
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
          name: "Halloween: The Game Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Escape & Spawn Helper",
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
        "Halloween: The Game Escape Helper & Spawn Finder",

      description:
        "An interactive Halloween: The Game multiplayer helper that compares Sedan, Storm Cellar, Escape Gate, and Police Wagon routes using discovered exits, team items, barriers, known spawn areas, and the player's current match goal.",

      image: imageUrls,

      inLanguage: "en",

      datePublished: "2026-09-09",
      dateModified: "2026-09-09",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game escape routes",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Sedan escape",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Storm Cellar",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Escape Gate",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Gas locations",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Bolt Cutters",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Police Wagon",
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
    id: "fewest-unknowns",
    label: "Choose the escape with fewer unknowns",
  },
  {
    id: "found-versus-ready",
    label: "Found vs. ready escapes",
  },
  {
    id: "spawn-search",
    label: "Search known spawn areas",
  },
  {
    id: "stop-searching",
    label: "Know when to stop searching",
  },
  {
    id: "police-wagon",
    label: "Police Wagon",
  },
  {
    id: "achievement-runs",
    label: "Achievement runs",
  },
  {
    id: "live-route-example",
    label: "Live route example",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game",
    label: "Halloween: The Game Guide Hub",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Halloween: The Game Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/achievements",
    label: "Halloween: The Game Achievements Guide",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Halloween: The Game Progression and Perks",
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
          title="Halloween: The Game Escape Helper & Spawn Finder"
          description="Update your map, discovered exits, team items, route barriers, and checked spawn areas during a multiplayer match to see which escape is worth committing to and what to do next."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenEscapeHelperContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}