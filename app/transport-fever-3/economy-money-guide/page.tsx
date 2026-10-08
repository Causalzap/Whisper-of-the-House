
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
  "Make money in Transport Fever 3: learn when cargo pays, why warehouse transfers lose money, and how to manage loans, vehicle costs, subsidies, and debt.";

const articleTitle =
  "Transport Fever 3 Money Guide: Loans, Profit & Debt";

const articleDescription =
  "Learn how to keep your transport company profitable, from choosing starting loans and controlling vehicle costs to understanding cargo payments, warehouse transfers, line profits, subsidies, and debt repayment.";

const publishedAt = "2026-09-26";
const modifiedAt = "2026-10-08";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-loan-options.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-profitable-train-balance.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-subsidy-reward.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-debt-free-company.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "starting-loan",
    label: "Starting loans",
  },
  {
    id: "complete-project-cost",
    label: "Full project costs",
  },
  {
    id: "line-profit",
    label: "Cargo payments & line profit",
  },
  {
    id: "recurring-costs",
    label: "Running costs & return cargo",
  },
  {
    id: "maintenance-and-replacement",
    label: "Vehicle replacement",
  },
  {
    id: "subsidies",
    label: "Subsidies & rewards",
  },
  {
    id: "debt",
    label: "Loans & debt repayment",
  },
  {
    id: "company-rank",
    label: "Company rank",
  },
  {
    id: "when-to-expand",
    label: "When to expand",
  },
  {
    id: "company-finances",
    label: "Running out of money",
  },
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
    href: "/transport-fever-3/production-chains",
    label: "Production Chains",
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
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    images: [
      {
        url: heroImage,
        width: 800,
        height: 100,
        alt: "Transport Fever 3 loan options showing different borrowing amounts, repayment periods, and interest rates",
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

      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,

      inLanguage: "en",
      datePublished: publishedAt,
      dateModified: modifiedAt,

      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 money and profit",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 loans and debt",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo payments",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 freight revenue",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 warehouse transfer revenue",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 vehicle operating costs",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 subsidies",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 company rank",
        },
      ],

      isPartOf: {
        "@id": `${siteUrl}#website`,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
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
