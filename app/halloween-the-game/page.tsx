import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenGuideContent from "@/data/halloween-the-game/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/halloween-the-game`;

const metadataTitle =
  "Halloween: The Game Guide: Walkthrough, Multiplayer & More";

const metadataDescription =
  "Start with the right Halloween: The Game guide for story, multiplayer, endings, progression, perks, challenges, maps, collectibles, and Michael Myers.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-guide-haddonfield-night.webp`;

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "story",
    label: "Story mode",
  },
  {
    id: "chapter-guides",
    label: "Main Street & The Babysitters",
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
    id: "after-first-clear",
    label: "What to do after the first clear",
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
    label: "Civilians & perks",
  },
  {
    id: "recommended-route",
    label: "Recommended learning route",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Walkthrough",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Multiplayer Guide for Civilians",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Prestige Guide",
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
    title: "Halloween: The Game Guide — Story, Multiplayer & Progression",
    description:
      "Choose the part of Halloween: The Game you need now, from the complete story and chapter challenges to Civilian multiplayer, Michael detainment, progression, perks, and endings.",
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
      "Find the right route for story mode, Civilian multiplayer, progression, endings, chapter challenges, and detaining Michael Myers.",
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
        "Halloween: The Game Guide — Story, Multiplayer, Progression, Endings and Challenges",
      description:
        "A starting guide for Halloween: The Game that routes players to the part of the game they need now. It covers how story mode teaches Michael Myers, when Main Street and The Babysitters need dedicated challenge routes, how Civilian multiplayer differs from the campaign, how Michael detainment works as an alternative multiplayer finish, how Profile, Killer, Civilian, Weapon and Perk Point progression fit together, and why alternate endings can be cleaned up from Chapter 5. It also gives first-pass guidance for achievements, collectibles, multiplayer map learning, and choosing Civilians or perks around the job a team needs.",
      url: pageUrl,
      image: [heroImage],
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      articleSection: "Halloween: The Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game walkthrough",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game multiplayer",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game progression",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game endings",
        },
        {
          "@type": "Thing",
          name: "Michael Myers detainment",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game challenges",
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
          title="Start With the Part of Halloween: The Game You Actually Need"
          description="Use the story, multiplayer, progression, ending, and chapter guides according to the problem in front of you, then return for completion goals once the core systems make sense."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
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