import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2FactionsContent from "@/data/endless-legend-2/factions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/factions`;

const metadataTitle =
  "ENDLESS Legend 2 Factions – All 8 Factions Explained";

const metadataDescription =
  "Compare all 8 ENDLESS Legend 2 factions, including their playstyles, core mechanics, main pressures, Rogue Factions and beginner-friendly choices.";

const articleDescription =
  "Compare all eight playable factions in ENDLESS Legend 2, see how each changes Cities, warfare, resources and expansion, and choose a faction that fits the campaign you want to play.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-all-eight-factions.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "kin-of-sheredyn",
    label: "Kin of Sheredyn",
  },
  {
    id: "order-of-zelevas",
    label: "Order of Zelevas",
  },
  {
    id: "last-lords",
    label: "Last Lords",
  },
  {
    id: "necrophage",
    label: "Necrophage",
  },
  {
    id: "severed-claws",
    label: "Severed Claws",
  },
  {
    id: "aspects",
    label: "Aspects",
  },
  {
    id: "tahuks",
    label: "Tahuks",
  },
  {
    id: "sandshapers",
    label: "Sandshapers",
  },
  {
    id: "rogue-factions",
    label: "Rogue Factions",
  },
  {
    id: "which-faction",
    label: "Which faction to choose",
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
    href: "/endless-legend-2/kin-of-sheredyn",
    label: "Kin of Sheredyn",
  },
  {
    href: "/endless-legend-2/order-of-zelevas",
    label: "Order of Zelevas",
  },
  {
    href: "/endless-legend-2/last-lords",
    label: "Last Lords",
  },
  {
    href: "/endless-legend-2/severed-claws",
    label: "Severed Claws",
  },
  {
    href: "/endless-legend-2/sandshapers",
    label: "Sandshapers",
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
      "ENDLESS Legend 2 Factions – All 8 Factions & How They Play",
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
          name: "Factions",
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
        "ENDLESS Legend 2 Factions – All 8 Factions & How They Play",
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
          name: "Order of Zelevas",
        },
        {
          "@type": "Thing",
          name: "Last Lords",
        },
        {
          "@type": "Thing",
          name: "Necrophage",
        },
        {
          "@type": "Thing",
          name: "Severed Claws",
        },
        {
          "@type": "Thing",
          name: "Aspects",
        },
        {
          "@type": "Thing",
          name: "Tahuks",
        },
        {
          "@type": "Thing",
          name: "Sandshapers",
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
          title="ENDLESS Legend 2 Factions – All 8 Factions & How They Play"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2FactionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}