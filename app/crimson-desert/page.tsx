import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrimsonDesertContent from "@/data/crimson-desert/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crimson-desert`;

const metadataTitle =
  "Crimson Desert Guide: Trading, Farming, Hunting & Progression";

const metadataDescription =
  "Use this Crimson Desert guide for trading, farming, ranching, hunting, Abyss Artifacts, stuck side quests, and practical progression decisions.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-wagon-off-trade-route-risk.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-cacao-camp-crop.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-hunting-wolf-spawn-west-of-camp.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-end-of-myth-legendary-hunt.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-spirit-lowest-upgrade.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-halted-research-22-hours.webp`,
];

const toc = [
  {
    id: "where-i-start",
    label: "Where I Start",
  },
  {
    id: "trading",
    label: "Trading",
  },
  {
    id: "farming-ranching",
    label: "Farming & Ranching",
  },
  {
    id: "hunting",
    label: "Hunting",
  },
  {
    id: "abyss-artifacts",
    label: "Abyss Artifacts",
  },
  {
    id: "side-quests",
    label: "Side Quests",
  },
  {
    id: "money-or-resources",
    label: "Money vs Resources",
  },
  {
    id: "fishing-cooking",
    label: "Fishing & Cooking",
  },
  {
    id: "when-i-go-back",
    label: "When I Go Back",
  },
  {
    id: "my-progression-loop",
    label: "My Progression Loop",
  },
];

const relatedLinks = [
  {
    href: "/crimson-desert/trading-guide",
    label: "Trading Guide",
  },
  {
    href: "/crimson-desert/farming-ranching-guide",
    label: "Farming & Ranching Guide",
  },
  {
    href: "/crimson-desert/hunting-guide",
    label: "Hunting Guide",
  },
  {
    href: "/crimson-desert/abyss-artifacts-guide",
    label: "Abyss Artifacts Guide",
  },
  {
    href: "/crimson-desert/side-quests-guide",
    label: "Side Quests Guide",
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
    title: "Crimson Desert Guide: Trading, Farming, Hunting & Progression",
    description:
      "Practical Crimson Desert progression help for trading, camp production, hunting, Abyss Artifact decisions, and missing or stuck side quests.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Travelling through Crimson Desert with a loaded trading wagon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimson Desert Guide: Trading, Hunting & Progression",
    description:
      "Trading, farming, ranching, hunting, Abyss Artifacts, stuck quests, and the progression decisions that keep me moving.",
    images: [imageUrls[0]],
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
          name: "Crimson Desert Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "Crimson Desert Guide: Trading, Farming, Hunting, Abyss Artifacts and Progression",
      description:
        "A practical Crimson Desert guide hub for deciding what to do when progression is blocked, including buyer-first trading, farming and ranching, wildlife and White Crow's Gaze hunting, Abyss Artifact spending decisions, missing or stuck side quests, Research problems, and when to return to the main goal instead of overcommitting to optional systems.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Crimson Desert Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Crimson Desert guide",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert progression",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert trading",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert farming",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert ranching",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert hunting",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Abyss Artifacts",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert side quests",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Research",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Keep Progress Moving in Crimson Desert"
          description="I identify the system blocking my next goal, solve only that problem, and return to progression instead of trying to clear every activity at once."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrimsonDesertContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}