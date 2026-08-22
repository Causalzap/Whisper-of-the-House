import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MortalShell2Content from "@/data/mortal-shell-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mortal-shell-2`;

const metadataTitle =
  "Mortal Shell 2 Guide Hub: Map, Area Order & Progression";

const metadataDescription =
  "Use this Mortal Shell 2 guide hub for map and area order, progression blockers, Shell and weapon detours, bosses, Night Mode, Zmey, and endgame.";

const heroImage =
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-marrow-keep-home.webp`;

const toc = [
  {
    id: "how-the-world-opens",
    label: "How progression works",
  },
  {
    id: "map-area-order",
    label: "Map & area order",
  },
  {
    id: "detours",
    label: "Worthwhile detours",
  },
  {
    id: "progression-blockers",
    label: "Progression blockers",
  },
  {
    id: "endgame-signals",
    label: "Zmey & endgame",
  },
  {
    id: "focused-guides",
    label: "Focused guides",
  },
  {
    id: "when-i-turn-back",
    label: "When to turn back",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: metadataTitle,
    description:
      "Understand the Mortal Shell 2 map and area order, decide which Shell and weapon detours are worth taking, solve progression blockers, and prepare for the final stretch.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Marrow Keep and the central progression hub in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Map, area order, progression blockers, Shell and weapon routes, bosses, Night Mode, Zmey, and endgame help for Mortal Shell 2.",
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
          name: "Mortal Shell 2 Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: metadataTitle,
      description:
        "A Mortal Shell 2 guide hub for understanding the world map and area order, choosing useful Shell and weapon detours, solving corruption and progression blockers, finding focused boss and equipment guides, and preparing for Zmey, the Unfound Path, and endgame.",
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-22",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
        width: 1600,
        height: 900,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 map",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 area order",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 progression",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Shells",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 weapons",
        },
        {
          "@type": "Thing",
          name: "Zmey",
        },
        {
          "@type": "Thing",
          name: "Walk the Unfound Path",
        },
      ],
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Mortal Shell 2 Focused Guides",
      numberOfItems: 17,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${pageUrl}/progression-guide`,
          name: "Mortal Shell 2 Progression Guide",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: `${pageUrl}/ova-gloom-siphon`,
          name: "Ova & Gloom Siphon Guide",
        },
        {
          "@type": "ListItem",
          position: 3,
          url: `${pageUrl}/night-mode`,
          name: "Night Mode Guide",
        },
        {
          "@type": "ListItem",
          position: 4,
          url: `${pageUrl}/difficulty-settings`,
          name: "Difficulty Settings Guide",
        },
        {
          "@type": "ListItem",
          position: 5,
          url: `${pageUrl}/all-shells-locations`,
          name: "All Shell Locations",
        },
        {
          "@type": "ListItem",
          position: 6,
          url: `${pageUrl}/heart-of-vatra-gragu`,
          name: "Heart of Vatra & Gragu Unlock Guide",
        },
        {
          "@type": "ListItem",
          position: 7,
          url: `${pageUrl}/how-to-unlock-eredrim`,
          name: "Eredrim Unlock Guide",
        },
        {
          "@type": "ListItem",
          position: 8,
          url: `${pageUrl}/how-to-unlock-genessa`,
          name: "Genessa Unlock Guide",
        },
        {
          "@type": "ListItem",
          position: 9,
          url: `${pageUrl}/sariel-boss-guide`,
          name: "Sariel & Chamber of Becoming Guide",
        },
        {
          "@type": "ListItem",
          position: 10,
          url: `${pageUrl}/weapons-guide`,
          name: "Best Weapons & Tier List",
        },
        {
          "@type": "ListItem",
          position: 11,
          url: `${pageUrl}/sidearms-guide`,
          name: "Sidearms Guide",
        },
        {
          "@type": "ListItem",
          position: 12,
          url: `${pageUrl}/great-martyrs-blade`,
          name: "Great Martyr's Blade & Frost Guide",
        },
        {
          "@type": "ListItem",
          position: 13,
          url: `${pageUrl}/shrine-of-trials-axe-dagger`,
          name: "Shrine of Trials & Axe and Dagger Guide",
        },
        {
          "@type": "ListItem",
          position: 14,
          url: `${pageUrl}/kings-crypt-veterans-battle-axe`,
          name: "King's Crypt & Veteran's Battle Axe Guide",
        },
        {
          "@type": "ListItem",
          position: 15,
          url: `${pageUrl}/tar-golem`,
          name: "Tar Golem Guide",
        },
        {
          "@type": "ListItem",
          position: 16,
          url: `${pageUrl}/magdalena-boss-guide`,
          name: "Magdalena Boss Guide",
        },
        {
          "@type": "ListItem",
          position: 17,
          url: `${pageUrl}/endings`,
          name: "Mortal Shell 2 Endings Guide",
        },
      ],
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
          title="Mortal Shell 2 Guide Hub: Map, Area Order & What to Do Next"
          description="I use Marrow Keep as my anchor, read the map as a set of progression and optional branches, and decide which Shell, weapon, boss, or endgame route is actually worth doing next."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 22, 2026"
          toc={toc}
        >
          <MortalShell2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}