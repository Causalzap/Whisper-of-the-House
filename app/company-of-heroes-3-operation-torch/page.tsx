import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OperationTorchContent from "@/data/company-of-heroes-3-operation-torch/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/company-of-heroes-3-operation-torch`;
const pageUrl = hubUrl;

const metadataTitle =
  "Company of Heroes 3 Operation Torch Walkthrough & Guide";

const metadataDescription =
  "Explore all 15 Operation Torch missions, choose your difficulty, complete early campaign objectives, defend Medjez El Bab, and progress through Sened Station.";

const articleTitle =
  "Company of Heroes 3 Operation Torch Guide: How Do You Progress Through the Campaign?";

const articleDescription =
  "Start Operation Torch, choose your difficulty, follow mission walkthroughs through Sened Station, prepare for counterattacks, and track your campaign progress.";

const imageUrls = [
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-campaign-difficulty.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-flagpole-objectives.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-charlie-beach-objectives.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-whizbang-barrage.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-bonus-objective-icon.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-medjez-el-bab-defend-point.webp`,
];

const heroImage = imageUrls[2];

const toc = [
  {
    id: "guide-overview",
    label: "Which Guide Do You Need?",
  },
  {
    id: "getting-started",
    label: "How to Start Operation Torch",
  },
  {
    id: "mission-list",
    label: "All 15 Campaign Missions",
  },
  {
    id: "difficulty",
    label: "Difficulty & Tactical Pause",
  },
  {
    id: "operation-flagpole",
    label: "Operation Flagpole Walkthrough",
  },
  {
    id: "charlie-beach",
    label: "Charlie Beach Walkthrough",
  },
  {
    id: "medjez-el-bab",
    label: "Medjez El Bab Walkthrough",
  },
  {
    id: "iron-rain",
    label: "Iron Rain Walkthrough",
  },
  {
    id: "chouigui",
    label: "Chouigui Walkthrough",
  },
  {
    id: "hornets-nest",
    label: "Hornet's Nest Walkthrough",
  },
  {
    id: "longstop-infiltration",
    label: "Longstop Infiltration",
  },
  {
    id: "sened-station",
    label: "Sened Station Walkthrough",
  },
  {
    id: "faid",
    label: "Faid Opening Objectives",
  },
  {
    id: "campaign-upgrades",
    label: "Campaign Upgrades",
  },
  {
    id: "campaign-tips",
    label: "What to Do If You Get Stuck",
  },
  {
    id: "achievement-progress",
    label: "Campaign Achievements",
  },
];

const relatedLinks = [
  {
    href: "/company-of-heroes-3-operation-torch/achievements",
    label: "Achievements: All 30 & Interactive Checklist",
  },
  {
    href: "/company-of-heroes-3-operation-torch/campaign-upgrades",
    label: "Campaign Upgrades: Best Perks & Torch Objectives",
  },
  {
    href: "/company-of-heroes-3-operation-torch/longstop-infiltration",
    label: "Longstop Infiltration: Commando Mission Walkthrough",
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

export default function OperationTorchPage() {
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
          <OperationTorchContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}