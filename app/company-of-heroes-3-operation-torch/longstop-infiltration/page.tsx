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
  "Complete Longstop Infiltration, avoid enemy and bunker detection, eliminate four snipers, plant Demo Charges, and sabotage the Captain's car.";

const articleTitle =
  "Operation Torch Longstop Infiltration: How Do You Complete the Commando Mission?";

const articleDescription =
  "Use Concealment to avoid detection, eliminate the four required snipers, resolve the second Demo Charge interruption, complete the optional Captain objective, and withdraw safely.";

const jsonLdDescription =
  "Complete Longstop Infiltration in Company of Heroes 3 Operation Torch using the Commando's camouflage, which lasts for 4 seconds after leaving cover. Avoid enemy and bunker detection, complete sniper and demolition objectives, recover from checkpoints, and reach extraction.";

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
    label: "Concealment & Bunker Detection",
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
    label: "Does the Captain Objective Affect Achievements?",
  },
  {
    id: "next-mission",
    label: "Next Mission: Sened Station",
  },
];

const relatedLinks = [
  {
    href: "/company-of-heroes-3-operation-torch",
    label: "Walkthrough & Guide: All 15 Campaign Missions",
  },
  {
    href: "/company-of-heroes-3-operation-torch/campaign-upgrades",
    label: "Campaign Upgrades: 56 Perks & Best Choices",
  },
  {
    href: "/company-of-heroes-3-operation-torch/achievements",
    label: "Achievements: All 30 & Interactive Checklist",
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
        alt: "Operation Torch Longstop Infiltration Commando camouflage indicator and blue detection circle",
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
          updatedAt="November 28, 2026"
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