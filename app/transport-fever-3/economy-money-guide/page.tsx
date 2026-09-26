import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3EconomyMoneyGuideContent from "@/data/transport-fever-3/economy-money-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/economy-money-guide`;

const metadataTitle =
  "Transport Fever 3 Money Guide: Loans, Profit & Debt";

const metadataDescription =
  "Manage Transport Fever 3 loans, line profit, running costs, subsidies, debt, vehicle replacement, company rank, expansion, and cash shortages.";

const articleDescription =
  "Borrow enough to finish working transport, judge mature lines by real revenue, control recurring vehicle costs, use subsidies selectively, repay debt without draining operating cash, and expand only when the company can carry the next project.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-loan-options.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-profitable-train-balance.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-subsidy-reward.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-debt-free-company.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "starting-loan", label: "Choose the starting loan" },
  { id: "complete-project-cost", label: "Price the complete project" },
  { id: "line-profit", label: "Read line profit" },
  { id: "recurring-costs", label: "Control recurring costs" },
  {
    id: "maintenance-and-replacement",
    label: "Vehicle replacement",
  },
  { id: "subsidies", label: "Use subsidies well" },
  { id: "debt", label: "Repay or refinance debt" },
  { id: "company-rank", label: "Company Rank" },
  { id: "when-to-expand", label: "When to expand" },
  { id: "company-finances", label: "When cash gets tight" },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 loan options with different amounts repayment periods and interest rates",
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
          name: "Transport Fever 3 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Money & Economy Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "Transport Fever 3 Money Guide: Loans, Profit & Debt",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-26",
      dateModified: "2026-09-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 loans",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 line profit",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 subsidies",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 Company Rank",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
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
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Money Guide: Loans, Profit, Debt & Expansion"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3EconomyMoneyGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}