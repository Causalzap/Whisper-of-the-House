import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsWalkthroughContent from "@/data/playrooms/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = `${hubUrl}/walkthrough`;

const articleTitle = "How Do You Beat Playrooms? All Room Keys & Final Exit";
const articleDescription = "Follow the six room unlocks, manage the hazards in each area and find the last pit and exit needed to finish Playrooms.";
const metadataTitle = "Playrooms Walkthrough: Room Order, All Keys & Ending";
const metadataDescription = "Unlock the Waiting Area, Backroom, Poolroom, School, Office and Hotel, complete the required ball pits and reach the final exit in Playrooms.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-first-ball-pit-sprint-unlock.webp`;

const toc = [
  { id: "room-order", label: "Room Order & Key Prices" },
  { id: "first-day", label: "Your First Day" },
  { id: "first-ball-pits", label: "Sprint & Crouch" },
  { id: "waiting-area", label: "Waiting Area" },
  { id: "backroom", label: "Backroom" },
  { id: "poolroom", label: "Poolroom" },
  { id: "school", label: "School" },
  { id: "office", label: "Office" },
  { id: "hotel", label: "Hotel" },
  { id: "final-exit", label: "Final Exit & Ending" },
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
    images: [{ url: imageUrl, alt: "Playrooms first ball pit completion and Sprint unlock" }],
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
        { "@type": "ListItem", position: 3, name: "Walkthrough", item: pageUrl },
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

export default function PlayroomsWalkthroughPage() {
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
          <PlayroomsWalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
