
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RocketAssemblyContent from "@/data/workers-and-resources-space-program/rocket-assembly.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/workers-and-resources-space-program`;
const pageUrl = `${hubUrl}/rocket-assembly`;

const metadataTitle =
  "Workers & Resources Space Program: Rocket Assembly & Transport";

const metadataDescription =
  "Build rockets in Workers & Resources Space Program. Find R7 blueprints, manufacture and test parts, fix assembly problems, and transport completed rockets.";

const articleTitle =
  "How Do You Build and Transport Rockets in Workers & Resources Space Program?";

const articleDescription =
  "Manufacture R7 cores, boosters, and fairings, test rocket components, fix Assembly Hall shortages, and deliver complete rockets by rail.";

const jsonLdDescription =
  "Build and assemble rockets using the correct blueprints, transport rocket parts to testing and assembly, troubleshoot missing components, and deliver finished rockets.";

const imageUrls = [
  `${siteUrl}/images/workers-and-resources-space-program/space-program-assembled-rocket-on-train.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-r7-booster-production.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-engine-test-failure-rates.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-rocket-parts-test-status.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-rocket-flatbed-transport.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/space-program-rocket-arrives-launch-site.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "rocket-buildings", label: "Required Rocket Buildings" },
  { id: "choose-blueprint", label: "Choose a Rocket Blueprint" },
  { id: "manufacture-parts", label: "Manufacture Rocket Parts" },
  { id: "test-rocket-engines", label: "Test Rocket Engines" },
  { id: "rocket-parts-transport", label: "Transport Rocket Parts" },
  { id: "assemble-rocket", label: "Assemble a Complete Rocket" },
  { id: "deliver-assembled-rocket", label: "Deliver the Finished Rocket" },
  { id: "assembly-troubleshooting", label: "Fix Assembly & Transport Problems" },
  { id: "next-rocket", label: "What to Build Next" },
];

const relatedLinks = [
  {
    href: "/workers-and-resources-space-program",
    label: "Space Program: Research & First Steps",
  },
  {
    href: "/workers-and-resources-space-program/rocket-launch",
    label: "Rocket Launch: Fuel, Mission Control & Failures",
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
          name: "Rocket Assembly & Transport",
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

export default function RocketAssemblyPage() {
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
          <RocketAssemblyContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
