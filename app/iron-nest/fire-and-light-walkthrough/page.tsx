import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FireAndLightWalkthroughContent from "@/data/iron-nest/fire-and-light-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/iron-nest`;
const pageUrl = `${hubUrl}/fire-and-light-walkthrough`;

const metadataTitle =
  "Iron Nest Fire and Light Walkthrough: Star Shell Correction";

const metadataDescription =
  "Triangulate the first Fire and Light target, destroy two follow-up hostiles, read the 3.28 km Star Shell correction, and finish the palace starburst.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-opening-triangulation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-first-h-solution.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-two-additional-targets.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-star-shell-order.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-star-shell-correction.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-and-light-final-star-solution.webp`,
];

const toc = [
  {
    id: "fire-and-light-route",
    label: "Fire and Light route",
  },
  {
    id: "read-fire-and-light-orders",
    label: "Separate both phases",
  },
  {
    id: "mark-iron-nest-and-spotters",
    label: "Mark the spotters",
  },
  {
    id: "calculate-first-h-shot",
    label: "Calculate the first H shot",
  },
  {
    id: "find-two-additional-hostiles",
    label: "Find the two follow-up targets",
  },
  {
    id: "switch-to-star-shells",
    label: "Switch to Star Shells",
  },
  {
    id: "plot-first-star-shell",
    label: "Plot the first Star shot",
  },
  {
    id: "read-star-shell-correction",
    label: "Read the 3.28 km correction",
  },
  {
    id: "build-corrected-star-point",
    label: "Build the corrected point",
  },
  {
    id: "fire-corrected-star-shell",
    label: "Fire the corrected Star Shell",
  },
  {
    id: "fire-and-light-completion",
    label: "Complete Fire and Light",
  },
  {
    id: "fire-and-light-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Guide Hub",
  },
  {
    href: "/iron-nest/liberation-walkthrough",
    label: "Liberation Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
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
    title: "Iron Nest Fire and Light Walkthrough",
    description:
      "Locate the opening target from two spotters, clear the follow-up hostiles, then use the observer’s 3.28 km correction to finish the royal-palace Star Shell mission.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Fire and Light mission briefing describing the hostile city element and royal palace illumination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Fire and Light Walkthrough",
    description:
      "Triangulate the H-shell target, clear both follow-up hostiles, and apply the 3.28 km Star Shell correction.",
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
          name: "Fire and Light Walkthrough",
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
        "Iron Nest Fire and Light Walkthrough: Spotter Triangulation, Follow-Up Hostiles, Star Shell Correction, and Palace Starburst",
      description:
        "A player-focused Iron Nest Fire and Light walkthrough explaining how to mark Iron Nest and the two opening spotters, draw the reported 96-degree and 53-degree bearings, locate the first hostile target at their intersection, measure the final firing solution from Iron Nest, use the verified H-shell example of 65.7 degrees and 12.91 km, destroy the two additional hostile elements revealed by reconnaissance, clear the completed destructive-fire map lines, switch to the Star Shell-only royal-palace mission, plot the first illumination point, interpret the yellow arrow and 3.28 km observer correction from the first impact, recalculate the corrected Star Shell solution, and stand down after Starburst confirmed.",
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
          name: "Iron Nest Fire and Light",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Fire and Light walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest spotter triangulation",
        },
        {
          "@type": "Thing",
          name: "Iron Nest 96 and 53 degree bearings",
        },
        {
          "@type": "Thing",
          name: "Iron Nest H shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest two additional hostile elements",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Star Shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Star Shell correction",
        },
        {
          "@type": "Thing",
          name: "Iron Nest 3.28 km correction",
        },
        {
          "@type": "Thing",
          name: "Iron Nest royal palace starburst",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Starburst confirmed",
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
          title="Finish Fire and Light With the Correct Star Shell Adjustment"
          description="Locate the opening hostile target from two spotters, clear the follow-up pair, then move 3.28 km from the first Star Shell impact to complete the palace illumination."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FireAndLightWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}