import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantMapContent from "@/data/control-resonant/map.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/map`;

const metadataTitle =
  "CONTROL Resonant Map Guide: All 7 Zones & Map Kits";

const metadataDescription =
  "Reveal every CONTROL Resonant zone map by activating three Sensors and the Map Kit Pylon, and see all seven zones, their order, and blocked routes.";

const articleDescription =
  "Reveal CONTROL Resonant's seven Manhattan zones by activating each Map Kit's three Sensors and returning to its Pylon, then use the map to navigate Central, West Incursion, the Underpass, Unknown, and the other regions.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-mapping-pylon-map-data.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-zone-overview-watchtower.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-unlock-map",
    label: "How to reveal the map",
  },
  {
    id: "map-kit-sensors",
    label: "Map Kit Sensors",
  },
  {
    id: "all-zones",
    label: "All 7 map zones",
  },
  {
    id: "early-map",
    label: "Early map orientation",
  },
  {
    id: "downtown",
    label: "Downtown",
  },
  {
    id: "central",
    label: "Central",
  },
  {
    id: "evacuation-zone",
    label: "Evacuation Zone",
  },
  {
    id: "west-incursion",
    label: "West Incursion Zone",
  },
  {
    id: "the-park",
    label: "The Park",
  },
  {
    id: "underpass",
    label: "Underpass",
  },
  {
    id: "unknown",
    label: "Unknown",
  },
  {
    id: "zone-order",
    label: "Best zone order",
  },
  {
    id: "blocked-route",
    label: "Why a revealed route is blocked",
  },
  {
    id: "map-not-revealing",
    label: "Why the map is still blank",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/central-checkpoint",
    label: "Central Checkpoint",
  },
  {
    href: "/control-resonant/west-incursion-zone",
    label: "West Incursion Zone",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Walkthrough",
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
    images: imageUrls,
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Map",
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
        "CONTROL Resonant Map Guide: All 7 Zones & Map Kits",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-23",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant map",
        },
        {
          "@type": "Thing",
          name: "Map Kit",
        },
        {
          "@type": "Thing",
          name: "Map Kit Pylon",
        },
        {
          "@type": "Thing",
          name: "Map Sensors",
        },
        {
          "@type": "Thing",
          name: "Downtown",
        },
        {
          "@type": "Thing",
          name: "Central",
        },
        {
          "@type": "Thing",
          name: "Evacuation Zone",
        },
        {
          "@type": "Thing",
          name: "West Incursion Zone",
        },
        {
          "@type": "Thing",
          name: "The Park",
        },
        {
          "@type": "Thing",
          name: "Underpass",
        },
        {
          "@type": "Thing",
          name: "Unknown",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="CONTROL Resonant Map Guide: All 7 Zones & How to Reveal Them"
          description="Activate each Map Kit's three Sensors, return to the Pylon to reveal the map, and see how Downtown, Central, West Incursion, The Park, Underpass and Unknown connect."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantMapContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}