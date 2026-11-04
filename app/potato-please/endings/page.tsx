import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PotatoPleaseEndingsContent from "@/data/potato-please/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/potato-please`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle = "Potato Please All Endings: Hidden Key & Escape Guide";
const metadataDescription =
  "Find the Golden Key after the 60,000-potato quota, open the Iron Door, and choose Northern Front, Varenka, or Western Industry for all three endings.";

const articleTitle = "How Do You Get All Endings in Potato Please?";
const articleDescription =
  "Finish the final quota, peel the parachute-delivered potato for the Golden Key, open the Iron Door, choose among the three train destinations, and revisit endings from a suitable save.";

const imageFilenames = [
  "potato-please-train-route-selection.webp",
  "potato-please-hidden-key.webp",
  "potato-please-villagers-ending.webp",
];
const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/potato-please/${file}`,
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
        alt: "Potato Please train control panel showing Western Industry, Varenka, and Northern Front routes",
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
  { id: "all-endings", label: "Three Endings at a Glance" },
  { id: "finish-quota", label: "Unlock the Final Escape" },
  { id: "hidden-key", label: "Find the Golden Key" },
  { id: "iron-door", label: "Open the Iron Door" },
  { id: "train-route-selection", label: "Choose a Train Route" },
  { id: "resistance-ending", label: "Resistance: Traitor" },
  { id: "villagers-ending", label: "Villagers: The Last Harvest" },
  { id: "front-line-ending", label: "Ministry: For the Motherland" },
  { id: "all-endings-one-save", label: "All Endings on One Save" },
  { id: "ending-questions", label: "Ending Questions" },
];

const relatedLinks = [
  { href: "/potato-please", label: "Progression: First Shift to Final Quota" },
  { href: "/potato-please/automation", label: "Automation: Process the Final Potatoes" },
  { href: "/potato-please/achievements", label: "All 20 Achievements & Checklist" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Potato Please", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Get All Endings", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      about: [
        { "@type": "VideoGame", name: "Potato Please" },
        { "@type": "Thing", name: "Golden Key hidden in a parachute-delivered potato" },
        { "@type": "Thing", name: "Iron Door and railway access" },
        { "@type": "Thing", name: "Northern Front Ministry ending" },
        { "@type": "Thing", name: "Varenka Villagers ending" },
        { "@type": "Thing", name: "Western Industry Resistance ending" },
        { "@type": "Thing", name: "Multiple endings and saves" },
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
          description="Find the Golden Key, unlock the Iron Door, and use the train controls to reach the Ministry, Villagers, and Resistance endings."
          gameTitle="Potato Please"
          gameHref="/potato-please"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PotatoPleaseEndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
