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
  "Complete all 15 Operation Torch missions, from Operation Flagpole to Hill 604, with mission objectives, battlefield tactics, and solutions to difficult encounters.";

const articleTitle =
  "Company of Heroes 3 Operation Torch Walkthrough: All 15 Missions";

const articleDescription =
  "Progress through all 15 Operation Torch missions, from the initial landings to the final assault on Hill 604. Complete objectives, survive counterattacks, and overcome difficult battles.";

const jsonLdDescription =
  "Complete all 15 missions in Company of Heroes 3 Operation Torch, including Faid Pass, Sbeitla, Kasserine, Fondouk Gap, Return to Longstop, Hill 609, and Hill 604.";

const imageUrls = [
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-campaign-difficulty.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-flagpole-objectives.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-charlie-beach-objectives.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-whizbang-barrage.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-bonus-objective-icon.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-medjez-el-bab-defend-point.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-faid-mortar-recovery.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-faid-repair-at-guns.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-sbeitla-logistics-truck.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-kasserine-at-gun-airdrop.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-fondouk-tunnel-hideout.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-return-to-longstop-fuel-sites.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-hill-609-secondary-hills.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-hill-604-village-route.webp`,
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
    label: "Faid Pass Walkthrough",
  },
  {
    id: "sbeitla",
    label: "Sbeitla Walkthrough",
  },
  {
    id: "kasserine",
    label: "Kasserine Walkthrough",
  },
  {
    id: "fondouk",
    label: "Fondouk Gap Walkthrough",
  },
  {
    id: "return-to-longstop",
    label: "Return to Longstop Walkthrough",
  },
  {
    id: "hill-609",
    label: "Hill 609 Walkthrough",
  },
  {
    id: "hill-604",
    label: "Hill 604 Walkthrough",
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
    label: "Campaign Upgrades: 56 Perks & Best Choices",
  },
  {
    href: "/company-of-heroes-3-operation-torch/longstop-infiltration",
    label: "Longstop Infiltration: Concealment & Mission Walkthrough",
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
        alt: "Company of Heroes 3 Operation Torch Charlie Beach mission",
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
      description: jsonLdDescription,
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
      dateModified: "2026-11-28",
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
          updatedAt="November 28, 2026"
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