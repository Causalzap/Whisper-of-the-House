import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FractureFieldAchievementsGuideContent from "@/data/fracture-field/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/fracture-field`;
const pageUrl = `${gameUrl}/achievements-guide`;

export const metadata: Metadata = {
    title: "Fracture Field Achievements Guide & 100% Walkthrough",
    description:
      "Complete Fracture Field achievements guide with 100% completion tips. Master bomb & drone tasks, clear Reality Shatter goals, and unlock the hardest trophies.",
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
          name: "Fracture Field Achievements Guide",
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
        "Fracture Field Achievements Guide: 100% Walkthrough and Hardest Achievements",
      description:
        "This Fracture Field achievements guide explains the 100% completion route, known achievement names, idle vs active achievements, Golden Touch and Gold capacity warnings, Drone Hub achievements, bomb achievement setup, World Fracture and Reality Shatter milestones, time-based achievements, and hardest achievement types.",
      image: [
        `${siteUrl}/images/fracture-field/fracture-field-achievements.webp`,
        `${siteUrl}/images/fracture-field/reality-shatter-guide.webp`,
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
          name: "Fracture Field achievements guide",
        },
        {
          "@type": "Thing",
          name: "Fracture Field 100% walkthrough",
        },
        {
          "@type": "Thing",
          name: "Golden Touch",
        },
        {
          "@type": "Thing",
          name: "Gold capacity achievement",
        },
        {
          "@type": "Thing",
          name: "Quarry Expansion Mk. II",
        },
        {
          "@type": "Thing",
          name: "Drone Hub achievements",
        },
        {
          "@type": "Thing",
          name: "Bomb achievements",
        },
        {
          "@type": "Thing",
          name: "World Fracture achievements",
        },
        {
          "@type": "Thing",
          name: "Reality Shatter achievements",
        },
        {
          "@type": "Thing",
          name: "Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Fracture Field 98 achievements",
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
          name: "How many achievements are in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fracture Field currently has 98 Steam achievements listed by public achievement trackers and Steam profile data. SteamDB confirms Steam Achievements support for the app, but the SteamDB achievement list itself may require JavaScript to load, so use your in-game achievement panel as the final checklist.",
          },
        },
        {
          "@type": "Question",
          name: "Are there missable achievements in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most achievements are better described as make-harder rather than truly missable. Capacity achievements can become much harder after quarry expansion upgrades increase the maximum capacity requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Should I finish Golden Touch before Quarry Expansion Mk. II?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you care about 100% completion, finish Golden Touch before buying major quarry expansion upgrades such as Quarry Expansion Mk. II.",
          },
        },
        {
          "@type": "Question",
          name: "How do I complete bomb achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Move drone targets away from the setup layer, lower high-damage drone priority if needed, let rocks cluster, and place bombs on dense groups.",
          },
        },
        {
          "@type": "Question",
          name: "When should I do drone achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do basic drone achievements after Drone Hub unlock, but save high-count and expensive drone-type achievements for later when you have more slots, drone cores, and upgrade levels.",
          },
        },
        {
          "@type": "Question",
          name: "Do Reality Shatter resets ruin drone achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reality Shatter keeps Drone Hub unlocked in v1.1.0 and preserves drone rules, but drone upgrade levels still reset. Do high drone achievements during a loop where your drone upgrades are already strong.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start Reality Shatter achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start serious Reality Shatter achievement progress when your shard reward buys meaningful upgrades. Weak shatters can slow your overall 100% route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get long playtime achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leave the game running with stable automation. Treat 10-hour, 100-hour, and 1000-hour achievements as idle-time goals, not routing challenges.",
          },
        },
        {
          "@type": "Question",
          name: "What is the hardest achievement type?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The hardest types are usually long playtime, Golden Touch after expansion, multi-rock bomb setups, high drone-count goals, repeated Reality Shatters, and late-layer progression achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Should I read the progression guide first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you are still stuck on layers such as Iron, Gold, Obsidian, or Chronite, read the Fracture Field Progression Guide first. This achievements guide is for 100% cleanup and achievement routing.",
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
          title="Fracture Field Achievements Guide: 100% Walkthrough and Hardest Achievements"
          description="Complete the Fracture Field 100% route with achievement planning, Golden Touch warnings, known achievement names, drone and bomb setups, prestige milestones, time-based goals, and hardest achievement tips."
          gameTitle="Fracture Field"
          gameHref="/fracture-field"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 27, 2026"
          toc={[
            {
              id: "achievement-roadmap",
              label: "100% roadmap",
            },
            {
              id: "idle-vs-active-achievements",
              label: "Idle vs active",
            },
            {
              id: "achievement-categories",
              label: "Achievement categories",
            },
            {
              id: "known-achievement-name-index",
              label: "Achievement name index",
            },
            {
              id: "early-game-achievements",
              label: "Early achievements",
            },
            {
              id: "capacity-achievements-warning",
              label: "Capacity warnings",
            },
            {
              id: "gold-capacity-achievement",
              label: "Golden Touch warning",
            },
            {
              id: "drone-achievements",
              label: "Drone achievements",
            },
            {
              id: "bomb-achievements",
              label: "Bomb achievements",
            },
            {
              id: "prestige-achievements",
              label: "Prestige achievements",
            },
            {
              id: "time-based-achievements",
              label: "Time-based achievements",
            },
            {
              id: "hardest-achievements",
              label: "Hardest achievements",
            },
            {
              id: "common-100-percent-mistakes",
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
              href: "/fracture-field/progression-guide",
              label: "Fracture Field Progression Guide",
            },
            {
              href: "/fracture-field/prestige-guide",
              label: "Fracture Field Prestige Guide",
            },
            {
              href: "/fracture-field/beginner-walkthrough",
              label: "Fracture Field Beginner Walkthrough",
            },
          ]}
        >
          <FractureFieldAchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
