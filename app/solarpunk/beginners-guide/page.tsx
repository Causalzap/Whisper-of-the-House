import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnersGuideContent from "@/data/solarpunk/beginners-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk/beginners-guide`;

const imageUrls = [
  `${siteUrl}/images/solarpunk/solarpunk-standard-soft-mode-choice.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-island-basic-resources.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-tools-pickaxe-hoe-crafting-table.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-berry-cotton-farm.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-survival-guide-early-tips.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-research-table.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-rain-collector-clean-water.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-bed-small-shelter.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-storage-chest.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-beehive-beeswax.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-wax-briquette-fuel.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-airship-dock-build.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-infinite-ore-patch.webp`,
];

const toc = [
  { id: "solarpunk-beginner-guide", label: "Beginner guide" },
  { id: "standard-vs-soft-mode", label: "Standard vs Soft" },
  { id: "first-session-goals", label: "First-session goals" },
  { id: "first-island-overview", label: "First island overview" },
  { id: "basic-resources", label: "Basic resources" },
  { id: "first-tools", label: "First tools" },
  { id: "plant-berries-cotton", label: "Berries and cotton" },
  { id: "survival-guide", label: "Survival Guide" },
  { id: "research-table", label: "Research Table" },
  { id: "clean-water", label: "Clean water" },
  { id: "bed-and-shelter", label: "Bed and shelter" },
  { id: "thunderstorm-safety", label: "Thunderstorms" },
  { id: "storage", label: "Storage" },
  { id: "beehives", label: "Beehives" },
  { id: "airship-dock", label: "Airship Dock" },
  { id: "first-island-priorities", label: "Priorities" },
  { id: "early-resource-advice", label: "Resource advice" },
  { id: "infinite-ore-patches", label: "Ore patches" },
  { id: "recommended-first-hour-route", label: "Route" },
  { id: "mistakes", label: "Mistakes" },
  { id: "what-to-read-next", label: "Read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/solarpunk",
    label: "Solarpunk Guide Hub",
  },
  {
    href: "/solarpunk/airship-guide",
    label: "Solarpunk Airship Guide",
  },
  {
    href: "/solarpunk/energy-system-guide",
    label: "Solarpunk Energy System Guide",
  },
  {
    href: "/solarpunk/research-progression-guide",
    label: "Solarpunk Research Progression Guide",
  },
  {
    href: "/solarpunk/farming-guide",
    label: "Solarpunk Farming Guide",
  },
];

export const metadata: Metadata = {
  title: "Solarpunk Beginner Guide: First Island, Mode & Airship Prep",
  description:
    "Start Solarpunk right: choose Standard or Soft, build food, water, research, storage and bed, save iron, find ore patches, and prep your airship.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Solarpunk Beginner Guide: First Island Route, Standard vs Soft Mode and Airship Prep",
    description:
      "A practical Solarpunk beginner guide covering Standard vs Soft mode, first-session goals, berries, cotton, Quick Crafting, Survival Guide, Rain Collector, Research Table, bed, storage, beehives, ore patches, thunderstorm safety, and first airship preparation.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Solarpunk new world screen showing Standard and Soft mode choice.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solarpunk Beginner Guide",
    description:
      "Choose the right mode, stabilize your first island, save key materials, and prepare for the first airship.",
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
          name: "Solarpunk Guide",
          item: `${siteUrl}/solarpunk`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Solarpunk Beginner Guide",
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
        "Solarpunk Beginner Guide: How to Start, Choose Standard or Soft Mode, Stabilize Your First Island and Prepare for the Airship",
      description:
        "A player-focused Solarpunk beginner guide explaining what to do first on the starter island, how Standard and Soft mode differ, what to finish in your first session, how to craft and use the Survival Guide from Quick Crafting, how to build the Research Table, Rain Collector, bed, storage and beehives, how to use berries and cotton early, how to handle thunderstorm safety, why infinite ore patches matter before your first flight, when to build the Airship Dock, and how to avoid wasting iron, cloth, cotton and beeswax before the first major progression gates.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-09",
      dateModified: "2026-06-09",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Solarpunk" },
        { "@type": "Thing", name: "Solarpunk beginner guide" },
        { "@type": "Thing", name: "Solarpunk beginners guide" },
        { "@type": "Thing", name: "Solarpunk what to do first" },
        { "@type": "Thing", name: "Solarpunk first island" },
        { "@type": "Thing", name: "Solarpunk Standard vs Soft mode" },
        { "@type": "Thing", name: "Solarpunk Soft mode" },
        { "@type": "Thing", name: "Solarpunk Survival Guide" },
        { "@type": "Thing", name: "Solarpunk Quick Crafting" },
        { "@type": "Thing", name: "Solarpunk Rain Collector" },
        { "@type": "Thing", name: "Solarpunk Research Table" },
        { "@type": "Thing", name: "Solarpunk cotton" },
        { "@type": "Thing", name: "Solarpunk berries" },
        { "@type": "Thing", name: "Solarpunk clean water" },
        { "@type": "Thing", name: "Solarpunk thunderstorms" },
        { "@type": "Thing", name: "Solarpunk beehives" },
        { "@type": "Thing", name: "Solarpunk beeswax" },
        { "@type": "Thing", name: "Solarpunk wax briquette" },
        { "@type": "Thing", name: "Solarpunk iron" },
        { "@type": "Thing", name: "Solarpunk ore patches" },
        { "@type": "Thing", name: "Solarpunk Airship Dock" },
        { "@type": "Thing", name: "Solarpunk Crashed Airship Component" },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I do first in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Collect berries, sticks, stones, wood, and cotton. Then craft basic tools, plant berries and cotton, craft the Survival Guide from Quick Crafting, build a Research Table, make a Rain Collector, and set up a bed.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pick Standard or Soft mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick Standard if you want the intended survival rules. Pick Soft if you want a more relaxed building and farming experience with lower hunger and thirst pressure, no inventory drop on death, and no lightning damage.",
          },
        },
        {
          "@type": "Question",
          name: "What should I finish in my first session?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A good first-session goal is Research Table, Rain Collector, Bed, basic storage, and cotton growing. That is enough to make the starter island feel stable.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get the Survival Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Craft the Survival Guide from the Quick Crafting menu after collecting basic starter materials. Read it early because it explains clean water, thunderstorms, crop safety, stairs, and airship basics.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first crop?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Berries are the safest first food crop, but cotton is the most important early progression crop because it becomes cloth.",
          },
        },
        {
          "@type": "Question",
          name: "Why is cotton important?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cotton becomes cloth. Cloth is needed for early research, crafting, bed progress, trades, and later progression steps.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get clean water early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build a Rain Collector. Rainwater is the safest early clean water source, and it also helps with refilling water tools.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make iron tools early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Basic stone tools are cheaper, and early iron is better saved for the first airship, repairs, dock progress, machines, and energy systems.",
          },
        },
        {
          "@type": "Question",
          name: "I can't find enough iron. Do I need to explore?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Look for large ore patches embedded in the ground. These patches are more important than loose rocks and can help before your first airship.",
          },
        },
        {
          "@type": "Question",
          name: "What should I research first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prioritize practical unlocks: Rain Collector, Chest, Bed, Beehive, and the Airship Dock path. Delay decorative unlocks until your base is stable.",
          },
        },
        {
          "@type": "Question",
          name: "Do thunderstorms damage crops?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fully grown plants can be damaged by thunderstorms if they are exposed. Harvest mature crops before storms when possible, and use greenhouse protection later for important crops.",
          },
        },
        {
          "@type": "Question",
          name: "When should I build the Airship Dock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build the Airship Dock after your first island has food, water, storage, cloth production, saved iron, and the Crashed Airship Component. Do not fly out underprepared.",
          },
        },
        {
          "@type": "Question",
          name: "Are beehives worth building early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Beehives produce beeswax, which supports Traderbot progression and wax briquettes later.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read after this beginner guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Airship Guide when you are ready to fly, the Energy System Guide when power begins, and the Farming Guide once wheat and animals become important.",
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
          title="Start Strong Without Wasting Your First Island"
          description="Pick the right mode, build food and water safely, save key materials, and get ready for the first airship."
          gameTitle="Solarpunk"
          gameHref="/solarpunk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnersGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}