import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestCharactersForBeginnersContent from "@/data/vampire-crawlers/best-characters-for-beginners.mdx";

const siteUrl = "https://www.whisperofthehouse.com/vampire-crawlers";
const pageUrl = `${siteUrl}/best-characters-for-beginners`;

export const metadata: Metadata = {
    title: "Vampire Crawlers: Best Beginner Characters & Who to Unlock",
    description:
      "Discover the best starter characters in Vampire Crawlers! Learn why Antonio and Gennaro dominate early levels, plus top beginner deck setups to survive.",
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
          name: "Vampire Crawlers Best Characters for Beginners",
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
        "Vampire Crawlers Best Characters for Beginners: Who to Unlock and Use First",
      description:
        "This Vampire Crawlers beginner character guide explains which crawlers are best for new players, why some rankings disagree, how combo colors affect character choice, which unlock order is best, and which beginner party setups work best.",
      image: [`${siteUrl}/images/vampire-crawlers/all-characters-roster.png`],
      inLanguage: "en",
      dateModified: "2026-04-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Imelda Belpaese",
        },
        {
          "@type": "Thing",
          name: "Antonio Belpaese",
        },
        {
          "@type": "Thing",
          name: "Pugnala Provola",
        },
        {
          "@type": "Thing",
          name: "Party System",
        },
        {
          "@type": "Thing",
          name: "Combo System",
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
          title="Vampire Crawlers Best Characters for Beginners: Who to Unlock and Use First"
          description="Trying to decide who to use first in Vampire Crawlers? This guide ranks the best beginner characters, explains why Imelda, Antonio, Gennaro, Pugnala, Pasqualina, Poe, and Arca matter, and shows the best early unlock order and beginner party setups."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 23, 2026"
          toc={[
            {
              id: "how-to-pick-the-best-beginner-character-in-vampire-crawlers",
              label: "How to pick",
            },
            {
              id: "why-this-ranking-differs-from-other-beginner-lists",
              label: "Why this ranking differs",
            },
            {
              id: "best-vampire-crawlers-characters-for-beginners-ranked",
              label: "Best beginner characters ranked",
            },
            {
              id: "beginner-friendly-vs-high-ceiling-tier-list-view",
              label: "Beginner vs high-ceiling view",
            },
            {
              id: "character-vs-color-preference-quick-reference",
              label: "Color preference quick reference",
            },
            {
              id: "who-beginners-should-unlock-first",
              label: "Who to unlock first",
            },
            {
              id: "power-ups-to-buy-before-you-force-character-unlocks",
              label: "Power-Ups first",
            },
            {
              id: "how-party-system-changes-beginner-character-choice",
              label: "Party system",
            },
            {
              id: "best-beginner-party-combinations",
              label: "Best beginner parties",
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
              href: "/vampire-crawlers/all-characters-unlock-guide",
              label: "Vampire Crawlers All Characters Unlock Guide",
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
          <BestCharactersForBeginnersContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}