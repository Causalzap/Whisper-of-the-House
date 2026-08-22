import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TarGolemContent from "@/data/mortal-shell-2/tar-golem.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/tar-golem`;

const metadataTitle =
  "Mortal Shell 2 Tar Golem: Can You Beat It & What Happens?";

const metadataDescription =
  "Can you beat the Tar Golem in Mortal Shell 2? Learn whether the fight is mandatory, what happens if you win or lose, and how to retry bad attempts.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-first-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-first-attempt.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-retry-cliff.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-fresh-retry.webp`,
];

const toc = [
  {
    id: "can-you-beat-tar-golem",
    label: "Can you beat Tar Golem?",
  },
  {
    id: "do-you-have-to-beat-tar-golem",
    label: "Do you have to beat it?",
  },
  {
    id: "is-tar-golem-scripted-loss",
    label: "Is it a scripted loss?",
  },
  {
    id: "what-happens-if-you-lose",
    label: "What happens if you lose?",
  },
  {
    id: "what-happens-if-you-beat-tar-golem",
    label: "What happens if you win?",
  },
  {
    id: "should-you-beat-tar-golem",
    label: "Should you beat Tar Golem?",
  },
  {
    id: "how-to-retry-tar-golem",
    label: "How to retry the fight",
  },
  {
    id: "does-tar-golem-health-reset",
    label: "Does Tar Golem health reset?",
  },
  {
    id: "how-to-beat-tar-golem",
    label: "How to beat Tar Golem",
  },
  {
    id: "tar-golem-first-attempt",
    label: "What to learn first",
  },
  {
    id: "tar-golem-no-healing",
    label: "Fighting without healing",
  },
  {
    id: "when-to-reset-tar-golem",
    label: "When to reset",
  },
  {
    id: "tar-golem-keeps-killing-me",
    label: "If Tar Golem keeps killing you",
  },
  {
    id: "tar-golem-win-vs-loss",
    label: "Win vs loss",
  },
  {
    id: "tar-golem-faq",
    label: "Tar Golem FAQ",
  },
  {
    id: "tar-golem-decision",
    label: "My Tar Golem rule",
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
    href: "/mortal-shell-2/difficulty-settings",
    label: "Difficulty Settings Guide",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Tier List",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
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
    title: metadataTitle,
    description:
      "The Tar Golem can be beaten, but victory is not required. See what happens after a win or loss, how the scripted-loss question works, and how to retry the fight.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-22",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tar Golem opening boss fight in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Can you beat Tar Golem, do you have to win, what happens after a loss, and how do retries work? Here's the full opening boss answer.",
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
          name: "Tar Golem Guide",
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
        "Mortal Shell 2 Tar Golem: Can You Beat It & What Happens?",
      description:
        "A complete Mortal Shell 2 Tar Golem guide explaining whether the opening boss can be beaten, whether victory is required, whether the fight is a scripted loss, what happens after winning or losing, how to retry using the rear cliff, why the boss returns to full Health, and how to approach the fight if you want the win.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-22",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Tar Golem",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Tar Golem",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 opening boss",
        },
        {
          "@type": "Thing",
          name: "Can you beat Tar Golem",
        },
        {
          "@type": "Thing",
          name: "Do you have to beat Tar Golem",
        },
        {
          "@type": "Thing",
          name: "Tar Golem scripted loss",
        },
        {
          "@type": "Thing",
          name: "Tar Golem win",
        },
        {
          "@type": "Thing",
          name: "Tar Golem loss",
        },
        {
          "@type": "Thing",
          name: "Tar Golem retry",
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
          title="Mortal Shell 2 Tar Golem: Can You Beat It & What Happens?"
          description="Yes, the Tar Golem can be beaten, but I do not need to win to continue. I explain what happens after either result, how retries work, and how I approach the fight when I actually want the kill."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TarGolemContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}