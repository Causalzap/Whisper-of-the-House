import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AscendToZeroGuideContent from "@/data/ascend-to-zero/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/ascend-to-zero`;

const imageUrls = [
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-limited-time-time-stop.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-level-route-elite-targets.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-underground-bunker-supply-shop.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-area-expander-unlocking-content.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-avatar-stats.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-time-machine-entry-stats.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-item-processing.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-desert-level-20000-objective.webp`,
];

const toc = [
  {
    id: "start-here",
    label: "Start here",
  },
  {
    id: "first-run-plan",
    label: "First-run plan",
  },
  {
    id: "limited-time",
    label: "Limited Time",
  },
  {
    id: "time-stop",
    label: "How to use Time Stop",
  },
  {
    id: "elite-route",
    label: "Elites vs common enemies",
  },
  {
    id: "survivor-order",
    label: "Survivor rescue order",
  },
  {
    id: "bunker-progression",
    label: "Bunker progression",
  },
  {
    id: "stats",
    label: "Main stats",
  },
  {
    id: "entry-stats",
    label: "Best Entry Stats",
  },
  {
    id: "equipment-processing",
    label: "Item processing",
  },
  {
    id: "equipment-slots",
    label: "Weapon & Gadget slots",
  },
  {
    id: "currencies",
    label: "Currencies",
  },
  {
    id: "tech-chips",
    label: "Beginner Tech Chips",
  },
  {
    id: "avatars",
    label: "Best beginner Avatar",
  },
  {
    id: "progression-roadmap",
    label: "Progression roadmap",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
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
    href: "/ascend-to-zero/how-to-unlock-stage-2-desert",
    label: "Stage 2 & Desert Unlock Guide",
  },
  {
    href: "/ascend-to-zero/best-builds",
    label: "Best Builds & Avatar Tier List",
  },
  {
    href: "/ascend-to-zero/achievements-guide",
    label: "All 58 Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Ascend to ZERO Beginner Guide & Progression Roadmap",
  description:
    "Learn Limited Time, Time Stop, survivor unlocks, Entry Stats, item processing, currencies, and the route from the Institute to the Desert.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: "Ascend to ZERO Beginner Guide & Progression Roadmap",
    description:
      "Learn how Limited Time, Time Stop, elites, survivor rescues, Entry Stats, equipment processing, and Institute progression work.",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ascend to ZERO Limited Time clock and Time Stop during an Institute run",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend to ZERO Beginner Guide & Progression Roadmap",
    description:
      "Plan your first runs, restore Bunker services, improve Entry Stats, preserve equipment, and progress from the Institute to the Desert.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Does Ascend to ZERO really give you only 30 seconds?",
    answer:
      "Each loop starts with a small Limited Time pool, but Time Stop pauses the clock and several enemies, items, Tech Chips, and Entry Stats can recover or extend it.",
  },
  {
    question: "Does Limited Time decrease during Time Stop?",
    answer:
      "No. The Limited Time clock pauses while Time Stop is active.",
  },
  {
    question: "Can weapons attack while time is frozen?",
    answer:
      "Normal weapons also freeze. Use the pause to move, collect drops, manage equipment, and reposition. Releasing Time Stop activates the current Avatar Skill.",
  },
  {
    question: "What happens when Health reaches zero?",
    answer:
      "A defeat can consume part of the remaining Limited Time. The run ends when the Limited Time clock is exhausted.",
  },
  {
    question: "Should I kill every enemy in Ascend to ZERO?",
    answer:
      "No. Prioritize elites, survivors, bosses, Area Expanders, and permanent objectives. Kill common enemies when they provide needed levels or can be cleared quickly.",
  },
  {
    question: "What should I upgrade first in Ascend to ZERO?",
    answer:
      "Begin with Limited Time and XP Gain. Add Attack when elites survive too long, then add Starting Level after the early rooms become repetitive.",
  },
  {
    question: "Why did my equipment disappear?",
    answer:
      "Faded equipment is temporary and is destroyed on re-entry. Javier can store it, convert it into permanent equipment, or extract it into Zero Cells.",
  },
  {
    question: "Should I convert every rare item?",
    answer:
      "No. Convert an item when it matches the preferred Avatar, fixes a real Build problem, and is worth the risk. Store exceptional equipment when the current conversion chance is uncomfortable.",
  },
  {
    question: "When should I return to the Bunker?",
    answer:
      "Return after permanent progress, when no nearby elite can restore time, when the next route greatly exceeds the current damage, or when a valuable temporary item needs to be stored.",
  },
  {
    question: "Which Avatar is best for beginners?",
    answer:
      "Chrono Child is the most direct starting choice because the Avatar Skill reinforces the basic freeze, reposition, and release rhythm.",
  },
  {
    question: "How do I unlock the Desert in Ascend to ZERO?",
    answer:
      "Defeat Terrae Motus, use the post-boss EXIT, confirm the Level Two dialogue, and continue into the Desert.",
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
      headline: "Ascend to ZERO Beginner Guide and Progression Roadmap",
      description:
        "This Ascend to ZERO beginner guide explains how the Limited Time clock and Time Stop work, when to fight elites instead of common enemies, which survivors restore important Underground Bunker services, how to prioritize Time Machine Entry Stats, when to purchase equipment slots, how Javier's Conversion, Extraction, and Warehouse systems handle temporary equipment, how to spend Zero Coins, Zero Cells, and Zero Keys, which Tech Chips solve early progression problems, and how to advance through the Institute toward Terrae Motus and the Desert.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-14",
      dateModified: "2026-07-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Ascend to ZERO",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO beginner guide",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO progression",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Limited Time",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Time Stop",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Underground Bunker",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Entry Stats",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO survivor locations",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO item processing",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO temporary equipment",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Tech Chips",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Terrae Motus",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Desert",
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
          title="Ascend to ZERO Beginner Guide and Progression Roadmap"
          description="Learn how to manage Limited Time, use Time Stop, rescue survivors, upgrade Entry Stats, preserve temporary equipment, and progress from the Institute to the Desert."
          gameTitle="Ascend to ZERO"
          gameHref="/ascend-to-zero"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AscendToZeroGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}