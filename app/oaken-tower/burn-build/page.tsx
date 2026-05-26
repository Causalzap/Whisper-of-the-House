import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BurnBuildContent from "@/data/oaken-tower/burn-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/burn-build`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-build-core-board.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-molten-bow-burn-only.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-fire-orb-timing.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-ranged-placement.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-day-eight-reroll.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-final-board.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-burn-vs-fast-burst.webp`,
];

const toc = [
  { id: "burn-after-nerf", label: "After the nerf" },
  { id: "build-plan", label: "Build plan" },
  { id: "perks", label: "Best perks" },
  { id: "day-plan", label: "Day plan" },
  { id: "molten-bow", label: "Molten Bow" },
  { id: "trigger-order", label: "Trigger order" },
  { id: "positioning", label: "Positioning" },
  { id: "day-eight", label: "D7-D8 roll-down" },
  { id: "star-breakpoints", label: "Star breakpoints" },
  { id: "final-board", label: "Final board" },
  { id: "matchups", label: "Matchups" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/oaken-tower", label: "Oaken Tower Guide" },
    { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
    { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
    { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
    { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
    { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
    { href: "/oaken-tower/frosty-build", label: "Best Frosty Build" },
    { href: "/oaken-tower/bleed-build", label: "Best Bleed Build" },
];

export const metadata: Metadata = {
  title: "Oaken Tower Burn Build Guide: Molten Bow After Nerf",
  description:
    "Build Burn after the Flare nerf. Learn Molten Bow timing, Flare 4.1s, Wildfire, Fire Orb, best perks, D8 rerolls, counters, and final board targets.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Burn Build Guide",
    description:
      "A player-first Oaken Tower Burn build guide covering Molten Bow, Flare after the 4.1s nerf, Wildfire, Fire Orb positioning, best perks, D7-D8 roll-downs, star breakpoints, matchups and final board targets.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower Burn build board with Molten Bow, Fire Orb and Burn support pieces.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaken Tower Burn Build Guide",
    description:
      "Learn the Molten Bow Burn build after the Flare nerf, including trigger order, perks, Wildfire, Fire Orb and D8 roll-downs.",
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
          name: "Burn Build",
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
        "Oaken Tower Burn Build Guide: Molten Bow, Flare Nerf Timing, Wildfire, Fire Orb, Best Perks, Star Breakpoints and Final Board Targets",
      description:
        "A practical Oaken Tower Burn build guide explaining how to play Burn after the recent Flare and Wildfire nerfs, why Molten Bow's 4.0s cooldown and Flare's 4.1s cooldown change the trigger order, how Wildfire's 3.7s timing affects early pressure, how to use Fire Orb positioning, which perks help Burn runs, when to roll down around D7-D8, which star breakpoints matter for Flare, Molten Bow and Wildfire, how to play Burn mirrors, Poison tempo, Dark burst and late scaling matchups, and how to build a ranked 10-win Burn board without greeding for an Endless setup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Burn Build" },
        { "@type": "Thing", name: "Molten Bow" },
        { "@type": "Thing", name: "Flare" },
        { "@type": "Thing", name: "Flare Nerf" },
        { "@type": "Thing", name: "Wildfire" },
        { "@type": "Thing", name: "Fire Orb" },
        { "@type": "Thing", name: "Burn Perks" },
        { "@type": "Thing", name: "Trigger Order" },
        { "@type": "Thing", name: "D7-D8 Roll-Down" },
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
          name: "Is Burn still good after the Flare nerf?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Burn is still good, but the timing changed. Flare moved from 3.9s to 4.1s, while Molten Bow is 4.0s, so Molten Bow usually applies Burn first and Flare follows as the scaler.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Burn build in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Burn build is usually a Molten Bow carry supported by Flare, Wildfire, Fire Orb, cooldown, star upgrades, and one defensive flex slot. The exact board changes by shop, but the trigger order matters.",
          },
        },
        {
          "@type": "Question",
          name: "Is Firebow a real item?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the official item name Molten Bow. Firebow can be used casually to mean a Burn bow, but the item this route is built around is Molten Bow.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Flare's 4.1s cooldown matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Because Molten Bow has a 4.0s cooldown. That 0.1s gap means Molten Bow can apply the first Burn stack before Flare triggers, so Flare should usually be treated as a follow-up scaler.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wildfire still worth buying?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but it is not an autopick. Wildfire now applies 4 Burn instead of 5, but it costs 20g and has a 3.7s cooldown, so it can still provide early Burn pressure and useful scaling at higher stars.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best perks for Burn?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Merge and Flash Sale are the safest general Burn perks because they help with star breakpoints and expensive roll-downs. Artillery, Flame or Burn support, and economy perks are good when the opening shop supports them.",
          },
        },
        {
          "@type": "Question",
          name: "Should I force Burn from Day 1?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Buy early Burn only when the shop gives you real tempo or a clear Fire package. If the shop gives random filler, level, freeze, save, or play the strongest temporary board.",
          },
        },
        {
          "@type": "Question",
          name: "What beats Burn?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Poison tempo, Burn mirrors, Dark burst, shield and healing boards, and late scaling engines can all beat Burn if your first wave is too slow or too weak. The answer is usually earlier activation, a stronger carry, or a small defensive buffer.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a 3-star Molten Bow?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No, but Molten Bow upgrades are valuable when it is already your carry. Do not chase 3-star unless the upgrade actually helps the active Burn chain.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my Burn build fall off late?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Burn falls off when it is only fast, not scalable or safe. Add Flare upgrades, Wildfire scaling, Fire Orb positioning, cooldown, direct damage, or a defensive flex slot before enemies survive your first wave.",
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
          title="Best Burn Build in Oaken Tower"
          description="Use this when you find Molten Bow, Flare, Wildfire, or a strong Fire package. Burn still works after the nerf, but the new 4.0s vs 4.1s timing decides how you build the chain."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BurnBuildContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
