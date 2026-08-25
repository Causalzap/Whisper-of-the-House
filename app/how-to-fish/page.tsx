import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishContent from "@/data/how-to-fish/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/how-to-fish`;

const metadataTitle =
  "How to Fish Walkthrough: All Islands & Progression Guide";

const metadataDescription =
  "How to Fish has five main island stops. Follow the full progression route, solve NPC and boss gates, use Radar coordinates, and reach the Volcano finale.";

const articleDescription =
  "A practical How to Fish walkthrough covering all five main island stops, how island progression works, NPC and boss gates, Radar coordinates, the Spider Crab, Giant Piranha, Pufferfish, Terrorizing Bird, scientist's Bowhead Whale experiment, Mutated Bowhead Whale, and the final route toward the mainland.";

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-scientist-whale-mission.webp`,
];

const toc = [
  {
    id: "how-many-islands",
    label: "How many islands?",
  },
  {
    id: "how-progression-works",
    label: "How island progression works",
  },
  {
    id: "lighthouse",
    label: "Island 1: Lighthouse",
  },
  {
    id: "radar-coordinates",
    label: "Radar and coordinates",
  },
  {
    id: "island-2",
    label: "Island 2: Forest",
  },
  {
    id: "island-3",
    label: "Island 3: Desert",
  },
  {
    id: "island-4",
    label: "Island 4: Rocks",
  },
  {
    id: "military-volcano",
    label: "Island 5: Military & Volcano",
  },
  {
    id: "mutated-bowhead-whale",
    label: "Mutated Bowhead Whale",
  },
  {
    id: "upgrade-priority",
    label: "When to upgrade",
  },
  {
    id: "all-fish",
    label: "All 49 creatures",
  },
  {
    id: "after-story",
    label: "After the story",
  },
  {
    id: "where-to-go-when-stuck",
    label: "Where to go when stuck",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish/spider-crab",
    label: "How to Beat the Spider Crab",
  },
  {
    href: "/how-to-fish/leech-bait",
    label: "Leech Bait Guide",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/endangered-fish",
    label: "Endangered Fish & Carrot Guide",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "How to Beat the Pufferfish",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "All Bosses & Strategies",
  },
  {
    href: "/how-to-fish/all-fish-locations",
    label: "All 49 Creatures & Locations",
  },
  {
    href: "/how-to-fish/achievements",
    label: "All 28 Achievements",
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
      "How to Fish has five main island stops. Follow the route from the Lighthouse through Island 2, Island 3, Island 4, the military and Volcano area, and the final mainland progression.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-21",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Scientist explaining the Bowhead Whale experiment during late-game progression in How to Fish",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Follow all five How to Fish island stops, solve NPC and boss progression gates, use Radar coordinates, and reach the Volcano and final mainland route.",
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
          name: "How to Fish Guide",
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
        "How to Fish Walkthrough: All Islands & Progression Guide",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-21",
      dateModified: "2026-08-25",
      articleSection: "How to Fish Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "How to Fish walkthrough",
        },
        {
          "@type": "Thing",
          name: "How to Fish progression",
        },
        {
          "@type": "Thing",
          name: "How to Fish islands",
        },
        {
          "@type": "Thing",
          name: "How many islands are in How to Fish",
        },
        {
          "@type": "Thing",
          name: "How to Fish Island 2",
        },
        {
          "@type": "Thing",
          name: "How to Fish Island 3",
        },
        {
          "@type": "Thing",
          name: "How to Fish Island 4",
        },
        {
          "@type": "Thing",
          name: "How to Fish Island 5",
        },
        {
          "@type": "Thing",
          name: "How to Fish Radar",
        },
        {
          "@type": "Thing",
          name: "How to Fish bosses",
        },
        {
          "@type": "Thing",
          name: "Bowhead Whale",
        },
        {
          "@type": "Thing",
          name: "Mutated Bowhead Whale",
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
          title="How to Fish Walkthrough: All Islands & Progression Guide"
          description="There are five main island stops in How to Fish. I follow the route from the Lighthouse through the Forest, Desert, Rocks, and military/Volcano area, using NPC hand-ins and Radar coordinates to know when each stage is actually finished."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}