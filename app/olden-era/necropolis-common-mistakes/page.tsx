import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NecropolisCommonMistakesContent from "@/data/olden-era/necropolis-common-mistakes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/necropolis-common-mistakes`;

export const metadata: Metadata = {
    title: "Fix Common Necropolis Mistakes in Heroes Olden Era",
    description:
      "Stop ruining your Week 1 snowball! Learn how to avoid common Necropolis mistakes in Heroes Olden Era, like bad fights, wasted Focus, and delayed Archers.",
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
          name: "Necropolis Common Mistakes",
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
        "Heroes Olden Era Necropolis Common Mistakes: Fix Your Week 1 Snowball",
      description:
        "This Heroes of Might and Magic: Olden Era Necropolis mistakes guide explains why Necropolis starts fail, how to fix delayed Skeleton Archer timing, when to skip bad fights, why rushing Vampires or Liches can backfire, how to use Focus and Law Points correctly, and why Necromancy does not refund bad trades.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-skeleton-archers.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-starting-skeletons.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-lethal-battle.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-vampires-liches.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-marketplace.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-arcane-dust.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-common-mistakes-law-points.webp`,
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
          name: "Heroes Olden Era Necropolis common mistakes",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Skeleton Archers",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necromancy",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Vampires",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Liches",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Focus Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Law Points",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Arcane Dust",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis build order",
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
          name: "What is the biggest Necropolis mistake in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest Necropolis mistake is taking too many early losses. Necropolis needs to preserve its army so Skeleton Archers, Necromancy, Focus abilities, and conversion mechanics can multiply value over time.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my Necropolis start feel weak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A weak Necropolis start usually means one part of the snowball loop broke early. Common causes include delayed Skeleton Archers, a bad fight, a missed resource bottleneck, rushing high-tier units too early, or spending Focus and Law Points without supporting your route.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade Skeletons into Skeleton Archers early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if the upgrade makes your next fights safer. Skeleton Archers are usually worth it when ranged damage prevents several melee trades, but you should not upgrade blindly if the gold blocks a more important building.",
          },
        },
        {
          "@type": "Question",
          name: "Should Necropolis rush Vampires or Liches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis should rush Vampires or Liches only when the early engine is stable. They are strong power targets, but they should support your Skeleton Archer, Necromancy, and conversion plan instead of replacing it too early.",
          },
        },
        {
          "@type": "Question",
          name: "Is Marketplace always good for Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Marketplace is good when it fixes a real bottleneck. Build it when trading resources unlocks Skeleton upgrades, Mage Guild, Vampires, Liches, or another important timing.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Necropolis still lose fights after taking Necromancy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necromancy does not erase bad trades. It gives value after victories, but if you lose too many important units, your army can still shrink in practice.",
          },
        },
        {
          "@type": "Question",
          name: "How should Necropolis use Focus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis should save Focus for meaningful turns. Lich revive, Graverobber summons, and tactical body blocking are usually more important than spending Focus immediately for small value.",
          },
        },
        {
          "@type": "Question",
          name: "Are lethal battles worth taking as Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lethal battles are usually not worth taking unless the reward unlocks a major timing and you can win without crippling your main stack. Necropolis wants repeated clean wins, not one expensive victory.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check when my Necropolis build is blocked?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check exact resource costs first, including gold, Arcane Dust, wood, ore, mercury, gems, crystals, and building prerequisites. Then decide whether Marketplace, a safer fight, or a resource pickup solves the problem fastest.",
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
          title="Heroes Olden Era Necropolis Common Mistakes: Fix Your Week 1 Snowball"
          description="Avoid the biggest Necropolis mistakes in Heroes of Might and Magic: Olden Era, including delayed Skeleton Archers, bad fight selection, rushed Vampires and Liches, wasted Focus, Law Point mistakes, resource bottlenecks, and Necromancy misplays."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "mistake-checklist",
              label: "Mistake checklist",
            },
            {
              id: "correct-necropolis-loop",
              label: "Correct Necropolis loop",
            },
            {
              id: "review-your-game",
              label: "Review your game",
            },
            {
              id: "hero-without-plan",
              label: "Hero without a route",
            },
            {
              id: "delaying-skeleton-archers",
              label: "Delaying Skeleton Archers",
            },
            {
              id: "taking-too-many-fights",
              label: "Taking too many fights",
            },
            {
              id: "rushing-vampires-liches",
              label: "Rushing Vampires or Liches",
            },
            {
              id: "marketplace-mistake",
              label: "Marketplace mistake",
            },
            {
              id: "arcane-dust",
              label: "Arcane Dust bottlenecks",
            },
            {
              id: "law-points",
              label: "Law Point mistakes",
            },
            {
              id: "focus-mistake",
              label: "Focus mistakes",
            },
            {
              id: "necromancy-mistake",
              label: "Necromancy mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/necropolis-week-1-build-order",
              label: "Necropolis Week 1 Build Order",
            },
            {
              href: "/olden-era/necropolis-skeletal-archers",
              label: "Necropolis Skeleton Archers Guide",
            },
            
            {
              href: "/olden-era/best-buildings-first",
              label: "Best Buildings to Build First",
            },
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
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
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
            {
              href: "/olden-era/chronomancer-vs-soulweaver",
              label: "Chronomancer vs Soulweaver",
            },
          ]}
        >
          <NecropolisCommonMistakesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}