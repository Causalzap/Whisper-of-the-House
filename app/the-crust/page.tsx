import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustHubContent from "@/data/the-crust/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust`;

const metadataTitle =
  "The Crust Guide Hub: Walkthrough, Progression & Priorities";

const metadataDescription =
  "The Crust 1.0 guide hub for walkthrough, progression, Hope-2, Rover exploration, colonists, contracts, FES labs, achievements, and later priorities.";

const articleDescription =
  "The Crust Version 1.0 guide hub covering the campaign framework, walkthrough and progression routes, Hope-2, Rover exploration, colonists, contracts, FES research, progression blockers, achievements, and later-game guide topics.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-hub.webp`;

const fesLabsImage =
  `${siteUrl}/images/the-crust/the-crust-fes-labs-approved.webp`;

const imageUrls = [
  heroImage,
  fesLabsImage,
];

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "what-is-blocking-you",
    label: "Find your progression blocker",
  },
  {
    id: "hope-2",
    label: "Hope-2",
  },
  {
    id: "surface-progression",
    label: "Rover & surface progression",
  },
  {
    id: "habitation",
    label: "Colonists & habitation",
  },
  {
    id: "contracts-and-money",
    label: "Contracts & money",
  },
  {
    id: "research-partnerships",
    label: "FES research partnerships",
  },
  {
    id: "midgame-priority",
    label: "Midgame priorities",
  },
  {
    id: "story-investigation",
    label: "Story investigation",
  },
  {
    id: "later-searches",
    label: "Later guide topics",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "next-step",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/walkthrough",
    label: "The Crust 1.0 Walkthrough",
  },
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Rover LPS Guide",
  },
  {
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
  {
    href: "/the-crust/contracts-guide",
    label: "Contracts & Online Market Guide",
  },
  {
    href: "/the-crust/achievements",
    label: "The Crust Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "The Crust lunar base and surface operations in Version 1.0",
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
          name: "The Crust Guide Hub",
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
        "The Crust Guide Hub: Walkthrough, Progression and Priorities",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-13",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Crust",
        },
        {
          "@type": "Thing",
          name: "The Crust walkthrough",
        },
        {
          "@type": "Thing",
          name: "The Crust progression",
        },
        {
          "@type": "Thing",
          name: "Hope-2",
        },
        {
          "@type": "Thing",
          name: "Rover exploration",
        },
        {
          "@type": "Thing",
          name: "Living Quarters",
        },
        {
          "@type": "Thing",
          name: "FES laboratories",
        },
        {
          "@type": "Thing",
          name: "The Crust contracts",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
          title="The Crust Guide Hub: Walkthrough, Progression & Priorities"
          description="Start with the problem blocking your colony, then move into the right walkthrough or focused guide for Hope-2, Rover exploration, colonists, contracts, research, and later progression."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}