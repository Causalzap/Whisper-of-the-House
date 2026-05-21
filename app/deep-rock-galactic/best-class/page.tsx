import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestClassContent from "@/data/deep-rock-galactic/best-class.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic/best-class`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-five-reclaimers.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-guardian-armor-beacon.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-falconer-drone.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-spotter-crit-darts.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-slicer-melee.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-retcon-rewind.webp`,
];

const toc = [
  { id: "best-class-overview", label: "Overview" },
  { id: "quick-recommendations", label: "Quick Picks" },
  { id: "important-class-numbers", label: "Class Numbers" },
  { id: "guardian", label: "Guardian" },
  { id: "guardian-best-for", label: "Guardian Best For" },
  { id: "guardian-best-upgrades", label: "Guardian Upgrades" },
  { id: "guardian-watch-out", label: "Guardian Watch Out" },
  { id: "falconer", label: "Falconer" },
  { id: "falconer-best-for", label: "Falconer Best For" },
  { id: "falconer-best-upgrades", label: "Falconer Upgrades" },
  { id: "falconer-watch-out", label: "Falconer Watch Out" },
  { id: "spotter", label: "Spotter" },
  { id: "spotter-best-for", label: "Spotter Best For" },
  { id: "spotter-best-upgrades", label: "Spotter Upgrades" },
  { id: "spotter-watch-out", label: "Spotter Watch Out" },
  { id: "slicer", label: "Slicer" },
  { id: "slicer-best-for", label: "Slicer Best For" },
  { id: "slicer-best-upgrades", label: "Slicer Upgrades" },
  { id: "slicer-watch-out", label: "Slicer Watch Out" },
  { id: "retcon", label: "Retcon" },
  { id: "retcon-best-for", label: "Retcon Best For" },
  { id: "retcon-best-upgrades", label: "Retcon Upgrades" },
  { id: "retcon-watch-out", label: "Retcon Watch Out" },
  { id: "best-solo-class", label: "Best Solo Class" },
  { id: "best-coop-class", label: "Best Co-op Class" },
  { id: "coop-class-combos", label: "Co-op Combos" },
  { id: "common-class-mistakes", label: "Mistakes" },
  { id: "which-class-should-you-main", label: "Which to Main" },
  { id: "recommended-class-order", label: "Class Order" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic", label: "Deep Rock Galactic: Rogue Core Guide" },
  { href: "/deep-rock-galactic/beginner-guide", label: "Rogue Core Beginner Guide" },
  { href: "/deep-rock-galactic/solo-guide", label: "Rogue Core Solo Guide" },
  { href: "/deep-rock-galactic/upgrades-explained", label: "Rogue Core Upgrades Explained" },
  { href: "/deep-rock-galactic/cooper-guide", label: "Rogue Core Cooper Guide" },
  { href: "/deep-rock-galactic/rogue-core-vs-drg", label: "Rogue Core vs Deep Rock Galactic" },
];

export const metadata: Metadata = {
  title: "Rogue Core Best Class: Guardian, Slicer, Falconer",
  description:
    "Choose the best Rogue Core class for solo, co-op, beginners, upgrades, and playstyle: Guardian, Falconer, Spotter, Slicer, or Retcon.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Rogue Core Best Class: Solo, Co-op, Upgrades, Reclaimers",
    description:
      "Compare Guardian, Falconer, Spotter, Slicer, and Retcon by beginner safety, solo value, co-op utility, class numbers, upgrade paths, and team combos.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The five Reclaimers in Deep Rock Galactic Rogue Core.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue Core Best Class: Guardian, Slicer, Falconer",
    description:
      "Pick the right Rogue Core Reclaimer for solo, co-op, beginner runs, upgrades, and class combos.",
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
          name: "Rogue Core Best Class",
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
        "Deep Rock Galactic: Rogue Core Best Class Guide: Guardian, Falconer, Spotter, Slicer, Retcon, Solo Picks, Co-op Combos and Upgrade Paths",
      description:
        "A player-focused Rogue Core best class guide comparing Guardian, Falconer, Spotter, Slicer, and Retcon by beginner friendliness, solo strength, co-op value, class mechanics, Early Access numbers, upgrade priorities, kill-chain pressure, remote revive utility, crit support, space control, timing tools, recommended class learning order, and practical co-op class pairings.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        { "@type": "Thing", name: "Rogue Core best class" },
        { "@type": "Thing", name: "Rogue Core classes" },
        { "@type": "Thing", name: "Rogue Core Reclaimers" },
        { "@type": "Thing", name: "Guardian" },
        { "@type": "Thing", name: "Falconer" },
        { "@type": "Thing", name: "Spotter" },
        { "@type": "Thing", name: "Slicer" },
        { "@type": "Thing", name: "Retcon" },
        { "@type": "Thing", name: "Rogue Core solo class" },
        { "@type": "Thing", name: "Rogue Core co-op class" },
        { "@type": "Thing", name: "Rogue Core class upgrades" },
        { "@type": "Thing", name: "Slicer kill chain" },
        { "@type": "Thing", name: "Falconer remote revive" },
        { "@type": "Thing", name: "Spotter Crit Darts" },
        { "@type": "Thing", name: "Guardian Armor Beacon" },
        { "@type": "Thing", name: "Retcon Rewind" },
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
          name: "What is the best class in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There is no single best class for every run. In Early Access, balance may still change, but the role split is clear: Guardian is the safest starter, Falconer is flexible co-op utility, Spotter is team support, Slicer is aggressive solo pressure, and Retcon is the timing-based high-skill pick.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best solo class in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian is the safest solo class for new players. Slicer has the higher aggressive solo ceiling if you can manage movement, kill chains, and close-range pressure.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best co-op class in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Falconer, Spotter, and Guardian are the easiest co-op recommendations because they bring remote revive utility, crit windows, armor support, and space control.",
          },
        },
        {
          "@type": "Question",
          name: "Is Slicer good for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slicer is good if you like aggressive play, but it is less forgiving than Guardian or Falconer. Slicer depends on planned aggression, kill chains, and safe exits after close-range pushes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Retcon good for new players?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Retcon is not the best first class for most players. It has strong tools, but they work best when you already understand timing, positioning, damage windows, and enemy pressure.",
          },
        },
        {
          "@type": "Question",
          name: "Is Spotter only a support class?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Spotter is support-focused, but Crit Darts, enemy detection, and ammo tools can strongly improve team damage and run control. Spotter feels best when the team actually focuses marked targets.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrades should Guardian pick?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian should prioritize stun duration, extra Concussive Barrage value, Repulsion Field uptime, and Armor Beacon cooldown or duration. Damage against stunned enemies is strong when the team can use the control window.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrades should Slicer pick?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slicer should prioritize kill-chain duration, chain trigger windows, Slice damage, and mobility or shield reliability. Blade damage is especially useful early because it helps start chains faster.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrades should Falconer pick?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Falconer should prioritize charge replenishment, burst count, electric damage, electrocution chain effects, and remote revive reliability in co-op. Revive-only upgrades lose value in solo.",
          },
        },
        {
          "@type": "Question",
          name: "What order should I learn Rogue Core classes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A smooth learning order is Guardian, Falconer, Spotter, Slicer, then Retcon. This teaches safety first, then flexible offense, team support, aggression, and finally timing-based tools.",
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
          title="Rogue Core Best Class: Which Reclaimer Should You Play?"
          description="Not sure who to pick? Compare Guardian, Falconer, Spotter, Slicer, and Retcon by solo value, co-op utility, class numbers, upgrade paths, and playstyle."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestClassContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}