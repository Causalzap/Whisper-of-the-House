import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FinalHarvestContent from "@/data/iron-nest/final-harvest-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/final-harvest-walkthrough`;

const metadataTitle =
  "Iron Nest Final Harvest Walkthrough: Train, CBT & Support";

const metadataDescription =
  "Beat Final Harvest by timing the train shot, pre-planning static targets, managing counter-battery fire, support calls, powder, and stand-down.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-mission-order.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-train-schedule.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-alpha-and-fire-centers.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-preplanned-firing-cards.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-counter-battery-targets.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-live-h-request.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-final-harvest-primary-complete.webp`,
];

const toc = [
  {
    id: "final-harvest-route",
    label: "Final Harvest route",
  },
  {
    id: "train-first",
    label: "Solve the train first",
  },
  {
    id: "use-waiting-window",
    label: "Use the waiting window",
  },
  {
    id: "anti-aircraft-battery",
    label: "AA battery",
  },
  {
    id: "counter-battery-phase",
    label: "Counter-battery phase",
  },
  {
    id: "do-not-chase-every-target",
    label: "Target priorities",
  },
  {
    id: "live-h-support",
    label: "Live H support",
  },
  {
    id: "watch-powder",
    label: "Powder management",
  },
  {
    id: "when-to-buy",
    label: "When to requisition",
  },
  {
    id: "final-harvest-complete",
    label: "When to stand down",
  },
  {
    id: "final-harvest-stuck",
    label: "Common mistakes",
  },
  {
    id: "final-harvest-achievements",
    label: "Achievements",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/fire-on-call-walkthrough",
    label: "Fire on Call Walkthrough",
  },
  {
    href: "/iron-nest/white-shells-endings",
    label: "White Shells — All 4 Endings",
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
    title:
      "Iron Nest Final Harvest Walkthrough: Train, Counter-Battery & Support",
    description:
      "Pre-plan the train and static targets, survive the counter-battery phase, answer live support calls, manage powder, and stop when Final Harvest is complete.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Final Harvest mission order before the last organized resistance outside Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Final Harvest Walkthrough",
    description:
      "Time the train intercept, pre-plan priority targets, survive counter-battery pressure, answer support calls, and know when to stand down.",
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
          name: "Final Harvest Walkthrough",
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
        "Iron Nest Final Harvest Walkthrough: Train Intercept, Counter-Battery Fire, and Live Support",
      description:
        "A player-focused walkthrough for Mission 14 Final Harvest in Iron Nest. The guide explains how to calculate the moving train interception before its deadline, use the waiting window to locate Reference Point Alpha, Enemy Fire Direction Centers and the anti-aircraft battery, pre-plan firing cards before the mission accelerates, switch priorities after the train strike, handle enemy artillery under counter-battery pressure, answer timed H-shell support requests, manage powder during repeated long-range shots, avoid wasting time on low-priority enemies, and recognize the stand-down message that separates required mission progress from optional cleanup.",
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
          name: "Iron Nest Final Harvest",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 14",
        },
        {
          "@type": "Thing",
          name: "Iron Nest train interception",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Counter-Battery Timer",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Fire Direction Center",
        },
        {
          "@type": "Thing",
          name: "Iron Nest fire support",
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
          title="Final Harvest Walkthrough: Train, Counter-Battery, and Support"
          description="Solve the moving train first, use the waiting window to pre-plan static targets, then manage counter-battery pressure and live fire-support calls without losing track of the required objective."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FinalHarvestContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}