import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishPufferfishContent from "@/data/how-to-fish/pufferfish.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/pufferfish`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-carrot-bait.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-smg-first-attempt.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-dodge-route.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-boss.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-tail.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-island-4-flash-drive.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Pufferfish: Carrot, Boss Fight & Tail",
  description:
    "Beat the Pufferfish on Island 3 with the Carrot and tree route, decide when to upgrade your weapon, keep the Tail, and unlock Island 4.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Beat the Pufferfish and Unlock Island 4",
    description:
      "Prepare before using the Carrot, circle trees to break the Pufferfish's approach, secure the Pufferfish Tail, and finish the Tourist hand-in.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Pufferfish dodge route showing how to circle a tree and interrupt charge attacks in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Pufferfish Boss Guide",
    description:
      "Use the Carrot safely, fight around trees, fix SMG recoil problems, keep the Pufferfish Tail, and unlock the route to Island 4.",
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
          name: "How to Fish Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pufferfish Guide",
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
        "How to Fish Pufferfish Guide: Carrot, Tree Strategy, Pufferfish Tail, and Island 4",
      description:
        "This How to Fish Pufferfish guide covers the full Island 3 boss progression after obtaining the Carrot. It explains why the Carrot should not be used before preparing, how failed attempts can force another prerequisite loop, when the 650 SMG and 600 Compensator make sense, how to circle trees to disrupt the Pufferfish's direct approach, how to survive the later phase, why the Pufferfish Tail must be collected after the kill, and how the Tourist hand-in unlocks the Island 4 route.",
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
          name: "Pufferfish",
        },
        {
          "@type": "Thing",
          name: "Carrot",
        },
        {
          "@type": "Thing",
          name: "Pufferfish Tail",
        },
        {
          "@type": "Thing",
          name: "Island 3",
        },
        {
          "@type": "Thing",
          name: "Island 4",
        },
        {
          "@type": "Thing",
          name: "SMG",
        },
        {
          "@type": "Thing",
          name: "Compensator",
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
    id: "get-carrot-first",
    label: "Get the Carrot first",
  },
  {
    id: "prepare-before-carrot",
    label: "Prepare before using it",
  },
  {
    id: "carrot-is-consumed",
    label: "Failed Carrot attempts",
  },
  {
    id: "smg-and-upgrades",
    label: "SMG and upgrades",
  },
  {
    id: "tree-dodge-route",
    label: "Tree dodge route",
  },
  {
    id: "when-to-shoot",
    label: "When to shoot",
  },
  {
    id: "stay-ranged",
    label: "Stay at range",
  },
  {
    id: "later-phase",
    label: "Later Pufferfish phase",
  },
  {
    id: "pufferfish-tail",
    label: "Pufferfish Tail",
  },
  {
    id: "unlock-island-4",
    label: "Unlock Island 4",
  },
  {
    id: "leave-for-island-4",
    label: "Leave for Island 4",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/endangered-fish",
    label: "Endangered Fish & Carrot Guide",
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
          title="How to Fish Pufferfish Boss Guide"
          description="Prepare before spending the Carrot, use trees to control the Pufferfish instead of fighting in open ground, fix weapon-control problems, collect the Pufferfish Tail, and finish the Tourist hand-in for Island 4."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishPufferfishContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}