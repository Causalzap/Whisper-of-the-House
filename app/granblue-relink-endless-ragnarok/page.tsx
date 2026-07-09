import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideContent from "@/data/granblue-relink-endless-ragnarok/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/granblue-relink-endless-ragnarok`;

const imageUrls = [
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-hub.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-seedhollow-portal.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-conflux-gate.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-seofon-tweyen-trial.webp`,
  `${siteUrl}/images/granblue-relink-endless-ragnarok/granblue-relink-endless-ragnarok-new-characters-crew-cards.webp`,
];

const toc = [
  { id: "granblue-relink-endless-ragnarok-guide", label: "Guide hub" },
  { id: "start-here", label: "Start here" },
  { id: "route-map", label: "Route map" },
  { id: "choose-the-right-guide", label: "Choose a guide" },
  { id: "systems-at-a-glance", label: "Systems" },
  { id: "conflux", label: "Conflux" },
  { id: "fatebreaker-chaos", label: "Fatebreaker & Chaos" },
  { id: "ai-team", label: "AI team" },
  { id: "new-characters", label: "New characters" },
  { id: "common-stuck-points", label: "Stuck points" },
  { id: "resource-rule", label: "Resource rule" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/granblue-relink-endless-ragnarok/how-to-start",
    label: "How to Start Endless Ragnarok",
  },
  {
    href: "/granblue-relink-endless-ragnarok/conflux-guide",
    label: "Conflux Guide",
  },
  {
    href: "/granblue-relink-endless-ragnarok/fatebreaker-chaos-progression",
    label: "Fatebreaker and Chaos Progression",
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
  title: "Granblue Relink Endless Ragnarok Guide",
  description:
    "Route Endless Ragnarok with start checks, Conflux, Fatebreaker, Chaos, AI teams, new characters, Master Traits, summons and common stuck fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Granblue Relink Endless Ragnarok Guide",
    description:
      "Use this Endless Ragnarok hub to start the DLC, unlock Conflux, stabilize one party, choose the right guide, and fix common progression walls.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Granblue Fantasy Relink Endless Ragnarok guide hub route overview.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Granblue Relink Endless Ragnarok Guide",
    description:
      "Start Endless Ragnarok, unlock Conflux, route Fatebreaker and Chaos, build AI teams, and choose new characters.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "What should I do first in Endless Ragnarok?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Check your save state first. Returning endgame saves should confirm the full post-game requirement and start from the Seedhollow route. Fresh or mid-story saves should keep progressing and check Seedhollow side quests as systems unlock gradually.",
    },
  },
  {
    "@type": "Question",
    name: "Why is Endless Ragnarok not showing up?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The usual causes are install status, game version, save progress, or checking the wrong Seedhollow route. Use the How to Start guide before assuming the DLC is broken.",
    },
  },
  {
    "@type": "Question",
    name: "When does Conflux unlock?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Conflux can begin through a Chapter 6 Seedhollow side quest route, and it also appears along the returning-save Endless Ragnarok route. Use it as a catch-up system before harder endgame checks.",
    },
  },
  {
    "@type": "Question",
    name: "Should I farm Conflux before Chaos?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes, if the party has a build wall. Use Conflux when weapons, sigils, AI survival, or materials are behind before repeating Chaos-level quests.",
    },
  },
  {
    "@type": "Question",
    name: "Which guide should I read first?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "If the route is not open, read How to Start. If Conflux is open, read the Conflux Guide. If Chaos is messy, read Fatebreaker and Chaos. If AI is dying, read Best AI Team Builds. If you are choosing characters, read New Characters Unlock Guide.",
    },
  },
  {
    "@type": "Question",
    name: "Should I build new characters immediately?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Unlock and test new characters first, then spend serious materials only after you know whether the character is your manual main, AI slot, or later project.",
    },
  },
  {
    "@type": "Question",
    name: "When should I push Chaos?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Push Chaos when the current clear is stable enough to repeat. If the first clear is revive-heavy, slow, or dependent on lucky AI behavior, take the unlock and rebuild before farming.",
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
      headline: "Granblue Relink Endless Ragnarok Guide Hub",
      description:
        "A player-focused Granblue Fantasy Relink Endless Ragnarok guide hub that routes players through save-state checks, Seedhollow start requirements, Chapter 6 Conflux access, Conflux catch-up, Fatebreaker and Chaos progression, AI team stability, new character unlocks, Master Traits, summons, Primal Burst, Weapon Transcendence, and common stuck points.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-09",
      dateModified: "2026-07-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Granblue Fantasy: Relink" },
        { "@type": "Thing", name: "Endless Ragnarok" },
        { "@type": "Thing", name: "Seedhollow" },
        { "@type": "Thing", name: "Conflux" },
        { "@type": "Thing", name: "Fatebreaker" },
        { "@type": "Thing", name: "Fate Breaker grade" },
        { "@type": "Thing", name: "Chaos-level quests" },
        { "@type": "Thing", name: "AI team builds" },
        { "@type": "Thing", name: "New characters" },
        { "@type": "Thing", name: "Crewmate Cards" },
        { "@type": "Thing", name: "Master Traits" },
        { "@type": "Thing", name: "Summons" },
        { "@type": "Thing", name: "Primal Burst" },
        { "@type": "Thing", name: "Weapon Transcendence" },
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
          title="Granblue Relink Endless Ragnarok Guide Hub"
          description="Start the DLC, unlock Conflux, stabilize one party, pick the right guide for your wall, and route Fatebreaker, Chaos, AI teams, and new characters without wasting resources."
          gameTitle="Granblue Fantasy: Relink"
          gameHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseHref="/granblue-relink-endless-ragnarok"
          breadcrumbBaseLabel="Granblue Relink Endless Ragnarok Guide"
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