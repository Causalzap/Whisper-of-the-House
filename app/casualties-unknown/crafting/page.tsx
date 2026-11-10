import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CasualtiesUnknownCraftingContent from "@/data/casualties-unknown/crafting.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/casualties-unknown/crafting`;

const metadataTitle = "Casualties: Unknown Crafting Guide: First Recipes & INT";

const metadataDescription =
  "Make Rope, Canvas, a Foliage Bag, Dressing, and Canteen in Casualties: Unknown. Learn Material Pouch requirements, INT checks, and crafting failures.";

const articleDescription =
  "Learn the early Rope and Canvas crafting chain, make a Foliage Bag, turn Ripped Dressing into Dressing, produce Bio-chem Fluid for a Canteen, work toward a Material Pouch, understand Cutting and Hammering qualities, and fix missing ingredients, condition thresholds, and INT-related crafting failures.";

const imageUrls = [
  `${siteUrl}/images/casualties-unknown/casualties-unknown-canvas-crafting-recipe.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-dressing-crafting-recipe.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-material-pouch-item.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Make a Foliage Bag, Dressing, and Canteen; check Material Pouch materials, tool qualities, and INT requirements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Canvas recipe showing Foliage-quality requirements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Learn useful early recipes and why crafting fails in Casualties: Unknown.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "what-to-craft-first", label: "What to Craft First" },
  { id: "how-crafting-works", label: "Crafting Menu" },
  { id: "rope-canvas-foliage-bag", label: "Foliage Bag & Canvas" },
  { id: "craft-dressing", label: "Craft a Dressing" },
  { id: "canteen-bio-chem-fluid", label: "Canteen & Bio-chem Fluid" },
  { id: "material-pouch", label: "Material Pouch" },
  { id: "knives-wood-metal", label: "Tools, Wood & Metal" },
  { id: "crafting-not-working", label: "Crafting Not Working" },
  { id: "how-to-get-int", label: "How to Get More INT" },
];

const relatedLinks = [
  { href: "/casualties-unknown", label: "Beginner Guide: Inventory & First Steps" },
  { href: "/casualties-unknown/medical", label: "Medical: How to Use Treatments" },
  { href: "/casualties-unknown/progression", label: "All 11 Layers & Drill Pods" },
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
          name: "Casualties: Unknown",
          item: `${siteUrl}/casualties-unknown`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Crafting",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "Casualties: Unknown Crafting Guide: What Should You Make First?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-10",
      dateModified: "2026-11-10",
      about: [
        { "@type": "VideoGame", name: "Casualties: Unknown" },
        { "@type": "Thing", name: "Rope and Canvas" },
        { "@type": "Thing", name: "Foliage Bag and Material Pouch" },
        { "@type": "Thing", name: "Ripped Dressing and Dressing" },
        { "@type": "Thing", name: "Canteen and Bio-chem Fluid" },
        { "@type": "Thing", name: "Cutting and Hammering qualities" },
        { "@type": "Thing", name: "Intelligence and recipe requirements" },
        { "@type": "Thing", name: "Crafting failures and ingredient condition" },
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
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
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
          title="Casualties: Unknown Crafting Guide: What Should You Make First?"
          description="Make useful early equipment, understand recipe properties and INT, and fix the problems that stop a craft from completing."
          gameTitle="Casualties: Unknown"
          gameHref="/casualties-unknown"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CasualtiesUnknownCraftingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
