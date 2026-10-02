import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAct3Content from "@/data/gears-of-war-e-day/act-3-walkthrough.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/act-3-walkthrough`;

const metadataTitle =
  "Gears of War E-Day Act 3 Walkthrough: Corpser & Fort Vigil";

const metadataDescription =
  "Complete Gears of War E-Day Act 3 with Fairlight Outpost, Locust tunnels, the Corpser boss, convoy bridge, rooftop evacuation, and Fort Vigil.";

const articleDescription =
  "Complete Gears of War: E-Day Act 3 from Fairlight Outpost through the Locust tunnels, Corpser fight, stadium evacuation, convoy bridge, rooftop escort, and Fort Vigil defense.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-enemy-lines-pillar-boss.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-fairlight-helipad-breaker.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-convoy-bridge-control-room.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-desperate-times-sniper-tower.webp`,
];

const toc = [
  {
    id: "chapter-1-stranded",
    label: "Stranded",
  },
  {
    id: "helipad-breaker",
    label: "Helipad Breaker",
  },
  {
    id: "chapter-2-enemy-lines",
    label: "Enemy Lines",
  },
  {
    id: "corpser-fight",
    label: "Corpser Boss",
  },
  {
    id: "chapter-3-last-foothold",
    label: "Last Foothold",
  },
  {
    id: "chapter-4-the-convoy",
    label: "The Convoy",
  },
  {
    id: "chapter-5-desperate-times",
    label: "Desperate Times",
  },
  {
    id: "sniper-tower",
    label: "Sniper Tower",
  },
  {
    id: "chapter-6-desperate-measures",
    label: "Desperate Measures",
  },
  {
    id: "before-act-4",
    label: "After Fort Vigil",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-4-walkthrough",
    label: "Act 4 Walkthrough",
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
        alt: "Gears of War E-Day Act 3 Corpser boss fight using the arena pillars",
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


export default function GearsEDayAct3WalkthroughPage() {
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
            name: "Act 3 Walkthrough",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Act 3 Walkthrough — Corpser & Fort Vigil",
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
          title="Gears of War: E-Day Act 3 Walkthrough — Corpser & Fort Vigil"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayAct3Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}