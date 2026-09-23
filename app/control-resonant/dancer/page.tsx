import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantDancerContent from "@/data/control-resonant/dancer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/dancer`;

const metadataTitle =
  "CONTROL Resonant Dancer Guide: Boss Fight, Push or Ground Slam";

const metadataDescription =
  "Reach the Dancer in West Incursion, beat both boss phases, handle spins and puppets, then compare Push vs Ground Slam and their Power costs.";

const articleDescription =
  "Find the Dancer in the West Incursion Theater, complete the required Incursion Fault route, survive both boss phases, use the Falter window, and choose between Push and Ground Slam.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-dancer-patterned-rangers.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-dancer-theater-stage.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-dancer-phase-two.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-dancer-audience-aftermath.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "where-to-find-dancer",
    label: "Where to find the Dancer",
  },
  {
    id: "enter-theater",
    label: "Enter the Theater",
  },
  {
    id: "dancer-attacks",
    label: "Dancer attacks",
  },
  {
    id: "phase-two",
    label: "Phase two",
  },
  {
    id: "falter-window",
    label: "Falter window",
  },
  {
    id: "push-or-ground-slam",
    label: "Push or Ground Slam",
  },
  {
    id: "is-dancer-required",
    label: "Is the Dancer required?",
  },
  {
    id: "after-dancer",
    label: "After beating the Dancer",
  },
  {
    id: "dancer-stuck",
    label: "Dancer stuck fixes",
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
    href: "/control-resonant/search-for-jesse",
    label: "Search for Jesse",
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
          name: "The Dancer",
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
        "CONTROL Resonant Dancer Guide: Boss Fight, Push or Ground Slam",
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
          name: "The Dancer",
        },
        {
          "@type": "Thing",
          name: "The West Incursion Zone Resonant",
        },
        {
          "@type": "Thing",
          name: "West Incursion Theater",
        },
        {
          "@type": "Thing",
          name: "The Incursion Fault",
        },
        {
          "@type": "Thing",
          name: "Shift",
        },
        {
          "@type": "Thing",
          name: "Push",
        },
        {
          "@type": "Thing",
          name: "Ground Slam",
        },
        {
          "@type": "Thing",
          name: "Dancer phase two",
        },
        {
          "@type": "Thing",
          name: "Dancer Falter window",
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
          title="CONTROL Resonant Dancer Guide: Boss Fight, Push or Ground Slam"
          description="Reach the West Incursion Theater, survive both Dancer phases, punish its spinning and airborne attacks, use the final Falter window, and choose between Push and Ground Slam."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantDancerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}