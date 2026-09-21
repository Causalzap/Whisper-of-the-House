import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2VictoryConditionsContent from "@/data/endless-legend-2/victory-conditions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/victory-conditions`;

const metadataTitle =
  "ENDLESS Legend 2 Victory Conditions – All 5 Ways to Win";

const metadataDescription =
  "Learn ENDLESS Legend 2 victory conditions for Worship, Impress, Master, Conquest and Score, including current objectives and the 10-turn countdown.";

const articleDescription =
  "Compare Worship, Impress, Master, Conquest and Score victories, see their current requirements, choose a path, switch when needed, and protect the final 10-turn countdown.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-worship-victory-conditions.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-impress-victory-warning.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-victory-countdown.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "victory-types",
    label: "All victory conditions",
  },
  {
    id: "worship",
    label: "Worship victory",
  },
  {
    id: "impress",
    label: "Impress victory",
  },
  {
    id: "master",
    label: "Master victory",
  },
  {
    id: "choose-path",
    label: "Choose or switch paths",
  },
  {
    id: "countdown",
    label: "10-turn countdown",
  },
  {
    id: "conquest-score",
    label: "Conquest & Score",
  },
  {
    id: "victory-achievements",
    label: "Victory achievements",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/minor-factions",
    label: "Minor Factions",
  },
  {
    href: "/endless-legend-2/tidefall",
    label: "Tidefall & Monsoon",
  },
  {
    href: "/endless-legend-2/approval",
    label: "Approval & Shanties",
  },
  {
    href: "/endless-legend-2/last-lords",
    label: "Last Lords",
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
      "ENDLESS Legend 2 Victory Conditions – Worship, Impress, Master, Conquest & Score",
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
          name: "Victory Conditions",
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
        "ENDLESS Legend 2 Victory Conditions – Worship, Impress, Master, Conquest & Score",
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
          name: "ENDLESS Legend 2 Worship victory",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Impress victory",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Master victory",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Conquest victory",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Score victory",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 victory countdown",
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
          title="ENDLESS Legend 2 Victory Conditions – Worship, Impress, Master, Conquest & Score"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2VictoryConditionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}