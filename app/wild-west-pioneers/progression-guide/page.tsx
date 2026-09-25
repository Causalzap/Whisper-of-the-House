import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildWestPioneersProgressionGuideContent from "@/data/wild-west-pioneers/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wild-west-pioneers`;
const pageUrl = `${hubUrl}/progression-guide`;

const metadataTitle =
  "Wild West Pioneers Progression Guide: Journey Points & Unlocks";

const metadataDescription =
  "Learn what to unlock next in Wild West Pioneers, how Journey Points and tiers work, which Ideas matter first, and when Scout Cabin and Settler Base fit.";

const articleDescription =
  "Follow Wild West Pioneers progression from the first Town Hall official and Tents through Journey Points, tier gates, Scout Cabin, Town Hall upgrades, and the Settler Base.";

const imageUrls = [
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-town-hall-official-choice.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-journey-points-sources.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-progression-tier-one.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-scout-cabin-unlock.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-town-hall-level-two.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "town-hall-first-official",
    label: "First Town Hall official",
  },
  {
    id: "first-journey-gate",
    label: "First Journey gate",
  },
  {
    id: "journey-points",
    label: "How Journey Points work",
  },
  {
    id: "progression-tiers",
    label: "Five progression tiers",
  },
  {
    id: "settlement-gate",
    label: "Settlement capacity gate",
  },
  {
    id: "resident-needs",
    label: "Resident needs",
  },
  {
    id: "scout-cabin",
    label: "Scout Cabin unlock",
  },
  {
    id: "town-hall-upgrades",
    label: "Town Hall upgrades",
  },
  {
    id: "settler-base",
    label: "Settler Base milestone",
  },
  {
    id: "progression-stuck",
    label: "Fix stuck progression",
  },
];

const relatedLinks = [
  {
    href: "/wild-west-pioneers",
    label: "Wild West Pioneers Guide",
  },
  {
    href: "/wild-west-pioneers/production-chains",
    label: "Production Chains Guide",
  },
  {
    href: "/wild-west-pioneers/best-settlement-layout",
    label: "Best Settlement Layout",
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
        alt: "Wild West Pioneers Town Hall official selection and early progression choice",
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
          name: "Wild West Pioneers Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Guide",
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
        "What Should You Unlock Next in Wild West Pioneers?",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-25",
      dateModified: "2026-09-25",
      about: [
        {
          "@type": "VideoGame",
          name: "Wild West Pioneers",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers progression",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Journey Points",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Ideas",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers progression tiers",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Town Hall officials",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Scout Cabin unlock",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Settler Base unlock",
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
          title="What Should You Unlock Next in Wild West Pioneers?"
          description={articleDescription}
          gameTitle="Wild West Pioneers"
          gameHref="/wild-west-pioneers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildWestPioneersProgressionGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}