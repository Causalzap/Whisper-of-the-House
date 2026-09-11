import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustLivingQuartersContent from "@/data/the-crust/living-quarters.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust/living-quarters`;

const metadataTitle =
  "The Crust Living Quarters Guide – Power, Oxygen & Colonists";

const metadataDescription =
  "Build working Living Quarters in The Crust with power, ice, water, oxygen, beds, food, a Science Lab, and Medical Block.";

const articleDescription =
  "A complete The Crust Living Quarters guide for Version 1.0, covering room planning, Electronic Board power, ice extraction, water, oxygen, beds, Hydroponic Farm, Kitchen, Fundamental Science Lab, Medical Block, and troubleshooting when the objective will not complete.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-living-quarters-ready.webp`;

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
    id: "find-ice",
    label: "Find ice & make water",
  },
  {
    id: "oxygen",
    label: "Build the Electrolysis Plant",
  },
  {
    id: "beds-food-kitchen",
    label: "Beds, Farm & Kitchen",
  },
  {
    id: "science-lab-medical-block",
    label: "Science Lab & Medical Block",
  },
  {
    id: "living-quarters-stuck",
    label: "Living Quarters stuck",
  },
  {
    id: "ready-for-colonists",
    label: "Ready for colonists",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Rover LPS Guide",
  },
  {
    href: "/the-crust/achievements",
    label: "The Crust Achievements Guide",
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
        width: 1600,
        height: 900,
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadataTitle,
    description: articleDescription,
    image: [heroImage],
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    dateModified: "2026-09-11",
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  },
  {
    "@context": "https://schema.org",
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
        item: `${siteUrl}/the-crust`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Living Quarters",
        item: pageUrl,
      },
    ],
  },
];

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
          title="The Crust Living Quarters Guide – Power, Oxygen & Colonists"
          description="Set up Living Quarters in the right order: plan enough underground space, connect the Electronic Board, turn ice into water and oxygen, then finish beds, food, science, and medical support before colonists arrive."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
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