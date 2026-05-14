import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SelectivePressureGuideContent from "@/data/everything-is-crab/selective-pressure-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/selective-pressure-guide`;

export const metadata: Metadata = {
  title:
    "Everything Is Crab: Selective Pressure & Endless Guide",
    description:
    "Master Selective Pressure in Everything Is Crab! Discover all level modifiers (1-20), how to unlock Endless Mode, survive Cataclysm, and the best builds.",
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
            name: "Selective Pressure & Endless Guide",
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
        // 使用优化后精简且抓人的标题和描述
        headline: "Everything Is Crab: Selective Pressure & Endless Guide",
        description: "Master Selective Pressure in Everything Is Crab! Discover all level modifiers (1-20), how to unlock Endless Mode, survive Cataclysm, and the best builds.",
        image: [
          // 建议只保留 1-3 张最具代表性的高清封面图或信息图表
          `${siteUrl}/images/everything-is-crab/everything-is-crab-selective-pressure-20-overview.webp`,
          `${siteUrl}/images/everything-is-crab/everything-is-crab-endless-mode-infinite-scaling.webp`
        ],
        inLanguage: "en",
        datePublished: "2026-05-08",
        dateModified: "2026-05-08",
        about: [
          // 精简实体，只留最核心的游戏名和玩法机制，避免被判为 Spam
          {
            "@type": "VideoGame",
            name: "Everything Is Crab",
          },
          {
            "@type": "Thing",
            name: "Selective Pressure",
          },
          {
            "@type": "Thing",
            name: "Endless Mode",
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
          // FAQ 保留了您原来的内容，确保它们能抓住玩家的 "People Also Ask" 搜索意图
          {
            "@type": "Question",
            name: "What is Selective Pressure in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Selective Pressure is the long-term difficulty ladder. After clears, you unlock harder Pressure levels that add modifiers, harsher conditions, and new progression goals.",
            },
          },
          {
            "@type": "Question",
            name: "How high does Pressure go in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Everything Is Crab 1.0 goes up to Pressure 20.",
            },
          },
          {
            "@type": "Question",
            name: "What changes at Pressure 6 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pressure 6 adds random biome starts, so your opening strategy depends on where you spawn.",
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
            name: "When does Endless Mode unlock in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Current footage says defeating Pressure 10 unlocks Endless access, but you still need to defeat the game in the run before entering Endless.",
            },
          },
          {
            "@type": "Question",
            name: "What changes at Pressure 11 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pressure 11 feels much faster because monsters scale more quickly and give you less time to slowly build. Use known build patterns and flexible early value before committing.",
            },
          },
          {
            "@type": "Question",
            name: "What changes at Pressure 12 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pressure 12 includes a modifier where animals deal less damage to bosses and food bonus is decreased. This makes social or animal boss damage weaker and makes food tempo more important.",
            },
          },
          {
            "@type": "Question",
            name: "What happens at Pressure 13-19 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Exact modifiers should be confirmed from the Pressure screen or Codex as you unlock them. Until then, treat Pressure 13-19 as a modifier-tracking ladder and keep your build or genetic stable while testing each tier.",
            },
          },
          {
            "@type": "Question",
            name: "What happens in Endless Mode in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Endless can continue after the clear with Extinction scaling, more bosses, point-of-interest choices, defend objectives, and infinite scaling for stats such as Max HP, Ability, and Physical.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best build for Pressure in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The safest Pressure builds are Trunk Hybrid with defense, Body Slam Tank, Big Physical with movement, and Spines or Reflect with sustain. Social builds need a backup boss attack.",
            },
          },
          {
            "@type": "Question",
            name: "What build is best for Endless Mode in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Body Slam Tank, Trunk Hybrid, Spines or Reflect with sustain, and Big Physical with movement are the safest early candidates. Endless wants long-term scaling, not just final boss burst.",
            },
          },
          {
            "@type": "Question",
            name: "Is Social Pack good for Pressure in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Social Pack can help with wave pressure, but it needs backup personal boss damage. Pressure 12 reduces animal damage to bosses, so social-only boss plans are risky.",
            },
          },
          {
            "@type": "Question",
            name: "Is Hemp good with Body Slam in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Hemp gives Max HP when health food is eaten at maximum health, and Body Slam scales with Max HP. This makes Hemp especially useful for Body Slam Tank and Endless scaling.",
            },
          },
          {
            "@type": "Question",
            name: "Which genetic should I use for Pressure in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the genetic that already cleared your previous tier. For Pressure 6, stay stable because random biome starts already add uncertainty. For Pressure 15-20, avoid untested genetics.",
            },
          },
          {
            "@type": "Question",
            name: "Should I take Carcinisation in Pressure runs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Take fewer crab points than you would in normal runs. Pressure already adds danger, so Carcinisation should be limited unless your build is clearly ahead.",
            },
          },
          {
            "@type": "Question",
            name: "How do I survive Cataclysm under Pressure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bring movement, HP or defense, recovery, and damage that does not require standing still. Do not chase unsafe damage windows during meteorites.",
            },
          },
          {
            "@type": "Question",
            name: "How do I prepare for Pressure 20 in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use your highest proven build and genetic, record Pressure 8-19 modifiers, practice final boss and Cataclysm survival, and improve the build for Endless scaling.",
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
          title="Everything Is Crab Selective Pressure Guide: Pressure 6-20, Endless and Builds"
          description="Learn Selective Pressure in Everything Is Crab, including Pressure 6 random biome starts, Pressure 7 boss protection, Pressure 10 Endless unlock, Pressure 11 faster scaling, Pressure 12 modifiers, Cataclysm, Endless Mode, Hemp Body Slam synergy, and Pressure 20 prep."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 8, 2026"
          toc={[
            {
              id: "what-is-selective-pressure",
              label: "What is Pressure?",
            },
            {
              id: "pressure-8-19-tracker",
              label: "Pressure 8-19",
            },
            {
              id: "pressure-genetics",
              label: "Genetics",
            },
            {
              id: "pressure-six",
              label: "Pressure 6",
            },
            {
              id: "pressure-seven",
              label: "Pressure 7",
            },
            {
              id: "pressure-ten-eleven-twelve",
              label: "Pressure 10-12",
            },
            {
              id: "best-builds-for-pressure",
              label: "Best builds",
            },
            {
              id: "pressure-failure-fixes",
              label: "Failure fixes",
            },
            {
              id: "movement-and-biomes",
              label: "Biomes",
            },
            {
              id: "food-tempo",
              label: "Food tempo",
            },
            {
              id: "carcinisation-at-pressure",
              label: "Carcinisation",
            },
            {
              id: "cataclysm-mechanics",
              label: "Cataclysm",
            },
            {
              id: "endless-mode-at-pressure",
              label: "Endless Mode",
            },
            {
              id: "hemp-body-slam-synergy",
              label: "Hemp + Body Slam",
            },
            {
              id: "pressure-modifiers",
              label: "Modifiers",
            },
            {
              id: "pressure-run-checklist",
              label: "Checklist",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "pressure-20-core-build",
              label: "Pressure 20",
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
              href: "/everything-is-crab/progression-guide",
              label: "Everything Is Crab Progression Guide",
            },
            {
              href: "/everything-is-crab/boss-guide",
              label: "Everything Is Crab Boss Guide",
            },
            {
              href: "/everything-is-crab/achievements-challenges-guide",
              label: "Everything Is Crab Achievements and Challenges Guide",
            },
          ]}
        >
          <SelectivePressureGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}