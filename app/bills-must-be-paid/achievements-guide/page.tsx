import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BillsMustBePaidAchievementsGuideContent from "@/data/bills-must-be-paid/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/bills-must-be-paid`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-strong-start-requirement.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-piggy-shuffle-correct-piggy.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-big-tony-loan-terms.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-super-jackpot-achievement.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-coin-collector-achievement.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-pay-your-taxes-ending.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-maxed-out-achievement.webp`,
];

const toc = [
  {
    id: "achievement-checklist",
    label: "All 27 achievements",
  },
  {
    id: "accuracy-achievements",
    label: "Accuracy & first-hit achievements",
  },
  {
    id: "gambling-achievements",
    label: "Gambling achievements",
  },
  {
    id: "loan-achievements",
    label: "Big Toni achievements",
  },
  {
    id: "cycle-achievements",
    label: "Bill & money achievements",
  },
  {
    id: "super-jackpot",
    label: "Super Jackpot",
  },
  {
    id: "collection-achievements",
    label: "Piggies, Coins & Shop",
  },
  {
    id: "freedom-ending",
    label: "Freedom ending",
  },
  {
    id: "post-game-achievements",
    label: "Maxed Out & Prestige Jewelry",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/bills-must-be-paid",
    label: "Bills Must Be Paid Guide Hub",
  },
  {
    href: "/bills-must-be-paid/100-percent-walkthrough",
    label: "100% Walkthrough",
  },
  {
    href: "/bills-must-be-paid/best-upgrades-skill-tree",
    label: "Best Upgrades & Skill Tree",
  },
  {
    href: "/bills-must-be-paid/prestige-rings-bracelets",
    label: "Prestige, Rings & Bracelets",
  },
  {
    href: "/bills-must-be-paid/bills-loans-bankruptcy",
    label: "Bills, Loans & Bankruptcy",
  },
];

export const metadata: Metadata = {
  title: "Bills Must Be Paid Achievements Guide – All 27",
  description:
    "Unlock all 27 achievements with routes for accuracy, Piggy Shuffle, Big Toni, Super Jackpot, collections, Maxed Out, and Prestige Jewelry.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Bills Must Be Paid All 27 Achievements Guide",
    description:
      "Complete every achievement in a safe order, including Strong Start, Piggy Shuffle, Super Jackpot, Freedom, Maxed Out, and Prestige Jewelry.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[6],
        width: 1984,
        height: 1520,
        alt: "Bills Must Be Paid Maxed Out achievement after purchasing every Skill Tree upgrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Must Be Paid Achievements Guide",
    description:
      "Follow a complete route for all 27 achievements without risking bill money or resetting before the post-game objectives are complete.",
    images: [imageUrls[6]],
  },
};

const faqEntities = [
  {
    question:
      "Do achievement counters continue across cycles in Bills Must Be Paid?",
    answer:
      "Yes. Cumulative goals such as paid bills and destroyed Piggies continue progressing after bankruptcy. Coins and permanent jewelry also remain, while cash, Hammers, normal Skill Tree upgrades, gadgets and current Piggy progression reset for the new cycle.",
  },
  {
    question:
      "Does All or Nothing require me to win the gamble in Bills Must Be Paid?",
    answer:
      "No. The achievement only requires going all in. I attempt it after the next bill is protected and when the remaining wallet is small enough that losing will not damage a productive cycle.",
  },
  {
    question:
      "Can I finish achievements after paying all the bills in Bills Must Be Paid?",
    answer:
      "Yes. After paying Taxes, choose Keep Playing. This preserves the late-game build so you can complete remaining Skill Tree upgrades, collect anything still missing and prepare the final bankruptcy for Prestige Jewelry.",
  },
  {
    question:
      "Should I abandon a run after losing perfect accuracy?",
    answer:
      "Only while working on Not a Single Miss and Twice as Precise. After those two achievements unlock, a missed swing does not block the remaining completion route, so profitable runs should continue.",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
        "Bills Must Be Paid Achievements Guide: How to Unlock All 27",
      description:
        "This Bills Must Be Paid achievements guide provides a complete checklist and a practical unlock order for all 27 achievements. It explains how to complete Not a Single Miss and Twice as Precise before Attack Speed makes the Hammer difficult to control, how to prepare the opening pair required for Strong Start, and how to create a three-Piggy Multismasher setup without relying on high-HP targets. It also covers safe timing for Double or Nothing, All or Nothing and Piggy Shuffle, the correct way to take and repay one Big Toni loan, and the difference between single-run earnings and the $1 million wallet requirement. Late-game sections explain the Super Jackpot node, Piggy Bank Collector, Bought It All, Coin Collector, King Piggy, the final Taxes payment, Keep Playing, the hidden late Skill Tree branches required for Maxed Out and the final bankruptcy used to unlock every Ring and Bracelet for Prestige Jewelry.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-30",
      dateModified: "2026-07-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Bills Must Be Paid",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid achievements",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid all 27 achievements",
        },
        {
          "@type": "Thing",
          name: "Not a Single Miss achievement",
        },
        {
          "@type": "Thing",
          name: "Strong Start achievement",
        },
        {
          "@type": "Thing",
          name: "Multismasher achievement",
        },
        {
          "@type": "Thing",
          name: "Eyes on the Piggy achievement",
        },
        {
          "@type": "Thing",
          name: "Big Toni loan achievements",
        },
        {
          "@type": "Thing",
          name: "Super Jackpot achievement",
        },
        {
          "@type": "Thing",
          name: "Piggy Bank Collector achievement",
        },
        {
          "@type": "Thing",
          name: "Coin Collector achievement",
        },
        {
          "@type": "Thing",
          name: "Freedom achievement",
        },
        {
          "@type": "Thing",
          name: "Maxed Out achievement",
        },
        {
          "@type": "Thing",
          name: "Prestige Jewelry achievement",
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
          title="How I Unlock All 27 Achievements Without Ruining a Good Cycle"
          description="I complete the accuracy challenges while the Hammer is slow, use disposable money for gambling and Big Toni, let cumulative goals carry across bankruptcies, and save Maxed Out and Prestige Jewelry for the post-game."
          gameTitle="Bills Must Be Paid"
          gameHref="/bills-must-be-paid"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BillsMustBePaidAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}