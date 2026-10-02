import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayWalkthroughContent from "@/data/gears-of-war-e-day/walkthrough.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Gears of War E-Day Walkthrough: All Acts & Chapters";

const metadataDescription =
  "Gears of War E-Day walkthrough with all 5 Acts, 26 chapters, Prologue, Epilogue, campaign order, routes, and links to each objective.";

const articleDescription =
  "Follow the complete Gears of War: E-Day campaign order from the Prologue through all five Acts and the Epilogue, with chapter links, route summaries, and direct help for each major objective.";

const toc = [
  {
    id: "campaign-order",
    label: "All Acts & Chapters",
  },
  {
    id: "prologue",
    label: "Prologue",
  },
  {
    id: "act-1",
    label: "Act 1",
  },
  {
    id: "act-2",
    label: "Act 2",
  },
  {
    id: "act-3",
    label: "Act 3",
  },
  {
    id: "act-4",
    label: "Act 4",
  },
  {
    id: "act-5",
    label: "Act 5",
  },
  {
    id: "final-operation",
    label: "Final Operation",
  },
  {
    id: "after-campaign",
    label: "After the Epilogue",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/act-1-walkthrough",
    label: "Act 1 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-3-walkthrough",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-4-walkthrough",
    label: "Act 4 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-5-walkthrough",
    label: "Act 5 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/ending-final-boss",
    label: "Final Operation & Ending",
  },
  {
    href: "/gears-of-war-e-day/achievements",
    label: "Achievements",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
  },
};


export default function GearsEDayWalkthroughPage() {
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
            name: "Gears of War: E-Day",
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
        headline:
          "Gears of War: E-Day Walkthrough — All Acts & Chapters",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        dateModified: "2026-10-02",
        datePublished: "2026-10-01",
        inLanguage: "en-US",
        about: {
          "@type": "VideoGame",
          name: "Gears of War: E-Day",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

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
          title="Gears of War: E-Day Walkthrough — All Acts & Chapters"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}