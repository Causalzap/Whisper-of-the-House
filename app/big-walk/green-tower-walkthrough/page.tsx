import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkGreenTowerContent from "@/data/big-walk/green-tower-walkthrough.mdx";

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
  title: "Big Walk Green Tower Guide: Key, Chairlift & Big Sit",
  description:
    "Return five Green Heads, shape the key through five cutters, activate the Chairlift beside Green Tower, and ride it to unlock Big Sit.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Green Tower, Key and Chairlift Guide",
    description:
      "Use the Train Station as a Head cache, finish the Green key cutters, activate the Chairlift, and unlock Big Sit.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 902,
        height: 570,
        alt: "Big Walk Green Tower receiver completed with five Heads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Green Tower and Chairlift Guide",
    description:
      "Collect five Heads, finish the Green key route, activate the Chairlift, and unlock Big Sit.",
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
          name: "Green Tower and Chairlift Guide",
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
        "Big Walk Green Tower, Green Key and Chairlift Guide: Five Heads, Five Cutters, Big Sit, and Big Climb Access",
      description:
        "This Big Walk Green Tower walkthrough explains how to use the inactive Train Station as a Head cache, collect and return five physical Heads, assign the blank Green Key, finish all five cutters, distinguish the Train Station from the Chairlift station beside Green Tower, activate the lift, board a moving chair for Big Sit, and use the upper route toward Big Climb.",
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
          name: "Big Walk Green key cutters",
        },
        {
          "@type": "Thing",
          name: "Big Walk Chairlift",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Sit achievement",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Climb achievement",
        },
        {
          "@type": "Thing",
          name: "Big Walk five Heads",
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
    label: "Finish the last two",
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
    id: "green-key-cutters",
    label: "Finish all five cutters",
  },
  {
    id: "find-chairlift-station",
    label: "Find the Chairlift station",
  },
  {
    id: "activate-chairlift",
    label: "Activate the Chairlift",
  },
  {
    id: "unlock-big-sit",
    label: "Unlock Big Sit",
  },
  {
    id: "big-climb-route",
    label: "Start the Big Climb route",
  },
  {
    id: "session-checkpoint",
    label: "Green route checkpoint",
  },
  {
    id: "stuck",
    label: "Green route fixes",
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
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and True Ending Guide",
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
          title="Big Walk Green Tower, Green Key and Chairlift Guide"
          description="Use the Train Station as a five-Head cache, finish every Green key cutter, activate the Chairlift beside Green Tower, and ride it to unlock Big Sit."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkGreenTowerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}