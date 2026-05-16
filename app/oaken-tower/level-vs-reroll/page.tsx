import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LevelVsRerollContent from "@/data/oaken-tower/level-vs-reroll.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/level-vs-reroll`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-shop-level-reroll.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-greedy-leveling.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-freeze-then-level.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-level-tooltip.webp`,
];

const toc = [
  { id: "quick-rule", label: "Quick rule" },
  { id: "decision-table", label: "Decision table" },
  { id: "level-numbers", label: "Level numbers" },
  { id: "when-to-level", label: "When to level" },
  { id: "risky-level", label: "Risky level" },
  { id: "when-to-reroll", label: "When to reroll" },
  { id: "when-to-freeze", label: "When to freeze" },
  { id: "freeze-then-level", label: "Freeze + level" },
  { id: "buy-vs-save", label: "Buy vs save" },
  { id: "timing", label: "Timing" },
  { id: "common-scenarios", label: "Scenarios" },
  { id: "three-star-chasing", label: "3-star chasing" },
  { id: "bad-habits", label: "Bad habits" },
  { id: "quick-checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower", label: "Oaken Tower Guide" },
  { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
  { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
  { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
  { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
  
];

export const metadata: Metadata = {
    title: "Oaken Tower Level vs Reroll Guide: Stop Wasting Your Gold",
    description: "Stop throwing your runs in the shop. Learn exactly when to level, reroll, or freeze in Oaken Tower, including XP costs, income math, and when to buy power.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Level vs Reroll Guide",
    description:
      "A player-first Oaken Tower shop decision guide covering leveling, rerolling, freezing, buying power, saving gold, XP costs, timing and 3-star chasing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower shop showing level, income, reroll, freeze and buy XP decisions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaken Tower Level vs Reroll Guide",
    description:
      "Stop wasting shops. Learn when to level, reroll, freeze, buy power or save gold in Oaken Tower.",
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
          item: `${siteUrl}/oaken-tower`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Level vs Reroll",
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
        "Oaken Tower Level vs Reroll Guide: XP Costs, Income, Freeze Timing, Buy vs Save Decisions and 3-Star Chasing",
      description:
        "A practical Oaken Tower level vs reroll guide explaining when to level, when to reroll, when to freeze, when to buy power, when to save gold, how leveling costs and income tradeoffs affect shop decisions, why risky early leveling can work or fail, how freeze then level works, how run timing changes gold decisions, and how to avoid bad shop habits while chasing upgrades or 10 wins.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-16",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Level vs Reroll" },
        { "@type": "Thing", name: "Shop Decisions" },
        { "@type": "Thing", name: "Leveling" },
        { "@type": "Thing", name: "Rerolling" },
        { "@type": "Thing", name: "Freeze Shop" },
        { "@type": "Thing", name: "XP Cost" },
        { "@type": "Thing", name: "3-Star Items" },
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
          name: "Should I level or reroll in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Level when your board is already strong enough to survive and better shops, more income, or more health matter. Reroll when you can name the exact item, duplicate, or support piece you need.",
          },
        },
        {
          "@type": "Question",
          name: "What does leveling give you in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Leveling costs XP, increases your income, improves future shop quality, and gives more health. Leveling is best when your board can survive the investment.",
          },
        },
        {
          "@type": "Question",
          name: "Is early leveling good in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early leveling can be good if you can afford the loss or already have enough tempo. It is bad when you skip power and leave your tower too weak to survive.",
          },
        },
        {
          "@type": "Question",
          name: "When should I stop rerolling in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stop rerolling when you no longer have a target, when your board needs immediate power, or when leveling gives better value. If you are rolling just to see something exciting, stop.",
          },
        },
        {
          "@type": "Question",
          name: "Should I freeze before leveling in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, when the shop has a key item you want later but leveling first is better right now. Freeze then level is one of the strongest shop patterns when your current board can survive.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy weak items or save gold?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy weak items only if they help the next fight or support your carry. Save if your board already wins and the shop does not improve it.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reroll for 3-star items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only when the item is your actual carry or the upgrade creates a major breakpoint. Do not roll for 3-star support items while your board is falling behind.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I lose after leveling?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually because you leveled while too weak. Leveling improves future shops, but it does not fix a board that cannot survive the next fight.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I lose after rerolling?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually because the rerolls had no target. You spent gold without gaining power, upgrades, health, or a clear pivot.",
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
          title="Oaken Tower Level vs Reroll Guide"
          description="Use this whenever the shop makes you hesitate. The right choice is not always leveling, rolling, or buying — it is the option that gives your gold a clear job."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LevelVsRerollContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}