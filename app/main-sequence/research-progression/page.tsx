
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainSequenceResearchProgressionContent from "@/data/main-sequence/research-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/main-sequence`;
const pageUrl = `${hubUrl}/research-progression`;

const metadataTitle =
  "Main Sequence Research Guide: What to Unlock Next";

const metadataDescription =
  "Find the Main Sequence research order, unlock Quantum and Astronomic Science, get Stellar Survey Data, and produce Encoded Simulation Matrices.";

const articleTitle =
  "Main Sequence Research Guide: What Should You Unlock Next?";

const articleDescription =
  "Progress through Material, Computation, Electromagnetic, Quantum, Astronomic, and Xenobiologic Science. Unlock Slipstream and interstellar travel, collect Stellar Survey Data, and fix stalled research.";

const imageUrls = [
  `${siteUrl}/images/main-sequence/main-sequence-early-research-queue.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-quantum-science-unlocks.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-astronomic-science-research-blocked.webp`,
];

const heroImage = imageUrls[2];

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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Main Sequence Deep Space Observatory research showing the missing Astronomic Science requirement",
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

const toc = [
  {
    id: "research-order",
    label: "Best Research Order",
  },
  {
    id: "early-research",
    label: "Material & Computation Science",
  },
  {
    id: "enrichment-and-electromagnetic",
    label: "Electromagnetic Science",
  },
  {
    id: "slipstream-drive",
    label: "Slipstream Drive",
  },
  {
    id: "quantum-science",
    label: "Quantum Science",
  },
  {
    id: "relic-technology",
    label: "Relic Technology",
  },
  {
    id: "relic-destroyer",
    label: "Relic Destroyer",
  },
  {
    id: "interstellar-progression",
    label: "Interstellar Travel",
  },
  {
    id: "stellar-survey-data",
    label: "Stellar Survey Data",
  },
  {
    id: "astronomic-science",
    label: "Astronomic Science",
  },
  {
    id: "deep-space-observatory",
    label: "Deep Space Observatory",
  },
  {
    id: "xenobiologic-science",
    label: "Xenobiologic Science",
  },
  {
    id: "research-not-progressing",
    label: "Research Not Progressing",
  },
  {
    id: "next-research-goal",
    label: "What to Research Next",
  },
];

const relatedLinks = [
  {
    href: "/main-sequence",
    label: "Beginner Guide: First Station & Research",
  },
  {
    href: "/main-sequence/factory-automation",
    label: "Factory Automation: Advanced Materials",
  },
  {
    href: "/main-sequence/ship-design",
    label: "Ship Design: Warp Drives & Upgrades",
  },
  {
    href: "/main-sequence/ship-logistics",
    label: "Ship Logistics: Interstellar Cargo Routes",
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
          name: "Main Sequence",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Research Progression",
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
      datePublished: "2026-11-21",
      dateModified: "2026-11-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Main Sequence",
        },
        {
          "@type": "Thing",
          name: "Research Tree and Science unlocks",
        },
        {
          "@type": "Thing",
          name: "Material, Computation and Electromagnetic Science",
        },
        {
          "@type": "Thing",
          name: "Quantum Science and Superconductor Coils",
        },
        {
          "@type": "Thing",
          name: "Relic Technology and Relic Destroyer",
        },
        {
          "@type": "Thing",
          name: "Interstellar Warp Drive research",
        },
        {
          "@type": "Thing",
          name: "Stellar Survey Data and Astronomic Science",
        },
        {
          "@type": "Thing",
          name: "Deep Space Observatory and Xenobiologic Science",
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
          description={articleDescription}
          gameTitle="Main Sequence"
          gameHref="/main-sequence"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MainSequenceResearchProgressionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
