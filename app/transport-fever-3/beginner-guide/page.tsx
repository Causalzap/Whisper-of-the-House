import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3BeginnerGuideContent from "@/data/transport-fever-3/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Transport Fever 3 Beginner Guide: What to Build First";

const metadataDescription =
  "Start Transport Fever 3 with one town, good stop coverage, a small passenger fleet, one nearby cargo need, and expansion only after demand appears.";

const articleDescription =
  "Read one town before spending, build a compact passenger loop around real stop coverage, place the first depot sensibly, read line performance, add one nearby cargo need, and expand only when the running network gives you a reason.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-town-supplies.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-stop-coverage.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-line-performance.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "check-town-needs",
    label: "Read the town first",
  },
  {
    id: "first-passenger-loop",
    label: "Build the passenger loop",
  },
  {
    id: "road-depot",
    label: "Place the first depot",
  },
  {
    id: "run-before-expanding",
    label: "Read line performance",
  },
  {
    id: "first-cargo-route",
    label: "Add one cargo need",
  },
  {
    id: "when-to-buy-more",
    label: "When to add a vehicle",
  },
  {
    id: "stable-opening",
    label: "What a stable opening looks like",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Money & Economy Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
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
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 town Supplies panel before building the first transport network",
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
          name: "Transport Fever 3 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
      headline: "Transport Fever 3 Beginner Guide: What to Build First",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-26",
      dateModified: "2026-09-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 first town",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 passenger lines",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 stop coverage",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 line rate",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Beginner Guide: What to Build First"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}