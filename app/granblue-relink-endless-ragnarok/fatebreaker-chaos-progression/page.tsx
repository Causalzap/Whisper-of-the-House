import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideContent from "@/data/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression`;

const imageUrls = [
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-seofon-tweyen-trial.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-fate-breaker-grade.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-chaos-level-quests.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-fatebreaker-sigil-screen.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-chaos-sigil-priority.webp`,
];

const toc = [
  { id: "fatebreaker-chaos-progression", label: "Fatebreaker route" },
  { id: "seofon-tweyen-trial", label: "Seofon & Tweyen trial" },
  { id: "fate-breaker-grade", label: "Fate Breaker grade" },
  { id: "chaos-level-quests", label: "Chaos-level quests" },
  { id: "chaos-tier-roadmap", label: "Chaos tiers" },
  { id: "fatebreaker-sigils", label: "Fatebreaker sigils" },
  { id: "first-chaos-quests", label: "First Chaos quests" },
  { id: "sigil-priority", label: "Sigil priority" },
  { id: "build-wall-skill-wall", label: "Build or skill wall" },
  { id: "summons-primal-burst", label: "Summons & Primal Burst" },
  { id: "when-to-farm-chaos", label: "When to farm Chaos" },
  { id: "new-characters-and-chaos", label: "New characters" },
  { id: "mistakes", label: "Mistake to avoid" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/granblue-relink-endless-ragnarok",
    label: "Granblue Relink Endless Ragnarok Guide Hub",
  },
  {
    href: "/granblue-relink-endless-ragnarok/how-to-start",
    label: "How to Start Endless Ragnarok",
  },
  {
    href: "/granblue-relink-endless-ragnarok/conflux-guide",
    label: "Conflux Guide",
  },
  {
    href: "/granblue-relink-endless-ragnarok/best-ai-team-builds",
    label: "Best AI Team Builds",
  },
  {
    href: "/granblue-relink-endless-ragnarok/new-characters-unlock-guide",
    label: "New Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "Granblue Relink Fatebreaker Guide: Chaos Progression",
  description:
    "Unlock Fatebreaker in Endless Ragnarok, beat Seofon and Tweyen, prep Chaos quests, check Fatebreaker sigils, and know when to return to Conflux.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Granblue Relink Fatebreaker Guide: Chaos Progression",
    description:
      "Follow the Endless Ragnarok Fatebreaker route from Seofon and Tweyen trial to Fate Breaker grade, Chaos-level quests, sigil checks, and Conflux farming decisions.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Granblue Fantasy Relink Endless Ragnarok Seofon and Tweyen trial fight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Granblue Relink Fatebreaker Guide: Chaos Progression",
    description:
      "Beat Seofon and Tweyen, unlock Fate Breaker grade, route Chaos-level quests, and decide when to farm Conflux.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "How do I unlock Fatebreaker?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Progress Endless Ragnarok until the Seofon and Tweyen trial opens. Clearing that trial grants the Fate Breaker skyfarer grade and opens the Chaos-level progression path.",
    },
  },
  {
    "@type": "Question",
    name: "What are Chaos-level quests?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Chaos-level quests are Fatebreaker-grade endgame quests that open after the Fatebreaker promotion. They should be treated as repeat-farm checks, not just unlock checks.",
    },
  },
  {
    "@type": "Question",
    name: "Are Fatebreaker sigils worth using?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes, when they solve the current Chaos problem. Check the in-game sigil text first, then test whether the trait improves damage, survival, cap conversion, or repeat-clear stability.",
    },
  },
  {
    "@type": "Question",
    name: "Should I use Conflux before Chaos?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes, if the party has a build wall. Conflux is where weapons, AI survival, cap conversion, materials, and new character gaps can be fixed before repeating Chaos.",
    },
  },
  {
    "@type": "Question",
    name: "Should I push Chaos+ as soon as it opens?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Only if normal Chaos is already stable. If Chaos still needs constant revives, lucky AI behavior, or one perfect manual run, stay in the current tier or return to Conflux first.",
    },
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
          name: "Granblue Relink Endless Ragnarok Guide",
          item: `${siteUrl}/granblue-relink-endless-ragnarok`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fatebreaker and Chaos Progression",
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
        "Granblue Fantasy Relink Endless Ragnarok Fatebreaker Guide: Seofon and Tweyen Trial, Chaos Quests, and Farming Prep",
      description:
        "A player-focused Granblue Fantasy Relink Endless Ragnarok Fatebreaker and Chaos progression guide covering the Chapter 6 Conflux unlock, The Tale of Bahamut's Rage Proud requirement, Seofon and Tweyen trial, Fate Breaker grade, Chaos / Chaos+ / Chaos++ farming decisions, Fatebreaker sigils, first Chaos quests, build wall versus skill wall diagnosis, summons, Primal Burst, and when to return to Conflux.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Granblue Fantasy: Relink" },
        { "@type": "Thing", name: "Endless Ragnarok" },
        { "@type": "Thing", name: "Fatebreaker" },
        { "@type": "Thing", name: "Fate Breaker grade" },
        { "@type": "Thing", name: "Seofon and Tweyen trial" },
        { "@type": "Thing", name: "Chaos-level quests" },
        { "@type": "Thing", name: "Chaos+" },
        { "@type": "Thing", name: "Chaos++" },
        { "@type": "Thing", name: "Conflux" },
        { "@type": "Thing", name: "Fatebreaker sigils" },
        { "@type": "Thing", name: "A Trial of Two Eternities" },
        { "@type": "Thing", name: "Divergence" },
        { "@type": "Thing", name: "Primal Burst" },
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
      mainEntity: faqEntities,
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
          title="Granblue Fantasy Relink Fatebreaker Guide: Chaos Progression"
          description="Beat Seofon and Tweyen, receive Fate Breaker grade, route Chaos-level quests, check Fatebreaker sigils, and know when to return to Conflux."
          gameTitle="Granblue Fantasy: Relink"
          gameHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseLabel="Granblue Fantasy Relink Endless Ragnarok Guide"
          updatedAt="July 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}