import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BarnAnimalsContent from "@/data/moonlight-peaks/barn-animals-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moonlight-peaks/barn-animals-guide`;

const imageUrls = [
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-barn-cost-four-animals.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-luna-chickens-eggs-fertilizer.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-refiner-animal-feed-fodder.webp`,
];

const toc = [
  {
    id: "moonlight-peaks-barn-animals-guide",
    label: "Barn animals guide",
  },
  {
    id: "farm-animals-for-sale",
    label: "Farm Animals for Sale",
  },
  {
    id: "barn-cost-and-placement",
    label: "Barn cost",
  },
  {
    id: "luna-animal-rotation",
    label: "Luna rotation",
  },
  {
    id: "barn-capacity",
    label: "Barn capacity",
  },
  {
    id: "animal-options-and-first-picks",
    label: "Animal picks",
  },
  {
    id: "feed-fodder-and-refiner",
    label: "Feed and Fodder",
  },
  {
    id: "animal-goods-and-fertilizer",
    label: "Goods and fertilizer",
  },
  {
    id: "money-route-for-barn",
    label: "Money route",
  },
  {
    id: "where-to-place-barn",
    label: "Barn placement",
  },
  {
    id: "common-barn-mistakes",
    label: "Common mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/moonlight-peaks",
    label: "Moonlight Peaks Guide Hub",
  },
  {
    href: "/moonlight-peaks/beginner-guide",
    label: "Moonlight Peaks Beginner Guide",
  },
  {
    href: "/moonlight-peaks/early-resources-tool-upgrades-guide",
    label: "Early Resources and Tool Upgrades Guide",
  },
  {
    href: "/moonlight-peaks/misty-shores-mines-copper-guide",
    label: "Misty Shores, Mines and Copper Guide",
  },
  {
    href: "/moonlight-peaks/feature-unlocks-guide",
    label: "Feature Unlocks Guide",
  },
];

export const metadata: Metadata = {
  title: "Moonlight Peaks Barn Animals Guide: Feed & Fodder",
  description:
    "Build the Moonlight Peaks barn with cost, 10x6 size, 4 animal slots, Luna rotation, Cheeken, Cowcula, Piggoat, Draculamb, feed and Fodder.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Moonlight Peaks Barn Animals Guide: Cost, Feed, Fodder and First Picks",
    description:
      "Plan the Moonlight Peaks barn route with 4,000 gold cost, 10x6 placement, four-animal capacity, Luna's animal rotation, Fodder, Premium Fodder, fertilizer, and first animal choices.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Moonlight Peaks barn purchase screen showing 4000 gold cost, 10x6 size, 1 Night build time and four animal capacity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Peaks Barn Animals Guide",
    description:
      "Plan the Moonlight Peaks barn, Luna animal rotation, Cheeken, Cowcula, Piggoat, Draculamb, Fodder, feed and fertilizer route.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "How much does the barn cost in Moonlight Peaks?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The barn costs 4,000 gold at Howling Hammer.",
    },
  },
  {
    "@type": "Question",
    name: "How big is the barn?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The barn uses a 10x6 placement area and takes 1 Night to build.",
    },
  },
  {
    "@type": "Question",
    name: "How many animals does one barn hold?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "One barn holds 4 animals.",
    },
  },
  {
    "@type": "Question",
    name: "How do I get more than 4 animals?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Build another barn. One barn holds 4 animals, so a larger ranch needs another barn rather than a simple capacity upgrade.",
    },
  },
  {
    "@type": "Question",
    name: "How do I start raising animals?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Follow Luna's animal route and watch for Farm Animals for Sale, then build a barn before adopting animals.",
    },
  },
  {
    "@type": "Question",
    name: "What animals can I get early?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The key early names are Cheeken, Piggoat, Draculamb, and Cowcula. The selection can rotate after the barn is built.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I only see Cheekens?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Before the first barn, Luna's yard may only show Cheekens. After the barn is built, more animals can rotate into the daily selection.",
    },
  },
  {
    "@type": "Question",
    name: "Do Luna's animals change every day?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes. After your barn is built, Luna's available animals can rotate daily, usually with 3 choices outside her house.",
    },
  },
  {
    "@type": "Question",
    name: "Do I need to name animals myself?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes. When adopting, be ready to choose a name yourself instead of relying on a default suggestion.",
    },
  },
  {
    "@type": "Question",
    name: "How does feeding work?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Use Fodder in the feeder or trough so animals can eat overnight. Premium Fodder is a higher feed tier, but normal Fodder is the first priority.",
    },
  },
  {
    "@type": "Question",
    name: "How do I make Fodder?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Use the refiner with farm cleanup materials such as fiber. Once animals are planned, fiber becomes important feed material.",
    },
  },
  {
    "@type": "Question",
    name: "What is Premium Fodder?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Premium Fodder is a higher-tier feed made from Fodder and Mana Essence. I wait on it until the basic animal route is stable.",
    },
  },
  {
    "@type": "Question",
    name: "Should I fill the barn with the same animal?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Usually no. With only 4 slots, a mixed barn covers more goods, requests, and future crafting needs.",
    },
  },
  {
    "@type": "Question",
    name: "Do animals help with fertilizer?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Yes. Animals help support fertilizer, which feeds back into crop quality.",
    },
  },
  {
    "@type": "Question",
    name: "Should I buy the barn before tool upgrades?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Only if the ranch route is your next real bottleneck. If copper, tools, or inventory are blocking progress, solve those first.",
    },
  },
];

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
          name: "Moonlight Peaks Guide",
          item: `${siteUrl}/moonlight-peaks`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Barn and Animals Guide",
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
        "Moonlight Peaks Barn Animals Guide: Cost, Feed, Fodder, Luna Rotation and First Picks",
      description:
        "A player-focused Moonlight Peaks barn and animals guide covering the 4,000 gold barn, 10x6 placement, 1 Night build time, four-animal capacity, Luna's Farm Animals for Sale route, Cheeken, Piggoat, Draculamb, Cowcula, daily animal rotation, Fodder, Premium Fodder, feeder checks, fertilizer, second barn planning, and common ranch mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Moonlight Peaks" },
        { "@type": "Thing", name: "Moonlight Peaks barn" },
        { "@type": "Thing", name: "Moonlight Peaks animals" },
        { "@type": "Thing", name: "Moonlight Peaks barn cost" },
        { "@type": "Thing", name: "Moonlight Peaks Luna" },
        { "@type": "Thing", name: "Farm Animals for Sale" },
        { "@type": "Thing", name: "Cheeken" },
        { "@type": "Thing", name: "Piggoat" },
        { "@type": "Thing", name: "Draculamb" },
        { "@type": "Thing", name: "Cowcula" },
        { "@type": "Thing", name: "Fodder" },
        { "@type": "Thing", name: "Premium Fodder" },
        { "@type": "Thing", name: "Moonlight Peaks fertilizer" },
        { "@type": "Thing", name: "Moonlight Peaks second barn" },
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
      mainEntity: faqEntities,
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
          title="Moonlight Peaks Barn and Animals Guide"
          description="Plan the 4,000 gold barn, 10x6 placement, Luna's animal rotation, Cheeken, Piggoat, Draculamb, Cowcula, Fodder, feed, fertilizer and second barn route."
          gameTitle="Moonlight Peaks"
          gameHref="/moonlight-peaks"
          breadcrumbBaseHref="/moonlight-peaks"
          breadcrumbBaseLabel="Moonlight Peaks Guide"
          updatedAt="July 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BarnAnimalsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}