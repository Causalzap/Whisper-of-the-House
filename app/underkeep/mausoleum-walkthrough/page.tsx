import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepMausoleumContent from "@/data/underkeep/mausoleum-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/mausoleum-walkthrough`;

const metadataTitle = "Underkeep Mausoleum Walkthrough: 3 Keys & Source Choice";
const metadataDescription =
  "Find Jacob and the Scroll of Binding, defeat Maltherion, Zerethic, and Thalric, open the Source Gate, and choose whether to destroy the Source.";

const articleTitle = "How Do You Complete the Underkeep Mausoleum?";
const articleDescription =
  "Rescue Jacob, bind Ixarion, collect three Golden Keys from the High Clerics, solve the fire obstacles, defeat the Source Guardians, and resolve Heart of the Source.";

const imageFilenames = [
  "underkeep-mausoleum-source-choice.webp",
  "underkeep-mausoleum-scroll-of-binding.webp",
  "underkeep-mausoleum-maltherion-golden-key.webp",
  "underkeep-mausoleum-jacob-rescue.webp",
  "underkeep-mausoleum-zerethic-boss.webp",
  "underkeep-mausoleum-thalric-golden-key.webp",
  "underkeep-mausoleum-three-key-gate.webp",
  "underkeep-mausoleum-source-core.webp",
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
    images: [{ url: imageUrls[0], alt: "Underkeep Heart of the Source decision between End it and Let it live" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "mausoleum-location", label: "How Do You Reach the Mausoleum in Underkeep?" },
  { id: "summoning-book", label: "What Should You Do With the Summoning Book?" },
  { id: "skeleton-king", label: "How Do You Defeat the Skeleton King?" },
  { id: "ixarion", label: "How Do You Summon Ixarion in the Mausoleum?" },
  { id: "golden-keys", label: "Where Are the Three Golden Keys in Underkeep?" },
  { id: "maltherion", label: "How Do You Get the Golden Key of Maltherion?" },
  { id: "brazier-puzzle", label: "How Do You Get Past the Fire Puzzles in the Mausoleum?" },
  { id: "jacob-rescue", label: "Where Do You Find and Rescue Jacob?" },
  { id: "zerethic", label: "How Do You Get the Golden Key of Zerethic?" },
  { id: "forgotten-cells", label: "How Do You Get Through the Cells of the Forgotten?" },
  { id: "thalric", label: "How Do You Get the Golden Key of Thalric?" },
  { id: "source-gate", label: "How Do You Open the Source Gate With Three Golden Keys?" },
  { id: "after-source-gate", label: "What Happens After You Enter the Source in Underkeep?" },
];

const relatedLinks = [
  { href: "/underkeep", label: "Underkeep: Regions, Tower & Progression" },
  { href: "/underkeep/fast-travel", label: "Fast Travel: Four Obelisks & Waystones" },
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
        { "@type": "ListItem", position: 3, name: "Mausoleum Walkthrough", item: pageUrl },
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
        { "@type": "Thing", name: "Scroll of Binding and Ixarion" },
        { "@type": "Thing", name: "Skeleton King" },
        { "@type": "Thing", name: "Maltherion, Zerethic, and Thalric" },
        { "@type": "Thing", name: "Three Golden Keys and Source Gate" },
        { "@type": "Thing", name: "Source Guardians and Heart of the Source choices" },
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
          <UnderkeepMausoleumContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
