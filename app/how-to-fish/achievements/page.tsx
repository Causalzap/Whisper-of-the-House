import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishAchievementsContent from "@/data/how-to-fish/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-360-no-scope.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-legendary-skin.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-achievements-all-in-green.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Achievements: All 28 Unlock Requirements",
  description:
    "Track all 28 How to Fish achievements, plan 100% cleanup, and solve Killscore, cooking, casino, collection, speedrun, and final-boss challenges.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish Achievements Guide: All 28 Requirements",
    description:
      "Track all 28 achievements, clean them up efficiently, and solve Killscore, cooking, casino, collection, Bean, Easy, and Handyman challenges.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "360 no scope achievement unlocking after a trick shot kill in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Achievements Guide",
    description:
      "Track all 28 achievements and plan the cleanest route through story, Killscore, casino, collection, speedrun, and challenge cleanup.",
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
          name: "How to Fish Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
        "How to Fish Achievements Guide: All 28 Requirements and 100% Completion Route",
      description:
        "This How to Fish achievements guide covers all 28 Steam achievements and organizes 100% completion into story, Killscore, cooking, casino and money, gear and boat, collection, and challenge cleanup. It explains practical routes for 5x Killscore, 360 no scope, Grillmaster, All in, GOLD GOLD GOLD, Easy, Bean, Fishipedia, Collector, Rich! Millionaire, I'm the bird now, and Handyman.",
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
          name: "How to Fish achievements",
        },
        {
          "@type": "Thing",
          name: "How to Fish achievement list",
        },
        {
          "@type": "Thing",
          name: "Killscore multiplier",
        },
        {
          "@type": "Thing",
          name: "Bean achievement",
        },
        {
          "@type": "Thing",
          name: "Fishipedia achievement",
        },
        {
          "@type": "Thing",
          name: "Handyman achievement",
        },
        {
          "@type": "Thing",
          name: "Rich! Millionaire achievement",
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
    id: "all-achievements-checklist",
    label: "All 28 achievements",
  },
  {
    id: "best-100-percent-route",
    label: "Best 100% route",
  },
  {
    id: "story-achievements",
    label: "Story achievements",
  },
  {
    id: "killscore-achievements",
    label: "Killscore achievements",
  },
  {
    id: "cooking-achievements",
    label: "Cooking achievements",
  },
  {
    id: "casino-money-achievements",
    label: "Casino and money",
  },
  {
    id: "gear-and-boat",
    label: "Gear and boat",
  },
  {
    id: "one-off-achievements",
    label: "One-off achievements",
  },
  {
    id: "easy-fast-boss",
    label: "Easy: 10-second boss",
  },
  {
    id: "collector-fishipedia",
    label: "Collector and Fishipedia",
  },
  {
    id: "bean-speedrun",
    label: "Bean speedrun",
  },
  {
    id: "handyman",
    label: "Handyman",
  },
  {
    id: "final-cleanup",
    label: "Final cleanup",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/endangered-fish",
    label: "Endangered Fish & Carrot Guide",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "Pufferfish Boss Guide",
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
          title="How to Fish Achievements Guide"
          description="Track all 28 achievements, follow an efficient 100% cleanup order, and solve the Killscore, cooking, casino, collection, speedrun, boat, and final-boss challenges that usually remain after the story."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}