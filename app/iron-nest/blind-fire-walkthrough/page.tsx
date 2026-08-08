import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlindFireContent from "@/data/iron-nest/blind-fire-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/blind-fire-walkthrough`;

const metadataTitle =
  "Iron Nest Blind Fire Walkthrough: Alpha, Bravo & AA Batteries";

const metadataDescription =
  "Beat Blind Fire by locating Alpha and Bravo, chaining four AA battery positions, managing compounding error, and firing without impact imagery.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-blind-fire-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-blind-fire-reference-alpha.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-blind-fire-first-two-batteries.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-blind-fire-reference-bravo.webp`,
];

const toc = [
  {
    id: "blind-fire-route",
    label: "Blind Fire route",
  },
  {
    id: "why-recon-does-not-work",
    label: "Why recon does not work",
  },
  {
    id: "reference-alpha",
    label: "Reference Point Alpha",
  },
  {
    id: "first-two-shots",
    label: "First two AA batteries",
  },
  {
    id: "reference-bravo",
    label: "Reference Point Bravo",
  },
  {
    id: "battery-three",
    label: "AA Battery 3",
  },
  {
    id: "battery-four",
    label: "AA Battery 4",
  },
  {
    id: "when-to-use-hch",
    label: "When to use HCH",
  },
  {
    id: "no-impact-correction",
    label: "Blind-shot corrections",
  },
  {
    id: "when-to-use-forward-observer",
    label: "Forward Observer",
  },
  {
    id: "when-to-return",
    label: "Where to recalculate",
  },
  {
    id: "blind-fire-completion",
    label: "Completion",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate in Iron Nest",
  },
  {
    href: "/iron-nest/high-tide-walkthrough",
    label: "High Tide Walkthrough",
  },
  {
    href: "/iron-nest/phantom-battery-walkthrough",
    label: "Phantom Battery Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
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
    title: "Iron Nest Blind Fire Walkthrough: Alpha, Bravo & AA Batteries",
    description:
      "Clear Blind Fire without reconnaissance imagery by solving Reference Point Alpha, the first AA batteries, Reference Point Bravo, and the later chained positions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Blind Fire mission briefing explaining the anti-aircraft reconnaissance blackout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Blind Fire Walkthrough",
    description:
      "Locate Alpha and Bravo, solve all four AA batteries, manage chained error, and complete Blind Fire without shell impact imagery.",
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
          name: "Blind Fire Walkthrough",
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
        "Iron Nest Blind Fire Walkthrough: Reference Point Alpha, Bravo, and All Four AA Batteries",
      description:
        "A player-focused walkthrough for Mission 12 Blind Fire in Iron Nest. The guide explains why reconnaissance and shell impact imagery are unavailable while the anti-aircraft network remains active, how to locate Reference Point Alpha, how Alpha leads to the first two AA batteries, how Battery 1 is used to reconstruct Reference Point Bravo, how Bravo and earlier calculated positions lead to Batteries 3 and 4, why positional error compounds through the chain, when a wider destructive shell is useful, when to requisition a Forward Observer, and where to return when a later intersection no longer makes sense.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-08",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "Iron Nest Blind Fire",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 12",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Reference Point Alpha",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Reference Point Bravo",
        },
        {
          "@type": "Thing",
          name: "Iron Nest AA batteries",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Forward Observer",
        },
        {
          "@type": "Thing",
          name: "Iron Nest chained measurements",
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
          title="Blind Fire Walkthrough: Alpha, Bravo, and the Four AA Batteries"
          description="Work through the reconnaissance blackout in order: establish Alpha, clear the cleaner AA positions first, rebuild Bravo, then manage the accumulated uncertainty around the later batteries."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BlindFireContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}