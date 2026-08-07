import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CounterBatteryMissionContent from "@/data/iron-nest/counter-battery-mission.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/iron-nest`;
const pageUrl = `${hubUrl}/counter-battery-mission`;

const metadataTitle =
  "Iron Nest Counter-Battery Walkthrough: CBT Timer & Artillery";

const metadataDescription =
  "Destroy all three opening artillery positions before the first shell lands, extend the CBT, find fresh batteries, and clear every remaining hostile.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-counter-battery-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-counter-battery-three-artillery-positions.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-counter-battery-three-firing-solutions.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-counter-battery-timer-extended.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-counter-battery-prior-recon-unavailable.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-counter-battery-sector-clear.webp`,
];

const toc = [
  {
    id: "counter-battery-route",
    label: "Counter-Battery route",
  },
  {
    id: "read-the-opening-order",
    label: "Read the opening order",
  },
  {
    id: "mark-three-artillery-positions",
    label: "Mark three artillery positions",
  },
  {
    id: "calculate-three-opening-shots",
    label: "Calculate all three shots",
  },
  {
    id: "choose-opening-order",
    label: "Choose the firing order",
  },
  {
    id: "preload-both-guns",
    label: "Preload both guns",
  },
  {
    id: "start-cbt-on-your-terms",
    label: "Start the CBT",
  },
  {
    id: "after-opening-battery",
    label: "After the opening battery",
  },
  {
    id: "fresh-artillery",
    label: "Find fresh artillery",
  },
  {
    id: "secondary-battery-and-final-hostiles",
    label: "Clear the final hostiles",
  },
  {
    id: "counter-battery-completion",
    label: "Complete the mission",
  },
  {
    id: "counter-battery-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Guide Hub",
  },
  {
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Fire and Light Walkthrough",
  },
  {
    href: "/iron-nest/liberation-walkthrough",
    label: "Liberation Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
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
    title: "Iron Nest Counter-Battery Mission Walkthrough",
    description:
      "Plot all three opening guns before the first impact, preload both sides, extend the timer, and locate a fresh battery when old reconnaissance fails.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Counter-Battery order explaining that the timer begins when the first shell lands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Counter-Battery Walkthrough",
    description:
      "Prepare three artillery shots, exploit the first-shell flight window, extend the CBT, and clear the secondary battery.",
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
          name: "Iron Nest Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Counter-Battery Walkthrough",
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
        "Iron Nest Counter-Battery Walkthrough: Opening Artillery, CBT Timer, Fresh Batteries, and Mission Completion",
      description:
        "A player-focused Iron Nest Counter-Battery walkthrough explaining how to locate the three opening artillery positions, calculate every firing solution before the first impact, preload the left and right guns, use shell flight time before the 300-second Counter-Battery Timer begins, extend the CBT through confirmed artillery kills, clear the four hostiles that remain after the opening battery, locate newly deployed artillery when prior reconnaissance is unreliable, preserve requisition for fresh intelligence, destroy the secondary counter-battery assets, and clear the final two hostile units before standing down.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Iron Nest Counter-Battery",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Counter-Battery walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Counter-Battery Timer",
        },
        {
          "@type": "Thing",
          name: "Iron Nest artillery positions",
        },
        {
          "@type": "Thing",
          name: "Iron Nest first shell lands",
        },
        {
          "@type": "Thing",
          name: "Iron Nest left and right guns",
        },
        {
          "@type": "Thing",
          name: "Iron Nest CBT extended",
        },
        {
          "@type": "Thing",
          name: "Iron Nest newly deployed artillery",
        },
        {
          "@type": "Thing",
          name: "Iron Nest prior reconnaissance is unreliable",
        },
        {
          "@type": "Thing",
          name: "Iron Nest secondary counter-battery",
        },
        {
          "@type": "Thing",
          name: "Iron Nest sector clear",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Clear Counter-Battery Before the Timer Takes Over"
          description="Plot all three opening guns, preload both sides, use the free flight window before the first impact, then find the fresh battery that old reconnaissance cannot show."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CounterBatteryMissionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}