import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ComboGuideContent from "@/data/vampire-crawlers/combo-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/vampire-crawlers`;
const pageUrl = `${gameUrl}/combo-guide`;

export const metadata: Metadata = {
  title: "Vampire Crawlers Combo Guide: Mana Order, Wildcards & Gems",
  description:
    "Learn how combos work in Vampire Crawlers, including 0-1-2 mana order, skipped numbers, Wildcards, Reverse Combo Gem, Easy Combo Gem, Sharp Mind, and Play All timing.",
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
          name: "Vampire Crawlers Combo Guide",
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
        "Vampire Crawlers Combo Guide: Mana Order, Wildcards, Gems, and Play All Explained",
      description:
        "This Vampire Crawlers combo guide explains how rising mana order works, when skipped numbers still count, how Wildcards and combo Gems change sequencing, why Sharp Mind matters, and when to avoid Play All.",
      image: [`${siteUrl}/images/vampire-crawlers/combo-guide.png`],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Combo System",
        },
        {
          "@type": "Thing",
          name: "Wildcards",
        },
        {
          "@type": "Thing",
          name: "Reverse Combo Gem",
        },
        {
          "@type": "Thing",
          name: "Easy Combo Gem",
        },
        {
          "@type": "Thing",
          name: "Sharp Mind Arcana",
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
          title="Vampire Crawlers Combo Guide: Mana Order, Wildcards, Gems, and Play All Explained"
          description="Learn how Vampire Crawlers combos really work, including 0-1-2 mana order, skipped numbers, Wildcards, Reverse Combo Gem, Easy Combo Gem, Sharp Mind, Play All timing, and the best beginner combo structure."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "combo-system-at-a-glance",
              label: "Combo system at a glance",
            },
            {
              id: "how-combos-work-in-vampire-crawlers",
              label: "How combos work",
            },
            {
              id: "mana-order-and-skipped-numbers",
              label: "Mana order and skipped numbers",
            },
            {
              id: "the-card-role-framework",
              label: "Card role framework",
            },
            {
              id: "wildcards-gems-and-arcanas",
              label: "Wildcards, Gems, and Arcanas",
            },
            {
              id: "beginner-combo-examples",
              label: "Beginner combo examples",
            },
            {
              id: "how-to-draft-for-better-combos",
              label: "Drafting for combos",
            },
            {
              id: "how-to-sequence-buffs-scaling-and-defense",
              label: "Buffs, scaling, and defense",
            },
            {
              id: "play-all-button-vs-manual-play",
              label: "Play All vs manual play",
            },
            {
              id: "normal-fights-vs-boss-fights",
              label: "Normal fights vs bosses",
            },
            {
              id: "common-combo-mistakes",
              label: "Common mistakes",
            },
            {
              id: "how-to-know-if-your-combo-build-is-working",
              label: "Is your build working?",
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
              href: "/vampire-crawlers/best-early-upgrades",
              label: "Best Early Upgrades in Vampire Crawlers",
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
              href: "/vampire-crawlers/secret-characters-how-to-unlock",
              label: "How to Unlock Secret Characters",
            },

          ]}
        >
          <ComboGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
