import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethDeedsBountiesContent from "@/data/dimraeth/deeds-bounties.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/deeds-bounties`;

const metadataTitle =
  "Dimraeth Deeds & Bounties Guide: Levels, Rewards & Farming";

const metadataDescription =
  "Learn Deed Levels 1–10, boss farming, bounty rewards, how to find Woldroot after the Forest King, when to raise difficulty, and when co-op helps.";

const articleDescription =
  "A practical Dimraeth Deeds and Bounties guide covering the Deed Board, Deed Levels 1 through 10, targeted boss farming, bounty rewards, efficient difficulty progression, skill-point and purple gear drops, solo versus co-op play, and how players are finding Woldroot after the Forest King.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-deeds-unlocked-deed-board.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-deed-level-repeat-boss.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-alpha-wolf-bounty-material-farm.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-deed-boss-purple-gear.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "deed-board",
    label: "How the Deed Board works",
  },
  {
    id: "choose-deed",
    label: "Which Deed to farm",
  },
  {
    id: "deed-levels",
    label: "Deed Levels 1–10",
  },
  {
    id: "efficient-farming",
    label: "Find your efficient ceiling",
  },
  {
    id: "boss-rewards",
    label: "Boss rewards",
  },
  {
    id: "loot-rarity",
    label: "Purple gear & rarity",
  },
  {
    id: "solo-coop",
    label: "Solo vs co-op",
  },
  {
    id: "after-forest-king",
    label: "After the Forest King",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/co-op-progression",
    label: "Dimraeth Co-op Progression",
  },
  {
    href: "/dimraeth/forest-king",
    label: "Dimraeth Forest King Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Deed Board with new repeatable Deeds available in Dimraeth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Dimraeth",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Deeds & Bounties",
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
        "Dimraeth Deeds and Bounties Guide: Levels, Rewards and Boss Farming",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-22",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Deeds",
        },
        {
          "@type": "Thing",
          name: "Bounties",
        },
        {
          "@type": "Thing",
          name: "Deed Board",
        },
        {
          "@type": "Thing",
          name: "Deed Levels",
        },
        {
          "@type": "Thing",
          name: "Boss Farming",
        },
        {
          "@type": "Thing",
          name: "Alpha Wolf Bounty",
        },
        {
          "@type": "Thing",
          name: "Alpha Teeth",
        },
        {
          "@type": "Thing",
          name: "Potential Loot",
        },
        {
          "@type": "Thing",
          name: "Woldroot the Path Guardian",
        },
        {
          "@type": "Thing",
          name: "Return to the Forest Throne",
        },
        {
          "@type": "Thing",
          name: "Aelwynor the Wildroot Father",
        },
        {
          "@type": "Thing",
          name: "Forest King",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="Dimraeth Deeds & Bounties: Levels, Rewards & Boss Farming"
          description="Use the Deed Board to repeat useful bosses, choose a Deed Level you can farm cleanly, know when to raise the difficulty, and find Woldroot again after the Forest King."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethDeedsBountiesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}