import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RetroRewindContent from "@/data/retro-rewind/when-to-replace-damaged-tape.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/retro-rewind`;
const pageUrl = `${siteUrl}/retro-rewind/when-to-replace-damaged-tape`;

const articleTitle = "Should You Repair or Replace Broken VHS Tapes in Retro Rewind?";
const articleDescription =
  "Repair broken VHS tapes using the $100 Repair Desk, understand damage fees, prioritize new releases and holographic copies, and decide when replacement is worthwhile.";

const metadataTitle = articleTitle;
const metadataDescription =
  "Unlock the $100 Repair Desk in Retro Rewind, repair broken VHS tapes, handle damage fees, and decide when to restore, replace, or discard damaged movies.";

const imageUrls = [
  `${siteUrl}/images/retro-rewind/retro-rewind-vhs-tape-repair.webp`,
];

const toc = [
  { id: "how-to-repair-broken-vhs-tapes", label: "Use the Repair Desk" },
  { id: "broken-tape-fees", label: "Damage Fees vs Repair" },
  { id: "repair-or-replace", label: "Repair, Replace or Discard" },
  { id: "new-release-priority", label: "New Release Repair Priority" },
  { id: "rare-holographic-movies", label: "Holographic & Rare Movies" },
  { id: "cash-and-order-limits", label: "Cash & Order Decisions" },
  { id: "repair-not-working", label: "Repair Troubleshooting" },
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
        { "@type": "ListItem", position: 3, name: "Damaged VHS Tapes", item: pageUrl },
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
