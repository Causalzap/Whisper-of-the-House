import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeWalkthroughContent from "@/data/servant-of-the-lake/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Servant of the Lake Walkthrough: All 24 Tasks (Day 1–3)";

const metadataDescription =
  "Follow all 24 Servant of the Lake tasks from The Arrival to The Departure, with Day 1–3 routes, progression items, checkpoints, and stuck fixes.";

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-1-arrival.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-2-morning.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-3-morning.webp`,
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
      "Complete the full three-day Servant of the Lake route across all 24 main tasks, from The Arrival through the Cellar, Alchemy, Dinner, and The Departure.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-15",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "The Arrival at the Vanderboom estate in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Follow all 24 main tasks across Day 1, Day 2, and Day 3 with progression checkpoints, key handoffs, and stuck fixes.",
    images: [imageUrls[0]],
  },
};

const toc = [
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
    id: "day-1-reception",
    label: "Preparing the Reception",
  },
  {
    id: "day-1-guests",
    label: "Welcoming the Guests",
  },
  {
    id: "day-1-tea",
    label: "Serving Tea",
  },
  {
    id: "day-1-reunion",
    label: "Opening the Reunion",
  },
  {
    id: "day-1-night-watch",
    label: "The Night Watch",
  },
  {
    id: "day-1-attic",
    label: "Searching the Attic",
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
    id: "day-2-night-duties",
    label: "Night Time Duties",
  },
  {
    id: "day-2-cellar",
    label: "Inspecting the Cellar",
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
    id: "walkthrough-stuck",
    label: "If I'm stuck",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "All Puzzle Solutions",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      url: pageUrl,
      headline:
        "Servant of the Lake Walkthrough: All 24 Tasks Across Day 1, Day 2 and Day 3",
      description:
        "A complete Servant of the Lake walkthrough covering all 24 main-story tasks from The Arrival to The Departure, including Day 1 estate duties, Day 2 progression handoffs such as the Bathroom Key and Bronze Time Piece, the Cellar route, Day 3 Alchemy and dinner progression, completion checkpoints, backtracking decisions, and post-game routes for achievements and the Secret Ending.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-15",
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
          name: "Servant of the Lake 24 tasks",
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
          title="Servant of the Lake Full Walkthrough"
          description="I follow all 24 main tasks across Day 1, Day 2, and Day 3, using the Notebook, progression items, and clear completion checkpoints to know where to go next."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
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