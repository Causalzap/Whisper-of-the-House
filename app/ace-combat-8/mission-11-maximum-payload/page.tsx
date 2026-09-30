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
  "Beat Ace Combat 8 Mission 11 by following Podarge contrails through jamming, damaging engines and propellers, and stopping every transport before it escapes.";

const articleDescription =
  "Find the Podarge transports through electronic warfare, follow their contrails, damage engines and propellers, and bring down every transport before its cargo reaches Rocky Island.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-11-podarge-contrails.webp`,
  `${siteUrl}/images/ace-combat-8/mission-11-podarge-propellers.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "prepare-for-interception",
    label: "Prepare for Interception",
  },
  {
    id: "find-the-podarges",
    label: "Find the Podarges",
  },
  {
    id: "bring-down-a-podarge",
    label: "Bring Down a Podarge",
  },
  {
    id: "finish-the-air-battle",
    label: "Finish the Air Battle",
  },
  {
    id: "after-mission-11",
    label: "After Mission 11",
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
    href: "/ace-combat-8/mission-9-land-battleship-blockade",
    label: "Mission 9: Land Battleship Blockade",
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
        alt: "Ace Combat 8 Mission 11 Podarge contrails visible through cloud cover and electronic warfare",
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
          name: "Podarge contrails",
        },
        {
          "@type": "Thing",
          name: "Podarge engines and propellers",
        },
        {
          "@type": "Thing",
          name: "55th Unit",
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
          title="Ace Combat 8 Mission 11 Walkthrough: Maximum Payload"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
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