import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PricingGuideContent from "@/data/big-ambitions/pricing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/pricing-guide`;

const metadataTitle =
  "Big Ambitions Pricing Guide: Best Prices & Pricing Manager";

const metadataDescription =
  "Set prices in Big Ambitions 1.0, use Store Insight, compare Current, Suggested and Market Price, and reprice when rivals change the market.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-store-insight-pricing-satisfaction.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-pricing-manager-suggested-prices.webp`,
];

const toc = [
  {
    id: "set-prices",
    label: "How to set prices",
  },
  {
    id: "is-price-the-problem",
    label: "Is price the problem?",
  },
  {
    id: "price-by-neighborhood",
    label: "Prices by neighborhood",
  },
  {
    id: "manual-pricing",
    label: "Manual pricing",
  },
  {
    id: "service-and-product-prices",
    label: "Services & products",
  },
  {
    id: "when-to-hire-pricing-manager",
    label: "When to hire a Pricing Manager",
  },
  {
    id: "current-suggested-market",
    label: "Current vs Suggested vs Market",
  },
  {
    id: "apply-suggested-prices",
    label: "Apply Suggested Prices",
  },
  {
    id: "when-not-to-apply",
    label: "When not to apply",
  },
  {
    id: "rival-pricing",
    label: "Rival pricing",
  },
  {
    id: "pricing-troubleshooting",
    label: "Pricing troubleshooting",
  },
  {
    id: "price-is-set",
    label: "When the price is set",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/progression-guide",
    label: "Progression Guide & What to Unlock Next",
  },
  {
    href: "/big-ambitions/best-businesses",
    label: "Best Businesses by Progression Stage",
  },
  {
    href: "/big-ambitions/rivals-guide",
    label: "Rivals & Competition Guide",
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
    description:
      "Diagnose pricing problems, compare local market prices, and use the Big Ambitions 1.0 Pricing Manager without mistaking every weak store for a price problem.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Big Ambitions Pricing Manager showing Current, Suggested and Market prices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Use Store Insight, local market prices and the Pricing Manager to set and recheck prices in Big Ambitions 1.0.",
    images: [imageUrls[1]],
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pricing Guide",
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
        "Big Ambitions Pricing Guide: Best Prices, Store Insight and Pricing Manager",
      description:
        "A player-focused Big Ambitions 1.0 pricing guide covering manual pricing, neighborhood market differences, Store Insight diagnosis, service and product prices, when to hire a Pricing Manager, Current Price, Suggested Price, Market Price, Apply Suggested Prices, rival-driven repricing, and troubleshooting stores that remain weak after a price change.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-30",
      dateModified: "2026-08-30",
      articleSection: "Big Ambitions Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Ambitions",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions pricing",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions best prices",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Pricing Manager",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Suggested Price",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Market Price",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Current Price",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Apply Suggested Prices",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Store Insight",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions rival pricing",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Set and Recheck Prices in Big Ambitions 1.0"
          description="I use local market prices for the first few stores, check Insight before blaming price for weak sales, then move the repetitive comparisons into the Pricing Manager once the company spreads across several neighborhoods."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PricingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}