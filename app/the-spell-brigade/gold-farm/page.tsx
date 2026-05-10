import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GoldFarmContent from "@/data/the-spell-brigade/gold-farm.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/gold-farm`;

export const metadata: Metadata = {
  title: "The Spell Brigade Gold Farm Guide: Bounty & Fast Runs",
  description:
    "Farm gold faster in The Spell Brigade 1.0 with Bounty, objective rewards, contracts, Greed, Solar Pulse Aura, 25-30 minute runs, and smart upgrade spending.",
  alternates: {
    canonical: pageUrl,
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
          name: "The Spell Brigade Guide",
          item: `${siteUrl}/the-spell-brigade`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gold Farm Guide",
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
      headline: "The Spell Brigade Gold Farm Guide: Bounty & Fast Runs",
      description:
        "Farm gold faster in The Spell Brigade 1.0 with Bounty, objective rewards, contracts, Greed, Solar Pulse Aura, 25-30 minute runs, and smart upgrade spending.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-final-stats.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-gold-farm-enchantments-cost-gold.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-gold-farm-gold-buys-wizards.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-aura-setup.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-gold-farm-one-spell-ascension.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-gold-farm-objectives-give-gold.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-gold-farm-xp-cap-pickup-range.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-gold-farm-ascension-cost.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-10",
      dateModified: "2026-05-10",
      about: [
        {
          "@type": "VideoGame",
          name: "The Spell Brigade",
        },
        {
          "@type": "Thing",
          name: "Gold Farming",
        },
        {
          "@type": "Thing",
          name: "Bounty Upgrade",
        },
        {
          "@type": "Thing",
          name: "Game Progression",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best gold farm in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlock Bounty, respec into it for farming, and run fast objective-focused clears. Solar Pulse Aura is the easiest build route to pair with this strategy.",
          },
        },
        {
          "@type": "Question",
          name: "What does Bounty do in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bounty gives 25% extra gold and doubles objective reward gold. It appears in the third row of upgrades and becomes the main gold-farming upgrade once unlocked.",
          },
        },
        {
          "@type": "Question",
          name: "Should I refund upgrades for Bounty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Refunding is optional. If your only goal is gold farming, refunding lower-value combat upgrades and moving points into Bounty is usually best. If your runs still feel unsafe, keep enough combat power to finish cleanly.",
          },
        },
        {
          "@type": "Question",
          name: "How much gold should a good run make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A normal clear often lands around 500 to 550 gold. An optimized Bounty objective run can reach around 800 to 850 gold.",
          },
        },
        {
          "@type": "Question",
          name: "Does gold drop during the run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gold is mostly calculated after the run. Important sources include objectives, kills, run completion, Bounty, contracts, Greed, and breakables.",
          },
        },
        {
          "@type": "Question",
          name: "Are short runs better than long runs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often, yes. After about 25 to 30 minutes, enemies can become tanky enough that gold per minute drops. Keep looping only if your build is still clearing efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "What is Greed good for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Greed improves gold from destructible objects such as crates and boxes. It is a bonus source, not the whole farming plan.",
          },
        },
        {
          "@type": "Question",
          name: "What are contracts in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contracts are random wizard bonuses that can give extra gold. Check the wizard tab before starting a farm run.",
          },
        },
        {
          "@type": "Question",
          name: "Should I farm the hardest map?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. The best farming map is the one your build can clear quickly and safely. If terrain slows objectives or you die early, your gold per minute drops.",
          },
        },
        {
          "@type": "Question",
          name: "Why does pickup range matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If XP stays on the ground outside your pickup range, your leveling flow slows down. Long farms need pickup support or regular movement through XP.",
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
          title="The Spell Brigade Gold Farm Guide: Bounty, Objectives and Fast Runs"
          description="Farm gold faster in The Spell Brigade 1.0 with Bounty, objective rewards, contracts, Greed, Solar Pulse Aura, fast 25-30 minute clears, and smart spending priorities."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "how-gold-is-calculated",
              label: "How gold works",
            },
            {
              id: "bounty",
              label: "Bounty",
            },
            {
              id: "best-gold-farm-methods",
              label: "Best farm methods",
            },
            {
              id: "short-runs-vs-long-runs",
              label: "Short vs long runs",
            },
            {
              id: "greed-breakables",
              label: "Greed & breakables",
            },
            {
              id: "contracts",
              label: "Contracts",
            },
            {
              id: "why-gold-matters",
              label: "Gold uses",
            },
            {
              id: "gold-buys-wizards",
              label: "Wizard unlocks",
            },
            {
              id: "solar-pulse-farm",
              label: "Solar Pulse farm",
            },
            {
              id: "one-spell-farming",
              label: "One-spell farming",
            },
            {
              id: "objectives-give-gold",
              label: "Objectives",
            },
            {
              id: "xp-cap-pickup-range",
              label: "Pickup range",
            },
            {
              id: "farm-route",
              label: "Farm route",
            },
            {
              id: "best-farm-builds",
              label: "Farm builds",
            },
            {
              id: "farm-stats",
              label: "Farm stats",
            },
            {
              id: "upgrade-priority",
              label: "Spending priority",
            },
            {
              id: "ascension-cost",
              label: "Ascension cost",
            },
            {
              id: "map-choice",
              label: "Map choice",
            },
            {
              id: "solo-vs-coop",
              label: "Solo vs co-op",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-farm-order",
              label: "Farm order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-spell-brigade",
              label: "The Spell Brigade Guide",
            },
            {
              href: "/the-spell-brigade/best-builds",
              label: "The Spell Brigade Best Builds",
            },
            {
              href: "/the-spell-brigade/best-spells-elements",
              label: "The Spell Brigade Best Spells & Elements",
            },
            {
              href: "/the-spell-brigade/solo-guide",
              label: "The Spell Brigade Solo Guide",
            },
            {
              href: "/the-spell-brigade/wizard-unlocks",
              label: "The Spell Brigade Wizard Unlock Guide",
            },
            {
              href: "/the-spell-brigade/achievements-guide",
              label: "The Spell Brigade Achievements Guide",
            },
            {
              href: "/the-spell-brigade/trial-covenants-masteries-prestige",
              label: "The Spell Brigade Trial Covenants Guide",
            },
          ]}
        >
          <GoldFarmContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}