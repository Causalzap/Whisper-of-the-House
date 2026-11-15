
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZombiesArentRealSafeZonesContent from "@/data/zombies-arent-real/safe-zones.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/zombies-arent-real`;
const pageUrl = `${hubUrl}/safe-zones`;

const metadataTitle =
  "Zombies Aren't Real Safe Zones: Gates, Hold & Evac Corridor";

const metadataDescription =
  "Build Safe Zones in Zombies Aren't Real, place Gates, use Broadcast, Hold and Evac Corridors, and fix civilians who won't enter.";

const articleTitle =
  "How Do Safe Zones, Hold, and Evac Corridors Work in Zombies Aren't Real?";

const articleDescription =
  "Build and expand Safe Zones, place accessible Gates, attract civilians with Broadcast, gather them with Hold, direct Evac Corridors, and fix evacuation problems.";

const imageFilenames = [
  "zombies-arent-real-safe-zone-upgrade-tip.webp",
  "zombies-arent-real-safe-zone-gate-placement.webp",
  "zombies-arent-real-hold-zone-circles.webp",
  "zombies-arent-real-evac-corridor-direction.webp",
  "zombies-arent-real-safe-zone-size-cost.webp",
  "zombies-arent-real-safe-zone-breach-win.webp",
];

const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/zombies-arent-real/${file}`,
);

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
        url: imageUrls[1],
        alt: "Gate placement on a Safe Zone wall in Zombies Aren't Real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[1]],
  },
};

const toc = [
  {
    id: "safe-zone-setup",
    label: "Build & Expand Safe Zones",
  },
  {
    id: "safe-zone-gates",
    label: "Gate Placement",
  },
  {
    id: "safe-zone-broadcast",
    label: "Broadcast & Civilians",
  },
  {
    id: "hold-zone",
    label: "How Hold Works",
  },
  {
    id: "evac-corridor",
    label: "Evac Corridor",
  },
  {
    id: "hold-evac-combination",
    label: "Hold + Evac Corridor",
  },
  {
    id: "safe-zone-size",
    label: "One Large or Several Zones",
  },
  {
    id: "evac-troubleshooting",
    label: "Civilians Not Entering",
  },
  {
    id: "safe-zone-failures",
    label: "Safe Zone Breaches",
  },
  {
    id: "final-check",
    label: "Before the Outbreak",
  },
];

const relatedLinks = [
  {
    href: "/zombies-arent-real",
    label: "Beginner Guide: First Defense, Units & Progression",
  },
  {
    href: "/zombies-arent-real/achievements",
    label: "Achievements: All 14 Unlock Requirements",
  },
];

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
          name: "Zombies Aren't Real",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Safe Zones",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Zombies Aren't Real",
        },
        {
          "@type": "Thing",
          name: "Safe Zone construction and expansion",
        },
        {
          "@type": "Thing",
          name: "Safe Zone Gates and entrances",
        },
        {
          "@type": "Thing",
          name: "Broadcast and civilian attraction",
        },
        {
          "@type": "Thing",
          name: "Hold Zone movement controls",
        },
        {
          "@type": "Thing",
          name: "Evac Corridor routing",
        },
        {
          "@type": "Thing",
          name: "Safe Zone size and wall costs",
        },
        {
          "@type": "Thing",
          name: "Civilian evacuation troubleshooting",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Zombies Aren't Real"
          gameHref="/zombies-arent-real"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZombiesArentRealSafeZonesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
