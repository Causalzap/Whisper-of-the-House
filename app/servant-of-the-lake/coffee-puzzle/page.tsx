import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeCoffeePuzzleContent from "@/data/servant-of-the-lake/coffee-puzzle.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/coffee-puzzle`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-coffee-pointing-clues.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-coffee-315-clue.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-coffee-315-code.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-ground-coffee.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Coffee Puzzle: 315 Code & Beans",
  description:
    "Solve the Servant of the Lake Coffee puzzle with code 315, get the Coffee Beans, grind them, and serve Aldous before bringing coffee to William.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Coffee Puzzle: 315 Code & Beans",
    description:
      "Use Alexandra, Aldous, and William's pointing clues to get 315, unlock the Coffee Beans, grind them, and finish Preparing Coffee.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "315 entered to unlock the Coffee Beans in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Coffee Puzzle: 315 Code & Beans",
    description:
      "Get the 315 Coffee code, unlock the Coffee Beans, grind them, and finish the Day 2 Preparing Coffee task.",
    images: [imageUrls[2]],
  },
};

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
          name: "Servant of the Lake Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Coffee Puzzle",
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
      headline:
        "Servant of the Lake Coffee Puzzle Guide: 315 Code, Coffee Beans and Ground Coffee",
      description:
        "A complete Servant of the Lake Preparing Coffee solution explaining Alexandra 3, Aldous 1, William 5, the 315 Coffee code, how to get Coffee Beans, grind them into Ground Coffee, serve Aldous, and continue to William.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
        },
        {
          "@type": "Thing",
          name: "Preparing Coffee",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Coffee puzzle",
        },
        {
          "@type": "Thing",
          name: "Coffee code 315",
        },
        {
          "@type": "Thing",
          name: "Coffee Beans",
        },
        {
          "@type": "Thing",
          name: "Ground Coffee",
        },
        {
          "@type": "Thing",
          name: "Alexandra Vanderboom",
        },
        {
          "@type": "Thing",
          name: "Aldous Vanderboom",
        },
        {
          "@type": "Thing",
          name: "William Vanderboom",
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

const toc = [
  {
    id: "when-coffee-starts",
    label: "When Coffee starts",
  },
  {
    id: "coffee-code-clue",
    label: "Coffee code clue",
  },
  {
    id: "alexandra-three",
    label: "Alexandra = 3",
  },
  {
    id: "aldous-one",
    label: "Aldous = 1",
  },
  {
    id: "william-five",
    label: "William = 5",
  },
  {
    id: "coffee-code-315",
    label: "Coffee code 315",
  },
  {
    id: "grind-coffee",
    label: "Grind the Coffee Beans",
  },
  {
    id: "serve-aldous",
    label: "Serve Aldous",
  },
  {
    id: "bring-coffee-william",
    label: "Bring Coffee to William",
  },
  {
    id: "coffee-puzzle-stuck",
    label: "Coffee puzzle stuck",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/walkthrough",
    label: "Servant of the Lake Walkthrough",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "Puzzle Solutions & Codes",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Servant of the Lake Coffee Puzzle Guide"
          description="I use the three Vanderboom pointing clues to get 315, unlock the Coffee Beans, grind them, serve Aldous, and then carry the coffee to William."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeCoffeePuzzleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}