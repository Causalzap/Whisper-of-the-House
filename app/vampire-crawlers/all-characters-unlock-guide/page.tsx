import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import VampireCrawlersAllCharactersUnlockGuideContent from "@/data/vampire-crawlers/all-characters-unlock-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com/vampire-crawlers";
const pageUrl = `${siteUrl}/all-characters-unlock-guide`;

export const metadata: Metadata = {
    title: "Vampire Crawlers: All Characters Unlock Guide & Secrets",
    description:
      "Unlock every character in Vampire Crawlers! Discover all coffin locations, secret glitch methods, kill conditions, and the best starter picks for your deck.",
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
          item: `${siteUrl}/vampire-crawlers`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vampire Crawlers All Characters Unlock Guide",
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
        "Vampire Crawlers All Characters Unlock Guide: Every Regular and Secret Character",
      description:
        "This Vampire Crawlers all characters unlock guide explains how character unlocks work, where to find coffin characters, which boss and card-based unlocks matter, how the party system changes unlock priority, and which characters are best to unlock first.",
      image: [
        `${siteUrl}/images/vampire-crawlers/all-characters-roster.webp`,
        
      ],
      inLanguage: "en",
      dateModified: "2026-04-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Characters",
        },
        {
          "@type": "Thing",
          name: "Secret Characters",
        },
        {
          "@type": "Thing",
          name: "Pugnala Provola",
        },
        {
          "@type": "Thing",
          name: "MissingN0",
        },
        {
          "@type": "Thing",
          name: "Party System",
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
          title="Vampire Crawlers All Characters Unlock Guide: Every Regular and Secret Character"
          description="Want every crawler in Vampire Crawlers? This guide covers all regular and secret character unlock conditions, coffin locations, boss and enemy kill requirements, card-based unlocks, party-system unlock priority, and which characters are best to unlock first."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 23, 2026"
          toc={[
            {
              id: "how-character-unlocks-work-in-vampire-crawlers",
              label: "How unlocks work",
            },
            {
              id: "all-regular-characters-unlock-conditions",
              label: "All regular characters",
            },
            {
              id: "which-characters-should-you-unlock-first",
              label: "Who to unlock first",
            },
            {
              id: "party-system-and-why-it-changes-your-unlock-priority",
              label: "Party system",
            },
            {
              id: "currently-known-secret-characters-and-how-to-unlock-them",
              label: "Secret characters",
            },
            {
              id: "crawler-card-effects-and-why-they-matter",
              label: "Crawler card effects",
            },
            {
              id: "best-characters-to-unlock-for-beginners",
              label: "Best beginner characters",
            },
            {
              id: "do-you-need-specific-maps-relics-or-kill-conditions",
              label: "Maps, relics, and kill conditions",
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
              label: "How Combos and Wildcards Work in Vampire Crawlers",
            },
            {
              href: "/vampire-crawlers/best-early-upgrades",
              label: "Best Early Upgrades in Vampire Crawlers",
            },
            {
                href: "/vampire-crawlers/secret-characters-how-to-unlock",
                label: "How to Unlock Secret Characters",
              },
          ]}
        >
          <VampireCrawlersAllCharactersUnlockGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}