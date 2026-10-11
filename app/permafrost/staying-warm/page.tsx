
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostStayingWarmContent from "@/data/permafrost/staying-warm.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/staying-warm`;

const metadataTitle =
  "How to Stay Warm in Permafrost: Heaters & Cold Zones";

const metadataDescription =
  "Stop freezing in Permafrost. Recover Body Warmth, use Campfires, repair Makeshift Heaters, compare Cold Resistance gear, and survive dangerous Cold Zones.";

const articleDescription =
  "Learn how to recover Body Warmth, use Campfires and portable heaters, choose warmer clothing, prepare food and drinks, and cross Cold Zones without freezing.";

const heroImage =
  "/images/permafrost/permafrost-body-warmth-status.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-campfire-warm-hands.webp`,
  `${siteUrl}/images/permafrost/permafrost-makeshift-heater-repair.webp`,
  `${siteUrl}/images/permafrost/permafrost-warming-dish-effect.webp`,
  `${siteUrl}/images/permafrost/permafrost-hybrid-wolf-hat-cold-resistance.webp`,
  `${siteUrl}/images/permafrost/permafrost-cold-zone-no-build.webp`,
];

const toc = [
  {
    id: "body-warmth",
    label: "Body Warmth & Cold Resistance",
  },
  {
    id: "campfire-warm-hands",
    label: "Campfire & Warm Hands",
  },
  {
    id: "heated-shelter",
    label: "Too Cold to Sleep",
  },
  {
    id: "makeshift-heater",
    label: "Makeshift Heater & Repairs",
  },
  {
    id: "cold-resistance-drinks",
    label: "Improvised Coffee vs. Tea",
  },
  {
    id: "warming-dish",
    label: "Warming Dish & Cooking",
  },
  {
    id: "clothing",
    label: "Cold-Resistant Clothing",
  },
  {
    id: "wolf-hat-vs-hybrid",
    label: "Wolf Head Hat vs. Hybrid",
  },
  {
    id: "cold-zones",
    label: "Crossing Cold Zones",
  },
  {
    id: "cold-warning-troubleshooting",
    label: "Why You're Still Freezing",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests & Cold Zone Routes",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Starting Classes & Equipment",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Mining & Crafting Materials",
  },
  {
    href: "/permafrost/achievements",
    label: "All 42 Achievements",
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

export default function PermafrostStayingWarmPage() {
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
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "How to Stay Warm",
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
          <PermafrostStayingWarmContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
