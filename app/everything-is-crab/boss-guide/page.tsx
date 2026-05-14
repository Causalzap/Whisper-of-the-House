import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BossGuideContent from "@/data/everything-is-crab/boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/boss-guide`;

export const metadata: Metadata = {
    // Title (55 chars): Safe length, clear intent
    title: "Everything Is Crab Boss Guide: Defeat All Major Bosses",
    // Description (157 chars): Engaging and descriptive without keyword stuffing
    description:
      "Learn how to beat every boss in Everything Is Crab. Get terrain tips, the best boss builds, and strategies for Crabaroo, the final boss, and the Cataclysm.",
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
            name: "Boss Guide",
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
        headline: "Everything Is Crab Boss Guide: Defeat All Major Bosses",
        description: "Learn how to beat every boss in Everything Is Crab. Get terrain tips, the best boss builds, and strategies for Crabaroo, the final boss, and the Cataclysm.",
        image: [
          `${siteUrl}/images/everything-is-crab/everything-is-crab-boss-guide-final-boss-crab-kin.webp`,
          `${siteUrl}/images/everything-is-crab/everything-is-crab-boss-guide-first-boss-prep.webp`,
          `${siteUrl}/images/everything-is-crab/everything-is-crab-boss-guide-cataclysm-meteorites.webp`
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
            name: "Boss Fights",
          },
          {
            "@type": "Thing",
            name: "Final Boss Strategy",
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
            name: "How do you beat bosses in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Enter with one reliable attack, movement speed, enough HP or defense, and a safe arena when possible. Bosses punish incomplete builds, not just low damage.",
            },
          },
          {
            "@type": "Question",
            name: "How many boss fights are in a run?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A clear is structured around multiple boss checks, with early bosses selected from a boss pool and a final boss at the end. Because early bosses can vary, two runs may not show the same boss order.",
            },
          },
          {
            "@type": "Question",
            name: "Which bosses can appear in Everything Is Crab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Players commonly search for Crabaroo or Krabaroo, Aquaconda, Clawdia, Shellephant, Crabtaur, and the final boss Crab Kin or Krabken.",
            },
          },
          {
            "@type": "Question",
            name: "How do you beat Crabaroo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Keep medium distance, avoid bad terrain, move diagonally, and punish after it commits to movement. Crabaroo punishes slow builds that get pinned down.",
            },
          },
          {
            "@type": "Question",
            name: "How do you beat Aquaconda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Do not let water control the fight. Bring movement, wings, terrain adaptation, reach, or enough damage to avoid a long water fight.",
            },
          },
          {
            "@type": "Question",
            name: "How do you beat Clawdia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Do not stand in front of the claw arc. Bait the swing, move outside the danger zone, and punish from a safer angle.",
            },
          },
          {
            "@type": "Question",
            name: "How do you beat Shellephant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Keep open lanes, sidestep charges, and attack after committed movement. Do not fight Shellephant near obstacles if you can move away first.",
            },
          },
          {
            "@type": "Question",
            name: "How do you beat Crabtaur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Do not retreat in a straight line. Move diagonally, keep medium spacing, and punish after rushdown movement.",
            },
          },
          {
            "@type": "Question",
            name: "What is the final boss called?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Players search for the final boss as Crab Kin, Crabin, Krabken, or simply the Everything Is Crab final boss. This guide covers that final boss under Crab Kin and Krabken.",
            },
          },
          {
            "@type": "Question",
            name: "How do you beat Crab Kin or Krabken?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Arrive with reliable damage, movement, HP or defense, recovery, and a plan for Cataclysm. Do not tunnel on damage when meteorites and arena chaos begin.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Cataclysm event?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cataclysm is a final boss event where meteorites and arena danger make movement more important than greed. Watch the arena, not only the boss.",
            },
          },
          {
            "@type": "Question",
            name: "Does Carcinisation make bosses harder?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Carcinisation can improve food value, but it also adds danger. Treat it as a boss-risk decision, especially before the final boss.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best build for bosses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The safest boss builds are Trunk Hybrid with movement, Body Slam Tank, Big Physical with speed, and Spines or Reflect with sustain. Social builds need backup personal boss damage.",
            },
          },
          {
            "@type": "Question",
            name: "Is Trunk good against bosses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trunk can be good because it has reach and wide swings, but it needs movement, spacing, and balanced Physical and Ability support.",
            },
          },
          {
            "@type": "Question",
            name: "Is Body Slam good against bosses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Body Slam is good when you already have HP, Mass, Plating, Shell, or Revenge. Do not force it on a fragile build.",
            },
          },
          {
            "@type": "Question",
            name: "Should I fight bosses in any biome?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. If the timer allows, move toward safer terrain before the boss spawns. Bad terrain can make a manageable boss much harder.",
            },
          },
          {
            "@type": "Question",
            name: "What changes at higher Pressure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Higher Pressure makes boss fights less forgiving. Boss protection, higher damage, environmental pressure, and final boss chaos make movement and sustained damage more important.",
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
          title="Everything Is Crab Boss Guide: Crabaroo, Aquaconda, Clawdia, Shellephant and Krabken"
          description="Learn how to beat Everything Is Crab bosses, including Crabaroo, Aquaconda, Clawdia, Shellephant, Crabtaur, Crab Kin, Krabken, Cataclysm, boss builds, terrain tips, and final boss strategy."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 8, 2026"
          toc={[
            {
              id: "how-boss-fights-work",
              label: "Boss fights",
            },
            {
              id: "boss-prep",
              label: "Boss prep",
            },
            {
              id: "crabaroo",
              label: "Crabaroo",
            },
            {
              id: "aquaconda",
              label: "Aquaconda",
            },
            {
              id: "clawdia",
              label: "Clawdia",
            },
            {
              id: "shellephant",
              label: "Shellephant",
            },
            {
              id: "crabtaur",
              label: "Crabtaur",
            },
            {
              id: "best-boss-builds",
              label: "Boss builds",
            },
            {
              id: "final-boss",
              label: "Final boss",
            },
            {
              id: "cataclysm-event",
              label: "Cataclysm",
            },
            {
              id: "carcinisation-and-final-boss",
              label: "Carcinisation",
            },
            {
              id: "pressure-boss-modifiers",
              label: "Pressure bosses",
            },
            {
              id: "boss-fight-flow",
              label: "Fight flow",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "next-steps",
              label: "Next steps",
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
          <BossGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}