import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildWestPioneersSettlerNeedsContent from "@/data/wild-west-pioneers/settler-needs.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wild-west-pioneers`;
const pageUrl = `${hubUrl}/settler-needs`;

const metadataTitle =
  "Wild West Pioneers Settler Needs & Satisfaction Guide";

const metadataDescription =
  "Raise settler Satisfaction with basic needs, Whims, housing upgrades, service requests, newcomer growth, and practical fixes in Wild West Pioneers.";

const articleDescription =
  "Keep settlers housed and fed, read household Whims, place the right objects within range, handle service-based requests, improve housing, and turn high Satisfaction into population growth.";

const imageUrls = [
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-settler-satisfaction-basics.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-whim-fence.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-whim-range-upgrade.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-hairstyle-whim-barber-shop.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-house-satisfaction.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-newcomers-happy-life.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "basic-needs",
    label: "Basic needs & Satisfaction",
  },
  {
    id: "whims",
    label: "How Whims work",
  },
  {
    id: "whim-range",
    label: "Whim range",
  },
  {
    id: "service-whims",
    label: "Service-based Whims",
  },
  {
    id: "housing-satisfaction",
    label: "Housing & Satisfaction",
  },
  {
    id: "newcomers",
    label: "Attract newcomers",
  },
  {
    id: "satisfaction-stalled",
    label: "Fix stalled Satisfaction",
  },
];

const relatedLinks = [
  {
    href: "/wild-west-pioneers",
    label: "Wild West Pioneers Guide",
  },
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
        alt: "Wild West Pioneers settler Satisfaction tutorial explaining basic needs, morale, and Whims",
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
          name: "Settler Needs & Satisfaction",
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
        "How Do You Increase Settler Satisfaction in Wild West Pioneers?",
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
          name: "Wild West Pioneers settler needs",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Satisfaction",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Whims",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers housing upgrades",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Barber Shop",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers newcomers",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers population growth",
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
          title="How Do You Increase Settler Satisfaction in Wild West Pioneers?"
          description={articleDescription}
          gameTitle="Wild West Pioneers"
          gameHref="/wild-west-pioneers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildWestPioneersSettlerNeedsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}