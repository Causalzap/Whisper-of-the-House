import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoldwasherGuideContent from "@/data/moldwasher/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moldwasher`;

const imageUrls = [
  `${siteUrl}/images/moldwasher/moldwasher-opening-first-collectible.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-hidden-drops-counter.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-sushi-set-all-tools.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-garage-toy-batches.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-air-duct-rice-ball.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-dinner-fight-tool-cycle.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-gachapon-machine.webp`,
  `${siteUrl}/images/moldwasher/moldwasher-gamer-brain-complete.webp`,
];

export const metadata: Metadata = {
  title: "Moldwasher Guide Hub: Walkthrough, Collectibles & 100%",
  description:
    "Start Moldwasher with walkthrough links for sink 0%, rice bags, Steam Deck, tools, hidden drops, Gamer Brain, gachapon and all 27 achievements.",
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
        "Moldwasher Guide Hub: Walkthrough, Hidden Objects, Collectibles, and Achievements",
      description:
        "This Moldwasher guide hub helps players choose the right route for story progress, stuck missions, hidden drops, collectibles, and 100% achievements. It points to the walkthrough for sink stuck at 0%, rice and rubbish bags, pickaxe unlock, air duct movement, This dinner doesn't want to be cooked, spray modes, mold types, Steam Deck comfort notes, Zen Mode, and tool switching. It also links to the collectibles guide for Gamer Brain, stickers, toys, cassettes, CDs, garage batches, and gachapon rewards, plus the achievements guide for all 27 achievements.",
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
          name: "Moldwasher guide",
        },
        {
          "@type": "Thing",
          name: "Moldwasher walkthrough",
        },
        {
          "@type": "Thing",
          name: "Moldwasher hidden drops",
        },
        {
          "@type": "Thing",
          name: "Moldwasher collectibles",
        },
        {
          "@type": "Thing",
          name: "Moldwasher achievements",
        },
        {
          "@type": "Thing",
          name: "Gamer Brain achievement",
        },
        {
          "@type": "Thing",
          name: "Moldwasher Steam Deck",
        },
        {
          "@type": "Thing",
          name: "Moldwasher Zen Mode",
        },
        {
          "@type": "Thing",
          name: "Moldwasher gachapon",
        },
        {
          "@type": "Thing",
          name: "Moldwasher tools",
        },
        {
          "@type": "Thing",
          name: "Moldwasher sink stuck at 0%",
        },
        {
          "@type": "Thing",
          name: "This dinner doesn't want to be cooked",
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
          name: "What is Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moldwasher is a tiny-sushi cleaning game where you clear mold, rice, bugs, mushrooms, hard chunks, toys, and kitchen messes with tools like a pressure washer, leaf blower, pickaxe or axe, and flamethrower.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clean the opening room, pick up the first coin and collectible, then start the fridge missions. Check the clear screen after each job so you do not miss hidden drops.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between wide spray and precise stream in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wide spray is for open mold and large surfaces. Precise stream is for stickers, tight corners, edge pixels, and stubborn leftovers.",
          },
        },
        {
          "@type": "Question",
          name: "Is Moldwasher Steam Deck Verified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moldwasher is Steam Deck Verified. For handheld play, focus on quick tool switching, readable controls, Zen Mode when needed, and auto-fire or auto-clean for comfort.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best early upgrade in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Early pressure and radius on the starter washer help, but buying the next required tool usually opens more progress than maxing one tool too early.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get more FreshCash in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Replay short jobs and return to garage toy batches. In my run, garage batches paid about $200 FreshCash and also helped with coins and toy cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What is gachapon used for in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gachapon uses coins to buy rewards and can matter for final decorations, stickers, toys, and collectible cleanup. Use the collectibles guide when a reward-pool item seems missing.",
          },
        },
        {
          "@type": "Question",
          name: "How do I clean rice or rubbish bags in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the leaf blower. Push rice or bags toward the target area instead of trying to wash them like mold.",
          },
        },
        {
          "@type": "Question",
          name: "Why does mold keep growing back in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small leftovers can spread again. Clean the edge of the spread first, then sweep inward and use precise stream on stubborn patches.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find hidden drops in Moldwasher?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Read the mission clear screen. If it shows 0/1 Hidden Drops, replay that mission and look for optional objects, covered spots, hidden pickups, or areas blocked by props.",
          },
        },
        {
          "@type": "Question",
          name: "How many achievements does Moldwasher have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moldwasher has 27 achievements. Use the achievements guide for the full checklist and route.",
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
          name: "What should I do after finishing the Moldwasher story?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the Hidden Objects and Collectibles Guide for Gamer Brain and missing collectibles, then use the Achievements Guide for the final 27-achievement cleanup.",
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
          title="Moldwasher Guide Hub"
          description="Start here for Moldwasher walkthrough help, stuck mission fixes, hidden drops, collectibles, Gamer Brain, Steam Deck notes, gachapon, tools, and achievements."
          gameTitle="Moldwasher"
          gameHref="/moldwasher"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 24, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "quick-route",
              label: "Quick route",
            },
            {
              id: "early-game",
              label: "Early game",
            },
            {
              id: "tools-and-upgrades",
              label: "Tools & upgrades",
            },
            {
              id: "garage-freshcash-coins",
              label: "Garage & coins",
            },
            {
              id: "common-stuck-points",
              label: "Stuck points",
            },
            {
              id: "late-game-tool-cycle",
              label: "Late tool cycle",
            },
            {
              id: "hidden-objects-and-collectibles",
              label: "Collectibles",
            },
            {
              id: "achievements-and-100-percent",
              label: "Achievements",
            },
            {
              id: "steam-deck-controls-settings",
              label: "Steam Deck & controls",
            },
            {
              id: "recommended-reading-order",
              label: "Reading order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/moldwasher/walkthrough",
              label: "Moldwasher Walkthrough",
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
          <MoldwasherGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
