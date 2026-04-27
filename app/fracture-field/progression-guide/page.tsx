import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FractureFieldProgressionGuideContent from "@/data/fracture-field/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/fracture-field`;
const pageUrl = `${gameUrl}/progression-guide`;

export const metadata: Metadata = {
    title: "Fracture Field Progression Guide: All Layers & Iron Wall",
    description:
      "Master Fracture Field layer progression. Overcome the Iron, Gold, and Obsidian walls with our Pierce vs Hardness tips, Drone Hub setups, and Chronite strategies.",
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
          name: "Fracture Field Guide",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fracture Field Progression Guide",
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
        "Fracture Field Progression Guide: All Layers, Iron Wall and How to Stop Getting Stuck",
      description:
        "This Fracture Field progression guide explains the full rock layer route from Stone to Chronite, why new layers feel impossible, how Pierce and Hardness work, how to break the Iron wall, how to handle Silver, Gold, Obsidian and late-game layers, how to configure Drone Hub for progression, and what to upgrade when stuck.",
      image: [
        `${siteUrl}/images/fracture-field/obsidian-wall-progression.webp`,
        `${siteUrl}/images/fracture-field/pierce-hardness-tooltip.webp`,
        `${siteUrl}/images/fracture-field/iron-wall-stuck.webp`,
        `${siteUrl}/images/fracture-field/silver-hp-jump.webp`,
        `${siteUrl}/images/fracture-field/gold-wall-stuck.webp`,
        `${siteUrl}/images/fracture-field/chronite-late-layer.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-27",
      about: [
        {
          "@type": "VideoGame",
          name: "Fracture Field",
        },
        {
          "@type": "Thing",
          name: "Fracture Field progression guide",
        },
        {
          "@type": "Thing",
          name: "Fracture Field all layers",
        },
        {
          "@type": "Thing",
          name: "Stone",
        },
        {
          "@type": "Thing",
          name: "Clay",
        },
        {
          "@type": "Thing",
          name: "Sandstone",
        },
        {
          "@type": "Thing",
          name: "Quartz",
        },
        {
          "@type": "Thing",
          name: "Iron wall",
        },
        {
          "@type": "Thing",
          name: "Silver wall",
        },
        {
          "@type": "Thing",
          name: "Gold wall",
        },
        {
          "@type": "Thing",
          name: "Obsidian wall",
        },
        {
          "@type": "Thing",
          name: "Primal",
        },
        {
          "@type": "Thing",
          name: "Star Metal",
        },
        {
          "@type": "Thing",
          name: "Void Stone",
        },
        {
          "@type": "Thing",
          name: "Chronite",
        },
        {
          "@type": "Thing",
          name: "Pierce",
        },
        {
          "@type": "Thing",
          name: "Hardness",
        },
        {
          "@type": "Thing",
          name: "Drone Hub",
        },
        {
          "@type": "Thing",
          name: "World Fracture",
        },
        {
          "@type": "Thing",
          name: "Reality Shatter",
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
          name: "What is the full Fracture Field layer order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The full recommended layer sequence is Stone, Clay, Sandstone, Quartz, Iron, Silver, Gold, Diamond, Obsidian, Primal, Star Metal, Void Stone, and Chronite.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I stuck at Iron in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Iron is the first serious Pierce and Hardness check. If the bar barely moves, buy Pierce, hardness tools, Fracture, and World Fracture upgrades instead of only waiting longer.",
          },
        },
        {
          "@type": "Question",
          name: "How much Pierce do I need for each layer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the Quarry Stats panel in your current version to compare Pierce against the layer's Hardness. Exact thresholds can shift with patches and upgrades, so avoid relying on old static numbers.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my quarry stop progressing even when my damage is good?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your quarry may be full or badly targeted. Use bombs, adjust drones, and make sure the field is cycling useful rocks instead of clogging.",
          },
        },
        {
          "@type": "Question",
          name: "Which drones should I use for progression?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before Silver, use Hammer, Collector, then Shatter if needed. Around Silver and Gold, use Shatter, Collector, and Supervisor. In late game, add Shatter, Pierce, Boost, and Sentry-style support once you have enough slots.",
          },
        },
        {
          "@type": "Question",
          name: "When exactly should I do my first Reality Shatter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do your first Reality Shatter when Silver, Gold, or a deeper layer has slowed down and the shard reward can buy several meaningful upgrades. As a practical benchmark, under 100 Reality Shards is usually early, 200 to 500 is workable, and 500 to 1,000 or more is smoother.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Gold so slow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gold is a deep value wall. It tests your World Fracture routing, Local Mastery, Drone Hub scaling, and Reality Shatter preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Obsidian bugged?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually no. Obsidian is meant to be a major late-game gate, although early versions had rougher scaling. Check your version, then improve Pierce, Mk. II scaling, bombs, drones, and rock economy.",
          },
        },
        {
          "@type": "Question",
          name: "How do I reach Chronite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Build Reality Shatter scaling, improve Pierce and rock economy, push through Obsidian, Primal, Star Metal, and Void Stone, then reset around upgrade breakpoints instead of fixed layer milestones.",
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
          title="Fracture Field Progression Guide: All Layers, Iron Wall and How to Stop Getting Stuck"
          description="Learn the full Fracture Field layer route from Stone to Chronite, how to break the Iron wall, how Pierce and Hardness work, when to reset, how to configure Drone Hub, and what to upgrade when stuck."
          gameTitle="Fracture Field"
          gameHref="/fracture-field"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 27, 2026"
          toc={[
            {
              id: "progression-route",
              label: "Progression route",
            },
            {
              id: "why-new-layers-feel-impossible",
              label: "Why layers feel impossible",
            },
            {
              id: "pierce-vs-hardness",
              label: "Pierce vs Hardness",
            },
            {
              id: "drone-hub-setup",
              label: "Drone Hub setup",
            },
            {
              id: "quartz-and-first-reset",
              label: "Quartz and first reset",
            },
            {
              id: "iron-wall",
              label: "Iron wall",
            },
            {
              id: "silver-wall",
              label: "Silver wall",
            },
            {
              id: "gold-wall",
              label: "Gold wall",
            },
            {
              id: "obsidian-wall",
              label: "Obsidian wall",
            },
            {
              id: "primal-star-metal-void-stone-chronite",
              label: "Late layers",
            },
            {
              id: "version-changes-and-strategy",
              label: "Version changes",
            },
            {
              id: "what-to-upgrade-when-stuck",
              label: "What to upgrade",
            },
            {
              id: "common-progression-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/fracture-field",
              label: "Fracture Field Complete Walkthrough & Guide",
            },
            {
              href: "/fracture-field/prestige-guide",
              label: "Fracture Field Prestige Guide",
            },
            {
              href: "/fracture-field/beginner-walkthrough",
              label: "Fracture Field Beginner Walkthrough",
            },
            {
              href: "/fracture-field/achievements-guide",
              label: "Fracture Field Achievements Guide",
            },
          ]}
        >
          <FractureFieldProgressionGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}