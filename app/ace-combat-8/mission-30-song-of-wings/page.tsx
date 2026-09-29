import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8Mission30Content from "@/data/ace-combat-8/mission-30-song-of-wings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-30-song-of-wings`;

const metadataTitle =
  "Ace Combat 8 Mission 30 Walkthrough: Song of Wings";

const metadataDescription =
  "Beat Ace Combat 8 Mission 30 by protecting the Endurance, stopping laser UAV guidance, destroying the submarine's weapons, and surviving the final ram.";

const articleDescription =
  "Protect the Endurance through the Tonitra Spear attack, remove the submarine's VLS and underwater launch tube, then sink it before the final collision.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-30-laser-guidance-uavs.webp`,
  `${siteUrl}/images/ace-combat-8/mission-30-airship-laser-retarget-submarine.webp`,
  `${siteUrl}/images/ace-combat-8/mission-30-submarine-missile-launch-tube.webp`,
  `${siteUrl}/images/ace-combat-8/mission-30-submarine-ramming.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "protect-endurance",
    label: "Protect the Endurance",
  },
  {
    id: "redirect-tonitra-spear",
    label: "Redirect the Tonitra Spear",
  },
  {
    id: "dismantle-submarine",
    label: "Dismantle the submarine",
  },
  {
    id: "underwater-launch-tube",
    label: "Underwater launch tube",
  },
  {
    id: "final-ram",
    label: "Stop the final ram",
  },
  {
    id: "after-song-of-wings",
    label: "After Song of Wings",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8",
    label: "Ace Combat 8 Guide",
  },
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/mission-9-land-battleship-blockade",
    label: "Mission 9 Land Battleship",
  },
  {
    href: "/ace-combat-8/mission-11-maximum-payload",
    label: "Mission 11 Maximum Payload",
  },
  {
    href: "/ace-combat-8/mission-27-fatsia-ocean-fortress",
    label: "Mission 27 Fatsia",
  },
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
  },
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Ace Combat 8 Mission 30 laser-guidance UAVs targeting the Endurance",
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
          name: "Ace Combat 8 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mission 30: Song of Wings",
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
        "Ace Combat 8 Mission 30 Walkthrough: Song of Wings",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-29",
      dateModified: "2026-09-29",
      articleSection: "Ace Combat 8 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Ace Combat 8: Wings of Theve",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Mission 30",
        },
        {
          "@type": "Thing",
          name: "Song of Wings",
        },
        {
          "@type": "Thing",
          name: "Endurance",
        },
        {
          "@type": "Thing",
          name: "Tonitra Spear",
        },
        {
          "@type": "Thing",
          name: "Laser-guidance UAVs",
        },
        {
          "@type": "Thing",
          name: "Submarine VLS",
        },
        {
          "@type": "Thing",
          name: "Underwater missile launch tube",
        },
        {
          "@type": "Thing",
          name: "Submarine ramming attack",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Ace Combat 8 Mission 30 Walkthrough: Song of Wings"
          description="Protect the Endurance, take control of the Tonitra Spear guidance fight, dismantle the surfaced submarine, destroy its hidden launch tube, and stop the final ramming attack."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8Mission30Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}