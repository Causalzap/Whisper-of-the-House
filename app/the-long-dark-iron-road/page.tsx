
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheLongDarkIronRoadContent from "@/data/the-long-dark-iron-road/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-iron-road`;

const metadataTitle =
  "The Long Dark: Iron Road Guide — How to Start & Progress";

const metadataDescription =
  "Start Iron Road in Survival Mode, reach Cauldron Island, follow Alice's clues, pack for Anna Island, and learn how the Whale-Oil Heater works.";

const articleTitle =
  "How Do You Start and Progress in The Long Dark: Iron Road?";

const articleDescription =
  "Choose a Survival save, reach Cauldron Island, follow Alice's objectives, prepare for Anna Island, and compare Whale-Oil Heater and train fuel use.";

const imageUrls = [
  `${siteUrl}/images/the-long-dark-iron-road/anna-island-church-entrance.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-start",
    label: "How to start Iron Road",
  },
  {
    id: "first-objectives",
    label: "Where to go next",
  },
  {
    id: "packing",
    label: "What to bring to Anna Island",
  },
  {
    id: "whale-oil-heater",
    label: "Portable Whale-Oil Heater",
  },
  {
    id: "wax-cylinders",
    label: "Do you need all 16 Wax Cylinders?",
  },
  {
    id: "launch-content",
    label: "Available Early Access content",
  },
  {
    id: "missing-dlc",
    label: "Iron Road not showing up",
  },
];

const relatedLinks = [
  {
    href: "/the-long-dark-iron-road/fulmar-boat",
    label: "Fulmar Boat: Location & Supplies",
  },
  {
    href: "/the-long-dark-iron-road/anna-island-walkthrough",
    label: "Anna Island Walkthrough",
  },
  {
    href: "/the-long-dark-iron-road/prototype-train-guide",
    label: "Prototype Train: Driving & Repairs",
  },
];

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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "The church on Anna Island in The Long Dark Iron Road",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "The Long Dark: Iron Road",
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
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-28",
      dateModified: "2026-10-29",
      about: [
        {
          "@type": "VideoGame",
          name: "The Long Dark: Iron Road",
          url: pageUrl,
        },
        {
          "@type": "Place",
          name: "Cauldron Island",
        },
        {
          "@type": "Place",
          name: "Anna Island",
        },
        {
          "@type": "Thing",
          name: "Fulmar boat",
        },
        {
          "@type": "Thing",
          name: "Prototype Train",
        },
        {
          "@type": "Thing",
          name: "Portable Whale-Oil Heater",
        },
        {
          "@type": "Thing",
          name: "Wax Cylinders",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="The Long Dark: Iron Road"
          gameHref="/the-long-dark-iron-road"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheLongDarkIronRoadContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
