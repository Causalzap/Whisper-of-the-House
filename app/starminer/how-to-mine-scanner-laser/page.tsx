import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MiningScannerLaserContent from "@/data/starminer/how-to-mine-scanner-laser.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer/how-to-mine-scanner-laser`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-scanner-target-range.webp`,
  `${siteUrl}/images/starminer/starminer-scanner-composition-unknown.webp`,
  `${siteUrl}/images/starminer/starminer-mining-online-system-toggle.webp`,
  `${siteUrl}/images/starminer/starminer-mining-laser-haulers.webp`,
  `${siteUrl}/images/starminer/starminer-haulers-collecting-resources.webp`,
  `${siteUrl}/images/starminer/starminer-raw-asteroid-resources.webp`,
  `${siteUrl}/images/starminer/starminer-low-energy-warning.webp`,
];

const toc = [
  { id: "basic-loop", label: "Basic mining loop" },
  { id: "scanner", label: "Scanner checks" },
  { id: "mining-online", label: "Turn on mining" },
  { id: "laser-range", label: "Mining laser range" },
  { id: "haulers", label: "Haulers" },
  { id: "target-choice", label: "What to mine first" },
  { id: "asteroid-resources", label: "Asteroid resources" },
  { id: "raw-vs-processed", label: "Raw resources" },
  { id: "resources", label: "Sell or keep" },
  { id: "power", label: "Low energy" },
  { id: "after-mining", label: "After mining" },
  { id: "common-problems", label: "Common problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/starminer", label: "Starminer Guide Hub" },
  {
    href: "/starminer/beginner-first-hour",
    label: "Beginner First Hour Guide",
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
  title: "Starminer Mining Guide: Scanner, Laser & Haulers",
  description:
    "Learn how to mine in Starminer: scan targets, fix Composition Unknown, align the mining laser, use haulers, manage power and choose what to sell.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Mining Guide: Scanner, Mining Laser, Haulers and Resources",
    description:
      "A practical Starminer mining guide covering scanner range, Composition Unknown, mining laser angle and range, haulers, asteroid resources, low energy and sell-or-keep decisions.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer scanner aimed at an asteroid with distance and Composition Unknown shown.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Mining Guide: Scanner, Laser & Haulers",
    description:
      "Fix scanner, mining laser, hauler and Low Energy problems while mining in Starminer.",
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
          name: "Mining, Scanner and Laser",
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
        "Starminer Mining Guide: Scanner Range, Composition Unknown, Mining Laser Angle, Haulers, Asteroid Resources and Low Energy Fixes",
      description:
        "A player-focused Starminer mining guide for Early Access. It explains how to scan targets before mining, what to do when an asteroid still says Composition Unknown, why scanner angle and distance matter, how to turn on mining only when ready, how to align the T1 Mining Laser, why the shown T1 Mining Laser uses 20 MW, has 10t mass and shows 182.5m range with bonuses active, how haulers collect resources, what to mine first, how to think about debris, asteroids, cobalt, thorium, Eonite and raw resources, how Low Energy affects mining, and what to sell or keep after a mining trip.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Mining Guide" },
        { "@type": "Thing", name: "Starminer Scanner" },
        { "@type": "Thing", name: "Scanner Range" },
        { "@type": "Thing", name: "Composition Unknown" },
        { "@type": "Thing", name: "Mining Laser" },
        { "@type": "Thing", name: "T1 Mining Laser" },
        { "@type": "Thing", name: "Haulers" },
        { "@type": "Thing", name: "Asteroids" },
        { "@type": "Thing", name: "Raw Resources" },
        { "@type": "Thing", name: "Cobalt" },
        { "@type": "Thing", name: "Thorium" },
        { "@type": "Thing", name: "Eonite" },
        { "@type": "Thing", name: "Low Energy" },
        { "@type": "Thing", name: "Reclamation 9" },
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
          name: "How do I mine in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Turn on scanners, face the target, move close enough, scan it, enable mining, line up your mining laser, then wait for haulers to collect the resources.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the asteroid say Composition Unknown in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It has not been scanned properly yet. Turn on scanners, point your ship toward the asteroid, move closer if needed, and wait for the scan to complete.",
          },
        },
        {
          "@type": "Question",
          name: "What is the scanner range in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A fixed scanner range value was not clearly captured in this build. If the target remains Composition Unknown, move closer, face the scanner toward the target, and check whether your current scanner panel shows a range value.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my scanner not working in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The scanner may be off, pointed the wrong way, too far from the target, or your ship may be low on power. Check angle and distance first.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my mining laser not firing in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mining may be offline, the laser may not face the target, the target may be out of range, or your grid may not have enough energy.",
          },
        },
        {
          "@type": "Question",
          name: "Does the mining laser need line of sight in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Treat it that way. The mining laser is mounted on your ship, so angle and module position matter. Rotate the ship until the laser has a clean path.",
          },
        },
        {
          "@type": "Question",
          name: "What does the T1 Mining Laser cost to run in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the example shown here, the T1 Mining Laser uses 20 MW, has 10t mass, and shows 182.5m range with bonuses active. Exact numbers may change with perks or updates.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my haulers not collecting resources in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "They may still be traveling, storage may be full, the target may be awkwardly positioned, or you may have moved away too quickly. Stay close until the transfer finishes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I mine debris or asteroids first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mine the debris or target the Campaign points you toward first. Use asteroids when you know which resource you need and have scanned the composition.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find cobalt, thorium or Eonite in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the scanner before committing to a trip. Debris-style targets can be useful for rarer build materials, while some asteroid classes may point toward resources like thorium. Confirm composition in your own build before filling cargo.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell everything I mine in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Sell what you can spare, but keep materials needed for repairs, construction, blueprints and early progression.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my ship handle worse after mining in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cargo adds mass. A heavier rig drifts more, slows down worse, and can strain power while maneuvering. Sell or unload before making risky moves.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I get Low Energy while mining in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may be moving, scanning, running dampeners, powering haulers and firing lasers at the same time. Turn off unused systems and let the battery recover.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after my first mining trip in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Return to Reclamation 9, sell only spare resources, check your next objective, then decide whether you need power, storage, repairs, research preparation or more mining.",
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
          title="How to Mine in Starminer"
          description="Scan targets, fix Composition Unknown, line up the mining laser, wait for haulers, manage Low Energy and decide which resources to keep or sell."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MiningScannerLaserContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

