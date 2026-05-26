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
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-build-core-board.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-bleed-build-core-items.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-build-core-board.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "simple-game-plan", label: "Game plan" },
  { id: "best-builds", label: "Builds" },
  { id: "build-picker", label: "Build picker" },
  { id: "poison-build", label: "Poison" },
  { id: "burn-build", label: "Burn" },
  { id: "bleed-build", label: "Bleed" },
  { id: "frosty-build", label: "Frosty" },
  { id: "ten-wins", label: "10 wins" },
  { id: "level-vs-reroll", label: "Level vs reroll" },
  { id: "three-star-items", label: "3-star items" },
  { id: "perks", label: "Perks" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "guide-index", label: "Guide index" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
  { href: "/oaken-tower/burn-build", label: "Best Burn Build" },
  { href: "/oaken-tower/bleed-build", label: "Best Bleed Build" },
  { href: "/oaken-tower/frosty-build", label: "Best Frosty Build" },
  { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
  { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
  { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
  { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
];

export const metadata: Metadata = {
  title: "Oaken Tower Guide: Best Builds, 10 Wins & Meta Tips",
  description:
    "Win more Oaken Tower runs with Poison, Burn, Bleed and Frosty builds, plus 10-win strategy, level vs reroll timing, 3-star items and perks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Guide: Best Builds, 10 Wins, Perks & Tips",
    description:
      "A player-first Oaken Tower guide hub covering Poison, Burn, Bleed and Frosty builds, 10-win strategy, level vs reroll decisions, 3-star items and perk unlocks.",
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
    title: "Oaken Tower Guide: Best Builds, 10 Wins & Tips",
    description:
      "Choose the right Oaken Tower build route, stop wasting gold, and learn when to level, reroll, chase 3-star items or push for 10 wins.",
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
        "Oaken Tower Guide: Best Builds, 10-Win Strategy, Level vs Reroll Decisions, 3-Star Items, Perks and Build Routes",
      description:
        "A practical Oaken Tower guide hub for players who want to win more runs without reading a full wiki. It explains what to do first, how to read the shop, how to choose between Poison, Burn, Bleed, Frosty, weapon carry and shield routes, when to level or reroll, when to freeze or save gold, how to think about 10 wins, when to chase 3-star items, how perk unlocks affect real runs, and how to stop losing winnable boards by forcing unsupported builds.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Beginner Guide" },
        { "@type": "Thing", name: "Best Builds" },
        { "@type": "Thing", name: "Poison Build" },
        { "@type": "Thing", name: "Burn Build" },
        { "@type": "Thing", name: "Bleed Build" },
        { "@type": "Thing", name: "Frosty Build" },
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
              "Build a board that can win or safely survive early fights. Do not force a perfect late-game idea. Buy tempo, pick one real direction, and only level when your board can survive.",
          },
        },
        {
          "@type": "Question",
          name: "What is the easiest build for beginners in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Poison is still one of the easiest directions to learn because it teaches repeated triggers, scaling pressure, and damage-over-time decisions. Burn is faster, Bleed has a higher scaling ceiling, and Frosty is stronger when you understand pivot timing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Burn still good after the Flare nerf?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Burn still works as a fast tempo route, but you need to respect the new timing. Molten Bow is the main carry, while Flare now works best as a follow-up scaler after the cooldown change.",
          },
        },
        {
          "@type": "Question",
          name: "When should I play Bleed instead of Poison?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Play Bleed when the shop gives you Shardfang, Emerald Sword, Crystal support, or Crown Forge value. Play Poison when the shop gives you earlier pressure and you need a simpler board that stabilizes sooner.",
          },
        },
        {
          "@type": "Question",
          name: "When should I play Frosty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Play Frosty when you find Frozen Orb, Glacier, Frost Essence, Lyra support, or enough cooldown support to survive the pivot. If Frozen Orb starts too late, fast boards can kill you before the engine works.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I get stuck around 6 or 7 wins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Because early tempo stops being enough. You need a real carry, a scaling path, enough hearts, and better gold discipline. Many players throw this stage by over-rolling or chasing weak 3-star upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Should I level or reroll in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Level when your board is stable and future shops are worth the XP. Reroll when you can name the exact item, duplicate, support piece, or matchup fix you need.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always chase 3-star items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Chase 3-star only when the item is your carry or creates a major breakpoint. If the item is not central to your build, the gold may be better spent leveling, buying power, freezing, or saving.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my perk not unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually because the condition was stricter than expected, a potion or encounter reward may have interfered, or the perk was unlocked but not added to your selected pool. Check the exact in-game condition before repeating the attempt.",
          },
        },
        {
          "@type": "Question",
          name: "Is Oaken Tower more like a wiki game or a decision game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The wiki is useful for checking raw item and perk data. This guide hub is for decisions: what to build, when to level, when to reroll, when to chase upgrades, and how to stop losing winnable runs.",
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
          title="Oaken Tower Guide: What to Build, What to Buy, and How to Win"
          description="Start here if you keep losing, do not know which build the shop is offering, or want a clean path through Poison, Burn, Bleed, Frosty, 10-win strategy, leveling and rerolls."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
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
