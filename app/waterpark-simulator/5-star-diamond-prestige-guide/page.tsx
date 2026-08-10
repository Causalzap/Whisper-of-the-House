import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorFiveStarDiamondPrestigeContent from "@/data/waterpark-simulator/5-star-diamond-prestige-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/5-star-diamond-prestige-guide`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-five-star-objectives.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-five-stars-unlocked.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-diamond-objectives.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-one-million-progress-complete.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-wonder-attraction-layout.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-diamond-park-unlocked.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator 5-Star & Diamond Prestige Guide",
  description:
    "Reach five stars with $500K earned and two 4-Prestige slides, then hit Diamond with $1M earned and a 6-Prestige Wonder Attraction.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator 5-Star & Diamond Prestige Guide",
    description:
      "Follow the tested route from 4.5 stars to five stars and Diamond, including income goals, Prestige Slides, Museum progression and the Wonder Attraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Diamond objectives requiring one million dollars earned and a Wonder Attraction with at least six Prestige",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator 5-Star & Diamond Guide",
    description:
      "Complete the $500K and two 4-Prestige Slide requirements, then reach Diamond with $1M earned and a 6-Prestige Wonder Attraction.",
    images: [imageUrls[2]],
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
          name: "5-Star & Diamond Prestige Guide",
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
        "Waterpark Simulator 5-Star and Diamond Prestige Guide",
      description:
        "A tested Waterpark Simulator Hard Mode Beach Map progression route from 4.5 stars through five stars and Diamond Park. It covers the $500,000 earnings requirement, two slides with at least 4 Prestige, the $1,000,000 Diamond requirement, Museum progression, Wonder Attraction unlocks, Research timing, layout rebuilding and the final Diamond trigger.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Waterpark Simulator",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator five stars",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Diamond Prestige",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Diamond Park",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Park Prestige",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Prestige Slides",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Wonder Attraction",
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
          title="How I Reached Five Stars and Diamond on Hard Mode"
          description="Finish the two four-Prestige Slide requirement without overbuilding, keep cumulative income moving, then reserve Research, money and enough space for the Wonder Attraction that triggers Diamond."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={[
            {
              id: "how-to-reach-five-stars",
              label: "How to reach five stars",
            },
            {
              id: "four-prestige-slide",
              label: "Two 4-Prestige slides",
            },
            {
              id: "what-unlocks-after-five-stars",
              label: "What unlocks after five stars",
            },
            {
              id: "one-million-requirement",
              label: "$1 million requirement",
            },
            {
              id: "unlock-wonder-attraction",
              label: "Unlock a Wonder Attraction",
            },
            {
              id: "wonder-attraction-space",
              label: "Reserve enough space",
            },
            {
              id: "when-to-tear-down",
              label: "When to tear down a pool",
            },
            {
              id: "diamond-park-trigger",
              label: "Diamond Park trigger",
            },
            {
              id: "diamond-not-unlocking",
              label: "Diamond not unlocking",
            },
            {
              id: "what-to-do-after-diamond",
              label: "What to do after Diamond",
            },
            {
              id: "final-takeaway",
              label: "My Prestige route",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/museum-guide",
              label: "Museum Quests & Theme Rewards",
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
              href: "/waterpark-simulator/achievements-guide",
              label: "All 71 Achievements",
            },
          ]}
        >
          <WaterparkSimulatorFiveStarDiamondPrestigeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}