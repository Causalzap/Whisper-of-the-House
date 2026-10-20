
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import Tropico7GuideContent from "@/data/tropico-7/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tropico-7`;

const metadataTitle =
  "Tropico 7 Demo Guide: Little Great Britain Walkthrough";

const metadataDescription =
  "Complete the Tropico 7 demo with Cattle Ranches, Leather exports, mandate extensions, Revolutionary tasks, Neuschwanstein Castle, and the Chapter 1 ending.";

const articleDescription =
  "Complete Little Great Britain from the first Cattle Ranches and Leather export to Crown assignments, Revolutionary recruitment, Neuschwanstein Castle, and the island exchange that ends Chapter 1.";

const imageUrls = [
  `${siteUrl}/images/tropico-7/little-great-britain-cattle-ranches.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-ranch-tannery.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-transport-threshold.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-revolutionary-newspaper.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-gold-food-objectives.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-planks-objective.webp`,
  `${siteUrl}/images/tropico-7/tropico-7-pirate-cove-castle-operation.webp`,
  `${siteUrl}/images/tropico-7/tropico-7-stolen-castle-placement.webp`,
  `${siteUrl}/images/tropico-7/tropico-7-chapter-one-complete.webp`,
];

const heroImage = imageUrls[7];

const toc = [
  {
    id: "little-great-britain",
    label: "Little Great Britain opening",
  },
  {
    id: "leather-production",
    label: "Leather production & transport",
  },
  {
    id: "economy",
    label: "Early economy & trade profit",
  },
  {
    id: "mandate",
    label: "Extend your mandate",
  },
  {
    id: "independence",
    label: "Independence & Revolutionaries",
  },
  {
    id: "later-objectives",
    label: "Gold & Food Satisfaction",
  },
  {
    id: "planks",
    label: "Logging Camps & Planks",
  },
  {
    id: "demo-building-systems",
    label: "Terraforming & politics",
  },
  {
    id: "next-objective",
    label: "Finish Chapter 1",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [];

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
        alt: "Tropico 7 Neuschwanstein Castle operation completed, with the landmark ready for placement in Little Great Britain",
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
          name: "Tropico 7 Guide",
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
      url: pageUrl,
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-18",
      dateModified: "2026-10-20",
      about: [
        {
          "@type": "VideoGame",
          name: "Tropico 7",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Little Great Britain",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 demo campaign",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Cattle Ranches and Leather production",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 transportation of goods",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 trade profit",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Colonial Era mandate",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Revolutionary objectives",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Food Satisfaction",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Gold and Planks exports",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Terraforming",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Political Matrix",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Pirate Cove",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Neuschwanstein Castle",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Chapter 1 ending",
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
          title="Tropico 7 Demo Guide: Little Great Britain Walkthrough"
          description={articleDescription}
          gameTitle="Tropico 7"
          gameHref="/tropico-7"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Tropico7GuideContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Tropico 7"
          heading="Finished the Tropico 7 demo? Find your next game."
          description="Use the quick recommender to find another city builder, management sim, or strategy game that fits your mood, platform, and play mode, or build a Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}
