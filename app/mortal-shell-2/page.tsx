import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MortalShell2Content from "@/data/mortal-shell-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mortal-shell-2`;

const metadataTitle =
  "Mortal Shell 2 Guide: Progression, Shells, Weapons & Bosses";

const metadataDescription =
  "Use this Mortal Shell 2 guide hub for progression help, Shell and weapon routes, boss strategies, Ova blockers, difficulty options, and endings.";

const heroImage =
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-marrow-keep-home.webp`;

const toc = [
  {
    id: "where-to-go-next",
    label: "Where to go next",
  },
  {
    id: "progression-blockers",
    label: "Progression blockers",
  },
  {
    id: "shells",
    label: "Shells",
  },
  {
    id: "weapons-sidearms",
    label: "Weapons & Sidearms",
  },
  {
    id: "bosses",
    label: "Boss guides",
  },
  {
    id: "difficulty",
    label: "Difficulty & Night",
  },
  {
    id: "endgame",
    label: "Endgame & endings",
  },
  {
    id: "priority-order",
    label: "What I check first",
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
      "Find the Mortal Shell 2 guide that matches your current blocker, from progression and corruption to Shells, weapons, bosses, difficulty, and endings.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Marrow Keep in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Progression, Shells, weapons, bosses, Ova, difficulty and endings organized around the problem you are trying to solve.",
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
      name:
        "Mortal Shell 2 Guide: Progression, Shells, Weapons and Bosses",
      description:
        "A Mortal Shell 2 guide hub organized around real player blockers, with dedicated guides for progression, Ova and corruption, Shell unlocks, melee weapons, Sidearms, bosses, difficulty, Night Mode, and endings.",
      inLanguage: "en",
      dateModified: "2026-08-18",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImage,
      },
      about: {
        "@type": "VideoGame",
        name: "Mortal Shell II",
      },
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
      name: "Mortal Shell 2 Guides",
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
          url: `${pageUrl}/all-shells-locations`,
          name: "All Shell Locations",
        },
        {
          "@type": "ListItem",
          position: 4,
          url: `${pageUrl}/weapons-guide`,
          name: "Weapons Guide",
        },
        {
          "@type": "ListItem",
          position: 5,
          url: `${pageUrl}/sidearms-guide`,
          name: "Sidearms Guide",
        },
        {
          "@type": "ListItem",
          position: 6,
          url: `${pageUrl}/heart-of-vatra-gragu`,
          name: "Heart of Vatra & Gragu Guide",
        },
        {
          "@type": "ListItem",
          position: 7,
          url: `${pageUrl}/how-to-unlock-eredrim`,
          name: "How to Unlock Eredrim",
        },
        {
          "@type": "ListItem",
          position: 8,
          url: `${pageUrl}/how-to-unlock-genessa`,
          name: "How to Unlock Genessa",
        },
        {
          "@type": "ListItem",
          position: 9,
          url: `${pageUrl}/sariel-boss-guide`,
          name: "Sariel Boss Guide",
        },
        {
          "@type": "ListItem",
          position: 10,
          url: `${pageUrl}/shrine-of-trials-axe-dagger`,
          name: "Shrine of Trials & Axe and Dagger Guide",
        },
        {
          "@type": "ListItem",
          position: 11,
          url: `${pageUrl}/kings-crypt-veterans-battle-axe`,
          name: "King's Crypt & Veteran's Battle Axe Guide",
        },
        {
          "@type": "ListItem",
          position: 12,
          url: `${pageUrl}/great-martyrs-blade`,
          name: "Great Martyr's Blade Guide",
        },
        {
          "@type": "ListItem",
          position: 13,
          url: `${pageUrl}/tar-golem`,
          name: "Tar Golem Guide",
        },
        {
          "@type": "ListItem",
          position: 14,
          url: `${pageUrl}/magdalena-boss-guide`,
          name: "Magdalena Boss Guide",
        },
        {
          "@type": "ListItem",
          position: 15,
          url: `${pageUrl}/difficulty-settings`,
          name: "Difficulty Settings Guide",
        },
        {
          "@type": "ListItem",
          position: 16,
          url: `${pageUrl}/night-mode`,
          name: "Night Mode Guide",
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
          title="Mortal Shell 2 Guide Hub: What I Check When I Get Stuck"
          description="I use this Hub to identify whether my problem is progression, corruption, a Shell, a weapon, a boss, difficulty, or endgame, then jump straight to the guide that solves it."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
        >
          <MortalShell2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}