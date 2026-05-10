import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SpellBrigadeGuideContent from "@/data/the-spell-brigade/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade`;

export const metadata: Metadata = {
  title: "Ultimate The Spell Brigade Guide: Builds, Gold & Unlocks",
  description:
    "Master The Spell Brigade 1.0! Discover the best builds, spell combos, fast gold farming, wizard unlocks, and 100% achievement guides in our complete hub.",
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
        "The Spell Brigade Guide Hub: Builds, Spells, Gold, Wizards & Achievements",
      description:
        "Master The Spell Brigade 1.0! Discover the best builds, spell combos, fast gold farming, wizard unlocks, and 100% achievement guides in our complete hub.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-15-wizards-overview.webp`,
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
          name: "Guide Hub",
        },
        {
          "@type": "Thing",
          name: "Builds",
        },
        {
          "@type": "Thing",
          name: "Spells and Elements",
        },
        {
          "@type": "Thing",
          name: "Gold Farming",
        },
        {
          "@type": "Thing",
          name: "Wizard Unlocks",
        },
        {
          "@type": "Thing",
          name: "Achievements",
        },
        {
          "@type": "Thing",
          name: "Trial Covenants",
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
          name: "Where should a new player start in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New players should start with the Solo Guide, then read the Best Builds Guide. Surviving consistently matters more than optimizing early.",
          },
        },
        {
          "@type": "Question",
          name: "Which The Spell Brigade guide should I prioritize after Solo and Builds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you want stronger runs, read the Best Spells and Elements Guide. If progression feels slow, read the Gold Farm Guide. If you are choosing who to play next, read the Wizard Unlocks Guide.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide should achievement hunters read?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Achievement hunters should start with the Achievements Guide, then use the Wizard Unlocks Guide for wizard-specific routes.",
          },
        },
        {
            "@type": "Question",
            name: "Which guide should I read for late-game progression?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Read the Covenants, Masteries and Ascension Guide if you are working on Trial Covenants, Devotion, Banish, rerolls, Masteries, Enchantments, or long-term wizard progression.",
            },
          },
        {
          "@type": "Question",
          name: "Are these guides for The Spell Brigade 1.0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This guide cluster is written around The Spell Brigade 1.0, including builds, infusions, wizard unlocks, achievements, Trial Covenants, Masteries, and Ascension.",
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
          title="The Spell Brigade Guide Hub: Builds, Spells, Gold, Wizards and Achievements"
          description="Choose the right The Spell Brigade 1.0 guide for your goal: solo survival, best builds, spells and elements, gold farming, wizard unlocks, achievements, Trial Covenants, Masteries, and Ascension."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "which-guide-should-you-read-first",
              label: "Which guide first",
            },
            {
              id: "how-to-use-this-hub",
              label: "How to use this hub",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
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
              href: "/the-spell-brigade/achievements-guide",
              label: "The Spell Brigade Achievements Guide",
            },
            {
              href: "/the-spell-brigade/trial-covenants-masteries-prestige",
              label: "The Spell Brigade Trial Covenants Guide",
            },
          ]}
        >
          <SpellBrigadeGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}