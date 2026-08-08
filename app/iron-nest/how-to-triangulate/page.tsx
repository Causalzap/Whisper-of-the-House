import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TriangulationContent from "@/data/iron-nest/how-to-triangulate.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/how-to-triangulate`;

const metadataTitle =
  "How to Triangulate in Iron Nest: Bearings & Position Reports";

const metadataDescription =
  "Learn Iron Nest triangulation with spotter bearings, distance constraints, chained reference points, Position Reports, intersections, and firing origins.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-opening-triangulation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-first-h-solution.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-rock-of-gibraltar-reference-chain.webp`,
];

const toc = [
  {
    id: "how-triangulation-works",
    label: "How triangulation works",
  },
  {
    id: "fire-and-light-example",
    label: "Fire and Light example",
  },
  {
    id: "bearing-origin",
    label: "Bearing origins",
  },
  {
    id: "draw-long-lines",
    label: "Draw the lines",
  },
  {
    id: "bearing-and-distance",
    label: "Bearing + distance",
  },
  {
    id: "two-possible-points",
    label: "Two possible points",
  },
  {
    id: "chained-measurements",
    label: "Chained measurements",
  },
  {
    id: "position-reports",
    label: "Position Reports",
  },
  {
    id: "one-position-report",
    label: "Why one report is not enough",
  },
  {
    id: "when-to-buy-more-intel",
    label: "When to buy more intel",
  },
  {
    id: "lines-do-not-cross",
    label: "Lines do not cross",
  },
  {
    id: "target-found-but-miss",
    label: "Target found but shot misses",
  },
  {
    id: "triangulation-workflow",
    label: "Triangulation workflow",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Fire and Light Walkthrough",
  },
  {
    href: "/iron-nest/rock-of-gibraltar-walkthrough",
    label: "Rock of Gibraltar Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/phantom-battery-walkthrough",
    label: "Phantom Battery Walkthrough",
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
      "How to Triangulate in Iron Nest: Bearings, Intersections & Position Reports",
    description:
      "Learn where spotter bearings begin, how to locate targets from intersections and distances, how Position Reports locate Iron Nest, and why the final turret bearing is different.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest map showing two spotter bearing lines intersecting at a target",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Triangulate in Iron Nest",
    description:
      "Use spotter bearings, distance measurements, chained reference points and Position Reports without confusing observation bearings with turret bearings.",
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
          item: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Triangulate in Iron Nest",
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
        "How to Triangulate in Iron Nest: Spotter Bearings, Distance Constraints, and Position Reports",
      description:
        "A player-focused guide to triangulation in Iron Nest. It explains why each bearing belongs to a specific observer or reference point, how two spotter bearings locate a target, why the final turret bearing must be measured separately from Iron Nest, how bearing-and-distance constructions work, how to handle two plausible intersections, why errors compound through chained reference points, how Position Reports reverse the same geometry to locate Iron Nest after movement, why one Position Report describes a line rather than an exact point, when more positional intelligence is worth requisitioning, and how to troubleshoot lines that do not cross or a target that was located correctly but still produces a bad firing solution.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-08",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "Iron Nest triangulation",
        },
        {
          "@type": "Thing",
          name: "Iron Nest spotter bearing",
        },
        {
          "@type": "Thing",
          name: "Iron Nest bearing",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Position Report",
        },
        {
          "@type": "Thing",
          name: "Iron Nest reference points",
        },
        {
          "@type": "Thing",
          name: "Iron Nest firing origin",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="How to Triangulate in Iron Nest"
          description="Use spotter bearings and distance constraints to locate the target first, then build a separate firing line from Iron Nest. This also covers chained references and Position Reports after movement."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TriangulationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}