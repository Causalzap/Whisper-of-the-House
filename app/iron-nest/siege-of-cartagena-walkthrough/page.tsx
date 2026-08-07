import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SiegeOfCartagenaWalkthroughContent from "@/data/iron-nest/siege-of-cartagena-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/iron-nest`;
const pageUrl = `${hubUrl}/siege-of-cartagena-walkthrough`;

const metadataTitle =
  "Iron Nest Siege of Cartagena Walkthrough: Breakout Guide";

const metadataDescription =
  "Solve Cartagena’s chained targets, destroy both AP coastal batteries, recover after Emergency Move, clear eight units, and support the breakout with smoke.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-chain-measurements.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-three-firing-solutions.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-coastal-battery-ap-solutions.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-position-report-triangulation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-eight-units-breakout-order.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-smoke-support-call.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-siege-of-cartagena-breakout-success.webp`,
];

const toc = [
  {
    id: "siege-of-cartagena-route",
    label: "Cartagena route",
  },
  {
    id: "mark-cartagena-reference-points",
    label: "Mark the reference points",
  },
  {
    id: "locate-three-concealed-installations",
    label: "Find the three installations",
  },
  {
    id: "prepare-three-installation-shots",
    label: "Prepare the opening shots",
  },
  {
    id: "locate-coastal-batteries",
    label: "Locate the coastal batteries",
  },
  {
    id: "prepare-two-ap-battery-shots",
    label: "Prepare both AP shots",
  },
  {
    id: "when-to-use-emergency-move",
    label: "Use Emergency Move",
  },
  {
    id: "locate-iron-nest-with-position-reports",
    label: "Use two Position Reports",
  },
  {
    id: "destroy-two-coastal-batteries",
    label: "Destroy both batteries",
  },
  {
    id: "destroy-eight-additional-units",
    label: "Destroy eight units",
  },
  {
    id: "prepare-smoke-and-sound-war-horn",
    label: "Prepare smoke and sound horn",
  },
  {
    id: "first-smoke-request",
    label: "First smoke request",
  },
  {
    id: "second-smoke-request",
    label: "Second smoke request",
  },
  {
    id: "cartagena-completion",
    label: "Complete the breakout",
  },
  {
    id: "cartagena-resource-decisions",
    label: "Preserve requisition",
  },
  {
    id: "cartagena-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Guide Hub",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/liberation-walkthrough",
    label: "Liberation Walkthrough",
  },
  {
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Fire and Light Walkthrough",
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
    title: "Iron Nest Siege of Cartagena Walkthrough",
    description:
      "Solve the three chained installations, identify both AP coastal batteries, recover with Position Reports, and support Cartagena’s breakout with two smoke missions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Siege of Cartagena mission briefing describing three concealed installations and two coastal batteries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Siege of Cartagena Walkthrough",
    description:
      "Clear chained targets, survive the coastal-battery CBT, locate Iron Nest after moving, and complete both breakout smoke requests.",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Siege of Cartagena Walkthrough",
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
        "Iron Nest Siege of Cartagena Walkthrough: Chained Installations, Coastal Batteries, Emergency Move, Position Reports, and Breakout Smoke Support",
      description:
        "A player-focused Iron Nest Siege of Cartagena walkthrough explaining how to locate the concealed signal station, assembly area, and field command through chained measurements, control the effect of the 0.5-degree bearing margin, prepare three opening firing solutions, use the listening-post reports as coastal search sectors, confirm both coastal-battery icons, prepare two AP shots, decide when to use Emergency Move, locate the moved Iron Nest with two Position Reports, recalculate both battery solutions from the new origin, destroy eight additional enemy units, prepare two Smoke Shells, sound the War Horn, complete the K6 8:5 and K8 5:1 support requests, preserve requisition, and stand down after the breakout succeeds.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Iron Nest Siege of Cartagena",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Siege of Cartagena walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest chain measurements",
        },
        {
          "@type": "Thing",
          name: "Iron Nest signal station",
        },
        {
          "@type": "Thing",
          name: "Iron Nest assembly area",
        },
        {
          "@type": "Thing",
          name: "Iron Nest field command",
        },
        {
          "@type": "Thing",
          name: "Iron Nest coastal batteries",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Emergency Move",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Position Reports",
        },
        {
          "@type": "Thing",
          name: "Iron Nest War Horn",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Smoke Shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Cartagena breakout",
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
          title="Break the Siege of Cartagena Without Losing the Run"
          description="Solve the chained installations, confirm both coastal batteries, recover correctly after Emergency Move, then clear eight units and support the breakout with two Smoke Shells."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SiegeOfCartagenaWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}