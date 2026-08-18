import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DifficultySettingsContent from "@/data/mortal-shell-2/difficulty-settings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/difficulty-settings`;

const metadataTitle =
  "Mortal Shell 2 Difficulty Settings: Slayer Seal & Night";

const metadataDescription =
  "Mortal Shell 2 has no normal Easy mode menu. See how Slayer Seal lowers combat difficulty, its achievement warning, and when I use Standard or Night.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-slayer-seal-difficulty.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-slayer-seal-achievements-warning.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-thestus-night-mode.webp`,
];

const toc = [
  {
    id: "no-normal-difficulty-menu",
    label: "Easy, Normal & Hard?",
  },
  {
    id: "how-i-read-difficulty",
    label: "Difficulty or build problem?",
  },
  {
    id: "slayer-seal",
    label: "Slayer Seal Easy Mode",
  },
  {
    id: "what-slayer-seal-does",
    label: "What Slayer Seal changes",
  },
  {
    id: "achievement-warning",
    label: "Achievement warning",
  },
  {
    id: "when-i-use-slayer-seal",
    label: "When I use Slayer Seal",
  },
  {
    id: "boss-stuck",
    label: "When a boss stops me",
  },
  {
    id: "standard-difficulty",
    label: "Standard difficulty",
  },
  {
    id: "night",
    label: "Night difficulty",
  },
  {
    id: "slayer-vs-night",
    label: "Slayer Seal vs Night",
  },
  {
    id: "which-difficulty",
    label: "Which difficulty I choose",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/night-mode",
    label: "Night Mode Guide",
  },
  {
    href: "/mortal-shell-2/tar-golem",
    label: "Tar Golem Guide",
  },
  {
    href: "/mortal-shell-2/sidearms-guide",
    label: "Sidearms Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Mortal Shell 2 Difficulty: Slayer Seal, Standard & Night",
    description:
      "See how Mortal Shell 2 handles difficulty without an Easy, Normal, or Hard menu, what Slayer Seal changes, and when I switch to Night.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Slayer Seal difficulty tutorial in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Difficulty: Slayer Seal, Standard & Night",
    description:
      "No normal Easy Mode menu? Here is how Slayer Seal changes combat, why achievements matter, and when I stay Standard or use Night.",
    images: [imageUrls[0]],
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Difficulty Settings",
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
        "Mortal Shell 2 Difficulty Settings: Slayer Seal, Standard and Night",
      description:
        "A practical Mortal Shell 2 difficulty guide explaining why there is no traditional Easy, Normal, or Hard selection at the start, how the Slayer Seal reduces combat difficulty through Sidearm Break Damage, riposte recovery and Slayer Punch, why equipping it disables achievements on that save, when I stay with the standard experience, and when Night is the better choice for deliberately harder encounters.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-18",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 difficulty settings",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Easy Mode",
        },
        {
          "@type": "Thing",
          name: "Slayer Seal",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Slayer Seal achievements",
        },
        {
          "@type": "Thing",
          name: "Slayer Punch",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Standard difficulty",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Night Mode",
        },
        {
          "@type": "Thing",
          name: "Thestus",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Actually Change the Difficulty in Mortal Shell 2"
          description="There is no normal Easy, Normal, or Hard menu. I use Standard for progression, Slayer Seal when I want easier combat, and Night when I deliberately want more challenge."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DifficultySettingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}