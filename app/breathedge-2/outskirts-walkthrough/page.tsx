import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2OutskirtsWalkthroughContent from "@/data/breathedge-2/outskirts-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/outskirts-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-external-module-battery.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-communications-online.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-ticket-booth-turret.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-public-oxygen-station-repaired.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-antenna-debris.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-area-discovered.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Outskirts Walkthrough: Train, Antennas & Depot",
  description:
    "Power the crashed train, restore communications, repair the oxygen station, clear the cold gate and antenna debris, then reach Depot.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Station Outskirts Walkthrough",
    description:
      "Get the crashed train running, restore the Outskirts communication route, handle the cold gate and follow New Coordinates into Depot.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Battery installed in the External Module during the Breathedge 2 Station Outskirts route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Outskirts Walkthrough",
    description:
      "Follow the Station Outskirts from the crashed train through communications, Cold Protection 100 and the transition into Depot.",
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
          name: "Outskirts Walkthrough",
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
        "Breathedge 2 Outskirts Walkthrough: From the Crashed Train to Depot",
      description:
        "A Breathedge 2 Station Outskirts walkthrough covering the crashed train and External Module, food and water setup, interphone and communications route, ticket-booth turret, Public Oxygen Station, Attendant side objective, 100 Cold Protection gate, Antenna Debris 0/2 and the transition into Depot.",
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
          name: "Station Outskirts",
        },
        {
          "@type": "Thing",
          name: "Crashed Train",
        },
        {
          "@type": "Thing",
          name: "Public Oxygen Station",
        },
        {
          "@type": "Thing",
          name: "Cold Protection",
        },
        {
          "@type": "Thing",
          name: "Antenna Debris",
        },
        {
          "@type": "Thing",
          name: "Depot",
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
          title="How I Get Through the Station Outskirts and Reach Depot"
          description="Build a reliable base around the crashed train, follow the communication route, solve the survival gates and leave the Outskirts when Depot opens."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "power-the-train",
              label: "Power the crashed train",
            },
            {
              id: "stabilize-food-water",
              label: "Fix food and water",
            },
            {
              id: "restore-communications",
              label: "Restore communications",
            },
            {
              id: "ticket-booth",
              label: "Handle the ticket booth",
            },
            {
              id: "repair-public-oxygen",
              label: "Repair the oxygen station",
            },
            {
              id: "attendant-side-route",
              label: "Attendant side route",
            },
            {
              id: "cold-protection-100",
              label: "Reach 100 Cold Protection",
            },
            {
              id: "finish-antenna-debris",
              label: "Finish Antenna Debris 0/2",
            },
            {
              id: "reach-depot",
              label: "Reach Depot",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/walkthrough",
              label: "Chapter 1 Walkthrough",
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
              href: "/breathedge-2/oxygen-guide",
              label: "Oxygen Guide",
            },
            {
              href: "/breathedge-2/cold-protection",
              label: "Cold Protection Guide",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
          ]}
        >
          <Breathedge2OutskirtsWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}