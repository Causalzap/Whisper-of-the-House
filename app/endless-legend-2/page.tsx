import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2GuideContent from "@/data/endless-legend-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/endless-legend-2`;

const metadataTitle =
  "ENDLESS Legend 2 Guide – Factions, First 30 Turns & Victory";

const metadataDescription =
  "ENDLESS Legend 2 guide to all 8 factions, the first 30 turns, Minor Factions, Approval, Tidefall, victory conditions, achievements, and midgame decisions.";

const articleDescription =
  "Learn how to start an ENDLESS Legend 2 campaign, choose between all eight factions, fix common empire problems, prepare for Tidefall, and work toward the right victory path.";

const toc = [
  {
    id: "first-30-turns",
    label: "First 30 turns",
  },
  {
    id: "factions",
    label: "Choose a faction",
  },
  {
    id: "empire-problems",
    label: "Fix empire problems",
  },
  {
    id: "minor-factions",
    label: "Minor Factions",
  },
  {
    id: "tidefall",
    label: "Monsoon & Tidefall",
  },
  {
    id: "victory",
    label: "Victory paths",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "where-next",
    label: "Midgame priorities",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
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
    href: "/endless-legend-2/tidefall",
    label: "Tidefall & Monsoon",
  },
  {
    href: "/endless-legend-2/victory-conditions",
    label: "Victory Conditions",
  },
  {
    href: "/endless-legend-2/achievements",
    label: "All 59 Achievements",
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
      "ENDLESS Legend 2 Guide – Factions, First 30 Turns, Tidefall & Victory",
    description: articleDescription,
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
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
        "ENDLESS Legend 2 Guide – Factions, First 30 Turns, Tidefall & Victory",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ENDLESS Legend 2",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 factions",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 first 30 turns",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Minor Factions",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Tidefall",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 victory conditions",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 achievements",
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
          title="ENDLESS Legend 2 Guide – Factions, First 30 Turns, Tidefall & Victory"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}