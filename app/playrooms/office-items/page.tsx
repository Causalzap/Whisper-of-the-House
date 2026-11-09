import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsOfficeItemsContent from "@/data/playrooms/office-items.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = `${hubUrl}/office-items`;

const articleTitle = "Where Are All 14 Office Items in Playrooms?";
const articleDescription = "Locate all 14 collectible decorations across the Playroom, Waiting Area, Backroom, Poolroom, School, Office and Hotel.";
const metadataTitle = "Playrooms Office Items: All 14 Locations & Eagle Eye";
const metadataDescription = "Find all 14 office decorations in Playrooms, including the Gramophone, Wall Clock, Copper Icosahedron and Hotel items, to unlock Eagle Eye.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-gramophone-location.webp`;

const toc = [
  { id: "all-office-items", label: "All 14 Items" },
  { id: "playroom-items", label: "Playroom: Toy Block" },
  { id: "waiting-area-items", label: "Waiting Area Items" },
  { id: "backroom-items", label: "Backroom Items" },
  { id: "poolroom-items", label: "Poolroom Items" },
  { id: "school-items", label: "School Items" },
  { id: "office-items-area", label: "Office Items" },
  { id: "hotel-items", label: "Hotel Items" },
  { id: "missing-items", label: "Missing the Last Item" },
  { id: "eagle-eye", label: "Eagle Eye Achievement" },
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
    images: [{ url: imageUrl, alt: "Playrooms Gramophone on a white-topped table in a green-carpeted room" }],
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
        { "@type": "ListItem", position: 3, name: "Office Items", item: pageUrl },
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

export default function PlayroomsOfficeItemsPage() {
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
          <PlayroomsOfficeItemsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
