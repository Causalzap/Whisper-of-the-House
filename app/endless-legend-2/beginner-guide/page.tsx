import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2BeginnerGuideContent from "@/data/endless-legend-2/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "ENDLESS Legend 2 Beginner Guide – First 30 Turns";

const metadataDescription =
  "Learn the first 30 turns of ENDLESS Legend 2: first City placement, Influence, Camps, research, armies, Minor Factions, Monsoon and Tidefall.";

const articleDescription =
  "Build a stable ENDLESS Legend 2 opening by choosing the first City, managing Industry and Influence, scouting useful land, handling Camps, strengthening the first army, and reacting to Monsoon and Tidefall.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-first-city-prepared-settlement.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-camp-attach-or-city.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "first-city",
    label: "First City timing",
  },
  {
    id: "capital-priorities",
    label: "Capital priorities",
  },
  {
    id: "scouting",
    label: "Early scouting",
  },
  {
    id: "first-camp",
    label: "First Camp",
  },
  {
    id: "spending-and-research",
    label: "Dust & research",
  },
  {
    id: "first-army",
    label: "First army",
  },
  {
    id: "monsoon-tidefall",
    label: "Monsoon & Tidefall",
  },
  {
    id: "turn-30",
    label: "Turn 30 checkpoint",
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
    href: "/endless-legend-2/tidefall",
    label: "Tidefall & Monsoon",
  },
  {
    href: "/endless-legend-2/victory-conditions",
    label: "Victory Conditions",
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
      "ENDLESS Legend 2 Beginner Guide – First 30 Turns, Cities & Expansion",
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
          name: "Beginner Guide",
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
        "ENDLESS Legend 2 Beginner Guide – First 30 Turns, Cities & Expansion",
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
          name: "ENDLESS Legend 2 first 30 turns",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 first City",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Camps",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Influence",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Minor Factions",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Monsoon and Tidefall",
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
          title="ENDLESS Legend 2 Beginner Guide – First 30 Turns, Cities & Expansion"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}