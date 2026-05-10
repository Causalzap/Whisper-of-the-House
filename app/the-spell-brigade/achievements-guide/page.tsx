import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsContent from "@/data/the-spell-brigade/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/achievements-guide`;

export const metadata: Metadata = {
  title: "The Spell Brigade Achievements Guide: 100% Roadmap",
  description:
    "Complete The Spell Brigade achievements guide for 1.0, including 114 achievements, 100% roadmap, wizard checklist, Star Mage, Hatti, Knelly, Hardcore, and co-op routes.",
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
          name: "Achievements Guide",
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
      headline: "The Spell Brigade Achievements Guide: 100% Roadmap",
      description:
        "Complete The Spell Brigade achievements guide for 1.0, including 114 achievements, 100% roadmap, wizard checklist, Star Mage, Hatti, Knelly, Hardcore, and co-op routes.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-objectives-augments.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-team-objective-braziers.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-level-15-rng-pool.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-star-mage-falling-stars.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-bryony-vengeful-sprout.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-campanelli-phantom-blades.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-final-boss-aoe.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-long-run-stats.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-one-spell-ascension.webp`,
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
          name: "Achievements",
        },
        {
          "@type": "Thing",
          name: "Achievement Hunting",
        },
        {
          "@type": "Thing",
          name: "100% Completion",
        },
        {
          "@type": "Thing",
          name: "Co-op Strategy",
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
          name: "How many achievements are in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current Steam achievement route should be planned around 114 achievements. Some older or fan-made resources may use smaller milestone counts, but 114 is the safer number for Steam achievement hunting.",
          },
        },
        {
          "@type": "Question",
          name: "How long does 100% completion take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A realistic 100% completion push can easily take 35+ hours, especially if you are doing wizard-specific cleanup solo. A coordinated 4-player squad can reduce revive, objective, scroll, and farming time dramatically.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need co-op for 100% achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most achievements can be attempted solo, but co-op makes several routes much faster, including Campanelli revives, Aldric fungi routing, Balthazar ghost revive setups, Hatti hitting Ludwig, and team objective cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What achievements should I do first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with normal clears, wizard unlocks, spell discovery, and basic objective achievements. Save Hardcore, co-op interactions, boss precision, and long grinds for later.",
          },
        },
        {
          "@type": "Question",
          name: "What are the hardest achievements in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main time sinks are Heckin' Hardcore, π, Starry Rain, Hells Bells, Out with a Bang, A Worthy Sacrifice, and The Fungi Amongi.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase multiple achievements in one run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if they naturally share the same route. Star Mage cast farming can pair with Falling Stars scaling, but a no-potion Bryony route should not be mixed with risky objective or Hardcore attempts.",
          },
        },
        {
          "@type": "Question",
          name: "Why do objectives matter for achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Objectives unlock augments, and many achievements need specific spell behavior such as projectiles, split effects, extra directions, special interactions, or spell uptime.",
          },
        },
        {
          "@type": "Question",
          name: "Why does RNG pool dilution matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Targeted runs fail when you add too many side spells and make the upgrade pool harder to control. Keep the build compact when farming Starry Rain, π, Hells Bells, Watch the Knives, or other one-condition achievements.",
          },
        },
        {
          "@type": "Question",
          name: "How do I handle Pyrestorm Pit Hardcore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a mobile AoE build, keep moving, prioritize dodge, sustain, and movement, and skip unsafe objectives. Sun Mage is one of the safest picks because Solar Pulse keeps damage active while you focus on pathing.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after the achievements guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Read the Wizard Unlocks Guide for character routes, the Best Builds Guide for build planning, or the Best Spells and Elements Guide for infusion choices.",
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
          title="The Spell Brigade Achievements Guide: 100% Roadmap, Hardest Achievements and Wizard Checklist"
          description="Complete The Spell Brigade achievements guide for 1.0, including 114 Steam achievements, 100% cleanup order, wizard-specific routes, Star Mage, Hatti, Knelly, Bryony, Hardcore, and co-op achievement planning."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "achievement-roadmap",
              label: "Achievement roadmap",
            },
            {
              id: "achievement-types",
              label: "Achievement types",
            },
            {
              id: "best-builds-for-achievements",
              label: "Best builds",
            },
            {
              id: "all-wizard-achievements",
              label: "Wizard checklist",
            },
            {
              id: "objectives-and-augments",
              label: "Objectives & augments",
            },
            {
              id: "objective-decisions",
              label: "Objective decisions",
            },
            {
              id: "level-pacing",
              label: "Level pacing",
            },
            {
              id: "hardest-achievements",
              label: "Hardest achievements",
            },
            {
              id: "star-mage-achievements",
              label: "Star Mage",
            },
            {
              id: "hatti-achievements",
              label: "Hatti",
            },
            {
              id: "knelly-achievements",
              label: "Knelly",
            },
            {
              id: "bryony-achievements",
              label: "Bryony",
            },
            {
              id: "campanelli-achievements",
              label: "Campanelli",
            },
            {
              id: "pyrestorm-pit-hardcore",
              label: "Pyrestorm Pit Hardcore",
            },
            {
              id: "boss-achievements",
              label: "Boss achievements",
            },
            {
              id: "long-run-grind-achievements",
              label: "Long-run grinds",
            },
            {
              id: "achievement-run-plan",
              label: "Run plan",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-cleanup-order",
              label: "Cleanup order",
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
              href: "/the-spell-brigade/gold-farm",
              label: "The Spell Brigade Gold Farm Guide",
            },
            {
              href: "/the-spell-brigade/wizard-unlocks",
              label: "The Spell Brigade Wizard Unlock Guide",
            },
            {
              href: "/the-spell-brigade/trial-covenants-masteries-prestige",
              label: "The Spell Brigade Trial Covenants Guide",
            },
          ]}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}