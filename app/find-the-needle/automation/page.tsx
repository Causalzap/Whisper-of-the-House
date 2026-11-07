import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FindTheNeedleAutomationContent from "@/data/find-the-needle/automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/find-the-needle`;
const pageUrl = `${hubUrl}/automation`;

const metadataTitle = "Find The Needle Automation: Conveyors, Power & Machine Jams";
const metadataDescription =
  "Build an automatic hay line with Conveyor Belts, Hay Generators, Power Poles, Piston Rakes, and Robot Arms; fix jams, weak power, and missed drops.";

const articleTitle = "How Do You Automate Hay Collection in Find The Needle?";
const articleDescription =
  "Connect conveyors and powered collectors, keep a Hay Generator fueled, compare Piston Rakes with Robot Arms, and fix machine jams or power shortages.";

const imageUrls = [
  `${siteUrl}/images/find-the-needle/find-the-needle-power-pole-coverage.webp`,
  `${siteUrl}/images/find-the-needle/find-the-needle-insufficient-power.webp`,
  `${siteUrl}/images/find-the-needle/find-the-needle-metal-machine-jam.webp`,
  `${siteUrl}/images/find-the-needle/find-the-needle-six-arm-factory-layout.webp`,
];

const toc = [
  { id: "first-automatic-line", label: "First Automatic Hay Line" },
  { id: "conveyor-belts", label: "Place & Connect Conveyors" },
  { id: "electricity", label: "Hay Generator & Power Poles" },
  { id: "rake-vs-arm", label: "Piston Rake vs Robot Arm" },
  { id: "machine-jams", label: "Fix Machine Jams" },
  { id: "expand-factory", label: "Expand Your Factory" },
  { id: "test-your-line", label: "Check the Production Line" },
];

const relatedLinks = [
  { href: "/find-the-needle", label: "First Orders & Production" },
  { href: "/find-the-needle/scanner", label: "Scanner Mk I: Unlock & Setup" },
  { href: "/find-the-needle/achievements", label: "All 60 Achievements" },
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
    images: [{ url: imageUrls[0], width: 900, height: 610 }],
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
          name: "Automation",
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

export default function FindTheNeedleAutomationPage() {
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
          <FindTheNeedleAutomationContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
