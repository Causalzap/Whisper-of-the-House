
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Chapter2Content from "@/data/planet-zoo-2/career-chapter-2.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/career-chapter-2`;

const metadataTitle =
  "Planet Zoo 2 Chapter 2 Walkthrough: All 5 Scenarios";

const metadataDescription =
  "Clear Nordic Fjords, South East Wales, New England, Scottish Highlands, and South Africa with the key objectives and progression requirements.";

const articleTitle =
  "Planet Zoo 2 Chapter 2 Walkthrough: All 5 Scenarios";

const articleDescription =
  "Complete the five Paws on the Path Career scenarios, including Nordic Fjords aquariums, South East Wales animal care, New England finances, Scottish Highlands restoration, and South Africa rehabilitation.";

const pageDescription =
  "Follow Chapter 2 from Nordic Fjords through the three branching assignments, with the numbers, repairs, unlocks, and decisions needed to progress.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/career-chapter-2-otter-habitat-repair.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-2-flamingo-marketing.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "nordic-fjords",
    label: "Nordic Fjords: All A-Fjord",
  },
  {
    id: "south-east-wales",
    label: "South East Wales: Otterly Lush",
  },
  {
    id: "chapter-two-branches",
    label: "Which Location Next?",
  },
  {
    id: "new-england",
    label: "New England: Grizzly Details",
  },
  {
    id: "scottish-highlands",
    label: "Scottish Highlands: Deer, Oh Deer",
  },
  {
    id: "south-africa",
    label: "South Africa: A Penny Learned",
  },
  {
    id: "silver-gold",
    label: "Silver and Gold Progression",
  },
  {
    id: "after-chapter-two",
    label: "After Chapter 2",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2 Career Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Chapter 1 Walkthrough",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Filtration",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves & Release Groups",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
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
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    images: imageUrls,
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-15",
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
          name: "Planet Zoo 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chapter 2",
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
      inLanguage: "en",
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      articleSection: "Planet Zoo 2 Career Chapter 2",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "VideoGame",
        name: "Planet Zoo 2",
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
    },
  ],
};

export default function PlanetZoo2Chapter2Page() {
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
          description={pageDescription}
          gameTitle="Planet Zoo 2"
          gameHref="/planet-zoo-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Chapter2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
