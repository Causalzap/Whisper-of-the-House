import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BleedBuildContent from "@/data/oaken-tower/bleed-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/bleed-build`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-bleed-build-core-items.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-shard-fang-target.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-crown-forge-emerald-sword.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-bleed-build-one-second-cooldown.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-shard-fang-trigger-rule.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-oak-bleed-billion-damage.webp`,
];

const toc = [
  { id: "build-plan", label: "Build plan" },
  { id: "item-data", label: "Item data" },
  { id: "perks", label: "Best perks" },
  { id: "pack-mechanics", label: "Crystal pack" },
  { id: "day-plan", label: "Day plan" },
  { id: "fallbacks", label: "No Shardfang?" },
  { id: "bleed-vs-poison", label: "Bleed vs Poison" },
  { id: "crown-forge", label: "Crown Forge" },
  { id: "speed-multicast", label: "Cooldown & Multicast" },
  { id: "trigger-test", label: "Trigger test" },
  { id: "matchups", label: "Matchups" },
  { id: "oak-test", label: "Oak test" },
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
    { href: "/oaken-tower/burn-build", label: "Best Burn Build" },
    { href: "/oaken-tower/frosty-build", label: "Best Frosty Build" },
];

export const metadata: Metadata = {
  title: "Oaken Tower Bleed Build Guide: Shardfang & Emerald Sword",
  description:
    "Build a stronger Oaken Tower Bleed run with Shardfang, Emerald Sword, Crystal tags, perks, Crown Forge targets, Poison pivots, and Oak damage checks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Bleed Build Guide",
    description:
      "A player-first Oaken Tower Bleed build guide covering Shardfang, Emerald Sword, Crystal tags, perks, Crown Forge targets, fallback routes, Poison pivots, cooldown breakpoints and Oak testing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower Bleed build showing Emerald Sword, Shardfang, Midas Diary and Crystal support pieces.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaken Tower Bleed Build Guide",
    description:
      "Learn the Shardfang + Emerald Sword Bleed build, including Crystal scaling, perks, Crown Forge targets and when to pivot to Poison.",
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
          name: "Bleed Build",
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
        "Oaken Tower Bleed Build Guide: Shardfang, Emerald Sword, Crystal Bleed, Perks, Crown Forge Targets, Poison Pivot Decisions and Oak Damage Test",
      description:
        "A practical Oaken Tower Bleed build guide explaining how to build a Crystal Bleed engine around Shardfang and Emerald Sword, why Emerald Sword's +1, +2 and +4 Crystal bonus Bleed breakpoints matter, how Shardfang triggers from external Bleed application, which perks help Bleed runs, how Crystal, Sword, Dagger and Bleed tags affect shop decisions, when to use Crown Forge on Emerald Sword or Shardfang, how to choose between Bleed and Poison, what to do when Shardfang does not appear, how cooldown and Multicast affect the trigger chain, how to play common matchups, and why Oak test damage is ceiling proof rather than the minimum requirement for 10 wins.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Bleed Build" },
        { "@type": "Thing", name: "Shardfang" },
        { "@type": "Thing", name: "Emerald Sword" },
        { "@type": "Thing", name: "Crystal Bleed" },
        { "@type": "Thing", name: "Crown Forge" },
        { "@type": "Thing", name: "Bleed vs Poison" },
        { "@type": "Thing", name: "Cooldown Reduction" },
        { "@type": "Thing", name: "Multicast" },
        { "@type": "Thing", name: "The Oak" },
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
          name: "What is the best Bleed build in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Bleed build is usually a Crystal Bleed engine built around Shardfang and Emerald Sword. Emerald Sword gives Crystal items bonus Bleed, and Shardfang triggers when another item applies Bleed.",
          },
        },
        {
          "@type": "Question",
          name: "Should I force Bleed from Day 1?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Play early tempo first. Move into Bleed when the shop gives you Shardfang, Emerald Sword, Midas Diary, Crown Forge value, or a strong Crystal package.",
          },
        },
        {
          "@type": "Question",
          name: "What does Shardfang need to work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shardfang needs another item to apply Bleed first. It is the payoff, not the opener. Emerald Sword is one of the best enablers because it gives Crystal items bonus Bleed.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Emerald Sword important for Bleed?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Emerald Sword turns Crystal items into stronger Bleed appliers at the start of combat. Its +1, +2 and +4 bonus Bleed upgrade path gives Shardfang a reliable trigger source and makes the Crystal package scale.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best perks for Bleed?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Merge and Flash Sale are usually the best general options because they help you hit upgrades and afford targeted shops. Sword, melee, artillery, or economy perks can also be good if your opening supports Emerald Sword or a funded pivot.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Crown Forge on Shardfang or Emerald Sword?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Crown Forge on whichever item improves the engine most. In many runs, Emerald Sword is the better target because it feeds the Crystal Bleed package that makes Shardfang trigger.",
          },
        },
        {
          "@type": "Question",
          name: "What if I never find Shardfang?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not keep forcing Bleed. Use Poison, Burn, bow tempo, weapon carry, or the strongest shop direction while keeping useful Emerald Sword or Crystal pieces only if they are already helping.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bleed better than Poison in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bleed has a higher engine ceiling when you find Shardfang and Emerald Sword. Poison is usually easier to stabilize early. Choose based on the shop, not on the build you wanted before the run.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bleed good for The Oak?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. A finished Bleed engine can reach 100,000+ Bleed and 1 billion+ total damage in Oak testing because long fights let the chain keep scaling. Ranked 10-win boards still need speed and survival first.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest Bleed build mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The biggest mistake is owning Bleed items without a working chain. A real Bleed build needs an applier, a payoff, speed, and a way to convert scaling into wins.",
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
          title="Best Bleed Build in Oaken Tower"
          description="Use this when the shop gives you Shardfang, Emerald Sword, or a strong Crystal package. The goal is simple: apply Bleed first, trigger Shardfang, then scale the engine before faster builds kill you."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BleedBuildContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
