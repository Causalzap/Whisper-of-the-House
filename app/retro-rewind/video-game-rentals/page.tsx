import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RetroRewindContent from "@/data/retro-rewind/video-game-rentals.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/retro-rewind`;
const pageUrl = `${siteUrl}/retro-rewind/video-game-rentals`;

const articleTitle = "How Do You Rent Video Games and Consoles in Retro Rewind?";
const articleDescription =
  "Unlock Super Tenko and Saga Origin, compare video game shelf prices, prepare new releases, recommend compatible games, and rent consoles through the System Rental Shelf.";

const metadataTitle = articleTitle;
const metadataDescription =
  "Unlock Super Tenko at Level 9, Saga Origin at Level 15, and System Rentals at Level 21. Set up game shelves, handle releases, and rent consoles.";

const imageUrls = [
  `${siteUrl}/images/retro-rewind/retro-rewind-console-unlock-levels.webp`,
  `${siteUrl}/images/retro-rewind/retro-rewind-video-game-shelf-types.webp`,
  `${siteUrl}/images/retro-rewind/retro-rewind-new-release-video-game-shelf.webp`,
  `${siteUrl}/images/retro-rewind/retro-rewind-super-tenko-game-recommendation.webp`,
  `${siteUrl}/images/retro-rewind/retro-rewind-system-rentals-unlock-cost.webp`,
  `${siteUrl}/images/retro-rewind/retro-rewind-super-tenko-console-rental.webp`,
];

const toc = [
  { id: "unlock-video-games", label: "Unlock Levels: 9, 15 & 21" },
  { id: "buy-first-video-games", label: "Buy Your First Cartridges" },
  { id: "video-game-shelves", label: "Set Up Game Shelves & Prices" },
  { id: "new-video-game-releases", label: "New Game Releases" },
  { id: "customer-game-requests", label: "Match Customer Game Requests" },
  { id: "rent-consoles", label: "Rent Out Consoles" },
  { id: "console-returns", label: "Handle Returned Consoles" },
  { id: "game-rentals-not-working", label: "Rental Setup Troubleshooting" },
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
        { "@type": "ListItem", position: 3, name: "Video Game Rentals", item: pageUrl },
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
