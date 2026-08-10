import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorMuseumContent from "@/data/waterpark-simulator/museum-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/museum-guide`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-museum-unlocked.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-museum-theme-research-trees.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-pirate-three-star-gate.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-goldie-injector-quest.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-four-ocean-tokens-rewards.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-yogi-build-ten-fountains.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Museum Guide: Quests & Rewards",
  description:
    "Complete Goldie, Poseidon, Yogi and Aztec quests, spend Museum rewards, solve star gates and progress toward the Wonder Attraction.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Museum Quests and Rewards Guide",
    description:
      "Follow Pirate, Ocean, Wellness and Aztec routes, solve Museum star gates, manage expensive themed builds and reach the Wonder Attraction path.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Museum opening notification introducing quests, special resources, exclusive attractions and the Wonder Attraction route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Museum Guide",
    description:
      "Complete Goldie, Poseidon, Yogi and Aztec quests, spend theme rewards and progress through Museum star gates toward the Wonder Attraction.",
    images: [imageUrls[0]],
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
          name: "Waterpark Simulator Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Museum Guide",
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
        "Waterpark Simulator Museum Guide: Goldie, Poseidon, Yogi and Aztec Quests",
      description:
        "A practical Waterpark Simulator Museum guide covering the Museum unlock, Pirate, Ocean, Wellness and Aztec progression, Goldie, Poseidon and Yogi quests, separate Museum rewards, three- and four-star gates, themed facility costs, manual quest conflicts with staff, Ocean and Wellness build decisions, and the late-game Museum route toward a Wonder Attraction before handing off to the five-star and Diamond Prestige progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-01",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Waterpark Simulator",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Museum",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Museum quests",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Museum rewards",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Goldie quests",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Poseidon quests",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Yogi quests",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Aztec quests",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Pirate rewards",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Ocean rewards",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Wellness",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Museum star gates",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Wonder Attraction",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Pirate Wonder Attraction",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Wooden Hot Tub",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Sauna",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Ocean Pool",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Ocean Ripple Slide",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Progress Every Museum Route Without Breaking the Park"
          description="Complete Goldie, Poseidon, Yogi and Aztec quests during normal operation, spend theme rewards carefully, solve star gates and continue the Museum route toward the Wonder Attraction."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={[
            {
              id: "unlock-museum",
              label: "Unlock and reach the Museum",
            },
            {
              id: "museum-currencies",
              label: "Rewards and Research",
            },
            {
              id: "star-gates",
              label: "Locked quests and rewards",
            },
            {
              id: "goldie-pirate-quests",
              label: "Goldie and Pirate quests",
            },
            {
              id: "poseidon-ocean-quests",
              label: "Poseidon and Ocean quests",
            },
            {
              id: "yogi-wellness-quests",
              label: "Yogi and Wellness quests",
            },
            {
              id: "aztec-route",
              label: "Aztec route",
            },
            {
              id: "museum-to-diamond",
              label: "Museum to Wonder Attraction",
            },
            {
              id: "museum-quest-route",
              label: "Museum quest day route",
            },
            {
              id: "museum-staff-problems",
              label: "Staff blocking quest progress",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/5-star-diamond-prestige-guide",
              label: "5-Star & Diamond Prestige Guide",
            },
            {
              href: "/waterpark-simulator/research-points",
              label: "Research Points & Unlock Order",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
            {
              href: "/waterpark-simulator/staff-guide",
              label: "Staff Hiring & Employee Limits",
            },
            {
              href: "/waterpark-simulator/increase-satisfaction",
              label: "Increase Satisfaction",
            },
            {
              href: "/waterpark-simulator/achievements-guide",
              label: "All 71 Achievements",
            },
          ]}
        >
          <WaterparkSimulatorMuseumContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}