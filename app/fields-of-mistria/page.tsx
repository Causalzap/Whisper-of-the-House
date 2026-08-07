import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaGuideHubContent from "@/data/fields-of-mistria/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = hubUrl;

const metadataTitle =
  "Fields of Mistria Guide: Progression, Mines & Marriage";

const metadataDescription =
  "Follow Fields of Mistria progression from Stone Star and the Mines through seals, Deep Woods, Saturday Market Plaza, Bell Tower, marriage, and achievements.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-complete.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-renown-sources.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-stone-star-rank.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-opened.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-eastern-road-route.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-repaired.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-marriage-ceremony.webp`,
];

const toc = [
  {
    id: "opening-priorities",
    label: "Opening priorities",
  },
  {
    id: "first-spring-routine",
    label: "First Spring routine",
  },
  {
    id: "raise-renown",
    label: "Raise Town Rank",
  },
  {
    id: "unlock-mines",
    label: "Unlock the Mines",
  },
  {
    id: "water-seal",
    label: "Water Seal",
  },
  {
    id: "later-mine-progression",
    label: "Later Mine progression",
  },
  {
    id: "unlock-deep-woods",
    label: "Unlock the Deep Woods",
  },
  {
    id: "copper-star-summit",
    label: "Copper Star & Summit",
  },
  {
    id: "midgame-resource-planning",
    label: "Protect rare resources",
  },
  {
    id: "saturday-market-plaza",
    label: "Saturday Market Plaza",
  },
  {
    id: "bell-tower",
    label: "Bell Tower",
  },
  {
    id: "marriage",
    label: "Marriage",
  },
  {
    id: "achievement-cleanup",
    label: "Achievement cleanup",
  },
  {
    id: "what-to-keep",
    label: "What to keep",
  },
  {
    id: "fields-of-mistria-faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/fields-of-mistria/how-to-unlock-mines",
    label: "How to Unlock the Mines",
  },
  {
    href: "/fields-of-mistria/water-seal-guide",
    label: "Water Seal Guide",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-deep-woods",
    label: "How to Unlock the Deep Woods",
  },
  {
    href: "/fields-of-mistria/saturday-market-plaza",
    label: "Saturday Market Plaza Guide",
  },
  {
    href: "/fields-of-mistria/bell-tower-guide",
    label: "Bell Tower Guide",
  },
  {
    href: "/fields-of-mistria/marriage-guide",
    label: "Marriage Guide",
  },
  {
    href: "/fields-of-mistria/achievements-guide",
    label: "Achievements Guide",
  },
];

const guideItems = [
  {
    position: 1,
    name: "How to Unlock the Mines in Fields of Mistria",
    url: `${pageUrl}/how-to-unlock-mines`,
    description:
      "Reach Stone Star Town Rank, follow the Mine reopening sequence, enter through the ladder, prepare the first run, and activate the initial elevator checkpoint.",
  },
  {
    position: 2,
    name: "Fields of Mistria Water Seal Guide",
    url: `${pageUrl}/water-seal-guide`,
    description:
      "Translate the Floor 20 Water Tablet, collect the Ruby, Stone Loach, Lantern Moth, and Upper Mines Mushroom, open the seal, and unlock Summon Rain.",
  },
  {
    position: 3,
    name: "How to Unlock the Deep Woods in Fields of Mistria",
    url: `${pageUrl}/how-to-unlock-deep-woods`,
    description:
      "Complete the Fire Seal route, obtain Dragon's Breath, clear the Eastern Road barrier, follow the forest landmarks, and find Caldarus.",
  },
  {
    position: 4,
    name: "Fields of Mistria Saturday Market Plaza Guide",
    url: `${pageUrl}/saturday-market-plaza`,
    description:
      "Reach Gold Star, complete the Plaza materials, report to Adeline, meet Stillwell and Zorel, use the Mission Board, and set up Crystal Resonator music.",
  },
  {
    position: 5,
    name: "Fields of Mistria Bell Tower Guide",
    url: `${pageUrl}/bell-tower-guide`,
    description:
      "Start Zorel's Bell Tower project, craft the Dragon-Forged components, complete the Donation Box, report to Adeline, and select a town bell sound.",
  },
  {
    position: 6,
    name: "Fields of Mistria Marriage Guide",
    url: `${pageUrl}/marriage-guide`,
    description:
      "Reach 10 Hearts while dating, receive the Engagement Ring Recipe, choose a spouse, schedule the wedding, complete the planning conversations, and finish the ceremony.",
  },
  {
    position: 7,
    name: "Fields of Mistria Achievements Guide",
    url: `${pageUrl}/achievements-guide`,
    description:
      "Track all 69 achievements in progression order and separate normal story unlocks from long-term Museum, skill, Stillwell, relationship, rank, and family goals.",
  },
];

const faqEntities = [
  {
    question: "Do I need a new save for Fields of Mistria 1.0?",
    answer:
      "No. An established save can continue into the new progression from its current point. Previously completed achievement conditions may also be recognized after the save and its related systems are loaded.",
  },
  {
    question: "What is the first spell I receive in Fields of Mistria?",
    answer:
      "The first spell in this progression route is Full Restore. Caldarus adds it to the Journal, and casting it restores Health and Stamina while the spent Mana recovers gradually over subsequent nights.",
  },
  {
    question:
      "Do I need to complete the Museum before getting married in Fields of Mistria?",
    answer:
      "No. Museum completion and marriage are separate progression routes. Marriage depends on dating, reaching 10 Hearts, crafting the Engagement Ring, accepting the proposal, and completing the scheduled wedding.",
  },
  {
    question:
      "Should I finish every Mine floor before moving on in Fields of Mistria?",
    answer:
      "No. Prioritize the next ladder, elevator checkpoint, tablet, or seal. Once permanent progress is active, you can return later for missed ore, enemies, artifacts, fish, insects, and treasure.",
  },
  {
    question:
      "Should I sell the first copy of a rare Fields of Mistria item?",
    answer:
      "Usually not. Check the Museum, active quests, Mine seal offerings, Forge recipes, town repairs, Stillwell missions, gift needs, and seasonal availability before selling the first unfamiliar copy.",
  },
  {
    question: "Is having a child required after marriage?",
    answer:
      "No. Completing the wedding finishes the marriage route. Later family planning and child progression are separate optional systems.",
  },
  {
    question:
      "When should I stop a Mine or resource run in Fields of Mistria?",
    answer:
      "Return home after securing permanent progress when the remaining Health, Stamina, time, or inventory space makes the next objective unsafe. An activated checkpoint, opened seal, or cleared route remains available the next day.",
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
      "Fields of Mistria Guide: Mines, Seals, Town Repairs and Marriage",
    description:
      "Follow the main progression route from early Renown and Stone Star through the Mines, Water Seal, Deep Woods, Saturday Market Plaza, Bell Tower, marriage, and achievement cleanup.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "The completed Saturday Market Plaza in Fields of Mistria with the new vendor stalls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Fields of Mistria Guide",
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
        "Fields of Mistria Guide: Progression, Mines, Deep Woods, Marriage and Achievements",
      description:
        "A Fields of Mistria progression guide hub that routes players from the opening farm, Renown and Stone Star into the Mines, Water Seal and later seal progression, Dragon's Breath and the Deep Woods, Copper and Gold Star town projects, the Saturday Market Plaza, Bell Tower repair, 10-heart marriage route, resource planning, and achievement cleanup.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-06",
      about: [
        {
          "@type": "VideoGame",
          name: "Fields of Mistria",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria progression guide",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Mines guide",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Water Seal",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Deep Woods",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Saturday Market Plaza",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Bell Tower",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria marriage guide",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria achievements",
        },
      ],
      hasPart: {
        "@id": `${pageUrl}#guide-list`,
      },
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
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Fields of Mistria Guides",
      numberOfItems: guideItems.length,
      itemListElement: guideItems.map(
        ({ position, name, url, description }) => ({
          "@type": "ListItem",
          position,
          item: {
            "@type": "Article",
            name,
            url,
            description,
          },
        }),
      ),
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
          title="Fields of Mistria Guide Hub"
          description="Move from early Renown and Stone Star through the Mines, seals, Deep Woods, late town repairs, marriage, and achievement cleanup without wasting rare resources or repeating completed routes."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaGuideHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Fields of Mistria"
          heading="Looking for another game after Fields of Mistria?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}