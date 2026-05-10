import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SoloGuideContent from "@/data/the-spell-brigade/solo-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/solo-guide`;

export const metadata: Metadata = {
  title: "The Spell Brigade Solo Guide: Builds, Difficulty & Boss Tips",
  description:
    "Survive The Spell Brigade solo! Get expert boss tips, Hardcore priorities, and the best solo builds like Solar Pulse Aura and Dodge Crit Heal to dominate.",
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
          name: "Solo Guide",
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
      headline: "The Spell Brigade Solo Guide: Builds, Difficulty & Boss Tips",
      description:
        "Survive The Spell Brigade solo! Get expert boss tips, Hardcore priorities, and the best solo builds like Solar Pulse Aura and Dodge Crit Heal to dominate.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-aura-setup.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-final-stats.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-solo-guide-dodge-heal-upgrade.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-solo-guide-crit-heal-upgrade.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-scepter-mesh-plasma.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-solo-guide-sacrifice-objective-risk.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-solo-guide-loop-boss-kill.webp`,
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
          name: "Solo Play",
        },
        {
          "@type": "Thing",
          name: "Solo Builds",
        },
        {
          "@type": "Thing",
          name: "Boss Strategy",
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
          name: "Can you play The Spell Brigade solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. From the main menu, choose Play, then use Private Match or start without waiting for squad fill. If the UI shows Fill Squad or matchmaking, turn it off before launching.",
          },
        },
        {
          "@type": "Question",
          name: "What difficulty should I start on solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start on Moderate Threat if you are still learning enemy patterns, objective timing, and boss movement.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best solo build in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Pulse Aura is the easiest solo build to recommend because it gives AoE damage, strong scaling, and room for sustain.",
          },
        },
        {
          "@type": "Question",
          name: "Is solo easier than co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo is cleaner but less forgiving. You avoid teammate chaos, but you also lose revives, role coverage, and co-op support.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best solo stat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Movement speed is one of the best solo stats, but in Hardcore you should think in terms of a full safety plan: movement, positioning, dodge, sustain, and AoE uptime.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dodge Crit Heal good solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dodge Crit Heal is excellent when Evasion Mend, Vital Strike, dodge chance, crit, healing, and a high-hit spell start coming together. It is usually a survival shell, not a forced opener.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do every objective solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Do objectives when they are safe and useful. Skip objectives that would probably kill the run.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best solo boss build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Pulse Aura and Acid Multi-Hit are both strong. Solar Pulse keeps damage active while you dodge, while Acid Multi-Hit helps shred bosses and elites.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scepter Mesh good solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scepter Mesh is good when supported with Lightning, Plasma, Acid, Flux, spell size, and cast speed. It gives space control and damage.",
          },
        },
        {
          "@type": "Question",
          name: "Can you farm gold solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Pulse Aura is one of the easiest solo farming routes. Use Bounty, objectives, and proper farm timing to make solo gold farming more efficient.",
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
          title="The Spell Brigade Solo Guide: Best Builds, Difficulty and Boss Tips"
          description="Learn how to play The Spell Brigade solo with the best solo builds, Moderate Threat starting advice, Hardcore priorities, boss tips, Dodge Crit Heal, Solar Pulse Aura, Scepter Mesh, and objective decisions."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "can-you-play-solo",
              label: "Can you play solo?",
            },
            {
              id: "best-solo-difficulty",
              label: "Solo difficulty",
            },
            {
              id: "best-solo-builds",
              label: "Best solo builds",
            },
            {
              id: "solo-stat-priority",
              label: "Solo stat priority",
            },
            {
              id: "hardcore-solo",
              label: "Hardcore solo",
            },
            {
              id: "solar-pulse-solo-build",
              label: "Solar Pulse solo",
            },
            {
              id: "dodge-crit-heal",
              label: "Dodge Crit Heal",
            },
            {
              id: "acid-solo-boss-build",
              label: "Acid boss build",
            },
            {
              id: "scepter-mesh-solo",
              label: "Scepter Mesh solo",
            },
            {
              id: "solo-objectives",
              label: "Solo objectives",
            },
            {
              id: "solo-bosses",
              label: "Boss quick guide",
            },
            {
              id: "solo-looping",
              label: "Solo long loops",
            },
            {
              id: "solo-vs-coop",
              label: "Solo vs co-op",
            },
            {
              id: "solo-run-plan",
              label: "Solo run plan",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-solo-order",
              label: "Learning order",
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
          <SoloGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}