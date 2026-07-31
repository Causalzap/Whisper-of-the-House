import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowManyDudesTier2ProgressionContent from "@/data/how-many-dudes/tier-2-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-many-dudes`;
const pageUrl = `${hubUrl}/tier-2-progression`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-five-gold-stars-unlock-tier-2.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-ensemble-unlocked-75-discoveries.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-free-pocket-dice-20-silver-stars.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes Tier 2 Guide: Unlock Requirements",
  description:
    "Unlock Tier 2 in How Many Dudes with five Gold-Star Dude Types. Learn the fastest Tier 1 route, Silver Star rewards, Ensemble, and Endless limits.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Tier 2 Guide: Five Gold-Star Types",
    description:
      "Finish Tier 1 with five useful Dude Types, earn the Gold-Star progress required for Tier 2, and separate that goal from Discoveries, Ensemble, Pocket Dice and Endless.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1064,
        height: 444,
        alt: "How Many Dudes tip showing that five Gold-Star Dude Types unlock Tier 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes Tier 2 Guide: Unlock Requirements",
    description:
      "Earn five Gold-Star Dude Types, finish Round 105, and understand how Silver Stars, Discoveries, Ensemble, Pocket Dice and Endless fit into progression.",
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
          name: "How Many Dudes Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tier 2 Progression Guide",
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
        "How Many Dudes Tier 2 Progression Guide: Five Gold-Star Dude Types",
      description:
        "This How Many Dudes Tier 2 progression guide explains the exact five Gold-Star Dude Type requirement, how normal Stars, Silver Stars and Gold Stars differ, why the fastest route is a complete Tier 1 clear through Round 105, and how Discoveries, Ensemble, the free Pocket Dice reward at 20 Tier 1 Silver Stars, and Endless mode fit into account progression without replacing the Tier 2 condition.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-31",
      dateModified: "2026-07-31",
      about: [
        {
          "@type": "VideoGame",
          name: "How Many Dudes?",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Tier 2",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Tier 2 unlock requirements",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Gold Stars",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Silver Stars",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Discoveries",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Ensemble mode",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Pocket Dice",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Endless mode",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Round 105",
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
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How to Unlock Tier 2 in How Many Dudes"
          description="Build five Dude Types that can finish Round 105, earn their Gold-Star progress, and avoid wasting time on Discoveries or Endless when they are not the real unlock condition."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "how-tier-2-unlocks",
              label: "Tier 2 requirement",
            },
            {
              id: "fastest-route",
              label: "Fastest Tier 1 route",
            },
            {
              id: "what-does-not-unlock-tier-2",
              label: "What does not unlock it",
            },
            {
              id: "discoveries-and-rewards",
              label: "Discoveries & rewards",
            },
            {
              id: "common-delays",
              label: "Common delays",
            },
            {
              id: "when-to-enter-tier-2",
              label: "When to enter Tier 2",
            },
          ]}
          relatedLinks={[
            {
              href: "/how-many-dudes",
              label: "How Many Dudes Guide Hub",
            },
            {
              href: "/how-many-dudes/best-builds",
              label: "Best Builds & Five-Type Teams",
            },
            {
              href: "/how-many-dudes/round-100-guide",
              label: "Round 100 Guide",
            },
            {
              href: "/how-many-dudes/goat-boss-guide",
              label: "G.O.A.T. Boss Guide",
            },
            {
                href: "/how-many-dudes/relic-combinations",
                label: "Relic Combinations & Shop Choices",
              },
            {
              href: "/how-many-dudes/achievements-guide",
              label: "All 69 Achievements",
            },
          ]}
        >
          <HowManyDudesTier2ProgressionContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}