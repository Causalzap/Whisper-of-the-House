import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepTowerContent from "@/data/underkeep/tower-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/tower-walkthrough`;

const metadataTitle =
  "Underkeep Tower Walkthrough: Puzzles, Bosses & Ending";
const metadataDescription =
  "Open Underkeep Tower with four Key Fragments, solve the floor and Gallery puzzles, defeat the Architect and Torin, and reach the final portal.";

const articleTitle =
  "Underkeep Tower Walkthrough: How Do You Beat the Final Boss?";
const articleDescription =
  "Open the four-fragment seal, clear the Tower trials and Gallery runes, defeat the Architect, and confront Torin beneath the tower.";

const imageFilenames = [
  "underkeep-tower-four-fragments-open.webp",
  "underkeep-tower-first-switch-trial.webp",
  "underkeep-tower-shadow-beast-light.webp",
  "underkeep-tower-four-rune-colors.webp",
  "underkeep-tower-guardian-consequence.webp",
  "underkeep-tower-torin-reveal.webp",
  "underkeep-tower-final-portal.webp",
];
const imageUrls = imageFilenames.map(
  (filename) => `${siteUrl}/images/underkeep/${filename}`,
);

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Underkeep Tower gate opening after all four Key Fragments are inserted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "four-key-fragments", label: "Open the Tower Gate" },
  { id: "first-tower-trial", label: "First Switch Trial" },
  { id: "shadow-beast", label: "Shadow Beast" },
  { id: "tower-level-two", label: "Level Two & Mimics" },
  { id: "tower-statues", label: "Tower Statues" },
  { id: "tower-gallery", label: "Gallery Puzzle" },
  { id: "tower-rune-colors", label: "Four Colored Runes" },
  { id: "architect-encounter", label: "Meet the Architect" },
  { id: "architect-boss", label: "Architect Boss Fight" },
  { id: "tower-depths", label: "Passage Beneath the Tower" },
  { id: "torin-reveal", label: "Torin's Identity" },
  { id: "torin-boss", label: "Torin Final Boss" },
  { id: "underkeep-ending", label: "Final Portal & Ending" },
  { id: "tower-stuck", label: "Troubleshooting" },
];

const relatedLinks = [
  {
    href: "/underkeep",
    label: "Underkeep: Progression & Tower Key Fragments",
  },
  {
    href: "/underkeep/soulforge-walkthrough",
    label: "Soulforge: Eight Keys & Soulcleaver",
  },
  {
    href: "/underkeep/mausoleum-walkthrough",
    label: "Mausoleum: Golden Keys & Source Choice",
  },
  {
    href: "/underkeep/fast-travel",
    label: "Fast Travel: Four Obelisks & Waystones",
  },
];

// Set these to the actual publication and meaningful update dates.
const publishedAt = "2026-11-12";
const modifiedAt = "2026-11-12";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Underkeep", item: hubUrl },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tower Walkthrough",
          item: pageUrl,
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
      datePublished: publishedAt,
      dateModified: modifiedAt,
      about: [
        { "@type": "VideoGame", name: "Underkeep" },
        { "@type": "Thing", name: "Underkeep Tower four Key Fragments" },
        { "@type": "Thing", name: "Tower switch and Gallery puzzles" },
        { "@type": "Thing", name: "Shadow Beast and colored runes" },
        { "@type": "Thing", name: "Architect and Torin boss fights" },
        { "@type": "Thing", name: "Underkeep final portal and ending" },
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
          description={articleDescription}
          gameTitle="Underkeep"
          gameHref="/underkeep"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UnderkeepTowerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
