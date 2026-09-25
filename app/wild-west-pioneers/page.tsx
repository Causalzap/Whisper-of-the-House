import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildWestPioneersGuideContent from "@/data/wild-west-pioneers/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/wild-west-pioneers`;

const metadataTitle =
  "Wild West Pioneers Guide & Walkthrough: Progression";

const metadataDescription =
  "Wild West Pioneers guide for the first settlement, production, Journey progression, settler needs, scouting, World Map exploration, and second settlements.";

const articleDescription =
  "Start a stable first settlement, identify whether layout, production, settler needs or progression is blocking you, then move into scouting, World Map exploration and permanent expansion.";

const imageUrls = [
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-starting-resource-overlays.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-town-hall-official-choice.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-scouting-expedition-requirements.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "starting-out",
    label: "Start the first settlement",
  },
  {
    id: "resources-running-out",
    label: "Logs or food running out",
  },
  {
    id: "resident-access",
    label: "Residents cannot access resources",
  },
  {
    id: "settler-satisfaction",
    label: "Settler Satisfaction & Whims",
  },
  {
    id: "progression-stuck",
    label: "What to unlock next",
  },
  {
    id: "scouting-ready",
    label: "When to start scouting",
  },
  {
    id: "world-map",
    label: "World Map locations",
  },
  {
    id: "second-settlement",
    label: "When to expand",
  },
  {
    id: "multiple-settlements",
    label: "Multiple settlements",
  },
  {
    id: "stuck",
    label: "Find the real blocker",
  },
  {
    id: "first-run-route",
    label: "First-run route",
  },
  {
    id: "later-systems",
    label: "Later systems",
  },
];

const relatedLinks = [
  {
    href: "/wild-west-pioneers/best-settlement-layout",
    label: "Best Settlement Layout",
  },
  {
    href: "/wild-west-pioneers/production-chains",
    label: "Production Chains Guide",
  },
  {
    href: "/wild-west-pioneers/progression-guide",
    label: "Progression & Unlocks Guide",
  },
  {
    href: "/wild-west-pioneers/settler-needs",
    label: "Settler Needs & Satisfaction",
  },
  {
    href: "/wild-west-pioneers/scouts-expeditions",
    label: "Scouts, Expeditions & Second Settlement",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Wild West Pioneers starting resource overlays used to plan the first settlement",
      },
    ],
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
          name: "Wild West Pioneers Guide & Walkthrough",
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
        "Wild West Pioneers Guide & Walkthrough",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-25",
      dateModified: "2026-09-25",
      about: [
        {
          "@type": "VideoGame",
          name: "Wild West Pioneers",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers walkthrough",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers beginner guide",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers settlement progression",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers production",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers settler Satisfaction",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers scouting",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers second settlement",
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
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Wild West Pioneers Guides",
      itemListElement: relatedLinks.map((link, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: link.label,
        url: `${siteUrl}${link.href}`,
      })),
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
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
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
          title="Wild West Pioneers Guide & Walkthrough"
          description={articleDescription}
          gameTitle="Wild West Pioneers"
          gameHref="/wild-west-pioneers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildWestPioneersGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}