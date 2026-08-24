import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EarlyExtractionContent from "@/data/no-more-room-in-hell-2/early-extraction.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/early-extraction`;

const metadataTitle =
  "No More Room in Hell 2 Early Extraction Guide";

const metadataDescription =
  "How Early Extraction works in No More Room in Hell 2, what rewards you keep, Account XP, Credits, progression tradeoffs, and when I leave early.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-early-extraction-hatch.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-early-extraction-wiring.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-early-extraction-active.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-early-extraction-results.webp`,
];

const toc = [
  {
    id: "how-early-extraction-works",
    label: "How Early Extraction works",
  },
  {
    id: "when-early-extraction-is-available",
    label: "When it becomes available",
  },
  {
    id: "how-to-early-extract",
    label: "How to extract early",
  },
  {
    id: "early-extraction-rewards",
    label: "Early Extraction rewards",
  },
  {
    id: "account-xp",
    label: "Account XP",
  },
  {
    id: "early-vs-final-extraction",
    label: "Early vs final extraction",
  },
  {
    id: "when-to-extract-early",
    label: "When I leave early",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/how-to-cure-infection",
    label: "How to Cure Infection",
  },
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/achievements",
    label: "Achievements Guide",
  },
  {
    href: "/no-more-room-in-hell-2/power-plant-walkthrough",
    label: "Power Plant Walkthrough",
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
      "Learn when Early Extraction becomes available, how to use it, what Account XP and Credits can still be earned, and what progression you give up by leaving before final extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "No More Room in Hell 2 Early Extraction hatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Early Extraction explained, including rewards, Account XP, character progression, and when leaving early is worth it.",
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
          name: "No More Room in Hell 2 Guide",
          item: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Early Extraction",
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
        "No More Room in Hell 2 Early Extraction Guide",
      description:
        "A player-focused guide to Early Extraction in No More Room in Hell 2 explaining when extraction becomes available, how the hatch and local access steps work, the difference between Early and Final Extraction rewards, Account XP versus Character XP, Credits and Supplies, and when preserving a Responder is worth ending the run early.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      articleSection: "No More Room in Hell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Early Extraction",
        },
        {
          "@type": "Thing",
          name: "Account XP",
        },
        {
          "@type": "Thing",
          name: "Character XP",
        },
        {
          "@type": "Thing",
          name: "Credits",
        },
        {
          "@type": "Thing",
          name: "Supplies",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Early Extraction: Rewards, XP & When to Leave"
          description="Early Extraction is not the same as completing the mission. I use it when preserving the Responder matters more than gambling on the remaining objectives, while keeping the Account XP and limited rewards that the early exit still awards."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EarlyExtractionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}