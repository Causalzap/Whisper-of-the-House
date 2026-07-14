import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AscendToZeroStage2DesertContent from "@/data/ascend-to-zero/how-to-unlock-stage-2-desert.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ascend-to-zero`;
const pageUrl = `${hubUrl}/how-to-unlock-stage-2-desert`;

const imageUrls = [
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-terrae-motus-stage-2-exit.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-terrae-motus-level-20000.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-level-two-dialogue-choice.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-desert-level-20000-objective.webp`,
  `${siteUrl}/images/ascend-to-zero/ascend-to-zero-desert-first-room-level-20000.webp`,
];

const toc = [
  {
    id: "three-level-20000-checks",
    label: "The three Lv.20,000 checks",
  },
  {
    id: "exact-unlock-route",
    label: "Exact Stage 2 unlock route",
  },
  {
    id: "do-not-return-to-bunker",
    label: "Do not return to the Bunker",
  },
  {
    id: "level-two-dialogue",
    label: "Level Two dialogue choice",
  },
  {
    id: "desert-level-objective",
    label: "Desert Lv.20,000 objective",
  },
  {
    id: "first-desert-room",
    label: "First Desert room",
  },
  {
    id: "stage-two-stuck",
    label: "Why Stage 2 looks locked",
  },
  {
    id: "what-to-do-next",
    label: "What to do next",
  },
  {
    id: "achievement-confirmation",
    label: "Achievement confirmation",
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
    href: "/ascend-to-zero",
    label: "Ascend to ZERO Guide Hub",
  },
  {
    href: "/ascend-to-zero/best-builds",
    label: "Best Builds & Avatar Tier List",
  },
  {
    href: "/ascend-to-zero/achievements-guide",
    label: "All 58 Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Ascend to ZERO Stage 2 & Desert Unlock Guide",
  description:
    "Defeat Terrae Motus, use the correct EXIT, choose the Level Two dialogue, and learn why the Desert Lv.20,000 objective is not a prerequisite.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: "Ascend to ZERO Stage 2 & Desert Unlock Guide",
    description:
      "Follow the confirmed route from Terrae Motus through the post-boss EXIT, Level Two dialogue, and first Desert Lv.20,000 objective.",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ascend to ZERO EXIT after defeating Terrae Motus and unlocking Stage 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend to ZERO Stage 2 & Desert Unlock Guide",
    description:
      "Defeat Terrae Motus, use the correct EXIT, choose the Level Two dialogue, and complete the first Desert objective.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "How do I unlock Stage 2 in Ascend to ZERO?",
    answer:
      "Reach the Central Control Room, defeat Terrae Motus, and use the EXIT after the boss. Confirm that you want to continue beyond the Institute.",
  },
  {
    question: "Do I need to be Level 20,000 before fighting Terrae Motus?",
    answer:
      "No. One confirmed approach reached the Level 20,000 Central Control Room at Level 19,803. The displayed number is a route recommendation rather than an exact entry requirement.",
  },
  {
    question: "Do I need to be Level 20,000 before entering the Desert?",
    answer:
      "No. Reach Level 20,000 in the Desert Zone is an objective given after the Desert has already opened.",
  },
  {
    question: "Is the Central Control Room boss Terrae Motus?",
    answer:
      "Yes. The Central Control Room is the Level 20,000-marked boss route, and Terrae Motus is the boss encountered inside it.",
  },
  {
    question: "Where is the Stage 2 button in the Bunker?",
    answer:
      "There is no separate Bunker button for the first Stage 2 transition. Walk through the EXIT after defeating Terrae Motus.",
  },
  {
    question: "Which dialogue option continues to Level Two?",
    answer:
      "Choose I will save the world from destruction when Mimesis asks whether you want to press on beyond the Institute.",
  },
  {
    question: "Why did the Desert Level 20,000 objective complete immediately?",
    answer:
      "Your current level already met or exceeded Level 20,000 when the objective appeared, so the game completed it automatically.",
  },
  {
    question: "Why am I below Level 20,000 in the first Desert room?",
    answer:
      "That is allowed. Stage 2 can open below Level 20,000, and the missing levels can be gained from enemies inside the Desert.",
  },
  {
    question: "Why can I not return to the Institute after entering the Desert?",
    answer:
      "The run has crossed the Level Two transition. Complete the first Desert objective or let the run end, then improve the next setup in the Bunker.",
  },
  {
    question: "Is One Strike required to unlock Stage 2?",
    answer:
      "No. One Strike is an optional achievement for defeating Terrae Motus with one hit. Any successful Terrae Motus clear can open the post-boss route.",
  },
  {
    question: "What confirms that Terrae Motus counted?",
    answer:
      "Terrae Motus disappears, the post-boss EXIT becomes available, the route continues into Level Two, and End of the Predator unlocks.",
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
          name: "Ascend to ZERO Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Stage 2 and Desert Unlock Guide",
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
      headline: "Ascend to ZERO Stage 2 and Desert Unlock Guide",
      description:
        "This Ascend to ZERO progression guide explains the confirmed route from the Institute to Stage 2. It separates the Level 20,000 Central Control Room marker, the Terrae Motus boss, and the later Reach Level 20,000 in the Desert Zone objective; shows where to find the post-boss EXIT; identifies the correct Level Two dialogue choice; explains why there is no Stage 2 button in the Underground Bunker; and provides practical fixes for players who enter the Desert below the recommended level or believe the new stage remains locked.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-14",
      dateModified: "2026-07-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Ascend to ZERO",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Stage 2",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Desert unlock",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Terrae Motus",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Central Control Room",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Level 20,000",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO Level Two dialogue",
        },
        {
          "@type": "Thing",
          name: "Ascend to ZERO post-boss EXIT",
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
          title="How to Unlock Stage 2 and the Desert in Ascend to ZERO"
          description="Defeat Terrae Motus, walk through the correct EXIT, choose the Level Two dialogue, and complete the Desert objective without confusing the three different Lv.20,000 labels."
          gameTitle="Ascend to ZERO"
          gameHref="/ascend-to-zero"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AscendToZeroStage2DesertContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}