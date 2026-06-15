import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarmingGuideContent from "@/data/solarpunk/farming-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk/farming-guide`;

const imageUrls = [
  `${siteUrl}/images/solarpunk/solarpunk-wheat-quartz-islands-after-upgrade.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-first-berry-cotton-farm.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-watermelon-thirst-food.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-watermelon-juice-thirst-buff.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-animal-feed-wheat-recipe.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-airship-egg-upgrade.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-sprinkler-eight-plots.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-seed-pack-carrot-sunflower.webp`,
];

const toc = [
  { id: "solarpunk-farming-guide", label: "Farming guide" },
  { id: "best-crops-to-grow-first", label: "Crop functions" },
  { id: "crop-priority-route", label: "Crop route" },
  { id: "first-farm-setup", label: "First farm" },
  { id: "watermelon", label: "Watermelon" },
  { id: "wheat", label: "Wheat location" },
  { id: "wheat-requirements", label: "Wheat requirements" },
  { id: "animal-basics", label: "Animal Basics" },
  { id: "save-eggs", label: "Save eggs" },
  { id: "food-and-cooking", label: "Cooking timing" },
  { id: "sprinklers-power", label: "Sprinklers" },
  { id: "greenhouse-thunderstorms", label: "Thunderstorms" },
  { id: "seed-packs", label: "Seed packs" },
  { id: "later-animal-crops", label: "Animal crops" },
  { id: "recommended-farming-route", label: "Farming route" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/solarpunk",
    label: "Solarpunk Guide Hub",
  },
  {
    href: "/solarpunk/beginners-guide",
    label: "Solarpunk Beginner Guide",
  },
  {
    href: "/solarpunk/airship-guide",
    label: "Solarpunk Airship Guide",
  },
  {
    href: "/solarpunk/animals-guide",
    label: "Solarpunk Animals Guide",
  },
  {
    href: "/solarpunk/energy-system-guide",
    label: "Solarpunk Energy System Guide",
  },
  {
    href: "/solarpunk/research-progression-guide",
    label: "Solarpunk Research Progression Guide",
  },
];

export const metadata: Metadata = {
  title: "Solarpunk Farming Guide: Wheat, Crops, Seeds & Food",
  description:
    "Find Wheat, grow the right crops first, save eggs for airship upgrades, use seed packs and sprinklers, and avoid wasting progression food.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Solarpunk Farming Guide: Wheat, Crops, Seeds and Food",
    description:
      "Learn what to grow first in Solarpunk, where to find Wheat after the first airship upgrade, how much Wheat to save before Animal Basics, when to save eggs, how to use sprinklers and seed packs, and how to protect crops from storms.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Solarpunk wheat and quartz islands unlocked after the first airship range upgrade.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solarpunk Farming Guide",
    description:
      "Find Wheat, grow the right crops, save eggs, use sprinklers, and avoid wasting progression food.",
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
          name: "Solarpunk Farming Guide",
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
        "Solarpunk Farming Guide: Wheat, Crops, Seeds, Food and Egg Progression",
      description:
        "A player-focused Solarpunk farming guide explaining what crops to grow first, how berries and cotton support the starter island, how watermelon helps with thirst and travel, where to find Wheat after the first airship range upgrade, how much Wheat is needed for Animal Basics, Traderbot trades and Bread, why the first eggs should be saved for the airship upgrade, when it is safe to cook Wheat and eggs, how to use sprinklers without breaking the power grid, how to protect crops from thunderstorms, and how to use seed packs for Carrot, Corn, Sunflower and Wheat expansion.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-09",
      dateModified: "2026-06-15",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Solarpunk" },
        { "@type": "Thing", name: "Solarpunk farming guide" },
        { "@type": "Thing", name: "Solarpunk crops" },
        { "@type": "Thing", name: "Solarpunk best crops" },
        { "@type": "Thing", name: "Solarpunk berries" },
        { "@type": "Thing", name: "Solarpunk cotton" },
        { "@type": "Thing", name: "Solarpunk watermelon" },
        { "@type": "Thing", name: "Solarpunk wheat" },
        { "@type": "Thing", name: "Solarpunk where to find wheat" },
        { "@type": "Thing", name: "Solarpunk Animal Basics" },
        { "@type": "Thing", name: "Solarpunk animal feed" },
        { "@type": "Thing", name: "Solarpunk eggs" },
        { "@type": "Thing", name: "Solarpunk egg airship upgrade" },
        { "@type": "Thing", name: "Solarpunk bread" },
        { "@type": "Thing", name: "Solarpunk dough" },
        { "@type": "Thing", name: "Solarpunk food" },
        { "@type": "Thing", name: "Solarpunk cooking" },
        { "@type": "Thing", name: "Solarpunk sprinklers" },
        { "@type": "Thing", name: "Solarpunk greenhouse" },
        { "@type": "Thing", name: "Solarpunk thunderstorms crops" },
        { "@type": "Thing", name: "Solarpunk seed packs" },
        { "@type": "Thing", name: "Solarpunk carrot seeds" },
        { "@type": "Thing", name: "Solarpunk corn seeds" },
        { "@type": "Thing", name: "Solarpunk sunflower seeds" },
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
          name: "What should I grow first in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Grow berries and cotton first. Berries cover early food, while cotton becomes cloth for crafting, research, bed progress, and trades.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Wheat in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After the first airship range upgrade, check the east and west islands in the second ring. One side has a group of smaller islands, and the other side has a larger island. Bring home Wheat and seeds.",
          },
        },
        {
          "@type": "Question",
          name: "How much Wheat do I need before animals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A safe early target is 45 or more Wheat: 5 Wheat for Animal Basics, 10 Wheat for Traderbot, and 30 Wheat to make the Dough needed for 10 Bread.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make Bread in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Make Dough with Wheat, then put Dough into a furnace to make Bread. For 10 Bread, plan around 30 Wheat.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do with my first eggs in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save the first six eggs for the airship upgrade. Do not cook them until the upgrade trade is complete.",
          },
        },
        {
          "@type": "Question",
          name: "When is it safe to start cooking Wheat and eggs?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start cooking Wheat after Animal Basics, the 10 Wheat trade, and the 10 Bread trade are covered. Start cooking eggs after the six-egg airship upgrade is done and your animal setup produces reliably.",
          },
        },
        {
          "@type": "Question",
          name: "Are sprinklers worth it in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, once your farm grows beyond a few manual plots. A compact sprinkler block saves time, but check your power grid because sprinklers can drain energy.",
          },
        },
        {
          "@type": "Question",
          name: "How many plots can one sprinkler cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A compact early layout can cover eight nearby plots. Keep the layout tight before adding more sprinklers.",
          },
        },
        {
          "@type": "Question",
          name: "Which crops should I save for animals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save Wheat for chickens and Animal Feed, Carrot for pigs, and Corn for sheep. Do not spend all of these crops on cooking before your animal setup is stable.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I learn the full animal setup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Solarpunk Animals Guide for Chicken Coop, Pig Shelter, Sheep Shelter, Feeding Trough, Water Trough, lure crops, animal products, incubator, and animal transport.",
          },
        },
        {
          "@type": "Question",
          name: "Do thunderstorms damage crops in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fully grown exposed plants can be damaged by thunderstorms. Harvest important mature crops before storms when possible, and protect progression crops later with greenhouse-style growing space.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get more Carrot, Corn, and Sunflower seeds?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use seed packs after you unlock them. They are best used on rare or later crops such as Carrots, Corn, and Sunflowers, especially before cooking or spending those crops.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use seed packs on Wheat?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use seed packs on Wheat if Animal Feed is your bottleneck. Otherwise, save seed packs for rarer crops like Carrots, Corn, and Sunflowers.",
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
          title="Solarpunk Farming Guide: Wheat, Crops, Seeds and Food"
          description="Find Wheat, grow the right crops first, save eggs for the airship upgrade, and use seeds, sprinklers, and food without blocking progression."
          gameTitle="Solarpunk"
          gameHref="/solarpunk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FarmingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}