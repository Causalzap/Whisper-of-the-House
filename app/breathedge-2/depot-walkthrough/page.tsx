import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2DepotWalkthroughContent from "@/data/breathedge-2/depot-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/depot-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-area-discovered.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-temperature-61.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-warmer-opens-passage.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-service-warmer-repair.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-light-bulb-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-foreman-test.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-final-heater.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Depot Walkthrough: Service Warmers & Foreman",
  description:
    "Raise Depot temperature to 100%, repair Service Warmers, find Light Bulbs, solve the Foreman test and finish the heating route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Depot Walkthrough and Service Warmer Guide",
    description:
      "Follow the Depot heating route from 17% to 100%, repair Service Warmers, handle the Foreman and know when the last heater is finished.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Depot area discovered during Breathedge 2 Chapter 1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Depot Walkthrough",
    description:
      "Repair Service Warmers, reach 100% ambient temperature and solve the Foreman section in the Depot.",
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
          name: "Depot Walkthrough",
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
        "Breathedge 2 Depot Walkthrough: Service Warmers, Ambient Temperature and Foreman",
      description:
        "A Breathedge 2 Depot walkthrough covering the Raise Ambient Temperature to 100% objective, Service Warmer repair route, Light Bulb sources, warmer materials, Foreman calibration, Small Engine research and the final heater.",
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
          name: "Depot",
        },
        {
          "@type": "Thing",
          name: "Service Warmers",
        },
        {
          "@type": "Thing",
          name: "Raise Ambient Temperature to 100%",
        },
        {
          "@type": "Thing",
          name: "Foreman",
        },
        {
          "@type": "Thing",
          name: "Small Engines",
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
          title="How I Clear the Depot and Finish Every Service Warmer"
          description="Work through the Depot heating chain, reach 100% ambient temperature, find the repair materials that cause backtracking and solve the Foreman."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "reach-depot",
              label: "Reach the Depot",
            },
            {
              id: "temperature-progress",
              label: "Raise temperature to 100%",
            },
            {
              id: "service-warmer-materials",
              label: "Service Warmer materials",
            },
            {
              id: "choose-next-warmer",
              label: "Choose the next warmer",
            },
            {
              id: "cold-route",
              label: "Use heaters as safe points",
            },
            {
              id: "foreman",
              label: "Foreman and calibration",
            },
            {
              id: "small-engines",
              label: "Small Engine research",
            },
            {
              id: "finish-depot",
              label: "Finish the Depot",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
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
              href: "/breathedge-2/resources-crafting",
              label: "Resources & Crafting Guide",
            },
            {
              href: "/breathedge-2/walkthrough",
              label: "Chapter 1 Walkthrough",
            },
          ]}
        >
          <Breathedge2DepotWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}