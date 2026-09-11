import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustAchievementsContent from "@/data/the-crust/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust/achievements`;

const metadataTitle =
  "The Crust Achievements Guide – All 28 & 100% Route";

const metadataDescription =
  "Track all 28 The Crust achievements, hidden requirements, Hope-2, Laser Gun outcomes, economy milestones, and a practical 100% route.";

const articleDescription =
  "A complete The Crust achievements guide for all 28 Steam achievements, including hidden requirements, Hope-2 survivors, the five Laser Gun achievements, cash and market-cap milestones, colonist progression, exploration goals, and a practical order for a 100% run.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-achievement-a-single-spark.webp`;

const toc = [
  {
    id: "achievement-tracker",
    label: "All 28 achievements",
  },
  {
    id: "opening",
    label: "Opening achievements",
  },
  {
    id: "exploration",
    label: "Exploration achievements",
  },
  {
    id: "money",
    label: "Cash & market capitalization",
  },
  {
    id: "expansion-counters",
    label: "Vehicles & Fuel Generators",
  },
  {
    id: "hope-2",
    label: "Heroes Never Die",
  },
  {
    id: "laser",
    label: "Laser Gun achievements",
  },
  {
    id: "silent-assassin",
    label: "Silent Assassin",
  },
  {
    id: "colonist",
    label: "Colonist profession achievement",
  },
  {
    id: "long-cleanup",
    label: "50 years & full-Moon scan",
  },
  {
    id: "completion-route",
    label: "100% completion route",
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
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
  {
    href: "/the-crust/contracts-guide",
    label: "Contracts & Online Market Guide",
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
        alt: "A Single Spark achievement unlocking in The Crust",
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
        name: "Achievements",
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
          title="The Crust Achievements Guide – All 28 & 100% Route"
          description="Track all 28 achievements, plan the Hope-2 and Laser Gun branch-sensitive goals, and leave the biggest economy, colonist, and Moon-scan grinds for the right stage of your run."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}