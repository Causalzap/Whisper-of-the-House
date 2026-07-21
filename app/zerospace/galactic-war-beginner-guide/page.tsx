import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZeroSpaceGalacticWarGuideContent from "@/data/zerospace/galactic-war-beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/zerospace`;
const pageUrl = `${hubUrl}/galactic-war-beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/zerospace/zerospace-galactic-war-choose-alliance.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-galaxy-map.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-capture-points.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-occupation-bonus.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-jump-fuel-cost.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-mission-launch.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-system-mastery.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-system-captured.webp`,
];

const toc = [
  {
    id: "galactic-war-at-a-glance",
    label: "Galactic War at a glance",
  },
  {
    id: "what-is-galactic-war",
    label: "How Galactic War works",
  },
  {
    id: "choose-alliance",
    label: "Alliances",
  },
  {
    id: "read-galaxy-map",
    label: "Galaxy map",
  },
  {
    id: "capture-points",
    label: "Capture Points",
  },
  {
    id: "occupation-bonus",
    label: "Occupation bonuses",
  },
  {
    id: "galactic-resources",
    label: "Resources explained",
  },
  {
    id: "choose-first-system",
    label: "Choose your first system",
  },
  {
    id: "launch-mission",
    label: "Launch a mission",
  },
  {
    id: "personal-progression",
    label: "Progression",
  },
  {
    id: "system-mastery",
    label: "System Mastery",
  },
  {
    id: "commander-xp",
    label: "Commander XP",
  },
  {
    id: "coop-or-ai",
    label: "Co-op or AI",
  },
  {
    id: "common-problems",
    label: "Problems & fixes",
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
    href: "/zerospace/",
    label: "ZeroSpace Guide Hub",
  },
  {
    href: "/zerospace/beginner-guide/",
    label: "ZeroSpace Beginner Guide",
  },
  {
    href: "/zerospace/campaign-walkthrough-choices/",
    label: "ZeroSpace Act 1 Campaign Walkthrough",
  },
  {
    href: "/zerospace/mission-3-arcadia-walkthrough/",
    label: "ZeroSpace Mission 3 Arcadia Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "ZeroSpace Galactic War Guide: Jump Fuel, Mastery & Alliances",
  description:
    "Learn ZeroSpace Galactic War Capture Points, Jump Fuel, System Mastery, alliances, occupation bonuses, Influence, and persistent progression.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "ZeroSpace Galactic War Guide: Capture Points, Resources and Progression",
    description:
      "Understand alliances, system control, Capture Points, Jump Fuel, occupation bonuses, four-level Mastery, Credits, Influence, Co-op, and AI missions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "ZeroSpace Galactic War galaxy map showing allied territory, enemy systems, neutral locations, and contested fronts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroSpace Galactic War Guide: Jump Fuel, Mastery & Alliances",
    description:
      "Learn Capture Points, Jump Fuel, Mastery, alliances, resources, system ownership, and persistent progression in ZeroSpace Galactic War.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "How do Capture Points work in ZeroSpace Galactic War?",
    answer:
      "Each completed mission adds Capture Points to the alliance in the system from which the mission was launched. One victory may only reduce an enemy lead. Ownership changes when the overall Capture Point balance is sufficient, not simply because one mission was completed.",
  },
  {
    question:
      "Does System Mastery reset when another alliance captures the system?",
    answer:
      "No. Earned System Mastery is permanent personal progression. The occupation bonus may disappear when ownership changes, but previously earned Mastery levels remain active.",
  },
  {
    question: "What is Jump Fuel used for in ZeroSpace?",
    answer:
      "Jump Fuel pays for travel between Galactic War systems. It is separate from Hexite and Flux used inside RTS missions. Distant travel can consume enough fuel to delay the next strategic move.",
  },
  {
    question: "What does Influence do in ZeroSpace Galactic War?",
    answer:
      "Influence supports alliance buffs through the selected planet or system menu. It does not improve personal Arsenal items. Credits are used for item upgrades.",
  },
  {
    question:
      "Why did I win a Galactic War mission but not capture the system?",
    answer:
      "A mission victory adds Capture Points, but another alliance may still have the stronger total. The result may reduce an enemy lead or make the system contested without immediately transferring ownership.",
  },
  {
    question:
      "Can I play ZeroSpace Galactic War without another player?",
    answer:
      "Yes. Select Play with AI from the mission panel. It is useful for learning objective order, testing commanders, and practising Normal difficulty before using Play Co-op.",
  },
  {
    question:
      "Does my Galactic War alliance lock the faction I can play?",
    answer:
      "No. Alliance membership determines which side receives your strategic contribution on the galaxy map. The commander and combat faction used inside missions remain separate choices.",
  },
  {
    question:
      "Why can a third alliance capture a system after my alliance takes it?",
    answer:
      "When system ownership changes, stored Capture Point totals are significantly reduced. The weaker post-capture balance allows the third alliance to enter and contest the system more quickly.",
  },
  {
    question:
      "Should I always travel to the system with the best occupation bonus?",
    answer:
      "No. Jump Fuel cost, current location, allied activity, mission difficulty, and the Capture Point balance may matter more. A nearby contested system often provides more immediate strategic value.",
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
          name: "ZeroSpace Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Galactic War Guide",
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
        "ZeroSpace Galactic War Guide: Capture Points, Jump Fuel, Mastery, Alliances and Progression",
      description:
        "This ZeroSpace Galactic War guide explains the persistent cooperative mode from the first alliance choice through system travel, missions, and long-term progression. It covers how Capture Points affect system ownership, why one mission may not capture a planet, how Jump Fuel travel works, the difference between temporary occupation bonuses and permanent four-level System Mastery, and the separate uses of Credits, Influence, Hexite, and Flux. It also explains how to choose a first system, launch Play Co-op or Play with AI missions, develop Commander XP, equip Arsenal items, respond to ownership changes, and fix common travel, capture, and progression problems.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-21",
      dateModified: "2026-07-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ZeroSpace",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Galactic War guide",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Galactic War alliances",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Capture Points",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Jump Fuel",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace System Mastery",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace occupation bonuses",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Commander XP",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Credits",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Influence",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Arsenal items",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Play Co-op",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Play with AI",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Galactic War progression",
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
          title="ZeroSpace Galactic War Guide: Capture Points, Jump Fuel and Progression"
          description="Learn how I choose an alliance and first system, spend Jump Fuel, read Capture Points, separate occupation bonuses from permanent Mastery, and fix missions or travel that appear not to work."
          gameTitle="ZeroSpace"
          gameHref="/zerospace/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZeroSpaceGalacticWarGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}