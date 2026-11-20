
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlacksmithMasterMasterWorkersContent from "@/data/blacksmith-master/master-workers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/blacksmith-master`;
const pageUrl = `${hubUrl}/master-workers`;

const metadataTitle =
  "Blacksmith Master Master Workers: All 6 Unlocks & Siege Machines";

const metadataDescription =
  "Unlock all six Blacksmith Master Master Workers, compare their abilities, complete Siege Machine orders, and collect Mystery Blueprints and 12 Sets.";

const articleTitle =
  "Blacksmith Master Master Workers: How Do You Unlock All 6?";

const articleDescription =
  "Find the six Master Workers, meet their hiring requirements, unlock Siege Machine orders, claim Mystery Blueprints, and collect all 36 Set Items.";

const imageUrls = [
  `${siteUrl}/images/blacksmith-master/blacksmith-master-six-master-workers.webp`,
  `${siteUrl}/images/blacksmith-master/blacksmith-master-all-twelve-sets.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-master-workers",
    label: "How to Unlock Master Workers",
  },
  {
    id: "all-master-workers",
    label: "All 6 Master Workers",
  },
  {
    id: "master-blacksmith",
    label: "Master Blacksmith",
  },
  {
    id: "master-assistant",
    label: "Master Assistant",
  },
  {
    id: "master-scholar",
    label: "Master Scholar",
  },
  {
    id: "master-miner",
    label: "Master Miner",
  },
  {
    id: "master-lumberjack",
    label: "Master Lumberjack",
  },
  {
    id: "master-cashier",
    label: "Master Cashier",
  },
  {
    id: "best-master-worker",
    label: "Which Master Worker First?",
  },
  {
    id: "siege-machines",
    label: "Unlock Siege Machines",
  },
  {
    id: "mystery-blueprints",
    label: "Get Mystery Blueprints",
  },
  {
    id: "set-items",
    label: "All 12 Sets & 36 Items",
  },
  {
    id: "full-deck",
    label: "Full Deck Requirements",
  },
  {
    id: "master-workers-problems",
    label: "Common Problems",
  },
  {
    id: "next-steps",
    label: "What to Do Next",
  },
];

const relatedLinks = [
  {
    href: "/blacksmith-master",
    label: "Beginner Guide: Start & Make Money",
  },
  {
    href: "/blacksmith-master/mastery-tree",
    label: "Mastery Tree & Best Unlock Order",
  },
  {
    href: "/blacksmith-master/workshop-layout",
    label: "Workshop Layout & Production Bottlenecks",
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
        width: 1318,
        height: 622,
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
          name: "Master Workers",
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

export default function BlacksmithMasterMasterWorkersPage() {
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
          <BlacksmithMasterMasterWorkersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
