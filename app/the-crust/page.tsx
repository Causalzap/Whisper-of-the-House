import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustHubContent from "@/data/the-crust/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust`;

const metadataTitle =
  "The Crust Guide – Progression, Hope-2 & 1.0 Priorities";

const metadataDescription =
  "Use this The Crust 1.0 guide for early progression, Hope-2 choices, Rover exploration, Living Quarters, contracts, achievements, and far-side priorities.";

const articleDescription =
  "A complete The Crust Version 1.0 progression guide covering early base recovery, production priorities, the Hope-2 decision, Rover exploration, Living Quarters, contracts and trading, progression bottlenecks, the far-side expedition, achievements, and how to prioritize competing objectives as the campaign expands.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-hub.webp`;

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "stable-base",
    label: "When the base is stable",
  },
  {
    id: "hope-2",
    label: "Hope-2 decision",
  },
  {
    id: "inside-and-outside-base",
    label: "Rover & off-base progression",
  },
  {
    id: "habitation",
    label: "Living Quarters",
  },
  {
    id: "money-and-contracts",
    label: "Contracts & trading",
  },
  {
    id: "diagnose-progress",
    label: "Fix progression blockers",
  },
  {
    id: "far-side-expedition",
    label: "Far-side expedition",
  },
  {
    id: "story-information",
    label: "Later story decisions",
  },
  {
    id: "achievement-progress",
    label: "Achievement progression",
  },
  {
    id: "priority-rule",
    label: "What to prioritize",
  },
  {
    id: "later-game",
    label: "Later-game progression",
  },
];

const relatedLinks = [
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
        width: 1600,
        height: 900,
        alt: "The Crust lunar base and Moon operations in Version 1.0",
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadataTitle,
    description: articleDescription,
    image: [heroImage],
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    dateModified: "2026-09-11",
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  },
  {
    "@context": "https://schema.org",
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
        name: "The Crust",
        item: pageUrl,
      },
    ],
  },
];

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
          title="The Crust Guide – Progression, Hope-2 & 1.0 Priorities"
          description="Recover the damaged base, decide what deserves resources next, and follow The Crust from early production through Hope-2, Rover exploration, habitation, trade, and the far-side expedition."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
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