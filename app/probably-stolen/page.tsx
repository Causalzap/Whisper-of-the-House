
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProbablyStolenContent from "@/data/probably-stolen/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = hubUrl;

const metadataTitle =
  "Probably Stolen Beginner Guide: Starts, Rent & Shop Tips";

const metadataDescription =
  "Choose a start in Probably Stolen, attract buyers, handle rent, inspect items, avoid Security trouble, and prepare your shop for the next day.";

const articleDescription =
  "Choose a starting scenario in Probably Stolen, prepare the shop before opening, use the Display Case to attract buyers, inspect customer merchandise, and manage rent. Understand Starting Perks, Hard Mode restrictions, counterfeit goods, Security risks, overnight preparation, and the Demo shop buyout limitation.";

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
    description:
      "Learn which Probably Stolen start to choose, how to attract customers, manage rent, inspect goods, and keep your shop running.",
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description:
      "Start your shop, choose a scenario, attract buyers, and avoid rent and trading mistakes in Probably Stolen.",
  },
};

const toc = [
  {
    id: "starting-scenarios",
    label: "Which Starting Scenario?",
  },
  {
    id: "first-day",
    label: "What to Do on Day 1",
  },
  {
    id: "display-case",
    label: "Display Case & Buyers",
  },
  {
    id: "rent",
    label: "Rent & Hard Mode",
  },
  {
    id: "perks",
    label: "Starting Perks",
  },
  {
    id: "appraisal",
    label: "Counterfeit Goods",
  },
  {
    id: "security",
    label: "Security & Contraband",
  },
  {
    id: "after-closing",
    label: "After Closing the Shop",
  },
  {
    id: "shop-buyout",
    label: "Buying the Shop",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen/water-merchant-guide",
    label: "Water Merchant: Starting Route & Shop Progression",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "How to Make Pure Water",
  },
  {
    href: "/probably-stolen/rat-breeding",
    label: "Rat Breeding: Growth, Genetics & Farming",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner & Profit Calculator",
  },
];

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
          name: "Probably Stolen",
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
      headline:
        "Probably Stolen Beginner Guide: What to Do First",
      description: articleDescription,
      inLanguage: "en",
      datePublished: "2026-10-26",
      dateModified: "2026-10-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Starting Scenarios and Starting Perks",
        },
        {
          "@type": "Thing",
          name: "Shop trading and customer negotiation",
        },
        {
          "@type": "Thing",
          name: "Display Case and customer attraction",
        },
        {
          "@type": "Thing",
          name: "Rent and Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Counterfeit merchandise inspection",
        },
        {
          "@type": "Thing",
          name: "Security and contraband",
        },
        {
          "@type": "Thing",
          name: "Shop buyout",
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
          title="Probably Stolen Beginner Guide: What to Do First"
          description="Choose a starting scenario, prepare the shop for its first customers, protect your rent money, and know what to inspect before trading."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProbablyStolenContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
