import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FindTheNeedleContent from "@/data/find-the-needle/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/find-the-needle`;
const pageUrl = hubUrl;

const metadataTitle = "Find The Needle Beginner Guide: First Orders & Production";
const metadataDescription =
  "Start Find The Needle, complete First Bales, make Straw Panels and Wrapped Bales, manage Depot materials, and progress through The Dairy.";


const articleTitle = "How Do You Start and Progress in Find The Needle?";
const articleDescription =
  "Earn your first money, complete First Bales, produce Straw Panels and Wrapped Bales, manage Depot inventory, and unlock new machinery through orders.";


const imageUrls = [
  `${siteUrl}/images/find-the-needle/find-the-needle-first-bales-order-book.webp`,
  `${siteUrl}/images/find-the-needle/find-the-needle-depot-straw-panel-toggle.webp`,
];

const toc = [
  { id: "first-money", label: "Start & Earn Your First Money" },
  { id: "early-upgrades", label: "First Tools & Upgrades" },
  { id: "first-bales", label: "Complete First Bales" },
  { id: "after-first-bales", label: "What Unlocks After First Bales?" },
  { id: "straw-panels", label: "Make Straw Panels" },
  { id: "depot-troubleshooting", label: "Straw Panels Stuck in Depot" },
  { id: "orders-progression", label: "Orders & Machine Unlocks" },
  { id: "production-chains", label: "What to Produce Next" },
  { id: "finding-needles", label: "Finding Needles" },
  { id: "next-step-troubleshooting", label: "Factory Progress Troubleshooting" },
  { id: "completion", label: "What Counts as Finishing?" },
];

const relatedLinks = [
  { href: "/find-the-needle/automation", label: "Conveyors, Power & Automation" },
  { href: "/find-the-needle/scanner", label: "Scanner Mk I & Metal Detector" },
  { href: "/find-the-needle/achievements", label: "All 60 Achievements & Checklist" },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [{ url: imageUrls[0], width: 726, height: 506 }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          name: "Find The Needle",
          item: hubUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-07",
      image: imageUrls,
    },
  ],
};

export default function FindTheNeedlePage() {
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
          gameTitle="Find The Needle"
          gameHref="/find-the-needle"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FindTheNeedleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
