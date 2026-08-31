import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2ColdProtectionContent from "@/data/breathedge-2/cold-protection.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/cold-protection`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-cold-protection-objective-100.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-cold-protection-106.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-cut-foam-insulation.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-space-suit-cold-upgrades.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Cold Protection Guide: How to Reach 100+",
  description:
    "Reach 100 Cold Protection with Foam and suit upgrades, understand protection tradeoffs, and avoid losing the cold route to damaged gear.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Reach 100 Cold Protection in Breathedge 2",
    description:
      "Build past the 100 Cold Protection requirement, use Foam and improvised suit pieces, and understand why 100 does not make you immune to cold.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Breathedge 2 Space Suit showing 106 Cold Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Cold Protection Guide",
    description:
      "Reach 100+ Cold Protection, choose insulation pieces and understand the risks of damaged protection.",
    images: [imageUrls[1]],
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
          name: "Breathedge 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cold Protection Guide",
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
        "Breathedge 2 Cold Protection Guide: Reach 100, Choose Insulation and Survive the Cold",
      description:
        "A Breathedge 2 Cold Protection guide covering the Raise Cold Protection to 100 objective, the Space Suit wardrobe, Foam and Cardboard insulation, a 106 Cold setup, secondary stat tradeoffs and cold-route survival.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      about: [
        {
          "@type": "VideoGame",
          name: "Breathedge 2",
        },
        {
          "@type": "Thing",
          name: "Cold Protection",
        },
        {
          "@type": "Thing",
          name: "Space Suit",
        },
        {
          "@type": "Thing",
          name: "Foam",
        },
        {
          "@type": "Thing",
          name: "Cardboard",
        },
        {
          "@type": "Thing",
          name: "Frostbite",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Reach 100 Cold Protection Without Overbuilding the Suit"
          description="Use the Space Suit wardrobe to cross the 100-point cold gate, then balance insulation against hunger, armor and other protection stats."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "raise-cold-protection",
              label: "Raise Cold Protection to 100",
            },
            {
              id: "reach-100-cold",
              label: "Reach 100+ Cold",
            },
            {
              id: "cardboard-and-foam",
              label: "Cardboard and Foam",
            },
            {
              id: "space-suit-tradeoffs",
              label: "Space Suit tradeoffs",
            },
            {
              id: "why-you-still-freeze",
              label: "Why 100 is not immunity",
            },
            {
              id: "when-to-turn-back",
              label: "When to retreat",
            },
            {
              id: "after-100-cold",
              label: "What to do after 100",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/outskirts-walkthrough",
              label: "Outskirts Walkthrough",
            },
            {
              href: "/breathedge-2/oxygen-guide",
              label: "Oxygen Guide",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
            {
              href: "/breathedge-2/resources-crafting",
              label: "Resources & Crafting Guide",
            },
          ]}
        >
          <Breathedge2ColdProtectionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}