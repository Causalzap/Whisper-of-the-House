import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SubclassGuideContent from "@/data/olden-era/subclass-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/subclass-guide`;

export const metadata: Metadata = {
    title: "Heroes Olden Era Subclass Guide & Skill Roll Tips",
    description:
      "Master subclasses in Heroes of Might & Magic: Olden Era. Learn Expert skill requirements, the 8-skill limit, and the best advanced class routes.",
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
          name: "Subclass Guide",
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
        "Heroes Olden Era Subclass Guide: Advanced Class Requirements, Skill Rolls, and Best Routes",
      description:
        "This Heroes of Might and Magic: Olden Era subclass guide explains how advanced classes work, how to unlock subclasses with five Expert secondary skills, why the 8-skill limit matters, how skill roll probability can kill a route, which subclasses are worth chasing, and when to stop forcing a route.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-hero-selection.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-starting-skills.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-skill-upgrade.webp`,
        `${siteUrl}/images/olden-era/olden-era-subclass-guide-nightshade-economy-icons.webp`,
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
          name: "Heroes Olden Era subclass guide",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era advanced classes",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era subclass requirements",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era skill roll probability",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era secondary skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Expert skills",
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
        {
          "@type": "Thing",
          name: "Heroes Olden Era bottleneck skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era skill cap",
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
          name: "How do you unlock subclasses in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You unlock a subclass by getting five specific secondary skills and upgrading all five to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "Do subclass skills need to be Expert?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Basic or Advanced is not enough. Every required skill must be upgraded to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "What is the hardest part of unlocking a subclass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The hardest part is skill roll probability. Some required skills can have extremely low roll chances, so the route may fail even if you know the correct formula.",
          },
        },
        {
          "@type": "Question",
          name: "What is the earliest level to unlock a subclass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The theoretical timing is around Level 15, with some perfect cases listed around Level 14. Most real games unlock much later, usually Level 20 to 25 or not at all.",
          },
        },
        {
          "@type": "Question",
          name: "How many secondary skills can a hero learn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A hero can learn up to eight unique secondary skills, which makes early off-route picks dangerous.",
          },
        },
        {
          "@type": "Question",
          name: "When should I stop forcing a subclass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you reach Level 8 to 10 without at least three required route skills, especially without the rare bottleneck skill, you should usually stop forcing the route.",
          },
        },
        {
          "@type": "Question",
          name: "Which Necromancer subclass is better?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Soulweaver is usually better for immediate battlefield pressure, while Chronomancer depends heavily on whether you can roll Economy.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I unlock my subclass in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are probably missing a required skill, one skill is not Expert, your hero has no open skill slots, the rare skill never appeared, or the route data changed during Early Access.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest subclass mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is treating a rare route as guaranteed. If a key skill has a very low roll chance, you should wait for it to appear early before committing.",
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
          title="Heroes Olden Era Subclass Guide: Advanced Class Requirements, Skill Rolls, and Best Routes"
          description="Follow this Heroes of Might and Magic: Olden Era subclass guide to learn how advanced classes work, which Expert skills each route needs, why skill roll probability matters, and when to stop forcing a route."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "early-access-warning",
              label: "Early Access warning",
            },
            {
              id: "how-subclasses-work",
              label: "How subclasses work",
            },
            {
              id: "advanced-class-requirements",
              label: "Requirements table",
            },
            {
              id: "skill-roll-probability",
              label: "Skill roll probability",
            },
            {
              id: "why-expert-skills-matter",
              label: "Why Expert matters",
            },
            {
              id: "eight-skill-limit",
              label: "8-skill limit",
            },
            {
              id: "unlock-levels",
              label: "Unlock levels",
            },
            {
              id: "necromancer-routes",
              label: "Necromancer routes",
            },
            {
              id: "skill-roll-bottlenecks",
              label: "Bottleneck skills",
            },
            {
              id: "best-heroes-for-subclass-routes",
              label: "Best starting heroes",
            },
            {
              id: "when-to-abandon",
              label: "When to abandon",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "how-to-use-this-guide",
              label: "How to use this guide",
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
              href: "/olden-era/how-to-unlock-subclasses",
              label: "How to Unlock Subclasses",
            },
            {
              href: "/olden-era/cant-unlock-subclass",
              label: "Why You Can’t Unlock a Subclass",
            },
            {
              href: "/olden-era/force-subclass",
              label: "Should You Force a Subclass?",
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
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
            },
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
           
            
          ]}
        >
          <SubclassGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}