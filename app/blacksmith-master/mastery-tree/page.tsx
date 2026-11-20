
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlacksmithMasterMasteryTreeContent from "@/data/blacksmith-master/mastery-tree.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/blacksmith-master`;
const pageUrl = `${hubUrl}/mastery-tree`;

const metadataTitle =
  "Blacksmith Master Mastery Tree: Best Unlock Order & Progression";

const metadataDescription =
  "Find the best Blacksmith Master unlock order, meet crafting tier requirements, unlock Forests and Mines, research Blueprints, and open Trade Routes.";

const articleTitle =
  "Blacksmith Master Mastery Tree: What Should You Unlock First?";

const articleDescription =
  "Choose between Carpentry, Assistants, Construction, Forests, and Mines, then unlock Blueprint Research, advanced crafting, and Trade Routes.";

const imageUrls = [
  `${siteUrl}/images/blacksmith-master/blacksmith-master-mastery-tier-requirement.webp`,
  `${siteUrl}/images/blacksmith-master/blacksmith-master-construction-mastery-unlock.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "mastery-points",
    label: "How to Unlock More Masteries",
  },
  {
    id: "best-unlock-order",
    label: "Best Mastery Unlock Order",
  },
  {
    id: "forest-mine-store",
    label: "Oak Forest, Iron Mine or Store?",
  },
  {
    id: "blueprints-research",
    label: "Blueprints & Research",
  },
  {
    id: "advanced-metalworking",
    label: "Advanced Metalworking vs. Smelting",
  },
  {
    id: "resources-trade",
    label: "Resources & Trade Routes",
  },
  {
    id: "pottery-jewelry",
    label: "Pottery vs. Jewelry",
  },
  {
    id: "late-game",
    label: "Late-Game Unlocks",
  },
  {
    id: "progression-problems",
    label: "Progression Problems",
  },
  {
    id: "next-steps",
    label: "After Your Next Unlock",
  },
];

const relatedLinks = [
  {
    href: "/blacksmith-master",
    label: "Beginner Guide: Start & Make Money",
  },
  {
    href: "/blacksmith-master/workshop-layout",
    label: "Workshop Layout & Production Bottlenecks",
  },
  {
    href: "/blacksmith-master/master-workers",
    label: "Master Workers & Siege Machines",
  },
  {
    href: "/blacksmith-master/achievements",
    label: "All 72 Achievements & Checklist",
  },
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: heroImage,
        width: 1928,
        height: 934,
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
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
          name: "Blacksmith Master",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mastery Tree",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      dateModified: "2026-11-20",
      image: imageUrls,
    },
  ],
};

export default function BlacksmithMasterMasteryTreePage() {
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
          gameTitle="Blacksmith Master"
          gameHref="/blacksmith-master"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BlacksmithMasterMasteryTreeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
