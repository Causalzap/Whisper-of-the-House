import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Directive8020MonsterContent from "@/data/directive-8020/all-monster-scenes-alien-duplicates.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/directive-8020/all-monster-scenes-alien-duplicates`;

export const metadata: Metadata = {
    title: "Directive 8020 Mimic Guide: Two Eisele & Duplicates",
    description:
      "Master mimic encounters in Directive 8020. Learn which Eisele is fake, how to use the scanner, and avoid contaminated endings in all monster scenes.",
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
          name: "Monster Scenes and Alien Duplicates",
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
        "Directive 8020 Mimic Guide: Two Eisele, Scanner, Monster Scenes and Alien Duplicates",
      description:
        "A player-first Directive 8020 guide for mimic and duplicate scenes, including the two Eisele choice, scanner verification, Episode 3 route-state checks, Turning Points, contaminated endings, and monster-scene cleanup.",
      image: [
        `${siteUrl}/images/directive-8020/directive-8020-two-eiseles-choice.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-biometric-scanner-mimic.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-search-party-split.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-power-cell-route.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-sample-argument.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-save-your-souls-rewind.webp`,
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
          name: "Mimics",
        },
        {
          "@type": "Thing",
          name: "Alien Duplicates",
        },
        {
          "@type": "Thing",
          name: "Two Eisele Scene",
        },
        {
          "@type": "Thing",
          name: "Scanner Verification",
        },
        {
          "@type": "Thing",
          name: "Turning Points",
        },
        {
          "@type": "Thing",
          name: "Monster Scenes",
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
          name: "Which Eisele is fake in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The left Eisele is fake. The newcomer is real.",
          },
        },
        {
          "@type": "Question",
          name: "Should I shoot or test in the two Eisele scene?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose Test. Shooting immediately is the panic route and can lead to the wrong outcome.",
          },
        },
        {
          "@type": "Question",
          name: "How do I identify a mimic in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use scanner verification or Test whenever the game gives you that option. Do not rely only on voice, appearance, or urgency.",
          },
        },
        {
          "@type": "Question",
          name: "Should I authorize the weapon in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For the safer survival route, refuse the weapon. Weapon branches are better for cleanup routes.",
          },
        },
        {
          "@type": "Question",
          name: "What does Eisele Double mean in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Eisele Double is a consequence state tied to the duplicate encounter. If you see this state, check the two Eisele scene and make sure you used Test or scanner logic instead of reacting with Shoot.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Episode 3 matter in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Episode 3 creates the search-party split, power-cell route, sample pressure, and isolation setup that later mimic and survival scenes build on.",
          },
        },
        {
          "@type": "Question",
          name: "Can you stop Williams from taking the sample?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not cleanly. Cooper can push back, but Williams still drives the group toward taking the sample.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Eisele die later in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the immediate scene first, then work backward to earlier Stafford or identity pressure and Episode 3 route state.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Cernan die later in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the Cernan / Williams route and earlier pressure states before replaying only the late death scene.",
          },
        },
        {
          "@type": "Question",
          name: "What does Save Your Souls mean in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save Your Souls is an outcome / rewind prompt. Use it to go back before a major consequence becomes locked into your route.",
          },
        },
        {
          "@type": "Question",
          name: "What does Docked / Not Alone mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Docked / Not Alone means the route reaches a docked-style outcome, but an alien, intruder, or duplicate condition is still unresolved.",
          },
        },
        {
          "@type": "Question",
          name: "What collectible explains the mimic system best?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Secret #45 — Duplication Analysis is the strongest collectible connection to the duplicate storyline.",
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
          title="Directive 8020 Mimic Guide: Two Eisele, Scanner, Monster Scenes and Alien Duplicates"
          description="Find the direct answers for Directive 8020’s mimic and duplicate scenes, including which Eisele is fake, whether to Shoot or Test, how scanner verification works, why Episode 3 matters, and how contaminated endings happen."
          gameTitle="Directive 8020"
          gameHref="/directive-8020"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "direct-answers",
              label: "Direct answers",
            },
            {
              id: "two-eiseles",
              label: "Which Eisele is fake",
            },
            {
              id: "scanner-verification",
              label: "Scanner verification",
            },
            {
              id: "episode-3-choices",
              label: "Episode 3 choices",
            },
            {
              id: "power-cell-route",
              label: "Power-cell route",
            },
            {
              id: "sample-argument",
              label: "Sample argument",
            },
            {
              id: "episode-6-deaths",
              label: "Episode 6 deaths",
            },
            {
              id: "turning-points",
              label: "Turning Points",
            },
            {
              id: "contaminated-endings",
              label: "Contaminated endings",
            },
            {
              id: "episode-breakdown",
              label: "Episode checklist",
            },
            {
              id: "collectibles",
              label: "Related collectibles",
            },
            {
              id: "what-to-read-next",
              label: "Read next",
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
              href: "/directive-8020/choices-consequences",
              label: "Directive 8020 Choices and Consequences Guide",
            },
            {
              href: "/directive-8020/character-survival-guide",
              label: "How to Keep Every Character Alive in Directive 8020",
            },
            {
              href: "/directive-8020/all-endings",
              label: "Directive 8020 All Endings Guide",
            },
            {
              href: "/directive-8020/all-secrets-simms-recordings-o-death",
              label: "Directive 8020 All Secrets, Simms Recordings, and O Death Locations",
            },
          ]}
        >
          <Directive8020MonsterContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}