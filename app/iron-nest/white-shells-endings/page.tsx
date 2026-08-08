import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WhiteShellsContent from "@/data/iron-nest/white-shells-endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/white-shells-endings`;

const metadataTitle =
  "Iron Nest White Shells Endings Guide: All 4 Endings";

const metadataDescription =
  "Unlock all four White Shells endings in Iron Nest: PRPG, chemical submission, Atomic destruction, and The Road Not Taken betrayal route.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-mission-order.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-propaganda-shell.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-celebration-ending.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-atomic-ending.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-subdued-ending.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-traitor-preplanned-targets.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-traitor-retaliation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-white-shells-road-not-taken-ending.webp`,
];

const toc = [
  {
    id: "all-endings",
    label: "All four endings",
  },
  {
    id: "before-choosing",
    label: "Before choosing",
  },
  {
    id: "city-in-celebration",
    label: "A City in Celebration",
  },
  {
    id: "city-silent",
    label: "A City Silent",
  },
  {
    id: "city-subdued",
    label: "A City Subdued",
  },
  {
    id: "road-not-taken",
    label: "The Road Not Taken",
  },
  {
    id: "do-not-nuke-own-command",
    label: "Do not waste Atomic",
  },
  {
    id: "betrayal-preparation",
    label: "Prepare betrayal route",
  },
  {
    id: "what-to-buy-before-betrayal",
    label: "What to buy first",
  },
  {
    id: "betrayal-target-priority",
    label: "Retaliation priorities",
  },
  {
    id: "why-betrayal-fails",
    label: "Why betrayal can fail",
  },
  {
    id: "best-order",
    label: "Best ending order",
  },
  {
    id: "ending-not-triggering",
    label: "Ending not triggering",
  },
  {
    id: "white-shells-achievements",
    label: "Ending achievements",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/final-harvest-walkthrough",
    label: "Final Harvest Walkthrough",
  },
  {
    href: "/iron-nest/phantom-battery-walkthrough",
    label: "Phantom Battery Walkthrough",
  },
  {
    href: "/iron-nest/fire-on-call-walkthrough",
    label: "Fire on Call Walkthrough",
  },
  {
    href: "/iron-nest",
    label: "Iron Nest Guide & All Missions",
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
    title: "Iron Nest White Shells Endings Guide: All 4 Endings",
    description:
      "See every White Shells ending: propaganda, chemical submission, Atomic destruction, and The Road Not Taken route where Iron Nest turns against High Command.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest White Shells final mission order over Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest White Shells — All 4 Endings",
    description:
      "Unlock A City in Celebration, A City Subdued, The Road Not Taken, and A City Silent in the final White Shells mission.",
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
          name: "Iron Nest Guide",
          item: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "White Shells Endings",
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
        "Iron Nest White Shells Endings Guide: How to Get All Four Endings",
      description:
        "A player-focused guide to Mission 15 White Shells and all four confirmed Iron Nest endings. It explains how PRPG triggers A City in Celebration, how the chemical route produces A City Subdued, how the Atomic shell leads to A City Silent, and why The Road Not Taken requires more than simply attacking High Command. The betrayal route section covers scouting and pre-planning the friendly military positions that later retaliate, buying shells and powder before turning hostile, avoiding the expensive Atomic shell as the opening betrayal shot, prioritizing artillery that can actually damage Iron Nest, adapting to additional retaliation targets, and resolving the fourth ending after surviving the consequences of attacking command.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-08",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Endings",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "Iron Nest White Shells",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 15",
        },
        {
          "@type": "Thing",
          name: "Iron Nest endings",
        },
        {
          "@type": "Thing",
          name: "A City in Celebration",
        },
        {
          "@type": "Thing",
          name: "A City Subdued",
        },
        {
          "@type": "Thing",
          name: "The Road Not Taken",
        },
        {
          "@type": "Thing",
          name: "A City Silent",
        },
        {
          "@type": "Thing",
          name: "Iron Nest PRPG",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Atomic shell",
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
      "@type": "ItemList",
      "@id": `${pageUrl}#endings`,
      name: "Iron Nest White Shells Endings",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "A City in Celebration",
          url: `${pageUrl}#city-in-celebration`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "A City Subdued",
          url: `${pageUrl}#city-subdued`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Road Not Taken",
          url: `${pageUrl}#road-not-taken`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "A City Silent",
          url: `${pageUrl}#city-silent`,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="White Shells Endings Guide: How to Get All 4 Endings"
          description="Use PRPG, chemical ammunition, or Atomic against Barcelona for three endings, then prepare the separate betrayal route before turning Iron Nest against High Command."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WhiteShellsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}