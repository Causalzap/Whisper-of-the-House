import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestEarlyUpgradesContent from "@/data/vampire-crawlers/best-early-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/vampire-crawlers`;
const pageUrl = `${gameUrl}/best-early-upgrades`;

export const metadata: Metadata = {
  title: "Vampire Crawlers Best Early Upgrades: What to Buy First",
  description:
    "Learn the best early upgrades in Vampire Crawlers, including Reroll, Recovery, Might, Cooldown, Arcana, Greed, Floor Chicken timing, Bing machines, and Blacksmith traps.",
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
          name: "Vampire Crawlers",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vampire Crawlers Best Early Upgrades",
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
        "Vampire Crawlers Best Early Upgrades: What to Buy First in the Power-Up Shop",
      description:
        "This Vampire Crawlers early upgrade guide explains which Power-Ups to buy first, including Reroll, Recovery, Might, Max Health, Duration, Greed, Cooldown, Magnet, Arcana, Floor Chicken timing, Bing Upgrade machines, and Blacksmith spending traps.",
      image: [`${siteUrl}/images/vampire-crawlers/best-early-upgrades.png`],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Power-Ups",
        },
        {
          "@type": "Thing",
          name: "Reroll",
        },
        {
          "@type": "Thing",
          name: "Recovery",
        },
        {
          "@type": "Thing",
          name: "Cooldown",
        },
        {
          "@type": "Thing",
          name: "Arcana",
        },
        {
          "@type": "Thing",
          name: "Over the Top",
        },
        {
          "@type": "Thing",
          name: "Sharp Mind",
        },
        {
          "@type": "Thing",
          name: "Bing Upgrade",
        },
        {
          "@type": "Thing",
          name: "Blacksmith",
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
          title="Vampire Crawlers Best Early Upgrades: What to Buy First in the Power-Up Shop"
          description="Learn which Vampire Crawlers upgrades to buy first, including Reroll, Recovery, Might, Max Health, Cooldown, Greed, Arcana, Floor Chicken timing, Bing Upgrade machines, and why early Blacksmith spending can be a trap."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "early-upgrades-at-a-glance",
              label: "Early upgrades at a glance",
            },
            {
              id: "how-the-power-up-shop-works",
              label: "How the shop works",
            },
            {
              id: "best-early-upgrades-ranked-with-costs",
              label: "Ranked with costs",
            },
            {
              id: "best-first-purchase-paths",
              label: "First purchase paths",
            },
            {
              id: "recovery-vs-greed-what-should-you-buy-first",
              label: "Recovery vs Greed",
            },
            {
              id: "cooldown-magnet-and-crawler-slot",
              label: "Cooldown, Magnet, Crawler Slot",
            },
            {
              id: "arcana-are-not-power-ups-but-they-change-upgrade-priority",
              label: "Arcana priority",
            },
            {
              id: "field-economy-floor-chicken-cash-out-and-bing-machines",
              label: "Field economy",
            },
            {
              id: "blacksmith-is-a-late-game-investment",
              label: "Blacksmith warning",
            },
            {
              id: "best-upgrades-by-build-type",
              label: "By build type",
            },
            {
              id: "upgrades-and-purchases-to-avoid-early",
              label: "Avoid early",
            },
            {
              id: "when-to-refund-upgrades",
              label: "When to refund",
            },
            {
              id: "characters-vs-power-ups-what-to-buy-first",
              label: "Characters vs Power-Ups",
            },
            {
              id: "common-upgrade-mistakes",
              label: "Common mistakes",
            },
            {
              id: "best-early-upgrade-route",
              label: "Best early route",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/vampire-crawlers",
              label: "Vampire Crawlers Guide Hub",
            },
            {
              href: "/vampire-crawlers/combo-guide",
              label: "Vampire Crawlers Combo Guide",
            },
            {
              href: "/vampire-crawlers/early-evolutions",
              label: "Early Evolutions Guide",
            },
            {
              href: "/vampire-crawlers/best-characters-for-beginners",
              label: "Best Characters for Beginners",
            },
            {
              href: "/vampire-crawlers/all-characters-unlock-guide",
              label: "All Characters Unlock Guide",
            },
            {
              href: "/vampire-crawlers/secret-characters-how-to-unlock",
              label: "How to Unlock Secret Characters",
            },
          ]}
        >
          <BestEarlyUpgradesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
