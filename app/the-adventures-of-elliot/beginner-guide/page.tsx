import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/the-adventures-of-elliot/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-fay-revival.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-guidepost-southern-caves.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-ignite-magic-trial.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-catalpa-bow-unlock.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-hammer-unlock.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-golden-bell.webp`,
];

const toc = [
  { id: "beginner-guide", label: "Beginner guide" },
  { id: "difficulty-demo-save-and-bonuses", label: "Difficulty and demo save" },
  { id: "what-to-do-first", label: "What to do first" },
  { id: "early-resource-habits", label: "Early resource habits" },
  { id: "guideposts", label: "Guideposts" },
  { id: "southern-caves", label: "Southern Caves" },
  { id: "fay-and-faies-abilities", label: "Faie's abilities" },
  { id: "weapons-and-switching", label: "Weapons and switching" },
  { id: "heavy-hammer", label: "Heavy Hammer" },
  { id: "magicite-and-early-power", label: "Magicite and early power" },
  { id: "cats-and-golden-bell", label: "Cats and Golden Bell" },
  { id: "shards-of-life", label: "Shards of Life" },
  { id: "time-travel-and-four-ages", label: "Time travel and four ages" },
  { id: "local-coop", label: "Local co-op" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "early-checklist", label: "Early checklist" },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/the-adventures-of-elliot",
    label: "The Adventures of Elliot Guide Hub",
  },
  {
    href: "/the-adventures-of-elliot/walkthrough",
    label: "The Adventures of Elliot Walkthrough",
  },
  {
    href: "/the-adventures-of-elliot/cat-locations",
    label: "The Adventures of Elliot Cat Locations",
  },
  {
    href: "/the-adventures-of-elliot/shards-of-life-locations",
    label: "The Adventures of Elliot Shards of Life Locations",
  },
  {
    href: "/the-adventures-of-elliot/achievements-guide",
    label: "The Adventures of Elliot Achievements Guide",
  },
  {
    href: "/the-adventures-of-elliot/manuscript-locations",
    label: "The Adventures of Elliot Manuscript Locations",
    },
];

export const metadata: Metadata = {
    title: "The Adventures of Elliot Beginner Guide: First Steps & Tips", 
    description: "Start The Adventures of Elliot with difficulty, demo save, Faie, Southern Caves, guideposts, Ignite, Hammer, 7 weapons, Magicite, cats and Shards of Life.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Adventures of Elliot Beginner Guide: First Steps, Faie, Ignite and Weapons",
    description:
      "A practical beginner guide for The Adventures of Elliot covering difficulty, demo save carryover, Faie, Southern Caves, guideposts, early resources, Ignite, Heavy Hammer, Catalpa Bow, Magicite, cats, Shards of Life, time travel and local co-op.",
    
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Faie saves Elliot at the start of The Adventures of Elliot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adventures of Elliot Beginner Guide",
    description:
      "Learn what to do first: Faie, Southern Caves, guideposts, Ignite, weapons, Magicite, cats, Shards and early route habits.",
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
          name: "The Adventures of Elliot Guide",
          item: `${siteUrl}/the-adventures-of-elliot`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "The Adventures of Elliot Beginner Guide: Difficulty, Demo Save, Faie, Southern Caves, Ignite, Weapons, Magicite, Cats and Shards of Life",
      description:
        "A player-focused beginner guide for The Adventures of Elliot: The Millennium Tales explaining which early choices matter, how to handle difficulty and Prologue Demo save carryover, what to do after Faie joins Elliot, how to follow Hurick toward Southern Caves, why guideposts and marked NPCs are worth checking, how to build early resources with chests and breakable objects, how Ignite and Heavy Hammer change exploration, why Catalpa Bow and other weapons should be tested in safe fights, how Magicite should be collected before forcing a final build, why cats and Shards of Life should be tracked early, how four-age time travel affects blocked routes, and what local co-op changes for Faie.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "The Adventures of Elliot: The Millennium Tales" },
        { "@type": "Thing", name: "The Adventures of Elliot beginner guide" },
        { "@type": "Thing", name: "The Adventures of Elliot tips" },
        { "@type": "Thing", name: "The Adventures of Elliot what to do first" },
        { "@type": "Thing", name: "The Adventures of Elliot difficulty" },
        { "@type": "Thing", name: "The Adventures of Elliot demo save carry over" },
        { "@type": "Thing", name: "The Adventures of Elliot bonus rewards" },
        { "@type": "Thing", name: "The Adventures of Elliot Faie" },
        { "@type": "Thing", name: "The Adventures of Elliot Southern Caves" },
        { "@type": "Thing", name: "The Adventures of Elliot guideposts" },
        { "@type": "Thing", name: "The Adventures of Elliot marked NPCs" },
        { "@type": "Thing", name: "The Adventures of Elliot pots and barrels" },
        { "@type": "Thing", name: "The Adventures of Elliot Ignite" },
        { "@type": "Thing", name: "The Adventures of Elliot Heavy Hammer" },
        { "@type": "Thing", name: "The Adventures of Elliot Catalpa Bow" },
        { "@type": "Thing", name: "The Adventures of Elliot weapons" },
        { "@type": "Thing", name: "The Adventures of Elliot Magicite" },
        { "@type": "Thing", name: "The Adventures of Elliot cats" },
        { "@type": "Thing", name: "The Adventures of Elliot Shards of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot time travel" },
        { "@type": "Thing", name: "The Adventures of Elliot four ages" },
        { "@type": "Thing", name: "The Adventures of Elliot local co-op" },
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
          name: "What difficulty should I choose in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose a difficulty that lets you learn exploration, tools, Faie's magic, and weapon switching without turning every cave into a wall. Higher difficulty is better if you already enjoy careful combat from the start.",
          },
        },
        {
          "@type": "Question",
          name: "Does The Adventures of Elliot Prologue Demo save carry over?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. If you played the Prologue Demo, continue that save if you want to keep your early progress.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I claim bonus rewards in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the early safe hub or reward area once the story lets you move around again. Save-data or preorder rewards may be claimable there.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first after Faie joins Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Talk to Hurick near camp. He points you toward Southern Caves, which is the first real route back toward the village.",
          },
        },
        {
          "@type": "Question",
          name: "Should I break pots and barrels in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, when they are on your way. Break obvious pots, barrels, and similar objects for small resources, but do not slow the whole route just to clear every corner.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I talk to marked NPCs in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Marked NPCs may point to side quests, route clues, follow-up dialogue, or rewards after story progress. They are worth checking when you pass through town.",
          },
        },
        {
          "@type": "Question",
          name: "How do guideposts work in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guideposts act as important route markers and checkpoint-style points. Touch them whenever you see one, especially before entering a new cave, trial, or long side route.",
          },
        },
        {
          "@type": "Question",
          name: "Should I explore every chest and cave right away?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Check reachable side paths, but leave obvious tool checks for later. Many early rewards need Ignite, Hammer, bombs, weapon abilities, another route, or another age.",
          },
        },
        {
          "@type": "Question",
          name: "When do I get Ignite in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ignite comes from an early magic trial. After that, you can use Faie's power to light objects and solve early route checks.",
          },
        },
        {
          "@type": "Question",
          name: "How many weapons are there in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The game has multiple weapon types. Test new weapons in safe fights and avoid using only one weapon for the entire game.",
          },
        },
        {
          "@type": "Question",
          name: "Do weapons matter outside combat in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Some tools and weapon effects can interact with environmental objects or route checks. Hammer is the clearest early example, but ranged attacks and other weapon effects can also matter during exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Should I worry about Magicite early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Collect Magicite, but do not force a final build yet. Early Magicite is useful, but you need more weapons and enemy types before deciding what is best.",
          },
        },
        {
          "@type": "Question",
          name: "How does time travel work for exploration in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The game uses four ages, and the same location can change across ages. If a route is blocked now, it may open after story progress, a new tool, or another age.",
          },
        },
        {
          "@type": "Question",
          name: "Does The Adventures of Elliot have co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Local co-op lets a second player control Faie. The main route and collectibles stay the same.",
          },
        },
        {
          "@type": "Question",
          name: "Are cats important in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cats are tied to rewards and completion. Start tracking them early instead of leaving every cat for the end.",
          },
        },
        {
          "@type": "Question",
          name: "What are Shards of Life in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shards of Life are health-upgrade collectibles. Track them by route clue, room name, and nearby landmark so cleanup is easier later.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read after this beginner guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Walkthrough for the opening route in order, or return to the Guide Hub for all available guides.",
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
          title="Start The Adventures of Elliot Without Missing Early Tools"
          description="Learn what to do first, when to follow the story, how to use Faie, guideposts, Ignite and weapons, and which early cats, Shards and blocked paths to track."
          gameTitle="The Adventures of Elliot"
          gameHref="/the-adventures-of-elliot"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
