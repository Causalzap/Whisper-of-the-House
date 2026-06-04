import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EndlessRuptureGuideContent from "@/data/realm-of-ink/endless-rupture-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/realm-of-ink/endless-rupture-guide`;

const imageUrls = [
  `${siteUrl}/images/realm-of-ink/realm-of-ink-difficulty-rupture-doctor.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-rupture-modifier-doctor.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-rupture-50-violeta-stats.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-endless-archive-sanctum.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-violeta-rupture-50-build.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-high-difficulty-whale.webp`,
  `${siteUrl}/images/realm-of-ink/realm-of-ink-oread-high-difficulty-patterns.webp`,
];

const toc = [
  { id: "endless-rupture-overview", label: "Endless and Rupture" },
  { id: "how-to-unlock-endless-rupture", label: "Unlock requirements" },
  { id: "difficulty-7", label: "Dragon Hair Brush" },
  { id: "rupture", label: "Rupture" },
  { id: "rupture-rewards", label: "Rupture rewards" },
  { id: "rupture-50", label: "Rupture 50" },
  { id: "endless-mode", label: "Endless mode" },
  { id: "best-builds", label: "Best builds" },
  { id: "oread-high-difficulty", label: "Oread high difficulty" },
  { id: "enemy-patterns", label: "Enemy patterns" },
  { id: "why-builds-fail", label: "Why builds fail" },
  { id: "prep-checklist", label: "Prep checklist" },
  { id: "recommended-route", label: "Progression route" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/realm-of-ink",
    label: "Realm of Ink Guide Hub",
  },
  {
    href: "/realm-of-ink/beginner-guide",
    label: "Realm of Ink Beginner Guide",
  },
  {
    href: "/realm-of-ink/best-builds",
    label: "Realm of Ink Best Builds Guide",
  },
  {
    href: "/realm-of-ink/oread-guide",
    label: "Realm of Ink Oread Guide",
  },
  {
    href: "/realm-of-ink/ink-gems-curios-guide",
    label: "Realm of Ink Ink Gems and Curios Guide",
  },
  {
    href: "/realm-of-ink/final-boss-true-ending",
    label: "Realm of Ink Final Boss and True Ending Guide",
  },
];

export const metadata: Metadata = {
  title: "Realm of Ink Endless & Rupture Guide: Unlocks, Rewards",
  description:
    "Unlock Realm of Ink Endless mode, learn Rupture rewards, Dragon Hair Brush, Rupture 50 builds, Archive runs, boss checks, and high difficulty tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Realm of Ink Endless and Rupture Guide: Unlocks, Rewards, Builds and High Difficulty",
    description:
      "Learn how Endless mode unlocks, how Rupture works, when reward milestones matter, which builds survive Rupture 50, and how to prepare for Dragon Hair Brush and high difficulty bosses.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Realm of Ink difficulty 7 Dragon Hair Brush screen showing stronger monsters, enhanced boss moves, and better rewards.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realm of Ink Endless and Rupture Guide",
    description:
      "Unlock Endless mode, climb Rupture rewards, prepare for Dragon Hair Brush, and use stronger builds for Rupture 50 and high difficulty bosses.",
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
          name: "Realm of Ink Guide",
          item: `${siteUrl}/realm-of-ink`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endless and Rupture Guide",
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
        "Realm of Ink Endless and Rupture Guide: Unlock Requirements, Reward Milestones, Dragon Hair Brush, Rupture 50 and High Difficulty Builds",
      description:
        "A player-focused Realm of Ink endgame guide for version 1.0. The guide explains how Endless mode unlocks after the true ending, how Archive and Sanctum completed-run builds work, how Rupture unlocks through the doctor near the run entrance, how early Rupture caps and higher Rupture levels work, what reward milestones such as Rupture 12, Rupture 21, Rupture 30 and every 5 levels after that mean, how Dragon Hair Brush changes difficulty, why Rupture 50 requires a finished build, which builds work best for Endless and Rupture, why Oread needs curse and laser payoff on high difficulty, how Book Spirit and Ink God punish weak boss damage, and how to diagnose failed high difficulty runs.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Realm of Ink" },
        { "@type": "Thing", name: "Realm of Ink Endless mode" },
        { "@type": "Thing", name: "Realm of Ink how to unlock Endless" },
        { "@type": "Thing", name: "Realm of Ink Archive" },
        { "@type": "Thing", name: "Realm of Ink Sanctum" },
        { "@type": "Thing", name: "Realm of Ink Rupture" },
        { "@type": "Thing", name: "Realm of Ink Rupture rewards" },
        { "@type": "Thing", name: "Realm of Ink Rupture 50" },
        { "@type": "Thing", name: "Realm of Ink Dragon Hair Brush" },
        { "@type": "Thing", name: "Realm of Ink difficulty 7" },
        { "@type": "Thing", name: "Realm of Ink high difficulty" },
        { "@type": "Thing", name: "Realm of Ink Violeta build" },
        { "@type": "Thing", name: "Realm of Ink Oread build" },
        { "@type": "Thing", name: "Realm of Ink Book Spirit" },
        { "@type": "Thing", name: "Realm of Ink Ink God" },
        { "@type": "Thing", name: "Realm of Ink Curios" },
        { "@type": "Thing", name: "Realm of Ink perks" },
        { "@type": "Thing", name: "Realm of Ink Elixirs" },
        { "@type": "Thing", name: "Realm of Ink boss damage" },
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
          name: "How do you unlock Endless mode in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Endless mode unlocks after you reach the true ending. After that, you can access it through the Archive and Sanctum system using a completed run's final build.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Endless mode missing in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If Endless is missing, you probably have not finished the true ending route yet. Keep progressing endings before looking for the Sanctum option.",
          },
        },
        {
          "@type": "Question",
          name: "What is Dragon Hair Brush in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dragon Hair Brush is difficulty 7. It increases challenge, improves rewards, increases Fox Blood drops, and can give bosses enhanced moves.",
          },
        },
        {
          "@type": "Question",
          name: "What is Rupture in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rupture is an extra modifier system that adds more challenge for achievements, unlocks, rewards, and character rank progression.",
          },
        },
        {
          "@type": "Question",
          name: "How do you unlock higher Rupture levels?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rupture starts with a limited early cap, such as Lv.5. Clear the available levels, then return to push higher caps as more Rupture levels unlock.",
          },
        },
        {
          "@type": "Question",
          name: "What are the Rupture reward milestones?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rupture 12, 21, and 30 are important reward checkpoints. After that, every 5 Rupture levels improves the appearance chance of Epic-or-higher Curios or perks and Elixirs.",
          },
        },
        {
          "@type": "Question",
          name: "Should I push Rupture early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Push Rupture after your normal clears are stable. If you add Rupture before you understand your build, it will mostly make your mistakes more punishing.",
          },
        },
        {
          "@type": "Question",
          name: "What is Rupture 50 in Realm of Ink?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rupture 50 is a high-pressure endgame setting where you need a finished build with real scaling, boss damage, and defensive support.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use for Endless?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a completed run that ended strong. Violeta Primordial Status and Curse is a strong tested direction. Oread Curse Butterfly and Laser can also work if the right pieces are online.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best build for Rupture?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The safest tested route here is Violeta Primordial Status and Curse because it stacks multiple damage layers into one engine.",
          },
        },
        {
          "@type": "Question",
          name: "Is Oread good for high difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but Oread needs the correct curse, butterfly, laser, array, ability damage, and defensive pieces. She can feel weak if the setup has no payoff.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my damage fall off in high difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your build probably has too many unrelated rewards. Pick one damage engine and stack Ink Gems, Curios, Elixirs, and abilities that multiply it.",
          },
        },
        {
          "@type": "Question",
          name: "Why do bosses take so long in high difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your build may have good room clear but weak boss damage. Add single-target scaling, burst, status damage, curse payoff, heavy attack lasers, or Ink Relic skill damage.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take more damage or defense?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If bosses are not dying, take damage. If you already have damage but keep losing runs to mistakes, take HP, shield, food, or damage reduction.",
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
          title="How Should You Push Endless and Rupture?"
          description="Unlock Endless after the true ending, learn how Rupture rewards work, then bring a finished build before pushing Dragon Hair Brush, Rupture 50, or high difficulty bosses."
          gameTitle="Realm of Ink"
          gameHref="/realm-of-ink"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessRuptureGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
