import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AnimalsGuideContent from "@/data/solarpunk/animals-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk/animals-guide`;

const imageUrls = [
  `${siteUrl}/images/solarpunk/solarpunk-animal-basics-pack-research.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-chicken-coop-recipe.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-animal-feed-wheat-recipe.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-feeding-water-trough-setup.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-chicken-wheat-follow.webp`,
  `${siteUrl}/images/solarpunk/solarpunk-chicken-coop-eggs.webp`,
];

const toc = [
  { id: "solarpunk-animals-guide", label: "Animals guide" },
  { id: "animal-care-checklist", label: "Care checklist" },
  { id: "all-animals", label: "All animals" },
  { id: "shelter-recipes", label: "Shelter recipes" },
  { id: "animal-feed-recipes", label: "Animal feed" },
  { id: "feeding-water-troughs", label: "Troughs and tools" },
  { id: "how-to-lure-animals", label: "Lure animals" },
  { id: "chickens-eggs", label: "Chickens and eggs" },
  { id: "pigs-truffles", label: "Pigs and truffles" },
  { id: "sheep-milk", label: "Sheep and milk" },
  { id: "powered-animal-care", label: "Powered care" },
  { id: "animal-transport", label: "Animal transport" },
  { id: "common-animal-problems", label: "Common problems" },
  { id: "recommended-animal-route", label: "Animal route" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/solarpunk",
    label: "Solarpunk Guide Hub",
  },
  {
    href: "/solarpunk/farming-guide",
    label: "Solarpunk Farming Guide",
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
];

export const metadata: Metadata = {
  title: "Solarpunk Animals Guide | Chickens, Pigs, Sheep & Eggs",
  description:
  "Learn how animals work in Solarpunk, including chickens, pigs, sheep, lure crops, shelters, Animal Feed, troughs, eggs, truffles, milk and transport.",  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Solarpunk Animals Guide: Chickens, Pigs, Sheep and Eggs",
    description:
      "Learn how to unlock animal care in Solarpunk, build shelters and troughs, make Animal Feed, lure chickens with Wheat, pigs with Carrot, and sheep with Corn, then collect Eggs, Truffles, and Sheep's Milk.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 822,
        height: 526,
        alt: "Solarpunk message telling the player to unlock Animal Basics Pack before animal care.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solarpunk Animals Guide",
    description:
      "Unlock animals, build shelters, fill troughs, lure chickens, pigs and sheep, and collect Eggs, Truffles and Sheep's Milk.",
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
          name: "Solarpunk Animals Guide",
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
        "Solarpunk Animals Guide: Chickens, Pigs, Sheep, Feed, Shelters and Products",
      description:
        "A player-focused Solarpunk animals guide explaining how to unlock Animal Basics Pack, build Chicken Coop, Pig Shelter and Sheep Shelter, place Feeding Trough and Water Trough, make Animal Feed, lure chickens with Wheat, pigs with Carrot and sheep with Corn, collect Eggs, Truffles and Sheep's Milk, avoid common animal setup mistakes, and use powered care, Chicken Incubator and animal transport when your farm and energy network are ready.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-15",
      dateModified: "2026-06-15",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Solarpunk" },
        { "@type": "Thing", name: "Solarpunk animals guide" },
        { "@type": "Thing", name: "Solarpunk animals" },
        { "@type": "Thing", name: "Solarpunk chickens" },
        { "@type": "Thing", name: "Solarpunk chicken coop" },
        { "@type": "Thing", name: "Solarpunk eggs" },
        { "@type": "Thing", name: "Solarpunk pigs" },
        { "@type": "Thing", name: "Solarpunk truffles" },
        { "@type": "Thing", name: "Solarpunk sheep" },
        { "@type": "Thing", name: "Solarpunk sheep milk" },
        { "@type": "Thing", name: "Solarpunk Animal Basics Pack" },
        { "@type": "Thing", name: "Solarpunk Animal Feed" },
        { "@type": "Thing", name: "Solarpunk Feeding Trough" },
        { "@type": "Thing", name: "Solarpunk Water Trough" },
        { "@type": "Thing", name: "Solarpunk lure crops" },
        { "@type": "Thing", name: "Solarpunk Wheat" },
        { "@type": "Thing", name: "Solarpunk Carrot" },
        { "@type": "Thing", name: "Solarpunk Corn" },
        { "@type": "Thing", name: "Solarpunk Chicken Incubator" },
        { "@type": "Thing", name: "Solarpunk animal transport" },
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
          name: "How do animals work in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build the matching shelter, place a Feeding Trough and Water Trough nearby, add feed and water, then lure the animal home with its preferred crop. Once the animal is cared for and grown, it can produce its animal product.",
          },
        },
        {
          "@type": "Question",
          name: "What animals are in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The main animal types are chickens, pigs, and sheep. Chickens produce Eggs, pigs produce Truffles, and sheep produce Sheep's Milk.",
          },
        },
        {
          "@type": "Question",
          name: "What do chickens follow in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Chickens follow Wheat. Wheat is also used for basic Animal Feed, so keep your Wheat farm stable before scaling chickens.",
          },
        },
        {
          "@type": "Question",
          name: "What do pigs follow in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pigs follow Carrot and use the Pig Shelter. They produce Truffles.",
          },
        },
        {
          "@type": "Question",
          name: "What do sheep follow in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sheep follow Corn and use the Sheep Shelter. They produce Sheep's Milk.",
          },
        },
        {
          "@type": "Question",
          name: "How long do animals take to grow up in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Chickens, pigs, and sheep each grow up in 10 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Why can I not interact with animals in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may not have the right animal unlock yet. Start with Animal Basics Pack, then unlock the matching animal shelter and bring the correct lure crop.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my animal not producing in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check shelter, feed, water, spacing, and crop supply. A shelter alone is not enough if the Feeding Trough or Water Trough is empty.",
          },
        },
        {
          "@type": "Question",
          name: "How much water does the Water Trough hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The basic Water Trough holds 100 water. It can fill from rain or be filled with a watercan.",
          },
        },
        {
          "@type": "Question",
          name: "What does Animal Feed cost in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Basic Animal Feed uses Wheat x2 at the Crafting Table. Better Animal Feed recipes produce Animal Feed x3 with Sunflower plus another crop.",
          },
        },
        {
          "@type": "Question",
          name: "Are powered animal buildings worth it in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, once your energy grid is stable. Automatic Feeder and Water Trough Powered each use 50 power, while the Chicken Incubator uses 200 power.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Chicken Incubator do in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Chicken Incubator hatches hatchable eggs in 1 minute, but it uses 200 power, so do not add it before your energy setup can handle the load.",
          },
        },
        {
          "@type": "Question",
          name: "How do I move animals between islands in Solarpunk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Animal Transportation and the Animal Receiving Station after unlocking Animal Transport. Make sure the destination has shelter, feed, and water ready.",
          },
        },
        {
          "@type": "Question",
          name: "Should I add pigs and sheep right after chickens?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not immediately. Add pigs once Carrots are stable, and add sheep once Corn and Wheat are stable. Expanding animals too early can drain feed and crops.",
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
          title="Solarpunk Animals Guide: Chickens, Pigs, Sheep and Eggs"
          description="Build shelters, fill troughs, lure animals with the right crops, and collect Eggs, Truffles, and Sheep's Milk without draining your farm."
          gameTitle="Solarpunk"
          gameHref="/solarpunk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AnimalsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
