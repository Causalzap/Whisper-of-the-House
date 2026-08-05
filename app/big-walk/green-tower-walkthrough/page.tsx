import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkGreenTowerWalkthroughContent from "@/data/big-walk/green-tower-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/green-tower-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-green-tower-five-head-slots.png`,
  `${siteUrl}/images/big-walk/big-walk-green-route-heads-at-train.png`,
  `${siteUrl}/images/big-walk/big-walk-green-route-fifth-head-at-train.png`,
  `${siteUrl}/images/big-walk/big-walk-green-tower-five-heads-complete.png`,
  `${siteUrl}/images/big-walk/big-walk-green-key-reward.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Green Tower Guide: 5 Heads & Green Key",
  description:
    "Collect five Heads, use the Train Station as a cache, move four Heads in one load, recover the fifth, and unlock the blank Green Key in Big Walk.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Green Tower and Green Key Guide",
    description:
      "Plan the five-Head Green route, protect rewards at the Train Station, organize the final carry, and complete the Green receiver.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 902,
        height: 570,
        alt: "Big Walk Green Tower receiver completed with all five Heads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Green Tower Guide",
    description:
      "Use the Train Station as a Head cache, carry four rewards in one load, recover the fifth, and claim the blank Green Key.",
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Green Tower Walkthrough",
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
        "Big Walk Green Tower Walkthrough: Five Heads, Train Station Cache, Final Carry, and Green Key",
      description:
        "This Big Walk Green Tower walkthrough explains how to locate the five-slot Green receiver, use the Train Station as a Head cache, choose five nearby rewards, protect the first three Heads, finish the last two split-role challenges, carry four Heads in one two-player load, recover the fifth cached Head, return directly to Green, complete the receiver, and collect the blank Green Key.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Green Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Green Key",
        },
        {
          "@type": "Thing",
          name: "Big Walk five Heads",
        },
        {
          "@type": "Thing",
          name: "Big Walk Train Station cache",
        },
        {
          "@type": "Thing",
          name: "Big Walk Head carrying",
        },
        {
          "@type": "Thing",
          name: "Big Walk Green receiver",
        },
        {
          "@type": "Thing",
          name: "Big Walk Backpack",
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
    id: "find-green-receiver",
    label: "Find the Green receiver",
  },
  {
    id: "use-train-station",
    label: "Use the Train Station cache",
  },
  {
    id: "choose-five-heads",
    label: "Choose five Head rewards",
  },
  {
    id: "protect-three-heads",
    label: "Protect the first three Heads",
  },
  {
    id: "finish-last-two",
    label: "Finish the last two challenges",
  },
  {
    id: "carry-four-heads",
    label: "Carry four Heads",
  },
  {
    id: "recover-fifth-head",
    label: "Recover the fifth Head",
  },
  {
    id: "return-to-green",
    label: "Return to Green",
  },
  {
    id: "get-green-key",
    label: "Get the Green Key",
  },
  {
    id: "session-checkpoint",
    label: "Use the key as a checkpoint",
  },
  {
    id: "stuck",
    label: "Green Tower fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/beginner-guide",
    label: "Big Walk Beginner Guide",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "How to Unlock the Map Room",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
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
          title="Big Walk Green Tower and Green Key Guide"
          description="Collect five Heads, use the Train Station as a cache, organize the final carry, complete the Green receiver, and claim the blank Green Key."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkGreenTowerWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}