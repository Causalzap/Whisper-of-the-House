
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronRoadFulmarBoatContent from "@/data/the-long-dark-iron-road/fulmar-boat.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-long-dark-iron-road`;
const pageUrl = `${hubUrl}/fulmar-boat`;

const metadataTitle =
  "Iron Road Fulmar Boat: Location, Supplies & Return";

const metadataDescription =
  "Find the Fulmar at Hibernia Processing, load the exact food, water, fuel and Tinder requirements, and sail to Cauldron Island.";

const articleTitle =
  "Where Is the Fulmar Boat in The Long Dark: Iron Road?";

const articleDescription =
  "Find the Fulmar at Hibernia Processing, prepare its four required supplies, operate the boiler and throttle, and return from Cauldron Island.";

const imageUrls = [
  `${siteUrl}/images/the-long-dark-iron-road/fulmar-hibernia-docks.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/fulmar-supply-requirements.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/fulmar-fuel-contribution.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/fulmar-port-remnant-return.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "fulmar-location",
    label: "Where to find the Fulmar",
  },
  {
    id: "fulmar-supplies",
    label: "Food, water, fuel & tinder",
  },
  {
    id: "efficient-preparation",
    label: "Prepare the boat efficiently",
  },
  {
    id: "cast-off",
    label: "Start the boat & sail",
  },
  {
    id: "return-trip",
    label: "Return to Great Bear",
  },
];

const relatedLinks = [
  {
    href: "/the-long-dark-iron-road",
    label: "Iron Road: How to Start & Progress",
  },
  {
    href: "/the-long-dark-iron-road/anna-island-walkthrough",
    label: "Anna Island: Lighthouse & Church",
  },
  {
    href: "/the-long-dark-iron-road/prototype-train-guide",
    label: "Prototype Train: Driving & Repairs",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1788,
        height: 1170,
        alt: "The Fulmar boat at Hibernia Processing docks in Desolation Point",
      },
    ],
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
          name: "The Long Dark: Iron Road",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fulmar Boat",
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
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-28",
      dateModified: "2026-10-28",
      about: [
        {
          "@type": "VideoGame",
          name: "The Long Dark: Iron Road",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Fulmar boat",
        },
        {
          "@type": "Place",
          name: "Hibernia Processing",
        },
        {
          "@type": "Place",
          name: "Desolation Point",
        },
        {
          "@type": "Thing",
          name: "Fulmar departure supplies",
        },
        {
          "@type": "Thing",
          name: "Cauldron Island crossing",
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
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="The Long Dark: Iron Road"
          gameHref="/the-long-dark-iron-road"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronRoadFulmarBoatContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
