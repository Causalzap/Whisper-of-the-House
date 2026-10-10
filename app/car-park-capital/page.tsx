
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CarParkCapitalContent from "@/data/car-park-capital/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/car-park-capital`;
const pageUrl = hubUrl;

const metadataTitle =
  "Car Park Capital Guide: Beginner, Money & Car Dependency";

const metadataDescription =
  "Build your first parking lot, set fees, make money, increase Car Dependency and Car Braininess, unlock services, and fix common progression problems.";

const articleDescription =
  "Build your first parking lot, use parking demand to choose locations, manage fees and loans, increase Car Dependency, satisfy Car Braininess needs, and expand with drive-thrus, multistory parking, and suburban homes.";

const imageUrls = [
  `${siteUrl}/images/car-park-capital/car-park-capital-hub.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-parking-bay-entry-direction.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-parking-fee-slider.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-level-two-food-need.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-level-one-dependency.webp`,
   `${siteUrl}/images/car-park-capital/car-park-capital-level-four-ownership-shortage.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "tutorial",
    label: "Build Your First Parking Lot",
  },
  {
    id: "parking-demand",
    label: "Parking Demand & Locations",
  },
  {
    id: "parking-fees",
    label: "Parking Fees & Money",
  },
  {
    id: "car-dependency",
    label: "Car Dependency Levels",
  },
  {
    id: "car-braininess",
    label: "Car Braininess & Needs",
  },
  {
    id: "drive-thrus",
    label: "Build Working Drive-Thrus",
  },
  {
    id: "multi-story-parking",
    label: "Multi-Story Parking Garages",
  },
  {
    id: "suburban-homes",
    label: "Suburban Homes & Evictions",
  },
  {
    id: "choose-scenario",
    label: "Bald Town City vs Gulf of Freedom",
  },
];

const relatedLinks = [
  {
    href: "/car-park-capital/bald-town-city-walkthrough",
    label: "Bald Town City Walkthrough",
  },
  {
    href: "/car-park-capital/gulf-of-freedom",
    label: "Gulf of Freedom",
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
    href: "/car-park-capital/unrest-protests",
    label: "Unrest & Protests",
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
        alt: "Car Park Capital game with parking lots, cars, and city-building",
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

export default function CarParkCapitalPage() {
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
          title="Car Park Capital Guide: What to Build First and How to Progress"
          description={articleDescription}
          gameTitle="Car Park Capital"
          gameHref="/car-park-capital"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CarParkCapitalContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
