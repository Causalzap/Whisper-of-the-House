import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import BillsMustBePaidGuideContent from "@/data/bills-must-be-paid/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bills-must-be-paid`;

const imageUrls = [
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-spawn-bottleneck-empty-desk.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bankruptcy-40-legacy-points.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-pay-your-taxes-ending.webp`,
];

const toc = [
  {
    id: "what-is-the-game",
    label: "What kind of game is it?",
  },
  {
    id: "core-loop",
    label: "How progression works",
  },
  {
    id: "first-cycle",
    label: "First-cycle plan",
  },
  {
    id: "desk-diagnosis",
    label: "Read the desk",
  },
  {
    id: "bill-reserve",
    label: "Protect the next bill",
  },
  {
    id: "bankruptcy",
    label: "Use bankruptcy correctly",
  },
  {
    id: "ending-post-game",
    label: "Ending and post-game",
  },
  {
    id: "guide-paths",
    label: "Choose a detailed guide",
  },
  {
    id: "faq",
    label: "Beginner FAQ",
  },
];

export const metadata: Metadata = {
  title: "Bills Must Be Paid Guide, Tips & Beginner Route",
  description:
    "Learn the core loop, first-cycle priorities, bill reserves, bankruptcy timing, desk bottlenecks, and where to find every detailed guide.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Bills Must Be Paid Guide, Tips & Beginner Route",
    description:
      "Start with the right upgrades, protect bill money, diagnose desk bottlenecks, use bankruptcy as progression, and avoid resetting too early.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Bills Must Be Paid desk with no Piggies remaining while usable Stamina is still available",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Must Be Paid Beginner Guide",
    description:
      "Understand the first cycle, upgrade bottlenecks, bill reserves, bankruptcy, Prestige, and the correct post-game order.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Is there one best fixed Skill Tree build in Bills Must Be Paid?",
    answer:
      "No. The correct purchase changes with the current desk bottleneck. Buy Damage when Piggies stop dying, Spawn when the desk becomes empty, Stamina when runs end with targets remaining, and Loot when the build kills consistently but income still falls behind the bills.",
  },
  {
    question: "Is bankruptcy a failed run in Bills Must Be Paid?",
    answer:
      "Not necessarily. Bankruptcy converts the value of paid bills into permanent Legacy Points. A controlled reset can be more useful than spending several additional days in a cycle that cannot reach its next required payment.",
  },
  {
    question:
      "Should I pay every bill as early as possible in Bills Must Be Paid?",
    answer:
      "No. Early payments become useful after permanent Rings reward days paid early and the current build is already ahead. During a struggling cycle, keeping additional upgrade days can be more valuable than activating a small early-payment bonus.",
  },
  {
    question:
      "Can I continue playing after paying Taxes in Bills Must Be Paid?",
    answer:
      "Yes. Choose Keep Playing after the final Taxes sequence. This preserves the profitable late-game build so you can complete the remaining King Piggy Skill Tree branches required for Maxed Out before declaring the final bankruptcy.",
  },
  {
    question:
      "Do I have to complete Bills Must Be Paid in three cycles?",
    answer:
      "No. Three cycles was one completed main-game route, while another full completion took five cycles. Additional bankruptcies do not invalidate the save, so continue from the equivalent progression stage instead of restarting only because the cycle count is higher.",
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
          name: "Bills Must Be Paid Guide",
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
        "Bills Must Be Paid Guide: Beginner Route, Bills, Upgrades and Bankruptcy",
      description:
        "This Bills Must Be Paid guide is the central starting point for the complete guide cluster. It explains the game's short Piggy-smashing run structure, the conflict between spending money on upgrades and protecting the next required bill, and the first-cycle priorities that make later cycles easier. The guide introduces a desk-based upgrade method: an empty desk points toward Starting Piggies or Spawn Rate, surviving high-HP targets point toward Damage or a stronger Hammer, and a run ending with targets remaining points toward Stamina. It also explains how paid bills convert into permanent Legacy Points, why bankruptcy can be a productive reset, when early bill payments are useful, and why Big Toni should be treated as a temporary bridge rather than a long-term source of upgrade money. The final sections cover the King Piggy and Taxes sequence, choosing Keep Playing, finishing the late Skill Tree branches for Maxed Out, and selecting the correct detailed guide for achievements, Prestige, upgrades, bills or the full 100% route.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-30",
      dateModified: "2026-07-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Bills Must Be Paid",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid guide",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid beginner guide",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid tips",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid first cycle",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid upgrade order",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid bankruptcy",
        },
        {
          "@type": "Thing",
          name: "Legacy Points",
        },
        {
          "@type": "Thing",
          name: "Big Toni",
        },
        {
          "@type": "Thing",
          name: "King Piggy",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid post-game",
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
          title="Bills Must Be Paid Guide: How I Survive Each Cycle"
          description="I protect the next bill, read the desk before buying upgrades, use bankruptcy to build permanent strength, and finish the late Skill Tree before the final Prestige reset."
          gameTitle="Bills Must Be Paid"
          gameHref="/bills-must-be-paid"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 30, 2026"
          toc={toc}
        >
          <BillsMustBePaidGuideContent />
        
          
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Bills Must Be Paid"
            heading="Looking for another game after Bills Must Be Paid?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />

      </main>

      <Footer />
    </>
  );
}