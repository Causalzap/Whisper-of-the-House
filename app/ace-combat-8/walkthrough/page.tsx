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
  "Complete all 30 Ace Combat 8 missions with target priorities, escort and missile blockers, Land Battleships, Fatsia, Selene, and the final submarine.";

const articleDescription =
  "Follow the full Ace Combat 8 campaign from Jokers Wild through Song of Wings, with the targets, phase changes, escort threats, missiles, bosses, and mission blockers that matter for a first clear.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-7-faith-park-bonus-time.webp`,
  `${siteUrl}/images/ace-combat-8/mission-10-airship-laser.webp`,
  `${siteUrl}/images/ace-combat-8/mission-16-disguised-ship-sun-emblem-three-cranes.webp`,
  `${siteUrl}/images/ace-combat-8/mission-20-escort-orbiter-large-missile.webp`,
];

const heroImage = imageUrls[0];

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
];

const relatedLinks = [
  {
    href: "/ace-combat-8",
    label: "Ace Combat 8 Guide",
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
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Ace Combat 8 Mission 7 reaching the 24,000-point Faith Park objective",
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
          name: "Ace Combat 8 Guide",
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
      headline: "Ace Combat 8 Walkthrough: All 30 Missions & Bosses",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-29",
      dateModified: "2026-09-29",
      articleSection: "Ace Combat 8 Guides",
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
          name: "Ace Combat 8 Selene",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Song of Wings",
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
          title="Ace Combat 8 Walkthrough: All 30 Missions & Bosses"
          description="Follow all 30 campaign missions from Jokers Wild to Song of Wings, with the target changes, escort threats, missile interceptions, Land Battleships, and late-game fights that can stop a clear."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
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