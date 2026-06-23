import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoldwasherAchievementsGuideContent from "@/data/moldwasher/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moldwasher/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/moldwasher/moldwasher-gamer-brain-complete.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-garage-toy-batches.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-sushi-set-all-tools.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-highgrow-flower-pot.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-gachapon-machine.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-inner-peace-level-one.webp`,
];

export const metadata: Metadata = {
  title: "Moldwasher Achievements Guide: 100% & Hidden Trophies",
  description:
  "Complete all 27 Moldwasher achievements with Gamer Brain, Sushi Set, HighGrow, Yakimeshi, Toasty, FreshCash farming, hidden triggers and collectibles.",
  alternates: {
    canonical: pageUrl,
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
          name: "Moldwasher Guide",
          item: `${siteUrl}/moldwasher`,
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
      headline: "Moldwasher Achievements Guide: 100% and Hidden Achievements",
      description:
        "This Moldwasher achievements guide explains all 27 achievements, including Gamer Brain, Apply Directly to the Forehead, To Infinity and Beyond, Sushi Set, HighGrow, Waterboarding, Yakimeshi, Toasty, Finally Inner Peace, FreshCash farming, garage toy batches, gachapon cleanup, tool upgrades, stickers, toys, cassettes, CDs, and final 100% completion checks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-24",
      dateModified: "2026-06-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Moldwasher",
        },
        {
          "@type": "Thing",
          name: "Moldwasher achievements",
        },
        {
          "@type": "Thing",
          name: "Moldwasher 100% completion",
        },
        {
          "@type": "Thing",
          name: "Gamer Brain achievement",
        },
        {
          "@type": "Thing",
          name: "Sushi Set achievement",
        },
        {
          "@type": "Thing",
          name: "HighGrow achievement",
        },
        {
          "@type": "Thing",
          name: "Yakimeshi achievement",
        },
        {
          "@type": "Thing",
          name: "Toasty achievement",
        },
        {
          "@type": "Thing",
          name: "Waterboarding achievement",
        },
        {
          "@type": "Thing",
          name: "FreshCash farming",
        },
        {
          "@type": "Thing",
          name: "Moldwasher collectibles",
        },
        {
          "@type": "Thing",
          name: "Moldwasher stickers",
        },
        {
          "@type": "Thing",
          name: "Moldwasher toys",
        },
        {
          "@type": "Thing",
          name: "Moldwasher cassettes",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "How many achievements are in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moldwasher has 27 achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Are the Steam achievement rates stable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not fully. The rates on this page are based on Steam achievement stats copied on June 24, 2026, shortly after launch. Early percentages can change quickly.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best FreshCash farm in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage toy batches are the best farm I found. In my run, they paid about $200 FreshCash per batch and also helped with coins, toys, and cleanup progress.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Alt-Fire Walk with Me in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use only secondary cleaning mode for an entire short level. Do not use normal spray even once.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best level for Sushi Set in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Level 1 or another simple floor-dirt level after buying every tool. Touch dirt with every tool before the level clears.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock HighGrow in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Water every flower in the pot. If the level says CLEARED, do not press Space immediately; keep watering until every flower visually opens into a full bloom.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Waterboarding in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spray the fly in the fridge mission until the achievement pops. The fly may still move afterward, so use the achievement pop-up as the success check.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Yakimeshi in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the flamethrower on a grain of rice after the flamethrower is unlocked.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Toasty in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the flamethrower on the cockroach when it appears.",
          },
        },
        {
          "@type": "Question",
          name: "What is the hardest Moldwasher achievement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gamer Brain is usually the hardest because it requires every collectible. All stickers, all toys, Sushi Set, and Finally Inner Peace are also common final blockers.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Gamer Brain in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Find every collectible: hidden drops, stickers, toys, cassettes, CDs, and gachapon rewards. Use the collectibles guide for the full cleanup route.",
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
          title="Moldwasher Achievements and 100% Guide"
          description="Unlock every Moldwasher achievement, from early story progress to Sushi Set, HighGrow, Yakimeshi, Toasty, Gamer Brain, and the final collectible cleanup."
          gameTitle="Moldwasher"
          gameHref="/moldwasher"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 24, 2026"
          toc={[
            {
              id: "all-achievements-checklist",
              label: "Achievements checklist",
            },
            {
              id: "best-100-percent-route",
              label: "Best 100% route",
            },
            {
              id: "hardest-achievements",
              label: "Hardest achievements",
            },
            {
              id: "freshcash-money-farm",
              label: "FreshCash farm",
            },
            {
              id: "alt-fire-walk-with-me",
              label: "Alt-Fire achievement",
            },
            {
              id: "sushi-set",
              label: "Sushi Set",
            },
            {
              id: "highgrow",
              label: "HighGrow",
            },
            {
              id: "one-off-special-triggers",
              label: "Special triggers",
            },
            {
              id: "gachapon-cds-and-room-achievements",
              label: "Gachapon & CDs",
            },
            {
              id: "collectible-achievements",
              label: "Collectibles",
            },
            {
              id: "finally-inner-peace",
              label: "Finally Inner Peace",
            },
            {
              id: "missing-achievement-checklist",
              label: "Missing one?",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/moldwasher",
              label: "Moldwasher Guide Hub",
            },
            {
              href: "/moldwasher/hidden-objects-collectibles",
              label: "Hidden Objects & Collectibles Guide",
            },
            {
              href: "/moldwasher/walkthrough",
              label: "Moldwasher Walkthrough",
            },
          ]}
        >
          <MoldwasherAchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}