import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RockBottomWalkthroughContent from "@/data/aliens-fireteam-elite-2/rock-bottom-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/rock-bottom-walkthrough`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Rock Bottom Walkthrough";

const metadataDescription =
  "Clear Power Problems, Running on Fumes, and Hive Mind with every terminal, breaker, valve, self-destruct console, Hive escape, and intel hold explained.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-power-plant-third-door-terminal.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-power-plant-pressure-valve.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-running-on-fumes-gas-valve.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-running-on-fumes-third-self-destruct-console.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-mission-4-3-hive-terminals.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-mission-4-3-destruction-command.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-rock-bottom-mission-4-3-cryopods-intel.webp`,
];

const toc = [
  {
    id: "rock-bottom-walkthrough-for-all-three-missions",
    label: "Rock Bottom overview",
  },
  {
    id: "mission-4-1-power-problems",
    label: "Power Problems",
  },
  {
    id: "mission-4-2-running-on-fumes",
    label: "Running on Fumes",
  },
  {
    id: "mission-4-3-hive-mind",
    label: "Hive Mind",
  },
  {
    id: "what-to-do-after-rock-bottom",
    label: "After Rock Bottom",
  },
];

const relatedLinks = [
  {
    href: "/aliens-fireteam-elite-2",
    label: "Aliens: Fireteam Elite 2 Guide Hub",
  },
  {
    href: "/aliens-fireteam-elite-2/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/boarding-party-walkthrough",
    label: "Boarding Party Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/ancient-anomaly-walkthrough",
    label: "Ancient Anomaly Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/achievements",
    label: "All 30 Achievements",
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
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Pressure valve objective during Power Problems in the Rock Bottom campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[1]],
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
          name: "Aliens: Fireteam Elite 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rock Bottom Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Rock Bottom Walkthrough",
      description:
        "A complete Rock Bottom campaign walkthrough covering Power Problems, Running on Fumes, and Hive Mind, including the three door terminals, two battery-room breakers, reactor pressure valve, Acidium gas valve, three self-destruct consoles, Hive destruction command, cryopod intel, decryption sequence, armored hybrids, and final extraction defense.",
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-08-26",
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
      about: {
        "@type": "VideoGame",
        name: "Aliens: Fireteam Elite 2",
      },
    },
  ],
};

export default function RockBottomWalkthroughPage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Rock Bottom Walkthrough: Power Problems, Running on Fumes & Hive Mind"
          description="My full route through the Rock Bottom campaign, including the reactor pressure valve, Acidium plumbing, Hive escape, cryopods, and the late intel sequence that continues after the Hive is sealed."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RockBottomWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}