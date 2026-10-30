import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ChartingTheUnknownContent from "@/data/crimson-desert/charting-the-unknown.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const baseGameUrl = `${siteUrl}/crimson-desert`;
const dlcUrl = `${baseGameUrl}/charting-the-unknown`;
const pageUrl = dlcUrl;

const articleTitle = "How Do You Start Crimson Desert: Charting the Unknown DLC?";
const metadataDescription = "Start Charting the Unknown in Crimson Desert: unlock A Wider World, ships, character quests, Garden of Trials, romance, and housing.";
const articleDescription = "Choose what to do first in Charting the Unknown. Check the requirements for ships, Kliff, Oongka, Damiane, Garden of Trials, housing, romance, and facilities.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-charting-the-unknown-story-questlines.webp`,
];

export const metadata: Metadata = {
  title: articleTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: articleTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: articleTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "how-to-start", label: "DLC Unlock Requirements" },
  { id: "what-to-do-first", label: "What to Do First" },
  { id: "a-wider-world", label: "A Wider World & Ships" },
  { id: "new-character-stories", label: "New Character Stories" },
  { id: "underwater-exploration", label: "Underwater Exploration" },
  { id: "romance-marriage", label: "Romance & Marriage" },
  { id: "housing-castles", label: "Housing & Castles" },
  { id: "facility-management", label: "Facility Management" },
  { id: "garden-of-trials", label: "Garden of Trials" },
  { id: "dlc-not-showing", label: "Content Not Showing" },
];

const relatedLinks = [
  { label: "Ships: Build, Crew & Repair", href: "/crimson-desert/ships" },
  { label: "Beyond the Margins Walkthrough", href: "/crimson-desert/beyond-the-margins" },
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
          name: "Crimson Desert",
          item: `${siteUrl}/crimson-desert`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charting the Unknown",
          item: `${siteUrl}/crimson-desert/charting-the-unknown`,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-30",
      dateModified: "2026-10-30",
      about: [
        { "@type": "VideoGame", name: "Crimson Desert" },
        { "@type": "Thing", name: "Charting the Unknown" },
        { "@type": "Thing", name: "A Wider World" },
        { "@type": "Thing", name: "Beyond the Margins" },
        { "@type": "Thing", name: "Garden of Trials" },
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
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
          description="Find out which Charting the Unknown activities your save can access, where they begin, and what to unlock next."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ChartingTheUnknownContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
