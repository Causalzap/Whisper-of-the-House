import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShardsOfLifeContent from "@/data/the-adventures-of-elliot/shards-of-life-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/shards-of-life-locations`;

const imageUrls = [
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-of-life-key-item.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-chamber-of-light-shard-chest.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-hidden-cave-entrance.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-grassy-path-treasure-chest.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-mirror-puzzle-route.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-bomb-rock-route.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-cracked-floor-route.webp`,
];

const toc = [
  { id: "shards-of-life-locations", label: "Shards of Life locations" },
  {
    id: "shards-shrines-and-secret-routes",
    label: "Shards, Shrines and secrets",
  },
  { id: "confirmed-route-details", label: "Confirmed route details" },
  { id: "route-types", label: "Route types" },
  { id: "tracking-checklist", label: "Tracking checklist" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/the-adventures-of-elliot",
    label: "The Adventures of Elliot Guide Hub",
  },
  {
    href: "/the-adventures-of-elliot/walkthrough",
    label: "The Adventures of Elliot Walkthrough",
  },
  {
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
  },
  {
    href: "/the-adventures-of-elliot/cat-locations",
    label: "The Adventures of Elliot Cat Locations",
  },
  {
    href: "/the-adventures-of-elliot/achievements-guide",
    label: "The Adventures of Elliot Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "The Adventures of Elliot Shards of Life Locations Guide",
  description:
    "Find Shards of Life in The Adventures of Elliot with route clues, 4-Shard HP upgrades, Shrines of Life, Secret Treasure Routes, cracked walls and caves.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Adventures of Elliot Shards of Life Locations: Route Clues, Shrines and Secret Treasure Routes",
    description:
      "Track Shards of Life in The Adventures of Elliot with confirmed route clues, Chamber of Light, side caves, grassy side paths, mirror puzzles, bomb rocks, cracked walls, Secret Treasure Routes, cracked-floor rooms, Shrines of Life, and 4-Shard max HP upgrades.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Shard of Life key item in The Adventures of Elliot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adventures of Elliot Shards of Life Guide",
    description:
      "Track Shards with route clues, 4-Shard HP upgrades, Shrines, Secret Treasure Routes, cracked walls, caves and puzzle routes.",
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
          name: "The Adventures of Elliot Guide",
          item: `${siteUrl}/the-adventures-of-elliot`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shards of Life Locations",
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
        "The Adventures of Elliot Shards of Life Locations Guide: Route Clues, Shrines of Life, Secret Treasure Routes, Cracked Walls and Max HP Upgrades",
      description:
        "A player-focused Shards of Life locations guide for The Adventures of Elliot: The Millennium Tales covering confirmed Shard routes, 4-Shard max HP upgrades, the difference between Shards of Life and Shrines of Life, Secret Treasure Routes opened by cracked walls, Chamber of Light, hidden caves, nearby reward chests, grassy side paths, mirror puzzle chests, bomb-rock paths, cracked-floor routes, later cave challenge pickups, route-type tracking, cleanup mistakes, and how to write Shard notes by area, age, room name, landmark, required tool, and collection status.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Adventures of Elliot: The Millennium Tales",
        },
        { "@type": "Thing", name: "The Adventures of Elliot Shards of Life" },
        {
          "@type": "Thing",
          name: "The Adventures of Elliot Shards of Life locations",
        },
        { "@type": "Thing", name: "Shard of Life" },
        { "@type": "Thing", name: "Shrine of Life" },
        { "@type": "Thing", name: "Secret Treasure Routes" },
        { "@type": "Thing", name: "The Adventures of Elliot max HP upgrade" },
        { "@type": "Thing", name: "4 Shards of Life" },
        { "@type": "Thing", name: "Chamber of Light" },
        { "@type": "Thing", name: "The Adventures of Elliot hidden caves" },
        { "@type": "Thing", name: "The Adventures of Elliot cracked walls" },
        { "@type": "Thing", name: "The Adventures of Elliot bomb rocks" },
        { "@type": "Thing", name: "The Adventures of Elliot mirror puzzle" },
        { "@type": "Thing", name: "The Adventures of Elliot cracked floor" },
        {
          "@type": "Thing",
          name: "The Adventures of Elliot route clues",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Shards of Life in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shards of Life are health-upgrade fragments in The Adventures of Elliot: The Millennium Tales. Collecting 4 Shards of Life gives Elliot a max HP increase.",
          },
        },
        {
          "@type": "Question",
          name:
            "Are Shards of Life and Shrines of Life the same thing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Shards of Life are collectible fragments, while Shrines of Life are separate challenge-style locations with combat, puzzles, and rewards.",
          },
        },
        {
          "@type": "Question",
          name:
            "Do 4 Shards of Life unlock a Shrine of Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Four Shards of Life give a max HP increase. A Shrine of Life is a separate map location, not something unlocked by collecting 4 Shards.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can Shrines of Life contain Shards of Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, a Shrine of Life can contain a Shard reward, so track the Shrine location and the Shard pickup separately.",
          },
        },
        {
          "@type": "Question",
          name:
            "What are Secret Treasure Routes in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Secret Treasure Routes are hidden treasure areas opened by bombing cracked walls. They are different from ordinary bomb-rock paths.",
          },
        },
        {
          "@type": "Question",
          name:
            "Should I collect Shards of Life immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Collect reachable Shards immediately. If a Shard route is blocked by a tool, story objective, Shrine challenge, cracked wall, Secret Treasure Route, or another age, mark it by route clue and return later.",
          },
        },
        {
          "@type": "Question",
          name:
            "Why do several Shard pickups look the same?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many Shards end with similar chest or key-item screens. Track Shards by route clues such as room names, cave entrances, grassy paths, bomb rocks, cracked walls, Secret Treasure Routes, mirror puzzles, and cracked floors.",
          },
        },
        {
          "@type": "Question",
          name:
            "Why can I see a chest but not reach it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "That usually means the chest needs another entrance, tool, route, story step, Shrine challenge, Secret Treasure Route, or age. Do not waste too much time forcing it early.",
          },
        },
        {
          "@type": "Question",
          name:
            "Do cracked walls hide Shards of Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cracked walls can open Secret Treasure Routes, which may contain Shards or other strong rewards. Return with bombs and track the wall location.",
          },
        },
        {
          "@type": "Question",
          name:
            "Are cracked-floor rooms worth checking?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cracked-floor rooms can hide rewards after a movement or hazard check.",
          },
        },
        {
          "@type": "Question",
          name:
            "What should I write down for Shard cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Track area, age, room name, nearby landmark, route type, required tool or progress, and whether the Shard is already collected.",
          },
        },
        {
          "@type": "Question",
          name:
            "Is this a complete Shard of Life guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This is a confirmed-route version and will be expanded with more exact area names and late-game Shards as more routes are verified.",
          },
        },
        {
          "@type": "Question",
          name:
            "What should I read next after this Shards of Life guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Cat Locations guide for cats and rewards, the Walkthrough for route progress, or return to the Guide Hub for all available guides.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Track The Adventures of Elliot Shards by Route Clue"
          description="Find Shards of Life by route clue, separate Shards from Shrines of Life, track Secret Treasure Routes, and avoid losing max HP upgrades during cleanup."
          gameTitle="The Adventures of Elliot"
          gameHref="/the-adventures-of-elliot"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ShardsOfLifeContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
