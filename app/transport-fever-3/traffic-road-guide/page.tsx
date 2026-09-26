import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3TrafficRoadGuideContent from "@/data/transport-fever-3/traffic-road-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/traffic-road-guide`;

const metadataTitle =
  "Transport Fever 3 Traffic Guide: Roads, Lanes & Congestion";

const metadataDescription =
  "Fix Transport Fever 3 traffic with bypasses, waypoints, lane rules, roundabouts, bus lanes, maintenance coverage, trams, and better truck routing.";

const articleDescription =
  "Trace queues to their real endpoint, move through-freight out of town centers, force better routes with waypoints, clean up junction and lane movements, protect passenger service, reduce unnecessary vehicles, and use road maintenance where several lines pass.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-ring-road.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-roundabout-lane-management.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-bus-lane-traffic.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-road-maintenance-coverage.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "separate-through-traffic",
    label: "Move through-freight outside",
  },
  {
    id: "waypoints",
    label: "Use waypoints",
  },
  {
    id: "road-hierarchy",
    label: "Road hierarchy",
  },
  {
    id: "roundabouts-and-lanes",
    label: "Roundabouts & lane rules",
  },
  {
    id: "traffic-lights",
    label: "Traffic lights",
  },
  {
    id: "follow-the-cargo-queue",
    label: "Cargo station queues",
  },
  {
    id: "bus-lanes",
    label: "Bus lanes",
  },
  {
    id: "vehicle-count",
    label: "Reduce vehicle count",
  },
  {
    id: "road-maintenance",
    label: "Road maintenance",
  },
  {
    id: "road-tools",
    label: "Road tools & tradeoffs",
  },
  {
    id: "trams",
    label: "When to use trams",
  },
  {
    id: "underground-transit",
    label: "Underground transit",
  },
  {
    id: "when-road-is-not-enough",
    label: "When road is not enough",
  },
  {
    id: "traffic-troubleshooting",
    label: "Traffic troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Money & Economy Guide",
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
        alt: "Transport Fever 3 Warwick ring road carrying freight outside the town center",
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
          name: "Transport Fever 3 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Traffic & Road Guide",
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
      headline: "Transport Fever 3 Traffic & Road Guide",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-26",
      dateModified: "2026-09-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 traffic",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 road congestion",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 waypoints",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 lane management",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Traffic & Road Guide"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3TrafficRoadGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}