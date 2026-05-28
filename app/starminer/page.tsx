import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import StarminerHubContent from "@/data/starminer/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-ship-vitals-ui.webp`,
  `${siteUrl}/images/starminer/starminer-presets-modifiers-warmonger.webp`,
  `${siteUrl}/images/starminer/starminer-linear-rotational-dampeners.webp`,
  `${siteUrl}/images/starminer/starminer-mining-laser-haulers.webp`,
  `${siteUrl}/images/starminer/starminer-trade-sell-resources.webp`,
  `${siteUrl}/images/starminer/starminer-low-energy-warning.webp`,
  `${siteUrl}/images/starminer/starminer-g2-solar-license-cost.webp`,
];

const toc = [
  { id: "best-order", label: "Best guide order" },
  { id: "beginner-first-hour", label: "Beginner first hour" },
  { id: "campaign-sandbox-survival", label: "Campaign, Sandbox, Survival" },
  { id: "controls", label: "Controls and dampeners" },
  { id: "mining", label: "Mining and scanner" },
  { id: "money", label: "Money and selling" },
  { id: "power-heat", label: "Power and heat" },
  { id: "research", label: "Research progression" },
  { id: "worth-playing", label: "Early Access verdict" },
  { id: "common-problems", label: "Common problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/starminer/beginner-first-hour",
    label: "Beginner First Hour Guide",
  },
  {
    href: "/starminer/controls-dampeners-ship-spinning",
    label: "Controls, Dampeners and Ship Spinning Guide",
  },
  {
    href: "/starminer/how-to-mine-scanner-laser",
    label: "Mining, Scanner and Laser Guide",
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
  title: "Starminer Guide: Beginner Tips, Mining, Power & Research",
  description:
    "Find the right Starminer guide for beginner first hour, Campaign vs Sandbox, controls, mining, credits, Low Energy, heat and research.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Guide: Beginner Tips, Mining, Power, Heat and Research",
    description:
      "Start here for Starminer beginner routes, presets, Campaign vs Sandbox, ship controls, mining, selling, Low Energy, heat signature and early research.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer ship UI showing credits, XP, energy, battery, storage, water and heat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Guide: Beginner Tips, Mining, Power & Research",
    description:
      "Use this Starminer hub to find the right guide for controls, mining, credits, Low Energy, heat and early research.",
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
        "Starminer Guide Hub: Beginner First Hour, Campaign vs Sandbox, Controls, Mining, Money, Power, Heat and Research",
      description:
        "A complete Starminer Early Access guide hub that helps players choose the right guide for their current problem. It covers the beginner first-hour route, presets and selected modifiers, Campaign, Sandbox and Survival starts, Newtonian movement, dampeners and ship spinning, scanner and mining laser problems, haulers, Reclamation 9 selling, early credits, missions, Low Energy, solar panels, batteries, heat signature, alien attention, Research Lab timing, Research Points, colonists, G2 Solar and early research priorities.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Guide" },
        { "@type": "Thing", name: "Starminer Beginner Guide" },
        { "@type": "Thing", name: "Campaign Mode" },
        { "@type": "Thing", name: "Sandbox Mode" },
        { "@type": "Thing", name: "Survival Mode" },
        { "@type": "Thing", name: "Starminer Presets" },
        { "@type": "Thing", name: "Selected Modifiers" },
        { "@type": "Thing", name: "Dampeners" },
        { "@type": "Thing", name: "Ship Spinning" },
        { "@type": "Thing", name: "Mining Laser" },
        { "@type": "Thing", name: "Scanner" },
        { "@type": "Thing", name: "Haulers" },
        { "@type": "Thing", name: "Reclamation 9" },
        { "@type": "Thing", name: "Low Energy" },
        { "@type": "Thing", name: "Heat Signature" },
        { "@type": "Thing", name: "Research Lab" },
        { "@type": "Thing", name: "Research Points" },
        { "@type": "Thing", name: "G2 Solar" },
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
          name: "What is the best Starminer guide to read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Beginner First Hour Guide. It gives you the safest first route through presets, modifiers, Campaign vs Sandbox, ship vitals, mining, selling and early building decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Should I start Starminer in Campaign or Sandbox?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Campaign is easier for a first run because it teaches systems through objectives. Sandbox is fine if you want freedom, but you must self-direct the same survival loop: check vitals, scan, mine, sell, add power and expand slowly.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Starminer hard at the beginning?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Starminer combines Newtonian movement, ship mass, directional tools, energy, battery, heat, cargo transfer, research costs and colonists. If one system fails, several other systems can feel broken too.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick a preset and 3 modifiers, check ship vitals, bring the energy grid online, learn dampeners, scan before mining, mine a small load, wait for haulers, sell surplus and add power before overbuilding.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make money in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mine useful resources, sell surplus at Reclamation 9, keep repair and research materials, use suitable missions for credits and XP, and spend credits on the bottleneck that blocks your next loop.",
          },
        },
        {
          "@type": "Question",
          name: "What should I research first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Research by bottleneck. For many early runs, power, batteries, heat control, mining efficiency, mobility or colonist support matter more than fleet, hangar or nuclear tech.",
          },
        },
        {
          "@type": "Question",
          name: "Is G2 Solar worth it early in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if power is blocking progress and you can afford it. In one shown Early Access build, Energy Solar costs 5,000 credits and requires 0 RP, making it a strong credit-based power target.",
          },
        },
        {
          "@type": "Question",
          name: "Is Starminer worth it in Early Access?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Starminer is a good fit if you enjoy complex space engineering, physics-heavy movement and logistics problems. It may be frustrating if you want a finished, polished, low-friction mining game.",
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
          title="Starminer Guide Hub"
          description="Find the right guide for your current Starminer problem: first hour, Campaign vs Sandbox, controls, mining, money, Low Energy, heat or research."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <StarminerHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

