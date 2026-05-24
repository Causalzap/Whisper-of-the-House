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
  { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
  { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "LEGO Batman Legacy Guide: Red Bricks, Bosses & Batcave",
  description:
    "Start LEGO Batman Legacy with the right route: Batcave systems, Carmine Falcone, Red Bricks, Batgirl, Firefly, Poison Ivy, and Bane guides.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "LEGO Batman Legacy Guide Hub: Red Bricks, Bosses, Batcave",
    description:
      "Use this guide hub to route your first playthrough, understand Batcave systems, collect Red Bricks, unlock Batgirl, and beat key bosses.",
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
    title: "LEGO Batman Legacy Guide: Red Bricks, Bosses & Batcave",
    description:
      "Follow the best early route, use the Batcave, collect Red Bricks, unlock Batgirl, and beat major bosses.",
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
        "LEGO Batman Legacy Guide Hub: First Playthrough Route, Batcave Systems, Red Bricks, Batgirl Unlock, Firefly, Poison Ivy and Bane Boss Guides",
      description:
        "A player-focused LEGO Batman Legacy guide hub for routing the first playthrough and choosing the right detailed guide. Covers what to do first, when the Batcave starts to matter, how Bat-Mite’s Shop fits into cleanup, why Carmine Falcone and the Iceberg Lounge are an early navigation check, when to start Red Brick cleanup, how Batgirl changes later routes, why Firefly is a Batgirl tech check, and how to approach Poison Ivy and Bane as mechanic-based boss fights.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "LEGO Batman guide" },
        { "@type": "Thing", name: "Batcave" },
        { "@type": "Thing", name: "Challenge Board" },
        { "@type": "Thing", name: "Bat-Mite’s Shop" },
        { "@type": "Thing", name: "Red Bricks" },
        { "@type": "Thing", name: "Carmine Falcone" },
        { "@type": "Thing", name: "Iceberg Lounge" },
        { "@type": "Thing", name: "Batgirl" },
        { "@type": "Thing", name: "Firefly" },
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
              "No. Use this page as a route hub. For exact sections, open the Red Bricks, Carmine Falcone, Batcave, Batgirl, Firefly, Poison Ivy, or Bane guides.",
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
          description="Follow the best early route, understand the Batcave, collect Red Bricks at the right time, unlock Batgirl, and jump to the boss or mission guide you need."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
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