import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CurfewContent from "@/data/nivalis-nights/curfew.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/curfew`;

const metadataTitle =
  "Nivalis Nights Curfew Guide: 2 AM, Shelters, Cameras & Drones";

const metadataDescription =
  "Learn what happens at the 2 AM curfew in Nivalis Nights, when to use a public shelter, how to avoid CorpSec cameras and drones, and what happens if you get detected.";

const articleDescription =
  "A practical Nivalis Nights curfew guide covering the 2:00 AM deadline, apartments and public shelters, what to do when stuck outside, CorpSec cameras and drones, detection consequences, deliberate nighttime activity, and how to plan the end of each day.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-curfew-2am-warning.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-curfew-shelter.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-curfew-camera-detected.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-curfew-2am-warning.webp`;

const toc = [
  {
    id: "curfew-time",
    label: "What Time Does Curfew Start?",
  },
  {
    id: "home-or-shelter",
    label: "Should You Go Home or Use a Shelter?",
  },
  {
    id: "stuck-outside",
    label: "What to Do if You Are Stuck Outside",
  },
  {
    id: "cameras-and-drones",
    label: "How to Avoid Cameras and Drones",
  },
  {
    id: "detected",
    label: "What Happens if CorpSec Detects You?",
  },
  {
    id: "curfew-is-not-end-of-day",
    label: "When Staying Out After Curfew Makes Sense",
  },
  {
    id: "first-night",
    label: "What to Do During the First Curfew",
  },
  {
    id: "curfew-checklist",
    label: "Decide Where the Night Ends Before 2 AM",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/beginner-guide",
    label: "Nivalis Nights Beginner Guide",
  },
  {
    href: "/nivalis-nights/fishing-guide",
    label: "Nivalis Nights Fishing Guide",
  },
  {
    href: "/nivalis-nights/achievements",
    label: "Nivalis Nights Achievement Tracker",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Nivalis Nights curfew warning telling civilians to be indoors or at an authorized shelter by 2 AM",
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
          name: "Nivalis Nights",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Curfew Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-10-01",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function NivalisNightsCurfewPage() {
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
          title="Nivalis Nights Curfew Guide: What to Do After 2 AM"
          description="Know when curfew starts, whether to go home or use a shelter, how to move around CorpSec cameras and drones, and what to do if you are caught outside after 2:00 AM."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CurfewContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}