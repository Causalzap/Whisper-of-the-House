import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HowToUnlockSubclassesContent from "@/data/olden-era/how-to-unlock-subclasses.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/how-to-unlock-subclasses`;

export const metadata: Metadata = {
  title:
    "Heroes Olden Era How to Unlock Subclasses: In-Game Checklist and UI Signs",
  description:
    "Learn how to unlock subclasses in Heroes of Might and Magic: Olden Era with an in-game checklist, UI signs, Expert skill requirements, skill slot checks, roll chance warnings, and failed unlock fixes.",
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
          name: "How to Unlock Subclasses",
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
        "Heroes Olden Era How to Unlock Subclasses: In-Game Checklist and UI Signs",
      description:
        "This Heroes of Might and Magic: Olden Era guide explains how to unlock subclasses in-game, how to read hero class and starting skills, how to check Basic, Advanced, and Expert skill levels, how to confirm whether a route is still alive, and why some Advanced Classes fail to unlock.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-hero-selection.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-starting-skills.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-skill-choice.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-skill-upgrade.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-expert-skill.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-skill-pool.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-tactics-battlecraft.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-logistics-roll.webp`,
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
          name: "Heroes Olden Era how to unlock subclasses",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Advanced Class unlock",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era subclass unlock checklist",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Expert skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era secondary skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era skill slots",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era skill roll chance",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era subclass route",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era why subclass does not unlock",
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
          name: "How do you unlock a subclass in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To unlock a subclass, finish the exact Advanced Class formula: five required secondary skills, all upgraded to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I check subclass progress in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check your hero class, starting skills, level-up choices, skill levels, and open secondary skill slots.",
          },
        },
        {
          "@type": "Question",
          name: "Does Basic or Advanced count for subclass unlocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Only Expert counts as a completed requirement for Advanced Class unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my subclass not unlocking in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually one required skill is missing, one skill is not Expert, the hero is following the wrong base class route, the skill slots are full, or Early Access data changed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if a subclass route is still possible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A route is still possible when required skills are appearing, skill slots are open, and the missing bottleneck skill appears early enough.",
          },
        },
        {
          "@type": "Question",
          name: "How rare can subclass skills be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some required skills can be extremely rare for specific classes. For example, Knight to Swashbuckler sample data puts Nightshade Magic at 0.91%.",
          },
        },
        {
          "@type": "Question",
          name: "Should I force a subclass every game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Only force a route when level-up choices confirm it. Most games are better with a strong normal hero than a failed subclass chase.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between this page and the Subclass Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This page explains how to recognize and complete a route in-game. The Subclass Guide explains requirements, route value, roll risks, and which Advanced Classes are worth chasing.",
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
          title="Heroes Olden Era How to Unlock Subclasses: In-Game Checklist and UI Signs"
          description="Follow this Heroes of Might and Magic: Olden Era guide to unlock subclasses by checking your hero class, starting skills, level-up choices, Expert skill progress, open skill slots, and route confirmation signs."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "early-access-note",
              label: "Early Access note",
            },
            {
              id: "what-you-need",
              label: "What you need",
            },
            {
              id: "where-to-check-route",
              label: "Where to check",
            },
            {
              id: "route-skill-marker",
              label: "Route skill marker",
            },
            {
              id: "basic-advanced-expert",
              label: "Basic vs Expert",
            },
            {
              id: "quick-debug",
              label: "Quick debug",
            },
            {
              id: "skill-slots",
              label: "Skill slots",
            },
            {
              id: "sample-roll-chances",
              label: "Sample roll chances",
            },
            {
              id: "faction-quick-decision",
              label: "Faction quick decision",
            },
            {
              id: "route-confirmation-checklist",
              label: "Route checklist",
            },
            {
              id: "early-access-change-log",
              label: "EA change log",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "how-to-use-this-page",
              label: "How to use",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/olden-era",
              label: "Heroes Olden Era Complete Guide",
            },
            {
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
            {
              href: "/olden-era/cant-unlock-subclass",
              label: "Why You Can’t Unlock a Subclass",
            },
            {
              href: "/olden-era/force-subclass",
              label: "Should You Force a Subclass?",
            },
            {
              href: "/olden-era/chronomancer-vs-soulweaver",
              label: "Chronomancer vs Soulweaver",
            },
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
            {
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
            },
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
            {
              href: "/olden-era/schism-guide",
              label: "Schism Guide",
            },
            {
              href: "/olden-era/temple-guide",
              label: "Temple Guide",
            },
          ]}
        >
          <HowToUnlockSubclassesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}