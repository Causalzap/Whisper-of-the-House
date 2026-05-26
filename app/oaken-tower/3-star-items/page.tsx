import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ThreeStarItemsContent from "@/data/oaken-tower/3-star-items.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/3-star-items`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-three-star-preview.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-upgrade-to-three-star-choice.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-crown-forge-brew.webp`,
];

const toc = [
  { id: "how-stars-work", label: "Stars" },
  { id: "three-star-paths", label: "Paths" },
  { id: "natural-merges", label: "Natural merges" },
  { id: "upgrade-rewards", label: "Upgrade rewards" },
  { id: "crown-forge", label: "Crown Forge" },
  { id: "what-to-upgrade", label: "What to upgrade" },
  { id: "when-to-chase", label: "When to chase" },
  { id: "timing", label: "Timing" },
  { id: "freeze-duplicates", label: "Freeze" },
  { id: "level-vs-reroll", label: "Level vs reroll" },
  { id: "common-scenarios", label: "Scenarios" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "quick-checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower", label: "Oaken Tower Guide" },
    { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
    { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
    { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
    { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
    { href: "/oaken-tower/burn-build", label: "Best Burn Build" },
    { href: "/oaken-tower/frosty-build", label: "Best Frosty Build" },
    { href: "/oaken-tower/bleed-build", label: "Best Bleed Build" },
  
];

export const metadata: Metadata = {
    title: "How to Get 3-Star Items in Oaken Tower (Without Throwing)",
    description: "Learn the safest ways to get 3-star items in Oaken Tower. Master natural merges, Crown Forge timing, and know exactly when to stop rerolling for upgrades.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How to Get 3-Star Items in Oaken Tower",
    description:
      "A player-first Oaken Tower 3-star item guide covering upgrade paths, Crown Forge, copy effects, freezes, rerolls, timing and which items are worth chasing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower item upgrade preview showing 1-star, 2-star and 3-star item values.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get 3-Star Items in Oaken Tower",
    description:
      "Learn when to chase 3-star items, when to stop rolling, and how to use Crown Forge, copy effects and freezes correctly.",
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
          name: "3-Star Items",
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
        "How to Get 3-Star Items in Oaken Tower: Natural Merges, Crown Forge, Copy Effects, Freezes, Rerolls and Upgrade Targets",
      description:
        "A practical Oaken Tower 3-star item guide for players who want to know how item stars work, how to reach 3-star items through natural merges, upgrade rewards, Crown Forge, Mirror Elixir and copy effects, when to chase duplicates, when to freeze upgrade pieces, how to choose between leveling and rerolling while chasing upgrades, which item types and examples are worth upgrading, and how to avoid wasting gold on support items or random expensive pieces that do not win fights.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-16",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "3-Star Items" },
        { "@type": "Thing", name: "Item Upgrades" },
        { "@type": "Thing", name: "Crown Forge" },
        { "@type": "Thing", name: "Mirror Elixir" },
        { "@type": "Thing", name: "Rerolling" },
        { "@type": "Thing", name: "Shop Freeze" },
        { "@type": "Thing", name: "Oaken Tower Items" },
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
          name: "How do you get 3-star items in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You get 3-star items by merging matching item copies, using upgrade rewards, copying important item lines, or using shortcut effects such as Crown Forge on an eligible 2-star item.",
          },
        },
        {
          "@type": "Question",
          name: "Does Crown Forge work on any item?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Crown Forge-style upgrades are best used on a 2-star item. Do not treat it as a fix for a weak 1-star board.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mirror Elixir good for getting 3-star items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It can be, but only when it copies an item that matters. Use copy effects on your carry path, not on random support pieces.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always chase 3-star items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Chase 3-star only when the item is your carry or the upgrade creates a major breakpoint. Many 10-win runs do not need a 3-star item.",
          },
        },
        {
          "@type": "Question",
          name: "Is Doom Guide worth 3-star?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if Doom Guide is your real carry or scaling engine. If another item is doing the work, do not spend the run chasing Doom Guide just because it looks powerful.",
          },
        },
        {
          "@type": "Question",
          name: "Is Petal Staff worth 3-star?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Petal Staff can be worth 3-star if it is already your Poison or scaling engine. It is not worth forcing if the rest of your board cannot survive while you roll.",
          },
        },
        {
          "@type": "Question",
          name: "Is Venom Bow worth 3-star?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if your board is built around Poison or bow pressure and Venom Bow is carrying fights. If you have no bow support or Poison payoff, do not chase it blindly.",
          },
        },
        {
          "@type": "Question",
          name: "What item should I upgrade to 3-star?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade the item that is actually winning fights: your damage carry, debuff engine, trigger engine, or defensive core that keeps your carry alive.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reroll for 3-star copies?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reroll when you are close to the upgrade and your board can survive. Do not roll from zero copies just because you want a 3-star item.",
          },
        },
        {
          "@type": "Question",
          name: "Can I win without 3-star items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Many runs reach 10 wins with strong 1-star or 2-star items plus good support. A 3-star item is a tool, not a requirement.",
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
          title="How to Get 3-Star Items in Oaken Tower"
          description="Use this before you start rolling for copies. A 3-star item is worth chasing only when it is the item that actually wins fights."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ThreeStarItemsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}