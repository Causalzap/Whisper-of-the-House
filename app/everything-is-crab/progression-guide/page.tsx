import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ProgressionGuideContent from "@/data/everything-is-crab/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/progression-guide`;

export const metadata: Metadata = {
    // Title (56 chars): 完美避开截断，清晰点出三个核心词
    title: "Everything Is Crab Guide: Progression, Unlocks & Codex",
    // Description (160 chars): 精炼且吸引人，包含高价值关键词
    description:
      "Master progression in Everything Is Crab! Learn how to track Codex unlocks, choose the best starting genetics, scale Pressure levels, and access Endless Mode.",
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
            name: "Everything Is Crab Guide",
            item: `${siteUrl}/everything-is-crab`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Progression & Unlocks Guide",
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
        // 同步优化后的标题和描述
        headline: "Everything Is Crab Guide: Progression, Unlocks & Codex",
        description: "Master progression in Everything Is Crab! Learn how to track Codex unlocks, choose the best starting genetics, scale Pressure levels, and access Endless Mode.",
        image: [
          // 保留最具代表性的封面图，精简代码体积
          `${siteUrl}/images/everything-is-crab/everything-is-crab-progression-pressure-20-unlocks.webp`,
          `${siteUrl}/images/everything-is-crab/everything-is-crab-progression-starting-genetics.webp`
        ],
        inLanguage: "en",
        datePublished: "2026-05-08",
        dateModified: "2026-05-08",
        about: [
          // 消除堆砌，只保留最核心的分类实体
          {
            "@type": "VideoGame",
            name: "Everything Is Crab",
          },
          {
            "@type": "Thing",
            name: "Game Progression",
          },
          {
            "@type": "Thing",
            name: "Unlockables",
          }
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
          // FAQ 完全保留，继续为您抓取 People Also Ask 的流量
          {
            "@type": "Question",
            name: "What should I do after my first clear in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Check the Codex, read any new genetics, push one early Pressure level with your safest build, and pick one unlock target instead of testing everything at once.",
            },
          },
          {
            "@type": "Question",
            name: "What is the main progression system in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The main progression systems are food and evolutions inside a run, then Pressure levels, genetics, Codex entries, challenge goals, cosmetics, and Endless Mode preparation between runs.",
            },
          },
          {
            "@type": "Question",
            name: "How do I unlock new Pressure levels in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Clear your current run or current Pressure level. For example, clearing Pressure 6 unlocks Pressure 7.",
            },
          },
          {
            "@type": "Question",
            name: "What changes at Pressure 6 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pressure 6 adds random biome starts, which makes your opening more dependent on the biome you spawn in.",
            },
          },
          {
            "@type": "Question",
            name: "What changes at Pressure 7 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pressure 7 adds boss protection at the start of fights and after each enragement, while environmental damage increases.",
            },
          },
          {
            "@type": "Question",
            name: "Which genetic should I use first in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the baseline or Standard start for your first clear and early learning. After that, test one new genetic at a time.",
            },
          },
          {
            "@type": "Question",
            name: "Is Pacifist a good first genetic in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Pacifist is better after you understand food routing, movement, boss patterns, and non-combat scaling.",
            },
          },
          {
            "@type": "Question",
            name: "When should I try Grandiose in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Try Grandiose when you want a large-body route with Mass, Alpha, Trunk reach, Body Slam, HP scaling, or big physical damage.",
            },
          },
          {
            "@type": "Question",
            name: "What is Endless Mode for in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Endless Mode is a late progression target where your build needs to keep scaling longer than a normal clear build. Focus on it after stable clears and early Pressure progression.",
            },
          },
          {
            "@type": "Question",
            name: "Is Endless Mode important early in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. First learn normal clears, early Pressure, genetics, and final boss consistency. Endless Mode becomes useful when you already have builds that can clear.",
            },
          },
          {
            "@type": "Question",
            name: "How do I track unlocks in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the Codex after each clear or death. Check genetics, evolutions, enemies, creations, cosmetics, and any new entries before starting another run.",
            },
          },
          {
            "@type": "Question",
            name: "What should I unlock first in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "First clear normal runs, then early Pressure levels, then test one new genetic, then farm one build-specific unlock such as poison, reflect, size, boss, or social goals.",
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
          title="Everything Is Crab Progression Guide: Genetics, Codex, Unlocks and Endless Mode"
          description="Learn how progression works in Everything Is Crab, including confirmed milestones, Pressure unlocks, genetics, Codex tracking, build-specific unlocks, cosmetics, Endless Mode preparation, and what to do after your first clear."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 8, 2026"
          toc={[
            {
              id: "progression-loop",
              label: "Progression loop",
            },
            {
              id: "confirmed-milestones",
              label: "Confirmed milestones",
            },
            {
              id: "unlock-tracker",
              label: "Unlock tracker",
            },
            {
              id: "genetics",
              label: "Genetics",
            },
            {
              id: "genetics-order",
              label: "Genetics order",
            },
            {
              id: "codex",
              label: "Codex",
            },
            {
              id: "pressure-path",
              label: "Pressure path",
            },
            {
              id: "endless-mode",
              label: "Endless Mode",
            },
            {
              id: "unlock-priorities",
              label: "Unlock priorities",
            },
            {
              id: "build-specific-unlocks",
              label: "Build unlocks",
            },
            {
              id: "cosmetics-and-collection",
              label: "Collection",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "next-steps",
              label: "Next steps",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/everything-is-crab/evolutions-list",
              label: "Everything Is Crab Evolution Picker",
            },
            {
              href: "/everything-is-crab/genetics-guide",
              label: "Everything Is Crab Genetics Guide",
            },  
            {
              href: "/everything-is-crab",
              label: "Everything Is Crab Guide",
            },
            {
              href: "/everything-is-crab/best-builds",
              label: "Everything Is Crab Best Builds",
            },
            {
              href: "/everything-is-crab/boss-guide",
              label: "Everything Is Crab Boss Guide",
            },
            {
              href: "/everything-is-crab/selective-pressure-guide",
              label: "Everything Is Crab Selective Pressure Guide",
            },
            {
              href: "/everything-is-crab/achievements-challenges-guide",
              label: "Everything Is Crab Achievements and Challenges Guide",
            },
          ]}
        >
          <ProgressionGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}