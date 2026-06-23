import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoldwasherHiddenObjectsGuideContent from "@/data/moldwasher/hidden-objects-collectibles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moldwasher/hidden-objects-collectibles`;

const imageUrls = [
  `${siteUrl}/images/moldwasher/moldwasher-gamer-brain-complete.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-opening-first-collectible.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-first-cd-lofi-system.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-hidden-drops-counter.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-garage-toy-batches.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-gachapon-machine.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-sticker-removal-hidden-drop.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-coffee-beans-collectible.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-dog-bowl-hidden-drop.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-decoration-room-unlocked.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-rice-table-bag-cleanup.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-tab-missing-spot.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-late-freezer-sticker.webp`,
];

export const metadata: Metadata = {
  title: "Moldwasher Hidden Objects & Collectibles Guide",
  description:
  "Find Moldwasher hidden drops, stickers, toys, cassettes, CDs, Gamer Brain, dog bowl, coffee, sticker fridge, gachapon rewards and missing collectible fixes.",    
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
          name: "Hidden Objects & Collectibles",
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
      headline: "Moldwasher Hidden Objects and Collectibles Guide",
      description:
        "This Moldwasher hidden objects and collectibles guide explains how to find hidden drops, stickers, toys, cassettes, CDs, garage toy batches, gachapon rewards, and Gamer Brain completion. It covers the sticker-removal fridge hidden drop, coffee and espresso collectible, fly fridge hidden drop, dog bowl hidden drop, Decoration Room category checks, rice table cleanup, late freezer sticker checks, and missing collectible troubleshooting.",
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
          name: "Moldwasher hidden objects",
        },
        {
          "@type": "Thing",
          name: "Moldwasher collectibles",
        },
        {
          "@type": "Thing",
          name: "Moldwasher hidden drops",
        },
        {
          "@type": "Thing",
          name: "Gamer Brain achievement",
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
        {
          "@type": "Thing",
          name: "Moldwasher CDs",
        },
        {
          "@type": "Thing",
          name: "Moldwasher gachapon",
        },
        {
          "@type": "Thing",
          name: "Moldwasher dog bowl hidden drop",
        },
        {
          "@type": "Thing",
          name: "Moldwasher coffee collectible",
        },
        {
          "@type": "Thing",
          name: "Moldwasher sticker-removal hidden drop",
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
          name: "How do I find all collectibles in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the mission clear screen first. Replay missions with missing hidden drops, then finish garage toy batches, music rewards, Decoration Room rewards, and gachapon rewards.",
          },
        },
        {
          "@type": "Question",
          name: "What counts as a collectible in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Collectibles include hidden drops, stickers, toys, cassettes, CDs, and reward-pool items. Use the collectible types table to identify which category is incomplete.",
          },
        },
        {
          "@type": "Question",
          name: "How many hidden drops are in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I would not publish a fixed total until every map node is checked in the same build. The reliable method is to use each mission's clear screen and replay any mission that shows 0/1 Hidden Drops.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if a mission says 0/1 Hidden Drops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Replay that mission and look for optional dirt, hidden objects behind stickers, cleaned reward items, bowl routes, floor or egg areas, and areas blocked by props.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the sticker-removal hidden drop in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the unauthorized sticker fridge mission, clean the stickers with secondary or high-pressure mode, then check the area that was covered by the stickers.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the coffee or espresso collectible in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the espresso mission, clean the beans or coffee-side object before leaving. The collectible comes from optional coffee cleanup, not only the main mold objective.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the fly fridge hidden drop in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Control the fly first, then sweep the floor and egg route before pressing Space. The fly distracts you and can make you leave before checking the pickup.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the dog bowl hidden drop in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the can as a ramp and check the bowl route, especially the upper or inside bowl angle. Do not only clean the floor mat.",
          },
        },
        {
          "@type": "Question",
          name: "How do I fix Gamer Brain not unlocking in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check every mission's hidden drop result first. If hidden drops are complete, diagnose the missing category: stickers, toys, cassettes, CDs, or gachapon rewards.",
          },
        },
        {
          "@type": "Question",
          name: "How do I diagnose all stickers, toys, or cassettes in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the missing collectible table. Stickers usually point to sticker checks and gachapon, toys point to garage batches, and cassettes or CDs point to music rewards and the media center.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best coin farm for Moldwasher gachapon cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Garage toy batches are the best loop in my run because they are short, pay about $200 FreshCash, and also support coins, toys, and final cleanup.",
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
          title="Moldwasher Hidden Objects and Collectibles Guide"
          description="Find Moldwasher hidden drops, stickers, toys, cassettes, CDs, Gamer Brain collectibles, dog bowl hidden drop, coffee collectible, and gachapon cleanup."
          gameTitle="Moldwasher"
          gameHref="/moldwasher"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 24, 2026"
          toc={[
            {
              id: "collectible-types",
              label: "Collectible types",
            },
            {
              id: "best-route",
              label: "Best route",
            },
            {
              id: "gamer-brain-cleanup",
              label: "Gamer Brain cleanup",
            },
            {
              id: "opening-room",
              label: "Opening room",
            },
            {
              id: "music-and-media-center",
              label: "Lo-fi system & CD",
            },
            {
              id: "hidden-drop-counter",
              label: "Hidden drop counter",
            },
            {
              id: "garage-toys-and-coins",
              label: "Garage & coins",
            },
            {
              id: "gachapon-rewards",
              label: "Gachapon rewards",
            },
            {
              id: "sticker-removal-hidden-drop",
              label: "Sticker-removal drop",
            },
            {
              id: "coffee-beans-collectible",
              label: "Coffee collectible",
            },
            {
              id: "fly-fridge-hidden-drop",
              label: "Fly fridge drop",
            },
            {
              id: "dog-bowl-hidden-drop",
              label: "Dog bowl drop",
            },
            {
              id: "decoration-room",
              label: "Decoration Room",
            },
            {
              id: "rice-table-and-bag",
              label: "Rice table",
            },
            {
              id: "tab-missing-spot",
              label: "Tab missing spot",
            },
            {
              id: "late-game-cleanup",
              label: "Late cleanup",
            },
            {
              id: "missing-collectible-checklist",
              label: "Missing collectible",
            },
            {
              id: "achievement-targets",
              label: "Achievement targets",
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
              href: "/moldwasher/walkthrough",
              label: "Moldwasher Walkthrough",
            },
            {
              href: "/moldwasher/achievements-guide",
              label: "Moldwasher Achievements Guide",
            },
          ]}
        >
          <MoldwasherHiddenObjectsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

