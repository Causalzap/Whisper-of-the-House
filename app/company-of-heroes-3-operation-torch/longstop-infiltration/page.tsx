import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OperationTorchLongstopInfiltrationContent from "@/data/company-of-heroes-3-operation-torch/longstop-infiltration.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/company-of-heroes-3-operation-torch`;
const pageUrl = `${hubUrl}/longstop-infiltration`;

const metadataTitle =
  "CoH3 Operation Torch Longstop Infiltration Walkthrough";

const metadataDescription =
  "Complete Longstop Infiltration in Company of Heroes 3 Operation Torch, avoid detection, eliminate snipers, plant Demo Charges, sabotage the Captain's car, and reach extraction.";

const articleTitle =
  "Operation Torch Longstop Infiltration: How Do You Complete the Commando Mission?";

const articleDescription =
  "Use the Commando's 4-second camouflage duration, complete sniper and demolition objectives, resolve the second charge interruption, and escape Longstop Hill.";

const imageUrls = [
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-concealment.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-detection.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-sniper-objectives.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-demo-charge.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-bonus-objective.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-charge-tampered.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-longstop-mission-complete.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "mission-start",
    label: "Longstop Infiltration Objectives",
  },
  {
    id: "concealment",
    label: "Concealment & Detection Radius",
  },
  {
    id: "sniper-objectives",
    label: "Eliminate the Four Snipers",
  },
  {
    id: "demo-charges",
    label: "Plant Demo Charges",
  },
  {
    id: "torch-objective",
    label: "German Captain Optional Objective",
  },
  {
    id: "second-charge",
    label: "Second Charge Interruption",
  },
  {
    id: "mission-failure",
    label: "Detection, Deaths & Checkpoints",
  },
  {
    id: "extraction",
    label: "Extraction & Mission Completion",
  },
  {
    id: "mission-rewards",
    label: "Campaign Upgrade Rewards",
  },
  {
    id: "mission-achievements",
    label: "Longstop Infiltration Achievements",
  },
  {
    id: "next-mission",
    label: "Next Mission: Sened Station",
  },
];

const relatedLinks = [
  {
    href: "/company-of-heroes-3-operation-torch",
    label: "Walkthrough & Guide: Missions and Campaign Progression",
  },
  {
    href: "/company-of-heroes-3-operation-torch/campaign-upgrades",
    label: "Campaign Upgrades: Commando & Support Perks",
  },
  {
    href: "/company-of-heroes-3-operation-torch/achievements",
    label: "Achievements: All 30 & Expert Difficulty",
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: heroImage,
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
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
          name: "Company of Heroes 3: Operation Torch",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Longstop Infiltration",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      dateModified: "2026-11-26",
      image: imageUrls,
    },
  ],
};

export default function OperationTorchLongstopInfiltrationPage() {
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
          gameTitle="Company of Heroes 3: Operation Torch"
          gameHref="/company-of-heroes-3-operation-torch"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OperationTorchLongstopInfiltrationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}