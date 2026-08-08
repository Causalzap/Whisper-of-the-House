import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FireOnCallContent from "@/data/iron-nest/fire-on-call-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/fire-on-call-walkthrough`;

const metadataTitle =
  "Iron Nest Fire on Call Walkthrough: Smoke, Tear & H";

const metadataDescription =
  "Beat Fire on Call with timed support requests, Tear-then-H shots, Smoke repositioning, danger-close AP fire, War Horn timing, and safe completion.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-first-support-call.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-tear-then-h.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-smoke-reposition.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-direct-smoke-request.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-danger-close.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-danger-close-ap.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-fire-on-call-primary-complete.webp`,
];

const toc = [
  {
    id: "fire-on-call-route",
    label: "Fire on Call route",
  },
  {
    id: "prepare-before-war-horn",
    label: "Prepare before War Horn",
  },
  {
    id: "sound-war-horn",
    label: "Start the assault",
  },
  {
    id: "tear-then-h",
    label: "Tear then H",
  },
  {
    id: "keep-second-gun-free",
    label: "Keep one gun flexible",
  },
  {
    id: "move-friendlies-with-smoke",
    label: "Move friendlies with Smoke",
  },
  {
    id: "direct-smoke-calls",
    label: "Direct Smoke calls",
  },
  {
    id: "danger-close",
    label: "Danger-close targets",
  },
  {
    id: "use-ap-danger-close",
    label: "When to use AP",
  },
  {
    id: "deadlines",
    label: "Support deadlines",
  },
  {
    id: "fire-on-call-completion",
    label: "Mission completion",
  },
  {
    id: "fire-on-call-medals",
    label: "Medals",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/dead-reckoning-walkthrough",
    label: "Dead Reckoning Walkthrough",
  },
  {
    href: "/iron-nest/high-tide-walkthrough",
    label: "High Tide Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/final-harvest-walkthrough",
    label: "Final Harvest Walkthrough",
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
      "Iron Nest Fire on Call Walkthrough: Smoke, Tear, H & Danger-Close Fire",
    description:
      "Handle live support calls after the War Horn, reveal hidden strongpoints, reposition friendlies with Smoke, and use precise AP fire when an H blast is unsafe.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Fire on Call mission briefing explaining frontline support requests and Smoke Shell repositioning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Fire on Call Walkthrough",
    description:
      "Answer live support requests with Tear, H and Smoke, protect nearby friendlies, and handle danger-close targets without wasting shots.",
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
          name: "Fire on Call Walkthrough",
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
        "Iron Nest Fire on Call Walkthrough: Smoke Repositioning, Tear-Then-H, and Danger-Close Fire",
      description:
        "A player-focused walkthrough for Mission 10 Fire on Call in Iron Nest. The guide explains how to prepare before sounding the War Horn, how to read timed frontline support requests, why the friendly position should be marked before the hostile target, how Tear-then-H requests work against hidden strongpoints, when leaving one gun free is better than preloading both, how Smoke Shell impacts physically reposition friendly units, why nearby allied units must be checked again after Smoke lands, when a direct Smoke-only request is complete, how to judge extreme danger-close H requests, when a precise AP hit is safer, and when to stand down after Sevilla falls.",
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
          name: "Iron Nest Fire on Call",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 10",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Smoke Shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Tear Shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest War Horn",
        },
        {
          "@type": "Thing",
          name: "Iron Nest danger close",
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
          title="Fire on Call Walkthrough: Smoke, Tear, H, and Danger-Close Fire"
          description="Start the assault only when the Nest is ready, answer each frontline call on its own terms, move friendlies before unsafe H fire, and keep one gun flexible when the next request is unknown."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FireOnCallContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}