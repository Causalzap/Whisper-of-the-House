import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2OxygenGuideContent from "@/data/breathedge-2/oxygen-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/oxygen-guide`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-public-oxygen-station-repaired.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-purified-oxygen-blueprint.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-purified-oxygen-recipe.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-oxyworm-nest-refill.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Oxygen Guide: Station, Oxyworms & Refills",
  description:
    "Repair the Oxygen Station, unlock Purified Oxygen, use Oxyworm Nests, manage Ice, and plan longer Breathedge 2 exploration routes safely.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Oxygen Guide: How to Extend Your Range",
    description:
      "Use the Public Oxygen Station, Oxyworms, Purified Oxygen and field refills to make longer Chapter 1 routes practical.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Repaired Public Oxygen Station in the Breathedge 2 Station Outskirts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Oxygen Guide",
    description:
      "Repair the Oxygen Station, craft Purified Oxygen and use Oxyworm Nests to extend exploration range.",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oxygen Guide",
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
        "Breathedge 2 Oxygen Guide: Public Oxygen Station, Oxyworms and Purified Oxygen",
      description:
        "A Breathedge 2 oxygen guide covering the Public Oxygen Station repair, Ice management, Oxyworm blueprint unlock, Purified Oxygen recipe and 120 Oxygen refill, Oxyworm Nests, travel range and the difference between Oxygen and Gas.",
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
          name: "Oxygen",
        },
        {
          "@type": "Thing",
          name: "Public Oxygen Station",
        },
        {
          "@type": "Thing",
          name: "Oxyworm",
        },
        {
          "@type": "Thing",
          name: "Oxyworm Nest",
        },
        {
          "@type": "Thing",
          name: "Purified Oxygen",
        },
        {
          "@type": "Thing",
          name: "Gas",
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
          title="How I Extend My Oxygen Range in Breathedge 2"
          description="Repair the Public Oxygen Station, reserve Ice, unlock portable oxygen and use Oxyworm Nests so distant objectives leave enough air for the work and the return."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "repair-oxygen-station",
              label: "Repair the Oxygen Station",
            },
            {
              id: "keep-ice-for-oxygen",
              label: "Keep Ice for oxygen",
            },
            {
              id: "unlock-purified-oxygen",
              label: "Unlock Purified Oxygen",
            },
            {
              id: "purified-oxygen-recipe",
              label: "Purified Oxygen recipe",
            },
            {
              id: "oxyworm-nests",
              label: "Use Oxyworm Nests",
            },
            {
              id: "when-to-turn-back",
              label: "When to turn back",
            },
            {
              id: "cold-and-oxygen",
              label: "Cold and oxygen",
            },
            {
              id: "oxygen-vs-gas",
              label: "Oxygen vs Gas",
            },
            {
              id: "oxygen-check-before-leaving",
              label: "Plan the next refill",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/walkthrough",
              label: "Chapter 1 Walkthrough",
            },
            {
              href: "/breathedge-2/outskirts-walkthrough",
              label: "Outskirts Walkthrough",
            },
            {
              href: "/breathedge-2/cold-protection",
              label: "Cold Protection Guide",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
            {
              href: "/breathedge-2/resources-crafting",
              label: "Resources & Crafting Guide",
            },
          ]}
        >
          <Breathedge2OxygenGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}