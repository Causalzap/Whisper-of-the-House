import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/holovillage-our-cozy-days/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/holovillage-our-cozy-days`;
const pageUrl = `${gameUrl}/beginner-guide`;

export const metadata: Metadata = {
  title: "holoVillage Beginner Guide: What to Do First in Your First Day",
  description:
    "A beginner guide for holoVillage: Our Cozy Days covering what to do first, early tools, farming, fishing, adventuring, quests, villagers, selling items, and first-day progression.",
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
          name: "holoVillage Beginner Guide",
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
        "holoVillage Beginner Guide: What to Do First in Your First Day",
      description:
        "This holoVillage: Our Cozy Days beginner guide explains the first-day route, how to place your house, craft early tools, start farming, unlock fishing, begin adventuring, follow quests, sell items carefully, and build toward villagers and stores.",
      image: [
        `${siteUrl}/images/holovillage-our-cozy-days/beginner-guide.webp`,
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
          name: "Beginner Guide",
        },
        {
          "@type": "Thing",
          name: "First Day Guide",
        },
        {
          "@type": "Thing",
          name: "Early Game",
        },
        {
          "@type": "Thing",
          name: "Crafting",
        },
        {
          "@type": "Thing",
          name: "Farming",
        },
        {
          "@type": "Thing",
          name: "Fishing",
        },
        {
          "@type": "Thing",
          name: "Villagers",
        },
        {
          "@type": "Thing",
          name: "Village Development",
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
          title="holoVillage Beginner Guide: What to Do First in Your First Day"
          description="Learn what to do first in holoVillage: Our Cozy Days, including your first house, early tools, farming, fishing, adventuring, quests, villagers, selling items, and early progression priorities."
          gameTitle="holoVillage: Our Cozy Days"
          gameHref="/holovillage-our-cozy-days"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "beginner-system-at-a-glance",
              label: "Beginner system at a glance",
            },
            {
              id: "what-to-do-first-in-holovillage",
              label: "What to do first",
            },
            {
              id: "first-day-route",
              label: "First day route",
            },
            {
              id: "place-your-first-house",
              label: "Place your first house",
            },
            {
              id: "use-your-chest-before-your-bag-fills-up",
              label: "Use your chest",
            },
            {
              id: "craft-your-first-tools",
              label: "Craft your first tools",
            },
            {
              id: "start-farming-early",
              label: "Start farming early",
            },
            {
              id: "unlock-fishing-with-kuro",
              label: "Unlock fishing",
            },
            {
              id: "start-adventuring-with-bubba",
              label: "Start adventuring",
            },
            {
              id: "follow-main-job-and-daily-quests",
              label: "Follow quests",
            },
            {
              id: "sell-items-carefully",
              label: "Sell items carefully",
            },
            {
              id: "build-toward-your-first-villager-house",
              label: "Build toward villagers",
            },
            {
              id: "what-to-prioritize-after-the-first-day",
              label: "After the first day",
            },
            {
              id: "early-upgrades-and-progression-goals",
              label: "Early upgrades",
            },
            {
              id: "common-beginner-mistakes",
              label: "Common mistakes",
            },
            {
              id: "best-early-game-loop",
              label: "Best early-game loop",
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
            {
              href: "/holovillage-our-cozy-days/early-combat-guide",
              label: "holoVillage Early Combat Guide",
            },
          ]}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
