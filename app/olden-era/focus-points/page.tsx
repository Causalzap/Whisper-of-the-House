import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FocusPointsContent from "@/data/olden-era/focus-points.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/focus-points`;

export const metadata: Metadata = {
    title: "Heroes Olden Era: Focus Points & Charges Explained",
    description:
      "Master combat in Heroes Olden Era! Learn how Focus Points and Charges work, including generation, ability costs, and how to avoid common mistakes.",
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
          name: "Focus Points Explained",
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
        "Heroes Olden Era Focus Points Explained: Focus Charges, Costs, and Combat Timing",
      description:
        "This Heroes of Might and Magic: Olden Era Focus guide explains Focus Points, Focus Charges, Focus generation, melee and ranged Focus values, the 3 Charge cap, ability costs, turn order, Necropolis Focus, Schism Focus, Focus versus mana, and common Focus mistakes.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-focus-points-battle-ability.webp`,
        `${siteUrl}/images/olden-era/olden-era-focus-points-focus-charges.webp`,
        `${siteUrl}/images/olden-era/olden-era-focus-points-turn-order.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-skeletal-archers.webp`,
        `${siteUrl}/images/olden-era/olden-era-focus-points-schism-summon.webp`,
        `${siteUrl}/images/olden-era/olden-era-focus-points-spend-all-focus-mana.webp`,
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
          name: "Heroes Olden Era Focus Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Focus Charges",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Focus generation",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Focus abilities",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era combat timing",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era turn order",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Battle March",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Focus",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Schism Focus",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Focus vs mana",
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
          name: "What are Focus Points in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Focus Points are combat points that build into Focus Charges. Every 6 Focus Points become 1 Focus Charge, and Focus Charges are spent on creature and hero abilities.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Focus Points and Focus Charges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Focus Points are the buildup. Focus Charges are the spendable resource. You gain Focus Points through combat actions, then convert 6 Focus Points into 1 Focus Charge.",
          },
        },
        {
          "@type": "Question",
          name: "How many Focus Charges can you hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your Focus bar can hold up to 3 Focus Charges.",
          },
        },
        {
          "@type": "Question",
          name: "How many Focus Charges do abilities cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Creature abilities can require 1 to 3 Focus Charges. Hero abilities can also use Focus Charges.",
          },
        },
        {
          "@type": "Question",
          name: "How do you generate Focus Points?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Melee attacks generate 2 Focus Points, ranged attacks generate 1 Focus Point, and being attacked generates 1 Focus Point. Focus is awarded per strike, so multi-strike units can generate more Focus.",
          },
        },
        {
          "@type": "Question",
          name: "Does Offence help generate Focus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Battle March subskill from Offence makes friendly units generate 1 additional Focus Point when they attack.",
          },
        },
        {
          "@type": "Question",
          name: "Should I spend Focus as soon as I can?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Spend Focus when it changes the fight. Save it if a later revive, summon, disable, block, or preservation effect will matter more.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best use of Focus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best Focus use is usually the one that prevents real losses or changes board state. Reviving a key stack, summoning a blocker, disabling a dangerous enemy, or denying an ability is often better than small damage.",
          },
        },
        {
          "@type": "Question",
          name: "Is Focus the same as mana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Mana fuels hero spells, while Focus fuels creature abilities and battle effects. Some Focus abilities can interact with mana, but they are separate systems.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Necropolis care about Focus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis cares about Focus because Liches can revive or restore units and Graverobbers can summon Skeletons. These abilities help preserve the army and support the undead snowball.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Schism care about Focus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schism cares about Focus because many of its strongest turns involve summons, control, ability denial, and board presence. Focus can help Schism create or deny actions at the right timing.",
          },
        },
        {
          "@type": "Question",
          name: "Can enemies use Focus too?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Enemy units can also benefit from Focus or active abilities. Some effects can deny Focus generation or prevent enemies from using active abilities, which can be very strong against dangerous stacks.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest Focus mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is spending Focus just because the ability is available. Focus should be saved for the turn where it prevents losses, creates a blocker, revives units, denies an enemy, avoids wasting the 3-Charge cap, or wins the fight.",
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
          title="Heroes Olden Era Focus Points Explained: Focus Charges, Costs, and Combat Timing"
          description="Learn how Focus Points work in Heroes of Might and Magic: Olden Era, including Focus generation, Focus Charges, the 3 Charge cap, ability costs, turn order, Necropolis Focus, Schism Focus, and common mistakes."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "what-are-focus-points",
              label: "What are Focus Points?",
            },
            {
              id: "focus-numbers",
              label: "Focus numbers",
            },
            {
              id: "how-focus-is-generated",
              label: "How Focus is generated",
            },
            {
              id: "when-to-spend-focus",
              label: "When to spend Focus",
            },
            {
              id: "turn-order",
              label: "Turn order",
            },
            {
              id: "focus-uses-by-faction",
              label: "Focus by faction",
            },
            {
              id: "necropolis-focus",
              label: "Necropolis Focus",
            },
            {
              id: "schism-focus",
              label: "Schism Focus",
            },
            {
              id: "focus-examples",
              label: "Practical examples",
            },
            {
              id: "focus-vs-mana",
              label: "Focus vs mana",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "final-focus-check",
              label: "Final Focus check",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            
            {
              href: "/olden-era/best-buildings-first",
              label: "Best Buildings to Build First",
            },
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/necropolis-common-mistakes",
              label: "Necropolis Common Mistakes",
            },
            {
              href: "/olden-era/necropolis-skeletal-archers",
              label: "Necropolis Skeleton Archers Guide",
            },
            {
              href: "/olden-era/necropolis-week-1-build-order",
              label: "Necropolis Week 1 Build Order",
            },
            
            
            
          ]}
        >
          <FocusPointsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}