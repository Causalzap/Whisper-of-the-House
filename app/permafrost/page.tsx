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
  "Start Permafrost, choose your class, build New Home, solve early crafting problems, reach Hunter's Glade, and prepare for House Camp and Cold Zones.";

const articleDescription =
  "Decide what to do first in Permafrost, which upgrades and resources matter, what can wait, and how to get past the main obstacles from Horizon to Solar Fields.";

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
    id: "equipment-priorities",
    label: "Equipment Priorities",
  },
  {
    id: "resource-decisions",
    label: "Materials Worth Saving",
  },
  {
    id: "survival",
    label: "Cold Zone Preparation",
  },
  {
    id: "what-can-wait",
    label: "What Can Wait",
  },
  {
    id: "where-to-go-next",
    label: "Quest Not Advancing",
  },
];

const relatedLinks = [
  {
    href: "/permafrost/classes-skills",
    label: "Best Starting Class & Skills",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests Walkthrough",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Copper, Coal & Flint",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Resistance & Staying Warm",
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
        dateModified: "2026-10-09",
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
          title="Permafrost Beginner Guide: What to Do First & Where to Go Next"
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 9, 2026"
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