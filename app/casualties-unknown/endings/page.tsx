import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CasualtiesUnknownEndingsContent from "@/data/casualties-unknown/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/casualties-unknown/endings`;

const metadataTitle = "Casualties: Unknown: All 3 Endings & M.E.R.C. Scarf";

const metadataDescription =
  "Unlock the Bio-pod, Escape, and M.E.R.C. endings in Casualties: Unknown, including Unchipped requirements, the lab escape, and all six scarf chips.";

const articleDescription =
  "Reach the Bio-pod ending by complying at the company facility, unlock Escape with an Unchipped run and firearm, complete the anesthetic and cargo-removal sequence, and trigger M.E.R.C. by collecting six hidden chips, crafting the M.E.R.C. Scarf at 18 INT, and carrying it to the surface.";

const imageUrls = [
  `${siteUrl}/images/casualties-unknown/casualties-unknown-biopod-ending.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-escape-freedom.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-escape-lab-alarm.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Get the Bio-pod, Escape, and M.E.R.C. endings, with the lab escape steps and six hidden M.E.R.C. chip locations.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Bio-pod ending screen in Casualties: Unknown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "All three endings, the laboratory escape, and six M.E.R.C. chips.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "which-ending", label: "Choose an Ending" },
  { id: "biopod-ending", label: "Bio-pod Ending" },
  { id: "escape-ending", label: "Escape Ending" },
  { id: "merc-ending", label: "M.E.R.C. Ending" },
  { id: "character-endings", label: "Character Differences" },
];

const relatedLinks = [
  { href: "/casualties-unknown/progression", label: "All 11 Layers & the Cargo Return" },
  { href: "/casualties-unknown/crafting", label: "Crafting & INT Requirements" },
  { href: "/casualties-unknown", label: "Beginner Guide: First Steps" },
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
          name: "Endings",
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
      headline: "How Do You Get All Three Endings in Casualties: Unknown?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-10",
      dateModified: "2026-11-10",
      about: [
        { "@type": "VideoGame", name: "Casualties: Unknown" },
        { "@type": "Thing", name: "Bio-pod ending and Company's Best" },
        { "@type": "Thing", name: "Escape ending and Company's Worst" },
        { "@type": "Thing", name: "Laboratory cargo-removal sequence" },
        { "@type": "Thing", name: "M.E.R.C. Scarf" },
        { "@type": "Thing", name: "Six hidden M.E.R.C. chips" },
        { "@type": "Thing", name: "Experiment, Milky, and Dune scenes" },
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
          title="How Do You Get All Three Endings in Casualties: Unknown?"
          description="Follow the requirements for Bio-pod, Escape, and M.E.R.C., including the laboratory sequence and all six hidden scarf chips."
          gameTitle="Casualties: Unknown"
          gameHref="/casualties-unknown"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CasualtiesUnknownEndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
