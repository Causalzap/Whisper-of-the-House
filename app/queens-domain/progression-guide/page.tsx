import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ProgressionGuideContent from "@/data/queens-domain/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/progression-guide`;

const metadataTitle =
  "Queen's Domain Progression Guide: Where to Go Next";

const metadataDescription =
  "Follow the early area order, find three Gargoyle beacons, cross the western bridge, clear Obmuer Temple, and unlock the Tower.";

const articleTitle =
  "Where Should You Go Next in Queen's Domain?";

const articleDescription =
  "Follow the early island route, locate all three Gargoyle beacons, cross the western bridge, and unlock the path from Obmuer Temple to Deimpo Mausoleum.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/azure-torch-tower-approach.webp`,
  `${siteUrl}/images/queens-domain/first-gargoyle-bell.webp`,
  `${siteUrl}/images/queens-domain/second-gargoyle-locked-gate.webp`,
  `${siteUrl}/images/queens-domain/western-broken-bridge-two-dashes.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "after-shrine", label: "After the Shrine Guardian" },
  { id: "second-wind-gem", label: "Unlock two Wind Dashes" },
  { id: "three-gargoyle-bells", label: "All three Gargoyle beacons" },
  { id: "western-bridge", label: "Cross the western bridge" },
  { id: "obmuer-temple", label: "Complete Obmuer Temple" },
  { id: "tower-after-temple", label: "After defeating Dagoom" },
  { id: "deimpo-mausoleum", label: "Unlock Deimpo Mausoleum" },
  { id: "wrong-area", label: "Are you exploring too early?" },
  { id: "when-to-backtrack", label: "When to backtrack" },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/isle-of-neasied-walkthrough",
    label: "Opening Route: Shrine Guardian & Endu",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Wind Gems & Wind Dash",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple Walkthrough",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge Walkthrough",
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
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    images: [
      {
        url: heroImage,
        alt: "Azure Torch required to ignite Gargoyle beacons in Queen's Domain",
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
          name: "Queen's Domain",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-10-31",
      dateModified: "2026-10-31",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
    },
  ],
};

export default function QueensDomainProgressionGuidePage() {
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
          gameTitle="Queen's Domain"
          gameHref="/queens-domain"
          breadcrumbBaseHref="/queens-domain"
          breadcrumbBaseLabel="Queen's Domain"
          updatedAt="October 31, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProgressionGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}