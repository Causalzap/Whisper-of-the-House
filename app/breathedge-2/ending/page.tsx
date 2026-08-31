import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2EndingContent from "@/data/breathedge-2/ending.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/ending`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-signal-jammer-retrieved.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-mary-coordinates-779014-e5.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-ending-betrayed.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-early-access-ending.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-after-ending-scavenge.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Ending Explained: Mary, Betrayal & Chapter 2",
  description:
    "Learn what 779014-EE5 means, why the crew says they were betrayed, whether Chapter 2 is playable, and what remains after the EA ending.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Breathedge 2 Early Access Ending Explained",
    description:
      "Understand Mary's 779014-EE5 coordinates, the betrayal cliffhanger, the Chapter 1 cutoff and what you can still do afterward.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Mary coordinates 779014-EE5 shown at the end of Breathedge 2 Chapter 1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Ending Explained",
    description:
      "Mary's coordinates, the betrayal, Chapter 2 status and what remains playable after the Early Access ending.",
    images: [imageUrls[1]],
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
          name: "Breathedge 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ending Explained",
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
        "Breathedge 2 Ending Explained: Mary's Coordinates, Betrayal and Chapter 2",
      description:
        "An explanation of the current Breathedge 2 Early Access ending, including the signal jammer sequence, Mary's 779014-EE5 coordinates, the betrayal reveal, whether Chapter 2 is playable, what remains available after the story cutoff and the approximate length of a broad Chapter 1 run.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      about: [
        {
          "@type": "VideoGame",
          name: "Breathedge 2",
        },
        {
          "@type": "Thing",
          name: "Breathedge 2 ending",
        },
        {
          "@type": "Thing",
          name: "Mary",
        },
        {
          "@type": "Thing",
          name: "779014-EE5",
        },
        {
          "@type": "Thing",
          name: "Betrayal",
        },
        {
          "@type": "Thing",
          name: "Breathedge 2 Chapter 2",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="What the Breathedge 2 Early Access Ending Means"
          description="Mary's coordinates finally give the crew a destination, but the betrayal changes what happens next and Chapter 2 is not playable yet."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "where-ending-starts",
              label: "Where the ending starts",
            },
            {
              id: "mary-coordinates",
              label: "What 779014-EE5 means",
            },
            {
              id: "betrayal",
              label: "The betrayal",
            },
            {
              id: "is-there-chapter-2",
              label: "Is Chapter 2 playable?",
            },
            {
              id: "what-to-do-after-ending",
              label: "What to do afterward",
            },
            {
              id: "how-long-chapter-1",
              label: "How long Chapter 1 takes",
            },
            {
              id: "is-this-full-ending",
              label: "Is this the full ending?",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/walkthrough",
              label: "Chapter 1 Walkthrough",
            },
            {
              href: "/breathedge-2/depot-walkthrough",
              label: "Depot Walkthrough",
            },
            {
              href: "/breathedge-2/resources-crafting",
              label: "Resources & Crafting Guide",
            },
          ]}
        >
          <Breathedge2EndingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}