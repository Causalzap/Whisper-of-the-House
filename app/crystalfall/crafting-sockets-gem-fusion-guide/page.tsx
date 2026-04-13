import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrystalfallCraftingGuideContent from "@/data/crystalfall/crafting-sockets-gem-fusion-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crystalfall/crafting-sockets-gem-fusion-guide`;

export const metadata: Metadata = {
  title: "Crystalfall Crafting, Sockets, and Gem Fusion Guide",
  description:
    "Need help with crafting in Crystalfall? This guide explains alpha and omega affixes, rarity upgrades, brick risk, sockets, Skill Crests, gem fusion, and the best beginner crafting order in Early Access.",
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
          name: "Crystalfall",
          item: `${siteUrl}/crystalfall`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Crafting Guide",
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
      headline: "Crystalfall Crafting, Sockets, and Gem Fusion Guide",
      description:
        "This guide explains how crafting works in Crystalfall, including alpha and omega affixes, item and skill rarity upgrades, brick risk, sockets, Skill Crests, gem fusion, and the best beginner crafting order.",
      image: [
        `${siteUrl}/images/crystalfall/crafting-rarity-upgrade.webp`,
        `${siteUrl}/images/crystalfall/crafting-add-socket.webp`,
        `${siteUrl}/images/crystalfall/crafting-gem-fusion.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Crystalfall",
        },
        {
          "@type": "Thing",
          name: "Crafting",
        },
        {
          "@type": "Thing",
          name: "Alpha and Omega Affixes",
        },
        {
          "@type": "Thing",
          name: "Sockets",
        },
        {
          "@type": "Thing",
          name: "Skill Crests",
        },
        {
          "@type": "Thing",
          name: "Gem Fusion",
        },
        {
          "@type": "Thing",
          name: "Skill Artisan",
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
          title="Crystalfall Crafting, Sockets, and Gem Fusion Guide"
          description="This beginner crafting guide covers alpha and omega affixes, item and skill rarity upgrades, brick risk, sockets, Skill Crests, gem fusion, and the best way to use scarce materials in Crystalfall Early Access."
          gameTitle="Crystalfall"
          gameHref="/crystalfall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 13, 2026"
          toc={[
            {
              id: "why-crafting-matters-so-much-in-crystalfall",
              label: "Why crafting matters so much",
            },
            {
              id: "how-crafting-works-in-crystalfall",
              label: "How crafting works",
            },
            {
              id: "alpha-and-omega-affixes-explained",
              label: "Alpha and Omega affixes explained",
            },
            {
              id: "how-to-upgrade-item-rarity",
              label: "How to upgrade item rarity",
            },
            {
              id: "can-crafting-fail-and-brick-items",
              label: "Can crafting fail and brick items",
            },
            {
              id: "how-to-upgrade-skill-rarity",
              label: "How to upgrade skill rarity",
            },
            {
              id: "what-shuffle-skill-row-does",
              label: "What Shuffle Skill Row does",
            },
            {
              id: "how-skill-crests-work",
              label: "How Skill Crests work",
            },
            {
              id: "how-sockets-and-socketed-cores-work",
              label: "How sockets and socketed cores work",
            },
            {
              id: "how-to-add-a-socket",
              label: "How to add a socket",
            },
            {
              id: "how-gem-fusion-works",
              label: "How gem fusion works",
            },
            {
              id: "what-crafting-materials-are-worth-saving",
              label: "What crafting materials are worth saving",
            },
            {
              id: "modules-rerolls-and-affix-manipulation",
              label: "Modules, rerolls, and affix manipulation",
            },
            {
              id: "biggest-crafting-mistakes-beginners-make",
              label: "Biggest crafting mistakes",
            },
            {
              id: "best-practical-crafting-order-for-beginners",
              label: "Best practical crafting order",
            },
            {
              id: "what-this-guide-does-and-does-not-confirm",
              label: "What this guide does and does not confirm",
            },
            {
              id: "crafting-at-a-glance",
              label: "Crafting at a glance",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/crystalfall",
              label: "Crystalfall Guide Hub",
            },
            {
              href: "/crystalfall/beginner-guide/",
              label: "Crystalfall Beginner Guide",
            },
            {
              href: "/crystalfall/fireball-build-guide/",
              label: "Best Fireball Build in Crystalfall for Beginners",
            },
            {
              href: "/crystalfall/inventory-stash-guide/",
              label: "Inventory and Stash Guide",
            },
          ]}
        >
          <CrystalfallCraftingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}