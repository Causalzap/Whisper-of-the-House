import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Mission16SingerContent from "@/data/ace-combat-8/mission-16-singer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-16-singer`;

const metadataTitle =
  "Ace Combat 8 Mission 16 Singer: Ships & UAVs";

const metadataDescription =
  "Clear Ace Combat 8 Mission 16 Singer by identifying the three disguised ships, avoiding civilian vessels, and stopping explosive UAVs before 40,000 ft.";

const articleDescription =
  "Identify all three disguised terrorist ships in Mission 16 Singer, avoid civilian vessels, then intercept the explosive UAVs before they reach 40,000 feet.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-16-disguised-ship-sun-emblem-three-cranes.webp`,
  `${siteUrl}/images/ace-combat-8/mission-16-currus-uav-launch.webp`,
];

const heroImage =
  "/images/ace-combat-8/mission-16-disguised-ship-sun-emblem-three-cranes.webp";

const toc = [
  {
    id: "identify-disguised-ships",
    label: "Identify the Disguised Ships",
  },
  {
    id: "avoid-civilian-ships",
    label: "Avoid Civilian Ships",
  },
  {
    id: "uav-timer",
    label: "Explosive UAV Timer",
  },
  {
    id: "stop-explosive-uavs",
    label: "Stop the Explosive UAVs",
  },
  {
    id: "currus",
    label: "Currus Assault Record",
  },
  {
    id: "mission-16-clear",
    label: "Finish Mission 16",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/walkthrough",
    label: "All Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/assault-records",
    label: "Assault Records",
  },
  {
    href: "/ace-combat-8/mission-18-moonlight-and-shadows",
    label: "Mission 18: Moonlight and Shadows",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function AceCombat8Mission16SingerPage() {
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
            name: "Ace Combat 8: Wings of Theve",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mission 16: Singer",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Ace Combat 8 Mission 16 Singer: How to Identify the Ships and Stop the UAVs",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-09-30",
        dateModified: "2026-09-30",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          title="Ace Combat 8 Mission 16 Singer: How to Identify the Ships and Stop the UAVs"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Mission16SingerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}