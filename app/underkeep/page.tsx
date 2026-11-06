import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepContent from "@/data/underkeep/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = hubUrl;

const metadataTitle = "Underkeep Guide: How to Start, Progress & Open the Tower";
const metadataDescription =
  "Reach Village of Underkeep, follow the main regions, learn Dwarven mining, find Tower Key Fragments, and decide what to do after the Source.";

const articleTitle = "How Do You Start and Progress in Underkeep?";
const articleDescription =
  "Follow the route into Village of Underkeep, choose your next region, investigate the Source, and learn how the tower seal, mining skills, and side quests fit together.";

const imageFilenames = [
  "underkeep-tower-four-key-fragments.webp",
  "underkeep-dwarven-mining-training-costs.webp",
  "underkeep-torin-key-fragment-price.webp",
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
    images: [{ url: imageUrls[0], alt: "Underkeep Tower seal reacting to a Key Fragment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "starting-underkeep", label: "What Should You Do First in Underkeep?" },
  { id: "reach-village", label: "How Do You Reach Village of Underkeep?" },
  { id: "progression", label: "What Is the Recommended Progression Route in Underkeep?" },
  { id: "village-first-steps", label: "What Should You Do First in Village of Underkeep?" },
  { id: "where-to-go-next", label: "Where Should You Explore After the Village?" },
  { id: "northern-expedition", label: "Where Do You Find the Missing Northern Expedition?" },
  { id: "dwarven-camp", label: "How Do You Learn Mining and Clear Hard Cave-ins in Underkeep?" },
  { id: "underkeep-tower", label: "How Do You Open the Sealed Underkeep Tower?" },
  { id: "mausoleum-progress", label: "How Do You Progress Through the Mausoleum?" },
  { id: "fangroot-forest", label: "What Can You Find in Fangroot Forest?" },
  { id: "what-next", label: "What Should You Do After Heart of the Source?" },
];

const relatedLinks = [
  { href: "/underkeep/races-classes", label: "Races & Classes: Skills, Traits & Parties" },
  { href: "/underkeep/beginner-guide", label: "Beginner: Combat, Rest & Food" },
  { href: "/underkeep/early-game-walkthrough", label: "Early Game: Silver Key & Village" },
  { href: "/underkeep/fast-travel", label: "Fast Travel: Four Obelisks & Waystones" },
  { href: "/underkeep/mausoleum-walkthrough", label: "Mausoleum: Golden Keys & Source Choice" },
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
        { "@type": "Thing", name: "Village of Underkeep and region progression" },
        { "@type": "Thing", name: "Northern Carolyn missing expedition" },
        { "@type": "Thing", name: "Dwarven Camp mining training" },
        { "@type": "Thing", name: "Underkeep Tower Key Fragments" },
        { "@type": "Thing", name: "Fangroot Forest quests" },
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
          <UnderkeepContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
