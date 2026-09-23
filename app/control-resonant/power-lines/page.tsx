import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantPowerLinesContent from "@/data/control-resonant/power-lines.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/power-lines`;

const metadataTitle =
  "CONTROL Resonant Power Lines Guide: All Station Puzzles";

const metadataDescription =
  "Complete Factory, East Park, Perimeter and Vanished Station, find every Calibration Unit, rescue Dr. Florez, and solve Platform A and B.";

const articleDescription =
  "Reroute all four Power Lines stations, find the Calibration Units, reach the Vanished Station survivors, and solve the Platform A and Platform B power puzzles.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-power-lines-vanished-station.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-power-lines-platform-a.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-power-lines-platform-b.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-power-lines-dr-florez.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-power-lines-works",
    label: "How Power Lines works",
  },
  {
    id: "factory-station",
    label: "Factory Station",
  },
  {
    id: "east-park-station",
    label: "East Park Station",
  },
  {
    id: "perimeter-station",
    label: "Perimeter Station",
  },
  {
    id: "vanished-station",
    label: "Vanished Station",
  },
  {
    id: "rescue-survivors",
    label: "Rescue the survivors",
  },
  {
    id: "vanished-calibration-units",
    label: "Four Calibration Units",
  },
  {
    id: "platform-a",
    label: "Platform A",
  },
  {
    id: "platform-b",
    label: "Platform B Mold puzzle",
  },
  {
    id: "finish-power-lines",
    label: "Finish Power Lines",
  },
  {
    id: "power-lines-stuck",
    label: "Station failure states",
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
    href: "/control-resonant/into-the-sinkhole",
    label: "Into the Sinkhole",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
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
          name: "Power Lines",
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
        "CONTROL Resonant Power Lines Guide: All Station Puzzles",
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
          name: "Power Lines",
        },
        {
          "@type": "Thing",
          name: "Factory Station",
        },
        {
          "@type": "Thing",
          name: "East Park Station",
        },
        {
          "@type": "Thing",
          name: "Perimeter Station",
        },
        {
          "@type": "Thing",
          name: "Vanished Station",
        },
        {
          "@type": "Thing",
          name: "Calibration Units",
        },
        {
          "@type": "Thing",
          name: "Tuning Device",
        },
        {
          "@type": "Thing",
          name: "Platform A",
        },
        {
          "@type": "Thing",
          name: "Platform B",
        },
        {
          "@type": "Thing",
          name: "Dr. Florez",
        },
        {
          "@type": "Thing",
          name: "Cancellation Field Device",
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
          title="CONTROL Resonant Power Lines Guide: All Station Puzzles"
          description="Complete Factory, East Park and Perimeter Station, rescue the survivors at Vanished Station, find all four Calibration Units, and solve Platform A and Platform B."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantPowerLinesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}