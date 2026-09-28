import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantMapContent from "@/data/control-resonant/map.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/map`;

const metadataTitle =
  "CONTROL Resonant Map: All 7 Zones & How to Reveal Them";

const metadataDescription =
  "See all 7 CONTROL Resonant map zones, how they connect, how Map Kits and three Sensors reveal each area, and why some routes remain blocked.";

const articleDescription =
  "A complete CONTROL Resonant map guide covering all seven Manhattan zones, how the regions connect, how Map Kits and Sensors reveal each map, and why some visible routes remain inaccessible.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-zone-overview-watchtower.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-mapping-pylon-map-data.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "all-zones",
    label: "Full Map Overview",
  },
  {
    id: "zone-connections",
    label: "How the Zones Connect",
  },
  {
    id: "how-to-unlock-map",
    label: "How to Reveal the Map",
  },
  {
    id: "zone-guide",
    label: "All 7 Map Zones",
  },
  {
    id: "blocked-route",
    label: "Why Routes Are Blocked",
  },
  {
    id: "map-not-revealing",
    label: "Why the Map Is Still Blank",
  },
  {
    id: "where-to-go-next",
    label: "Where to Go Next",
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
    href: "/control-resonant/quests",
    label: "Quests & Missions",
  },
  {
    href: "/control-resonant/the-park",
    label: "The Park Guide",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Guide",
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
        "CONTROL Resonant Map: All 7 Zones, Map Kits & Navigation",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-28",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant Map",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant Zones",
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
          title="CONTROL Resonant Map – All 7 Zones, Map Kits & Navigation"
          description="See all seven Manhattan zones, how they connect, how Map Kits reveal each area, and why a visible route may still be blocked."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 28, 2026"
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