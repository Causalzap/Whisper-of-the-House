import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ObmuerTempleContent from "@/data/queens-domain/obmuer-temple-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/obmuer-temple-walkthrough`;

const metadataTitle =
  "Queen's Domain Obmuer Temple Walkthrough & Dagoom";

const metadataDescription =
  "Find all four Triangular Slates, manage Trident Keys, get the third Wind Gem, defeat the Royal Guards and beat Dagoom.";

const articleTitle =
  "How Do You Complete Obmuer Temple in Queen's Domain?";

const articleDescription =
  "Open the flooded temple with four Triangular Slates, work through its Trident Key locks, recover the Wind Gem, defeat the Royal Guards, and clear Dagoom.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/obmuer-temple-triangular-slate-east.webp`,
  `${siteUrl}/images/queens-domain/obmuer-temple-triangular-slate-central-column.webp`,
  `${siteUrl}/images/queens-domain/obmuer-temple-trident-key-sockets.webp`,
  `${siteUrl}/images/queens-domain/dagoom-sea-king-poison-water.webp`,
  `${siteUrl}/images/queens-domain/obmuer-temple-third-gargoyle.webp`,
];

const heroImage = imageUrls[3];

const toc = [
  { id: "how-to-enter", label: "How to enter Obmuer Temple" },
  { id: "triangular-slates", label: "All four Triangular Slates" },
  { id: "first-trident-key", label: "First rooms and Trident Key" },
  { id: "second-trident-key", label: "Second Trident Key" },
  { id: "trident-key-puzzle", label: "Four Trident Key puzzle" },
  { id: "royal-guards", label: "Open Dagoom's boss route" },
  { id: "dagoom-boss", label: "Beat Dagoom the Sea King" },
  { id: "dagoom-rewards", label: "Dagoom rewards" },
  { id: "after-temple", label: "Where to go after the temple" },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Western Bridge & Three Gargoyle Beacons",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Wind Dash & Third Wind Gem",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge Walkthrough",
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
        alt: "Dagoom the Sea King boss fight in Obmuer Temple",
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
          name: "Obmuer Temple Walkthrough",
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

export default function ObmuerTempleWalkthroughPage() {
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
          <ObmuerTempleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}