import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepSoulforgeContent from "@/data/underkeep/soulforge-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = `${hubUrl}/soulforge-walkthrough`;

const metadataTitle =
  "Underkeep Soulforge Walkthrough: All 8 Keys & Puzzles";
const metadataDescription =
  "Follow the Underkeep Soulforge walkthrough: spare the dragon, find eight Blue Key Spheres, solve the garden puzzles, defeat the Giant, and get Soulcleaver.";

const articleTitle =
  "Underkeep Soulforge Walkthrough: How Do You Find All 8 Keys?";
const articleDescription =
  "Join Korr's expedition, reach the Soulforge, collect four Blue Key Spheres from each garden, solve the deeper puzzles, and claim Soulcleaver from Durok.";

// Use only image files that you have added to public/images/underkeep/.
const imageFilenames = [
  "underkeep-soulforge-west-garden-map.webp",
  "underkeep-soulforge-five-symbol-plates.webp",
  "underkeep-soulforge-spare-dragon-choice.webp",
  "underkeep-soulforge-yellow-purple-seals.webp",
  "underkeep-soulforge-blue-key-sphere.webp",
  "underkeep-soulforge-three-offerings.webp",
  "underkeep-soulforge-eight-key-door.webp",
  "underkeep-soulforge-seven-statues-mirror-solved.webp",
  "underkeep-soulforge-giant-incinerator.webp",
  "underkeep-soulforge-soul-cleaver.webp",
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
    images: [
      {
        url: imageUrls[0],
        alt: "Underkeep Soulforge West Garden map showing puzzles, pressure plates and passages",
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
  {
    id: "dwarven-expedition",
    label: "Dwarven Expedition",
  },
  {
    id: "sanctum-symbols",
    label: "Five-Symbol Puzzle",
  },
  {
    id: "spare-dragon",
    label: "Spare the Dragon",
  },
  {
    id: "soulforge-entry",
    label: "Colored Seals",
  },
  {
    id: "eight-garden-keys",
    label: "All 8 Blue Key Spheres",
  },
  {
    id: "east-garden",
    label: "East Garden Keys",
  },
  {
    id: "west-garden-access",
    label: "West Garden Access",
  },
  {
    id: "west-garden",
    label: "West Garden Puzzles",
  },
  {
    id: "soulforge-depths",
    label: "Soulforge Depths",
  },
  {
    id: "giant-furnace",
    label: "Giant Incinerator",
  },
  {
    id: "soul-cleaver",
    label: "Soulcleaver",
  },
  {
    id: "soulforge-stuck",
    label: "Troubleshooting",
  },
];


const relatedLinks = [
  {
    href: "/underkeep",
    label: "Underkeep Walkthrough & Progression",
  },
  {
    href: "/underkeep/fast-travel",
    label: "Fast Travel: Obelisks & Waystones",
  },
  {
    href: "/underkeep/mausoleum-walkthrough",
    label: "Mausoleum: Golden Keys & Source",
  },
  {
    href: "/underkeep/tower-walkthrough",
    label: "Tower: Architect, Torin & Ending",
  },
];


// Change both dates if the actual first publication is on another day.
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
          name: "Soulforge Walkthrough",
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
        { "@type": "Thing", name: "Dwarven Expedition and Dragon" },
        { "@type": "Thing", name: "Eight Blue Key Spheres" },
        { "@type": "Thing", name: "East Garden and West Garden puzzles" },
        { "@type": "Thing", name: "Soulforge Depths and Giant Incinerator" },
        { "@type": "Thing", name: "Soulcleaver, Axe of the Deep Forge" },
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
          <UnderkeepSoulforgeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
