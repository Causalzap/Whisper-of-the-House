
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BaikonurCampaignContent from "@/data/workers-and-resources-space-program/baikonur-campaign.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/workers-and-resources-space-program`;
const pageUrl = `${hubUrl}/baikonur-campaign`;

const metadataTitle =
  "Workers & Resources Space Program Baikonur Campaign Walkthrough";

const metadataDescription =
  "Complete the Baikonur Campaign from Test Rocket and Sputnik to Vostok, Soyuz, safe reentry, and the final Orbital Rendezvous.";

const articleTitle =
  "How Do You Complete the Baikonur Campaign in Workers & Resources Space Program?";

const articleDescription =
  "Finish every Baikonur mission, launch Sputnik, return Vostok and Soyuz safely, and connect two Soyuz spacecraft in Earth orbit.";

const jsonLdDescription =
  "Follow the Baikonur Campaign from rocket preparation and Sputnik through Vostok reentry, the first Soyuz flight, and the final orbital rendezvous.";

const imageUrls = [
  `${siteUrl}/images/workers-and-resources-space-program/baikonur-vostok-mission-objective.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/baikonur-campaign-starting-objective.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/baikonur-test-rocket-success.webp`,
  `${siteUrl}/images/workers-and-resources-space-program/baikonur-sputnik-orbit-success.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "campaign-missions", label: "All Baikonur Missions" },
  { id: "preparation-for-space", label: "Preparation for Space" },
  { id: "test-rocket", label: "First Test Rocket" },
  { id: "sputnik", label: "Sputnik Satellite Mission" },
  { id: "vostok", label: "Vostok: First Human in Space" },
  { id: "soyuz", label: "First Soyuz Mission" },
  { id: "orbital-rendezvous", label: "Final Soyuz Orbital Rendezvous" },
  { id: "campaign-troubleshooting", label: "Campaign Progression Problems" },
  { id: "campaign-completion", label: "Campaign Completed" },
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
    href: "/workers-and-resources-space-program/rocket-launch",
    label: "Rocket Launch: Fuel, Mission Control & Failures",
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
          name: "Baikonur Campaign",
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

export default function BaikonurCampaignPage() {
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
          <BaikonurCampaignContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
