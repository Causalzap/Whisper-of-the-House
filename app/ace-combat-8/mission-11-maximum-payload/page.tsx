import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8Mission11Content from "@/data/ace-combat-8/mission-11-maximum-payload.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-11-maximum-payload`;

const metadataTitle =
  "Ace Combat 8 Mission 11 Walkthrough: Maximum Payload";

const metadataDescription =
  "Beat Ace Combat 8 Mission 11 by following Podarge contrails, attacking engines and propellers, surviving jamming, and stopping every transport.";

const articleDescription =
  "Find the Podarge transports through electronic warfare, slow them with engine damage, destroy their propellers, and finish the air battle before any cargo escapes.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-11-podarge-contrails.webp`,
  `${siteUrl}/images/ace-combat-8/mission-11-podarge-propellers.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "prepare-for-interception",
    label: "Prepare for interception",
  },
  {
    id: "find-the-podarges",
    label: "Find the Podarges",
  },
  {
    id: "bring-down-a-podarge",
    label: "Bring down a Podarge",
  },
  {
    id: "finish-the-air-battle",
    label: "Finish the air battle",
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
    href: "/ace-combat-8/mission-9-land-battleship-blockade",
    label: "Mission 9 Land Battleship",
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
        alt: "Ace Combat 8 Mission 11 Podarge contrails visible through electronic warfare and cloud cover",
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
          name: "Mission 11: Maximum Payload",
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
        "Ace Combat 8 Mission 11 Walkthrough: Maximum Payload",
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
          name: "Ace Combat 8 Mission 11",
        },
        {
          "@type": "Thing",
          name: "Maximum Payload",
        },
        {
          "@type": "Thing",
          name: "Podarge transports",
        },
        {
          "@type": "Thing",
          name: "Electronic warfare",
        },
        {
          "@type": "Thing",
          name: "Podarge engines and propellers",
        },
        {
          "@type": "Thing",
          name: "55th Unit",
        },
        {
          "@type": "Thing",
          name: "Fort Grays",
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
          title="Ace Combat 8 Mission 11 Walkthrough: Maximum Payload"
          description="Follow the Podarge contrails through the jamming, slow the transports with engine damage, destroy their propellers, and stop every shipment from escaping."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8Mission11Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}