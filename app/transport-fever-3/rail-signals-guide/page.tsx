
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
  "Fix No Path and train deadlocks in Transport Fever 3. Set up path signals, passing loops, crossovers, one-way tracks, station platforms, and depots.";

const articleDescription =
  "Find out why trains cannot reach their destination, stop at red signals, or block station junctions. Fix track connections, signal direction, passing loops, platform access, and line priority.";

const articleTitle =
  "Transport Fever 3 Rail & Signals Guide: Fix No Path";

const publishedAt = "2026-09-26";
const modifiedAt = "2026-10-08";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-crossovers-and-signals.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-signal-no-path.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-double-track-station.webp`,
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
    label: "Tracks & crossovers",
  },
  {
    id: "how-signals-work",
    label: "Path-based signaling",
  },
  {
    id: "signal-placement",
    label: "Signals & passing loops",
  },
  {
    id: "signal-direction",
    label: "Fix No Path",
  },
  {
    id: "train-depot",
    label: "Train depot access",
  },
  {
    id: "train-consist",
    label: "Locomotives & wagons",
  },
  {
    id: "mixed-speed-trains",
    label: "Mixed speeds & priority",
  },
  {
    id: "station-bottlenecks",
    label: "Platforms & bottlenecks",
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
    href: "/transport-fever-3/production-chains",
    label: "Production Chains Guide",
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
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 double-track railway with crossovers and signals near a station approach",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: publishedAt,
      dateModified: modifiedAt,
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 railway signals",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 path-based signaling",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 No Path errors",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 passing loops",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 railway junctions and platforms",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
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
