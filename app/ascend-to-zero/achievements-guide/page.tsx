import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AscendToZeroAchievementsGuideContent from "@/data/ascend-to-zero/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ascend-to-zero`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-achievement-end-of-predator.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-item-processing.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-avatar-skill-comparison.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-weapon-gadget-slots.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-bivi-handbook-completion.webp`,
];

const toc = [
  {
    id: "achievement-overview",
    label: "Difficulty, time & missables",
  },
  {
    id: "missable-achievements",
    label: "Missable achievements",
  },
  {
    id: "best-achievement-route",
    label: "Best completion route",
  },
  {
    id: "progression-achievements",
    label: "Story & progression",
  },
  {
    id: "system-achievements",
    label: "Bunker & equipment",
  },
  {
    id: "run-wasting-achievements",
    label: "Run-wasting achievements",
  },
  {
    id: "avatar-achievements",
    label: "Avatar achievements",
  },
  {
    id: "slots-and-upgrades",
    label: "Slots & upgrades",
  },
  {
    id: "bivi-handbook",
    label: "BIVI Handbook",
  },
  {
    id: "endgame-achievements",
    label: "Stage 4 & Multidimension",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/ascend-to-zero",
    label: "Ascend to ZERO Guide Hub",
  },
  {
    href: "/ascend-to-zero/how-to-unlock-stage-2-desert",
    label: "Stage 2 & Desert Unlock Guide",
  },
  {
    href: "/ascend-to-zero/best-builds",
    label: "Best Builds & Avatar Tier List",
  },
];

export const metadata: Metadata = {
  title: "Ascend to ZERO Achievements Guide: All 58",
  description:
    "Unlock all 58 Ascend to ZERO achievements with missable checks, an efficient roadmap, Avatar setups, Bunker milestones, and endgame cleanup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: "Ascend to ZERO Achievements Guide: All 58",
    description:
      "Follow an efficient route through all 58 achievements, including Avatar challenges, Conversion traps, Stage 4, Multidimension Mode, and BIVI cleanup.",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ascend to ZERO End of the Predator achievement after defeating Terrae Motus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend to ZERO Achievements Guide: All 58",
    description:
      "Plan all 58 achievements with missable checks, efficient cleanup phases, Avatar setups, Bunker milestones, and late-game difficulty clears.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "How many achievements are in Ascend to ZERO?",
    answer:
      "The launch version of Ascend to ZERO has 58 achievements.",
  },
  {
    question: "Are any Ascend to ZERO achievements missable?",
    answer:
      "No permanently missable achievement has been identified. The repeatable run, boss, Conversion, upgrade, and difficulty systems allow later cleanup.",
  },
  {
    question:
      "How difficult is the Ascend to ZERO achievement completion?",
    answer:
      "The provisional launch estimate is 8 out of 10. Most early achievements are manageable, but Stage 4 on Zero, Multidimension Mode 12, Perfect Game, and full Handbook completion create a demanding endgame.",
  },
  {
    question:
      "How long does it take to unlock every Ascend to ZERO achievement?",
    answer:
      "A provisional estimate is 60 to 100 or more hours. Equipment randomness, Handbook collection, late difficulty clears, and item-upgrade materials can extend the total.",
  },
  {
    question:
      "Are there any online or multiplayer achievements in Ascend to ZERO?",
    answer:
      "No launch achievement condition requires co-op, multiplayer, or competitive online play.",
  },
  {
    question: "Does Ascend to ZERO require multiple playthroughs?",
    answer:
      "A single save supports achievement cleanup, but the game requires many repeatable runs and separate difficulty clears.",
  },
  {
    question:
      "Can I clean up achievements after completing the Institute?",
    answer:
      "Yes. Bosses, stages, Avatar setups, Bunker upgrades, and equipment systems remain available for later achievement cleanup.",
  },
  {
    question: "Do the Stage 4 difficulty achievements stack?",
    answer:
      "The achievement list contains separate conditions for Easy, Normal, Hard, and Zero. Until lower-difficulty unlocks are verified to stack automatically, plan one successful clear for each listed difficulty.",
  },
  {
    question: "Are the achievement completion percentages live?",
    answer:
      "No. Every percentage on this page is a Steam global achievement snapshot captured on July 14, 2026.",
  },
];

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
          name: "Ascend to ZERO Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
      headline: "Ascend to ZERO Achievements Guide: All 58",
      description:
        "This Ascend to ZERO achievement guide covers all 58 launch achievements with a practical completion roadmap, missable-achievement guidance, provisional difficulty and completion-time estimates, Steam completion-rate context, story and survivor progression, Bunker systems, item Conversion, equipment slots, Avatar-specific setups, Stage 4 difficulty clears, Multidimension Mode 12, BIVI Handbook completion, and the most important conditions that can waste a run when prepared incorrectly.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-14",
      dateModified: "2026-07-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Ascend to ZERO",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO achievements",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO achievement guide",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO missable achievements",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO achievement difficulty",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO completion time",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Avatar achievements",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Stage 4 achievements",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Multidimension Mode",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO BIVI Handbook",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Fate Breaker",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Ascend to ZERO Achievements Guide: All 58"
          description="Plan all 58 achievements in an efficient order, avoid the conditions that waste runs, and finish Avatar, Bunker, Stage 4, Multidimension, and BIVI cleanup."
          gameTitle="Ascend to ZERO"
          gameHref="/ascend-to-zero"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AscendToZeroAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}