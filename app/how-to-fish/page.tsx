import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishContent from "@/data/how-to-fish/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/how-to-fish`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-scientist-whale-mission.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Walkthrough: All Islands & Progression Guide",
  description:
    "Follow the How to Fish story across all five islands, solve NPC gates, use Radar coordinates, unlock bosses, and finish the Volcano route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish Walkthrough: All Islands & Progression Guide",
    description:
      "Follow the full story from the Lighthouse through all five island areas, boss gates, Radar coordinates, the scientist, and the Volcano finale.",
    siteName: "Whisper of the House",
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
    title: "How to Fish Walkthrough & Progression Guide",
    description:
      "Follow all five island areas, solve NPC progression gates, use Radar coordinates, and reach the final Volcano and mainland route.",
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
        "How to Fish Walkthrough: All Islands and Progression Guide",
      description:
        "A practical How to Fish walkthrough covering all five main island areas, NPC progression gates, Radar coordinates, the Spider Crab, Giant Piranha, Pufferfish, Terrorizing Bird, scientist and Bowhead Whale experiment, Mutated Bowhead Whale, upgrade decisions, and the final route toward the mainland.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-21",
      dateModified: "2026-08-23",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
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

const toc = [
  {
    id: "how-progression-works",
    label: "How progression works",
  },
  {
    id: "how-many-islands",
    label: "How many islands",
  },
  {
    id: "lighthouse",
    label: "Lighthouse",
  },
  {
    id: "radar-coordinates",
    label: "Radar and coordinates",
  },
  {
    id: "island-2",
    label: "Island 2",
  },
  {
    id: "island-3",
    label: "Island 3",
  },
  {
    id: "island-4",
    label: "Island 4",
  },
  {
    id: "military-volcano",
    label: "Military and Volcano",
  },
  {
    id: "mutated-bowhead-whale",
    label: "Mutated Bowhead Whale",
  },
  {
    id: "upgrade-priority",
    label: "Upgrade priority",
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
    label: "Spider Crab & Boat Keys Guide",
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
    label: "Pufferfish Boss Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
  },
  {
    href: "/how-to-fish/all-fish-locations",
    label: "All 49 Creatures & Collector Guide",
  },
  {
    href: "/how-to-fish/achievements",
    label: "How to Fish Achievements",
  },
];

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
          title="How to Fish Walkthrough & Progression Guide"
          description="Follow the main route across all five island areas, understand which NPC request or boss is blocking you, use the Radar correctly, and know when to move on instead of farming the wrong objective."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 23, 2026"
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