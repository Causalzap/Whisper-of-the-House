import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantIntoTheSinkholeContent from "@/data/control-resonant/into-the-sinkhole.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/into-the-sinkhole`;

const metadataTitle =
  "CONTROL Resonant Into the Sinkhole: Escape Route & Relays";

const metadataDescription =
  "Reach Bedrock, place and activate the Probe Relays, escape after the diving bell is cut off, and follow Zoe's PA music back to the surface.";

const articleDescription =
  "Ride the diving bell into the Sinkhole, deliver the Probe Relays to Bedrock, survive the shifted escape route, and use Zoe's PA music to find the way back out.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-sinkhole-diving-bell-lost.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "enter-sinkhole",
    label: "Enter the Sinkhole",
  },
  {
    id: "reach-bedrock",
    label: "Reach Bedrock",
  },
  {
    id: "escape-sinkhole",
    label: "Escape the Sinkhole",
  },
  {
    id: "follow-cable",
    label: "Follow the cable",
  },
  {
    id: "follow-music",
    label: "Follow Zoe's PA music",
  },
  {
    id: "after-sinkhole",
    label: "After escaping",
  },
  {
    id: "sinkhole-problems",
    label: "Sinkhole progression problems",
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
    href: "/control-resonant/power-lines",
    label: "Power Lines",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Walkthrough",
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
          name: "Into the Sinkhole",
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
        "CONTROL Resonant Into the Sinkhole: Escape Route & Relays",
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
          name: "Into the Sinkhole",
        },
        {
          "@type": "Thing",
          name: "Sinkhole",
        },
        {
          "@type": "Thing",
          name: "Bedrock",
        },
        {
          "@type": "Thing",
          name: "Probe Relays",
        },
        {
          "@type": "Thing",
          name: "Diving bell",
        },
        {
          "@type": "Thing",
          name: "Escape the Sinkhole",
        },
        {
          "@type": "Thing",
          name: "Zoe's PA music",
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
          title="CONTROL Resonant Into the Sinkhole: Bedrock, Probe Relays & Escape"
          description="Ride the diving bell to Bedrock, place and activate the Probe Relays, then escape the shifted Sinkhole by following the cable and Zoe's PA music."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantIntoTheSinkholeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}