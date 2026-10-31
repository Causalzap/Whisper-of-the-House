import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsContent from "@/data/queens-domain/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Queen's Domain: All 53 Achievements & Checklist";

const metadataDescription =
  "Track all 53 Queen's Domain achievements with a checklist for four endings, Missing Books, Orbewa Eggs, Wourha, weapon collections, and bosses.";

const articleTitle =
  "How Do You Unlock All 53 Achievements in Queen's Domain?";

const articleDescription =
  "Mark all 53 achievements as you progress, track unfinished collections, return Missing Books, complete NPC deliveries, and plan for all four endings.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/meal-ticket-chef-gagi.webp`,
  `${siteUrl}/images/queens-domain/wourha-bestiary-research.webp`,
  `${siteUrl}/images/queens-domain/erma-orbewa-egg-delivery.webp`,
  `${siteUrl}/images/queens-domain/fallen-raiders-necklace-pickup.webp`,
  `${siteUrl}/images/queens-domain/tower-missing-books-categories.webp`,
  `${siteUrl}/images/queens-domain/tower-wourha-cleanup-confirmation.webp`,
];

const heroImage = imageUrls[0];


const toc = [
    {
      id: "achievement-checklist",
      label: "All 53 Achievements Checklist",
    },
    {
      id: "locations-bosses",
      label: "Locations & Bosses",
    },
    {
      id: "weapons-items",
      label: "Weapons, Accessories & Items",
    },
    {
      id: "wind-gems",
      label: "Wind Gems & Storm Gem",
    },
    {
      id: "npc-quests",
      label: "NPC Quests & Activities",
    },
    {
      id: "umbada",
      label: "Umbada's Trading Outpost",
    },
    {
      id: "meal-tickets",
      label: "60 Meal Tickets for Chef Gagi",
    },
    {
      id: "wourha",
      label: "Knowledge Keeper Wourha",
    },
    {
      id: "lost-books",
      label: "Missing Books & Library Sections",
    },
    {
      id: "tower-cleanup",
      label: "Sparkling Clean",
    },
    {
      id: "world-completion",
      label: "Chests, Secret Doors & Travel Points",
    },
    {
      id: "ending-achievements",
      label: "All Four Endings",
    },
    {
      id: "completion-plan",
      label: "100% Completion Plan",
    },
  ];
  

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Area Order & Unlock Requirements",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Endu, Wind Gems & Akunra",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple & Dagoom",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge & Necronomicon",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    images: [
      {
        url: heroImage,
        alt: "Meal Ticket collectible required for a Queen's Domain achievement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Queen's Domain",
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
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-10-31",
      dateModified: "2026-10-31",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function QueensDomainAchievementsPage() {
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
          description={articleDescription}
          gameTitle="Queen's Domain"
          gameHref="/queens-domain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 31, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}