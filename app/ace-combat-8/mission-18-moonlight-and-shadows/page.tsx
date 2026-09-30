import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Mission18MoonlightAndShadowsContent from "@/data/ace-combat-8/mission-18-moonlight-and-shadows.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-18-moonlight-and-shadows`;

const metadataTitle =
  "Ace Combat 8 Mission 18: Moonlight and Shadows";

const metadataDescription =
  "Clear Ace Combat 8 Mission 18 by crossing the Rainband, helping Queen Flight, destroying both rockets after launch, and stopping the falling wreckage.";

const articleDescription =
  "Cross the Rainband, survive the Shadow Squadron interruption, destroy both rockets after launch, and clear the falling wreckage before it hits the launch center.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-18-two-rockets-ceiling.webp`,
  `${siteUrl}/images/ace-combat-8/mission-18-falling-rocket-wreckage.webp`,
];

const heroImage =
  "/images/ace-combat-8/mission-18-two-rockets-ceiling.webp";

const toc = [
  {
    id: "cross-rainband",
    label: "Cross the Rainband",
  },
  {
    id: "shadow-squadron",
    label: "Help Queen Flight",
  },
  {
    id: "wait-for-launch",
    label: "Wait for the Rockets to Launch",
  },
  {
    id: "destroy-rockets",
    label: "Destroy Both Rockets",
  },
  {
    id: "destroy-wreckage",
    label: "Destroy the Falling Wreckage",
  },
  {
    id: "mission-18-order",
    label: "Mission 18 Order",
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
    href: "/ace-combat-8/mission-16-singer",
    label: "Mission 16: Singer",
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

export default function AceCombat8Mission18MoonlightAndShadowsPage() {
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
            name: "Mission 18: Moonlight and Shadows",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Ace Combat 8 Mission 18: Moonlight and Shadows Walkthrough",
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
          title="Ace Combat 8 Mission 18: Moonlight and Shadows Walkthrough"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Mission18MoonlightAndShadowsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}