
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Tropico7GuideContent from "@/data/tropico-7/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tropico-7/`;

const metadataTitle =
  "Tropico 7 Demo Guide: Little Great Britain Walkthrough";

const metadataDescription =
  "Follow Tropico 7's Little Great Britain demo with cattle ranches, Leather exports, transport fixes, mandate extensions, and independence tasks.";

const articleDescription =
  "Start Little Great Britain with Cattle Ranches and Leather production, fix delayed shipments, manage Crown and Revolutionary tasks, protect your mandate, and work through the demo's independence objectives.";

const imageUrls = [
  `${siteUrl}/images/tropico-7/little-great-britain-cattle-ranches.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-ranch-tannery.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-transport-threshold.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-revolutionary-newspaper.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-gold-food-objectives.webp`,
  `${siteUrl}/images/tropico-7/little-great-britain-planks-objective.webp`,
];

const heroImage = imageUrls[1];

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
    label: "What to do next",
  },
];

const relatedLinks: { href: string; label: string }[] = [];

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
        alt: "Tropico 7 Tannery placement in Little Great Britain, showing the early Leather production setup",
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
      dateModified: "2026-10-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Tropico 7",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 demo",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Little Great Britain",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 campaign walkthrough",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Leather production",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 transportation of goods",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 economy and trade",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 mandate extensions",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 independence",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Revolutionary faction",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Food Satisfaction",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Gold exports",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Planks exports",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Terraforming",
        },
        {
          "@type": "Thing",
          name: "Tropico 7 Political Matrix",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          gameHref="/tropico-7/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Tropico7GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
