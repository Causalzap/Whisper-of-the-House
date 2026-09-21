import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2MinorFactionsContent from "@/data/endless-legend-2/minor-factions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/minor-factions`;

const metadataTitle =
  "ENDLESS Legend 2 Minor Factions – Parlay & Protectorates";

const metadataDescription =
  "Learn when to Parlay, Bribe or Attack Minor Factions, how Assimilation works, Protectorate costs, village scaling, population and the best choices.";

const articleDescription =
  "Choose how to pacify Minor Faction villages, meet the City requirement for Assimilation, compare Protectorate bonuses, population and units, and avoid wasting Influence on the wrong switch.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-minor-faction-village-options.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-minor-faction-protectorate.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-minor-faction-village-scaling.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "village-options",
    label: "Parlay, Bribe or Attack",
  },
  {
    id: "assimilation-requirements",
    label: "Assimilation requirements",
  },
  {
    id: "protectorate-benefits",
    label: "Protectorate benefits",
  },
  {
    id: "village-scaling",
    label: "Village scaling",
  },
  {
    id: "population",
    label: "Minor Faction population",
  },
  {
    id: "which-minor-faction",
    label: "Which Minor Faction to pick",
  },
  {
    id: "protectorate-slots",
    label: "Protectorate slots",
  },
  {
    id: "assimilation-cost",
    label: "Assimilation cost & switching",
  },
  {
    id: "faction-exceptions",
    label: "Faction exceptions",
  },
  {
    id: "decision",
    label: "Before spending a slot",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
  },
  {
    href: "/endless-legend-2/factions",
    label: "All 8 Factions",
  },
  {
    href: "/endless-legend-2/approval",
    label: "Approval & Shanties",
  },
  {
    href: "/endless-legend-2/severed-claws",
    label: "Severed Claws",
  },
  {
    href: "/endless-legend-2/last-lords",
    label: "Last Lords",
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
      "ENDLESS Legend 2 Minor Factions – Parlay, Assimilation & Protectorates",
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
          name: "Minor Factions",
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
        "ENDLESS Legend 2 Minor Factions Guide – Parlay, Assimilation & Protectorates",
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
          name: "ENDLESS Legend 2 Minor Factions",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Parlay",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Bribe",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Assimilation",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Protectorates",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Minor Faction population",
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
          title="ENDLESS Legend 2 Minor Factions Guide – Parlay, Assimilation & Protectorates"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2MinorFactionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}