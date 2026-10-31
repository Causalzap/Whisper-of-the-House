import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TowerOfKnowledgeContent from "@/data/queens-domain/tower-of-knowledge-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/tower-of-knowledge-walkthrough`;

const metadataTitle =
  "Queen's Domain Tower of Knowledge Walkthrough";

const metadataDescription =
  "Solve Gargoyles 3 and 7, get the Storm Gem and Forbidden Archives Key, defeat the Necronomicon, and open the Mausoleum route.";

const articleTitle =
  "How Do You Complete the Tower of Knowledge in Queen's Domain?";

const articleDescription =
  "Open the Tower, solve its numbered Gargoyles, reach the Storm Gem and Budaen, enter the Forbidden Archives, and defeat the Necronomicon.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/tower-of-knowledge-gargoyle-puzzle.webp`,
  `${siteUrl}/images/queens-domain/tower-of-knowledge-storm-gem.webp`,
  `${siteUrl}/images/queens-domain/tower-of-knowledge-rotating-staircase-switch.webp`,
  `${siteUrl}/images/queens-domain/tower-of-knowledge-forbidden-archives-key.webp`,
  `${siteUrl}/images/queens-domain/necronomicon-boss-fight.webp`,
  `${siteUrl}/images/queens-domain/tower-of-knowledge-acid-vial-barrier.webp`,
];

const heroImage = imageUrls[4];

const toc = [
  { id: "enter-tower", label: "Unlock the Tower" },
  { id: "numbered-gargoyles", label: "Gargoyle 3 and 7 puzzle" },
  { id: "storm-gem", label: "Storm Gem location" },
  { id: "rotating-staircase", label: "Activate the rotating staircase" },
  { id: "forbidden-archives-key", label: "Get the Forbidden Archives Key" },
  { id: "necronomicon", label: "Beat the Necronomicon" },
  { id: "acid-vial", label: "Acid Vial and blocked passages" },
  { id: "mausoleum", label: "Reach Deimpo Mausoleum" },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Three Gargoyle Beacons & Area Order",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple & Dagoom",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu & Storm Gem",
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
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    images: [
      {
        url: heroImage,
        alt: "The Necronomicon boss fight in the Tower of Knowledge",
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
          name: "Tower of Knowledge Walkthrough",
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
      datePublished: "2026-10-31",
      dateModified: "2026-10-31",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
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

export default function TowerOfKnowledgeWalkthroughPage() {
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
          breadcrumbBaseHref="/queens-domain"
          breadcrumbBaseLabel="Queen's Domain"
          updatedAt="October 31, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TowerOfKnowledgeContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}