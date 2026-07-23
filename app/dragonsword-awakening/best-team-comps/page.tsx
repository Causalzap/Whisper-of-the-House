import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningBestTeamCompsContent from "@/data/dragonsword-awakening/best-team-comps.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dragonsword-awakening`;
const pageUrl = `${hubUrl}/best-team-comps`;

const metadataTitle =
  "DragonSword Awakening Best Teams: Builds & Replacements";
const metadataDescription =
  "Find the best DragonSword Awakening team for your playstyle with tested ranged, action, hybrid and Lute comps, rotations, gear priorities and replacements.";
  
const imageUrls = [
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ranged-team-cerese-othello-dana.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-action-team-charlotte-johnny-reina.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-break-signal-skill.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-reina-sprint-dodge-options.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-enemy-white-stagger-bar.webp`,
];

const toc = [
  {
    id: "best-teams-at-a-glance",
    label: "Best teams at a glance",
  },
  {
    id: "team-synergy",
    label: "How a complete team works",
  },
  {
    id: "ranged-team",
    label: "Cerese, Othello & Dana",
  },
  {
    id: "action-team",
    label: "Charlotte, Johnny & Reina",
  },
  {
    id: "hybrid-replacements",
    label: "Hybrid & replacements",
  },
  {
    id: "role-investment",
    label: "Role & minimum investment",
  },
  {
    id: "lute-survival",
    label: "When to use Lute",
  },
  {
    id: "defensive-switching",
    label: "Switching & Super Armor",
  },
  {
    id: "troubleshooting",
    label: "Team problems & fixes",
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
    href: "/dragonsword-awakening/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/dragonsword-awakening/walkthrough",
    label: "Chapter 1–8 Walkthrough",
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

const faqEntities = [
  {
    question: "Which team should I build first for boss learning?",
    answer:
      "Start with Cerese, Othello, and Dana because the ranged setup keeps more of the boss and arena visible. Move to Charlotte, Johnny, and Reina when you can maintain close pressure without losing the next attack in the camera.",
  },
  {
    question: "Can Reina replace Dana?",
    answer:
      "Cerese, Othello, and Reina was the most practical hybrid in my tests. Reina adds ground movement and recovery, but the lineup is less purely ranged than the Dana version.",
  },
  {
    question: "When should I add Lute?",
    answer:
      "Add Lute after the other two heroes already reach their important Signal opportunities. Use him when healing solves the real bottleneck and remove him when survival is stable.",
  },
  {
    question:
      "Which hero receives the first complete gear and Karma build?",
    answer:
      "Build Charlotte first in the action team. In the ranged team, complete whichever of Cerese or Dana currently carries the field phase, then build Othello for the close-range transition.",
  },
  {
    question: "Can I use any three heroes together?",
    answer:
      "Yes in easier content if you understand their kits, but harder encounters expose weak condition compatibility and unfinished builds. Keep favorite characters together only after checking that the remaining pair can activate the next Signal entry.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "DragonSword Awakening Best Team Comps: Ranged, Action, Hybrid & Lute",
    description:
      "Compare the Cerese ranged team, Charlotte action team, a Reina hybrid, and a Lute survival variation with practical rotations, investment order, replacement rules, and Signal Skill fixes.",
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "DragonSword Awakening",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Team Comps",
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
        "DragonSword Awakening Best Team Comps: Ranged, Action, Hybrid and Lute Teams",
      description:
        "A hands-on DragonSword Awakening team guide comparing Cerese, Othello and Dana; Charlotte, Johnny and Reina; a Cerese, Othello and Reina hybrid; and a Lute survival variation. It explains field roles, switching sequences, Signal opportunities, Super Armor decisions, replacement rules, minimum investment, gear direction and common team failures.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-23",
      dateModified: "2026-07-23",
      about: [
        {
          "@type": "VideoGame",
          name: "DragonSword: Awakening",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening best teams",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening team comps",
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
          name: "Cerese, Othello and Reina hybrid team",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Lute team",
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
          name: "DragonSword Awakening Super Armor",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening gear and Karma",
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
          title="DragonSword Awakening Best Team Comps: Ranged, Action, Hybrid and Lute Teams"
          description="Compare the team options I use, see where each lineup works, follow the actual handoff roles, and decide who gets gear, Karma, healing, or a replacement first."
          gameTitle="DragonSword Awakening"
          gameHref="/dragonsword-awakening"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonSwordAwakeningBestTeamCompsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}