import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsContent from "@/data/tales-of-seikyu/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-new-relic-waypoint.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-ruins-offering-altar.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-inari-shrine-offering-menu.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-tengu-form-flight.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-form-scroll.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-prince-prophecy-dialogue.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fishing-job.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-carp-festival-calendar.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-ranch-facilities-sasaki.webp`,
];

const toc = [
  {
    id: "achievements-guide",
    label: "Achievements guide",
  },
  {
    id: "what-to-plan-first",
    label: "Plan first",
  },
  {
    id: "simple-achievements",
    label: "Simple unlocks",
  },
  {
    id: "hidden-achievements",
    label: "Hidden achievements",
  },
  {
    id: "free-to-roam",
    label: "Free to Roam",
  },
  {
    id: "tengu-form-route",
    label: "Tengu Form cleanup",
  },
  {
    id: "inari-is-pleased",
    label: "Inari is Pleased",
  },
  {
    id: "shrine-bundle-screen",
    label: "Shrine bundles",
  },
  {
    id: "move-over-yohji",
    label: "75 ruins rooms",
  },
  {
    id: "fox-form-achievement",
    label: "Fox Form",
  },
  {
    id: "kappa-island",
    label: "Kappa Island",
  },
  {
    id: "fishing-achievements",
    label: "Fishing",
  },
  {
    id: "festival-achievements",
    label: "Festivals",
  },
  {
    id: "farm-collection-achievements",
    label: "Farm collections",
  },
  {
    id: "ranch-achievements",
    label: "Ranch",
  },
  {
    id: "social-romance-achievements",
    label: "Social and romance",
  },
  {
    id: "story-and-combat-cleanup",
    label: "Story and combat",
  },
  {
    id: "best-of-the-best",
    label: "Best of the Best",
  },
  {
    id: "mistakes",
    label: "Mistakes",
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
    href: "/tales-of-seikyu",
    label: "Tales of Seikyu Guide Hub",
  },
  {
    href: "/tales-of-seikyu/beginner-guide",
    label: "Tales of Seikyu Beginner Guide",
  },
  {
    href: "/tales-of-seikyu/fox-ruins-guide",
    label: "Tales of Seikyu Fox Ruins Guide",
  },
  {
    href: "/tales-of-seikyu/yokai-forms-guide",
    label: "Tales of Seikyu Yokai Forms Guide",
  },
  {
    href: "/tales-of-seikyu/request-board-guide",
    label: "Tales of Seikyu Request Board Guide",
  },
  {
    href: "/tales-of-seikyu/romance-gifts-marriage-guide",
    label: "Tales of Seikyu Romance, Gifts, and Marriage Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Achievements Guide: 36 Checklist",
  description:
    "Unlock all 36 Tales of Seikyu achievements with Steam rates, hidden goals, shrine offerings, Kappa Island, festivals, Tengu cleanup, and 100% tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Achievements Guide: 36 Achievements, Hidden Goals, Offerings and 100%",
    description:
      "Plan every Tales of Seikyu achievement with a full 36-achievement checklist, Steam unlock rates, hidden achievements, shrine offerings, Kappa Island, festivals, Tengu Form cleanup, ranch goals, romance goals, and Best of the Best routing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu New Relic Teleport Waypoint unlocked message.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Achievements Guide",
    description:
      "Unlock all 36 achievements with Steam rates, hidden goals, shrine offerings, festivals, Kappa Island, Tengu cleanup, and 100% routing.",
    images: [imageUrls[0]],
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
          name: "Tales of Seikyu Guide",
          item: `${siteUrl}/tales-of-seikyu`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tales of Seikyu Achievements Guide",
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
        "Tales of Seikyu Achievements Guide: All 36 Achievements, Steam Rates, Hidden Goals, Shrine Offerings, Kappa Island and 100%",
      description:
        "A player-focused Tales of Seikyu achievements guide covering all 36 Steam achievements, unlock rates, hidden achievements, Nioh's Knockout, Giant Green Thumb, Free to Roam, Inari is Pleased, shrine offerings, Fox Ruins rooms, Tengu Form cleanup, Oh Kappa My Kappa, fishing goals, festival achievements, ranch animals, social and romance achievements, and Best of the Best completion planning.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tales of Seikyu",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu achievements",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Free to Roam",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Inari is Pleased",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu shrine offerings",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Move Over Yohji",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Nioh's Knockout",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Oh Kappa My Kappa",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Kappa Island",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Tengu Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Best of the Best",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many achievements are in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 36 achievements in the current 1.0 Steam achievement list.",
          },
        },
        {
          "@type": "Question",
          name: "Which achievements are hidden in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The current list marks Nioh's Knockout and Giant Green Thumb as hidden achievements. Nioh's Knockout asks you to be defeated by a Nioh, while Giant Green Thumb asks you to harvest 30 kinds of giant crops.",
          },
        },
        {
          "@type": "Question",
          name: "Can I miss an achievement permanently in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most achievements look like long-term cleanup goals, but Nioh's Knockout should be handled carefully because it asks you to lose to Nioh. Make a manual save before the Nioh route.",
          },
        },
        {
          "@type": "Question",
          name: "Should I unlock Nioh's Knockout before Good Riddance, Nioh?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, that is the safest route. Save before the fight, lose once for Nioh's Knockout, then reload and win for Good Riddance, Nioh.",
          },
        },
        {
          "@type": "Question",
          name: "Do bought fish count for Something Fishy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not rely on bought fish unless you see the achievement progress trigger. The achievement says to catch 30 kinds of fish, so the safest route is to actually catch new fish species.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Tengu Form for Free to Roam?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tengu Form helps outdoor cleanup, but it does not replace shrine and waypoint activation. You still need to interact with all required travel points.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Tengu Form for Move Over, Yohji?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tengu Form can speed up route cleanup, but 75 ruins rooms still depend on doors, offerings, puzzles, waypoints, bosses, and other form gates.",
          },
        },
        {
          "@type": "Question",
          name: "How do I track Inari is Pleased?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the shrine bundle screen, keep offering materials, and write down any altar requirement you cannot complete immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What items should I keep for shrine offerings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep a reserve of wood, clay, copper ore, stone, meat, seasonal crops, forage items, and any item the shrine bundle screen asks for.",
          },
        },
        {
          "@type": "Question",
          name: "Are festival achievements missable?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "They are calendar-risk achievements. If you sleep through the festival day, you may need to wait for the next seasonal cycle. Check the calendar and mail near festival dates.",
          },
        },
        {
          "@type": "Question",
          name: "Does Early Access progress sync achievements correctly?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you started on an older save, verify important route progress in your current 1.0 save. If one achievement does not trigger, check the Steam community discussions for that specific achievement. Some progression-based achievements may require re-triggering the qualifying action, while others may need a patch fix.",
          },
        },
        {
          "@type": "Question",
          name: "What should I track for Best of the Best?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Track shrines, waypoints, offerings, ruins rooms, story quests, fish species, rare fish, Kappa Island, crop types, giant crop types, cooked dishes, furniture, clothing, ranch animals, friendships, relationship, marriage, and festivals.",
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
          title="Unlock Every Tales of Seikyu Achievement Without Missing Rare Routes"
          description="Use the full 36-achievement checklist, Steam rates, hidden goals, shrine offerings, Kappa Island, festivals, Tengu cleanup, and 100% route logic."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
