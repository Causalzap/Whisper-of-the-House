import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RockOfGibraltarContent from "@/data/iron-nest/rock-of-gibraltar-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/rock-of-gibraltar-walkthrough`;

const metadataTitle =
  "Iron Nest Rock of Gibraltar Walkthrough: HMS Rockingham";

const metadataDescription =
  "Beat Rock of Gibraltar by locating HMS Rockingham without recon, waiting until 11:08, using AP, then optionally intercepting the moving vessel.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-reference-chain.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-forward-observer.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rockingham-ap-solution.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rockingham-destroyed-optional-vessel.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-vessel-position-report.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-moving-vessel-intercept.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-optional-vessel-destroyed.webp`,
];

const toc = [
  {
    id: "rock-of-gibraltar-route",
    label: "Rock of Gibraltar route",
  },
  {
    id: "read-rockingham-order",
    label: "11:08 firing restriction",
  },
  {
    id: "locate-the-mole",
    label: "Locate The Mole",
  },
  {
    id: "locate-dockmasters-house",
    label: "Dockmaster's House",
  },
  {
    id: "locate-hms-rockingham",
    label: "Locate HMS Rockingham",
  },
  {
    id: "forward-observer",
    label: "Forward Observer",
  },
  {
    id: "rockingham-firing-solution",
    label: "Rockingham AP solution",
  },
  {
    id: "destroy-rockingham",
    label: "Destroy Rockingham",
  },
  {
    id: "optional-vessel",
    label: "Optional vessel",
  },
  {
    id: "moving-vessel-position-report",
    label: "Vessel position report",
  },
  {
    id: "choose-future-intercept",
    label: "Choose the intercept",
  },
  {
    id: "calculate-moving-ship-shot",
    label: "Calculate launch time",
  },
  {
    id: "rock-of-gibraltar-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate in Iron Nest",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
  },
  {
    href: "/iron-nest/dead-reckoning-walkthrough",
    label: "Dead Reckoning Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
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
      "Iron Nest Rock of Gibraltar Walkthrough: HMS Rockingham & Optional Vessel",
    description:
      "Solve The Mole and Dockmaster's House reference chain, destroy HMS Rockingham with AP after 11:08, then calculate the optional moving-vessel interception.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Rock of Gibraltar briefing requiring AP against HMS Rockingham after 11:08",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Rock of Gibraltar Walkthrough",
    description:
      "Locate HMS Rockingham without aerial recon, respect the 11:08 firing restriction, then intercept the optional moving vessel.",
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
          name: "Rock of Gibraltar Walkthrough",
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
        "Iron Nest Rock of Gibraltar Walkthrough: HMS Rockingham, 11:08 Firing Restriction, and Optional Vessel",
      description:
        "A player-focused walkthrough for Mission 8 Rock of Gibraltar in Iron Nest. The guide explains why HMS Rockingham cannot be attacked before 11:08, why AP is required, how to locate The Mole from two spotters, use The Mole to solve Dockmaster's House, continue that reference chain to HMS Rockingham while aerial reconnaissance is unavailable, when a Forward Observer is worth requisitioning, how to build the final AP firing solution, when the primary objective is already complete, and how to intercept the optional moving vessel from its position report, course, speed, future movement, artillery range, and shell flight time.",
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
          name: "Iron Nest Rock of Gibraltar",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 8",
        },
        {
          "@type": "Thing",
          name: "HMS Rockingham",
        },
        {
          "@type": "Thing",
          name: "Iron Nest The Mole",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Dockmaster's House",
        },
        {
          "@type": "Thing",
          name: "Iron Nest moving vessel",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Forward Observer",
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
          title="Rock of Gibraltar Walkthrough: HMS Rockingham and the Optional Vessel"
          description="Build the reference chain from The Mole to HMS Rockingham, wait for the 11:08 firing window, use AP for the cruiser, then decide whether the optional moving-vessel interception is worth the extra calculation."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RockOfGibraltarContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}