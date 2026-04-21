import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LuckyTowerUltimateIndexContent from "@/data/lucky-tower-ultimate/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lucky-tower-ultimate`;

export const metadata: Metadata = {
  title: "Lucky Tower Ultimate Guide Hub",
  description:
    "Master Lucky Tower Ultimate's hidden mechanics. Dive into our hub for guides on fixed potion recipes, companion synergies, the pipeline economy, and true endgame progression.",
  alternates: {
    canonical: pageUrl,
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
          name: "Lucky Tower Ultimate",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      name: "Lucky Tower Ultimate Guide Hub",
      description:
        "Master Lucky Tower Ultimate's hidden mechanics. Dive into our hub for guides on fixed potion recipes, companion synergies, the pipeline economy, and true endgame progression.",
      inLanguage: "en",
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
      about: [
        {
          "@type": "VideoGame",
          name: "Lucky Tower Ultimate",
        },
        {
          "@type": "Thing",
          name: "Guide Hub",
        },
        {
          "@type": "Thing",
          name: "Potions",
        },
        {
          "@type": "Thing",
          name: "Companions",
        },
        {
          "@type": "Thing",
          name: "Pipeline System",
        },
        {
          "@type": "Thing",
          name: "Achievements",
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Lucky Tower Ultimate Guide Hub"
          description="Master Lucky Tower Ultimate's hidden mechanics. Dive into our hub for guides on fixed potion recipes, companion synergies, the pipeline economy, and true endgame progression."
          gameTitle="Lucky Tower Ultimate"
          gameHref="/lucky-tower-ultimate"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 21, 2026"
          toc={[
            {
              id: "core-systems",
              label: "Core Systems & Guides",
            },
            {
              id: "troubleshooting",
              label: "Quick Troubleshooting",
            },
            {
              id: "faq",
              label: "Frequently Asked Questions",
            },
          ]}
          relatedLinks={[
            {
              href: "/lucky-tower-ultimate/potion-recipes-and-permanent-buffs-guide/",
              label: "Lucky Tower Ultimate potion recipes and permanent buffs guide",
            },
            {
              href: "/lucky-tower-ultimate/companions-guide/",
              label: "Lucky Tower Ultimate companions guide",
            },
            {
              href: "/lucky-tower-ultimate/pipeline-guide/",
              label: "Lucky Tower Ultimate pipeline guide",
            },
            {
              href: "/lucky-tower-ultimate/100-achievement-guide/",
              label: "Lucky Tower Ultimate 100% achievement guide",
            },
          ]}
        >
          <LuckyTowerUltimateIndexContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}