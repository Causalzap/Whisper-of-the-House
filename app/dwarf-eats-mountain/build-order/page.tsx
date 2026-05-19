import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BuildOrderContent from "@/data/dwarf-eats-mountain/build-order.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain/build-order`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-great-m-runners.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-miners-housing-start.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-stoutly-march.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-carrying-capacity.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-miner-rock-protein-diet.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-miner-raised-by-pickaxes.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-demolition-shack-first-demo.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-demo-flamer-lab-buildings.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-mithril-upgrades-chain-mail.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-swift-start.webp`,
];

const toc = [
  { id: "best-build-order", label: "Build order" },
  { id: "opening-setup", label: "Opening setup" },
  { id: "manual-help", label: "Manual help" },
  { id: "building-unlocks", label: "Building unlocks" },
  { id: "runner-upgrades", label: "Runner upgrades" },
  { id: "miner-upgrades", label: "Miner upgrades" },
  { id: "housing-and-dwarf-cap", label: "Housing" },
  { id: "damage-branch", label: "Flamer or Demo" },
  { id: "mid-game-buildings", label: "Mid-game buildings" },
  { id: "first-mithril-spend", label: "First Mithril" },
  { id: "first-prestige", label: "First Prestige" },
  { id: "best-first-prestige-upgrades", label: "Prestige upgrades" },
  { id: "recommended-route", label: "Route" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/dwarf-eats-mountain", label: "Dwarf Eats Mountain Guide" },
  { href: "/dwarf-eats-mountain/runners-guide", label: "Runners Guide" },
  {
    href: "/dwarf-eats-mountain/prestige-ascension-guide",
    label: "Prestige and Ascension Guide",
  },
  {
    href: "/dwarf-eats-mountain/artifacts-mithril-guide",
    label: "Artifacts and Mithril Guide",
  },
  { href: "/dwarf-eats-mountain/best-builds", label: "Best Builds Guide" },
  { href: "/dwarf-eats-mountain/endgame-guide", label: "Endgame Guide" },
];

export const metadata: Metadata = {
  title: "What to Build First? Dwarf Eats Mountain Guide",
  description:
    "Don't waste early progress! Follow this Dwarf Eats Mountain build order to unlock buildings, fix N/A upgrades, spend Mithril, and Prestige at the right time.",

  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Build Order: What to Build First",
    description:
      "A practical early route for building Miner's Guild, the Great Maw, Runners, damage branches, Mithril upgrades, and your first Prestige.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain Great Maw and runners during the opening build order.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Build Order: What to Build First",
    description:
      "Start with the right buildings, fix N/A upgrades, balance miners and runners, and avoid wasting your first Mithril.",
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
          name: "Build Order",
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
        "Dwarf Eats Mountain Beginner Build Order: What to Build First, How to Unlock Buildings, and When to Prestige",
      description:
        "A player-focused Dwarf Eats Mountain build order guide for the opening and early-mid game. The guide explains what to build first, how to set up Miner's Guild, Underground Housing, the Great Maw, Miners and Runners, how to balance runner upgrades against miner damage, how to handle N/A upgrades and observed building unlock routes, when to add Flameworks or Demolition Shack, where Ballistics Workshop, Grand Laboratory, Spelunker's Guild and Great Forge fit, how to spend early Mithril, and when the first Prestige becomes worthwhile.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Build Order" },
        { "@type": "Thing", name: "Beginner Guide" },
        { "@type": "Thing", name: "Building Unlocks" },
        { "@type": "Thing", name: "N/A Upgrades" },
        { "@type": "Thing", name: "Great Maw" },
        { "@type": "Thing", name: "Runners" },
        { "@type": "Thing", name: "Mithril" },
        { "@type": "Thing", name: "Prestige" },
        { "@type": "Thing", name: "Spelunker's Guild" },
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
          name: "What should I build first in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build Miner's Guild first, then 5 Underground Housing, 6 Miners, the Great Maw, and 3 Runners. After that, upgrade runner speed and carrying capacity before adding too much damage.",
          },
        },
        {
          "@type": "Question",
          name: "Why are some upgrades marked N/A in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "N/A usually means the prerequisite building, unit, resource, or system has not been unlocked yet. Keep progressing the related route, such as Ballistics, Laboratory, Spelunker's Guild, Mithril, Forge, artifacts, or Prestige.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Spelunker's Guild in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The exact trigger is still being confirmed by players, but Spelunker's Guild appears tied to artifact, den, Luck, Mithril-luck, and spelunking progression. If it is still N/A, keep clearing mountains, interacting with dens, collecting artifacts, and opening rare-resource systems.",
          },
        },
        {
          "@type": "Question",
          name: "Is Stoutly March or Carrying Capacity better first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stoutly March is better when runners take too long to reach loot. Carrying Capacity is better when they reach loot but cannot clear piles fast enough. Most early runs want both.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend my first Mithril on?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spend early Mithril based on your blocker. Save for Mithril Chainmail if runners get stunned, consider Mithril Pickaxes if mountain HP is the wall, use Magnetic Gloves if pickup speed is the problem, and hold the Mithril if you are not sure yet.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build Flameworks or Demolition Shack first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Flameworks is steadier and easier for beginners. Demolition Shack gives stronger burst and explosive utility, but it can create more chaos. If your runners are already behind, delay both.",
          },
        },
        {
          "@type": "Question",
          name: "When should I Prestige for the first time?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prestige when your current run slows down and a permanent upgrade will make the next run faster.",
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
          title="Dwarf Eats Mountain Build Order: What to Build First and What to Unlock Next"
          description="A practical opening route for new players: build the Great Maw, balance runners and miners, understand N/A upgrades, spend your first Mithril, and Prestige at the right time."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BuildOrderContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}