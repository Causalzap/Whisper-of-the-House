
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronRoadPrototypeTrainContent from "@/data/the-long-dark-iron-road/prototype-train-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-long-dark-iron-road`;
const pageUrl = `${hubUrl}/prototype-train-guide`;

const metadataTitle =
  "Iron Road Train: How to Drive, Repair & Refuel";

const metadataDescription =
  "Start the Prototype Train, manage PSI and Whale Oil, clear railway obstacles, avoid damaged tracks, and repair the Wheels, Boiler and brakes.";

const articleTitle =
  "How Do You Drive and Repair the Train in The Long Dark: Iron Road?";

const articleDescription =
  "Start the Prototype Train, manage its steam pressure and Whale Oil, choose Slow or Fast gear, clear obstacles, and repair damaged train components.";

const toc = [
  {
    id: "first-start",
    label: "Start the Prototype Train",
  },
  {
    id: "pressure-gears",
    label: "Steam pressure & driving gears",
  },
  {
    id: "obstacles",
    label: "Clear railway obstacles",
  },
  {
    id: "broken-track",
    label: "Damaged track & wheel risk",
  },
  {
    id: "repair-components",
    label: "Repair train components",
  },
  {
    id: "overpressure",
    label: "Overpressure & boiler risk",
  },
  {
    id: "refueling",
    label: "Whale Oil & water consumption",
  },
  {
    id: "mobile-shelter",
    label: "Train cabin & shelter",
  },
];

const relatedLinks = [
  {
    href: "/the-long-dark-iron-road",
    label: "Iron Road: How to Start & Progress",
  },
  {
    href: "/the-long-dark-iron-road/anna-island-walkthrough",
    label: "Anna Island: Find the Train Key",
  },
  {
    href: "/the-long-dark-iron-road/fulmar-boat",
    label: "Fulmar Boat: Getting to Cauldron Island",
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
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "The Long Dark: Iron Road",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prototype Train",
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
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-10-28",
      dateModified: "2026-10-28",
      about: [
        {
          "@type": "VideoGame",
          name: "The Long Dark: Iron Road",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Prototype Train",
        },
        {
          "@type": "Thing",
          name: "Steam pressure and PSI",
        },
        {
          "@type": "Thing",
          name: "Slow and Fast driving gears",
        },
        {
          "@type": "Thing",
          name: "Whale Oil and water tanks",
        },
        {
          "@type": "Thing",
          name: "Train repairs and damaged tracks",
        },
        {
          "@type": "Thing",
          name: "Train cabin shelter",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="The Long Dark: Iron Road"
          gameHref="/the-long-dark-iron-road"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronRoadPrototypeTrainContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
