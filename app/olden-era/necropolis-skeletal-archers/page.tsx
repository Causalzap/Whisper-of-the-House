import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NecropolisSkeletalArchersContent from "@/data/olden-era/necropolis-skeletal-archers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/necropolis-skeletal-archers`;

export const metadata: Metadata = {
    title: "Heroes Olden Era: Skeleton Archers Guide & Stats",
    description:
      "Master Skeleton Archers in Heroes Olden Era. Discover stats, upgrade costs, fight selection, and Week 2 benchmarks to dominate with Necropolis.",
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
          name: "Necropolis Skeleton Archers Guide",
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
        "Heroes Olden Era Skeleton Archers Guide: Stats, Upgrade Cost, and Week 2 Targets",
      description:
        "This Heroes of Might and Magic: Olden Era guide explains how to use Necropolis Skeleton Archers, including current Early Access stats, ranged attack mechanics, upgrade cost examples, when to upgrade Skeletons, fight selection, protection tools, best heroes, Week 2 Skeleton Archer targets, and common mistakes.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-necropolis-skeletal-archers.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-starting-skeletons.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-skeleton-archer-upgrade.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-lethal-battle.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-vampires-liches.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-week-1-recovery.webp`,
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
          name: "Heroes Olden Era Skeleton Archers",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Skeleton Archers",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Skeleton Archer upgrade cost",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Skeleton Archer stats",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era ranged attack mechanics",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis Week 2 Skeleton Archers",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Onkos",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Marl",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Funerella",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necromancy",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Undead Transformer",
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
          name: "Are Skeleton Archers good in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Skeleton Archers are one of the safest early Necropolis engines because they turn Skeleton growth into ranged damage and reduce melee losses.",
          },
        },
        {
          "@type": "Question",
          name: "What are Skeleton Archer stats in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Skeleton Archers are Tier 1 Necropolis ranged Undead with 6 HP, 4 Attack, 2 Defense, 1 to 3 Damage, 3 Speed, 4 Initiative, 30 weekly growth, and 50 gold cost in current Early Access data.",
          },
        },
        {
          "@type": "Question",
          name: "How does Skeleton Archer ranged attack work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Skeleton Archers can attack at any range, but attacks at 3 or more hexes lose damage by distance, up to 50 percent. If an enemy is adjacent, the attack becomes a weaker melee attack.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to upgrade Skeletons into Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current Early Access cost is 10 gold per Skeleton. For example, 100 Skeletons cost 1000 gold to upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "When should I upgrade Skeletons into Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upgrade when the gold cost lets you clear several nearby fights with fewer losses. Delay if the stack is too small or the gold blocks a key building.",
          },
        },
        {
          "@type": "Question",
          name: "How many Skeleton Archers should I have by Week 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A strong start can move toward 100 to 200 Skeleton Archers by Week 2, depending on hero, losses, map rewards, laws, and conversion value.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best hero for Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Onkos is the cleanest pure Skeleton Archer snowball hero. Marl is excellent for safer control, while Funerella supports Necromancy scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush Vampires instead of Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually no. Vampires are strong, but they should not delay your early Skeleton Archer engine unless your economy already supports the rush.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take every fight with Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Take fights that your Archers can win safely. Skip lethal fights or fights that threaten your main Archer stack.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I lose too many Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stop forcing fights, recruit, use a second hero for delivery, and rebuild the main stack before chasing greedy buildings.",
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
          title="Heroes Olden Era Skeleton Archers Guide: Stats, Upgrade Cost, and Week 2 Targets"
          description="Use this Heroes of Might and Magic: Olden Era Necropolis Skeleton Archers guide to understand stats, ranged attack mechanics, upgrade timing, fight selection, protection tools, and Week 2 stack benchmarks."
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
              id: "why-skeleton-archers-matter",
              label: "Why they matter",
            },
            {
              id: "unit-stats",
              label: "Unit stats",
            },
            {
              id: "ranged-mechanics",
              label: "Ranged mechanics",
            },
            {
              id: "key-numbers",
              label: "Key numbers",
            },
            {
              id: "upgrade-cost-table",
              label: "Upgrade cost",
            },
            {
              id: "when-to-upgrade",
              label: "When to upgrade",
            },
            {
              id: "how-to-use-in-fights",
              label: "Fight usage",
            },
            {
              id: "how-to-protect",
              label: "How to protect",
            },
            {
              id: "best-heroes",
              label: "Best heroes",
            },
            {
              id: "week-two-targets",
              label: "Week 2 targets",
            },
            {
              id: "vampires-liches-and-archers",
              label: "Vampires and Liches",
            },
            {
              id: "necromancy-and-transformer",
              label: "Necromancy and Transformer",
            },
            {
              id: "what-if-you-took-losses",
              label: "If you took losses",
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
              href: "/olden-era",
              label: "Heroes Olden Era Complete Guide",
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
              href: "/olden-era/undead-transformer",
              label: "Undead Transformer Guide",
            },
            {
              href: "/olden-era/necropolis-common-mistakes",
              label: "Necropolis Common Mistakes",
            },
            {
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
            {
              href: "/olden-era/alchemical-dust",
              label: "How to Get Alchemical Dust",
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
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
          ]}
        >
          <NecropolisSkeletalArchersContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}