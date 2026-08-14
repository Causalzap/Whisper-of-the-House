import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeAlchemyPuzzleContent from "@/data/servant-of-the-lake/alchemy-puzzle.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/alchemy-puzzle`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alchemy-symbol-board.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alchemy-2451-code.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alchemy-oil-recipe.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alchemy-aldous-boil.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alchemy-strange-fruit.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alchemy-elixir-recipe.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Alchemy Puzzle: 2451 & Elixir",
  description:
    "Solve the Servant of the Lake Alchemy puzzle with code 2451, Oil and Acid recipes, Blood, Strange Fruit, Juice, and the final Elixir order.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Alchemy Puzzle: 2451 & Elixir",
    description:
      "Use code 2451, make Oil, Acid, Blood, Strange Fruit and Juice, then mix the final Elixir in the correct order.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Alchemy symbol board in Aldous's laboratory in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Alchemy Puzzle: 2451 & Elixir",
    description:
      "Code 2451, Oil and Acid recipes, Blood, Strange Fruit, Juice, and the final Elixir solution.",
    images: [imageUrls[0]],
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
          name: "Alchemy Puzzle",
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
        "Servant of the Lake Alchemy Puzzle Guide: 2451, Blood, Strange Fruit and Elixir",
      description:
        "A complete Servant of the Lake Assisting in Alchemy solution covering the Left and Right symbols, cabinet code 2451, Egg, Oil recipe, Acid recipe, how to get Blood from Aldous, Strange Fruit, Juice, and the correct final Elixir order.",
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
          name: "Assisting in Alchemy",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Alchemy puzzle",
        },
        {
          "@type": "Thing",
          name: "Alchemy cabinet code 2451",
        },
        {
          "@type": "Thing",
          name: "Alchemy Oil recipe",
        },
        {
          "@type": "Thing",
          name: "Alchemy Acid recipe",
        },
        {
          "@type": "Thing",
          name: "Alchemy Blood",
        },
        {
          "@type": "Thing",
          name: "Strange Fruit",
        },
        {
          "@type": "Thing",
          name: "Alchemy Juice",
        },
        {
          "@type": "Thing",
          name: "Elixir recipe",
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
    id: "entering-alchemy-lab",
    label: "Where Alchemy starts",
  },
  {
    id: "left-right-symbols",
    label: "Left and Right symbols",
  },
  {
    id: "alchemy-2451-code",
    label: "Alchemy code 2451",
  },
  {
    id: "get-egg",
    label: "Get the Egg",
  },
  {
    id: "make-oil",
    label: "Make Oil",
  },
  {
    id: "make-acid",
    label: "Make Acid",
  },
  {
    id: "get-blood",
    label: "Get Blood",
  },
  {
    id: "strange-fruit",
    label: "Make Strange Fruit",
  },
  {
    id: "make-juice",
    label: "Make Juice",
  },
  {
    id: "final-elixir-recipe",
    label: "Final Elixir recipe",
  },
  {
    id: "alchemy-not-working",
    label: "Alchemy not working",
  },
  {
    id: "after-alchemy",
    label: "What to do after Alchemy",
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
  {
    href: "/servant-of-the-lake/secret-ending",
    label: "Secret Ending Guide",
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
          title="Servant of the Lake Alchemy Puzzle Guide"
          description="I decode only the symbols I need, open the 2451 cabinet, make each ingredient in dependency order, and wait until everything is ready before mixing the final Elixir."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeAlchemyPuzzleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}