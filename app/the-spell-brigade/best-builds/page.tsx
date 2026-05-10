import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildsContent from "@/data/the-spell-brigade/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/best-builds`;

export const metadata: Metadata = {
  title: "The Spell Brigade Best Builds: Meta, Solo & Co-op",
  description:
    "Find the best The Spell Brigade builds for 1.0, including Falling Stars Lightning, Solar Pulse Aura, Acid Multi-Hit, Scepter Mesh, Solitary Focus, and co-op Dark builds.",
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
          name: "Best Builds",
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
      headline: "The Spell Brigade Best Builds: Meta, Solo & Co-op",
      description:
        "Find the best The Spell Brigade builds for 1.0, including Falling Stars Lightning, Solar Pulse Aura, Acid Multi-Hit, Scepter Mesh, Solitary Focus, and co-op Dark builds.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-falling-stars-lightning.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-aura-setup.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-luck-cast-speed.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-final-stats.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-scepter-mesh-plasma.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-crit-dodge-final-stats.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-veil-of-haste.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-pipwick-summoner.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-bell-march-nelly.webp`,
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
          name: "Character Builds",
        },
        {
          "@type": "Thing",
          name: "Spell Builds",
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
          name: "What is the best build in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Falling Stars Lightning has the highest community meta ceiling, while Solar Pulse Aura is the easiest strong build to reproduce for most players.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best solo build in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Pulse Aura is the easiest solo build to recommend. Dodge Crit Heal is the best survival shell to add when the run offers dodge, crit, or healing relics.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best boss build in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acid Multi-Hit Shred is excellent when bosses and elites live too long. Use Astral Orbs, Moonerang, Flux, or Corrosion when you want resistance reduction instead of pure burst.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best covenant build in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solitary Focus-style one-spell builds are the best covenant route to start with because they funnel upgrades into one main spell and make the build easier to read.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scepter Mesh good in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scepter Mesh is strong when you build around it. With Lightning or Plasma, the walls become damage zones instead of only defensive barriers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best farming build in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Pulse Aura is the easiest farming build to recommend because it scales well with cast speed, spell size, crit, and long-loop aura coverage.",
          },
        },
        {
          "@type": "Question",
          name: "Is Pipwick good in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pipwick is good if you want a summon build. Scale Impish Havoc with spell time, spell damage, cast speed, and Dark, Acid, or Fire routes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Nelly or Knelly Bell March good?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bell March can be good, but it is more positioning-heavy than normal projectile builds. It works best when you build bell size, cast speed, armor, healing, or trigger damage on purpose.",
          },
        },
        {
          "@type": "Question",
          name: "Is Full Dark Corruption good?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full Dark Corruption is good in coordinated co-op. It is not a good random solo route unless the build is intentionally supporting Dark, Void, Blight, Wither, or Hellfire.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always build Plasma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Plasma is strong, but Acid, Flux, Corrosion, Wildfire, Ice, or Thunder may solve the run better depending on whether you need shred, control, crit ticks, or impact damage.",
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
          title="The Spell Brigade Best Builds: Falling Stars, Solar Pulse, Acid and Co-op"
          description="Find the best The Spell Brigade builds for 1.0, including Falling Stars Lightning, Solar Pulse Aura, Acid Multi-Hit, Scepter Mesh Plasma, Solitary Focus, Pipwick Summoner, Bell March, and Full Dark Corruption."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "best-builds-ranked",
              label: "Best builds ranked",
            },
            {
              id: "build-timelines",
              label: "Build timelines",
            },
            {
              id: "stat-priority",
              label: "Stat priority",
            },
            {
              id: "core-stats",
              label: "Core stats",
            },
            {
              id: "falling-stars-lightning-build",
              label: "Falling Stars Lightning",
            },
            {
              id: "solar-pulse-aura-build",
              label: "Solar Pulse Aura",
            },
            {
              id: "solitary-focus-covenant-build",
              label: "Solitary Focus",
            },
            {
              id: "acid-multi-hit-build",
              label: "Acid Multi-Hit",
            },
            {
              id: "scepter-mesh-plasma-build",
              label: "Scepter Mesh Plasma",
            },
            {
              id: "dodge-crit-heal-build",
              label: "Dodge Crit Heal",
            },
            {
              id: "veil-of-haste-build",
              label: "Veil of Haste",
            },
            {
              id: "pipwick-summoner-build",
              label: "Pipwick Summoner",
            },
            {
              id: "nelly-bell-march-build",
              label: "Bell March",
            },
            {
              id: "full-dark-corruption-team-build",
              label: "Dark Corruption Team",
            },
            {
              id: "objectives-and-augments",
              label: "Objectives & augments",
            },
            {
              id: "pivot-rules",
              label: "Pivot rules",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-build-order",
              label: "Build order",
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
          <BestBuildsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}