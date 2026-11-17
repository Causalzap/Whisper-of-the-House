
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowTheyBuiltThePyramidsAutomationContent from "@/data/how-they-built-the-pyramids/automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-they-built-the-pyramids`;
const pageUrl = `${hubUrl}/automation`;

const metadataTitle =
  "How They Built the Pyramids Automation Guide: Belts & Bricks";

const metadataDescription =
  "Automate brick production in How They Built the Pyramids. Fix Clay Hopper range, conveyor sorting, kiln bottlenecks, power, and brick transport.";

const articleTitle =
  "How They Built the Pyramids Automation: How Do You Keep Bricks Moving?";

const articleDescription =
  "Keep clay and bricks moving through an automated production line. Find why Clay Hoppers miss molds, Brick Crates fail to collect finished bricks, Sorters back up, and machines stop without power or operators. Improve Polishing Wheel and Glazing Kiln throughput, then deliver bricks to higher pyramid layers using conveyors, trebuchets, and Pigeon Lofts.";

const imageUrls = [
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-clay-mold-standing-fan-drying.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-polishing-wheel-crew-upgrades.webp`,
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
    description:
      "Fix clay delivery, drying, conveyor sorting, machine power, and brick transport in How They Built the Pyramids.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "Polishing Wheel upgrade menu showing Polish Time, Bins, Crew capacity, and assigned Shabti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Keep brick production running with Clay Hoppers, Sorters, conveyors, polishing machines, and long-distance transport.",
    images: [imageUrls[1]],
  },
};

const toc = [
  {
    id: "where-production-stops",
    label: "Why Production Stops",
  },
  {
    id: "clay-hopper-and-mold-racks",
    label: "Clay Hopper & Mold Racks",
  },
  {
    id: "drying-and-brick-collection",
    label: "Drying & Brick Collection",
  },
  {
    id: "conveyor-belts-and-ramps",
    label: "Conveyor Belts & Ramps",
  },
  {
    id: "sorter-and-clay-overflow",
    label: "Sorter & Clay Overflow",
  },
  {
    id: "sorter-controls",
    label: "Sorter Controls After 0.42",
  },
  {
    id: "polishing-glazing-bottlenecks",
    label: "Polishing & Glazing Bottlenecks",
  },
  {
    id: "polishing-wheel-upgrades",
    label: "Polishing Wheel Upgrades",
  },
  {
    id: "power-and-operators",
    label: "Power & Operators",
  },
  {
    id: "gold-production",
    label: "Goldsmith's Crucible",
  },
  {
    id: "trebuchets-and-pigeon-lofts",
    label: "Trebuchets & Pigeon Lofts",
  },
  {
    id: "pigeon-loft-range",
    label: "Pigeon Loft Range Problems",
  },
  {
    id: "automation-troubleshooting",
    label: "Automation Troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/how-they-built-the-pyramids",
    label: "Beginner Guide: First Upgrades & Pyramid Progression",
  },
  {
    href: "/how-they-built-the-pyramids/shabti",
    label: "Shabti: Jobs, Traits & Work Posts",
  },
  {
    href: "/how-they-built-the-pyramids/achievements",
    label: "Achievements: All 18 Requirements",
  },
];

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
          name: "How They Built the Pyramids",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automation",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-17",
      dateModified: "2026-11-17",
      about: [
        {
          "@type": "VideoGame",
          name: "How They Built the Pyramids",
        },
        {
          "@type": "Thing",
          name: "Clay Hopper and Mold Rack automation",
        },
        {
          "@type": "Thing",
          name: "Brick drying and Brick Crate collection",
        },
        {
          "@type": "Thing",
          name: "Conveyor belts and ramps",
        },
        {
          "@type": "Thing",
          name: "Sorter exit rules and clay overflow",
        },
        {
          "@type": "Thing",
          name: "Polishing Wheel and Glazing Kiln",
        },
        {
          "@type": "Thing",
          name: "Power shafts and machine operators",
        },
        {
          "@type": "Thing",
          name: "Goldsmith's Crucible",
        },
        {
          "@type": "Thing",
          name: "Trebuchet and Pigeon Loft brick transport",
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
          title={articleTitle}
          description="Fix clay supply, drying, sorting, machine bottlenecks, and transport so your factory keeps delivering bricks."
          gameTitle="How They Built the Pyramids"
          gameHref="/how-they-built-the-pyramids"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowTheyBuiltThePyramidsAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
