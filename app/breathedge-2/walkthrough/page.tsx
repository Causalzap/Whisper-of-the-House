import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2WalkthroughContent from "@/data/breathedge-2/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-external-module-battery.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-communications-online.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-area-discovered.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-jammer-triangulation-third-point.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-jammer-facility-door-open.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-shuttle-alkaline-solution-objective.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-signal-jammer-retrieved.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Walkthrough: Complete Chapter 1 Guide",
  description:
    "Finish Breathedge 2 Chapter 1 from the crashed train and Outskirts through Depot, jammer triangulation, the shuttle and current story ending.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Chapter 1 Walkthrough",
    description:
      "Follow the main story from the crashed train through the Outskirts and Depot, then locate the jammer and reach the current Chapter 1 ending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "External Module battery repair during the opening Breathedge 2 Chapter 1 route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Chapter 1 Walkthrough",
    description:
      "Follow the complete Chapter 1 story route from the Outskirts and Depot to the signal jammer and Early Access cutoff.",
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
          name: "Breathedge 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chapter 1 Walkthrough",
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
        "Breathedge 2 Walkthrough: Complete Chapter 1 Route from the Outskirts to the Jammer",
      description:
        "A complete Breathedge 2 Chapter 1 walkthrough covering the crashed train, Station Outskirts communications route, Cold Protection gate, Depot transition, antenna route, three-point jammer triangulation, military facility, Sprayron and airlock sequence, shuttle alkaline solution objective, cooling system and signal jammer retrieval.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      about: [
        {
          "@type": "VideoGame",
          name: "Breathedge 2",
        },
        {
          "@type": "Thing",
          name: "Breathedge 2 Chapter 1",
        },
        {
          "@type": "Thing",
          name: "Station Outskirts",
        },
        {
          "@type": "Thing",
          name: "Depot",
        },
        {
          "@type": "Thing",
          name: "Signal Jammer",
        },
        {
          "@type": "Thing",
          name: "Jammer Triangulation",
        },
        {
          "@type": "Thing",
          name: "Alkaline Solution",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Finish Breathedge 2 Chapter 1"
          description="Follow the main route from the crashed train through the Outskirts and Depot, then triangulate the jammer, enter the facility and finish the current Chapter 1 story."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "chapter-1-route",
              label: "Chapter 1 route",
            },
            {
              id: "restore-train",
              label: "Restore the crashed train",
            },
            {
              id: "restore-communications",
              label: "Restore communications",
            },
            {
              id: "optional-attendant",
              label: "Attendant side objective",
            },
            {
              id: "prepare-for-cold",
              label: "Prepare for the cold",
            },
            {
              id: "reach-depot",
              label: "Reach Depot",
            },
            {
              id: "find-main-antenna",
              label: "Find the main antenna",
            },
            {
              id: "triangulate-jammer",
              label: "Triangulate the jammer",
            },
            {
              id: "enter-jammer-facility",
              label: "Enter the jammer facility",
            },
            {
              id: "open-airlock",
              label: "Open the airlock",
            },
            {
              id: "shuttle-alkaline",
              label: "Get alkaline solution",
            },
            {
              id: "cooling-system",
              label: "Start the cooling system",
            },
            {
              id: "retrieve-jammer",
              label: "Retrieve the jammer",
            },
            {
              id: "chapter-1-ending",
              label: "Reach the Chapter 1 ending",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/outskirts-walkthrough",
              label: "Outskirts Walkthrough",
            },
            {
              href: "/breathedge-2/attendant-parts",
              label: "Attendant Parts Locations",
            },
            {
              href: "/breathedge-2/antenna-locations",
              label: "Three Antennas & Debris Locations",
            },
            {
              href: "/breathedge-2/cold-protection",
              label: "Cold Protection Guide",
            },
            {
              href: "/breathedge-2/oxygen-guide",
              label: "Oxygen Guide",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
            {
              href: "/breathedge-2/ending",
              label: "Early Access Ending Explained",
            },
          ]}
        >
          <Breathedge2WalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}