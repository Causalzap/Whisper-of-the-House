import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RogueCoreVsDrgContent from "@/data/deep-rock-galactic/rogue-core-vs-drg.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic/rogue-core-vs-drg`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-facility-length.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-mission-terminal.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-five-reclaimers.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-weapon-selection.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-expenite-deposit.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-enhancements-terminal.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-ramrod-bar.webp`,
];

const toc = [
  { id: "rogue-core-vs-drg-overview", label: "Overview" },
  { id: "quick-comparison", label: "Quick Compare" },
  { id: "is-rogue-core-a-sequel", label: "Sequel?" },
  { id: "missions-vs-runs", label: "Missions vs Runs" },
  { id: "classes-vs-reclaimers", label: "Classes" },
  { id: "weapons-and-builds", label: "Weapons" },
  { id: "expenite-vs-mining", label: "Expenite" },
  { id: "tempo-and-pressure", label: "Difficulty" },
  { id: "old-drg-habits", label: "Old DRG Habits" },
  { id: "solo-differences", label: "Solo" },
  { id: "progression-differences", label: "Progression" },
  { id: "ramrod-and-between-runs", label: "Ramrod" },
  { id: "who-should-try-rogue-core", label: "Who Should Try It" },
  { id: "who-might-not-like-it", label: "Who Might Not" },
  { id: "biggest-differences", label: "Big Differences" },
  { id: "is-rogue-core-worth-it-for-drg-players", label: "Worth It?" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic", label: "Deep Rock Galactic: Rogue Core Guide" },
  { href: "/deep-rock-galactic/beginner-guide", label: "Rogue Core Beginner Guide" },
  { href: "/deep-rock-galactic/best-class", label: "Rogue Core Best Class" },
  { href: "/deep-rock-galactic/upgrades-explained", label: "Rogue Core Upgrades Explained" },
  { href: "/deep-rock-galactic/solo-guide", label: "Rogue Core Solo Guide" },
  { href: "/deep-rock-galactic/cooper-guide", label: "Rogue Core Cooper Guide" },
];

export const metadata: Metadata = {
  title: "Rogue Core vs Deep Rock Galactic: Key Differences",
  description:
    "Compare Rogue Core and DRG: runs, Reclaimers, Expenite, difficulty, solo Cooper, upgrades, DLC status, and who should play it.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Rogue Core vs Deep Rock Galactic: Runs, Classes, Difficulty",
    description:
      "See how Rogue Core differs from Deep Rock Galactic, including roguelite runs, Reclaimers, Expenite upgrades, Hazard 3-style baseline pressure, solo Cooper, and standalone status.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Facility length screen in Deep Rock Galactic Rogue Core showing a run-based structure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue Core vs Deep Rock Galactic: Key Differences",
    description:
      "Learn whether Rogue Core is like DRG, harder than DRG, standalone or DLC, and what changes for missions, classes, mining, and solo.",
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
          name: "Rogue Core vs Deep Rock Galactic",
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
        "Rogue Core vs Deep Rock Galactic: Key Differences, Standalone Status, Difficulty, Reclaimers, Expenite, Solo Cooper and Roguelite Runs",
      description:
        "A player-focused comparison of Deep Rock Galactic: Rogue Core and the original Deep Rock Galactic explaining how Rogue Core changes the structure from classic missions to roguelite runs, how Reclaimers differ from DRG classes, how Expenite and run upgrades change the mining loop, why Rogue Core feels faster and more difficult, how its baseline difficulty compares to Hazard 3 in DRG, whether Rogue Core is standalone or DLC, how solo Cooper differs from Bosco, how progression works between runs, and which DRG players are most likely to enjoy Rogue Core.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic",
        },
        { "@type": "Thing", name: "Rogue Core vs Deep Rock Galactic" },
        { "@type": "Thing", name: "Rogue Core differences" },
        { "@type": "Thing", name: "Rogue Core standalone game" },
        { "@type": "Thing", name: "Rogue Core DLC" },
        { "@type": "Thing", name: "Rogue Core difficulty" },
        { "@type": "Thing", name: "Hazard 3" },
        { "@type": "Thing", name: "Rogue Core Reclaimers" },
        { "@type": "Thing", name: "Rogue Core Expenite" },
        { "@type": "Thing", name: "Rogue Core upgrades" },
        { "@type": "Thing", name: "Rogue Core solo Cooper" },
        { "@type": "Thing", name: "Bosco" },
        { "@type": "Thing", name: "Roguelite runs" },
        { "@type": "Thing", name: "Facility Length" },
        { "@type": "Thing", name: "Ramrod" },
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
          name: "Is Rogue Core like Deep Rock Galactic?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but only in some ways. It keeps the co-op caves, dwarven tone, mining pressure, and bug fights, but changes the structure into roguelite runs with weapons, upgrades, Expenite, Reclaimers, and bosses.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue Core a sequel to DRG?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rogue Core is better treated as a spin-off, not a direct sequel or replacement for Deep Rock Galactic.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue Core a DLC for Deep Rock Galactic?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Rogue Core is a standalone game, not DLC for Deep Rock Galactic. You do not need to own the original DRG to buy or play Rogue Core.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest difference between Rogue Core and DRG?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The biggest difference is structure. DRG is built around missions, while Rogue Core is built around runs where you gain weapons and upgrades during the dive.",
          },
        },
        {
          "@type": "Question",
          name: "Does Rogue Core have the same classes as DRG?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Rogue Core uses Reclaimers instead of the classic DRG classes. They have their own abilities, roles, and upgrade interactions.",
          },
        },
        {
          "@type": "Question",
          name: "Is mining important in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but the focus is different. Expenite is especially important because it fuels run upgrades. You mine it, deposit it, and use it to make your build stronger during the dive.",
          },
        },
        {
          "@type": "Question",
          name: "Can you play Rogue Core solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Rogue Core supports solo play with Cooper as your helper, but solo still requires good routing, upgrade choices, Expenite deposits, and survival decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Should DRG players try Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "DRG players should try Rogue Core if they want a faster, run-based version of the DRG idea with roguelite upgrades and new class identities. If you only want more classic DRG missions, it may not be what you expect.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue Core harder than Deep Rock Galactic?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rogue Core can feel harder because the baseline is more intense. Ghost Ship has described Rogue Core as starting close to a Hazard 3 experience from Deep Rock Galactic and scaling upward from there.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to play DRG before Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. DRG experience helps you understand the tone, movement, co-op pressure, and cave chaos, but Rogue Core has its own systems and should be learned as its own game.",
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
          title="Rogue Core vs Deep Rock Galactic: What Changed?"
          description="Coming from DRG? Here is how Rogue Core changes missions into runs, replaces classic classes with Reclaimers, adds Expenite upgrades, raises baseline pressure, and works as a standalone game."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RogueCoreVsDrgContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}