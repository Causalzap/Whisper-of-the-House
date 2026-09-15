import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BestCiviliansContent from "@/data/halloween-the-game/best-civilians.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game/`;
const pageUrl = `${siteUrl}/halloween-the-game/best-civilians/`;

const metadataTitle =
  "Halloween: The Game Best Civilians – Tier List & Who to Pick";

const metadataDescription =
  "Rank all 12 Halloween: The Game Civilians and see who to pick for repairs, Residents, fighting Michael, mobility, escape progress, and support.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-best-civilians-tier-list.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-laurie-strode-stats.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-marcus-stats-traits.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-alexis-stats-traits.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-tanya-stats-traits.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-rachel-stats-traits.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-jennifer-stats-traits.webp`,
];

const toc = [
  {
    id: "best-civilians",
    label: "Best Civilians tier list",
  },
  {
    id: "laurie",
    label: "Laurie Strode",
  },
  {
    id: "marcus",
    label: "Marcus Navarro",
  },
  {
    id: "alexis-tanya",
    label: "Alexis vs Tanya",
  },
  {
    id: "rachel",
    label: "Rachel Calahan",
  },
  {
    id: "jennifer",
    label: "Jennifer Aarons",
  },
  {
    id: "b-tier",
    label: "When B-tier Civilians are good",
  },
  {
    id: "ranking-changes",
    label: "When the ranking changes",
  },
  {
    id: "michael-pressure",
    label: "Michael ability matchups",
  },
  {
    id: "perk-direction",
    label: "Perks for each role",
  },
  {
    id: "who-to-pick",
    label: "Who should you pick?",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide/",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/progression-perks/",
    label: "Progression & Perks Guide",
  },
  {
    href: "/halloween-the-game/escape-helper/",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers/",
    label: "How to Arrest Michael Myers",
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
    title: "Halloween: The Game Best Civilians – Tier List & Picks",
    description:
      "Compare all 12 Civilians and choose the best character for repairs, Residents, mobility, anti-Michael pressure, escape progress, or general multiplayer.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game tier list ranking all 12 playable Civilians into S A and B tiers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Best Civilians – Tier List & Picks",
    description:
      "Compare all 12 Civilians and choose the right character for repairs, Residents, mobility, fighting Michael, or general multiplayer.",
    images: [heroImage],
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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Halloween: The Game Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Civilians",
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
        "Halloween: The Game Best Civilians – Tier List and Who to Pick",
      description:
        "A practical ranking of all 12 Halloween: The Game Civilians, including who to pick for repairs, Resident support, mobility, anti-Michael pressure, escape progress, and different multiplayer match states.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-15",
      dateModified: "2026-09-15",
      articleSection: "Halloween: The Game Multiplayer Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Civilians",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Civilian tier list",
        },
        {
          "@type": "Thing",
          name: "Best Civilians",
        },
        {
          "@type": "Thing",
          name: "Laurie Strode",
        },
        {
          "@type": "Thing",
          name: "Marcus Navarro",
        },
        {
          "@type": "Thing",
          name: "Alexis Purcell",
        },
        {
          "@type": "Thing",
          name: "Tanya Harrison",
        },
        {
          "@type": "Thing",
          name: "Rachel Calahan",
        },
        {
          "@type": "Thing",
          name: "Jennifer Aarons",
        },
        {
          "@type": "Thing",
          name: "Civilian stats and traits",
        },
        {
          "@type": "Thing",
          name: "Resident support",
        },
        {
          "@type": "Thing",
          name: "Repair Expert",
        },
        {
          "@type": "Thing",
          name: "Popular",
        },
        {
          "@type": "Thing",
          name: "Full Moon",
        },
        {
          "@type": "Thing",
          name: "Ghost",
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
          title="Halloween: The Game Best Civilians – Who Should You Pick?"
          description="Compare all 12 Civilians by the job they actually perform best, from repairs and Resident support to mobility, Michael pressure, escape progress, and general survival."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestCiviliansContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}