import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyCombatGuideContent from "@/data/holovillage-our-cozy-days/early-combat-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/holovillage-our-cozy-days`;
const pageUrl = `${gameUrl}/early-combat-guide`;

export const metadata: Metadata = {
  title: "holoVillage Early Combat Guide: Weapons, Gates & Adventure Rank 2",
  description:
    "Learn early combat in holoVillage: Our Cozy Days, including Bubba's adventuring quests, swords, staffs, armor, potions, food buffs, first gates, strong errors, and Adventure Rank 2.",
  alternates: {
    canonical: pageUrl,
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
          name: "holoVillage: Our Cozy Days",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "holoVillage Early Combat Guide",
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
        "holoVillage Early Combat Guide: Weapons, Potions, First Gate, Strong Errors, and Adventure Rank 2",
      description:
        "This holoVillage: Our Cozy Days early combat guide explains how to start adventuring with Bubba, how swords, staffs, armor, potions, and food buffs work, how to prepare for gates and strong errors, and what Adventure Rank 2 unlocks.",
      image: [
        `${siteUrl}/images/holovillage-our-cozy-days/early-combat-guide.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "holoVillage: Our Cozy Days",
        },
        {
          "@type": "Thing",
          name: "Early Combat",
        },
        {
          "@type": "Thing",
          name: "Adventuring",
        },
        {
          "@type": "Thing",
          name: "Bubba",
        },
        {
          "@type": "Thing",
          name: "Weapons",
        },
        {
          "@type": "Thing",
          name: "Potions",
        },
        {
          "@type": "Thing",
          name: "Gates",
        },
        {
          "@type": "Thing",
          name: "Strong Errors",
        },
        {
          "@type": "Thing",
          name: "Adventure Rank 2",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="holoVillage Early Combat Guide: Weapons, Potions, First Gate, Strong Errors, and Adventure Rank 2"
          description="Learn how early combat works in holoVillage: Our Cozy Days, including how to start adventuring with Bubba, what gear to bring, how to prepare for gates and strong errors, and what Adventure Rank 2 unlocks."
          gameTitle="holoVillage: Our Cozy Days"
          gameHref="/holovillage-our-cozy-days"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "early-combat-at-a-glance",
              label: "Early combat at a glance",
            },
            {
              id: "how-combat-works-in-holovillage",
              label: "How combat works",
            },
            {
              id: "how-to-start-adventuring",
              label: "Start adventuring",
            },
            {
              id: "sword-staff-armor-and-food",
              label: "Sword, staff, armor, and food",
            },
            {
              id: "early-enemies-and-drops",
              label: "Early enemies and drops",
            },
            {
              id: "how-to-prepare-before-gates-and-strong-errors",
              label: "Prepare for gates",
            },
            {
              id: "how-to-fight-safely",
              label: "Fight safely",
            },
            {
              id: "potions-food-buffs-and-healing",
              label: "Potions and food buffs",
            },
            {
              id: "mining-and-smitty-progression",
              label: "Mining and Smitty progression",
            },
            {
              id: "what-adventure-rank-2-unlocks",
              label: "Adventure Rank 2 unlocks",
            },
            {
              id: "what-to-do-after-adventure-rank-2",
              label: "After Adventure Rank 2",
            },
            {
              id: "common-early-combat-mistakes",
              label: "Common mistakes",
            },
            {
              id: "best-early-combat-routine",
              label: "Best early combat routine",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/holovillage-our-cozy-days",
              label: "holoVillage: Our Cozy Days Guide Hub",
            },
            {
              href: "/holovillage-our-cozy-days/beginner-guide",
              label: "holoVillage Beginner Guide",
            },
            {
              href: "/holovillage-our-cozy-days/fishing-guide",
              label: "holoVillage Fishing Guide",
            },
            {
              href: "/holovillage-our-cozy-days/how-to-invite-villagers",
              label: "How to Invite Villagers in holoVillage",
            },
            {
              href: "/holovillage-our-cozy-days/shop-money-guide",
              label: "holoVillage Shop and Money Guide",
            },
          ]}
        >
          <EarlyCombatGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
