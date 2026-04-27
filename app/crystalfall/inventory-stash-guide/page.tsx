import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrystalfallInventoryStashGuideContent from "@/data/crystalfall/inventory-stash-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crystalfall/inventory-stash-guide`;

export const metadata: Metadata = {
  title: "Crystalfall Inventory and Stash Guide",
  description:
    "Need help managing loot in Crystalfall? This guide explains what to keep, what to stash, why bags fill so fast, how much starting space you get, and how inventory pressure affects early gameplay.",
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
          name: "Inventory and Stash Guide",
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
      headline: "Crystalfall Inventory and Stash Guide",
      description:
        "This guide explains how to manage inventory and stash pressure in Crystalfall, including what to keep, what to stash, how much starting space you get, salvage risks, and how to get more storage.",
      image: [
        `${siteUrl}/images/crystalfall/stash-gems-beginner.webp`,
        `${siteUrl}/images/crystalfall/inventory-space-pressure.webp`,
        `${siteUrl}/images/crystalfall/salvage-fireball-warning.webp`,
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
          name: "Inventory",
        },
        {
          "@type": "Thing",
          name: "Stash",
        },
        {
          "@type": "Thing",
          name: "Loot Management",
        },
        {
          "@type": "Thing",
          name: "Salvage",
        },
        {
          "@type": "Thing",
          name: "Storage Space",
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
          title="Crystalfall Inventory and Stash Guide"
          description="This beginner guide explains what to keep, what to stash, why storage feels tight, how loot flow hurts pacing, and how to avoid the biggest inventory mistakes in Crystalfall Early Access."
          gameTitle="Crystalfall"
          gameHref="/crystalfall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 13, 2026"
          toc={[
            {
              id: "why-inventory-pressure-happens-so-fast-in-crystalfall",
              label: "Why inventory pressure happens so fast",
            },
            {
              id: "inventory-vs-stash-what-each-one-should-do",
              label: "Inventory vs stash",
            },
            {
              id: "what-to-stash-first",
              label: "What to stash first",
            },
            {
              id: "what-to-keep-in-your-inventory",
              label: "What to keep in your inventory",
            },
            {
              id: "what-to-sell-what-to-stash-and-what-to-stop-babysitting",
              label: "What to sell, what to stash, and what to stop babysitting",
            },
            {
              id: "why-gems-and-cores-become-the-biggest-clutter-source",
              label: "Why gems and cores become the biggest clutter source",
            },
            {
              id: "pickup-flow-manual-loot-and-why-pace-matters",
              label: "Pickup flow, manual loot, and why pace matters",
            },
            {
              id: "storage-space-feels-small-and-that-changes-how-you-should-manage-loot",
              label: "Storage space feels small",
            },
            {
              id: "how-to-get-more-space",
              label: "How to get more space",
            },
            {
              id: "salvage-all-is-not-your-friend-if-you-are-not-careful",
              label: "Salvage all is not your friend",
            },
            {
              id: "best-inventory-rules-for-the-first-few-hours",
              label: "Best inventory rules for the first few hours",
            },
            {
              id: "what-this-guide-does-and-does-not-confirm",
              label: "What this guide does and does not confirm",
            },
            {
              id: "inventory-and-stash-at-a-glance",
              label: "Inventory and stash at a glance",
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
              href: "/crystalfall/fireball-build-guide",
              label: "Best Fireball Build in Crystalfall for Beginners",
            },
          ]}
        >
          <CrystalfallInventoryStashGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}