import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BackyardBaseballAchievementsGuideContent from "@/data/backyard-baseball/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/backyard-baseball`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/backyard-baseball/backyard-baseball-achievements-records-screen.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-custom-kid-20-skill-points.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-pablo-first-grand-slam.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-hall-of-fame-tournament-trophies.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-newbie-collector-achievement.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-runner-caught-in-a-pickle.webp`,
];

const toc = [
  {
    id: "all-achievements",
    label: "All 51 achievements",
  },
  {
    id: "roadmap",
    label: "100% roadmap",
  },
  {
    id: "hidden-achievements",
    label: "Hidden achievements",
  },
  {
    id: "cleanup-order",
    label: "Final cleanup order",
  },
  {
    id: "common-problems",
    label: "Unlock problems",
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
    href: "/backyard-baseball",
    label: "Backyard Baseball 2026 Guide Hub",
  },
  {
    href: "/backyard-baseball/unlock-all-players",
    label: "Unlock All Players",
  },
  {
    href: "/backyard-baseball/best-players-team-lineup",
    label: "Best Players, Tier List & Team",
  },
  {
    href: "/backyard-baseball/beginner-guide",
    label: "Beginner Guide",
  },
];

export const metadata: Metadata = {
  title: "Backyard Baseball 2026 Achievements Guide & Roadmap",
  description:
    "Complete all 51 achievements with a five-phase 100% roadmap, hidden achievement solutions, strikeout tips, League requirements, card cleanup, and fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Backyard Baseball 2026 Achievements Guide & Roadmap",
    description:
      "Complete all 51 achievements with an efficient route for hidden conditions, strikeouts, League trophies, Power-Ups, cards, and full-roster cleanup.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Backyard Baseball 2026 Records screen showing World and Character achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard Baseball 2026 Achievements Guide",
    description:
      "Use a five-phase route for all 51 achievements, hidden conditions, League trophies, strikeouts, cards, and common unlock problems.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "How many achievements are in Backyard Baseball 2026?",
    answer:
      "Backyard Baseball 2026 has 51 Steam achievements. All 51 were added on July 9, 2026.",
  },
  {
    question: "What is the best 100% achievement route?",
    answer:
      "Complete the Tutorial and Clubhouse cleanup first, use one League for normal gameplay counters and the first championship, complete a second championship, then finish the playable roster and card collection.",
  },
  {
    question: "What is the rarest achievement?",
    answer:
      "Gotta Collect 'Em All was the rarest achievement in the July 13, 2026 Steam completion-rate snapshot at 0.1%. It requires every Backyard Kids baseball card.",
  },
  {
    question: "What is the easiest way to get strikeouts?",
    answer:
      "Reach two strikes with pitches near the edges, then use a Slowball or breaking pitch aimed just outside the strike zone. Avoid repeatedly throwing hittable pitches down the middle.",
  },
  {
    question: "Do I need more than one League?",
    answer:
      "Yes. Victory Lap requires a second Ultra Grand Championship, and the second League can also be used for higher-difficulty progress, late player unlocks, and unfinished counters.",
  },
  {
    question: "Does Pickup Game count for Double Trouble?",
    answer:
      "No. Double Trouble specifically requires a double play completed in League Play.",
  },
  {
    question: "How do I unlock Grand Slammer?",
    answer:
      "Load all three bases, then hit a home run. Saving Aluminum Power Bat for a reliable hitter and waiting for a reachable pitch makes the setup easier.",
  },
  {
    question: "What counts for Slide to Victory?",
    answer:
      "The runner must slide into a base and finish the play safely without being tagged. An out does not advance the achievement counter.",
  },
  {
    question: "How do I unlock In a Pickle?",
    answer:
      "Get a runner trapped in a rundown between two bases while the defense moves the ball ahead of and behind the runner.",
  },
  {
    question: "What are the pitching Power-Ups called?",
    answer:
      "The pitching Power-Ups are Fire Balls, Crazy Balls, and Freezeballs.",
  },
  {
    question: "How do I unlock Hello, World?",
    answer:
      "Find Mr. Clanky lying in the Clubhouse, hold Shift, and click directly on him.",
  },
  {
    question: "How do I unlock Popular Coach?",
    answer:
      "Unlock the entire playable roster, including special characters, hidden Backyard Kids, late League rewards, and all seven MLB Pros.",
  },
  {
    question: "Should I save all Tokens until the end?",
    answer:
      "No. Opening packs during League progression advances pack-count achievements, rarity ownership, the complete card collection, and some player unlocks at the same time.",
  },
  {
    question: "Are all hidden achievement conditions confirmed?",
    answer:
      "Not every exact scope is fully isolated. No Place Like Home and Error 404 still have unresolved details, while several other hidden achievements have strong tracker or gameplay evidence.",
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
          name: "Backyard Baseball 2026 Guide",
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
      headline:
        "Backyard Baseball 2026 Achievements Guide and 100% Roadmap",
      description:
        "This Backyard Baseball 2026 achievements guide covers all 51 Steam achievements and organizes them into a five-phase 100% completion route. It explains Tutorial and Clubhouse cleanup, Custom Kids, normal League counters, strikeout strategy, pitch-use achievements, safe slides, successful steals, League double plays, Power-Ups, grand slams, postseason trophies, a second championship for Victory Lap, card-pack milestones, rarity ownership, complete card collection, hidden achievement working conditions, common unlock problems, and version-related issues that may affect play classification.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-13",
      dateModified: "2026-07-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Backyard Baseball",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 achievements",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball achievement guide",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 100% roadmap",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball strikeouts",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball League achievements",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball card collection",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball achievement not unlocking",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Double Trouble",
        },
        {
          "@type": "Thing",
          name: "Grand Slammer",
        },
        {
          "@type": "Thing",
          name: "Victory Lap",
        },
        {
          "@type": "Thing",
          name: "Gotta Collect 'Em All",
        },
        {
          "@type": "Thing",
          name: "Popular Coach",
        },
        {
          "@type": "Thing",
          name: "In a Pickle",
        },
        {
          "@type": "Thing",
          name: "Error 404",
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
          title="Backyard Baseball 2026 Achievements Guide"
          description="Complete all 51 achievements with a five-phase route covering hidden conditions, strikeouts, League trophies, card collection, and common unlock problems."
          gameTitle="Backyard Baseball"
          gameHref="/backyard-baseball"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BackyardBaseballAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}