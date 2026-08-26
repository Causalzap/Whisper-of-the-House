import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishAllFishLocationsContent from "@/data/how-to-fish/all-fish-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/all-fish-locations`;

const primaryImageUrl =
  `${siteUrl}/images/how-to-fish/how-to-fish-sunfish-beginner-boss-lure.webp`;

const imageUrls = [
  primaryImageUrl,
  `${siteUrl}/images/how-to-fish/how-to-fish-drip-rock-crab.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish All 49 Creatures: Locations & Collector Guide",
  description:
    "Find all 49 How to Fish creatures by island, lure, and boss trigger, then finish Collector and separate normal entries from Fishipedia Drip variants.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish All 49 Creatures: Locations & Collector Guide",
    description:
      "Complete all 49 normal creature entries with the correct island, lure pool, Boss Lure, or story trigger, then clean up Collector and Fishipedia.",
    siteName: "Whisper of the House",
    images: [
      {
        url: primaryImageUrl,
        width: 1600,
        height: 900,
        alt: "Sunfish caught with the Beginner Boss Lure while completing the How to Fish creature collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish All 49 Creatures & Collector Guide",
    description:
      "Match every missing creature entry to the correct island, lure, Boss Lure, or story trigger without fishing every area again.",
    images: [primaryImageUrl],
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
        "How to Fish All 49 Creatures and Collector Guide",
      description:
        "A complete guide to all 49 normal creature entries in How to Fish, organized by island, lure pool, Boss Lure, and story trigger, with Collector and Fishipedia cleanup advice.",
      image: imageUrls,
      inLanguage: "en",
      articleSection: "Game Guides",
      datePublished: "2026-08-23",
      dateModified: "2026-08-26",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
        },
        {
          "@type": "Thing",
          name: "Collector achievement",
        },
        {
          "@type": "Thing",
          name: "Fishipedia achievement",
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
    label: "How Collector works",
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
    label: "How to Fish Achievements Guide",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How to Fish All 49 Creatures & Collector Guide"
          description="Use the 49-entry creature checklist to match every blank encyclopedia slot to the correct island, lure pool, Boss Lure, or story trigger, then handle Fishipedia Drip variants separately."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
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