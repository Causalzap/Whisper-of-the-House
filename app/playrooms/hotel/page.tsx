import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsHotelContent from "@/data/playrooms/hotel.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = `${hubUrl}/hotel`;

const articleTitle = "How Do You Clean the Hotel in Playrooms? Rooms & Cleaning Schedule";
const articleDescription = "Track numbered Hotel rooms, mark rooms on the Cleaning Schedule, navigate changed corridors and recover difficult-to-reach balls.";
const metadataTitle = "Playrooms Hotel Guide: Cleaning Schedule & Stuck Balls";
const metadataDescription = "Unlock the Hotel, follow numbered guest rooms and the Cleaning Schedule, and find or recover the last few balls in Playrooms.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-hotel-cleaning-schedule-board.webp`;

const toc = [
  { id: "hotel-key", label: "Hotel Key & Entrance" },
  { id: "cleaning-schedule", label: "Use the Cleaning Schedule" },
  { id: "hotel-room-numbers", label: "Find Numbered Rooms" },
  { id: "cleaning-order", label: "Room-by-Room Cleaning" },
  { id: "last-balls", label: "Last Balls & Recovery" },
  { id: "clean-hotel", label: "Confirm Hotel Completion" },
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
    images: [{ url: imageUrl, alt: "Playrooms Hotel Cleaning Schedule board with numbered guest rooms" }],
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
        { "@type": "ListItem", position: 3, name: "Hotel", item: pageUrl },
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

export default function PlayroomsHotelPage() {
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
          <PlayroomsHotelContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
