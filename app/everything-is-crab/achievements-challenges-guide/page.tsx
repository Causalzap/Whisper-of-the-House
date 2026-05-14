import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsChallengesContent from "@/data/everything-is-crab/achievements-challenges-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/achievements-challenges-guide`;

export const metadata: Metadata = {
  // Title (50 chars): Clean, safe length, clear intent
  title: "Everything Is Crab Achievements & Challenges Guide",
  // Description (157 chars): Natural phrasing, covers main topics, perfect length
  description:
    "Complete every challenge in Everything Is Crab! Discover hidden achievement triggers, Pacifist run tips, Social charm goals, and how to unlock all cosmetics.",
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
          name: "Achievements & Challenges Guide",
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
      headline: "Everything Is Crab Achievements & Challenges Guide",
      description: "Complete every challenge in Everything Is Crab! Discover hidden achievement triggers, Pacifist run tips, Social charm goals, and how to unlock all cosmetics.",
      image: [
        `${siteUrl}/images/everything-is-crab/everything-is-crab-achievements-challenges-overview.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-achievements-stinger-poison-unlock.webp`
      ],
      inLanguage: "en",
      datePublished: "2026-05-09",
      dateModified: "2026-05-09",
      about: [
        {
          "@type": "VideoGame",
          name: "Everything Is Crab",
        },
        {
          "@type": "Thing",
          name: "Game Achievements",
        },
        {
          "@type": "Thing",
          name: "Challenge Runs",
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
        {
          "@type": "Question",
          name: "Is this a complete all achievements guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This is an early achievements and challenges guide. It covers routing, known triggers, and high-value challenge paths. Exact unknown thresholds should be updated as they are verified.",
          },
        },
        {
          "@type": "Question",
          name: "What should I unlock first in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get a stable clear first. After that, push early Pressure, check the Codex, test new genetics, then start farming specific poison, reflect, Social, boss, or challenge goals.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Stinger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deal over 200 poison damage in a single run. Detachable Tail damage does not count, so use a real poison route and keep the run alive long enough for poison damage to stack.",
          },
        },
        {
          "@type": "Question",
          name: "Can you skip killing bosses in a Pacifist run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Pacifist-style routing can focus on outlasting a boss until it gives up, but the tradeoff is losing normal meat and DNA or reroll resources.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Social achievement target?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The clearest Social target is having 12 charmed allies at the same time. Tail, Tail Wag, Alpha, Antennae, and Social stacking are the main route pieces.",
          },
        },
        {
          "@type": "Question",
          name: "Are social builds good for bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but they still need a backup plan. Allies can split pressure and add value, but bosses may still require personal damage, movement, and survival.",
          },
        },
        {
          "@type": "Question",
          name: "Are Pacifist runs good for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Pacifist-style runs are better after you understand food, movement, boss patterns, and safe scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take Carcinisation during challenge runs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if the run is already stable. Do not take Carcinisation while behind, low on HP, slow, underleveled, or about to fight a boss unprepared.",
          },
        },
        {
          "@type": "Question",
          name: "Do Supporter Pack cosmetics affect gameplay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Supporter Pack cosmetics are visual only. They do not improve survival, progression, stats, or achievement routing.",
          },
        },
        {
          "@type": "Question",
          name: "Are all cosmetics paid DLC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Supporter Pack contains paid Ghost Crab cosmetics, but the game also has free cosmetics unlockable through normal gameplay.",
          },
        },
        {
          "@type": "Question",
          name: "What guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Read Best Builds if you need a stronger route. Read Boss Guide if final boss or Cataclysm goals are your main problem.",
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
          title="Everything Is Crab Achievements and Challenges Guide"
          description="Plan Everything Is Crab achievement and challenge runs with known unlock triggers, Stinger poison routing, Pacifist boss survival, Social charm allies, Pressure goals, cosmetics, and Cataclysm tips."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 9, 2026"
          toc={[
            {
              id: "how-achievements-and-challenges-work",
              label: "How achievements work",
            },
            {
              id: "known-unlock-triggers",
              label: "Known unlock triggers",
            },
            {
              id: "what-to-unlock-first",
              label: "Unlock priority",
            },
            {
              id: "best-builds-for-challenges",
              label: "Best challenge builds",
            },
            {
              id: "poison-goals-and-stinger",
              label: "Poison and Stinger",
            },
            {
              id: "mutagen-and-rerolls",
              label: "Mutagen and rerolls",
            },
            {
              id: "reflect-goals-and-spines",
              label: "Reflect and Spines",
            },
            {
              id: "pacifist-runs",
              label: "Pacifist runs",
            },
            {
              id: "social-and-pack-challenges",
              label: "Social and charm",
            },
            {
              id: "pressure-achievements",
              label: "Pressure goals",
            },
            {
              id: "final-boss-and-cataclysm-goals",
              label: "Final boss goals",
            },
            {
              id: "cosmetics-and-collection-goals",
              label: "Cosmetics",
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
              href: "/everything-is-crab/progression-guide",
              label: "Everything Is Crab Progression Guide",
            },
            {
              href: "/everything-is-crab/selective-pressure-guide",
              label: "Everything Is Crab Selective Pressure Guide",
            },
          ]}
        >
          <AchievementsChallengesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
