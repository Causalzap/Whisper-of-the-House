import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OldenEraGuideContent from "@/data/olden-era/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era`;

export const metadata: Metadata = {
  title:
    "Heroes Olden Era Complete Guide: Subclasses, Factions, Economy, and Early Game Tips",
  description:
    "Complete Heroes of Might and Magic: Olden Era guide covering subclasses, advanced classes, Necropolis, Schism, Temple, economy, Law Points, Astrology Points, Focus Points, buildings, and Early Access beginner tips.",
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
        "Heroes Olden Era Complete Guide: Subclasses, Factions, Economy, and Early Game Tips",
      description:
        "This Heroes of Might and Magic: Olden Era complete guide explains what to do first, how subclasses and advanced classes work, how to start Necropolis, how early economy works, what Law Points and Astrology Points do, how Focus Points work, and which early faction guides to read first.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-complete-guide.webp`,
        `${siteUrl}/images/olden-era/olden-era-game-modes.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-skeletal-archers.webp`,
        `${siteUrl}/images/olden-era/olden-era-temple-economy.webp`,
        `${siteUrl}/images/olden-era/olden-era-law-astrology-points.webp`,
        `${siteUrl}/images/olden-era/olden-era-focus-points.webp`,
        `${siteUrl}/images/olden-era/olden-era-schism-hero-select.webp`,
        `${siteUrl}/images/olden-era/olden-era-temple-morale.webp`,
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
          name: "Heroes Olden Era guide",
        },
        {
          "@type": "Thing",
          name: "Heroes of Might and Magic: Olden Era guide",
        },
        {
          "@type": "Thing",
          name: "HoMM Olden Era guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era subclasses",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era advanced classes",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Schism guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Temple guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era beginner economy",
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
          name: "Heroes Olden Era Focus Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Alchemical Dust",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Early Access",
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
          name: "What guide should I read first for Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New players should start with the Beginner Economy Guide. For hero builds and advanced classes, start with the Subclass Guide.",
          },
        },
        {
          "@type": "Question",
          name: "How do subclasses work in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A subclass needs five specific secondary skills upgraded to Expert. Once those required skills are complete, the hero unlocks the advanced class bonus.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I unlock my subclass in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually you are missing a required skill, one skill is not Expert, your skill slots are full, or you are following outdated Early Access or demo data.",
          },
        },
        {
          "@type": "Question",
          name: "Should I force a subclass every game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Force a subclass route only when your early skill rolls support it. Otherwise, build for immediate strength and map tempo.",
          },
        },
        {
          "@type": "Question",
          name: "Is Necropolis good for beginners in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis is powerful but punishing. It can snowball, but early losses are expensive, so beginners should follow a safer early build order.",
          },
        },
        {
          "@type": "Question",
          name: "What should I build first in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prioritize compounding value: income, creature growth, Law Points, Astrology Points, Mage Guild access, or key unit upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "What are Law Points and Astrology Points in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Law Points unlock faction laws. Astrology Points connect to spell and map spell progression.",
          },
        },
        {
          "@type": "Question",
          name: "What are Focus Points in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Focus Points are a battle resource used by many active creature abilities and some hero or unit interactions.",
          },
        },
        {
          "@type": "Question",
          name: "Which faction should I start with in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Temple is the easiest beginner angle, Necropolis is the strongest early guide target, and Schism is the best hard-core mechanics faction.",
          },
        },
        {
          "@type": "Question",
          name: "Is this Heroes Olden Era guide final?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Heroes of Might and Magic: Olden Era is in Early Access, so guides should be updated as balance, costs, subclass data, and faction mechanics change.",
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
          title="Heroes Olden Era Complete Guide: Subclasses, Factions, Economy, and Early Game Tips"
          description="Follow this Heroes of Might and Magic: Olden Era guide to learn what to do first, how subclasses work, how to start Necropolis, how economy and buildings work, and how Law Points, Astrology Points, and Focus Points shape your early game."
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
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "recommended-guide-order",
              label: "Guide order",
            },
            {
              id: "first-week-priorities",
              label: "First week priorities",
            },
            {
              id: "subclasses",
              label: "Subclasses",
            },
            {
              id: "necropolis",
              label: "Necropolis",
            },
            {
              id: "economy-and-resources",
              label: "Economy and resources",
            },
            {
              id: "law-points-and-astrology",
              label: "Law and Astrology",
            },
            {
              id: "focus-points",
              label: "Focus Points",
            },
            {
              id: "factions",
              label: "Factions",
            },
            {
              id: "schism",
              label: "Schism",
            },
            {
              id: "temple",
              label: "Temple",
            },
            {
              id: "mechanics-overview",
              label: "Mechanics overview",
            },
            {
              id: "patch-update-log",
              label: "Patch updates",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          
        >
          <OldenEraGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}