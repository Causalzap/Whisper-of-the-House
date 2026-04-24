import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyEvolutionsGuideContent from "@/data/vampire-crawlers/early-evolutions-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/vampire-crawlers`;
const pageUrl = `${gameUrl}/early-evolutions-guide`;

export const metadata: Metadata = {
  title: "Vampire Crawlers Early Evolutions Guide: Best Weapon Combos",
  description:
    "Learn the best early evolutions in Vampire Crawlers, including Holy Wand, Unholy Vespers, Bloody Tear, Death Spiral, Soul Eater, Grim Grimoire, and evolution timing.",
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
          name: "Vampire Crawlers Early Evolutions Guide",
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
        "Vampire Crawlers Early Evolutions Guide: Best Weapon Combos and Recipes to Get First",
      description:
        "This Vampire Crawlers early evolutions guide explains how weapon evolutions work, what gets consumed after evolving, how to use Grim Grimoire, which recipes to prioritize first, and when to delay chests, Gem Stations, or red-orb evolution triggers.",
      image: [`${siteUrl}/images/vampire-crawlers/early-evolutions-guide.png`],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Weapon Evolutions",
        },
        {
          "@type": "Thing",
          name: "Holy Wand",
        },
        {
          "@type": "Thing",
          name: "Unholy Vespers",
        },
        {
          "@type": "Thing",
          name: "Bloody Tear",
        },
        {
          "@type": "Thing",
          name: "Death Spiral",
        },
        {
          "@type": "Thing",
          name: "Soul Eater",
        },
        {
          "@type": "Thing",
          name: "Grim Grimoire",
        },
        {
          "@type": "Thing",
          name: "Gem Station",
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
          title="Vampire Crawlers Early Evolutions Guide: Best Weapon Combos and Recipes to Get First"
          description="Learn the best early weapon evolutions in Vampire Crawlers, including Holy Wand, Unholy Vespers, Bloody Tear, Death Spiral, Soul Eater, Thunder Loop, NO FUTURE, Grim Grimoire recipe tracking, and when to delay evolution rewards."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "evolution-system-at-a-glance",
              label: "Evolution system at a glance",
            },
            {
              id: "how-evolutions-work-in-vampire-crawlers",
              label: "How evolutions work",
            },
            {
              id: "what-gets-consumed-after-evolution",
              label: "What gets consumed?",
            },
            {
              id: "how-to-check-recipes-with-grim-grimoire",
              label: "Grim Grimoire",
            },
            {
              id: "best-early-evolutions-ranked",
              label: "Best early evolutions",
            },
            {
              id: "all-known-evolution-recipes",
              label: "All recipes",
            },
            {
              id: "best-first-evolution-to-get",
              label: "Best first evolution",
            },
            {
              id: "evolution-trigger-sources",
              label: "Evolution triggers",
            },
            {
              id: "when-to-delay-a-chest-gem-station-or-red-orb",
              label: "When to delay rewards",
            },
            {
              id: "destroyed-after-use-item-cards",
              label: "Destroyed after use",
            },
            {
              id: "evolutions-and-combo-order",
              label: "Combo order",
            },
            {
              id: "how-to-draft-around-evolutions",
              label: "Drafting around evolutions",
            },
            {
              id: "best-support-stats-after-evolving",
              label: "Support stats",
            },
            {
              id: "best-early-evolution-routes",
              label: "Best early routes",
            },
            {
              id: "when-not-to-force-an-evolution",
              label: "When not to force",
            },
            {
              id: "common-evolution-mistakes",
              label: "Common mistakes",
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
              href: "/vampire-crawlers/best-early-upgrades",
              label: "Best Early Upgrades in Vampire Crawlers",
            },
            {
              href: "/vampire-crawlers/all-characters-unlock-guide",
              label: "All Characters Unlock Guide",
            },
            {
              href: "/vampire-crawlers/best-characters-for-beginners",
              label: "Best Characters for Beginners",
            },
          ]}
        >
          <EarlyEvolutionsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
