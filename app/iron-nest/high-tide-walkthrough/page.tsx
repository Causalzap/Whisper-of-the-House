import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HighTideContent from "@/data/iron-nest/high-tide-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/high-tide-walkthrough`;

const metadataTitle =
  "Iron Nest High Tide Walkthrough: Landing Craft & 07:14";

const metadataDescription =
  "Beat High Tide by tracking multiple landing craft, calculating AP intercepts, managing both guns, falling back to the beach, and holding until 07:14.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-high-tide-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-high-tide-first-landing-craft-report.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-high-tide-first-intercept-solution.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-high-tide-multiple-landing-crafts.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-high-tide-beachhead-fallback.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-high-tide-stand-down.webp`,
];

const toc = [
  {
    id: "how-to-beat-high-tide",
    label: "How to beat High Tide",
  },
  {
    id: "opening-briefing",
    label: "Hold until 07:14",
  },
  {
    id: "first-landing-craft",
    label: "First landing craft",
  },
  {
    id: "high-tide-timing",
    label: "Intercept timing",
  },
  {
    id: "manage-multiple-craft",
    label: "Manage multiple craft",
  },
  {
    id: "when-to-buy-ap",
    label: "When to buy AP",
  },
  {
    id: "when-to-stop-offshore-intercepts",
    label: "When to fall back",
  },
  {
    id: "ap-or-h-shell",
    label: "AP vs beach targets",
  },
  {
    id: "do-you-need-scout-plane",
    label: "Scout Plane?",
  },
  {
    id: "common-high-tide-mistakes",
    label: "Common mistakes",
  },
  {
    id: "stand-down",
    label: "Stand-down condition",
  },
  {
    id: "high-tide-route",
    label: "Repeat-run route",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/fire-on-call-walkthrough",
    label: "Fire on Call Walkthrough",
  },
  {
    href: "/iron-nest/blind-fire-walkthrough",
    label: "Blind Fire Walkthrough",
  },
  {
    href: "/iron-nest/final-harvest-walkthrough",
    label: "Final Harvest Walkthrough",
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
    title:
      "Iron Nest High Tide Walkthrough: Landing Craft Intercepts & 07:14 Defense",
    description:
      "Track several moving landing craft, calculate AP launch times, keep the two guns organized, switch toward beachhead interceptions when late, and hold until relief.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest High Tide mission briefing showing the defensive line and the 07:14 reinforcement deadline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest High Tide Walkthrough",
    description:
      "Calculate landing-craft intercepts, manage both guns, recover when the target queue grows, and hold the beach until the 07:14 stand-down.",
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
          item: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "High Tide Walkthrough",
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
        "Iron Nest High Tide Walkthrough: Landing Craft Intercepts, Dual Guns, and the 07:14 Defense",
      description:
        "A player-focused walkthrough for Mission 11 High Tide in Iron Nest. The guide explains the 07:14 survival objective, how to turn each landing-craft position, course, speed and timestamp into a future interception point, how to subtract shell flight time from the desired impact time, how to assign one live target to each gun, why new reports should wait on the map when both guns are occupied, when to requisition another AP shell, when to move an offshore interception closer to the beach, how to distinguish landing craft from infantry after units reach shore, when extra reconnaissance is actually useful, and why the mission can be completed without destroying every remaining contact.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-08",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "Iron Nest High Tide",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 11",
        },
        {
          "@type": "Thing",
          name: "Iron Nest landing craft",
        },
        {
          "@type": "Thing",
          name: "Iron Nest moving target",
        },
        {
          "@type": "Thing",
          name: "Iron Nest AP shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest 07:14",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="High Tide Walkthrough: Landing Craft Intercepts and the 07:14 Defense"
          description="Track each landing craft as a separate moving target, keep one live solution on each gun, move late intercepts toward the beach, and focus on surviving until relief rather than sinking everything."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HighTideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}