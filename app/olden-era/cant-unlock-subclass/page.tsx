import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CantUnlockSubclassContent from "@/data/olden-era/cant-unlock-subclass.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/cant-unlock-subclass`;

export const metadata: Metadata = {
    title: "Why Your Subclass Won't Unlock in Heroes Olden Era",
    description:
      "Can't unlock a subclass in Heroes of Might & Magic: Olden Era? Learn how to fix full skill slots, non-Expert skills, and rare bottleneck issues.",
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
          name: "Why You Can’t Unlock a Subclass",
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
        "Heroes Olden Era Why You Can’t Unlock a Subclass: Missing Skills, Expert Requirements, and Failed Routes",
      description:
        "This Heroes of Might and Magic: Olden Era troubleshooting guide explains why an Advanced Class or subclass may not unlock, including missing required skills, skills not upgraded to Expert, wrong base class routes, full secondary skill slots, rare bottleneck skills, and outdated Early Access data.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-hero-selection.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-starting-skills.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-skill-choice.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-skill-upgrade.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-expert-skill.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-basic-economy.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-nightshade-icons.webp`,
        `${siteUrl}/images/olden-era/olden-era-cant-unlock-subclass-logistics-roll.webp`,
        `${siteUrl}/images/olden-era/olden-era-how-to-unlock-subclasses-skill-pool.webp`,
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
          name: "Heroes Olden Era why subclass does not unlock",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era can’t unlock subclass",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Advanced Class unlock problem",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era missing required skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Expert skill requirements",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era base class route",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era secondary skill slots",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era bottleneck skills",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Nightshade Magic roll chance",
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
          name: "Why can’t I unlock my subclass in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually one required skill is missing, one required skill is not Expert, the formula belongs to the wrong base class, your skill slots are full, or the rare bottleneck skill never appeared.",
          },
        },
        {
          "@type": "Question",
          name: "Do Basic or Advanced skills count for subclass unlocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Only Expert counts as a completed Advanced Class requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Can I unlock a subclass with four required skills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You need all five required secondary skills, and all five must be upgraded to Expert.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I check my hero's base class?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open the hero information panel and look near the hero name, starting skills, or class details. The base class decides which Advanced Class formulas can unlock.",
          },
        },
        {
          "@type": "Question",
          name: "Can the same faction have different subclass routes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Subclass routes depend on base class, not only faction. For example, Necromancer and Death Knight have different Advanced Classes.",
          },
        },
        {
          "@type": "Question",
          name: "What if the missing skill never appears?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stop forcing if the missing skill is a rare bottleneck and the route is hurting your tempo.",
          },
        },
        {
          "@type": "Question",
          name: "Can I recover a failed subclass route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can recover if the only problem is upgrading a required skill to Expert. You usually cannot recover if the base class is wrong, slots are full, or the bottleneck skill never appeared.",
          },
        },
        {
          "@type": "Question",
          name: "Is the subclass system bugged?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually no. Most failed unlocks are caused by missing requirements or non-Expert skills. Because Olden Era is in Early Access, patch changes can also affect formulas and skill behavior.",
          },
        },
        {
          "@type": "Question",
          name: "Should I keep leveling until the subclass unlocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if the route is still mathematically possible and the passive will matter in time. Otherwise, pivot to a strong normal build.",
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
          title="Heroes Olden Era Why You Can’t Unlock a Subclass: Missing Skills, Expert Requirements, and Failed Routes"
          description="Use this Heroes of Might and Magic: Olden Era troubleshooting guide to find out why your subclass is not unlocking, whether the route can still be recovered, and when to pivot to a normal hero build."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "quick-diagnosis",
              label: "Quick diagnosis",
            },
            {
              id: "wrong-base-class",
              label: "Wrong base class",
            },
            {
              id: "not-expert",
              label: "Not Expert",
            },
            {
              id: "missing-required-skill",
              label: "Missing skill",
            },
            {
              id: "skill-slots-full",
              label: "Skill slots full",
            },
            {
              id: "rare-bottleneck-skill",
              label: "Rare bottleneck",
            },
            {
              id: "sample-roll-probability",
              label: "Sample roll probability",
            },
            {
              id: "can-you-recover",
              label: "Can you recover?",
            },
            {
              id: "early-access-data",
              label: "Early Access data",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "what-to-do-instead",
              label: "What to do instead",
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
          <CantUnlockSubclassContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}