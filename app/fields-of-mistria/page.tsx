import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import FieldsOfMistriaGuideHubContent from "@/data/fields-of-mistria/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = hubUrl;

const metadataTitle =
  "Fields of Mistria Guide: Progression, Mines & Marriage";

const metadataDescription =
  "Follow Fields of Mistria progression from Stone Star and the Mines through seals, Deep Woods, town repairs, Engagement Ring, marriage, and achievements.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-renown-sources.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-stone-star-rank.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-opened.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-eastern-road-route.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-complete.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-repaired.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-marriage-ceremony.webp`,
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
      "Fields of Mistria Guide: Progression, Mines, Town Repairs & Marriage",
    description:
      "Follow the main route from early Renown and Stone Star through Mine seals, Deep Woods, late town projects, the Engagement Ring, marriage, and completion cleanup.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Fields of Mistria progression guide covering Renown Mines town projects and later progression",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Progress from Stone Star and the Mines through seals, Deep Woods, town repairs, the Engagement Ring, marriage, and long-term completion goals.",
    images: [imageUrls[0]],
  },
};

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
    label: "Engagement & marriage",
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
    id: "when-to-stop-for-the-day",
    label: "When to stop for the day",
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
    label: "Bell Tower Repair Guide",
  },
  {
    href: "/fields-of-mistria/engagement-ring",
    label: "Engagement Ring Guide",
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
      "Reach Stone Star Town Rank, follow the Mine reopening sequence, enter through the ladder, prepare the first run, and activate the first useful elevator checkpoints.",
  },
  {
    position: 2,
    name: "Fields of Mistria Water Seal Guide",
    url: `${pageUrl}/water-seal-guide`,
    description:
      "Solve the Floor 20 Water Tablet route, collect the required offerings, break the Water Seal, and continue Mine progression.",
  },
  {
    position: 3,
    name: "How to Unlock the Deep Woods in Fields of Mistria",
    url: `${pageUrl}/how-to-unlock-deep-woods`,
    description:
      "Get Dragon's Breath from Mine progression, clear the northern Eastern Road barrier, follow the forest route, and find Caldarus.",
  },
  {
    position: 4,
    name: "Fields of Mistria Saturday Market Plaza Guide",
    url: `${pageUrl}/saturday-market-plaza`,
    description:
      "Reach Gold Star, complete the Plaza project, report the materials to Adeline, and unlock Stillwell and Zorel at the expanded Saturday Market.",
  },
  {
    position: 5,
    name: "Fields of Mistria Bell Tower Repair Guide",
    url: `${pageUrl}/bell-tower-guide`,
    description:
      "Follow Zorel's Bell Tower quest, gather the repair materials, craft the Dragon-Forged Core and Fang, report to Adeline, and unlock the Bell Sound system.",
  },
  {
    position: 6,
    name: "Fields of Mistria Engagement Ring Guide",
    url: `${pageUrl}/engagement-ring`,
    description:
      "Reach 10 Hearts while dating, receive the recipe from Elsie, craft the Engagement Ring, start the proposal discussion, and postpone or confirm the engagement.",
  },
  {
    position: 7,
    name: "Fields of Mistria Marriage Guide",
    url: `${pageUrl}/marriage-guide`,
    description:
      "Continue after engagement by choosing a wedding date, completing planning conversations, preparing for the ceremony, and finishing the marriage route.",
  },
  {
    position: 8,
    name: "Fields of Mistria Achievements Guide",
    url: `${pageUrl}/achievements-guide`,
    description:
      "Track all 69 achievements in progression order and separate normal story unlocks from long-term Museum, skill, rank, Stillwell, relationship, and family goals.",
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
        "Fields of Mistria Guide: Progression, Mines, Deep Woods, Town Projects and Marriage",
      description:
        "A Fields of Mistria progression guide hub routing players from early farm priorities, Renown and Stone Star into the Mines, Water Seal and later seals, Dragon's Breath and the Deep Woods, Copper and Gold Star town projects, the Saturday Market Plaza, Bell Tower repair, Engagement Ring, marriage, achievement cleanup, and long-term resource planning.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Fields of Mistria",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria progression",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Mines",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Mine seals",
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
          name: "Fields of Mistria Engagement Ring",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria marriage",
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
          title="Fields of Mistria Progression Guide"
          description="I prioritize permanent access from Stone Star and the Mines through seals, Deep Woods, late town projects, the Engagement Ring, marriage, and long-term cleanup."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
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