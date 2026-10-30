import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeyondTheMarginsContent from "@/data/crimson-desert/beyond-the-margins.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const baseGameUrl = `${siteUrl}/crimson-desert`;
const dlcUrl = `${baseGameUrl}/charting-the-unknown`;
const pageUrl = `${dlcUrl}/beyond-the-margins`;

const articleTitle = "How Do You Complete Beyond the Margins in Crimson Desert?";
const metadataDescription = "Finish Beyond the Margins 13/13: defeat Matthias and Trukan, fix Marker Stones and five Dark Stakes, beat Kharzek, and return to Sebastian.";
const articleDescription = "Complete all 13 Beyond the Margins objectives in Crimson Desert, from Pailune and Jijeong Temple through corrupted Marker Stones, desert villages, and Kharzek.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-beyond-the-margins-journal.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-beyond-the-margins-corrupted-marker-stone.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-beyond-the-margins-hidden-dark-stake-tree.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-beyond-the-margins-kharzek-boss.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-beyond-the-margins-complete-13-of-13.webp`,
];

export const metadata: Metadata = {
  title: articleTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: articleTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: articleTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "how-to-start", label: "Start Beyond the Margins" },
  { id: "familiar-faces", label: "Matthias Duel" },
  { id: "trukan-duel", label: "Trukan at Jijeong Temple" },
  { id: "find-sebastian", label: "Find Sebastian" },
  { id: "marker-stones", label: "Marker Stones & Dark Stakes" },
  { id: "desert-villages", label: "Desert Village Objectives" },
  { id: "survey-records", label: "Survey Records" },
  { id: "antumbra-location", label: "Traces of Antumbra" },
  { id: "kharzek-boss", label: "Kharzek Boss Fight" },
  { id: "finish-13-of-13", label: "Complete 13/13" },
];

const relatedLinks = [
  { label: "Charting the Unknown DLC", href: "/crimson-desert/charting-the-unknown" },
  { label: "Ships: Build, Crew & Repair", href: "/crimson-desert/ships" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Crimson Desert",
          item: `${siteUrl}/crimson-desert`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charting the Unknown",
          item: `${siteUrl}/crimson-desert/charting-the-unknown`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Beyond the Margins",
          item: `${siteUrl}/crimson-desert/beyond-the-margins`,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-30",
      dateModified: "2026-10-30",
      about: [
        { "@type": "VideoGame", name: "Crimson Desert" },
        { "@type": "Thing", name: "Charting the Unknown" },
        { "@type": "Thing", name: "Beyond the Margins" },
        { "@type": "Thing", name: "Marker Stones" },
        { "@type": "Thing", name: "Kharzek" },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function Page() {
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
          description="Follow Kliff’s 13-part questline, repair the desert routes, defeat Kharzek, and report back to Sebastian."
          gameTitle="Crimson Desert: Charting the Unknown"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeyondTheMarginsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
