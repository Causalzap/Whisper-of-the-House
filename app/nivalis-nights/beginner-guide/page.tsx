
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/nivalis-nights/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Nivalis Nights Beginner Guide: What to Do First on Day 1";

const metadataDescription =
  "Start Nivalis Nights at Ramen Noir, buy ingredients, hire your first waiter, handle the first curfew, and prepare for Day 2 in Meridian Market.";

const articleTitle =
  "Nivalis Nights Beginner Guide: What to Do First on Day 1";

const articleDescription =
  "Start in Lowtown, take the HOVA taxi to Meridian Market, and set up Ramen Noir. Follow the changing shopping list, collect early recipes, hire your first waiter, keep enough cash for another service, and prepare for curfew and Day 2 before exploring Nivalis.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-meridian-market-map.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-1.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-shopping-list-meridian-market.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-meridian-market-map.webp`;

const toc = [
  {
    id: "go-to-meridian-market",
    label: "Lowtown to Meridian Market",
  },
  {
    id: "set-up-ramen-noir",
    label: "Set Up Ramen Noir",
  },
  {
    id: "first-shopping-list",
    label: "Complete the First Shopping List",
  },
  {
    id: "get-first-recipes",
    label: "Get Your First Recipes",
  },
  {
    id: "hire-first-worker",
    label: "Hire Your First Waiter",
  },
  {
    id: "first-day-cash",
    label: "Manage Your Day 1 Cash",
  },
  {
    id: "first-curfew",
    label: "Handle the First Curfew",
  },
  {
    id: "day-two",
    label: "What to Check on Day 2",
  },
  {
    id: "opening-breakpoint",
    label: "When to Explore Nivalis",
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
        alt: "Nivalis Nights city map showing Meridian Market during the opening journey to Ramen Noir",
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
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-10-08",
      inLanguage: "en",
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
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
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
