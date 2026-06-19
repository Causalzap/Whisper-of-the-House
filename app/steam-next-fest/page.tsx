import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SteamNextFestContent from "@/data/steam-next-fest/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/steam-next-fest`;

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-teleprinter-orders.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-bearing-range.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-frontline-funnel-defenses.webp`,
  `${siteUrl}/images/bombanana/bombanana-wire-module-led.webp`,
  `${siteUrl}/images/casualties-unknown/casualties-unknown-crafting-menu-foliage-bag.webp`,
];

const toc = [
  {
    id: "steam-next-fest-demo-guide-hub",
    label: "Demo guide hub",
  },
  {
    id: "which-demo-should-you-play-first",
    label: "Which demo first?",
  },
  {
    id: "four-demos-worth-trying",
    label: "Four demos",
  },
  {
    id: "common-demo-choosing-mistakes",
    label: "Choosing mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Demo Guide",
  },
  {
    href: "/dust-front-rts",
    label: "Dust Front RTS Demo Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Demo Guide",
  },
  {
    href: "/casualties-unknown",
    label: "Casualties Unknown Demo Guide",
  },
];

export const metadata: Metadata = {
  title: "Steam Next Fest Demo Guide: Best Demos to Try",
  description:
    "Find Steam Next Fest demos worth playing: Iron Nest, Dust Front RTS, BOMBANANA and Casualties Unknown, with guide links by playstyle.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Steam Next Fest Demo Guide: Iron Nest, Dust Front RTS, BOMBANANA and Casualties Unknown",
    description:
      "Choose a Steam Next Fest demo by playstyle: slow artillery systems, large-scale RTS macro, co-op communication, or hard survival pressure.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest teleprinter orders showing artillery mission instructions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Next Fest Demo Guide: Best Demos to Try",
    description:
      "Pick between Iron Nest, Dust Front RTS, BOMBANANA and Casualties Unknown by playstyle and learning curve.",
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
          name: "Steam Next Fest Demo Guide",
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
        "Steam Next Fest Demo Guide: Iron Nest, Dust Front RTS, BOMBANANA and Casualties Unknown",
      description:
        "A player-focused Steam Next Fest demo hub for choosing between Iron Nest, Dust Front RTS, BOMBANANA and Casualties Unknown. The guide compares slow artillery systems, large-scale RTS macro, co-op communication, and survival-platformer pressure, then links players to focused demo guides for teleprinter orders, artillery aiming, deployment zones, faction counters, fabricators, co-op callouts, wire modules, canteen routes, glowplant fruit, bio-chem fluid, lockpicking and early survival mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      articleSection: "Guides",
      about: [
        {
          "@type": "Thing",
          name: "Steam Next Fest",
        },
        {
          "@type": "Thing",
          name: "Steam Next Fest demo guide",
        },
        {
          "@type": "VideoGame",
          name: "Iron Nest",
        },
        {
          "@type": "VideoGame",
          name: "Dust Front RTS",
        },
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "VideoGame",
          name: "Casualties Unknown",
        },
        {
          "@type": "Thing",
          name: "Iron Nest demo guide",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS demo guide",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA demo guide",
        },
        {
          "@type": "Thing",
          name: "Casualties Unknown demo guide",
        },
        {
          "@type": "Thing",
          name: "artillery simulation",
        },
        {
          "@type": "Thing",
          name: "large-scale RTS",
        },
        {
          "@type": "Thing",
          name: "co-op puzzle game",
        },
        {
          "@type": "Thing",
          name: "survival platformer",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is this Steam Next Fest hub for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This hub helps you choose between guide-worthy Steam Next Fest demos instead of browsing a huge event list. It focuses on demos with real mechanics, clear player problems, and useful follow-up guides.",
          },
        },
        {
          "@type": "Question",
          name: "Which Steam Next Fest demo should I play first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Play Iron Nest if you want slow artillery systems, Dust Front RTS if you want large-scale RTS macro, BOMBANANA if you want co-op communication, and Casualties Unknown if you want hard survival platforming.",
          },
        },
        {
          "@type": "Question",
          name: "Which demo has the most strategy depth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dust Front RTS has the most macro strategy depth because deployment zones, enemy factions, economy scaling, fabricators, power, warehouses, Complectors, connected factories, and MCV pushes all matter.",
          },
        },
        {
          "@type": "Question",
          name: "Which demo has the most unique mechanics?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Iron Nest has the most unique mechanics because it asks you to read teleprinter orders, measure the map, choose shells, set artillery values, and correct shots manually.",
          },
        },
        {
          "@type": "Question",
          name: "Which demo is best for co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "BOMBANANA is the best co-op choice in this cluster. The demo is built around communication, callout order, role discipline, and module solving.",
          },
        },
        {
          "@type": "Question",
          name: "Which demo is hardest to survive?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Casualties Unknown is the harshest survival demo in this cluster because movement mistakes, dirty water, wounds, thirst, body conditions, inventory handling, and crafting all combine.",
          },
        },
        {
          "@type": "Question",
          name: "Are these full-game guides?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. These are demo-focused guides. They avoid overclaiming final-release routes, balance, saves, enemy behavior, or late-game progression unless the demo directly supports it.",
          },
        },
        {
          "@type": "Question",
          name: "Why not cover every Steam Next Fest demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Covering every demo equally usually makes the page less useful. This hub focuses on demos where players are likely to need actual help: what to build, what to click, what to avoid, how to survive, or how to coordinate.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wishlist all four demos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wishlist the ones that match your taste. Iron Nest is best for slow systems, Dust Front RTS is best for macro strategy, BOMBANANA is best for co-op communication, and Casualties Unknown is best for survival pressure.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read after this page?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Go to the specific demo guide that matches your current problem: Iron Nest, Dust Front RTS, BOMBANANA, or Casualties Unknown.",
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
          title="Choose the Steam Next Fest Demo That Fits Your Playstyle"
          description="Use this Steam Next Fest hub to choose between Iron Nest, Dust Front RTS, BOMBANANA and Casualties Unknown by pace, mechanics, co-op needs, survival pressure and guide depth."
          gameTitle="Steam Next Fest"
          gameHref="/steam-next-fest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SteamNextFestContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
