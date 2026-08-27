import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MortalShell2Content from "@/data/mortal-shell-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mortal-shell-2`;

const metadataTitle =
  "Mortal Shell 2 Guide: Progression, Map & Area Order";

const metadataDescription =
  "Use this Mortal Shell 2 guide for progression, map and area order, Shell and weapon detours, blockers, bosses, achievements, endings, and NG+.";

const heroImage =
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-marrow-keep-home.webp`;

const toc = [
  {
    id: "where-to-go-next",
    label: "Where to go next",
  },
  {
    id: "world-progression",
    label: "Progression & area order",
  },
  {
    id: "corruption-gates",
    label: "Black corruption",
  },
  {
    id: "detour-value",
    label: "Which detours are worth it",
  },
  {
    id: "route-too-early",
    label: "When a route is too early",
  },
  {
    id: "combat-difficulty",
    label: "Combat difficulty",
  },
  {
    id: "tar-golem",
    label: "Tar Golem",
  },
  {
    id: "boss-detours",
    label: "Boss detours",
  },
  {
    id: "completion-route",
    label: "Achievements & cleanup",
  },
  {
    id: "endgame",
    label: "Endgame & NG+",
  },
  {
    id: "how-i-read-the-world",
    label: "How I read the world",
  },
];

const guideItems = [
  {
    position: 1,
    name: "Mortal Shell 2 Progression Guide",
    url: `${pageUrl}/progression-guide`,
    description:
      "Follow the main progression route, area order, major gates, and path into the Unfound Path and endgame.",
  },
  {
    position: 2,
    name: "Ova & Gloom Siphon Guide",
    url: `${pageUrl}/ova-gloom-siphon`,
    description:
      "Recover Ova, use the Gloom Siphon, unlock Mether's Breath, clear corruption gates, and advance Beacon travel.",
  },
  {
    position: 3,
    name: "All Shell Locations",
    url: `${pageUrl}/all-shells-locations`,
    description:
      "Find all eight permanent Shells and compare the route cost of unlocking each one.",
  },
  {
    position: 4,
    name: "Heart of Vatra & Gragu Guide",
    url: `${pageUrl}/heart-of-vatra-gragu`,
    description:
      "Complete the Temple of Vatra offerings, recover the Heart, escape the sealed route, and unlock Gragu.",
  },
  {
    position: 5,
    name: "Eredrim Unlock Guide",
    url: `${pageUrl}/how-to-unlock-eredrim`,
    description:
      "Follow the Citadel-side route and complete the progression needed to unlock Eredrim.",
  },
  {
    position: 6,
    name: "Genessa Unlock Guide",
    url: `${pageUrl}/how-to-unlock-genessa`,
    description:
      "Reach Revenant Graves, complete the Sester's Censer route, and return to unlock Genessa.",
  },
  {
    position: 7,
    name: "Sariel & Chamber of Becoming Guide",
    url: `${pageUrl}/sariel-boss-guide`,
    description:
      "Follow the Chamber of Becoming route, defeat Sariel, and complete the Shell progression tied to the encounter.",
  },
  {
    position: 8,
    name: "Best Weapons & Weapon Tier List",
    url: `${pageUrl}/weapons-guide`,
    description:
      "Compare all eight melee weapons, their practical strengths, acquisition value, Infusions, and Tarstone setups.",
  },
  {
    position: 9,
    name: "All Sidearm Locations & Best Sidearm",
    url: `${pageUrl}/sidearms-guide`,
    description:
      "Find all eight Sidearms, compare their acquisition routes, and decide which ranged option fits the current Resolve economy.",
  },
  {
    position: 10,
    name: "Great Martyr's Blade & Frost Guide",
    url: `${pageUrl}/great-martyrs-blade`,
    description:
      "Reach the Great Martyr's Blade, complete the relevant prison route, and plan its Frost setup.",
  },
  {
    position: 11,
    name: "Shrine of Trials & Axe and Dagger Guide",
    url: `${pageUrl}/shrine-of-trials-axe-dagger`,
    description:
      "Get the Chapel Key, solve the Shrine of Trials puzzles, and collect Axe & Dagger.",
  },
  {
    position: 12,
    name: "King's Crypt & Veteran's Battle Axe Guide",
    url: `${pageUrl}/kings-crypt-veterans-battle-axe`,
    description:
      "Navigate King's Crypt traps, reach the lowest level, defeat the final guard, and collect the Veteran's Battle Axe.",
  },
  {
    position: 13,
    name: "Tar Golem Guide",
    url: `${pageUrl}/tar-golem`,
    description:
      "Learn whether the opening Tar Golem must be beaten, what changes after a win or loss, and how retries work.",
  },
  {
    position: 14,
    name: "Magdalena Boss Guide",
    url: `${pageUrl}/magdalena-boss-guide`,
    description:
      "Beat Magdalena, the Lady of the Woods, by reading her punish windows and later-phase pressure.",
  },
  {
    position: 15,
    name: "Difficulty Settings Guide",
    url: `${pageUrl}/difficulty-settings`,
    description:
      "Understand combat difficulty options, Slayer Seal decisions, and when a broader difficulty change makes sense.",
  },
  {
    position: 16,
    name: "Night Mode Guide",
    url: `${pageUrl}/night-mode`,
    description:
      "Unlock Night through Thestus and decide when its extra pressure and rewards are worth using.",
  },
  {
    position: 17,
    name: "Mortal Shell 2 Trophy & Achievement Guide",
    url: `${pageUrl}/achievements`,
    description:
      "Track all 53 achievements, protect the first-playthrough trophy windows, and plan collection and NG+ cleanup.",
  },
  {
    position: 18,
    name: "Mortal Shell 2 Endings Guide",
    url: `${pageUrl}/endings`,
    description:
      "Handle the main ending, Baghead secret ending, Send Ova decision, final commitment, and New Game Plus transition.",
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
      "Decide where to go next in Mortal Shell 2, recognize progression gates, judge Shell and weapon detours, and route bosses, achievements, endings, and NG+ to the right guide.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Marrow Keep and the central progression area in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Progression, map and area order, worthwhile detours, Shells, weapons, bosses, achievements, endings, and NG+ for Mortal Shell 2.",
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
        "A Mortal Shell 2 guide hub for deciding where to go next, reading progression gates and optional branches, choosing worthwhile Shell, weapon and Sidearm detours, handling boss and difficulty problems, tracking achievements, and preparing for endings and New Game Plus.",
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
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
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 guide",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 progression",
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
          name: "Mortal Shell 2 where to go next",
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
          name: "Mortal Shell 2 Sidearms",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 achievements",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 endings",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 New Game Plus",
        },
        {
          "@type": "Thing",
          name: "Walk the Unfound Path",
        },
      ],
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#guides`,
      },
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
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Mortal Shell 2 Guides",
      numberOfItems: guideItems.length,
      itemListElement: guideItems.map(
        ({ position, name, url, description }) => ({
          "@type": "ListItem",
          position,
          item: {
            "@type": "Article",
            name,
            url,
            description,
          },
        }),
      ),
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
          title="Mortal Shell 2 Guide: Progression, Map & What to Do Next"
          description="I use Marrow Keep as my anchor, separate progression gates from optional branches, and decide when a Shell, weapon, boss, achievement, or endgame route is actually worth doing."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
          toc={toc}
        >
          <MortalShell2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}