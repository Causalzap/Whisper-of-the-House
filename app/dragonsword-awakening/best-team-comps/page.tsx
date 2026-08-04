import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningBestTeamCompsContent from "@/data/dragonsword-awakening/best-team-comps.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dragonsword-awakening`;
const pageUrl = `${hubUrl}/best-team-comps`;

const metadataTitle =
  "DragonSword Awakening Best Team Comps & Builds";

const metadataDescription =
  "Compare Cerese/Othello/Dana, Charlotte/Johnny/Reina, Reina replacement and Lute teams, with rotations, build order and Signal Skill fixes.";

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
    id: "cerese-othello-team",
    label: "Best Cerese & Othello team",
  },
  {
    id: "charlotte-team",
    label: "Best Charlotte team",
  },
  {
    id: "reina-replacement-team",
    label: "Best Reina replacement team",
  },
  {
    id: "lute-team",
    label: "When to use Lute",
  },
  {
    id: "beginner-team",
    label: "Which team to build first",
  },
  {
    id: "team-synergy",
    label: "Signal Skills & replacements",
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
    question: "What is the best DragonSword Awakening team for learning bosses?",
    answer:
      "I start with Cerese, Othello, and Dana. The two ranged heroes preserve arena visibility, while Othello handles the dangerous close-range phase before I reopen the distance.",
  },
  {
    question: "What is the best Charlotte team?",
    answer:
      "My tested Charlotte team is Charlotte, Johnny, and Reina. Charlotte drives the field phase, Johnny returns the sequence to the ground, and Reina restores position before the next Charlotte entry.",
  },
  {
    question: "Can Reina replace Dana?",
    answer:
      "Yes. Cerese, Othello, and Reina was my most practical tested replacement team. It keeps the Cerese–Othello core but trades part of Dana's ranged rhythm for Reina's ground mobility and recovery.",
  },
  {
    question: "When should I use Lute?",
    answer:
      "I add Lute only after the other two heroes already produce their important Signal opportunities. He is useful when healing is the real bottleneck, but I remove him when the lower team damage makes the fight unnecessarily long.",
  },
  {
    question: "Who should I build first?",
    answer:
      "I build Charlotte first in the action team. In the ranged team, I complete whichever of Cerese or Dana carries most of the field time, then build Othello for the close-range transition.",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "DragonSword Awakening team with Cerese, Othello and Dana",
      },
    ],
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
        "DragonSword Awakening Best Team Comps and Builds: Cerese, Charlotte, Reina, Othello and Lute Teams",
      description:
        "A tested DragonSword Awakening team guide comparing Cerese, Othello and Dana; Charlotte, Johnny and Reina; a Cerese, Othello and Reina replacement team; and a Lute survival variation. It includes rotations, Signal Skill conditions, investment order, replacement rules, Super Armor decisions and practical team fixes.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-23",
      dateModified: "2026-08-04",
      about: [
        {
          "@type": "VideoGame",
          name: "DragonSword: Awakening",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening best team comps",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening builds",
        },
        {
          "@type": "Thing",
          name: "Cerese and Othello team",
        },
        {
          "@type": "Thing",
          name: "Charlotte, Johnny and Reina team",
        },
        {
          "@type": "Thing",
          name: "Cerese, Othello and Reina team",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Lute build",
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
          title="DragonSword Awakening Best Team Comps"
          description="Compare the teams I actually used for boss learning, high-input action play, Dana replacement and survival, then follow the rotation, investment and Signal rules for each lineup."
          gameTitle="DragonSword Awakening"
          gameHref="/dragonsword-awakening"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 4, 2026"
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