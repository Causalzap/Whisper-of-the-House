import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkBeginnerGuideContent from "@/data/big-walk/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-player-count-version-selection.png`,
  `${siteUrl}/images/big-walk/big-walk-lost-and-found-session-items.png`,
  `${siteUrl}/images/big-walk/big-walk-backpack-carry-head.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Beginner Guide: First Route, Gear & Returns",
  description:
    "Choose the right player-count version, organize gear, use Lost and Found, stage items at the Train Station, and know when to return Heads in Big Walk.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Beginner Guide: First-Session Route and Gear",
    description:
      "Set up the correct world version, test communication, prioritize Backpack and Walkie-talkies, use the Train Station as a staging point, and return to the Red Tower safely.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Big Walk setup screen with two-player, three-player, and four-plus-player challenge versions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Beginner Guide",
    description:
      "Plan the first session, choose the correct player-count version, protect Heads, organize equipment, and avoid losing the route after the drawbridge.",
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "Big Walk Beginner Guide: Player Count, Communication, Equipment, Train Station Staging, Backpack Use, and Return Rules",
      description:
        "This Big Walk beginner guide explains how to choose the correct player-count version, regroup and test proximity voice, assign multiplayer roles, use Flares without disrupting puzzle communication, recover after a disconnect, use Lost and Found, prioritize Heads and equipment, stage items at the Train Station, return to the Red Tower after three Heads, and end a session at a clear checkpoint.",
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
          name: "Big Walk beginner guide",
        },
        {
          "@type": "Thing",
          name: "Big Walk player-count version",
        },
        {
          "@type": "Thing",
          name: "Big Walk proximity voice",
        },
        {
          "@type": "Thing",
          name: "Big Walk multiplayer roles",
        },
        {
          "@type": "Thing",
          name: "Big Walk Flare gun",
        },
        {
          "@type": "Thing",
          name: "Big Walk disconnect recovery",
        },
        {
          "@type": "Thing",
          name: "Big Walk Lost and Found",
        },
        {
          "@type": "Thing",
          name: "Big Walk Backpack",
        },
        {
          "@type": "Thing",
          name: "Big Walk Walkie-talkie",
        },
        {
          "@type": "Thing",
          name: "Big Walk Train Station",
        },
        {
          "@type": "Thing",
          name: "Big Walk Red Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Heads",
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
    id: "choose-player-count",
    label: "Choose the player-count version",
  },
  {
    id: "regroup-first",
    label: "Regroup and test communication",
  },
  {
    id: "multiplayer-roles",
    label: "Multiplayer roles and recovery",
  },
  {
    id: "finish-tutorial",
    label: "Finish the opening route",
  },
  {
    id: "carry-priority",
    label: "First-session carry priority",
  },
  {
    id: "station-staging-point",
    label: "Use the Train Station",
  },
  {
    id: "backpack-first",
    label: "Equip the first Backpack",
  },
  {
    id: "return-to-red-tower",
    label: "Return after three Heads",
  },
  {
    id: "return-wait-skip",
    label: "Return, wait, or leave",
  },
  {
    id: "end-session",
    label: "End the session safely",
  },
  {
    id: "stuck",
    label: "First-session fixes",
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
          title="Big Walk Beginner Guide"
          description="Choose the right world version, organize the first session, protect Heads and equipment, use the Train Station as a staging point, and know when to return or stop."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}