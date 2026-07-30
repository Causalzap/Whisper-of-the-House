import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BillsMustBePaidBillsLoansBankruptcyContent from "@/data/bills-must-be-paid/bills-loans-bankruptcy.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/bills-must-be-paid`;
const pageUrl = `${hubUrl}/bills-loans-bankruptcy`;

const imageUrls = [
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-early-payment-extra-piggy.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-early-payment-attack-speed.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bail-bond-250000-five-days.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bankruptcy-40-legacy-points.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-bankruptcy-keeps-rings-coins.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-big-tony-loan-terms.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-big-tony-daily-cut.webp`,
];

const toc = [
  {
    id: "protect-the-next-bill",
    label: "Protect the next bill",
  },
  {
    id: "when-to-pay-early",
    label: "When to pay early",
  },
  {
    id: "known-bill-checkpoints",
    label: "Known bill checkpoints",
  },
  {
    id: "legacy-points",
    label: "Legacy Points",
  },
  {
    id: "when-to-declare-bankruptcy",
    label: "When to declare bankruptcy",
  },
  {
    id: "big-toni-loan",
    label: "Big Toni loan rules",
  },
  {
    id: "losing-cycle-route",
    label: "Losing-cycle route",
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
    href: "/bills-must-be-paid/prestige-rings-bracelets",
    label: "Prestige, Rings & Bracelets",
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
  title: "Bills Must Be Paid Loans, Bills & Bankruptcy Guide",
  description:
    "Protect bill money, plan early payments, calculate bankruptcy timing, and avoid Big Toni's daily cut with verified Steam bill checkpoints.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Bills Must Be Paid Bill Guide, Big Toni & Bankruptcy",
    description:
      "Learn when to reserve bill money, pay early, take a Big Toni loan, or declare bankruptcy using real bill deadlines and income checks.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        width: 1214,
        height: 650,
        alt: "Bills Must Be Paid Big Toni loan terms showing interest, daily income cuts and repayment rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Must Be Paid Bills, Loans & Bankruptcy",
    description:
      "Calculate bill income targets, avoid expensive Big Toni cuts, and reset only when the current cycle can no longer recover.",
    images: [imageUrls[5]],
  },
};

const faqEntities = [
  {
    question:
      "Are all bill amounts and deadlines fixed in Bills Must Be Paid?",
    answer:
      "I have not confirmed that across multiple fresh saves. The listed checkpoints come from a completed Steam full-release route, but another clean run is needed to verify whether every intermediate bill name, amount, deadline and order is identical. I use them as progression references rather than a guaranteed master sequence.",
  },
  {
    question:
      "Does paying a bill early create more Legacy Points in Bills Must Be Paid?",
    answer:
      "Not by itself. Legacy Points are calculated from the dollar value of bills paid. Paying the same bill several days early does not increase its listed amount. The benefit comes from enabled cycle effects such as extra Attack Speed or another Piggy on the desk.",
  },
  {
    question:
      "Can I manually declare bankruptcy before missing a bill?",
    answer:
      "Yes, after the first forced bankruptcy introduces the system. I use the manual option when the required daily income is clearly unreachable and no available Hammer, Damage, Loot or Stamina purchase can make the cycle viable.",
  },
  {
    question:
      "Should I spend all remaining cash before declaring bankruptcy?",
    answer:
      "Only when the purchase can help pay another reachable bill. Cash does not carry over, but buying random current-cycle upgrades is also pointless when they cannot increase the paid-bill total before the reset.",
  },
  {
    question:
      "Can Big Toni rescue a cycle that is already far behind?",
    answer:
      "Usually not. Big Toni works best when I am only slightly short of an immediate bill and the next normal run can repay him. His daily cut does not reduce the principal, scales with earnings and can make a badly underpowered cycle even more expensive.",
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
          name: "Bills, Loans and Bankruptcy",
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
        "Bills Must Be Paid Bills, Big Toni Loans, Legacy Points and Bankruptcy Guide",
      description:
        "This Bills Must Be Paid guide explains how I separate bill reserves from upgrade money, decide whether early payment bonuses are worth losing additional upgrade days, calculate the income required before a deadline and recognize when bankruptcy is the faster route forward. It documents verified checkpoints from a completed Steam full-release route, including the opening $20 Water Bill, five paid bills totaling $2,015 for 40 Legacy Points, the $250,000 Bail Bond due in five days and the final Taxes payment after King Piggy. It also explains the one-Legacy-Point-per-$50 conversion, what survives bankruptcy, what resets, and why Big Toni's 5% to 10% daily cut can cost much more than his displayed 10% interest.",
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
          name: "Bills Must Be Paid bills",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid bill deadlines",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid early payment",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid bankruptcy",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid Legacy Points",
        },
        {
          "@type": "Thing",
          name: "Big Toni loan",
        },
        {
          "@type": "Thing",
          name: "Big Toni daily cut",
        },
        {
          "@type": "Thing",
          name: "Bail Bond bill",
        },
        {
          "@type": "Thing",
          name: "Rings and Coin Collection retention",
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
          title="How I Protect Bill Money, Use Big Toni, and Time Bankruptcy"
          description="I separate the next payment from upgrade money, judge whether early-payment bonuses are worth the lost days, compare each deadline with my normal income, and reset before a dead cycle wastes more runs."
          gameTitle="Bills Must Be Paid"
          gameHref="/bills-must-be-paid"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BillsMustBePaidBillsLoansBankruptcyContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}