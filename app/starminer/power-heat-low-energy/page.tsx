import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PowerHeatLowEnergyContent from "@/data/starminer/power-heat-low-energy.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer/power-heat-low-energy`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-low-energy-warning.webp`,
  `${siteUrl}/images/starminer/starminer-ship-vitals-ui.webp`,
  `${siteUrl}/images/starminer/starminer-build-menu-solar-battery.webp`,
  `${siteUrl}/images/starminer/starminer-mining-laser-haulers.webp`,
  `${siteUrl}/images/starminer/starminer-thermal-dumper-radiator.webp`,
  `${siteUrl}/images/starminer/starminer-research-lab-power-drain.webp`,
  `${siteUrl}/images/starminer/starminer-g2-solar-license-cost.webp`,
  `${siteUrl}/images/starminer/starminer-merchant-buy-water.webp`,
];

const toc = [
  { id: "why-low-energy-happens", label: "Why Low Energy happens" },
  { id: "read-vitals", label: "Read ship vitals" },
  { id: "turn-off-systems", label: "Turn off unused systems" },
  { id: "solar-battery", label: "Solar and batteries" },
  { id: "mining-power", label: "Mining power drain" },
  { id: "heat-basics", label: "Heat and heat signature" },
  { id: "thermal-dumper-radiator", label: "Dumper vs Radiator" },
  { id: "research-lab", label: "Research Lab power drain" },
  { id: "g2-solar", label: "G2 Solar" },
  { id: "water", label: "Water and support loop" },
  { id: "common-traps", label: "Common traps" },
  { id: "recovery-route", label: "Recovery route" },
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
    href: "/starminer/early-research-progression",
    label: "Early Research Progression Guide",
  },
];

export const metadata: Metadata = {
  title: "Starminer Power Guide: Low Energy, Heat & G2 Solar",
  description:
    "Fix Low Energy in Starminer, manage heat signature, use solar and batteries, buy G2 Solar, and avoid Research Lab, mining and nuclear traps.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Power Guide: Low Energy, Heat, G2 Solar and Batteries",
    description:
      "A practical Starminer power and heat guide covering Low Energy, solar panels, batteries, heat signature, Thermal Dumpers, Radiators, G2 Solar and Research Lab timing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer Low Energy warning while a ship operates near asteroids.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Power Guide: Low Energy, Heat & G2 Solar",
    description:
      "Stop Low Energy loops, manage heat signature, build solar and batteries, and time G2 Solar and Research Lab safely.",
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
          name: "Power, Heat and Low Energy",
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
        "Starminer Power and Heat Guide: Low Energy Fixes, Solar Panels, Batteries, Heat Signature, G2 Solar and Research Lab Timing",
      description:
        "A player-focused Starminer power and heat guide for Early Access. It explains why Low Energy happens, how movement, scanners, mining lasers, weapons, construction and the Research Lab drain the grid, how to read energy, battery, water, storage and heat together, when to turn off unused systems, why solar panels and energy batteries should come before extra load, how mining drains power, how heat and heat signature affect both stability and alien attention, how Thermal Dumpers and Thermal Radiators work, why the Research Lab is a power and heat stress test, why G2 Solar or Energy Solar is a strong 5,000-credit and 0-RP early target, why water still matters to the support loop, and how to recover when the grid is already collapsing.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Power Guide" },
        { "@type": "Thing", name: "Low Energy" },
        { "@type": "Thing", name: "Heat Signature" },
        { "@type": "Thing", name: "Solar Panels" },
        { "@type": "Thing", name: "Energy Battery" },
        { "@type": "Thing", name: "G2 Solar" },
        { "@type": "Thing", name: "Energy Solar" },
        { "@type": "Thing", name: "Thermal Dumper" },
        { "@type": "Thing", name: "Thermal Radiator" },
        { "@type": "Thing", name: "Research Lab" },
        { "@type": "Thing", name: "Mining Laser Power" },
        { "@type": "Thing", name: "Alien Attention" },
        { "@type": "Thing", name: "Water" },
        { "@type": "Thing", name: "T2 Nuclear Reactor" },
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
          name: "How do I fix Low Energy in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stop moving, turn off unused scanners, mining lasers and weapons, wait for battery recovery, then add more solar and battery capacity before expanding again.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Low Energy keep happening in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are probably running too many active systems at once. Movement, dampeners, scanners, mining, weapons, construction and research can all pull from the same weak early grid.",
          },
        },
        {
          "@type": "Question",
          name: "Should I turn off scanners after scanning in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if power is tight. Scan the target, confirm what you need, then turn scanners off until you need them again.",
          },
        },
        {
          "@type": "Question",
          name: "Do mining lasers use power in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Mining lasers add power demand, and mining often happens while you are also moving, using dampeners and running haulers.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my ship control worse during Low Energy in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dampeners and other active systems need power. If the grid is strained, stopping, rotating and recovering from bad movement can feel worse.",
          },
        },
        {
          "@type": "Question",
          name: "What should I build first for power in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with more solar panels and energy battery capacity. They are the safest early way to stabilize the grid before bigger modules.",
          },
        },
        {
          "@type": "Question",
          name: "Is G2 Solar worth it early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if power is your bottleneck and you can afford the license. In this build, the shown Energy Solar unlock costs 5,000 credits and requires 0 RP.",
          },
        },
        {
          "@type": "Question",
          name: "What does a Thermal Dumper do in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Thermal Dumper absorbs excess heat, stores it, and vents it when filled. Treat it as a heat buffer.",
          },
        },
        {
          "@type": "Question",
          name: "What does a Thermal Radiator do in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Thermal Radiator passively dumps heat over time. It is better for ongoing heat control than a one-time buffer.",
          },
        },
        {
          "@type": "Question",
          name: "Does heat signature attract aliens in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, high heat signature can attract alien attention. Keep long high-heat activities under control, especially when running research, weapons, mining or heavy industry.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build the Research Lab early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Build the Research Lab after your solar, battery and thermal support are stable, because the lab can drain power and produce heat.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush nuclear power in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Nuclear power can require fuel and heat support, so it is safer after your early solar, battery, economy and thermal systems are already stable.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my station overheat in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Too many active modules may be producing more heat than your dumpers and radiators can handle. Reduce load and add thermal support before expanding again.",
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
          title="Fix Low Energy and Heat in Starminer"
          description="Stabilize your grid with solar, batteries and thermal modules, control heat signature, time G2 Solar safely, and avoid Research Lab power crashes."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PowerHeatLowEnergyContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

