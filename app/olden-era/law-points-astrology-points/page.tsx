import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LawPointsAstrologyPointsContent from "@/data/olden-era/law-points-astrology-points.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/law-points-astrology-points`;

export const metadata: Metadata = {
    title: "Heroes Olden Era: Law & Astrology Points Explained",
    description:
      "Master Law and Astrology Points in Heroes Olden Era. Learn when to choose Gold over points, how to use Law Seals, and Magic Observatory progression.",
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
          name: "Law Points and Astrology Points Explained",
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
        "Heroes Olden Era Law Points and Astrology Points Explained",
      description:
        "This Heroes of Might and Magic: Olden Era guide explains Law Points, Astrology Points, Law Seals, faction laws, Magic Observatory progression, spell constellations, and when to choose gold, Law Points, or Astrology Points during the first week.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-gold-law-astrology.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-faction-laws.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-mage-guild.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-city-buildings.webp`,
        `${siteUrl}/images/olden-era/olden-era-best-buildings-first-faction-priorities.webp`,
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
          name: "Heroes Olden Era Law Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Astrology Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Law Seals",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era faction laws",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Magic Observatory",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era spell constellations",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era gold vs Law Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era gold vs Astrology Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era economy guide",
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
          name: "What do Law Points do in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Law Points let you activate faction laws. These laws can improve unit growth, combat, economy, resource access, or faction-specific scaling depending on your faction and route.",
          },
        },
        {
          "@type": "Question",
          name: "What do Astrology Points do in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Astrology Points are tied to Magic Observatory and spell constellation progression. They are most useful when your plan involves spells, map magic, mobility tools, or magic-heavy hero routing.",
          },
        },
        {
          "@type": "Question",
          name: "Where do you spend Astrology Points?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Astrology Points are used through the Magic Observatory layer. Check the Observatory, look at the next spell constellation or magic progression node, and decide whether that unlock is worth choosing Astrology over gold or Law Points.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose gold, Law Points, or Astrology Points first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose gold if you need immediate units, upgrades, or buildings. Choose Law Points if you know the faction law you are chasing. Choose Astrology Points if Magic Observatory progress or map magic will matter soon.",
          },
        },
        {
          "@type": "Question",
          name: "Are Law Points better than gold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Law Points are better when a law directly improves your next turns. Gold is better when you still need recruitment, upgrades, or core buildings.",
          },
        },
        {
          "@type": "Question",
          name: "Are Astrology Points better than Law Points?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only for magic-oriented routes. Law Points usually support faction laws, while Astrology Points support magic and map progression. The better choice depends on your hero, faction, and next timing.",
          },
        },
        {
          "@type": "Question",
          name: "Should beginners pick gold by default?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually yes. Gold is the safest beginner choice because it is flexible and immediate. Switch to Law Points or Astrology Points when you understand which law, spell, or map tool you are trying to unlock.",
          },
        },
        {
          "@type": "Question",
          name: "When should I save Law Seals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Save Law Seals when the current law is only a small bonus and a higher-tier law is much stronger for your route. Spend early when the law immediately improves fights, growth, or economy.",
          },
        },
        {
          "@type": "Question",
          name: "Does every faction use Law Points the same way?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Temple, Necropolis, Schism, Grove, Dungeon, and Hive all care about different laws and timings. Use Law Points based on the faction route you are actually playing.",
          },
        },
        {
          "@type": "Question",
          name: "When should I prioritize Astrology Points?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prioritize Astrology Points when Magic Observatory progress, spell constellations, Town Portal-style mobility, or map magic will change your route soon. Delay them if your army still needs basic power.",
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
          title="Heroes Olden Era Law Points and Astrology Points Explained"
          description="Learn what Law Points and Astrology Points do in Heroes of Might and Magic: Olden Era, when to choose them over gold, how Law Seals work, and how Astrology connects to Magic Observatory, spell constellations, and map magic."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "what-are-law-and-astrology",
              label: "What they are",
            },
            {
              id: "gold-vs-law-vs-astrology",
              label: "Gold vs Law vs Astrology",
            },
            {
              id: "law-points-explained",
              label: "Law Points",
            },
            {
              id: "astrology-points-explained",
              label: "Astrology Points",
            },
            {
              id: "how-to-spend-astrology-points",
              label: "Spending Astrology Points",
            },
            {
              id: "city-income-vs-map-rewards",
              label: "City income vs map rewards",
            },
            {
              id: "resource-priority",
              label: "Resource priority",
            },
            {
              id: "faction-examples",
              label: "Faction examples",
            },
            {
              id: "law-seals",
              label: "Law Seals",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
            {
              href: "/olden-era/best-buildings-first",
              label: "Best Buildings to Build First",
            },
            {
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
            },
            {
              href: "/olden-era/alchemical-dust",
              label: "How to Get Alchemical Dust",
            },
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/necropolis-week-1-build-order",
              label: "Necropolis Week 1 Build Order",
            },
            {
              href: "/olden-era/necropolis-common-mistakes",
              label: "Necropolis Common Mistakes",
            },
            {
              href: "/olden-era/schism-guide",
              label: "Schism Guide",
            },
            {
              href: "/olden-era/temple-guide",
              label: "Temple Guide",
            },
            {
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
          ]}
        >
          <LawPointsAstrologyPointsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}