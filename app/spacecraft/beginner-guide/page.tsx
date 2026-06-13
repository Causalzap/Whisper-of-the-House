import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/spacecraft/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/spacecraft/spacecraft-beginner-solar-alpha-1-entry.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-solar-alpha-1-iron-copper.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-babylon-shipyard-machines.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-scanlyzer-alpha-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-install-scanlyzer-shipyard.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-solar-alpha-2-gray-quartz.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-gravite-radar-search.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-company-exchanger-silicon-gel.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-electromagnetism-permit.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-ftl-engine-eco-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-rakmu-orientation-clerk.webp`,
];

const toc = [
  {
    id: "spacecraft-beginner-guide",
    label: "Beginner guide",
  },
  {
    id: "first-flight-controls",
    label: "First flight tips",
  },
  {
    id: "solar-alpha-1-copper-iron",
    label: "Solar Alpha 1",
  },
  {
    id: "return-to-babylon",
    label: "Return to Babylon",
  },
  {
    id: "craft-scanalyzer-alpha",
    label: "Craft Scanalyzer Alpha",
  },
  {
    id: "install-scanalyzer-alpha",
    label: "Install Scanalyzer Alpha",
  },
  {
    id: "solar-alpha-2-high-peak-gray-quartz",
    label: "High Peak and Gray Quartz",
  },
  {
    id: "find-gravite",
    label: "Find Gravite",
  },
  {
    id: "company-exchanger-silicon-gel",
    label: "Buy Silicon Gel",
  },
  {
    id: "unlock-electromagnetism-and-craft-ftl",
    label: "Electromagnetism and FTL",
  },
  {
    id: "install-ftl-and-refill-magnetic-plasma",
    label: "Magnetic Plasma",
  },
  {
    id: "reach-rakmu",
    label: "Reach RakMu",
  },
  {
    id: "what-to-do-at-rakmu",
    label: "RakMu first steps",
  },
  {
    id: "early-resources-table",
    label: "Early resources",
  },
  {
    id: "crafting-table",
    label: "Crafting blockers",
  },
  {
    id: "beginner-mistakes",
    label: "Beginner mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/spacecraft",
    label: "SpaceCraft Guide Hub",
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
  title: "SpaceCraft Beginner Guide: FTL, Gray Quartz, RakMu",
  description:
    "Start SpaceCraft with Copper, Iron, Scanalyzer Alpha, High Peak Gray Quartz, Gravite, Silicon Gel, FTL Engine, Magnetic Plasma, and RakMu steps.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "SpaceCraft Beginner Guide: First Route, Scanalyzer Alpha, FTL Engine, Gray Quartz and RakMu",
    description:
      "Follow the full SpaceCraft beginner route from Babylon to Solar Alpha 1, Copper and Iron mining, Scanalyzer Alpha, Solar Alpha 2 High Peak, Gray Quartz, Gravite, Silicon Gel, FTL Engine - Eco, Magnetic Plasma, and RakMu first steps.",
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
    title: "SpaceCraft Beginner Guide",
    description:
      "Clear the first SpaceCraft route with Copper, Iron, Scanalyzer Alpha, Gray Quartz, Gravite, FTL Engine, Magnetic Plasma, and RakMu.",
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
          item: `${siteUrl}/spacecraft`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SpaceCraft Beginner Guide",
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
        "SpaceCraft Beginner Guide: First Route, Scanalyzer Alpha, Gray Quartz, Gravite, FTL Engine, Magnetic Plasma and RakMu",
      description:
        "A player-focused SpaceCraft beginner guide covering the first flight from Babylon, safe ship controls, boost battery management, repair cost risks, Solar Alpha 1 Copper and Iron mining, visual resource names such as Cupric, Ferric, Ferrous, and brassy outcrops, Babylon station crafting, Scanalyzer Alpha crafting and installation, Solar Alpha 2 High Peak, Gray Quartz scanning, Gravite visual search, Silicon Gel from the Company Exchanger, Electromagnetism, FTL Engine - Eco, Magnetic Plasma refill, RakMu arrival, Bob ship upgrades, Ingrid Noviciate progression, Mining Bureau resource work, and common first-hour mistakes.",
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
          name: "SpaceCraft beginner guide",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft first hour",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Copper",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Iron",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Scanalyzer Alpha",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft High Peak",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Gray Quartz",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Gravite",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Silicon Gel",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Electromagnetism",
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
          name: "SpaceCraft RakMu",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Bob ship upgrades",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Mining Bureau",
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
          name: "What should I do first in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fly to Solar Alpha 1, mine Copper and Iron, return to Babylon, craft and install Scanalyzer Alpha, then go to Solar Alpha 2 for Gray Quartz and Gravite.",
          },
        },
        {
          "@type": "Question",
          name: "How do I avoid crashing my ship early in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slow down before approaching planets, terrain, landmarks, or docking ports. Use boost for travel, then stop boosting when you need control.",
          },
        },
        {
          "@type": "Question",
          name: "Does boosting drain battery in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Boosting drains ship battery, and stopping boost lets it recharge over time. Do not keep boosting when you are trying to scan or land.",
          },
        },
        {
          "@type": "Question",
          name: "What do Copper and Iron look like in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early Copper is tied to Copper or Cupric-style stones, while Iron is tied to Iron, Ferric, or Ferrous-style stones and outcrops. Check the resource label when you scan or target the node.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Gray Quartz in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Go to Solar Alpha 2 after installing Scanalyzer Alpha. Use radar to find the High Peak landmark, then look for dark crystal-like Gray Quartz nodes, scan them, and mine them.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I mine Gray Quartz in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably have not scanned it yet, or Scanalyzer Alpha is crafted but not installed. Install the module in the Shipyard before returning to Solar Alpha 2.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find Gravite in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use radar for the approximate direction, then search visually. Gravite interferes with precise radar tracking, so it does not behave like a normal ore marker.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get Silicon Gel in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy Silicon Gel from the Company Exchanger during the trading objective. Sell only enough resources to afford the purchase unless you know the next recipe is safe.",
          },
        },
        {
          "@type": "Question",
          name: "How do I refill Magnetic Plasma in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After installing FTL Engine - Eco, return to a station, board or access the ship/dock prompt, and refill Magnetic Plasma before jumping. In the current build shown, the refill prompt can cost 40 credits.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I jump after installing FTL Engine - Eco?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check two things: the engine must be installed in the Shipyard, and Magnetic Plasma must be refilled before the jump.",
          },
        },
        {
          "@type": "Question",
          name: "Who should I talk to first at RakMu in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Talk to the RakMu Clerk first. The clerk introduces the next routes: Bob for ship upgrades, Ingrid for Noviciate, and the Mining Bureau for resource work.",
          },
        },
        {
          "@type": "Question",
          name: "What does Bob do at RakMu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bob starts the ship improvement route. He points you toward cargo space, resource detectors, mining lasers, and battery upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "What does Ingrid do at RakMu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ingrid starts the Noviciate test route. Noviciate rank matters later if you want corporation access.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Mining Bureau do in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Mining Bureau helps with targeted resource work. It can give sample tasks, sell coordinates for resources, and pay for useful exploration information.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build a base right after RakMu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not immediately unless you already have the parts and a clear deposit target. Most players should first improve cargo, detector, mining laser, and resource knowledge before committing to the first base.",
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
          title="Start SpaceCraft Without Getting Stuck Before RakMu"
          description="Follow the first route through Copper, Iron, Scanalyzer Alpha, Gray Quartz, Gravite, Silicon Gel, FTL Engine, Magnetic Plasma, and RakMu."
          gameTitle="SpaceCraft"
          gameHref="/spacecraft"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
