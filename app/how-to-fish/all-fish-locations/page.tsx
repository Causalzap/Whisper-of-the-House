
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishAllFishLocationsContent from "@/data/how-to-fish/all-fish-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/all-fish-locations`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-drip-rock-crab.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-sunfish-beginner-boss-lure.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish All 49 Creatures: Locations & Collector Guide",
  description:
    "Find all 49 How to Fish creatures by island, lure, and boss trigger, with Collector, Fishipedia, missing-creature, and cleanup tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish All 49 Creatures: Locations & Collector Guide",
    description:
      "Complete all 49 creature entries with island locations, lure pools, boss triggers, missing-creature checks, and Collector and Fishipedia guidance.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Drip Rock Crab caught while completing the How to Fish creature encyclopedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish All 49 Creatures & Collector Guide",
    description:
      "Find all 49 creatures by island, lure, and special trigger, then clean up Collector and Fishipedia without fishing every area at random.",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All 49 Creatures",
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
        "How to Fish All 49 Creatures: Locations, Lures, Collector and Fishipedia Guide",
      description:
        "A complete How to Fish creature guide covering all 49 normal encyclopedia entries across the Lighthouse, Forest, Desert, Rocks, and Volcano areas, including lure pools, boss triggers, easy-to-miss creatures, Collector cleanup, and the separate Fishipedia Drip collection.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-23",
      dateModified: "2026-08-23",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
        },
        {
          "@type": "Thing",
          name: "How to Fish creatures",
        },
        {
          "@type": "Thing",
          name: "How to Fish all fish",
        },
        {
          "@type": "Thing",
          name: "How to Fish creature locations",
        },
        {
          "@type": "Thing",
          name: "Collector achievement",
        },
        {
          "@type": "Thing",
          name: "Fishipedia achievement",
        },
        {
          "@type": "Thing",
          name: "How to Fish Drip creatures",
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
    id: "collector-vs-fishipedia",
    label: "Collector vs Fishipedia",
  },
  {
    id: "all-49-creatures",
    label: "All 49 creatures",
  },
  {
    id: "missing-creatures",
    label: "Missing creatures",
  },
  {
    id: "cleanup-route",
    label: "Best cleanup route",
  },
  {
    id: "separate-entries",
    label: "Similar creature names",
  },
  {
    id: "drip-creatures",
    label: "Drip creature cleanup",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Progression Guide",
  },
  {
    href: "/how-to-fish/achievements",
    label: "How to Fish Achievements",
  },
  {
    href: "/how-to-fish/spider-crab",
    label: "Spider Crab & Boat Keys Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
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
          title="How to Fish All 49 Creatures & Collector Guide"
          description="Find every normal creature across all five areas, match missing encyclopedia slots to the right lure or boss trigger, and separate Collector cleanup from Fishipedia Drip hunting."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishAllFishLocationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}