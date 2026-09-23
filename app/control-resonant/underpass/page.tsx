import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantUnderpassContent from "@/data/control-resonant/underpass.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/underpass`;

const metadataTitle =
  "CONTROL Resonant Underpass Walkthrough: Power Cores & Routes";

const metadataDescription =
  "Reach the Underpass, restore four Power Cores with three charges, follow yellow tape and timeline shifts, then finish the Oldest House relay route.";

const articleDescription =
  "Follow the full CONTROL Resonant Underpass route through the missing research team, overlapping timelines, four Power Cores, three timed charges, yellow-tape routes, complete data transmission, the chasm, and the relays beneath the Oldest House.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-underpass-arrival.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-underpass-time-fluctuation.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-underpass-four-power-cores.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-underpass-yellow-tape-power-route.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-reach-underpass",
    label: "How to reach the Underpass",
  },
  {
    id: "research-site",
    label: "Research Site & timeline shifts",
  },
  {
    id: "restore-power",
    label: "Restore the four Power Cores",
  },
  {
    id: "yellow-tape",
    label: "Follow the yellow-tape routes",
  },
  {
    id: "transmit-research-data",
    label: "Transmit all research data",
  },
  {
    id: "follow-time-fluctuations",
    label: "Follow the time fluctuations",
  },
  {
    id: "cross-chasm",
    label: "Cross the chasm",
  },
  {
    id: "underpass-resonant",
    label: "Underpass Resonant & Physicist",
  },
  {
    id: "jesse-underpass-fault",
    label: "Jesse Sightings: Underpass",
  },
  {
    id: "what-to-do-next",
    label: "Where to go next",
  },
  {
    id: "underpass-stuck",
    label: "Underpass stuck fixes",
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
    href: "/control-resonant/search-for-jesse",
    label: "How to Find Jesse",
  },
  {
    href: "/control-resonant/physicist",
    label: "Physicist & Astral Keys",
  },
  {
    href: "/control-resonant/into-the-sinkhole",
    label: "Into the Sinkhole",
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
          name: "Underpass Walkthrough",
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
        "CONTROL Resonant Underpass Walkthrough: Power Cores & Routes",
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
          name: "CONTROL Resonant Underpass",
        },
        {
          "@type": "Thing",
          name: "Recursions and Iterations",
        },
        {
          "@type": "Thing",
          name: "Underpass Research Site",
        },
        {
          "@type": "Thing",
          name: "Underpass Power Cores",
        },
        {
          "@type": "Thing",
          name: "Underpass yellow tape",
        },
        {
          "@type": "Thing",
          name: "Underpass time fluctuations",
        },
        {
          "@type": "Thing",
          name: "Underpass research data",
        },
        {
          "@type": "Thing",
          name: "The Underpass Resonant",
        },
        {
          "@type": "Thing",
          name: "The Physicist",
        },
        {
          "@type": "Thing",
          name: "Jesse Sightings: Underpass",
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
          title="CONTROL Resonant Underpass Walkthrough: Power Cores & Routes"
          description="Follow the Underpass research team through overlapping timelines, restore all four Power Cores with three missing charges, transmit the complete dataset, and know when to switch to the Jesse Fault or Physicist route."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantUnderpassContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}