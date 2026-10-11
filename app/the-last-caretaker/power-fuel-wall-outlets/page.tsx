
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheLastCaretakerPowerFuelContent from "@/data/the-last-caretaker/power-fuel-wall-outlets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-last-caretaker`;
const pageUrl = `${hubUrl}/power-fuel-wall-outlets`;

const metadataTitle =
  "The Last Caretaker Power, Fuel & Wall Outlets Guide";

const metadataDescription =
  "Fix wall outlets, power and gas lines, Fill vs Equalize, 30 kWh Bulk Batteries, 20,000 L fuel tanks, Transfer Gate power and North Bastion methane.";

const articleDescription =
  "Fix blocked wall outlets, cable range, power and fuel routing, and mixed-battery charging. Compare Update 6 Bulk Batteries and fuel tanks, prepare power for the Lazarus Transfer Gate, and connect the North Bastion Methane Extractor.";

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-wall-outlets-skill-unlocks.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-electric-cable-extender-input.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-electric-cable-extender-range.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-gas-fuel-wall-socket-blocked-output.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-bulk-battery-built.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-bulk-battery-fill-equalize.webp`,
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
    type: "article",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "The Last Caretaker wall outlets and electrical routing skill unlocks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "fix-the-bottleneck",
    label: "Find the Network Problem",
  },
  {
    id: "what-wall-outlets-do",
    label: "Power, Fuel & Gas Outlets",
  },
  {
    id: "build-from-the-load",
    label: "Connect Machines & Sources",
  },
  {
    id: "range-blocked-output",
    label: "Range & Blocked Output",
  },
  {
    id: "bulk-storage-update-55",
    label: "Update 6 Bulk Storage",
  },
  {
    id: "bulk-battery-fill-equalize",
    label: "Bulk Battery: Fill vs Equalize",
  },
  {
    id: "bulk-tanks",
    label: "20,000 L Bulk Fuel Tanks",
  },
  {
    id: "boat-or-fixed-base",
    label: "Boat vs Fixed Base",
  },
  {
    id: "fuel-gas-routing",
    label: "Fuel & Gas Connections",
  },
  {
    id: "transfer-gate-power-update-6",
    label: "Lazarus Transfer Gate Power",
  },
  {
    id: "north-bastion-methane",
    label: "North Bastion Methane",
  },
  {
    id: "grid-scan",
    label: "Grid Scan",
  },
  {
    id: "power-fuel-troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "when-to-stop-rebuilding",
    label: "Finish Your Network Setup",
  },
];

const relatedLinks = [
  {
    href: "/the-last-caretaker/",
    label: "The Last Caretaker Guides",
  },
  {
    href: "/the-last-caretaker/walkthrough/",
    label: "Walkthrough & North Bastion",
  },
  {
    href: "/the-last-caretaker/moses-warehouse-alpha-guide/",
    label: "MOSES Warehouse Alpha",
  },
  {
    href: "/the-last-caretaker/new-horizons-guide/",
    label: "New Horizons",
  },
  {
    href: "/the-last-caretaker/oil-whale-guide/",
    label: "Oil Whale",
  },
  {
    href: "/the-last-caretaker/project-eden-guide/",
    label: "Project Eden",
  },
];

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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Last Caretaker Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Power, Fuel & Wall Outlets",
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
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-10-11",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "Wall Outlets",
        },
        {
          "@type": "Thing",
          name: "Power Routing",
        },
        {
          "@type": "Thing",
          name: "Fuel Routing",
        },
        {
          "@type": "Thing",
          name: "Gas Routing",
        },
        {
          "@type": "Thing",
          name: "Electric Cable Extenders",
        },
        {
          "@type": "Thing",
          name: "Bulk Battery",
        },
        {
          "@type": "Thing",
          name: "Bulk Petrol Tank",
        },
        {
          "@type": "Thing",
          name: "Bulk Diesel Tank",
        },
        {
          "@type": "Thing",
          name: "Fill and Equalize",
        },
        {
          "@type": "Thing",
          name: "Grid Scan",
        },
        {
          "@type": "Thing",
          name: "MOSES Field Reserve Program",
        },
        {
          "@type": "Thing",
          name: "Lazarus Transfer Gate",
        },
        {
          "@type": "Thing",
          name: "Methane Extractor",
        },
        {
          "@type": "Thing",
          name: "North Bastion",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Update 6",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: `${siteUrl}/`,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: `${siteUrl}/`,
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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheLastCaretakerPowerFuelContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
