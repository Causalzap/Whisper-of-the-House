import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildWestPioneersScoutsExpeditionsContent from "@/data/wild-west-pioneers/scouts-expeditions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wild-west-pioneers`;
const pageUrl = `${hubUrl}/scouts-expeditions`;

const metadataTitle =
  "Wild West Pioneers Scouts, Expeditions & Second Settlement";

const metadataDescription =
  "Send scouts in Wild West Pioneers, load rations, explore World Map locations, use the Settler Base, and prepare resources for a second settlement.";

const articleDescription =
  "Prepare scouting expeditions, load canned food, clear interactive World Map locations, form a settler group, transport startup resources, and establish a second settlement without breaking the first town.";

const imageUrls = [
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-scouting-expedition-requirements.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-scout-rations.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-scout-world-map.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-scout-location-interactions.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-settler-base.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-settler-expedition-resources.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-second-settlement-sandstorm.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "first-expedition",
    label: "First scouting expedition",
  },
  {
    id: "scout-rations",
    label: "Load scout rations",
  },
  {
    id: "world-map",
    label: "Scout on the World Map",
  },
  {
    id: "explore-location",
    label: "Explore each location",
  },
  {
    id: "what-scouting-brings-back",
    label: "Scouting rewards",
  },
  {
    id: "settler-base",
    label: "Use the Settler Base",
  },
  {
    id: "settler-resources",
    label: "Send startup resources",
  },
  {
    id: "sandstorm",
    label: "Start at Sandstorm",
  },
  {
    id: "settlement-network",
    label: "Build a settlement network",
  },
  {
    id: "scouting-flow",
    label: "Scouting to second town",
  },
];

const relatedLinks = [
  {
    href: "/wild-west-pioneers",
    label: "Wild West Pioneers Guide",
  },
  {
    href: "/wild-west-pioneers/progression-guide",
    label: "Progression & Unlocks Guide",
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
        alt: "Wild West Pioneers Scout Cabin expedition setup with pioneers and travel supplies",
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
          name: "Scouts, Expeditions & Second Settlement",
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
        "How Do You Send Scouts and Start a Second Settlement in Wild West Pioneers?",
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
          name: "Wild West Pioneers scouting",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers scouting expeditions",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers World Map",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Scout Cabin",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Settler Base",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers second settlement",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers inter-settlement transport",
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
          title="How Do You Send Scouts and Start a Second Settlement in Wild West Pioneers?"
          description={articleDescription}
          gameTitle="Wild West Pioneers"
          gameHref="/wild-west-pioneers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildWestPioneersScoutsExpeditionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}