import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigAmbitionsContent from "@/data/big-ambitions/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/big-ambitions`;

const metadataTitle =
  "Big Ambitions Guide: Progression, Businesses & Systems";

const metadataDescription =
  "Start Big Ambitions 1.0 with guides for progression, businesses, employees, warehouses, factories, pricing, Special Rivals, and all 126 achievements.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-hub.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-multi-district-expansion-overview.webp`,
];

const toc = [
  {
    id: "start-here",
    label: "Start here",
  },
  {
    id: "first-company",
    label: "First company",
  },
  {
    id: "business-choice",
    label: "Choosing a business",
  },
  {
    id: "employees",
    label: "Employees",
  },
  {
    id: "headquarters",
    label: "Headquarters",
  },
  {
    id: "inventory",
    label: "Inventory & logistics",
  },
  {
    id: "market-insider",
    label: "Market Insider",
  },
  {
    id: "pricing",
    label: "Pricing",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
  },
  {
    id: "multi-district",
    label: "Multi-district expansion",
  },
  {
    id: "special-rivals",
    label: "Special Rivals",
  },
  {
    id: "achievements",
    label: "126 achievements",
  },
  {
    id: "company-ready",
    label: "When to expand again",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions/progression-guide",
    label: "Progression Guide & What to Unlock Next",
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
  {
    href: "/big-ambitions/pricing-guide",
    label: "Pricing & Pricing Manager Guide",
  },
  {
    href: "/big-ambitions/rivals-guide",
    label: "Special Rivals & Takeovers Guide",
  },
  {
    href: "/big-ambitions/achievements",
    label: "All 126 Achievements & Checklist",
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
      "Use the current Big Ambitions 1.0 guide hub to decide what your company needs next, from the first business through automation, manufacturing, Rivals, and 100% completion.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Big Ambitions 1.0 guide hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Big Ambitions 1.0 guides for progression, businesses, HR, logistics, factories, pricing, Rivals, and achievements.",
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
        "Big Ambitions Guide: Progression, Businesses and Company Systems",
      description:
        "A current Big Ambitions 1.0 guide hub for deciding what to do next as the company grows. It routes players through progression, business selection, employees and HR, Headquarters, warehouse logistics, Market Insider, pricing, Factory manufacturing, multi-district expansion, Special Rivals, and all 126 achievements.",
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
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions guide",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions 1.0",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions progression",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions businesses",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions employees",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions warehouse",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Factory",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions pricing",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Special Rivals",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions achievements",
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
          title="Where to Start and What to Do Next in Big Ambitions 1.0"
          description="Big Ambitions gets easier to read once I stop treating every new unlock as the next required purchase. I use this hub to identify the company's current bottleneck and jump to the system that actually solves it."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigAmbitionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}