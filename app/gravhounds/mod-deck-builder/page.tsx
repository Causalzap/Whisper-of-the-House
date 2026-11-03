
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GravhoundsModDeckContent from "@/data/gravhounds/mod-deck-builder.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gravhounds`;
const pageUrl = `${hubUrl}/mod-deck-builder`;

const metadataTitle =
  "Gravhounds Mod Deck Builder: Unlock, Edit & Choose Mods";

const metadataDescription =
  "Unlock the Gravhounds Mod Deck Builder, edit your 11-Mod loadout, replace researched Mods, understand Reward Pods, and choose upgrades for your next shift.";

const articleTitle =
  "How Do You Unlock and Edit the Mod Deck in Gravhounds?";

const articleDescription =
  "Unlock the Gravhounds Mod Deck Builder through early Mod research, locate MOD LOADOUT in the Research Lab, and replace selected Mods with researched alternatives. Understand how the 11-Mod deck affects Reward Pod choices, compare early Mods for damage, repairs, mobility, and credits, and learn how Showstopper effects influence your loadout.";

const imageUrls = [
  `${siteUrl}/images/gravhounds/gravhounds-mod-deck-unlock.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-research-lab-mod-loadout.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-industrial-grade-mod-unlock.webp`,
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
      "Unlock and edit the Gravhounds Mod Deck, manage your 11-Mod loadout, and control which Mods can appear in Reward Pods.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Gravhounds Mod Deck Builder Unlocked notification explaining the 11-Mod deck and Reward Pod selection rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Edit your Gravhounds Mod Loadout, choose researched Mods, and understand how Reward Pods select upgrades.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "unlock-mod-deck",
    label: "Unlock the Mod Deck Builder",
  },
  {
    id: "edit-mod-deck",
    label: "Add & Replace Mods",
  },
  {
    id: "reward-pods",
    label: "Mods & Reward Pods",
  },
  {
    id: "choose-mods",
    label: "Which Mods to Choose",
  },
  {
    id: "showstoppers",
    label: "Showstopper Mods",
  },
  {
    id: "before-next-shift",
    label: "Before Your Next Shift",
  },
];

const relatedLinks = [
  {
    href: "/gravhounds",
    label: "Gravhounds Guide: Progression, Missions & Blueprints",
  },
  {
    href: "/gravhounds/beginner-guide",
    label: "Gravhounds Beginner Guide: Complete Your First Shift",
  },
];

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
          name: "Gravhounds",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mod Deck Builder",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      about: [
        {
          "@type": "VideoGame",
          name: "GRAVHOUNDS",
        },
        {
          "@type": "Thing",
          name: "Mod Deck Builder unlock",
        },
        {
          "@type": "Thing",
          name: "Mod Loadout editing and replacement",
        },
        {
          "@type": "Thing",
          name: "Research Lab Mod unlocks",
        },
        {
          "@type": "Thing",
          name: "Reward Pod Mod selection",
        },
        {
          "@type": "Thing",
          name: "Mod effects and loadout choices",
        },
        {
          "@type": "Thing",
          name: "Showstopper Mods",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description="Unlock the Mod Deck Builder, edit your 11-Mod loadout, choose researched upgrades, and control which Mods appear in Reward Pods."
          gameTitle="GRAVHOUNDS"
          gameHref="/gravhounds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GravhoundsModDeckContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
