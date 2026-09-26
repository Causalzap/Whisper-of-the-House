import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3CampaignWalkthroughContent from "@/data/transport-fever-3/campaign-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/campaign-walkthrough`;

const metadataTitle =
  "Transport Fever 3 Campaign Walkthrough: Missions 1–4";

const metadataDescription =
  "Complete Transport Fever 3 Missions 1–4 with objective order, star requirements, alligator and artifact locations, sewage, blankets, and festival tips.";

const articleDescription =
  "Complete Saving Mardi Gras, Alpine Crossing, Desert Adventure, and Biggest Festival Ever with the required objective order, quantities, star conditions, special objectives, and the steps that commonly stop mission progress.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-mardi-gras-alligators.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-mardi-gras-wood-delivery.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-mardi-gras-parade-route.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-alpine-crossing-signals.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-alpine-crossing-zermatt.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-maintenance-camp.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-truck-condition.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-remains.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-excavation.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-sewage-line.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-instruments.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-public-transport.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-helicopter.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "mission-1-saving-mardi-gras",
    label: "Mission 1: Saving Mardi Gras",
  },
  {
    id: "mission-2-alpine-crossing",
    label: "Mission 2: Alpine Crossing",
  },
  {
    id: "mission-3-desert-adventure",
    label: "Mission 3: Desert Adventure",
  },
  {
    id: "mission-4-biggest-festival-ever",
    label: "Mission 4: Biggest Festival Ever",
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
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
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
        alt: "Transport Fever 3 Saving Mardi Gras campaign mission at the New Orleans logging camp",
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
          name: "Campaign Walkthrough",
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
      headline: "Transport Fever 3 Campaign Walkthrough: Missions 1–4",
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
          name: "Saving Mardi Gras",
        },
        {
          "@type": "Thing",
          name: "Alpine Crossing",
        },
        {
          "@type": "Thing",
          name: "Desert Adventure",
        },
        {
          "@type": "Thing",
          name: "Biggest Festival Ever",
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
          title="Transport Fever 3 Campaign Walkthrough: Missions 1–4"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3CampaignWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}