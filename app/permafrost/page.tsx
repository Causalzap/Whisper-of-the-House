
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostContent from "@/data/permafrost/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/permafrost`;

const metadataTitle =
  "Permafrost Guide: What to Do First & Where to Go Next";

const metadataDescription =
  "Start Permafrost, choose your class, fix New Home and quest blockers, survive Cold Zones, continue past Logan, and prepare for White Hell.";

const articleDescription =
  "Decide what to do next in Permafrost, from your starting class and New Home to House Camp, Logan, Crow's Nest, and White Hell preparation. Find the right upgrades, resources, and next objectives.";

const heroImage =
  "/images/permafrost/permafrost-new-home-building-objectives.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
];

const toc = [
  {
    id: "starting-class",
    label: "Choose Your Starting Class",
  },
  {
    id: "first-steps",
    label: "First Steps to Horizon",
  },
  {
    id: "progress-blockers",
    label: "Where Are You Stuck?",
  },
  {
    id: "survival",
    label: "Cold Zone Survival",
  },
  {
    id: "after-logan",
    label: "What to Do After Logan",
  },
  {
    id: "equipment-priorities",
    label: "Equipment & Resource Priorities",
  },
  {
    id: "achievements",
    label: "All 42 Achievements",
  },
];

const relatedLinks = [
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests & White Hell Preparation",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Best Starting Class & Skills",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Copper, Iron, Moonrock & Mining",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Zones & Staying Warm",
  },
  {
    href: "/permafrost/achievements",
    label: "All 42 Achievements Tracker",
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
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function PermafrostPage() {
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
            name: "Permafrost",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
        dateModified: "2026-10-11",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
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
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title={metadataTitle}
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PermafrostContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
