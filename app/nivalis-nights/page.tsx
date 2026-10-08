
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NivalisNightsContent from "@/data/nivalis-nights/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/nivalis-nights`;

const metadataTitle =
  "Nivalis Nights Guide: Progression, Map & What to Do Next";

const metadataDescription =
  "Start with Ramen Noir, explore fishing and farming, unlock districts with Achievement Points, and find what to do next in Nivalis Nights.";

const articleTitle =
  "Nivalis Nights Guide: What to Do Next, Map & Progression";

const articleDescription =
  "Start at Ramen Noir in Meridian Market, then decide whether to improve your business, visit the Docks for fishing and boat travel, grow ingredients with Clen, or continue exploring Nivalis. Learn how Achievement Points unlock districts, how transport connections work, and what to check when quests or travel stop progressing.";

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
    label: "Journal & Progression",
  },
  {
    id: "business",
    label: "Ramen Noir Business",
  },
  {
    id: "where-to-go-next",
    label: "Where to Go Next",
  },
  {
    id: "achievement-points",
    label: "Achievement Points & Districts",
  },
  {
    id: "map-and-travel",
    label: "Map & Travel",
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
    label: "Side Jobs & Quests",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "when-stuck",
    label: "What to Do When Stuck",
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
    label: "Manager Unlock & Restocking",
  },
  {
    href: "/nivalis-nights/fishing-guide",
    label: "Fishing, Boat & Fish Database",
  },
  {
    href: "/nivalis-nights/seafaring-treasures",
    label: "Seafaring Treasures Walkthrough",
  },
  {
    href: "/nivalis-nights/farming-guide",
    label: "Farming, Seeds & Greenhouses",
  },
  {
    href: "/nivalis-nights/curfew",
    label: "Curfew & Shelter Guide",
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
        alt: "Nivalis Nights journal showing skills, business, fishing, farming, people, recipes, and achievements",
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
      about: [
        {
          "@type": "VideoGame",
          name: "Nivalis Nights",
        },
        {
          "@type": "Thing",
          name: "Ramen Noir",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights progression",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights fishing and boat travel",
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
          name: "Nivalis Nights map and district travel",
        },
        {
          "@type": "Thing",
          name: "Nivalis Nights quests and relationships",
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
      inLanguage: "en",
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
          <NivalisNightsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
