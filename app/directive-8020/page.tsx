import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Directive8020HubContent from "@/data/directive-8020/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/directive-8020`;

export const metadata: Metadata = {
    title: "Directive 8020 Guide: Save Everyone, Endings & Secrets",
    description:
      "Complete Directive 8020 guide hub. Learn how to save everyone, make the best choices, solve puzzles, and find all collectibles, O Deaths & Mimic scenes.",
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
      "Directive 8020 Guide: Save Everyone, Choices, Endings, Secrets and Mimics",
    description:
      "A complete Directive 8020 guide hub for saving everyone, understanding key choices, Ep2 power routing, Episode 5 Ice and Fire, Two Eisele, mimic scenes, endings, collectibles, Simms Recordings, and O Death cleanup.",
        image: [
        `${siteUrl}/images/directive-8020/directive-8020-everyone-lives-ending.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-biometric-scanner-mimic.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-two-eiseles-choice.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-sample-argument.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-docked-not-alone-ending.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-secret-duplication-analysis.webp`,
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
          name: "Save Everyone",
        },
        {
          "@type": "Thing",
          name: "Choices and Consequences",
        },
        {
          "@type": "Thing",
          name: "Ice and Fire",
        },
        {
          "@type": "Thing",
          name: "Two Eisele",
        },
        {
          "@type": "Thing",
          name: "Mimics",
        },
        {
          "@type": "Thing",
          name: "All Endings",
        },
        {
          "@type": "Thing",
          name: "Collectibles",
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
          name: "Can you save everyone in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can save the active crew and reach a clean survival route.",
          },
        },
        {
          "@type": "Question",
          name: "Can you save Carter in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Carter is part of the opening mystery and is not a normal active-crew survival target.",
          },
        },
        {
          "@type": "Question",
          name: "Can you save Sims in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No, not like a normal crew member. Sims is tied to the sleep crew mystery, recordings, and mimic setup.",
          },
        },
        {
          "@type": "Question",
          name: "Which Eisele is fake in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The left Eisele is fake. The newcomer is real. Choose Test instead of Shoot.",
          },
        },
        {
          "@type": "Question",
          name: "Should I play Explorer or Survivor in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Explorer is better for first-route cleanup. Survivor is stricter and should be treated as a consequence-heavy run.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Episode 2 power routing matter in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Episode 2 power routing can affect the Episode 5 Ice and Fire route, where Anders and Mitchell are at risk.",
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
          name: "What should I read first for Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the guide hub and key choice checklist. If someone dies, open the Character Survival Guide. If a duplicate scene goes wrong, open the Monster Scenes and Alien Duplicates Guide.",
          },
        },
        {
          "@type": "Question",
          name: "Should I collect everything on my first Directive 8020 run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not if it risks survival. Save the crew first, then use the collectibles guide for cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after Everyone Lives in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the All Endings Guide for final-message, intruder, Beacon, Docked / Not Alone, Hitchhiker, Homeward Bound, Game Over, and Everyone Dies cleanup.",
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
          title="Directive 8020 Guide: Save Everyone, Choices, Endings, Secrets and Mimics"
          description="Start here for Directive 8020. Learn the key choices for saving everyone, including Ep2 power routing, Episode 5 Ice and Fire, Two Eisele, final message, Explorer vs Survivor, endings, collectibles, and mimic cleanup."
          gameTitle="Directive 8020"
          gameHref="/directive-8020"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "can-you-save-everyone",
              label: "Save everyone",
            },
            {
              id: "key-choices",
              label: "Key choices",
            },
            {
              id: "how-to-use-this-hub",
              label: "Guide order",
            },
            {
              id: "explorer-vs-survivor",
              label: "Explorer vs Survivor",
            },
            {
              id: "episode-priorities",
              label: "Episode priorities",
            },
            {
              id: "ice-and-fire",
              label: "Ice and Fire",
            },
            {
              id: "collectibles",
              label: "Collectibles",
            },
            {
              id: "what-guide-should-i-open",
              label: "Guide picker",
            },
            {
              id: "main-guides",
              label: "Main guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
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
          <Directive8020HubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}