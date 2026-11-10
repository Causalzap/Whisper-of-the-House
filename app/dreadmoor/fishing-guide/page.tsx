
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorFishingGuideContent from "@/data/dreadmoor/fishing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dreadmoor`;
const pageUrl = `${hubUrl}/fishing-guide`;

const metadataTitle =
  "How to Fish in DREADMOOR: Bait, Line Tension & Harpooners";

const metadataDescription =
  "Learn DREADMOOR fishing controls, manage Stamina and Line Tension, craft Wind-Up Tin and Rainbow Fin, and catch Snappers, Softgrazers, and Harpooners.";

const articleDescription =
  "Learn how to catch fish in DREADMOOR, choose the right bait, prevent broken lines, get Chromatic Scales, and handle difficult predatory catches.";

const datePublished = "2026-10-13";
const dateModified = "2026-11-10";

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
    publishedTime: datePublished,
    modifiedTime: dateModified,
    images: [
      {
        url: heroImage,
        alt: "DREADMOOR Harpooner fishing tutorial showing the splash zone used to attract predatory fish with Rainbow Fin.",
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
          name: "DREADMOOR",
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
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished,
      dateModified,
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
          name: "Fish Stamina and Line Tension",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR fishing bait",
        },
        {
          "@type": "Thing",
          name: "Wind-Up Tin and Rainbow Fin",
        },
        {
          "@type": "Thing",
          name: "Snapper, Softgrazer and Harpooner fishing",
        },
        {
          "@type": "Thing",
          name: "Chromatic Scales",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR fishing equipment",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
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
    label: "Drain Fish Stamina",
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
    label: "Catch Harpooners",
  },
  {
    id: "fishing-upgrades",
    label: "When to Upgrade Fishing Gear",
  },
  {
    id: "fishing-problems",
    label: "Fishing Problems and Fixes",
  },
  {
    id: "after-main-story",
    label: "Fishing After the Story",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor",
    label: "DREADMOOR: What to Do Next",
  },
  {
    href: "/dreadmoor/walkthrough",
    label: "DREADMOOR Early Access Walkthrough",
  },
  {
    href: "/dreadmoor/achievements",
    label: "DREADMOOR 44 Achievements Checklist",
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
          title="How to Fish in DREADMOOR: Bait, Line Tension & Harpooners"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
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
