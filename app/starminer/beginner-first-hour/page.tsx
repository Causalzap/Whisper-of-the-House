import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerFirstHourContent from "@/data/starminer/beginner-first-hour.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer/beginner-first-hour`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-ship-vitals-ui.webp`,
  `${siteUrl}/images/starminer/starminer-presets-modifiers-warmonger.webp`,
  `${siteUrl}/images/starminer/starminer-linear-rotational-dampeners.webp`,
  `${siteUrl}/images/starminer/starminer-scanner-composition-unknown.webp`,
  `${siteUrl}/images/starminer/starminer-mining-laser-haulers.webp`,
  `${siteUrl}/images/starminer/starminer-haulers-collecting-resources.webp`,
  `${siteUrl}/images/starminer/starminer-eonite-sale-2400-credits.webp`,
  `${siteUrl}/images/starminer/starminer-module-grid-blueprints.webp`,
  `${siteUrl}/images/starminer/starminer-free-t2-ship-salvage.webp`,
];

const toc = [
  { id: "start-mode", label: "Campaign or Sandbox" },
  { id: "presets-modifiers", label: "Presets and modifiers" },
  { id: "ship-vitals", label: "Ship vitals" },
  { id: "controls", label: "Movement basics" },
  { id: "rank-xp", label: "Rank and XP" },
  { id: "scan-mine", label: "Scan and mine" },
  { id: "haulers", label: "Haulers" },
  { id: "sell-first-load", label: "Sell first load" },
  { id: "real-values", label: "Early numbers" },
  { id: "build-carefully", label: "Build carefully" },
  { id: "free-modules", label: "Free modules" },
  { id: "common-problems", label: "Common problems" },
  { id: "next-step", label: "Next guides" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/starminer", label: "Starminer Guide Hub" },
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
  {
    href: "/starminer/early-research-progression",
    label: "Early Research Progression Guide",
  },
];

export const metadata: Metadata = {
  title: "Starminer Beginner Guide: First Hour Tips & Presets",
  description:
    "Start Starminer with the right first-hour route: presets, 3 modifiers, Campaign vs Sandbox, scanning, mining, haulers, selling, power and early building.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Beginner Guide: First Hour Tips, Presets and Sandbox Start",
    description:
      "A practical Starminer first-hour guide covering presets, 3 modifiers, Campaign vs Sandbox, ship vitals, scanning, mining, haulers, selling and early power.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer ship UI showing credits, XP, energy, battery, storage, water and heat during the first hour.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Beginner Guide: First Hour Tips & Presets",
    description:
      "Pick a preset, choose 3 modifiers, survive Campaign or Sandbox, scan, mine, sell, fix power and avoid early Starminer mistakes.",
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
          name: "Beginner First Hour",
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
        "Starminer Beginner Guide: First Hour Route, Presets, 3 Modifiers, Campaign vs Sandbox, Mining, Haulers, Selling and Early Power",
      description:
        "A player-focused Starminer beginner guide for the first hour of Early Access play. It explains how to pick a preset, choose 3 modifiers from the preset pool, compare Campaign and Sandbox starts, read ship vitals, handle energy, battery, storage, water and heat, use basic movement controls, understand rank and XP, scan targets before mining, fix mining laser and hauler problems, sell a first resource load at Reclamation 9, use early values such as Eonite sale value, G2 Solar license cost and Research Lab cost as planning examples, avoid overbuilding, and decide which related guide to read next.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Beginner Guide" },
        { "@type": "Thing", name: "Starminer First Hour" },
        { "@type": "Thing", name: "Starminer Presets" },
        { "@type": "Thing", name: "Selected Modifiers 0/3" },
        { "@type": "Thing", name: "Warmonger Preset" },
        { "@type": "Thing", name: "Miner Preset" },
        { "@type": "Thing", name: "Builder Preset" },
        { "@type": "Thing", name: "Campaign Mode" },
        { "@type": "Thing", name: "Sandbox Mode" },
        { "@type": "Thing", name: "Mining Laser" },
        { "@type": "Thing", name: "Haulers" },
        { "@type": "Thing", name: "Reclamation 9" },
        { "@type": "Thing", name: "Low Energy" },
        { "@type": "Thing", name: "Research Lab" },
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
          name: "What should I do first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start by checking energy, battery, storage, water and heat. Then scan a nearby target, mine a small load, wait for haulers, sell surplus and add power before building big modules.",
          },
        },
        {
          "@type": "Question",
          name: "Should I start in Campaign or Sandbox?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Campaign is safer for a first run because it teaches systems in order. Sandbox is fine, but you need to self-direct by checking vitals, scanning, mining, selling and stabilizing power before expanding.",
          },
        },
        {
          "@type": "Question",
          name: "How do Starminer presets work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In this Early Access build, the preset screen shows Warmonger, Miner, Builder, Trader, Navigator and Custom. Each preset changes the modifier pool you choose from. The screen shows Selected Modifiers 0/3, so choose 3 modifiers that help your first-hour plan instead of confirming by preset name alone.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best beginner preset in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For a first run, choose a preset based on the modifier pool, not just the name. Miner or Builder-style starts are usually safer if you are learning mining, power, hauling and selling. Warmonger is more weapon-heavy and is better once you understand combat and power draw.",
          },
        },
        {
          "@type": "Question",
          name: "What does Warmonger do in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Warmonger shows a weapon-heavy modifier pool. In the shown build, it includes Offensive perks such as Advanced Kinetic Weapons Training, Tactical Energy Weapon Training, Advanced Weapons Systems Training, Rapid Fire Deployment Training and Energy Weapons Research, plus Streamlined Construction Techniques as an Industry option.",
          },
        },
        {
          "@type": "Question",
          name: "How many modifiers do I choose in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The preset screen shows Selected Modifiers 0/3, so you choose 3 modifiers before confirming your start.",
          },
        },
        {
          "@type": "Question",
          name: "How much XP do I need to rank up in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "One early rank screen shows Ensign moving toward Lieutenant Junior with XP increasing from 750 to 1,500. Treat rank and XP as part of progression, but check your current build because Early Access values may change.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my mining laser not working in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mining may be offline, the laser may face the wrong direction, the target may be out of range, or your power may be low. Rotate the ship, move closer and check the grid.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my haulers not collecting in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may have moved away too early, storage may be full, or the target may be awkwardly positioned. Stay near the target and wait for collection to finish.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sell resources early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Return to Reclamation 9 or another valid trade target, open the trade screen, choose Sell, select the amount and confirm the trade. Wait for the transfer to finish.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell all my early resources in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Keep materials needed for repairs, blueprints and Research Lab preparation. Sell surplus or high-value resources when you need credits.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my ship keep drifting in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your ship may have dampeners off, low energy, too much cargo mass or the wrong orientation. Turn on dampeners, stop thrusting, hold Space and let power recover.",
          },
        },
        {
          "@type": "Question",
          name: "What should I build first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build what fixes the current bottleneck. If low energy appears, add solar and battery. If storage fills too fast, add storage. If research is your goal, prepare power, heat, colonists and materials first.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build the Research Lab in the first hour?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Build it after mining, selling, power, battery and heat are stable. In one run, the Research Lab cost shows 71 Iron, 36 Silicates, 8 Cobalt, 10 Colonists and 500 Energy.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend early credits on in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spend credits on the bottleneck: power, battery, storage, emergency water, useful licenses or materials. Do not spend credits on flashy upgrades while the grid is unstable.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest beginner mistake in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The biggest beginner mistake is overbuilding too early. Extra modules add mass, power draw, heat and material costs. Build a stable loop first, then expand.",
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
          title="Starminer Beginner Guide: What to Do in Your First Hour"
          description="Pick a preset, choose 3 modifiers, survive Campaign or Sandbox, scan, mine, sell, fix power and avoid the early mistakes that stall new runs."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerFirstHourContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}