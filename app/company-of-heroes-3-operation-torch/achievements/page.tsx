import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OperationTorchAchievementsContent from "@/data/company-of-heroes-3-operation-torch/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/company-of-heroes-3-operation-torch`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Company of Heroes 3 Operation Torch Achievements: All 30";

const metadataDescription =
  "Track all 30 Operation Torch achievements with an interactive checklist, check hidden achievement requirements, and plan Expert difficulty mission completion.";

const articleTitle =
  "Company of Heroes 3 Operation Torch Achievements: How Do You Unlock All 30?";

const articleDescription =
  "Track all 30 campaign achievements, identify their mission and difficulty requirements, and plan your Expert campaign without unnecessary additional playthroughs.";

const imageUrls = [
  `${siteUrl}/images/company-of-heroes-3-operation-torch/operation-torch-campaign-difficulty.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-checklist",
    label: "All 30 Achievements Checklist",
  },
  {
    id: "achievement-requirements",
    label: "Achievement Unlock Requirements",
  },
  {
    id: "completion-order",
    label: "Best Achievement Completion Order",
  },
  {
    id: "mission-achievements",
    label: "Misleading Achievement Names",
  },
  {
    id: "expert-difficulty",
    label: "Expert Achievement Progress",
  },
  {
    id: "longstop-infiltration",
    label: "Longstop Infiltration Achievements",
  },
];

const relatedLinks = [
  {
    href: "/company-of-heroes-3-operation-torch",
    label: "Walkthrough & Guide: Missions and Campaign Progression",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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

export default function OperationTorchAchievementsPage() {
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
          <OperationTorchAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}