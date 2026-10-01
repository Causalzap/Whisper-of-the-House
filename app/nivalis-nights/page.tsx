import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NivalisNightsContent from "@/data/nivalis-nights/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/nivalis-nights`;

const metadataTitle =
  "Nivalis Nights Guide: Progression, Business, Fishing & Map";

const metadataDescription =
  "A complete Nivalis Nights guide to progression, Ramen Noir, Managers, fishing, farming, Achievement Points, map travel, relationships, curfew, properties, side jobs, and achievements.";

const articleDescription =
  "A practical Nivalis Nights guide to what to do first, how progression works, when to stay with Ramen Noir, when to branch into fishing or farming, how Achievement Points unlock districts, how city travel works, and how relationships, curfew, properties, side jobs, and achievements fit into the wider progression loop.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-journal-systems.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-relationship-matrix.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-journal-systems.webp`;

const toc = [
  {
    id: "what-to-do-first",
    label: "What to Do First",
  },
  {
    id: "progression-systems",
    label: "How Progression Works",
  },
  {
    id: "business",
    label: "Keep Ramen Noir Stable",
  },
  {
    id: "where-to-go-next",
    label: "Where to Go After the Opening",
  },
  {
    id: "achievement-points",
    label: "Achievement Points & District Unlocks",
  },
  {
    id: "map-and-travel",
    label: "Map, Taxi, Train & Boat Travel",
  },
  {
    id: "relationships",
    label: "Relationships & Dialogue",
  },
  {
    id: "curfew",
    label: "The 2 AM Curfew",
  },
  {
    id: "apartments-and-properties",
    label: "Apartments & Properties",
  },
  {
    id: "side-jobs",
    label: "Side Jobs & Efficient Routes",
  },
  {
    id: "achievements",
    label: "Achievements & Completion",
  },
  {
    id: "when-stuck",
    label: "What to Check When You Are Stuck",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/beginner-guide",
    label: "Nivalis Nights Beginner Guide",
  },
  {
    href: "/nivalis-nights/business-guide",
    label: "Ramen Noir Business & Profit Guide",
  },
  {
    href: "/nivalis-nights/manager",
    label: "Manager Unlock & Automation Guide",
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
  {
    href: "/nivalis-nights/achievements",
    label: "All 120 Achievements & Tracker",
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
        alt: "Nivalis Nights journal showing business fishing farming skills people recipes apartments and achievements",
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
          name: "Nivalis Nights Guide",
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
      about: [
        {
          "@type": "Thing",
          name: "Nivalis Nights progression",
        },
        {
          "@type": "Thing",
          name: "Ramen Noir",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights business",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights fishing",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights farming",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights Achievement Points",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights map and travel",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights relationships",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights curfew",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights achievements",
        },
      ],
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

export default function NivalisNightsPage() {
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
          title="Nivalis Nights Guide: Progression, Business, Fishing & What to Do Next"
          description="Start with Ramen Noir, then choose your next move based on the current bottleneck: automate the business, head to the Docks, build the farming supply chain, unlock more districts, or combine quests with city exploration."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NivalisNightsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
