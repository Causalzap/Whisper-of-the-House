import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustLivingQuartersContent from "@/data/the-crust/living-quarters.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-crust`;
const pageUrl = `${hubUrl}/living-quarters`;

const metadataTitle =
  "The Crust Living Quarters Guide: Power, Oxygen & Colonists";

const metadataDescription =
  "Build Living Quarters in The Crust with power, ventilation, water, oxygen, 8 beds, food, and colonist support, plus fixes when the objective gets stuck.";

const articleDescription =
  "A The Crust Version 1.0 Living Quarters guide covering room planning, the Electronic Board, ventilation, ice and water production, oxygen, eight beds, Hydroponic Farm and Kitchen requirements, the ready-for-colonists state, post-arrival science and medical support, CPU limits, and common progression blockers.";

const imageUrls = [
  `${siteUrl}/images/the-crust/the-crust-living-quarters-ready.webp`,
  `${siteUrl}/images/the-crust/the-crust-living-quarters-room-planner.webp`,
  `${siteUrl}/images/the-crust/the-crust-living-quarters-electronic-board.webp`,
  `${siteUrl}/images/the-crust/the-crust-living-quarters-ice-melter.webp`,
  `${siteUrl}/images/the-crust/the-crust-living-quarters-beds-farm-kitchen.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "build-living-quarters",
    label: "Build Living Quarters",
  },
  {
    id: "power-living-quarters",
    label: "Connect the Electronic Board",
  },
  {
    id: "ventilation",
    label: "Ventilation & heat",
  },
  {
    id: "find-ice",
    label: "Ice & water",
  },
  {
    id: "oxygen",
    label: "Make oxygen",
  },
  {
    id: "beds-food-kitchen",
    label: "8 beds, Farm & Kitchen",
  },
  {
    id: "ready-for-colonists",
    label: "Ready for colonists",
  },
  {
    id: "after-colonists-arrive",
    label: "After colonists arrive",
  },
  {
    id: "living-quarters-stuck",
    label: "Living Quarters stuck",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/walkthrough",
    label: "The Crust 1.0 Walkthrough",
  },
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/contracts-guide",
    label: "Contracts & Online Market Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Cargo Dock Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Completed Living Quarters ready for colonists in The Crust",
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
          name: "The Crust",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Living Quarters Guide",
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
        "The Crust Living Quarters Guide: Power, Oxygen and Colonists",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-13",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Crust",
        },
        {
          "@type": "Thing",
          name: "Living Quarters",
        },
        {
          "@type": "Thing",
          name: "Electronic Board",
        },
        {
          "@type": "Thing",
          name: "Ventilation",
        },
        {
          "@type": "Thing",
          name: "Electrolysis Plant",
        },
        {
          "@type": "Thing",
          name: "Hydroponic Farm",
        },
        {
          "@type": "Thing",
          name: "Colonists",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="The Crust Living Quarters Guide: Power, Oxygen & Colonists"
          description="Build a working habitation block from the room and Electronic Board through ventilation, water, oxygen, beds and food, then diagnose why colonists or later support systems are not progressing."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustLivingQuartersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}