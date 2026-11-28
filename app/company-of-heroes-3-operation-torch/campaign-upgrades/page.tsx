import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OperationTorchCampaignUpgradesContent from "@/data/company-of-heroes-3-operation-torch/campaign-upgrades.mdx";

import {
  operationTorchUpgradeChoices,
  operationTorchCampaignPerks,
} from "@/data/company-of-heroes-3-operation-torch/upgrades";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/company-of-heroes-3-operation-torch`;
const pageUrl = `${hubUrl}/campaign-upgrades`;

const campaignPerkCount = operationTorchCampaignPerks.length;
const campaignUpgradeChoiceCount = operationTorchUpgradeChoices.length;

const metadataTitle =
  `CoH3 Operation Torch Campaign Upgrades: ${campaignPerkCount} Perks & Best Choices`;

const metadataDescription =
  `Compare ${campaignPerkCount} Operation Torch campaign perks across ${campaignUpgradeChoiceCount} upgrade choices, unlock Torch Objective rewards, and choose the best upgrades for your army.`;

const articleTitle =
  "Operation Torch Campaign Upgrades: Which Perks Should You Choose?";

const articleDescription =
  `Compare ${campaignPerkCount} campaign perk options, earn Bonus Upgrades through Torch Objectives, and improve infantry, vehicles, anti-tank guns, and battlefield support throughout the campaign.`;

const jsonLdDescription =
  `Compare ${campaignPerkCount} campaign perks across ${campaignUpgradeChoiceCount} upgrade choices in Company of Heroes 3 Operation Torch, including unlock requirements, unit effects, and recommended combinations from Operation Flagpole through Hill 609.`;

const imageUrls = [
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-campaign-perk-selection.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-bonus-objective-icon.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-barracks-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-riflemen-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-halftrack-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-stuart-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-scout-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-commando-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-hmg-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-faid-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-sbeitla-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-kasserine-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-fondouk-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-return-to-longstop-perk-choices.webp`,
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-hill-609-perk-choices.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "campaign-perks",
    label: "How Campaign Perks Work",
  },
  {
    id: "torch-objectives",
    label: "Torch Objectives & Bonus Upgrades",
  },
  {
    id: "upgrade-choices",
    label: `${campaignPerkCount} Campaign Perk Options`,
  },
  {
    id: "infantry-upgrades",
    label: "Best Infantry Upgrades",
  },
  {
    id: "vehicle-upgrades",
    label: "Vehicle & Anti-Tank Upgrades",
  },
  {
    id: "support-upgrades",
    label: "Reconnaissance & Support Upgrades",
  },
  {
    id: "upgrade-priorities",
    label: "Best Upgrade Combinations",
  },
  {
    id: "upgrade-mistakes",
    label: "Missing Rewards & Perk Problems",
  },
];

const relatedLinks = [
  {
    href: "/company-of-heroes-3-operation-torch",
    label: "Walkthrough & Guide: All 15 Campaign Missions",
  },
  {
    href: "/company-of-heroes-3-operation-torch/achievements",
    label: "Achievements: All 30 & Interactive Checklist",
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
        alt: "Company of Heroes 3 Operation Torch After Action screen showing standard and bonus campaign upgrade choices",
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
          name: "Campaign Upgrades",
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

export default function OperationTorchCampaignUpgradesPage() {
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
          <OperationTorchCampaignUpgradesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}