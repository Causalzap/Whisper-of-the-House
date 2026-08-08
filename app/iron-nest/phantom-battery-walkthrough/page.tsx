import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PhantomBatteryContent from "@/data/iron-nest/phantom-battery-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/phantom-battery-walkthrough`;

const metadataTitle =
  "Iron Nest Phantom Battery Walkthrough: Mobile Battery & CBT";

const metadataDescription =
  "Beat Phantom Battery by restarting Iron Nest, recovering your position, using listening posts, gaining +90s CBT from spotters, and tracking a mobile battery.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-phantom-battery-listening-post-orders.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-the-gorge-engine-restart.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-phantom-battery-position-reports.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-phantom-battery-listening-post-intersection.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-phantom-battery-ap-required.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-phantom-battery-mobile-repositioning.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-phantom-battery-threat-neutral.webp`,
];

const toc = [
  {
    id: "phantom-battery-route",
    label: "Phantom Battery route",
  },
  {
    id: "restart-before-moving",
    label: "Restart the engine",
  },
  {
    id: "first-emergency-move",
    label: "First Emergency Move",
  },
  {
    id: "locate-iron-nest",
    label: "Relocate Iron Nest",
  },
  {
    id: "find-phantom-battery",
    label: "Find the battery",
  },
  {
    id: "first-battery-shot",
    label: "First battery shot",
  },
  {
    id: "enemy-spotters",
    label: "Enemy spotters +90s",
  },
  {
    id: "phantom-battery-moves",
    label: "Mobile battery",
  },
  {
    id: "when-to-wait-for-new-bearing",
    label: "When to wait",
  },
  {
    id: "off-map-position",
    label: "Off-map recovery",
  },
  {
    id: "final-phantom-battery-shot",
    label: "Final AP shot",
  },
  {
    id: "phantom-battery-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate in Iron Nest",
  },
  {
    href: "/iron-nest/blind-fire-walkthrough",
    label: "Blind Fire Walkthrough",
  },
  {
    href: "/iron-nest/final-harvest-walkthrough",
    label: "Final Harvest Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
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
    title:
      "Iron Nest Phantom Battery Walkthrough: Mobile Battery, CBT & Listening Posts",
    description:
      "Restart and relocate Iron Nest, rebuild your firing origin, triangulate the Phantom Battery from listening posts, use spotters for +90 seconds, and track the battery after it moves.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Phantom Battery orders showing listening posts unknown relocation and enemy spotter timer extensions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Phantom Battery Walkthrough",
    description:
      "Recover Iron Nest after Emergency Move, use listening posts, extend the CBT with enemy spotters, and destroy the mobile Phantom Battery.",
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
          name: "Iron Nest Guide",
          item: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Phantom Battery Walkthrough",
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
        "Iron Nest Phantom Battery Walkthrough: Emergency Move, Listening Posts, Mobile Battery, and CBT",
      description:
        "A player-focused walkthrough for Mission 13 Phantom Battery in Iron Nest. It explains how to restart the damaged Nest, execute the opening Emergency Move, recover the new firing origin with Position Reports, use three listening posts to locate the enemy battery, decide when to fire immediately and when to destroy enemy spotters for 90-second Counter-Battery Timer extensions, recognize when the Phantom Battery has repositioned, avoid wasting AP on a stale marker, recover from awkward relocation data, and rebuild both ends of the firing line for the final battery kill.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-08",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "Iron Nest Phantom Battery",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 13",
        },
        {
          "@type": "Thing",
          name: "Iron Nest listening posts",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Counter-Battery Timer",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Emergency Move",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Position Reports",
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
          title="Phantom Battery Walkthrough: Find the Mobile Battery and Survive the CBT"
          description="Restart and relocate Iron Nest, rebuild your own firing position, use listening-post bearings to find the enemy battery, and spend enemy spotters as 90-second timer extensions when you need more time."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PhantomBatteryContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}