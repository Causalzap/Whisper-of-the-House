import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IronNestContent from "@/data/iron-nest/iron-nest.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest`;

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-demo-protocol.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-teleprinter-orders.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-target-coordinates.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-tools-overview.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-bearing-range.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-calculator-elevation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-shell-menu-types.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-spotter-triangulation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-star-shell-correction.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-requisition-console.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-right-gun-link.webp`,
];

const toc = [
  { id: "iron-nest-demo-guide", label: "Demo guide" },
  { id: "demo-basics", label: "Demo basics" },
  { id: "firing-loop", label: "Firing loop" },
  { id: "teleprinter-orders", label: "Teleprinter orders" },
  { id: "map-grid-and-coordinates", label: "Map grid" },
  {
    id: "map-tools-pencils-iris-and-icons",
    label: "Map tools",
  },
  { id: "calibration-fire-route", label: "Calibration Fire" },
  {
    id: "bearing-range-and-elevation",
    label: "Bearing and elevation",
  },
  {
    id: "shell-types-and-powder-charges",
    label: "Shells and charges",
  },
  { id: "triangulation", label: "Triangulation" },
  { id: "star-shell-corrections", label: "Star corrections" },
  {
    id: "liberation-requisition-and-left-right-gun",
    label: "Liberation",
  },
  { id: "challenge-mode-tips", label: "Challenge Mode" },
  { id: "common-mistakes", label: "Common mistakes" },
  {
    id: "what-is-limited-in-the-demo",
    label: "Demo limits",
  },
  {
    id: "should-you-wishlist-iron-nest",
    label: "Should you wishlist it?",
  },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/steam-next-fest",
    label: "Compare More Steam Next Fest Demos",
  },
  {
    href: "/dust-front-rts",
    label: "Try a Strategy-Focused Demo After Iron Nest",
  },
  {
    href: "/bombanana",
    label: "Try a Lighter Demo After Iron Nest",
  },
  {
    href: "/casualties-unknown",
    label: "Casualties Unknown Demo Guide",
  },
];

export const metadata: Metadata = {
  title: "Iron Nest Demo Guide: Map Tools, Shells & Aiming",
  description:
    "Learn Iron Nest demo map tools, teleprinter orders, shells, powder charges, triangulation, Star shell corrections, requisition and Challenge Mode tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Iron Nest Demo Guide: Map Tools, Shells, Aiming, Requisition and Challenge Mode",
    description:
      "Learn how to play the Iron Nest demo with teleprinter orders, map grid reading, red/yellow/white pencils, Iris, shell types, powder charges, bearing, range, elevation, triangulation, Star shell corrections, requisition, left/right gun handling, Challenge Mode tips and common mistakes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest demo protocol showing the read, measure, calculate, load, rotate, elevate, and fire sequence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Demo Guide: Map Tools, Shells & Aiming",
    description:
      "Learn Iron Nest map tools, shells, powder charges, triangulation, Star shell corrections, requisition and Challenge Mode tips.",
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
          name: "Steam Next Fest",
          item: `${siteUrl}/steam-next-fest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Iron Nest Demo Guide",
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
        "Iron Nest Demo Guide: Map Tools, Shell Types, Powder Charges, Aiming, Triangulation, Requisition and Challenge Mode Tips",
      description:
        "A player-focused Iron Nest demo guide covering the firing loop, teleprinter orders, mission logic, map grid reading, Iron Nest coordinates, target coordinates, red pencil, yellow pencil, white pencil, Drafting Compass, Iris, Map Icon Key, Marker Icons, bearing, range, powder charges, ballistic calculator, elevation, Calibration Fire, H shells, HE-style shells, AP, HCHE, STAR shells, SMOK, PHOS, TEAR, triangulation with spotters, Star shell correction, Liberation, requisition, reconnaissance support, left and right gun handling, Challenge Mode tips, demo limits, common mistakes, and wishlist advice for Steam Next Fest players.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
        },
        {
          "@type": "Thing",
          name: "Iron Nest demo guide",
        },
        {
          "@type": "Thing",
          name: "Iron Nest map tools",
        },
        {
          "@type": "Thing",
          name: "Iron Nest teleprinter",
        },
        {
          "@type": "Thing",
          name: "Iron Nest map grid",
        },
        {
          "@type": "Thing",
          name: "Iron Nest coordinates",
        },
        {
          "@type": "Thing",
          name: "Iron Nest red yellow white pencils",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Iris",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Map Icon Key",
        },
        {
          "@type": "Thing",
          name: "Iron Nest bearing",
        },
        {
          "@type": "Thing",
          name: "Iron Nest range",
        },
        {
          "@type": "Thing",
          name: "Iron Nest elevation",
        },
        {
          "@type": "Thing",
          name: "Iron Nest ballistic calculator",
        },
        {
          "@type": "Thing",
          name: "Iron Nest powder charges",
        },
        {
          "@type": "Thing",
          name: "Iron Nest shell types",
        },
        {
          "@type": "Thing",
          name: "Iron Nest H shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest STAR shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest HCHE",
        },
        {
          "@type": "Thing",
          name: "Iron Nest triangulation",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Star shell corrections",
        },
        {
          "@type": "Thing",
          name: "Iron Nest requisition",
        },
        {
          "@type": "Thing",
          name: "Iron Nest reconnaissance",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Challenge Mode",
        },
        {
          "@type": "Thing",
          name: "Steam Next Fest demo",
        },
        {
          "@type": "Thing",
          name: "artillery simulator",
        },
        {
          "@type": "Thing",
          name: "heavy turret simulator",
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
          name: "What is Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Iron Nest is a manual heavy turret simulation game where you operate a large artillery platform through orders, map plotting, shell loading, calculator work, turret bearing, elevation, and fire control.",
          },
        },
        {
          "@type": "Question",
          name: "What should I learn first in the Iron Nest demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Learn the map table first. If you can read coordinates, mark Iron Nest, measure bearing and range, and keep temporary lines under control, the rest of the turret is much easier to understand.",
          },
        },
        {
          "@type": "Question",
          name: "What does the teleprinter do in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The teleprinter gives mission orders, target data, coordinates, spotter reports, shell restrictions, and follow-up instructions. Read it before loading the gun.",
          },
        },
        {
          "@type": "Question",
          name: "How do I read the map grid in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the large grid coordinate, then refine the point inside the smaller area. Always mark your own Iron Nest position before measuring the final firing line.",
          },
        },
        {
          "@type": "Question",
          name: "What are the red, yellow, and white pencils for in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use red for the active firing line, yellow for support work such as spotter bearings or corrections, and white for planning notes or secondary references. The exact color is less important than keeping the map readable.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Iris do in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Iris helps preview shell effect or blast radius on the map. Use it when target coverage matters, especially for infantry clusters, area shells, or nearby friendly and civilian icons.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between bearing, range, and elevation in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bearing is the horizontal turret angle, range is the measured distance from Iron Nest to the target, and elevation is the vertical gun angle calculated from range and powder charges.",
          },
        },
        {
          "@type": "Question",
          name: "How do powder charges work in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Powder charges are part of the firing solution. The calculator uses range and charge count to produce the elevation angle, so the loaded charge count should match the calculation you are using.",
          },
        },
        {
          "@type": "Question",
          name: "Which shell should I use in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the teleprinter first. If the order gives a shell restriction such as H only or Star shell only, follow that instruction. If the mission does not lock one shell, use H or HE-style shells for destructive fire against normal targets and infantry, AP for armored or harder targets, HCHE for dense groups or larger-area damage, and STAR for illumination, scouting, or correction work. Treat SMOK, PHOS, and TEAR as specialized or demo-limited until more mission examples confirm their exact use.",
          },
        },
        {
          "@type": "Question",
          name: "How does triangulation work in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Place each spotter on the map, draw each reported bearing from that spotter, find the intersection, then measure the final firing line from Iron Nest to that target point.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my map numbers confusing in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably have too many old lines or markers on the map. Delete bad measurements and keep the active firing solution clean.",
          },
        },
        {
          "@type": "Question",
          name: "What is requisition in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Requisition is the logistics system for procuring shells, powder charges, and support options when the mission allows it.",
          },
        },
        {
          "@type": "Question",
          name: "What does reconnaissance do in Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reconnaissance can reveal or confirm target areas, reducing blind guessing when a target is hidden, approximate, or time-sensitive.",
          },
        },
        {
          "@type": "Question",
          name: "Is Challenge Mode different from the Iron Nest story demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. It uses the same systems, but speed, target discovery, shell coverage, support choices, and map cleanup become more important.",
          },
        },
        {
          "@type": "Question",
          name: "Are all shell types fully available in the Iron Nest demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not necessarily. Some shell types are visible or implied while their full behavior may be locked, limited, or context-dependent in the demo.",
          },
        },
        {
          "@type": "Question",
          name: "Is Iron Nest a tower defense game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Iron Nest is closer to a manual artillery simulator or heavy turret operation sim than a tower defense placement game.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wishlist Iron Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wishlist Iron Nest if you enjoy manual simulation, map-reading puzzles, artillery calculation, immersive cockpit controls, slow tactical pressure, and dark war-story framing.",
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
          title="Learn Iron Nest Without Guessing Your First Shot"
          description="Use this Iron Nest demo guide to read teleprinter orders, use map tools, solve bearing and range, choose shells, match powder charges, handle requisition, and avoid common mistakes."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/steam-next-fest"
          breadcrumbBaseLabel="Steam Next Fest"
          updatedAt="June 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronNestContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
