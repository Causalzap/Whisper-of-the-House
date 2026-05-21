import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RogueCoreHubContent from "@/data/deep-rock-galactic/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-mission-terminal.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-five-reclaimers.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-expenite-deposit.webp`,
];

const toc = [
  { id: "rogue-core-guide-overview", label: "Overview" },
  { id: "early-access-note", label: "Early Access" },
  { id: "start-here-by-player-type", label: "Start Here" },
  { id: "guide-library", label: "Guide Library" },
  { id: "beginner-guide", label: "Beginner Guide" },
  { id: "best-class-guide", label: "Best Class" },
  { id: "upgrades-explained-guide", label: "Upgrades" },
  { id: "solo-guide", label: "Solo Guide" },
  { id: "cooper-guide", label: "Cooper Guide" },
  { id: "rogue-core-vs-drg-guide", label: "Rogue Core vs DRG" },
  { id: "current-cluster-status", label: "Cluster Status" },
  { id: "quick-game-definition", label: "One-Minute Intro" },
  { id: "co-op-team-comps", label: "Co-op Team Comps" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic/beginner-guide", label: "Rogue Core Beginner Guide" },
  { href: "/deep-rock-galactic/best-class", label: "Rogue Core Best Class" },
  { href: "/deep-rock-galactic/upgrades-explained", label: "Rogue Core Upgrades Explained" },
  { href: "/deep-rock-galactic/solo-guide", label: "Rogue Core Solo Guide" },
  { href: "/deep-rock-galactic/cooper-guide", label: "Rogue Core Cooper Guide" },
  { href: "/deep-rock-galactic/rogue-core-vs-drg", label: "Rogue Core vs Deep Rock Galactic" },
];

export const metadata: Metadata = {
  title: "Deep Rock Galactic Rogue Core Guide: Classes, Builds, Tips",
  description:
    "Start Rogue Core with our guide hub for beginner tips, best classes, upgrades, solo Cooper, DRG differences, and co-op team comp notes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Deep Rock Galactic: Rogue Core Guide Hub",
    description:
      "Find the right Rogue Core guide for your problem: beginner tips, Reclaimers, upgrades, solo Cooper, DRG differences, Early Access notes, and co-op team comp coverage.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Mission terminal in Deep Rock Galactic Rogue Core showing mission choices, depth, facility length, and complexity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Rock Galactic Rogue Core Guide: Classes, Builds, Tips",
    description:
      "Use this Rogue Core hub to find beginner tips, best classes, upgrade guides, solo Cooper help, and DRG comparison pages.",
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
        "Deep Rock Galactic: Rogue Core Guide Hub: Beginner Tips, Best Classes, Upgrades, Solo Cooper, DRG Differences and Co-op Coverage",
      description:
        "A navigation-focused Deep Rock Galactic: Rogue Core guide hub for Early Access players. This page helps players choose the right guide based on their current problem, including first-run basics, Reclaimer class choices, Expenite and R.E.P.D. upgrades, Workbenches, Bio Boosters, solo pressure, Cooper commands, Expenite Gems, Rogue Core vs Deep Rock Galactic differences, standalone status, and current co-op team-composition coverage.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        { "@type": "Thing", name: "Deep Rock Galactic Rogue Core guide" },
        { "@type": "Thing", name: "Rogue Core beginner guide" },
        { "@type": "Thing", name: "Rogue Core best class" },
        { "@type": "Thing", name: "Rogue Core Reclaimers" },
        { "@type": "Thing", name: "Guardian" },
        { "@type": "Thing", name: "Falconer" },
        { "@type": "Thing", name: "Spotter" },
        { "@type": "Thing", name: "Slicer" },
        { "@type": "Thing", name: "Retcon" },
        { "@type": "Thing", name: "Rogue Core upgrades" },
        { "@type": "Thing", name: "Rogue Core Expenite" },
        { "@type": "Thing", name: "R.E.P.D." },
        { "@type": "Thing", name: "Rogue Core Workbench" },
        { "@type": "Thing", name: "Rogue Core Bio Booster" },
        { "@type": "Thing", name: "Rogue Core solo guide" },
        { "@type": "Thing", name: "Rogue Core Cooper" },
        { "@type": "Thing", name: "Rogue Core vs Deep Rock Galactic" },
        { "@type": "Thing", name: "Rogue Core co-op team comps" },
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
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Deep Rock Galactic: Rogue Core Guide Cluster",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Rogue Core Beginner Guide",
          url: `${siteUrl}/deep-rock-galactic/beginner-guide`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Rogue Core Best Class Guide",
          url: `${siteUrl}/deep-rock-galactic/best-class`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rogue Core Upgrades Explained",
          url: `${siteUrl}/deep-rock-galactic/upgrades-explained`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Rogue Core Solo Guide",
          url: `${siteUrl}/deep-rock-galactic/solo-guide`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Rogue Core Cooper Guide",
          url: `${siteUrl}/deep-rock-galactic/cooper-guide`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Rogue Core vs Deep Rock Galactic",
          url: `${siteUrl}/deep-rock-galactic/rogue-core-vs-drg`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Deep Rock Galactic: Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Deep Rock Galactic: Rogue Core is a standalone 1-4 player co-op FPS action roguelite spin-off of Deep Rock Galactic. It uses Reclaimers, Expenite upgrades, run-based dives, and randomized build decisions instead of classic DRG mission pacing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue Core DLC for Deep Rock Galactic?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Rogue Core is a standalone game, not DLC. You do not need to own the original Deep Rock Galactic to play Rogue Core.",
          },
        },
        {
          "@type": "Question",
          name: "Which Rogue Core guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you are new, start with the Beginner Guide. If you already know the basics and need to choose a class, read the Best Class Guide. If your runs fall apart after a few upgrades, read Upgrades Explained.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue Core good for solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but solo has its own pressure. Cooper helps, but every interaction still falls on you. Use the Solo Guide and Cooper Guide if you mostly play alone.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best class in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There is no single best class for every player. Guardian is the safest starter, Falconer is flexible in co-op, Spotter is team support, Slicer is aggressive solo pressure, and Retcon is the high-skill timing pick.",
          },
        },
        {
          "@type": "Question",
          name: "What is Expenite in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Expenite is the main run upgrade resource. You mine it, deposit it into the R.E.P.D., fill the upgrade bar, and choose upgrades that shape your current run.",
          },
        },
        {
          "@type": "Question",
          name: "Should I read a wiki before playing Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not for your first runs. A wiki is useful for exact data, but early on you need decision help: what to do first, which class to try, how to use Expenite, and when to leave a floor.",
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
          title="Deep Rock Galactic: Rogue Core Guide Hub"
          description="Start here if you are new to Rogue Core. Pick the right guide for beginner basics, best classes, upgrades, solo Cooper, DRG differences, and co-op team-comp coverage."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RogueCoreHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}