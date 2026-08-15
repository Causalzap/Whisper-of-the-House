import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeContent from "@/data/servant-of-the-lake/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/servant-of-the-lake`;

const metadataTitle =
  "Servant of the Lake Guide: Walkthrough, Puzzles & Achievements";

const metadataDescription =
  "Use this Servant of the Lake guide for the Day 1–3 walkthrough, puzzle solutions, 49 achievements, hidden tasks, Secret Ending, and Roots connection.";

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-1-arrival.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-achievements-notebook.webp`,
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
      "Start with the full three-day walkthrough, jump to exact puzzle guides when blocked, then use the achievement checklist and Secret Ending route after The Departure.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-15",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Beginning the three-day servant route at the Vanderboom estate in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Day 1–3 walkthrough, puzzle solutions, all 49 achievements, hidden tasks, the Secret Ending, and the Rusty Lake: Roots connection.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "start-here",
    label: "Where I start",
  },
  {
    id: "day-1",
    label: "Day 1",
  },
  {
    id: "day-2",
    label: "Day 2",
  },
  {
    id: "day-3",
    label: "Day 3",
  },
  {
    id: "after-ending",
    label: "After The Departure",
  },
  {
    id: "roots-connection",
    label: "Connection to Rusty Lake: Roots",
  },
  {
    id: "how-i-avoid-wasting-time",
    label: "How I avoid wasting time",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake/walkthrough",
    label: "Full Walkthrough",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "All Puzzle Solutions & Codes",
  },
  {
    href: "/servant-of-the-lake/achievements",
    label: "Achievements & Hidden Checklist",
  },
  {
    href: "/servant-of-the-lake/secret-ending",
    label: "Secret Ending & You've Found Him",
  },
  {
    href: "/servant-of-the-lake/waking-up-aldous",
    label: "Waking Up Aldous Guide",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "Servant of the Lake Guide: Walkthrough, Puzzle Solutions, Achievements and Secret Ending",
      description:
        "A practical Servant of the Lake guide hub covering the full 24-task Day 1–3 progression route, puzzle solutions and dedicated blocker guides, all 49 achievements including task-linked hidden achievements, Notebook replay after The Departure, the Secret Ending and You've found him! route, and the connection to Rusty Lake: Roots.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-15",
      articleSection: [
        "Walkthrough",
        "Puzzle Solutions",
        "Achievements",
        "Secret Ending",
      ],
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake guide",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake walkthrough",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake puzzle solutions",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake achievements",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Secret Ending",
        },
        {
          "@type": "Thing",
          name: "Notebook replay",
        },
        {
          "@type": "VideoGame",
          name: "Rusty Lake: Roots",
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
          title="Servant of the Lake Guide"
          description="I use this hub to choose the right route: the full walkthrough for progression, puzzle guides for blockers, the 49-achievement checklist after The Departure, and the Secret Ending for Kate's post-game investigation."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}