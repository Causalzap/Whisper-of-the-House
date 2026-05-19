import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBuildsContent from "@/data/dwarf-eats-mountain/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain/best-builds`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-ballista-laser-flamer-chaos.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-carrying-capacity.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-flameworks-building.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-demolition-shack-first-demo.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-ballistics-workshop-ballistas.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-grand-laboratory-laser-cannon.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-mithril-upgrades-chain-mail.webp`,
];

const toc = [
  { id: "best-builds-overview", label: "Builds overview" },
  { id: "choose-by-bottleneck", label: "By bottleneck" },
  { id: "build-playbooks", label: "Build playbooks" },
  { id: "runner-economy-build", label: "Runner economy" },
  { id: "miner-build", label: "Miner build" },
  { id: "flamer-build", label: "Flamer build" },
  { id: "demo-build", label: "Demo build" },
  { id: "ballista-laser-build", label: "Ballista & Laser" },
  { id: "mithril-rune-build", label: "Mithril & Rune" },
  { id: "luck-artifact-build", label: "Luck & Artifacts" },
  { id: "unit-synergies", label: "Synergies" },
  { id: "recommended-build-route", label: "Build route" },
  { id: "stop-investing", label: "When to switch" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/dwarf-eats-mountain", label: "Dwarf Eats Mountain Guide" },
  { href: "/dwarf-eats-mountain/build-order", label: "Beginner Build Order" },
  { href: "/dwarf-eats-mountain/runners-guide", label: "Runners Guide" },
  {
    href: "/dwarf-eats-mountain/prestige-ascension-guide",
    label: "Prestige and Ascension Guide",
  },
  {
    href: "/dwarf-eats-mountain/artifacts-mithril-guide",
    label: "Artifacts and Mithril Guide",
  },
  { href: "/dwarf-eats-mountain/endgame-guide", label: "Endgame Guide" },
];

export const metadata: Metadata = {
  title: "Top Dwarf Eats Mountain Builds: Runners, Flamers & More",
  description:
    "Beat every bottleneck in Dwarf Eats Mountain! Choose the perfect build—Runners, Flamers, Demo, Ballista, or Lasers—to max your Mithril, Luck, and Artifacts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Best Builds: Runners, Flamers, Demo",
    description:
      "Choose the right build by problem: gold piles, slow mountain damage, dens, Mithril walls, artifact routes, Luck scaling, or endgame prep.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain build with ballistas, lasers, flamers, runners, and large loot piles.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Best Builds: Runners, Flamers, Demo",
    description:
      "Use runner, Flamer, Demo, Ballista, Laser, Mithril, Rune, Luck and artifact builds based on what is actually blocking your run.",
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
          name: "Dwarf Eats Mountain Guide",
          item: `${siteUrl}/dwarf-eats-mountain`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Builds",
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
        "Dwarf Eats Mountain Best Builds: Runner Economy, Flamers, Demo Dwarves, Ballistas, Lasers, Mithril, Luck and Artifacts",
      description:
        "A player-focused Dwarf Eats Mountain best builds guide that explains how to choose a build by bottleneck instead of copying one fixed route. The guide covers Runner Economy, Miner damage, Flamer, Demo, Ballista and Turret, Scientist and Laser, Mithril and Rune, Luck, Artifact, and Spelunker's Guild routes. It explains each build's first move, power spike, common failure, unit synergies, when to stop investing in a build, and how to switch direction when gold collection, mountain HP, dens, veins, Mithril, Luck, artifacts, or Prestige support become the real wall.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Best Builds" },
        { "@type": "Thing", name: "Runner Economy" },
        { "@type": "Thing", name: "Flamers" },
        { "@type": "Thing", name: "Demo Dwarves" },
        { "@type": "Thing", name: "Ballistas" },
        { "@type": "Thing", name: "Laser Cannons" },
        { "@type": "Thing", name: "Grand Laboratory" },
        { "@type": "Thing", name: "Mithril" },
        { "@type": "Thing", name: "Runes" },
        { "@type": "Thing", name: "Spelunker's Guild" },
        { "@type": "Thing", name: "Luck" },
        { "@type": "Thing", name: "Artifacts" },
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
          name: "What is the best build in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There is no single best build for every stage. The best build is the one that fixes your current bottleneck: runners for loot piles, damage for slow mountains, Ballistas or Demo for dens, Mithril for rare-resource walls, and Luck, artifacts, or Spelunker's Guild for later scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Is Flamer build better than Demo build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Flamer builds are steadier and easier to control. Demo builds have stronger burst and explosive utility, but they create more chaos. Use Flamers if you want reliable damage, and Demo Dwarves if your runners can handle the mess.",
          },
        },
        {
          "@type": "Question",
          name: "Are Demo Dwarves worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but not when your collection economy is already failing. Demo Dwarves are best when you need burst damage, den pressure, or Wind Bomb utility and have enough runner support.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Ballistas?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Ballistas when dens, veins, high targets, or special structures are slowing you down. They are better as a targeting solution than as your first basic damage upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "When should I build Grand Laboratory?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build Grand Laboratory once your basic miner and runner economy is stable and you are ready for Scientists, Laser Cannons, and unlock-based scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Spelunker's Guild fit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spelunker's Guild fits artifact, den, Luck, Mithril-luck, and spelunking routes. Use it when rare-resource quality and artifact-den rewards matter more than simple gold or raw damage.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use if gold is piling up?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a Runner Economy build. Prioritize speed, carrying capacity, dodge, slap efficiency, Mithril Chainmail, Magnetic Gloves, and overflow support before buying more damage.",
          },
        },
        {
          "@type": "Question",
          name: "What build should I use if mountain HP is too high?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Miner, Flamer, Demo, Laser, or Rune-based damage. Only do this if the field is mostly clean and runners are keeping up.",
          },
        },
        {
          "@type": "Question",
          name: "Should I focus one build or buy everything?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Focus first. Buying everything spreads your resources too thin. Once one route is working, add support systems that solve the next wall.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best late-game build?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Late-game builds depend on T6, Ascension, artifacts, Luck, Mithril, Spelunker's Guild, and boss requirements. Focus long-term upgrades around the wall your build actually hits: damage, collection, drops, targeting, or boss checks.",
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
          title="Dwarf Eats Mountain Best Builds: Pick the Right Route for Your Bottleneck"
          description="A build guide for players who do not want to buy random upgrades: choose runners, Flamers, Demo Dwarves, Ballistas, Lasers, Mithril, Luck, or artifacts based on what is actually slowing your run."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestBuildsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}