import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CarmineFalconeContent from "@/data/lego-batman/carmine-falcone.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/carmine-falcone`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-iceberg-lounge-entrance.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-iceberg-lounge-shield-guard.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-iceberg-lounge-security-camera.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-falcone-office-basement.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-iceberg-lounge-food-order-elevator.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-waynetech-cache-2-gate.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-falcone-house-of-fun.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-iceberg-lounge-red-brick-safe.webp`,
];

const toc = [
  { id: "carmine-falcone-mission-overview", label: "Overview" },
  { id: "carmine-falcone-route-summary", label: "Route" },
  { id: "shield-guard-and-disco-ball-1", label: "Disco Ball 1" },
  {
    id: "first-security-camera-and-waynetech-cache-1",
    label: "Cache 1",
  },
  {
    id: "second-lighting-rig-and-disco-ball-2",
    label: "Disco Ball 2",
  },
  { id: "vip-lounge-and-disco-ball-3", label: "Disco Ball 3" },
  { id: "where-is-falcones-office", label: "Falcone Office" },
  { id: "how-to-complete-the-food-order", label: "Food Order" },
  { id: "waynetech-cache-2-after-the-elevator", label: "Cache 2" },
  { id: "falcones-house-of-fun", label: "House of Fun" },
  { id: "house-of-fun-waynetech-cache-3", label: "Cache 3" },
  { id: "house-of-fun-disco-ball-4", label: "Disco Ball 4" },
  { id: "house-of-fun-waynetech-cache-4", label: "Cache 4" },
  { id: "house-of-fun-waynetech-cache-5", label: "Cache 5" },
  { id: "disco-ball-5-near-the-elevator", label: "Disco Ball 5" },
  { id: "iceberg-lounge-red-brick-safe-code", label: "Red Brick" },
  { id: "all-carmine-falcone-collectibles", label: "Collectibles" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "full-route-in-one-line", label: "Fast Route" },
  { id: "related-lego-batman-guides", label: "Related" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/lego-batman", label: "LEGO Batman Guide" },
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },

  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "Carmine Falcone Walkthrough: Red Brick & Collectibles",
  description:
    "Find every Carmine Falcone collectible in LEGO Batman Legacy, finish the food order, grab Disco Balls and WayneTech Caches, and open Red Brick safe 596.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Carmine Falcone Walkthrough: Iceberg Lounge Collectibles",
    description:
      "Clear the Carmine Falcone mission, finish the food order, find all Disco Balls and WayneTech Caches, and open the Red Brick safe.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Batman arriving outside the Iceberg Lounge during the Carmine Falcone mission.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmine Falcone Walkthrough: Red Brick & Collectibles",
    description:
      "Finish Carmine Falcone, collect every Disco Ball and WayneTech Cache, and use safe code 596.",
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
          item: `${siteUrl}/lego-batman`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Carmine Falcone Walkthrough",
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
        "LEGO Batman Legacy Carmine Falcone Walkthrough: Iceberg Lounge Collectibles, Food Order, Red Brick Safe Code and WayneTech Caches",
      description:
        "A player-focused LEGO Batman Legacy Carmine Falcone walkthrough for the Iceberg Lounge mission. The guide explains the club route, shield guard, first security camera room, second lighting rig, VIP Lounge route, Flass basement clue, food order puzzle, WayneTech Cache 2 side gate near the Ska-Kham Asylum door, Falcone’s House of Fun collectibles, all 5 Disco Balls, all 5 WayneTech Caches, the Disco Balls Batcave Trophy, and the Red Brick safe code 596 that unlocks the Filthy Rich modifier.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Carmine Falcone" },
        { "@type": "Thing", name: "Iceberg Lounge" },
        { "@type": "Thing", name: "Falcone Office" },
        { "@type": "Thing", name: "Food Order" },
        { "@type": "Thing", name: "House of Fun" },
        { "@type": "Thing", name: "Disco Balls" },
        { "@type": "Thing", name: "WayneTech Caches" },
        { "@type": "Thing", name: "Disco Balls Batcave Trophy" },
        { "@type": "Thing", name: "Red Brick" },
        { "@type": "Thing", name: "Filthy Rich" },
        { "@type": "Thing", name: "Red Brick Safe Code 596" },
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
          name: "Where is Falcone’s office in Iceberg Lounge?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Falcone’s office is in the basement. After Flass gives you the clue, go straight and down a couple of floors.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Iceberg Lounge Red Brick safe code?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Iceberg Lounge Red Brick safe code is 596.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Iceberg Lounge Red Brick unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Iceberg Lounge Red Brick unlocks the Filthy Rich modifier.",
          },
        },
        {
          "@type": "Question",
          name: "How many collectibles are in Carmine Falcone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 11 collectibles in Carmine Falcone: 5 Disco Balls, 5 WayneTech Caches, and 1 Red Brick.",
          },
        },
        {
          "@type": "Question",
          name: "Where is WayneTech Cache 1 in Carmine Falcone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "WayneTech Cache 1 is in the first security camera room. After entering, turn around and check behind you before moving forward.",
          },
        },
        {
          "@type": "Question",
          name: "Where is WayneTech Cache 2 in Carmine Falcone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "WayneTech Cache 2 is after the food order elevator, near the Ska-Kham Asylum door. Use the vent, Gordon’s Foam Gun, the cable socket, and Batman’s Batarang to open the gate.",
          },
        },
        {
          "@type": "Question",
          name: "How do you finish the food order in Iceberg Lounge?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Place three food items on the tray. For the second item, use Gordon while Batman holds the setup in place. Once all three are placed, the elevator route opens.",
          },
        },
        {
          "@type": "Question",
          name: "What do the Disco Balls unlock in Carmine Falcone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Finding all 5 Disco Balls in this mission rewards the Disco Balls Batcave Trophy.",
          },
        },
        {
          "@type": "Question",
          name: "Can I replay Carmine Falcone later?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. If you miss a Disco Ball, WayneTech Cache, or the Red Brick, replay the mission later and use the collectible table to clean up anything you missed.",
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
          title="Carmine Falcone Walkthrough: Iceberg Lounge Collectibles and Red Brick Code"
          description="Get through the Iceberg Lounge mission, finish the food order, find every Disco Ball and WayneTech Cache, and use code 596 on the Red Brick safe."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CarmineFalconeContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}