import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BusinessGuideContent from "@/data/nivalis-nights/business-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/business-guide`;

const metadataTitle =
  "Nivalis Nights Ramen Noir Guide: Profit, Staff & Level 3";

const metadataDescription =
  "Learn how to keep Ramen Noir profitable in Nivalis Nights with real daily report data, pricing, staff, debt, Level 3, Managers, and expansion.";

const articleDescription =
  "A practical Ramen Noir business guide for Nivalis Nights covering menu costs, staffing, debt, real profit and loss data, venue progression, Level 3, pricing, Managers, farming costs, and when the restaurant is ready to expand.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-1.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-first-day-debt.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-daily-loss.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-3-manager.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-daily-loss.webp`;

const toc = [
  {
    id: "business-dashboard",
    label: "Read the Ramen Noir Monitor Before Spending",
  },
  {
    id: "menu-costs",
    label: "Add Menu Items Only When the Restaurant Can Support Them",
  },
  {
    id: "staff",
    label: "Hire for the Bottleneck You Can See",
  },
  {
    id: "debt",
    label: "Ramen Noir Starts With 50,000 Lims of Debt",
  },
  {
    id: "revenue-vs-profit",
    label: "58 Customers Can Still Produce a Loss",
  },
  {
    id: "make-more-money",
    label: "How to Make More Money at Ramen Noir",
  },
  {
    id: "recover-from-loss",
    label: "How to Recover When Ramen Noir Is Losing Money",
  },
  {
    id: "level-three",
    label: "Level 3 Is the First Major Capacity Jump",
  },
  {
    id: "pricing",
    label: "Raise Prices Before Adding Capacity",
  },
  {
    id: "ingredient-costs",
    label: "Reduce Recurring Ingredient Costs",
  },
  {
    id: "second-venue",
    label: "When to Take a Second Venue",
  },
  {
    id: "business-priority",
    label: "Check the Daily Report Before Spending Again",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/beginner-guide",
    label: "Nivalis Nights Beginner Guide",
  },
  {
    href: "/nivalis-nights/manager",
    label: "How to Unlock and Use a Manager",
  },
  {
    href: "/nivalis-nights/farming-guide",
    label: "Nivalis Nights Farming Guide",
  },
  {
    href: "/nivalis-nights/fishing-guide",
    label: "Nivalis Nights Fishing Guide",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Nivalis Nights Ramen Noir daily report showing revenue, costs, customers, and a negative venue balance",
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
          name: "Nivalis Nights",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ramen Noir Business Guide",
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
      dateModified: "2026-10-01",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
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
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function NivalisNightsBusinessGuidePage() {
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
          title="Nivalis Nights Ramen Noir Business Guide: How to Stay Profitable"
          description="Keep Ramen Noir profitable by controlling menu costs, staffing for real bottlenecks, protecting operating cash, using venue upgrades carefully, and checking the daily report before expanding."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BusinessGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}