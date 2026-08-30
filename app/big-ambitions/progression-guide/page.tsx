import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProgressionGuideContent from "@/data/big-ambitions/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/progression-guide`;

const metadataTitle =
  "Big Ambitions Progression Guide: What to Do & Unlock Next";

const metadataDescription =
  "Follow Big Ambitions 1.0 from your first business to HQ, warehouses, Product Manufacturing, factories, and late-game expansion.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-1-0-business-choice-menu.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-headquarters-purchasing-agent-unlock.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-warehouse-progression-unlock.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-product-manufacturing-course.webp`,
];

const toc = [
  {
    id: "what-to-do-next",
    label: "What to do next",
  },
  {
    id: "first-business",
    label: "First business",
  },
  {
    id: "stabilize-first-business",
    label: "When to expand",
  },
  {
    id: "second-business",
    label: "Second business",
  },
  {
    id: "installation-firm",
    label: "Interior installation",
  },
  {
    id: "when-to-open-hq",
    label: "When to open HQ",
  },
  {
    id: "warehouse-stage",
    label: "First warehouse",
  },
  {
    id: "management-automation",
    label: "Management automation",
  },
  {
    id: "product-manufacturing",
    label: "Product Manufacturing",
  },
  {
    id: "late-game-expansion",
    label: "Late-game expansion",
  },
  {
    id: "stalled-progression",
    label: "If progression stalls",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/best-businesses",
    label: "Best Businesses by Progression Stage",
  },
  {
    href: "/big-ambitions/employees-hr-guide",
    label: "Employees, HR Managers & Headhunters",
  },
  {
    href: "/big-ambitions/warehouse-logistics-guide",
    label: "Warehouse & Logistics Guide",
  },
  {
    href: "/big-ambitions/factory-guide",
    label: "Factory & Manufacturing Guide",
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
      "Know when to move from the first store into a second business, Headquarters, warehouse automation, manufacturing, factories, and multi-district expansion in Big Ambitions 1.0.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Big Ambitions 1.0 business selection showing available business types and inventory sources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "A practical Big Ambitions 1.0 route from the first profitable business through HQ, warehouses, manufacturing and late-game expansion.",
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Guide",
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
        "Big Ambitions 1.0 Progression Guide: What to Do and Unlock Next",
      description:
        "A player-focused Big Ambitions 1.0 progression guide for deciding what to do next from the first retail business through a second store, Headquarters, employee and management automation, the first warehouse, Product Manufacturing, Factory progression, and late-game multi-district expansion. It explains when each system is worth investing in and when an unresolved staffing, supply, pricing, or demand problem should be fixed before moving forward.",
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
          name: "Big Ambitions progression",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions what to do next",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions first business",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Headquarters",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions warehouse",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Product Manufacturing",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Factory",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Business School",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions late game",
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
          title="What I Do Next at Every Stage of Big Ambitions 1.0"
          description="I use the objectives to unlock the next system, but I let the company decide when I actually pay for it: stabilize the first store, prove the model with another business, automate the work that keeps repeating, and only then move into warehouses and manufacturing."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProgressionGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}