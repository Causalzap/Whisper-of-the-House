import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeLaundryPuzzleContent from "@/data/servant-of-the-lake/laundry-puzzle.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/laundry-puzzle`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-laundry-dirty-clothes.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-laundry-baby-diaper.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-laundry-clothesline.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-laundry-clothes-order.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Laundry Puzzle: 0-6 Order & Key",
  description:
    "Solve the Servant of the Lake laundry puzzle, arrange all seven clothes from 0 to 6 lines, get the Bathroom Key, and continue to Alexandra's bath.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Laundry Puzzle: 0-6 Order & Key",
    description:
      "Wash every item, hang all seven pieces, arrange them from 0 to 6 line markings, and get the Bathroom Key for Alexandra's bath.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[3],
        width: 1280,
        height: 720,
        alt: "Correct laundry clothes order from zero to six lines in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Laundry Puzzle: 0-6 Order & Key",
    description:
      "Arrange the seven laundry pieces from 0 to 6 lines to get the Bathroom Key and continue Day 2.",
    images: [imageUrls[3]],
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
          name: "Laundry Puzzle",
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
        "Servant of the Lake Laundry Puzzle Guide: Clothes Order and Bathroom Key",
      description:
        "A complete Servant of the Lake Doing the Washing solution covering the dirty clothes, baby and diaper, wet laundry, clothesline puzzle, correct 0-to-6 line order, and the Bathroom Key used for Helping with Bathing.",
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
          name: "Doing the Washing",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake laundry puzzle",
        },
        {
          "@type": "Thing",
          name: "Laundry clothes order",
        },
        {
          "@type": "Thing",
          name: "0 to 6 line order",
        },
        {
          "@type": "Thing",
          name: "Bathroom Key",
        },
        {
          "@type": "Thing",
          name: "Helping with Bathing",
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
    id: "when-laundry-starts",
    label: "When Laundry starts",
  },
  {
    id: "collect-dirty-clothes",
    label: "Collect the dirty clothes",
  },
  {
    id: "wash-diaper",
    label: "Wash the diaper",
  },
  {
    id: "hang-laundry",
    label: "Hang the laundry",
  },
  {
    id: "clothes-order",
    label: "Clothes order 0-6",
  },
  {
    id: "bathroom-key",
    label: "Get the Bathroom Key",
  },
  {
    id: "laundry-not-working",
    label: "Laundry puzzle not working",
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
    href: "/servant-of-the-lake/bathroom-puzzle",
    label: "Bathroom Puzzle Guide",
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
          title="Servant of the Lake Laundry Puzzle Guide"
          description="I collect every dirty item, wash the baby's diaper with the laundry, hang all seven pieces, arrange them from 0 to 6 lines, and leave only after getting the Bathroom Key."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeLaundryPuzzleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}