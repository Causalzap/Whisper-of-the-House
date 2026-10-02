import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAct5Content from "@/data/gears-of-war-e-day/act-5-walkthrough.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/act-5-walkthrough`;

const metadataTitle =
  "Gears of War E-Day Act 5 Walkthrough: The Fall of Kalona";

const metadataDescription =
  "Complete Gears of War: E-Day Act 5 with the return train, Ghost Town, Resolute flood valves, The Fall of Kalona, and east bridge controls.";

const articleDescription =
  "Complete Gears of War: E-Day Act 5 from the return train through Ghost Town, Raven's Nest, Resolute's flood controls, the jammed third valve, and The Fall of Kalona.";

const toc = [
  {
    id: "chapter-1-one-problem-at-a-time",
    label: "One Problem at a Time",
  },
  {
    id: "chapter-2-ghost-town",
    label: "Ghost Town",
  },
  {
    id: "chapter-3-storm-clouds",
    label: "Storm Clouds",
  },
  {
    id: "chapter-4-resolute",
    label: "Resolute",
  },
  {
    id: "third-valve-jammed",
    label: "Third Flood Valve",
  },
  {
    id: "chapter-5-the-fall-of-kalona",
    label: "The Fall of Kalona",
  },
  {
    id: "east-control-room",
    label: "East Control Room",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-4-walkthrough",
    label: "Act 4 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/ending-final-boss",
    label: "Final Operation & Ending",
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
        url: `${siteUrl}/images/gears-of-war-e-day/gears-e-day-train-facing-colona.webp`,
        width: 1600,
        height: 900,
        alt: "Gears of War E-Day Act 5 train route back toward Kalona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      `${siteUrl}/images/gears-of-war-e-day/gears-e-day-train-facing-colona.webp`,
    ],
  },
};


export default function GearsEDayAct5WalkthroughPage() {
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
            name: "Act 5 Walkthrough",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Act 5 Walkthrough — The Fall of Kalona",
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
        about: {
          "@type": "VideoGame",
          name: "Gears of War: E-Day",
        },
        image: [
          `${siteUrl}/images/gears-of-war-e-day/gears-e-day-train-facing-colona.webp`,
          `${siteUrl}/images/gears-of-war-e-day/gears-e-day-resolute-three-valves.webp`,
          `${siteUrl}/images/gears-of-war-e-day/gears-e-day-resolute-third-valve-access-hatch.webp`,
          `${siteUrl}/images/gears-of-war-e-day/gears-e-day-paths-diverge-east-control-room.webp`,
        ],
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
          title="Gears of War: E-Day Act 5 Walkthrough — The Fall of Kalona"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayAct5Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}