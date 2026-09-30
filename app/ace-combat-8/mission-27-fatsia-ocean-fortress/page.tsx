import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8Mission27Content from "@/data/ace-combat-8/mission-27-fatsia-ocean-fortress.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-27-fatsia-ocean-fortress`;

const metadataTitle =
  "Ace Combat 8 Mission 27 Walkthrough: Fatsia";

const metadataDescription =
  "Beat Ace Combat 8 Mission 27 by breaking Fatsia's eight-arm structure, collapsing support pillars, obeying hold fire, and destroying the fusion reactor.";

const articleDescription =
  "Break Fatsia efficiently across its eight outer arms, use support pillars and explosive targets for structural damage, stop firing during surrender, then enter the central structure and destroy the fusion reactor.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-27-fatsia-eight-spokes-layout.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-mega-float-support-pillars.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-hold-fire-surrender.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-fusion-reactor-shutter.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "break-fatsia-exterior",
    label: "Break Fatsia's Exterior",
  },
  {
    id: "hold-fire",
    label: "Hold Fire",
  },
  {
    id: "central-entry",
    label: "Enter the Central Structure",
  },
  {
    id: "fusion-reactor",
    label: "Destroy the Fusion Reactor",
  },
  {
    id: "after-fatsia",
    label: "After Fatsia",
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
    href: "/ace-combat-8/mrp-farm",
    label: "Mission 28 MRP Farming",
  },
  {
    href: "/ace-combat-8/mission-30-song-of-wings",
    label: "Mission 30: Song of Wings",
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
        alt: "Ace Combat 8 Mission 27 Fatsia showing eight outer modules around the central terminal",
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
          name: "Mission 27: Fatsia, The Ocean Fortress",
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
        "Ace Combat 8 Mission 27 Walkthrough: Fatsia, The Ocean Fortress",
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
          name: "Ace Combat 8 Mission 27",
        },
        {
          "@type": "Thing",
          name: "Fatsia, The Ocean Fortress",
        },
        {
          "@type": "Thing",
          name: "Fatsia Mega Float",
        },
        {
          "@type": "Thing",
          name: "Fatsia outer modules",
        },
        {
          "@type": "Thing",
          name: "Support pillars",
        },
        {
          "@type": "Thing",
          name: "Hold fire order",
        },
        {
          "@type": "Thing",
          name: "Tonitra Spear",
        },
        {
          "@type": "Thing",
          name: "Fusion reactor",
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
          title="Ace Combat 8 Mission 27 Walkthrough: Fatsia, The Ocean Fortress"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8Mission27Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}