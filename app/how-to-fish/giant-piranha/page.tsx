import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishGiantPiranhaContent from "@/data/how-to-fish/giant-piranha.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/giant-piranha`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-shotgun-150.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-boss.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-quest-item.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-island-3-flash-drive.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-island-3-radar-route.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Giant Piranha: Boss, Skeleton & Island 3",
  description:
    "Prepare for the Giant Piranha, choose the 150 Shotgun over the 230 Big Motor when needed, keep the Skeleton, and unlock Island 3.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Beat the Giant Piranha and Unlock Island 3",
    description:
      "Prepare before using the boss bait, decide between the Shotgun and Big Motor, keep the Giant Piranha Skeleton, and finish the Island 3 hand-in.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Giant Piranha boss fight on Island 2 in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Giant Piranha Guide",
    description:
      "Beat the Giant Piranha, keep the Skeleton, finish the NPC hand-in, and unlock the Flash Drive and Radar route to Island 3.",
    images: [imageUrls[1]],
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
          name: "Giant Piranha Guide",
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
        "How to Fish Giant Piranha Guide: Boss Fight, Skeleton, Shotgun, and Island 3",
      description:
        "This How to Fish Giant Piranha guide starts once the Leech-based boss bait is ready. It explains how to prepare for the fight, when the 150 Shotgun is a better progression purchase than the 230 Big Motor, how to keep pressure on the boss, why the Giant Piranha Skeleton matters after the kill, how to complete the NPC hand-in, and how to obtain the Flash Drive and Radar route to Island 3.",
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
          name: "Giant Piranha",
        },
        {
          "@type": "Thing",
          name: "Giant Piranha Skeleton",
        },
        {
          "@type": "Thing",
          name: "Shotgun",
        },
        {
          "@type": "Thing",
          name: "Big Motor",
        },
        {
          "@type": "Thing",
          name: "Island 3",
        },
        {
          "@type": "Thing",
          name: "Flash Drive",
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
    id: "before-the-fight",
    label: "Before the fight",
  },
  {
    id: "prepare-before-boss",
    label: "Boss preparation",
  },
  {
    id: "shotgun-or-motor",
    label: "Shotgun or Big Motor?",
  },
  {
    id: "how-to-beat",
    label: "How to beat Giant Piranha",
  },
  {
    id: "when-to-back-off",
    label: "If I keep dying",
  },
  {
    id: "giant-piranha-skeleton",
    label: "Giant Piranha Skeleton",
  },
  {
    id: "unlock-island-3",
    label: "Unlock Island 3",
  },
  {
    id: "when-to-buy-motor",
    label: "When to buy Big Motor",
  },
  {
    id: "follow-radar",
    label: "Follow the Radar",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/leech-bait",
    label: "Leech Bait Guide",
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
          title="How to Fish Giant Piranha Guide"
          description="Prepare for the Island 2 Giant Piranha fight, decide whether the 150 Shotgun is worth buying before the 230 Big Motor, secure the Giant Piranha Skeleton, and finish the hand-in that unlocks Island 3."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishGiantPiranhaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}