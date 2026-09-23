import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantSearchForJesseContent from "@/data/control-resonant/search-for-jesse.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/search-for-jesse`;

const metadataTitle =
  "How to Find Jesse in CONTROL Resonant: All 3 Faults";

const metadataDescription =
  "Find Jesse through the Incursion, Subway and Underpass Faults, get the Parking Garage key, unlock Shift and Reach, and finish the memory ritual.";

const articleDescription =
  "Follow Jesse through all three Faults in CONTROL Resonant, from the West Incursion Parking Garage and Shift to the Subway Fault, Reach distortions, and the Underpass memory ritual.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-incursion-fault-parking-garage.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-shift-gravity-route.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-reach-point-underpass.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-underpass-fault-jesse-memory.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "incursion-fault",
    label: "Incursion Fault",
  },
  {
    id: "parking-garage-key",
    label: "Parking Garage key",
  },
  {
    id: "first-jesse-encounter",
    label: "First Jesse encounter",
  },
  {
    id: "gravity-traversal",
    label: "Shift & gravity traversal",
  },
  {
    id: "subway-fault",
    label: "Subway Fault",
  },
  {
    id: "reach-distortions",
    label: "Reach & dimensional distortions",
  },
  {
    id: "underpass-fault",
    label: "Underpass Fault",
  },
  {
    id: "underpass-ritual",
    label: "Underpass memory ritual",
  },
  {
    id: "dylan-forgets-jesse",
    label: "When Dylan forgets Jesse",
  },
  {
    id: "one-fault-left",
    label: "The remaining Fault",
  },
  {
    id: "where-to-go-next",
    label: "Where to go next",
  },
  {
    id: "jesse-route-problems",
    label: "Jesse route problems",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/west-incursion-zone",
    label: "West Incursion Zone Walkthrough",
  },
  {
    href: "/control-resonant/dancer",
    label: "Dancer Boss Guide",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Walkthrough",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
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
          name: "How to Find Jesse",
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
        "How to Find Jesse in CONTROL Resonant: All 3 Faults",
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
          name: "Jesse Faden",
        },
        {
          "@type": "Thing",
          name: "Search for Jesse",
        },
        {
          "@type": "Thing",
          name: "The Incursion Fault",
        },
        {
          "@type": "Thing",
          name: "Parking Garage key",
        },
        {
          "@type": "Thing",
          name: "Shift",
        },
        {
          "@type": "Thing",
          name: "The Subway Fault",
        },
        {
          "@type": "Thing",
          name: "Reach",
        },
        {
          "@type": "Thing",
          name: "The Underpass Fault",
        },
        {
          "@type": "Thing",
          name: "Underpass memory ritual",
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
          title="How to Find Jesse in CONTROL Resonant: All 3 Faults"
          description="Find Jesse through the Incursion, Subway and Underpass Faults, get the Parking Garage key, use Shift and Reach, and finish the Underpass memory sequence."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantSearchForJesseContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}