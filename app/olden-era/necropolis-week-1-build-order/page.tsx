import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NecropolisWeek1BuildOrderContent from "@/data/olden-era/necropolis-week-1-build-order.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/necropolis-week-1-build-order`;

export const metadata: Metadata = {
    title: "Heroes Olden Era: Necropolis Week 1 Build Order",
    description:
      "Master the Necropolis early game in Heroes Olden Era. Our Day 1-7 build order covers Skeleton Archers, Vampire timing, and the Undead Transformer.",
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
          name: "Necropolis Week 1 Build Order",
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
        "Heroes Olden Era Necropolis Week 1 Build Order: Day 1–7 Skeleton Archer Plan",
      description:
        "This Heroes of Might and Magic: Olden Era guide explains the safest Necropolis Week 1 build order, including Day 1–7 priorities, Skeleton Archer upgrade timing, named building priorities, Marketplace timing, Arcane Dust bottlenecks, hero-specific adjustments, Undead Transformer setup, second hero jobs, fight selection, and recovery plans.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-necropolis-skeletal-archers.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-starting-skeletons.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-vampires-liches.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-mage-guild-marketplace.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-law-points.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-arcane-dust.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-arcane-dust-upgrade.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-lethal-battle.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-week-1-recovery.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-creature-growth.webp`,
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
          name: "Heroes Olden Era Necropolis Week 1 build order",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis build order",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Day 1 to Day 7",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Skeleton Archers",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Skeleton Archer upgrade",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Marketplace",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Vampires",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Liches",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Undead Transformer",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Arcane Dust",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis second hero",
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
          name: "What is the best Necropolis Week 1 build order in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The safest plan is Skeleton Archer access first, then Marketplace, Mage Guild, creature buildings, Vampires, Liches, or Undead Transformer setup depending on your resource bottleneck and hero.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade Skeletons into Skeleton Archers on Day 1?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upgrade early if the gold cost lets you clear several fights with fewer losses. Delay only if the stack is too small or the gold blocks a key building.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the Skeleton Archer upgrade cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current Early Access upgrade cost is 10 gold per Skeleton. For example, 100 Skeletons cost 1000 gold to upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush Vampires as Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only rush Vampires if your Skeleton Archer, economy, and resource situation are already stable. Do not use Vampires as a panic rush after bad early losses.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush Liches as Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only rush Liches if the resource path supports it. If Arcane Dust or another resource blocks the plan, stabilize first.",
          },
        },
        {
          "@type": "Question",
          name: "When should Necropolis build Marketplace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis should build Marketplace when it immediately solves a resource bottleneck. Do not build it just because it is cheap.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a second hero as Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually yes. A second hero helps with resource pickups, creature huts, army delivery, scouting, and Undead Transformer setup.",
          },
        },
        {
          "@type": "Question",
          name: "What if I take too many losses in Week 1?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stop forcing fights, recruit, delay greedy buildings, and rebuild your Skeleton Archer engine before pushing into harder objectives.",
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
          title="Heroes Olden Era Necropolis Week 1 Build Order: Day 1–7 Skeleton Archer Plan"
          description="Follow this Heroes of Might and Magic: Olden Era Necropolis Week 1 build order to stabilize Skeleton Archers, choose Day 1–7 buildings, time Marketplace correctly, delay greedy Vampire or Lich paths, and recover bad openings."
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
              id: "week-one-goal",
              label: "Week 1 goal",
            },
            {
              id: "day-1-7-build-order",
              label: "Day 1–7 build order",
            },
            {
              id: "skeleton-archer-upgrade",
              label: "Skeleton Archer timing",
            },
            {
              id: "building-priorities",
              label: "Building priorities",
            },
            {
              id: "marketplace-timing",
              label: "Marketplace timing",
            },
            {
              id: "resources-and-arcane-dust",
              label: "Resources and Arcane Dust",
            },
            {
              id: "hero-adjustments",
              label: "Hero adjustments",
            },
            {
              id: "undead-transformer-setup",
              label: "Transformer setup",
            },
            {
              id: "when-to-fight",
              label: "When to fight",
            },
            {
              id: "recovery-plans",
              label: "Recovery plans",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "final-week-one-plan",
              label: "Final reference",
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
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/necropolis-skeletal-archers",
              label: "Necropolis Skeleton Archers Guide",
            },
            {
              href: "/olden-era/necropolis-common-mistakes",
              label: "Necropolis Common Mistakes",
            },
            {
              href: "/olden-era/undead-transformer",
              label: "Undead Transformer Guide",
            },
            {
              href: "/olden-era/chronomancer-vs-soulweaver",
              label: "Chronomancer vs Soulweaver",
            },
            {
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
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
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
            {
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
          ]}
        >
          <NecropolisWeek1BuildOrderContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}