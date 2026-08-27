import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import MortalShell2AchievementsContent from "@/data/mortal-shell-2/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Mortal Shell 2 Trophy Guide: All 53 Achievements & Roadmap";

const metadataDescription =
  "Track all 53 Mortal Shell 2 trophies, protect 3 missables, clean up collections before NG+, and finish Shell Memories through later cycles.";

const articleDescription =
  "A complete Mortal Shell 2 trophy and achievement roadmap covering all 53 achievements, the three first-playthrough trophy windows, Shell, Weapon and Sidearm collection cleanup, Heavy Metal, Baghead, Tarstones, Peter's Perfect Parry, and the Shell Memory grind that continues through New Game Plus.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-mid-summer-maragold-flower-crown.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-heavy-metal-five-lute-tracks.webp`,
];

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 53 achievements",
  },
  {
    id: "missable-achievements",
    label: "3 missable trophies",
  },
  {
    id: "mid-summer",
    label: "Mid Summer?",
  },
  {
    id: "no-you-still-cant-win",
    label: "No, You Still Can't Win",
  },
  {
    id: "peters-perfect-parry",
    label: "Peter's Perfect Parry",
  },
  {
    id: "first-playthrough-route",
    label: "First-playthrough route",
  },
  {
    id: "shell-weapon-sidearm-achievements",
    label: "Shell, Weapon & Sidearm cleanup",
  },
  {
    id: "collection-cleanup",
    label: "Collection cleanup",
  },
  {
    id: "stoned-temple-of-vatra",
    label: "Stoned & Temple of Vatra",
  },
  {
    id: "heavy-metal",
    label: "Heavy Metal",
  },
  {
    id: "baghead",
    label: "Baghead",
  },
  {
    id: "hidden-boss-achievements",
    label: "Hidden boss achievements",
  },
  {
    id: "seeking-the-past",
    label: "Seeking the Past",
  },
  {
    id: "no-lifer",
    label: "No Lifer",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/tar-golem",
    label: "Tar Golem Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Weapon Locations",
  },
  {
    href: "/mortal-shell-2/sidearms-guide",
    label: "All Sidearm Locations",
  },
  {
    href: "/mortal-shell-2/endings",
    label: "Endings & Baghead Route",
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
      "Track all 53 Mortal Shell 2 trophies, protect the three missable windows, plan first-playthrough cleanup, and finish the Shell Memory grind through NG+.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-27",
    modifiedTime: "2026-08-27",
    images: [
      {
        url: imageUrls[0],
        width: 1010,
        height: 856,
        alt: "Marigold during the Mid Summer achievement interaction in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "All 53 achievements, three missable trophy windows, first-playthrough cleanup, collection routes, and NG+ Shell Memory planning.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements & Trophy Guide",
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
        "Mortal Shell 2 Trophy Guide: All 53 Achievements & Roadmap",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-27",
      dateModified: "2026-08-27",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 achievements",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 trophies",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 trophy guide",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 trophy roadmap",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 missable trophies",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 platinum",
        },
        {
          "@type": "Thing",
          name: "Mid Summer?",
        },
        {
          "@type": "Thing",
          name: "No, You Still Can't Win",
        },
        {
          "@type": "Thing",
          name: "Peter's Perfect Parry",
        },
        {
          "@type": "Thing",
          name: "Seeking the Past",
        },
        {
          "@type": "Thing",
          name: "No Lifer",
        },
        {
          "@type": "Thing",
          name: "New Game Plus",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Mortal Shell 2 Trophy Guide — All 53 Achievements & Roadmap"
          description="I protect the three missable trophy windows first, let Shells, Weapons, Sidearms and collections overlap with normal progression, then carry the Shell Memory cleanup into New Game Plus."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MortalShell2AchievementsContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Mortal Shell 2"
          heading="Looking for another game after Mortal Shell 2?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}