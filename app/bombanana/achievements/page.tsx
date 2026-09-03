import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import BombananaAchievementsContent from "@/data/bombanana/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana/achievements`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-campaign-level-select.webp`,
];

const toc = [
  { id: "all-achievements", label: "All 23" },
  { id: "campaign", label: "Campaign" },
  { id: "repeat-and-dice", label: "Repeat & dice" },
  { id: "slap-repair", label: "Slaps & repairs" },
  { id: "basket", label: "Basket" },
  { id: "just-in-time", label: "Just in Time" },
  { id: "custom-endless", label: "Custom & Endless" },
  { id: "cleanup-order", label: "Cleanup order" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/bombanana/levels", label: "30-Level Walkthrough" },
  { href: "/bombanana/module-solver", label: "Module Solver & Manual" },
  { href: "/bombanana", label: "BOMBANANA Guide" },
];

export const metadata: Metadata = {
  title: "BOMBANANA Achievements Guide: All 23 Unlocks",
  description:
    "Unlock all 23 BOMBANANA achievements with a clean cleanup route, hidden requirements, and dated SteamDB completion rates without false rarity claims.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "BOMBANANA Achievements Guide: All 23 Unlocks",
    description:
      "Finish the campaign milestones first, pair the repeat and grind counters, then clean up timing, Custom, and Endless goals without mistaking launch-day rates for stable rarity.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: imageUrls.map((url) => ({ url, width: 1600, height: 900 })),
  },
  twitter: {
    card: "summary_large_image",
    title: "BOMBANANA Achievements Guide: All 23 Unlocks",
    description:
      "Unlock all 23 BOMBANANA achievements with a clean cleanup route, hidden requirements, and dated SteamDB completion rates without false rarity claims.",
    images: imageUrls.slice(0, 1),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "BOMBANANA", item: `${siteUrl}/bombanana` },
        { "@type": "ListItem", position: 3, name: "All 23 Achievements, With a Cleaner 100% Route", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "BOMBANANA Achievements Guide: All 23 Unlocks",
      description:
        "A complete BOMBANANA Steam achievements guide for all 23 unlocks, including hidden achievement requirements, campaign milestones, repeated-level and dice counters, slaps, repairs, baskets, Just in Time, Custom Hard difficulty, Endless wave milestones, a practical 100-percent cleanup order, and September 2 SteamDB completion-rate snapshots clearly separated from long-term difficulty or rarity claims.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "BOMBANANA" },
        { "@type": "Thing", name: "BOMBANANA Achievements Guide: All 23 Unlocks" },
      ],
      isPartOf: { "@type": "WebSite", "@id": `${siteUrl}#website`, name: "Whisper of the House", url: siteUrl },
      publisher: { "@type": "Organization", "@id": `${siteUrl}#organization`, name: "Whisper of the House", url: siteUrl },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many Steam achievements are in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The full release has 23 Steam achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Are the SteamDB completion rates stable difficulty ratings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The percentages on this page are a September 2, 2026 launch-day snapshot and are especially volatile for late campaign and Endless achievements.",
          },
        },
        {
          "@type": "Question",
          name: "How many achievements are marked hidden in the current list?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Six are marked hidden: Still?, Fixaholic, Punching Bag, Rollaholic, ŞENGÜN!, and Slap Maniac.",
          },
        },
      ],
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
          title="All 23 Achievements, With a Cleaner 100% Route"
          description="Finish the campaign milestones first, pair the repeat and grind counters, then clean up timing, Custom, and Endless goals without mistaking launch-day rates for stable rarity."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaAchievementsContent />
        </GuideArticlePage>
        <GameDiscoveryCta
          gameTitle="BOMBANANA"
          heading="Looking for another game after BOMBANANA?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>
      <Footer />
    </>
  );
}
