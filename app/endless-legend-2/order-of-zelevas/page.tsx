import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2OrderOfZelevasContent from "@/data/endless-legend-2/order-of-zelevas.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/order-of-zelevas`;

const metadataTitle =
  "ENDLESS Legend 2 Order of Zelevas Guide – Loyalty & Dust";

const metadataDescription =
  "Play Order of Zelevas with Loyalty, Dust recruitment, Keeps, Chosen, Territory expansion, battle Influence and roads in ENDLESS Legend 2.";

const articleDescription =
  "Build Order of Zelevas around instant Dust armies, Territory-driven Loyalty, useful Keeps, Shield-based Chosen, reliable Influence income and connected expansion.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-order-faction-traits.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-order-dust-recruitment.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-order-chosen-cost.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-order-expansion-camp.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "order-loop",
    label: "How the Order works",
  },
  {
    id: "loyalty",
    label: "Loyalty to the Emperor",
  },
  {
    id: "dust-economy",
    label: "Dust economy & recruitment",
  },
  {
    id: "city-planning",
    label: "Keeps & city planning",
  },
  {
    id: "combat",
    label: "Combat & Chosen",
  },
  {
    id: "expansion",
    label: "Territory & expansion",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/factions",
    label: "All 8 Factions",
  },
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
  },
  {
    href: "/endless-legend-2/kin-of-sheredyn",
    label: "Kin of Sheredyn",
  },
  {
    href: "/endless-legend-2/approval",
    label: "Approval & Shanties",
  },
  {
    href: "/endless-legend-2/tidefall",
    label: "Tidefall & Monsoon",
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
    title:
      "ENDLESS Legend 2 Order of Zelevas Guide – Loyalty, Dust Armies & Expansion",
    description: articleDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
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
          name: "ENDLESS Legend 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Order of Zelevas",
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
        "ENDLESS Legend 2 Order of Zelevas Guide – Loyalty, Dust Armies & Expansion",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ENDLESS Legend 2",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Order of Zelevas",
        },
        {
          "@type": "Thing",
          name: "Loyalty to the Emperor",
        },
        {
          "@type": "Thing",
          name: "Order of Zelevas Dust recruitment",
        },
        {
          "@type": "Thing",
          name: "Order of Zelevas Keeps",
        },
        {
          "@type": "Thing",
          name: "Order of Zelevas Chosen",
        },
        {
          "@type": "Thing",
          name: "Order of Zelevas Territory expansion",
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
          title="ENDLESS Legend 2 Order of Zelevas Guide – Loyalty, Dust Armies & Expansion"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2OrderOfZelevasContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}