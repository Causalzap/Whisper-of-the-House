import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FishingGuideContent from "@/data/nivalis-nights/fishing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/fishing-guide`;

const metadataTitle =
  "Nivalis Nights Fishing Guide: Rod, Putter, Fish Locations & Database";

const metadataDescription =
  "Learn how to fish in Nivalis Nights, get Boardwalk Addy's free rod, unlock the Putter, use the Fish Detector and Database, read boat scanner signals, and find early fish.";

const articleDescription =
  "A practical Nivalis Nights fishing guide covering Boardwalk Addy's free fishing rod, shore fishing, the Putter boat, Fish Detector and Fish Database, boat scanner signals, early fish such as Stickleback, Fishing Level 3, and how fishing fits into money and exploration progression.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-fishing-rod-boardwalk-addy.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-boat-registration.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-fishing-detector-database.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-boat-scanner-fishing-spots.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-stickleback-locations.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-fishing-detector-database.webp`;

const toc = [
  {
    id: "get-fishing-rod",
    label: "Get the Free Fishing Rod From Boardwalk Addy",
  },
  {
    id: "how-to-fish",
    label: "Equip the Rod, Cast, and Wait for a Bite",
  },
  {
    id: "get-the-boat",
    label: "Unlock the Putter for Offshore Fishing",
  },
  {
    id: "fish-detector-database",
    label: "Use the Fish Detector and Database",
  },
  {
    id: "boat-scanner",
    label: "Read the Boat Scanner Before Casting",
  },
  {
    id: "first-fish",
    label: "Stickleback and Early Fish Locations",
  },
  {
    id: "fishing-levels",
    label: "Fishing Levels and Scanner Radius",
  },
  {
    id: "fishing-for-money",
    label: "Fishing as an Outside Cash Source",
  },
  {
    id: "fishing-trip-planning",
    label: "Plan Longer Fishing Trips Around Curfew",
  },
  {
    id: "achievement-fish",
    label: "Catch New Species as the Database Expands",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/beginner-guide",
    label: "Nivalis Nights Beginner Guide",
  },
  {
    href: "/nivalis-nights/business-guide",
    label: "Ramen Noir Business & Profit Guide",
  },
  {
    href: "/nivalis-nights/curfew",
    label: "Nivalis Nights Curfew Guide",
  },
  {
    href: "/nivalis-nights/achievements",
    label: "Nivalis Nights Achievement Tracker",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Nivalis Nights Fish Detector and Fish Database showing fishing locations, weather, and species information",
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
          name: "Nivalis Nights",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fishing Guide",
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
      dateModified: "2026-10-01",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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

export default function NivalisNightsFishingGuidePage() {
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
          title="Nivalis Nights Fishing Guide: How to Fish, Get the Putter & Find Fish"
          description="Get the free fishing rod, unlock the Putter, use the Fish Detector and Database, read scanner signals correctly, and start finding new species without wasting casts."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FishingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}