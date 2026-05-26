import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PoisonBuildContent from "@/data/oaken-tower/poison-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/poison-build`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-poison-start.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-poison-reroll-ring.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-poison-final-damage.webp`,
];

const toc = [
  { id: "when-to-play-poison", label: "When to play" },
  { id: "core-items", label: "Core items" },
  { id: "perk-setup", label: "Perks" },
  { id: "day-by-day", label: "Day plan" },
  { id: "mid-game-scaling", label: "Mid game" },
  { id: "encounters", label: "Encounters" },
  { id: "placement-and-support", label: "Placement" },
  { id: "matchups", label: "Matchups" },
  { id: "final-board", label: "Final board" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "quick-checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/oaken-tower", label: "Oaken Tower Guide" },
    { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
    { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
    { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
    { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
    { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
    { href: "/oaken-tower/burn-build", label: "Best Burn Build" },
    { href: "/oaken-tower/frosty-build", label: "Best Frosty Build" },
    { href: "/oaken-tower/bleed-build", label: "Best Bleed Build" },
];

export const metadata: Metadata = {
    title: "Best Poison Build in Oaken Tower: Items, Perks & Scaling",
    description: "Stop dying before your stacks matter. Master the Oaken Tower Poison build with the best core items, perks, and exact day-by-day strategy for 10-win runs.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Best Poison Build in Oaken Tower",
    description:
      "A player-first Oaken Tower Poison build guide covering core items, perks, encounters, day-by-day timing, reroll targets, matchups and common mistakes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower early Poison start with a Poison slot and Poison items in the shop.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Poison Build in Oaken Tower",
    description:
      "Learn the Poison items, perks, encounters, reroll targets and matchup fixes that make Oaken Tower Poison builds work.",
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
          name: "Poison Build",
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
        "Best Poison Build in Oaken Tower: Core Items, Perks, Encounters, Day Plan, Reroll Targets and Matchups",
      description:
        "A practical Oaken Tower Poison build guide for players who want to know when to commit to Poison, which items matter, how Poison Dagger, Petal Staff, Venomstrike, Toxins, Venom Ring and Harbinger fit into a run, which perks and encounters support Poison, how to plan D1-D3, D4-D6, D7-D8 and D9+ decisions, when to reroll, how to place and support the Poison engine, and how to adjust against shield, heal, Burn, Frosty, Dark burst and bow carry opponents.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-16",
      dateModified: "2026-05-16",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Poison Build" },
        { "@type": "Thing", name: "Poison Dagger" },
        { "@type": "Thing", name: "Petal Staff" },
        { "@type": "Thing", name: "Venomstrike" },
        { "@type": "Thing", name: "Toxins" },
        { "@type": "Thing", name: "Venom Ring" },
        { "@type": "Thing", name: "Oaken Tower Perks" },
        { "@type": "Thing", name: "Oaken Tower Encounters" },
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
          name: "What are the best Poison items in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with Poison Dagger or Petal Staff if the shop offers them early. Look for Venomstrike if you have bow support, Toxins if you already apply Poison, and Venom Ring when you have enough Poison items to scale around it.",
          },
        },
        {
          "@type": "Question",
          name: "Is Toxic the best perk for Poison?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Toxic is the cleanest Poison opener because it gives a Poison Slot, but it is only strong when your shop gives you fast triggers or Poison items to use with it.",
          },
        },
        {
          "@type": "Question",
          name: "Is Venom Ring worth building around?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, when you already have enough Poison items or can quickly add them. Venom Ring is much weaker if it appears in a board with no Poison base.",
          },
        },
        {
          "@type": "Question",
          name: "Is Poison good against shield builds?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Poison can be good into shield and heal builds, but only if you apply enough of it. A tiny Poison source may not beat heavy shielding, healing, or debuff cleanse.",
          },
        },
        {
          "@type": "Question",
          name: "What should I reroll for in a Poison build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reroll for a named target: Venom Ring, Toxins, Venomstrike, Petal Staff duplicates, potion support, cooldown support, multiccast, or defense. If you cannot name the target, you probably should not roll yet.",
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
          title="Best Poison Build in Oaken Tower"
          description="Use Poison when the shop actually gives you a real opener, then build around the item that keeps applying stacks instead of buying every Poison piece you see."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PoisonBuildContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}