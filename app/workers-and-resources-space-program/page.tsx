
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WorkersResourcesSpaceProgramContent from "@/data/workers-and-resources-space-program/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/workers-and-resources-space-program`;
const pageUrl = hubUrl;

const metadataTitle =
  "Workers & Resources Space Program Guide: Research & Progression";

const metadataDescription =
  "Start Workers & Resources Space Program, choose research, build and launch rockets, and progress from your first R7 to Sputnik, Soyuz, and space stations.";

const articleTitle =
  "How Do You Start and Progress in Workers & Resources Space Program?";

const articleDescription =
  "Start in Baikonur or your own republic, prioritize space research, build and launch R7 rockets, and progress toward satellites, crewed missions, and space stations.";

const jsonLdDescription =
  "Start the Space Program DLC, develop rocket research and production, launch your first spacecraft, and progress through satellite, crewed, and orbital missions.";

const imageUrls = [
  `${siteUrl}/images/workers-and-resources-space-program/baikonur-campaign-starting-objective.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "how-to-start", label: "How to Start Space Program" },
  { id: "first-steps", label: "What to Build First" },
  { id: "best-research-order", label: "Best Research Order" },
  { id: "rocket-production", label: "Rocket Production Chain" },
  { id: "rocket-fuel", label: "Rocket Fuel Requirements" },
  { id: "first-launch", label: "Launching Your First Rocket" },
  { id: "progression", label: "Progression After First Launch" },
  { id: "first-rocket-problems", label: "Space Program Not Progressing" },
  { id: "advanced-space-program", label: "Space Stations & Advanced Rockets" },
  { id: "next-steps", label: "What to Do Next" },
];

const relatedLinks = [
  {
    href: "/workers-and-resources-space-program/rocket-assembly",
    label: "Rocket Assembly: Parts, Testing & Transport",
  },
  {
    href: "/workers-and-resources-space-program/rocket-launch",
    label: "Rocket Launch: Fuel, Mission Control & Failures",
  },
  {
    href: "/workers-and-resources-space-program/baikonur-campaign",
    label: "Baikonur Campaign Walkthrough: All Missions & Soyuz Rendezvous",
  },
];

const publishedAt = "2026-11-23";
const updatedAt = "November 23, 2026";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    locale: "en_US",
    images: [{ url: heroImage }],
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
          name: "Workers & Resources: Space Program",
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
      description: jsonLdDescription,
      image: imageUrls,
      datePublished: publishedAt,
      dateModified: publishedAt,
      inLanguage: "en",
      about: {
        "@type": "VideoGame",
        name: "Workers & Resources: Soviet Republic",
      },
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
      isPartOf: {
        "@type": "WebSite",
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

export default function WorkersResourcesSpaceProgramPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Workers & Resources: Soviet Republic - Space Program"
          gameHref="/workers-and-resources-space-program"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt={updatedAt}
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WorkersResourcesSpaceProgramContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
