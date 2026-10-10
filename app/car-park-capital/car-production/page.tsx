
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CarProductionContent from "@/data/car-park-capital/car-production.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/car-park-capital`;
const pageUrl = `${hubUrl}/car-production`;

const metadataTitle =
  "Car Park Capital Car Factory & No Vehicles for Sale Fix";

const metadataDescription =
  "Build Car Factories, deliver vehicles with Car Carriers, stock Car Shop Carousels, and fix missing vehicles, production shortages, and slow sales.";

const articleDescription =
  "Produce cars with Car Factories, transport them to Car Shop Carousels, resolve No Vehicles for Sale warnings, and decide whether another factory, carrier, or shop will improve vehicle sales.";

const imageUrls = [
  `${siteUrl}/images/car-park-capital/car-park-capital-car-shop-no-vehicles-for-sale.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-car-factory-carrier-setup.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-car-carrier-delivery.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-car-factory-stock-carrier-shortage.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "build-car-sales",
    label: "Start Selling Cars",
  },
  {
    id: "factory-and-carrier",
    label: "Car Factory & Carrier Setup",
  },
  {
    id: "first-delivery",
    label: "Check Car Carrier Deliveries",
  },
  {
    id: "vehicles-in-stock-but-shop-empty",
    label: "No Vehicles for Sale",
  },
  {
    id: "factory-not-producing",
    label: "Factory Production Shortages",
  },
  {
    id: "car-shops-not-selling",
    label: "Cars Not Selling",
  },
  {
    id: "choose-vehicles",
    label: "Which Vehicles to Produce",
  },
  {
    id: "when-to-expand",
    label: "Factory vs Carrier vs Carousel",
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
        alt: "Car Park Capital Car Shop Carousel showing No Vehicles for Sale",
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

export default function CarParkCapitalCarProductionPage() {
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
            name: "Car Factory & Vehicle Delivery",
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
          title="Car Park Capital: How to Make Cars and Fix No Vehicles for Sale"
          description={articleDescription}
          gameTitle="Car Park Capital"
          gameHref="/car-park-capital"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CarProductionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
