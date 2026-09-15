import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethForestKingContent from "@/data/dimraeth/forest-king.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/forest-king`;

const metadataTitle =
  "Dimraeth Forest King Guide: Aelwynor Boss Strategy";

const metadataDescription =
  "Beat Aelwynor the Forest King in Dimraeth with Poison Cure, add control, safer parries, and clean damage windows, then see what unlocks after the fight.";

const articleDescription =
  "A practical Dimraeth Forest King guide covering Aelwynor the Wildroot Father, Poison Cure preparation, ground hazards, the Fey add, parry decisions, failed-attempt diagnosis, the tested 18-stack Bleed Brawler kill, Forest King rewards, and the current Early Access story endpoint.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-boss-start.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-poison-pods.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-fey-add.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-18-bleed.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-story-end.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "before-forest-king",
    label: "Before the Forest King",
  },
  {
    id: "opening",
    label: "Read the opening",
  },
  {
    id: "poison",
    label: "Poison Cure",
  },
  {
    id: "ground-hazards",
    label: "Ground hazards",
  },
  {
    id: "fey-add",
    label: "Kill the Fey add",
  },
  {
    id: "parry",
    label: "Parry decisions",
  },
  {
    id: "bad-opener",
    label: "When to reset",
  },
  {
    id: "bleed-damage",
    label: "Bleed damage",
  },
  {
    id: "one-potion",
    label: "One-potion situations",
  },
  {
    id: "successful-attempt",
    label: "Winning attempt",
  },
  {
    id: "after-forest-king",
    label: "Rewards & what comes next",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/wildwood-walkthrough",
    label: "Dimraeth Wildwood Walkthrough",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/goblin-king",
    label: "Dimraeth Goblin King Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
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
        alt: "Aelwynor the Wildroot Father Forest King boss fight in Dimraeth",
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
          name: "Forest King Guide",
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
        "Dimraeth Forest King Guide: How to Beat Aelwynor the Wildroot Father",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Forest King",
        },
        {
          "@type": "Thing",
          name: "Aelwynor the Wildroot Father",
        },
        {
          "@type": "Thing",
          name: "Crown of Thorns",
        },
        {
          "@type": "Thing",
          name: "Poison Cure",
        },
        {
          "@type": "Thing",
          name: "Bleed",
        },
        {
          "@type": "Thing",
          name: "Forest King Tine",
        },
        {
          "@type": "Thing",
          name: "Forest Heart",
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
          title="Dimraeth Forest King: How to Beat Aelwynor"
          description="Prepare for Poison, control the Fey and ground hazards, recognize when a run is still healthy, and finish Aelwynor without rebuilding a character that is already strong enough."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethForestKingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}