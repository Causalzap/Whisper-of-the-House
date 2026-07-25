import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DirtyBusinessLevelingGuideContent from "@/data/dirty-business/leveling-reputation-unlocks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dirty-business`;
const pageUrl = `${hubUrl}/leveling-reputation-unlocks`;

const imageUrls = [
  `${siteUrl}/images/dirty-business/dirty-business-order-penalty-zero.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-5-weapon-printing-unlock.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-13-acid-disposal-unlock.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-15-worker-assignments.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-30-lsd-unlock.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-botanist-daily-fee-balance.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-38-aircraft-access.webp`,
];

const toc = [
  {
    id: "how-reputation-works",
    label: "How Reputation works",
  },
  {
    id: "key-unlocks",
    label: "Key Reputation unlocks",
  },
  {
    id: "levels-1-5",
    label: "Levels 1–5",
  },
  {
    id: "levels-5-13",
    label: "Levels 5–13",
  },
  {
    id: "levels-13-15",
    label: "Levels 13–15",
  },
  {
    id: "levels-15-22",
    label: "Levels 15–22",
  },
  {
    id: "levels-22-30",
    label: "Levels 22–30",
  },
  {
    id: "levels-30-38",
    label: "Levels 30–38",
  },
  {
    id: "levels-38-100",
    label: "Levels 38–100",
  },
  {
    id: "buy-now-or-wait",
    label: "Buy now or wait?",
  },
  {
    id: "solo-coop",
    label: "Solo vs co-op",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/dirty-business",
    label: "Dirty Business Guide Hub",
  },
  {
    href: "/dirty-business/orders-delivery-guide",
    label: "Orders, Boxes & Delivery Fixes",
  },
  {
    href: "/dirty-business/workers-not-working",
    label: "Workers Not Working Guide",
  },
  {
    href: "/dirty-business/how-to-make-lsd",
    label: "How to Make the First LSD Sheet",
  },
  {
    href: "/dirty-business/achievements-guide",
    label: "All 75 Achievements",
  },
];

export const metadata: Metadata = {
  title: "Dirty Business Leveling Guide: Reputation & Key Unlocks",
  description:
    "Level from 1–38 in Dirty Business with clean-order Reputation data, key unlocks, Worker costs, LSD timing, aircraft access, and buy-or-wait decisions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Dirty Business Leveling Guide: Reputation Route & Unlocks",
    description:
      "Follow a stable Level 1–38 route using clean Orders, parallel production, Worker automation, LSD Synthesising, and bottleneck-based purchases.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Dirty Business clean order summary showing Reputation and zero penalties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Business Leveling & Reputation Guide",
    description:
      "Use clean Orders, key unlocks, Worker costs, parallel production, LSD, and aircraft access to build a stable Level 1–38 route.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "What is the most consistent way to gain Reputation?",
    answer:
      "Use clean customer Orders supported by products already in stock, and keep different production timers running in parallel. The current data does not prove one universal fastest product by Reputation per minute.",
  },
  {
    question: "Do larger Orders always give more Reputation?",
    answer:
      "The Murkwood OG sample scaled from 3 Reputation for one Pack to 6 for two and 9 for three. Other products and qualities may use different displayed values.",
  },
  {
    question: "Do penalties reduce Reputation as well as money?",
    answer:
      "Yes in the captured comparison. The wrong-quality batch finished at 18 Reputation instead of the 24-Reputation clean sample and showed 33.3% Penalties.",
  },
  {
    question: "Should I accept only large Orders?",
    answer:
      "No. A small clean Order can still be useful when it clears leftover stock, finishes the current level, or prevents a product line from sitting idle.",
  },
  {
    question: "Is the first Botanical Intern free?",
    answer:
      "The Staffing Hub showed a Hiring Cost of 0 and a Daily Fee of 300. The Worker still needs balance, supplies, tasks, and Product Rack space.",
  },
  {
    question: "Is the Level 32 Botanical Recruit automatically better value?",
    answer:
      "No. It costs 18,000 to hire and 420 per day, compared with 0 and 300 for the Intern. Upgrade when Worker speed limits a fully supplied route.",
  },
  {
    question: "Does reaching Level 38 immediately give me a working aircraft?",
    answer:
      "No. Level 38 opens the next access check, but the relevant tutorial and location setup still have to be completed.",
  },
  {
    question: "What level does Cash Forging unlock?",
    answer:
      "Available Early Access progression screens conflict between Level 40 and Level 48. Check the current Progression or Tutorial UI in the installed build before planning around one fixed level.",
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
          name: "Dirty Business Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Leveling and Reputation Guide",
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
        "Dirty Business Leveling Guide: Reputation Route, Worker Costs, and Key Unlocks",
      description:
        "This Dirty Business leveling guide covers a stable Level 1–38 Reputation route and a long-term Level 38–100 operating strategy. It uses clean-order samples, penalty comparisons, key unlock levels, Worker hiring and daily fees, parallel Weed and Weapon production, Acid Disposal, LSD Synthesising, Companies, and aircraft access. It also explains when storage, Workers, Gunsmiths, Dealers, Slug capacity, or processing capacity are worth buying.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-25",
      dateModified: "2026-07-25",
      about: [
        {
          "@type": "VideoGame",
          name: "Dirty Business",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Dirty Business leveling guide",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Reputation guide",
        },
        {
          "@type": "Thing",
          name: "Dirty Business key unlock levels",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Weapon Printing",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Acid Disposal",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker Assignments",
        },
        {
          "@type": "Thing",
          name: "Botanical Intern",
        },
        {
          "@type": "Thing",
          name: "Botanical Recruit",
        },
        {
          "@type": "Thing",
          name: "Botanical Assistant",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Dealer",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Gunsmith",
        },
        {
          "@type": "Thing",
          name: "Dirty Business LSD Synthesising",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Companies",
        },
        {
          "@type": "Thing",
          name: "Dirty Business aircraft access",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Cash Forging",
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
          title="How I Level Reputation in Dirty Business"
          description="Follow a stable Level 1–38 route built around clean Orders, overlapping production timers, key unlocks, Worker costs, LSD Synthesising, and purchases that remove real bottlenecks."
          gameTitle="Dirty Business"
          gameHref="/dirty-business"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DirtyBusinessLevelingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}