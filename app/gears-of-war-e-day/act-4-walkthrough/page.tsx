import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAct4Content from "@/data/gears-of-war-e-day/act-4-walkthrough.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/act-4-walkthrough`;

const metadataTitle =
  "Gears of War E-Day Act 4 Walkthrough: Light Mass Converter";

const metadataDescription =
  "Complete Gears of War E-Day Act 4 with the 85% breaker, weather station, refinery route, Zone 5 key card, and light mass converter.";

const articleDescription =
  "Complete Gears of War: E-Day Act 4 from Prospect Bay and the power station through the weather station, evacuation broadcast, refinery, Zone 5, and light mass converter.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-power-station-85-percent-breaker.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-signals-weather-station-trail.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-critical-failure-coolant-hatch.webp`,
];

const toc = [
  {
    id: "chapter-1-hope-and-ruin",
    label: "Hope and Ruin",
  },
  {
    id: "cathedral-route",
    label: "Cathedral Route",
  },
  {
    id: "chapter-2-technical-difficulties",
    label: "Technical Difficulties",
  },
  {
    id: "board-correct-train",
    label: "Correct Train",
  },
  {
    id: "chapter-3-tough-as-nails",
    label: "Tough as Nails",
  },
  {
    id: "power-station-breaker",
    label: "85% Breaker",
  },
  {
    id: "chapter-4-signals",
    label: "Signals",
  },
  {
    id: "reach-weather-station",
    label: "Weather Station",
  },
  {
    id: "chapter-5-paths-diverge",
    label: "Paths Diverge",
  },
  {
    id: "broadcast-evacuation",
    label: "Evacuation Broadcast",
  },
  {
    id: "chapter-6-critical-failure",
    label: "Critical Failure",
  },
  {
    id: "backup-coolant-feed",
    label: "Coolant Feed",
  },
  {
    id: "zone-5-key-card",
    label: "Zone 5 Key Card",
  },
  {
    id: "stop-enriched-emulsion-feed",
    label: "Emulsion Feed",
  },
  {
    id: "dump-the-tanks",
    label: "Dump the Tanks",
  },
  {
    id: "before-act-5",
    label: "After the Refinery",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-3-walkthrough",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-5-walkthrough",
    label: "Act 5 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/achievements",
    label: "Achievements",
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
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Gears of War E-Day Act 4 power station generator reaching 85 percent before the breaker is closed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};


export default function GearsEDayAct4WalkthroughPage() {
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
            name: "Gears of War: E-Day",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Act 4 Walkthrough",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Act 4 Walkthrough — Light Mass Converter",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        datePublished: "2026-10-01",
        dateModified: "2026-10-02",
        inLanguage: "en-US",
        image: imageUrls,
        about: {
          "@type": "VideoGame",
          name: "Gears of War: E-Day",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

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
          title="Gears of War: E-Day Act 4 Walkthrough — Light Mass Converter"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayAct4Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}