import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepFastTravelContent from "@/data/underkeep/fast-travel.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/fast-travel`;

const metadataTitle = "Underkeep Fast Travel: All 4 Obelisks & Teleportation Stone";
const metadataDescription =
  "Find all four Underkeep Obelisks, reach the fallen monolith, copy the Wards of the West runes, and get the Teleportation Stone to use Waystones.";

const articleTitle = "How Do You Unlock Fast Travel in Underkeep?";
const articleDescription =
  "Find the four rune-covered Obelisks, including the hidden path, fallen stone, and Orc Encampment, then return to Khelebar for the Teleportation Stone.";

const imageFilenames = [
  "underkeep-fast-travel-orc-encampment-obelisk.webp",
  "underkeep-fast-travel-first-obelisk-runes.webp",
  "underkeep-fast-travel-hidden-obelisk.webp",
  "underkeep-fast-travel-fallen-obelisk-pit.webp",
  "underkeep-fast-travel-four-points-clue.webp",
  "underkeep-fast-travel-obelisk-rune-record.webp",
  "underkeep-fast-travel-teleportation-stone-reward.webp",
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
    images: [{ url: imageUrls[0], alt: "Fourth Underkeep Obelisk located along the Orc Encampment route" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "start-fast-travel", label: "How Do You Start the Fast Travel Quest in Underkeep?" },
  { id: "obelisk-locations", label: "Where Can You Find the Obelisks for Fast Travel?" },
  { id: "first-obelisk", label: "Where Can You Find an Obelisk Near Underkeep Tower?" },
  { id: "hidden-obelisk", label: "Where Is the Hidden Obelisk Behind the Bushes?" },
  { id: "fallen-obelisk", label: "How Do You Reach the Fallen Obelisk in Underkeep?" },
  { id: "four-path-puzzle", label: "What Does the Four Points Puzzle Mean in Underkeep?" },
  { id: "beetle-tunnels", label: "How Do You Copy the Runes From the Broken Obelisk?" },
  { id: "orc-encampment", label: "Where Is the Obelisk at the Orc Encampment?" },
  { id: "four-rune-records", label: "How Do You Know When You Have All Four Obelisk Runes?" },
  { id: "teleportation-stone", label: "How Do You Get the Teleportation Stone?" },
  { id: "use-waystones", label: "How Do You Use Waystones After Unlocking Fast Travel?" },
  { id: "fast-travel-not-working", label: "Why Is Fast Travel Still Locked in Underkeep?" },
  { id: "after-unlocking", label: "What Should You Do After Unlocking Fast Travel?" },
];

const relatedLinks = [
  { href: "/underkeep", label: "Underkeep: Regions, Tower & Progression" },
  { href: "/underkeep/early-game-walkthrough", label: "Early Game: Silver Key & Village" },
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
        { "@type": "ListItem", position: 3, name: "Fast Travel", item: pageUrl },
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
        { "@type": "Thing", name: "Wards of the West quest" },
        { "@type": "Thing", name: "Four Obelisk locations" },
        { "@type": "Thing", name: "Fallen Obelisk and Four Points puzzle" },
        { "@type": "Thing", name: "Teleportation Stone" },
        { "@type": "Thing", name: "Waystone network and troubleshooting" },
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
          <UnderkeepFastTravelContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
