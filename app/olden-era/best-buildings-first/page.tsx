import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildingsFirstContent from "@/data/olden-era/best-buildings-first.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/best-buildings-first`;

export const metadata: Metadata = {
  title:
    "Heroes Olden Era Best Buildings to Build First: Early Build Priority Guide",
  description:
    "Learn the best buildings to build first in Heroes of Might and Magic: Olden Era, including early economy, unit dwellings, Mage Guild, Marketplace, Law Points, Astrology Points, faction priorities, and weekly growth timing.",
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
          name: "Heroes of Might and Magic: Olden Era Guide",
          item: `${siteUrl}/olden-era`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Buildings to Build First",
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
        "Heroes Olden Era Best Buildings to Build First: Early Build Priority Guide",
      description:
        "This Heroes of Might and Magic: Olden Era building guide explains what to build first, how to choose between army buildings and economy, when to build Mage Guild or Marketplace, how to compare gold, Law Points, and Astrology Points, and how faction-specific building priorities change your first week.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-city-buildings.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-faction-priorities.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-gold-law-astrology.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-mage-guild.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-marketplace.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-creature-growth-week-end.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-resource-mine.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-bank-gold.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-01",
      dateModified: "2026-05-01",
      about: [
        {
          "@type": "VideoGame",
          name: "Heroes of Might and Magic: Olden Era",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era best buildings to build first",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era building priority",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era early build order",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era economy guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Mage Guild",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Marketplace",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Law Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Astrology Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era creature growth",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era weekly growth",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era faction buildings",
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
          name: "What is the best first building in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best first building is usually the one that improves your next few turns. Build a unit dwelling or upgrade if your army needs safer fights, build economy if your army can already clear, build Mage Guild if spells immediately help, and build Marketplace only when it fixes a real bottleneck.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build gold income first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gold income is a safe early choice when your army can already clear and you need money for recruitment, upgrades, and buildings. Do not choose gold automatically if you are blocked by wood, ore, Alchemical Dust, Law Points, or unit growth.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose Law Points or gold first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose gold when you need immediate recruitment or buildings. Choose Law Points when you know the law you are chasing and it supports your faction route. If you are unsure, gold is usually safer.",
          },
        },
        {
          "@type": "Question",
          name: "When should I choose Astrology Points?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose Astrology Points when map spells, Town Portal, or global magic will matter soon. Do not choose Astrology only because it is available if your army still needs gold, units, or resources.",
          },
        },
        {
          "@type": "Question",
          name: "When should I build Mage Guild?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Build Mage Guild when the spells immediately improve your fights, mobility, buffs, damage, or survival. Delay it if you do not have mana, spell scaling, or a fight where the spells matter.",
          },
        },
        {
          "@type": "Question",
          name: "Is Marketplace worth building early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marketplace is worth building early only if it solves a bottleneck. If trading resources unlocks a key building, unit upgrade, Mage Guild, or recruitment timing, it is good. If not, it may just delay stronger buildings.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build creature dwellings before the end of the week?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually yes if the dwelling affects weekly growth or gives units you can use immediately. A dwelling built before the weekly refresh can be much stronger than the same dwelling built after it.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I cannot build the thing I want?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check the exact missing cost first. You may need a mine, resource pickup, Marketplace trade, Alchemical Dust source, or cheaper tempo building before forcing the original plan.",
          },
        },
        {
          "@type": "Question",
          name: "Is there one fixed build order for every faction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Each faction and hero changes the answer. Use the same rule for all factions: build for your next fight, next bottleneck, and next weekly growth cycle.",
          },
        },
        {
          "@type": "Question",
          name: "Which faction has the clearest early building route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis and Temple currently have the clearest early routes from available footage. Necropolis usually checks Skeleton Archers, Marketplace, Mage Guild, Vampires, and Liches. Temple often checks Solar Temple, Muse Level 2, ranged growth, Mage Guild, and economy.",
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
          title="Heroes Olden Era Best Buildings to Build First: Early Build Priority Guide"
          description="Learn what to build first in Heroes of Might and Magic: Olden Era, including early army buildings, economy upgrades, Mage Guild, Marketplace, Law Points, Astrology Points, faction-specific priorities, and weekly growth timing."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "best-first-building",
              label: "What to build first",
            },
            {
              id: "building-priority-table",
              label: "Building priority table",
            },
            {
              id: "first-build-by-situation",
              label: "By situation",
            },
            {
              id: "faction-building-priorities",
              label: "By faction",
            },
            {
              id: "gold-law-astrology",
              label: "Gold vs Law vs Astrology",
            },
            {
              id: "mage-guild",
              label: "Mage Guild",
            },
            {
              id: "marketplace",
              label: "Marketplace",
            },
            {
              id: "creature-growth",
              label: "Creature growth",
            },
            {
              id: "resource-buildings",
              label: "Resources and mines",
            },
            {
              id: "bank-and-income",
              label: "Income buildings",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
            {
              href: "/olden-era/alchemical-dust",
              label: "How to Get Alchemical Dust",
            },
            {
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
            },
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/necropolis-week-1-build-order",
              label: "Necropolis Week 1 Build Order",
            },
            {
              href: "/olden-era/necropolis-common-mistakes",
              label: "Necropolis Common Mistakes",
            },
            
            
            {
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
          ]}
        >
          <BestBuildingsFirstContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}