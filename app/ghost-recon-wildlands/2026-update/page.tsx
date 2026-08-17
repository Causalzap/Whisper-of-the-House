import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GhostReconWildlands2026UpdateContent from "@/data/ghost-recon-wildlands/2026-update.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ghost-recon-wildlands`;
const pageUrl = `${hubUrl}/2026-update`;

const metadataTitle =
  "Ghost Recon Wildlands 2026 Update: What Changed";

const metadataDescription =
  "See what changed in Ghost Recon Wildlands in 2026: Last Rites, Predator, new settings, 4K/60 FPS, free rewards, and Definitive Edition differences.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-hub.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-predator-the-jungle-moved-caimanes.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-free-equipment-challenge-rewards.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-headgear-disappearing-bug.webp`,
];

const toc = [
  {
    id: "what-changed",
    label: "What changed in 2026",
  },
  {
    id: "last-rites",
    label: "Last Rites",
  },
  {
    id: "last-rites-campaign",
    label: "Last Rites & campaign",
  },
  {
    id: "predator-return",
    label: "Predator returns",
  },
  {
    id: "gameplay-customization",
    label: "New gameplay settings",
  },
  {
    id: "performance-controller",
    label: "4K/60 FPS & PC controller",
  },
  {
    id: "free-rewards",
    label: "Free rewards",
  },
  {
    id: "free-update-vs-definitive",
    label: "Free update vs Definitive",
  },
  {
    id: "headgear-bug",
    label: "Headgear bug",
  },
  {
    id: "return-order",
    label: "My returning-player order",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands",
    label: "Ghost Recon Wildlands Guide Hub",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-walkthrough",
    label: "Last Rites Walkthrough",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-intel-locations",
    label: "Last Rites Intel Locations",
  },
  {
    href: "/ghost-recon-wildlands/ghost-parameters",
    label: "Ghost Parameters & Settings Guide",
  },
  {
    href: "/ghost-recon-wildlands/predator-mission",
    label: "Predator Mission Guide",
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
    title: "Ghost Recon Wildlands 2026 Update: What Changed",
    description:
      "A returning-player look at the 2026 Wildlands update, including Last Rites, Predator, new gameplay customization, performance upgrades, free rewards, and Definitive Edition.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ghost Recon Wildlands 2026 free update with new content and gameplay changes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands 2026 Update: What Changed",
    description:
      "Last Rites, Predator, new settings, 4K/60 FPS, free rewards, and the difference between the free update and Definitive Edition.",
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
          name: "Ghost Recon Wildlands Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ghost Recon Wildlands 2026 Update",
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
        "Ghost Recon Wildlands 2026 Update: Last Rites, Predator, New Settings and Definitive Edition",
      description:
        "A practical returning-player guide to the Ghost Recon Wildlands 2026 update, covering the six-mission Last Rites story, the return of the Predator crossover, Ghost Parameters and expanded gameplay customization, 4K and 60 FPS support on supported newer consoles, native PC controller support, free claimable rewards, the removal of the old crate-focused reward layer, and the difference between the free update and the separate Definitive Edition bundle. It also explains the order I use to test the new content before deciding whether to begin another full Bolivia campaign.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      articleSection: "Ghost Recon Wildlands Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tom Clancy's Ghost Recon Wildlands",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands 2026 update",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Last Rites",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Predator mission",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Ghost Parameters",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Difficulty settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands HUD settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands World and Session settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands 4K 60 FPS",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Definitive Edition",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands free rewards",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="What Actually Changed in Ghost Recon Wildlands in 2026"
          description="I start with the free update, play Last Rites first, then return to the regular campaign to test Predator, the new gameplay settings, performance changes, and free rewards before deciding whether I want another full Bolivia run."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GhostReconWildlands2026UpdateContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}