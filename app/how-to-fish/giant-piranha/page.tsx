import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishGiantPiranhaContent from "@/data/how-to-fish/giant-piranha.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/giant-piranha`;

const metadataTitle =
  "How to Beat the Giant Piranha Boss in How to Fish";

const metadataDescription =
  "Beat the Giant Piranha on Island 2 with ranged damage, manage smaller Piranhas and the escape timer, then keep the Skeleton to unlock Island 3.";

const articleDescription =
  "A practical How to Fish Giant Piranha boss guide covering the Leech-based bait, ranged combat strategy, 150 Shotgun versus 230 Big Motor decision, smaller Piranhas, the boss escape timer, Giant Piranha Skeleton, Island 3 Flash Drive, and Radar progression.";

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-shotgun-150.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-boss.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-giant-piranha-quest-item.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-island-3-flash-drive.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-island-3-radar-route.webp`,
];

const toc = [
  {
    id: "how-to-beat",
    label: "How to beat Giant Piranha",
  },
  {
    id: "before-the-fight",
    label: "How to summon it",
  },
  {
    id: "prepare-before-boss",
    label: "Fight preparation",
  },
  {
    id: "shotgun-or-motor",
    label: "Shotgun or Big Motor?",
  },
  {
    id: "smaller-piranhas",
    label: "Smaller Piranhas",
  },
  {
    id: "escape-timer",
    label: "Escape timer",
  },
  {
    id: "when-to-back-off",
    label: "If the fight keeps failing",
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
    label: "All Bosses & Strategies",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "How to Beat the Pufferfish",
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
      "Use ranged damage against the Giant Piranha, avoid wasting time on every smaller fish, watch the escape timer, then keep the Skeleton for the Island 3 unlock.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-21",
    modifiedTime: "2026-08-25",
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
    title: metadataTitle,
    description:
      "Beat the Giant Piranha with ranged damage, manage smaller Piranhas and the escape timer, keep the Skeleton, and unlock Island 3.",
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
          name: "Giant Piranha Boss Guide",
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
        "How to Beat the Giant Piranha Boss in How to Fish",
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
          name: "Giant Piranha boss",
        },
        {
          "@type": "Thing",
          name: "How to beat Giant Piranha",
        },
        {
          "@type": "Thing",
          name: "Giant Piranha boss strategy",
        },
        {
          "@type": "Thing",
          name: "Leech-based boss bait",
        },
        {
          "@type": "Thing",
          name: "Giant Piranha escape timer",
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
          name: "Island 2",
        },
        {
          "@type": "Thing",
          name: "Island 3",
        },
        {
          "@type": "Thing",
          name: "Flash Drive",
        },
        {
          "@type": "Thing",
          name: "Radar",
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
          title="How to Beat the Giant Piranha Boss in How to Fish"
          description="I use reliable ranged damage, keep moving instead of clearing every smaller Piranha, and maintain enough pressure that the boss does not escape. After the kill, I keep the Skeleton and finish the hand-in for the Island 3 Flash Drive."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
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