import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ChronomancerVsSoulweaverContent from "@/data/olden-era/chronomancer-vs-soulweaver.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/chronomancer-vs-soulweaver`;

export const metadata: Metadata = {
    title: "Chronomancer vs Soulweaver: Heroes Olden Era Guide",
    description:
      "Compare Chronomancer and Soulweaver in Heroes Olden Era. Learn the best Necromancer subclass routes, Expert skill requirements, and when to pivot your build.",
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
          name: "Chronomancer vs Soulweaver",
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
        "Heroes Olden Era Chronomancer vs Soulweaver: Best Necromancer Subclass Route",
      description:
        "This Heroes of Might and Magic: Olden Era guide compares Chronomancer and Soulweaver for Necromancers, including required Expert skills, Economy and Logistics bottlenecks, best hero choices, route timing checkpoints, fallback plans, and when to abandon either subclass route.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-hero-selection.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-basic-economy.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide=arena-logistics.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclass-starting-skills.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclass-skill-pool.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-tactics-battlecraft.webp`,
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
          name: "Heroes Olden Era Chronomancer vs Soulweaver",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necromancer subclass",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Chronomancer",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Soulweaver",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necromancer Advanced Class",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Economy bottleneck",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Logistics bottleneck",
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
          name: "Heroes Olden Era Necropolis",
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
          name: "Is Chronomancer or Soulweaver better in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Soulweaver is usually better if Logistics appears early because its Wight summons affect battles immediately. Chronomancer is worth chasing only when Economy appears early.",
          },
        },
        {
          "@type": "Question",
          name: "Which hero is best for Soulweaver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marl is the cleanest Soulweaver candidate because Logistics is the Soulweaver bottleneck. Still, he needs all five Soulweaver skills upgraded to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "Which hero is best for Chronomancer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chronomancer is less about a fixed hero and more about the Economy roll. Chase it only when Economy appears early and the rest of the route supports your game state.",
          },
        },
        {
          "@type": "Question",
          name: "What skills does Chronomancer need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chronomancer needs Daylight Magic, Tactics, Battle Magic, Offence, and Economy, all upgraded to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "What skills does Soulweaver need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Soulweaver needs Summon Avatar, Arcane Magic, Battlecraft, Insight, and Logistics, all upgraded to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest Chronomancer bottleneck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Economy is the biggest Chronomancer bottleneck. If Economy does not appear early, Chronomancer becomes risky to force.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest Soulweaver bottleneck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Logistics is the biggest Soulweaver bottleneck. If Logistics does not appear early, Soulweaver becomes risky to force.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase both Chronomancer and Soulweaver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Chronomancer and Soulweaver share no required skills. Trying to chase both can leave you with neither route completed.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if neither Necromancer route works?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Build a strong normal Necromancer around your current skills, such as combat, magic, economy, or Logistics-based map tempo.",
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
          title="Heroes Olden Era Chronomancer vs Soulweaver: Best Necromancer Subclass Route"
          description="Compare Chronomancer and Soulweaver in Heroes of Might and Magic: Olden Era to decide which Necromancer subclass route to chase, when to pivot, and which heroes fit each path."
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
              id: "quick-comparison",
              label: "Quick comparison",
            },
            {
              id: "best-heroes",
              label: "Best heroes",
            },
            {
              id: "which-should-you-pick",
              label: "Which to pick?",
            },
            {
              id: "chronomancer-route",
              label: "Chronomancer route",
            },
            {
              id: "soulweaver-route",
              label: "Soulweaver route",
            },
            {
              id: "timing-checkpoints",
              label: "Timing checkpoints",
            },
            {
              id: "do-not-chase-both",
              label: "Do not chase both",
            },
            {
              id: "opportunity-cost",
              label: "Opportunity cost",
            },
            {
              id: "fallback-plan",
              label: "Fallback plan",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "final-verdict",
              label: "Final verdict",
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
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
            {
              href: "/olden-era/how-to-unlock-subclasses",
              label: "How to Unlock Subclasses",
            },
            {
              href: "/olden-era/force-subclass",
              label: "Should You Force a Subclass?",
            },
            {
              href: "/olden-era/cant-unlock-subclass",
              label: "Why You Can’t Unlock a Subclass",
            },
            {
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
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
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
          ]}
        >
          <ChronomancerVsSoulweaverContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}