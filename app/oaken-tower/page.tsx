import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OakenTowerGuideContent from "@/data/oaken-tower/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-shop-level-reroll.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-poison-start.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-10-wins-result.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "simple-game-plan", label: "Game plan" },
  { id: "best-builds", label: "Builds" },
  { id: "poison-first", label: "Poison" },
  { id: "ten-wins", label: "10 wins" },
  { id: "level-vs-reroll", label: "Level vs reroll" },
  { id: "three-star-items", label: "3-star items" },
  { id: "perks", label: "Perks" },
  { id: "guide-index", label: "Guide index" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
  { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
  { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
  { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
  { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
];

export const metadata: Metadata = {
    title: "Oaken Tower Guide: Best Builds, 10-Win Strategy & Meta",
    description: "Stop throwing your runs. Discover the ultimate Oaken Tower strategy hub: best beginner builds, exact level vs reroll timing, and how to secure 10 wins.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Guide: Builds, 10 Wins, Perks & Tips",
    description:
  "A player-first Oaken Tower guide covering beginner builds, Poison scaling, 10-win strategy, level vs reroll decisions, 3-star items and perk unlocks.",

      url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower shop showing health, level, income, reroll, freeze and buy XP decisions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaken Tower Guide: Builds, 10 Wins, Perks & Tips",
    description:
  "Win more Oaken Tower runs with clear build choices, shop decisions, 10-win strategy, 3-star upgrades and perk unlock tips.",
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
          name: "Oaken Tower Guide",
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
  "Oaken Tower Guide: Builds, 10-Win Strategy, Level vs Reroll Decisions, 3-Star Items and Perk Unlocks",
  description:
  "A practical Oaken Tower guide for players who want to win more runs without reading a full wiki. It explains what to do first, which beginner-friendly build directions to learn, why Poison is a good first build, how to think about 10 wins, when to level or reroll, when to chase 3-star items, how perk unlocks work, and how to stop losing winnable runs.",

        image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-16",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Beginner Guide" },
        { "@type": "Thing", name: "Poison Build" },
        { "@type": "Thing", name: "10 Wins" },
        { "@type": "Thing", name: "Level vs Reroll" },
        { "@type": "Thing", name: "3-Star Items" },
        { "@type": "Thing", name: "Perks" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I do first in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build a board that can win early fights instead of forcing a perfect late-game idea. Buy strong tempo, pick one scaling direction, and only level when your board can survive.",
          },
        },
        {
          "@type": "Question",
          name: "What is the easiest build for beginners in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Poison is a good first build to learn because it gives steady pressure and teaches repeated triggers, cooldown, and scaling. Take it when the shop offers a clear Poison start, but do not force it from nothing.",
          },
        },
        {
          "@type": "Question",
          name: "Should I level early in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Level early when your board is already strong or your build gains value from leveling. Do not level just because the shop is bad if your tower has no real damage yet.",
          },
        },
        {
          "@type": "Question",
          name: "When should I reroll in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reroll when you have a target, such as a duplicate, key carry, support item, or build-completing piece. Rolling with no target is one of the easiest ways to waste a strong start.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always chase 3-star items in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Chase 3-star items only when the item is central to your build or unlocks an important breakpoint. Otherwise, the gold may be better spent leveling, buying tempo, or saving.",
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
          title="Oaken Tower Guide: What to Do First, What to Build, and How to Win"
          description="Start here if you keep losing, do not know what to buy, or just want a simple path toward your first clean 10-win run."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OakenTowerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}