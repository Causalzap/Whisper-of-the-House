
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrackWorkbotsContent from "@/data/crack/workbots.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crack`;
const pageUrl = `${hubUrl}/workbots`;

const metadataTitle =
  "CRACK Workbots: Collectors, Drones, Repairs & Upgrades";

const metadataDescription =
  "Unlock Workbots, compare Collector Bots and Delivery Drones, fix Looking for Work, repair robots, and upgrade them with Chalazite.";

const articleDescription =
  "Unlock CRACK's Workbot Storage after the $70 Tissue Work Order, commission Collector Bots and Delivery Drones, and understand how loose resources move through Buckets to the Resource Depot. Fix Looking for Work problems, repair damaged Workbots with a Wrench, upgrade robots to Level 5 with Chalazite, and decide when another robot is worth its rising purchase cost.";

const imageUrls = [
  `${siteUrl}/images/crack/workbot-station.webp`,
  `${siteUrl}/images/crack/workbot-bucket-delivery.webp`,
  `${siteUrl}/images/crack/workbot-chalazite-upgrade.webp`,
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
    description:
      "Buy and repair CRACK Workbots, understand Collector and Delivery Drone jobs, solve idle robot problems, and upgrade with Chalazite.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "CRACK Workbot Storage with robots and commissioning terminals showing a $100 purchase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Set up Collector Bots and Delivery Drones, fix idle Workbots, and upgrade your robots with Chalazite.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "unlock",
    label: "Unlock & Buy Workbots",
  },
  {
    id: "collector-delivery",
    label: "Collector vs. Delivery Drone",
  },
  {
    id: "idle",
    label: "Workbot Not Moving",
  },
  {
    id: "repair",
    label: "Repair With a Wrench",
  },
  {
    id: "chalazite",
    label: "Chalazite Upgrades",
  },
  {
    id: "reserved-buckets",
    label: "Drones & Reserved Buckets",
  },
  {
    id: "fleet-decisions",
    label: "When to Buy More Robots",
  },
];

const relatedLinks = [
  {
    href: "/crack",
    label: "CRACK Beginner Guide: Equipment & Money",
  },
  {
    href: "/crack/walkthrough",
    label: "CRACK Walkthrough: Tissue & Workbot Storage",
  },
  {
    href: "/crack/achievements",
    label: "CRACK Achievements: Automation, IT Specialist & Overclocked",
  },
];

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
          name: "CRACK",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Workbots",
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
        "CRACK Workbots: How to Unlock, Repair, and Upgrade Them",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      about: [
        {
          "@type": "VideoGame",
          name: "CRACK",
        },
        {
          "@type": "Thing",
          name: "Collector Bots and Delivery Drones",
        },
        {
          "@type": "Thing",
          name: "Workbot commissioning and purchase costs",
        },
        {
          "@type": "Thing",
          name: "Bucket collection and automated delivery",
        },
        {
          "@type": "Thing",
          name: "Workbot Charge, Condition, and repair",
        },
        {
          "@type": "Thing",
          name: "Looking for Work troubleshooting",
        },
        {
          "@type": "Thing",
          name: "Chalazite upgrades and Level 5 Workbots",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="CRACK Workbots: How to Unlock, Repair, and Upgrade Them"
          description="Get Collector Bots and Delivery Drones working, diagnose idle robots, repair damage, and choose useful Chalazite upgrades."
          gameTitle="CRACK"
          gameHref="/crack"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrackWorkbotsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
