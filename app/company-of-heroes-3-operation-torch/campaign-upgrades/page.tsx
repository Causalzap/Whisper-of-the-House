import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OperationTorchCampaignUpgradesContent from "@/data/company-of-heroes-3-operation-torch/campaign-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/company-of-heroes-3-operation-torch`;
const pageUrl = `${hubUrl}/campaign-upgrades`;

const metadataTitle =
  "Company of Heroes 3 Operation Torch Campaign Upgrades & Best Perks";

const metadataDescription =
  "Compare 30 Operation Torch campaign perks, unlock Bonus Upgrades through Torch Objectives, and choose the best infantry, vehicle, reconnaissance, and support upgrades.";

const articleTitle =
  "Operation Torch Campaign Upgrades: Which Perks Should You Choose?";

const articleDescription =
  "Compare 15 campaign upgrade choices, earn extra rewards through Torch Objectives, reduce Manpower costs, preserve infantry, and improve your vehicles and support units.";

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
    label: "30 Campaign Perk Options",
  },
  {
    id: "infantry-upgrades",
    label: "Best Infantry Upgrades",
  },
  {
    id: "vehicle-upgrades",
    label: "Halftrack & Stuart Upgrades",
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
    label: "Walkthrough & Guide: Missions and Campaign Progression",
  },
  {
    href: "/company-of-heroes-3-operation-torch/achievements",
    label: "Achievements: All 30 & Expert Difficulty",
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
          updatedAt="November 26, 2026"
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