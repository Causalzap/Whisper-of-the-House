
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnrestProtestsContent from "@/data/car-park-capital/unrest-protests.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/car-park-capital`;
const pageUrl = `${hubUrl}/unrest-protests`;

const metadataTitle =
  "Car Park Capital: How to Stop Protests & Reduce Civil Unrest";

const metadataDescription =
  "Stop protests in Car Park Capital with Riot Police, fix unreachable patrols, clear burned cars with Tow Trucks, and reduce Civil Unrest using Plastic Trees.";

const articleDescription =
  "Arrest protesters blocking businesses, deploy Riot Police, fix patrol waypoints, extinguish fires, remove wrecked cars, and use Plastic Trees to reduce Civil Unrest.";

const imageUrls = [
  `${siteUrl}/images/car-park-capital/car-park-capital-protester-blocking-business.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-riot-control-garage.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-citywide-protests.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-tow-truck-riot-recovery.webp`,
  `${siteUrl}/images/car-park-capital/car-park-capital-plastic-tree-factory.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "arrest-protester",
    label: "Arrest a Protester",
  },
  {
    id: "citywide-protests",
    label: "Stop Citywide Protests",
  },
  {
    id: "patrols-not-working",
    label: "Fix Patrols & Waypoints",
  },
  {
    id: "fires-and-burned-cars",
    label: "Fires, Tow Trucks & Junkyard",
  },
  {
    id: "plastic-trees",
    label: "Reduce Unrest With Plastic Trees",
  },
  {
    id: "restore-businesses",
    label: "Restore Blocked Businesses",
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
    href: "/car-park-capital/oil-gasoline",
    label: "Oil & Gasoline Supply",
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
        alt: "Car Park Capital protester blocking a business until Riot Police intervene",
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

export default function CarParkCapitalUnrestProtestsPage() {
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
            name: "Unrest & Protests",
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
          title="Car Park Capital: How to Stop Protests and Reduce Civil Unrest"
          description={articleDescription}
          gameTitle="Car Park Capital"
          gameHref="/car-park-capital"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UnrestProtestsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
