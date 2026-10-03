import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/transport-fever-3/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Transport Fever 3 Achievements Guide: All 41 Requirements";

const metadataDescription =
  "Track all 41 Transport Fever 3 achievements, including Campaign stars, hidden UFO, climate goals, cargo totals, towns, vehicles, and rare challenges.";

const articleDescription =
  "Track all 41 Transport Fever 3 achievements and see what each requirement actually needs, from early Free Game milestones to Campaign stars, climate goals, cumulative totals, and rare cleanup conditions.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-achievements-list.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-tracker",
    label: "41-Achievement Tracker",
  },
  {
    id: "campaign-achievements",
    label: "Campaign Achievements",
  },
  {
    id: "quick-free-game-achievements",
    label: "Easy Free Game Achievements",
  },
  {
    id: "town-achievements",
    label: "Town Achievements",
  },
  {
    id: "subsidy-achievements",
    label: "Subsidy Achievements",
  },
  {
    id: "industry-achievements",
    label: "Industry Achievements",
  },
  {
    id: "long-term-achievements",
    label: "Long-Term Goals",
  },
  {
    id: "all-climates-achievements",
    label: "All Climate Goals",
  },
  {
    id: "ufo-achievement",
    label: "Hidden UFO Achievement",
  },
  {
    id: "cleanup-order",
    label: "Final Cleanup Order",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/campaign-walkthrough",
    label: "Campaign Walkthrough",
  },
  {
    href: "/transport-fever-3/production-chains",
    label: "Production Chains",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Economy & Money Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 achievements list and unlock requirements",
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

export default function TransportFever3AchievementsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Transport Fever 3",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Transport Fever 3 Achievements",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        url: pageUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        dateModified: "2026-10-03",
        author: {
          "@id": `${siteUrl}#organization`,
        },
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Achievements Guide: All 41 Requirements"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}