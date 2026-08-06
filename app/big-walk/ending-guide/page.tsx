import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkEndingGuideContent from "@/data/big-walk/ending-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/ending-guide`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-ending-building-across-water.webp`,
  `${siteUrl}/images/big-walk/big-walk-final-sphere-mechanism.webp`,
  `${siteUrl}/images/big-walk/big-walk-wave-goodbye-ending-prompt.webp`,
  `${siteUrl}/images/big-walk/big-walk-big-goodbye-final-room.webp`,
  `${siteUrl}/images/big-walk/big-walk-broken-sphere-after-ending.webp`,
  `${siteUrl}/images/big-walk/big-walk-seven-purple-puzzles.webp`,
  `${siteUrl}/images/big-walk/big-walk-final-key-spawn-location.webp`,
  `${siteUrl}/images/big-walk/big-walk-true-ending-secret-room-stairs.webp`,
  `${siteUrl}/images/big-walk/big-walk-true-ending-short-reading.webp`,
  `${siteUrl}/images/big-walk/big-walk-big-game-completion-message.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk Endings Guide: Big Goodbye & Big Game",
  description:
    "Unlock Big Goodbye and the Big Game true ending, complete the purple puzzles, find the final key, and understand Big Walk's ending.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Endings and True Ending Guide",
    description:
      "Reach the Wave Goodbye ending, finish every post-game puzzle, get the final key, and unlock the Big Game true ending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1412,
        height: 1012,
        alt: "Wave Goodbye prompt at the Big Walk ending building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Endings and True Ending Guide",
    description:
      "Unlock Big Goodbye, complete the seven purple puzzles, find the final key, and reach the Big Game true ending.",
    images: [imageUrls[2]],
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
          name: "Endings Guide",
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
        "Big Walk Endings Guide: How to Unlock Big Goodbye and the Big Game True Ending",
      description:
        "This Big Walk endings guide explains how to finish the Black Tower and final black sphere route, reach the building across the water, use Wave Goodbye to unlock Big Goodbye, complete the seven purple post-game puzzles, make the final key appear, enter the hidden room, and understand the Big Game true ending.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-06",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk endings",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Goodbye ending",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Game ending",
        },
        {
          "@type": "Thing",
          name: "Big Walk true ending",
        },
        {
          "@type": "Thing",
          name: "Big Walk Wave Goodbye",
        },
        {
          "@type": "Thing",
          name: "Big Walk black sphere",
        },
        {
          "@type": "Thing",
          name: "Big Walk purple puzzles",
        },
        {
          "@type": "Thing",
          name: "Big Walk final key",
        },
        {
          "@type": "Thing",
          name: "Big Walk 100 percent completion",
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
    id: "all-big-walk-endings-at-a-glance",
    label: "All endings at a glance",
  },
  {
    id: "how-to-get-the-big-goodbye-ending",
    label: "Unlock Big Goodbye",
  },
  {
    id: "what-happens-in-the-big-goodbye-ending",
    label: "Big Goodbye ending",
  },
  {
    id: "what-changes-after-the-first-ending",
    label: "Post-game changes",
  },
  {
    id: "how-to-get-the-big-game-true-ending",
    label: "Unlock Big Game",
  },
  {
    id: "what-happens-in-the-big-game-true-ending",
    label: "Big Game true ending",
  },
  {
    id: "big-goodbye-vs-big-game",
    label: "Big Goodbye vs. Big Game",
  },
  {
    id: "big-walk-true-ending-explained",
    label: "True ending explained",
  },
  {
    id: "why-the-final-key-is-not-appearing",
    label: "Final key not appearing",
  },
  {
    id: "does-big-walk-have-multiple-endings",
    label: "Multiple endings FAQ",
  },
  {
    id: "is-the-black-tower-the-same-as-the-black-sphere",
    label: "Black Tower vs. sphere",
  },
  {
    id: "final-takeaway",
    label: "Final takeaway",
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
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
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
          title="Big Walk Endings Guide"
          description="Unlock Big Goodbye, complete the seven purple post-game puzzles, find the final key, and reach the Big Game true ending."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkEndingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}