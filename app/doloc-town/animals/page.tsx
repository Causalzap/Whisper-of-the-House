import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownAnimalsContent from "@/data/doloc-town/animals.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/animals`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-livestock-shed-materials.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-livestock-shed-placement.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-feeding-trough-recipe.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-achievements-animal-care.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-horn-alpaca-price.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-animal-breeding-room.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Animals: Livestock, Feeding & Breeding Guide",
  description:
    "Unlock animals in Doloc Town with the Small Livestock Shed, Feeding Trough, Pheasant care, first Egg, breeding, manure, prices and troubleshooting.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Animals and Livestock Guide",
    description:
      "Build the first livestock setup in Doloc Town, keep animals fed, save the first Egg, decide when to buy more animals, and unlock breeding cleanly.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Gerald asking for materials for the first Small Livestock Shed in Doloc Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Animals and Livestock Guide",
    description:
      "Small Livestock Shed, Feeding Trough, Pheasant care, first Egg, animal prices, breeding, manure and livestock troubleshooting.",
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Animals",
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
        "Doloc Town Animals Guide: Small Livestock Shed, Feeding, Breeding, and Animal Care",
      description:
        "A practical Doloc Town livestock guide covering the Kenanimo and Gerald unlock route, Small Livestock Shed materials and placement, Animal Basics, Feeding Trough, Alfalfa and fallback feed, the first Stilttail Pheasant, first Egg progression, Horn Alpaca pricing, Breeding Room, Animal Toilet, daily care, Noah's Ark planning, and livestock troubleshooting.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Doloc Town",
        },
        {
          "@type": "Thing",
          name: "Doloc Town animals",
        },
        {
          "@type": "Thing",
          name: "Small Livestock Shed",
        },
        {
          "@type": "Thing",
          name: "Feeding Trough",
        },
        {
          "@type": "Thing",
          name: "Stilttail Pheasant",
        },
        {
          "@type": "Thing",
          name: "Breeding Room",
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

const toc = [
  {
    id: "unlock-livestock",
    label: "Unlock livestock",
  },
  {
    id: "shed-placement",
    label: "Place the Livestock Shed",
  },
  {
    id: "feeding-trough",
    label: "Feeding Trough and feed",
  },
  {
    id: "first-pheasant",
    label: "First Stilttail Pheasant",
  },
  {
    id: "first-egg",
    label: "Save the first Egg",
  },
  {
    id: "buy-more-animals",
    label: "When to buy more animals",
  },
  {
    id: "breeding-room",
    label: "Breeding Room",
  },
  {
    id: "animal-toilet",
    label: "Animal Toilet and manure",
  },
  {
    id: "daily-route",
    label: "Daily animal-care route",
  },
  {
    id: "noahs-ark",
    label: "Noah's Ark planning",
  },
  {
    id: "stuck",
    label: "Livestock troubleshooting",
  },
  {
    id: "when-to-expand",
    label: "When to expand livestock",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/achievements",
    label: "Doloc Town Achievements Guide",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
  {
    href: "/doloc-town/fish-breeding",
    label: "Fish Breeding Guide",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
  {
    href: "/doloc-town/walkthrough",
    label: "Doloc Town Walkthrough",
  },
];

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
          title="Doloc Town Animals and Livestock Guide"
          description="I unlock the Small Livestock Shed first, build a reliable feeding loop, use the first Stilttail Pheasant to prove the system, save the first Egg for progression, and only expand once space, feed, and money are ready."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownAnimalsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}