import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2TidefallContent from "@/data/endless-legend-2/tidefall.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/tidefall`;

const metadataTitle =
  "ENDLESS Legend 2 Tidefall & Monsoon Guide";

const metadataDescription =
  "Prepare for Monsoon and Tidefall in ENDLESS Legend 2, including temporary bridges, Curiosities, Battle Spoils, new land, scouting and expansion.";

const articleDescription =
  "Handle Monsoon safely, collect temporary Curiosities, avoid bridge losses, prepare armies for Tidefall, scout newly exposed land, and decide what to claim first.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-monsoon-effects.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-tidefall-new-land.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "monsoon-effects",
    label: "Monsoon effects",
  },
  {
    id: "monsoon-timing",
    label: "Monsoon & Tidefall timing",
  },
  {
    id: "during-monsoon",
    label: "What to do during Monsoon",
  },
  {
    id: "tidefall",
    label: "What Tidefall changes",
  },
  {
    id: "prepare-for-tidefall",
    label: "Prepare for Tidefall",
  },
  {
    id: "after-tidefall",
    label: "What to claim first",
  },
  {
    id: "later-tidefalls",
    label: "Later Tidefalls",
  },
  {
    id: "faction-effects",
    label: "Faction-specific effects",
  },
  {
    id: "endless-monsoon",
    label: "Endless Monsoon",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
  },
  {
    href: "/endless-legend-2/order-of-zelevas",
    label: "Order of Zelevas",
  },
  {
    href: "/endless-legend-2/sandshapers",
    label: "Sandshapers",
  },
  {
    href: "/endless-legend-2/minor-factions",
    label: "Minor Factions",
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
      "ENDLESS Legend 2 Tidefall & Monsoon Guide – What Changes and What to Do",
    description: articleDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
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
          name: "ENDLESS Legend 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tidefall & Monsoon",
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
        "ENDLESS Legend 2 Tidefall & Monsoon Guide – What Changes and What to Do",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ENDLESS Legend 2",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Monsoon",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Tidefall",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Monsoon Curiosities",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 temporary bridges",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Battle Spoils",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Endless Monsoon",
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
          title="ENDLESS Legend 2 Tidefall & Monsoon Guide – What Changes and What to Do"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2TidefallContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}