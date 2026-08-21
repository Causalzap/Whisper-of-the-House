import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishLeechBaitContent from "@/data/how-to-fish/leech-bait.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/leech-bait`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-leech-quest.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-leech-ground-location.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-leech-bait-npc.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-boss.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Leech Bait: Find 3 Leeches on Island 2",
  description:
    "Find all 3 Leeches on Island 2, complete the 0/3 quest, return them to the NPC, make the boss bait, and trigger the Giant Piranha.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Find Leeches and Make Leech Bait in How to Fish",
    description:
      "Stop fishing, find the three ground Leeches on Island 2, finish the NPC hand-in, and prepare the bait that triggers the Giant Piranha.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Leech ground pickup on Island 2 in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Leech Bait Guide",
    description:
      "Complete the 0/3 Leech quest on Island 2, find Leeches on the ground, return them to the NPC, and make Giant Piranha bait.",
    images: [imageUrls[1]],
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Leech Bait Guide",
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
        "How to Fish Leech Bait Guide: Find 3 Leeches and Trigger the Giant Piranha",
      description:
        "This How to Fish Leech Bait guide explains how to complete the Island 2 0/3 Leech quest by finding Leeches as ground pickups rather than fishing for them. It covers where to look, how to reach 3/3, why the raw Leeches must be returned to the quest NPC, how she converts them into boss bait, and how to confirm the route worked when the Giant Piranha appears.",
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
          name: "How to Fish Leeches",
        },
        {
          "@type": "Thing",
          name: "Leech Bait",
        },
        {
          "@type": "Thing",
          name: "0/3 Leeches quest",
        },
        {
          "@type": "Thing",
          name: "Island 2",
        },
        {
          "@type": "Thing",
          name: "Giant Piranha bait",
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
    id: "where-this-starts",
    label: "Where the Leech quest starts",
  },
  {
    id: "where-to-find-leeches",
    label: "Where to find Leeches",
  },
  {
    id: "complete-three-leeches",
    label: "Complete 3/3 Leeches",
  },
  {
    id: "return-to-npc",
    label: "Return to the NPC",
  },
  {
    id: "when-bait-is-ready",
    label: "When the bait is ready",
  },
  {
    id: "giant-piranha-trigger",
    label: "Trigger Giant Piranha",
  },
  {
    id: "leech-quest-not-working",
    label: "Leech quest not working",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
  },
  {
    href: "/how-to-fish/endangered-fish",
    label: "Endangered Fish & Carrot Guide",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "Pufferfish Boss Guide",
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
          title="How to Fish Leech Bait Guide"
          description="Complete the Island 2 0/3 Leech quest by finding three Leeches on the ground, returning them to the NPC, and converting them into the bait that triggers the Giant Piranha."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishLeechBaitContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}