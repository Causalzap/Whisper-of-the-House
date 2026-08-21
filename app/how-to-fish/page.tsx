import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishContent from "@/data/how-to-fish/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/how-to-fish`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-terrorizing-bird-tuna-quest.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-scientist-whale-mission.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Walkthrough: Island Progression & Bosses",
  description:
    "Follow the full How to Fish progression route across every island, solve NPC gates, defeat the main bosses, use the Radar, and finish the story.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish Walkthrough and Island Progression Guide",
    description:
      "Follow the main story from the Lighthouse Keeper through Islands 2–4, the military and volcano route, and the Mutated Bowhead Whale finale.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Island NPC explaining that Tuna attracts the Terrorizing Bird in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Walkthrough & Guide",
    description:
      "Follow every main island progression gate, NPC hand-in, boss sequence, Radar route, and the final story path in How to Fish.",
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
        "How to Fish Walkthrough and Guide: Island Progression, Bosses, Radar Routes, and Story",
      description:
        "This How to Fish walkthrough follows the main progression route from the opening island through Island 2, Island 3, Island 4, the military and volcano sequence, and the final mainland route. It explains how NPC requests, bait, boss trophies, Flash Drives, and Radar updates connect each stage, while directing detailed Leech, Giant Piranha, Endangered Species, Pufferfish, boss, and achievement problems to their dedicated guides.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-21",
      dateModified: "2026-08-21",
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
          name: "How to Fish bosses",
        },
        {
          "@type": "Thing",
          name: "Radar",
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
    id: "first-island",
    label: "First island",
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
    label: "Military and volcano",
  },
  {
    id: "final-boss",
    label: "Final boss route",
  },
  {
    id: "finish-the-game",
    label: "Finish the game",
  },
  {
    id: "upgrade-priority",
    label: "Upgrade priority",
  },
  {
    id: "where-i-go-when-stuck",
    label: "Where to go when stuck",
  },
];

const relatedLinks = [
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
          title="How to Fish Walkthrough & Guide"
          description="Follow the complete main progression route across every island, understand which NPC request or boss is blocking you, and know exactly when to move on instead of wasting money or farming the wrong objective."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
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