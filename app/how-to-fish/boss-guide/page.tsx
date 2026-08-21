import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishBossGuideContent from "@/data/how-to-fish/boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/boss-guide`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-spider-crab-stun-window.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-dynamite-boss-strategy.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-terrorizing-bird-boss.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-mutated-bowhead-whale-boss.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Boss Guide: All Bosses & Best Strategies",
  description:
    "Beat every How to Fish boss from Spider Crab to Mutated Bowhead Whale, with trigger checks, preparation, Dynamite tips, and progression fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish Boss Guide: Spider Crab to Final Boss",
    description:
      "Follow the main boss order, learn when terrain matters more than upgrades, use Dynamite for burst damage, and fix missing boss triggers.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "Mutated Bowhead Whale final boss fighting in the volcano area in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Boss Guide",
    description:
      "Beat Spider Crab, Giant Piranha, Pufferfish, Terrorizing Bird and Mutated Bowhead Whale with better preparation and positioning.",
    images: [imageUrls[3]],
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
          name: "How to Fish Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Boss Guide",
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
        "How to Fish Boss Guide: Boss Order, Strategies, Dynamite, and Mutated Bowhead Whale",
      description:
        "This How to Fish boss guide covers the main boss order from Spider Crab through Giant Piranha, Pufferfish, Terrorizing Bird, and Mutated Bowhead Whale. It explains how to separate missing quest triggers from combat problems, when to spend on upgrades, how to use Dynamite for burst damage, and the detailed strategies for bosses that do not have their own progression guide.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-21",
      dateModified: "2026-08-21",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
        },
        {
          "@type": "Thing",
          name: "How to Fish bosses",
        },
        {
          "@type": "Thing",
          name: "Spider Crab",
        },
        {
          "@type": "Thing",
          name: "Giant Piranha",
        },
        {
          "@type": "Thing",
          name: "Pufferfish",
        },
        {
          "@type": "Thing",
          name: "Terrorizing Bird",
        },
        {
          "@type": "Thing",
          name: "Mutated Bowhead Whale",
        },
        {
          "@type": "Thing",
          name: "Dynamite",
        },
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
  ],
};

const toc = [
  {
    id: "boss-order",
    label: "Boss order",
  },
  {
    id: "before-bosses",
    label: "Before each boss",
  },
  {
    id: "spider-crab",
    label: "Spider Crab",
  },
  {
    id: "giant-piranha",
    label: "Giant Piranha",
  },
  {
    id: "pufferfish",
    label: "Pufferfish",
  },
  {
    id: "dynamite",
    label: "Dynamite strategy",
  },
  {
    id: "terrorizing-bird",
    label: "Terrorizing Bird",
  },
  {
    id: "mutated-bowhead-whale",
    label: "Mutated Bowhead Whale",
  },
  {
    id: "which-boss-needs-more-money",
    label: "When to spend more",
  },
  {
    id: "when-the-boss-is-not-the-problem",
    label: "Boss not spawning",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "Pufferfish Boss Guide",
  },
  {
    href: "/how-to-fish/leech-bait",
    label: "Leech Bait Guide",
  },
  {
    href: "/how-to-fish/achievements",
    label: "How to Fish Achievements",
  },
];

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
          title="How to Fish Boss Guide"
          description="Follow the main boss order from Spider Crab to Mutated Bowhead Whale, prepare for each fight correctly, and diagnose whether the real blocker is combat, bait, a quest trigger, or a missing hand-in."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishBossGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}