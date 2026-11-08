import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import RetroRewindContent from "@/data/retro-rewind/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/retro-rewind`;
const pageUrl = `${siteUrl}/retro-rewind`;

const articleTitle = "How Do You Start and Run a Video Store in Retro Rewind?";
const articleDescription =
  "Stock your video store, prepare for each trading day, choose practical upgrades, process customer returns, and decide when to add game rentals.";

const metadataTitle = articleTitle;
const metadataDescription =
  "Start Retro Rewind: stock VHS movies, check the calendar, manage rentals and returns, choose early upgrades, and unlock video game rentals.";

const toc = [
  { id: "first-day", label: "Your First Trading Day" },
  { id: "daily-routine", label: "Daily Store Routine" },
  { id: "store-upgrades", label: "Movies, Shelves, Staff & Expansions" },
  { id: "returns-and-customers", label: "Returns, Damage Fees & Customers" },
  { id: "video-games", label: "Adding Video Games & Consoles" },
  { id: "store-stuck", label: "Fix Store Progress Problems" },
  { id: "choose-your-task", label: "Choose Your Next Task" },
];

const relatedLinks: { href: string; label: string }[] = [];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Retro Rewind", item: hubUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-08",
    },
  ],
};

export default function RetroRewindPage() {
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
          gameTitle="Retro Rewind"
          gameHref="/retro-rewind"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RetroRewindContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Retro Rewind"
          heading="Looking for another game after Retro Rewind?"
          description="Find another game that matches your mood, platform, and preferred way to play, or build a Gaming DNA profile."
        />
      </main>
      <Footer />
    </>
  );
}
