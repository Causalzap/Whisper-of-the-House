import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantPhysicistContent from "@/data/control-resonant/physicist.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/physicist`;

const metadataTitle =
  "CONTROL Resonant Physicist Guide: All 3 Astral Keys";

const metadataDescription =
  "Find all three Astral Keys, open the locked doors from The Spire, beat the Physicist, and choose between Spike and Astral Rebuke.";

const articleDescription =
  "Start The Underpass Resonant at The Spire, enter the Astral Plane, find all three Astral Keys, defeat the Physicist, and choose Spike or Astral Rebuke.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-physicist-astral-plane.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-physicist-resonant-reveal.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-physicist-defeated.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "start-underpass-resonant",
    label: "Start the Underpass Resonant",
  },
  {
    id: "astral-keys",
    label: "Three Astral Keys",
  },
  {
    id: "first-astral-key",
    label: "First Astral Key",
  },
  {
    id: "second-astral-key",
    label: "Second Astral Key",
  },
  {
    id: "third-astral-key",
    label: "Third Astral Key",
  },
  {
    id: "before-physicist",
    label: "Before the Physicist",
  },
  {
    id: "physicist-boss",
    label: "How to beat the Physicist",
  },
  {
    id: "spike-or-astral-rebuke",
    label: "Spike or Astral Rebuke",
  },
  {
    id: "physicist-rewards",
    label: "Physicist rewards",
  },
  {
    id: "astral-key-checks",
    label: "Astral Key & boss checks",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Walkthrough",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
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
          name: "The Physicist",
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
        "CONTROL Resonant Physicist Guide: All 3 Astral Keys",
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
          name: "The Physicist",
        },
        {
          "@type": "Thing",
          name: "The Underpass Resonant",
        },
        {
          "@type": "Thing",
          name: "The Spire",
        },
        {
          "@type": "Thing",
          name: "Astral Plane",
        },
        {
          "@type": "Thing",
          name: "Astral Keys",
        },
        {
          "@type": "Thing",
          name: "Spike",
        },
        {
          "@type": "Thing",
          name: "Astral Rebuke",
        },
        {
          "@type": "Thing",
          name: "Astralized",
        },
        {
          "@type": "Thing",
          name: "Untapped Golden Earrings",
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
          title="CONTROL Resonant Physicist Guide: All 3 Astral Keys & Boss"
          description="Climb The Spire into the Astral Plane, find all three Astral Keys, defeat the Physicist, and decide whether Spike or Astral Rebuke fits your build."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantPhysicistContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}