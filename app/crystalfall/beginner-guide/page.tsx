import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrystalfallBeginnerGuideContent from "@/data/crystalfall/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crystalfall/beginner-guide`;

export const metadata: Metadata = {
  title:
    "Crystalfall Beginner Guide: Best First Class, Fireball Start, and What to Do First",
  description:
    "New to Crystalfall? This beginner guide covers the best starting class, why Fireball is the safest early skill, how to handle Aether, which side areas to skip, and how to manage inventory.",
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
          name: "Beginner Guide",
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
        "Crystalfall Beginner Guide: Best First Class, Fireball Start, and What to Do First",
      description:
        "This guide explains how to start Crystalfall cleanly, including the best beginner class, Fireball as the safest first skill, Aether management, low-value side areas, and early inventory discipline.",
      image: [
        `${siteUrl}/images/crystalfall/fireball-beginner-start.webp`,
        `${siteUrl}/images/crystalfall/crystalfall-beginner-skill-tree.webp`,
        `${siteUrl}/images/crystalfall/stash-gems-beginner.webp`,
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
          name: "Technomancer",
        },
        {
          "@type": "Thing",
          name: "Fireball",
        },
        {
          "@type": "Thing",
          name: "Aether",
        },
        {
          "@type": "Thing",
          name: "Beginner Guide",
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
          title="Crystalfall Beginner Guide: Best First Class, Fireball Start, and What to Do First"
          description="Starting Crystalfall? This guide covers the safest first class, the best early skill, how to fix Aether problems, which side areas to skip, and how to manage inventory without killing your pace."
          gameTitle="Crystalfall"
          gameHref="/crystalfall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 13, 2026"
          toc={[
            {
              id: "is-crystalfall-hard-for-beginners",
              label: "Is Crystalfall hard for beginners",
            },
            {
              id: "best-class-for-beginners-in-crystalfall",
              label: "Best class for beginners",
            },
            {
              id: "best-first-skill-in-crystalfall",
              label: "Best first skill",
            },
            {
              id: "what-to-do-first-in-crystalfall",
              label: "What to do first",
            },
            {
              id: "how-to-handle-aether-and-auras-early",
              label: "How to handle Aether and auras early",
            },
            {
              id: "are-side-areas-worth-it-in-crystalfall",
              label: "Are side areas worth it",
            },
            {
              id: "inventory-stash-and-early-loot-management",
              label: "Inventory, stash, and loot management",
            },
            {
              id: "what-new-players-should-ignore",
              label: "What new players should ignore",
            },
            {
              id: "best-practical-beginner-order",
              label: "Best practical beginner order",
            },
            {
              id: "what-this-guide-does-and-does-not-confirm",
              label: "What this guide does and does not confirm",
            },
            {
              id: "crystalfall-beginner-guide-at-a-glance",
              label: "Beginner guide at a glance",
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
              href: "/crystalfall/fireball-build-guide",
              label: "Fireball Build Guide",
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
          <CrystalfallBeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}