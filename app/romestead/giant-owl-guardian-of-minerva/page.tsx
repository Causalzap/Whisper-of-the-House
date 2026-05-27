import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GiantOwlGuardianOfMinervaContent from "@/data/romestead/giant-owl-guardian-of-minerva.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/giant-owl-guardian-of-minerva`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-giant-owl-quest-prep.webp`,
  `${siteUrl}/images/romestead/romestead-leatherworker-armor-prep.webp`,
  `${siteUrl}/images/romestead/romestead-giant-owl-shadow-nest.webp`,
  `${siteUrl}/images/romestead/romestead-giant-owl-fight-phase-two.webp`,
  `${siteUrl}/images/romestead/romestead-giant-owl-guardian-eye-drop.webp`,
  `${siteUrl}/images/romestead/romestead-gods-offerings-guardian-eye.webp`,
  `${siteUrl}/images/romestead/romestead-gods-world-tier-one.webp`,
];

const toc = [
  { id: "recommended-gear", label: "Gear" },
  { id: "find-the-nest", label: "Find nest" },
  { id: "start-fight", label: "Start fight" },
  { id: "phase-one", label: "Phase 1" },
  { id: "phase-two", label: "Phase 2" },
  { id: "after-kill", label: "After kill" },
  { id: "drops", label: "Drops" },
  { id: "guardian-eye-reward", label: "Unlocks" },
  { id: "farm-guardian", label: "Farm boss" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
  {
    href: "/romestead/first-day-base-building",
    label: "First Day and Base Building Guide",
  },
  {
    href: "/romestead/gods-offerings-boss-progression",
    label: "Gods, Offerings and Boss Progression Guide",
  },
  {
    href: "/romestead/farmstead-workers-food-logistics",
    label: "Farmstead, Workers, Food and Logistics Guide",
  },
  {
    href: "/romestead/dungeon-traps-death-recovery",
    label: "Dungeon Traps and Death Recovery Guide",
  },
];

export const metadata: Metadata = {
  title: "Romestead Giant Owl Guide: Guardian of Minerva Boss",
  description:
    "Find and beat the Giant Owl in Romestead: follow the shadow to the nest, break the egg, survive Phase 2, and claim Guardian’s Eye rewards.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Romestead Giant Owl Guide: Guardian of Minerva Boss",
    description:
      "A practical Romestead boss guide covering how to find the Giant Owl nest, break the egg, dodge Phase 2 attacks, claim Guardian’s Eye rewards and farm boss drops.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Romestead The Giant Owl quest explaining the Guardian's Eye objective, nearby nest, armor and food preparation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romestead Giant Owl Guide: Guardian of Minerva Boss",
    description:
      "Track the Giant Owl nest, break the egg, handle lightning Phase 2, offer the Guardian’s Eye, and unlock the next tier.",
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
          name: "Romestead Guide",
          item: `${siteUrl}/romestead`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Giant Owl Guardian of Minerva",
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
        "Romestead Giant Owl Guide: How to Find and Beat Guardian of Minerva",
      description:
        "A player-focused Romestead Giant Owl boss guide explaining how to prepare for Guardian of Minerva, what gear to bring, how to find the owl nest using the sky-presence message, bird shadow and statue/campfire clue route, how breaking the egg starts the fight, how Phase 1 and Phase 2 attacks work, how to dodge Lightning Jump, Lightning Bolts, Trail Explosion and Wind Attack, what the Giant Owl drops, what to do with the Guardian's Eye, which buildings unlock after the altar reward, how World Tier 1 changes progression, and whether the Guardian of Minerva can be farmed for materials.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-27",
      dateModified: "2026-05-27",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Giant Owl" },
        { "@type": "Thing", name: "Guardian of Minerva" },
        { "@type": "Thing", name: "Guardian's Eye" },
        { "@type": "Thing", name: "Minerva" },
        { "@type": "Thing", name: "Giant Owl Nest" },
        { "@type": "Thing", name: "Flint Gladius" },
        { "@type": "Thing", name: "Flint Hasta" },
        { "@type": "Thing", name: "Leather Armor" },
        { "@type": "Thing", name: "World Tier 1" },
        { "@type": "Thing", name: "Material Storage" },
        { "@type": "Thing", name: "Blacksmith" },
        { "@type": "Thing", name: "Carpenter's Workshop" },
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
          name: "Where is the Giant Owl in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Watch for the sky-presence message, then look for the large bird shadow moving across the ground. Follow the shadow toward the nest. Some routes can also use a statue and campfire clue to point toward the boss location.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start the Giant Owl fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Find the nest and break the egg. Breaking the egg starts the Guardian of Minerva fight, so prepare before doing it.",
          },
        },
        {
          "@type": "Question",
          name: "What gear should I bring to the Giant Owl?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bring at least a Flint Gladius or Flint Hasta, full Leather armor, and food or healing. Buff food helps if you have it.",
          },
        },
        {
          "@type": "Question",
          name: "How much HP does the Guardian of Minerva have?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Current public data puts the boss around the low-200 HP range, with Phase 2 starting around the final 50 HP. Treat exact HP as Early Access tuning that may change.",
          },
        },
        {
          "@type": "Question",
          name: "What happens in Giant Owl Phase 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Phase 2 adds lightning pressure. Watch for Lightning Jump, Lightning Bolts, Trail Explosion, and Wind Attack. Move first, then attack after the danger window ends.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Guardian's Eye do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Take the Guardian's Eye to the altar, offer it, and claim the reward. It pushes Minerva progression and unlocks major early buildings.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Giant Owl drop?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Important drops include Guardian's Eye, Guardian's Feather, Guardian's Talon, possible Feathered armor, Coal, Copper Bars, arrows, and coins. Exact quantities can vary with Early Access tuning and reward rolls.",
          },
        },
        {
          "@type": "Question",
          name: "Can you farm the Giant Owl in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Guardian of Minerva can be repeated for materials and armor rewards, but it is better to finish the first altar reward before farming it.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I beat the owl but nothing unlocked?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may not have offered the Guardian's Eye, or you may not have claimed the altar reward. After claiming it, return to the Workbench and check Construction Mode.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after the Giant Owl?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build the new upgrades, especially Material Storage, Blacksmith, Carpenter's Workshop, and Level 2 Altar options. Then follow the next god objectives instead of wandering randomly.",
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
          title="Romestead Giant Owl Guide: Find the Nest, Break the Egg, Beat Phase 2"
          description="Track the owl shadow, start the fight by breaking the egg, dodge the lightning phase, and turn the Guardian’s Eye into real unlocks."
          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GiantOwlGuardianOfMinervaContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}