import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2AntennaLocationsContent from "@/data/breathedge-2/antenna-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/antenna-locations`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-three-antennas-journal.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-first-antenna-repaired.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-homemade-beacon-battery.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-government-probe.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-outskirts-communications-online.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-antenna-debris-landmark.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-antenna-debris.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-antenna-debris-second-part.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-antenna-new-coordinates.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Three Antennas & Antenna Debris Locations",
  description:
    "Repair Three Antennas, restore the beacon and government probe, then find both 0/2 Antenna Debris parts and unlock New Coordinates.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Three Antennas and 0/2 Debris Guide",
    description:
      "Finish the damaged antenna, homemade beacon and government probe, then find both small Antenna parts around the Outskirts structure.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Three Antennas journal showing multiple communication objectives in Breathedge 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Three Antennas & Debris Locations",
    description:
      "Repair the communication hardware, find both 0/2 Antenna Debris parts and reach New Coordinates.",
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
          name: "Three Antennas & Antenna Debris",
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
        "Breathedge 2 Three Antennas Guide: Antenna Debris Locations and New Coordinates",
      description:
        "A Breathedge 2 guide to the Three Antennas communication chain, including the damaged antenna, homemade beacon, government probe, onboard clock, 0/2 Antenna Debris parts and New Coordinates.",
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
          name: "Three Antennas",
        },
        {
          "@type": "Thing",
          name: "Antenna Debris",
        },
        {
          "@type": "Thing",
          name: "Government Probe",
        },
        {
          "@type": "Thing",
          name: "New Coordinates Detected",
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
          title="How I Finish Three Antennas and Find Both Debris Parts"
          description="Repair the damaged antenna, homemade beacon and government probe, then narrow the 0/2 debris search to the correct Outskirts structure."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "three-antennas",
              label: "How Three Antennas works",
            },
            {
              id: "repair-first-antenna",
              label: "Repair the first antenna",
            },
            {
              id: "homemade-beacon",
              label: "Restore the homemade beacon",
            },
            {
              id: "government-probe",
              label: "Fix the government probe",
            },
            {
              id: "collect-antenna-debris",
              label: "Find Antenna Debris 0/2",
            },
            {
              id: "cant-find-debris",
              label: "Still stuck at 0/2?",
            },
            {
              id: "new-coordinates",
              label: "New Coordinates Detected",
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
              href: "/breathedge-2/resources-crafting",
              label: "Resources & Crafting Guide",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
          ]}
        >
          <Breathedge2AntennaLocationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}