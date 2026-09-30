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
  "Beat Ace Combat 8 Mission 9 by protecting the IED vehicles, destroying all 8 secondary treads, beating Remaining Distance, and destroying both rocket thrusters.";

const articleDescription =
  "Stop the Mission 9 Land Battleship by protecting the IED vehicles, exposing and destroying all eight secondary treads, triggering the final containment demolition, and destroying both rocket thrusters.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-9-bomb-truck-exposes-secondary-tread.webp`,
  `${siteUrl}/images/ace-combat-8/mission-9-final-containment-building.webp`,
  `${siteUrl}/images/ace-combat-8/mission-9-land-battleship-thrusters.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "secondary-treads",
    label: "Secondary Treads",
  },
  {
    id: "final-containment",
    label: "Final Containment",
  },
  {
    id: "rocket-thrusters",
    label: "Rocket Thrusters",
  },
  {
    id: "after-mission-9",
    label: "After Mission 9",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/assault-records",
    label: "Assault Records",
  },
  {
    href: "/ace-combat-8/mission-11-maximum-payload",
    label: "Mission 11: Maximum Payload",
  },
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
  },
  {
    href: "/ace-combat-8",
    label: "Ace Combat 8 Guide",
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
        url: ogImage,
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
    images: [ogImage],
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
      dateModified: "2026-09-30",
      articleSection: "Ace Combat 8 Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          name: "Remaining Distance",
        },
        {
          "@type": "Thing",
          name: "Rocket thrusters",
        },
      ],
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
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Ace Combat 8 Mission 9 Walkthrough: Land Battleship Blockade"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
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