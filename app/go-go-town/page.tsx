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
  "Build a stable Go-Go Town 1.0 route from Forestry and Mining through Town Hall, EGO Tech, automation, Import, Treasures, Challenge 10 and the final Agents.";

const imageUrls = [
  `${siteUrl}/images/go-go-town/go-go-town-four-industries-tutorial.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-town-hall-complete-train-station.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-town-rankings-app.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-tourist-desires-ego.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-final-town-goals.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-boss-town-deed-secret-location.webp`,
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
    id: "import-treasures-expansion",
    label: "Import, Treasures & expansion",
  },
  {
    id: "creative-mode",
    label: "Creative Mode",
  },
  {
    id: "challenge-ten",
    label: "Challenge 10 & final Agents",
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
      "Can I move buildings or Industry Zone signs after placing them?",
    answer:
      "Yes. Use the pencil option in the Build Menu to reposition existing Props, including buildings and Zone signs. This is useful when an early layout blocks a road or leaves a processor outside the correct Industry Zone.",
  },
  {
    question: "Why can I no longer import another vehicle?",
    answer:
      "Vehicle imports can temporarily reach a purchase limit before the Catalogue restocks. Wait for the restock instead of assuming the vehicle was permanently removed or buying another vehicle type you do not need.",
  },
  {
    question:
      "Do the three final Agents only appear at a particular time of day?",
    answer:
      "No. Once the number-one ranking and Challenge 10 requirements are complete, check the Train Station without waiting for a particular time of day. Pending dialogue and arrival sequences matter more than the in-game clock.",
  },
  {
    question:
      "What should I do before my Coin or EGO wallet reaches its cap?",
    answer:
      "Spend the currency on a planned unlock, required construction project, or scheduled challenge before continuing to earn more. Leaving a wallet capped can waste Coins or EGO the town would otherwise generate.",
  },
  {
    question:
      "Does unlocking the Jailbreak App disable Story Mode achievements?",
    answer:
      "No. Unlocking the hidden Jailbreak App does not disable Story Mode achievement progress. Individual codes can still provide specific items, currency, or Townies, so keep those rewards separate from the normal progression route.",
  },
  {
    question: "Is the Import App available in Creative Mode?",
    answer:
      "Yes. The Import App can also be used in Creative Mode. It is useful when a layout test needs a particular discovered item or vehicle without waiting for a normal Story Mode production chain.",
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
      "Go-Go Town 1.0 Guide: Progression, Treasures & Final Agents",
    description:
      "Follow the route from Forestry, Mining and Town Hall through shops, Townies, Tourist Tracker, EGO Tech, automation, Import, Treasure Hunting, Challenge 10 and the final Agents.",
    siteName: "Whisper of the House",
    publishedTime: "2026-07-27",
    modifiedTime: "2026-07-28",
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
      "Build the first town, spend EGO around active goals, automate stable routes, manage Import and Treasures, and prepare for the final Agents.",
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
        "Go-Go Town 1.0 Guide: Progression Route, EGO Tech, Automation and Final Agents",
      description:
        "A complete Go-Go Town 1.0 progression hub covering the TownCo. tutorial, Forestry, Mining, Planks, Bricks, Town Hall construction, the Train Station, the first working shop, housing and Townie assignments, Coins, EGO, thumbs-up progression, Town Rankings, Claim Rewards, EGO Tech, Rebuy, Tourist Tracker, tourist desires, Courier automation, the Import App, Treasure Hunting, duplicate Treasures, map expansion, Creative Mode, Challenge 10, the final tournament reward, the Boss's Town Deed call, Agent Toffee, Agent Peppermint, Agent Peanut, and the transition into the final Safe and bunker route.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-27",
      dateModified: "2026-07-28",
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
          name: "Go-Go Town housing and job assignments",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Rankings",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Claim Rewards",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town EGO Tech and Rebuy",
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
          name: "Go-Go Town Couriers",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Import App",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Treasure Hunting",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Collections App",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town duplicate Treasures",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Creative Mode",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Challenge 10",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town final tournament reward",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Boss Town Deed call",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Agent Toffee",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Agent Peppermint",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Agent Peanut",
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
          description="I build the first production loop, spend EGO around active Town Goals, automate only working routes, then prepare Treasures, Coins, and the final Agent sequence."
          gameTitle="Go-Go Town!"
          gameHref="/go-go-town/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
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