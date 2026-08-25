import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishSpiderCrabContent from "@/data/how-to-fish/spider-crab.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/spider-crab`;

const metadataTitle =
  "How to Beat the Spider Crab Boss in How to Fish";

const metadataDescription =
  "Beat the Spider Crab by getting Empty Beer Can bait, waiting for its self-stun, and attacking while dazed. Keep the Shell for Boat Keys and Radar.";

const articleDescription =
  "A practical How to Fish Spider Crab boss guide covering the Empty Beer Can bait, Lighthouse Keeper quest, self-stun strategy, melee preparation, Spider Crab Shell, Boat Keys, and Radar.";

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-empty-beer-can.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-stun-window.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-shell-boat-keys.webp`,
];

const toc = [
  {
    id: "how-to-beat-spider-crab",
    label: "How to beat Spider Crab",
  },
  {
    id: "how-to-start",
    label: "How to catch Spider Crab",
  },
  {
    id: "empty-beer-can",
    label: "Get the Empty Beer Can",
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
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/leech-bait",
    label: "Leech Bait Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "All Bosses & Strategies",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/all-fish-locations",
    label: "All Fish & Creature Locations",
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
      "Get the Empty Beer Can, bait the Spider Crab into its own dazed state, attack during the stun window, then keep the Shell for the Boat Keys.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-23",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Spider Crab dazed after its own attack in How to Fish",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Beat the Spider Crab with its self-stun window, get the Empty Beer Can bait, keep the Shell, and unlock the Boat Keys and Radar.",
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
          name: "Spider Crab Boss Guide",
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
        "How to Beat the Spider Crab Boss in How to Fish",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-23",
      dateModified: "2026-08-25",
      articleSection: "How to Fish Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Spider Crab boss",
        },
        {
          "@type": "Thing",
          name: "How to beat Spider Crab",
        },
        {
          "@type": "Thing",
          name: "Spider Crab boss strategy",
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
          title="How to Beat the Spider Crab Boss in How to Fish"
          description="I get the Empty Beer Can from the Lighthouse Keeper, give the Spider Crab room to attack, then move in only when it dazes itself. After the fight, I keep the Shell for the Boat Keys and buy the Radar before leaving."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
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