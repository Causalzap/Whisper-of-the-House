import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LegoBatmanHubContent from "@/data/lego-batman/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-batcave-first-look.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-challenge-board.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-bat-mite-shop-suits-props.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-iceberg-lounge-entrance.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-03-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-batgirl-first-action.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-masquerade-attack.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-boss-start.webp`,
];

const toc = [
  { id: "best-route", label: "Best Route" },
  { id: "what-to-do-first", label: "Start Here" },
  { id: "batcave", label: "Batcave" },
  { id: "bat-mite-shop", label: "Bat-Mite Shop" },
  { id: "carmine-falcone", label: "Carmine Falcone" },
  { id: "red-bricks", label: "Red Bricks" },
  { id: "batgirl", label: "Batgirl" },
  { id: "firefly", label: "Firefly" },
  { id: "bosses", label: "Bosses" },
  { id: "all-guides", label: "Guide List" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/how-to-farm-studs-fast", label: "How to Farm Studs Fast" },
  { href: "/lego-batman/all-subwayne-tunnel-locations", label: "SubWayne Tunnel Locations Guide" },
  { href: "/lego-batman/absolute-batman-suit", label: "Absolute Batman Suit Guide" },
  { href: "/lego-batman/new-beginnings-docks-collectibles", label: "New Beginnings Docks Collectibles" },
  { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
  { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
  { href: "/lego-batman/radio-towers", label: "Radio Towers Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "LEGO Batman Legacy Guide: Studs, SubWayne, Bosses & Bricks",
  description:
    "Follow LEGO Batman Legacy with stud farming, SubWayne tunnels, Absolute Batman, Radio Towers, Red Bricks, collectibles, Batgirl and boss guides.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "LEGO Batman Legacy Guide Hub: Studs, SubWayne, Bosses",
    description:
      "Use this guide hub to route your playthrough, farm studs, open SubWayne tunnels, unlock Absolute Batman, reveal Radio Towers, collect Red Bricks, and beat key bosses.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "LEGO Batman Legacy Batcave after Batman returns to the base with Alfred.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy Guide: Studs, SubWayne, Bosses",
    description:
      "Route your playthrough with guides for studs, SubWayne tunnels, Absolute Batman, Radio Towers, Red Bricks, Batgirl, and bosses.",
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
          name: "LEGO Batman Guide",
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
        "LEGO Batman Legacy Guide Hub: First Playthrough Route, Stud Farming, SubWayne Tunnels, Absolute Batman, Red Bricks and Boss Guides",
      description:
        "A player-focused LEGO Batman: Legacy of the Dark Knight guide hub for routing the first playthrough and choosing the right detailed guide. Covers what to do first, Batcave systems, Bat-Mite’s Shop, stud farming routes, Carmine Falcone, Red Brick cleanup, Batgirl unlocks, Radio Towers, SubWayne tunnel locations and puzzle solutions, Escaped Zoo Animals, the Absolute Batman suit reward, New Beginnings Docks collectibles, Firefly, Mr. Freeze, Poison Ivy, and Bane boss guides.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-25",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "LEGO Batman guide" },
        { "@type": "Thing", name: "Batcave" },
        { "@type": "Thing", name: "Challenge Board" },
        { "@type": "Thing", name: "Bat-Mite’s Shop" },
        { "@type": "Thing", name: "Stud farming" },
        { "@type": "Thing", name: "Stud Cache" },
        { "@type": "Thing", name: "SubWayne tunnels" },
        { "@type": "Thing", name: "Gotham fast travel" },
        { "@type": "Thing", name: "Absolute Batman" },
        { "@type": "Thing", name: "Escaped Zoo Animals" },
        { "@type": "Thing", name: "Red Bricks" },
        { "@type": "Thing", name: "Carmine Falcone" },
        { "@type": "Thing", name: "Iceberg Lounge" },
        { "@type": "Thing", name: "Batgirl" },
        { "@type": "Thing", name: "Radio Towers" },
        { "@type": "Thing", name: "Firefly" },
        { "@type": "Thing", name: "New Beginnings" },
        { "@type": "Thing", name: "Docks Collectibles" },
        { "@type": "Thing", name: "Mr. Freeze" },
        { "@type": "Thing", name: "Snow Globes" },
        { "@type": "Thing", name: "Poison Ivy" },
        { "@type": "Thing", name: "Bane" },
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Should I clear every collectible as soon as I see it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Follow the story first and return later when more characters, tools, Batcave systems, and replay options are available.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Batcave important early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Once the Batcave starts adding systems, check it between major missions. It becomes your base for rewards, challenge progress, suits, props, shops, and story resets.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Challenge Board?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Challenge Board tracks criteria you complete out in the field and reveals more of the mural over time. Treat it as a long-term checklist.",
          },
        },
        {
          "@type": "Question",
          name: "What does Bat-Mite sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bat-Mite’s Shop sells rotating rewards such as suits, props, and shop Red Bricks. It is useful early, but more important during cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start collecting Red Bricks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start seriously during mission replay or cleanup. Grab mission Red Bricks when you are already replaying levels, then buy shop Red Bricks from Bat-Mite’s Shop.",
          },
        },
        {
          "@type": "Question",
          name: "What do Red Bricks do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red Bricks unlock cosmetic color modifiers for suits and vehicles. They are completion and style rewards, not old-style Stud Multiplier cheats.",
          },
        },
        {
          "@type": "Question",
          name: "When does Batgirl unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Batgirl joins during a major story sequence involving Barbara Gordon and Firefly. After that, her tech becomes more important for later progression.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I stuck in Carmine Falcone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are probably missing the correct route through the Iceberg Lounge, the basement clue, the food order, or the House of Fun route. Use the Carmine Falcone guide for the exact path.",
          },
        },
        {
          "@type": "Question",
          name: "When should I do Escaped Zoo Animals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do Escaped Zoo Animals after the tracker mechanic is available and more of Gotham has opened up. Track 9 animals to unlock the Absolute Batman costume, then finish all 21 if you are aiming for 100% cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Are boss fights hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "They are mostly mechanic fights. Survive the attacks, wait for the real opening, then use the required prompt or attack window.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use this page as a 100% map?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Use this page as a route hub. For exact sections, open the Red Bricks, Stud Farming, SubWayne Tunnels, Absolute Batman, Escaped Zoo Animals, New Beginnings Docks, Carmine Falcone, Batgirl, Radio Towers, Firefly, Mr. Freeze, Poison Ivy, or Bane guides.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="LEGO Batman Legacy Guide Hub: What To Do First and Where To Go Next"
          description="Follow the best route, farm studs when purchases get expensive, open SubWayne tunnels for fast travel, unlock Absolute Batman, reveal Radio Towers, collect Red Bricks, and jump to the boss or mission guide you need."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LegoBatmanHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}