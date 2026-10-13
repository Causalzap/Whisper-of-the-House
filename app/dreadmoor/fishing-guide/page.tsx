
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorFishingGuideContent from "@/data/dreadmoor/fishing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dreadmoor`;
const pageUrl = `${hubUrl}/fishing-guide`;

const metadataTitle =
  "DREADMOOR Fishing Guide: Bait, Line Tension & Harpooners";

const metadataDescription =
  "Learn DREADMOOR fishing controls, prevent broken lines, craft Wind-Up Tin and Rainbow Fin, catch Softgrazers and Harpooners, and get Chromatic Scales.";

const articleDescription =
  "Catch Snappers, Softgrazers, and Harpooners with the right bait. Learn how Stamina, Line Tension, and predator lure movement work.";

const heroImage =
  `${siteUrl}/images/dreadmoor/dreadmoor-harpooner-splash-zone.webp`;

const imageUrls = [
  `${siteUrl}/images/dreadmoor/dreadmoor-fishing-tackle-bait-select.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-fishing-stamina-line-tension.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-wind-up-tin-bait.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-softgrazer-fishing-spot.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-rainbow-fin-bait.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-harpooner-splash-zone.webp`,
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "DREADMOOR Predator Fishing tutorial showing the Harpooner splash zone and how to attract fish with a moving lure.",
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
          name: "DREADMOOR Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DREADMOOR Fishing Guide",
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
        "DREADMOOR Fishing Guide: Bait, Line Tension, Softgrazers and Harpooners",
      description:
        "Learn how to fish in DREADMOOR using the Simple Rod, manage Fish Stamina and Line Tension, craft Wind-Up Tin and Rainbow Fin, catch Snappers, Softgrazers and Harpooners, and process Chromatic Scales.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-13",
      dateModified: "2026-10-13",
      about: [
        {
          "@type": "VideoGame",
          name: "DREADMOOR",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR fishing controls",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Fish Stamina",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Line Tension",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Wind-Up Tin",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Rainbow Fin",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Softgrazer",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Harpooner",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Chromatic Scales",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
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
      inLanguage: "en",
    },
  ],
};

const toc = [
  {
    id: "get-simple-rod",
    label: "Get the Simple Rod",
  },
  {
    id: "fish-stamina",
    label: "How Fish Stamina Works",
  },
  {
    id: "line-tension",
    label: "Prevent Broken Fishing Lines",
  },
  {
    id: "land-fish",
    label: "Land and Keep Fish",
  },
  {
    id: "wind-up-tin",
    label: "Wind-Up Tin Recipe",
  },
  {
    id: "catch-softgrazer",
    label: "Where to Catch Softgrazers",
  },
  {
    id: "get-chromatic-scales",
    label: "Get Chromatic Scales",
  },
  {
    id: "rainbow-fin",
    label: "Rainbow Fin Recipe",
  },
  {
    id: "catch-harpooner",
    label: "How to Catch Harpooners",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor",
    label: "DREADMOOR Guide",
  },
  {
    href: "/dreadmoor/walkthrough",
    label: "DREADMOOR Demo Walkthrough",
  },
];

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
          title="DREADMOOR Fishing Guide: Bait, Stamina & Harpooners"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DreadmoorFishingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
