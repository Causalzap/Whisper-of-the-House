import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethSanctumContent from "@/data/dimraeth/sanctum.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/sanctum`;

const metadataTitle =
  "Dimraeth Sanctum Guide: Facilities, Followers & Home Uplift";

const metadataDescription =
  "Build a useful Dimraeth Sanctum with storage, Water Well, Facility Center, followers, passive resources, and smart Home Uplift priorities.";

const articleDescription =
  "A practical Dimraeth Sanctum guide covering what to build first, storage and inventory pressure, the Water Well, NPC recruitment, the Facility Center, follower-based production, passive resources, Home Uplift priorities, pre-boss resets, and multiplayer world investment.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-facility-center.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-water-well.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-first-npc-recruit.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "what-to-build-first",
    label: "What to build first",
  },
  {
    id: "storage",
    label: "Storage & encumbrance",
  },
  {
    id: "water-well",
    label: "Water Well",
  },
  {
    id: "recruit-npcs",
    label: "Recruit NPCs",
  },
  {
    id: "facility-center",
    label: "Facility Center",
  },
  {
    id: "followers",
    label: "Assign followers",
  },
  {
    id: "passive-resources",
    label: "Passive resources",
  },
  {
    id: "home-uplift",
    label: "Home Uplift priority",
  },
  {
    id: "when-to-return",
    label: "When to return",
  },
  {
    id: "pre-boss-reset",
    label: "Before a major boss",
  },
  {
    id: "multiplayer-sanctum",
    label: "Sanctum in co-op",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets & Companions",
  },
  {
    href: "/dimraeth/co-op-progression",
    label: "Dimraeth Co-op Progression",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Facility Center unlocked while developing the Sanctum in Dimraeth",
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
          name: "Dimraeth",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sanctum Guide",
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
        "Dimraeth Sanctum Guide: What to Build First and When to Return",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Sanctum",
        },
        {
          "@type": "Thing",
          name: "Facility Center",
        },
        {
          "@type": "Thing",
          name: "Water Well",
        },
        {
          "@type": "Thing",
          name: "Followers",
        },
        {
          "@type": "Thing",
          name: "Home Uplift",
        },
        {
          "@type": "Thing",
          name: "NPC Recruitment",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
          title="Dimraeth Sanctum Guide: What to Build First & When to Return"
          description="Build a Sanctum that actually saves time: prioritize storage, useful facilities and followers, know when Home Uplift can wait, and return only when the trip solves something."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethSanctumContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}