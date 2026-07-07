import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EsportsManager2026SponsorsBudgetContent from "@/data/esports-manager-2026/sponsors-budget-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/esports-manager-2026/sponsors-budget-guide`;

const imageUrls = [
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-sponsor-objectives-rewards.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-sponsor-major-stage-objective.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-tier-two-sponsor-objective.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-increase-sponsor-count.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-finance-manager-transfer-budget.webp`,
];

const toc = [
  {
    id: "esports-manager-2026-sponsors-budget-guide",
    label: "Sponsors route",
  },
  {
    id: "sponsor-tiers-categories",
    label: "Tiers & categories",
  },
  {
    id: "objective-examples",
    label: "Objectives",
  },
  {
    id: "my-sponsors-tab",
    label: "Six sponsor slots",
  },
  {
    id: "claim-rewards",
    label: "Claim rewards",
  },
  {
    id: "finance-manager",
    label: "Finance Manager",
  },
  {
    id: "sponsor-achievements",
    label: "Achievements",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/esports-manager-2026",
    label: "Esports Manager 2026 Guide Hub",
  },
  {
    href: "/esports-manager-2026/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/esports-manager-2026/scouting-contracts-guide",
    label: "Scouting and Contracts Guide",
  },
  {
    href: "/esports-manager-2026/training-tactics-guide",
    label: "Training and Tactics Guide",
  },
  {
    href: "/esports-manager-2026/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Esports Manager 2026 Sponsors & Budget Guide",
  description:
    "Choose the best Esports Manager 2026 sponsors by objective fit, six slots, income activation, rewards, Finance Manager and transfer budget timing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Esports Manager 2026 Sponsors and Budget Guide",
    description:
      "Learn how sponsor tiers, categories, objectives, six sponsor slots, estimated monthly income, reward claims, Finance Manager, and transfer budget timing work in Esports Manager 2026.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Esports Manager 2026 sponsor contract terms showing sponsor objectives and rewards.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Manager 2026 Sponsors & Budget",
    description:
      "Pick realistic sponsor objectives, track six sponsor slots, claim rewards, and use Finance Manager before moving transfer budget.",
    images: [imageUrls[0]],
  },
};

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
          name: "Esports Manager 2026",
          item: `${siteUrl}/esports-manager-2026`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sponsors and Budget Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "Esports Manager 2026 Sponsors and Budget Guide",
      name: "Esports Manager 2026 Sponsors and Budget Guide",
      description:
        "A practical Esports Manager 2026 sponsors and budget guide covering sponsor tiers from Tier S to Tier D, sponsor categories, objective rewards, realistic early sponsor goals, six sponsor slots, My Sponsors progress counters, estimated monthly income activation, sponsor reward claims, Finance Manager decisions, transfer budget timing, wage pressure, and achievement routes tied to sponsor and money planning.",
      image: imageUrls,
      datePublished: "2026-07-07",
      dateModified: "2026-07-07",
      inLanguage: "en",
      articleSection: "Game Guides",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Esports Manager 2026",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 sponsors",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 budget",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 sponsor tiers",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 sponsor objectives",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 six sponsors",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Finance Manager",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 transfer budget",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Financial Cushion",
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
      "@type": "ItemList",
      "@id": `${pageUrl}#sponsor-objectives`,
      name: "Esports Manager 2026 Sponsor Objective Types",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Volume objectives",
          description:
            "Match volume, kill goals, BO3 match goals, bomb plants, defuses, and tournament participation are usually easier to plan early.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Performance objectives",
          description:
            "Win-heavy goals, higher-ranked opponent wins, stage progress, and Major objectives are stronger later when the roster is stable.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Reward decisions",
          description:
            "Sponsor rewards can increase overall budget, add boot camp items, or activate monthly income after objective progress.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What sponsor tiers exist in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The sponsor screen shows Tier S, Tier A, Tier B, Tier C, and Tier D filters. Sponsor tier matters, but objective fit matters more for early decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pick the highest-tier sponsor in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. A realistic Tier C sponsor can be better than a higher-tier sponsor with objectives your roster cannot complete.",
          },
        },
        {
          "@type": "Question",
          name: "How many sponsors can I have in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can have up to six sponsors at the same time. It is usually better not to fill all six slots early because more sponsors also mean more active objectives to track.",
          },
        },
        {
          "@type": "Question",
          name: "What does estimated monthly income mean in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Estimated monthly income shows the sponsor’s potential income range, but a signed sponsor may still require objective progress before monthly revenue activates.",
          },
        },
        {
          "@type": "Question",
          name: "Which sponsor objectives are best early in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Match volume, kill goals, and tournament participation are usually easier to plan early than Major-stage goals or repeated wins against higher-ranked teams.",
          },
        },
        {
          "@type": "Question",
          name: "When should I move sponsor money into transfer budget in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move money only when you already know the target, the role problem, and the wage impact. Do not move budget just to browse.",
          },
        },
        {
          "@type": "Question",
          name: "How do I avoid hurting the long-term money route in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Control wages, avoid panic transfers, complete realistic sponsor objectives, and do not spend every reward immediately. For exact achievement conditions such as Financial Cushion, use the achievements guide.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Esports Manager 2026 Sponsors and Budget Guide"
          description="Choose sponsor objectives you can finish, track six sponsor slots, claim rewards, and use Finance Manager before moving money into transfer budget."
          gameTitle="Esports Manager 2026"
          gameHref="/esports-manager-2026"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EsportsManager2026SponsorsBudgetContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}