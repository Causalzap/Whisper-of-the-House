import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepEarlyGameContent from "@/data/underkeep/early-game-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/early-game-walkthrough`;

const metadataTitle = "Underkeep Early Game Walkthrough: Silver Key & Village";
const metadataDescription =
  "Follow Underkeep through Hollow Grave Tunnels, the throwing gate, Orc Warehouse, Chieftain Key, Silver Key, Jacob’s Cottage, and Garric’s village entrance.";

const articleTitle = "How Do You Reach Village of Underkeep?";
const articleDescription =
  "Follow the starting forest and underground routes, open the thrown-object gate, find the Silver Key, and finish Garric’s request to enter the village.";

const imageFilenames = [
  "underkeep-silver-key-location.webp",
  "underkeep-traveler-supply-key.webp",
  "underkeep-underground-throwing-gate.webp",
  "underkeep-orc-chieftain-key.webp",
  "underkeep-silver-key-forest-gate.webp",
  "underkeep-garric-village-entry.webp",
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
    images: [{ url: imageUrls[0], alt: "Underkeep Silver Key pickup along the early underground route" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "starting-road", label: "Where Do You Go After Starting Underkeep?" },
  { id: "merchant-cart", label: "How Do You Help the Traveler Attacked by Rats?" },
  { id: "hollow-grave-tunnels", label: "How Do You Get Through Hollow Grave Tunnels?" },
  { id: "underground-gate", label: "How Do You Open the Gate That Requires a Thrown Object?" },
  { id: "warehouse-orcs", label: "How Do You Get Through the Warehouse and Orc Chieftain?" },
  { id: "early-keys", label: "Which Early Keys Open Which Doors and Chests?" },
  { id: "silver-key", label: "Where Do You Use the Silver Key?" },
  { id: "jacobs-cottage", label: "What Should You Do at Jacob's Cottage?" },
  { id: "garric", label: "How Do You Get Past Garric and Enter Village of Underkeep?" },
  { id: "village", label: "What Should You Do After Entering Village of Underkeep?" },
];

const relatedLinks = [
  { href: "/underkeep", label: "Underkeep: Regions, Tower & Progression" },
  { href: "/underkeep/beginner-guide", label: "Beginner: Combat, Rest & Food" },
  { href: "/underkeep/fast-travel", label: "Fast Travel: Four Obelisks & Waystones" },
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
        { "@type": "ListItem", position: 3, name: "Early Game Walkthrough", item: pageUrl },
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
        { "@type": "Thing", name: "Starting forest route" },
        { "@type": "Thing", name: "Hollow Grave Tunnels" },
        { "@type": "Thing", name: "Thrown-object gate mechanism" },
        { "@type": "Thing", name: "Orc Chieftain and Silver Key" },
        { "@type": "Thing", name: "Garric and Village of Underkeep" },
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
          <UnderkeepEarlyGameContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
