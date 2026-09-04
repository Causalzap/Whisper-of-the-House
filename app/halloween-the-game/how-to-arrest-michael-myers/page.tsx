import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ArrestMichaelContent from "@/data/halloween-the-game/how-to-arrest-michael-myers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/how-to-arrest-michael-myers`;

const metadataTitle =
  "How to Arrest Michael Myers in Halloween: The Game";

const metadataDescription =
  "Arrest Michael Myers by calling police, using spectator mode to bring in Loomis, building the arrest meter, knocking Michael down, and finishing Arrest.";

const socialImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-success.webp`;

const imageUrls = [
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-loomis-radio.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-loomis-arrives.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-police-reinforcement.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-spectator-return.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-police-pressure.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-arrest-michael-knockdown.webp`,
  socialImage,
];

const toc = [
  {
    id: "arrest-sequence",
    label: "Full arrest sequence",
  },
  {
    id: "police-setup",
    label: "Get police into the match",
  },
  {
    id: "spectator-mode",
    label: "Get a player into spectator mode",
  },
  {
    id: "call-loomis",
    label: "Call Loomis with the CB radio",
  },
  {
    id: "reinforcements",
    label: "Use Police Reinforcements",
  },
  {
    id: "police-pressure",
    label: "Build arrest pressure",
  },
  {
    id: "police-wagon",
    label: "POLICE WAGON CALLED",
  },
  {
    id: "knockdown",
    label: "When to knock Michael down",
  },
  {
    id: "final-arrest",
    label: "Complete the Arrest interaction",
  },
  {
    id: "detained",
    label: "MICHAEL DETAINED!",
  },
  {
    id: "escape-instead",
    label: "When to abandon the arrest",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Multiplayer Guide for Civilians",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Prestige",
  },
  {
    href: "/halloween-the-game",
    label: "Halloween: The Game Guide",
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
    title: "How to Arrest Michael Myers in Halloween: The Game",
    description:
      "Set up the multiplayer detainment route with police, spectator mode, Loomis, Reinforcements, the arrest meter, and the final Arrest interaction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: socialImage,
        width: 1600,
        height: 900,
        alt: "MICHAEL DETAINED result after successfully arresting Michael Myers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Arrest Michael Myers in Halloween: The Game",
    description:
      "Get police involved, bring in Loomis, build the arrest state, knock Michael down, and finish the Arrest interaction before he recovers.",
    images: [socialImage],
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Arrest Michael Myers",
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
        "How to Arrest Michael Myers in Halloween: The Game Multiplayer",
      description:
        "A step-by-step guide to arresting and detaining Michael Myers in Halloween: The Game multiplayer. It covers getting police into the match, moving a human player into spectator mode, using the CB radio to call Loomis, returning through Police Reinforcements, keeping Michael under authority pressure, recognizing the POLICE WAGON CALLED state, filling the arrest meter before the knockdown, completing the final Arrest interaction, and knowing when an already-open escape is safer than continuing the detainment attempt.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      articleSection: "Halloween: The Game Multiplayer Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Michael Myers",
        },
        {
          "@type": "Thing",
          name: "Michael Myers arrest",
        },
        {
          "@type": "Thing",
          name: "Michael Myers detainment",
        },
        {
          "@type": "Thing",
          name: "Dr. Loomis",
        },
        {
          "@type": "Thing",
          name: "CB radio",
        },
        {
          "@type": "Thing",
          name: "Police Reinforcements",
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
          title="Get Michael Into the Arrest State Before the Knockdown"
          description="The final takedown only works after police pressure, spectator access, Loomis or Reinforcements, and the arrest meter have lined up. Here is the sequence that gets you to MICHAEL DETAINED!"
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ArrestMichaelContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}