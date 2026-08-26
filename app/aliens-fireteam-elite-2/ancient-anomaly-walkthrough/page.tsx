import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AncientAnomalyWalkthroughContent from "@/data/aliens-fireteam-elite-2/ancient-anomaly-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/ancient-anomaly-walkthrough`;

const primaryImageUrl =
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-3-hybrid-cryopods.webp`;

const imageUrls = [
  primaryImageUrl,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-1-turret-terminal.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-1-hybrid-lab.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-2-corrupted-intel-terminal.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-2-esther-access-intel.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-3-four-engineer-console.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-ancient-anomaly-mission-5-3-95-percent-casualty.webp`,
];

export const metadata: Metadata = {
  title: "Aliens Fireteam Elite 2: Ancient Anomaly Walkthrough",
  description:
    "Disable the quarry turrets, fix the corrupted intel route, activate four Engineer consoles, and survive Ancient Anomaly’s final hybrid attack.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Ancient Anomaly Walkthrough – Aliens: Fireteam Elite 2",
    description:
      "Complete all three Ancient Anomaly missions, from Dr. Pierce’s quarry lab to the Engineer ship’s four consoles and final hybrid defense.",
    siteName: "Whisper of the House",
    images: [
      {
        url: primaryImageUrl,
        width: 1600,
        height: 900,
        alt: "Engineer hybrid cryopods inside the ship during Ancient Anomaly Mission 5-3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancient Anomaly Walkthrough – Aliens Fireteam Elite 2",
    description:
      "Follow the turret terminals, corrupted intel, cryopod decryption, four Engineer consoles, and 95% casualty fight.",
    images: [primaryImageUrl],
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
          name: "Aliens: Fireteam Elite 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ancient Anomaly Walkthrough",
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
        "Aliens: Fireteam Elite 2 Ancient Anomaly Walkthrough",
      description:
        "A complete walkthrough for all three Ancient Anomaly missions in Aliens: Fireteam Elite 2, covering the quarry turret terminals, Dr. Pierce’s hybrid laboratory, the corrupted Engineer-ship intel route, Esther’s database record, the hybrid cryopods, all four Engineer consoles, and the final command-room defense.",
      image: imageUrls,
      inLanguage: "en",
      articleSection: "Game Walkthroughs",
      datePublished: "2026-08-26",
      dateModified: "2026-08-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Aliens: Fireteam Elite 2",
        },
        {
          "@type": "Thing",
          name: "Ancient Anomaly campaign",
        },
        {
          "@type": "Thing",
          name: "Engineer hybrids",
        },
        {
          "@type": "Thing",
          name: "The Story of the Quarry achievement",
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

const toc = [
  {
    id: "ancient-anomaly-walkthrough-for-all-three-missions",
    label: "Ancient Anomaly missions",
  },
  {
    id: "mission-5-1-find-dr-pierces-quarry-lab",
    label: "Mission 5-1: Quarry lab",
  },
  {
    id: "mission-5-2-search-the-engineer-ship",
    label: "Mission 5-2: Engineer ship",
  },
  {
    id: "mission-5-3-destroy-the-engineer-hybrids",
    label: "Mission 5-3: Destroy hybrids",
  },
  {
    id: "what-to-do-after-ancient-anomaly",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/aliens-fireteam-elite-2",
    label: "Aliens: Fireteam Elite 2 Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/walkthrough",
    label: "Complete Campaign Walkthrough & Mission Order",
  },
  {
    href: "/aliens-fireteam-elite-2/rock-bottom-walkthrough",
    label: "Previous: Rock Bottom Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/final-endeavor-walkthrough",
    label: "Next: Final Endeavor Walkthrough",
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
          title="Ancient Anomaly Walkthrough: Turrets, Intel & Hybrids"
          description="Clear all three Ancient Anomaly missions by shutting down the quarry turrets, following the Engineer ship’s intel trail, activating four consoles, and finishing the surviving hybrids."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AncientAnomalyWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}