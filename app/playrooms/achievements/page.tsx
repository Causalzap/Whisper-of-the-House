import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsAchievementsContent from "@/data/playrooms/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = `${hubUrl}/achievements`;

const articleTitle = "How Do You Unlock All 30 Playrooms Achievements?";
const articleDescription = "Use the 30-achievement checklist to track area entry, full cleaning, ball pits, collectibles, maximum upgrades and special-mode challenges.";
const metadataTitle = "Playrooms Achievements: All 30 & 100% Checklist";
const metadataDescription = "Track all 30 Playrooms Steam achievements with an interactive checklist, including 20 Sparrows, 14 office items, single-colour pits and Hardcore.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-monochrome-orange-ball-pit.webp`;

const toc = [
  { id: "achievement-checklist", label: "30-Achievement Checklist" },
  { id: "room-entry", label: "Room Entry Achievements" },
  { id: "room-cleaning", label: "Full Room Cleaning" },
  { id: "ball-pits", label: "Ball Pit & Ending Goals" },
  { id: "equipment-upgrades", label: "Equipment & Upgrades" },
  { id: "collectibles", label: "Secrets & Collectibles" },
  { id: "special-challenges", label: "Special Challenges" },
  { id: "completion-plan", label: "100% Completion Order" },
];

// Internal guide links are already present in the MDX. Avoid a second card list.
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
    images: [{ url: imageUrl, alt: "Playrooms single-colour orange-ball pit challenge and unlock notification" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrl],
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
        { "@type": "ListItem", position: 2, name: "Playrooms", item: hubUrl },
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
      dateModified: "2026-11-09",
      image: [imageUrl],
      about: { "@type": "VideoGame", name: "Playrooms" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function PlayroomsAchievementsPage() {
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
          gameTitle="Playrooms"
          gameHref="/playrooms"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PlayroomsAchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
