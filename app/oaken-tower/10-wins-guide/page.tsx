import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TenWinsGuideContent from "@/data/oaken-tower/10-wins-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/10-wins-guide`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-shop-level-reroll.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-molten-bow-carry.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-10-wins-result.webp`,
];

const toc = [
  { id: "ten-win-mindset", label: "Mindset" },
  { id: "simple-plan", label: "Simple plan" },
  { id: "why-stuck", label: "6-7 wins" },
  { id: "heart-checkpoints", label: "Hearts" },
  { id: "day-plan", label: "Day plan" },
  { id: "day-four-encounter", label: "Encounter" },
  { id: "early-game", label: "Early game" },
  { id: "pick-carry", label: "Carry" },
  { id: "molten-bow-example", label: "Carry example" },
  { id: "gold-decisions", label: "Gold" },
  { id: "freeze", label: "Freeze" },
  { id: "level-reroll", label: "Level / reroll" },
  { id: "three-star", label: "3-star" },
  { id: "positioning", label: "Positioning" },
  { id: "hidden-mechanics", label: "Mechanics" },
  { id: "final-fights", label: "Final fights" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "quick-checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower", label: "Oaken Tower Guide" },
  { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
  { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
  { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
  { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
  
];

export const metadata: Metadata = {
  title: "How to Get 10 Wins in Oaken Tower Consistently (Stop Losing at 7)",
  description: "Keep getting stuck at 6-7 wins? Learn how to get 10 wins in Oaken Tower consistently by managing early tempo, protecting hearts, and stopping greedy rerolls.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How to Get 10 Wins in Oaken Tower",
    description:
      "A practical Oaken Tower 10-win guide covering 6-7 win stalls, heart pressure, carry choices, shop decisions, freezes, positioning, hidden mechanics and final fights.",
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
    title: "How to Get 10 Wins in Oaken Tower",
    description:
      "Stop stalling at 6-7 wins. Learn the shop, carry, heart, freeze and final-fight decisions that turn Oaken Tower runs into 10 wins.",
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
          name: "10-Win Guide",
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
        "How to Get 10 Wins in Oaken Tower: Shop Decisions, 6-7 Win Stalls, Heart Pressure, Carries, Freezes, Positioning and Final Fights",
      description:
        "A practical Oaken Tower 10-win guide for players who can win early fights but stall before the finish. It explains the 10-win mindset, why runs get stuck around 6-7 wins, how heart pressure changes risk, how to use the Day 4 encounter, when to buy tempo, how to choose one real carry, why a single item such as Molten Bow can be enough, how to spend gold on buying, leveling, rerolling, freezing or saving, how to chase 3-star items without throwing, why positioning matters, which hidden mechanics affect trigger speed and cooldown, and how to play the final fights safely.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-16",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "10 Wins" },
        { "@type": "Thing", name: "Beginner Strategy" },
        { "@type": "Thing", name: "Oaken Tower Builds" },
        { "@type": "Thing", name: "Level vs Reroll" },
        { "@type": "Thing", name: "Shop Decisions" },
        { "@type": "Thing", name: "3-Star Items" },
        { "@type": "Thing", name: "Positioning" },
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
          name: "How many wins do I need in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need 10 wins to complete a normal run. After that, you can think about extra scaling, big damage, or fighting the Oak, but the clean target is 10 wins first.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I keep getting stuck at 6 or 7 wins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early tempo is no longer enough by that point. You need a real carry, a scaling path, enough hearts, and disciplined gold spending. Many players throw this stage by over-rolling or chasing a weak 3-star item.",
          },
        },
        {
          "@type": "Question",
          name: "What is the easiest way to get 10 wins in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build early tempo, choose one carry direction, and stop wasting gold. Poison, Burn, bow carry, shield plus damage, and strong weapon carry boards are all fine if the shop supports them.",
          },
        },
        {
          "@type": "Question",
          name: "Should I force the same build every run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Let the shop and perk decide. Forcing a build with no support is one of the easiest ways to lose before 10 wins.",
          },
        },
        {
          "@type": "Question",
          name: "Is leveling early good in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Leveling early is good when your board is already stable. It is bad when you skip power and die because the tower has no damage.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reroll early in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if you have a target. Rerolling for a duplicate, carry, or support item is fine. Rerolling because the shop is boring usually loses gold.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need 3-star items to get 10 wins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. A 3-star carry can help, but many 10-win runs are carried by a strong 1-star or 2-star item with good support. Chase 3-star only when it is actually your win condition.",
          },
        },
        {
          "@type": "Question",
          name: "Does positioning matter in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Some items care about adjacency, slots, ranged behavior, or what item they trigger. Put the carry first, then place support around it.",
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
          title="How to Get 10 Wins in Oaken Tower"
          description="Use this if you can win a few fights but keep stalling before the finish. The goal is simple: protect your hearts, feed one carry, and stop throwing good boards."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TenWinsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}