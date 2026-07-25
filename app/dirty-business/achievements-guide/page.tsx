import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DirtyBusinessAchievementsGuideContent from "@/data/dirty-business/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dirty-business`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/dirty-business/dirty-business-achievement-corner-office-room-purchase.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-order-penalty-zero.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-achievement-acid-drum-two-cans.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-botanist-daily-fee-balance.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-achievement-believe-feed-unicorn.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-30-lsd-unlock.webp`,
  `${siteUrl}/images/dirty-business/dirty-business-level-38-aircraft-access.webp`,
];

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 75 achievements",
  },
  {
    id: "achievement-roadmap",
    label: "100% roadmap & scope",
  },
  {
    id: "one-save-strategy",
    label: "One-save strategy",
  },
  {
    id: "back-in-business",
    label: "Back in Business",
  },
  {
    id: "acid-worker-dealer-company",
    label: "Acid, staff & Company",
  },
  {
    id: "hidden-and-special",
    label: "Hidden & special",
  },
  {
    id: "lsd-and-banknotes",
    label: "LSD & banknotes",
  },
  {
    id: "overlap-long-counters",
    label: "Overlap long counters",
  },
  {
    id: "hardest-achievements",
    label: "Longest achievements",
  },
  {
    id: "store-trash-object-counters",
    label: "Store, trash & objects",
  },
  {
    id: "aircraft-and-trolley",
    label: "Aircraft & trolley",
  },
  {
    id: "coop-achievements",
    label: "Co-op achievements",
  },
  {
    id: "missing-achievement-checklist",
    label: "Missing achievement?",
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
    href: "/dirty-business/leveling-reputation-unlocks",
    label: "Leveling, Reputation & Key Unlocks",
  },
  {
    href: "/dirty-business/orders-delivery-guide",
    label: "Customer Orders & Delivery Fixes",
  },
  {
    href: "/dirty-business/workers-not-working",
    label: "Botanist Not Working Guide",
  },
  {
    href: "/dirty-business/how-to-make-lsd",
    label: "How to Make the First LSD Sheet",
  },
];

export const metadata: Metadata = {
  title: "Dirty Business Achievements Guide: All 75 & Checklist",
  description:
    "Track all 75 Dirty Business achievements with a searchable checklist, one-save strategy, hidden Level 67 goal, longest grinds, and co-op notes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Dirty Business Achievements Guide: All 75 & Checklist",
    description:
      "Search and track all 75 achievements, follow a one-save strategy, solve Six. Seven., and plan the longest Order, product, aircraft, Store, trash, and trolley grinds.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        alt: "Dirty Business Believe achievement route with the Ice Cream Unicorn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Business Achievements: All 75 & Checklist",
    description:
      "Track all 75 achievements, solve the hidden Level 67 goal, and plan the longest production, aircraft, Order, Store, trash, and trolley counters.",
    images: [imageUrls[4]],
  },
};

const faqEntities = [
  {
    question: "How many achievements are in Dirty Business?",
    answer:
      "The July 2026 Early Access achievement list contains 75 achievements.",
  },
  {
    question: "Is this a verified one-save 100% roadmap?",
    answer:
      "Not yet. It is a one-save strategy designed to overlap the long counters. Every trigger, co-op ownership rule, reset behavior, and late counter has not been verified across all builds.",
  },
  {
    question: "How long does 100% completion take?",
    answer:
      "The current evidence does not support an honest time estimate. The 10,000-Order, 25,000-product, aircraft, trash, and Store counters need measured progress rates.",
  },
  {
    question: "What is the hidden Six. Seven. achievement?",
    answer: "Reach Reputation Level 67.",
  },
  {
    question: "What unlocks Back in Business?",
    answer:
      "The visible description only says Old habits die hard. The exact opening trigger has not been isolated, so the guide does not publish a guessed action.",
  },
  {
    question: "Are any achievements confirmed missable?",
    answer:
      "No confirmed missables are identified by the supplied descriptions, but that is not proof that every one-time trigger, reset, and co-op state is recoverable.",
  },
  {
    question:
      "Does ordering 100 Store items mean 100 separate Store transactions?",
    answer:
      "The description says items, not transactions. The behavior of bulk boxes should be checked against visible achievement progress before a 15,000-item grind.",
  },
  {
    question: "Are Acid dumps and dissolved items the same counter?",
    answer:
      "No. The achievement list has separate milestones for dumps received and items dissolved.",
  },
  {
    question:
      "Should I grind aircraft achievements as soon as access opens?",
    answer:
      "No. Stabilize the aircraft, cargo, fuel, and funding route first, then combine distance, speed, fuel, delivery, and airdrop goals wherever the current system allows it.",
  },
  {
    question: "Does every product sale count toward total products?",
    answer:
      "That should be verified by sales route. Weed, Weapons, LSD, banknotes, Dealer, Company, and aircraft distribution may not all update the broader counter in the same way.",
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
        "Dirty Business Achievements Guide: All 75 Achievements, Searchable Checklist, and One-Save Strategy",
      description:
        "This Dirty Business achievements guide includes a searchable checklist for all 75 Early Access achievements, a one-save strategy for overlapping counters, the hidden Six. Seven. Level 67 solution, Back in Business scope, Acid Disposal, Worker, Dealer, Company, Unicorn, LSD, banknote, Store, trash, object, aircraft, cargo, airdrop, fuel, trolley, Order, product, money, and Reputation routes.",
      image: imageUrls,
      inLanguage: "en",
      isAccessibleForFree: true,
      datePublished: "2026-07-25",
      dateModified: "2026-07-25",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Dirty Business",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Dirty Business achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business all 75 achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business achievement checklist",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Six. Seven. achievement",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Back in Business achievement",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Believe achievement",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Acid Disposal achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business Worker, Dealer, and Company achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business LSD and banknote achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business aircraft achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business cargo and airdrop achievements",
        },
        {
          "@type": "Thing",
          name: "Dirty Business platform trolley achievements",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
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
          title="Dirty Business Achievements Guide: All 75 & Checklist"
          description="Search and track all 75 achievements, follow a one-save strategy for overlapping counters, solve the hidden Level 67 goal, and plan the longest Order, product, Store, trash, aircraft, and trolley grinds."
          gameTitle="Dirty Business"
          gameHref="/dirty-business"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DirtyBusinessAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}