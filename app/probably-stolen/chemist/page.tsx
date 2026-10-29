import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ChemistContent from "@/data/probably-stolen/chemist.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/chemist`;

const metadataTitle = "Probably Stolen Chemist: Dream Dust Recipe & Cartel Quota";
const metadataDescription = "Make Dream Dust in Probably Stolen with a Blender, Heating Plate, Evaporator and Chem Finisher. Fix wet ingredients and meet Cartel quotas.";
const articleDescription = "Start the Chemist scenario, make Dream Dust from Dream Caps and Alcohol with a Blender, Heating Plate, Evaporator and Chem Finisher, improve chemical purity, and resolve Wet Ingredient Detected. Deliver 10 Dream Dust at 40% purity, then prepare 15 at 45% for the next Cartel collection.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/chemist-dream-dust-4695-purity.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Make Dream Dust step by step, troubleshoot chemistry machines, and fulfill the first Cartel collections.",
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: "Probably Stolen Dream Dust vial showing 46.95 percent purity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Make Dream Dust, raise purity, fix wet-ingredient errors and prepare the weekly Cartel delivery.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "chemist-start", label: "Starting Chemist Equipment" },
  { id: "dream-dust-recipe", label: "Dream Dust Recipe" },
  { id: "dream-dust-purity", label: "Increase Dream Dust Purity" },
  { id: "chemist-errors", label: "Chemistry Errors & Fixes" },
  { id: "caffeine-pills", label: "Make Caffeine Pills" },
  { id: "cartel-first-delivery", label: "First Cartel Delivery" },
  { id: "chemist-resources", label: "Materials & Equipment Upgrades" },
  { id: "chemist-selling", label: "Selling vs Saving Dream Dust" },
  { id: "chemist-next-week", label: "Prepare the Next Collection" },
];

const relatedLinks = [
  { href: "/probably-stolen", label: "Probably Stolen: Starting Scenarios" },
  { href: "/probably-stolen/factions", label: "Sector 13 Cartel Reputation" },
  { href: "/probably-stolen/achievements", label: "Lab Pure & Other Achievements" },
  { href: "/probably-stolen/money-making", label: "Compare Production Costs & Cash Flow" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Probably Stolen", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Chemist", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "How Do You Make Dream Dust and Meet the Cartel Quota?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-29",
      dateModified: "2026-10-29",
      about: [
        { "@type": "VideoGame", name: "Probably Stolen" },
        { "@type": "Thing", name: "Chemist starting scenario" },
        { "@type": "Thing", name: "Dream Dust recipe and extraction" },
        { "@type": "Thing", name: "Blender and Heating Plate" },
        { "@type": "Thing", name: "Evaporator and Chem Finisher" },
        { "@type": "Thing", name: "Dream Dust purity" },
        { "@type": "Thing", name: "Sector 13 Cartel delivery" },
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
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
          title="How Do You Make Dream Dust and Meet the Cartel Quota?"
          description="Prepare Dream Caps, heat and evaporate the extract, finish Dream Dust vials, fix common errors, and deliver the Cartel quota."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ChemistContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
