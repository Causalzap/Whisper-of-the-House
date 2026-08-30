import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FactoryGuideContent from "@/data/big-ambitions/factory-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/factory-guide`;

const metadataTitle =
  "Big Ambitions Factory Guide: Manufacturing & Production";

const metadataDescription =
  "Build a Big Ambitions 1.0 Factory, manage raw materials and workers, scale production, fix stopped lines, and avoid costly overproduction.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-factory-building-floor-area.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-factory-production-floor.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-electronics-store-factory-products.webp`,
];

const toc = [
  {
    id: "when-factory-makes-sense",
    label: "When a Factory makes sense",
  },
  {
    id: "choose-factory-building",
    label: "Choose a Factory building",
  },
  {
    id: "factory-layout",
    label: "Factory layout",
  },
  {
    id: "choose-products",
    label: "Choose what to produce",
  },
  {
    id: "raw-materials",
    label: "Raw materials",
  },
  {
    id: "factory-storage",
    label: "Factory storage",
  },
  {
    id: "factory-workers",
    label: "Factory Workers",
  },
  {
    id: "add-more-machines",
    label: "Add production lines",
  },
  {
    id: "scale-across-stores",
    label: "Scale across stores",
  },
  {
    id: "overproduction",
    label: "Overproduction in 1.0",
  },
  {
    id: "factory-not-producing",
    label: "Factory not producing",
  },
  {
    id: "factory-expansion",
    label: "Expand the Factory",
  },
  {
    id: "when-factory-pays-off",
    label: "When the Factory pays off",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/progression-guide",
    label: "Progression Guide & What to Unlock Next",
  },
  {
    href: "/big-ambitions/best-businesses",
    label: "Best Businesses by Progression Stage",
  },
  {
    href: "/big-ambitions/warehouse-logistics-guide",
    label: "Warehouse & Logistics Guide",
  },
  {
    href: "/big-ambitions/employees-hr-guide",
    label: "Employees, HR Managers & Headhunters",
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
    description:
      "Set up and scale a Big Ambitions 1.0 Factory from building choice and raw materials through Factory Workers, production bottlenecks, and overproduction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Big Ambitions Factory production floor with manufacturing machines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "A practical Big Ambitions 1.0 Factory route covering raw materials, workers, production scaling, stopped lines, and surplus output.",
    images: [imageUrls[1]],
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Factory Guide",
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
        "Big Ambitions Factory Guide: Manufacturing, Production and Scaling",
      description:
        "A player-focused Big Ambitions 1.0 Factory guide covering when manufacturing becomes worthwhile, Factory building choice, post-rework production layouts, product selection, raw materials, Factory Worker skill, storage, production-line scaling, finished-goods bottlenecks, import and export pressure, overproduction, and troubleshooting a Factory that has stopped producing.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-30",
      dateModified: "2026-08-30",
      articleSection: "Big Ambitions Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Ambitions",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Factory",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions manufacturing",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Product Manufacturing",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Factory Worker",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions raw materials",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions production",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Factory not producing",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions overproduction",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions import export index",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Electronics Factory",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Build and Scale a Factory in Big Ambitions 1.0"
          description="I start from products my stores can already sell, then size the building, machines, workers and raw-material flow around that demand. The Factory grows only when finished goods are leaving as fast as I can make them."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FactoryGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}