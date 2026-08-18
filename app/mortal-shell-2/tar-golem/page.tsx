import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TarGolemContent from "@/data/mortal-shell-2/tar-golem.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/tar-golem`;

const metadataTitle =
  "Mortal Shell 2 Tar Golem Guide: Must You Beat It?";

const metadataDescription =
  "Learn whether you must beat the Tar Golem in Mortal Shell 2, what happens if you win or lose, how to retry the fight, and whether boss health resets.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-first-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-first-attempt.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-retry-cliff.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tar-golem-fresh-retry.webp`,
];

const toc = [
  {
    id: "do-you-have-to-beat-tar-golem",
    label: "Do you have to beat Tar Golem?",
  },
  {
    id: "is-it-scripted-loss",
    label: "Is it a scripted loss?",
  },
  {
    id: "what-happens-if-you-lose",
    label: "What happens if you lose?",
  },
  {
    id: "what-happens-if-you-win",
    label: "What happens if you win?",
  },
  {
    id: "how-to-retry",
    label: "How to retry the fight",
  },
  {
    id: "boss-health-resets",
    label: "Does boss health reset?",
  },
  {
    id: "how-i-fight-tar-golem",
    label: "How I fight Tar Golem",
  },
  {
    id: "when-i-reset",
    label: "When I reset an attempt",
  },
  {
    id: "should-you-beat-it",
    label: "Is beating Tar Golem worth it?",
  },
  {
    id: "my-rule",
    label: "My opening boss rule",
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
    title: "Mortal Shell 2 Tar Golem: Do You Have to Beat It?",
    description:
      "The Tar Golem is winnable, but losing does not stop progression. See what happens after a win or loss and how I reset the opening fight.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        alt: "Tar Golem opening boss fight in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Tar Golem: Must You Beat the First Boss?",
    description:
      "Find out whether Tar Golem is mandatory, whether it is a scripted loss, what winning changes, and how to retry with a fresh health bar.",
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
        "Mortal Shell 2 Tar Golem Guide: Must You Beat the Opening Boss?",
      description:
        "A practical Mortal Shell 2 Tar Golem guide explaining whether the opening boss is mandatory, why I treat it as a winnable fight with an expected loss, what happens after winning or losing, how to reset the encounter using the rear cliff, why boss health returns to full on a retry, and when I think the opening challenge is worth repeating.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
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
          name: "Tar Golem scripted loss",
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
          title="Do I Actually Have to Beat the Tar Golem?"
          description="No. The opening boss is winnable, but losing still moves the story forward. I only keep retrying when I specifically want the challenge."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
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