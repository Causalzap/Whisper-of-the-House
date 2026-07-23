import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningBeginnerGuideContent from "@/data/dragonsword-awakening/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dragonsword-awakening`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-first-familiar-unlock.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-goblin-treasure-cave-explosive-crate.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-fates-invitation.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ranged-team-cerese-othello-dana.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-break-signal-skill.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-azure-gale-top-set-effect.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-regional-boss-rewards.webp`,
];

const toc = [
  {
    id: "first-hour-route",
    label: "First-hour route",
  },
  {
    id: "early-system-priority",
    label: "Early system priority",
  },
  {
    id: "first-character",
    label: "First character to unlock",
  },
  {
    id: "signal-skills",
    label: "Signal Skills",
  },
  {
    id: "resource-priority",
    label: "Resource priority",
  },
  {
    id: "gear-karma",
    label: "Gear, main stats & Karma",
  },
  {
    id: "dailies",
    label: "Regional Missions & World Bosses",
  },
  {
    id: "master-skill",
    label: "Master Skills & Treasure Maps",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/dragonsword-awakening",
    label: "DragonSword Awakening Guide Hub",
  },
  {
    href: "/dragonsword-awakening/walkthrough",
    label: "Chapter 1–8 Walkthrough",
  },
  {
    href: "/dragonsword-awakening/best-team-comps",
    label: "Best Team Comps & Signal Skills",
  },
  {
    href: "/dragonsword-awakening/gear-karma-guide",
    label: "Gear & Karma Guide",
  },
  {
    href: "/dragonsword-awakening/ending-final-boss",
    label: "Ursula Final Boss & Ending",
  },
];

export const metadata: Metadata = {
  title: "DragonSword Awakening Beginner Guide: What to Upgrade First",
  description:
    "Choose your first team, use Fate's Invitation wisely, build a 3+2 gear set, trigger Signal Skills, and avoid wasting Gold, Karma, and Forging Molds.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "DragonSword Awakening Beginner Guide: Build One Strong Team",
    description:
      "Complete the first Guild loop, choose a tested three-character team, spend early resources safely, and start Regional Missions at the right time.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 942,
        height: 509,
        alt: "DragonSword Awakening Level 70 ranged team with Cerese, Othello, and Dana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DragonSword Awakening Beginner Guide: First Team & Upgrades",
    description:
      "Choose a first team, use Fate's Invitation safely, build a 3+2 set, trigger Signal Skills, and avoid expensive early upgrade mistakes.",
    images: [imageUrls[3]],
  },
};

const faqEntities = [
  {
    question: "Can I eventually unlock every character in DragonSword Awakening?",
    answer:
      "Fate's Invitation recruits a hero through the Exchange, while story progression and Hero Logs support the recruitment route. I have not confirmed an account-wide guarantee that every hero can be obtained without a limit, so I do not spend invitations under that assumption.",
  },
  {
    question: "Are there permanent missables in DragonSword Awakening?",
    answer:
      "I have not confirmed a permanent lockout for the movement-gated routes covered here. Moon Key chests, underwater paths, and Familiar-gated ledges are return-later objectives, but that does not prove every side quest in every chapter is non-missable.",
  },
  {
    question:
      "Should I dismantle an Exclusive Karma I do not use in DragonSword Awakening?",
    answer:
      "Only after the first team is settled. Check that the Karma is unequipped, is not needed for an immediate ascension, and that the dismantle preview returns the exchange value you expect before consuming it.",
  },
  {
    question:
      "Why is the Treasure Map chest not inside the visible circle in DragonSword Awakening?",
    answer:
      "The objective can be above or below the current map level. Check cave entrances, underwater paths, lower ledges, bushes, and terrain near the edge of the marked area before assuming the marker is broken.",
  },
  {
    question: "What time do Regional Missions reset in DragonSword Awakening?",
    answer:
      "The English menu displays a daily reset at 9:00 AM, but that panel does not state a time zone. Use the in-game countdown or observe one reset before planning a real-world daily schedule.",
  },
  {
    question: "Is Lute worth upgrading early in DragonSword Awakening?",
    answer:
      "Keep Lute strong enough to survive and perform his healing role. Give the first premium gear, Karma, Gold, and frequently used skill materials to the main damage dealer in the three-character team.",
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
          name: "DragonSword Awakening Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "DragonSword Awakening Beginner Guide: First Team, Signal Skills and Early Upgrade Priorities",
      description:
        "This DragonSword Awakening beginner guide explains the first-hour Guild route from Orbis to Elli's farm, the first Familiar unlock, the explosive-barrel solution for the Goblin treasure cave, how to spend Fate's Invitation, and how to choose between Cerese, Othello, and Dana or Charlotte, Johnny, and Reina. It also covers Break and Signal Skill timing, early Gold and resource priorities, Azure Gale 2-piece and 3-piece effects, 3+2 gear sets, Forging Mold use, basic and Exclusive Karma, Regional Mission rewards and the displayed 9:00 AM reset, World Boss farming, level-30 Master Skills, Grimoires, Treasure Maps, and Awakening Points.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-23",
      dateModified: "2026-07-23",
      about: [
        {
          "@type": "VideoGame",
          name: "DragonSword Awakening",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening beginner guide",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening first team",
        },
        {
          "@type": "Thing",
          name: "Fate's Invitation",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Signal Skills",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Break",
        },
        {
          "@type": "Thing",
          name: "Cerese, Othello and Dana team",
        },
        {
          "@type": "Thing",
          name: "Charlotte, Johnny and Reina team",
        },
        {
          "@type": "Thing",
          name: "Azure Gale gear set",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Forging Mold",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening basic Karma",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Exclusive Karma",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Regional Missions",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening World Bosses",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Master Skills",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Treasure Maps",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Awakening Points",
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
          title="DragonSword Awakening Beginner Guide: My First Team and Upgrade Route"
          description="Follow the opening route I use to unlock the first Familiar, complete one three-character team, spend early resources safely, and start farming without wasting Gold or Karma."
          gameTitle="DragonSword Awakening"
          gameHref="/dragonsword-awakening/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonSwordAwakeningBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}