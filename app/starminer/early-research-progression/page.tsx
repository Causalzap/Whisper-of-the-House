import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyResearchContent from "@/data/starminer/early-research-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer/early-research-progression`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-g2-solar-license-cost.webp`,
  `${siteUrl}/images/starminer/starminer-research-lab-module-unlocked.webp`,
  `${siteUrl}/images/starminer/starminer-research-lab-power-drain.webp`,
  `${siteUrl}/images/starminer/starminer-t2-energy-battery-build-cost.webp`,
  `${siteUrl}/images/starminer/starminer-thermal-dumper-radiator.webp`,
  `${siteUrl}/images/starminer/starminer-nuclear-reactor-requires-fuel.webp`,
  `${siteUrl}/images/starminer/starminer-sell-price-perk-advanced-trade.webp`,
  `${siteUrl}/images/starminer/starminer-module-grid-blueprints.webp`,
  `${siteUrl}/images/starminer/starminer-research-lab-build-cost.webp`,
];

const toc = [
  { id: "how-research-works", label: "How research works" },
  { id: "do-before-research-lab", label: "Before the Research Lab" },
  { id: "research-lab", label: "Research Lab power drain" },
  { id: "research-points-output", label: "Research Point output" },
  { id: "colonists-staffing", label: "Colonists and staffing" },
  { id: "g2-solar", label: "G2 Solar" },
  { id: "battery", label: "Battery upgrades" },
  { id: "heat-control", label: "Heat control" },
  { id: "by-bottleneck", label: "Research by bottleneck" },
  { id: "recommended-route", label: "Recommended route" },
  { id: "unlock-overview", label: "Unlock overview" },
  { id: "nuclear", label: "Nuclear power" },
  { id: "fleet-hangars", label: "Fleet and hangars" },
  { id: "perks", label: "Perks" },
  { id: "materials", label: "Materials" },
  { id: "research-lab-cost-note", label: "Research Lab cost" },
  { id: "common-traps", label: "Common traps" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/starminer", label: "Starminer Guide Hub" },
  {
    href: "/starminer/beginner-first-hour",
    label: "Beginner First Hour Guide",
  },
  {
    href: "/starminer/how-to-mine-scanner-laser",
    label: "Mining, Scanner and Laser Guide",
  },
  {
    href: "/starminer/controls-dampeners-ship-spinning",
    label: "Controls, Dampeners and Ship Spinning Guide",
  },
  {
    href: "/starminer/money-selling-resources",
    label: "Money and Selling Resources Guide",
  },
  {
    href: "/starminer/power-heat-low-energy",
    label: "Power, Heat and Low Energy Guide",
  },
];

export const metadata: Metadata = {
  title: "Starminer Research Guide: Best Early Unlocks",
  description:
    "Learn what to research first in Starminer, how Research Points work, when to build the Research Lab, and how to avoid power, heat and colonist traps.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Research Guide: Best Early Unlocks and Research Lab Route",
    description:
      "Plan your Starminer research route with G2 Solar, batteries, heat control, Research Points, colonists, Research Lab costs, nuclear delays and safer early unlocks.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer research screen showing Energy Solar with 5,000 credit license cost and 0 required RP.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Research Guide: Best Early Unlocks",
    description:
      "Choose early Starminer research safely: G2 Solar, batteries, heat control, Research Lab timing, RP output, colonists and nuclear traps.",
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
          name: "Starminer Guide",
          item: `${siteUrl}/starminer`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Early Research Progression",
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
        "Starminer Early Research Guide: What to Unlock First, Research Points, Research Lab Costs, Colonists, G2 Solar and Power-Safe Progression",
      description:
        "A player-focused Starminer research and progression guide for Early Access. It explains how research works through credits, licenses, XP, Research Points, materials, colonists, power and heat; why G2 Solar and Energy Solar are strong early power targets; when to build the Research Lab; why Research Points depend on lab uptime, staffing, power stability and heat control; how colonists and crew support can block research; what to delay, including nuclear power, fleet and hangar upgrades; how to choose unlocks by bottleneck; and how to avoid wasting credits, cobalt or Research Points on upgrades your station cannot support.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Research Guide" },
        { "@type": "Thing", name: "Starminer Research Points" },
        { "@type": "Thing", name: "Research Lab" },
        { "@type": "Thing", name: "Research Lab Cost" },
        { "@type": "Thing", name: "Colonists" },
        { "@type": "Thing", name: "Crew Staffing" },
        { "@type": "Thing", name: "G2 Solar" },
        { "@type": "Thing", name: "Energy Solar" },
        { "@type": "Thing", name: "T2 Energy Battery" },
        { "@type": "Thing", name: "Thermal Dumper" },
        { "@type": "Thing", name: "Thermal Radiator" },
        { "@type": "Thing", name: "T2 Nuclear Reactor" },
        { "@type": "Thing", name: "Advanced Trade Negotiation" },
        { "@type": "Thing", name: "Low Energy" },
        { "@type": "Thing", name: "Starminer Early Unlocks" },
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
          name: "What should I research first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Research whatever fixes your current bottleneck. For many early runs, that means power, batteries, thermal support, mining efficiency, mobility or colonist support before fleet and nuclear tech.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build the Research Lab early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Build the Research Lab after your mining, selling, power, battery, heat and colonist support are stable enough to support it.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Research Points in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Research Points come from running the Research Lab after it is built, powered and staffed. If the lab drains the grid or lacks staffing, fix those problems before trying to rush more RP.",
          },
        },
        {
          "@type": "Question",
          name: "How fast does the Research Lab produce Research Points in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A fixed RP-per-minute rate is not clearly shown in this build. Treat RP output as an uptime problem: the lab needs stable power, heat control and staffing to keep producing.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Research Lab not producing RP in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check power, heat, staffing, colonists and lab uptime. If any of those are missing, the lab may be built but not producing useful Research Points.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Research Lab causing Low Energy in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Research Lab adds continuous power demand. If your solar and batteries are weak, it can pull the station into Low Energy.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Research Lab heating up in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The lab can add heat pressure while it runs. Add Thermal Dumpers for spikes and Radiators for ongoing heat control.",
          },
        },
        {
          "@type": "Question",
          name: "What are Colonists used for in Starminer research?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Colonists can be part of Research Lab requirements and staffing. In one run, the Research Lab cost includes 10 Colonists, so research can be blocked by people as well as materials, power and heat.",
          },
        },
        {
          "@type": "Question",
          name: "How do I staff the Research Lab in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check whether the lab has enough colonists, crew support and stable station operation. If the lab is powered but not producing RP, staffing is one of the first things to inspect.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the Research Lab cost look different in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Costs may vary by version, perks or balance changes. In this run, the build menu labels it as T2 Research Lab and shows 71 Iron, 36 Silicates, 8 Cobalt, 10 Colonists and 500 Energy.",
          },
        },
        {
          "@type": "Question",
          name: "Is G2 Solar worth it early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if power is the bottleneck and you can afford the license. The shown Energy Solar unlock costs 5,000 credits and requires 0 RP.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get T2 Battery early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Get battery capacity early if your grid dips during mining, movement, construction or research. Batteries protect you from power spikes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush nuclear power in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Nuclear can require fuel, support modules and heat management. It is safer after solar, batteries, economy and thermal systems are stable.",
          },
        },
        {
          "@type": "Question",
          name: "Should I research fleet or hangar tech early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually not first. Fleet and hangar systems are powerful, but they add cost, logistics, power and heat pressure. Build the economy and grid first.",
          },
        },
        {
          "@type": "Question",
          name: "Is a sell price perk good in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if credits are your bottleneck and you are selling often. If the ship is failing because of power or heat, fix that first.",
          },
        },
        {
          "@type": "Question",
          name: "Is research speed worth it in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only after your Research Lab can run safely. Faster research does not help if the lab keeps crashing your grid.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell cobalt before research in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Be careful. Cobalt and other rarer materials can appear in advanced module or lab costs, so check your next build before selling it.",
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
          title="What to Research First in Starminer"
          description="Build the Research Lab without crashing your grid, wasting credits, or getting blocked by heat, colonists and bad early unlocks."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EarlyResearchContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
