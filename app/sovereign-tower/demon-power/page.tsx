import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DemonPowerContent from "@/data/sovereign-tower/demon-power.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/demon-power`;

const metadataTitle =
  "Sovereign Tower Demon Power Guide: Rewind & Timeline Rules";

const metadataDescription =
  "Learn what Demon Power keeps, how to choose a rewind cycle, why the same outcome can repeat, and when Act checkpoints lock the timeline.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-rewind-rules.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-cycle-selector.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-before-murder.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-wrong-moment-warning.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-act-1-checkpoint.webp`,
];

const toc = [
  {
    id: "how-demon-power-works",
    label: "How Demon Power works",
  },
  {
    id: "what-you-keep",
    label: "What you keep",
  },
  {
    id: "what-rewinds",
    label: "What resets",
  },
  {
    id: "choose-rewind-cycle",
    label: "Choose a rewind point",
  },
  {
    id: "event-markers",
    label: "Before murder markers",
  },
  {
    id: "after-rewind",
    label: "After rewinding",
  },
  {
    id: "audiences-can-change",
    label: "Audience changes",
  },
  {
    id: "why-rewind-fails",
    label: "Why rewind fails",
  },
  {
    id: "when-to-rewind",
    label: "When to rewind",
  },
  {
    id: "act-checkpoints",
    label: "Act checkpoints",
  },
  {
    id: "rewind-achievement",
    label: "10-rewind achievement",
  },
  {
    id: "demon-power-stuck",
    label: "Demon Power troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/gwendan-questline",
    label: "Gwendan Questline & Murder Guide",
  },
  {
    href: "/sovereign-tower/act-1-best-route",
    label: "Act 1 Best Route",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/golden-key",
    label: "Golden Key Guide",
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
    title: "Sovereign Tower Demon Power Guide",
    description:
      "Use Demon Power as a knowledge rewind: keep Knight information, choose the latest useful cycle, troubleshoot repeated outcomes, and stop before Act checkpoints.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Sovereign Tower Demon Power rewind rules explaining what knowledge persists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Demon Power Guide",
    description:
      "Learn what survives a rewind, how to choose the right cycle, and why a bad outcome can repeat even after using Demon Power.",
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
          name: "Demon Power Guide",
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
        "Sovereign Tower Demon Power Guide: Rewind Rules, Timeline Knowledge, and Act Checkpoints",
      description:
        "A player-focused Sovereign Tower Demon Power guide explaining what information survives a rewind, what parts of the timeline must be replayed, how I choose the latest useful cycle or half-cycle, how Before murder markers help identify the correct intervention window, why knowledge-based dialogue can appear after returning to an earlier point, why audience queues may change, what insufficient information or the wrong rewind moment looks like, which consequences are worth rebuilding a timeline for, how Act checkpoints permanently close earlier sequences, and how to track the 10 Demon Power uses needed for It's Rewind Time!.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-09",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Demon Power",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower rewind",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower timeline",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower rewind cycle",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Before murder",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Omniscient dialogue",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act checkpoint",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 1 point of no return",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower It's Rewind Time achievement",
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
          title="Use Demon Power Without Replaying the Same Mistake"
          description="Keep the knowledge that matters, rewind to the latest useful point, watch for new dialogue, and know when the timeline is already too late to change."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DemonPowerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}