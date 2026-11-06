import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepBeginnerGuideContent from "@/data/underkeep/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle = "Underkeep Beginner Guide: Controls, Combat, Rest & Food";
const metadataDescription =
  "Learn Underkeep controls, combat turns, active skills, potion actions, Food and Rest, inventory, map markers, and how to recover fallen party members.";

const articleTitle = "How Do You Play Underkeep? Controls, Combat & First Steps";
const articleDescription =
  "Get ready for your first fights, learn which actions cost a turn, manage Rest and Food, organize equipment, use the map, and recover after defeat.";

const imageFilenames = [
  "underkeep-combat-action-rules.webp",
  "underkeep-skills-inventory-controls.webp",
  "underkeep-food-rest-recovery.webp",
  "underkeep-map-marker-locked-chest.webp",
];
const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/underkeep/${file}`,
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
    images: [{ url: imageUrls[0], alt: "Underkeep combat interface showing a party member’s action options" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "first-steps", label: "What Should You Do Before Your First Fight in Underkeep?" },
  { id: "controls", label: "Which Controls Should You Learn First?" },
  { id: "combat-turns", label: "How Do Combat Turns and Actions Work in Underkeep?" },
  { id: "early-combat", label: "How Do You Survive Early Fights Without Wasting Supplies?" },
  { id: "rest-food", label: "How Does Rest Work, and Why Is Food Important?" },
  { id: "inventory-equipment", label: "How Do Inventory, Equipment, and Gold Work?" },
  { id: "map-and-secrets", label: "How Do You Avoid Getting Lost or Missing Important Items?" },
  { id: "death-and-saving", label: "What Happens When a Character Dies in Underkeep?" },
  { id: "next-steps", label: "Where Should You Go After Learning the Basics?" },
];

const relatedLinks = [
  { href: "/underkeep", label: "Underkeep: Regions, Tower & Progression" },
  { href: "/underkeep/races-classes", label: "Races & Classes: Skills, Traits & Parties" },
  { href: "/underkeep/early-game-walkthrough", label: "Early Game: Silver Key & Village" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Underkeep", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Beginner Guide", item: pageUrl },
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
      datePublished: "2026-11-06",
      dateModified: "2026-11-06",
      about: [
        { "@type": "VideoGame", name: "Underkeep" },
        { "@type": "Thing", name: "Movement and inventory controls" },
        { "@type": "Thing", name: "Combat turns and potion use" },
        { "@type": "Thing", name: "Food and Rest" },
        { "@type": "Thing", name: "Equipment and shared inventory" },
        { "@type": "Thing", name: "Map markers and resurrection" },
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
          updatedAt="November 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UnderkeepBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
