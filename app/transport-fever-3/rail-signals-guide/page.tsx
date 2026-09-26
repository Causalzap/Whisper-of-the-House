import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3RailSignalsGuideContent from "@/data/transport-fever-3/rail-signals-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/rail-signals-guide`;

const metadataTitle =
  "Transport Fever 3 Rail & Signals Guide: Fix No Path";

const metadataDescription =
  "Build working railways in Transport Fever 3 with good station access, crossovers, signal direction, depots, train consists, electrification, and No Path fixes.";

const articleDescription =
  "Move to rail after road demand is proven, place stations where existing passengers can reach them, build usable track and crossovers before signaling it, and fix No Path, depot access, station bottlenecks, mixed-speed traffic, and electrification problems.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-double-track-station.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-crossovers-and-signals.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-signal-no-path.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-train-depot-connection.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-first-passenger-train.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "when-to-build-rail",
    label: "When to build rail",
  },
  {
    id: "station-placement",
    label: "Station placement",
  },
  {
    id: "build-track-first",
    label: "Build the track first",
  },
  {
    id: "how-signals-work",
    label: "How signals work",
  },
  {
    id: "signal-placement",
    label: "Signal placement",
  },
  {
    id: "signal-direction",
    label: "Signal direction & No Path",
  },
  {
    id: "train-depot",
    label: "Train depot access",
  },
  {
    id: "train-consist",
    label: "Train consists",
  },
  {
    id: "mixed-speed-trains",
    label: "Mixed-speed trains",
  },
  {
    id: "station-bottlenecks",
    label: "Station bottlenecks",
  },
  {
    id: "electrification",
    label: "Electrification",
  },
  {
    id: "train-not-moving",
    label: "Train not moving",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Money & Economy Guide",
  },
  {
    href: "/transport-fever-3/campaign-walkthrough",
    label: "Campaign Walkthrough",
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
        alt: "Transport Fever 3 double-track passenger railway with a station connected to the local transport network",
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
          name: "Rail & Signals Guide",
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
      headline: "Transport Fever 3 Rail & Signals Guide",
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
          name: "Transport Fever 3 signals",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 No Path",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 train stations",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 crossovers",
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
          title="Transport Fever 3 Rail & Signals Guide"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3RailSignalsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}