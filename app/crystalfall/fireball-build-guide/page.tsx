import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrystalfallFireballBuildGuideContent from "@/data/crystalfall/fireball-build-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crystalfall/fireball-build-guide`;

export const metadata: Metadata = {
  title: "Best Fireball Build in Crystalfall for Beginners",
  description:
    "Looking for the best Fireball build in Crystalfall for beginners? This guide covers the best class, Rod requirement, early passive path, Aether sustain, and how to scale Fireball with split, pierce, extra projectile, and burn.",
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
          name: "Fireball Build Guide",
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
      headline: "Best Fireball Build in Crystalfall for Beginners",
      description:
        "This guide explains the best beginner Fireball build in Crystalfall, including Technomancer as the best class, Rod compatibility, early passive pathing, Aether-first scaling, and the best Fireball upgrades like split, pierce, extra projectile, and burn.",
      image: [
        `${siteUrl}/images/crystalfall/fireball-build-clear-speed.webp`,
        `${siteUrl}/images/crystalfall/fireball-build-rod-requirement.webp`,
        `${siteUrl}/images/crystalfall/fireball-build-skill-tree.webp`,
        `${siteUrl}/images/crystalfall/fireball-build-skill-upgrades.webp`,
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
          name: "Fireball",
        },
        {
          "@type": "Thing",
          name: "Fire Bolt",
        },
        {
          "@type": "Thing",
          name: "Technomancer",
        },
        {
          "@type": "Thing",
          name: "Aether",
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
          title="Best Fireball Build in Crystalfall for Beginners"
          description="This beginner Fireball build guide covers the best class, weapon requirement, early passive tree path, Aether sustain, and the best Fireball upgrades for real Early Access progression."
          gameTitle="Crystalfall"
          gameHref="/crystalfall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 13, 2026"
          toc={[
            {
              id: "why-this-build-is-worth-playing",
              label: "Why this build is worth playing",
            },
            {
              id: "best-class-for-a-fireball-build",
              label: "Best class for a Fireball build",
            },
            {
              id: "fireball-weapon-compatibility-and-tags",
              label: "Fireball weapon compatibility and tags",
            },
            {
              id: "fireball-vs-ice-shards",
              label: "Fireball vs Ice Shards",
            },
            {
              id: "first-priority-fix-aether-before-damage",
              label: "First priority: fix Aether before damage",
            },
            {
              id: "best-early-passive-tree-priority",
              label: "Best early passive tree priority",
            },
            {
              id: "where-fireball-upgrades-actually-come-from",
              label: "Where Fireball upgrades actually come from",
            },
            {
              id: "best-fireball-upgrades-split-pierce-extra-projectile-and-burn",
              label: "Best Fireball upgrades",
            },
            {
              id: "what-to-do-if-you-do-not-have-split-yet",
              label: "What to do if you do not have split yet",
            },
            {
              id: "best-gear-stats-for-a-beginner-fireball-build",
              label: "Best gear stats for a beginner Fireball build",
            },
            {
              id: "how-to-pilot-the-build-better",
              label: "How to pilot the build better",
            },
            {
              id: "biggest-mistakes-with-a-beginner-fireball-build",
              label: "Biggest mistakes with a beginner Fireball build",
            },
            {
              id: "best-practical-fireball-leveling-order",
              label: "Best practical Fireball leveling order",
            },
            {
              id: "what-this-build-does-and-does-not-confirm",
              label: "What this build does and does not confirm",
            },
            {
              id: "fireball-build-at-a-glance",
              label: "Fireball build at a glance",
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
              href: "/crystalfall/beginner-guide",
              label: "Crystalfall Beginner Guide",
            },
            {
              href: "/crystalfall/crafting-sockets-gem-fusion-guide",
              label: "Crafting, Sockets, and Gem Fusion Guide",
            },
            {
              href: "/crystalfall/crafting-sockets-gem-fusion-guide",
              label: "Crafting, Sockets, and Gem Fusion Guide",
            },
            {
              href: "/crystalfall/inventory-stash-guide",
              label: "Inventory and Stash Guide",
            },
          ]}
        >
          <CrystalfallFireballBuildGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}