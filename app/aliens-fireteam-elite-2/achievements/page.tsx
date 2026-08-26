import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/aliens-fireteam-elite-2/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Achievements Guide: All 30";

const metadataDescription =
  "Unlock all 30 achievements with the best 100% route for campaigns, difficulty clears, weapons, Specialist, Horde Mode, attachments, and kill counters.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-queen-defeated.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-achievements-difficulty-selection.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-achievements-challenge-card-run.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-weapon-rank-augment.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-perk-grid-combat-rating.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-achievements-specialist-kit.webp`,
];

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 30 achievements",
  },
  {
    id: "best-order-for-100-percent",
    label: "Best 100% route",
  },
  {
    id: "campaign-achievements",
    label: "Campaign achievements",
  },
  {
    id: "difficulty-achievements",
    label: "Difficulty achievements",
  },
  {
    id: "armory-achievements",
    label: "Armory & cosmetics",
  },
  {
    id: "weapon-attachment-achievements",
    label: "Weapons & attachments",
  },
  {
    id: "kit-perk-achievements",
    label: "Kits & Perk Board",
  },
  {
    id: "horde-mode-achievement",
    label: "Horde Mode",
  },
  {
    id: "kill-achievements",
    label: "Kill achievements",
  },
  {
    id: "what-to-check-if-an-achievement-is-missing",
    label: "Missing achievement?",
  },
];

const relatedLinks = [
  {
    href: "/aliens-fireteam-elite-2",
    label: "Aliens: Fireteam Elite 2 Guide Hub",
  },
  {
    href: "/aliens-fireteam-elite-2/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/ancient-anomaly-walkthrough",
    label: "Ancient Anomaly Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/final-endeavor-walkthrough",
    label: "Final Endeavor & Queen Guide",
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
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Difficulty selection used for achievement cleanup in Aliens Fireteam Elite 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Aliens: Fireteam Elite 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Achievements Guide: All 30",
      description:
        "A complete 100% achievement guide for Aliens: Fireteam Elite 2 covering all 30 achievements, campaign completion, Legionnaire's Service Medal, Intense, Extreme and Insane clears, Pure Professionals, Challenge Cards, weapon ranks, attachments, Augments, Kit progression, Specialist missions, Horde Mode, and cumulative kill requirements.",
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

export default function AchievementsPage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Aliens Fireteam Elite 2 Achievements Guide: All 30 & 100% Route"
          description="My efficient route through all 30 achievements, including the campaign clears, difficulty runs, Pure Professionals, weapon and Kit progression, Specialist missions, Horde Mode, and the long kill counters."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
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