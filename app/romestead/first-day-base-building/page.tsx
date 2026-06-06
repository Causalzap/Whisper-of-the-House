import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FirstDayBaseBuildingContent from "@/data/romestead/first-day-base-building.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/first-day-base-building`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-death-drops-setting.webp`,
  `${siteUrl}/images/romestead/romestead-town-core-construction-mode.webp`,
  `${siteUrl}/images/romestead/romestead-first-settlement-requirements.webp`,
  `${siteUrl}/images/romestead/romestead-leatherworker-bedroll.webp`,
  `${siteUrl}/images/romestead/romestead-citizen-assignment-town-core.webp`,
  `${siteUrl}/images/romestead/romestead-town-defense-value.webp`,
  `${siteUrl}/images/romestead/romestead-town-raid-approaching.webp`,
];

const toc = [
  { id: "death-setting", label: "Death setting" },
  { id: "flint-tools", label: "Flint and tools" },
  { id: "physical-building", label: "Building loop" },
  { id: "workbench-town-core-altar", label: "Core buildings" },
  { id: "base-layout", label: "Base layout" },
  { id: "first-buildings", label: "First buildings" },
  { id: "food-storage", label: "Food Storage" },
  { id: "leatherworker-bedroll", label: "Bedroll and sleep" },
  { id: "worker-assignment", label: "Assign worker" },
  { id: "town-raids-defense", label: "Raids and defense" },
  { id: "material-storage-note", label: "Material Storage" },
  { id: "when-to-explore", label: "When to explore" },
  { id: "first-day-summary", label: "Summary" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
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
  title: "Romestead First Day Build Order: Best Base Layout & Buildings",
  description:
    "Follow the best Romestead first-day build order with a compact base layout, early buildings, Town Core, Altar, Food Storage, Bedroll, workers and raid defense.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Romestead First Day Build Order: Best Base Layout and Buildings",
    description:
            "A practical Romestead first-day build order covering base layout, tools, Workbench, Town Core, Altar, Food Storage, Leather Bedroll, workers, raids and Defense Value.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Romestead Citizens tutorial explaining housing, Food Storage, Leatherworker, Insula, defenses and citizen jobs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romestead First Day Guide: Best Start and First Buildings",
    description:
      "Build a safer first town in Romestead with Town Core, Altar, Food Storage, Bedroll, worker assignment, raids and defense prep.",
    images: [imageUrls[2]],
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
          name: "First Day and Base Building",
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
        "Romestead First Day Build Order: Best Base Layout, First Buildings, Bedroll, Workers and Defense",
      description:
        "A player-focused Romestead first-day guide explaining how to choose a death setting, get flint shards and sticks, craft first tools, use the Workbench and Town Core, build an Altar, set up housing and Food Storage, use the Leatherworker to craft a Leather Bedroll for sleep and respawn, assign the first worker, prepare for Town Raids, understand Defense Value, avoid relying on Material Storage too early, and decide when the town is ready for the Giant Owl, dungeons or longer exploration.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-27",
      dateModified: "2026-06-06",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead First Day" },
        { "@type": "Thing", name: "Romestead Beginner Guide" },
        { "@type": "Thing", name: "Town Core" },
        { "@type": "Thing", name: "Altar" },
        { "@type": "Thing", name: "Food Storage" },
        { "@type": "Thing", name: "Leather Bedroll" },
        { "@type": "Thing", name: "Romestead Sleep" },
        { "@type": "Thing", name: "Respawn Point" },
        { "@type": "Thing", name: "Town Raids" },
        { "@type": "Thing", name: "Defense Value" },
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
          name: "What should I do first in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Collect sticks and flint shards, craft tools, place a Workbench, build a Town Core, then add an Altar, housing, Food Storage, a Leatherworker, and one assigned worker.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get flint shards in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick up Flint and throw it onto a Rock to break it into shards. If the interaction changes during Early Access, follow the current tutorial prompt, but the goal is to turn raw flint into usable shards for early tools.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Altar required on the first day in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Build the Altar early because it connects your first town to god objectives, offerings, the Guardian's Eye route and later unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best first buildings in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best first buildings are Workbench, Town Core, Altar, housing, Food Storage and Leatherworker. After that, add worker support, hauling, roads and basic defense.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sleep in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Craft a Leather Bedroll at the Leatherworker with 2 Leather, 2 Wool and 1 Wheat, place it inside a house, then interact with it to sleep through the night. This also sets your respawn point.",
          },
        },
        {
          "@type": "Question",
          name: "Can you move buildings in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the building or construction UI for move, cancel, dismantle or rebuild options. During the first day, it is safer to place the Town Core, housing, Food Storage and workplaces with extra room around them so you do not have to rebuild your whole town later.",
          },
        },
        {
          "@type": "Question",
          name: "Can you remove a Workbench, chest or farmland in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the object or building interaction menu for remove, dismantle, cancel or destroy options. If the current build does not offer a clean removal option, expand around the mistake instead of trapping important buildings in a cramped starter area.",
          },
        },
        {
          "@type": "Question",
          name: "Does Bedroll set a respawn point in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Leather Bedroll is part of your sleep and safety setup because it lets you skip night and sets your respawn point.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my citizens not working in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most work buildings need a citizen assigned. Open the Town Core and assign the citizen to the correct workplace before assuming the building is broken.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I need Food Storage in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Citizens need accessible food. Food in your personal inventory does not solve the town's food problem, so build Food Storage and stock it before recruiting too aggressively.",
          },
        },
        {
          "@type": "Question",
          name: "What is Defense Value in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Defense Value reflects how prepared your town is to handle threats. Build walls, battlements, traps or defensive structures, then check whether the town defense value improves.",
          },
        },
        {
          "@type": "Question",
          name: "What are Town Raids in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Town Raids are attacks on your settlement. If a raid is approaching, return home, prepare food and healing, and fight near your defenses instead of staying far away.",
          },
        },
        {
          "@type": "Question",
          name: "Can citizens die during raids in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Citizens can be put at risk if the town is under-defended. Avoid over-recruiting before you have housing, food, jobs and defense.",
          },
        },
        {
          "@type": "Question",
          name: "Should I fight the Giant Owl on the first day?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Build a stable town, craft armor or better gear, prepare food, understand sleep and death recovery, then fight the Giant Owl when you can safely claim the Guardian's Eye reward.",
          },
        },
        {
          "@type": "Question",
          name: "When do I unlock Material Storage in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Material Storage is tied to early boss and god progression rather than your first few minutes. Do not rely on it to solve day-one storage.",
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
          title="Romestead First Day Build Order: What to Build First"
          description="Build a safer first town with a compact base layout, Town Core, Altar, Food Storage, Leather Bedroll, workers, sleep, raids and Defense Value."          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FirstDayBaseBuildingContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}