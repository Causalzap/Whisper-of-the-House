import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SirWeHaveAnOrcProblemLevel32GuideContent from "@/data/sir-we-have-an-orc-problem/level-3-2-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sir-we-have-an-orc-problem`;
const pageUrl = `${hubUrl}/level-3-2-guide`;

const imageUrls = [
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-2-pre-battle-route-overview.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-2-bottom-leak.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-2-top-lane-weak-point.webp`,
];

const toc = [
  {
    id: "level-3-2-quick-facts",
    label: "Level 3.2 quick facts",
  },
  {
    id: "map-layout",
    label: "Read the three routes",
  },
  {
    id: "enemy-pressure",
    label: "Enemy and wave pressure",
  },
  {
    id: "bottom-route",
    label: "Fix the bottom route",
  },
  {
    id: "middle-route",
    label: "Stop overbuilding the middle",
  },
  {
    id: "top-route",
    label: "Reinforce the top route",
  },
  {
    id: "farm-or-reposition",
    label: "Farm or reposition?",
  },
  {
    id: "final-clear-route",
    label: "Final clear sequence",
  },
  {
    id: "after-level-3-2",
    label: "What to do after Level 3.2",
  },
  {
    id: "fresh-save-route",
    label: "Fresh-save route",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/sir-we-have-an-orc-problem",
    label: "Sir, We Have an Orc Problem Guide Hub",
  },
  {
    href: "/sir-we-have-an-orc-problem/best-upgrades-farming",
    label: "Best Upgrades & Farming",
  },
  {
    href: "/sir-we-have-an-orc-problem/best-turrets-builds",
    label: "Best Turrets, Builds & Tier List",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-6-1-6-2-guide",
    label: "Levels 6.1 & 6.2 Guide",
  },
];

export const metadata: Metadata = {
  title: "Sir, We Have an Orc Problem Level 3.2 Guide",
  description:
    "Beat Level 3.2 by fixing the hidden bottom route, avoiding an overbuilt middle, reinforcing the top, and knowing when to farm or reposition.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Sir, We Have an Orc Problem Level 3.2 Route Guide",
    description:
      "Diagnose the bottom, middle and top routes separately, decide when to farm, and carry the successful Level 3.2 setup into Level 4.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 644,
        height: 472,
        alt: "Sir We Have an Orc Problem Level 3.2 lower route and leak point",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sir, We Have an Orc Problem Level 3.2 Guide",
    description:
      "Fix the overlooked bottom route, stop overbuilding the middle, reinforce the top and know when the stage needs farming instead of repositioning.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question:
      "Is Level 3.2 a good farming stage after I clear it?",
    answer:
      "It can be, but compare it with Level 3.1 instead of assuming the newer stage is automatically better. Use Level 3.2 when it consistently produces the required resource without its longer enemy count reducing resources per minute. Return to a shorter stage when spawn time makes Level 3.2 inefficient.",
  },
  {
    question:
      "Do Silver Orcs change the Level 3.2 build?",
    answer:
      "No. Silver Orcs affect the payout after the corresponding economy upgrade. They do not create another route or require a dedicated Level 3.2 tower placement.",
  },
  {
    question:
      "Should I perfect clear Level 3.2 before moving into Level 4?",
    answer:
      "Only when you need the separate clean-win resource or an unlock tied to killing every enemy. A survival result can still provide normal progression, so do not delay the next stage only to chase a perfect clear that does not fund the next planned purchase.",
  },
  {
    question:
      "Why can the same Level 3.2 layout perform differently?",
    answer:
      "Explosive effects and knockback can change the spacing and position of a group. When one attempt performs unusually badly, repeat the layout once and watch where the enemies were displaced before replacing several towers.",
  },
  {
    question:
      "Should I buy the first upgrade that appears after Level 3.2?",
    answer:
      "No. Test the next stage first. Buy tower count or coverage when the new map exposes a missing firing angle. Buy a combat stat when the existing towers already attack the correct route but leave enemies with low health.",
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
          name: "Sir, We Have an Orc Problem Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Level 3.2 Guide",
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
        "Sir, We Have an Orc Problem Level 3.2 Route and Clear Guide",
      description:
        "This Sir, We Have an Orc Problem Level 3.2 guide explains how to read the map as three separate pressure areas, identify the overlooked bottom route, stop overinvesting in a stable middle pocket and reinforce the top route when it becomes the final source of leaks. It includes a Level 3.2 quick-facts table, practical enemy-pressure phases, a farming-versus-repositioning decision rule, a complete clear sequence and a transition plan for testing the next stage before spending newly unlocked resources.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-29",
      dateModified: "2026-07-29",
      about: [
        {
          "@type": "VideoGame",
          name: "Sir, We Have an Orc Problem",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem Level 3.2",
        },
        {
          "@type": "Thing",
          name: "Level 3.2 route",
        },
        {
          "@type": "Thing",
          name: "Level 3.2 bottom route",
        },
        {
          "@type": "Thing",
          name: "Level 3.2 top route",
        },
        {
          "@type": "Thing",
          name: "Level 3.2 farming",
        },
        {
          "@type": "Thing",
          name: "Level 3 to Level 4 transition",
        },
        {
          "@type": "Thing",
          name: "Level 3.2 perfect clear",
        },
        {
          "@type": "Thing",
          name: "Silver Orcs",
        },
        {
          "@type": "Thing",
          name: "Explosive Orc effects",
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
          title="How I Fixed Every Route on Level 3.2"
          description="I treat the bottom, middle and top as separate problems: cover the hidden lower path first, stop adding damage to a stable middle, and move the next useful tower toward the top when it becomes the final leak."
          gameTitle="Sir, We Have an Orc Problem"
          gameHref="/sir-we-have-an-orc-problem/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SirWeHaveAnOrcProblemLevel32GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}