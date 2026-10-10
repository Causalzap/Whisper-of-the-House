
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GulfOfFreedomContent from "@/data/car-park-capital/gulf-of-freedom.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/car-park-capital`;
const pageUrl = `${hubUrl}/gulf-of-freedom`;

const metadataTitle =
  "Car Park Capital Gulf of Freedom: Amphibious Cars & Islands";

const metadataDescription =
  "Start Gulf of Freedom, unlock Amphibious Cars at Level 2, connect roads to water, expand beach parking, fix island routes, and reach Level 7.";

const articleDescription =
  "Build parking near Gulf of Freedom's hotels and beaches, unlock Amphibious Cars at Level 2, connect roads to water, solve island navigation problems, and work toward Level 7, 82% Car Braininess, and 30 suburban residents.";

const imageUrls = [
  `${siteUrl}/images/car-park-capital/car-park-capital-amphibious-car-entering-water.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-gulf-of-freedom-objectives.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-gulf-parking-demand-map.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-amphibious-car-factory-unlock.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-amphibious-road-water-connection.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "gulf-objectives",
    label: "Gulf of Freedom Objectives",
  },
  {
    id: "where-to-build-first",
    label: "First Parking Lots",
  },
  {
    id: "amphibious-car-unlock",
    label: "Unlock Amphibious Cars",
  },
  {
    id: "build-amphibious-factory",
    label: "Amphibious Factory & Islands",
  },
  {
    id: "connect-road-to-water",
    label: "Connect Roads to Water",
  },
  {
    id: "island-houses-not-working",
    label: "Fix Can't Navigate Home",
  },
  {
    id: "beach-parking-expansion",
    label: "Beach Parking & Demand",
  },
  {
    id: "gulf-next-steps",
    label: "Progress Toward Level 7",
  },
];

const relatedLinks = [
  {
    href: "/car-park-capital",
    label: "Car Park Capital Guide",
  },
  {
    href: "/car-park-capital/car-production",
    label: "Car Factory & Vehicle Delivery",
  },
  {
    href: "/car-park-capital/oil-gasoline",
    label: "Oil & Gasoline Supply",
  },
  {
    href: "/car-park-capital/bald-town-city-walkthrough",
    label: "Bald Town City Walkthrough",
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
        alt: "Amphibious Car traveling across the water in Car Park Capital Gulf of Freedom",
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

export default function CarParkCapitalGulfOfFreedomPage() {
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
            name: "Gulf of Freedom",
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
          title="Car Park Capital Gulf of Freedom: Amphibious Cars & Islands"
          description={articleDescription}
          gameTitle="Car Park Capital"
          gameHref="/car-park-capital"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GulfOfFreedomContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
