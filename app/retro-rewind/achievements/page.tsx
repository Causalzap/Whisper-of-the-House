import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RetroRewindContent from "@/data/retro-rewind/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/retro-rewind`;
const pageUrl = `${siteUrl}/retro-rewind/achievements`;

const articleTitle = "How Do You Unlock All 23 Retro Rewind Achievements?";
const articleDescription =
  "Use the 23-achievement checklist and complete movie collection, customer, concession, store expansion, VHS repair, and video game rental milestones.";

const metadataTitle = articleTitle;
const metadataDescription =
  "Track all 23 Retro Rewind Steam achievements with a checklist, including movie collection targets, 20 VHS repairs, 20 entertainment-system rentals, and 100 games.";

const imageUrls = [
  `${siteUrl}/images/retro-rewind/retro-rewind-customer-ban-confirmation.webp`,
];

const toc = [
  { id: "achievement-checklist", label: "All 23 Achievements Checklist" },
  { id: "video-game-update", label: "Five Video Game Update Achievements" },
  { id: "collecting", label: "Movie Collection Milestones" },
  { id: "customer-operations", label: "Customer Requests & Returns" },
  { id: "staff-and-store", label: "Employees & Store Unlocks" },
  { id: "sales-and-money", label: "Sales & Revenue Achievements" },
  { id: "special-items", label: "Special Item Achievements" },
  { id: "first-day", label: "First Day Complete" },
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
    images: [{ url: imageUrls[0] }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
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
        { "@type": "ListItem", position: 3, name: "Achievements", item: pageUrl },
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
      image: imageUrls,
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
      </main>
      <Footer />
    </>
  );
}
