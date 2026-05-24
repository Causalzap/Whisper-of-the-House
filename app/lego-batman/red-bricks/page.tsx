import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RedBricksContent from "@/data/lego-batman/red-bricks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/red-bricks`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-01-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-02-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-03-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-04-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-05-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-06-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-07-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-08-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-09-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-10-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-11-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-12-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-13-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-brick-14-location.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-red-bricks-bat-mite-shop.webp`,
];

const toc = [
  { id: "all-red-brick-locations-summary", label: "All Red Bricks" },
  { id: "main-mission-red-bricks", label: "Mission Bricks" },
  { id: "bat-mites-shop-red-bricks", label: "Shop Bricks" },
  { id: "best-red-bricks-to-get-first", label: "Best First" },
  { id: "why-bat-mites-shop-shows-suits", label: "Shop Rotation" },
  { id: "missing-red-brick-checklist", label: "Missing Brick?" },
  { id: "fast-red-brick-cleanup-route", label: "Fast Route" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
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
  title: "Red Brick Locations Guide: All 23 Bricks & Effects",
  description:
    "Find all 23 Red Bricks in LEGO Batman Legacy, including mission puzzles, Bat-Mite’s Shop bricks, safe code 596, effects, and cleanup tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Red Brick Locations Guide: All 23 Bricks, Effects, and Shop Items",
    description:
      "Find every Red Brick in LEGO Batman Legacy, including the 14 mission Red Bricks, 9 Bat-Mite’s Shop Red Bricks, modifier effects, and missing-brick checks.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Filthy Rich Red Brick vault code 596 in the Carmine Falcone Iceberg Lounge mission.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Brick Locations Guide: All 23 Bricks & Effects",
    description:
      "Get all mission and Bat-Mite’s Shop Red Bricks, learn their effects, and fix missing Red Brick problems.",
    images: [imageUrls[2]],
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
          name: "Red Brick Locations",
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
        "LEGO Batman Legacy Red Brick Locations Guide: All 23 Red Bricks, Mission Puzzle Solutions, Bat-Mite’s Shop Items, Modifier Effects and Safe Code 596",
      description:
        "A player-focused LEGO Batman Legacy Red Brick locations guide covering all 23 Red Bricks. Includes the 14 hidden main mission Red Bricks, the 9 Bat-Mite’s Shop Red Bricks, how to refresh Bat-Mite’s Shop when suits appear instead of Red Bricks, the Carmine Falcone Iceberg Lounge vault code 596 for Filthy Rich, the modifier effect for each Red Brick, which Red Bricks to prioritize first, and a missing Red Brick checklist for cleanup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Red Bricks" },
        { "@type": "Thing", name: "Red Brick locations" },
        { "@type": "Thing", name: "Bat-Mite’s Shop" },
        { "@type": "Thing", name: "Filthy Rich" },
        { "@type": "Thing", name: "Safe code 596" },
        { "@type": "Thing", name: "Ninja Red Brick" },
        { "@type": "Thing", name: "Nautical Red Brick" },
        { "@type": "Thing", name: "Toxic Waste Red Brick" },
        { "@type": "Thing", name: "Flower Power Red Brick" },
        { "@type": "Thing", name: "Bats Red Brick" },
        { "@type": "Thing", name: "Modifier effects" },
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
          name: "How many Red Bricks are in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 23 Red Bricks total.",
          },
        },
        {
          "@type": "Question",
          name: "Where are the Red Bricks in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first 14 Red Bricks are hidden in main story levels. The final 9 Red Bricks are bought from Bat-Mite’s Shop.",
          },
        },
        {
          "@type": "Question",
          name: "What do Red Bricks do in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red Bricks unlock cosmetic modifiers for suits and vehicles. They change colors or paint styles instead of giving old LEGO-style cheat effects.",
          },
        },
        {
          "@type": "Question",
          name: "Is Filthy Rich a Stud Multiplier?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. In LEGO Batman Legacy, Filthy Rich is a green color modifier with darker green highlights. It is not a Stud Multiplier.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Carmine Falcone Red Brick code?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Iceberg Lounge vault code is 596. Enter 596 to get the Filthy Rich Red Brick.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Bat-Mite’s Shop show suits instead of Red Bricks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bat-Mite’s Shop has a rotating item pool. It can show suits and Red Bricks. Only items labeled Red Brick count toward Red Brick completion.",
          },
        },
        {
          "@type": "Question",
          name: "How do you refresh Bat-Mite’s Shop?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Leave Bat-Mite’s Shop and re-enter. The available items refresh when you come back.",
          },
        },
        {
          "@type": "Question",
          name: "Do suits count as Red Bricks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Suits are separate shop rewards and do not count toward the 23 Red Brick total.",
          },
        },
        {
          "@type": "Question",
          name: "Which Red Bricks are in Bat-Mite’s Shop?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The shop Red Bricks are Construction, Sporty, Glitch, Groovy, Festive, Futuristic, GCPD, Magic, and Beauty.",
          },
        },
        {
          "@type": "Question",
          name: "What should you do if a Red Brick is missing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the mission Red Bricks first, then refresh Bat-Mite’s Shop until the remaining shop Red Brick appears.",
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
          title="Red Brick Locations Guide: All 23 Bricks, Effects, and Shop Refresh Tips"
          description="Find every Red Brick, solve each mission puzzle, learn what the modifiers do, and refresh Bat-Mite’s Shop for the final 9 Red Bricks."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RedBricksContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}