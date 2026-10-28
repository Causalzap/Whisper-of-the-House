
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BestCiviliansContent from "@/data/halloween-the-game/best-civilians.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/best-civilians`;

const metadataTitle =
  "Halloween: The Game Best Civilians – Tier List & Who to Pick";

const metadataDescription =
  "Compare all 14 Halloween: The Game Civilians, including Michelle and Eugene, by stats, traits, repairs, healing, stealth, mobility, and team roles.";

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
  `${siteUrl}/images/halloween-the-game/halloween-the-game-michelle-blanton-stats-traits.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-eugene-kelly-stats-traits.webp`,
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
    id: "eugene-michelle",
    label: "Eugene & Michelle",
  },
  {
    id: "michelle-blanton",
    label: "Michelle Blanton",
  },
  {
    id: "eugene-kelly",
    label: "Eugene Kelly",
  },
  {
    id: "b-tier",
    label: "When B-tier Civilians work",
  },
  {
    id: "ranking-changes",
    label: "When the ranking changes",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks Guide",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
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
    title: metadataTitle,
    description:
      "Compare 12 ranked Civilians plus Michelle Blanton and Eugene Kelly. Find the best picks for repairs, Resident support, healing, stealth, and survival.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Civilian tier list and character comparisons",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Compare 14 playable Civilians, their stats, traits, strengths, and weaknesses to choose the right character for each multiplayer role.",
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
        "Compare 14 Halloween: The Game Civilians by stats, traits, and multiplayer roles. Includes Laurie, Marcus, Alexis, Michelle, Eugene, and the best choices for repairs, healing, stealth, and Resident support.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-15",
      dateModified: "2026-10-28",
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
          name: "Michelle Blanton",
        },
        {
          "@type": "Thing",
          name: "Eugene Kelly",
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
          name: "Therapeutic",
        },
        {
          "@type": "Thing",
          name: "Lurker",
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
          description="Compare 14 playable Civilians, including Michelle and Eugene, and find the best character for repairs, Resident support, team healing, stealth, and escaping Michael."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
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
