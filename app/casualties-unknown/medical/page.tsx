import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CasualtiesUnknownMedicalContent from "@/data/casualties-unknown/medical.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/casualties-unknown/medical`;

const metadataTitle = "Casualties: Unknown Medical Guide: Treat Injuries";

const metadataDescription =
  "Treat bleeding, infection, fractures, dislocations, and internal bleeding in Casualties: Unknown. Learn Dressings, Splints, Tourniquets, and L.R.D. use.";

const articleDescription =
  "Read the UNI-HEALTH panel, choose treatments for external bleeding, infection, sepsis, fractures, dislocations, and internal bleeding, and understand the limits of Dressing, Tourniquet, Splint, Bruise Kit, L.R.D., Procoagulant, Chest Drain, and Bone Welding Tool. Handle hypothermia, overheating, radiation, and venom warnings.";

const imageUrls = [
  `${siteUrl}/images/casualties-unknown/casualties-unknown-medical-health-panel.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-medical-tourniquet.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-medical-fracture-indicator.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Identify injuries on the health panel and choose the right treatment for bleeding, infection, fractures, and internal bleeding.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "UNI-HEALTH panel showing vital signs and injuries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Treat bleeding, fractures, infections, and internal injuries in Casualties: Unknown.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "read-health-panel", label: "Read the Health Panel" },
  { id: "stop-external-bleeding", label: "Stop External Bleeding" },
  { id: "treat-infection", label: "Infection & Sepsis" },
  { id: "treat-fracture", label: "Fractures & Splints" },
  { id: "fix-dislocation", label: "Dislocated Joints" },
  { id: "treat-internal-bleeding", label: "Internal Bleeding" },
  { id: "medical-items", label: "Medical Items" },
  { id: "temperature-radiation-venom", label: "Temperature, Radiation & Venom" },
];

const relatedLinks = [
  { href: "/casualties-unknown/crafting", label: "Crafting: Dressing & Medical Supplies" },
  { href: "/casualties-unknown/progression", label: "Survive the Hazards in All 11 Layers" },
  { href: "/casualties-unknown", label: "Beginner Guide: Health & First Steps" },
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
          name: "Medical",
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
      headline: "Casualties: Unknown Medical Guide: How to Treat Bleeding, Infection, Fractures, and Internal Bleeding",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-10",
      dateModified: "2026-11-10",
      about: [
        { "@type": "VideoGame", name: "Casualties: Unknown" },
        { "@type": "Thing", name: "UNI-HEALTH panel and body status" },
        { "@type": "Thing", name: "External bleeding and Tourniquet" },
        { "@type": "Thing", name: "Infection and sepsis" },
        { "@type": "Thing", name: "Fracture, Splint, and dislocation" },
        { "@type": "Thing", name: "Internal bleeding, L.R.D., and Procoagulant" },
        { "@type": "Thing", name: "Hemothorax and Chest Drain" },
        { "@type": "Thing", name: "Hypothermia, radiation, and venom" },
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
          title="Casualties: Unknown Medical Guide: How to Treat Bleeding, Infection, Fractures, and Internal Bleeding"
          description="Read the health panel, identify the injured body part, and choose the right treatment for blood loss, infection, broken bones, and other conditions."
          gameTitle="Casualties: Unknown"
          gameHref="/casualties-unknown"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CasualtiesUnknownMedicalContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
