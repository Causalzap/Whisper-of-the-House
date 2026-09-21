import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2LastLordsContent from "@/data/endless-legend-2/last-lords.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/last-lords`;

const metadataTitle =
  "ENDLESS Legend 2 Last Lords Guide – Dust & Population";

const metadataDescription =
  "Play Last Lords with Dust population, paid healing, Lord's Estates, Approval management, faction quests, Roundup and Primordial Lords.";

const articleDescription =
  "Use Dust for population and army recovery without destabilizing your Cities, build around Lord's Estates, manage faction quests and Roundup, and keep Science and Approval from becoming the real bottlenecks.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-last-lords-dust-economy.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-last-lords-lords-estate.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-last-lords-paid-healing.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "opening",
    label: "Opening priorities",
  },
  {
    id: "population-and-approval",
    label: "Population & Approval",
  },
  {
    id: "lords-estates",
    label: "Lord's Estates",
  },
  {
    id: "army-recovery",
    label: "Army recovery",
  },
  {
    id: "faction-quest",
    label: "Faction quest",
  },
  {
    id: "roundup",
    label: "Roundup & uprisings",
  },
  {
    id: "primordial-lords",
    label: "Primordial Lords",
  },
  {
    id: "research-and-late-game",
    label: "Research & late game",
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
      "ENDLESS Legend 2 Last Lords Guide – Dust, Population & Lord's Estates",
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
          name: "Last Lords",
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
        "ENDLESS Legend 2 Last Lords Guide – Dust, Population & Lord's Estates",
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
          name: "Last Lords",
        },
        {
          "@type": "Thing",
          name: "Last Lords Dust economy",
        },
        {
          "@type": "Thing",
          name: "Last Lords population",
        },
        {
          "@type": "Thing",
          name: "Lord's Estates",
        },
        {
          "@type": "Thing",
          name: "Last Lords paid healing",
        },
        {
          "@type": "Thing",
          name: "Last Lords Roundup",
        },
        {
          "@type": "Thing",
          name: "Primordial Lords",
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
          title="ENDLESS Legend 2 Last Lords Guide – Dust, Population & Lord's Estates"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2LastLordsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}