import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DwarfEatsMountainContent from "@/data/dwarf-eats-mountain/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-miners-housing-start.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-great-m-runners.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-upgrades-screen.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-artifact-choice-bottled-dwarf.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-ballista-laser-flamer-chaos.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "which-guide", label: "Which guide" },
  { id: "progression-overview", label: "Progression" },
  { id: "early-route", label: "Build order" },
  { id: "runners", label: "Runners" },
  { id: "bottlenecks", label: "Bottlenecks" },
  { id: "prestige", label: "Prestige" },
  { id: "artifacts-mithril", label: "Artifacts & Mithril" },
  { id: "builds", label: "Best builds" },
  { id: "endgame", label: "Endgame" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "recommended-path", label: "Reading path" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
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
  { href: "/dwarf-eats-mountain/best-builds", label: "Best Builds Guide" },
  { href: "/dwarf-eats-mountain/endgame-guide", label: "Endgame Guide" },
];

export const metadata: Metadata = {
  title: "Ultimate Dwarf Eats Mountain Guide: Builds to Endgame",
  description:
    "The only Dwarf Eats Mountain guide you need! Conquer early build orders, master Prestige & Mithril, and crush the Goblin King with ultimate endgame builds.",

  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Guide: Builds, Prestige, Endgame",
    description:
      "A progression hub for Dwarf Eats Mountain guides: build order, gold collection, Prestige, artifacts, Mithril, builds, and endgame routes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain early setup with Underground Housing, Miners, and the Great Maw.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Guide: Builds, Prestige, Endgame",
    description:
      "Use this guide hub to jump to build order, runners, Prestige, artifacts, Mithril, best builds, and endgame help.",
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
        "Dwarf Eats Mountain Guide Hub: Build Order, Runners, Prestige, Artifacts, Mithril, Builds and Endgame",
      description:
        "A player-focused Dwarf Eats Mountain guide hub that helps players choose the right focused guide for their current problem. The hub routes new players to beginner build order help, gold collection and runner fixes, Prestige and Ascension planning, artifact and Mithril decisions, best builds by bottleneck, and endgame preparation for Goblin King, T6 upgrades, World Spire, Mountain 100, True Ending, and Endless Mode.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Guide Hub" },
        { "@type": "Thing", name: "Build Order" },
        { "@type": "Thing", name: "Runners" },
        { "@type": "Thing", name: "Gold Collection" },
        { "@type": "Thing", name: "Prestige" },
        { "@type": "Thing", name: "Ascension" },
        { "@type": "Thing", name: "Artifacts" },
        { "@type": "Thing", name: "Mithril" },
        { "@type": "Thing", name: "Best Builds" },
        { "@type": "Thing", name: "Goblin King" },
        { "@type": "Thing", name: "World Spire" },
        { "@type": "Thing", name: "True Ending" },
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
          name: "What is this Dwarf Eats Mountain guide hub for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This hub helps you find the right focused guide. It is not a wiki or a complete list of every unit, building, artifact, or upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "What guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Beginner Build Order if you are new. It covers the opening route, early buildings, N/A upgrades, first Mithril, and first Prestige.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide explains why my gold is not being collected?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Runners Guide. It covers collection problems, ore reclaim, runner bottlenecks, and late collection tools.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide explains Prestige and PP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Prestige and Ascension Guide. It explains when to reset, how to spend PP, early Prestige upgrades, T6, and Ascension Rank.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide explains artifacts and Mithril?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Artifacts and Mithril Guide. It explains artifact choices, Mithril spending, Mountain Souls, Luck, Forge routes, and Artifact Rituals.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide explains the best builds?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Best Builds Guide. It helps you choose a route based on your bottleneck instead of buying upgrades randomly.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide covers Goblin King and True Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Endgame Guide. It covers Goblin King, Mountain 50+, Spelunker's Guild, T6, Ascension, World Spire, Mountain 100, True Ending, and Endless Mode.",
          },
        },
        {
          "@type": "Question",
          name: "Is this guide a wiki?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This is a progression route and problem-solving hub. Use the linked pages for specific build order, runners, Prestige, artifacts, builds, and endgame problems.",
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
          title="Dwarf Eats Mountain Guide: Find the Right Guide for Your Run"
          description="A route hub for players who are stuck: jump to build order, runners, Prestige, artifacts, Mithril, best builds, or endgame depending on what is blocking your run."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DwarfEatsMountainContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}