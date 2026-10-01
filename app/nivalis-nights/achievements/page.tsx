import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/nivalis-nights/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Nivalis Nights Achievements Guide: All 120 Requirements & Tracker";

const metadataDescription =
  "Track all 120 Nivalis Nights achievements with requirements for business, 24 fish, farming, locations, apartments, dining, collectibles, postcards, quests, and hidden achievements.";

const articleDescription =
  "A complete Nivalis Nights achievement guide and interactive tracker covering all 120 achievements, including business milestones, 24 fish species, farming requirements, 18 locations, 11 apartment discoveries, dining goals, graffiti, menu cards, postcards, character quests, and hidden achievements.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-achievements-list.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-achievements-list.webp`;

const toc = [
  {
    id: "achievement-tracker",
    label: "Track All 120 Achievements",
  },
  {
    id: "business",
    label: "Business Achievements",
  },
  {
    id: "fishing",
    label: "All 24 Fishing Achievements",
  },
  {
    id: "farming",
    label: "Farming Achievements",
  },
  {
    id: "locations",
    label: "All 18 Location Achievements",
  },
  {
    id: "apartments",
    label: "Apartment Discovery Achievements",
  },
  {
    id: "dining",
    label: "Dining Achievements",
  },
  {
    id: "collectibles",
    label: "Graffiti & Menu Card Achievements",
  },
  {
    id: "postcards",
    label: "All 10 Postcard Achievements",
  },
  {
    id: "quests",
    label: "Quest & Hidden Achievements",
  },
  {
    id: "final-cleanup",
    label: "How to Finish the Last Achievements",
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
        width: 936,
        height: 524,
        alt: "Nivalis Nights achievement list showing business, exploration, and hidden achievement progress",
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
          name: "Achievements",
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

export default function NivalisNightsAchievementsPage() {
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
          title="Nivalis Nights Achievements Guide: All 120 Requirements & Tracker"
          description="Track every Nivalis Nights achievement by category, including business milestones, all 24 fish, crops, locations, apartments, dining, collectibles, postcards, quests, and hidden objectives."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
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