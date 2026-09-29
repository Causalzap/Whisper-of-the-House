import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8Mission9Content from "@/data/ace-combat-8/mission-9-land-battleship-blockade.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-9-land-battleship-blockade`;

const metadataTitle =
  "Ace Combat 8 Mission 9 Walkthrough: Land Battleship";

const metadataDescription =
  "Beat Ace Combat 8 Mission 9 by protecting bomb trucks, destroying all 8 secondary treads, triggering containment, and taking out both thrusters.";

const articleDescription =
  "Stop the Mission 9 Land Battleship by opening its secondary tread armor, destroying all eight treads, beating the Remaining Distance countdown, and disabling both rocket thrusters.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-9-bomb-truck-exposes-secondary-tread.webp`,
  `${siteUrl}/images/ace-combat-8/mission-9-final-containment-building.webp`,
  `${siteUrl}/images/ace-combat-8/mission-9-land-battleship-thrusters.webp`,
];

const heroImage = imageUrls[0];

const toc = [
    {
      id: "secondary-treads",
      label: "Secondary treads",
    },
    {
      id: "final-containment",
      label: "Final containment",
    },
    {
      id: "rocket-thrusters",
      label: "Rocket thrusters",
    },
    {
      id: "after-mission-9",
      label: "After Mission 9",
    },
  ];

const relatedLinks = [
  {
    href: "/ace-combat-8",
    label: "Ace Combat 8 Guide",
  },
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
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
        alt: "Ace Combat 8 Mission 9 IED vehicle exposing the Land Battleship secondary tread armor",
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
          name: "Mission 9: The Land Battleship Blockade",
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
        "Ace Combat 8 Mission 9 Walkthrough: Land Battleship Blockade",
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
          name: "Ace Combat 8 Mission 9",
        },
        {
          "@type": "Thing",
          name: "The Land Battleship Blockade",
        },
        {
          "@type": "Thing",
          name: "Land Battleship",
        },
        {
          "@type": "Thing",
          name: "Secondary treads",
        },
        {
          "@type": "Thing",
          name: "IED vehicles",
        },
        {
          "@type": "Thing",
          name: "Rocket thrusters",
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
          title="Ace Combat 8 Mission 9 Walkthrough: Land Battleship Blockade"
          description="Protect the bomb trucks, expose and destroy all eight secondary treads, beat the final containment countdown, and disable both rocket thrusters."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8Mission9Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}