import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BestBusinessesContent from "@/data/big-ambitions/best-businesses.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/best-businesses`;

const metadataTitle =
  "Big Ambitions Best Businesses: What to Open at Each Stage";

const metadataDescription =
  "Compare the best Big Ambitions 1.0 businesses by stage, including Gym, Hairdresser, Fast Food, Supermarket, Clothing and Electronics.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-market-insider-first-business-demand.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-gym-first-business-requirements.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-hairdresser-low-inventory-services.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-fast-food-equipment-capacity.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-drinks-fridge-customer-capacity.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-clothing-requires-hq-factory.webp`,
];

const toc = [
  {
    id: "best-business-now",
    label: "Best business to open",
  },
  {
    id: "gym-first-business",
    label: "Gym",
  },
  {
    id: "hairdresser",
    label: "Hairdresser",
  },
  {
    id: "fast-food",
    label: "Fast Food",
  },
  {
    id: "supermarket",
    label: "Supermarket",
  },
  {
    id: "high-value-businesses",
    label: "Clothing, Electronics & Jewelry",
  },
  {
    id: "business-and-location",
    label: "Business & building",
  },
  {
    id: "best-business-by-stage",
    label: "Best by progression stage",
  },
  {
    id: "when-to-pass",
    label: "When to pass",
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
    href: "/big-ambitions/rivals-guide",
    label: "Rivals & Competition Guide",
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
      "Choose the right Big Ambitions business for your current cash, district, staffing and building capacity instead of relying on one permanent tier list.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Big Ambitions Market Insider showing current product demand in Garment District",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Compare Gym, Hairdresser, Fast Food, Supermarket and later high-value businesses by demand, startup burden and building fit.",
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
          name: "Best Businesses",
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
        "Big Ambitions Best Businesses: What to Open at Each Stage",
      description:
        "A player-focused Big Ambitions 1.0 guide to choosing the right business for each stage of progression. It compares Gym, Hairdresser, Fast Food, Supermarket, Clothing, Electronics and Jewelry using current demand, neighborhood competition, startup burden, inventory pressure, staffing needs, Traffic Index, building customer capacity and equipment capacity rather than treating one business as permanently best.",
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
          name: "Big Ambitions best businesses",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions best first business",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Gym",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Hairdresser",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Fast Food Restaurant",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Supermarket",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Clothing Store",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Electronics Store",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Jewelry Store",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Market Insider",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions customer capacity",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Traffic Index",
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
          title="The Businesses I Open at Each Stage of Big Ambitions 1.0"
          description="I choose the business together with its district and building: simple operations matter more early, while a stronger supply chain lets me move into wider inventories and higher-value retail later."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestBusinessesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}