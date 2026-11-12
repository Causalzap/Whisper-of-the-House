import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CasualtiesUnknownGuideContent from "@/data/casualties-unknown/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/casualties-unknown`;

const metadataTitle = "Casualties: Unknown Beginner Guide: What to Do First";

const metadataDescription =
  "New to Casualties: Unknown? Learn what to do first, manage your inventory, survive early falls, open locked crates, and save your run between layers.";

const articleDescription =
  "Learn how to start Casualties: Unknown, choose your first-run settings, collect supplies near the starting pod, manage your hands and inventory, survive dangerous drops, open locked and code crates, save between layers, and unlock Milky and Dune.";

const imageUrls = [
  `${siteUrl}/images/casualties-unknown/casualties-unknown-starting-pod-plastic.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-lockpicking-minigame.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Start your first Casualties: Unknown run, secure essential supplies, learn lockpicking, and save safely between layers.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Chunk of Plastic found near the starting pod in Casualties: Unknown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Get started with inventory, lockpicking, safe descents, and Save and Quit in Casualties: Unknown.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "first-run-settings", label: "First-Run Settings" },
  { id: "first-five-minutes", label: "First Five Minutes" },
  { id: "hands-mouth-inventory", label: "Hands & Inventory" },
  { id: "survive-first-drop", label: "Avoid Fall Damage" },
  { id: "survival-warnings", label: "Survival Warnings" },
  { id: "open-crates-lockpicking", label: "Lockpicking" },
  { id: "loot-code-crates", label: "Code Crates" },
  { id: "save-quit", label: "Save and Quit" },
  { id: "characters-modes", label: "Unlock Milky & Dune" },
  { id: "how-far-do-you-go", label: "How Far to Descend" },
  { id: "demo-vs-full-game", label: "Demo vs. Full Game" },
];

const relatedLinks = [
  { href: "/casualties-unknown/progression", label: "All 11 Layers & How to Reach the Surface" },
  { href: "/casualties-unknown/crafting", label: "Crafting: First Recipes, Storage & INT" },
  { href: "/casualties-unknown/medical", label: "Medical: Bleeding, Infection & Fractures" },
  { href: "/casualties-unknown/endings", label: "All Three Endings: Bio-pod, Escape & M.E.R.C." },
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
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "Casualties: Unknown Beginner Guide: What Should You Do First?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-11-10",
      about: [
        { "@type": "VideoGame", name: "Casualties: Unknown" },
        { "@type": "Thing", name: "First-run settings and controls" },
        { "@type": "Thing", name: "Hands, mouth slot, and inventory" },
        { "@type": "Thing", name: "Fall damage and survival warnings" },
        { "@type": "Thing", name: "Lockpicking and code crates" },
        { "@type": "Thing", name: "Save and Quit at layer transitions" },
        { "@type": "Thing", name: "Character unlocks and game modes" },
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
          title="Casualties: Unknown Beginner Guide: What Should You Do First?"
          description="Start your first run with the right settings, collect supplies around the starting pod, keep your light and inventory secure, and avoid dangerous falls before descending deeper."
          gameTitle="Casualties: Unknown"
          gameHref="/casualties-unknown"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CasualtiesUnknownGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
