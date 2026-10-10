
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BaldTownCityContent from "@/data/car-park-capital/bald-town-city-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/car-park-capital`;
const pageUrl = `${hubUrl}/bald-town-city-walkthrough`;

const metadataTitle =
  "Car Park Capital Bald Town City Walkthrough: Beat Day 40";

const metadataDescription =
  "Beat Bald Town City before Day 40: reach Level 7, achieve 75% Car Braininess, park 400 cars, demolish 7 subway stations, and house 75 residents.";

const articleDescription =
  "Complete all five Bald Town City objectives before Day 40. Build parking near office towers, reach Car Dependency Level 7, manage car ownership and occupancy, remove seven subway stations, and move 75 residents into suburban homes.";

const imageUrls = [
  `${siteUrl}/images/car-park-capital/car-park-capital-bald-town-parking-demand.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-bald-town-city-objectives.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-bald-town-level-seven-requirements.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-bald-town-400-parked-cars.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-bald-town-city-complete.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "bald-town-objectives",
    label: "All Five Victory Conditions",
  },
  {
    id: "first-parking-lot",
    label: "First Parking Lot",
  },
  {
    id: "suburban-residents",
    label: "75 Suburban Residents",
  },
  {
    id: "subway-stations",
    label: "Demolish 7 Subway Stations",
  },
  {
    id: "reach-level-seven",
    label: "Reach Car Dependency Level 7",
  },
  {
    id: "four-hundred-parked",
    label: "400 Cars Parked Simultaneously",
  },
  {
    id: "keep-braininess",
    label: "Maintain 75% Car Braininess",
  },
  {
    id: "final-objective",
    label: "Finish Before Day 40",
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
    href: "/car-park-capital/unrest-protests",
    label: "Unrest & Protests",
  },
  {
    href: "/car-park-capital/gulf-of-freedom",
    label: "Gulf of Freedom",
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
        alt: "Car Park Capital Bald Town City parking demand around office skyscrapers",
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

export default function CarParkCapitalBaldTownCityPage() {
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
            name: "Bald Town City Walkthrough",
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
          title="How to Beat Bald Town City in Car Park Capital"
          description={articleDescription}
          gameTitle="Car Park Capital"
          gameHref="/car-park-capital"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BaldTownCityContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
