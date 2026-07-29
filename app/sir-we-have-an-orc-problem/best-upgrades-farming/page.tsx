import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SirWeHaveAnOrcProblemBestUpgradesFarmingContent from "@/data/sir-we-have-an-orc-problem/best-upgrades-farming.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sir-we-have-an-orc-problem`;
const pageUrl = `${hubUrl}/best-upgrades-farming`;

const imageUrls = [
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-survive-perfect-clear-resources.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-rapid-fire-five-shots.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-short-stage-farming.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-1-end-battle-bonus.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-silver-orc-one-percent.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-level-3-2-more-turrets-cost.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-late-game-40k-farm.webp`,
];

const toc = [
  {
    id: "upgrade-planner",
    label: "Static upgrade planner",
  },
  {
    id: "data-snapshot",
    label: "Prices & farming values",
  },
  {
    id: "resource-types",
    label: "Survival vs perfect-clear resources",
  },
  {
    id: "perfect-clear-bonus",
    label: "Perfect Clear Bonus",
  },
  {
    id: "early-upgrades",
    label: "Early upgrade order",
  },
  {
    id: "penetration-rapid-fire",
    label: "Penetration & Rapid Fire",
  },
  {
    id: "automatic-missile",
    label: "Automatic Missile",
  },
  {
    id: "short-stage-farming",
    label: "Farming efficiency formula",
  },
  {
    id: "level-3-1-farm",
    label: "Level 3.1 farming",
  },
  {
    id: "cheap-vs-expensive",
    label: "Cheap stats vs tower count",
  },
  {
    id: "levels-4-5",
    label: "Levels 4.x–5.x priorities",
  },
  {
    id: "abilities-and-farming",
    label: "Abilities & farming",
  },
  {
    id: "late-game-farming",
    label: "Late-game farming target",
  },
  {
    id: "when-to-return",
    label: "When to stop farming",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/sir-we-have-an-orc-problem/",
    label: "Sir, We Have an Orc Problem Guide Hub",
  },
  {
    href: "/sir-we-have-an-orc-problem/best-turrets-builds/",
    label: "Best Turrets, Builds & Tier List",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-3-2-guide/",
    label: "Level 3.2 Guide",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-6-1-6-2-guide/",
    label: "Levels 6.1 & 6.2 Guide",
  },
];

export const metadata: Metadata = {
  title: "Sir, We Have an Orc Problem Best Upgrades & Farming",
  description:
    "Follow the best upgrade order, compare cheap stats with tower caps, farm perfect-clear resources faster, and know when to return to progression.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Sir, We Have an Orc Problem Upgrade Order & Farming Guide",
    description:
      "Plan economy and combat upgrades, compare farming efficiency, choose survival or perfect-clear resources, and avoid overfarming expensive nodes.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Sir We Have an Orc Problem short-stage farming route used to compare resource efficiency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sir, We Have an Orc Problem Upgrades & Farming",
    description:
      "Use a stage-by-stage upgrade plan, calculate resources per minute, and know when cheap combat stats beat another expensive tower.",
    images: [imageUrls[2]],
  },
};

const faqEntities = [
  {
    question:
      "Can Automatic Missile make farming fully AFK in Sir, We Have an Orc Problem?",
    answer:
      "Not completely in the tested launch-period build. Automatic Missile removed repeated clicking, but its shots still followed the mouse position. Leave the cursor aimed at a useful part of the route before looking away.",
  },
  {
    question:
      "Is 40.7K guaranteed from the late-game farming stage?",
    answer:
      "No. The 40.7K result included 6.12K from regular kills, 9.65K from Silver Orcs, a 2K flat bonus, an 8.88K percentage bonus and a 14K Level Bonus. Silver Orc spawns and active modifiers can change the next payout.",
  },
  {
    question:
      "Do I need about 1.36 million resources to finish the game?",
    answer:
      "No. The 1.36 million total came from completing the entire upgrade tree in an older, harder balance state. It is a historical full-tree snapshot, not the current requirement for completing Level 6.2.",
  },
  {
    question:
      "Can a failed run be a better farm than a successful run?",
    answer:
      "Yes. A failed run can be efficient when it ends quickly and still produces the resource required by the target upgrade. It is inefficient when failing removes the survival or perfect-clear currency you actually need.",
  },
  {
    question:
      "Should I keep farming after buying the planned upgrade?",
    answer:
      "Usually not. Return to the blocked stage and test whether the purchase fixes the observed failure. Start another farming loop only when the same problem remains and the next upgrade directly addresses it.",
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
          name: "Sir, We Have an Orc Problem Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Upgrades and Farming",
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
        "Sir, We Have an Orc Problem Best Upgrade Order and Farming Guide",
      description:
        "This Sir, We Have an Orc Problem upgrade and farming guide provides a stage-based static upgrade planner for Levels 1.1 through 6.2. It explains when to prioritize Gunner Fire Rate, Damage, Penetration, Rapid Fire, Automatic Missile, economy bonuses, Silver Orc chance and additional tower-count nodes. It separates survival resources from perfect-clear resources, shows when a clean-win bonus is worth pursuing, compares short-stage resource efficiency, and uses tested values including a 113 end-of-battle bonus, a 1% Silver Orc chance, an 8.17K upgrade from 12 to 13 Gunners and a 40.7K late-game payout breakdown. It also explains when cheap combat upgrades beat an expensive tower unlock, how active abilities affect farming efficiency and when to stop farming and return to progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-29",
      dateModified: "2026-07-29",
      about: [
        {
          "@type": "VideoGame",
          name: "Sir, We Have an Orc Problem",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem upgrade order",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem farming guide",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem upgrade planner",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem perfect clear bonus",
        },
        {
          "@type": "Thing",
          name: "Survival resources",
        },
        {
          "@type": "Thing",
          name: "Perfect-clear resources",
        },
        {
          "@type": "Thing",
          name: "Rapid Fire upgrade",
        },
        {
          "@type": "Thing",
          name: "Gunner Penetration",
        },
        {
          "@type": "Thing",
          name: "Automatic Missile",
        },
        {
          "@type": "Thing",
          name: "Silver Orc upgrade",
        },
        {
          "@type": "Thing",
          name: "Level 3.1 farming",
        },
        {
          "@type": "Thing",
          name: "Level 3.2 upgrade order",
        },
        {
          "@type": "Thing",
          name: "Late-game resource farming",
        },
        {
          "@type": "Thing",
          name: "Nuke and Cryo Beam farming decisions",
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
          title="The Upgrade Route I Use to Farm Faster Without Overbuilding"
          description="I buy enough combat power to unlock a stable farm, compare useful payout against completion time, and return to progression as soon as one planned upgrade fixes the lane that stopped the previous run."
          gameTitle="Sir, We Have an Orc Problem"
          gameHref="/sir-we-have-an-orc-problem/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SirWeHaveAnOrcProblemBestUpgradesFarmingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}