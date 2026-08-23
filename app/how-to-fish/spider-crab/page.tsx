import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishSpiderCrabContent from "@/data/how-to-fish/spider-crab.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/spider-crab`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-empty-beer-can.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-stun-window.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-shell-boat-keys.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Spider Crab: Stun, Beer Can & Boat Keys",
  description:
    "Beat the Spider Crab in How to Fish, get the Empty Beer Can, use its self-stun window, keep the Shell, unlock Boat Keys, and buy the Radar.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish Spider Crab: Stun, Beer Can & Boat Keys",
    description:
      "Learn how to trigger and beat the Spider Crab, use its self-stun opening, keep the Shell, and unlock the Boat Keys and Radar.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Spider Crab stunned after its own attack in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Spider Crab Guide",
    description:
      "Get the Empty Beer Can, use the Spider Crab self-stun window, keep its Shell, and unlock the Boat Keys and Radar.",
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
          name: "Spider Crab",
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
        "How to Fish Spider Crab Guide: Empty Beer Can, Stun, Shell and Boat Keys",
      description:
        "A practical Spider Crab guide for How to Fish covering the Lighthouse Keeper Beer quest, Empty Beer Can bait, the Spider Crab self-stun window, melee preparation, Spider Crab Shell hand-in, Boat Keys, and the Radar.",
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
          name: "Spider Crab",
        },
        {
          "@type": "Thing",
          name: "Empty Beer Can",
        },
        {
          "@type": "Thing",
          name: "Spider Crab stun",
        },
        {
          "@type": "Thing",
          name: "Spider Crab Shell",
        },
        {
          "@type": "Thing",
          name: "Boat Keys",
        },
        {
          "@type": "Thing",
          name: "Radar",
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
    id: "how-to-start",
    label: "How to start",
  },
  {
    id: "empty-beer-can",
    label: "Empty Beer Can",
  },
  {
    id: "before-fight",
    label: "Fight preparation",
  },
  {
    id: "how-to-stun",
    label: "How to stun Spider Crab",
  },
  {
    id: "why-i-keep-dying",
    label: "Why the fight fails",
  },
  {
    id: "after-kill",
    label: "Spider Crab Shell",
  },
  {
    id: "boat-keys",
    label: "Boat Keys and Radar",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Progression Guide",
  },
  {
    href: "/how-to-fish/leech-bait",
    label: "Leech Bait Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
  },
  {
    href: "/how-to-fish/all-fish-locations",
    label: "All 49 Creatures & Collector Guide",
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
          title="How to Fish Spider Crab Guide"
          description="Get the Empty Beer Can, use the Spider Crab's self-stun opening, keep the Shell after the fight, and finish the Lighthouse Keeper hand-in for the Boat Keys and Radar."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishSpiderCrabContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}