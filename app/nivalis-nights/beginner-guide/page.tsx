import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/nivalis-nights/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Nivalis Nights Beginner Guide: What to Do First & Day 1 Walkthrough";

const metadataDescription =
  "Start Nivalis Nights without wasting your first day: reach Ramen Noir, set up the restaurant, restock ingredients, hire your first worker, handle curfew, and know when to leave Meridian Market.";

const articleDescription =
  "A step-by-step Nivalis Nights beginner guide covering the opening route from Lowtown to Meridian Market, the first Ramen Noir setup, Chicken Noodle Soup ingredients, the live shopping list, early recipes, the first worker, cash management, the first curfew, Day 2 preparation, and what to do once the opening restaurant loop is stable.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-meridian-market-map.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-1.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-shopping-list-meridian-market.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-first-day-debt.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-curfew-shelter.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-tier-2.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-meridian-market-map.webp`;

const toc = [
  {
    id: "go-to-meridian-market",
    label: "Go From Lowtown to Meridian Market First",
  },
  {
    id: "open-ramen-noir",
    label: "Open Ramen Noir Before Buying Anything Else",
  },
  {
    id: "buy-first-ingredients",
    label: "Follow the Live Shopping List",
  },
  {
    id: "get-more-recipes",
    label: "Get More Recipes Without Overspending",
  },
  {
    id: "hire-first-worker",
    label: "Hire Your First Worker",
  },
  {
    id: "do-not-overexpand",
    label: "Keep Cash Available Early",
  },
  {
    id: "get-home-before-curfew",
    label: "Get Home Before the First Curfew",
  },
  {
    id: "day-two",
    label: "What to Do on Day 2",
  },
  {
    id: "reach-tier-two",
    label: "Reach Ramen Noir Tier 2",
  },
  {
    id: "what-to-do-next",
    label: "What to Do After the Opening",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/business-guide",
    label: "Ramen Noir Business & Profit Guide",
  },
  {
    href: "/nivalis-nights/fishing-guide",
    label: "Nivalis Nights Fishing Guide",
  },
  {
    href: "/nivalis-nights/farming-guide",
    label: "Nivalis Nights Farming Guide",
  },
  {
    href: "/nivalis-nights/curfew",
    label: "Nivalis Nights Curfew Guide",
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
        alt: "Nivalis Nights travel map showing Meridian Market during the opening route to Ramen Noir",
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
          name: "Beginner Guide",
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

export default function NivalisNightsBeginnerGuidePage() {
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
          title="Nivalis Nights Beginner Guide: What to Do First on Day 1"
          description="Follow the opening route to Ramen Noir, set up the first menu, restock correctly, hire your first worker, protect your cash, and know when the restaurant is stable enough to start exploring Nivalis."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}