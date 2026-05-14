import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildsContent from "@/data/everything-is-crab/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/best-builds`;

export const metadata: Metadata = {
    // Title (56 chars): Crisp, fits perfectly, and hits the most popular builds
    title: "Everything Is Crab Best Builds: Trunk, Tank & Social",
    // Description (159 chars): Natural phrasing, includes top keywords without stuffing
    description:
      "Find the best Everything Is Crab builds for your next run! Explore evolution timelines, Trunk Hybrid, Body Slam Tank, Spines, and pivot rules for all levels.",
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
            name: "Best Builds Guide",
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
        headline: "Everything Is Crab Best Builds: Trunk, Tank & Social",
        description: "Find the best Everything Is Crab builds for your next run! Explore evolution timelines, Trunk Hybrid, Body Slam Tank, Spines, and pivot rules for all levels.",
        image: [
          `${siteUrl}/images/everything-is-crab/everything-is-crab-best-builds-cheek-pouch-priority.webp`,
          `${siteUrl}/images/everything-is-crab/everything-is-crab-best-builds-trunk-choice.webp`
        ],
        inLanguage: "en",
        datePublished: "2026-05-08",
        dateModified: "2026-05-08",
        about: [
          {
            "@type": "VideoGame",
            name: "Everything Is Crab",
          },
          {
            "@type": "Thing",
            name: "Character Builds",
          },
          {
            "@type": "Thing",
            name: "Game Strategies",
          }
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
            name: "What is the best build in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For first clears, the best build is usually Cheek Pouch Safe Scaling into Trunk Hybrid or Big Physical. For safer boss fights, Body Slam Tank is strong if you already have HP and defense.",
            },
          },
          {
            "@type": "Question",
            name: "What is the easiest beginner build in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cheek Pouch Safe Scaling is the easiest opener because it fixes food tempo. You still need to turn that extra progress into a real attack before bosses.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best damage build in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trunk Hybrid and Big Physical are the easiest damage builds to recommend. Trunk gives hybrid damage and feeding distance, while Big Physical gives simple scaling through size and Physical damage.",
            },
          },
          {
            "@type": "Question",
            name: "What are Trunk's important numbers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trunk deals 1 to 1.4x damage using Physical or Ability, whichever is lower. It has a 1.5 second cooldown and gives +0.66 Feeding Distance.",
            },
          },
          {
            "@type": "Question",
            name: "Where should I check Body Slam's numbers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Check the Confirmed build numbers section for Body Slam's damage, HP scaling, and cooldown. Then use the Body Slam Tank section to decide whether your current run has enough HP, Mass, Shell, or Plating to support it.",
            },
          },
          {
            "@type": "Question",
            name: "Is Body Slam good in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Body Slam is good when you already have HP, Mass, Shell, Plating, or other tank pieces. Do not force it on a fragile build.",
            },
          },
          {
            "@type": "Question",
            name: "Is Spines good in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Spines is good when you have survivability. Spines Level 4 can return +180% damage on contact impacts, but the build still needs HP, Plating, Shell, Revenge, regeneration, or movement.",
            },
          },
          {
            "@type": "Question",
            name: "How does Poisonous work with Spines?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Poisonous applies a poison stack on contact impacts taken and deals 0.3x Ability Damage. It works best when you can survive contact and have enough Ability scaling.",
            },
          },
          {
            "@type": "Question",
            name: "What does Detachable do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Detachable makes your Spines trigger on Dodge. This is strong when you are already using Spines, movement, dodge, poison, or reflect support.",
            },
          },
          {
            "@type": "Question",
            name: "Is Social Pack good?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Social Pack can be good, but only when charm tools, ally support, pack damage, and a backup attack appear together. Do not go all-in on social if you have no boss plan.",
            },
          },
          {
            "@type": "Question",
            name: "When should I pivot builds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If your first three evolutions suggest one route but choices four to six support a different route, pivot before the first boss. For example, if Trunk never appears but HP and Body Slam support do, move into Body Slam Tank.",
            },
          },
          {
            "@type": "Question",
            name: "What should I build for Pressure levels?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For early Pressure, use Trunk Hybrid, Big Physical, or Body Slam Tank. For Pressure 6 and higher, value movement, sustain, and boss consistency more than normal-run greed.",
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
          title="Everything Is Crab Best Builds: Trunk, Body Slam, Spines and Social"
          description="Find the best Everything Is Crab builds with evolution timelines, confirmed tooltip numbers, Big Physical, Trunk Hybrid, Body Slam Tank, Spines Poison, Social Pack, Pressure build picks, and pivot rules."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 8, 2026"
          toc={[
            {
              id: "best-builds-ranked",
              label: "Best builds ranked",
            },
            {
              id: "confirmed-build-numbers",
              label: "Build numbers",
            },
            {
              id: "evolution-timelines",
              label: "Evolution timelines",
            },
            {
              id: "trunk-hybrid-build",
              label: "Trunk Hybrid",
            },
            {
              id: "body-slam-tank-build",
              label: "Body Slam Tank",
            },
            {
              id: "spines-reflect-poison-build",
              label: "Spines / Poison",
            },
            {
              id: "big-physical-build",
              label: "Big Physical",
            },
            {
              id: "social-pack-build",
              label: "Social Pack",
            },
            {
              id: "cheek-pouch-safe-scaling",
              label: "Cheek Pouch",
            },
            {
              id: "pressure-builds",
              label: "Pressure builds",
            },
            {
              id: "how-to-pivot",
              label: "How to pivot",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-build-order",
              label: "Build order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/everything-is-crab/evolutions-list",
              label: "Everything Is Crab Evolution Picker",
            },
            {
              href: "/everything-is-crab/genetics-guide",
              label: "Everything Is Crab Genetics Guide",
            },  
            {
              href: "/everything-is-crab",
              label: "Everything Is Crab Guide",
            },
            {
              href: "/everything-is-crab/progression-guide",
              label: "Everything Is Crab Progression Guide",
            },
            {
              href: "/everything-is-crab/boss-guide",
              label: "Everything Is Crab Boss Guide",
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
          <BestBuildsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}