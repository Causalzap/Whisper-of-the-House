import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ForceSubclassContent from "@/data/olden-era/force-subclass.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/force-subclass`;

export const metadata: Metadata = {
    title: "Should You Force a Subclass in Heroes Olden Era?",
    description:
      "Should you force a subclass in Heroes of Might & Magic: Olden Era? Learn the Force, Watch, and Pivot rules to optimize your hero build and skill rolls.",
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
          name: "Should You Force a Subclass?",
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
        "Heroes Olden Era Should You Force a Subclass? When to Chase, Watch, or Pivot",
      description:
        "This Heroes of Might and Magic: Olden Era guide explains when to force a subclass, when to watch a route, when to pivot, how skill roll probability changes Advanced Class decisions, which routes are worth chasing, and what to pick instead when a subclass route fails.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-hero-selection.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-starting-skills.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-basic-economy.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-arena-logistics.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-tactics-battlecraft.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-skill-pool.webp`,
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
          name: "Heroes Olden Era force subclass",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era should you force a subclass",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Advanced Class strategy",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Force Watch Pivot",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era subclass opportunity cost",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era subclass bottleneck skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era skill roll probability",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Soulweaver",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Chronomancer",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Swashbuckler",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Ascendant",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Progenitor",
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
          name: "Should I force a subclass every game in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Most games should not force a subclass. Force only when early skill rolls confirm the route.",
          },
        },
        {
          "@type": "Question",
          name: "When should I force a subclass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Force a subclass when the rare bottleneck skill appears early, you have multiple route skills, your skill slots are open, and the passive will matter before decisive fights.",
          },
        },
        {
          "@type": "Question",
          name: "When should I stop forcing a subclass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stop when the bottleneck skill never appears, your skill slots are crowded, or the route is hurting your map tempo.",
          },
        },
        {
          "@type": "Question",
          name: "Is a strong subclass always worth chasing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A strong passive can still be wrong if the required skills weaken your early and mid game.",
          },
        },
        {
          "@type": "Question",
          name: "What is a lucky-run subclass route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A lucky-run route is a route that depends on an extremely rare skill. Knight to Swashbuckler is an example because Nightshade Magic can be around 0.91% in sample data.",
          },
        },
        {
          "@type": "Question",
          name: "Is Soulweaver worth forcing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Soulweaver is one of the best Necromancer routes if Logistics appears early. Without Logistics, it becomes risky.",
          },
        },
        {
          "@type": "Question",
          name: "Is Chronomancer worth forcing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chronomancer is worth considering only if Economy appears early. Economy is the main bottleneck.",
          },
        },
        {
          "@type": "Question",
          name: "What about Grove or Sylvan subclasses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grove and Sylvan subclass data is still patch-sensitive and should not be hard-forced until Warden and Druid route requirements are confirmed for the current Early Access build.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I abandon the subclass route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Build around your strongest current skills, such as combat upgrades, movement, economy, spell power, or army preservation. A strong normal hero is better than a failed subclass project.",
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
          title="Heroes Olden Era Should You Force a Subclass? When to Chase, Watch, or Pivot"
          description="Follow this Heroes of Might and Magic: Olden Era guide to decide when to force a subclass, when to watch a route, when to pivot, and what to pick instead after bad skill rolls."
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
              id: "should-you-force",
              label: "Should you force?",
            },
            {
              id: "when-to-force",
              label: "When to force",
            },
            {
              id: "when-to-pivot",
              label: "When to pivot",
            },
            {
              id: "skill-roll-probability",
              label: "Skill roll probability",
            },
            {
              id: "route-force-rating",
              label: "Route force rating",
            },
            {
              id: "opportunity-cost",
              label: "Opportunity cost",
            },
            {
              id: "skill-slot-pressure",
              label: "Skill slot pressure",
            },
            {
              id: "what-to-pick-instead",
              label: "What to pick instead",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "final-rule",
              label: "Final rule",
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
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
            {
              href: "/olden-era/how-to-unlock-subclasses",
              label: "How to Unlock Subclasses",
            },
            {
              href: "/olden-era/cant-unlock-subclass",
              label: "Why You Can’t Unlock a Subclass",
            },
            {
              href: "/olden-era/chronomancer-vs-soulweaver",
              label: "Chronomancer vs Soulweaver",
            },
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
            {
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
            },
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
            {
              href: "/olden-era/schism-guide",
              label: "Schism Guide",
            },
            {
              href: "/olden-era/temple-guide",
              label: "Temple Guide",
            },
          ]}
        >
          <ForceSubclassContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}