import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RomesteadGuideContent from "@/data/romestead/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-first-settlement-requirements.webp`,
  `${siteUrl}/images/romestead/romestead-farmstead-offer-40-wheat.webp`,
  `${siteUrl}/images/romestead/romestead-gods-world-tier-one.webp`,
  `${siteUrl}/images/romestead/romestead-giant-owl-quest-prep.webp`,
  `${siteUrl}/images/romestead/romestead-twin-crypt-entry.webp`,
];

const toc = [
  { id: "quick-reference", label: "Quick reference" },
  { id: "where-to-start", label: "Where to start" },
  { id: "early-route", label: "Early route" },
  { id: "first-town-priorities", label: "Town priorities" },
  { id: "systems-connect", label: "Systems connect" },
  { id: "farmstead-workers-food", label: "Farmstead" },
  { id: "gods-offerings-altar", label: "Gods and altar" },
  { id: "giant-owl", label: "Giant Owl" },
  { id: "dungeons-death-recovery", label: "Dungeons" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/romestead/first-day-base-building",
    label: "First Day and Base Building Guide",
  },
  {
    href: "/romestead/farmstead-workers-food-logistics",
    label: "Farmstead, Workers, Food and Logistics Guide",
  },
  {
    href: "/romestead/gods-offerings-boss-progression",
    label: "Gods, Offerings and Boss Progression Guide",
  },
  {
    href: "/romestead/giant-owl-guardian-of-minerva",
    label: "Giant Owl Boss Guide",
  },
  {
    href: "/romestead/dungeon-traps-death-recovery",
    label: "Dungeon Traps and Death Recovery Guide",
  },
];

export const metadata: Metadata = {
  title: "Romestead Guide Hub: Farmstead, Gods, Bosses & Dungeons",
  description:
  "Use this Romestead guide hub to find help with your first town, Farmstead, workers, food, gods, offerings, Giant Owl, Core Vessel, dungeons and death recovery.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Romestead Guide Hub: Farmstead, Gods, Bosses and Dungeons",
    description:
      "A practical Romestead guide hub for first town setup, Farmstead, workers, food, gods, offerings, Giant Owl, Core Vessel, dungeons and death recovery.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Romestead Citizens tutorial explaining housing, Food Storage, Leatherworker, Insula, defenses and citizen jobs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romestead Guide Hub: Farmstead, Gods, Bosses and Dungeons",
    description:
      "Start here if you are stuck in Romestead: find the right guide for your town, Farmstead, altar, Giant Owl, Core Vessel or dungeon problem.",
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
        "Romestead Guide Hub: First Town, Farmstead, Gods, Giant Owl, Core Vessel and Dungeons",
      description:
        "A player-focused Romestead guide hub that helps new players choose the right next guide based on their current problem. It covers the early progression route, first town priorities, how town building connects to workers, Food Storage, Farmstead, Well, Watermill, Altar objectives, offerings, sacrifice, favor, Giant Owl, Guardian's Eye, Core Vessel, dungeon artifacts, crypts, spawners, death recovery and key links to focused Romestead guides.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-27",
      dateModified: "2026-06-06",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead Guide" },
        { "@type": "Thing", name: "Romestead Beginner Guide" },
        { "@type": "Thing", name: "First Day" },
        { "@type": "Thing", name: "Town Core" },
        { "@type": "Thing", name: "Food Storage" },
        { "@type": "Thing", name: "Farmstead" },
        { "@type": "Thing", name: "Romestead Gods" },
        { "@type": "Thing", name: "Altar" },
        { "@type": "Thing", name: "Giant Owl" },
        { "@type": "Thing", name: "Guardian of Minerva" },
        { "@type": "Thing", name: "Dungeons" },
        { "@type": "Thing", name: "Death Recovery" },
        { "@type": "Thing", name: "Core Vessel" },
        { "@type": "Thing", name: "The Moonstring" },
        { "@type": "Thing", name: "Well" },
        { "@type": "Thing", name: "Watermill" },
        { "@type": "Thing", name: "Sacrifice" },
        { "@type": "Thing", name: "Dungeon Artifacts" },
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
          name: "What is the best Romestead guide to read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the First Day and Base Building guide if you are new. It covers Workbench, Town Core, Altar, Food Storage, Leather Bedroll, workers, Town Raids, Defense Value and when to explore.",
          },
        },
        {
          "@type": "Question",
          name: "What should I build first in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build the Workbench, Town Core, Altar, housing, Food Storage and Leatherworker before expanding too far. Your first goal is a town that can support citizens.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my workers not doing anything in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually because the citizen is not assigned, the workplace is missing something, food is not in Food Storage, or the related production chain is incomplete.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Farmstead in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farmstead is tied to altar progression. In the current route, Honoring the Soil requires 40 wheat and unlocks Farmstead.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Farmstead not watering crops?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farmstead and watering are separate steps. If crops are not being watered, check the water support route and the Well unlock.",
          },
        },
        {
          "@type": "Question",
          name: "How do gods work in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Altar to follow god objectives, offer required items, claim rewards, and then check the Workbench. Gods connect to buildings, favor buffs, boss items, artifacts and progression.",
          },
        },
        {
          "@type": "Question",
          name: "What does Guardian's Eye do in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian's Eye is the key drop from the Giant Owl and Guardian of Minerva. Offer it at the altar, claim the reward, then check your Workbench for new building options.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find the Giant Owl in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Watch for the sky-presence message, follow the bird shadow toward the nest, then break the egg when you are ready to start the fight.",
          },
        },
        {
          "@type": "Question",
          name: "Are dungeons required for progression in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some dungeon artifacts connect to god objectives. The Moonstring is one example because it leads to the Well unlock.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when I die in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It depends on your death setting. Normal death can drop carried inventory, while Softcore is safer for learning because it only drops money.",
          },
        },
        {
          "@type": "Question",
          name: "Is this a Romestead wiki?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This is a guide hub for solving common Romestead problems. Use it like a quick index, then open the focused guide for the system that is blocking you.",
          },
        },
        {
          "@type": "Question",
          name: "What is Core Vessel in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Treat Core Vessel as a dungeon or progression clue rather than random loot. Check your active god objectives, Altar and Workbench before selling, sacrificing or carrying unusual dungeon items into another risky room.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I go after the first town is stable?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After your first town can feed, house, employ and defend citizens, choose the next bottleneck: Farmstead and food, gods and offerings, Giant Owl progression, or dungeon artifacts.",
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
          title="Romestead Guide Hub: Start Here If You Are Stuck"
          description="Pick the right guide for your current problem: first town, Farmstead, workers, food, gods, Giant Owl, Core Vessel, dungeons or death recovery."          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RomesteadGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}