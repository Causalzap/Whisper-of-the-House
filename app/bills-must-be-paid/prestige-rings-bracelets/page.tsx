import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BillsMustBePaidPrestigeRingsBraceletsContent from "@/data/bills-must-be-paid/prestige-rings-bracelets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/bills-must-be-paid`;
const pageUrl = `${hubUrl}/prestige-rings-bracelets`;

const imageUrls = [
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bankruptcy-40-legacy-points.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-early-payment-attack-speed.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-early-payment-extra-piggy.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-crit-ring.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-damage-ring-iii.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-orb-ring.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-double-loot-ring-one-million.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-prestige-jewelry-achievement.webp`,
];

const toc = [
  {
    id: "legacy-points",
    label: "How Legacy Points work",
  },
  {
    id: "first-prestige",
    label: "First Prestige purchases",
  },
  {
    id: "early-speed-ring",
    label: "Early Speed Ring",
  },
  {
    id: "early-piggy-ring",
    label: "Early Piggy Ring",
  },
  {
    id: "midgame-prestige",
    label: "Mid-game priorities",
  },
  {
    id: "do-not-buy-in-order",
    label: "Do not buy in menu order",
  },
  {
    id: "final-rings",
    label: "Late and final Rings",
  },
  {
    id: "final-reset-order",
    label: "Final Prestige order",
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
    href: "/bills-must-be-paid/best-upgrades-skill-tree",
    label: "Best Upgrades & Skill Tree",
  },
  {
    href: "/bills-must-be-paid/bills-loans-bankruptcy",
    label: "Bills, Loans & Bankruptcy",
  },
  {
    href: "/bills-must-be-paid/achievements-guide",
    label: "All 27 Achievements",
  },
  {
    href: "/bills-must-be-paid/100-percent-walkthrough",
    label: "100% Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "Bills Must Be Paid Prestige, Rings & Bracelets Guide",
  description:
    "Learn how Legacy Points work, what to buy after bankruptcy, when early-payment Rings pay off, and which late Rings should wait until post-game.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Bills Must Be Paid Prestige, Rings & Bracelets",
    description:
      "Choose permanent upgrades by fixing the previous cycle's bottleneck, compare early-payment Rings, and save completion jewelry for the final reset.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[7],
        width: 1172,
        height: 860,
        alt: "Bills Must Be Paid Prestige Jewelry achievement after unlocking every Ring and Bracelet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Must Be Paid Prestige & Rings Guide",
    description:
      "Spend Legacy Points on the permanent Damage, Piggies, Stamina, Loot, Crit, and late Rings that solve the next cycle's real bottleneck.",
    images: [imageUrls[7]],
  },
};

const faqEntities = [
  {
    question:
      "Does $2,015 produce 41 Legacy Points in Bills Must Be Paid?",
    answer:
      "No. The bankruptcy summary awarded 40 Legacy Points for $2,015 in paid bills. Legacy Points are awarded for complete $50 blocks, so the remaining $15 did not create another spendable point.",
  },
  {
    question:
      "Are Early Speed Ring and Early Piggy Ring always worth buying first?",
    answer:
      "No. Both Rings require early bill payments before they provide value. Always-active Damage, Starting Piggies, Stamina or Loot are better first purchases when the new cycle cannot safely pay bills several days early.",
  },
  {
    question:
      "Is Double Loot Ring required to pay all bills in Bills Must Be Paid?",
    answer:
      "No. The main bill sequence can be completed before purchasing the one-million-point Double Loot Ring. It is primarily a post-game completion purchase used to unlock every Ring and Bracelet.",
  },
  {
    question:
      "Should I prestige immediately after paying Taxes in Bills Must Be Paid?",
    answer:
      "Not while Maxed Out is incomplete. Choose Keep Playing, use the profitable late-game build to finish every remaining Skill Tree branch, and only then declare bankruptcy for the remaining permanent jewelry.",
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
          name: "Prestige, Rings and Bracelets",
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
        "Bills Must Be Paid Prestige, Legacy Points, Rings and Bracelets Guide",
      description:
        "This Bills Must Be Paid Prestige guide explains how Legacy Points are calculated from paid bills and how I use each bankruptcy to repair the bottleneck that ended the previous cycle. It covers the first permanent purchase order for Damage, Starting Piggies, Stamina and Loot, along with the conditions that make Early Speed Ring and Early Piggy Ring worthwhile. The mid-game section compares flat and percentage Damage, Crit Ring, Damage Ring III, first-kill Stamina restoration, permanent Loot and early-payment effects without assuming that the Prestige menu should be purchased from left to right. Late-game sections explain how Orb Ring converts direct Critical Hits into bouncing attacks, why Double Loot Ring costs one million Legacy Points, how the strongest-target effect solves a blocked desk and why expensive completion jewelry can wait until after the main ending. The final route keeps playing after Taxes, completes every late King Piggy Skill Tree branch for Maxed Out, then performs the final bankruptcy and unlocks every remaining Ring and Bracelet for Prestige Jewelry.",
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
          name: "Bills Must Be Paid Prestige",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid Legacy Points",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid Rings",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid Bracelets",
        },
        {
          "@type": "Thing",
          name: "Early Speed Ring",
        },
        {
          "@type": "Thing",
          name: "Early Piggy Ring",
        },
        {
          "@type": "Thing",
          name: "Crit Ring",
        },
        {
          "@type": "Thing",
          name: "Damage Ring III",
        },
        {
          "@type": "Thing",
          name: "Orb Ring",
        },
        {
          "@type": "Thing",
          name: "Double Loot Ring",
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
          title="How I Spend Legacy Points Without Wasting a Prestige"
          description="I use each bankruptcy to fix the previous cycle's real bottleneck, buy early-payment Rings only when the build can exploit them, and leave the million-point completion jewelry until after Maxed Out."
          gameTitle="Bills Must Be Paid"
          gameHref="/bills-must-be-paid"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BillsMustBePaidPrestigeRingsBraceletsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}