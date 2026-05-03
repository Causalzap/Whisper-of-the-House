import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MagicalPrincessCareerEndingsRequirementsContent from "@/data/magical-princess/career-endings-requirements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/magical-princess/career-endings-requirements`;

export const metadata: Metadata = {
  title: "Magical Princess Career Endings Requirements Guide",
  description:
    "Plan Magical Princess career endings by STA, INT, CHA, SEN, Renown, Morality, and special conditions for Brave Hero, General, Archmage, Magnate, and more.",
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
          name: "Magical Princess Endings Guide",
          item: `${siteUrl}/magical-princess/endings-guide`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Career Endings Requirements Guide",
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
      headline: "Magical Princess Career Endings Requirements Guide",
      description:
        "This Magical Princess guide explains how career endings work, including STA, INT, CHA, SEN, Renown, Morality, special conditions, 5-star career patterns, dark endings, and why players get the wrong graduation result.",
      image: [
        `${siteUrl}/images/magical-princess/lord-ending-result.webp`,
        `${siteUrl}/images/magical-princess/red-moon-protect-city-choice.webp`,
        `${siteUrl}/images/magical-princess/ng-plus-replay-blessings.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
      about: [
        {
          "@type": "VideoGame",
          name: "Magical Princess",
        },
        {
          "@type": "Thing",
          name: "Magical Princess career endings",
        },
        {
          "@type": "Thing",
          name: "Career ending requirements",
        },
        {
          "@type": "Thing",
          name: "STA",
        },
        {
          "@type": "Thing",
          name: "INT",
        },
        {
          "@type": "Thing",
          name: "CHA",
        },
        {
          "@type": "Thing",
          name: "SEN",
        },
        {
          "@type": "Thing",
          name: "Renown",
        },
        {
          "@type": "Thing",
          name: "Reputation",
        },
        {
          "@type": "Thing",
          name: "Morality",
        },
        {
          "@type": "Thing",
          name: "Brave Hero",
        },
        {
          "@type": "Thing",
          name: "General",
        },
        {
          "@type": "Thing",
          name: "Archmage",
        },
        {
          "@type": "Thing",
          name: "Magnate",
        },
        {
          "@type": "Thing",
          name: "Dark Knight",
        },
        {
          "@type": "Thing",
          name: "Mafia Boss",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What decides career endings in Magical Princess?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Career endings are decided by main stats, Renown or Reputation, Morality, and special conditions. For some endings, the special condition matters as much as the stat threshold.",
          },
        },
        {
          "@type": "Question",
          name: "What are the four main career stats?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The four main stats are STA, INT, CHA, and SEN. STA supports combat routes, INT supports magic and scholar routes, CHA supports social and royal routes, and SEN supports arts, luck-adjacent, and festival-related routes.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I get General wrong even with high STA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "General requires participation in every Red Moon battle. High STA alone is not enough if you missed the Red Moon battle condition.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Brave Hero?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Brave Hero requires STA 5000, INT 2000, CHA 2000, SEN 2000, Reputation 400, Good/Evil 60 or higher, and Demon or Illusion Dragon clear.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Archmage?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Archmage requires INT 5000, Magic 1500, Reputation 350, Good/Evil 30 or higher, and School Magic Tournament victory.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Magnate?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Magnate requires accumulating 50,000 Gold. Do not confuse this with a separate income stat.",
          },
        },
        {
          "@type": "Question",
          name: "How do I avoid dark endings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Avoid pushing morality too low, and avoid dark-route actions such as theft, gambling-heavy routes, street-fight routes, forbidden food routes, or evil-state routing unless you are aiming for a dark ending.",
          },
        },
        {
          "@type": "Question",
          name: "Can partner endings block career endings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. If a partner route takes final priority, it can override normal career cleanup. Use separate saves for romance endings.",
          },
        },
        {
          "@type": "Question",
          name: "Do career endings need Forbidden Research?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Forbidden Research is part of the hidden Library and Labyrinth route, not normal career endings.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check before graduation?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check your target career in the in-game Gallery or Professions screen, confirm the main stat, Renown or Reputation, Morality, and special condition, then save before the final result.",
          },
        },
      ],
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
          title="Magical Princess Career Endings Requirements Guide"
          description="Plan career endings by STA, INT, CHA, SEN, Renown, Morality, and special conditions. Use this guide to avoid wrong graduation results."
          gameTitle="Magical Princess"
          gameHref="/magical-princess/endings-guide"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "how-career-endings-work",
              label: "How career endings work",
            },
            {
              id: "all-career-ending-requirements",
              label: "Requirements table",
            },
            {
              id: "stat-routes",
              label: "Stat routes",
            },
            {
              id: "five-star-endings",
              label: "5-star endings",
            },
            {
              id: "renown-and-morality",
              label: "Renown & Morality",
            },
            {
              id: "combat-endings",
              label: "Combat endings",
            },
            {
              id: "magic-and-faith-endings",
              label: "Magic & Faith",
            },
            {
              id: "social-and-arts-endings",
              label: "Social & Arts",
            },
            {
              id: "business-and-underworld-endings",
              label: "Business & Underworld",
            },
            {
              id: "why-you-got-the-wrong-career-ending",
              label: "Wrong ending",
            },
            {
              id: "career-vs-secret-routes",
              label: "Career vs secret routes",
            },
            {
              id: "related-guides-table",
              label: "Related guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/magical-princess/endings-guide",
              label: "Magical Princess Endings Guide",
            },
            {
              href: "/magical-princess/two-queens-ending-guide",
              label: "Two Queens Ending Guide",
            },
            {
              href: "/magical-princess/forbidden-research-guide",
              label: "Forbidden Research Guide",
            },
            {
              href: "/magical-princess/true-ending-heir-of-the-stargazer",
              label: "True Ending / Heir of the Stargazer Guide",
            },
            {
              href: "/magical-princess/golden-ending-guide",
              label: "Golden Ending Guide",
            },
          ]}
        >
          <MagicalPrincessCareerEndingsRequirementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}