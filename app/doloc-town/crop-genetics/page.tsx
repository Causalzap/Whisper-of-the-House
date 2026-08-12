import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownCropGeneticsContent from "@/data/doloc-town/crop-genetics.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/crop-genetics`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-achievements-gene-activation-chamber.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-gene-archive-attic-letter.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Crop Genetics: Genes, Capsules & Synthesis Guide",
  description:
    "Learn Doloc Town crop genetics from the Gene Activation Chamber and Archive Attic to Gene Capsules, cloning, multi-gene synthesis and troubleshooting.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Crop Genetics Guide",
    description:
      "Progress from your first latent gene to reusable multi-gene crop lines with the Gene Activation Chamber, Archive Attic, capsules, cloning, and synthesis.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Doloc Town Gene Activation Chamber recipe and latent gene description",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Crop Genetics Guide",
    description:
      "Gene Activation Chamber, Archive Attic, Gene Capsules, cloning, synthesis, multi-gene crops and genetics troubleshooting.",
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
          name: "Crop Genetics",
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
        "Doloc Town Crop Genetics Guide: Gene Activation Chamber, Gene Capsules, Cloning, and Multi-Gene Synthesis",
      description:
        "A practical Doloc Town crop genetics guide covering Gene 101, the powered Gene Activation Chamber, latent genes, the Archive Attic tutorial, Gene Capsules, gene extraction, duplication, Gene Synthesizer, three-gene crop planning, Seed Compressor backups, achievement checkpoints, and genetics troubleshooting.",
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
          name: "Doloc Town crop genetics",
        },
        {
          "@type": "Thing",
          name: "Gene Activation Chamber",
        },
        {
          "@type": "Thing",
          name: "Gene Capsule",
        },
        {
          "@type": "Thing",
          name: "Gene Synthesizer",
        },
        {
          "@type": "Thing",
          name: "Multi-gene crops",
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
    id: "when-to-start",
    label: "When to start genetics",
  },
  {
    id: "power-first",
    label: "Power the Gene Chamber",
  },
  {
    id: "activate-first-gene",
    label: "Activate the first gene",
  },
  {
    id: "archive-attic",
    label: "Archive Attic tutorial",
  },
  {
    id: "gene-capsules",
    label: "Gene Capsules",
  },
  {
    id: "duplicate-before-risk",
    label: "Duplicate valuable gene lines",
  },
  {
    id: "gene-synthesizer",
    label: "Gene Synthesizer",
  },
  {
    id: "what-genes-change",
    label: "What genes change",
  },
  {
    id: "seed-compressor",
    label: "Seed Compressor backups",
  },
  {
    id: "achievement-checkpoints",
    label: "Gene achievement checkpoints",
  },
  {
    id: "troubleshooting",
    label: "Genetics troubleshooting",
  },
  {
    id: "when-to-stop",
    label: "When to stop investing",
  },
  {
    id: "owner-boundary",
    label: "What this guide owns",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
  {
    href: "/doloc-town/achievements",
    label: "Doloc Town Achievements Guide",
  },
  {
    href: "/doloc-town/acid-rain",
    label: "Acid Rain and Crop Protection",
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
          title="Doloc Town Crop Genetics Guide"
          description="I wait until power and basic progression are stable, activate one useful latent gene, follow the Archive Attic tutorial, preserve valuable lines, and only spend Titanium on cloning and synthesis when the farm can use the result."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownCropGeneticsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}