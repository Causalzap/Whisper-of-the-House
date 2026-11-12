
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnderkeepContent from "@/data/underkeep/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/underkeep`;
const pageUrl = hubUrl;

const metadataTitle = "Underkeep Walkthrough & Progression Guide";

const metadataDescription =
  "Follow the Underkeep walkthrough from the Silver Key and village to the Mausoleum, Soulforge, and Tower. Find key requirements, progression steps, and the ending.";

const articleTitle =
  "Underkeep Walkthrough: Where Should You Go Next?";

const articleDescription =
  "Find your next objective in Underkeep, from reaching the village and unlocking Fast Travel to exploring the Mausoleum, Soulforge, and final Tower.";

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
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Underkeep Tower seal reacting to a Key Fragment",
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
    id: "starting-underkeep",
    label: "Getting Started",
  },
  {
    id: "reach-village",
    label: "Reach the Village",
  },
  {
    id: "progression",
    label: "Progression Route",
  },
  {
    id: "village-first-steps",
    label: "Village First Steps",
  },
  {
    id: "where-to-go-next",
    label: "Where to Go Next",
  },
  {
    id: "northern-expedition",
    label: "Northern Expedition",
  },
  {
    id: "dwarven-camp",
    label: "Dwarven Camp & Mining",
  },
  {
    id: "underkeep-tower",
    label: "Underkeep Tower",
  },
  {
    id: "mausoleum-progress",
    label: "Mausoleum & Source",
  },
  {
    id: "fangroot-forest",
    label: "Fangroot Forest",
  },
  {
    id: "what-next",
    label: "After Heart of the Source",
  },
];

const relatedLinks = [
  {
    href: "/underkeep/races-classes",
    label: "Races & Classes: Skills, Traits & Parties",
  },
  {
    href: "/underkeep/beginner-guide",
    label: "Beginner Guide: Combat, Rest & Food",
  },
  {
    href: "/underkeep/early-game-walkthrough",
    label: "Early Game: Silver Key & Village",
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
    href: "/underkeep/soulforge-walkthrough",
    label: "Soulforge: Dragon, Garden Puzzles & Soulcleaver",
  },
  {
    href: "/underkeep/tower-walkthrough",
    label: "Tower: Puzzles, Architect, Torin & Ending",
  },
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
          name: "Underkeep",
          item: hubUrl,
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-06",
      dateModified: "2026-11-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Underkeep",
        },
        {
          "@type": "Thing",
          name: "Underkeep walkthrough and progression",
        },
        {
          "@type": "Thing",
          name: "Village of Underkeep",
        },
        {
          "@type": "Thing",
          name: "Northern Carolyn missing expedition",
        },
        {
          "@type": "Thing",
          name: "Obelisks and Teleportation Stone",
        },
        {
          "@type": "Thing",
          name: "Mausoleum and Heart of the Source",
        },
        {
          "@type": "Thing",
          name: "Dwarven Camp mining training",
        },
        {
          "@type": "Thing",
          name: "Soulforge and Soulcleaver",
        },
        {
          "@type": "Thing",
          name: "Underkeep Tower and Key Fragments",
        },
        {
          "@type": "Thing",
          name: "Architect and Torin final encounters",
        },
        {
          "@type": "Thing",
          name: "Fangroot Forest quests",
        },
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c",
            ),
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
          <UnderkeepContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
