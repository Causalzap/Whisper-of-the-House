
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowTheyBuiltThePyramidsAchievementsContent from "@/data/how-they-built-the-pyramids/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-they-built-the-pyramids`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "How They Built the Pyramids Achievements: All 18 Requirements";

const metadataDescription =
  "Unlock all 18 How They Built the Pyramids achievements, including Steady Chisel, Spin Doctor, Gold Fever, Worth Its Weight, and both hidden achievements.";

const articleTitle =
  "How They Built the Pyramids Achievements: How Do You Unlock All 18?";

const articleDescription =
  "Complete all 18 Steam achievements in How They Built the Pyramids. Track brick placement and pyramid layers, hire a Gold Shabti, complete a monument, operate 100 conveyor tiles, reach 32 RPM, collect gold chips, trade with the Nile trader, carve a 100-quality engraving, faint from desert heat, crown the pyramid, and leave Earth.";

const imageUrls = [
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-monument-completion.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-scribes-bench-carving-input.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-sun-of-ra-99-percent-carving.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-final-capstone.webp`,
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-leave-earth-departure.webp`,
];

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
    description:
      "Complete all 18 Steam achievements, including 100-quality engraving, 32 RPM, Gold Shabti, and the two hidden achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        alt: "Final pyramid naming screen with the Crown It confirmation button",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find all 18 achievement conditions, including Steady Chisel, Spin Doctor, Too Much Sun, and Now You Know.",
    images: [imageUrls[3]],
  },
};

const toc = [
  {
    id: "all-achievements",
    label: "All 18 Achievements",
  },
  {
    id: "pyramid-progress",
    label: "Brick & Layer Milestones",
  },
  {
    id: "touched-by-ra",
    label: "Touched by Ra",
  },
  {
    id: "hired-help-worth-its-weight",
    label: "Hired Help & Worth Its Weight",
  },
  {
    id: "blessed-monument",
    label: "Blessed: Complete a Monument",
  },
  {
    id: "reed-highway",
    label: "Reed Highway: 100 Belt Tiles",
  },
  {
    id: "gold-fever",
    label: "Gold Fever",
  },
  {
    id: "spin-doctor",
    label: "Spin Doctor: 32 RPM",
  },
  {
    id: "down-the-nile",
    label: "Down the Nile",
  },
  {
    id: "scribe-and-steady-chisel",
    label: "Scribe & Steady Chisel",
  },
  {
    id: "perfect-100-quality",
    label: "Perfect 100-Quality Carving",
  },
  {
    id: "too-much-sun",
    label: "Too Much Sun",
  },
  {
    id: "capstone-and-now-you-know",
    label: "Capstone & Now You Know",
  },
  {
    id: "missing-achievements",
    label: "Achievements Not Unlocking",
  },
  {
    id: "achievement-order",
    label: "Completion Order",
  },
];

const relatedLinks = [
  {
    href: "/how-they-built-the-pyramids",
    label: "Beginner Guide: Start, Build & Finish the Pyramid",
  },
  {
    href: "/how-they-built-the-pyramids/automation",
    label: "Automation: Conveyors, Power & Brick Transport",
  },
  {
    href: "/how-they-built-the-pyramids/shabti",
    label: "Shabti: Hiring, Gold Shabti & Work Posts",
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
          name: "How They Built the Pyramids",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
      datePublished: "2026-11-17",
      dateModified: "2026-11-17",
      about: [
        {
          "@type": "VideoGame",
          name: "How They Built the Pyramids",
        },
        {
          "@type": "Thing",
          name: "How They Built the Pyramids Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Brick placement and pyramid layer achievements",
        },
        {
          "@type": "Thing",
          name: "Touched by Ra and Gold Fever",
        },
        {
          "@type": "Thing",
          name: "Hired Help and Worth Its Weight",
        },
        {
          "@type": "Thing",
          name: "Blessed and monument completion",
        },
        {
          "@type": "Thing",
          name: "Reed Highway and Spin Doctor",
        },
        {
          "@type": "Thing",
          name: "Scribe and Steady Chisel engraving achievements",
        },
        {
          "@type": "Thing",
          name: "Down the Nile trading achievement",
        },
        {
          "@type": "Thing",
          name: "Hidden Too Much Sun and Now You Know achievements",
        },
        {
          "@type": "Thing",
          name: "Capstone and pyramid completion",
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
          description="Track all 18 Steam achievements, complete special challenges, and unlock both hidden achievements."
          gameTitle="How They Built the Pyramids"
          gameHref="/how-they-built-the-pyramids"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowTheyBuiltThePyramidsAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
