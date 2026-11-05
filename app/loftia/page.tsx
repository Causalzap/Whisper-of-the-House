import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LoftiaContent from "@/data/loftia/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/loftia`;
const pageUrl = hubUrl;

const metadataTitle =
  "Loftia Guide: What to Do First, Regions & Progression";

const metadataDescription =
  "Follow Loftia from the first City quests and Glider to Hanging Gardens research and Gridfall preparations, with clear next steps and activities.";

const articleTitle =
  "What Should You Do First and Next in Loftia?";

const articleDescription =
  "Start in Loftia City, unlock the Glider, reach Hanging Gardens, open Research Stations, and plan your next move toward Gridfall. Find help with Dew, pets, tools, Adventures, and World Projects.";

const imageUrls = [
  `${siteUrl}/images/loftia/loftia-hanging-gardens-airtram.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "what-to-do-first",
    label: "What to Do First",
  },
  {
    id: "region-order",
    label: "Story Region Order",
  },
  {
    id: "glider",
    label: "Unlock Hanging Gardens",
  },
  {
    id: "research",
    label: "Research & Upgrades",
  },
  {
    id: "field-research",
    label: "Field Research",
  },
  {
    id: "gridfall",
    label: "Preparing for Gridfall",
  },
  {
    id: "stuck",
    label: "When Progress Is Stuck",
  },
  {
    id: "world-projects",
    label: "World Projects & Maintenance",
  },
  {
    id: "adventures",
    label: "Adventures & Co-op",
  },
  {
    id: "collections-memories",
    label: "Collections & Memories",
  },
  {
    id: "after-main-story",
    label: "After the Main Story",
  },
  {
    id: "faq",
    label: "Progression FAQ",
  },
];

const relatedLinks = [
  {
    href: "/loftia/beginner-guide",
    label: "Beginner: First Quests & Glider",
  },
  {
    href: "/loftia/money-making",
    label: "Make Dew: Crops & Cooking",
  },
  {
    href: "/loftia/pets",
    label: "Pets: First Dog Rescue",
  },
  {
    href: "/loftia/research-and-tool-upgrades",
    label: "Research: Hammer & Pruners Lv.2",
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
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
    images: [
      {
        url: heroImage,
        alt: "Cliff directing the player to the Airtram in Loftia",
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
          name: "Loftia",
          item: hubUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-05",
      dateModified: "2026-11-05",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
    },
  ],
};

export default function LoftiaOverviewPage() {
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
          gameTitle="Loftia"
          gameHref="/loftia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LoftiaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
