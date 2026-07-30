import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BillsMustBePaid100PercentWalkthroughContent from "@/data/bills-must-be-paid/100-percent-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/bills-must-be-paid`;
const pageUrl = `${hubUrl}/100-percent-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bankruptcy-40-legacy-points.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bail-bond-250000-five-days.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-maxed-out-achievement.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-prestige-jewelry-achievement.webp`,
];

const toc = [
  {
    id: "route-overview",
    label: "100% route overview",
  },
  {
    id: "cycle-one",
    label: "Cycle 1",
  },
  {
    id: "cycle-two",
    label: "Cycle 2",
  },
  {
    id: "cycle-three",
    label: "Cycle 3",
  },
  {
    id: "finish-collections",
    label: "Finish Piggies, Shop & Coins",
  },
  {
    id: "king-piggy",
    label: "King Piggy",
  },
  {
    id: "post-game",
    label: "Post-game Skill Tree",
  },
  {
    id: "final-prestige",
    label: "Final Prestige",
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
    href: "/bills-must-be-paid/achievements-guide",
    label: "All 27 Achievements",
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
  title: "Bills Must Be Paid 100% Walkthrough & Completion Route",
  description:
    "Follow a cycle-by-cycle 100% route and finish every Piggy, Shop item, Coin, Skill Tree upgrade, Ring, Bracelet, and all 27 achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Bills Must Be Paid 100% Walkthrough & Final Route",
    description:
      "Use a complete cycle route to handle early achievements, permanent upgrades, every collection, King Piggy, the Skill Tree and final Prestige.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1172,
        height: 860,
        alt: "Bills Must Be Paid Prestige Jewelry achievement after unlocking every Ring and Bracelet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Must Be Paid 100% Walkthrough",
    description:
      "Complete the main bills, all collections, King Piggy, Maxed Out and Prestige Jewelry in the correct cycle order.",
    images: [imageUrls[3]],
  },
};

const faqEntities = [
  {
    question:
      "Do I have to finish Bills Must Be Paid in three cycles for 100% completion?",
    answer:
      "No. Three cycles was one completed main-game route, but another run reached 100% in five cycles. Extra bankruptcies do not make the achievements or collections missable, so continue from the equivalent progression stage rather than restarting the save.",
  },
  {
    question:
      "Do all Piggies need to reach maximum level for Piggy Bank Collector?",
    answer:
      "No. Piggy Bank Collector requires every Piggy Bank to be unlocked. A completed 100% run still had unfinished Piggy levels, so unlocking the final type is the important requirement.",
  },
  {
    question:
      "Can I continue playing after paying Taxes in Bills Must Be Paid?",
    answer:
      "Yes. Choose Keep Playing after the Taxes ending. This preserves the profitable late-game cycle so you can finish the remaining Skill Tree branches before declaring the final bankruptcy.",
  },
  {
    question:
      "Should I declare bankruptcy immediately after unlocking every Piggy?",
    answer:
      "Not when the current cycle is already profitable. Piggy progression resets at bankruptcy, while the remaining Shop purchases and Skill Tree upgrades are easier to fund with the existing late-game build.",
  },
  {
    question:
      "What should I do if my cycle count is higher than the walkthrough?",
    answer:
      "Continue from the equivalent stage. A later cycle usually has stronger permanent jewelry and can be easier. The critical order is to complete the Skill Tree before the final bankruptcy, then use the resulting Legacy Points to unlock the remaining Rings and Bracelets.",
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
          name: "100% Walkthrough",
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
        "Bills Must Be Paid 100% Walkthrough, Cycle Route and Completion Order",
      description:
        "This Bills Must Be Paid 100% walkthrough organizes the full completion route by cycle instead of treating every unlock as an immediate objective. It explains how I use Cycle 1 for accuracy achievements and the first Legacy Points, Cycle 2 for Strong Start, Multismasher, Piggy Shuffle and the Big Toni achievements, and Cycle 3 for every Piggy Bank, every Shop item, the Coin Collection and the main ending. It also covers the King Piggy damage check, why I choose Keep Playing after the final Taxes payment, how I find the late Skill Tree branches required for Maxed Out, and why the last bankruptcy must happen only after the full Skill Tree is complete. The final step uses the resulting Legacy Points to unlock every remaining Ring and Bracelet for Prestige Jewelry and all 27 achievements.",
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
          name: "Bills Must Be Paid 100% walkthrough",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid completion route",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid cycle guide",
        },
        {
          "@type": "Thing",
          name: "Piggy Bank Collector",
        },
        {
          "@type": "Thing",
          name: "Bought It All",
        },
        {
          "@type": "Thing",
          name: "Coin Collector",
        },
        {
          "@type": "Thing",
          name: "King Piggy",
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
        {
          "@type": "Thing",
          name: "Rings and Bracelets",
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
          title="How I Reached 100% Without Wasting the Final Cycle"
          description="I use the early cycles to build permanent power and clear awkward achievements, finish every collection during the winning cycle, keep playing after Taxes, and complete the Skill Tree before the final Prestige."
          gameTitle="Bills Must Be Paid"
          gameHref="/bills-must-be-paid"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BillsMustBePaid100PercentWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}