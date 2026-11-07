import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FindTheNeedleScannerContent from "@/data/find-the-needle/scanner.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/find-the-needle`;
const pageUrl = `${hubUrl}/scanner`;

const metadataTitle = "Find The Needle Scanner: How to Unlock, Build & Use Mk I";
const metadataDescription =
  "Unlock Scanner Mk I after First Bales, store two Straw Panels in the Depot, aim the scrap cannon, check the needle drawer, and fix scanning problems.";

const articleTitle = "How Do You Unlock and Use the Scanner in Find The Needle?";
const articleDescription =
  "Unlock and build Scanner Mk I, supply its two Straw Panels from the Depot, adjust the metal output, collect needles from the drawer, and check scanning speed.";

const imageUrls = [
  `${siteUrl}/images/find-the-needle/find-the-needle-scanner-mk1-unlock-stats.webp`,
  `${siteUrl}/images/find-the-needle/find-the-needle-scanner-building-requirements.webp`,
  `${siteUrl}/images/find-the-needle/find-the-needle-scanner-output-controls.webp`,
];

const toc = [
  { id: "unlock-scanner", label: "Unlock Scanner Mk I" },
  { id: "scanner-materials", label: "Straw Panel Shortage" },
  { id: "install-scanner", label: "Install Scanner on a Belt" },
  { id: "metal-output", label: "Aim the Scrap Cannon" },
  { id: "needle-drawer", label: "Needle Drawer & Belt Stops" },
  { id: "metal-detector", label: "Metal Detector vs Scanner" },
  { id: "scanner-problems", label: "Scanner Troubleshooting" },
  { id: "scanner-layout", label: "How Many Scanners?" },
];

const relatedLinks = [
  { href: "/find-the-needle", label: "First Bales, Straw Panels & Depot" },
  { href: "/find-the-needle/automation", label: "Power & Machine-Jam Fixes" },
  { href: "/find-the-needle/achievements", label: "Needle Collection & 60 Achievements" },
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
    images: [{ url: imageUrls[0], width: 788, height: 536 }],
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Scanner",
          item: pageUrl,
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

export default function FindTheNeedleScannerPage() {
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
          <FindTheNeedleScannerContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
