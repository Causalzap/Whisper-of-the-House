import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/deep-rock-galactic/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-mission-terminal.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-weapon-selection.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-expenite-deposit.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-aggression-meter.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-munitions-crate.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-workbench.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-biobooster.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-elevator-defense.webp`,
];

const toc = [
  { id: "beginner-guide-overview", label: "Overview" },
  { id: "is-rogue-core-hard-for-beginners", label: "Is It Hard?" },
  { id: "first-run-plan", label: "First Run Plan" },
  { id: "read-the-mission-terminal", label: "Mission Terminal" },
  { id: "choose-a-beginner-class", label: "Beginner Class" },
  { id: "choose-starter-gear", label: "Starter Gear" },
  { id: "mine-and-deposit-expenite", label: "Expenite" },
  { id: "choose-upgrades-by-problem", label: "Upgrades" },
  { id: "watch-the-aggression-meter", label: "Aggression Meter" },
  { id: "use-ammo-and-armor-crates", label: "Crates" },
  { id: "use-workbenches", label: "Workbenches" },
  { id: "use-bio-boosters", label: "Bio Boosters" },
  { id: "risk-vectors", label: "Risk Vectors" },
  { id: "know-when-to-start-the-elevator", label: "Elevator" },
  { id: "what-to-do-after-a-run", label: "After a Run" },
  { id: "common-beginner-mistakes", label: "Mistakes" },
  { id: "rogue-core-vs-drg-for-beginners", label: "Rogue Core vs DRG" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic", label: "Deep Rock Galactic: Rogue Core Guide" },
  { href: "/deep-rock-galactic/best-class", label: "Rogue Core Best Class" },
  { href: "/deep-rock-galactic/upgrades-explained", label: "Rogue Core Upgrades Explained" },
  { href: "/deep-rock-galactic/solo-guide", label: "Rogue Core Solo Guide" },
  { href: "/deep-rock-galactic/cooper-guide", label: "Rogue Core Cooper Guide" },
  { href: "/deep-rock-galactic/rogue-core-vs-drg", label: "Rogue Core vs Deep Rock Galactic" },
];

export const metadata: Metadata = {
  title: "Rogue Core Beginner Guide: First Runs & Expenite Tips",
  description:
    "Start Rogue Core safely: pick beginner missions, choose classes and weapons, mine Expenite, use crates, and leave before pressure spikes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Rogue Core Beginner Guide: First Runs, Classes, Expenite",
    description:
      "Learn how to start Rogue Core with safer mission choices, beginner Reclaimers, weapon picks, Expenite upgrades, crates, Workbenches, Bio Boosters, Risk Vectors, and elevator timing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Mission terminal in Deep Rock Galactic Rogue Core showing mission depth, facility length, and complexity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue Core Beginner Guide: First Runs & Expenite Tips",
    description:
      "Pick safer missions, choose better starter gear, mine Expenite, and avoid the biggest beginner mistakes in Rogue Core.",
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
          name: "Deep Rock Galactic: Rogue Core Guide",
          item: `${siteUrl}/deep-rock-galactic`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rogue Core Beginner Guide",
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
        "Deep Rock Galactic: Rogue Core Beginner Guide: First Runs, Mission Terminal, Reclaimers, Weapons, Expenite, Upgrades, Risk Vectors and Elevator Timing",
      description:
        "A player-focused beginner guide for Deep Rock Galactic: Rogue Core explaining how to start early runs, whether Rogue Core is hard for beginners, how to read the mission terminal, how Depth, Facility Length, Complexity and Risk Vectors affect a run, which Reclaimers are easiest to start with, how to choose starter weapons, how Expenite upgrade costs work, how to use Workbenches, Bio Boosters, ammo crates and armor crates, when to watch the aggression meter, when to call the elevator, what to do after a run, and how Rogue Core differs from classic Deep Rock Galactic for new players.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        { "@type": "Thing", name: "Rogue Core beginner guide" },
        { "@type": "Thing", name: "Deep Rock Galactic Rogue Core tips" },
        { "@type": "Thing", name: "How to play Rogue Core" },
        { "@type": "Thing", name: "Rogue Core first runs" },
        { "@type": "Thing", name: "Rogue Core mission terminal" },
        { "@type": "Thing", name: "Rogue Core Depth" },
        { "@type": "Thing", name: "Rogue Core Facility Length" },
        { "@type": "Thing", name: "Rogue Core Complexity" },
        { "@type": "Thing", name: "Rogue Core Risk Vectors" },
        { "@type": "Thing", name: "Rogue Core Expenite" },
        { "@type": "Thing", name: "Rogue Core upgrade cost" },
        { "@type": "Thing", name: "Rogue Core Workbench" },
        { "@type": "Thing", name: "Rogue Core Bio Booster" },
        { "@type": "Thing", name: "Rogue Core aggression meter" },
        { "@type": "Thing", name: "Rogue Core elevator defense" },
        { "@type": "Thing", name: "Deep Rock Galactic" },
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
          name: "Is Rogue Core hard for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Rogue Core can feel hard at first because it is faster, more pressure-based, and more dependent on upgrade decisions than classic Deep Rock Galactic. It gets easier once you learn when to mine, deposit, upgrade, and leave.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick a low-depth mission, choose a simple Reclaimer, take a controllable weapon, mine and deposit Expenite early, and leave the floor before the aggression meter turns the run against you.",
          },
        },
        {
          "@type": "Question",
          name: "How much Expenite does the first upgrade cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The first Expenite upgrade costs 120. Early upgrade thresholds then increase by 10 Expenite until they reach 230.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best beginner class in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian is the safest beginner class because it has crowd control, protection, armor support, and space-making tools. Falconer is a strong flexible option if you want damage and team utility.",
          },
        },
        {
          "@type": "Question",
          name: "What weapon should beginners pick?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Beginners should pick the weapon that solves their current problem. Recoil control and simple damage are good while learning. Armor breaking is better when armored enemies slow the run down. Ammo or magazine bonuses are better when the run keeps running dry.",
          },
        },
        {
          "@type": "Question",
          name: "What are Risk Vectors in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Risk Vectors are between-stage choices that add a downside and a reward direction to the run. Read the downside before picking the reward because bad modifiers can make later floors harder.",
          },
        },
        {
          "@type": "Question",
          name: "Are rare upgrades always better?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. A rare upgrade can be worse than a common upgrade if it does not fit your weapon, Reclaimer, or current problem.",
          },
        },
        {
          "@type": "Question",
          name: "Should I full clear every floor?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Take useful rewards, mine nearby Expenite, and use important side systems, but leave before the aggression meter makes the floor too dangerous.",
          },
        },
        {
          "@type": "Question",
          name: "Should DRG players play Rogue Core differently?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. DRG habits help with movement, mining, and teamwork, but Rogue Core is more about run tempo, upgrade drafting, Expenite timing, and knowing when to leave.",
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
          title="Rogue Core Beginner Guide: What to Do in Your First Runs"
          description="New to Rogue Core? Start here for mission choices, beginner classes, weapon picks, Expenite upgrades, Risk Vectors, Workbenches, Bio Boosters, crates, and elevator timing."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
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