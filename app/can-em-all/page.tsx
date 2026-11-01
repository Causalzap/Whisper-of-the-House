
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CanEmAllContent from "@/data/can-em-all/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/can-em-all`;

const metadataTitle =
  "Can 'Em All Guide: Best Upgrades & Factory Automation";

const metadataDescription =
  "Start Can 'Em All with the right upgrades, unlock the $40 Vacuum, fix Grinder and conveyor bottlenecks, and earn more from every can.";

const articleDescription =
  "Start Can 'Em All with additional cans per creature and Premium Cans, unlock the Industrial Vacuum, and reduce manual handling with conveyors and Corpse Roombas. Improve Grinder throughput, compare ordinary weapons and turrets, manage workday limits, and increase profits through Shiny cans, duplication, Hole in One, and Smoked Meat.";

const imageUrls = [
  `${siteUrl}/images/can-em-all/can-em-all-early-can-value-upgrades.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-vacuum-unlock.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-vacuum-storage-capacity.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-connected-conveyor-belt.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-hole-in-one-upgrade.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-smoked-cans-double-value.webp`,
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
      "Choose early upgrades, unlock the Industrial Vacuum, connect conveyors, increase Grinder capacity, and earn more from each can in Can 'Em All.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        alt: "Can 'Em All factory showing Grinders and conveyor belt sections used to transport finished cans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Upgrade your Can 'Em All factory with better can values, Grinders, conveyors, Vacuum capacity, weapons, and automatic turrets.",
    images: [imageUrls[3]],
  },
};

const toc = [
  {
    id: "first-upgrades",
    label: "Best First Upgrades",
  },
  {
    id: "basket-and-vacuum",
    label: "Basket & Industrial Vacuum",
  },
  {
    id: "factory-bottlenecks",
    label: "Factory Upgrade Priorities",
  },
  {
    id: "grinder-upgrades",
    label: "Grinder Speed & Capacity",
  },
  {
    id: "conveyor-belts",
    label: "Conveyors & Corpse Roombas",
  },
  {
    id: "making-more-money",
    label: "Can Value & Money Making",
  },
  {
    id: "weapons-and-turrets",
    label: "Weapons & Automatic Turrets",
  },
  {
    id: "workday-management",
    label: "Workday Length & Production",
  },
  {
    id: "slot-machine",
    label: "Slot Machine",
  },
  {
    id: "late-game-progression",
    label: "Late-Game Factory Priorities",
  },
];

const relatedLinks = [
  {
    href: "/can-em-all/prestige-ending",
    label: "Can 'Em All Prestige, Permanent Upgrades & Ending",
  },
  {
    href: "/can-em-all/achievements",
    label: "Can 'Em All: All 12 Achievements & Hidden Unlocks",
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
          name: "Can 'Em All",
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
        "How Do You Upgrade and Automate Your Factory in Can 'Em All?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-01",
      dateModified: "2026-11-01",
      about: [
        {
          "@type": "VideoGame",
          name: "Can 'Em All",
        },
        {
          "@type": "Thing",
          name: "Can 'Em All factory upgrades",
        },
        {
          "@type": "Thing",
          name: "Industrial Vacuum and material handling",
        },
        {
          "@type": "Thing",
          name: "Grinder processing capacity",
        },
        {
          "@type": "Thing",
          name: "Conveyor belts and Corpse Roomba automation",
        },
        {
          "@type": "Thing",
          name: "Can value, Shiny cans, and duplication",
        },
        {
          "@type": "Thing",
          name: "Weapons and automatic turrets",
        },
        {
          "@type": "Thing",
          name: "Workday extensions and late-game production",
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
          title="How Do You Upgrade and Automate Your Factory in Can 'Em All?"
          description="Increase your first can sales, move bodies into Grinders, connect production lines, and choose upgrades that fix whatever is slowing your factory down."
          gameTitle="Can 'Em All"
          gameHref="/can-em-all"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CanEmAllContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
