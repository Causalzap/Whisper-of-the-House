import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AliensFireteamElite2Content from "@/data/aliens-fireteam-elite-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/aliens-fireteam-elite-2`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Guide: Walkthrough, Kits & Tips";

const metadataDescription =
  "Start with the campaign order, choose a Kit, fix locked missions, and jump to walkthroughs for every campaign, the Queen, and all 30 achievements.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-guide-speak-to-ship-crew.webp`,
];

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "campaign-order",
    label: "Campaign order",
  },
  {
    id: "prologue-banshee-down",
    label: "Prologue",
  },
  {
    id: "which-kit-to-start-with",
    label: "Which Kit to start with",
  },
  {
    id: "next-mission-locked",
    label: "Next mission locked?",
  },
  {
    id: "solo-co-op-and-crossplay",
    label: "Solo, co-op & crossplay",
  },
  {
    id: "difficulty",
    label: "Difficulty",
  },
  {
    id: "first-queen-encounter",
    label: "First Queen encounter",
  },
  {
    id: "after-final-endeavor",
    label: "After Final Endeavor",
  },
  {
    id: "what-guide-should-you-use",
    label: "Which guide to use",
  },
];

const relatedLinks = [
  {
    href: "/aliens-fireteam-elite-2/walkthrough",
    label: "Complete 14-Mission Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/rescue-and-recovery-walkthrough",
    label: "Rescue and Recovery Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/boarding-party-walkthrough",
    label: "Boarding Party Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/rock-bottom-walkthrough",
    label: "Rock Bottom Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/ancient-anomaly-walkthrough",
    label: "Ancient Anomaly Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/final-endeavor-walkthrough",
    label: "Final Endeavor & Queen Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/achievements",
    label: "All 30 Achievements",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Aliens Fireteam Elite 2 Endeavor mission board and crew progression prompt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Aliens: Fireteam Elite 2",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Guide",
      description:
        "A practical Aliens: Fireteam Elite 2 guide hub covering where to start, campaign order, beginner Kit choices, Combat Rating and progression problems, solo and co-op play, difficulty, the Xenomorph Queen, post-game progression, and detailed walkthroughs for all major campaign stages.",
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-08-26",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: {
        "@type": "VideoGame",
        name: "Aliens: Fireteam Elite 2",
      },
    },
  ],
};

export default function AliensFireteamElite2Page() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Aliens Fireteam Elite 2 Guide: Walkthrough, Kits, Progression & Queen"
          description="Start here for the campaign route, first Kit and progression decisions, locked-mission fixes, solo and co-op questions, and the right detailed guide when a specific mission or system becomes the blocker."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AliensFireteamElite2Content />
        </GuideArticlePage>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
