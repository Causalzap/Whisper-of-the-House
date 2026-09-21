import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2KinOfSheredynContent from "@/data/endless-legend-2/kin-of-sheredyn.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/kin-of-sheredyn`;

const metadataTitle =
  "ENDLESS Legend 2 Kin of Sheredyn Guide – Keeps & Chosen";

const metadataDescription =
  "Build Kin of Sheredyn around Works, Keeps, Strength of Our Zeal and Chosen, with capital layouts, population roles, research and expansion priorities.";

const articleDescription =
  "Plan the Kin capital around Works and Keeps, grow Strength of Our Zeal through capital Fortification, use Chosen with Shield, and manage population, research and expansion.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-kin-capital-keep-layout.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-kin-strength-of-our-zeal.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-kin-population-industry.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-kin-chosen-shield-damage.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-kin-divine-monument.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "capital-layout",
    label: "Capital layout",
  },
  {
    id: "strength-of-our-zeal",
    label: "Strength of Our Zeal",
  },
  {
    id: "population-economy",
    label: "Population & economy",
  },
  {
    id: "chosen",
    label: "How to use Chosen",
  },
  {
    id: "divine-monument",
    label: "Divine Monument",
  },
  {
    id: "research",
    label: "Research priorities",
  },
  {
    id: "expansion",
    label: "Expansion strategy",
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
    href: "/endless-legend-2/minor-factions",
    label: "Minor Factions",
  },
  {
    href: "/endless-legend-2/approval",
    label: "Approval & Shanties",
  },
  {
    href: "/endless-legend-2/order-of-zelevas",
    label: "Order of Zelevas",
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
      "ENDLESS Legend 2 Kin of Sheredyn Guide – Keeps, Chosen & Strength of Our Zeal",
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
          name: "Kin of Sheredyn",
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
        "ENDLESS Legend 2 Kin of Sheredyn Guide – Keeps, Chosen & Strength of Our Zeal",
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
          name: "Kin of Sheredyn",
        },
        {
          "@type": "Thing",
          name: "Kin of Sheredyn Keeps",
        },
        {
          "@type": "Thing",
          name: "Strength of Our Zeal",
        },
        {
          "@type": "Thing",
          name: "Kin of Sheredyn Chosen",
        },
        {
          "@type": "Thing",
          name: "Kin of Sheredyn population",
        },
        {
          "@type": "Thing",
          name: "Kin of Sheredyn Divine Monument",
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
          title="ENDLESS Legend 2 Kin of Sheredyn Guide – Keeps, Chosen & Strength of Our Zeal"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2KinOfSheredynContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}