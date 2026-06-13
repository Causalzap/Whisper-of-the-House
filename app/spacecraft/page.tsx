import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SpaceCraftContent from "@/data/spacecraft/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft`;

const imageUrls = [
  `${siteUrl}/images/spacecraft/spacecraft-beginner-solar-alpha-1-entry.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-scanlyzer-alpha-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-ftl-engine-eco-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-mining-bureau-resource-coordinates.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-small-cargo-hold-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-extractor-smelter-pylon-setup.webp`,
];

const toc = [
  {
    id: "spacecraft-guide-hub",
    label: "SpaceCraft guide hub",
  },
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "beginner-route",
    label: "Beginner route",
  },
  {
    id: "scanlyzer-ftl",
    label: "Scanalyzer and FTL",
  },
  {
    id: "resources-and-mining-bureau",
    label: "Resources and Mining Bureau",
  },
  {
    id: "ship-upgrades",
    label: "Ship upgrades",
  },
  {
    id: "base-building-automation",
    label: "Base building",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/spacecraft/beginner-guide",
    label: "SpaceCraft Beginner Guide",
  },
  {
    href: "/spacecraft/scanlyzer-alpha-ftl-engine",
    label: "SpaceCraft Scanalyzer Alpha and FTL Guide",
  },
  {
    href: "/spacecraft/resources-locations",
    label: "SpaceCraft Resources Guide",
  },
  {
    href: "/spacecraft/ship-upgrades-cargo-inventory",
    label: "SpaceCraft Ship Upgrades Guide",
  },
  {
    href: "/spacecraft/base-building-automation",
    label: "SpaceCraft Base Building and Automation Guide",
  },
];

export const metadata: Metadata = {
  title: "SpaceCraft Guide: First 10 Hours, FTL, Resources, Base",
  description:
    "Follow this SpaceCraft guide for the first 10 hours: beginner route, Scanalyzer Alpha, FTL, Gray Quartz, Mining Bureau, ship upgrades, and base automation.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "SpaceCraft Guide: First 10 Hours, FTL, Resources, Ship Upgrades and Base Automation",
    description:
      "Use this SpaceCraft guide hub to find the right early-game route: beginner steps, Scanalyzer Alpha, FTL Engine - Eco, Magnetic Plasma, Mining Bureau resources, ship upgrades, System Support, and first base automation.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "SpaceCraft beginner route flying toward Solar Alpha 1.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCraft Guide",
    description:
      "Find the right SpaceCraft guide for the beginner route, FTL unlock, resources, ship upgrades, or first base automation.",
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
          name: "SpaceCraft Guide",
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
        "SpaceCraft Guide: First 10 Hours, Beginner Route, FTL, Resources, Ship Upgrades and Base Automation",
      description:
        "A player-focused SpaceCraft guide hub for the first 10 hours, helping players choose the right guide for the beginner route, Solar Alpha 1, Copper and Iron, Scanalyzer Alpha, Solar Alpha 2, Gray Quartz, Gravite, Crystalline Focuser, Silicon Gel, Electromagnetism, FTL Engine - Eco, Magnetic Plasma, RakMu, Mining Bureau, B-Carbon, Silicate, Pyrite, ship upgrades, Cargo Hold, Resource Detector, Mining Laser, Battery, System Support, overheating, Base Core Drive, Extractor, Smelter, Pylon, and Drone Routes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-13",
      dateModified: "2026-06-13",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "SpaceCraft",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft guide",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft first 10 hours",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft beginner guide",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Scanalyzer Alpha",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft FTL Engine - Eco",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Magnetic Plasma",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft resources",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Mining Bureau",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft ship upgrades",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft System Support",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft base building",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft automation",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is this SpaceCraft guide for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This SpaceCraft guide is a first-10-hours route hub. It helps you move from the beginner mining route into Scanalyzer Alpha, FTL Engine - Eco, resources, ship upgrades, and first base automation.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Beginner Guide route: mine Copper and Iron on Solar Alpha 1, return to Babylon, craft and install Scanalyzer Alpha, then go to Solar Alpha 2 for Gray Quartz and Gravite.",
          },
        },
        {
          "@type": "Question",
          name: "I do not know what to do next in SpaceCraft. Where should I start?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the route finder table near the top of this hub. It points you to the next guide based on what just happened or what is currently blocking you.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock FTL in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Scanalyzer Alpha and FTL Guide. The short path is Modular Systems, Scanalyzer Alpha, Gray Quartz, Crystalline Focuser, Gravite, Silicon Gel, Electromagnetism, FTL Engine - Eco, and Magnetic Plasma.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Scanalyzer Alpha not working?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It is probably crafted but not installed. Install it in the Shipyard and confirm the edit before returning to Solar Alpha 2.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Gray Quartz in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Gray Quartz appears on Solar Alpha 2 after Scanalyzer Alpha is installed. Scan it first, then mine it.",
          },
        },
        {
          "@type": "Question",
          name: "How do I refill Magnetic Plasma in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the station ship or dock prompt before the first FTL jump. Installing FTL Engine - Eco is not enough if Magnetic Plasma is empty.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Carbon, Silicate, or Pyrite in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Mining Bureau after RakMu. Bureau targets and paid coordinates are the cleanest way to find B-Carbon, Silicate, and Pyrite.",
          },
        },
        {
          "@type": "Question",
          name: "What ship upgrade should I get first in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cargo Hold is usually the best first upgrade because the starter ship fills quickly and limits every resource run. If searching is the problem, prioritize Resource Detector instead.",
          },
        },
        {
          "@type": "Question",
          name: "What is System Support in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "System Support is the ship’s support limit for installed modules. If module SP requirements get too high, heat becomes harder to manage.",
          },
        },
        {
          "@type": "Question",
          name: "When should I build a base in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start base building after Personal Factory and Base Core Drive unlock, but do not rush a huge layout. Your first goal is one Extractor, one Smelter, one Pylon connection, and one Drone Route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find an unclaimed base deposit in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Base Building and Automation Guide. The short version is to scan, check the map, fly low, confirm the deposit is not already claimed, then place the Base Core Drive.",
          },
        },
        {
          "@type": "Question",
          name: "Is this a complete SpaceCraft endgame guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This hub focuses on the opening route, early FTL, resources, ship upgrades, and first automation. Endgame logistics should be expanded after more stable route data is available.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Beginner Guide if you are new. If you are already stuck, jump directly to the Scanalyzer/FTL, Resources, Ship Upgrades, or Base Automation guide.",
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
          title="SpaceCraft Guide: First 10 Hours, FTL, Resources and Base"
          description="Use this SpaceCraft guide hub to find the right page for the beginner route, FTL unlock, resource search, ship upgrades, or first base automation."
          gameTitle="SpaceCraft"
          gameHref="/spacecraft"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SpaceCraftContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
