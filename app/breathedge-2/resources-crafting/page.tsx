import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2ResourcesCraftingContent from "@/data/breathedge-2/resources-crafting.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/resources-crafting`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-inventory-crafting-menu.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-washing-machine-electronics.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-electrical-tape-pipe.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-aluminum-node.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-depot-light-bulb-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-rubber-pad-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-refined-metal-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-titanium-spiked-ball.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-backpack-185-capacity.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Resources & Crafting Guide: What to Keep",
  description:
    "Find Electronics, Tape, Aluminum, Light Bulbs, Rubber and Titanium, decide what to keep, and know when rare materials are worth spending.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Resources and Crafting Guide",
    description:
      "Recognize key Chapter 1 materials, avoid wasteful scavenging trips, protect repair bottlenecks and decide when Titanium is worth spending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[7],
        width: 1600,
        height: 900,
        alt: "Titanium appearing as a small spiked ball in Breathedge 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Resources & Crafting Guide",
    description:
      "Find important resources, choose what to keep and make better crafting decisions through Chapter 1.",
    images: [imageUrls[7]],
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
          name: "Resources & Crafting Guide",
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
        "Breathedge 2 Resources and Crafting Guide: Locations, Priorities and What to Keep",
      description:
        "A Breathedge 2 Chapter 1 resource and crafting guide covering Electronics, Wires, Electrical Tape, Aluminum, Plastic, Light Bulbs, Rubber, Refined Metal, Titanium, Ice, insulation materials, resource recognition, scavenging priorities and the Backpack upgrade from 110 to 185 carry weight.",
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
          name: "Breathedge 2 resources",
        },
        {
          "@type": "Thing",
          name: "Crafting",
        },
        {
          "@type": "Thing",
          name: "Electrical Tape",
        },
        {
          "@type": "Thing",
          name: "Electronics",
        },
        {
          "@type": "Thing",
          name: "Aluminum",
        },
        {
          "@type": "Thing",
          name: "Light Bulbs",
        },
        {
          "@type": "Thing",
          name: "Rubber",
        },
        {
          "@type": "Thing",
          name: "Refined Metal",
        },
        {
          "@type": "Thing",
          name: "Titanium",
        },
        {
          "@type": "Thing",
          name: "Backpack",
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
          title="What I Keep, Where I Find It and When I Spend It"
          description="Recognize the materials that repeatedly block Chapter 1 repairs, carry what the next job needs and spend scarce resources when the payoff justifies the detour."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "what-i-keep",
              label: "What I keep",
            },
            {
              id: "how-resources-work",
              label: "How resource gathering works",
            },
            {
              id: "early-repair-materials",
              label: "Early repair materials",
            },
            {
              id: "aluminum-plastic",
              label: "Aluminum and Plastic",
            },
            {
              id: "depot-materials",
              label: "Depot materials",
            },
            {
              id: "titanium-backpack",
              label: "Titanium and Backpack",
            },
            {
              id: "ice-insulation",
              label: "Ice and insulation",
            },
            {
              id: "when-to-stop-scavenging",
              label: "When to stop scavenging",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/walkthrough",
              label: "Chapter 1 Walkthrough",
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
              href: "/breathedge-2/cold-protection",
              label: "Cold Protection Guide",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
            {
              href: "/breathedge-2/antenna-locations",
              label: "Three Antennas & Debris Locations",
            },
          ]}
        >
          <Breathedge2ResourcesCraftingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}