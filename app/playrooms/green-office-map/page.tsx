import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsGreenOfficeMapContent from "@/data/playrooms/green-office-map.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = `${hubUrl}/green-office-map`;

const articleTitle = "How Do You Find the Whale in Playrooms? Green Office Maze & Exit";
const articleDescription = "Enter the hidden Green Office from the Waiting Area, locate the Whale, find the EXIT wall and recover your bearings in the maze.";
const metadataTitle = "Playrooms Green Office Map: Whale Location & Exit Route";
const metadataDescription = "Find the hidden Green Office entrance in the Waiting Area, follow the route to the Whale, unlock Out of Water and find the exit.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-green-office-whale-second-run.webp`;

const toc = [
  { id: "green-office-entrance", label: "Find the Maze Entrance" },
  { id: "green-office-map", label: "Maze Route" },
  { id: "whale-location", label: "Find the Whale" },
  { id: "green-office-exit", label: "Find the Exit" },
  { id: "green-office-lost", label: "When You Get Lost" },
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
    images: [{ url: imageUrl, alt: "Playrooms Whale discovery in the hidden Green Office maze" }],
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
        { "@type": "ListItem", position: 3, name: "Green Office Maze", item: pageUrl },
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

export default function PlayroomsGreenOfficeMapPage() {
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
          <PlayroomsGreenOfficeMapContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
