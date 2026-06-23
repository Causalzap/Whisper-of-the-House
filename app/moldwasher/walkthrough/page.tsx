import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoldwasherWalkthroughContent from "@/data/moldwasher/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moldwasher/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/moldwasher/moldwasher-opening-first-collectible.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-hidden-drops-counter.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-first-cd-lofi-system.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-garage-toy-batches.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-sticker-removal-hidden-drop.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-waterboarding-fly-achievement.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-dog-bowl-hidden-drop.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-rice-table-bag-cleanup.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-highgrow-flower-pot.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-toasty-cockroach-achievement.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-air-duct-rice-ball.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-dinner-fight-tool-cycle.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-tab-missing-spot.webp`,
];

export const metadata: Metadata = {
  title: "Moldwasher Walkthrough: Levels, Tools, Sink & Dinner Fight",
  description:
    "Beat Moldwasher with level tips for sink 0%, rice bags, pickaxe unlock, air duct, dinner fight, lo-fi CD, Zen Mode, mold types and hidden drop fixes.",
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
          name: "Walkthrough",
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
        "Moldwasher Walkthrough: Level Route, Tools, Stuck Points, and Dinner Fight",
      description:
        "This Moldwasher walkthrough explains the main route from the opening room through early fridge jobs, lo-fi system and first CD, garage money loop, sticker fridge, sink stuck at 0%, pickaxe unlock, rice table and rubbish bag cleanup, flower pot, cockroach route, air duct wind jobs, and the This dinner doesn't want to be cooked fight. It also covers spray modes, Zen Mode, mold types, launch-build issues, and when to move from story progress to achievements and collectibles cleanup.",
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
          name: "Moldwasher walkthrough",
        },
        {
          "@type": "Thing",
          name: "Moldwasher level guide",
        },
        {
          "@type": "Thing",
          name: "Moldwasher sink stuck at 0%",
        },
        {
          "@type": "Thing",
          name: "Moldwasher pickaxe unlock",
        },
        {
          "@type": "Thing",
          name: "Moldwasher rice bag",
        },
        {
          "@type": "Thing",
          name: "Moldwasher rubbish bag",
        },
        {
          "@type": "Thing",
          name: "Moldwasher air duct",
        },
        {
          "@type": "Thing",
          name: "This dinner doesn't want to be cooked",
        },
        {
          "@type": "Thing",
          name: "Moldwasher Zen Mode",
        },
        {
          "@type": "Thing",
          name: "Moldwasher mold types",
        },
        {
          "@type": "Thing",
          name: "Moldwasher hidden drops",
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
          name: "How do I progress in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Follow the route table first, then use the stuck points table to jump to the exact mission that is blocking you.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between left click and right click in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Left click is wide spray; right click is precise stream. Wide spray is for open surfaces, while precise stream is for stickers, tight corners, and stubborn leftovers.",
          },
        },
        {
          "@type": "Question",
          name: "What are the mold types in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moldwasher includes mold variants such as colorful, iridescent, ghostly, inverted, sticky, glowing, crystalline, and mimic-style mold. Use the mold types table on the page for practical responses.",
          },
        },
        {
          "@type": "Question",
          name: "Does pausing stop mold growth in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do not rely on pausing as your safety plan during active mold growth. Use the core mechanics section and consider Zen Mode if the normal route feels stressful.",
          },
        },
        {
          "@type": "Question",
          name: "How do I turn on Zen Mode in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Zen Mode when you want slower mold pressure and a calmer route. It is best treated as a comfort option rather than a separate walkthrough route.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get the pickaxe in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In my run, the pickaxe became available after the dog bowl route. Check the tool unlock section before starting pickaxe-gated missions.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat the sink level if it is stuck at 0%?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the sink and clogged route section. The short version is that the clog is the real first blocker before normal cleaning progress makes sense.",
          },
        },
        {
          "@type": "Question",
          name: "How do I clean rice or dispose of rubbish bags in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the rice table and rubbish bag section. The short version is to use the leaf blower and move the object into the target area.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat the air duct level in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the air duct section. The key is to position the object so the wind helps move it instead of fighting the airflow directly.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat This dinner doesn't want to be cooked in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the dinner fight section. It is a tool-cycle level, not a single-tool cleaning job.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if a Moldwasher level seems bugged?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Switch tools first. If the active object still does not respond to washer, fire, pickaxe or axe, or blower, restart the level and check for updates.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after finishing the Moldwasher story?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Move to the dedicated 100% pages: the collectibles guide for hidden drops and Gamer Brain, and the achievements guide for Sushi Set, HighGrow, Yakimeshi, and all 27 achievements.",
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
          title="Moldwasher Walkthrough and Level Guide"
          description="Clear Moldwasher with practical level tips for spray modes, mold types, sink 0%, pickaxe unlock, rice bags, air duct, dinner fight, Zen Mode, and post-story cleanup."
          gameTitle="Moldwasher"
          gameHref="/moldwasher"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 24, 2026"
          toc={[
            {
              id: "full-walkthrough-route",
              label: "Full route",
            },
            {
              id: "stuck-points",
              label: "Stuck points",
            },
            {
              id: "opening-and-first-fridge-jobs",
              label: "Opening jobs",
            },
            {
              id: "lo-fi-system-first-cd",
              label: "Lo-fi system & CD",
            },
            {
              id: "core-mechanics",
              label: "Core mechanics",
            },
            {
              id: "best-upgrades",
              label: "Upgrades & unlocks",
            },
            {
              id: "garage-money-loop",
              label: "Garage money loop",
            },
            {
              id: "tools-guide",
              label: "Tools guide",
            },
            {
              id: "sticker-fridge",
              label: "Sticker fridge",
            },
            {
              id: "fly-fridge",
              label: "Fly fridge",
            },
            {
              id: "dog-bowl",
              label: "Dog bowl",
            },
            {
              id: "sink-clogged-route",
              label: "Sink stuck at 0%",
            },
            {
              id: "breakfast-station-hidden-drop",
              label: "Breakfast Station",
            },
            {
              id: "pickaxe-hard-objects",
              label: "Pickaxe jobs",
            },
            {
              id: "rice-table-rubbish-bag",
              label: "Rice & rubbish bag",
            },
            {
              id: "flower-pot",
              label: "Flower pot",
            },
            {
              id: "cockroach-and-flamethrower",
              label: "Cockroach",
            },
            {
              id: "air-duct",
              label: "Air duct",
            },
            {
              id: "beef-monster-dinner-fight",
              label: "Dinner fight",
            },
            {
              id: "tab-missing-spot",
              label: "Tab missing spot",
            },
            {
              id: "mold-types",
              label: "Mold types",
            },
            {
              id: "known-issues",
              label: "Known issues",
            },
            {
              id: "post-story-cleanup",
              label: "Post-story cleanup",
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
              href: "/moldwasher/achievements-guide",
              label: "Moldwasher Achievements Guide",
            },
          ]}
        >
          <MoldwasherWalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

