import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronNestContent from "@/data/iron-nest/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest`;

const metadataTitle =
  "Iron Nest Guide: Walkthroughs, Shells & Firing Solutions";

const metadataDescription =
  "Learn the firing loop, map tools, shell roles, requisition and controls, then use mission walkthroughs from Fire and Light through The Gorge.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-demo-protocol.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-teleprinter-orders.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-tools-overview.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-bearing-range.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-calculator-elevation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-shell-menu-types.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-requisition-console.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-right-gun-link.webp`,
];

const walkthroughPages = [
  {
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Fire and Light Walkthrough",
    schemaName: "Iron Nest Fire and Light Walkthrough",
  },
  {
    href: "/iron-nest/liberation-walkthrough",
    label: "Liberation Walkthrough",
    schemaName: "Iron Nest Liberation Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
    schemaName: "Iron Nest Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
    schemaName: "Iron Nest Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
    schemaName: "Iron Nest Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
    schemaName: "Iron Nest The Gorge Walkthrough",
  },
];

const toc = [
  {
    id: "iron-nest-guide",
    label: "How to operate Iron Nest",
  },
  {
    id: "mission-walkthroughs",
    label: "Mission walkthroughs",
  },
  {
    id: "calibration-fire",
    label: "Calibration Fire",
  },
  {
    id: "teleprinter-and-map",
    label: "Teleprinter and map",
  },
  {
    id: "map-tools-and-cleanup",
    label: "Map tools and cleanup",
  },
  {
    id: "bearing-range-charges-elevation",
    label: "Build a firing solution",
  },
  {
    id: "shells-and-target-choice",
    label: "Shell selection",
  },
  {
    id: "requisition-recon-and-movement",
    label: "Requisition and movement",
  },
  {
    id: "left-and-right-guns",
    label: "Left and right guns",
  },
  {
    id: "return-to-the-right-station",
    label: "Troubleshoot a bad shot",
  },
  {
    id: "challenge-mode",
    label: "Challenge Mode",
  },
  {
    id: "universal-mistakes",
    label: "Universal mistakes",
  },
];

const relatedLinks = walkthroughPages.map(({ href, label }) => ({
  href,
  label,
}));

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Iron Nest Guide Hub and Mission Walkthroughs",
    description:
      "Learn the complete Iron Nest firing loop, choose shells by target role, manage reconnaissance and requisition, troubleshoot bad shots, and open six detailed campaign walkthroughs.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest operating protocol showing read measure calculate load rotate elevate and fire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Guide and Mission Walkthrough Hub",
    description:
      "Learn the firing loop, map tools, shells, requisition, dual-gun handling, troubleshooting, and six campaign missions.",
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
        "Iron Nest Guide Hub: Firing Solutions, Map Tools, Shell Selection, Requisition, Troubleshooting, and Mission Walkthroughs",
      description:
        "A player-focused Iron Nest guide hub explaining the full read, plot, calculate, load, rotate, elevate, fire, and confirm loop; how to complete Calibration Fire; how to interpret teleprinter orders; how to separate spotter bearings, search sectors, corrections, and Position Reports from the final turret bearing; how to use map markers, pencils, the Drafting Compass, and Iris without creating clutter; how bearing, range, powder charges, and elevation form one firing card; when to use H, HCHE, AP, Star, and Smoke Shells; when to spend or preserve requisition; how reconnaissance and Emergency Move affect the firing solution; how to manage the left and right guns separately; where to return when a shot misses or a mission does not complete; and how to reach detailed walkthroughs for Fire and Light, Liberation, Counter-Battery, Iron Road, Siege of Cartagena, and The Gorge.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-08-07",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Iron Nest guide",
        },
        {
          "@type": "Thing",
          name: "Iron Nest walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest firing solution",
        },
        {
          "@type": "Thing",
          name: "Iron Nest map tools",
        },
        {
          "@type": "Thing",
          name: "Iron Nest ballistic calculator",
        },
        {
          "@type": "Thing",
          name: "Iron Nest powder charges",
        },
        {
          "@type": "Thing",
          name: "Iron Nest shell types",
        },
        {
          "@type": "Thing",
          name: "Iron Nest requisition",
        },
        {
          "@type": "Thing",
          name: "Iron Nest reconnaissance",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Emergency Move",
        },
        {
          "@type": "Thing",
          name: "Iron Nest left and right guns",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Calibration Fire",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Challenge Mode",
        },
      ],
      hasPart: walkthroughPages.map(({ href, schemaName }) => ({
        "@type": "WebPage",
        "@id": `${siteUrl}${href}`,
        name: schemaName,
        url: `${siteUrl}${href}`,
      })),
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
      "@type": "ItemList",
      "@id": `${pageUrl}#walkthroughs`,
      name: "Iron Nest Mission Walkthroughs",
      numberOfItems: walkthroughPages.length,
      itemListElement: walkthroughPages.map(
        ({ href, schemaName }, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: schemaName,
          url: `${siteUrl}${href}`,
        }),
      ),
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
          title="Operate Iron Nest, Fix Bad Shots, and Follow the Campaign"
          description="Learn the shared firing system once, then open a focused walkthrough when a mission adds moving targets, Counter-Battery pressure, chained intelligence, smoke support, or manual observed fire."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronNestContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}