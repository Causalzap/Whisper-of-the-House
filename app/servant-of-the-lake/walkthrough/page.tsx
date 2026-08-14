import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeWalkthroughContent from "@/data/servant-of-the-lake/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-1-arrival.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-2-morning.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-3-morning.webp`,
];

const toc = [
  {
    id: "how-i-use-this-walkthrough",
    label: "How I use this walkthrough",
  },
  {
    id: "day-1-walkthrough",
    label: "Day 1 walkthrough",
  },
  {
    id: "day-1-arrival",
    label: "The Arrival",
  },
  {
    id: "day-1-breakfast",
    label: "Preparing Breakfast",
  },
  {
    id: "day-1-aldous",
    label: "Waking up Aldous",
  },
  {
    id: "day-1-afternoon",
    label: "Day 1 afternoon",
  },
  {
    id: "day-1-evening",
    label: "Day 1 evening",
  },
  {
    id: "day-1-night",
    label: "Day 1 night",
  },
  {
    id: "day-2-walkthrough",
    label: "Day 2 walkthrough",
  },
  {
    id: "day-2-coffee",
    label: "Preparing Coffee",
  },
  {
    id: "day-2-william",
    label: "Waking up William",
  },
  {
    id: "day-2-cleaning-floors",
    label: "Cleaning the Floors",
  },
  {
    id: "day-2-hunting",
    label: "Going Hunting",
  },
  {
    id: "day-2-laundry",
    label: "Doing the Washing",
  },
  {
    id: "day-2-bathroom",
    label: "Helping with Bathing",
  },
  {
    id: "day-2-night",
    label: "Day 2 night & Cellar",
  },
  {
    id: "day-3-walkthrough",
    label: "Day 3 walkthrough",
  },
  {
    id: "day-3-cat",
    label: "Looking for the Cat",
  },
  {
    id: "day-3-alchemy",
    label: "Assisting in Alchemy",
  },
  {
    id: "day-3-maintenance",
    label: "Unforeseen Maintenance",
  },
  {
    id: "day-3-dinner",
    label: "Preparing Dinner",
  },
  {
    id: "day-3-dressing",
    label: "Dressing up for Dinner",
  },
  {
    id: "day-3-serving-dinner",
    label: "Serving Dinner",
  },
  {
    id: "day-3-departure",
    label: "The Departure",
  },
  {
    id: "after-main-ending",
    label: "After the main ending",
  },
  {
    id: "shortest-route-rule",
    label: "My shortest route rule",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "Puzzle Solutions",
  },
  {
    href: "/servant-of-the-lake/coffee-puzzle",
    label: "Coffee Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/laundry-puzzle",
    label: "Laundry Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/bathroom-puzzle",
    label: "Bathroom Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/alchemy-puzzle",
    label: "Alchemy Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/achievements",
    label: "Achievements & 100% Guide",
  },
  {
    href: "/servant-of-the-lake/secret-ending",
    label: "Secret Ending Guide",
  },
];

export const metadata: Metadata = {
  title: "Servant of the Lake Walkthrough: Day 1, 2 & 3",
  description:
    "Follow all 24 main tasks across Day 1, Day 2, and Day 3 with progression checkpoints, backtracking advice, and links to exact puzzle solutions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Walkthrough: Day 1, 2 & 3",
    description:
      "Follow the full three-day Servant of the Lake route from The Arrival through Coffee, the Cellar, Alchemy, Dinner, and The Departure.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Beginning the three-day servant job in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Walkthrough: Day 1, 2 & 3",
    description:
      "Follow all 24 main tasks through the three-day story with clear progression checkpoints and links to the major puzzle solutions.",
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
          name: "Servant of the Lake Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "Servant of the Lake Walkthrough: Day 1, 2 & 3",
      description:
        "A complete Servant of the Lake progression walkthrough covering all 24 main tasks across Day 1, Day 2, and Day 3, including when to continue, when to backtrack, which progression items must be collected before leaving a task, how Coffee leads into William, how Laundry and the Bathroom connect, when to enter the Cellar, how Day 3 moves from the Cat search into Alchemy and Dinner, and when to switch to post-game achievement and Secret Ending cleanup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
      mainEntityOfPage: pageUrl,
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake walkthrough",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Day 1",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Day 2",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Day 3",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake progression",
        },
        {
          "@type": "Thing",
          name: "The Departure",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Servant of the Lake Walkthrough"
          description="Follow the full three-day servant route without getting buried in every puzzle at once. I use the Notebook, progression items, and clear handoffs to know when to continue and when to backtrack."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}