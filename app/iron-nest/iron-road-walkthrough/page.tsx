import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronRoadWalkthroughContent from "@/data/iron-nest/iron-road-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/iron-nest`;
const pageUrl = `${hubUrl}/iron-road-walkthrough`;

const metadataTitle =
  "Iron Nest Iron Road Walkthrough: Train Timing & War Horn";

const metadataDescription =
  "Intercept the Iron Road train using waypoint timing, destroy both AP emplacements, avoid an early War Horn, and decide whether optional targets are worth it.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-train-schedule.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-train-waypoints.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-train-firing-solution.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-armored-emplacements-order.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-first-ap-emplacement.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-iron-road-primary-objective-complete.webp`,
];

const toc = [
  {
    id: "iron-road-route",
    label: "Iron Road route",
  },
  {
    id: "read-both-iron-road-orders",
    label: "Read both orders",
  },
  {
    id: "mark-station-and-waypoints",
    label: "Mark the train waypoints",
  },
  {
    id: "choose-train-waypoint",
    label: "Choose a waypoint",
  },
  {
    id: "calculate-train-shot",
    label: "Calculate the train shot",
  },
  {
    id: "subtract-shell-flight-time",
    label: "Subtract shell flight time",
  },
  {
    id: "late-train-shot",
    label: "Recover from a late shot",
  },
  {
    id: "armored-emplacement-order",
    label: "Read the AP order",
  },
  {
    id: "locate-two-emplacements",
    label: "Locate both emplacements",
  },
  {
    id: "first-ap-emplacement",
    label: "Destroy the first emplacement",
  },
  {
    id: "second-ap-emplacement",
    label: "Destroy the second emplacement",
  },
  {
    id: "optional-targets-before-war-horn",
    label: "Choose optional targets",
  },
  {
    id: "sound-war-horn",
    label: "Sound the War Horn",
  },
  {
    id: "iron-road-medal-routes",
    label: "Choose a medal route",
  },
  {
    id: "iron-road-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Guide Hub",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/liberation-walkthrough",
    label: "Liberation Walkthrough",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
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
    title: "Iron Nest Iron Road Train and War Horn Walkthrough",
    description:
      "Plot the train's railway waypoints, subtract shell flight time, destroy both AP emplacements, and signal the allied assault without causing mass casualties.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Iron Road mission briefing ordering the interception of an inbound troop train",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Iron Road Walkthrough",
    description:
      "Time the train interception, clear both AP emplacements, and use the War Horn only after the allied route is safe.",
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
          name: "Iron Road Walkthrough",
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
        "Iron Nest Iron Road Walkthrough: Train Waypoint Timing, Shell Flight Time, AP Emplacements, War Horn, and Optional Targets",
      description:
        "A player-focused Iron Nest Iron Road walkthrough explaining how to read the train movement schedule, mark Iron Nest at B4 5:0 and Main Station at J6 0:4, draw the railway at a 90-degree bearing, build the 6 km, 4 km, and 2 km interception waypoints, subtract shell flight time from the train's scheduled arrival, recover when a launch window has already passed, destroy the inbound reinforcement train, locate the two armored emplacements blocking the allied route, prepare the verified AP firing solutions, avoid sounding the War Horn early, choose between a fast completion route and optional town targets, evaluate the 75-requisition train station, protect allied infantry, and stand down when the approach is clear.",
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
          name: "Iron Nest Iron Road",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Iron Road walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest train schedule",
        },
        {
          "@type": "Thing",
          name: "Iron Nest train waypoint",
        },
        {
          "@type": "Thing",
          name: "Iron Nest shell flight time",
        },
        {
          "@type": "Thing",
          name: "Iron Nest moving train",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Main Station",
        },
        {
          "@type": "Thing",
          name: "Iron Nest armored emplacements",
        },
        {
          "@type": "Thing",
          name: "Iron Nest AP shells",
        },
        {
          "@type": "Thing",
          name: "Iron Nest War Horn",
        },
        {
          "@type": "Thing",
          name: "Iron Nest mass casualties",
        },
        {
          "@type": "Thing",
          name: "Iron Nest optional targets",
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
          title="Intercept the Iron Road Train and Signal a Safe Assault"
          description="Plot the train's future waypoints, subtract shell flight time, destroy both AP emplacements, then decide whether to clear optional targets before sounding the War Horn."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronRoadWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}