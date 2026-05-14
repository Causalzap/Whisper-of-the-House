import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GeneticsGuideContent from "@/data/everything-is-crab/genetics-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/genetics-guide`;

export const metadata: Metadata = {
  // Title: keep keyword density high for SERP title
  title: "Everything Is Crab Genetics Guide: Best Picks & Unlocks",
  // Description: click-focused SERP snippet, different from JSON-LD Article.description
  description:
    "Choose the best Genetics in Everything Is Crab, unlock all 21 names, and compare Splice combos for Chosen, Pioneer, Grandiose, Chaos, and more.",
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
          name: "Genetics Guide",
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
      headline: "Everything Is Crab Genetics Guide: Best Picks & Unlocks",
      // Article.description: semantic summary for search engines, broader than meta snippet
      description:
        "A complete Everything Is Crab Genetics guide covering all 21 Genetics, unlock conditions, tier recommendations, key trigger values, Splice mechanics, Chosen, Pioneer, Grandiose, Independent, Spawn of Chaos, Patient, Bullseye, Minimalist, and build-specific Genetic choices.",
      image: [
        `${siteUrl}/images/everything-is-crab/everything-is-crab-genetics-splice-screen-challenger.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-genetics-branching-every-12-levels.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-genetics-size-rarity-splice.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-13",
      dateModified: "2026-05-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Everything Is Crab",
        },
        {
          "@type": "Thing",
          name: "Genetics",
        },
        {
          "@type": "Thing",
          name: "Splice Combinations",
        },
        {
          "@type": "Thing",
          name: "Genetic Unlocks",
        },
        {
          "@type": "Thing",
          name: "Game Strategies",
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
          name: "What are the best Genetics in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best general Genetics are Chosen, Pioneer, Grandiose, Independent, Precocious, Challenger, and Expert. Chosen gives an early Legendary spike, Pioneer adds more Points of Interest, Grandiose supports Size-scaling builds, Independent and Precocious help Branching routes, Challenger rewards Alpha pressure, and Expert supports Specialization routing.",
          },
        },
        {
          "@type": "Question",
          name: "What does Chosen do in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chosen makes your third level-up offer three Legendary Evolutions. It is one of the safest general-purpose Genetics because it gives the run an early direction spike before the first boss.",
          },
        },
        {
          "@type": "Question",
          name: "What does Pioneer do in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pioneer increases Points of Interest by 50%. It is strong for exploration, POI level farming, mutagen, recovery, and flexible build routing, especially when paired with movement or senses tools.",
          },
        },
        {
          "@type": "Question",
          name: "What does Grandiose do in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grandiose makes damage scale with Size. It is strongest for Chonky, Body Slam, Imposing, big Physical, and other large-body routes, but those builds still need movement so Size does not become a terrain or boss-positioning weakness.",
          },
        },
        {
          "@type": "Question",
          name: "What does Independent do in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Independent makes every 12th level-up a Branching Evolution, including levels 12, 24, and 36, but bosses no longer drop Boss Fruits. It is best for POI level farming and long-run branch planning.",
          },
        },
        {
          "@type": "Question",
          name: "What does Spawn of Chaos do in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spawn of Chaos randomizes starting stats. Check your stat screen immediately and pivot based on Size, HP, Ability, Physical, speed, senses, and terrain. New players often fail it by forcing a planned build instead of reading the opener.",
          },
        },
        {
          "@type": "Question",
          name: "What is Splice in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Splice lets you start with two Genetics instead of one, but only after your previous run reached the first boss. When Splice is available, you choose one Genetic from three options, then a second Genetic from another three options, and both effects apply. Challenge Mode does not provide Splice opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Splice combination in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The safest general Splice is Chosen plus Pioneer because Chosen gives early direction while Pioneer adds more Points of Interest and recovery options. For Chonky builds, use Grandiose plus Chosen. For POI Branching routes, use Independent plus Pioneer.",
          },
        },
        {
          "@type": "Question",
          name: "Should beginners use Splice in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but beginners should keep Splice simple. Use stable Genetics such as Chosen, Pioneer, or Standard before testing volatile combinations like Spawn of Chaos plus Minimalist.",
          },
        },
        {
          "@type": "Question",
          name: "What Genetics are best for Chonky or Body Slam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grandiose, Chosen, Expert, and Spawn of Chaos with high starting Size are the best Chonky and Body Slam Genetics. Look for More Mass, Chunky, Body Slam, Shell, Plating, HP, and movement.",
          },
        },
        {
          "@type": "Question",
          name: "What Genetics are best for poison builds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Poison builds usually prefer Chosen, Spawn of Chaos if Ability starts high, Expert, or Pioneer. After the run begins, look for Stinger, Leech, Cortex, Dextrous, Immune System, movement, or Reach.",
          },
        },
        {
          "@type": "Question",
          name: "What Genetics are best for POI level farming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pioneer, Independent, Precocious, and Spawn of Chaos are the main POI level farming Genetics. Pioneer adds more POIs, Independent rewards every 12th level with Branching, and Precocious gives early Branching access.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Minimalist in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reach 50% Size or smaller. Minimalist gives plus 15% all damage but removes Dash, so you need a movement plan before using it seriously.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Bullseye in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kill any regular boss with a thrown stone. The usual mistake is letting poison, contact damage, reflect, or a normal attack take the final hit first, so lower the boss safely and make the stone the finishing hit.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Patient in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deal 100 or more damage with a single hit. Patient rewards skip-evolution planning because skipping a level-up improves the rarity of the next evolution offered, and the bonus can stack.",
          },
        },
        {
          "@type": "Question",
          name: "What Genetics should I use for high Pressure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For high Pressure, use tested Genetics that support movement, sustain, defensive consistency, or a proven damage route. Chosen, Pioneer, Grandiose, and Expert are easier to stabilize than risky combinations like Spawn of Chaos plus Minimalist.",
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
          title="Everything Is Crab Genetics Guide: Best Picks, Unlocks & Splice Combos"
          description="Not sure which Genetic to start with? Compare all 21 Genetics, see how to unlock them, and pick the right Splice combo for Chosen, Pioneer, Grandiose, Spawn of Chaos, Branching, POI farming, or high Pressure."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "what-are-genetics",
              label: "What are Genetics?",
            },
            {
              id: "best-genetics-tier-list",
              label: "Best Genetics",
            },
            {
              id: "key-genetic-numbers",
              label: "Key numbers",
            },
            {
              id: "all-genetics-unlock-table",
              label: "Unlock table",
            },
            {
              id: "unlock-mistakes",
              label: "Unlock mistakes",
            },
            {
              id: "how-splice-works",
              label: "How Splice works",
            },
            {
              id: "best-splice-combinations",
              label: "Best Splice combos",
            },
            {
              id: "spawn-of-chaos-random-stats",
              label: "Spawn of Chaos",
            },
            {
              id: "grandiose-size-scaling",
              label: "Grandiose",
            },
            {
              id: "best-genetics-by-build",
              label: "Best by build",
            },
            {
              id: "pressure-genetics-note",
              label: "High Pressure",
            },
            {
              id: "unlock-priority",
              label: "Unlock priority",
            },
            {
              id: "common-genetics-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/everything-is-crab",
              label: "Everything Is Crab Guide",
            },
            {
              href: "/everything-is-crab/evolutions-list",
              label: "Everything Is Crab Evolution Picker",
            },
            {
              href: "/everything-is-crab/best-builds",
              label: "Everything Is Crab Best Builds",
            },
            {
              href: "/everything-is-crab/progression-guide",
              label: "Everything Is Crab Progression Guide",
            },
            {
              href: "/everything-is-crab/selective-pressure-guide",
              label: "Everything Is Crab Selective Pressure Guide",
            },
            {
              href: "/everything-is-crab/achievements-challenges-guide",
              label: "Everything Is Crab Achievements and Challenges Guide",
            },
          ]}
        >
          <GeneticsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}