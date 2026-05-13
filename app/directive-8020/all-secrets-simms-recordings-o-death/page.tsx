import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Directive8020CollectiblesContent from "@/data/directive-8020/all-secrets-simms-recordings-o-death.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/directive-8020/all-secrets-simms-recordings-o-death`;

export const metadata: Metadata = {
  title:
    "Directive 8020 Collectibles Guide: All Secrets, Simms Recordings & O Death",
  description:
    "Complete Directive 8020 collectibles guide covering all 50 Secrets, 10 Simms Recordings, 5 O Death items, missable rules, episode cleanup, and story links.",
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
          name: "Directive 8020 Guide",
          item: `${siteUrl}/directive-8020`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Secrets, Simms Recordings, and O Death",
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
        "Directive 8020 Collectibles Guide: All Secrets, Simms Recordings and O Death",
      description:
        "A complete Directive 8020 collectibles guide for all 50 Secrets, 10 Simms Recordings, and 5 O Death collectibles, including episode-by-episode cleanup, missable rules, story links, and Simms Recording explanation.",
      image: [
        `${siteUrl}/images/directive-8020/directive-8020-secret-stalemate.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-simms-recording-green-tea.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-secret-charybdis-drugs.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-secret-duplication-analysis.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-secret-williams-2-0.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-o-death-bowler-hat.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Directive 8020",
        },
        {
          "@type": "Thing",
          name: "Secrets",
        },
        {
          "@type": "Thing",
          name: "Simms Recordings",
        },
        {
          "@type": "Thing",
          name: "O Death Collectibles",
        },
        {
          "@type": "Thing",
          name: "Collectibles Guide",
        },
        {
          "@type": "Thing",
          name: "Duplication Analysis",
        },
        {
          "@type": "Thing",
          name: "Williams 2.0",
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
          name: "How many Secrets are in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 50 Secrets in Directive 8020.",
          },
        },
        {
          "@type": "Question",
          name: "How many Simms Recordings are in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 10 Simms Recordings in Directive 8020.",
          },
        },
        {
          "@type": "Question",
          name: "How many O Death collectibles are in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 5 O Death collectibles in Directive 8020.",
          },
        },
        {
          "@type": "Question",
          name: "Are collectibles missable in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Treat every collectible as run-missable once you leave its section, but missed items can be recovered through episode replay or Turning Points cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Does Episode 4 have collectibles in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This route lists no collectibles in Episode 4.",
          },
        },
        {
          "@type": "Question",
          name: "What is Secret #35 in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Secret #35 is Love Lost in Episode 5 — Radio Silence.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most important Secret for the mimic storyline?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Secret #45 — Duplication Analysis is the most important collectible for the mimic / duplicate storyline.",
          },
        },
        {
          "@type": "Question",
          name: "What does Williams 2.0 connect to?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Williams 2.0 connects to late-game conspiracy, replacement horror, and the duplicate / identity themes.",
          },
        },
        {
          "@type": "Question",
          name: "Are Simms Recordings separate from Secrets?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Simms Recordings should be tracked separately from the 50 Secrets.",
          },
        },
        {
          "@type": "Question",
          name: "Should I collect everything on my first run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not if it risks your survival route. Finish your first route cleanly, then use episode cleanup for missed collectibles.",
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
          title="Directive 8020 Collectibles Guide: All Secrets, Simms Recordings and O Death"
          description="Find every Directive 8020 collectible, including all 50 Secrets, 10 Simms Recordings, and 5 O Death items. Includes missable rules, episode cleanup, Simms Recording story order, and key story links for endings, mimics, and character survival."
          gameTitle="Directive 8020"
          gameHref="/directive-8020"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "collectible-totals",
              label: "Collectible totals",
            },
            {
              id: "missable-rules",
              label: "Missable rules",
            },
            {
              id: "episode-overview",
              label: "Episode overview",
            },
            {
              id: "episode-1",
              label: "Episode 1",
            },
            {
              id: "episode-2",
              label: "Episode 2",
            },
            {
              id: "episode-3",
              label: "Episode 3",
            },
            {
              id: "episode-4",
              label: "Episode 4",
            },
            {
              id: "episode-5",
              label: "Episode 5",
            },
            {
              id: "episode-6",
              label: "Episode 6",
            },
            {
              id: "episode-7",
              label: "Episode 7",
            },
            {
              id: "episode-8",
              label: "Episode 8",
            },
            {
              id: "simms-recordings-explained",
              label: "Simms Recordings",
            },
            {
              id: "o-death-locations",
              label: "O Death",
            },
            {
              id: "story-links",
              label: "Story links",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/directive-8020",
              label: "Directive 8020 Save Everyone Guide",
            },
            {
              href: "/directive-8020/all-endings",
              label: "Directive 8020 All Endings Guide",
            },
            {
              href: "/directive-8020/choices-consequences",
              label: "Directive 8020 Choices and Consequences Guide",
            },
            {
              href: "/directive-8020/character-survival-guide",
              label: "How to Keep Every Character Alive in Directive 8020",
            },
            {
              href: "/directive-8020/all-monster-scenes-alien-duplicates",
              label: "Directive 8020 Monster Scenes and Alien Duplicates Guide",
            },
          ]}
        >
          <Directive8020CollectiblesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}