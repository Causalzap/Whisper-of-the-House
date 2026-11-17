
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowTheyBuiltThePyramidsContent from "@/data/how-they-built-the-pyramids/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/how-they-built-the-pyramids`;

const metadataTitle =
  "How They Built the Pyramids Beginner Guide: What to Build First?";

const metadataDescription =
  "Start building in How They Built the Pyramids. Learn the first upgrades, how to earn coins, when to hire Shabti, use monuments, and finish all 26 layers.";

const articleTitle =
  "How They Built the Pyramids Beginner Guide: What Should You Build First?";

const articleDescription =
  "Make your first brick with a Clay Bowl and Mold, choose between Strength and Speed training, and decide where to spend your first coins. Learn when Shabti, automation, monuments, and brick transport become useful, how to plan golden exterior bricks, and what to do after completing all 26 pyramid layers.";

const imageUrls = [
  `${siteUrl}/images/how-they-built-the-pyramids/pyramids-clay-bowl-full-pour-into-mold.webp`,
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
      "Build your first bricks, choose useful upgrades, manage the climb through 26 layers, crown the pyramid, and leave Earth.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Clay Bowl beside a clay deposit with an instruction to pour collected clay into a mold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Learn what to build first, how to earn coins, when to expand production, and how to finish the pyramid.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "first-brick",
    label: "Make Your First Brick",
  },
  {
    id: "strength-or-speed",
    label: "Strength or Speed First?",
  },
  {
    id: "first-upgrades",
    label: "Best First Upgrades",
  },
  {
    id: "earn-coins",
    label: "Earn More Coins",
  },
  {
    id: "first-layer",
    label: "Complete the First Layer",
  },
  {
    id: "when-to-hire-shabti",
    label: "When to Hire Shabti",
  },
  {
    id: "automation-transition",
    label: "When to Automate",
  },
  {
    id: "monuments-and-blessings",
    label: "Monuments & Blessings",
  },
  {
    id: "gold-bricks",
    label: "Save or Place Gold Bricks?",
  },
  {
    id: "higher-layers",
    label: "Building Higher Layers",
  },
  {
    id: "coop-vs-solo",
    label: "Solo vs Co-op",
  },
  {
    id: "complete-pyramid",
    label: "Finish & Crown the Pyramid",
  },
  {
    id: "leave-earth",
    label: "Leave Earth",
  },
  {
    id: "grand-pyramid",
    label: "Unlock Grand Pyramid",
  },
  {
    id: "what-to-do-next",
    label: "When Progress Stalls",
  },
];

const relatedLinks = [
  {
    href: "/how-they-built-the-pyramids/automation",
    label: "Automation: Belts, Sorters & Brick Production",
  },
  {
    href: "/how-they-built-the-pyramids/shabti",
    label: "Shabti: Hiring, Traits & Work Posts",
  },
  {
    href: "/how-they-built-the-pyramids/achievements",
    label: "Achievements: All 18 Requirements",
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
          name: "Clay Bowl and brick molds",
        },
        {
          "@type": "Thing",
          name: "Strength and Speed training",
        },
        {
          "@type": "Thing",
          name: "Early-game upgrades and coin earnings",
        },
        {
          "@type": "Thing",
          name: "Shabti workers and production automation",
        },
        {
          "@type": "Thing",
          name: "Monuments and Blessings",
        },
        {
          "@type": "Thing",
          name: "Golden brick placement",
        },
        {
          "@type": "Thing",
          name: "Pyramid construction and final crowning",
        },
        {
          "@type": "Thing",
          name: "Grand Pyramid New Game Plus",
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
          description="Make your first bricks, choose useful upgrades, hire workers at the right time, and complete all 26 layers of the pyramid."
          gameTitle="How They Built the Pyramids"
          gameHref="/how-they-built-the-pyramids"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowTheyBuiltThePyramidsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
