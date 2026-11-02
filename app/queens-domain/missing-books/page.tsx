
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MissingBooksContent from "@/data/queens-domain/missing-books.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/missing-books`;

const metadataTitle =
  "Queen's Domain Missing Books: All 6 Locations & Shelf Order";

const metadataDescription =
  "Find all 6 Missing Books in Queen's Domain, match shelves I–VI, get The History of Dragons from Wourha, and unlock Rare Artifact Storage.";

const articleTitle =
  "Where Are All Six Missing Books in Queen's Domain?";

const articleDescription =
  "Find the six Missing Books in the Tower of Knowledge and across the island, match each book to its numbered shelf, unlock Wourha's dragon book reward, and complete the Rare Artifact Storage and Late Fee objectives.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/tower-missing-books-categories.webp`,
  `${siteUrl}/images/queens-domain/missing-books-wourha-dragon-book-reward.webp`,
  `${siteUrl}/images/queens-domain/missing-books-archivist-inha-remains.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "library-quest",
    label: "Where to Return the Missing Books",
  },
  {
    id: "book-order",
    label: "All 6 Books & Shelf Order",
  },
  {
    id: "book-locations",
    label: "All Six Book Locations",
  },
  {
    id: "wourha-dragons",
    label: "Wourha & The History of Dragons",
  },
  {
    id: "wrong-books",
    label: "Books That Do Not Count",
  },
  {
    id: "rare-artifact-storage",
    label: "Rare Artifact Storage Still Locked",
  },
  {
    id: "late-fee-achievement",
    label: "I'm Not Paying the Late Fee",
  },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge Walkthrough",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu & Wind Gems",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Area Progression & Unlock Requirements",
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
    publishedTime: "2026-11-02",
    modifiedTime: "2026-11-02",
    images: [
      {
        url: heroImage,
        alt: "Six Missing Books library categories in Queen's Domain Tower of Knowledge",
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
          name: "Missing Books",
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
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
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

export default function MissingBooksPage() {
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
          updatedAt="November 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MissingBooksContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
