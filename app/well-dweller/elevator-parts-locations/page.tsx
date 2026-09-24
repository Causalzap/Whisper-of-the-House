import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ElevatorPartsLocationsContent from "@/data/well-dweller/elevator-parts-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/elevator-parts-locations`;

const metadataTitle =
  "Well Dweller Elevator Parts: All 3 Locations";

const metadataDescription =
  "Find all 3 Elevator Parts in The Drains, avoid the blocked pit after Part 2, and take the far-left lower route to reach Part 3.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-drains-broken-elevator.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-elevator-part-1.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-elevator-part-2.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-elevator-part-3.webp`,
];

const toc = [
  {
    id: "elevator-part-1",
    label: "Elevator Part 1",
  },
  {
    id: "broken-elevator",
    label: "Find the Broken Elevator",
  },
  {
    id: "elevator-part-2",
    label: "Elevator Part 2",
  },
  {
    id: "elevator-part-3",
    label: "Elevator Part 3",
  },
  {
    id: "return-to-elevator",
    label: "Return to the Elevator",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller",
    label: "Well Dweller Guide",
  },
  {
    href: "/well-dweller/the-drains-walkthrough",
    label: "The Drains Walkthrough",
  },
  {
    href: "/well-dweller/walkthrough",
    label: "Well Dweller Walkthrough",
  },
  {
    href: "/well-dweller/golden-feathers-locations",
    label: "All 7 Golden Feather Locations",
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
    title: "Well Dweller Elevator Parts: All 3 Locations",
    description:
      "Collect all three Elevator Parts in The Drains, skip the blocked pit after Part 2, and follow the far-left route to the final component.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Well Dweller broken elevator in The Drains requiring three Elevator Parts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller Elevator Parts: All 3 Locations",
    description:
      "Find Elevator Parts 1, 2, and 3 in The Drains and repair the lift to Lady of the Drains.",
    images: [imageUrls[0]],
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
          name: "Well Dweller Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Elevator Parts",
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
      headline:
        "Well Dweller Elevator Parts: All 3 Locations in The Drains",
      description:
        "Find all three Elevator Parts in The Drains, use Wind Ride through the upper routes, avoid the blocked pit after Part 2, take the far-left lower path to Part 3, and return to the repaired elevator.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      articleSection: "Well Dweller Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Well Dweller",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Well Dweller Elevator Parts",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Elevator Part 1",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Elevator Part 2",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Elevator Part 3",
        },
        {
          "@type": "Thing",
          name: "Well Dweller The Drains elevator",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Wind Ride",
        },
        {
          "@type": "Thing",
          name: "Well Dweller blocked pit",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Well Dweller Elevator Parts: All 3 Locations"
          description="Find all three Elevator Parts in The Drains, avoid the misleading blocked pit after Part 2, and take the far-left lower route to the final component."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ElevatorPartsLocationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}