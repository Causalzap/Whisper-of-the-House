import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8WalkthroughContent from "@/data/ace-combat-8/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Ace Combat 8 Walkthrough: All 30 Missions & Bosses";

const metadataDescription =
  "Complete all 30 Ace Combat 8 missions with target priorities, phase changes, escort and missile blockers, Land Battleships, Fatsia, and Song of Wings.";

const articleDescription =
  "Follow all 30 Ace Combat 8 campaign missions from Jokers Wild through Song of Wings, with the objective changes, escort threats, missile interceptions, major targets, and mission blockers that can stop a first clear.";

const heroImage =
  "/images/ace-combat-8/mission-7-faith-park-bonus-time.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/ace-combat-8/mission-10-airship-laser.webp`,
  `${siteUrl}/images/ace-combat-8/mission-16-disguised-ship-sun-emblem-three-cranes.webp`,
  `${siteUrl}/images/ace-combat-8/mission-20-escort-orbiter-large-missile.webp`,
];

const toc = [
  {
    id: "opening-missions",
    label: "Missions 1–5",
  },
  {
    id: "counterattack",
    label: "Missions 6–10",
  },
  {
    id: "land-battleships",
    label: "Missions 11–15",
  },
  {
    id: "space-elevator",
    label: "Missions 16–20",
  },
  {
    id: "rocky-island",
    label: "Missions 21–25",
  },
  {
    id: "endgame",
    label: "Missions 26–30",
  },
  {
    id: "after-campaign",
    label: "After Mission 30",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/mission-9-land-battleship-blockade",
    label: "Mission 9: Land Battleship Blockade",
  },
  {
    href: "/ace-combat-8/mission-11-maximum-payload",
    label: "Mission 11: Maximum Payload",
  },
  {
    href: "/ace-combat-8/mission-16-singer",
    label: "Mission 16: Singer",
  },
  {
    href: "/ace-combat-8/mission-18-moonlight-and-shadows",
    label: "Mission 18: Moonlight and Shadows",
  },
  {
    href: "/ace-combat-8/mission-27-fatsia-ocean-fortress",
    label: "Mission 27: Fatsia",
  },
  {
    href: "/ace-combat-8/mission-30-song-of-wings",
    label: "Mission 30: Song of Wings",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Ace Combat 8 Mission 7 after reaching the Faith Park score requirement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImageUrl],
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
          name: "Ace Combat 8: Wings of Theve",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-29",
      dateModified: "2026-09-30",
      articleSection: "Ace Combat 8 Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Ace Combat 8: Wings of Theve",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 walkthrough",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 missions",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 campaign",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Land Battleships",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Fatsia",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Song of Wings",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title="Ace Combat 8 Walkthrough: All 30 Missions & Bosses"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8WalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}