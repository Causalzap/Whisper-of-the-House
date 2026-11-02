
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AuronuiIslandContent from "@/data/crimson-desert/auronui-island.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const dlcPath = "/crimson-desert/charting-the-unknown";
const pagePath = "/crimson-desert/auronui-island";
const pageUrl = `${siteUrl}${pagePath}`;

const articleTitle =
  "How Do You Pioneer Auronui Island in Crimson Desert?";

const metadataDescription =
  "Pioneer Auronui Island in Crimson Desert: assign 3 comrades, complete the 12-hour dispatch, find the Forgotten Treasure Map, and unlock ship teleportation.";

const articleDescription =
  "Reach Auronui Island, complete the Pioneer dispatch, claim the Anchorage, locate the Forgotten Treasure Map, and craft and install the Ship Teleportation Device.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-auronui-pioneering-progress.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-auronui-pioneer-dispatch-requirements.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-auronui-forgotten-treasure-map.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-auronui-ship-teleportation-blueprint.webp`,
];

export const metadata: Metadata = {
  title: articleTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: articleTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: articleTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "reach-auronui-island",
    label: "How to Reach Auronui",
  },
  {
    id: "prepare-ship-crew",
    label: "Comrade Requirements",
  },
  {
    id: "start-pioneering",
    label: "Start the Pioneer Mission",
  },
  {
    id: "pioneering-time",
    label: "12-Hour Dispatch",
  },
  {
    id: "complete-pioneering",
    label: "Complete the Mission",
  },
  {
    id: "pioneering-troubleshooting",
    label: "Pioneering Not Working",
  },
  {
    id: "secret-winding-island",
    label: "Forgotten Treasure Map",
  },
  {
    id: "teleporter-blueprint",
    label: "Ship Teleportation Blueprint",
  },
  {
    id: "craft-ship-teleporter",
    label: "Craft & Install the Device",
  },
  {
    id: "anchorage-benefits",
    label: "Anchorage Unlocks",
  },
  {
    id: "finish-a-wider-world",
    label: "Finish A Wider World",
  },
];

const relatedLinks = [
  {
    label: "Charting the Unknown DLC",
    href: dlcPath,
  },
  {
    label: "Ships: Build, Crew & Repair",
    href: "/crimson-desert/ships",
  },
  {
    label: "Beyond the Margins Walkthrough",
    href: "/crimson-desert/beyond-the-margins",
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
          name: "Crimson Desert",
          item: `${siteUrl}/crimson-desert`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charting the Unknown",
          item: `${siteUrl}${dlcPath}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Auronui Island",
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
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
        },
        {
          "@type": "Thing",
          name: "Charting the Unknown",
        },
        {
          "@type": "Thing",
          name: "Auronui Island",
        },
        {
          "@type": "Thing",
          name: "Pioneering",
        },
        {
          "@type": "Thing",
          name: "A Wider World",
        },
        {
          "@type": "Thing",
          name: "Forgotten Treasure Map",
        },
        {
          "@type": "Thing",
          name: "Ship Teleportation Device",
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
          description="Reach Auronui Island, dispatch three comrades, finish the Pioneer mission, and collect the Forgotten Treasure Map and Ship Teleportation Device Blueprint."
          gameTitle="Crimson Desert: Charting the Unknown"
          gameHref={dlcPath}
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AuronuiIslandContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
