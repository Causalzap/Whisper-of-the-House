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
  "Learn how to arrest and detain Michael Myers with police, spectator mode, the CB radio, Loomis, arrest pressure, knockdown, and the final Arrest interaction.";

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
    label: "How to arrest Michael Myers",
  },
  {
    id: "police-setup",
    label: "Step 1 — Get police involved",
  },
  {
    id: "spectator-mode",
    label: "Step 2 — Reach spectator mode",
  },
  {
    id: "call-loomis",
    label: "Step 3 — Call Loomis",
  },
  {
    id: "reinforcements",
    label: "Police Reinforcements",
  },
  {
    id: "police-pressure",
    label: "Step 4 — Build arrest pressure",
  },
  {
    id: "knockdown",
    label: "Step 5 — Knock Michael down",
  },
  {
    id: "final-arrest",
    label: "Step 6 — Complete Arrest",
  },
  {
    id: "detained",
    label: "Step 7 — MICHAEL DETAINED!",
  },
  {
    id: "escape-instead",
    label: "When to take the escape instead",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Multiplayer Guide for Civilians",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Prestige Guide",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Multiplayer Escape & Spawn Helper",
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
      "Follow the multiplayer detainment route from police and spectator access through the CB radio, Loomis, arrest pressure, knockdown, and the final Arrest interaction.",
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
      "Get police involved, call Loomis through spectator mode, build the arrest state, knock Michael down, and finish the Arrest interaction.",
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
        "How to Arrest Michael Myers in Halloween: The Game",
      description:
        "A step-by-step multiplayer guide to arresting and detaining Michael Myers in Halloween: The Game. It covers police setup, spectator access, using the CB radio to call Loomis, Police Reinforcements, keeping Michael under police pressure, building the arrest state, knocking him down at the correct time, completing the Arrest interaction, and confirming the MICHAEL DETAINED result.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-11",
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
        {
          "@type": "Thing",
          name: "MICHAEL DETAINED",
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
          title="How to Arrest Michael Myers in Halloween: The Game"
          description="Follow the full multiplayer arrest route: get police involved, reach spectator mode, call Loomis, build the arrest state, knock Michael down, and finish the Arrest interaction before he recovers."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 11, 2026"
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