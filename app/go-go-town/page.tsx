import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import GoGoTownHubContent from "@/data/go-go-town/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/go-go-town`;

const metadataTitle =
  "Go-Go Town 1.0 Guide: Progression, EGO & Automation";

const metadataDescription =
  "Build a stable Go-Go Town 1.0 route from Forestry and Mining to Town Hall, EGO Tech, automation, Import, Creative Mode, Challenge 10 and the endgame.";

const imageUrls = [
  `${siteUrl}/images/go-go-town/go-go-town-four-industries-tutorial.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-town-hall-complete-train-station.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-town-rankings-app.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-tourist-desires-ego.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-final-town-goals.webp`,
];

const toc = [
  {
    id: "start-here",
    label: "Choose the right guide",
  },
  {
    id: "first-town-route",
    label: "First town route",
  },
  {
    id: "shops-housing-townies",
    label: "Shops, housing & Townies",
  },
  {
    id: "progression-systems",
    label: "Coins, EGO & progression",
  },
  {
    id: "automation",
    label: "When to automate",
  },
  {
    id: "import-export-expansion",
    label: "Import, Export & expansion",
  },
  {
    id: "creative-mode",
    label: "Creative Mode",
  },
  {
    id: "challenge-ten",
    label: "Challenge 10 preparation",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/go-go-town/automation-not-working/",
    label: "Workers, Couriers & Automation Fixes",
  },
  {
    href: "/go-go-town/progression-stuck/",
    label: "Town Goals, EGO Tech & Unlock Fixes",
  },
  {
    href: "/go-go-town/agent-peanut-safe-code/",
    label: "Agent Peanut, Safe Code & Town Deed",
  },
];

const faqEntities = [
  {
    question:
      "When should I import a material instead of producing it?",
    answer:
      "Import a material when a small quantity of one discovered item is blocking a required construction project. When a shop or processor consumes the same material repeatedly, build or repair a permanent production chain instead.",
  },
  {
    question: "What should I export first in Go-Go Town?",
    answer:
      "Export renewable surplus that is not reserved for a Town Goal, construction project, recipe, or EGO Tech purchase. Keep a deliberate reserve of processed construction materials until the next bracket requirements are known.",
  },
  {
    question:
      "Should I expand the map before buying my first Courier?",
    answer:
      "Usually not. Keep the first industries, Storage, shop, and housing close together. Expand after the current district has a real space problem or a new plot opens a required progression or resource route.",
  },
  {
    question:
      "Why is EGO still slow when every tourist desire has a building?",
    answer:
      "A building can exist without serving tourists effectively. Check whether it is open, staffed, stocked, reachable, clean, and close to the route visitors actually use. Use Tourist Tracker to identify the weakest result before buying another service.",
  },
  {
    question: "Can Creative Mode complete my normal Town Goals?",
    answer:
      "No. Creative Mode is useful for testing construction, terrain, and district layouts without normal economic pressure. Normal progression still requires its own goals, rewards, EGO Tech purchases, buildings, recipes, and workers.",
  },
  {
    question: "When is a second Courier worth buying?",
    answer:
      "Add a second Courier when the first Courier is correctly assigned, has a direct road, moves almost constantly, and still cannot keep a functioning destination stocked. A stationary first Courier needs diagnosis rather than duplication.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Go-Go Town 1.0 Guide: First Town, EGO Tech, Automation and Challenge 10",
    description:
      "Follow a complete Go-Go Town route from the four industries and Town Hall through shops, Townies, Tourist Tracker, EGO Tech, automation, Import, Creative Mode and Challenge 10.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Go-Go Town tutorial introducing the Forestry Mining Fishing and Farming industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Plan your first town, spend EGO with purpose, automate stable production, use Import wisely, and prepare for Challenge 10 in Go-Go Town 1.0.",
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
          name: "Go-Go Town 1.0 Guide",
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
        "Go-Go Town 1.0 Guide: Progression Route, EGO Tech, Automation and Challenge 10",
      description:
        "A complete Go-Go Town 1.0 progression hub covering the opening TownCo. tutorial, Forestry, Mining, Planks, Bricks, Town Hall construction, the Train Station, the first working shop, housing and Townie assignments, Coins, EGO, thumbs-up progress, Town Rankings, Claim Rewards, EGO Tech, Rebuy, Tourist Tracker, tourist desires, Courier automation, Import and Export decisions, map expansion, Creative Mode, Challenge 10 preparation, and the transition into the Agent Peanut endgame route.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      about: [
        {
          "@type": "VideoGame",
          name: "Go-Go Town!",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Go-Go Town 1.0 guide",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town beginner progression",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Forestry and Mining",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Hall",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Train Station",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town shops and Townies",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town housing",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Rankings",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town EGO Tech",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Tourist Tracker",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town tourist desires",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town automation",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Import App",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Export App",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Creative Mode",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Challenge 10",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Go-Go Town 1.0 Guide: My Full Progression Route"
          description="Start with Forestry and Mining, finish the Town Hall, open a working first shop, spend EGO with purpose, automate stable routes, and prepare cleanly for Challenge 10."
          gameTitle="Go-Go Town!"
          gameHref="/go-go-town/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GoGoTownHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Go-Go Town!"
          heading="Looking for another game after Go-Go Town?"
          description="Use the quick recommender to find a game that matches your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}