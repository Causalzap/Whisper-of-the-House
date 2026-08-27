import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import KingsCryptBattleAxeContent from "@/data/mortal-shell-2/kings-crypt-veterans-battle-axe.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/kings-crypt-veterans-battle-axe`;

const metadataTitle =
  "Mortal Shell 2 Veteran's Battle Axe Location & King's Crypt Guide";

const metadataDescription =
  "Find the Veteran's Battle Axe on the lowest level of King's Crypt, north of Black Ridge Pass, with trap routes, the final guard, and missable loot.";

const articleDescription =
  "A practical Mortal Shell 2 Veteran's Battle Axe and King's Crypt guide covering the route north from Black Ridge Pass, the King's Crypt entrance, wall-arrow traps, floor spikes, the lowest-level weapon location, final guard, optional hidden wall and loot, running heavy attack, and whether the early dungeon detour is worth doing.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-route-map.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-entrance.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-wall-arrow-traps.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-floor-spikes.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-final-trap-room.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-pickup.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-running-heavy.webp`,
];

const toc = [
  {
    id: "veterans-battle-axe-location",
    label: "Battle Axe location",
  },
  {
    id: "reach-kings-crypt",
    label: "Reach King's Crypt",
  },
  {
    id: "kings-crypt-walkthrough",
    label: "King's Crypt walkthrough",
  },
  {
    id: "wall-arrows",
    label: "Wall-arrow traps",
  },
  {
    id: "floor-spikes",
    label: "Floor-spike traps",
  },
  {
    id: "optional-secret-wall",
    label: "Optional hidden wall",
  },
  {
    id: "final-trap-section",
    label: "Reach the lowest level",
  },
  {
    id: "final-guard",
    label: "Final guard",
  },
  {
    id: "veterans-battle-axe",
    label: "Get Veteran's Battle Axe",
  },
  {
    id: "running-heavy",
    label: "Why the Axe is good",
  },
  {
    id: "worth-doing-early",
    label: "Worth doing early?",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Weapon Tier List",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/shrine-of-trials-axe-dagger",
    label: "Axe & Dagger — Shrine of Trials",
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
    description:
      "Start north of Black Ridge Pass, descend through King's Crypt, survive the arrow and floor traps, and collect the Veteran's Battle Axe on the lowest level.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
    images: [
      {
        url: imageUrls[5],
        width: 1600,
        height: 900,
        alt: "Veteran's Battle Axe pickup on the lowest level of King's Crypt in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "King's Crypt route, wall arrows, floor spikes, lowest-level Battle Axe location, final guard, missable loot, and the Veteran's Battle Axe.",
    images: [imageUrls[5]],
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "King's Crypt & Veteran's Battle Axe",
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
        "Mortal Shell 2 Veteran's Battle Axe Location & King's Crypt Guide",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Veteran's Battle Axe",
        },
        {
          "@type": "Thing",
          name: "Veteran's Battle Axe location",
        },
        {
          "@type": "Thing",
          name: "How to get Veteran's Battle Axe",
        },
        {
          "@type": "Thing",
          name: "King's Crypt",
        },
        {
          "@type": "Thing",
          name: "King's Crypt walkthrough",
        },
        {
          "@type": "Thing",
          name: "Black Ridge Pass",
        },
        {
          "@type": "Thing",
          name: "King's Crypt wall-arrow traps",
        },
        {
          "@type": "Thing",
          name: "King's Crypt floor spikes",
        },
        {
          "@type": "Thing",
          name: "King's Crypt hidden wall",
        },
        {
          "@type": "Thing",
          name: "Dorsalite",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Veteran's Battle Axe Location & King's Crypt Guide"
          description="I start north of Black Ridge Pass, descend through King's Crypt while avoiding wall arrows and floor spikes, clear the final guard, and collect the Veteran's Battle Axe on the lowest level."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <KingsCryptBattleAxeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}