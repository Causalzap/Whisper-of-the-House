import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2GuideContent from "@/data/breathedge-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/breathedge-2`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-chapter-one-mary.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-overview.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-area-discovered.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-early-access-ending.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Guide: Walkthrough, Survival & Chapter 1",
  description:
    "Start Breathedge 2 with the right Chapter 1 route, or jump to Outskirts, antennas, oxygen, Cold Protection, Depot, resources and the EA ending.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Guide: Chapter 1 Progression and Help",
    description:
      "Find the right route through Chapter 1 or jump directly to guides for the Outskirts, survival systems, Depot, resources and the current ending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Breathedge 2 Chapter One Mary at the beginning of the Early Access story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Guide",
    description:
      "Choose the right Chapter 1 route or jump directly to the progression problem blocking your Breathedge 2 run.",
    images: [imageUrls[0]],
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
          name: "Breathedge 2 Guide",
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
        "Breathedge 2 Guide: Chapter 1 Walkthrough, Progression and Survival Help",
      description:
        "A Breathedge 2 guide hub for choosing the right Chapter 1 route or solving specific progression problems, including the Station Outskirts, Attendant parts, Three Antennas and Antenna Debris, oxygen range, Cold Protection, Depot progression, resources and crafting, and the current Early Access ending.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      about: [
        {
          "@type": "VideoGame",
          name: "Breathedge 2",
        },
        {
          "@type": "Thing",
          name: "Breathedge 2 Chapter 1",
        },
        {
          "@type": "Thing",
          name: "Station Outskirts",
        },
        {
          "@type": "Thing",
          name: "Three Antennas",
        },
        {
          "@type": "Thing",
          name: "Oxygen",
        },
        {
          "@type": "Thing",
          name: "Cold Protection",
        },
        {
          "@type": "Thing",
          name: "Depot",
        },
        {
          "@type": "Thing",
          name: "Breathedge 2 resources",
        },
        {
          "@type": "Thing",
          name: "Breathedge 2 ending",
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
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Where I Start in Breathedge 2"
          description="Choose the full Chapter 1 route when progression is unclear, or jump directly to the Outskirts, survival system, hidden object, Depot or ending that is blocking the run."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "where-to-start",
              label: "Where to start",
            },
            {
              id: "chapter-1-route",
              label: "Chapter 1 route",
            },
            {
              id: "outskirts",
              label: "Outskirts problems",
            },
            {
              id: "survival",
              label: "Oxygen and Cold Protection",
            },
            {
              id: "depot",
              label: "Depot progression",
            },
            {
              id: "resources-crafting",
              label: "Resources and crafting",
            },
            {
              id: "current-ending",
              label: "Current Early Access ending",
            },
          ]}
        >
          <Breathedge2GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}