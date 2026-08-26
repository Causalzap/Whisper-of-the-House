import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/aliens-fireteam-elite-2/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Beginner Guide & Tips";

const metadataDescription =
  "Start stronger with the right Kit, Perk Grid, weapons, damage types, settings, Combat Rating, Requisition spending, ammo habits, and difficulty.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-enemy-outlines-settings.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-machinist-turret-pickup.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-perk-grid-combat-rating.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-unlimited-sidearm-ammo.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-weapon-rank-augment.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-damage-types.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-beginner-guide-ammo-aid-kit-resupply.webp`,
];

const toc = [
  {
    id: "aliens-fireteam-elite-2-beginner-guide",
    label: "Beginner guide",
  },
  {
    id: "change-these-settings-before-the-first-mission",
    label: "Settings to change",
  },
  {
    id: "choose-a-first-kit-by-range-and-responsibility",
    label: "Choosing your first Kit",
  },
  {
    id: "build-the-perk-grid-correctly",
    label: "Perk Grid & Combat Rating",
  },
  {
    id: "understand-the-three-weapon-slots",
    label: "Weapon slots",
  },
  {
    id: "how-to-spend-early-requisition",
    label: "Spending Requisition",
  },
  {
    id: "rank-one-dependable-weapon-first",
    label: "Weapon ranks & Augments",
  },
  {
    id: "match-damage-type-to-the-enemy-list",
    label: "Damage types",
  },
  {
    id: "use-ammo-crates-and-aid-kits-before-moving-on",
    label: "Ammo & Aid Kits",
  },
  {
    id: "choose-a-difficulty-you-can-learn-on",
    label: "Choosing difficulty",
  },
  {
    id: "fix-the-cause-of-a-failed-mission",
    label: "Why missions fail",
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
    href: "/aliens-fireteam-elite-2/rescue-and-recovery-walkthrough",
    label: "Rescue and Recovery Walkthrough",
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
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Perk Grid and Combat Rating setup in Aliens Fireteam Elite 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Aliens: Fireteam Elite 2",
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
      headline:
        "Aliens: Fireteam Elite 2 Beginner Guide",
      description:
        "A practical beginner guide to Aliens: Fireteam Elite 2 covering visibility and aiming settings, Kit selection, Perk Grid connections, Combat Rating, primary and signature weapons, unlimited sidearm ammunition, early Requisition spending, weapon ranks and Augments, thermal and electric damage matchups, Ammo Crates, Aid Kits, difficulty selection, and how to tell a loadout problem from a tactical mistake.",
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

export default function BeginnerGuidePage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Aliens Fireteam Elite 2 Beginner Guide: Kits, Weapons & Progression"
          description="The early-game decisions I make before spending Requisition: which Kit to start with, how the Perk Grid works, what weapons to rank, which damage type to use, and when a failed mission actually needs a loadout change."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
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