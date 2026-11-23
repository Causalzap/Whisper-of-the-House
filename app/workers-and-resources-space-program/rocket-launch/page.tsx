
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RocketLaunchContent from "@/data/workers-and-resources-space-program/rocket-launch.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/workers-and-resources-space-program`;
const pageUrl = `${hubUrl}/rocket-launch`;

const metadataTitle =
  "Workers & Resources Space Program: Rocket Launch & Failures";

const metadataDescription =
  "Launch rockets in Workers & Resources Space Program. Supply Kerosene and Liquid Oxygen, use Mission Control, select an orbit, and fix failed launches.";

const articleTitle =
  "How Do You Launch Rockets and Fix Failed Launches in Workers & Resources Space Program?";

const articleDescription =
  "Fuel an R7 rocket, configure Mission Control, check Expected Failure Rate, choose a reachable orbit, and diagnose unsuccessful launches.";

const jsonLdDescription =
  "Prepare rocket launch sites, deliver Kerosene and Liquid Oxygen, choose orbital targets through Mission Control, and troubleshoot rocket and mission failures.";

const imageUrls = [
  `${siteUrl}/images/workers-and-resources-space-program/space-program-sputnik-orbit-success.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-rocket-fueling-required.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-fuel-distribution-orders.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-mission-control-orbit-selection.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-launch-ready-fueled.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-rocket-expected-failure-rate.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "launch-site", label: "Prepare the Launch Site" },
  { id: "fuel-rocket", label: "Kerosene & Liquid Oxygen" },
  { id: "mission-control", label: "Mission Control & Orbits" },
  { id: "pre-launch-checklist", label: "Pre-Launch Checklist" },
  { id: "expected-failure-rate", label: "Expected Failure Rate" },
  { id: "launch-outcomes", label: "Successful Launch Conditions" },
  { id: "launch-failures", label: "Rocket Launch Failures" },
  { id: "rocket-not-launching", label: "Why Rockets Will Not Launch" },
  { id: "after-launch", label: "After Your First Launch" },
];

const relatedLinks = [
  {
    href: "/workers-and-resources-space-program",
    label: "Space Program: Research & First Steps",
  },
  {
    href: "/workers-and-resources-space-program/rocket-assembly",
    label: "Rocket Assembly: Parts, Testing & Transport",
  },
  {
    href: "/workers-and-resources-space-program/baikonur-campaign",
    label: "Baikonur Campaign: Test Rocket to Soyuz Rendezvous",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rocket Launch & Failures",
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

export default function RocketLaunchPage() {
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
          <RocketLaunchContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
