
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SanctumWalkthroughContent from "@/data/dont-starve-together/sanctum-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dont-starve-together`;
const pageUrl = `${hubUrl}/sanctum-walkthrough`;

const metadataTitle =
  "DST Sanctum Walkthrough: Keystone & Puzzle Solutions";

const metadataDescription =
  "Find the Sanctum entrance, collect 4 Security Pulses, solve the Sequitor jumps, defeat the Key Room towers, and obtain the Keystone.";

const articleDescription =
  "Enter the Sanctum through the Giant Whirlpool, navigate Waymarks with the Compass, solve the jumping puzzle, activate four Ancient Towers, and unlock the Reliquary with four Lustrous Weevils.";

const heroImage =
  "/images/dont-starve-together/sanctum-waymark-compass.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/dont-starve-together/sanctum-security-pulses.webp`,
  `${siteUrl}/images/dont-starve-together/sanctum-sequitor-puzzle.webp`,
  `${siteUrl}/images/dont-starve-together/sanctum-pulse-cradles.webp`,
  `${siteUrl}/images/dont-starve-together/sanctum-lustrous-weevil-sockets.webp`,
  `${siteUrl}/images/dont-starve-together/sanctum-keystone-reliquary.webp`,
];

const toc = [
  {
    id: "enter-sanctum",
    label: "How to Enter Sanctum",
  },
  {
    id: "waymark-compass",
    label: "Waymark Compass & Security Pulses",
  },
  {
    id: "sequitors-puzzle",
    label: "Sequitor Jumping Puzzle",
  },
  {
    id: "flummoxing-flames",
    label: "Nine-Flame Puzzle",
  },
  {
    id: "purifier-room",
    label: "Purifier Room Barrier",
  },
  {
    id: "key-room",
    label: "Four Ancient Towers",
  },
  {
    id: "lustrous-weevils",
    label: "Four Lustrous Weevil Sockets",
  },
  {
    id: "get-keystone",
    label: "How to Get the Keystone",
  },
  {
    id: "after-keystone",
    label: "Where to Go Next",
  },
];

const relatedLinks = [
  {
    href: "/dont-starve-together",
    label: "Shadow Progression & Final Boss",
  },
  {
    href: "/dont-starve-together/cursed-confrontation-part-2-walkthrough",
    label: "Cursed Confrontation Part 2 Walkthrough",
  },
  {
    href: "/dont-starve-together/shrouded-queen",
    label: "Shrouded Queen & Umbral Abomination",
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
    publishedTime: "2026-10-25",
    modifiedTime: "2026-10-25",
    images: [
      {
        url: heroImageUrl,
        alt: "Waymark Compass inside the Don't Starve Together Sanctum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImageUrl],
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
          name: "Don't Starve Together",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sanctum Walkthrough",
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
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-25",
      dateModified: "2026-10-25",
      articleSection: "Don't Starve Together Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Don't Starve Together",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Don't Starve Together Sanctum",
        },
        {
          "@type": "Thing",
          name: "Waymark Compass",
        },
        {
          "@type": "Thing",
          name: "Sanctum jumping puzzle",
        },
        {
          "@type": "Thing",
          name: "Sanctum Keystone",
        },
        {
          "@type": "Thing",
          name: "Lustrous Weevils",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title="DST Sanctum Walkthrough: All Puzzles & Keystone"
          description={articleDescription}
          gameTitle="Don't Starve Together"
          gameHref="/dont-starve-together"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SanctumWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
