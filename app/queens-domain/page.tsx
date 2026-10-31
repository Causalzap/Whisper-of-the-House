import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import QueensDomainContent from "@/data/queens-domain/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/queens-domain`;

const metadataTitle =
  "Queen's Domain Guide: How to Start and Progress";

const metadataDescription =
  "Start Queen's Domain, get Endu, unlock the next areas, prepare for tougher dungeons, and find the right walkthrough when you're stuck.";

const articleTitle =
  "How Do You Start and Progress in Queen's Domain?";

const articleDescription =
  "Find your first weapons, unlock Endu and Wind Dash, choose the next area, prepare for tougher fights, and return when new abilities open blocked routes.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/holy-sword-endu-pickup.webp`,
  `${siteUrl}/images/queens-domain/azure-torch-tower-approach.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "where-to-start", label: "What to do first" },
  { id: "next-destination", label: "Where to go next" },
  { id: "movement", label: "Wind Dash and broken bridges" },
  { id: "tower-unlock", label: "Unlock the Tower of Knowledge" },
  { id: "dungeons", label: "First major dungeons" },
  { id: "combat", label: "Combat and damage types" },
  { id: "coins-and-shop", label: "Best early purchases" },
  { id: "saving", label: "Saving, healing and status effects" },
  { id: "achievements", label: "Achievements and collectibles" },
];

const relatedLinks = [
  {
    href: "/queens-domain/isle-of-neasied-walkthrough",
    label: "Opening Walkthrough: Shrine Guardian & Endu",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Where to Go Next & Three Gargoyle Beacons",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu: Wind Gems & Upgrades",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple: Slates, Keys & Dagoom",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge: Puzzles & Necronomicon",
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
        alt: "Holy Sword Endu in Queen's Domain",
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
      "@type": "ItemList",
      name: "Queen's Domain Guides",
      itemListElement: relatedLinks.map((link, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: link.label,
        url: `${siteUrl}${link.href}`,
      })),
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

export default function QueensDomainPage() {
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
          updatedAt="October 31, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <QueensDomainContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}