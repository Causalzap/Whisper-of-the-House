import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostStayingWarmContent from "@/data/permafrost/staying-warm.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/staying-warm`;

const metadataTitle =
  "Permafrost: How to Stay Warm & Survive Cold Zones";

const metadataDescription =
  "Stop freezing in Permafrost with Campfires, Warm Hands, Makeshift Heater repairs, Cold Resistance drinks, Warming Dish, and better winter clothing.";

const articleDescription =
  "Recover Body Warmth, repair your Makeshift Heater, compare cold-resistant clothing, use warming food and drinks, and prepare for dangerous Cold Zones.";

const heroImage =
  "/images/permafrost/permafrost-hybrid-wolf-hat-cold-resistance.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-body-warmth-status.webp`,
  `${siteUrl}/images/permafrost/permafrost-campfire-warm-hands.webp`,
  `${siteUrl}/images/permafrost/permafrost-makeshift-heater-repair.webp`,
  `${siteUrl}/images/permafrost/permafrost-warming-dish-effect.webp`,
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
    label: "Shelter Too Cold to Sleep",
  },
  {
    id: "makeshift-heater",
    label: "Makeshift Heater & Repairs",
  },
  {
    id: "cold-resistance-drinks",
    label: "Coffee vs. Tea",
  },
  {
    id: "warming-dish",
    label: "Warming Dish & Cooking",
  },
  {
    id: "clothing",
    label: "Best Cold-Resistant Clothing",
  },
  {
    id: "wolf-hat-vs-hybrid",
    label: "Wolf Head Hat vs. Hybrid",
  },
  {
    id: "cold-zones",
    label: "Surviving Cold Zones",
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
    href: "/permafrost/classes-skills",
    label: "Starting Classes & Equipment",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests & Finn's Tower",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Mining & Crafting Materials",
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
            name: "Staying Warm",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Permafrost: How to Stay Warm & Survive Cold Zones",
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
          title="Permafrost: How to Stay Warm & Survive Cold Zones"
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/permafrost"
          breadcrumbBaseLabel="Permafrost"
          updatedAt="October 9, 2026"
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