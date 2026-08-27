import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TarGolemContent from "@/data/mortal-shell-2/tar-golem.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/tar-golem`;

const metadataTitle =
  "Mortal Shell 2 Tar Golem: How to Beat It & What Happens";

const metadataDescription =
  "Beat the Tar Golem and unlock No, You Still Can't Win, or lose and continue normally. See the fight strategy, retry method, and what happens after either result.";

const articleDescription =
  "A practical Mortal Shell 2 Tar Golem guide covering how to beat the opening boss, whether victory is required, the No You Still Can't Win achievement, what happens after winning or losing, whether the fight is a scripted loss, Perfect Guards, retrying with the rear cliff, Health resets, and whether Tar Golem respawns.";

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
    id: "what-happens-if-you-beat-tar-golem",
    label: "What happens if you win?",
  },
  {
    id: "what-happens-if-you-lose",
    label: "What happens if you lose?",
  },
  {
    id: "how-to-beat-tar-golem",
    label: "How to beat Tar Golem",
  },
  {
    id: "how-to-retry-tar-golem",
    label: "How to retry the fight",
  },
  {
    id: "does-tar-golem-respawn",
    label: "Does Tar Golem respawn?",
  },
  {
    id: "should-you-beat-tar-golem",
    label: "Should you beat it?",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/achievements",
    label: "Achievements Guide",
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
      "Tar Golem is beatable but not mandatory. Learn how to win, unlock No, You Still Can't Win, retry bad attempts, and understand what happens after either outcome.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
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
      "How to beat Tar Golem, unlock No, You Still Can't Win, retry the opening boss, and understand why victory is not required to progress.",
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
        "Mortal Shell 2 Tar Golem: How to Beat It & What Happens",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
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
          name: "Mortal Shell 2 Tar Golem boss",
        },
        {
          "@type": "Thing",
          name: "How to beat Tar Golem",
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
          name: "No, You Still Can't Win",
        },
        {
          "@type": "Thing",
          name: "Tar Golem achievement",
        },
        {
          "@type": "Thing",
          name: "Tar Golem retry",
        },
        {
          "@type": "Thing",
          name: "Tar Golem respawn",
        },
        {
          "@type": "Thing",
          name: "Disciple's Grotto",
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
          title="Tar Golem Guide: How to Beat It, Trophy & What Happens"
          description="The Tar Golem can be beaten, but victory is not required to progress. I explain how to get the No, You Still Can't Win achievement, fight it safely, retry bad attempts, and what happens after either outcome."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
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