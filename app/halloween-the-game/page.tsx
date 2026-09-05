import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenGuideContent from "@/data/halloween-the-game/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/halloween-the-game`;

const metadataTitle =
  "Halloween: The Game Guide – Story, Multiplayer & Challenges";

const metadataDescription =
  "Find the right Halloween: The Game guide for Story Mode, challenges, Civilian multiplayer, Michael detainment, perks, progression, endings, and more.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-guide-haddonfield-night.webp`;

const toc = [
  {
    id: "where-to-start",
    label: "Choose what you need now",
  },
  {
    id: "story",
    label: "Story Mode",
  },
  {
    id: "prologue-challenges",
    label: "Prologue challenges",
  },
  {
    id: "chapter-challenges",
    label: "Chapter 2 & 4 challenges",
  },
  {
    id: "multiplayer",
    label: "Civilian multiplayer",
  },
  {
    id: "arrest-michael",
    label: "How to detain Michael",
  },
  {
    id: "progression",
    label: "Progression & perks",
  },
  {
    id: "endings",
    label: "Story endings",
  },
  {
    id: "achievements-trophies",
    label: "Achievements & trophies",
  },
  {
    id: "collectibles",
    label: "Collectibles",
  },
  {
    id: "multiplayer-maps",
    label: "Multiplayer maps",
  },
  {
    id: "best-civilians-perks",
    label: "Best Civilians & perks",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Prestige",
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
    title: "Halloween: The Game Guide – Story, Multiplayer & Challenges",
    description:
      "Choose the part of Halloween: The Game you need now, from Story Mode and chapter challenges to Civilian multiplayer, progression, Michael detainment, and endings.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Michael Myers moving through Haddonfield at night in Halloween The Game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Guide",
    description:
      "Find the right route for Story Mode, Prologue and chapter challenges, Civilian multiplayer, progression, endings, and Michael detainment.",
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
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Halloween: The Game Guide",
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
        "Halloween: The Game Guide — Story Mode, Challenges, Multiplayer, Progression and Endings",
      description:
        "A central guide to Halloween: The Game for choosing the right route based on the player's current goal. It connects the complete Story Mode walkthrough, Smith's Grove Prologue challenges, the dedicated Prologue Challenge 5 no-alert route, Chapter 2 Main Street challenges, Chapter 4 The Babysitters challenges, Civilian multiplayer, Michael Myers detainment, progression and perks, and alternate endings. It also provides decision guidance for emerging topics including achievements and trophies, collectibles, multiplayer map knowledge, and choosing Civilians or perks around the job a team needs.",
      url: pageUrl,
      image: [heroImage],
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-05",
      articleSection: "Halloween: The Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Story Mode",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Prologue challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Chapter 2 challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Chapter 4 challenges",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game multiplayer",
        },
        {
          "@type": "Thing",
          name: "Michael Myers detainment",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game progression",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game perks",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game endings",
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
          title="Halloween: The Game Guide – Pick the Right Route for Your Next Goal"
          description="Start with Story Mode, a specific challenge, Civilian multiplayer, progression, detainment, or another ending based on what you are trying to finish now."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}