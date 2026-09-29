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
  "Beat Ace Combat 8 Mission 27 by collapsing Fatsia supports, obeying hold fire, entering the central structure, and destroying the fusion reactor.";

const articleDescription =
  "Break Fatsia with structural attacks, stop firing during the surrender order, enter the central opening, and destroy the fusion reactor before the shutter closes.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-27-mega-float-support-pillars.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-hold-fire-surrender.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-fusion-reactor-shutter.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "break-fatsia-exterior",
    label: "Break Fatsia's exterior",
  },
  {
    id: "hold-fire",
    label: "Hold fire",
  },
  {
    id: "central-entry",
    label: "Enter the central structure",
  },
  {
    id: "fusion-reactor",
    label: "Destroy the fusion reactor",
  },
  {
    id: "after-fatsia",
    label: "After Fatsia",
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
    href: "/ace-combat-8/mission-11-maximum-payload",
    label: "Mission 11 Maximum Payload",
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
        alt: "Ace Combat 8 Mission 27 support pillars beneath the Fatsia Mega Float",
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
          title="Ace Combat 8 Mission 27 Walkthrough: Fatsia, The Ocean Fortress"
          description="Collapse Fatsia's structure efficiently, stop firing when the surrender order arrives, enter the central section, and destroy the fusion reactor before the shutter closes."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
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