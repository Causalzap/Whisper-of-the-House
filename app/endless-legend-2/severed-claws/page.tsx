import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2SeveredClawsContent from "@/data/endless-legend-2/severed-claws.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/severed-claws`;

const metadataTitle =
  "ENDLESS Legend 2 Severed Claws Guide – Villages, Population & Combat";

const metadataDescription =
  "Severed Claws guide for ENDLESS Legend 2 covering Minor Faction Villages, captured population, one-city expansion, Burrows, Exploiter, Ever Fighting, and combat.";

const articleDescription =
  "Learn how Severed Claws use Minor Faction Villages for units and population, grow their single City, build mixed armies, use Burrows, and fight without the Necrophage Larva loop.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-severed-claws-faction-overview.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-severed-claws-village-cycle.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-severed-claws-minor-faction-army.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-severed-claws-ever-fighting.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-severed-claws-work",
    label: "How Severed Claws work",
  },
  {
    id: "starting-area",
    label: "What to scout first",
  },
  {
    id: "village-cycle",
    label: "Minor Faction village cycle",
  },
  {
    id: "population",
    label: "Population growth",
  },
  {
    id: "communal-habitation",
    label: "Communal Habitation",
  },
  {
    id: "single-city",
    label: "One-city expansion",
  },
  {
    id: "army",
    label: "Army & replacements",
  },
  {
    id: "ever-fighting",
    label: "Ever Fighting",
  },
  {
    id: "combat",
    label: "Extra attacks after kills",
  },
  {
    id: "severed-claws-vs-necrophage",
    label: "Severed Claws vs Necrophage",
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
    href: "/endless-legend-2/minor-factions",
    label: "Minor Factions",
  },
  {
    href: "/endless-legend-2/approval",
    label: "Approval & Shanties",
  },
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
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
      "ENDLESS Legend 2 Severed Claws Guide – Villages, Population & Combat",
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
          name: "Severed Claws",
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
        "ENDLESS Legend 2 Severed Claws Guide – Villages, Population & Combat",
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
          name: "Severed Claws",
        },
        {
          "@type": "Thing",
          name: "Severed Claws Minor Faction Villages",
        },
        {
          "@type": "Thing",
          name: "Severed Claws population",
        },
        {
          "@type": "Thing",
          name: "Severed Claws Burrows",
        },
        {
          "@type": "Thing",
          name: "Severed Claws Ever Fighting",
        },
        {
          "@type": "Thing",
          name: "Severed Claws Exploiter",
        },
        {
          "@type": "Thing",
          name: "Severed Claws combat",
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
          title="ENDLESS Legend 2 Severed Claws Guide – Villages, Population & Combat"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2SeveredClawsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}