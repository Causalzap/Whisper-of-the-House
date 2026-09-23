import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantCrossingTheThresholdContent from "@/data/control-resonant/crossing-the-threshold.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/crossing-the-threshold`;

const metadataTitle =
  "CONTROL Resonant Crossing the Threshold: Wilson & AVP-3 Choice";

const metadataDescription =
  "Find Wilson, get the 0665 cabinet code, learn what AVP-3 is, choose containment or return it through the Threshold, and see both outcomes.";

const articleDescription =
  "Investigate the Threshold expedition deaths, use the Security Station evidence to find Wilson, uncover what AVP-3 is, and decide whether to contain it or carry it back through the Threshold.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-crossing-threshold-headless-body.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-crossing-threshold-dig-site.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-crossing-threshold-wilson.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-start",
    label: "How to start",
  },
  {
    id: "dig-site",
    label: "Dig Site",
  },
  {
    id: "field-hospital",
    label: "Field Hospital & 0665 code",
  },
  {
    id: "loading-docks",
    label: "Loading Docks",
  },
  {
    id: "security-footage",
    label: "Security Station evidence",
  },
  {
    id: "find-wilson",
    label: "Where to find Wilson",
  },
  {
    id: "what-is-avp-3",
    label: "What AVP-3 is",
  },
  {
    id: "choice",
    label: "Contain AVP-3 or help Wilson",
  },
  {
    id: "return-avp3",
    label: "Return AVP-3 to the Threshold",
  },
  {
    id: "wilson-choice",
    label: "What to say about Wilson",
  },
  {
    id: "investigation-problems",
    label: "Investigation problems",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/quests",
    label: "Main Missions & Side Stories",
  },
  {
    href: "/control-resonant/central-checkpoint",
    label: "Central Checkpoint",
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
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Crossing the Threshold",
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
        "CONTROL Resonant Crossing the Threshold: Wilson & AVP-3 Choice",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-23",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Crossing the Threshold",
        },
        {
          "@type": "Thing",
          name: "Wilson",
        },
        {
          "@type": "Thing",
          name: "AVP-3",
        },
        {
          "@type": "Thing",
          name: "Threshold",
        },
        {
          "@type": "Thing",
          name: "Threshold expedition",
        },
        {
          "@type": "Thing",
          name: "Dig Site",
        },
        {
          "@type": "Thing",
          name: "Field Hospital",
        },
        {
          "@type": "Thing",
          name: "Security Station",
        },
        {
          "@type": "Thing",
          name: "0665 cabinet code",
        },
        {
          "@type": "Thing",
          name: "Sensory Restraint Hood",
        },
        {
          "@type": "Thing",
          name: "Untapped Practice Knot",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="CONTROL Resonant Crossing the Threshold: Wilson, AVP-3 & Choices"
          description="Follow the Threshold expedition investigation, find the 0665 cabinet code and Wilson, learn what AVP-3 is, and decide whether to contain it or return it through the Threshold."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantCrossingTheThresholdContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}