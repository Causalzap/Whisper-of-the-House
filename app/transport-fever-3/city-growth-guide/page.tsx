import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3CityGrowthGuideContent from "@/data/transport-fever-3/city-growth-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/city-growth-guide`;

const metadataTitle =
  "Transport Fever 3 City Growth Guide: Supplies & Reputation";

const metadataDescription =
  "Grow Transport Fever 3 towns with passenger transport, cargo Supplies, Headquarters bonuses, better ratings, landmarks, reputation, and marketing.";

const articleDescription =
  "Read the town panel before changing the network, improve passenger movement and requested cargo, allow time for growth to register, use Headquarters bonuses and landmarks carefully, and diagnose towns held back by noise, pollution, reputation, or outdated coverage.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-town-level-up.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-headquarters-growth-bonus.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-town-noise-rating.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-landmark-effects.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "read-town-panel",
    label: "Read the town panel",
  },
  {
    id: "public-transport-growth",
    label: "Passenger transport & growth",
  },
  {
    id: "cargo-supplies",
    label: "Cargo Supplies",
  },
  {
    id: "growth-delay",
    label: "Growth takes time",
  },
  {
    id: "town-levels",
    label: "Town levels",
  },
  {
    id: "headquarters",
    label: "Headquarters growth bonus",
  },
  {
    id: "environment",
    label: "Noise & pollution",
  },
  {
    id: "reputation",
    label: "Town reputation",
  },
  {
    id: "landmarks",
    label: "Landmark effects",
  },
  {
    id: "marketing",
    label: "Marketing Campaign",
  },
  {
    id: "why-town-not-growing",
    label: "Why the town is not growing",
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
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
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
        alt: "Transport Fever 3 town reaching a new settlement level after sustained growth",
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
          name: "City Growth Guide",
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
      headline: "Transport Fever 3 City Growth Guide",
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
          name: "Transport Fever 3 city growth",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 Supplies",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 reputation",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 landmarks",
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
          title="Transport Fever 3 City Growth Guide"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3CityGrowthGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}