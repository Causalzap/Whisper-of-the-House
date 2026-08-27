import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FireMissionHelperContent from "@/data/iron-nest/fire-mission-helper.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/fire-mission-helper`;

const metadataTitle =
  "IRON NEST Fire Mission Helper & Triangulation Calculator";

const metadataDescription =
  "Find your Iron Nest position, triangulate targets from reports, then calculate bearing, distance, powder charges, and gun elevation in one tool.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-fire-mission-helper-ballistic-calculator.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-mission-helper-phantom-triangulation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-mission-helper-find-my-position.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-mission-helper-low-arc-comparison.webp`,
];

const toc = [
  {
    id: "what-this-helper-solves",
    label: "What this helper solves",
  },
  {
    id: "fire-solution",
    label: "Fire Solution",
  },
  {
    id: "locate-target",
    label: "Locate Target",
  },
  {
    id: "find-my-position",
    label: "Find My Position",
  },
  {
    id: "powder-and-elevation",
    label: "Powder & elevation",
  },
  {
    id: "moving-targets",
    label: "Moving targets",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "when-to-use-guides",
    label: "Helper vs walkthroughs",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate",
  },
  {
    href: "/iron-nest/phantom-battery-walkthrough",
    label: "Phantom Battery Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/final-harvest-walkthrough",
    label: "Final Harvest Walkthrough",
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
    title:
      "IRON NEST Fire Mission Helper: Triangulate, Locate, and Calculate",
    description:
      "Recover your Iron Nest position, combine listening-post reports, then calculate the final bearing, range, powder charge, and gun elevation.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "IRON NEST ballistic calculator showing distance, powder charge selection, and gun elevation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRON NEST Fire Mission Helper",
    description:
      "Turn position reports and target coordinates into bearing, distance, powder charge, and elevation.",
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
          name: "Iron Nest Guide",
          item: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fire Mission Helper",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${pageUrl}#application`,
      name: "IRON NEST Fire Mission Helper",
      description:
        "An interactive IRON NEST calculator for finding the Iron Nest position from distance reports, locating targets from bearing and distance reports, and calculating bearing, range, powder charge, and gun elevation.",
      url: pageUrl,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      isAccessibleForFree: true,
      about: {
        "@type": "VideoGame",
        name: "Iron Nest",
        url: `${siteUrl}/iron-nest`,
      },
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
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "IRON NEST Fire Mission Helper: Triangulation, Position Reports, and Firing Solutions",
      description:
        "A practical IRON NEST fire-control guide and interactive helper for calculating firing solutions, combining listening-post reports, recovering the Iron Nest position after an Emergency Move, choosing powder charges, and setting gun elevation.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-27",
      dateModified: "2026-08-27",
      articleSection: "Iron Nest Tools",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "IRON NEST firing solution",
        },
        {
          "@type": "Thing",
          name: "IRON NEST triangulation",
        },
        {
          "@type": "Thing",
          name: "IRON NEST ballistic calculator",
        },
        {
          "@type": "Thing",
          name: "IRON NEST powder charges",
        },
        {
          "@type": "Thing",
          name: "IRON NEST Phantom Battery",
        },
        {
          "@type": "Thing",
          name: "IRON NEST position reports",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Fire Mission Helper & Triangulation Calculator"
          description="Recover your Iron Nest position, locate targets from listening-post reports, then turn the result into bearing, distance, powder charge, and gun elevation."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FireMissionHelperContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}