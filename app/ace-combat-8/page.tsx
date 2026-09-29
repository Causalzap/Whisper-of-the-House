import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8GuideContent from "@/data/ace-combat-8/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/ace-combat-8`;

const metadataTitle =
  "Ace Combat 8 Guide & Walkthrough: All 30 Missions";

const metadataDescription =
  "Ace Combat 8 guide for all 30 missions, major campaign blockers, Mission 9, Maximum Payload, Fatsia, Song of Wings, and post-game completion.";

const articleDescription =
  "Follow the Ace Combat 8 campaign from the Prologue through Mission 30, solve the biggest mission blockers, and move from a first clear into post-game completion.";

const toc = [
  {
    id: "first-campaign",
    label: "Full Campaign Route",
  },
  {
    id: "major-blockers",
    label: "Major Mission Blockers",
  },
  {
    id: "first-clear",
    label: "First Clear Priorities",
  },
  {
    id: "after-the-ending",
    label: "After the Ending",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/mission-9-land-battleship-blockade",
    label: "Mission 9 Land Battleship",
  },
  {
    href: "/ace-combat-8/mission-11-maximum-payload",
    label: "Mission 11 Maximum Payload",
  },
  {
    href: "/ace-combat-8/mission-27-fatsia-ocean-fortress",
    label: "Mission 27 Fatsia",
  },
  {
    href: "/ace-combat-8/mission-30-song-of-wings",
    label: "Mission 30 Song of Wings",
  },
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
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
    description: articleDescription,
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Ace Combat 8 Guide",
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
        "Ace Combat 8 Guide & Walkthrough: All 30 Missions",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-09-29",
      dateModified: "2026-09-29",
      articleSection: "Ace Combat 8 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Ace Combat 8: Wings of Theve",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 campaign",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 walkthrough",
        },
        {
          "@type": "Thing",
          name: "Land Battleship",
        },
        {
          "@type": "Thing",
          name: "Podarge transports",
        },
        {
          "@type": "Thing",
          name: "Fatsia, The Ocean Fortress",
        },
        {
          "@type": "Thing",
          name: "Song of Wings",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 trophies and achievements",
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
          title="Ace Combat 8 Guide & Walkthrough: All 30 Missions"
          description="Follow the campaign from the Prologue through Mission 30, solve the biggest mission blockers, and know when to move from the first clear into post-game completion."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}