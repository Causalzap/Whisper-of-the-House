import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RetroRewindContent from "@/data/retro-rewind/tech-shed-electronics.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/retro-rewind`;
const pageUrl = `${siteUrl}/retro-rewind/tech-shed-electronics`;

const articleTitle = "Where Is Tech Shed Electronics in Retro Rewind?";
const articleDescription =
  "Find Tech Shed Electronics near the barbershop, visit during its opening hours, compare available game cartridges and colored editions, and repair damaged entertainment equipment.";

const metadataTitle = articleTitle;
const metadataDescription =
  "Find Tech Shed near the barbershop. Check its Wednesday–Sunday 8 AM–midnight hours, browse game cartridges, and arrange console or VHS player repairs.";

const imageUrls = [
  `${siteUrl}/images/retro-rewind/retro-rewind-tech-shed-game-stock.webp`,
  `${siteUrl}/images/retro-rewind/retro-rewind-tech-shed-colored-cartridges.webp`,
];

const toc = [
  { id: "location-hours", label: "Location & Opening Hours" },
  { id: "buy-games", label: "Buy Games & Check Stock" },
  { id: "colored-cartridges", label: "Colored Game Cartridges" },
  { id: "damaged-equipment", label: "Console & VHS Player Repairs" },
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
        { "@type": "ListItem", position: 3, name: "Tech Shed Electronics", item: pageUrl },
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
