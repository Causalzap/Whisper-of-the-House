import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CasualtiesUnknownProgressionContent from "@/data/casualties-unknown/progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/casualties-unknown/progression`;

const metadataTitle = "Casualties: Unknown Progression Guide: All 11 Layers";

const metadataDescription =
  "Find your way through all 11 Casualties: Unknown layers, survive Frozen Chasm, Fungal Pools, crystals, and magma, then recover the cargo and reach the surface.";

const articleDescription =
  "Descend through Gravel Lands, Deeper Gravel Lands, Dried Desert, Wasteland, Overgrown Depths, Frozen Chasm, Fungal Pools, Crystalline Hollow, Geothermal Vents, and Where We Must Reach. Recover the cargo, use the high-powered drill pod, then climb through Crimson Ascent to the surface.";

const imageUrls = [
  `${siteUrl}/images/casualties-unknown/casualties-unknown-cargo-drill-pod.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-frozen-chasm-heat-fern.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-geothermal-vents-magma.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "A layer-by-layer route through Frozen Chasm, Fungal Pools, Crystalline Hollow, Geothermal Vents, the cargo, and Crimson Ascent.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "High-powered drill pod near the cargo return route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Survive all 11 layers, collect the cargo, and climb back to the surface.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "all-11-layers", label: "All 11 Layers" },
  { id: "what-to-prepare-before-descending", label: "Before Descending" },
  { id: "layer-1-gravel-lands", label: "Layer 1: Gravel Lands" },
  { id: "layer-2-deeper-gravel-lands", label: "Layer 2: Deeper Gravel Lands" },
  { id: "layer-3-dried-desert", label: "Layer 3: Dried Desert" },
  { id: "layer-4-wasteland", label: "Layer 4: Wasteland" },
  { id: "layer-5-overgrown-depths", label: "Layer 5: Overgrown Depths" },
  { id: "layer-6-frozen-chasm", label: "Layer 6: Frozen Chasm" },
  { id: "layer-7-fungal-pools", label: "Layer 7: Fungal Pools" },
  { id: "layer-8-crystalline-hollow", label: "Layer 8: Crystalline Hollow" },
  { id: "layer-9-geothermal-vents", label: "Layer 9: Geothermal Vents" },
  { id: "layer-10-where-we-must-reach", label: "Layer 10: Cargo" },
  { id: "layer-11-crimson-ascent", label: "Layer 11: Crimson Ascent" },
  { id: "should-you-skip-layers", label: "Drill Pod Shortcuts" },
];

const relatedLinks = [
  { href: "/casualties-unknown", label: "Beginner Guide: First Steps & Controls" },
  { href: "/casualties-unknown/crafting", label: "Crafting: Equipment & Material Requirements" },
  { href: "/casualties-unknown/medical", label: "Medical: Treat Injuries During the Descent" },
  { href: "/casualties-unknown/endings", label: "All Three Endings" },
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
          name: "Casualties: Unknown",
          item: `${siteUrl}/casualties-unknown`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression",
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
      headline: "Casualties: Unknown Progression Guide: All 11 Layers and How to Reach the Surface",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-10",
      dateModified: "2026-11-10",
      about: [
        { "@type": "VideoGame", name: "Casualties: Unknown" },
        { "@type": "Thing", name: "All eleven layers" },
        { "@type": "Thing", name: "Sound Cannons and radiation in Wasteland" },
        { "@type": "Thing", name: "Frozen Chasm and Fungal Pools" },
        { "@type": "Thing", name: "Crystalline Hollow effects" },
        { "@type": "Thing", name: "Geothermal Vents and magma" },
        { "@type": "Thing", name: "Cargo and high-powered drill pod" },
        { "@type": "Thing", name: "Crimson Ascent and surface return" },
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
          title="Casualties: Unknown Progression Guide: All 11 Layers and How to Reach the Surface"
          description="Follow the hazards and objectives of each layer, recover the cargo, and make your way back to the surface through Crimson Ascent."
          gameTitle="Casualties: Unknown"
          gameHref="/casualties-unknown"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CasualtiesUnknownProgressionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
