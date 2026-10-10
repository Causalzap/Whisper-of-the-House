
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OilGasolineContent from "@/data/car-park-capital/oil-gasoline.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/car-park-capital`;
const pageUrl = `${hubUrl}/oil-gasoline`;

const metadataTitle =
  "Car Park Capital Gasoline Guide: Fix Fuel Supply & Delivery";

const metadataDescription =
  "Make Gasoline in Car Park Capital with Pump Jacks, Oil Refineries and delivery trucks. Build Gas Stations and fix depleted fuel or missing deliveries.";

const articleDescription =
  "Produce Gasoline from Crude Oil, connect Pump Jacks and Oil Refineries, deliver fuel to Gas Stations, fix depleted supply, and decide when more trucks or production capacity are needed.";

const imageUrls = [
  `${siteUrl}/images/car-park-capital/car-park-capital-gasoline-supply-depleted.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-pump-jack-crude-oil-transport.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-gasoline-transport-refinery-stock.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-gas-station-drive-thru-layout.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "gasoline-production-chain",
    label: "How to Produce Gasoline",
  },
  {
    id: "pump-jacks",
    label: "Pump Jacks & Crude Oil",
  },
  {
    id: "refinery-and-crude-delivery",
    label: "Oil Refinery Setup",
  },
  {
    id: "gasoline-transport",
    label: "Gasoline Transportation",
  },
  {
    id: "gas-station-setup",
    label: "Build a Gas Station",
  },
  {
    id: "gasoline-supply-depleted",
    label: "Fix Gasoline Supply Depleted",
  },
  {
    id: "gas-station-prices-and-capacity",
    label: "Gas Prices & Station Capacity",
  },
];

const relatedLinks = [
  {
    href: "/car-park-capital",
    label: "Car Park Capital Guide",
  },
  {
    href: "/car-park-capital/bald-town-city-walkthrough",
    label: "Bald Town City Walkthrough",
  },
  {
    href: "/car-park-capital/unrest-protests",
    label: "Unrest & Protests",
  },
  {
    href: "/car-park-capital/car-production",
    label: "Car Factory & Vehicle Delivery",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        alt: "Car Park Capital Gas Station showing Gasoline supply depleted",
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

export default function CarParkCapitalOilGasolinePage() {
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
            name: "Car Park Capital",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Oil and Gasoline",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        url: pageUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-10",
        dateModified: "2026-10-10",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          title="Car Park Capital: How to Make Gasoline and Fix Fuel Supply"
          description={articleDescription}
          gameTitle="Car Park Capital"
          gameHref="/car-park-capital"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OilGasolineContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
