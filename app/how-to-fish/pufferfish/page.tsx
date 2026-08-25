import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishPufferfishContent from "@/data/how-to-fish/pufferfish.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/pufferfish`;

const metadataTitle =
  "How to Beat the Pufferfish Boss in How to Fish";

const metadataDescription =
  "Beat the Pufferfish boss on Island 3 by using a tree to break its charges, prepare before spending the Carrot, then collect the Tail and unlock Island 4.";

const articleDescription =
  "A practical How to Fish Pufferfish boss guide covering the Carrot trigger, the safest tree strategy, ranged weapon preparation, the 650 SMG and 600 Compensator, the later purple-hazard phase, the Pufferfish Tail, and the Island 4 unlock.";

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-carrot-bait.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-smg-first-attempt.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-dodge-route.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-boss.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-pufferfish-tail.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-island-4-flash-drive.webp`,
];

const toc = [
  {
    id: "how-to-beat-pufferfish",
    label: "How to beat the Pufferfish",
  },
  {
    id: "get-carrot-first",
    label: "Get the Carrot first",
  },
  {
    id: "prepare-before-carrot",
    label: "Prepare before the fight",
  },
  {
    id: "tree-dodge-route",
    label: "Best tree strategy",
  },
  {
    id: "when-to-shoot",
    label: "When to shoot",
  },
  {
    id: "smg-and-upgrades",
    label: "SMG and upgrades",
  },
  {
    id: "carrot-is-consumed",
    label: "Failed Carrot attempts",
  },
  {
    id: "later-phase",
    label: "Later Pufferfish phase",
  },
  {
    id: "stay-ranged",
    label: "Stay at range",
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
    label: "All Bosses & Strategies",
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

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description:
      "Use a large tree to interrupt the Pufferfish's charges, shoot while it repositions, prepare before spending the Carrot, and collect the Tail for Island 4.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-21",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Player circling a tree to interrupt the Pufferfish boss charge in How to Fish",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Beat the Pufferfish with the tree strategy, prepare before using the Carrot, manage ranged damage, collect the Tail, and unlock Island 4.",
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
          name: "Pufferfish Boss Guide",
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
        "How to Beat the Pufferfish Boss in How to Fish",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-21",
      dateModified: "2026-08-25",
      articleSection: "How to Fish Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Pufferfish boss",
        },
        {
          "@type": "Thing",
          name: "How to beat Pufferfish",
        },
        {
          "@type": "Thing",
          name: "Pufferfish boss strategy",
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

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How to Beat the Pufferfish Boss in How to Fish"
          description="I fight the Island 3 Pufferfish around one large tree instead of running into open ground, shoot while its charge is interrupted, and stay ranged until it dies. I also prepare before spending the Carrot because a failed attempt can cost another one."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
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