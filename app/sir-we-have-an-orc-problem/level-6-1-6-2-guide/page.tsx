import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SirWeHaveAnOrcProblemLevels6162GuideContent from "@/data/sir-we-have-an-orc-problem/level-6-1-6-2-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sir-we-have-an-orc-problem`;
const pageUrl = `${hubUrl}/level-6-1-6-2-guide`;

const imageUrls = [
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-6-1-starting-layout.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-6-1-final-wave.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-6-1-clear.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-6-2-survived-not-perfect.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-6-2-perfect-clear.webp`,
];

const toc = [
  {
    id: "before-level-6-1",
    label: "Prepare for Level 6.1",
  },
  {
    id: "level-6-1-first-run",
    label: "First Level 6.1 test",
  },
  {
    id: "level-6-1-routes",
    label: "Fix the outer routes",
  },
  {
    id: "level-6-1-pressure",
    label: "Final Level 6.1 pressure",
  },
  {
    id: "level-6-1-clear",
    label: "Level 6.1 & Four-tified",
  },
  {
    id: "level-6-2-first-test",
    label: "First Level 6.2 attempt",
  },
  {
    id: "level-6-2-pressure",
    label: "Level 6.2 pressure pattern",
  },
  {
    id: "ability-timing",
    label: "Final-wave ability timing",
  },
  {
    id: "survived-not-perfect",
    label: "Survived but not perfect",
  },
  {
    id: "level-6-2-perfect-clear",
    label: "Level 6.2 perfect clear",
  },
  {
    id: "achievements",
    label: "Against All Odds & Four-tified",
  },
  {
    id: "tower-only-route",
    label: "No-ability route",
  },
  {
    id: "after-level-6-2",
    label: "What to do after Level 6.2",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
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
    href: "/sir-we-have-an-orc-problem/best-turrets-builds",
    label: "Best Turrets, Builds & Tier List",
  },
  {
    href: "/sir-we-have-an-orc-problem/best-upgrades-farming",
    label: "Best Upgrades & Farming",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-3-2-guide",
    label: "Level 3.2 Guide",
  },
];

export const metadata: Metadata = {
  title: "Sir, We Have an Orc Problem Levels 6.1 & 6.2 Guide",
  description:
    "Clear Levels 6.1 and 6.2 by fixing weak outer routes, saving Nuke or Cryo Beam for the final rush, and separating survival from a perfect clear.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Sir, We Have an Orc Problem Level 6.2 Perfect Clear Guide",
    description:
      "Fix Level 6.1 outer-route leaks, preserve emergency abilities for the Level 6.2 acceleration, and understand Four-tified and Against All Odds.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        width: 1280,
        height: 720,
        alt: "Sir We Have an Orc Problem Level 6.2 perfect clear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sir, We Have an Orc Problem Levels 6.1 & 6.2 Guide",
    description:
      "Diagnose Level 6.1 route leaks, save abilities for the final Level 6.2 rush and separate survival, perfect-clear and achievement conditions.",
    images: [imageUrls[4]],
  },
};

const faqEntities = [
  {
    question:
      "Does Against All Odds require a perfect Level 6.2 clear?",
    answer:
      "The listed achievement condition only requires surviving Level 6.2. That is different from the tested final-progression result, which completed only after no enemy escaped.",
  },
  {
    question:
      "Does Four-tified allow active abilities?",
    answer:
      "No. The listed condition requires surviving Level 6.1 with only four tower types and no abilities.",
  },
  {
    question:
      "Does Four-tified require a perfect clear?",
    answer:
      "The achievement text says to survive Level 6.1 and does not explicitly require killing every enemy. Wait for the achievement popup before treating a restricted run as confirmed.",
  },
  {
    question:
      "Do passive upgrades invalidate Four-tified?",
    answer:
      "The listed condition restricts tower types and abilities, not the passive upgrade tree. Every passive branch has not been independently verified against the trigger, so keep the run within the explicit restrictions and confirm success from the achievement popup.",
  },
  {
    question:
      "Does clearing Level 6.2 unlock Endless mode?",
    answer:
      "An Endless unlock was not verified after the tested perfect clear. Do not assume the mode exists or unlocks until it appears in the current game build or is confirmed by the developer.",
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
          name: "Levels 6.1 and 6.2 Guide",
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
        "Sir, We Have an Orc Problem Levels 6.1 and 6.2 Perfect Clear Guide",
      description:
        "This Sir, We Have an Orc Problem endgame guide explains how to clear Levels 6.1 and 6.2 without repeating the general turret and upgrade material covered elsewhere in the cluster. It diagnoses the top-left and bottom-left Level 6.1 routes, identifies the last-1,000-enemy pressure phase, separates full-health leaks from damaged stragglers and explains when the build needs coverage rather than more global damage. For Level 6.2, it divides the battle into an early route check, a stable middle phase and a final acceleration, then shows why saving Nuke, Cryo Beam or another emergency answer for the last permanent firing line can matter more than another full rebuild. It also distinguishes normal survival, a perfect-clear final completion, Against All Odds and the four-tower, no-ability Four-tified achievement.",
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
          name: "Sir, We Have an Orc Problem Level 6.1",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem Level 6.2",
        },
        {
          "@type": "Thing",
          name: "Level 6.2 perfect clear",
        },
        {
          "@type": "Thing",
          name: "Level 6.2 100 percent clear",
        },
        {
          "@type": "Thing",
          name: "Level 6.2 final acceleration",
        },
        {
          "@type": "Thing",
          name: "Nuke ability timing",
        },
        {
          "@type": "Thing",
          name: "Cryo Beam timing",
        },
        {
          "@type": "Thing",
          name: "Against All Odds achievement",
        },
        {
          "@type": "Thing",
          name: "Four-tified achievement",
        },
        {
          "@type": "Thing",
          name: "Level 6.1 four tower types",
        },
        {
          "@type": "Thing",
          name: "Level 6.1 no abilities",
        },
        {
          "@type": "Thing",
          name: "Tower-only route",
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
          title="How I Cleared Levels 6.1 and 6.2 Without Rebuilding Everything"
          description="I fix the weak outer route on Level 6.1, preserve the layout when it already reaches the end, and save my strongest burst and control tools for the final Level 6.2 acceleration."
          gameTitle="Sir, We Have an Orc Problem"
          gameHref="/sir-we-have-an-orc-problem"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SirWeHaveAnOrcProblemLevels6162GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}