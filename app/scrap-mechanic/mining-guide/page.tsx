import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MiningGuideContent from "@/data/scrap-mechanic/mining-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/mining-guide`;

const metadataTitle =
  "Scrap Mechanic Mining Guide: Plasma Drill & Turret Seat";

const metadataDescription =
  "Mine Terramass in Scrap Mechanic with the Plasma Drill, Turret Seat, Sticky Wheels, ore collection fixes, Minerbot prep, and safe return triggers.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-site-01-gyro-core-map.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-access-card.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-plasma-drill-level-one-unlock.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-elevator-floor-selection.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-mine-tunnel.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-plasma-drill-terramass-tutorial.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-plasma-drill-ore-ejection.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-turret-seat-axobot-2000.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-turret-seat-plasma-drill-installed.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-turret-seat-drill-hits-suspension.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-electric-engine-sticky-wheels.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-four-plasma-drills-overlap.webp`,
];

const toc = [
  {
    id: "unlock-mining-site-01",
    label: "Unlock Mining Site 01",
  },
  {
    id: "find-mining-elevator",
    label: "Find the mining elevator",
  },
  {
    id: "what-to-bring-underground",
    label: "What to bring underground",
  },
  {
    id: "underground-combat",
    label: "Underground combat",
  },
  {
    id: "first-plasma-drill",
    label: "How the Plasma Drill works",
  },
  {
    id: "valid-terramass",
    label: "Identify valid Terramass",
  },
  {
    id: "ore-ejection",
    label: "Fix missing ore",
  },
  {
    id: "fixed-drill-problems",
    label: "Fixed drill problems",
  },
  {
    id: "turret-seat",
    label: "Turret Seat upgrade",
  },
  {
    id: "turret-clearance",
    label: "Test turret clearance",
  },
  {
    id: "upgrade-priorities",
    label: "Mining vehicle upgrades",
  },
  {
    id: "sticky-wheels-electric-engine",
    label: "Sticky Wheels and engine",
  },
  {
    id: "multiple-plasma-drills",
    label: "Multiple Plasma Drills",
  },
  {
    id: "when-to-return",
    label: "When to return",
  },
  {
    id: "process-mined-ore",
    label: "Process mined ore",
  },
  {
    id: "troubleshooting",
    label: "Mining troubleshooting",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
    {
      href: "/scrap-mechanic",
      label: "Scrap Mechanic 1.0 Guide Hub",
    },
    {
      href: "/scrap-mechanic/first-grow-lab-walkthrough",
      label: "First Grow Lab Walkthrough",
    },
    {
      href: "/scrap-mechanic/hubert-watchtower-small-tank",
      label: "Hubert Watchtower & Small Tank",
    },
    {
      href: "/scrap-mechanic/ore-processing-guide",
      label: "Ore Processing, Ingots & Vault",
    },
    {
      href: "/scrap-mechanic/warehouse-key",
      label: "Warehouse Key Guide",
    },
    {
      href: "/scrap-mechanic/warehouse-walkthrough",
      label: "Warehouse Walkthrough",
    },
    {
      href: "/scrap-mechanic/achievements",
      label: "All 34 Achievements Guide",
    },
  ];

const faqEntities = [
  {
    question: "Where is Mining Site 01 in Scrap Mechanic?",
    answer:
      "Mining Site 01 is revealed on the planetary survey map during the story Warehouse route. After the objective updates, follow the marked route to the Mining Hub entrance and use the Mining Access Card.",
  },
  {
    question:
      "Is Excavation Island the same as Mining Site 01 in Scrap Mechanic?",
    answer:
      "Some community searches use Excavation Island or mining island for the broader area. The in-game story map in this route labels the destination Mining Site 01.",
  },
  {
    question:
      "Do I need a special vehicle for the first Scrap Mechanic mine?",
    answer:
      "A normal vehicle with one fixed Plasma Drill can enter and collect early ore, but independent drill aiming, connected storage, stable traction, and recovery supplies make later trips much easier.",
  },
  {
    question: "How do I know whether I am mining Terramass?",
    answer:
      "Watch the Plasma Drill collection meter. Valid Terramass advances the meter. Ordinary terrain can disappear without producing meter progress or valuable ore.",
  },
  {
    question: "Why is my Plasma Drill not dropping ore?",
    answer:
      "A full Plasma Drill ejects a physical ore object. Reverse the vehicle and check underneath the chassis, beside the drill mount, and outside the Ore Collector pickup range.",
  },
  {
    question: "Should I buy the Turret Seat immediately?",
    answer:
      "One fixed drill is enough for the first mining test. The Turret Seat becomes the priority when poor aiming, repeated repositioning, and downward digging are slowing every deposit.",
  },
  {
    question: "Why does my Turret Seat hit the suspension?",
    answer:
      "The turret is mounted too low or too close to the front axle. Raise the complete turret assembly and test maximum upward, straight-forward, and maximum downward aim before returning underground.",
  },
  {
    question: "Are Sticky Wheels required for mining?",
    answer:
      "Sticky Wheels are not required for the first flat tunnel. They become useful on steep, curved, and uneven surfaces where normal wheels cannot hold the mining vehicle in position.",
  },
  {
    question:
      "Should I use a Fuel Engine or Electric Engine for mining?",
    answer:
      "A Fuel Engine works for the first rig. An Electric Engine simplifies logistics once the vehicle already carries a large Battery supply, but driving and drilling then consume the same reserve.",
  },
  {
    question: "Are four Plasma Drills four times faster?",
    answer:
      "Not automatically. Four drills clear a wide face quickly, but overlapping every beam on one small deposit makes them compete for the same material. Spread them across separate valid areas.",
  },
  {
    question: "Do I need weapons in the Scrap Mechanic mine?",
    answer:
      "Yes. Underground routes include combat encounters, and the Plasma Drill is not a reliable replacement for a Spud weapon. Bring ammunition and healing food with the mining supplies.",
  },
  {
    question: "What should I do with mined ore?",
    answer:
      "Collect the ejected ore, return it to the Mining Hub, process it through the Crushbot and later processing systems, and use the resulting Ingots or Vault value for upgrades and deeper progression.",
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
    title:
      "Scrap Mechanic Mining Guide: Plasma Drill, Turret Seat and Terramass",
    description:
      "Follow my Mining Site 01 route, identify valid Terramass, recover missing ore, stop a fixed drill from trapping the vehicle, prepare for underground combat, and build a more reliable mining rig.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        width: 680,
        height: 449,
        alt: "Scrap Mechanic Plasma Drill Terramass mining tutorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find Mining Site 01, extract Terramass, fix Plasma Drill problems, add a Turret Seat, and avoid stranding the mining vehicle underground.",
    images: [imageUrls[5]],
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
          name: "Scrap Mechanic Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mining Guide",
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
        "Scrap Mechanic Mining Guide: Plasma Drill, Turret Seat, Terramass and Mining Site 01",
      description:
        "A practical Scrap Mechanic 1.0 Mining Site 01 guide covering the Warehouse map that reveals the underground Gyro Core, the Mining Access Card, floor-selection elevator, underground combat preparation, Totebot, Tapebot and Minerbot threats, Plasma Drill Terramass extraction, collection-meter checks, physical ore ejection, Ore Collector placement, fixed-drill vehicles digging into their own front wheels, Lift and temporary-ramp recovery, the 2,000-Credit Turret Seat, turret clearance testing, Sticky Wheels, Chemicals, Electric Engine power planning, four-drill overlap, safe return triggers, mined-ore processing, and fixes for common mining vehicle failures.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Scrap Mechanic",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Site 01",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Guide",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Plasma Drill",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Terramass",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Turret Seat",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Sticky Wheels",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Electric Engine",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Ore Collector",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Minerbot",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Access Card",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic mining vehicle",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Plasma Drill not dropping ore",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Site elevator",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="How I Mine Terramass Without Trapping My Vehicle"
          description="I unlock Mining Site 01, watch the Plasma Drill meter, recover ejected ore, prepare for underground Bots, and upgrade from a fixed drill to a Turret Seat mining rig."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MiningGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}