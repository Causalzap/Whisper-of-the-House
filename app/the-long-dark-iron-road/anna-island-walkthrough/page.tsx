
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronRoadAnnaIslandWalkthroughContent from "@/data/the-long-dark-iron-road/anna-island-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-long-dark-iron-road`;
const pageUrl = `${hubUrl}/anna-island-walkthrough`;

const metadataTitle =
  "Iron Road Anna Island: Lighthouse, Cave & Church";

const metadataDescription =
  "Follow Alice's clues from Port Remnant to the lighthouse, find Port Remnant Cave, reach the church, and continue toward the train key.";

const articleTitle =
  "Where Do You Go Next on Anna Island in The Long Dark: Iron Road?";

const articleDescription =
  "Follow Alice from Port Remnant to the lighthouse, interpret her hand-drawn map, reach the church through Port Remnant Cave, and continue toward the Prototype Train.";

const imageUrls = [
  `${siteUrl}/images/the-long-dark-iron-road/anna-island-lighthouse-map.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/anna-island-port-remnant-cave.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/anna-island-church-entrance.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "port-remnant",
    label: "Port Remnant & lighthouse",
  },
  {
    id: "church-route",
    label: "Find Port Remnant Cave",
  },
  {
    id: "church",
    label: "Reach & explore the church",
  },
  {
    id: "train-tunnel",
    label: "Continue toward the train",
  },
];

const relatedLinks = [
  {
    href: "/the-long-dark-iron-road",
    label: "Iron Road: How to Start & Progress",
  },
  {
    href: "/the-long-dark-iron-road/fulmar-boat",
    label: "Fulmar Boat: How to Reach Anna Island",
  },
  {
    href: "/the-long-dark-iron-road/prototype-train-guide",
    label: "Prototype Train: Driving & Repairs",
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
        width: 1260,
        height: 762,
        alt: "Alice's hand-drawn map showing the cave and church route on Anna Island",
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
          name: "The Long Dark: Iron Road",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Anna Island Walkthrough",
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
      image: imageUrls,
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
          "@type": "Place",
          name: "Anna Island",
        },
        {
          "@type": "Place",
          name: "Port Remnant",
        },
        {
          "@type": "Thing",
          name: "Alice's lighthouse clues",
        },
        {
          "@type": "Place",
          name: "Port Remnant Cave",
        },
        {
          "@type": "Thing",
          name: "Anna Island church",
        },
        {
          "@type": "Thing",
          name: "Prototype Train Key",
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
          <IronRoadAnnaIslandWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
