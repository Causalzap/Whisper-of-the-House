import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FractureFieldPrestigeGuideContent from "@/data/fracture-field/prestige-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/fracture-field`;
const pageUrl = `${gameUrl}/prestige-guide`;

export const metadata: Metadata = {
    title: "Fracture Field Prestige Guide: World & Reality Shatter",
    description:
      "Learn exactly when to World Fracture and Reality Shatter. Discover optimal Core Fragment farming, v1.1.0 reset rules, and the best prestige upgrades to buy first.",
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
          name: "Fracture Field Prestige Guide",
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
        "Fracture Field Prestige Guide: World Fracture, Reality Shatter and Best Reset Timing",
      description:
        "This Fracture Field prestige guide explains World Fracture, Reality Shatter, Core Fragments, Reality Shards, first reset timing, practical reset benchmarks, v1.1.0 Drone Hub and Quarry Foreman retention rules, best prestige upgrades, achievement warnings, and deep-layer prestige timing.",
      image: [
        `${siteUrl}/images/fracture-field/first-world-fracture.webp`,
        `${siteUrl}/images/fracture-field/reality-shatter-guide.webp`,
        `${siteUrl}/images/fracture-field/first-reality-shatter.webp`,
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
          name: "Fracture Field prestige guide",
        },
        {
          "@type": "Thing",
          name: "World Fracture",
        },
        {
          "@type": "Thing",
          name: "Reality Shatter",
        },
        {
          "@type": "Thing",
          name: "Core Fragments",
        },
        {
          "@type": "Thing",
          name: "Reality Shards",
        },
        {
          "@type": "Thing",
          name: "Drone Hub",
        },
        {
          "@type": "Thing",
          name: "Quarry Foreman",
        },
        {
          "@type": "Thing",
          name: "Fractured Mind Mk. II",
        },
        {
          "@type": "Thing",
          name: "Geologist's Insight Mk. II",
        },
        {
          "@type": "Thing",
          name: "Core Saturation Mk. II",
        },
        {
          "@type": "Thing",
          name: "Fracture Field v1.1.0",
        },
        {
          "@type": "Thing",
          name: "Prestige reset timing",
        },
        {
          "@type": "Thing",
          name: "Fracture Field achievements",
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
          name: "Is 30 Core Fragments enough for the first World Fracture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. 30 or more Core Fragments is a good practical benchmark for the first World Fracture. Under 20 often feels weak, while 20 to 30 can work if the run has clearly stalled.",
          },
        },
        {
          "@type": "Question",
          name: "How many Reality Shards should I have before my first Reality Shatter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a first serious Reality Shatter, 200 to 500 Reality Shards is workable and 500 to 1,000 or more usually feels smoother. Under 100 is usually too early unless you are testing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Reality Shatter still reset Drone Hub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. In Fracture Field v1.1.0, Drone Hub stays unlocked across Reality Shatter and configured drone rules are preserved. Drone upgrade levels still reset.",
          },
        },
        {
          "@type": "Question",
          name: "Does Reality Shatter reset Quarry Foreman?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. In Fracture Field v1.1.0, Quarry Foreman fully persists across Reality Shatter, including upgrade levels and automation settings.",
          },
        },
        {
          "@type": "Question",
          name: "Which Reality Shatter upgrades should I buy first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prioritize high-impact scaling such as Fractured Mind Mk. II, Geologist's Insight Mk. II, Core Saturation Mk. II, Dust or rock economy, and then Drone Hub support.",
          },
        },
        {
          "@type": "Question",
          name: "Can prestige upgrades make achievements harder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Quarry expansion upgrades can make capacity achievements harder by increasing the maximum rock count. If you want 100% completion, finish important capacity achievements before heavily expanding quarry capacity.",
          },
        },
        {
          "@type": "Question",
          name: "Should I follow older Reality Shatter guides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Be careful. Any Fracture Field guide written before v1.1.0 may be wrong about Drone Hub and Quarry Foreman persistence. Always check whether the guide mentions the v1.1.0 Reality Shatter changes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I read the complete walkthrough first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you are still learning the main route, start with the Fracture Field Complete Walkthrough and Guide. Use the prestige guide when you specifically need World Fracture, Reality Shatter, reset timing, or prestige upgrade help.",
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
          title="Fracture Field Prestige Guide: World Fracture, Reality Shatter and Best Reset Timing"
          description="Learn when to World Fracture and Reality Shatter in Fracture Field, how many Core Fragments or Reality Shards you need, what resets in v1.1.0, which prestige upgrades to buy first, and how prestige affects achievements."
          gameTitle="Fracture Field"
          gameHref="/fracture-field"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 27, 2026"
          toc={[
            {
              id: "version-history-and-prestige-changes",
              label: "Version changes",
            },
            {
              id: "how-prestige-works",
              label: "How prestige works",
            },
            {
              id: "world-fracture-explained",
              label: "World Fracture",
            },
            {
              id: "when-to-world-fracture-first",
              label: "First World Fracture",
            },
            {
              id: "best-world-fracture-upgrades",
              label: "World Fracture upgrades",
            },
            {
              id: "reset-benchmarks",
              label: "Reset benchmarks",
            },
            {
              id: "reality-shatter-explained",
              label: "Reality Shatter",
            },
            {
              id: "what-do-you-lose-after-reality-shatter",
              label: "What you lose / keep",
            },
            {
              id: "when-to-reality-shatter-first",
              label: "First Reality Shatter",
            },
            {
              id: "best-reality-shatter-upgrades",
              label: "Reality Shatter upgrades",
            },
            {
              id: "achievement-warning-before-prestige-upgrades",
              label: "Achievement warning",
            },
            {
              id: "drone-hub-and-prestige",
              label: "Drone Hub and prestige",
            },
            {
              id: "deep-layer-prestige-timing",
              label: "Deep-layer timing",
            },
            {
              id: "common-prestige-mistakes",
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
              href: "/fracture-field/beginner-walkthrough",
              label: "Fracture Field Beginner Walkthrough",
            },
            {
              href: "/fracture-field/progression-guide",
              label: "Fracture Field Progression Guide",
            },
            {
              href: "/fracture-field/achievements-guide",
              label: "Fracture Field Achievements Guide",
            },
          ]}
        >
          <FractureFieldPrestigeGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}