import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IsleOfNeasiedContent from "@/data/queens-domain/isle-of-neasied-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/isle-of-neasied-walkthrough`;

const metadataTitle =
  "Queen's Domain Beginner Walkthrough: How to Get Endu";

const metadataDescription =
  "Find the Dagger Belt, open the Crypt, obtain the Endu Shrine Gate Key, defeat the Shrine Guardian, and unlock Umbada's shop.";

const articleTitle =
  "How Do You Start Queen's Domain and Get the Holy Sword Endu?";

const articleDescription =
  "Follow the opening coastal route from the camp to the Crypt, collect the Shrine Gate Key, defeat the Guardian, and gain access to Endu and Umbada.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/opening-dagger-belt-location.webp`,
  `${siteUrl}/images/queens-domain/crypt-entrance-switch.webp`,
  `${siteUrl}/images/queens-domain/crypt-hidden-wall.webp`,
  `${siteUrl}/images/queens-domain/shrine-guardian-arena.webp`,
  `${siteUrl}/images/queens-domain/holy-sword-endu-pickup.webp`,
  `${siteUrl}/images/queens-domain/stone-duck-crystal-monument.webp`,
];

const heroImage = imageUrls[4];

const toc = [
  { id: "where-to-start", label: "Where to start" },
  { id: "dagger-belt", label: "Dagger Belt location" },
  { id: "crypt-entrance", label: "Open the Crypt" },
  { id: "shrine-key", label: "Endu Shrine Gate Key" },
  { id: "shrine-guardian", label: "Shrine Guardian boss" },
  { id: "holy-sword-endu", label: "Get the Holy Sword Endu" },
  { id: "umbada-shop", label: "Unlock Umbada's shop" },
  { id: "where-to-go-next", label: "Where to go after Endu" },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu: Wind Dash & Upgrades",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Where to Go After the Shrine Guardian",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple Walkthrough",
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
        alt: "Holy Sword Endu obtained after defeating the Shrine Guardian",
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
          name: "Opening Walkthrough",
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

export default function IsleOfNeasiedWalkthroughPage() {
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
          <IsleOfNeasiedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}