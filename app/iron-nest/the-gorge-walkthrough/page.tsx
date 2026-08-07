import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheGorgeWalkthroughContent from "@/data/iron-nest/the-gorge-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/iron-nest`;
const pageUrl = `${hubUrl}/the-gorge-walkthrough`;

const metadataTitle =
  "Iron Nest The Gorge Walkthrough: No Ballistic Calculator";

const metadataDescription =
  "Restart Iron Nest, scout east from K4 9:0, correct manual shots without the calculator, protect the convoy, and stop when the pass is clear.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-engine-manual-restart.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-east-recon-line.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-recon-enemy-clusters.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-calculator-offline.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-impact-correction.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-pass-clear.webp`,
];

const toc = [
  {
    id: "the-gorge-route",
    label: "The Gorge route",
  },
  {
    id: "restart-engine",
    label: "Restart the damaged engine",
  },
  {
    id: "read-gorge-order",
    label: "Mark K4 9:0",
  },
  {
    id: "send-east-recon",
    label: "Send eastbound recon",
  },
  {
    id: "mark-convoy-and-enemies",
    label: "Mark convoy and enemies",
  },
  {
    id: "first-manual-shot",
    label: "Fire the first manual shot",
  },
  {
    id: "correct-impact",
    label: "Correct from the impact",
  },
  {
    id: "clear-forward-element",
    label: "Clear the forward element",
  },
  {
    id: "protect-convoy",
    label: "Protect the convoy",
  },
  {
    id: "pass-clear",
    label: "Complete The Gorge",
  },
  {
    id: "gorge-medals",
    label: "Safe clear or full elimination",
  },
  {
    id: "gorge-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Guide Hub",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/liberation-walkthrough",
    label: "Liberation Walkthrough",
  },
  {
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Fire and Light Walkthrough",
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
    title: "Iron Nest The Gorge Walkthrough Without the Calculator",
    description:
      "Restart the damaged Nest, scout the gorge east of K4 9:0, use each crater to correct the next shot, and protect the convoy until the pass is clear.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest The Gorge mission order placing the Nest near K4 and identifying a hostile force east of the convoy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest The Gorge Walkthrough",
    description:
      "Scout east from K4 9:0, fire one manual ranging shot, correct from each crater, and stop when the convoy route is open.",
    images: [imageUrls[0]],
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
          name: "Iron Nest Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Gorge Walkthrough",
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
        "Iron Nest The Gorge Walkthrough: Manual Engine Restart, Eastbound Reconnaissance, Firing Without the Ballistic Calculator, and Pass Clear",
      description:
        "A player-focused Iron Nest The Gorge walkthrough explaining how to complete the manual engine restart, accept that the affected ballistic computer cannot be restored, mark Iron Nest at K4 9:0, send one reconnaissance flight east, separate the hostile forward element from the blue convoy, select a safe opening ranging target, fire with a fixed bearing and powder-charge count, use each observed crater to correct the next elevation, work through the enemy positions without changing several variables at once, protect the convoy from large impact areas, stop when command reports that the pass is clear and the column is moving, and decide whether the optional rear targets are worth pursuing for additional medal conditions.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Iron Nest The Gorge",
        },
        {
          "@type": "Thing",
          name: "Iron Nest The Gorge walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest K4 9:0",
        },
        {
          "@type": "Thing",
          name: "Iron Nest manual engine restart",
        },
        {
          "@type": "Thing",
          name: "Iron Nest ballistic computer unavailable",
        },
        {
          "@type": "Thing",
          name: "Iron Nest targeting computer broken",
        },
        {
          "@type": "Thing",
          name: "Iron Nest eastbound reconnaissance",
        },
        {
          "@type": "Thing",
          name: "Iron Nest manual artillery correction",
        },
        {
          "@type": "Thing",
          name: "Iron Nest observed fire",
        },
        {
          "@type": "Thing",
          name: "Iron Nest convoy protection",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Pass is clear",
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
          title="Clear The Gorge Without the Ballistic Calculator"
          description="Restart the damaged Nest, scout east from K4 9:0, use each impact to correct the next shot, protect the convoy, and stop once the pass is clear."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheGorgeWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}