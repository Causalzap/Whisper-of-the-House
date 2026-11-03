
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import VerdantHollowStatuesContent from "@/data/queens-domain/verdant-hollow-statues.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/verdant-hollow-statues`;

const metadataTitle =
  "Queen's Domain: All 8 Sipeha Statues & Verdant Hollow Gate";

const metadataDescription =
  "Find all 8 Sipeha statues in Queen's Domain, locate the hidden underground seals, cross the Deimpo chasm, and open the Verdant Hollow gate.";

const articleTitle =
  "Where Are All 8 Sipeha Statues in Queen's Domain?";

const articleDescription =
  "Find the eight Sipeha seals across Rotting Cavern, Deimpo Mausoleum, the Underground Prison, Isle of Neasied, Tower of Knowledge, Obmuer Temple, and Record of Sin. Learn how Sipeha's Lens works and what to check when the Verdant Hollow gate remains locked.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-rotting-cavern.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-eight-statues-gate.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-deimpo-mausoleum.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-prison-second-floor.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-main-island-underground-teleporter.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-tower-underground.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-main-island-underground-two.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-obmuer-temple.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-statue-record-of-sin.webp`,
  `${siteUrl}/images/queens-domain/verdant-hollow-required-lens.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "verdant-hollow-gate",
    label: "Open the Eight-Statue Gate",
  },
  {
    id: "all-eight-locations",
    label: "All 8 Sipeha Statue Locations",
  },
  {
    id: "statue-routes",
    label: "How to Reach Each Statue",
  },
  {
    id: "required-lenses",
    label: "Sipeha's Lens & Mask Requirements",
  },
  {
    id: "seven-of-eight",
    label: "Gate Still Locked at 7/8",
  },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Area Progression & Unlock Requirements",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu: Wind Gems & Akunra",
  },
  {
    href: "/queens-domain/deimpo-mausoleum",
    label: "Deimpo Mausoleum: Six Sigils & Boss",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge: Puzzles & Necronomicon",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple: Slates, Keys & Dagoom",
  },
  {
    href: "/queens-domain/achievements",
    label: "All 53 Achievements & Checklist",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    publishedTime: "2026-11-03",
    modifiedTime: "2026-11-03",
    images: [
      {
        url: heroImage,
        alt: "Sipeha statue with a glowing magical seal in Queen's Domain",
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
          name: "Queen's Domain",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Eight Sipeha Statues",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function VerdantHollowStatuesPage() {
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
          gameTitle="Queen's Domain"
          gameHref="/queens-domain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <VerdantHollowStatuesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
