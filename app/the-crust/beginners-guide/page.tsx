import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustBeginnerGuideContent from "@/data/the-crust/beginners-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust/beginners-guide`;

const metadataTitle =
  "The Crust Beginner Guide – Best Early-Game Build Order";

const metadataDescription =
  "Restore power, steel, silicon, research, conveyors, titanium, and components with this The Crust 1.0 beginner progression guide.";

const articleDescription =
  "A player-first The Crust Version 1.0 beginner guide covering the post-disaster recovery route, early power, steel and silicon production, research priorities, conveyors, Ore Detector scans, titanium, components, and the point where Hope-2 changes the build order.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-beginner-early-production-chain.webp`;

const toc = [
  {
    id: "early-game-order",
    label: "Best early-game order",
  },
  {
    id: "restore-power",
    label: "Restore power & elevator",
  },
  {
    id: "steel-production",
    label: "Get steel production working",
  },
  {
    id: "smart-concrete",
    label: "Smart Concrete priority",
  },
  {
    id: "research-order",
    label: "Early research order",
  },
  {
    id: "automate-production",
    label: "Conveyors & automation",
  },
  {
    id: "steel-not-producing",
    label: "Steel not producing",
  },
  {
    id: "ore-detector",
    label: "Find titanium",
  },
  {
    id: "science-bottleneck",
    label: "Science bottlenecks",
  },
  {
    id: "credits",
    label: "When to spend credits",
  },
  {
    id: "when-opening-ends",
    label: "When the opening ends",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/contracts-guide",
    label: "Contracts & Online Market Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Rover LPS Guide",
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
        alt: "Early underground steel and silicon production in The Crust",
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
        item: `${siteUrl}/the-crust`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Beginner Guide",
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
          title="The Crust Beginner Guide – Best Early-Game Build Order"
          description="Recover the damaged base in the right order, fix early steel and silicon production, choose useful research, automate the busiest routes, find titanium, and reach Hope-2 with a factory that can support the next phase."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}