import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndingsContent from "@/data/sovereign-tower/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "Sovereign Tower Endings: True Ending & Golden Key Route";

const metadataDescription =
  "See how the Golden Key ending works, why Epicr matters, when to destroy the Tower, and how the standard ending differs with character epilogues.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-endings-arthur-golden-key-epicr-branch.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-endings-prophecy-serpent-clover-key.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-endings-all-counties-golden-key-hunt.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-endings-destroy-the-tower-choice.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-endings-golden-ending-epilogue.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-endings-standard-ending-character-epilogues.webp`,
];

const toc = [
  {
    id: "how-endings-work",
    label: "How endings split",
  },
  {
    id: "endings-start-earlier",
    label: "When the ending route starts",
  },
  {
    id: "golden-ending-route",
    label: "Golden Key ending route",
  },
  {
    id: "destroy-tower-choice",
    label: "Destroy the Tower choice",
  },
  {
    id: "golden-ending-payoff",
    label: "Golden ending payoff",
  },
  {
    id: "standard-ending",
    label: "Standard ending",
  },
  {
    id: "which-ending-first",
    label: "Which ending to see first",
  },
  {
    id: "ending-mistakes",
    label: "Ending mistakes",
  },
  {
    id: "my-verdict",
    label: "Which ending is better?",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/act-3-walkthrough",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/sovereign-tower/golden-key",
    label: "Golden Key Guide",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
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
    title: "Sovereign Tower Endings Guide",
    description:
      "Compare the Golden Key Tower-destruction route with the standard ending, understand Epicr's role, and see why the two finales give different kinds of closure.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Arthur finale branch involving the Golden Key and Epicr in Sovereign Tower",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Endings Guide",
    description:
      "Reach the Golden Key ending, understand the Tower destruction choice, and compare it with the standard character-epilogue ending.",
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
          name: "Sovereign Tower Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endings Guide",
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
        "Sovereign Tower Endings Guide: Golden Key Route, Tower Destruction, and Standard Epilogues",

      description:
        "A player-focused Sovereign Tower endings guide explaining how the late-game ending state develops before the final Arthur confrontation, how the Golden Key and Epicr connect to the special Tower-destruction route, why the decision ultimately becomes a choice about whether the Tower should survive, what happens after the Tower collapses, how that special ending differs from the standard ending, why the standard route provides individual character epilogues, and why keeping a save before the Arthur branch is the easiest way to see both outcomes without replaying the entire late game.",

      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",

      datePublished: "2026-08-15",
      dateModified: "2026-08-15",

      articleSection: "Sovereign Tower Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower endings",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower true ending",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Golden Key ending",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Golden ending",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower standard ending",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower destroy the Tower",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Epicr",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Arthur Pendragon",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower character epilogues",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower best ending",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 3 ending",
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
          title="See the Golden Key Ending and the Standard Character Epilogues"
          description="Reach Arthur with the ending state you want, understand how the Golden Key and Epicr lead into the Tower decision, and keep a save if you want to compare the special finale with the standard character epilogues."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}