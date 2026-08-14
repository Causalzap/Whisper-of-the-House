import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeContent from "@/data/servant-of-the-lake/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/servant-of-the-lake`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-1-arrival.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-achievements-notebook.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-2-morning.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-walkthrough-day-3-morning.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Guide: Walkthrough, Puzzles & Secrets",
  description:
    "Use this Servant of the Lake guide hub for the walkthrough, puzzle solutions, achievements, Secret Ending, and Rusty Lake: Roots connection.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Guide: Walkthrough, Puzzles & Secrets",
    description:
      "Follow the three-day story, solve the biggest blockers, clean up achievements, find the Secret Ending, and understand the connection to Rusty Lake: Roots.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Beginning the servant weekend at the Vanderboom estate in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Guide: Walkthrough, Puzzles & Secrets",
    description:
      "Walkthrough, puzzle answers, achievements, Secret Ending, and the Rusty Lake: Roots connection in one guide hub.",
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
        "Servant of the Lake Guide: Walkthrough, Puzzle Solutions, Achievements and Secret Ending",
      description:
        "A practical Servant of the Lake guide hub for the full three-day progression route, Day 1–3 puzzle solutions, Waking up Aldous, Coffee, Laundry, Bathroom and Alchemy blockers, achievement cleanup, the Secret Ending, and the game's connection to Rusty Lake: Roots.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
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
          name: "Waking up Aldous",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake achievements",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Secret Ending",
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
    label: "Servant of the Lake Walkthrough",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "Puzzle Solutions & Codes",
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
  {
    href: "/servant-of-the-lake/achievements",
    label: "Achievements & 100% Guide",
  },
  {
    href: "/servant-of-the-lake/secret-ending",
    label: "Secret Ending Guide",
  },
];

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
          description="I use this hub to move through the three-day Vanderboom weekend without mixing progression, exact puzzle answers, achievement cleanup, and the hidden ending into one giant walkthrough."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
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