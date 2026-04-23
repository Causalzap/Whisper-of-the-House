import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SecretCharactersHowToUnlockContent from "@/data/vampire-crawlers/secret-characters-how-to-unlock.mdx";

const siteUrl = "https://www.whisperofthehouse.com/vampire-crawlers";
const pageUrl = `${siteUrl}/secret-characters-how-to-unlock`;

export const metadata: Metadata = {
  title:
    "Vampire Crawlers Secret Characters How to Unlock: Leda, MissingN0, Red Death, and The Trickster",
  description:
    "Launch-window Vampire Crawlers secret characters guide: currently known hidden character paths, how Leda The Dealer and MissingN0 work, why Red Death is more ambiguous, and how The Trickster fits into the hidden challenge layer.",
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
          name: "Vampire Crawlers Secret Characters How to Unlock",
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
        "Vampire Crawlers Secret Characters How to Unlock: Leda, MissingN0, Red Death, and The Trickster",
      description:
        "This Vampire Crawlers secret characters guide explains what counts as a hidden character, which secret-style unlocks are currently being tracked, how Leda The Dealer and MissingN0 work, why Red Death needs more caution, and how The Trickster fits into the hidden challenge layer.",
      image: [
        `${siteUrl}/images/vampire-crawlers/characters-guide/all-characters-roster.png`,
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
          name: "Leda The Dealer",
        },
        {
          "@type": "Thing",
          name: "MissingN0",
        },
        {
          "@type": "Thing",
          name: "Red Death",
        },
        {
          "@type": "Thing",
          name: "The Trickster",
        },
        {
          "@type": "Thing",
          name: "Secret Characters",
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
          title="Vampire Crawlers Secret Characters How to Unlock: Leda, MissingN0, Red Death, and The Trickster"
          description="Trying to figure out Vampire Crawlers hidden unlocks? This guide covers the currently known secret-style character paths, explains how Leda The Dealer and MissingN0 work, why Red Death needs more caution, and where The Trickster fits into the hidden challenge layer."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 23, 2026"
          toc={[
            {
              id: "what-counts-as-a-secret-character-in-vampire-crawlers",
              label: "What counts as a secret character",
            },
            {
              id: "as-of-launch-what-secret-characters-are-currently-being-tracked",
              label: "Currently tracked hidden unlocks",
            },
            {
              id: "do-secret-characters-appear-in-the-official-unlocks-list",
              label: "Do they appear in Unlocks",
            },
            {
              id: "is-red-death-a-boss-a-secret-character-or-both",
              label: "Red Death explained",
            },
            {
              id: "how-to-unlock-leda-the-dealer",
              label: "How to unlock Leda",
            },
            {
              id: "how-to-unlock-missingn0",
              label: "How to unlock MissingN0",
            },
            {
              id: "what-about-red-death-card-form",
              label: "Red Death (Card Form)",
            },
            {
              id: "which-secret-character-is-easiest-to-chase-first",
              label: "Which is easiest first",
            },
            {
              id: "what-you-should-unlock-before-chasing-secret-characters",
              label: "What to unlock first",
            },
            {
              id: "how-combo-and-trigger-colors-affect-secret-runs",
              label: "Combo and Trigger colors",
            },
            {
              id: "do-you-need-a-full-party-for-secret-runs",
              label: "Do you need a full party",
            },
            {
              id: "the-trickster-hidden-boss-explained",
              label: "The Trickster",
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
              href: "/vampire-crawlers-all-characters-unlock-guide",
              label: "Vampire Crawlers All Characters Unlock Guide",
            },
            {
              href: "/vampire-crawlers-best-characters-for-beginners",
              label: "Vampire Crawlers Best Characters for Beginners",
            },
            {
              href: "/vampire-crawlers-combo-guide",
              label: "How Combos and Wildcards Work in Vampire Crawlers",
            },
          ]}
        >
          <SecretCharactersHowToUnlockContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}