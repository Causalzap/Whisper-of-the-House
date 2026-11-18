
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DungeonboundActOneContent from "@/data/dungeonbound/act-1.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dungeonbound`;
const pageUrl = `${hubUrl}/act-1`;

const metadataTitle =
  "Dungeonbound Act 1 Guide: How to Beat Floor 8";

const metadataDescription =
  "Beat Dungeonbound Climb Act 1 with a 10-Heart run, stronger equipment, smarter Gold spending, rival survival, and a successful Paladin Floor 8 clear.";

const articleTitle =
  "How Do You Beat Climb Act 1 in Dungeonbound?";

const articleDescription =
  "Survive Floors 1–8 with limited Hearts, improve your equipment and recovery, handle dangerous rivals, and defeat the final boss to unlock Act II.";

const imageUrls = [
  `${siteUrl}/images/dungeonbound/dungeonbound-act-one-mega-forge-build.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-act-one-clear-act-two-unlock.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-climb-poison-rival-loss.webp`,
];

const toc = [
  { id: "start-act-one", label: "Start Climb Act 1" },
  { id: "hearts", label: "How the 10 Hearts Work" },
  { id: "floors-one-two", label: "Floors 1–2: First Equipment" },
  { id: "floors-three-four", label: "Floors 3–4: Build & Routes" },
  { id: "floors-five-seven", label: "Floors 5–7: Stronger Rivals" },
  { id: "floor-eight", label: "Floor 8: Final Boss" },
  { id: "why-you-keep-losing", label: "Why Your Runs End" },
  { id: "battle-log", label: "Battle Log & Replay" },
  { id: "after-act-clear", label: "What Unlocks After Act 1" },
];

const relatedLinks = [
  {
    href: "/dungeonbound",
    label: "Beginner Guide: Controls & First Runs",
  },
  {
    href: "/dungeonbound/fusion-guide",
    label: "Fusion Guide: Better Equipment",
  },
  {
    href: "/dungeonbound/hero-unlocks",
    label: "Unlock Paladin & Other Heroes",
  },
  {
    href: "/dungeonbound/achievements",
    label: "Floor 8 & Hero Victory Achievements",
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: imageUrls[0],
        width: 1250,
        height: 922,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          name: "Dungeonbound",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Climb Act 1",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-18",
      image: imageUrls,
    },
  ],
};

export default function DungeonboundActOnePage() {
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
          gameTitle="Dungeonbound"
          gameHref="/dungeonbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DungeonboundActOneContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
