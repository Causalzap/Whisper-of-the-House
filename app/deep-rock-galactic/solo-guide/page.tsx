import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SoloGuideContent from "@/data/deep-rock-galactic/solo-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic/solo-guide`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-cooper-solo.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-slicer-melee.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-cooper-upgrade.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-power-cable-route.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-expenite-deposit.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-aggression-meter.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-workbench.webp`,
];

const toc = [
  { id: "solo-guide-overview", label: "Overview" },
  { id: "why-solo-feels-hard", label: "Why Solo Feels Hard" },
  { id: "solo-run-plan", label: "Solo Plan" },
  { id: "best-solo-class", label: "Best Solo Class" },
  { id: "guardian-solo", label: "Guardian" },
  { id: "slicer-solo", label: "Slicer" },
  { id: "retcon-solo", label: "Retcon" },
  { id: "falconer-solo", label: "Falconer" },
  { id: "solo-upgrade-priority", label: "Upgrades" },
  { id: "armor-mechanics", label: "Armor" },
  { id: "use-cooper", label: "Cooper" },
  { id: "follow-the-power-cable", label: "Power Cable" },
  { id: "solo-floor-tempo", label: "Floor Tempo" },
  { id: "solo-vs-coop-habits", label: "Solo vs Co-op" },
  { id: "expenite-solo", label: "Expenite" },
  { id: "aggression-meter-solo", label: "Aggression Meter" },
  { id: "workbenches-solo", label: "Workbenches" },
  { id: "solo-elevator-rules", label: "Elevator" },
  { id: "common-solo-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic", label: "Deep Rock Galactic: Rogue Core Guide" },
  { href: "/deep-rock-galactic/cooper-guide", label: "Rogue Core Cooper Guide" },
  { href: "/deep-rock-galactic/upgrades-explained", label: "Rogue Core Upgrades Explained" },
  { href: "/deep-rock-galactic/best-class", label: "Rogue Core Best Class" },
  { href: "/deep-rock-galactic/beginner-guide", label: "Rogue Core Beginner Guide" },
  { href: "/deep-rock-galactic/rogue-core-vs-drg", label: "Rogue Core vs Deep Rock Galactic" },
];

export const metadata: Metadata = {
  title: "Rogue Core Solo Guide: Best Class, Cooper, Upgrades",
  description:
    "Play Rogue Core solo better: best solo classes, Cooper commands, Expenite Gems, armor tips, upgrades, floor tempo, and elevator defense.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Rogue Core Solo Guide: Best Class, Cooper, Upgrades",
    description:
      "Learn how Rogue Core solo works, why solo pressure feels different, which Reclaimers work best, how to use Cooper, and how to survive upgrades, armor loss, Expenite, Workbenches, and elevator fights.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Cooper supporting a solo run in Deep Rock Galactic Rogue Core.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue Core Solo Guide: Best Class, Cooper, Upgrades",
    description:
      "Survive Rogue Core solo with better class picks, Cooper commands, Expenite timing, armor upgrades, Workbench decisions, and elevator strategy.",
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
          name: "Rogue Core Solo Guide",
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
        "Deep Rock Galactic: Rogue Core Solo Guide: Best Solo Class, Cooper Commands, Expenite Gems, Armor, Upgrades, Floor Tempo and Elevator Defense",
      description:
        "A player-focused Rogue Core solo guide explaining why solo feels harder than co-op, how enemy scaling and timer pressure work, which Reclaimers are best for solo, how Guardian, Slicer, Retcon and Falconer differ in solo, how to use Cooper commands, how to handle Expenite and Expenite Gems, which solo upgrades matter most, why armor and damage reduction are important, how to follow the power cable, how to pace each floor, when Workbenches are worth it, and how to survive elevator defense.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        { "@type": "Thing", name: "Rogue Core solo guide" },
        { "@type": "Thing", name: "Rogue Core solo" },
        { "@type": "Thing", name: "Rogue Core best solo class" },
        { "@type": "Thing", name: "Rogue Core Cooper" },
        { "@type": "Thing", name: "Cooper commands" },
        { "@type": "Thing", name: "Rogue Core Expenite" },
        { "@type": "Thing", name: "Expenite Gem" },
        { "@type": "Thing", name: "Rogue Core armor" },
        { "@type": "Thing", name: "Rogue Core solo upgrades" },
        { "@type": "Thing", name: "Guardian solo" },
        { "@type": "Thing", name: "Slicer solo" },
        { "@type": "Thing", name: "Retcon solo" },
        { "@type": "Thing", name: "Falconer solo" },
        { "@type": "Thing", name: "Rogue Core elevator defense" },
        { "@type": "Thing", name: "Rogue Core aggression meter" },
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
          name: "Can you play Rogue Core solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Rogue Core supports solo play, and solo runs give you Cooper as a helper. Solo still has real pressure because the timer keeps moving while you handle mining, deposits, fights, upgrades, and routing alone.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue Core solo harder than co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Solo can feel harder because every interaction falls on you. Enemy scaling is reduced, but co-op players can split jobs while solo players must mine, fight, deposit, and move by themselves.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best solo class in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian is the safest solo class for new players. Slicer has the highest aggressive ceiling if you can manage kill chains and close-range pressure. Retcon is strong for experienced players who can use Time Rewind before risky pushes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Falconer good solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Falconer is playable solo, but you should not pick it for remote revive value. That tool is much stronger in co-op. In solo, Falconer depends more on drone pressure and electric damage.",
          },
        },
        {
          "@type": "Question",
          name: "Is Retcon good solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Retcon can be very good solo for experienced players. Time Rewind works best when you set it up before a dangerous push, then use it as a planned reset if the room turns bad.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrades are best for solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Solo players should prioritize self-sustain, armor recovery, damage reduction, movement, ammo help, and simple damage triggers. Damage Dam-style effects and defensive suit upgrades are valuable when health or armor keeps collapsing.",
          },
        },
        {
          "@type": "Question",
          name: "How should I use Cooper solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the laser pointer to command Cooper onto specific jobs: mine awkward Expenite, focus high-threat enemies, help during deposits, or support route-critical tasks. Cooper upgrades can appear through R.E.P.D. or Bio Booster interactions.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do with an Expenite Gem?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Deposit it immediately. An Expenite Gem can create a major upgrade moment for both you and Cooper, so carrying it through more danger is usually not worth it.",
          },
        },
        {
          "@type": "Question",
          name: "Should I full clear floors in solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Take the rewards that change the run, such as Expenite thresholds, Expenite Gems, Workbenches, Bio Boosters, and needed crates, then return to the route before the floor becomes too expensive.",
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
          title="Rogue Core Solo Guide: Best Class, Cooper, and Survival Tips"
          description="Playing solo? Learn why solo pressure feels different, which classes work best, how to use Cooper, when to deposit Expenite Gems, what upgrades to take, and how to survive elevator fights."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SoloGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}